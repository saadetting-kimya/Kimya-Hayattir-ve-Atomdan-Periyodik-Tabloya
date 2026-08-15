/* =========================================================
   AtomLab 9 — GELİŞMİŞ ÖĞRENME TEMELLİ QUIZ MOTORU
   ---------------------------------------------------------
   Amaç:
   - Soru havuzunu kullanmak
   - Kazanım temelli ölçme
   - Yanlış yapılan sorudan aynı kazanımda benzer soru üretmek
   - Öğrencinin cevap geçmişini tutmak
   - Kazanım bazlı başarı hesaplamak
   - Öğrenme gelişimini takip etmek
   - Zayıf kazanımları belirlemek
   - Güçlü kazanımları belirlemek
   - Keşif Günlüğünü korumak
   ========================================================= */

/* =========================================================
   STORAGE ANAHTARLARI
   ========================================================= */

const STORAGE_KEY = "atomlab9_progress";
const ERROR_KEY = "atomlab9_errors";
const LEARNING_KEY = "atomlab9_learning";
const HISTORY_KEY = "atomlab9_learning_history";


/* =========================================================
   YARDIMCI FONKSİYONLAR
   ========================================================= */

function safeParse(key, fallback = {}) {
  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return fallback;
    }

    const parsed = JSON.parse(value);

    return parsed ?? fallback;

  } catch (error) {
    console.warn("LocalStorage okunamadı:", key, error);
    return fallback;
  }
}


function safeSave(key, value) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

    return true;

  } catch (error) {
    console.warn("LocalStorage yazılamadı:", key, error);
    return false;
  }
}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   KARIŞTIRMA
   ========================================================= */

function shuffle(array) {

  const arr = [...array];

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
    ] = [
      arr[j],
      arr[i]
    ];

  }

  return arr;
}


/* =========================================================
   METİN NORMALİZASYONU
   ========================================================= */

function normalizeText(text) {

  return String(text || "")
    .toLocaleLowerCase("tr-TR")
    .replace(/[.,!?;:()"'\[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

}


function getWords(text) {

  return new Set(
    normalizeText(text)
      .split(" ")
      .filter(word => word.length >= 4)
  );

}


/* =========================================================
   İLERLEME
   ========================================================= */

export function readProgress() {

  return safeParse(
    STORAGE_KEY,
    {}
  );

}


export function writeProgress(progress) {

  safeSave(
    STORAGE_KEY,
    progress
  );

}


export function markModuleScore(
  moduleKey,
  score,
  total
) {

  const progress =
    readProgress();

  progress[moduleKey] =
    progress[moduleKey] || {};

  progress[moduleKey].score =
    score;

  progress[moduleKey].total =
    total;

  progress[moduleKey].percentage =
    total > 0
      ? Math.round(
          (score / total) * 100
        )
      : 0;

  progress[moduleKey].at =
    Date.now();

  writeProgress(progress);

}


export function markVisited(
  moduleKey
) {

  const progress =
    readProgress();

  progress[moduleKey] =
    progress[moduleKey] || {};

  progress[moduleKey].visited =
    true;

  progress[moduleKey].lastVisited =
    Date.now();

  writeProgress(progress);

}


/* =========================================================
   YANLIŞ SORULAR
   ========================================================= */

function readErrors() {

  return safeParse(
    ERROR_KEY,
    {}
  );

}


function saveWrongQuestion(
  moduleKey,
  question,
  questionIndex
) {

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

      context:
        question.context || "",

      kazanim:
        question.kazanim || "",

      text:
        question.text || "",

      options:
        question.options || [],

      correct:
        question.correct,

      explain:
        question.explain || "",

      wrongCount:
        1,

      lastWrong:
        Date.now()

    };

  } else {

    errors[moduleKey][key].wrongCount =
      (
        errors[moduleKey][key].wrongCount || 0
      ) + 1;

    errors[moduleKey][key].lastWrong =
      Date.now();

  }

  safeSave(
    ERROR_KEY,
    errors
  );

}


/* =========================================================
   ÖĞRENME VERİSİ
   ========================================================= */

function readLearning() {

  return safeParse(
    LEARNING_KEY,
    {}
  );

}


