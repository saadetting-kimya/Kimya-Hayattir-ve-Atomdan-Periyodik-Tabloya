/* =========================================================
   ATOMLAB 9 — QUIZ ENGINE
   ---------------------------------------------------------
   • Soru havuzundan rastgele soru seçer
   • Kazanım bilgisini normalize eder
   • Yanlış soruyu kaydeder
   • AYNI KAZANIMDAN benzer soru getirir
   • Öğrencinin öğrenme sürecini takip eder
   • Kazanım bazında başarı hesaplar
   • Benzer sorulardaki gelişimi kaydeder
   • Keşif Günlüğünü kaydeder
   ========================================================= */

const STORAGE_KEY = "atomlab9_learning";
const ERROR_KEY = "atomlab9_errors";
const JOURNAL_PREFIX = "atomlab9_journal_";

const QUESTION_COUNT = 5;


/* =========================================================
   YARDIMCI
   ========================================================= */

function safeJSON(value, fallback = {}) {
  try {
    return JSON.parse(value) ?? fallback;
  } catch {
    return fallback;
  }
}


/* =========================================================
   VERİYİ NORMALİZE ET
   ---------------------------------------------------------
   Eski sorularda:
      kazanim

   Yeni sorularda:
      kazanım

   olabilir.

   İkisini de destekliyoruz.
   ========================================================= */

function normalizeQuestion(q, index, moduleKey) {

  if (!q || typeof q !== "object") {
    return null;
  }

  const kazanım =
    q.kazanim ||
    q["kazanım"] ||
    q.kazanım ||
    "Kazanım belirtilmemiş";

  return {
    ...q,

    id:
      q.id ||
      `${moduleKey}-${index + 1}`,

    kazanım,

    kazanim: kazanım,

    konu:
      q.konu ||
      q.topic ||
      "",

    context:
      q.context ||
      "",

    text:
      q.text ||
      q.question ||
      "",

    options:
      Array.isArray(q.options)
        ? q.options
        : [],

    correct:
      Number.isInteger(q.correct)
        ? q.correct
        : 0,

    explain:
      q.explain ||
      "",

    difficulty:
      q.difficulty ||
      "orta",

    module:
      moduleKey
  };
}


/* =========================================================
   TÜM SORU HAVUZUNU TEK HAVUZA ÇEVİR
   ========================================================= */

export function buildQuestionPool(quizData) {

  const pool = [];

  if (!quizData || typeof quizData !== "object") {
    return pool;
  }

  Object.entries(quizData).forEach(
    ([moduleKey, questions]) => {

      if (!Array.isArray(questions)) {
        return;
      }

      questions.forEach(
        (question, index) => {

          const normalized =
            normalizeQuestion(
              question,
              index,
              moduleKey
            );

          if (
            normalized &&
            normalized.text &&
            normalized.options.length === 5
          ) {

            pool.push(normalized);

          }

        }
      );

    }
  );

  return pool;
}


/* =========================================================
   İLERLEMEYİ OKU
   ========================================================= */

export function readProgress() {

  return safeJSON(
    localStorage.getItem(STORAGE_KEY),
    {
      questions: {},
      kazanımlar: {},
      sessions: []
    }
  );

}


/* =========================================================
   İLERLEMEYİ KAYDET
   ========================================================= */

export function writeProgress(progress) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  );

}


/* =========================================================
   SORU SONUCUNU KAYDET
   ========================================================= */

