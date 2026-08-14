/* =========================================================
   AtomLab 9 — quiz-engine.js
   Quiz motoru
   - Her modülde 5 soru gösterir
   - 5 seçeneklidir
   - Yanlış soruları kaydeder
   - Benzer soru getirir
   - İlerlemeyi kaydeder
   ========================================================= */

const STORAGE_KEY = "atomlab9_progress";
const ERROR_KEY = "atomlab9_errors";

/* =========================================================
   İLERLEME
   ========================================================= */

export function readProgress() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ) || {};
  } catch {
    return {};
  }
}

export function writeProgress(p) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(p)
  );
}

export function markModuleScore(
  moduleKey,
  score,
  total
) {
  const p = readProgress();

  p[moduleKey] = {
    score,
    total,
    at: Date.now()
  };

  writeProgress(p);
}

export function markVisited(moduleKey) {
  const p = readProgress();

  p[moduleKey] =
    p[moduleKey] || {};

  p[moduleKey].visited = true;

  writeProgress(p);
}

/* =========================================================
   YANLIŞ SORULARI OKU
   ========================================================= */

function readErrors() {
  try {
    return JSON.parse(
      localStorage.getItem(ERROR_KEY)
    ) || {};
  } catch {
    return {};
  }
}

/* =========================================================
   YANLIŞ SORUYU KAYDET
   ========================================================= */

function saveWrongQuestion(
  moduleKey,
  q,
  questionIndex
) {
  try {

    const errors =
      readErrors();

    if (!errors[moduleKey]) {
      errors[moduleKey] = {};
    }

    const key =
      `${moduleKey}_${questionIndex}`;

    if (!errors[moduleKey][key]) {

      errors[moduleKey][key] = {
        questionIndex,
        context: q.context || "",
        text: q.text || "",
        options: q.options || [],
        correct: q.correct,
        explain: q.explain || "",
        wrongCount: 1
      };

    } else {

      errors[moduleKey][key].wrongCount =
        (errors[moduleKey][key].wrongCount || 0) + 1;

    }

    localStorage.setItem(
      ERROR_KEY,
      JSON.stringify(errors)
    );

  } catch (err) {

    console.error(
      "Yanlış soru kaydedilemedi:",
      err
    );

  }
}

/* =========================================================
   METİN NORMALİZE
   ========================================================= */

function normalizeText(text) {

  return String(text || "")
    .toLowerCase()
    .replace(/[.,!?;:()"']/g, "")
    .split(/\s+/)
    .filter(word => word.length > 3);

}

/* =========================================================
   BENZER SORU BUL
   ========================================================= */

function findSimilarQuestion(wrongQuestion, usedQuestions) {

  const wrongWords = new Set(
    normalizeText(
      (wrongQuestion.context || "") +
      " " +
      (wrongQuestion.text || "")
    )
  );

  /*
   * Önce daha önce hiç gösterilmemiş soruları bul.
   */
  let candidates = questions.filter(q => {

    const index = questions.indexOf(q);

    // Yanlış yapılan sorunun kendisini tekrar verme
    if (q === wrongQuestion) return false;

    // Daha önce gösterilmiş soruları tekrar verme
    if (usedQuestions.has(index)) return false;

    return true;
  });

  /*
   * Hiç kullanılmamış soru varsa,
   * bunların içinden en benzer olanı seç.
   */
  if (candidates.length > 0) {

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

      /*
       * Aynı context'e ekstra puan.
       */
      if (
        q.context &&
        wrongQuestion.context &&
        q.context === wrongQuestion.context
      ) {
        score += 10;
      }

      return {
        question: q,
        score
      };
    });

    candidates.sort((a, b) => b.score - a.score);

    /*
     * En yüksek benzerlik puanına sahip sorular
     * arasından rastgele seç.
     */
    const bestScore = candidates[0].score;

    const best = candidates.filter(
      item => item.score === bestScore
    );

    const selected =
      best[Math.floor(Math.random() * best.length)];

    return selected.question;
  }

  /*
   * Buraya geldiysek havuzdaki bütün sorular
   * daha önce kullanılmış demektir.
   *
   * Yanlış sorunun kendisi hariç,
   * havuzdaki en benzer soruyu bul.
   *
   * Böylece uygulama hiçbir zaman gereksiz yere
   * "başka soru yok" demeyecek.
   */
  let fallback = questions
    .filter(q => q !== wrongQuestion)
    .map(q => {

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

      if (
        q.context &&
        wrongQuestion.context &&
        q.context === wrongQuestion.context
      ) {
        score += 10;
      }

      return {
        question: q,
        score
      };
    });

  if (fallback.length === 0) {
    return null;
  }

  fallback.sort((a, b) => b.score - a.score);

  return fallback[0].question;
}

