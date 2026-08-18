#!/usr/bin/env node
/* =========================================================
   verify-quiz-data.mjs — Soru bankası doğrulama betiği (ŞABLON)
   ---------------------------------------------------------
   Her yeni ünite yazdıktan sonra bunu çalıştırın:

     node scripts/verify-quiz-data.mjs assets/js/quiz-data.js

   Yol argümanı verilmezse ../assets/js/quiz-data.js varsayılır.
   Kontrol ettikleri (bkz. docs/ICERIK-URETIM-REHBERI.md):
     - Her modülde soru sayısı (varsayılan hedef: 50, --count ile değiştirin)
     - Zorluk dağılımı (kolay/orta/zor)
     - Tekrar eden soru kökü (text alanı, case-insensitive)
     - options.length === 5, correct 0-4 arası, şıklar içinde tekrar yok
     - Doğru cevap dağılımı A-E arası dengeli mi (10'ar civarı) VE
       gerçekten karışık mı (bloklar hâlinde art arda gelmiyor mu —
       bkz. "tahmin edilebilir cevap anahtarı" hatası, README'de anlatılan
       gerçek bir olay)
     - Kişisel isim / "öğrenci"-"kişi" kalıbı taraması (REHBER kural 5)
   ========================================================= */

import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const args = process.argv.slice(2);
const filePathArg = args.find(a => !a.startsWith("--")) || "assets/js/quiz-data.js";
const targetCount = Number((args.find(a => a.startsWith("--count=")) || "").split("=")[1]) || 50;

// REHBER kural 5: soru köklerinde kişisel isim kullanılmamalı; ayrıca
// "bir öğrenci ... yapıyor" / "bir kişi ... yapıyor" kalıbına bağımlı
// kalınmamalı. Kendi dilinize/isim listenize göre genişletin.
const FORBIDDEN_NAME_TOKENS = [
  "Ayşe", "Mehmet", "Elif", "Can", "Zeynep", "Emre", "Deniz", "Selin",
  "Burak", "Ali", "Merve", "Kerem", "Aslı", "Onur", "Buse",
  "öğrenci", "kişi"
];

