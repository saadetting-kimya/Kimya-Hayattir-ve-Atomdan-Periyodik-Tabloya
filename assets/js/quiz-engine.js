/* =========================================================
   AtomLab 9 — quiz-engine.js
   Bağlam temelli değerlendirme sorularını render eder,
   puanlar ve sonucu localStorage'a kaydeder (ilerleme takibi).
   ========================================================= */

const STORAGE_KEY = "atomlab9_progress";
const ERROR_KEY = "atomlab9_errors";

function saveWrongQuestion(moduleKey, questionIndex, q) {
  try {
    const errors =
      JSON.parse(localStorage.getItem(ERROR_KEY)) || {};

    if (!errors[moduleKey]) {
      errors[moduleKey] = {};
    }

    const questionKey = String(questionIndex);

    if (!errors[moduleKey][questionKey]) {
      errors[moduleKey][questionKey] = {
        questionIndex,
        text: q.text,
        context: q.context || "",
        correct: q.correct,
        explain: q.explain || "",
        wrongCount: 1
      };
    } else {
      errors[moduleKey][questionKey].wrongCount =
        (errors[moduleKey][questionKey].wrongCount || 0) + 1;
    }

    localStorage.setItem(
      ERROR_KEY,
      JSON.stringify(errors)
    );

  } catch (err) {
    console.error("Yanlış soru kaydedilemedi:", err);
  }
}

export function readProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
export function writeProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}
export function markModuleScore(moduleKey, score, total) {
  const p = readProgress();
  p[moduleKey] = { score, total, at: Date.now() };
  writeProgress(p);
}
export function markVisited(moduleKey) {
  const p = readProgress();
  p[moduleKey] = p[moduleKey] || { visited: true };
  p[moduleKey].visited = true;
  writeProgress(p);
}