function saveLearning(
  learning
) {

  safeSave(
    LEARNING_KEY,
    learning
  );

}


function readHistory() {

  return safeParse(
    HISTORY_KEY,
    []
  );

}


function saveHistory(
  history
) {

  safeSave(
    HISTORY_KEY,
    history
  );

}


/* =========================================================
   KAZANIM KAYDI
   ========================================================= */

function registerAnswer(
  question,
  isCorrect,
  moduleKey
) {

  const kazanim =
    question.kazanim ||
    "Kazanım belirtilmemiş";

  const learning =
    readLearning();

  if (!learning[kazanim]) {

    learning[kazanim] = {

      kazanim,

      attempts: 0,

      correct: 0,

      wrong: 0,

      firstAttempt:
        Date.now(),

      lastAttempt:
        Date.now(),

      streak: 0,

      bestStreak: 0,

      modules: {},

      questions: {}

    };

  }

  const data =
    learning[kazanim];

  data.attempts++;

  data.lastAttempt =
    Date.now();

  if (isCorrect) {

    data.correct++;

    data.streak++;

    data.bestStreak =
      Math.max(
        data.bestStreak,
        data.streak
      );

  } else {

    data.wrong++;

    data.streak = 0;

  }

  if (!data.modules[moduleKey]) {

    data.modules[moduleKey] = {

      attempts: 0,

      correct: 0,

      wrong: 0

    };

  }

  data.modules[moduleKey].attempts++;

  if (isCorrect) {

    data.modules[moduleKey].correct++;

  } else {

    data.modules[moduleKey].wrong++;

  }


  const questionKey =
    question.id ||
    `${moduleKey}_${question.text}`;

  if (!data.questions[questionKey]) {

    data.questions[questionKey] = {

      attempts: 0,

      correct: 0,

      wrong: 0,

      lastAttempt: null

    };

  }

  data.questions[questionKey].attempts++;

  data.questions[questionKey].lastAttempt =
    Date.now();

  if (isCorrect) {

    data.questions[questionKey].correct++;

  } else {

    data.questions[questionKey].wrong++;

  }


  saveLearning(
    learning
  );


  /* -------------------------------------------------------
     GEÇMİŞE DE KAYDET
     ------------------------------------------------------- */

  const history =
    readHistory();

  history.push({

    time:
      Date.now(),

    moduleKey,

    kazanim,

    correct:
      isCorrect,

    question:
      question.text || "",

    context:
      question.context || ""

  });


  /* Son 500 işlemden fazlasını tutma */

  if (history.length > 500) {

    history.splice(
      0,
      history.length - 500
    );

  }

  saveHistory(
    history
  );

}


/* =========================================================
   KAZANIM BAŞARI DURUMU
   ========================================================= */

function getMastery(
  kazanim
) {

  const learning =
    readLearning();

  const data =
    learning[kazanim];

  if (!data || !data.attempts) {

    return {

      percentage: 0,

      status: "Henüz ölçülmedi",

      level: 0

    };

  }

  const percentage =
    Math.round(
      (
        data.correct /
        data.attempts
      ) * 100
    );


  /*
   * Yeterlik düzeyleri
   */

  let status;
  let level;

  if (
    data.attempts < 2
  ) {

    status =
      "İlk ölçüm";

    level = 1;

  } else if (
    percentage >= 80
  ) {

    status =
      "Ulaştı";

    level = 3;

  } else if (
    percentage >= 60
  ) {

    status =
      "Gelişiyor";

    level = 2;

  } else {

    status =
      "Desteğe ihtiyaç var";

    level = 1;

  }

  return {

    percentage,

    status,

    level

  };

}


/* =========================================================
   BENZERLİK HESAPLAMA
   ========================================================= */