// Türkçe harfleri "kelime karakteri" sayan, tam kelime eşleşmesi arayan yardımcı
// (basit .includes() "metali" içindeki "ali" gibi sahte eşleşmeler üretiyordu).
function hasWholeWord(haystack, needle) {
  const esc = needle.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(^|[^a-zçğıöşü])${esc}([^a-zçğıöşü]|$)`, "i");
  return re.test(haystack);
}

const absPath = path.resolve(process.cwd(), filePathArg);
const mod = await import(pathToFileURL(absPath).href);
const QUIZ = mod.QUIZ;

if (!QUIZ) {
  console.error(`HATA: ${absPath} dosyasında "QUIZ" adlı bir export bulunamadı.`);
  process.exit(1);
}

let totalIssues = 0;

for (const key of Object.keys(QUIZ)) {
  const arr = QUIZ[key];
  console.log(`\n=== ${key} ===`);
  console.log("count:", arr.length, arr.length === targetCount ? "OK" : `BEKLENEN ${targetCount}`);

  const diffCounts = {};
  const dist = [0, 0, 0, 0, 0];
  const textSet = new Set();
  const dupTexts = [];
  const nameHits = [];
  let badOptions = 0;
  let badCorrect = 0;
  let dupOptionsWithin = 0;

  arr.forEach((q, i) => {
    diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;

    if (!q.options || q.options.length !== 5) {
      badOptions++;
      console.log(`  BAD OPTIONS LEN @${i}:`, q.options ? q.options.length : null);
    } else {
      const optSet = new Set(q.options.map(o => o.toLowerCase().trim()));
      if (optSet.size !== q.options.length) {
        dupOptionsWithin++;
        console.log(`  DUP OPTIONS WITHIN QUESTION @${i}`);
      }
    }

    if (q.correct === undefined || q.correct < 0 || q.correct > 4) {
      badCorrect++;
      console.log(`  BAD CORRECT @${i}:`, q.correct);
    } else {
      dist[q.correct]++;
    }

    // Dedup anahtarı: yalnızca "text" değil, statements/checklist/matchPairs/dialogue/context
    // içeriğini de ekliyoruz — yeni formatlarda (I-II-III, D/Y, eşleştirme) aynı kalıp
    // kapanış cümlesi ("Yukarıdaki ifadelerden hangileri doğrudur?" vb.) FARKLI içerikle
    // kasıtlı olarak tekrar kullanılır; bu durum gerçek bir kopya değildir.
    const extra = [
      q.context,
      Array.isArray(q.statements) ? q.statements.join("|") : "",
      Array.isArray(q.checklist) ? q.checklist.join("|") : "",
      q.matchPairs ? JSON.stringify(q.matchPairs) : "",
      Array.isArray(q.dialogue) ? q.dialogue.map(d => d.text).join("|") : ""
    ].join(" ");
    const norm = ((q.text || "") + " " + extra).toLowerCase().trim();
    if (textSet.has(norm)) dupTexts.push({ i, text: q.text });
    textSet.add(norm);

    const combined = (q.context || "") + " " + (q.text || "");
    // "dialogue" formatındaki sorular kasıtlı olarak "Öğrenci A/B/C" gibi
    // etiketler ve "öğrencinin görüşü" gibi ifadeler kullanır — bu, REHBER'in
    // yasakladığı "bir öğrenci ... yapıyor" tek-anlatıcı tembelliğinden farklı,
    // kavram yanılgısı ayıklamaya yönelik meşru bir format; bu ikisini
    // istisna tutuyoruz.
    const isDialogue = Array.isArray(q.dialogue) && q.dialogue.length > 0;
    FORBIDDEN_NAME_TOKENS.forEach(tok => {
      if (isDialogue && (tok === "öğrenci" || tok === "kişi")) return;
      if (hasWholeWord(combined, tok)) {
        nameHits.push({ i, tok, text: (q.text || "").slice(0, 60) });
      }
    });
  });

  console.log("difficulty:", diffCounts);
  console.log("dist A-E:", dist);
  console.log("dup texts:", dupTexts.length);
  dupTexts.forEach(d => console.log(`  DUP @${d.i}:`, d.text));

  // Dengeli AMA aynı zamanda gerçekten karışık mı? Ardışık 10'luk
  // bloklar hâlinde aynı harfe düşmüş mü diye basit bir kontrol:
  // ilk targetCount/5 soruyu incele, hepsi aynı correct değerine
  // sahipse bu "blok" örüntüsünün bir belirtisidir.
  const blockSize = Math.floor(targetCount / 5) || 10;
  let blockyWarning = false;
  for (let b = 0; b + blockSize <= arr.length; b += blockSize) {
    const slice = arr.slice(b, b + blockSize).map(q => q.correct);
    if (slice.every(c => c === slice[0])) blockyWarning = true;
  }
  if (blockyWarning) {
    console.log("  ⚠️  UYARI: cevap anahtarı bloklar hâlinde aynı harfe düşüyor gibi görünüyor (tahmin edilebilir örüntü riski) — rastgele karıştırdığınızdan emin olun.");
  }

  console.log("name/crutch hits:", nameHits.length);
  nameHits.forEach(h => console.log(`  NAME @${h.i} (${h.tok}):`, h.text));

  const issues = (arr.length !== targetCount ? 1 : 0) + badOptions + badCorrect +
    dupOptionsWithin + dupTexts.length + nameHits.length + (blockyWarning ? 1 : 0);
  totalIssues += issues;
  console.log(issues === 0 ? "✅ TEMİZ" : `❌ ${issues} sorun bulundu`);
}

console.log(`\n${totalIssues === 0 ? "✅ TÜM MODÜLLER TEMİZ" : `❌ TOPLAM ${totalIssues} SORUN — yukarıdaki ayrıntılara bakın`}`);
process.exit(totalIssues === 0 ? 0 : 1);
