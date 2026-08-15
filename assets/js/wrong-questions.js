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
    const module = await import("./quiz-data.js?v=4");
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
/* =========================================================
   ATOMLAB 9 — ÖĞRENCİ PDF ANALİZ RAPORU
   ========================================================= */

const REPORT_PROGRESS_KEY = "atomlab9_progress";
const REPORT_ERROR_KEY = "atomlab9_errors";
const REPORT_LEARNING_KEY = "atomlab9_learning";
const REPORT_HISTORY_KEY = "atomlab9_learning_history";


/* =========================================================
   YARDIMCI
   ========================================================= */

function reportSafeParse(key, fallback) {

  try {

    const raw =
      localStorage.getItem(key);

    if (!raw) {
      return fallback;
    }

    return JSON.parse(raw) ?? fallback;

  } catch (error) {

    console.warn(
      "Rapor verisi okunamadı:",
      key,
      error
    );

    return fallback;

  }

}


function reportEscape(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   MODÜL ADLARI
   ========================================================= */

const REPORT_MODULE_NAMES = {

  gunluk:
    "Kimya Hayattır",

  disiplin:
    "Kimya Disiplinleri",

  kariyer:
    "Kimya ile İlgili Kariyerler",

  guvenlik:
    "Kimya Laboratuvarında Güvenlik",

  teori:
    "Atom Teorileri",

  orbital:
    "Atom Orbitalleri",

  yerBulma:
    "Elektronların Atomdaki Yeri",

  ozellikler:
    "Periyodik Özellikler"

};


function getReportModuleName(key) {

  return (
    REPORT_MODULE_NAMES[key] ||
    key ||
    "Bilinmeyen Modül"
  );

}


/* =========================================================
   ÖĞRENME DURUMU
   ========================================================= */

function getReportStatus(
  correct,
  attempts
) {

  if (!attempts) {

    return {
      text: "Henüz ölçülmedi",
      className: "report-status-new"
    };

  }


  const percentage =
    Math.round(
      (correct / attempts) * 100
    );


  if (attempts < 2) {

    return {
      text: "İlk ölçüm",
      className: "report-status-new"
    };

  }


  if (percentage >= 80) {

    return {
      text: "Ulaştı",
      className: "report-status-good"
    };

  }


  if (percentage >= 60) {

    return {
      text: "Gelişiyor",
      className: "report-status-mid"
    };

  }


  return {
    text: "Desteğe ihtiyaç var",
    className: "report-status-low"
  };

}


/* =========================================================
   TARİH
   ========================================================= */

function getReportDate() {

  try {

    return new Intl.DateTimeFormat(
      "tr-TR",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    ).format(
      new Date()
    );

  } catch {

    return new Date()
      .toLocaleString("tr-TR");

  }

}


/* =========================================================
   GENEL İSTATİSTİKLER
   ========================================================= */

function calculateGeneralReportStats(
  learning
) {

  let attempts = 0;
  let correct = 0;
  let wrong = 0;


  Object.values(
    learning || {}
  ).forEach(
    item => {

      attempts +=
        Number(
          item?.attempts || 0
        );

      correct +=
        Number(
          item?.correct || 0
        );

      wrong +=
        Number(
          item?.wrong || 0
        );

    }
  );


  const percentage =
    attempts > 0
      ? Math.round(
          (correct / attempts) * 100
        )
      : 0;


  return {
    attempts,
    correct,
    wrong,
    percentage
  };

}


/* =========================================================
   MODÜL RAPORU
   ========================================================= */

function createModuleReportRows(
  learning
) {

  const moduleData = {};


  Object.values(
    learning || {}
  ).forEach(
    kazanımData => {

      const modules =
        kazanımData?.modules || {};


      Object.entries(
        modules
      ).forEach(
        ([moduleKey, data]) => {

          if (!moduleData[moduleKey]) {

            moduleData[moduleKey] = {
              attempts: 0,
              correct: 0,
              wrong: 0
            };

          }


          moduleData[moduleKey].attempts +=
            Number(
              data?.attempts || 0
            );

          moduleData[moduleKey].correct +=
            Number(
              data?.correct || 0
            );

          moduleData[moduleKey].wrong +=
            Number(
              data?.wrong || 0
            );

        }
      );

    }
  );


  const entries =
    Object.entries(
      moduleData
    );


  if (
    entries.length === 0
  ) {

    return `

      <tr>
        <td colspan="6">
          Henüz modül performans verisi bulunmuyor.
        </td>
      </tr>

    `;

  }


  return entries
    .map(
      ([moduleKey, data]) => {

        const percentage =
          data.attempts > 0
            ? Math.round(
                (
                  data.correct /
                  data.attempts
                ) * 100
              )
            : 0;


        const status =
          getReportStatus(
            data.correct,
            data.attempts
          );


        return `

          <tr>

            <td>
              ${reportEscape(
                getReportModuleName(
                  moduleKey
                )
              )}
            </td>

            <td class="number-cell">
              ${data.attempts}
            </td>

            <td class="number-cell">
              ${data.correct}
            </td>

            <td class="number-cell">
              ${data.wrong}
            </td>

            <td class="number-cell">
              %${percentage}
            </td>

            <td>
              <span
                class="report-status ${status.className}"
              >
                ${status.text}
              </span>
            </td>

          </tr>

        `;

      }
    )
    .join("");

}


/* =========================================================
   KAZANIM RAPORU
   ========================================================= */

function createKazanımReportRows(
  learning
) {

  const entries =
    Object.entries(
      learning || {}
    );


  if (
    entries.length === 0
  ) {

    return `

      <tr>
        <td colspan="6">
          Henüz kazanım verisi bulunmuyor.
        </td>
      </tr>

    `;

  }


  return entries
    .map(
      ([kazanim, data]) => {

        const attempts =
          Number(
            data?.attempts || 0
          );

        const correct =
          Number(
            data?.correct || 0
          );

        const wrong =
          Number(
            data?.wrong || 0
          );


        const percentage =
          attempts > 0
            ? Math.round(
                (
                  correct /
                  attempts
                ) * 100
              )
            : 0;


        const status =
          getReportStatus(
            correct,
            attempts
          );


        return `

          <tr>

            <td class="kazanım-cell">

              ${reportEscape(
                kazanim
              )}

            </td>

            <td class="number-cell">
              ${attempts}
            </td>

            <td class="number-cell">
              ${correct}
            </td>

            <td class="number-cell">
              ${wrong}
            </td>

            <td class="number-cell">
              %${percentage}
            </td>

            <td>
              <span
                class="report-status ${status.className}"
              >
                ${status.text}
              </span>
            </td>

          </tr>

        `;

      }
    )
    .join("");

}


/* =========================================================
   YANLIŞ SORULAR TABLOSU
   ========================================================= */

function createWrongQuestionRows(
  errors
) {

  const rows = [];


  Object.entries(
    errors || {}
  ).forEach(
    ([moduleKey, moduleErrors]) => {

      Object.values(
        moduleErrors || {}
      ).forEach(
        item => {

          rows.push({

            module:
              getReportModuleName(
                moduleKey
              ),

            kazanim:
              item?.kazanim ||
              item?.kazanım ||
              "Kazanım belirtilmemiş",

            context:
              item?.context || "",

            question:
              item?.text || "",

            wrongCount:
              Number(
                item?.wrongCount || 1
              ),

            explain:
              item?.explain || ""

          });

        }
      );

    }
  );


  if (
    rows.length === 0
  ) {

    return `

      <tr>

        <td colspan="6">
          Kayıtlı yanlış soru bulunmuyor.
        </td>

      </tr>

    `;

  }


  rows.sort(
    (a, b) =>
      b.wrongCount -
      a.wrongCount
  );


  return rows
    .map(
      item => `

        <tr>

          <td>
            ${reportEscape(
              item.module
            )}
          </td>

          <td>
            ${reportEscape(
              item.kazanim
            )}
          </td>

          <td>
            ${reportEscape(
              item.context
            )}
          </td>

          <td class="wrong-question-text">
            ${reportEscape(
              item.question
            )}
          </td>

          <td class="number-cell">
            ${item.wrongCount}
          </td>

          <td>
            ${reportEscape(
              item.explain
            )}
          </td>

        </tr>

      `
    )
    .join("");

}


/* =========================================================
   EN GÜÇLÜ / GELİŞTİRİLECEK KAZANIMLAR
   ========================================================= */

function createLearningSummary(
  learning
) {

  const results =
    Object.entries(
      learning || {}
    )
    .map(
      ([kazanim, data]) => {

        const attempts =
          Number(
            data?.attempts || 0
          );

        const correct =
          Number(
            data?.correct || 0
          );


        return {

          kazanim,

          attempts,

          percentage:
            attempts > 0
              ? Math.round(
                  (
                    correct /
                    attempts
                  ) * 100
                )
              : 0

        };

      }
    )
    .filter(
      item =>
        item.attempts > 0
    );


  if (
    results.length === 0
  ) {

    return `

      <p>
        Henüz öğrenme yorumu oluşturmak
        için yeterli veri bulunmuyor.
      </p>

    `;

  }


  const strongest =
    [...results]
      .sort(
        (a, b) =>
          b.percentage -
          a.percentage
      )[0];


  const weakest =
    [...results]
      .sort(
        (a, b) =>
          a.percentage -
          b.percentage
      )[0];


  return `

    <div class="report-comment-grid">

      <div class="report-comment-card report-comment-good">

        <div class="report-comment-label">
          💪 Güçlü Kazanım
        </div>

        <strong>
          ${reportEscape(
            strongest.kazanim
          )}
        </strong>

        <div>
          Başarı:
          %${strongest.percentage}
        </div>

      </div>


      <div class="report-comment-card report-comment-low">

        <div class="report-comment-label">
          🎯 Öncelikli Pekiştirme
        </div>

        <strong>
          ${reportEscape(
            weakest.kazanim
          )}
        </strong>

        <div>
          Başarı:
          %${weakest.percentage}
        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   PEKİŞTİRME SAYISI
   ========================================================= */

function calculateRemediationStats(
  history
) {

  const total =
    Array.isArray(history)
      ? history.length
      : 0;


  const wrong =
    Array.isArray(history)
      ? history.filter(
          item =>
            item?.correct === false
        ).length
      : 0;


  const correct =
    Array.isArray(history)
      ? history.filter(
          item =>
            item?.correct === true
        ).length
      : 0;


  return {
    total,
    correct,
    wrong
  };

}


/* =========================================================
   RAPORU OLUŞTUR
   ========================================================= */

function buildStudentPrintReport() {

  const reportEl =
    document.getElementById(
      "studentPrintReport"
    );


  if (!reportEl) {

    console.warn(
      "studentPrintReport alanı bulunamadı."
    );

    return false;

  }


  const learning =
    reportSafeParse(
      REPORT_LEARNING_KEY,
      {}
    );


  const errors =
    reportSafeParse(
      REPORT_ERROR_KEY,
      {}
    );


  const history =
    reportSafeParse(
      REPORT_HISTORY_KEY,
      []
    );


  const general =
    calculateGeneralReportStats(
      learning
    );


  const activity =
    calculateRemediationStats(
      history
    );


  const studentName =
    document.getElementById(
      "reportStudentName"
    )?.value.trim() ||
    "................................";


  const studentClass =
    document.getElementById(
      "reportStudentClass"
    )?.value.trim() ||
    "........";


  const studentNo =
    document.getElementById(
      "reportStudentNo"
    )?.value.trim() ||
    "........";


  reportEl.innerHTML = `

    <article class="report-page">

      <!-- ===============================
           BAŞLIK
           =============================== -->

      <header class="report-header">

        <div class="report-logo">
          ⚛️
        </div>

        <div>

          <h1>
            ATOMLAB 9
          </h1>

          <h2>
            Öğrenme Analiz Raporu
          </h2>

        </div>

      </header>


      <!-- ===============================
           ÖĞRENCİ BİLGİLERİ
           =============================== -->

      <section class="report-student-info">

        <div>
          <span>Öğrenci</span>
          <strong>
            ${reportEscape(
              studentName
            )}
          </strong>
        </div>

        <div>
          <span>Sınıf / Şube</span>
          <strong>
            ${reportEscape(
              studentClass
            )}
          </strong>
        </div>

        <div>
          <span>Numara</span>
          <strong>
            ${reportEscape(
              studentNo
            )}
          </strong>
        </div>

        <div>
          <span>Rapor Tarihi</span>
          <strong>
            ${reportEscape(
              getReportDate()
            )}
          </strong>
        </div>

      </section>


      <!-- ===============================
           GENEL ÖZET
           =============================== -->

      <section class="report-section">

        <h3>
          📌 Genel Performans
        </h3>


        <div class="report-stat-grid">

          <div class="report-stat">

            <span>
              Toplam Cevap
            </span>

            <strong>
              ${general.attempts}
            </strong>

          </div>


          <div class="report-stat report-stat-good">

            <span>
              Doğru
            </span>

            <strong>
              ${general.correct}
            </strong>

          </div>


          <div class="report-stat report-stat-low">

            <span>
              Yanlış
            </span>

            <strong>
              ${general.wrong}
            </strong>

          </div>


          <div class="report-stat report-stat-main">

            <span>
              Başarı
            </span>

            <strong>
              %${general.percentage}
            </strong>

          </div>

        </div>

      </section>


      <!-- ===============================
           MODÜL ANALİZİ
           =============================== -->

      <section class="report-section">

        <h3>
          📚 Modül Bazlı Başarı
        </h3>

        <div class="report-table-wrap">

          <table class="report-table">

            <thead>

              <tr>
                <th>Modül</th>
                <th>Cevap</th>
                <th>Doğru</th>
                <th>Yanlış</th>
                <th>Başarı</th>
                <th>Durum</th>
              </tr>

            </thead>

            <tbody>

              ${createModuleReportRows(
                learning
              )}

            </tbody>

          </table>

        </div>

      </section>


      <!-- ===============================
           KAZANIM ANALİZİ
           =============================== -->

      <section class="report-section">

        <h3>
          🎯 Kazanım Öğrenme Profili
        </h3>

        <div class="report-table-wrap">

          <table class="report-table">

            <thead>

              <tr>
                <th>Kazanım</th>
                <th>Deneme</th>
                <th>Doğru</th>
                <th>Yanlış</th>
                <th>Başarı</th>
                <th>Öğrenme Durumu</th>
              </tr>

            </thead>

            <tbody>

              ${createKazanımReportRows(
                learning
              )}

            </tbody>

          </table>

        </div>

      </section>


      <!-- ===============================
           ÖĞRENME YORUMU
           =============================== -->

      <section class="report-section">

        <h3>
          🧠 Öğrenme Yorumu
        </h3>

        ${createLearningSummary(
          learning
        )}

      </section>


      <!-- ===============================
           ÇALIŞMA GEÇMİŞİ
           =============================== -->

      <section class="report-section">

        <h3>
          🔄 Çalışma Etkinliği
        </h3>

        <div class="report-activity">

          <div>
            <span>
              Toplam kayıtlı cevap
            </span>

            <strong>
              ${activity.total}
            </strong>
          </div>

          <div>
            <span>
              Doğru cevap
            </span>

            <strong>
              ${activity.correct}
            </strong>
          </div>

          <div>
            <span>
              Yanlış cevap
            </span>

            <strong>
              ${activity.wrong}
            </strong>
          </div>

        </div>

      </section>


      <!-- ===============================
           YANLIŞ SORULAR
           =============================== -->

      <section class="report-section report-page-break">

        <h3>
          ❌ Yanlış Soruların Ayrıntılı Analizi
        </h3>

        <div class="report-table-wrap">

          <table class="report-table report-wrong-table">

            <thead>

              <tr>
                <th>Modül</th>
                <th>Kazanım</th>
                <th>Bağlam</th>
                <th>Soru</th>
                <th>Yanlış Sayısı</th>
                <th>Açıklama</th>
              </tr>

            </thead>

            <tbody>

              ${createWrongQuestionRows(
                errors
              )}

            </tbody>

          </table>

        </div>

      </section>


      <!-- ===============================
           ÖĞRETMEN NOTU
           =============================== -->

      <section class="report-section">

        <h3>
          📝 Öğretmen Değerlendirmesi
        </h3>

        <div class="teacher-note">

          <div></div>
          <div></div>
          <div></div>

        </div>

      </section>


      <footer class="report-footer">

        <span>
          AtomLab 9
        </span>

        <span>
          Öğrenme verilerinden otomatik oluşturulmuştur.
        </span>

      </footer>

    </article>

  `;


  return true;

}


/* =========================================================
   PDF / YAZDIR
   ========================================================= */

function openStudentPdfReport() {

  const created =
    buildStudentPrintReport();


  if (!created) {
    return;
  }


  document.body.classList.add(
    "printing-student-report"
  );


  setTimeout(
    () => {

      window.print();

    },
    150
  );

}


/* =========================================================
   YAZDIRMA BİTİNCE NORMAL SAYFAYA DÖN
   ========================================================= */

window.addEventListener(
  "afterprint",
  () => {

    document.body.classList.remove(
      "printing-student-report"
    );

  }
);


/* =========================================================
   BUTONU BAĞLA
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const button =
      document.getElementById(
        "createPdfReportBtn"
      );


    if (button) {

      button.addEventListener(
        "click",
        openStudentPdfReport
      );

    }

  }
);
