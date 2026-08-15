/* =========================================================
   AtomLab 9 — question-bank.js
   KİM.9.1.6 — Atom Orbitalleri ve Elektron Dizilimi
   50 soruluk pekiştirme soru havuzu
   ========================================================= */

export const QUESTION_BANK = {

  kim916: [

    {
      id: "K916-001",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Orbital",
      difficulty: "kolay",
      type: "kavram",
      text: "Bir orbital kavramını en doğru açıklayan ifade aşağıdakilerden hangisidir?",
      options: [
        "Elektronun çekirdek çevresinde izlediği kesin yörüngedir.",
        "Elektronun bulunma olasılığının yüksek olduğu uzay bölgesidir.",
        "Atomdaki protonların bulunduğu enerji düzeyidir.",
        "Bir enerji seviyesindeki elektronların tamamıdır.",
        "Çekirdeğin elektronlardan oluşan dış katmanıdır."
      ],
      correct: 1,
      explain: "Orbital, elektronun belirli bir anda bulunma olasılığının yüksek olduğu üç boyutlu bölgedir; kesin bir elektron yörüngesi değildir."
    },

    {
      id: "K916-002",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Orbital kapasitesi",
      difficulty: "kolay",
      type: "kavram",
      text: "Bir orbitalde bulunabilecek maksimum elektron sayısı kaçtır?",
      options: [
        "1",
        "2",
        "4",
        "6",
        "8"
      ],
      correct: 1,
      explain: "Pauli Dışlama İlkesi gereğince bir orbitalde en fazla iki elektron bulunabilir."
    },

    {
      id: "K916-003",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Orbital türleri",
      difficulty: "kolay",
      type: "kavram",
      text: "Bir p alt kabuğunda kaç orbital bulunur?",
      options: [
        "1",
        "2",
        "3",
        "5",
        "7"
      ],
      correct: 2,
      explain: "p alt kabuğunda üç orbital bulunur. Bu orbitaller toplam 6 elektron alabilir."
    },

    {
      id: "K916-004",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Orbital kapasitesi",
      difficulty: "kolay",
      type: "yorum",
      text: "Bir atomun 2p alt kabuğu tamamen dolu olduğunda bu alt kabukta kaç elektron bulunur?",
      options: [
        "2",
        "3",
        "4",
        "6",
        "8"
      ],
      correct: 3,
      explain: "2p alt kabuğunda üç orbital vardır ve her orbital en fazla 2 elektron alır. Bu nedenle toplam kapasite 6 elektrondur."
    },

    {
      id: "K916-005",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Alt kabuklar",
      difficulty: "kolay",
      type: "kavram",
      text: "Aşağıdaki alt kabuklardan hangisinin toplam elektron kapasitesi en fazladır?",
      options: [
        "1s",
        "2s",
        "2p",
        "3p",
        "3d"
      ],
      correct: 4,
      explain: "d alt kabuğunda 5 orbital bulunur ve toplam 10 elektron alabilir. s alt kabukları 2, p alt kabukları 6 elektron alır."
    },

    {
      id: "K916-006",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Pauli",
      difficulty: "orta",
      type: "yorum",
      text: "Bir orbitalde iki elektron bulunduğu gözleniyor. Bu iki elektron için aşağıdakilerden hangisi kesinlikle doğrudur?",
      options: [
        "Spinleri aynı yönlüdür.",
        "Aynı enerji düzeyinde bulunamazlar.",
        "Spinleri zıt yönlüdür.",
        "Biri mutlaka p elektronudur.",
        "Elektronlardan biri protona dönüşür."
      ],
      correct: 2,
      explain: "Aynı orbitalde bulunan iki elektronun dört kuantum sayısının tamamı aynı olamayacağından spinleri zıt olmalıdır."
    },

    {
      id: "K916-007",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Hund",
      difficulty: "orta",
      type: "yorum",
      text: "Üç eş enerjili p orbitali boş durumdan doldurulurken elektronlar önce nasıl yerleşir?",
      options: [
        "İlk orbital tamamen doldurulur.",
        "Elektronlar üç orbitale birer birer ve paralel spinle yerleşir.",
        "Elektronlar üç orbitale rastgele yerleşir.",
        "İki elektron ilk orbitale, biri ikinci orbitale yerleşir.",
        "Her orbitalde önce zıt spinli elektron çifti oluşur."
      ],
      correct: 1,
      explain: "Hund Kuralı'na göre eş enerjili orbitaller önce birer elektronla ve aynı yönlü spinlerle doldurulur."
    },

    {
      id: "K916-008",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Hund",
      difficulty: "orta",
      type: "uygulama",
      text: "Bir atomun 2p alt kabuğunda 4 elektron bulunmaktadır. Hund Kuralı'na uygun orbital gösterimi hangisidir?",
      options: [
        "↑↓  ↑↓  —",
        "↑↓  ↑  ↑",
        "↑  ↑  ↑",
        "↑↓  —  ↑↓",
        "↑↓  ↓  ↑"
      ],
      correct: 1,
      explain: "2p⁴ için üç p orbitali önce birer paralel spinli elektron alır; dördüncü elektron bu orbitallerden birinde eşleşir. (\"↑ ↑ ↑\" seçeneği yalnızca 3 elektron gösterdiği için yanlıştır, elektron sayısı eksiktir.)"
    },

    {
      id: "K916-009",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Aufbau",
      difficulty: "orta",
      type: "uygulama",
      text: "Elektronların temel hâlde orbitallere yerleşmesinde kullanılan Aufbau ilkesinin temel fikri nedir?",
      options: [
        "Elektronlar önce en yüksek enerjili orbitallere yerleşir.",
        "Elektronlar yalnızca p orbitallerine yerleşir.",
        "Elektronlar düşük enerjili orbitallerden başlayarak yerleşir.",
        "Elektronlar her zaman aynı spinle yerleşir.",
        "Elektronlar yalnızca son katmana yerleşir."
      ],
      correct: 2,
      explain: "Aufbau ilkesine göre elektronlar temel hâlde düşük enerjili orbitallerden başlayarak daha yüksek enerjili orbitallere yerleşir."
    },

    {
      id: "K916-010",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Orbital enerji sırası",
      difficulty: "orta",
      type: "uygulama",
      text: "Temel hâl elektron diziliminde aşağıdaki orbitallerden hangisi daha önce dolar?",
      options: [
        "3d",
        "4p",
        "4s",
        "5s",
        "4d"
      ],
      correct: 2,
      explain: "Genel orbital enerji sıralamasında 4s, 3d'den önce dolar."
    },

    {
      id: "K916-011",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "kolay",
      type: "uygulama",
      text: "Atom numarası 6 olan nötr karbon atomunun temel hâl elektron dizilimi hangisidir?",
      options: [
        "1s² 2s² 2p²",
        "1s² 2s⁴",
        "1s² 2p⁴",
        "1s² 2s² 2p⁴",
        "1s² 2s¹ 2p³"
      ],
      correct: 0,
      explain: "Karbonun 6 elektronu vardır. Elektronlar 1s², 2s² ve kalan 2 elektron 2p'ye yerleşir."
    },

    {
      id: "K916-012",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "kolay",
      type: "uygulama",
      text: "Atom numarası 8 olan oksijen atomunun temel hâl elektron dizilimi hangisidir?",
      options: [
        "1s² 2s² 2p²",
        "1s² 2s² 2p⁴",
        "1s² 2p⁶",
        "1s² 2s⁴ 2p²",
        "1s² 2s² 2p⁶"
      ],
      correct: 1,
      explain: "Oksijenin 8 elektronu vardır: 1s² 2s² 2p⁴."
    },

    {
      id: "K916-013",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "kolay",
      type: "uygulama",
      text: "Atom numarası 11 olan nötr sodyum atomunun temel hâl elektron dizilimi hangisidir?",
      options: [
        "1s² 2s² 2p⁶ 3s¹",
        "1s² 2s² 2p⁵ 3s²",
        "1s² 2s² 2p⁶ 3p¹",
        "1s² 2s² 2p⁶ 3s²",
        "1s² 2s² 2p⁶ 4s¹"
      ],
      correct: 0,
      explain: "Sodyumun 11 elektronu vardır ve son elektron 3s orbitaline yerleşir."
    },

    {
      id: "K916-014",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "orta",
      type: "uygulama",
      text: "Atom numarası 12 olan magnezyum atomunun temel hâl elektron diziliminde kaç tane tam dolu orbital vardır?",
      options: [
        "3",
        "4",
        "5",
        "6",
        "7"
      ],
      correct: 3,
      explain: "Mg: 1s² 2s² 2p⁶ 3s². 1s, 2s, üç 2p ve 3s olmak üzere toplam 6 orbital tamamen doludur."
    },

    {
      id: "K916-015",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Eşleşmemiş elektron",
      difficulty: "orta",
      type: "yorum",
      text: "Temel hâlde 1s² 2s² 2p³ elektron dizilimine sahip bir atomda kaç eşleşmemiş elektron bulunur?",
      options: [
        "0",
        "1",
        "2",
        "3",
        "5"
      ],
      correct: 3,
      explain: "2p³ durumunda Hund Kuralı gereği üç p orbitaline birer elektron yerleşir. Bu nedenle 3 eşleşmemiş elektron vardır."
    },

    {
      id: "K916-016",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Eşleşmemiş elektron",
      difficulty: "orta",
      type: "yorum",
      text: "1s² 2s² 2p⁴ elektron dizilimine sahip bir atomun temel hâlinde kaç eşleşmemiş elektronu vardır?",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4"
      ],
      correct: 2,
      explain: "2p⁴ orbital dağılımı Hund Kuralı'na göre ↑↓ ↑ ↑ şeklindedir. İki elektron eşleşmemiş durumdadır."
    },

    {
      id: "K916-017",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Değerlik elektronu",
      difficulty: "kolay",
      type: "uygulama",
      text: "1s² 2s² 2p⁶ 3s² 3p¹ elektron dizilimine sahip nötr atomun son enerji düzeyinde kaç elektron vardır?",
      options: [
        "1",
        "2",
        "3",
        "6",
        "13"
      ],
      correct: 2,
      explain: "En büyük n değeri 3'tür. 3s² ve 3p¹ toplam 3 elektron son enerji düzeyindedir."
    },

    {
      id: "K916-018",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Soy gaz gösterimi",
      difficulty: "orta",
      type: "uygulama",
      text: "Klor atomunun [Ne] gösterimiyle elektron dizilimi aşağıdakilerden hangisidir?",
      options: [
        "[Ne] 3s² 3p⁵",
        "[Ne] 3s¹ 3p⁶",
        "[Ne] 3p⁷",
        "[Ne] 4s² 4p⁵",
        "[Ne] 3s² 3d⁵"
      ],
      correct: 0,
      explain: "Klorun atom numarası 17'dir. [Ne] çekirdek gösteriminden sonra 7 elektron 3. enerji düzeyine yerleşir: 3s² 3p⁵."
    },

    {
      id: "K916-019",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "orta",
      type: "uygulama",
      text: "Aşağıdaki elektron dizilimlerinden hangisi 10 elektronlu nötr olmayan bir taneciğe ait olabilir?",
      options: [
        "1s² 2s² 2p⁵",
        "1s² 2s² 2p⁶",
        "1s² 2s² 2p⁴ 3s²",
        "1s² 2s² 2p⁶ 3s¹",
        "1s² 2s⁶ 2p²"
      ],
      correct: 1,
      explain: "1s² 2s² 2p⁶ toplam 10 elektrondur. Bu dizilim farklı atom veya iyonların izoelektronik durumunu temsil edebilir."
    },

    {
      id: "K916-020",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "orta",
      type: "yorum",
      text: "Bir taneciğin elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁵ şeklindedir. Bu tanecikte toplam kaç elektron vardır?",
      options: [
        "15",
        "16",
        "17",
        "18",
        "19"
      ],
      correct: 2,
      explain: "Üst indisler toplanır: 2 + 2 + 6 + 2 + 5 = 17 elektron."
    },

    {
      id: "K916-021",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Orbital enerji",
      difficulty: "orta",
      type: "karşılaştırma",
      text: "Aşağıdaki orbital çiftlerinden hangisinde enerji sıralaması temel hâl atomları için doğru verilmiştir?",
      options: [
        "3d < 4s",
        "4p < 3d",
        "4s < 3d",
        "5s < 4p",
        "4d < 5s"
      ],
      correct: 2,
      explain: "Elektronların yerleşme sıralamasında 4s, 3d'den önce gelir."
    },

    {
      id: "K916-022",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Aufbau",
      difficulty: "orta",
      type: "hata analizi",
      text: "Bir öğrenci elektronları 1s, 2s, 2p, 3s ve ardından 3d orbitallerine yerleştirmiştir. Bu dizilimde hangi temel hâl yerleşim kuralı gözden kaçırılmıştır?",
      options: [
        "Pauli Dışlama İlkesi",
        "Hund Kuralı",
        "Aufbau İlkesi",
        "Elektronların yükü",
        "Çekirdek yükü"
      ],
      correct: 2,
      explain: "3d'den önce 4s orbitali dolar. Öğrenci 4s'yi atladığı için Aufbau ilkesine uygun davranmamıştır."
    },

    {
      id: "K916-023",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Hund",
      difficulty: "orta",
      type: "hata analizi",
      text: "Bir öğrenci 2p² için orbital gösterimini ↑↓ | — | — şeklinde yazmıştır. Bu gösterimdeki temel hata nedir?",
      options: [
        "2p alt kabuğunda yalnızca bir orbital vardır.",
        "Elektronlar önce farklı eş enerjili orbitallere tek tek yerleşmelidir.",
        "İki elektronun spinleri mutlaka zıt olmalıdır.",
        "2p alt kabuğu en fazla bir elektron alabilir.",
        "Elektronlar önce 3p'ye geçmelidir."
      ],
      correct: 1,
      explain: "Hund Kuralı gereği 2p² için elektronlar iki farklı p orbitaline önce birer paralel spinli elektron olarak yerleşir."
    },

    {
      id: "K916-024",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Pauli",
      difficulty: "orta",
      type: "hata analizi",
      text: "Bir orbital için ↑↑ gösterimi verilmiştir. Bu gösterimin temel hâl için uygun olmamasının nedeni nedir?",
      options: [
        "Bir orbitalde iki elektron bulunamaz.",
        "Elektronların enerjileri farklıdır.",
        "Aynı orbitaldeki iki elektronun spinleri zıt olmalıdır.",
        "p orbitali yalnızca üç elektron alabilir.",
        "Elektronlar aynı atomda bulunamaz."
      ],
      correct: 2,
      explain: "Aynı orbitalde iki elektron bulunabilir ancak Pauli ilkesine göre spinleri zıt yönlü olmalıdır."
    },

    {
      id: "K916-025",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron sayısı",
      difficulty: "kolay",
      type: "uygulama",
      text: "17 protona sahip nötr bir atomun kaç elektronu vardır?",
      options: [
        "7",
        "10",
        "17",
        "18",
        "34"
      ],
      correct: 2,
      explain: "Nötr atomlarda proton sayısı elektron sayısına eşittir."
    },

    {
      id: "K916-026",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "İyon ve elektron dizilimi",
      difficulty: "orta",
      type: "uygulama",
      text: "11 protonlu Na⁺ iyonunun toplam elektron sayısı kaçtır?",
      options: [
        "9",
        "10",
        "11",
        "12",
        "13"
      ],
      correct: 1,
      explain: "Nötr Na atomunda 11 elektron vardır. Na⁺ bir elektron verdiği için 10 elektrona sahiptir."
    },

    {
      id: "K916-027",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "İyon ve elektron dizilimi",
      difficulty: "orta",
      type: "uygulama",
      text: "17 protonlu Cl⁻ iyonunun toplam elektron sayısı kaçtır?",
      options: [
        "16",
        "17",
        "18",
        "19",
        "34"
      ],
      correct: 2,
      explain: "Cl atomu 17 elektrona sahiptir. Cl⁻ bir elektron aldığı için 18 elektrona ulaşır."
    },

    {
      id: "K916-028",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "İzoelektronik",
      difficulty: "orta",
      type: "karşılaştırma",
      text: "Aşağıdaki taneciklerden hangisi Ne atomu ile izoelektroniktir?",
      options: [
        "Na⁺",
        "Na",
        "Mg",
        "F",
        "O"
      ],
      correct: 0,
      explain: "Ne 10 elektrona sahiptir. Na⁺ da 11 - 1 = 10 elektrona sahiptir."
    },

    {
      id: "K916-029",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "İzoelektronik",
      difficulty: "orta",
      type: "karşılaştırma",
      text: "Aşağıdaki taneciklerden hangisi Ar atomu ile aynı elektron sayısına sahiptir?",
      options: [
        "K",
        "Mg²⁺",
        "Cl⁻",
        "Ca⁺",
        "S"
      ],
      correct: 2,
      explain: "Ar 18 elektrona sahiptir. Cl⁻ de 17 + 1 = 18 elektrona sahiptir. (Mg²⁺: 12 − 2 = 10, Ca⁺: 20 − 1 = 19, K: 19, S: 16 elektron.)"
    },

    {
      id: "K916-030",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Orbital kapasitesi",
      difficulty: "kolay",
      type: "yorum",
      text: "Bir atomda 4 tane tam dolu s orbitali varsa bu orbitallerde toplam kaç elektron bulunur?",
      options: [
        "4",
        "6",
        "8",
        "10",
        "12"
      ],
      correct: 2,
      explain: "Her s orbitali en fazla 2 elektron alır. Dört tam dolu s orbitali toplam 8 elektron içerir."
    },

    {
      id: "K916-031",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Alt kabuk kapasitesi",
      difficulty: "kolay",
      type: "yorum",
      text: "Bir d alt kabuğunun tamamen dolu olması için kaç elektron gerekir?",
      options: [
        "2",
        "6",
        "8",
        "10",
        "14"
      ],
      correct: 3,
      explain: "d alt kabuğunda 5 orbital vardır. Her orbital 2 elektron aldığı için toplam kapasite 10 elektrondur."
    },

    {
      id: "K916-032",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Alt kabuk kapasitesi",
      difficulty: "kolay",
      type: "yorum",
      text: "Bir f alt kabuğunda kaç orbital bulunur?",
      options: [
        "1",
        "3",
        "5",
        "7",
        "9"
      ],
      correct: 3,
      explain: "f alt kabuğunda 7 orbital bulunur ve toplam 14 elektron alabilir."
    },

    {
      id: "K916-033",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Orbital sayısı",
      difficulty: "orta",
      type: "yorum",
      text: "Bir atomun 3p alt kabuğunda bulunan orbitallerin toplam kapasitesi kaç elektrondur?",
      options: [
        "2",
        "3",
        "4",
        "6",
        "8"
      ],
      correct: 3,
      explain: "p alt kabuğunda 3 orbital bulunur ve her biri 2 elektron alabilir. Toplam kapasite 6'dır."
    },

    {
      id: "K916-034",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "orta",
      type: "uygulama",
      text: "Aşağıdaki dizilimlerden hangisi temel hâlde 9 elektronlu bir atomu gösterir?",
      options: [
        "1s² 2s² 2p⁵",
        "1s² 2s² 2p⁶",
        "1s² 2s¹ 2p⁶",
        "1s² 2p⁷",
        "1s² 2s³ 2p⁴"
      ],
      correct: 0,
      explain: "2 + 2 + 5 = 9 elektron. Bu, flor atomunun temel hâl elektron dizilimidir."
    },

    {
      id: "K916-035",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "orta",
      type: "uygulama",
      text: "Aşağıdaki dizilimlerden hangisi temel hâlde 15 elektronlu bir atomu gösterir?",
      options: [
        "1s² 2s² 2p⁶ 3s² 3p³",
        "1s² 2s² 2p⁶ 3s³ 3p²",
        "1s² 2s² 2p⁶ 3p⁷",
        "1s² 2s² 2p⁶ 3s² 4p³",
        "1s² 2s² 2p⁵ 3s² 3p⁴"
      ],
      correct: 0,
      explain: "2 + 2 + 6 + 2 + 3 = 15 elektrondur. Bu fosforun temel hâl dizilimidir."
    },

    {
      id: "K916-036",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "orta",
      type: "hata analizi",
      text: "Bir öğrenci 14 elektronlu Si atomu için 1s² 2s² 2p⁶ 3s² 3p² dizilimini yazmıştır. Öğrencinin sonucu için ne söylenebilir?",
      options: [
        "Doğrudur; toplam 14 elektron vardır.",
        "Yanlıştır; 3p yerine 3d yazılmalıdır.",
        "Yanlıştır; 2p yalnızca 4 elektron alabilir.",
        "Doğrudur ancak Hund Kuralı ihlal edilmiştir.",
        "Yanlıştır; Si 10 elektronludur."
      ],
      correct: 0,
      explain: "Si'nin 14 elektronu vardır ve temel hâl dizilimi 1s² 2s² 2p⁶ 3s² 3p² şeklindedir."
    },

    {
      id: "K916-037",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Eşleşmemiş elektron",
      difficulty: "orta",
      type: "uygulama",
      text: "1s² 2s² 2p¹ elektron dizilimine sahip atomda kaç eşleşmemiş elektron bulunur?",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4"
      ],
      correct: 1,
      explain: "2p¹ durumunda tek elektron tek bir p orbitalinde bulunur ve eşleşmemiştir."
    },

    {
      id: "K916-038",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Eşleşmemiş elektron",
      difficulty: "orta",
      type: "uygulama",
      text: "1s² 2s² 2p⁶ 3s² 3p² dizilimine sahip atomun temel hâlinde kaç eşleşmemiş elektron vardır?",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4"
      ],
      correct: 2,
      explain: "3p² elektronları Hund Kuralı'na göre iki ayrı p orbitaline birer elektron olarak yerleşir. İki eşleşmemiş elektron vardır."
    },

    {
      id: "K916-039",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Eşleşmemiş elektron",
      difficulty: "zor",
      type: "yorum",
      text: "Bir atomun temel hâl elektron diziliminde son alt kabuk 3p⁵'tir. Bu atomda 3p alt kabuğundaki eşleşmemiş elektron sayısı kaçtır?",
      options: [
        "0",
        "1",
        "2",
        "3",
        "5"
      ],
      correct: 1,
      explain: "3p⁵ dağılımı üç orbitalde ↑↓, ↑↓, ↑ şeklindedir. Bu nedenle 1 eşleşmemiş elektron vardır."
    },

    {
      id: "K916-040",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Değerlik elektronları",
      difficulty: "orta",
      type: "uygulama",
      text: "1s² 2s² 2p⁶ 3s² 3p⁴ dizilimine sahip atomun son enerji düzeyinde kaç elektron vardır?",
      options: [
        "2",
        "4",
        "5",
        "6",
        "8"
      ],
      correct: 3,
      explain: "En büyük enerji düzeyi n=3'tür. 3s² + 3p⁴ = 6 elektron bulunur."
    },

    {
      id: "K916-041",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Soy gaz gösterimi",
      difficulty: "orta",
      type: "uygulama",
      text: "Potasyum atomunun elektron dizilimi soy gaz gösterimiyle nasıl yazılır?",
      options: [
        "[Ne] 3s² 3p⁶",
        "[Ar] 4s¹",
        "[Ar] 3d¹",
        "[Ne] 4s² 4p¹",
        "[Kr] 5s¹"
      ],
      correct: 1,
      explain: "K atomu 19 elektrona sahiptir. Ar çekirdeğinden sonra bir elektron 4s orbitaline yerleşir: [Ar] 4s¹."
    },

    {
      id: "K916-042",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Soy gaz gösterimi",
      difficulty: "orta",
      type: "uygulama",
      text: "Kalsiyum atomunun kısa elektron dizilimi aşağıdakilerden hangisidir?",
      options: [
        "[Ne] 3s² 3p⁶ 4s²",
        "[Ar] 4s²",
        "[Ar] 3d²",
        "[Ne] 4s² 4p²",
        "[Kr] 4s²"
      ],
      correct: 1,
      explain: "Ca, Ar'dan sonra 4s orbitaline iki elektron yerleşmesiyle [Ar] 4s² şeklinde gösterilir."
    },

    {
      id: "K916-043",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Orbital enerji",
      difficulty: "zor",
      type: "yorum",
      text: "Bir öğrenci 4s orbitalinin 3d orbitalinden önce dolduğunu öğreniyor. Bu durum aşağıdaki hangi ilkeyle doğrudan ilişkilidir?",
      options: [
        "Pauli İlkesi",
        "Hund Kuralı",
        "Aufbau İlkesi",
        "Kütlenin korunumu",
        "Elektriksel nötrlük"
      ],
      correct: 2,
      explain: "Elektronların düşük enerjili orbitallerden başlayarak yerleşmesi Aufbau ilkesiyle açıklanır."
    },

    {
      id: "K916-044",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Bağlam",
      difficulty: "zor",
      type: "bağlam",
      text: "Bir öğrenci üç farklı atom için elektron dizilimlerini inceliyor. X: 1s² 2s² 2p⁶ 3s¹, Y: 1s² 2s² 2p⁶ 3s², Z: 1s² 2s² 2p⁶. Buna göre aşağıdaki yorumlardan hangisi doğrudur?",
      options: [
        "X'in toplam elektron sayısı 10'dur.",
        "Y'nin toplam elektron sayısı 11'dir.",
        "Z'nin toplam elektron sayısı 10'dur.",
        "X ve Z aynı sayıda elektrona sahiptir.",
        "Y ve Z aynı elektron dizilimine sahiptir."
      ],
      correct: 2,
      explain: "Z'nin elektron sayısı 2+2+6=10'dur. X=11, Y=12 elektrona sahiptir."
    },

    {
      id: "K916-045",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Bağlam",
      difficulty: "zor",
      type: "bağlam",
      text: "Bir laboratuvar çalışmasında üç taneciğin elektron sayıları sırasıyla 10, 10 ve 18 olarak bulunuyor. Buna göre bu taneciklerle ilgili hangi sonuç kesinlikle söylenebilir?",
      options: [
        "Üçü de aynı elementtir.",
        "Üçü de nötr atomdur.",
        "İlk iki tanecik elektron sayısı bakımından izoelektronik olabilir.",
        "18 elektronlu tanecik kesinlikle Ar atomudur.",
        "İlk iki taneciğin proton sayıları kesinlikle aynıdır."
      ],
      correct: 2,
      explain: "Elektron sayıları aynı olan farklı atom veya iyonlar izoelektronik olabilir. Ancak yalnızca elektron sayısından proton sayısı veya yük kesin olarak belirlenemez."
    },

    {
      id: "K916-046",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "zor",
      type: "akıl yürütme",
      text: "Bir nötr atomun temel hâl elektron diziliminde 3p alt kabuğunda üç elektron bulunmaktadır. Bu atomun atom numarası kaçtır?",
      options: [
        "11",
        "12",
        "13",
        "14",
        "15"
      ],
      correct: 4,
      explain: "Dizilim 1s² 2s² 2p⁶ 3s² 3p³ şeklindedir. Toplam elektron sayısı 15'tir."
    },

    {
      id: "K916-047",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Elektron dizilimi",
      difficulty: "zor",
      type: "akıl yürütme",
      text: "Bir nötr atomun temel hâl elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ şeklindedir. Bu atomun toplam elektron sayısı kaçtır?",
      options: [
        "17",
        "18",
        "19",
        "20",
        "21"
      ],
      correct: 2,
      explain: "2+2+6+2+6+1 = 19 elektrondur. Bu dizilim potasyuma aittir."
    },

    {
      id: "K916-048",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Hata analizi",
      difficulty: "zor",
      type: "hata analizi",
      text: "Bir öğrenci 2p⁶ elektronlarını üç orbital yerine tek bir orbitalde göstermiştir. Öğretmenin bu öğrenciyi düzeltirken söylemesi gereken en temel bilgi hangisidir?",
      options: [
        "p alt kabuğunda bir orbital bulunur.",
        "p alt kabuğunda üç eş enerjili orbital bulunur.",
        "p alt kabuğunda beş orbital bulunur.",
        "Her orbital en fazla altı elektron alır.",
        "Elektronlar p alt kabuğunda bulunamaz."
      ],
      correct: 1,
      explain: "p alt kabuğu üç eş enerjili orbitalden oluşur. Her orbital en fazla iki elektron alır; bu nedenle p alt kabuğunun toplam kapasitesi 6'dır."
    },

    {
      id: "K916-049",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Bütünleştirme",
      difficulty: "zor",
      type: "bağlam",
      text: "Bir öğretmen öğrencilerinden 2p⁵ dizilimi için orbital şeması hazırlamalarını istiyor. Öğrencilerden biri ↑↓ | ↑↓ | ↑ şeklinde gösteriyor. Bu gösterim için hangisi doğrudur?",
      options: [
        "Pauli ve Hund kurallarına uygundur.",
        "Hund Kuralı ihlal edilmiştir; elektronlar aynı orbitale yerleşmelidir.",
        "Pauli ilkesi ihlal edilmiştir; elektronlar aynı spinli olmalıdır.",
        "2p alt kabuğunda beş orbital vardır.",
        "2p⁵ için mutlaka üç eşleşmemiş elektron bulunmalıdır."
      ],
      correct: 0,
      explain: "2p⁵ için iki orbitalde çiftleşmiş, bir orbitalde tek elektron bulunması Hund ve Pauli ilkelerine uygundur."
    },

    {
      id: "K916-050",
      kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
      konu: "Bütünleştirme",
      difficulty: "zor",
      type: "bağlam",
      text: "Bir öğrenci bir atomun elektron dizilimini oluştururken önce orbitallerin enerji sırasını dikkate alıyor, aynı enerjili orbitallere elektronları önce tek tek yerleştiriyor ve aynı orbitaldeki elektronların spinlerini zıt seçiyor. Öğrenci sırasıyla hangi ilkeleri kullanmıştır?",
      options: [
        "Pauli → Aufbau → Hund",
        "Hund → Pauli → Aufbau",
        "Aufbau → Hund → Pauli",
        "Aufbau → Pauli → Hund",
        "Hund → Aufbau → Pauli"
      ],
      correct: 2,
      explain: "Düşük enerjiliden yükseğe yerleşim Aufbau, eş enerjili orbitallere önce tek tek yerleşim Hund, aynı orbitaldeki elektronların zıt spinli olması Pauli ilkesidir."
    }

  ]

};