function recordAnswer(
  question,
  isCorrect,
  moduleKey
) {

  const progress =
    readProgress();

  const id =
    question.id;

  if (!progress.questions[id]) {

    progress.questions[id] = {
      id,
      kazanım:
        question.kazanım,
      module:
        moduleKey,
      attempts: 0,
      correct: 0,
      wrong: 0,
      history: []
    };

  }

  const record =
    progress.questions[id];

  record.attempts++;

  if (isCorrect) {
    record.correct++;
  } else {
    record.wrong++;
  }

  record.history.push({

    correct:
      isCorrect,

    at:
      Date.now()

  });


  /* -------------------------------------------------------
     KAZANIM İSTATİSTİĞİ
     ------------------------------------------------------- */

  const kazanım =
    question.kazanım ||
    "Kazanım belirtilmemiş";


  if (!progress.kazanımlar[kazanım]) {

    progress.kazanımlar[kazanım] = {

      attempts: 0,

      correct: 0,

      wrong: 0,

      firstAttempt: null,

      lastAttempt: null,

      improvement: 0

    };

  }

  const stat =
    progress.kazanımlar[kazanım];


  stat.attempts++;

  if (isCorrect) {
    stat.correct++;
  } else {
    stat.wrong++;
  }


  if (!stat.firstAttempt) {

    stat.firstAttempt = {
      correct:
        isCorrect,
      at:
        Date.now()
    };

  }


  stat.lastAttempt = {

    correct:
      isCorrect,

    at:
      Date.now()

  };


  /*
   * İlk deneme yanlış,
   * sonraki aynı kazanım doğru ise
   * öğrenme gelişimi olarak kaydet.
   */

  if (
    stat.firstAttempt &&
    !stat.firstAttempt.correct &&
    isCorrect
  ) {

    stat.improvement++;

  }


  writeProgress(progress);

}


/* =========================================================
   YANLIŞ SORUYU KAYDET
   ========================================================= */

function saveWrongQuestion(
  question,
  moduleKey
) {

  const errors =
    safeJSON(
      localStorage.getItem(ERROR_KEY),
      {}
    );


  if (!errors[moduleKey]) {

    errors[moduleKey] = {};

  }


  if (
    !errors[moduleKey][question.id]
  ) {

    errors[moduleKey][question.id] = {

      id:
        question.id,

      kazanım:
        question.kazanım,

      konu:
        question.konu,

      context:
        question.context,

      text:
        question.text,

      wrongCount:
        1,

      lastWrong:
        Date.now()

    };

  } else {

    errors[moduleKey][question.id]
      .wrongCount++;

    errors[moduleKey][question.id]
      .lastWrong =
      Date.now();

  }


  localStorage.setItem(
    ERROR_KEY,
    JSON.stringify(errors)
  );

}


/* =========================================================
   METNİ NORMALİZE ET
   ========================================================= */

