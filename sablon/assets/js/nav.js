/* =========================================================
   [SİTE ADI] — nav.js
   Paylaşılan üst menüyü enjekte eder ve aktif sayfayı işaretler.
   ========================================================= */
import { readProgress } from "./quiz-engine.js?v=2";

// Sayfa "moduller/" içindeyse "../" ile köke çık, sitede değilse dosya adını doğrudan kullan.
const inModules = location.pathname.includes("/moduller/");
function link(path) {
  if (!inModules) return path;
  return path.startsWith("moduller/") ? path.slice("moduller/".length) : "../" + path;
}

// ============================================================
// YENİ BİR KONUYA UYARLARKEN: Bu diziyi ünitelerinize göre
// güncelleyin. Her satırdaki `key`, quiz-data.js'teki QUIZ
// nesnesinin anahtarıyla (örn. QUIZ.gunluk) birebir eşleşmelidir.
// ============================================================
const LINKS = [
  { href: link("index.html"), label: "Ana Sayfa", key: "home", num: "" },
  { href: link("moduller/00-ornek-modul.html"), label: "Örnek Ünite", key: "ornek", num: "1" },
  // { href: link("moduller/02-...html"), label: "İkinci Ünite", key: "ikinci", num: "2" },
  { href: link("yanlislarim.html"), label: "❌ Yanlışlarım", key: "wrong", num: "" },
  { href: link("Ders%20Defteri.pdf"), label: "📘 Ders Defteri", key: "defter", num: "" },
];

export function mountNav(activeKey) {
  const host = document.getElementById("nav-root");
  if (!host) return;
  const progress = readProgress();

  host.innerHTML = `
    <nav class="topnav">
      <div class="topnav-inner">
        <a class="brand" href="${link("index.html")}">
          <span class="brand-badge"></span>
          <span>[SİTE ADI]</span>
        </a>
        <div class="navlinks">
          ${LINKS.map(l => {
            const done = progress[l.key] && (progress[l.key].visited || progress[l.key].score !== undefined);
            return `<a href="${l.href}" class="${l.key === activeKey ? "active" : ""}">
              ${l.num ? `<span class="num">${l.num}</span>` : ""}${l.label}${done && l.key !== "home" && l.key !== "defter" ? " ✓" : ""}
            </a>`;
          }).join("")}
        </div>
      </div>
    </nav>
  `;
}

export function mountFooter() {
  const host = document.getElementById("footer-root");
  if (!host) return;
  host.innerHTML = `
    <footer>
      <div class="container">
        <p style="margin-bottom:6px"><strong style="color:var(--ink)">[SİTE ADI]</strong> — [KISA AÇIKLAMA: hangi ders/sınıf/tema için hazırlandığı].</p>
        <p class="mt-0">İçerik [KAZANIM KODU ARALIĞI] kazanımlarıyla sınırlıdır: [üniteleri kısaca listele].</p>
      </div>
    </footer>
  `;
}
