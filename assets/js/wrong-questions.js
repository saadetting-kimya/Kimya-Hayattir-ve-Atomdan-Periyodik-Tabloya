/* =========================================================
   AtomLab 9 — wrong-questions.js
   Yanlış Sorular + Benzerini Çöz
   ========================================================= */

const ERROR_KEY = "atomlab9_errors";

/* ---------------------------------------------------------
   YANLIŞLARI OKU
   --------------------------------------------------------- */

function readErrors() {
  try {
    return JSON.parse(
      localStorage.getItem(ERROR_KEY)
    ) || {};
  } catch {
    return {};
  }
}

/* ---------------------------------------------------------
   SORU HAVUZUNU BUL
   --------------------------------------------------------- */

async function loadQuestionPool() {
  try {
    const module = await import("./quiz-data.js?v=1");
    return module.QUIZ || {};
  } catch (err) {
    console.error("Soru havuzu yüklenemedi:", err);
    return {};
  }
}

/* ---------------------------------------------------------
   BENZER SORU SEÇ
   --------------------------------------------------------- */

function findSimilarQuestion(pool, moduleKey, wrongQuestion) {

  const questions = pool[moduleKey];

  if (!questions || !Array.isArray(questions)) {
    return null;
  }

  /*
     Yanlış sorunun aynısını tekrar göstermiyoruz.
     Öncelik aynı kazanım/context olan sorular.
  */

  let candidates = questions.filter(q => {

    if (q.text === wrongQuestion.text) {
      return false;
    }

    if (
      wrongQuestion.questionIndex !== undefined &&
      q.questionIndex === wrongQuestion.questionIndex
    ) {
      return false;
    }

    return true;
  });

  if (candidates.length === 0) {
    return null;
  }

  /*
     Havuzdan rastgele soru seç
  */

  const index =
    Math.floor(Math.random() * candidates.length);

  return candidates[index];
}

/* ---------------------------------------------------------
   BENZER SORUYU GÖSTER
   --------------------------------------------------------- */

function showSimilarQuestion(
  hostEl,
  moduleKey,
  wrongQuestion,
  pool
) {

  const q =
    findSimilarQuestion(
      pool,
      moduleKey,
      wrongQuestion
    );

  if (!q) {
    alert(
      "Bu konu için şu anda başka soru bulunamadı."
    );
    return;
  }

  hostEl.innerHTML = "";

  const card =
    document.createElement("div");

  card.className =
    "wrong-similar-card";

  card.innerHTML = `
    <div class="wrong-similar-head">
      <span>🧠 BENZER SORU</span>
      <span>${moduleKey}</span>
    </div>

    ${
      q.context
        ? `
          <div class="wrong-question-context">
            ${q.context}
          </div>
        `
        : ""
    }

    <div class="wrong-question-text">
      ${q.text}
    </div>

    <div class="wrong-similar-options"></div>

    <div class="wrong-similar-feedback"></div>
  `;

  const options =
    card.querySelector(
      ".wrong-similar-options"
    );

  const feedback =
    card.querySelector(
      ".wrong-similar-feedback"
    );

  q.options.forEach((option, index) => {

    const button =
      document.createElement("button");

    button.className =
      "wrong-similar-option";

    button.innerHTML = `
      <span>
        ${String.fromCharCode(65 + index)}
      </span>
      ${option}
    `;

    button.addEventListener(
      "click",
      () => {

        if (card.dataset.done) {
          return;
        }

        card.dataset.done = "1";

        const buttons =
          [...options.children];

        buttons.forEach((btn, i) => {

          btn.disabled = true;

          if (i === q.correct) {
            btn.classList.add("correct");
          }

        });

        if (index === q.correct) {

          button.classList.add("correct");

          feedback.className =
            "wrong-similar-feedback correct";

          feedback.innerHTML = `
            ✓ Doğru!

            <div>
              ${q.explain || ""}
            </div>

            <button
              class="btn primary"
              id="next-similar-question">
              Başka Bir Benzer Soru Çöz →
            </button>
          `;

          document
            .getElementById(
              "next-similar-question"
            )
            .addEventListener(
              "click",
              () => {

                showSimilarQuestion(
                  hostEl,
                  moduleKey,
                  wrongQuestion,
                  pool
                );

              }
            );

        } else {

          button.classList.add("wrong");

          feedback.className =
            "wrong-similar-feedback wrong";

          feedback.innerHTML = `
            ✕ Yanlış.

            <div>
              ${q.explain || ""}
            </div>

            <button
              class="btn primary"
              id="next-similar-question">
              Yeni Bir Benzer Soru →
            </button>
          `;

          document
            .getElementById(
              "next-similar-question"
            )
            .addEventListener(
              "click",
              () => {

                showSimilarQuestion(
                  hostEl,
                  moduleKey,
                  wrongQuestion,
                  pool
                );

              }
            );
        }

      }
    );

    options.appendChild(button);

  });

  hostEl.appendChild(card);
}