function similarityScore(
  source,
  candidate
) {

  let score = 0;


  /* -------------------------------------------------------
     AYNI KAZANIM
     EN ÖNEMLİ KRİTER
     ------------------------------------------------------- */

  if (
    source.kazanim &&
    candidate.kazanim &&
    source.kazanim ===
      candidate.kazanim
  ) {

    score += 100;

  } else {

    /*
     * Başka kazanımdan soru
     * mümkün olduğunca seçilmesin.
     */

    return -1000;

  }


  /* -------------------------------------------------------
     AYNI BAĞLAM
     ------------------------------------------------------- */

  if (
    source.context &&
    candidate.context &&
    source.context ===
      candidate.context
  ) {

    score += 40;

  }


  /* -------------------------------------------------------
     * METİN BENZERLİĞİ
     * ------------------------------------------------------- */

  const sourceWords =
    getWords(
      (
        source.context || ""
      ) +
      " " +
      (
        source.text || ""
      )
    );

  const candidateWords =
    getWords(
      (
        candidate.context || ""
      ) +
      " " +
      (
        candidate.text || ""
      )
    );


  candidateWords.forEach(
    word => {

      if (
        sourceWords.has(word)
      ) {

        score += 3;

      }

    }
  );


  return score;

}


/* =========================================================
   BENZER SORU BUL
   ---------------------------------------------------------
   Önce:
   1. Aynı kazanım
   2. Aynı bağlam
   3. Metinsel benzerlik
   4. Daha önce kullanılmamış soru
   ========================================================= */

function findSimilarQuestion(
  wrongQuestion,
  allQuestions,
  usedQuestions
) {

  if (
    !wrongQuestion ||
    !Array.isArray(allQuestions)
  ) {

    return null;

  }


  let candidates =
    allQuestions.filter(
      question => {

        if (
          question ===
          wrongQuestion
        ) {

          return false;

        }

        const index =
          allQuestions.indexOf(
            question
          );

        if (
          usedQuestions.has(index)
        ) {

          return false;

        }

        return (
          question.kazanim ===
          wrongQuestion.kazanim
        );

      }
    );


  /*
   * Öncelikle kullanılmamış sorular
   */

  if (
    candidates.length > 0
  ) {

    const scored =
      candidates.map(
        question => ({

          question,

          score:
            similarityScore(
              wrongQuestion,
              question
            )

        })
      );


    scored.sort(
      (a, b) =>
        b.score - a.score
    );


    const bestScore =
      scored[0].score;


    const best =
      scored.filter(
        item =>
          item.score ===
          bestScore
      );


    return best[
      Math.floor(
        Math.random() *
        best.length
      )
    ].question;

  }


  /*
   * Eğer aynı kazanımda
   * kullanılmamış soru kalmadıysa,
   * yine aynı kazanımdan daha önce
   * kullanılan sorular arasından seç.
   */

  const fallback =
    allQuestions
      .filter(
        question =>
          question !==
            wrongQuestion &&
          question.kazanim ===
            wrongQuestion.kazanim
      )
      .map(
        question => ({

          question,

          score:
            similarityScore(
              wrongQuestion,
              question
            )

        })
      )
      .sort(
        (a, b) =>
          b.score - a.score
      );


  if (
    fallback.length === 0
  ) {

    return null;

  }


  return fallback[0].question;

}


/* =========================================================
   BAŞLANGIÇ SORULARINI KAZANIMLARA DAĞIT
   ========================================================= */

function selectInitialQuestions(
  questions,
  count
) {

  if (
    !Array.isArray(questions) ||
    questions.length === 0
  ) {

    return [];

  }


  /*
   * Kazanımlara göre gruplandır
   */

  const groups = {};

  questions.forEach(
    question => {

      const key =
        question.kazanim ||
        "Bilinmeyen";

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(
        question
      );

    }
  );


  const kazanims =
    shuffle(
      Object.keys(groups)
    );


  const selected = [];

  let round = 0;


  /*
   * Kazanımları mümkün olduğunca
   * dengeli dağıt.
   */

  while (
    selected.length < count &&
    kazanims.length > 0
  ) {

    let addedThisRound =
      false;

    for (
      const kazanim
      of kazanims
    ) {

      if (
        selected.length >= count
      ) {

        break;

      }

      const pool =
        groups[kazanim];

      if (
        pool.length >
        round
      ) {

        selected.push(
          pool[round]
        );

        addedThisRound =
          true;

      }

    }

    if (!addedThisRound) {
      break;
    }

    round++;

  }


  /*
   * Soru sayısı yetmezse
   * kalan havuzdan doldur.
   */

  if (
    selected.length < count
  ) {

    const remaining =
      shuffle(
        questions.filter(
          question =>
            !selected.includes(
              question
            )
        )
      );

    selected.push(
      ...remaining.slice(
        0,
        count -
        selected.length
      )
    );

  }


  return selected;

}