function normalizeText(text) {

  return String(text || "")
    .toLocaleLowerCase("tr-TR")
    .replace(/[.,!?;:()"']/g, "")
    .split(/\s+/)
    .filter(
      word => word.length > 3
    );

}


/* =========================================================
   BENZER SORU BUL
   ---------------------------------------------------------
   ÖNCE:
      aynı kazanım

   SONRA:
      aynı konu

   SONRA:
      aynı bağlam

   SONRA:
      ortak kelimeler
   ========================================================= */

function findSimilarQuestion(
  wrongQuestion,
  questionPool,
  usedQuestions
) {

  if (
    !wrongQuestion ||
    !Array.isArray(questionPool)
  ) {

    return null;

  }


  const wrongWords =
    new Set(
      normalizeText(
        `${wrongQuestion.context || ""}
         ${wrongQuestion.konu || ""}
         ${wrongQuestion.text || ""}`
      )
    );


  let candidates =
    questionPool.filter(
      q => {

        if (
          q.id ===
          wrongQuestion.id
        ) {
          return false;
        }

        if (
          usedQuestions.has(q.id)
        ) {
          return false;
        }

        /*
         * EN ÖNEMLİ KURAL:
         * Aynı kazanım değilse
         * benzer soru olarak seçme.
         */

        if (
          q.kazanım !==
          wrongQuestion.kazanım
        ) {

          return false;

        }

        return true;

      }
    );


  if (
    candidates.length === 0
  ) {

    return null;

  }


  candidates =
    candidates.map(
      q => {

        const words =
          new Set(
            normalizeText(
              `${q.context || ""}
               ${q.konu || ""}
               ${q.text || ""}`
            )
          );


        let score = 0;


        words.forEach(
          word => {

            if (
              wrongWords.has(word)
            ) {

              score++;

            }

          }
        );


        if (
          q.konu &&
          wrongQuestion.konu &&
          q.konu ===
          wrongQuestion.konu
        ) {

          score += 8;

        }


        if (
          q.context &&
          wrongQuestion.context &&
          q.context ===
          wrongQuestion.context
        ) {

          score += 10;

        }


        return {

          question: q,

          score

        };

      }
    );


  candidates.sort(
    (a, b) =>
      b.score - a.score
  );


  const bestScore =
    candidates[0].score;


  const best =
    candidates.filter(
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


/* =========================================================
   MODÜL PUANI
   ========================================================= */

export function markModuleScore(
  moduleKey,
  score,
  total
) {

  const progress =
    readProgress();


  if (
    !progress.sessions
  ) {

    progress.sessions = [];

  }


  progress.sessions.push({

    module:
      moduleKey,

    score,

    total,

    percentage:
      total
        ? Math.round(
            score / total * 100
          )
        : 0,

    at:
      Date.now()

  });


  writeProgress(progress);

}


/* =========================================================
   MODÜL ZİYARET
   ========================================================= */

export function markVisited(
  moduleKey
) {

  const progress =
    readProgress();


  if (
    !progress.visited
  ) {

    progress.visited = {};

  }


  progress.visited[
    moduleKey
  ] = Date.now();


  writeProgress(progress);

}


/* =========================================================
   KAZANIM ANALİZİ
   ========================================================= */

export function getLearningAnalysis() {

  const progress =
    readProgress();


  const results = [];


  Object.entries(
    progress.kazanımlar || {}
  ).forEach(
    ([kazanım, stat]) => {

      const percentage =
        stat.attempts
          ? Math.round(
              stat.correct /
              stat.attempts *
              100
            )
          : 0;


      let level =
        "Başlangıç";


      if (
        percentage >= 85
      ) {

        level =
          "Çok iyi";

      } else if (
        percentage >= 70
      ) {

        level =
          "İyi";

      } else if (
        percentage >= 50
      ) {

        level =
          "Gelişiyor";

      }


      let trend =
        "Sabit";


      if (
        stat.improvement > 0
      ) {

        trend =
          "Gelişiyor ↑";

      }


      results.push({

        kazanım,

        attempts:
          stat.attempts,

        correct:
          stat.correct,

        wrong:
          stat.wrong,

        percentage,

        level,

        trend

      });

    }
  );


  results.sort(
    (a, b) =>
      a.percentage -
      b.percentage
  );


  return results;

}


/* =========================================================
   GENEL ÖĞRENME RAPORU
   ========================================================= */

export function getLearningReport() {

  const results =
    getLearningAnalysis();


  if (
    results.length === 0
  ) {

    return {

      totalKazanım: 0,

      average: 0,

      strongest: null,

      weakest: null,

      trend:
        "Henüz yeterli veri yok",

      results: []

    };

  }


  const average =
    Math.round(
      results.reduce(
        (sum, item) =>
          sum +
          item.percentage,
        0
      ) /
      results.length
    );


  const weakest =
    results[0];


  const strongest =
    results[
      results.length - 1
    ];


  const hasImprovement =
    results.some(
      item =>
        item.trend ===
        "Gelişiyor ↑"
    );


  return {

    totalKazanım:
      results.length,

    average,

    strongest,

    weakest,

    trend:
      hasImprovement
        ? "Öğrenme gelişimi gözleniyor ↑"
        : "Yeterli süreç verisi oluşuyor",

    results

  };

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


  /*
   * VERİYİ NORMALİZE ET
   */

  const normalizedQuestions =
    questions
      .map(
        (q, index) =>
          normalizeQuestion(
            q,
            index,
            moduleKey
          )
      )
      .filter(Boolean);


  if (
    normalizedQuestions.length === 0
  ) {

    hostEl.innerHTML = `
      <div class="quiz-empty">
        Geçerli soru bulunamadı.
      </div>
    `;

    return;

  }


  function shuffle(array) {

    const arr =
      [...array];

    for (
      let i =
        arr.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() *
          (i + 1)
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


  let activeQuestions =
    shuffle(
      normalizedQuestions
    ).slice(
      0,
      Math.min(
        QUESTION_COUNT,
        normalizedQuestions.length
      )
    );


  const usedQuestions =
    new Set(
      activeQuestions.map(
        q => q.id
      )
    );


  const state = {

    answered: 0,

    correct: 0

  };


  hostEl.innerHTML = "";


  const wrap =
    document.createElement(
      "div"
    );

  wrap.className =
    "quiz";


  hostEl.appendChild(
    wrap
  );


  const summary =
    document.createElement(
      "div"
    );

  summary.className =
    "quiz-summary";


  hostEl.appendChild(
    summary
  );


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
        state.answered >=
        QUESTION_COUNT

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
      state.answered >=
      QUESTION_COUNT
    ) {

      markModuleScore(
        moduleKey,
        state.correct,
        QUESTION_COUNT
      );

    }

  }


  function replaceWithSimilar(
    card,
    wrongQuestion
  ) {

    const similar =
      findSimilarQuestion(
        wrongQuestion,
        normalizedQuestions,
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

            Bu kazanım için
            kullanılabilecek yeni
            benzer soru kalmadı.

          </div>

        `;

      }

      return;

    }


    usedQuestions.add(
      similar.id
    );


    const position =
      Number(
        card.dataset.position
      );


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


  function createQuestionCard(
    q,
    position
  ) {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "qcard";


    card.dataset.position =
      position;


    card.innerHTML = `

      <div class="qhead">

        <span class="qn">

          SORU
          ${position + 1}/${QUESTION_COUNT}

        </span>

        ${
          q.kazanım
            ?
            `
              <span
                class="q-kazanim"
              >
                ${q.kazanım}
              </span>
            `
            :
            ""
        }

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


    q.options.forEach(
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


            const allOptions =
              [
                ...optsEl.children
              ];


            allOptions.forEach(
              (
                el,
                index
              ) => {

                el.classList.add(
                  "disabled"
                );


                if (
                  index ===
                  q.correct
                ) {

                  el.classList.add(
                    "correct"
                  );

                }

              }
            );


            const isCorrect =
              optionIndex ===
              q.correct;


            /*
             * ÖĞRENME KAYDI
             */

            recordAnswer(
              q,
              isCorrect,
              moduleKey
            );


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

                <div
                  class="q-explain"
                >

                  ${q.explain || ""}

                </div>

              `;

            } else {

              optionEl.classList.add(
                "wrong"
              );


              saveWrongQuestion(
                q,
                moduleKey
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

                  ${q.explain || ""}

                </div>

                <button
                  type="button"
                  class="btn similar-btn"
                >

                  🔄 Benzerini Çöz

                </button>

              `;


              const button =
                feedbackEl.querySelector(
                  ".similar-btn"
                );


              button.addEventListener(
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


  activeQuestions.forEach(
    (
      question,
      position
    ) => {

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


  markVisited(
    moduleKey
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


  const fullKey =
    JOURNAL_PREFIX +
    key;


  const saved =
    localStorage.getItem(
      fullKey
    );


  if (saved) {

    textareaEl.value =
      saved;

  }


  const saveState =
    textareaEl.parentElement
      ?.querySelector(
        ".save-state"
      );


  let timer;


  textareaEl.addEventListener(
    "input",
    () => {

      clearTimeout(
        timer
      );


      if (saveState) {

        saveState.textContent =
          "Yazılıyor...";

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
                "✓ Kaydedildi";

            }

          },
          500
        );

    }
  );

}
