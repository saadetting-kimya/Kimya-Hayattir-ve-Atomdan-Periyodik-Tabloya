/* =========================================================
   AtomLab 9 — wrong-questions.js
   ÖĞRENCİNİN YANLIŞ YAPTIĞI SORULAR
   ========================================================= */

const ERROR_KEY = "atomlab9_errors";

/* ---------------------------------------------------------
   KAYITLI YANLIŞLARI OKU
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
   YANLIŞLARI EKRANA GETİR
   --------------------------------------------------------- */

export function renderWrongQuestions(hostEl) {

  if (!hostEl) return;

  hostEl.innerHTML = "";

  const errors = readErrors();

  const modules = Object.keys(errors);

  /* Hiç yanlış yoksa */

  if (modules.length === 0) {

    hostEl.innerHTML = `
      <div class="wrong-empty">

        <div class="wrong-empty-icon">
          🎯
        </div>

        <h3>Henüz yanlış yaptığın soru yok.</h3>

        <p>
          Testlerde zorlandığın sorular burada
          otomatik olarak görünecek.
        </p>

      </div>
    `;

    return;
  }

  const wrap =
    document.createElement("div");

  wrap.className =
    "wrong-questions-list";

  hostEl.appendChild(wrap);

  let totalWrong = 0;

  /* -------------------------------------------------------
     MODÜLLER
     ------------------------------------------------------- */

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
        <span>
          ${moduleKey}
        </span>

        <span class="wrong-count">
          ${questionKeys.length} soru
        </span>
      </div>
    `;

    /* -----------------------------------------------------
       SORULAR
       ----------------------------------------------------- */

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
            ${String.fromCharCode(65 + q.correct)}
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
      `;

      moduleBox.appendChild(card);

    });

    wrap.appendChild(moduleBox);

  });

  /* -------------------------------------------------------
     ÜST BİLGİ
     ------------------------------------------------------- */

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