/* =========================================================
   KAZANIM RAPORU OLUŞTUR
   ========================================================= */

function createLearningReport(
  moduleQuestions
) {

  const learning =
    readLearning();

  const kazanims =
    [
      ...new Set(
        moduleQuestions
          .map(
            q => q.kazanim
          )
          .filter(Boolean)
      )
    ];


  return kazanims.map(
    kazanim => {

      const data =
        learning[kazanim];

      const mastery =
        getMastery(
          kazanim
        );

      return {

        kazanim,

        attempts:
          data?.attempts || 0,

        correct:
          data?.correct || 0,

        wrong:
          data?.wrong || 0,

        percentage:
          mastery.percentage,

        status:
          mastery.status

      };

    }
  );

}


/* =========================================================
   ÖĞRENME RAPORU HTML
   ========================================================= */

function renderLearningReport(
  container,
  moduleQuestions
) {

  if (!container) {
    return;
  }


  const report =
    createLearningReport(
      moduleQuestions
    );


  if (
    report.length === 0
  ) {

    return;

  }


  const statusClass =
    status => {

      if (
        status ===
        "Ulaştı"
      ) {

        return "mastery-good";

      }

      if (
        status ===
        "Gelişiyor"
      ) {

        return "mastery-mid";

      }

      if (
        status ===
        "Desteğe ihtiyaç var"
      ) {

        return "mastery-low";

      }

      return "mastery-new";

    };


  const rows =
    report.map(
      item => `

        <div class="learning-row">

          <div class="learning-row-top">

            <strong>
              ${escapeHTML(
                item.kazanim
              )}
            </strong>

            <span class="${statusClass(
              item.status
            )}">
              ${escapeHTML(
                item.status
              )}
            </span>

          </div>

          <div class="learning-progress">

            <div
              class="learning-progress-fill"
              style="width:${Math.min(
                100,
                item.percentage
              )}%"
            ></div>

          </div>

          <div class="learning-meta">

            <span>
              ${item.percentage}%
            </span>

            <span>
              ${item.correct}/${item.attempts}
              doğru
            </span>

          </div>

        </div>

      `
    ).join("");


  container.innerHTML = `

    <section class="learning-report">

      <div class="learning-report-title">
        🎯 Kazanım Öğrenme Profili
      </div>

      <div class="learning-report-subtitle">
        Cevapların kazanım bazında analiz ediliyor.
      </div>

      <div class="learning-rows">
        ${rows}
      </div>

    </section>

  `;

}


/* =========================================================
   ÖĞRENME YORUMU
   ========================================================= */