/* ---------------------------------------------------------
   YANLIŞLARI RENDER ET
   --------------------------------------------------------- */

export async function renderWrongQuestions(hostEl) {

  if (!hostEl) return;

  hostEl.innerHTML = "";

  const errors = readErrors();

  const modules =
    Object.keys(errors);

  if (modules.length === 0) {

    hostEl.innerHTML = `
      <div class="wrong-empty">

        <div class="wrong-empty-icon">
          🎯
        </div>

        <h3>
          Henüz yanlış yaptığın soru yok.
        </h3>

        <p>
          Testlerde zorlandığın sorular burada
          otomatik olarak görünecek.
        </p>

      </div>
    `;

    return;
  }

  const pool =
    await loadQuestionPool();

  const wrap =
    document.createElement("div");

  wrap.className =
    "wrong-questions-list";

  hostEl.appendChild(wrap);

  let totalWrong = 0;

  modules.forEach(moduleKey => {

    const questions =
      errors[moduleKey];

    const questionKeys =
      Object.keys(questions);

    if (questionKeys.length === 0) {
      return;
    }

    totalWrong +=
      questionKeys.length;

    const moduleBox =
      document.createElement("section");

    moduleBox.className =
      "wrong-module";

    moduleBox.innerHTML = `
      <div class="wrong-module-title">
        <span>${moduleKey}</span>

        <span class="wrong-count">
          ${questionKeys.length} soru
        </span>
      </div>
    `;

    questionKeys.forEach(key => {

      const q =
        questions[key];

      const card =
        document.createElement("article");

      card.className =
        "wrong-question-card";

      card.innerHTML = `

        <div class="wrong-question-number">
          SORU ${q.questionIndex + 1}
        </div>

        ${
          q.context
            ? `
              <div class="wrong-question-context">
                ${q.context}
              </div>
            `
            : ""
        }

        <div class="wrong-question-text">
          ${q.text}
        </div>

        <div class="wrong-question-answer">
          <strong>
            Doğru cevap:
            ${String.fromCharCode(
              65 + q.correct
            )}
          </strong>
        </div>

        <div class="wrong-question-explain">
          ${q.explain || ""}
        </div>

        <div class="wrong-question-meta">

          Bu soruyu
          <strong>${q.wrongCount}</strong>
          kez yanlış yaptın.

        </div>

        <button
          class="btn primary similar-btn">
          🧠 Benzerini Çöz
        </button>

        <div class="similar-question-host"></div>
      `;

      const button =
        card.querySelector(
          ".similar-btn"
        );

      const similarHost =
        card.querySelector(
          ".similar-question-host"
        );

      button.addEventListener(
        "click",
        () => {

          button.style.display =
            "none";

          showSimilarQuestion(
            similarHost,
            moduleKey,
            q,
            pool
          );

        }
      );

      moduleBox.appendChild(card);

    });

    wrap.appendChild(moduleBox);

  });

  const info =
    document.createElement("div");

  info.className =
    "wrong-summary";

  info.innerHTML = `
    <div class="wrong-summary-title">
      🧠 Yanlışlarımdan Öğreniyorum
    </div>

    <div class="wrong-summary-text">
      Şu anda
      <strong>${totalWrong}</strong>
      soruyu tekrar çalışman gerekiyor.
    </div>
  `;

  hostEl.insertBefore(
    info,
    wrap
  );
}