export function renderQuiz(hostEl, questions, moduleKey) {

  if (!hostEl || !Array.isArray(questions)) return;

  hostEl.innerHTML = "";

  /* =====================================================
     AYARLAR
     ===================================================== */

  const INITIAL_COUNT = 5;
  const ERROR_KEY = "atomlab9_errors";

  /*
   * Havuzdan sadece 5 soru seçiyoruz.
   * Soruların tamamı quiz-data.js içinde kalmaya devam eder.
   */
  function getInitialQuestions() {

    const pool = [...questions];

    /*
     * Her açılışta farklı sorular gelsin.
     */
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, INITIAL_COUNT);
  }

  /* =====================================================
     YANLIŞ SORULARI OKU
     ===================================================== */

  function readErrors() {

    try {

      return JSON.parse(
        localStorage.getItem(ERROR_KEY)
      ) || {};

    } catch {

      return {};

    }
  }

  /* =====================================================
     YANLIŞ SORUYU KAYDET
     ===================================================== */

  function saveWrongQuestion(q, originalIndex) {

    const errors = readErrors();

    if (!errors[moduleKey]) {
      errors[moduleKey] = {};
    }

    /*
     * Sorunun benzersiz anahtarı.
     */
    const questionKey =
      `${moduleKey}_${originalIndex}`;

    if (!errors[moduleKey][questionKey]) {

      errors[moduleKey][questionKey] = {
        questionIndex: originalIndex,
        context: q.context || "",
        text: q.text || "",
        options: q.options || [],
        correct: q.correct,
        explain: q.explain || "",
        wrongCount: 1
      };

    } else {

      errors[moduleKey][questionKey].wrongCount++;

    }

    localStorage.setItem(
      ERROR_KEY,
      JSON.stringify(errors)
    );
  }

  /* =====================================================
     KELİMELERİ AYIKLA
     ===================================================== */

  function normalizeText(text) {

    return String(text || "")
      .toLowerCase()
      .replace(/[.,!?;:()"']/g, "")
      .split(/\s+/)
      .filter(word => word.length > 3);

  }

  /* =====================================================
     BENZER SORU BUL
     ===================================================== */

  function findSimilarQuestion(
    wrongQuestion,
    usedQuestions
  ) {

    const wrongWords = new Set(
      normalizeText(
        (wrongQuestion.context || "") +
        " " +
        (wrongQuestion.text || "")
      )
    );

    let candidates = questions.filter(q => {

      /*
       * Daha önce gösterilmiş soruları tekrar verme.
       */
      if (usedQuestions.has(q.__index)) {
        return false;
      }

      return true;

    });

    if (candidates.length === 0) {
      return null;
    }

    /*
     * Soruların kelime benzerliğini hesapla.
     */
    candidates = candidates.map(q => {

      const words = new Set(
        normalizeText(
          (q.context || "") +
          " " +
          (q.text || "")
        )
      );

      let score = 0;

      words.forEach(word => {

        if (wrongWords.has(word)) {
          score++;
        }

      });

      return {
        question: q,
        score
      };

    });

    /*
     * En benzer sorular üstte.
     */
    candidates.sort(
      (a, b) => b.score - a.score
    );

    /*
     * Aynı konudan birkaç soru varsa
     * bunlardan rastgele birini seç.
     */
    const bestScore =
      candidates[0].score;

    const best =
      candidates.filter(
        item => item.score === bestScore
      );

    const selected =
      best[
        Math.floor(Math.random() * best.length)
      ];

    return selected.question;
  }

  /* =====================================================
     BAŞLANGIÇTA SADECE 5 SORU
     ===================================================== */

  let activeQuestions =
    getInitialQuestions();

  /*
   * Gösterilmiş soruların indexleri.
   */
  const usedQuestions =
    new Set();

  activeQuestions.forEach(q => {

    /*
     * quiz-data içindeki gerçek indexi bul.
     */
    const index =
      questions.indexOf(q);

    q.__index = index;

    usedQuestions.add(index);

  });

  const state = {
    answered: 0,
    correct: 0
  };

  /* =====================================================
     ANA QUIZ ALANI
     ===================================================== */

  const wrap =
    document.createElement("div");

  wrap.className = "quiz";

  hostEl.appendChild(wrap);

  /* =====================================================
     ÖZET
     ===================================================== */

  const summary =
    document.createElement("div");

  summary.className =
    "quiz-summary";

  hostEl.appendChild(summary);

  /* =====================================================
     ÖZETİ GÜNCELLE
     ===================================================== */

  function updateSummary() {

    summary.innerHTML = `
      <div>
        <div class="small" style="color:#c7bfe6">
          İlerleme
        </div>

        <div class="score">
          ${state.answered}/${activeQuestions.length}
          yanıtlandı ·
          <span>${state.correct}</span>
          doğru
        </div>
      </div>

      ${
        state.answered === activeQuestions.length
          ?
        `<div class="badge-live" style="color:#7CE0A8">
          Modül tamamlandı
        </div>`
          :
        ""
      }
    `;

    if (
      state.answered === activeQuestions.length &&
      moduleKey
    ) {

      markModuleScore(
        moduleKey,
        state.correct,
        activeQuestions.length
      );

    }

  }

  /* =====================================================
     BENZER SORUYU GETİR
     ===================================================== */

  function replaceWithSimilar(
    card,
    wrongQuestion
  ) {

    const similar =
      findSimilarQuestion(
        wrongQuestion,
        usedQuestions
      );

    if (!similar) {

      card.querySelector(
        ".qfeedback"
      ).innerHTML += `
        <div class="similar-none">
          Bu konu için yeni soru kalmadı.
        </div>
      `;

      return;

    }

    /*
     * Yeni soruyu işaretle.
     */
    similar.__index =
      questions.indexOf(similar);

    usedQuestions.add(
      similar.__index
    );

    /*
     * Yanlış sorunun yerine
     * benzer soruyu koyuyoruz.
     *
     * Böylece ekranda yine sadece 5 soru var.
     */
    const newCard =
      createQuestionCard(
        similar,
        card.dataset.position
      );

    card.replaceWith(newCard);

  }

  /* =====================================================
     SORU KARTI OLUŞTUR
     ===================================================== */

  function createQuestionCard(
    q,
    position
  ) {

    const card =
      document.createElement("div");

    card.className =
      "qcard";

    card.dataset.position =
      position;

    card.dataset.questionIndex =
      q.__index;

    /* ---------------------------------------------------
       SORU BAŞLIĞI
       --------------------------------------------------- */

    card.innerHTML = `

      <div class="qhead">

        <span class="qn">
          SORU ${Number(position) + 1}/${INITIAL_COUNT}
        </span>

      </div>

      ${
        q.context
          ?
        `
          <div class="qcontext">
            ${q.context}
          </div>
        `
          :
        ""
      }

      <div class="qtext">
        ${q.text}
      </div>

      <div class="qopts"></div>

      <div class="qfeedback"></div>
    `;

    const optsEl =
      card.querySelector(".qopts");

    const fbEl =
      card.querySelector(".qfeedback");

    /* ---------------------------------------------------
       5 ŞIK
       --------------------------------------------------- */

    q.options.forEach(
      (opt, oi) => {

        const o =
          document.createElement("div");

        o.className =
          "qopt";

        o.innerHTML = `
          <span class="bullet">
            ${String.fromCharCode(65 + oi)}
          </span>

          <span>
            ${opt}
          </span>
        `;

        o.addEventListener(
          "click",
          () => {

            if (card.dataset.done) {
              return;
            }

            card.dataset.done = "1";

            const opts =
              [...optsEl.children];

            opts.forEach(
              (el, idx) => {

                el.classList.add(
                  "disabled"
                );

                if (
                  idx === q.correct
                ) {

                  el.classList.add(
                    "correct"
                  );

                }

              }
            );

            const isCorrect =
              oi === q.correct;

            /* -----------------------------------------
               DOĞRU
               ----------------------------------------- */

            if (isCorrect) {

              o.classList.add(
                "correct"
              );

              state.correct++;

              fbEl.classList.add(
                "show",
                "ok"
              );

              fbEl.innerHTML = `
                ✓ Doğru!

                <div class="q-explain">
                  ${q.explain || ""}
                </div>
              `;

            }

            /* -----------------------------------------
               YANLIŞ
               ----------------------------------------- */

            else {

              o.classList.add(
                "wrong"
              );

              saveWrongQuestion(
                q,
                q.__index
              );

              fbEl.classList.add(
                "show",
                "no"
              );

              fbEl.innerHTML = `

                <div>
                  ✕ Yanlış.
                </div>

                <div class="q-explain">
                  ${
                    q.explain || ""
                  }
                </div>

                <button
                  type="button"
                  class="btn similar-btn"
                >
                  🔄 Benzerini Çöz
                </button>

              `;

              const similarBtn =
                fbEl.querySelector(
                  ".similar-btn"
                );

              similarBtn.addEventListener(
                "click",
                () => {

                  replaceWithSimilar(
                    card,
                    q
                  );

                }
              );

            }

            state.answered++;

            updateSummary();

          }
        );

        optsEl.appendChild(o);

      }
    );

    return card;
  }

  /* =====================================================
     İLK 5 SORUYU EKRANA BAS
     ===================================================== */

  activeQuestions.forEach(
    (q, index) => {

      const card =
        createQuestionCard(
          q,
          index
        );

      wrap.appendChild(card);

    }
  );

  updateSummary();

}
state.answered++;
        if (isCorrect) state.correct++;
        fbEl.classList.add("show", isCorrect ? "ok" : "no");
        fbEl.textContent = (isCorrect ? "✓ Doğru — " : "✕ Tekrar düşün — ") + (q.explain || "");
        updateSummary();
      });
      optsEl.appendChild(o);
    });
    wrap.appendChild(card);
  });

  const summary = document.createElement("div");
  summary.className = "quiz-summary";
  wrap.appendChild(summary);

  function updateSummary() {
    summary.innerHTML = `
      <div>
        <div class="small" style="color:#c7bfe6">İlerleme</div>
        <div class="score">${state.answered}/${questions.length} yanıtlandı · <span>${state.correct}</span> doğru</div>
      </div>
      ${state.answered === questions.length ? `<div class="badge-live" style="color:#7CE0A8">Modül tamamlandı</div>` : ""}
    `;
    if (state.answered === questions.length && moduleKey) {
      markModuleScore(moduleKey, state.correct, questions.length);
    }
  }
  updateSummary();
}

/** Keşif günlüğü (yansıtma notu) — localStorage'a otomatik kaydeder */
export function bindJournal(textareaEl, key) {
  if (!textareaEl) return;
  const saveState = textareaEl.parentElement.querySelector(".save-state");
  const full = "atomlab9_journal_" + key;
  const saved = localStorage.getItem(full);
  if (saved) textareaEl.value = saved;
  let t;
  textareaEl.addEventListener("input", () => {
    clearTimeout(t);
    if (saveState) saveState.textContent = "";
    t = setTimeout(() => {
      localStorage.setItem(full, textareaEl.value);
      if (saveState) { saveState.textContent = "✓ Kaydedildi (bu tarayıcıda saklanır)"; }
    }, 500);
  });
}