function generateLearningComment(
  moduleQuestions
) {

  const report =
    createLearningReport(
      moduleQuestions
    );


  if (
    report.length === 0
  ) {

    return "";

  }


  const weak =
    report.filter(
      item =>
        item.status ===
        "Desteğe ihtiyaç var"
    );


  const developing =
    report.filter(
      item =>
        item.status ===
        "Gelişiyor"
    );


  const strong =
    report.filter(
      item =>
        item.status ===
        "Ulaştı"
    );


  if (
    weak.length > 0
  ) {

    return `
      <strong>Öğrenme analizi:</strong>
      ${escapeHTML(
        weak[0].kazanim
      )}
      kazanımında daha fazla
      pekiştirmeye ihtiyaç var.
      Yanlış cevapların ardından
      aynı kazanımdan benzer sorular
      sunuldu.
    `;

  }


  if (
    developing.length > 0
  ) {

    return `
      <strong>Öğrenme analizi:</strong>
      Kazanımların önemli bir bölümünde
      gelişim gösteriyorsun.
      ${escapeHTML(
        developing[0].kazanim
      )}
      kazanımında biraz daha
      pratik yapman öğrenmeyi
      güçlendirebilir.
    `;

  }


  if (
    strong.length ===
    report.length
  ) {

    return `
      <strong>Öğrenme analizi:</strong>
      Ölçülen kazanımlarda
      yeterliğe ulaştın.
      Benzer sorularda da başarını
      koruyabiliyorsun.
    `;

  }


  return `
    <strong>Öğrenme analizi:</strong>
    Öğrenme sürecin devam ediyor.
    Farklı kazanımlardaki performansın
    izleniyor.
  `;

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


  markVisited(
    moduleKey
  );


  hostEl.innerHTML = "";


  /* =======================================================
     AYARLAR
     ======================================================= */

  const QUESTION_COUNT =
    Math.min(
      5,
      questions.length
    );


  /*
   * Başlangıç soruları
   */

  let activeQuestions =
    selectInitialQuestions(
      questions,
      QUESTION_COUNT
    );


  /*
   * Kullanılmış sorular
   */

  const usedQuestions =
    new Set();


  activeQuestions.forEach(
    question => {

      const index =
        questions.indexOf(
          question
        );

      if (index >= 0) {

        usedQuestions.add(
          index
        );

      }

    }
  );


  /* =======================================================
     DURUM
     ======================================================= */

  const state = {

    answered: 0,

    correct: 0,

    totalAttempts: 0,

    remediationCount: 0,

    completedPositions:
      new Set(),

    questionAttempts:
      {},

    finished:
      false

  };


  /* =======================================================
     ANA QUIZ ALANI
     ======================================================= */

  const wrap =
    document.createElement(
      "div"
    );

  wrap.className =
    "quiz";


  hostEl.appendChild(
    wrap
  );


  /* =======================================================
     ÖZET
     ======================================================= */

  const summary =
    document.createElement(
      "div"
    );

  summary.className =
    "quiz-summary";


  hostEl.appendChild(
    summary
  );


  /* =======================================================
     RAPOR ALANI
     ======================================================= */

  const reportContainer =
    document.createElement(
      "div"
    );

  reportContainer.className =
    "quiz-learning-container";


  hostEl.appendChild(
    reportContainer
  );


  /* =======================================================
     ÖZET GÜNCELLE
     ======================================================= */

  function updateSummary() {

    const percentage =
      state.answered > 0
        ? Math.round(
            (
              state.correct /
              state.answered
            ) * 100
          )
        : 0;


    summary.innerHTML = `

      <div>

        <div
          class="small"
          style="color:#c7bfe6"
        >
          Öğrenme ilerlemesi
        </div>

        <div class="score">

          ${state.answered}/${QUESTION_COUNT}
          temel soru

          ·

          <span>
            ${state.correct}
          </span>

          doğru

          ·

          ${percentage}%

        </div>

      </div>

      <div>

        ${
          state.remediationCount > 0
            ? `
              <div class="small">
                🔄 ${state.remediationCount}
                pekiştirme sorusu çözüldü
              </div>
            `
            : ""
        }

        ${
          state.finished
            ? `
              <div
                class="badge-live"
                style="color:#7CE0A8"
              >
                Öğrenme analizi hazır
              </div>
            `
            : ""
        }

      </div>

    `;


    renderLearningReport(
      reportContainer,
      questions
    );

  }


  /* =======================================================
     QUIZ TAMAMLAMA
     ======================================================= */

  function finishQuiz() {

    if (
      state.finished
    ) {

      return;

    }


    state.finished =
      true;


    markModuleScore(
      moduleKey,
      state.correct,
      QUESTION_COUNT
    );


    const comment =
      generateLearningComment(
        questions
      );


    const result =
      document.createElement(
        "div"
      );

    result.className =
      "learning-result";


    result.innerHTML = `

      <div class="learning-result-title">
        🧠 Öğrenme Süreci Analizi
      </div>

      <div class="learning-result-score">

        ${state.correct}/${QUESTION_COUNT}

        <span>
          temel soruda doğru
        </span>

      </div>

      <div class="learning-result-comment">

        ${comment}

      </div>

    `;


    hostEl.appendChild(
      result
    );


    updateSummary();

  }


  /* =======================================================
     BENZER SORUYU GETİR
     ======================================================= */

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

      const feedback =
        card.querySelector(
          ".qfeedback"
        );

      if (feedback) {

        feedback.innerHTML += `

          <div class="similar-none">

            Bu kazanım için soru havuzunda
            başka soru bulunamadı.

          </div>

        `;

      }

      return;

    }


    const similarIndex =
      questions.indexOf(
        similar
      );


    if (
      similarIndex >= 0
    ) {

      usedQuestions.add(
        similarIndex
      );

    }


    const position =
      Number(
        card.dataset.position
      );


    activeQuestions[
      position
    ] = similar;


    state.remediationCount++;


    const newCard =
      createQuestionCard(
        similar,
        position,
        true
      );


    card.replaceWith(
      newCard
    );


    updateSummary();

  }


  /* =======================================================
     SORU KARTI
     ======================================================= */

  function createQuestionCard(
    question,
    position,
    isRemediation = false
  ) {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "qcard";


    card.dataset.position =
      position;


    card.dataset.remediation =
      isRemediation
        ? "1"
        : "0";


    card.innerHTML = `

      <div class="qhead">

        <span class="qn">

          SORU
          ${position + 1}/${QUESTION_COUNT}

        </span>

        ${
          isRemediation
            ? `
              <span
                class="badge-live"
                style="margin-left:8px"
              >
                🔄 Pekiştirme
              </span>
            `
            : ""
        }

      </div>


      ${
        question.kazanim
          ? `
            <div
              class="q-kazanim"
              style="
                font-size:.78rem;
                opacity:.72;
                margin-bottom:8px;
              "
            >
              ${escapeHTML(
                question.kazanim
              )}
            </div>
          `
          : ""
      }


      ${
        question.context
          ? `

            <div class="qcontext">

              ${escapeHTML(
                question.context
              )}

            </div>

          `
          : ""
      }


      <div class="qtext">

        ${escapeHTML(
          question.text
        )}

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


    /* =====================================================
       ŞIKLAR
       ===================================================== */

    question.options.forEach(
      (
        option,
        optionIndex
      ) => {

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

            ${escapeHTML(
              option
            )}

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
               ŞIKLARI KİLİTLE
               --------------------------------------------- */

            const allOptions =
              [
                ...optsEl.children
              ];


            allOptions.forEach(
              (
                element,
                index
              ) => {

                element.classList.add(
                  "disabled"
                );


                if (
                  index ===
                  question.correct
                ) {

                  element.classList.add(
                    "correct"
                  );

                }

              }
            );


            const isCorrect =
              optionIndex ===
              question.correct;


            /* ---------------------------------------------
               ÖĞRENME VERİSİNE KAYDET
               --------------------------------------------- */

            registerAnswer(
              question,
              isCorrect,
              moduleKey
            );


            state.totalAttempts++;


            if (
              isCorrect
            ) {

              if (
  isCorrect
) {

  if (
    !isRemediation &&
    !state.completedPositions.has(
      position
    )
  ) {

    state.correct++;

  }


  feedbackEl.classList.add(
    "show",
    "ok"
  );


  feedbackEl.innerHTML = `

    <div>

      ✓ Doğru!

    </div>


    <div
      class="q-explain"
    >

      ${escapeHTML(
        question.explain ||
        ""
      )}

    </div>

  `;


  /*
   * Temel soru tamamlandı.
   */

  if (
    !isRemediation &&
    !state.completedPositions.has(
      position
    )
  ) {

    state.completedPositions.add(
      position
    );

    state.answered++;

  }

}


              feedbackEl.classList.add(
                "show",
                "ok"
              );


              feedbackEl.innerHTML = `

                <div>

                  ✓ Doğru!

                </div>


                <div
                  class="q-explain"
                >

                  ${escapeHTML(
                    question.explain ||
                    ""
                  )}

                </div>

              `;


              /*
               * Temel soru tamamlandı.
               */

              if (
                !isRemediation &&
                !state.completedPositions.has(
                  position
                )
              ) {

                state.completedPositions.add(
                  position
                );

                state.answered++;

              }


              /*
               * Pekiştirme sorusu da
               * kendi içinde tamamlanmıştır.
               */

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
                question,
                questions.indexOf(
                  question
                )
              );


              feedbackEl.classList.add(
                "show",
                "no"
              );


              feedbackEl.innerHTML = `

                <div>

                  ✕ Yanlış.

                </div>


                <div
                  class="q-explain"
                >

                  ${escapeHTML(
                    question.explain ||
                    ""
                  )}

                </div>


                <div
                  style="
                    margin-top:8px;
                    font-size:.9rem;
                    opacity:.85;
                  "
                >

                  Aynı kazanımdan
                  pekiştirme sorusu
                  çözerek tekrar deneyebilirsin.

                </div>


                <button
                  type="button"
                  class="btn similar-btn"
                  style="margin-top:10px"
                >

                  🔄 Benzerini Çöz

                </button>

              `;


              const similarButton =
                feedbackEl.querySelector(
                  ".similar-btn"
                );


              if (
                similarButton
              ) {

                similarButton.addEventListener(
                  "click",
                  () => {

                    replaceWithSimilar(
                      card,
                      question
                    );

                  }
                );

              }


              /*
               * Yanlış temel soru da
               * cevaplanmış kabul edilir.
               */

              if (
                !isRemediation &&
                !state.completedPositions.has(
                  position
                )
              ) {

                state.completedPositions.add(
                  position
                );

                state.answered++;

              }

            }


            updateSummary();


            /*
             * 5 temel soru tamamlandıysa
             * sonuç raporunu göster.
             */

            if (
              state.answered >=
              QUESTION_COUNT
            ) {

              finishQuiz();

            }

          }
        );


        optsEl.appendChild(
          optionEl
        );

      }
    );


    return card;

  }


  /* =======================================================
     İLK SORULARI OLUŞTUR
     ======================================================= */

  activeQuestions.forEach(
    (
      question,
      position
    ) => {

      const card =
        createQuestionCard(
          question,
          position,
          false
        );


      wrap.appendChild(
        card
      );

    }
  );


  updateSummary();

}


/* =========================================================
   KAZANIM RAPORUNU DIŞARIDAN OKUMA
   ---------------------------------------------------------
   İleride analiz ekranında kullanabiliriz.
   ========================================================= */

export function getLearningData() {

  return readLearning();

}


export function getLearningHistory() {

  return readHistory();

}


export function getMasteryReport() {

  const learning =
    readLearning();

  return Object.keys(
    learning
  ).map(
    kazanim => {

      const mastery =
        getMastery(
          kazanim
        );

      return {

        kazanim,

        ...learning[kazanim],

        ...mastery

      };

    }
  );

}


/* =========================================================
   ÖĞRENME VERİSİNİ SIFIRLA
   ---------------------------------------------------------
   Öğretmen/gelistirme amacıyla kullanılabilir.
   ========================================================= */

export function resetLearningData() {

  try {

    localStorage.removeItem(
      LEARNING_KEY
    );

    localStorage.removeItem(
      HISTORY_KEY
    );

    localStorage.removeItem(
      ERROR_KEY
    );

    console.log(
      "AtomLab 9 öğrenme verileri sıfırlandı."
    );

  } catch (error) {

    console.error(
      "Öğrenme verileri sıfırlanamadı:",
      error
    );

  }

}


/* =========================================================
   KEŞİF GÜNLÜĞÜ
   ---------------------------------------------------------
   Mevcut sistem korunmuştur.
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


  if (saved !== null) {

    textareaEl.value =
      saved;

  }


  let timer;


  textareaEl.addEventListener(
    "input",
    () => {

      clearTimeout(
        timer
      );


      if (saveState) {

        saveState.textContent =
          "Kaydediliyor...";

      }


      timer =
        setTimeout(
          () => {

            try {

              localStorage.setItem(
                fullKey,
                textareaEl.value
              );


              if (saveState) {

                saveState.textContent =
                  "✓ Kaydedildi (bu tarayıcıda saklanır)";

              }

            } catch (error) {

              console.warn(
                "Günlük kaydedilemedi:",
                error
              );

            }

          },
          500
        );

    }
  );

}