/* =========================================================
   QUIZ
   ========================================================= */

export function renderQuiz(
  hostEl,
  questions,
  moduleKey
) {

  if (
    !hostEl ||
    !Array.isArray(questions) ||
    questions.length === 0
  ) {

    if (hostEl) {

      hostEl.innerHTML = `
        <div class="quiz-empty">
          Bağlam temelli soru bulunamadı.
        </div>
      `;

    }

    return;
  }

  hostEl.innerHTML = "";

  /* -------------------------------------------------------
     AYAR
     ------------------------------------------------------- */

  const QUESTION_COUNT = 5;

  /* -------------------------------------------------------
     SORULARI KARIŞTIR
     ------------------------------------------------------- */

  function shuffle(array) {

    const arr =
      [...array];

    for (
      let i = arr.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );

      [
        arr[i],
        arr[j]
      ] =
      [
        arr[j],
        arr[i]
      ];

    }

    return arr;
  }

  /* -------------------------------------------------------
     İLK 5 SORU
     ------------------------------------------------------- */

  let activeQuestions =
    shuffle(questions)
      .slice(
        0,
        Math.min(
          QUESTION_COUNT,
          questions.length
        )
      );

  /* -------------------------------------------------------
     KULLANILAN SORULAR
     ------------------------------------------------------- */

  const usedQuestions =
    new Set();

  activeQuestions.forEach(q => {

    usedQuestions.add(
      questions.indexOf(q)
    );

  });

  /* -------------------------------------------------------
     DURUM
     ------------------------------------------------------- */

  const state = {
    answered: 0,
    correct: 0
  };

  /* -------------------------------------------------------
     ANA ALAN
     ------------------------------------------------------- */

  const wrap =
    document.createElement("div");

  wrap.className =
    "quiz";

  hostEl.appendChild(wrap);

  /* -------------------------------------------------------
     ÖZET
     ------------------------------------------------------- */

  const summary =
    document.createElement("div");

  summary.className =
    "quiz-summary";

  hostEl.appendChild(summary);

  /* -------------------------------------------------------
     ÖZET GÜNCELLE
     ------------------------------------------------------- */

  function updateSummary() {

    summary.innerHTML = `

      <div>

        <div
          class="small"
          style="color:#c7bfe6"
        >
          İlerleme
        </div>

        <div class="score">

          ${state.answered}/${QUESTION_COUNT}
          yanıtlandı ·

          <span>
            ${state.correct}
          </span>

          doğru

        </div>

      </div>

      ${
        state.answered >= QUESTION_COUNT
          ?

        `
          <div
            class="badge-live"
            style="color:#7CE0A8"
          >
            Modül tamamlandı
          </div>
        `

          :

        ""
      }

    `;

    if (
      state.answered >= QUESTION_COUNT &&
      moduleKey
    ) {

      markModuleScore(
        moduleKey,
        state.correct,
        QUESTION_COUNT
      );

    }

  }

  /* -------------------------------------------------------
     BENZER SORUYU GETİR
     ------------------------------------------------------- */

  function replaceWithSimilar(
    card,
    wrongQuestion
  ) {

    const similar =
      findSimilarQuestion(
        wrongQuestion,
        questions,
        usedQuestions
      );

   if (!similar) {

  card.querySelector(
    ".qfeedback"
  ).innerHTML += `
    <div class="similar-none">
      Bu modülün soru havuzunda yeni soru kalmadı.
    </div>
  `;

  return;
}

    const similarIndex =
      questions.indexOf(
        similar
      );

    usedQuestions.add(
      similarIndex
    );

    const position =
      Number(
        card.dataset.position
      );

    /*
     * Eski sorunun yerine
     * yeni soruyu koy.
     */

    activeQuestions[position] =
      similar;

    const newCard =
      createQuestionCard(
        similar,
        position
      );

    card.replaceWith(
      newCard
    );

  }

  /* -------------------------------------------------------
     SORU KARTI
     ------------------------------------------------------- */

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

    /* -----------------------------------------------------
       SORU BAŞLIĞI
       ----------------------------------------------------- */

    card.innerHTML = `

      <div class="qhead">

        <span class="qn">

          SORU ${position + 1}/${QUESTION_COUNT}

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
      card.querySelector(
        ".qopts"
      );

    const feedbackEl =
      card.querySelector(
        ".qfeedback"
      );

    /* -----------------------------------------------------
       ŞIKLAR
       ----------------------------------------------------- */

    q.options.forEach(
      (option, optionIndex) => {

        const optionEl =
          document.createElement(
            "div"
          );

        optionEl.className =
          "qopt";

        optionEl.innerHTML = `

          <span class="bullet">

            ${String.fromCharCode(
              65 + optionIndex
            )}

          </span>

          <span>

            ${option}

          </span>

        `;

        optionEl.addEventListener(
          "click",
          () => {

            if (
              card.dataset.done
            ) {

              return;

            }

            card.dataset.done =
              "1";

            /* ---------------------------------------------
               TÜM ŞIKLARI KİLİTLE
               --------------------------------------------- */

            const allOptions =
              [
                ...optsEl.children
              ];

            allOptions.forEach(
              (el, index) => {

                el.classList.add(
                  "disabled"
                );

                if (
                  index === q.correct
                ) {

                  el.classList.add(
                    "correct"
                  );

                }

              }
            );

            const isCorrect =
              optionIndex === q.correct;

            /* ---------------------------------------------
               DOĞRU
               --------------------------------------------- */

            if (isCorrect) {

              optionEl.classList.add(
                "correct"
              );

              state.correct++;

              feedbackEl.classList.add(
                "show",
                "ok"
              );

              feedbackEl.innerHTML = `

                <div>

                  ✓ Doğru!

                </div>

                <div class="q-explain">

                  ${q.explain || ""}

                </div>

              `;

            }

            /* ---------------------------------------------
               YANLIŞ
               --------------------------------------------- */

            else {

              optionEl.classList.add(
                "wrong"
              );

              saveWrongQuestion(
                moduleKey,
                q,
                questions.indexOf(q)
              );

              feedbackEl.classList.add(
                "show",
                "no"
              );

              feedbackEl.innerHTML = `

                <div>

                  ✕ Yanlış.

                </div>

                <div class="q-explain">

                  ${q.explain || ""}

                </div>

                <button
                  type="button"
                  class="btn similar-btn"
                >

                  🔄 Benzerini Çöz

                </button>

              `;

              const similarButton =
                feedbackEl.querySelector(
                  ".similar-btn"
                );

              similarButton.addEventListener(
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

        optsEl.appendChild(
          optionEl
        );

      }
    );

    return card;
  }

  /* -------------------------------------------------------
     İLK SORULARI OLUŞTUR
     ------------------------------------------------------- */

  activeQuestions.forEach(
    (question, position) => {

      const card =
        createQuestionCard(
          question,
          position
        );

      wrap.appendChild(
        card
      );

    }
  );

  updateSummary();

}

/* =========================================================
   KEŞİF GÜNLÜĞÜ
   ========================================================= */

export function bindJournal(
  textareaEl,
  key
) {

  if (!textareaEl) {
    return;
  }

  const saveState =
    textareaEl.parentElement
      ?.querySelector(
        ".save-state"
      );

  const fullKey =
    "atomlab9_journal_" +
    key;

  const saved =
    localStorage.getItem(
      fullKey
    );

  if (saved) {
    textareaEl.value =
      saved;
  }

  let timer;

  textareaEl.addEventListener(
    "input",
    () => {

      clearTimeout(timer);

      if (saveState) {
        saveState.textContent =
          "";
      }

      timer =
        setTimeout(
          () => {

            localStorage.setItem(
              fullKey,
              textareaEl.value
            );

            if (saveState) {

              saveState.textContent =
                "✓ Kaydedildi (bu tarayıcıda saklanır)";

            }

          },
          500
        );

    }
  );

}
