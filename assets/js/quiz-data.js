/* =========================================================
   AtomLab 9 — quiz-data.js
   Bağlam temelli değerlendirme soru havuzu
   KİM.9.1.1 – KİM.9.1.8 kazanımları MEB müfredatına göre
   yeniden eşleştirilmiştir.
   ========================================================= */

export const QUIZ = {
  "gunluk": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Ali sabah kalktığında sırasıyla diş fırçalar, kahvaltıda reçel yer, güneş kremi sürer ve okula giderken otobüsün egzozundan çıkan dumanı fark eder.",
    text: "Bu dört olaydan kaçı doğrudan bir kimyasal madde ya da kimyasal süreçle ilişkilidir?",
    options: ["1", "2", "3", "4", "Hiçbiri"],
    correct: 3,
    explain: "Diş macunu, reçeldeki şeker/pektin, güneş kreminin UV filtre bileşenleri ve egzoz gazındaki yanma ürünleri — dördü de kimyasal maddelerle ilgilidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir market rafında; sabun, elma, çivi ve pil yan yana duruyor.",
    text: "Bu dört üründen hangisi hem 'doğal' hem de kimyasal madde içermeyen tek örnek olarak düşünülemez, çünkü:",
    options: [
      "Hepsi atomlardan/moleküllerden oluştuğu için tümü kimyasal maddedir",
      "Sadece sabun kimyasaldır, diğerleri doğaldır",
      "Sadece pil kimyasaldır, diğerleri doğaldır",
      "Elma hariç hepsi kimyasaldır",
      "Hiçbiri kimyasal madde değildir"
    ],
    correct: 0,
    explain: "Evrendeki her madde (doğal ya da işlenmiş fark etmeksizin) atom ve moleküllerden oluşur; 'kimyasal' ile 'doğal' birbirinin zıttı değildir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Zeynep limonatayı hazırlarken suya şeker ekliyor, karıştırıyor ve şekerin gözden kayboldğunu gözlemliyor.",
    text: "Şekerin suda 'kaybolması' olayı için en doğru bilimsel açıklama hangisidir?",
    options: [
      "Şeker yok olmuştur, kütle kaybı gerçekleşmiştir",
      "Şeker yeni bir maddeye dönüşmüştür (kimyasal değişim)",
      "Şeker molekülleri su molekülleri arasına dağılmış, çözünmüştür",
      "Su, şekeri buharlaştırmıştır",
      "Şeker sadece gözle görülemeyecek kadar küçülmüştür ama yapısı bozulmuştur"
    ],
    correct: 2,
    explain: "Çözünme fiziksel bir olaydır; şeker molekülleri yapısını korur, yalnızca su molekülleri arasına homojen dağılır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tarifte 'kabartma tozunu sirkeyle karıştırın, köpürmesini bekleyin' yazıyor.",
    text: "Karışımın köpürmesi neyin göstergesidir?",
    options: [
      "Fiziksel bir karışımın oluştuğunun",
      "Sıcaklığın aniden düştüğünün",
      "Yeni bir gaz maddenin (karbondioksit) açığa çıktığı bir kimyasal tepkimenin gerçekleştiğinin",
      "Sirkenin buharlaştığının",
      "Kabartma tozunun sadece eridiğinin"
    ],
    correct: 2,
    explain: "Kabartma tozu (sodyum bikarbonat) ile asit (sirke) tepkimeye girdiğinde CO₂ gazı açığa çıkar; gaz çıkışı kimyasal değişimin tipik bir belirtisidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir ailenin mutfağında sırasıyla şu işlemler yapılıyor: (1) elmayı dilimlemek, (2) ekmeği kızartmak, (3) suyu kaynatmak, (4) eti pişirmek.",
    text: "Bu işlemlerden kaçında geri dönüşü olmayan bir kimyasal değişim gerçekleşir?",
    options: ["0", "1", "2", "3", "4"],
    correct: 2,
    explain: "Ekmeği kızartmak (Maillard tepkimesi/karamelizasyon) ve eti pişirmek (protein denatürasyonu, yeni bileşikler oluşumu) kimyasal değişimdir; dilimleme ve kaynatma fiziksel değişimdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Kerem 'kimya sadece laboratuvarda beyaz önlüklü insanların yaptığı bir iştir' diye düşünüyor.",
    text: "Bu düşünceye karşı en güçlü kanıt aşağıdakilerden hangisidir?",
    options: [
      "Laboratuvarlarda gerçekten beyaz önlük giyilir",
      "Kimyagerler sadece üniversitelerde çalışır",
      "Vücudumuzdaki sindirim, nefes alma ve enerji üretimi gibi süreçler de birer kimyasal olaydır",
      "Kimya dersi sadece 9. sınıfta okutulur",
      "Kimyasallar sadece market raflarında bulunur"
    ],
    correct: 2,
    explain: "Kimya, laboratuvarla sınırlı değildir; canlı vücudundaki metabolik tepkimeler dahil, evrende madde içeren her süreç kimyanın konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir stajyer ütü yaparken kumaşın üzerinde kalan bir plastik düğmenin erimeye başladığını fark ediyor.",
    text: "Bu gözlem, öğrenciye maddeler hakkında hangi bilgiyi kazandırır?",
    options: [
      "Tüm plastikler aynı sıcaklıkta erir",
      "Farklı maddelerin ısıya karşı dayanıklılığı (erime noktası gibi özellikleri) farklıdır",
      "Kumaş da plastik gibi erir",
      "Ütünün sıcaklığı hiçbir zaman değişmez",
      "Erime her zaman kimyasal bir değişimdir"
    ],
    correct: 1,
    explain: "Her madde kendine özgü fiziksel özelliklere (erime noktası gibi) sahiptir; bu yüzden kumaş dayanırken düğme erimiştir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir güvenlik uzmanı elindeki dört ürünün etiketini okuyor: sabun (temizlik), aspirin (ilaç), gübre (tarım), benzin (enerji).",
    text: "Bu örnekler, kimyanın günlük hayattaki rolü hakkında en çok neyi gösterir?",
    options: [
      "Kimyanın yalnızca sağlık alanında kullanıldığını",
      "Kimyanın temizlik, sağlık, tarım ve enerji gibi birbirinden çok farklı ihtiyaç alanlarına hizmet ettiğini",
      "Bu dört ürünün aynı kimyasal maddeden yapıldığını",
      "Kimyanın yalnızca endüstriyel üretimle sınırlı olduğunu",
      "Bu ürünlerin hiçbirinin kimyasal madde içermediğini"
    ],
    correct: 1,
    explain: "Kimya; temizlik, sağlık/ilaç, gıda, enerji ve tarım gibi çok geniş bir ihtiyaç yelpazesine katkı sağlayan bir bilim dalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir çevre mühendisi naftalin (güve topu) tabletinin dolapta zamanla küçülüp yok olduğunu, hiç sıvılaşmadığını fark ediyor.",
    text: "Bu gözlemlenen olay hangi fiziksel süreçle açıklanır?",
    options: [
      "Kaynama", "Donma", "Süblimleşme (katıdan doğrudan gaza geçiş)", "Yoğuşma", "Kimyasal bozunma"
    ],
    correct: 2,
    explain: "Naftalin, oda sıcaklığında sıvı hâle geçmeden doğrudan katıdan gaza dönüşür; bu olaya süblimleşme denir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Selin 'her karışım bir kimyasal bileşiktir' cümlesini kuruyor.",
    text: "Bu cümledeki bilimsel hata nedir?",
    options: [
      "Karışımlar bileşik değildir, karışımı oluşturan maddeler kendi özelliklerini korur ve değişken oranlarda karışabilir",
      "Karışımlar her zaman homojendir",
      "Bileşikler karışımlardan daha az saf maddedir",
      "Karışımlar yalnızca katılardan oluşur",
      "Cümlede herhangi bir hata yoktur"
    ],
    correct: 0,
    explain: "Karışımlar, bileşenlerin kimyasal olarak birleşmediği, kendi özelliklerini koruduğu ve fiziksel yöntemlerle ayrılabildiği maddelerdir; bileşiklerle karıştırılmamalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Mehmet soğuk bir bardağın dışında su damlacıkları oluştuğunu görüyor; bardağın içinde sadece buzlu su var, hiçbir sıvı dökülmemiş.",
    text: "Bardağın dışındaki su damlacıklarının kaynağı nedir?",
    options: [
      "Bardağın gözeneklerinden sızan su",
      "Havadaki su buharının soğuk yüzeyle temas edip yoğuşması",
      "Buzun eriyip bardağın dışına taşması",
      "Bardağın malzemesinin su üretmesi",
      "Sıcaklık farkının suyu yeniden yaratması"
    ],
    correct: 1,
    explain: "Havadaki nem, soğuk yüzeyle temas ettiğinde yoğuşarak sıvı hâle geçer; bu bir fiziksel değişimdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aslı demir bir kapının zamanla kızıl-kahverengi bir tabaka ile kaplandığını fark ediyor.",
    text: "Bu değişim türü ve nedeni ile ilgili en doğru ifade hangisidir?",
    options: [
      "Fiziksel bir değişimdir, demirin rengi kendiliğinden değişmiştir",
      "Kimyasal bir değişimdir; demir, havadaki oksijen ve nemle tepkimeye girerek pas (demir oksit) oluşturmuştur",
      "Fiziksel bir değişimdir, demir sadece toz tutmuştur",
      "Kimyasal bir değişimdir ama nedeni güneş ışığıdır, oksijenle ilgisi yoktur",
      "Bu bir değişim değildir, göz yanılmasıdır"
    ],
    correct: 1,
    explain: "Paslanma, demirin oksijen ve nemle tepkimeye girerek yeni bir madde (demir oksit) oluşturduğu kalıcı bir kimyasal değişimdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir kalite kontrol uzmanı pilin üzerinde '1,5 V' yazdığını görüyor ve pilin içinde kimyasal enerjinin elektrik enerjisine dönüştüğünü öğreniyor.",
    text: "Bu bilgiye göre pil teknolojisi hangi bilim dalıyla en doğrudan ilişkilidir?",
    options: ["Astronomi", "Kimya (elektrokimya)", "Coğrafya", "Tarih", "Dilbilim"],
    correct: 1,
    explain: "Pil içindeki kimyasal enerjinin elektrik enerjisine dönüşümü elektrokimyanın, yani kimyanın bir alt dalının konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir spor yapan kişi, üzerinde 'içindekiler: su, şeker, sitrik asit, doğal aroma' yazan bir meyve suyu kutusunu inceliyor.",
    text: "Etiketteki bu bilgi, kimyanın günlük hayattaki hangi katkısına örnektir?",
    options: [
      "Ürünlerin içeriğinin bilimsel olarak belirlenip tüketiciye şeffaf biçimde sunulmasına",
      "Ürünün fiyatının belirlenmesine",
      "Ürünün ambalaj rengine",
      "Ürünün raf ömrünün olmadığının kanıtlanmasına",
      "Ürünün hiçbir kimyasal madde içermediğinin kanıtlanmasına"
    ],
    correct: 0,
    explain: "Gıda etiketleme, ürünlerin kimyasal bileşiminin analiz edilip tüketiciyle şeffaf biçimde paylaşılmasını sağlar — bu da kimyanın günlük katkılarından biridir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Sınıftaki öğrenciler, mumun yanarken hem şekil değiştirdiğini (erime) hem de alev, ısı ve is (kurum) oluşturduğunu gözlemliyor.",
    text: "Bu gözlemde kaç farklı değişim türü bir arada yaşanmaktadır?",
    options: [
      "Yalnızca fiziksel değişim (erime)",
      "Yalnızca kimyasal değişim (yanma)",
      "Hem fiziksel (erime) hem kimyasal (yanma) değişim bir arada",
      "Hiçbir değişim yoktur, sadece ışık görülür",
      "Sadece biyolojik bir süreçtir"
    ],
    correct: 2,
    explain: "Mum erimesi fiziksel, yanma (mumun oksijenle tepkimeye girip CO₂ ve su buharı oluşturması) ise kimyasal bir değişimdir; ikisi eş zamanlı gerçekleşir."
  },

  /* ============ ORTA (16-35) ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıdaki pH cetvelinde dört farklı ev temizlik ürününün yaklaşık pH değerleri işaretlenmiştir.",
    chart: {
      type: "ph",
      points: [
        { value: 2.5, label: "Sirke" },
        { value: 7.0, label: "Musluk suyu" },
        { value: 9.5, label: "Sıvı sabun" },
        { value: 13.5, label: "Lavabo açıcı" }
      ]
    },
    text: "Bu ürünlerden hangi ikisi karıştırıldığında, elde edilecek karışımın pH'ının 7'ye (nötr) en yakın olması beklenir?",
    options: [
      "Sirke ve lavabo açıcı",
      "Sirke ve sıvı sabun",
      "Musluk suyu ve sıvı sabun",
      "Lavabo açıcı ve sıvı sabun",
      "Sirke ve musluk suyu"
    ],
    correct: 0,
    explain: "Sirke asidik (pH 2,5), lavabo açıcı ise kuvvetli bazik (pH 13,5) olduğundan, ikisi karıştırıldığında birbirini nötrleştirme etkisi en güçlü olur ve karışım 7'ye en çok yaklaşır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Onur iki özdeş bardağa aynı miktarda sıcak çay koyuyor. Birinci bardağa hiçbir şey eklemiyor, ikinci bardağa bir küp şeker ekleyip karıştırıyor. 10 dakika sonra her iki bardağın sıcaklığını ölçüyor ve neredeyse aynı olduğunu görüyor.",
    text: "Bu gözlem, şekerin çaya eklenmesinin hangi tür bir değişim olduğuna dair en güçlü kanıtı sunar?",
    options: [
      "Kimyasal bir değişim olduğuna, çünkü sıcaklık değişmiştir",
      "Fiziksel bir değişim olduğuna, çünkü çözünme belirgin bir enerji/sıcaklık farkı yaratmamış ve yeni bir madde oluşmamıştır",
      "Hem fiziksel hem kimyasal olduğuna, çünkü şeker tatlandırmıştır",
      "Biyolojik bir değişim olduğuna",
      "Değişimin türü sıcaklıkla belirlenemez"
    ],
    correct: 1,
    explain: "Çözünme sırasında sıcaklığın belirgin şekilde değişmemesi ve yeni bir madde oluşmaması, bunun fiziksel bir değişim olduğunun göstergesidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Burak elma dilimlerinin havayla temas ettikten birkaç dakika sonra kahverengileştiğini, ancak dilimler limon suyuna batırıldığında bu kararmanın çok yavaşladığını gözlemliyor.",
    text: "Bu gözleme dayanarak en mantıklı bilimsel çıkarım hangisidir?",
    options: [
      "Elmanın kararması tamamen fiziksel bir olaydır ve limon suyuyla ilgisi yoktur",
      "Kararma, elmadaki bir enzimin oksijenle gerçekleştirdiği kimyasal bir tepkimedir; limon suyundaki asit bu tepkimeyi yavaşlatmaktadır",
      "Limon suyu elmanın rengini fiziksel olarak değiştirmektedir",
      "Kararma yalnızca sıcaklığa bağlıdır, limon suyunun bir etkisi olamaz",
      "Elma limon suyunda daha hızlı kararır"
    ],
    correct: 1,
    explain: "Elmadaki enzimler oksijenle tepkimeye girerek kararmaya (enzimatik oksidasyon) neden olur; limon suyundaki C vitamini/asit bu tepkimeyi yavaşlatan bir antioksidan etkisi gösterir — bu tipik bir bilimsel gözlem-çıkarım örneğidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Merve market etiketlerini karşılaştırıyor: 'A' şampuanı 'sülfatsız' olarak pazarlanırken, 'B' şampuanı standart sülfatlı formülle satılıyor. Merve ikisinin de köpürdüğünü ama A'nın daha az köpürdüğünü fark ediyor.",
    text: "Bu gözlem, öğrenciye ürün geliştirme sürecinde kimyanın rolü hakkında ne gösterir?",
    options: [
      "Köpük miktarı ürünün etkinliğiyle doğrudan orantılıdır",
      "Farklı yüzey aktif madde (deterjan) bileşenleri, benzer işlevi (temizleme) farklı fiziksel etkilerle (köpük miktarı) sağlayabilir",
      "Sülfatsız ürünler hiç temizlik yapmaz",
      "Köpük oluşumu kimyasal değişim değil, biyolojik bir süreçtir",
      "Bu farkın kimyayla hiçbir ilgisi yoktur, sadece pazarlama stratejisidir"
    ],
    correct: 1,
    explain: "Şampuanlardaki farklı yüzey aktif maddeler (sülfatlı/sülfatsız) benzer temizleme işlevini farklı köpürme özellikleriyle sağlayabilir; bu, formülasyon kimyasının bir sonucudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir gıda mühendisi iki özdeş bitkiye 15 gün boyunca su veriyor; birine ayrıca haftada bir azotlu gübre ekliyor. 15 gün sonunda gübre verilen bitkinin belirgin şekilde daha yeşil ve gür yapraklara sahip olduğunu gözlemliyor.",
    text: "Bu deneyde 'bağımsız değişken' ve 'sonuç' arasındaki ilişki bilimsel olarak nasıl açıklanır?",
    options: [
      "Sonuç tesadüfidir, gübrenin bitkiyle kimyasal bir ilişkisi yoktur",
      "Gübredeki azot bileşikleri, bitkinin klorofil üretimi için gerekli olan kimyasal hammaddeyi sağlamış olabilir",
      "Bitkinin yeşermesi yalnızca güneş ışığına bağlıdır, gübrenin etkisi yoktur",
      "Su miktarı deneyin tek belirleyici etkenidir",
      "Gübre bitkiye zarar vermiştir, gözlem yanlış yorumlanmıştır"
    ],
    correct: 1,
    explain: "Azotlu gübreler, bitkilerin klorofil ve protein sentezinde kullandığı azot bileşiklerini sağlar; bu da tarımda kimyanın somut bir katkısıdır ve deneyde gözlemlenen farkı açıklar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Elif, açık bırakılan bir gazoz şişesinin birkaç saat sonra 'tatsızlaştığını' (gazının kaçtığını) fark ediyor; şişe kapaklıyken bu durum gözlenmiyor.",
    text: "Bu olayı en doğru açıklayan bilimsel ifade hangisidir?",
    options: [
      "Gazozun içindeki karbondioksit gazı, kapak açıldığında düşen basınçla birlikte sıvıdan ayrılıp ortama karışır",
      "Gazoz kendiliğinden yeni bir kimyasal maddeye dönüşür",
      "Havadaki oksijen gazozun tadını bozar",
      "Gazın kaçması sıcaklıkla hiç ilgili değildir",
      "Kapak açıldığında gazoz suya dönüşür"
    ],
    correct: 0,
    explain: "Gazlı içeceklerde CO₂ yüksek basınç altında sıvıda çözünmüş hâldedir; şişe açılınca basınç düşer ve çözünürlük azaldığı için gaz sıvıdan ayrılıp kaçar — bu fiziksel bir çözünürlük olayıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir itfaiyeci güneş kremi etiketinde 'SPF 30' yazdığını görüyor ve kremin içeriğinde çinko oksit ve titanyum dioksit bileşenlerinin listelendiğini fark ediyor.",
    text: "Bu bilgilere dayanarak güneş kreminin koruyucu etkisi hakkında en doğru bilimsel çıkarım hangisidir?",
    options: [
      "Krem yalnızca kokusuyla koruma sağlar",
      "İçerdiği kimyasal bileşenler UV ışınlarını yansıtır veya soğurarak cildi zararlı ışınlardan korur",
      "SPF değeri kremin rengiyle ilgilidir",
      "Çinko oksit ve titanyum dioksit sadece kozmetik amaçlıdır, koruma sağlamaz",
      "Güneş kremi UV ışınlarını artırır"
    ],
    correct: 1,
    explain: "Çinko oksit ve titanyum dioksit gibi bileşenler, UV ışınlarını fiziksel olarak yansıtan/soğuran mineral filtrelerdir; bu, kimyanın sağlık ve günlük yaşama somut bir katkısıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir veli, buzdolabında saklanan sütün oda sıcaklığında bırakılan süte göre çok daha uzun süre bozulmadan kaldığını gözlemliyor.",
    text: "Bu gözlem hangi bilimsel ilkeyi doğrular?",
    options: [
      "Düşük sıcaklık, sütteki mikroorganizmaların ve kimyasal bozunma tepkimelerinin hızını yavaşlatır",
      "Soğutma sütün bileşimini tamamen değiştirir",
      "Sıcaklığın bozulma hızıyla hiçbir ilişkisi yoktur",
      "Buzdolabı sütteki tüm kimyasal maddeleri yok eder",
      "Oda sıcaklığında süt asla bozulmaz"
    ],
    correct: 0,
    explain: "Düşük sıcaklık, hem mikroorganizma üremesini hem de tepkime hızlarını genel olarak yavaşlatır; bu nedenle soğutulan gıdalar daha uzun süre taze kalır — bu bilgi gıda güvenliğinde kimyanın temel katkılarından biridir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir analitik kimyager, aynı marka iki farklı deterjanın etiketini karşılaştırıyor: biri 'soğuk suda etkili', diğeri 'yalnızca sıcak suda etkili' olarak pazarlanıyor.",
    text: "Bu iki ürün arasındaki farkın bilimsel temeli en olası şekilde nedir?",
    options: [
      "Ambalaj renginin farklı olması",
      "Fiyat farkı, kimyasal bileşimle ilgisi yok",
      "Deterjanlardaki enzim ve yüzey aktif maddelerin farklı sıcaklık aralıklarında optimum etkinlik göstermesi",
      "Soğuk suda hiçbir deterjan çalışamaz, bu bir pazarlama yalanıdır",
      "Su sıcaklığının deterjan etkinliğiyle hiçbir ilişkisi yoktur"
    ],
    correct: 2,
    explain: "Deterjanlardaki enzimler ve yüzey aktif maddeler belirli sıcaklık aralıklarında en verimli çalışır; formülasyon kimyası bu farkı sıcaklığa göre optimize edebilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir teknisyen, iki özdeş demir çividen birini kuru bir kutuda, diğerini nemli pamuğun içinde bir hafta bekletiyor. Nemli ortamdaki çivide belirgin pas oluşurken, kurudaki çivide hiç değişim gözlenmiyor.",
    text: "Bu deney tasarımı hangi bilimsel yaklaşımı örnekler?",
    options: [
      "Kontrollü değişken kullanarak bir etkenin (nem) sonucu nasıl etkilediğini gözlemleme",
      "Rastgele deneme yapma, bilimsel bir yöntem içermez",
      "Sadece gözleme dayalı, hiçbir değişken kontrol edilmemiş bir deney",
      "Çivilerin renginin doğal olarak farklı olduğunu kanıtlama",
      "Demirin hiçbir zaman paslanmadığını gösterme"
    ],
    correct: 0,
    explain: "Aynı malzemeyi (çivi) farklı yalnızca bir değişkenle (nem varlığı/yokluğu) test etmek, bilimsel yöntemde 'kontrollü deney' yaklaşımının temel bir örneğidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıdaki grafikte üç farklı yakıtın 1 kg'ının yanmasıyla açığa çıkan yaklaşık enerji miktarları (MJ/kg) gösterilmiştir.",
    chart: {
      type: "bar",
      labels: ["Odun", "Kömür", "Doğal gaz"],
      values: [15, 24, 54],
      title: "Enerji (MJ/kg)"
    },
    text: "Bu verilere dayanarak, eşit kütlede yakıt kullanıldığında en fazla enerji açığa çıkaran ve dolayısıyla enerji verimliliği açısından en avantajlı olan yakıt hangisidir?",
    options: ["Odun", "Kömür", "Doğal gaz", "Üçü de eşittir", "Tablodan bu sonuç çıkarılamaz"],
    correct: 2,
    explain: "Tabloya göre 1 kg doğal gazın yanması en fazla enerjiyi (54 MJ) açığa çıkarır, bu da onu kütle başına enerji verimliliği açısından en avantajlı yakıt yapar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir hemşire, 'organik' etiketli bir sebzenin de, 'organik olmayan' etiketli bir sebzenin de kimyasal olarak karbon, hidrojen, oksijen ve çeşitli minerallerden oluştuğunu öğreniyor.",
    text: "Bu bilgiye dayanarak, 'organik' etiketinin bilimsel anlamı hakkında en doğru çıkarım hangisidir?",
    options: [
      "'Organik' ürünler hiçbir kimyasal madde içermez",
      "'Organik olmayan' sebzeler karbon içermez",
      "'Organik' etiketi, ürünün belirli tarım yöntemleriyle (sentetik pestisit/gübre kullanılmadan) üretildiğini belirtir, kimyasal madde içermediği anlamına gelmez",
      "İki sebze de birbirinden tamamen farklı elementlerden oluşur",
      "'Organik' kelimesi kimya biliminde hiçbir anlam taşımaz"
    ],
    correct: 2,
    explain: "Her canlı madde (organik ya da değil etiketlenmiş olsun) karbon temelli bileşiklerden oluşur; 'organik tarım' etiketi üretim yöntemiyle ilgilidir, maddenin kimyasal içerik taşımadığı anlamına gelmez."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir ev hanımı, camdan yapılmış bir bardağın ve plastikten yapılmış bir bardağın aynı sıcaklıktaki suyu farklı sürelerde soğuttuğunu fark ediyor; cam bardaktaki su daha hızlı ısı kaybediyor.",
    text: "Bu gözlem, malzeme seçiminde kimyanın hangi katkısını örnekler?",
    options: [
      "Malzemelerin ısı iletkenliği gibi fiziksel özelliklerinin, günlük kullanım eşyalarının tasarımını doğrudan etkilediğini",
      "Cam ve plastiğin aynı kimyasal yapıya sahip olduğunu",
      "Sıcaklık kaybının malzemeyle hiçbir ilgisinin olmadığını",
      "Plastiğin her zaman camdan daha iyi yalıtkan olduğunun kanıtlanamayacağını",
      "Bu farkın yalnızca bardağın rengiyle ilgili olduğunu"
    ],
    correct: 0,
    explain: "Farklı malzemelerin atomik/moleküler yapısı, ısı iletkenliği gibi fiziksel özellikleri belirler; malzeme bilimi (kimyanın bir uygulama alanı) bu bilgiyi ürün tasarımında kullanır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Ayşe, güneş panellerinin ışığı doğrudan elektriğe çevirdiğini, buna karşın bir termik santralin kömürü yakıp suyu buharlaştırarak türbin döndürdüğünü öğreniyor.",
    text: "Bu iki enerji üretim yönteminin ortak noktası, kimya bilimi açısından nasıl açıklanabilir?",
    options: [
      "İkisi de kimyayla ilgisizdir, yalnızca fizik konusudur",
      "Güneş panelleri hiçbir kimyasal malzeme içermez",
      "İkisi de tamamen aynı kimyasal tepkimeyi kullanır",
      "Her ikisi de bir enerji dönüşüm sürecidir; biri malzeme biliminin (fotovoltaik hücreler), diğeri yanma kimyasının prensiplerini kullanır",
      "Termik santraller kimyasal enerji kullanmaz"
    ],
    correct: 3,
    explain: "Güneş panelleri yarı iletken malzeme kimyasına, termik santraller ise yanma (oksitlenme) tepkimelerine dayanır; ikisi de farklı biçimlerde kimyanın enerji üretimine katkısını gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Ece, iki özdeş bitki örtüsüne farklı miktarda böcek ilacı (pestisit) uyguluyor. Az miktarda uygulanan alanda zararlı böcek sayısı azalırken bitkiler sağlıklı kalıyor; çok miktarda uygulanan alanda ise hem böcekler hem de bazı faydalı böcekler ve toprak canlıları zarar görüyor.",
    text: "Bu gözlem, tarım kimyasında hangi önemli ilkeyi vurgular?",
    options: [
      "Pestisit miktarı ne kadar fazla olursa sonuç o kadar iyi olur",
      "Faydalı böcekler pestisitten hiçbir zaman etkilenmez",
      "Pestisitlerin miktarının hiçbir önemi yoktur",
      "Kimyasal maddelerin dozu ve kullanım miktarı, hem etkinlik hem de çevresel/canlı etkiler açısından dikkatle yönetilmelidir",
      "Tarımda kimyasal madde kullanımı tamamen yasaklanmalıdır"
    ],
    correct: 3,
    explain: "Kimyasal maddelerin (pestisit, gübre vb.) dozu, hem istenen etkiyi sağlamak hem de çevreye/faydalı canlılara zarar vermemek için bilinçli ve dengeli yönetilmelidir — bu, tarım kimyasının önemli bir sorumluluk alanıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir mühendis, çamaşır suyu (sodyum hipoklorit) ile bir tuvalet temizleyicisinin (genellikle asidik) karıştırılmaması gerektiğini, aksi hâlde zehirli klor gazı oluşabileceğini okuyor.",
    text: "Bu bilgi, günlük hayatta kimya bilgisinin hangi açıdan önemini gösterir?",
    options: [
      "Kimyasal ürünlerin nasıl karıştırılacağının önemsiz olduğunu",
      "Zehirli gazların yalnızca fabrikalarda oluşabileceğini",
      "Tüm temizlik ürünlerinin birbirine karıştırılabileceğini",
      "Farklı temizlik ürünlerinin kimyasal etkileşimlerinin bilinmemesinin ciddi sağlık risklerine yol açabileceğini, bu nedenle temel kimya bilgisinin güvenlik için gerekli olduğunu",
      "Bu bilginin sadece kimyagerleri ilgilendirdiğini"
    ],
    correct: 3,
    explain: "Ev ortamında bile yaygın kullanılan kimyasalların bilinçsizce karıştırılması tehlikeli sonuçlar doğurabilir; bu da temel kimya okuryazarlığının günlük güvenlik için önemini gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Emre, plastik şişelerin geri dönüşüm sembolündeki numaraların (1'den 7'ye kadar) farklı plastik türlerini (PET, HDPE, PVC vb.) belirttiğini öğreniyor ve her türün farklı şekilde işlendiğini fark ediyor.",
    text: "Bu bilgiye dayanarak geri dönüşüm sürecinin etkinliği hakkında en doğru çıkarım hangisidir?",
    options: [
      "Tüm plastik türleri aynı kimyasal yapıya sahip olduğu için birlikte işlenebilir",
      "Plastiklerin kimyasal yapısı geri dönüşüm sürecini hiç etkilemez",
      "Geri dönüşüm sembolü sadece dekoratif amaçlıdır",
      "Farklı plastik polimer türlerinin kimyasal yapısı farklı olduğundan, etkin geri dönüşüm için bu türlerin ayrıştırılması gerekir",
      "Numaralar plastiğin fiyatını gösterir"
    ],
    correct: 3,
    explain: "Farklı plastik türleri (PET, HDPE, PVC vb.) farklı polimer zincir yapılarına sahiptir; bu farklılık, malzemelerin ayrı ayrı toplanıp işlenmesini gerektirir — bu da malzeme kimyasının geri dönüşümdeki rolünü gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir eczacı, aynı miktarda tuzu biri sıcak biri soğuk suya ekliyor; sıcak sudaki tuzun çok daha hızlı ve tamamen çözündüğünü, soğuk sudaki tuzun bir kısmının dipte kaldığını gözlemliyor.",
    text: "Bu gözlemden çıkarılabilecek en doğru genel bilimsel sonuç hangisidir?",
    options: [
      "Sıcaklık, katı maddelerin sudaki çözünürlüğünü etkileyen önemli bir etkendir",
      "Sıcaklığın çözünürlükle hiçbir ilişkisi yoktur",
      "Tuz sıcak suda kimyasal olarak farklı bir maddeye dönüşür",
      "Soğuk su tuzu asla çözemez",
      "Bu sonuç yalnızca tuz için değil hiçbir madde için geçerli değildir"
    ],
    correct: 0,
    explain: "Genel olarak katı maddelerin çözünürlüğü sıcaklıkla artar (bazı istisnalar dışında); bu, günlük hayatta (çay, kahve, tarif hazırlama vb.) sıkça gözlemlenen temel bir kimya ilkesidir."
  },

  /* ============ ZOR (36-50) ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir kariyer danışmanı iki özdeş kabı hazırlıyor: birine sadece musluk suyu, diğerine musluk suyu + bir tutam tuz koyuyor. Aynı sıcaklıkta, aynı süre boyunca dondurucuda bekletiyor. Saf su donarken, tuzlu su hâlâ tam donmamış, kısmen sıvı kalmıştır.",
    text: "Bu deneyin sonucu, kimyanın hangi günlük hayat uygulamasını doğrudan açıklar?",
    options: [
      "Yaz aylarında yolların neden daha sıcak olduğunu",
      "Tuzlu suyun kaynama noktasının düştüğünü",
      "Tuzun suyu her zaman daha hızlı dondurduğunu",
      "Kışın buzlanan yollara tuz dökülmesinin donma noktasını düşürerek buzlanmayı geciktirdiğini/azalttığını",
      "Bu deneyin günlük hayatla hiçbir bağlantısı olmadığını"
    ],
    correct: 3,
    explain: "Çözünen madde (tuz), suyun donma noktasını düşürür (donma noktası alçalması); bu ilke, kışın yollara tuz serpilerek buzlanmanın geciktirilmesinde pratik olarak kullanılır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıdaki tabloda dört farklı ambalaj malzemesinin doğada yaklaşık çözünme/parçalanma süreleri verilmiştir.",
    table: {
      headers: ["Malzeme", "Yaklaşık süre"],
      rows: [
        ["Kağıt", "2-6 hafta"],
        ["Karton", "2 ay"],
        ["Alüminyum kutu", "~200 yıl"],
        ["Plastik şişe (PET)", "400+ yıl"]
      ]
    },
    text: "Bu verilere dayanarak, malzemelerin kimyasal yapısı ile çevresel etkisi arasındaki ilişki hakkında en doğru genelleme hangisidir?",
    options: [
      "Tüm ambalaj malzemeleri doğada aynı hızda parçalanır",
      "Malzemenin kimyasal yapısının bozunma hızıyla hiçbir ilgisi yoktur",
      "Metal ambalajlar her zaman plastikten daha hızlı bozunur",
      "Doğal, karbon temelli ve mikroorganizmalarca kolayca parçalanabilen malzemeler (kağıt/karton) daha hızlı; sentetik polimer veya metal yapılı malzemeler ise çok daha yavaş bozunur",
      "Karton, plastikten daha yavaş bozunur"
    ],
    correct: 3,
    explain: "Kağıt/karton gibi doğal selüloz temelli malzemeler mikroorganizmalarca kolayca parçalanırken, plastiklerin uzun polimer zincirleri ve metallerin kimyasal kararlılığı bozunmayı çok yavaşlatır — bu, malzeme seçiminde çevresel sürdürülebilirlik açısından önemli bir kimya bilgisidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir kimya mühendisi, ekmek hamurunu mayalandırırken hamurun kabardığını ve içinde küçük gaz kabarcıkları oluştuğunu; ancak hamur çok sıcak bir fırına konulduğunda mayanın 'öldüğünü' ve hamurun beklenildiği kadar kabarmadığını öğreniyor.",
    text: "Bu gözlemlere dayanarak maya hakkında en doğru bilimsel çıkarım hangisidir?",
    options: [
      "Maya cansız bir kimyasal bileşiktir ve sıcaklıktan etkilenmez",
      "Sıcaklığın maya aktivitesiyle hiçbir ilişkisi yoktur",
      "Hamurun kabarması yalnızca fiziksel bir hava girişidir, mayanın hiçbir rolü yoktur",
      "Maya, canlı mikroorganizmalardır; fermantasyon sırasında CO₂ gazı üretirler, ancak çok yüksek sıcaklıklar bu canlıların (ve dolayısıyla tepkimenin) etkinliğini durdurur",
      "Maya sadece hamura tat katar, gaz üretmez"
    ],
    correct: 3,
    explain: "Maya, şekeri fermente ederek CO₂ gazı üreten canlı mikroorganizmalardır; bu biyokimyasal süreç belirli bir sıcaklık aralığında en iyi çalışır, aşırı yüksek sıcaklık mayayı öldürerek fermantasyonu durdurur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir akademisyen, elektrikli araçların şarj olabilen lityum-iyon pillerle çalıştığını, buna karşın klasik araçların benzin/dizel yakarak çalıştığını öğreniyor. Ayrıca lityum-iyon pillerin üretiminde nadir madenlerin çıkarılması gerektiğini, benzin/dizelin ise yanma sırasında karbondioksit saldığını okuyor.",
    text: "Bu bilgilere dayanarak, hangi enerji sisteminin 'çevresel olarak daha üstün' olduğuna dair en bilimsel/dengeli yaklaşım hangisidir?",
    options: [
      "Elektrikli araçlar hiçbir çevresel etkiye sahip değildir, bu nedenle kesin olarak üstündür",
      "Pil üretimi çevresel açıdan önemsizdir, sadece yanma önemlidir",
      "Benzinli araçlar hiçbir zaman çevreye zarar vermez",
      "Her iki sistemin de kendi yaşam döngüsü boyunca (üretim, kullanım, geri dönüşüm) farklı kimyasal/çevresel etkileri vardır; karşılaştırma tek bir aşamaya değil bütün sürece bakılarak yapılmalıdır",
      "İki sistem arasında hiçbir kimyasal fark yoktur"
    ],
    correct: 3,
    explain: "Bilimsel bir değerlendirme, bir ürünün yalnızca kullanım aşamasını değil; hammadde çıkarımı, üretim, kullanım ve geri dönüşüm/atık aşamalarını (yaşam döngüsü analizi) birlikte değerlendirmelidir — bu, kimya ve çevre bilimindeki önemli bir yaklaşımdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir sağlık çalışanı, aynı miktardaki iki özdeş demir çiviyi test ediyor: birini sade suya, diğerini tuzlu suya batırıyor. Bir hafta sonra tuzlu sudaki çivide çok daha fazla pas oluştuğunu gözlemliyor.",
    text: "Bu sonucun bilimsel açıklaması aşağıdakilerden hangisidir?",
    options: [
      "Tuz, demirin rengini doğrudan değiştiren bir boyar maddedir",
      "Paslanma hızı çözeltinin iletkenliğinden tamamen bağımsızdır",
      "Tuz, suyun oksijen içermesini engeller",
      "Tuzlu su, elektrik iletkenliğini artırarak demirin oksitlenme (paslanma) tepkimesinin hızını hızlandırır",
      "Tuzlu su demiri fiziksel olarak aşındırır, kimyasal bir etkisi yoktur"
    ],
    correct: 3,
    explain: "Paslanma, elektrokimyasal bir tepkimedir; tuzlu su elektrolit görevi görerek iyon hareketini kolaylaştırır ve bu da oksitlenme tepkimesinin hızını artırır — bu bilgi, kıyı bölgelerindeki metal yapıların neden daha hızlı paslandığını da açıklar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir gazeteci, iki özdeş bardağa aynı miktarda gazlı içecek koyuyor. Birinci bardağa hemen buz ekliyor, ikinci bardağı oda sıcaklığında bırakıyor. Bir süre sonra ikinci bardaktaki içeceğin gazının çok daha hızlı ve fazla kaçtığını (köpürüp taştığını) fark ediyor.",
    text: "Bu gözlem, gazların sıvılardaki çözünürlüğü hakkında hangi genel ilkeyi destekler?",
    options: [
      "Gazların sıvılardaki çözünürlüğü sıcaklık arttıkça azalır",
      "Gazların sıvılardaki çözünürlüğü sıcaklıkla hiç değişmez",
      "Gazların sıvılardaki çözünürlüğü sıcaklık arttıkça artar",
      "Sıcaklık yalnızca katıların çözünürlüğünü etkiler, gazları etkilemez",
      "Bu gözlem yalnızca gazlı içeceklere özgüdür, genellenemez"
    ],
    correct: 0,
    explain: "Katıların aksine, gazların sıvılardaki çözünürlüğü sıcaklık arttıkça AZALIR; bu yüzden sıcak/oda sıcaklığındaki gazlı içeceklerden gaz daha hızlı kaçar, soğuk içeceklerde gaz daha uzun süre tutulur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Buse, evde bulunan üç farklı temizlik ürününün etiketindeki uyarı sembollerini inceliyor: çamaşır suyunda 'tahriş edici', tuvalet açıcısında 'aşındırıcı ve tahriş edici', cam temizleyicisinde ise herhangi bir tehlike sembolü yok.</br>Buse bu üç ürünü karıştırmadan, ayrı ayrı ve iyi havalandırılan bir alanda kullanmaya özen gösteriyor.",
    text: "Öğrencinin bu davranışının bilimsel gerekçesi en iyi hangi seçenekle açıklanır?",
    options: [
      "Tehlike sembolleri sadece dekoratiftir, davranışın bilimsel bir temeli yoktur",
      "Havalandırma yalnızca kötü kokuyu önlemek içindir, güvenlikle ilgisi yoktur",
      "Cam temizleyicisi hiçbir kimyasal madde içermediği için diğerleriyle karıştırılabilir",
      "Tahriş edici ve aşındırıcı ürünler aslında aynı tehlike düzeyindedir, ayrım yapmaya gerek yoktur",
      "Farklı kimyasal maddelerin etiketlenmiş tehlike düzeyleri, olası zararlı buhar birikimini ve istenmeyen tepkimeleri önlemek için dikkatli kullanım ve havalandırma gerektirdiğini gösterir"
    ],
    correct: 4,
    explain: "GHS tehlike sembolleri, ürünlerin kimyasal risk düzeylerini bilimsel kriterlere göre sınıflandırır; bu bilgiye dayanarak dikkatli kullanım (karıştırmama, havalandırma) hem kişisel hem çevresel güvenliği sağlar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir araştırmacı, bir fabrikanın atık sularını arıtmadan doğrudan bir dereye bıraktığını ve derede kısa süre içinde balık ölümlerinin arttığını haberlerde okuyor. Yetkililer suyun analiz edildiğinde çözünmüş oksijen miktarının normalden çok düşük çıktığını açıklıyor.",
    text: "Bu olay, kimya biliminin çevre koruma ve toplum sağlığı ile ilişkisini en iyi hangi şekilde açıklar?",
    options: [
      "Balık ölümleri kimyasal analiz olmadan da kesin olarak açıklanabilirdi",
      "Bu tür olaylar kimya biliminin ilgi alanına girmez",
      "Fabrika atıklarının su kalitesiyle hiçbir ilişkisi yoktur",
      "Çözünmüş oksijen miktarı balıkların yaşamıyla ilgisizdir",
      "Su kalitesi analizleri (çözünmüş oksijen ölçümü gibi kimyasal ölçümler) çevresel sorunların bilimsel olarak tespit edilmesini ve sorumluların belirlenmesini sağlar"
    ],
    correct: 4,
    explain: "Kimyasal su analizleri (çözünmüş oksijen, pH, ağır metal miktarı vb.), çevre kirliliğinin bilimsel kanıtlarla tespit edilmesini, nedeninin belirlenmesini ve önlem alınmasını sağlar — bu, kimyanın çevre bilimi ve halk sağlığındaki kritik rolüdür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Can, güneşte uzun süre bekletilen plastik bir bahçe sandalyesinin zamanla renginin soluklaştığını, gevrekleştiğini ve kolayca kırıldığını fark ediyor; buna karşın gölgede tutulan aynı üründe bu bozulma çok daha yavaş gerçekleşiyor.",
    text: "Bu gözlem, plastik malzemelerin bozunması hakkında hangi bilimsel süreci işaret eder?",
    options: [
      "Plastiğin bozulması tamamen rastgele bir olaydır, güneşle ilgisi yoktur",
      "Bu bozulma yalnızca sıcaklıkla ilgilidir, ışıkla ilgisi yoktur",
      "Gölgede bekleyen plastik asla bozulmaz",
      "Renk solması ile malzemenin gevrekleşmesi arasında hiçbir bilimsel ilişki yoktur",
      "UV ışınları, plastiğin polimer zincirlerindeki kimyasal bağları kırarak malzemenin fiziksel özelliklerinin (esneklik, dayanıklılık) bozulmasına (fotodegradasyon) neden olur"
    ],
    correct: 4,
    explain: "Güneş ışığındaki UV ışınları, polimerlerin moleküler zincirlerindeki bağları kırarak fotodegradasyona (ışıkla bozunma) neden olur; bu, dış mekân plastik ürünlerin neden UV-dayanıklı katkı maddeleriyle üretildiğini de açıklar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Meraklı bir öğrenci, aynı tarifle hazırlanan iki kek hamurundan birine standart kabartma tozu, diğerine iki kat fazla kabartma tozu ekliyor. Fazla kabartma tozu eklenen kek hem beklenenden daha hızlı kabarıp sonra çöküyor hem de hafif acımsı/metalik bir tat bırakıyor.",
    text: "Bu gözlem, tarif/formülasyon geliştirmede kimyasal madde miktarının önemi hakkında hangi ilkeyi destekler?",
    options: [
      "Kimyasal bir maddenin miktarını artırmak her zaman sonucu iyileştirir",
      "Bu gözlem sadece o tarife özgüdür, genel bir kimya ilkesi içermez",
      "Kabartma tozu miktarının kekin yapısıyla hiçbir ilgisi yoktur",
      "Fazla kabartma tozu her zaman daha lezzetli bir sonuç verir",
      "Kimyasal madde miktarı ile elde edilen sonuç arasında doğrusal olmayan bir ilişki olabilir; optimum miktarın aşılması istenmeyen yapısal ve tat sonuçlarına yol açabilir"
    ],
    correct: 4,
    explain: "Kimyasal katkı maddelerinin miktarı ile ürün kalitesi arasındaki ilişki genellikle doğrusal değildir; belirli bir optimum noktanın ötesinde fazladan madde, istenmeyen yan etkiler (aşırı gaz çıkışı, tat bozukluğu) yaratabilir — bu, gıda kimyası formülasyonunda temel bir ilkedir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir turist, dağlık bir bölgede suyun deniz seviyesine göre daha düşük bir sıcaklıkta kaynadığını ve bu yüzden orada yemeklerin pişmesinin daha uzun sürdüğünü öğreniyor.",
    text: "Bu olayın bilimsel açıklaması hangisidir?",
    options: [
      "Pişirme süresinin uzaması yalnızca soğuk havayla ilgilidir",
      "Yüksek rakımda su molekülleri kimyasal olarak farklıdır",
      "Rakımın kaynama noktasıyla hiçbir ilişkisi yoktur",
      "Yüksek rakımda su her zaman daha hızlı kaynar",
      "Yüksek rakımda atmosfer basıncı düşer, bu da suyun daha düşük sıcaklıkta kaynamasına (buharlaşmasına) yol açar; düşük kaynama sıcaklığı pişirme tepkimelerinin daha yavaş gerçekleşmesine neden olur"
    ],
    correct: 4,
    explain: "Atmosfer basıncı azaldıkça sıvıların kaynama noktası düşer; bu fiziksel ilke, dağlarda suyun daha düşük sıcaklıkta kaynamasına ve dolayısıyla yemeklerin pişme (kimyasal/biyokimyasal) tepkimelerinin daha yavaş tamamlanmasına yol açar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Deniz, güneş enerjisi santrallerinin ürettiği elektriğin fazlasının büyük bataryalarda depolandığını, ancak bu bataryaların üretiminde kullanılan lityum ve kobalt gibi elementlerin sınırlı doğal kaynaklardan elde edildiğini öğreniyor.",
    text: "Bu bilgiye dayanarak sürdürülebilir enerji sistemlerinin geliştirilmesinde kimyanın rolü hakkında en kapsamlı çıkarım hangisidir?",
    options: [
      "Kimyanın sürdürülebilir enerjiyle hiçbir ilgisi yoktur",
      "Sürdürülebilir enerji sadece güneş/rüzgar kaynaklı olduğu için kimyasal madde ihtiyacı yoktur",
      "Yenilenebilir enerji sistemleri bile, verimli enerji depolama teknolojisi için kimyasal madde/malzeme araştırmalarına (yeni pil kimyaları, geri dönüşüm yöntemleri) ihtiyaç duyar",
      "Lityum ve kobalt sınırsız kaynaklardır, endişe gereksizdir",
      "Bataryaların üretimiyle çevresel sürdürülebilirlik arasında hiçbir bağlantı yoktur"
    ],
    correct: 2,
    explain: "Yenilenebilir enerji üretimi kadar, üretilen enerjinin verimli depolanması da kritik bir mühendislik/kimya problemidir; sınırlı kaynaklardan üretilen bataryalar için sürdürülebilir malzeme kimyası ve geri dönüşüm araştırmaları önem taşır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Meraklı bir gözlemci, bir ilacın kutusunda 'serin ve kuru yerde saklayınız, doğrudan güneş ışığından koruyunuz' uyarısını okuyor ve bu ilacın raf ömrünün belirli bir tarihle sınırlı olduğunu fark ediyor.",
    text: "Bu bilgilere dayanarak ilaçların saklama koşulları hakkında en doğru bilimsel çıkarım hangisidir?",
    options: [
      "İlaçların saklama koşulları rastgele belirlenir, bilimsel bir temeli yoktur",
      "Tüm ilaçlar sonsuza kadar aynı etkinlikte kalır",
      "Raf ömrü tarihi yalnızca üreticinin kâr amacıyla konulmuştur",
      "Güneş ışığının ilaçların kimyasal yapısıyla hiçbir ilişkisi yoktur",
      "İlaçlardaki etkin bileşenler, ısı, ışık ve nem gibi etkenlerle zamanla bozunabilir (kimyasal olarak değişebilir); bu nedenle uygun saklama koşulları ilacın etkinliğini korumak için gereklidir"
    ],
    correct: 4,
    explain: "İlaç etkin maddeleri, uygun olmayan saklama koşullarında (yüksek sıcaklık, nem, ışık) kimyasal olarak bozunabilir ve etkinliğini/güvenliğini kaybedebilir; bu nedenle saklama koşulları ve son kullanma tarihleri bilimsel test verilerine dayanır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir lise öğrencisi, iki özdeş kap suya aynı miktarda tuz koyup birini kapalı, diğerini açık bırakıyor. Açık kaptaki su birkaç gün içinde tamamen buharlaşıyor ve kabın dibinde beyaz kristaller (tuz) kalıyor; kapalı kaptaki su seviyesi değişmiyor.",
    text: "Açık kapta gözlenen olay, hangi ayırma yöntemine ve hangi maddenin özelliğine dayanır?",
    options: [
      "Süzme; suyun yoğunluğuna dayanır",
      "Yüzdürme; tuzun sudan hafif olmasına dayanır",
      "Damıtma; tuzun kaynama noktasının su ile aynı olmasına dayanır",
      "Mıknatısla ayırma; tuzun manyetik özelliğine dayanır",
      "Buharlaştırma; suyun uçucu, tuzun ise oda sıcaklığında uçucu olmayan bir katı olmasına dayanır"
    ],
    correct: 4,
    explain: "Su, oda sıcaklığında zamanla buharlaşan uçucu bir sıvıdır; tuz ise uçucu olmadığından kapta kristaller hâlinde geride kalır — bu, buharlaştırma yoluyla ayırmanın temel prensibidir ve tuz üretiminde (tuzlalarda) kullanılır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir laboratuvar ekibi, iki özdeş sünger parçasından birini sabunlu suya, diğerini sade suya batırıp aynı miktar yağ lekesine bastırıyor. Sabunlu suyla temizlenen yüzeyde yağ izinin neredeyse tamamen kaybolduğunu, sade suyla ise yağın hâlâ belirgin şekilde durduğunu gözlemliyor.",
    text: "Bu farkın bilimsel açıklaması aşağıdakilerden hangisidir?",
    options: [
      "Yağ ve su zaten aynı kimyasal yapıya sahiptir",
      "Sade su yağı hiçbir zaman temizleyemez, bu bir doğa kanunudur",
      "Sabun yağı yeni bir katı maddeye dönüştürür",
      "Sabunlu suyun sıcaklığı daha yüksektir, temizliği bu sağlar",
      "Sabun molekülleri hem yağı hem suyu bir arada tutabilen (bir ucu yağı, diğer ucu suyu seven) bir yapıya sahiptir; bu da yağın su ile birlikte yüzeyden uzaklaştırılmasını sağlar"
    ],
    correct: 4,
    explain: "Sabun moleküllerinin bir ucu suyu seven (hidrofilik), diğer ucu yağı seven (hidrofobik) yapıdadır; bu özellik sayesinde yağ molekülleri suyun içine taşınabilir ve yüzeyden uzaklaştırılabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir bahçıvan, portakal kabuğunu sıkarken çıkan sıvının ele değince hafif yakıcı bir his verdiğini ve bu sıvının plastik bir bardağın yüzeyini matlaştırdığını fark ediyor.",
    text: "Bu gözlem, portakal kabuğundaki maddeler hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Portakal kabuğu hiçbir kimyasal madde içermez",
      "Portakal kabuğu suya benzer, hiçbir etkisi olmamalıdır",
      "Bu olay tamamen tesadüftür, bilimsel bir açıklaması yoktur",
      "Plastik bardaklar hiçbir maddeyle etkileşime giremez",
      "Portakal kabuğundaki uçucu yağlar/bileşikler bazı plastiklerle kimyasal etkileşime girebilecek reaktif özelliktedir"
    ],
    correct: 4,
    explain: "Turunçgil kabuklarındaki uçucu yağlar (örneğin limonen) bazı plastik türlerinin yüzeyini çözebilecek/matlaştırabilecek kimyasal etkileşim gösterebilir; bu, günlük hayatta karşılaşılan küçük ama gerçek bir kimyasal gözlemdir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir üniversite öğrencisi, cam bir şişeye sıkıca kapatılmış gazlı içeceğin dondurucuda fazla bekletilmesi sonucu şişenin çatladığını/patladığını öğreniyor; buna karşın aynı içeceğin buzdolabında (dondurucuda değil) bekletilmesinde böyle bir sorun yaşanmıyor.",
    text: "Bu olayın bilimsel açıklaması en doğru şekilde hangisidir?",
    options: [
      "Dondurucudaki sıcaklık farkı hiçbir fiziksel etkiye sahip değildir",
      "Gazlı içecekler dondurucuda kimyasal olarak patlayıcı bir maddeye dönüşür",
      "Cam, düşük sıcaklıkta kendiliğinden büzülüp kırılır, suyla ilgisi yoktur",
      "Bu olay yalnızca şişenin kalitesizliğinden kaynaklanır, bilimsel bir açıklaması yoktur",
      "Su donarken genleşir (hacmi artar); kapalı bir kapta bu genleşme, kabın dayanma sınırını aşarak kırılmaya neden olabilir"
    ],
    correct: 4,
    explain: "Suyun aksine çoğu sıvı donarken büzülür; su ise donarken hacimce genleşir (buzun yoğunluğu sudan azdır). Kapalı, sert bir kapta bu genleşme baskı oluşturarak kabın çatlamasına/patlamasına yol açabilir — bu, suyun sıra dışı bir fiziksel özelliğidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir aşçı, aynı miktardaki şekeri farklı sıcaklıklardaki eşit miktarda suya ekleyip her seferinde doygunluğa ulaşana kadar (dipte şeker kalana kadar) daha fazla şeker ilave ediyor. Elde ettiği sonuçları aşağıdaki grafikte gösteriyor.",
    chart: {
      type: "line",
      labels: ["0°C", "20°C", "40°C", "60°C", "80°C"],
      values: [180, 200, 240, 290, 360],
      title: "100 mL suda çözünen şeker miktarı (g)"
    },
    text: "Grafiğe dayanarak, 60°C'deki 100 mL suya en fazla kaç gram civarında şeker çözünebileceği ve bu ilişkinin genel eğilimi hakkında en doğru çıkarım hangisidir?",
    options: [
      "Yaklaşık 290 g; sıcaklık arttıkça çözünürlük azalır",
      "Yaklaşık 180 g; sıcaklık çözünürlüğü etkilemez",
      "Yaklaşık 290 g; sıcaklık arttıkça çözünürlük artar",
      "Yaklaşık 360 g; sıcaklık çözünürlüğü etkilemez",
      "Grafikten sayısal bir değer okunamaz"
    ],
    correct: 2,
    explain: "Grafikte 60°C noktası yaklaşık 290 g'a karşılık gelir; genel eğilim, sıcaklık arttıkça katı maddenin sudaki çözünürlüğünün de arttığını göstermektedir."
  }
],
  "disiplin": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir bilim insanı, karbon atomlarını temel alan bileşiklerin (petrol türevleri, plastikler, ilaçlar) yapısını ve tepkimelerini inceliyor.",
    text: "Bu bilim insanının çalıştığı alan hangi kimya alt disiplinidir?",
    options: ["Anorganik kimya", "Organik kimya", "Analitik kimya", "Fizikokimya", "Jeokimya"],
    correct: 1,
    explain: "Karbon temelli bileşiklerin (organik bileşiklerin) yapı ve tepkimelerini inceleyen alt disiplin organik kimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir laboratuvarda içme suyundaki kurşun miktarı, milyonda bir (ppm) hassasiyetle ölçülüyor.",
    text: "Bu tür hassas madde miktarı tayinleri en çok hangi alt disiplinle ilişkilidir?",
    options: ["Analitik kimya", "Organik kimya", "Biyokimya", "Nükleer kimya", "Polimer kimyası"],
    correct: 0,
    explain: "Maddelerin bileşimini ve miktarını hassas biçimde belirlemek analitik kimyanın temel çalışma alanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırmacı, canlı hücrelerdeki enzimlerin protein sentezindeki rolünü inceliyor.",
    text: "Bu araştırma en çok hangi alt disiplinin konusuna girer?",
    options: ["Jeokimya", "Biyokimya", "Metalurji", "Elektrokimya", "Termokimya"],
    correct: 1,
    explain: "Canlı organizmalardaki kimyasal süreçleri (enzimler, proteinler, metabolizma) inceleyen alan biyokimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir mühendis, sodyum klorür, demir oksit ve amonyak gibi metal ve ametal bileşiklerinin (genellikle karbon içermeyen) sentezini ve özelliklerini araştırıyor.",
    text: "Bu çalışma en çok hangi alt disiplinle ilişkilidir?",
    options: ["Organik kimya", "Anorganik kimya", "Biyokimya", "Polimer kimyası", "Petrokimya"],
    correct: 1,
    explain: "Genellikle karbon-hidrojen iskeleti içermeyen metal/ametal bileşiklerini inceleyen alan anorganik kimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Mehmet, bir tepkimenin ne kadar hızlı gerçekleştiğini ve sıcaklıkla bu hızın nasıl değiştiğini ölçüyor; ayrıca tepkime sırasındaki enerji değişimlerini hesaplıyor.",
    text: "Bu çalışma hangi alt disiplinin konusudur?",
    options: ["Fizikokimya", "Jeokimya", "Farmasötik kimya", "Gıda kimyası", "Tarım kimyası"],
    correct: 0,
    explain: "Tepkime hızı, enerji değişimi ve maddenin fiziksel davranışlarını inceleyen alan fizikokimyadır (fiziksel kimya)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir şirket, plastik poşetlerin yerini alabilecek, doğada daha kolay parçalanan yeni uzun zincirli moleküller geliştiriyor.",
    text: "Bu geliştirme çalışması en çok hangi alt disiplinle ilgilidir?",
    options: ["Polimer kimyası", "Nükleer kimya", "Elektrokimya", "Jeokimya", "Astrokimya"],
    correct: 0,
    explain: "Uzun zincirli moleküllerin (polimerlerin) tasarımı ve geliştirilmesi polimer kimyasının konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir turist, bir madenden çıkarılan kayaçların mineral bileşimini ve oluşum süreçlerini kimyasal analizle inceliyor.",
    text: "Bu çalışma hangi alt disiplinle en yakından ilişkilidir?",
    options: ["Jeokimya", "Biyokimya", "Farmasötik kimya", "Polimer kimyası", "Gıda kimyası"],
    correct: 0,
    explain: "Yer kabuğundaki mineral ve kayaçların kimyasal bileşimini inceleyen alan jeokimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir laboratuvar, pillerdeki kimyasal enerjinin elektrik enerjisine dönüşüm verimini artırmaya çalışıyor.",
    text: "Bu çalışma en çok hangi alt disiplinin konusudur?",
    options: ["Elektrokimya", "Organik kimya", "Jeokimya", "Biyokimya", "Analitik kimya"],
    correct: 0,
    explain: "Kimyasal enerji ile elektrik enerjisi arasındaki dönüşümleri inceleyen alan elektrokimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir eczacılık şirketi, yeni bir ağrı kesicinin etkin maddesini sentezleyip vücutta nasıl etki ettiğini araştırıyor.",
    text: "Bu araştırmanın ait olduğu alt disiplin hangisidir?",
    options: ["Farmasötik (ilaç) kimyası", "Jeokimya", "Metalurji", "Astrokimya", "Nükleer kimya"],
    correct: 0,
    explain: "İlaçların tasarımı, sentezi ve etki mekanizmalarının incelenmesi farmasötik kimyanın konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Meraklı bir öğrenci, kimyanın 'tek bir bilim dalı' değil, birçok alt dala ayrıldığını öğreniyor.",
    text: "Bu alt dallara ayrılmanın temel amacı en iyi hangi seçenekle açıklanır?",
    options: [
      "Kimyanın önemini azaltmak",
      "Farklı madde türlerini ve süreçleri daha derinlemesine, uzmanlaşarak incelemeyi sağlamak",
      "Öğrencilerin kafasını karıştırmak",
      "Bilim insanlarının işini zorlaştırmak",
      "Alt dalların birbirinden tamamen bağımsız, hiç etkileşimi olmayan alanlar olduğunu göstermek"
    ],
    correct: 1,
    explain: "Kimyanın alt disiplinlere ayrılması, çok geniş olan bu bilim alanında derinlemesine uzmanlaşmayı ve daha etkili araştırma yapılmasını sağlar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gıda mühendisi, dondurmanın kıvamını ve dokusunu etkileyen katkı maddelerinin oranını optimize ediyor.",
    text: "Bu optimizasyon çalışması hangi alt disiplinin uygulama alanına girer?",
    options: ["Gıda kimyası", "Nükleer kimya", "Astrokimya", "Metalurji", "Elektrokimya"],
    correct: 0,
    explain: "Gıda ürünlerinin bileşimi, işlenmesi ve katkı maddeleriyle ilgili çalışmalar gıda kimyasının konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir tüketici, radyoaktif elementlerin bozunma süreçlerini ve bu süreçlerden enerji üretimini araştırıyor.",
    text: "Bu araştırma alanı hangi alt disiplinin kapsamındadır?",
    options: ["Nükleer kimya", "Organik kimya", "Gıda kimyası", "Tarım kimyası", "Polimer kimyası"],
    correct: 0,
    explain: "Atom çekirdeğindeki değişimleri (radyoaktivite, bozunma, füzyon/fisyon) inceleyen alan nükleer kimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir kalite kontrol uzmanı, uzaydan gelen bir meteorit örneğinin kimyasal bileşimini inceleyerek güneş sisteminin oluşumu hakkında ipuçları arıyor.",
    text: "Bu çalışma en çok hangi (nispeten az bilinen) alt disiplinle ilişkilidir?",
    options: ["Astrokimya", "Elektrokimya", "Gıda kimyası", "Polimer kimyası", "Farmasötik kimya"],
    correct: 0,
    explain: "Uzaydaki (yıldızlar arası ortam, gezegenler, meteoritler) kimyasal süreçleri inceleyen alan astrokimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir mühendis, demir cevherinden saf demir ve çeşitli çelik alaşımları üretme sürecini geliştiriyor.",
    text: "Bu üretim süreci hangi alt disiplinin çalışma konusudur?",
    options: ["Metalurji (metal kimyası)", "Biyokimya", "Astrokimya", "Farmasötik kimya", "Gıda kimyası"],
    correct: 0,
    explain: "Metallerin cevherden elde edilmesi, saflaştırılması ve alaşımların geliştirilmesi metalurjinin konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Buse, bir fabrikanın atık gazlarının atmosferdeki ozon tabakasına etkisini inceliyor.",
    text: "Bu inceleme hangi alt disiplinin uygulama alanına örnektir?",
    options: [
      "Farmasötik kimya",
      "Çevre kimyası",
      "Polimer kimyası",
      "Astrokimya",
      "Metalurji"
    ],
    correct: 1,
    explain: "Kimyasal maddelerin çevredeki (hava, su, toprak) etkilerini inceleyen alan çevre kimyasıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir laborant, bitkilerin verimini artırmak için toprağın besin madde bileşimini analiz ediyor ve özel gübre formülleri geliştiriyor.",
    text: "Bu geliştirme faaliyeti hangi alt disiplinin konusuna girer?",
    options: [
      "Nükleer kimya",
      "Tarım kimyası",
      "Astrokimya",
      "Elektrokimya",
      "Metalurji"
    ],
    correct: 1,
    explain: "Toprak, gübre ve bitki besin maddeleriyle ilgili kimyasal süreçleri inceleyen alan tarım kimyasıdır."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir laboratuvarda, hem yeni bir ilaç molekülünün sentezlenmesi (karbon iskeletinin oluşturulması) hem de bu molekülün vücuttaki hedef proteinle etkileşiminin incelenmesi gerekiyor.",
    text: "Bu proje en çok hangi iki alt disiplinin iş birliğini gerektirir?",
    options: [
      "Jeokimya ve astrokimya",
      "Organik kimya ve biyokimya/farmasötik kimya",
      "Nükleer kimya ve metalurji",
      "Sadece analitik kimya yeterlidir",
      "Sadece fizikokimya yeterlidir"
    ],
    correct: 1,
    explain: "İlaç molekülünün sentezi organik kimyanın, vücuttaki etkisinin incelenmesi ise biyokimya/farmasötik kimyanın konusudur; ilaç geliştirme genellikle bu alanların iş birliğini gerektirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir spor yapan kişi, 'anorganik kimya sadece cansız/doğal maddeleri, organik kimya ise sadece canlılardan elde edilen maddeleri inceler' şeklinde bir tanım yapıyor.",
    text: "Bu tanımdaki bilimsel hata nedir?",
    options: [
      "Anorganik kimya hiçbir zaman metal içermez",
      "Organik kimya bugün karbon temelli TÜM bileşikleri (canlı kaynaklı olsun olmasın, örneğin plastikler ve sentetik ilaçlar dahil) kapsar; ayrım artık 'canlı/cansız kaynak' değil 'karbon iskeleti' temellidir",
      "Organik kimya sadece bitkilerle ilgilenir",
      "Bu tanımda hiçbir hata yoktur",
      "Anorganik kimya yalnızca canlılardan elde edilen maddeleri inceler"
    ],
    correct: 1,
    explain: "Tarihsel olarak organik kimya canlı kaynaklı maddelerle ilişkilendirilse de, günümüzde ayrım karbon iskeletine (organik = karbon temelli bileşikler, sentetik olanlar dahil) dayanır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir su arıtma tesisinde çalışan ekip, önce sudaki kirletici miktarını ölçüp (madde miktarı tayini) sonra bu kirleticileri gidermek için hangi kimyasal işlemin uygulanacağına karar veriyor.",
    text: "Bu iki aşamalı çalışma sırasıyla hangi alt disiplinlerle ilişkilidir?",
    options: [
      "Biyokimya (ölçüm) → metalurji (arıtma)",
      "Astrokimya (ölçüm) → nükleer kimya (arıtma)",
      "Analitik kimya (ölçüm) → çevre kimyası (arıtma/giderme)",
      "Jeokimya (ölçüm) → polimer kimyası (arıtma)",
      "Bu iki aşama arasında hiçbir disiplin farkı yoktur"
    ],
    correct: 2,
    explain: "Kirletici miktarının ölçülmesi analitik kimyanın, çevresel kirliliğin giderilmesi ise çevre kimyasının çalışma alanına girer."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir hemşire market etiketlerini inceliyor: bir yoğurt kabında 'probiyotik kültür içerir', bir vitamin hapında 'C vitamini sentezle üretilmiştir', bir güneş panelinde ise 'yüksek verimli silikon hücreler' yazıyor.",
    text: "Bu üç üründeki bilgiler sırasıyla hangi alt disiplinlerle en çok ilişkilidir?",
    options: [
      "Metalurji — tarım kimyası — gıda kimyası",
      "Jeokimya — astrokimya — nükleer kimya",
      "Biyokimya (probiyotik) — organik kimya (vitamin sentezi) — malzeme/anorganik kimya (silikon hücreler)",
      "Üçü de aynı alt disiplinle ilişkilidir",
      "Bu ürünlerin hiçbiri kimyayla ilgili değildir"
    ],
    correct: 2,
    explain: "Probiyotik kültürler canlı mikroorganizma süreçleriyle (biyokimya), vitamin sentezi organik kimyayla, silikon güneş hücreleri ise malzeme/anorganik kimyayla ilişkilidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırma ekibi, yeni bir pilin şarj/deşarj sırasında elektrotlarda gerçekleşen kimyasal tepkimeleri incelerken, aynı zamanda pil kutusunun malzemesi olarak kullanılacak yeni bir kompozit polimer de geliştiriyor.",
    text: "Bu proje kaç farklı alt disiplini bir arada kullanmaktadır?",
    options: ["Yalnızca 1: elektrokimya", "Yalnızca 1: polimer kimyası", "2: elektrokimya ve polimer kimyası", "3: elektrokimya, polimer kimyası ve nükleer kimya", "Hiçbiri, bu bir mühendislik projesidir, kimyayla ilgisizdir"],
    correct: 2,
    explain: "Pilin iç kimyasal tepkimeleri elektrokimyanın, kutu malzemesinin geliştirilmesi ise polimer kimyasının konusudur; modern mühendislik projeleri sıklıkla birden fazla alt disiplini bir arada kullanır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir sağlık çalışanı 'fizikokimya, kimyanın fizikle örtüştüğü, kesin sınırları olmayan bir ara alandır' cümlesini kuruyor ve tepkime hızı, ısı değişimi, gaz basıncı gibi konuların hem fizik hem kimya derslerinde geçtiğini fark ediyor.",
    text: "Bu gözlem, bilim dallarının sınıflandırılması hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bilim dalları arasındaki sınırlar kesin ve geçirimsizdir, hiçbir örtüşme olamaz",
      "Bilim dalları arasındaki sınırlar bazen esnek olabilir; disiplinler birbirinin yöntem ve kavramlarından yararlanabilir",
      "Fizik ve kimya aslında tamamen aynı bilim dalıdır",
      "Fizikokimya, kimyanın değil sadece fiziğin bir alt dalıdır",
      "Bu tür ara alanlar bilimsel olarak geçersizdir"
    ],
    correct: 1,
    explain: "Fizikokimya gibi ara/disiplinlerarası alanlar, bilimsel sınıflandırmaların kesin duvarlar değil, birbiriyle etkileşen ve bazen örtüşen kavramsal çerçeveler olduğunu gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir adli laboratuvar uzmanı, olay yerinden alınan toz örneğinin hangi kimyasal maddeyi içerdiğini belirlemek için kromatografi ve spektroskopi yöntemlerini kullanıyor.",
    text: "Bu uzmanın kullandığı temel yöntemler hangi alt disiplinin araçlarındandır?",
    options: [
      "Polimer kimyası",
      "Tarım kimyası",
      "Analitik kimya",
      "Astrokimya",
      "Metalurji"
    ],
    correct: 2,
    explain: "Kromatografi ve spektroskopi gibi madde tanımlama/miktar tayini yöntemleri analitik kimyanın temel araçlarındandır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir turist 'biyokimya ile organik kimya aynı şeydir, ikisi arasında fark yoktur' diye düşünüyor.",
    text: "Bu düşüncedeki eksikliği en iyi hangi açıklama giderir?",
    options: [
      "Biyokimya karbonla hiç ilgilenmez",
      "İkisi gerçekten birebir aynıdır, öğrencinin düşüncesi doğrudur",
      "Organik kimya karbon bileşiklerinin genel yapı/tepkimelerini incelerken, biyokimya özellikle CANLI organizmalardaki kimyasal süreçlere (metabolizma, enzimler, DNA) odaklanır — biyokimya organik kimyanın kavramlarını kullanan ama canlı sistemlere özgü bir alt dalıdır",
      "Organik kimya yalnızca canlılarla ilgilenir",
      "Bu iki alan arasında hiçbir bağlantı yoktur"
    ],
    correct: 2,
    explain: "Biyokimya, organik kimyanın kavramlarından yararlanan ama özellikle canlı sistemlerdeki (hücre, metabolizma, genetik) kimyasal süreçlere odaklanan özelleşmiş bir alt dalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir kozmetik firması yeni bir nemlendirici krem geliştiriyor: önce cildin nem tutma mekanizmasını (biyokimyasal süreç) araştırıyor, sonra kremin içindeki yağ ve su moleküllerinin nasıl kararlı bir karışım (emülsiyon) oluşturacağını (fizikokimyasal denge) hesaplıyor.",
    text: "Bu süreç, alt disiplinlerin günlük hayat ürünlerindeki rolü hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Sadece organik kimya kozmetik ürünlerle ilgilenir",
      "Kozmetik ürünler hiçbir kimya alt disipliniyle ilgili değildir",
      "Bir tek ürün geliştirme sürecinde birden fazla alt disiplinden yararlanılabilir",
      "Fizikokimya yalnızca laboratuvar deneylerinde kullanılır, ürün geliştirmede kullanılmaz",
      "Biyokimya yalnızca ilaçlarla ilgilidir, kozmetikle ilgisi yoktur"
    ],
    correct: 2,
    explain: "Günlük hayatta kullanılan tek bir ürünün geliştirilmesi bile (kozmetik örneğinde olduğu gibi) genellikle birden fazla kimya alt disiplininin bir arada kullanılmasını gerektirebilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Aşağıdaki tabloda dört meslek profesyonelinin günlük iş tanımlarından kesitler verilmiştir.",
    table: {
      headers: ["Meslek", "İş tanımından kesit"],
      rows: [
        ["A", "Kan örneklerindeki glikoz ve kolesterol seviyelerini ölçer"],
        ["B", "Yeni bir cep telefonu kılıfı için darbeye dayanıklı plastik formülü geliştirir"],
        ["C", "Toprak örneklerindeki ağır metal kirliliğini analiz eder"],
        ["D", "Bir güneş enerjisi santralinde kullanılacak yeni bir batarya kimyası tasarlar"]
      ]
    },
    text: "Tabloya göre A, B, C ve D meslek sahiplerinin çalışma alanları sırasıyla hangi alt disiplinlerle en iyi eşleşir?",
    options: [
      "A: Metalurji, B: Tarım kimyası, C: Gıda kimyası, D: Organik kimya",
      "A: Astrokimya, B: Jeokimya, C: Nükleer kimya, D: Farmasötik kimya",
      "A: Klinik biyokimya, B: Polimer kimyası, C: Çevre/analitik kimya, D: Elektrokimya",
      "Dördü de aynı alt disiplinle (analitik kimya) ilişkilidir",
      "Bu iş tanımlarının hiçbiri kimya alt disiplinleriyle eşleştirilemez"
    ],
    correct: 2,
    explain: "A (kan analizleri) klinik biyokimya, B (plastik formülü) polimer kimyası, C (kirlilik analizi) çevre/analitik kimya, D (batarya kimyası) elektrokimya ile ilişkilidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir lise öğrencisi ileride hem laboratuvar deneyleri yapmak hem de doğada saha çalışması yürütmek istiyor; özellikle kayaçların ve minerallerin oluşum tarihini kimyasal analizle çözmekle ilgileniyor.",
    text: "Bu öğrencinin ilgi alanına en uygun kariyer/alt disiplin hangisidir?",
    options: [
      "Gıda kimyası",
      "Farmasötik kimya",
      "Jeokimya",
      "Elektrokimya",
      "Polimer kimyası"
    ],
    correct: 2,
    explain: "Kayaç ve mineral oluşumunun kimyasal analizle incelenmesi, hem laboratuvar hem saha çalışması gerektiren jeokimyanın konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir üniversite laboratuvarında iki farklı proje yürütülüyor: Proje 1'de bir bileşiğin tam olarak hangi atomlardan oluştuğu ve bu atomların oranı kütle spektrometresiyle belirleniyor. Proje 2'de aynı bileşiğin karbon iskeletinin nasıl sentezleneceği planlanıyor.",
    text: "Proje 1 ve Proje 2 sırasıyla hangi alt disiplinlerle ilişkilidir?",
    options: [
      "Proje 1: Nükleer kimya, Proje 2: Jeokimya",
      "Proje 1: Organik kimya, Proje 2: Analitik kimya",
      "Proje 1: Analitik kimya, Proje 2: Organik kimya",
      "İkisi de aynı alt disiplinle (fizikokimya) ilişkilidir",
      "Bu iki proje arasında bir ayrım yapılamaz"
    ],
    correct: 2,
    explain: "Bir bileşiğin bileşiminin/miktarının belirlenmesi analitik kimyanın, karbon iskeletinin sentezlenmesi ise organik kimyanın çalışma alanına girer."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gıda mühendisi, hem doğa sporlarını hem kimyayı seviyor ve ileride milli parklardaki su kaynaklarının kirlilik düzeyini izleyen bir kariyer istiyor.",
    text: "Bu öğrenci için en uygun alt disiplin kombinasyonu hangisidir?",
    options: [
      "Farmasötik kimya ve polimer kimyası",
      "Nükleer kimya ve astrokimya",
      "Analitik kimya (ölçüm yöntemleri) ve çevre kimyası (kirlilik/ekosistem etkisi)",
      "Metalurji ve gıda kimyası",
      "Bu istekle hiçbir alt disiplin uyuşmaz"
    ],
    correct: 2,
    explain: "Su kaynaklarındaki kirliliği izlemek hem ölçüm/analiz becerisi (analitik kimya) hem de çevresel etkilerin yorumlanmasını (çevre kimyası) gerektirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gıda güvenliği laboratuvarı, ithal edilen bir baharat örneğinde izin verilmeyen bir boyar maddenin bulunup bulunmadığını kontrol ediyor.",
    text: "Bu kontrol süreci hangi iki alt disiplinin kesişiminde yer alır?",
    options: [
      "Polimer kimyası ve elektrokimya",
      "Astrokimya ve nükleer kimya",
      "Metalurji ve jeokimya",
      "Gıda kimyası ve analitik kimya",
      "Organik kimya ile hiçbir ilgisi yoktur"
    ],
    correct: 3,
    explain: "Gıda ürünlerindeki maddelerin (boyar madde gibi) tespiti hem gıda kimyasının konusuna hem de analitik kimyanın ölçüm yöntemlerine dayanır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir kariyer danışmanı, 'polimer kimyası aslında organik kimyanın bir alt kümesi mi, yoksa tamamen ayrı bir alan mı?' diye soruyor. Öğretmeni, çoğu polimerin (plastikler, naylon vb.) karbon iskeletine sahip olduğunu, ancak bazı polimerlerin (silikon gibi) anorganik yapıda da olabildiğini açıklıyor.",
    text: "Bu açıklamaya göre alt disiplinler arasındaki ilişki hakkında en doğru çıkarım hangisidir?",
    options: [
      "Organik ve anorganik kimya birbirinin tam zıttıdır, hiçbir ortak nokta olamaz",
      "Polimer kimyası hiçbir zaman organik kimyayla ilişkili değildir",
      "Tüm polimerler mutlaka anorganiktir",
      "Alt disiplinler arasında kesin, üst üste binmeyen sınırlar yoktur; polimer kimyası hem organik hem anorganik kimyayla örtüşebilir",
      "Bu soru bilimsel olarak yanıtlanamaz"
    ],
    correct: 3,
    explain: "Kimyanın alt disiplinleri arasında kesin duvarlar yoktur; polimer kimyası gibi bazı alanlar hem organik hem anorganik kimyanın kavramlarını içerebilir."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir aşı geliştirme sürecinde şu aşamalar yaşanıyor: (1) Virüsün proteinlerinin biyokimyasal yapısı çözülüyor. (2) Bu yapıya uygun bir molekül organik kimya yöntemleriyle sentezleniyor. (3) Sentezlenen molekülün saflığı analitik kimya yöntemleriyle doğrulanıyor. (4) Molekülün vücuttaki bağışıklık tepkisi farmasötik/biyokimya alanında test ediliyor.",
    text: "Bu dört aşamalı süreç, modern bilimsel/endüstriyel projelerde kimya alt disiplinlerinin rolü hakkında en kapsamlı hangi çıkarımı destekler?",
    options: [
      "Bu süreçte yalnızca bir alt disiplin (organik kimya) yeterlidir",
      "Aşı geliştirme yalnızca biyoloji biliminin konusudur, kimyayla ilgisi yoktur",
      "Her aşama birbirinden tamamen bağımsızdır ve sırasının önemi yoktur",
      "Karmaşık gerçek dünya problemleri (aşı geliştirme gibi) genellikle tek bir alt disiplinle değil, birden fazla alt disiplinin sıralı/eş zamanlı iş birliğiyle çözülür",
      "Analitik kimyanın bu süreçte hiçbir rolü yoktur"
    ],
    correct: 3,
    explain: "Aşı geliştirme gibi karmaşık projeler, genellikle biyokimya, organik kimya, analitik kimya ve farmasötik kimya gibi birden fazla alt disiplinin koordineli çalışmasını gerektirir — bu, modern bilimin disiplinlerarası doğasını yansıtır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir doktora öğrencisi şu tabloyu inceliyor: Alt disiplinler tarihsel olarak farklı zamanlarda 'resmi' olarak tanımlanmış — örneğin metalurji binlerce yıldır (Tunç/Demir Çağı) pratikte uygulanırken, polimer kimyası ancak 20. yüzyılda ayrı bir disiplin olarak gelişmiştir.",
    text: "Bu bilgiye dayanarak, bilim disiplinlerinin oluşumu hakkında en doğru bilimsel çıkarım hangisidir?",
    options: [
      "Bilim disiplinleri sabit, değişmez ve her zaman aynı şekilde var olmuş kategorilerdir",
      "Bilim disiplinlerinin sınırları ve tanımları, insanlığın biriktirdiği bilgi, teknoloji ve ihtiyaçlar geliştikçe zamanla ortaya çıkar ve değişebilir",
      "Yalnızca eski disiplinler (metalurji gibi) gerçek bilim sayılır",
      "Polimer kimyası 20. yüzyılda ortaya çıktığı için güvenilir bir bilim dalı değildir",
      "Disiplinlerin ortaya çıkış zamanı bilimsel değerleriyle ilgisizdir ve hiçbir şey öğretmez"
    ],
    correct: 1,
    explain: "Bilim disiplinlerinin tanımları ve sınırları statik değildir; teknolojik gelişmeler ve toplumsal ihtiyaçlar yeni uzmanlaşmış alanların (örneğin polimer kimyası, 20. yüzyılda plastiklerin yaygınlaşmasıyla) ortaya çıkmasına yol açabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir şirket, Mars'a gönderilecek bir uzay aracında kullanılmak üzere hem aşırı sıcaklık farklarına dayanıklı yeni bir kompozit malzeme (malzeme/polimer kimyası) hem de aracın enerji ihtiyacını karşılayacak radyoizotop pil teknolojisi (nükleer kimya) geliştiriyor; ayrıca Mars atmosferinin örnek verilerinden yola çıkarak orada yaşam izi arayan bir analiz sistemi (astrokimya + analitik kimya) tasarlıyor.",
    text: "Bu proje örneği, disiplinlerarası bilimsel çalışmalar hakkında hangi genellemeyi en iyi destekler?",
    options: [
      "Nükleer kimya ve astrokimya birbirine hiçbir zaman aynı projede eşlik edemez",
      "Uzay projeleri kimyayla hiçbir şekilde ilgili değildir",
      "Her proje yalnızca tek bir alt disiplin kullanılarak yürütülmelidir, aksi hâlde başarısız olur",
      "İleri teknoloji projeleri genellikle birbirinden farklı görünen çok sayıda alt disiplinin bir arada, karşılıklı bilgi alışverişiyle kullanılmasını gerektirebilir",
      "Bu tür karmaşık projeler kimya biliminin dışında, sadece mühendisliğin konusudur"
    ],
    correct: 3,
    explain: "Uzay araştırmaları gibi ileri teknoloji projeleri, malzeme bilimi, nükleer kimya, astrokimya ve analitik kimya gibi görünüşte farklı alanların bir arada, disiplinlerarası bir yaklaşımla kullanılmasını gerektirebilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir bahçıvan, iklim değişikliğiyle mücadele için geliştirilen bir teknolojiyi araştırıyor: atmosferden karbondioksit yakalayan bir sistem, hem CO₂'nin hangi kimyasal maddeyle (örneğin belirli aminler) tutulacağını (organik/fizikokimya), hem tutulan CO₂'nin yer altında güvenle depolanacağı jeolojik formasyonların kimyasal uygunluğunu (jeokimya), hem de sistemin çevresel etkilerinin uzun vadeli izlenmesini (çevre kimyası + analitik kimya) gerektiriyor.",
    text: "Bu örnek, günümüzün büyük küresel sorunlarına (iklim değişikliği gibi) kimya biliminin katkısı hakkında en kapsamlı hangi çıkarımı destekler?",
    options: [
      "Fizikokimyanın CO₂ yakalama teknolojileriyle hiçbir bağlantısı yoktur",
      "İklim değişikliği kimya biliminin ilgi alanına hiç girmez",
      "Bu tür sorunlar yalnızca jeokimya ile çözülebilir, diğer disiplinlerin katkısı önemsizdir",
      "Küresel ölçekli sorunların çözümü genellikle tek bir kimya alt disipliniyle değil, birçok alt disiplinin sistematik ve koordineli bir şekilde bir araya getirilmesiyle mümkün olur",
      "Çevre kimyası yalnızca küçük ölçekli, yerel sorunlarla ilgilenir, küresel sorunlarla ilgilenmez"
    ],
    correct: 3,
    explain: "İklim değişikliği gibi küresel ölçekli, çok boyutlu sorunların çözümü tipik olarak organik/fizikokimya, jeokimya, çevre kimyası ve analitik kimya gibi birçok alt disiplinin entegre bir şekilde çalışmasını gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir teknisyen şu iddiayı araştırıyor: 'Gelecekte yapay zekâ, yeni ilaç moleküllerini ve malzemeleri kimyagerlerden çok daha hızlı tasarlayabilecek; bu yüzden kimya alt disiplinlerinde çalışan insanlara ihtiyaç kalmayacak.' Araştırmasında, yapay zekânın moleküler tasarımda milyonlarca olasılığı hızla tarayabildiğini, ancak önerilen moleküllerin gerçekten sentezlenip test edilmesi, saflığının doğrulanması ve etik/güvenlik değerlendirmesinin hâlâ insan uzmanlığı gerektirdiğini öğreniyor.",
    text: "Bu bulgulara dayanarak, teknolojinin kimya alt disiplinlerindeki rolü hakkında en dengeli ve bilimsel çıkarım hangisidir?",
    options: [
      "Kimyagerlerin görevi yalnızca molekül tasarlamaktır, başka hiçbir sorumlulukları yoktur",
      "Yapay zekâ, kimya alt disiplinlerinin tamamının yerini kesin olarak ve hemen alacaktır",
      "Yapay zekânın kimya araştırmalarında hiçbir katkısı yoktur",
      "Yapay zekâ gibi teknolojiler kimya alt disiplinlerindeki araştırma sürecini hızlandıran bir araç olabilir, ancak sentez, doğrulama ve değerlendirme gibi aşamalarda uzman kimyagerlerin rolü (en azından yakın gelecekte) tamamen ortadan kalkmaz",
      "Bu konuda bilimsel bir çıkarım yapmak mümkün değildir"
    ],
    correct: 3,
    explain: "Bilimsel bir değerlendirme, teknolojinin (yapay zekâ gibi) araştırma sürecinin bazı aşamalarını hızlandırabileceğini ama sentez, doğrulama, güvenlik ve etik değerlendirme gibi aşamalarda uzman bilgisinin önemini koruduğunu; abartılı iddialardan kaçınmayı gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir arkeokimya (arkeoloji + kimya) araştırmacısı, antik bir çömlekte bulunan organik kalıntıların kimyasal analizini yaparak (analitik kimya), bu kalıntıların hangi bitkisel/hayvansal kaynaktan geldiğini (organik kimya/biyokimya) belirliyor ve elde ettiği verilerle o dönemin beslenme alışkanlıkları hakkında çıkarımlar yapıyor.",
    text: "Bu örnek, kimyanın alt disiplinlerinin uygulama alanı hakkında en doğru hangi genellemeyi destekler?",
    options: [
      "Analitik kimya yalnızca modern, güncel örneklerle çalışabilir, antik örneklerle çalışamaz",
      "Kimya yalnızca laboratuvar ortamında, doğa bilimleriyle sınırlı olarak kullanılabilir",
      "Arkeoloji ve kimya arasında hiçbir bağlantı kurulamaz",
      "Kimya alt disiplinlerinin uygulama alanı yalnızca doğa bilimleriyle sınırlı değildir; tarih, arkeoloji gibi sosyal/beşerî bilimlerle kesişen alanlarda da (arkeokimya gibi) kullanılabilir",
      "Bu tür disiplinlerarası alanlar bilimsel olarak geçerli sayılmaz"
    ],
    correct: 3,
    explain: "Kimya alt disiplinleri, doğa bilimleriyle sınırlı kalmayıp arkeoloji, sanat tarihi gibi alanlarla kesişerek (arkeokimya gibi) disiplinlerarası yeni uygulama alanları oluşturabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir laborant market rafında duran şampuan, deterjan, sabun gibi ürünlerin çoğunun yağ/su karışımlarını temizleyen bileşenler içerdiğini öğreniyor.",
    text: "Bu tür temizlik ürünlerinin formülasyonu en çok hangi alt disiplinle ilişkilidir?",
    options: [
      "Jeokimya",
      "Nükleer kimya",
      "Astrokimya",
      "Organik kimya / fizikokimya (yüzey aktif madde tasarımı)",
      "Metalurji"
    ],
    correct: 3,
    explain: "Yüzey aktif maddelerin (deterjan/sabun bileşenleri) tasarımı, hem organik moleküllerin yapısını hem de yüzey/arayüz davranışlarını (fizikokimya) içerir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir akademisyen, bir hastanın kan örneğindeki demir eksikliğini tespit etmek için laboratuvar testleri yapıyor.",
    text: "Bu test süreci en çok hangi alt disiplinle ilişkilidir?",
    options: [
      "Jeokimya",
      "Astrokimya",
      "Metalurji",
      "Klinik biyokimya",
      "Polimer kimyası"
    ],
    correct: 3,
    explain: "Kan/vücut sıvılarındaki biyokimyasal değerlerin ölçülüp yorumlanması klinik biyokimyanın konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir mühendis, otomobil lastiklerinin daha dayanıklı ve esnek olması için kauçuk moleküllerinin çapraz bağlanma (vulkanizasyon) sürecini optimize ediyor.",
    text: "Bu optimizasyon süreci hangi alt disiplinin uygulama örneğidir?",
    options: [
      "Klinik biyokimya",
      "Nükleer kimya",
      "Astrokimya",
      "Polimer kimyası",
      "Jeokimya"
    ],
    correct: 3,
    explain: "Kauçuk gibi uzun zincirli moleküllerin (polimerlerin) işlenmesi ve özelliklerinin geliştirilmesi polimer kimyasının konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir veli, bir nükleer santralde kullanılan yakıtın güvenli şekilde işlenmesi ve atık yönetimi üzerine çalışıyor.",
    text: "Bu çalışma hangi alt disiplinin doğrudan sorumluluk alanına girer?",
    options: [
      "Tarım kimyası",
      "Gıda kimyası",
      "Polimer kimyası",
      "Farmasötik kimya",
      "Nükleer kimya"
    ],
    correct: 4,
    explain: "Nükleer yakıtların işlenmesi, radyoaktif atık yönetimi gibi konular nükleer kimyanın çalışma alanındadır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Aşağıdaki grafikte, dört farklı kimya alt disiplininde 2015-2023 yılları arasında Türkiye'de yayımlanan bilimsel makale sayısındaki (varsayımsal) artış oranları gösterilmiştir.",
    chart: {
      type: "bar",
      labels: ["Analitik", "Polimer", "Biyokimya", "Nükleer"],
      values: [35, 60, 82, 18],
      title: "2015-2023 makale sayısı artış oranı (%)"
    },
    text: "Grafiğe göre, bu dönemde araştırma faaliyetinde en hızlı artış gösteren alt disiplin hangisidir; bu artış hangi güncel eğilimle ilişkilendirilebilir?",
    options: [
      "Grafikten hiçbir yorum yapılamaz",
      "Nükleer kimya; en yüksek artış oranına sahiptir",
      "Analitik kimya; artışın nedeni bilinemez",
      "Polimer kimyası; artışın çevreyle hiçbir ilgisi yoktur",
      "Biyokimya; genetik/kişiselleştirilmiş tıp ve ilaç geliştirme alanlarındaki artan ilgiyle ilişkilendirilebilir"
    ],
    correct: 4,
    explain: "Grafiğe göre biyokimya %82 ile en yüksek artışı göstermektedir; bu, genetik araştırmalar ve ilaç geliştirme alanlarındaki küresel ilginin artışıyla ilişkilendirilebilir bir çıkarımdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Merve, bir otomobil egzozundaki zararlı gazları (CO, NOx) daha az zararlı gazlara (CO₂, N₂) dönüştüren katalitik konvertörün nasıl çalıştığını araştırıyor; bu sistemin platin ve paladyum gibi metal katalizörler kullandığını öğreniyor.",
    text: "Bu teknolojinin geliştirilmesi en çok hangi alt disiplinlerin kesişimini gerektirir?",
    options: [
      "Bu teknoloji hiçbir kimya alt disipliniyle ilgili değildir",
      "Astrokimya ve nükleer kimya",
      "Gıda kimyası ve tarım kimyası",
      "Farmasötik kimya ve biyokimya",
      "Anorganik kimya (metal katalizörler) ve çevre kimyası (emisyon azaltma)"
    ],
    correct: 4,
    explain: "Katalitik konvertörler metal katalizörlerin (anorganik kimya) kullanıldığı, egzoz emisyonlarını azaltmayı amaçlayan (çevre kimyası) bir teknolojidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gazeteci, 'analitik kimya sadece diğer alt disiplinlere hizmet eden, kendi başına özgün bir araştırma konusu olmayan bir alandır' diye düşünüyor.",
    text: "Bu düşünceye en güçlü itiraz hangisidir?",
    options: [
      "Bu düşünceye itiraz edilemez, tamamen doğrudur",
      "Analitik kimya gerçekten başka hiçbir amaca hizmet etmeyen önemsiz bir alandır",
      "Analitik kimyanın hiçbir yeni yöntemi yoktur, hep aynı teknikleri kullanır",
      "Analitik kimya diğer disiplinlerden tamamen bağımsız, hiç etkileşimi olmayan bir alandır",
      "Analitik kimya, yeni ölçüm yöntemleri ve cihazları (örneğin daha hassas spektroskopi teknikleri) geliştirmeyi amaçlayan, kendine özgü araştırma sorularına sahip bağımsız bir alandır; aynı zamanda diğer disiplinlere de hizmet eder"
    ],
    correct: 4,
    explain: "Analitik kimya, hem kendi başına yeni ölçüm yöntemleri geliştiren özgün bir araştırma alanıdır hem de diğer tüm alt disiplinlerin (biyokimya, çevre kimyası vb.) çalışmalarında kullanılan araçları sağlar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir hemşire, hem uzay bilimlerine hem kimyaya ilgi duyuyor ve gelecekte Mars'taki toprak örneklerinin yaşam belirtisi taşıyıp taşımadığını analiz eden bir kariyer hayal ediyor.",
    text: "Bu öğrencinin ilgi alanına en uygun (nispeten nadir) alt disiplin kombinasyonu hangisidir?",
    options: [
      "Bu ilgi alanıyla hiçbir alt disiplin örtüşmez",
      "Metalurji ve gıda kimyası",
      "Farmasötik kimya ve polimer kimyası",
      "Tarım kimyası ve elektrokimya",
      "Astrokimya ve analitik kimya"
    ],
    correct: 4,
    explain: "Uzaydaki kimyasal süreçlerin ve olası yaşam izlerinin incelenmesi astrokimyanın, örneklerin hassas analizi ise analitik kimyanın konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir itfaiyeci, 'her yeni teknoloji (akıllı telefon, elektrikli araç, güneş paneli) mutlaka birden fazla kimya alt disiplininin katkısını içerir' iddiasını test etmek istiyor. Akıllı telefonu inceliyor: ekranı (malzeme/anorganik kimya), pili (elektrokimya), plastik gövdesi (polimer kimyası) ve devre kartındaki lehim/metal bağlantıları (metalurji) var.",
    text: "Bu inceleme, öğrencinin iddiasını nasıl destekler ya da çürütür?",
    options: [
      "İddia doğru olsa da bu örnekle kanıtlanamaz",
      "İddiayı çürütür; akıllı telefon yalnızca bir alt disiplinle (elektronik mühendisliği) ilgilidir",
      "İddia test edilemez, çünkü telefon kimyasal bir ürün değildir",
      "İddiayı çürütür; telefonlar kimyayla hiç ilgili değildir",
      "İddiayı destekler; tek bir günlük teknoloji ürünü bile genellikle birden fazla alt disiplinin katkısıyla üretilir"
    ],
    correct: 4,
    explain: "Akıllı telefon örneğinde görüldüğü gibi, tek bir modern teknoloji ürünü bile genellikle malzeme/anorganik kimya, elektrokimya, polimer kimyası ve metalurji gibi birçok alt disiplinin katkısıyla üretilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir fabrika işçisi, gelecekte hangi kimya alt disiplininde kariyer yapacağına karar vermeye çalışırken şu gözlemi yapıyor: bazı alt disiplinler (örneğin analitik kimya) hemen hemen her sektörde (ilaç, gıda, çevre, adli bilim) istihdam olanağı sunarken, bazıları (örneğin astrokimya) çok daha dar, uzmanlaşmış ve sınırlı sayıda araştırma kurumuyla sınırlıdır.",
    text: "Bu gözleme dayanarak, kariyer planlaması açısından en dengeli bilimsel/pratik çıkarım hangisidir?",
    options: [
      "Bu tür bir karşılaştırma bilimsel olarak anlamsızdır",
      "Yalnızca geniş istihdam olanağı olan alanlar tercih edilmelidir, ilgiye bakılmamalıdır",
      "Dar uzmanlaşmış alanlar (astrokimya gibi) hiçbir zaman tercih edilmemelidir",
      "Kariyer seçiminde istihdam olanaklarının hiçbir önemi yoktur",
      "Alt disiplin seçimi hem kişisel ilgiyi hem de o alanın istihdam genişliği/derinliği gibi pratik etkenleri dikkate alan bilinçli bir karar olmalıdır; her iki tür alanın (geniş uygulamalı veya dar uzmanlaşmış) kendine göre avantaj ve zorlukları vardır"
    ],
    correct: 4,
    explain: "Kariyer planlaması, kişisel ilgi ile birlikte bir alanın istihdam genişliği, derinliği ve gelecekteki gelişme potansiyeli gibi pratik etkenlerin de dengeli biçimde değerlendirilmesini gerektiren bilinçli bir süreçtir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırma grubu, geri dönüştürülmüş plastik atıklardan yeni, yüksek kaliteli ürünler üretmeye çalışıyor. Süreçte önce atık plastiğin tam olarak hangi polimer türlerinden oluştuğu belirleniyor (analitik kimya), sonra bu polimerlerin kimyasal olarak parçalanıp yeniden birleştirilmesi (organik/polimer kimyası) planlanıyor, son olarak da yeni ürünün çevresel etkisi değerlendiriliyor (çevre kimyası).",
    text: "Bu örnek, 'döngüsel ekonomi' (atıkların yeniden değerli ürünlere dönüştürülmesi) kavramı ile kimya alt disiplinleri arasındaki ilişki hakkında en kapsamlı hangi çıkarımı destekler?",
    options: [
      "Atık plastiklerin türü önemsizdir, hepsi aynı şekilde işlenebilir",
      "Döngüsel ekonominin kimya bilimiyle hiçbir ilgisi yoktur",
      "Geri dönüşüm yalnızca fiziksel bir işlemdir, hiçbir kimya alt disiplini gerektirmez",
      "Bu süreçte yalnızca çevre kimyası yeterlidir, diğer disiplinlerin katkısı gereksizdir",
      "Sürdürülebilirlik odaklı modern ekonomik modeller (döngüsel ekonomi gibi), farklı kimya alt disiplinlerinin bütünleşik biçimde kullanılmasını gerektiren teknik zorluklar içerir"
    ],
    correct: 4,
    explain: "Döngüsel ekonomi modelleri gibi sürdürülebilirlik odaklı yaklaşımlar, atık malzemelerin analiz edilmesi, kimyasal olarak dönüştürülmesi ve çevresel etkisinin değerlendirilmesi gibi aşamalarda birden fazla kimya alt disiplininin bütünleşik kullanımını gerektirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Meraklı bir gözlemci, diş hekimliğinde kullanılan dolgu malzemelerinin hem ağız içindeki asidik/bazik ortama dayanıklı olması (fizikokimya) hem de vücuda toksik etkisinin olmaması (biyokimya/farmasötik kimya) gerektiğini öğreniyor.",
    text: "Bu örnek, ürün geliştirmede alt disiplinlerin birlikte çalışması hakkında hangi çıkarımı destekler?",
    options: [
      "Bu iki gereksinim birbiriyle hiçbir zaman aynı ürün üzerinde birleştirilemez",
      "Diş dolgu malzemeleri kimyayla ilgili değildir",
      "Yalnızca fizikokimya yeterlidir, biyolojik etkiler önemsizdir",
      "Toksisite testi gereksiz bir aşamadır",
      "Sağlık ürünlerinin geliştirilmesinde birden fazla alt disiplinin gereksinimleri (dayanıklılık ve biyouyumluluk gibi) eş zamanlı karşılanmalıdır"
    ],
    correct: 4,
    explain: "Sağlık ürünlerinin (diş dolgusu gibi) geliştirilmesi, hem fiziksel/kimyasal dayanıklılık hem de biyolojik uyumluluk gibi farklı alt disiplinlerin gereksinimlerinin bir arada karşılanmasını gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Buse, tarihte bazı önemli keşiflerin (örneğin penisilin) aslında planlı bir 'alt disiplin' çalışmasından değil, tesadüfi bir gözlemden (bir küf mantarının bakteri üremesini engellediğinin fark edilmesi) ortaya çıktığını öğreniyor; ancak bu tesadüfi gözlemin bilimsel bir ilaca dönüşmesi yıllarca süren sistematik organik kimya, mikrobiyoloji ve farmasötik kimya çalışmalarını gerektirmiş.",
    text: "Bu tarihsel örnek, bilimsel keşif süreci hakkında en dengeli hangi çıkarımı destekler?",
    options: [
      "Tesadüfi gözlemlerin bilimde hiçbir değeri yoktur",
      "Bilimsel keşifler tamamen tesadüfe dayanır, sistematik çalışmanın hiçbir katkısı yoktur",
      "Sistematik çalışma olmadan da her tesadüfi gözlem doğrudan bir ilaca dönüşebilir",
      "Penisilin keşfi kimya biliminin dışında, tamamen şans eseri gerçekleşmiştir",
      "Tesadüfi gözlemler önemli bir başlangıç noktası olabilir, ancak bu gözlemlerin güvenilir, kullanılabilir bir sonuca (ilaç gibi) dönüşmesi sistematik, disiplinli bilimsel çalışma gerektirir"
    ],
    correct: 4,
    explain: "Bilim tarihinde tesadüfi gözlemler önemli başlangıç noktaları olabilir, ancak bu gözlemlerin güvenilir ve uygulanabilir bilimsel/teknolojik sonuçlara dönüşmesi, ilgili alt disiplinlerin (organik kimya, biyokimya, farmasötik kimya gibi) sistematik ve uzun soluklu çalışmasını gerektirir."
  }
],
  "kariyer": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kişi lisede kimya öğretmenlik formasyonu alarak liselerde kimya dersi anlatıyor.",
    text: "Bu meslek, kimya bilgisinin hangi kullanım alanına örnektir?",
    options: ["Endüstriyel üretim", "Eğitim/öğretim", "Laboratuvar analizi", "Ürün pazarlaması", "Saha araştırması"],
    correct: 1,
    explain: "Kimya bilgisini öğrencilere aktarmak eğitim/öğretim alanının bir örneğidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kimya mühendisi, bir fabrikada üretim hattının verimliliğini artırmak için süreç tasarımı yapıyor.",
    text: "Ürettiği çözümlerin doğrudan uygulandığı yer neresidir?",
    options: ["Üniversite", "Fabrika/endüstriyel tesis", "Hastane", "Okul", "Mahkeme"],
    correct: 1,
    explain: "Kimya mühendisleri genellikle endüstriyel üretim tesislerinde süreç geliştirme ve optimizasyon çalışmaları yürütür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Zeynep hastane laboratuvarında hastalardan alınan kan örneklerini analiz ederek hastalık teşhisine yardımcı oluyor.",
    text: "Bu meslek hangi kariyer alanına örnektir?",
    options: ["Klinik laboratuvar uzmanlığı", "Petrokimya mühendisliği", "Kozmetik satışı", "Tarım danışmanlığı", "Patent hukuku"],
    correct: 0,
    explain: "Hastane laboratuvarlarında hasta örneklerini kimyasal/biyokimyasal yöntemlerle analiz etmek klinik laboratuvar uzmanlığının konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kalite kontrol uzmanı, bir ilaç firmasında yeni bir ilacın piyasaya sürülmesi öncesinde etkinliğini ve güvenliğini test eden klinik çalışmaları yönetiyor.",
    text: "Bu görev en çok hangi kariyer alanına girer?",
    options: ["Klinik araştırma uzmanlığı", "Maden mühendisliği", "Grafik tasarım", "Turizm rehberliği", "Muhasebe"],
    correct: 0,
    explain: "İlaçların klinik test süreçlerini yönetmek, ilaç/farmasötik alanındaki klinik araştırma uzmanlığının görev tanımına girer."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Can, bir kozmetik firmasında yeni nemlendirici kremlerin formülünü geliştiriyor.",
    text: "Bu meslek en çok hangi kariyer alanına örnektir?",
    options: ["Kozmetik/formülasyon kimyacılığı", "Maden mühendisliği", "Tarım işçiliği", "Muhasebe", "İnşaat mühendisliği"],
    correct: 0,
    explain: "Kozmetik ürünlerin formülasyonunu geliştirmek kozmetik kimyacılığının görev alanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir bilim insanı, bir gıda fabrikasında üretilen ürünlerin yasal standartlara uygunluğunu denetliyor ve raporluyor.",
    text: "Bu görev en çok hangi kariyer alanına örnektir?",
    options: ["Kalite kontrol/gıda güvenliği denetçiliği", "Astronomi araştırmacılığı", "Turizm işletmeciliği", "Grafik tasarım", "Spor yönetimi"],
    correct: 0,
    explain: "Ürünlerin standartlara uygunluğunu kontrol etmek kalite kontrol ve gıda güvenliği denetçiliğinin görevidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Meraklı bir gözlemci, bir üniversitede yeni malzemeler üzerine araştırma yapıp bulgularını bilimsel dergilerde yayımlıyor.",
    text: "Bu meslek hangi kariyer alanının bir örneğidir?",
    options: ["Akademik araştırmacılık", "Perakende satış", "Turizm rehberliği", "Sekreterlik", "Spor koçluğu"],
    correct: 0,
    explain: "Üniversitede bilimsel araştırma yapıp yayımlamak akademik araştırmacılığın temel özelliğidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir itfaiyeci, bir şirketin ürettiği yeni bir kimyasal bileşiğin patentini almak için gerekli bilimsel/hukuki başvuru sürecini yürütüyor; hem kimya bilgisine hem hukuk bilgisine ihtiyaç duyuyor.",
    text: "Bu görev tanımı en çok hangi kariyer alanıyla örtüşür?",
    options: ["Patent uzmanlığı (kimya alanında)", "Tarım işçiliği", "Spor hakemliği", "Turizm rehberliği", "İnşaat ustalığı"],
    correct: 0,
    explain: "Kimyasal buluşların patentlenmesi süreci, hem kimya hem hukuk bilgisi gerektiren patent uzmanlığının konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kimya mühendisi, karmaşık bilimsel kimya araştırmalarını halkın anlayabileceği bir dille yazıp bir bilim dergisinde yayımlıyor.",
    text: "Bu iş hangi kariyer alanına girer?",
    options: ["Bilim gazeteciliği/iletişimi", "Maden işletmeciliği", "Muhasebecilik", "Turizm rehberliği", "İnşaat mühendisliği"],
    correct: 0,
    explain: "Bilimsel bilgiyi halka anlaşılır şekilde aktarmak bilim gazeteciliği/iletişiminin görevidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Ayşe, bir petrol rafinerisinde ham petrolün işlenip yakıt ve diğer ürünlere dönüştürülmesi sürecinde çalışıyor.",
    text: "Bu çalışma alanı hangi kariyer kategorisine örnektir?",
    options: ["Petrokimya sektörü çalışanlığı", "Tarım danışmanlığı", "Grafik tasarım", "Turizm rehberliği", "Muhasebecilik"],
    correct: 0,
    explain: "Petrolün işlenip kimyasal ürünlere dönüştürülmesi petrokimya sektörünün temel faaliyetidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir laboratuvar teknisyeni, çok küçük boyutlardaki (nanometre ölçeğinde) malzemeleri tasarlayıp yeni teknolojik ürünler geliştiriyor.",
    text: "Bu meslek sahibinin çalıştığı alan hangisidir?",
    options: ["Nanoteknoloji araştırmacılığı", "Turizm rehberliği", "Muhasebecilik", "Tarım işçiliği", "Grafik tasarım"],
    correct: 0,
    explain: "Nanometre ölçeğindeki malzemelerin tasarım ve geliştirilmesi nanoteknoloji araştırmacılığının konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir tüketici, kimya alanında kariyer yaparken yalnızca laboratuvarda deney yapan kişilerin çalışabileceğini düşünüyor.",
    text: "Bu düşünceye karşı en güçlü örnek hangisidir?",
    options: [
      "Bilim gazeteciliği, patent uzmanlığı ve satış temsilciliği gibi meslekler de kimya bilgisi gerektirir ama laboratuvarda deney yapmayı gerektirmez",
      "Bu düşünce tamamen doğrudur, laboratuvar dışında hiçbir kimya kariyeri yoktur",
      "Kimya kariyerleri yalnızca üniversitelerde bulunur",
      "Kimya mezunları yalnızca öğretmen olabilir",
      "Laboratuvar dışı hiçbir meslek kimya bilgisi gerektirmez"
    ],
    correct: 0,
    explain: "Kimya kariyerleri yalnızca laboratuvar deneyleriyle sınırlı değildir; bilim iletişimi, hukuk (patent), satış ve eğitim gibi çok çeşitli alanlarda da kimya bilgisi kullanılabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir stajyer, bir maden şirketinde cevherden değerli metallerin çıkarılması sürecinde kimyasal yöntemler kullanıyor.",
    text: "Bu görev en iyi hangi kariyer alanıyla eşleşir?",
    options: [
      "Turizm rehberliği",
      "Madencilik/metalurji kimyacılığı",
      "Grafik tasarım",
      "Spor koçluğu",
      "Bilim gazeteciliği"
    ],
    correct: 1,
    explain: "Cevherden metal elde etme süreçlerinde kimya bilgisi kullanmak madencilik/metalurji alanındaki kariyerlerin konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Mehmet, bir şirketin ürettiği laboratuvar kimyasallarını başka şirketlere/müşterilere tanıtıp satıyor; ürünün teknik özelliklerini iyi bilmesi gerekiyor.",
    text: "Bu meslek hangi kariyer alanının kapsamına girer?",
    options: [
      "Akademik araştırmacılık",
      "Teknik satış temsilciliği (kimya sektörü)",
      "Klinik laboratuvar uzmanlığı",
      "Patent hukuku",
      "Bilim gazeteciliği"
    ],
    correct: 1,
    explain: "Kimyasal ürünlerin teknik bilgiyle satışını yapmak, teknik satış temsilciliğinin kimya sektöründeki bir örneğidir."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kimya mühendisi, kimya kariyerlerini araştırırken bazı mesleklerin (örneğin kimya teknikeri) iki yıllık ön lisans eğitimiyle, bazılarının (örneğin kimyager/kimya mühendisi) dört yıllık lisans eğitimiyle, bazılarının ise (örneğin araştırmacı akademisyen) lisansüstü eğitimle mümkün olduğunu öğreniyor.",
    text: "Bu bilgiye dayanarak kimya alanındaki kariyer yolları hakkında en doğru çıkarım hangisidir?",
    options: [
      "Kimya alanında yalnızca lisansüstü eğitimle çalışılabilir",
      "Kimya alanındaki meslekler tek bir eğitim düzeyiyle sınırlı değildir; farklı eğitim süreleri farklı görev/sorumluluk düzeylerine karşılık gelebilir",
      "Eğitim süresi ile görev sorumluluğu arasında hiçbir ilişki yoktur",
      "Ön lisans eğitimi kimya alanında hiçbir işe yaramaz",
      "Tüm kimya meslekleri aynı eğitim düzeyini gerektirir"
    ],
    correct: 1,
    explain: "Kimya alanında ön lisanstan lisansüstüne kadar farklı eğitim düzeylerine karşılık gelen (teknikerlik, kimyagerlik, araştırmacılık gibi) çeşitli kariyer basamakları bulunur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir stajyer, hem insanlarla iletişim kurmayı hem de bilimsel bilgiyi seviyor; laboratuvarda tam zamanlı çalışmaktan çok, kimya bilgisini farklı gruplara (öğrenciler, halk, şirketler) aktarmak istiyor.",
    text: "Bu öğrencinin ilgi alanına en uygun kariyer kombinasyonu hangisidir?",
    options: [
      "Yalnızca laboratuvar araştırmacılığı",
      "Kimya öğretmenliği, bilim iletişimi/gazeteciliği veya teknik satış temsilciliği",
      "Yalnızca madencilik mühendisliği",
      "Yalnızca patent hukuku",
      "Bu ilgi alanına uygun hiçbir kimya kariyeri yoktur"
    ],
    correct: 1,
    explain: "İletişim odaklı ilgi alanlarına sahip biri için öğretmenlik, bilim iletişimi veya teknik satış gibi kariyerler, kimya bilgisini insanlarla paylaşma fırsatı sunar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aşağıdaki tabloda dört farklı kimya kariyerinin tipik çalışma ortamı ve odak noktası özetlenmiştir.",
    table: {
      headers: ["Kariyer", "Tipik çalışma ortamı", "Odak noktası"],
      rows: [
        ["Kalite kontrol uzmanı", "Fabrika laboratuvarı", "Ürün standartlara uygunluğu"],
        ["Akademik araştırmacı", "Üniversite laboratuvarı", "Yeni bilgi üretimi"],
        ["Teknik satış temsilcisi", "Saha/müşteri ziyaretleri", "Ürün tanıtımı ve satış"],
        ["Patent uzmanı", "Ofis/hukuk bürosu", "Buluşların korunması"]
      ]
    },
    text: "Tabloya göre, hem saha çalışmasını hem de insanlarla yüz yüze etkileşimi seven bir kişi için en uygun kariyer hangisidir?",
    options: ["Kalite kontrol uzmanı", "Akademik araştırmacı", "Teknik satış temsilcisi", "Patent uzmanı", "Tabloya göre hiçbiri uygun değildir"],
    correct: 2,
    explain: "Tabloya göre teknik satış temsilciliği saha/müşteri ziyaretlerini içerir, bu da saha çalışması ve insan etkileşimini seven biri için en uygun seçenektir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir veli, 'kimya kariyeri seçmek için mutlaka kimya bölümünden mezun olmak gerekir' diye düşünüyor. Araştırmasında, bilim gazeteciliğinin gazetecilik/iletişim eğitimiyle, patent uzmanlığının hukuk eğitimiyle de (ek kimya bilgisiyle) yapılabildiğini öğreniyor.",
    text: "Bu bulgu, öğrencinin düşüncesini nasıl etkiler?",
    options: [
      "Düşünceyi tamamen doğrular, hiçbir istisna yoktur",
      "Düşünceyi kısmen çürütür; bazı kimyayla ilişkili kariyerler farklı temel eğitim geçmişlerinden (iletişim, hukuk gibi) de kimya bilgisiyle birleştirilerek yapılabilir",
      "Bilim gazeteciliği kimyayla hiç ilgili değildir",
      "Patent uzmanlığı yalnızca kimya mezunlarına açıktır",
      "Bu bulgunun düşünceyle hiçbir ilgisi yoktur"
    ],
    correct: 1,
    explain: "Bazı kimyayla ilişkili kariyerler (bilim gazeteciliği, patent hukuku gibi), farklı temel disiplinlerden gelen kişilerin ek kimya bilgisiyle bu alanlarda çalışabilmesine imkân tanır — kimya kariyeri tek bir eğitim yoluyla sınırlı değildir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir turist, bir ilaç şirketinde çalışan üç farklı kişiyle görüşüyor: Biri yeni molekülleri sentezliyor (organik kimyager), biri üretilen ilacın saflığını test ediyor (analitik kimyager/kalite kontrol), biri de ilacın hangi ülkelerde satılacağına dair pazarlama stratejisi geliştiriyor (pazarlama uzmanı, kimya bilgisiyle desteklenmiş).",
    text: "Bu üç kişinin görevleri arasındaki temel fark en iyi hangi şekilde özetlenebilir?",
    options: [
      "Üçü de birbirinin aynısı iştir, fark yoktur",
      "Aynı şirket içinde bile kimya kariyerleri, doğrudan bilimsel üretimden (sentez), kalite güvencesine ve iş/pazarlama fonksiyonlarına kadar çok çeşitlenebilir",
      "Yalnızca sentez yapan kişi 'gerçek' bir kimyagerdir, diğerleri değildir",
      "Pazarlama uzmanının kimya bilgisine hiç ihtiyacı yoktur",
      "Bu üç görev farklı şirketlerde olmak zorundadır, aynı şirkette bulunamaz"
    ],
    correct: 1,
    explain: "Tek bir şirket içinde bile kimya ile ilişkili kariyerler, doğrudan bilimsel üretimden kalite kontrole ve pazarlamaya kadar geniş bir yelpazede çeşitlenebilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kerem, 'yapay zekâ ve otomasyon geliştikçe kimya laboratuvarlarındaki rutin analiz işleri makinelere devredilebilir; ancak yeni bir bileşiğin tasarımı, deney sonuçlarının yorumlanması ve etik kararlar hâlâ insan uzmanlığı gerektirir' bilgisini okuyor.",
    text: "Bu bilgiye dayanarak, gelecekteki kimya kariyerleri hakkında en dengeli çıkarım hangisidir?",
    options: [
      "Kimya kariyerlerinin tamamı yakında ortadan kalkacaktır",
      "Teknolojik gelişmeler bazı rutin görevleri otomatikleştirebilir, ancak yaratıcı tasarım, yorumlama ve karar verme gibi beceriler gerektiren kimya kariyerlerinin önemi sürebilir",
      "Otomasyon kimya alanını hiç etkilemeyecektir",
      "Sadece rutin laboratuvar işleri gelecekte var olmaya devam edecektir",
      "Bu konuda hiçbir öngörüde bulunulamaz"
    ],
    correct: 1,
    explain: "Teknolojik gelişmeler rutin/tekrarlayan görevleri otomatikleştirebilirken, yaratıcı problem çözme, yorumlama ve karar verme becerisi gerektiren kimya kariyerlerinin değeri korunabilir — bu, kariyer planlamasında dikkate alınması gereken dengeli bir bakış açısıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Ayşe, kimya kariyerini seçerken yalnızca 'hangi iş en çok kazandırır' sorusuna odaklanıyor; ilgi duyduğu, severek yapabileceği görevleri hiç düşünmüyor.",
    text: "Bu yaklaşımın olası bir riski en iyi hangi seçenekle açıklanır?",
    options: [
      "Bu yaklaşımda hiçbir risk yoktur, kazanç tek önemli etkendir",
      "Yalnızca kazanca odaklanmak, kişinin ilgi duymadığı bir işte uzun vadede motivasyon ve iş doyumu sorunları yaşamasına yol açabilir",
      "İlgi alanı kariyer seçiminde hiçbir zaman önemli değildir",
      "Kazanca odaklanmak her zaman en iyi kariyer kararını garanti eder",
      "Bu soru kariyer planlamasıyla ilgisizdir"
    ],
    correct: 1,
    explain: "Kariyer seçiminde yalnızca maddi kazanca odaklanıp kişisel ilgiyi göz ardı etmek, uzun vadede iş tatminsizliği ve motivasyon kaybı riskini artırabilir; dengeli bir kariyer kararı genellikle her iki etkeni de dikkate alır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir bilim insanı, 'kimya bölümü mezunları sadece kimyayla doğrudan ilgili işlerde çalışabilir' diye düşünüyor. Araştırmasında, birçok kimya mezununun veri analizi, finans, girişimcilik gibi farklı sektörlerde de analitik düşünme ve problem çözme becerileri sayesinde başarılı kariyerler yaptığını öğreniyor.",
    text: "Bu bulgu, kimya eğitiminin kazandırdığı beceriler hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Kimya mezunları başka hiçbir alanda çalışamaz",
      "Kimya eğitimi yalnızca laboratuvar işleri için kullanılabilir",
      "Kimya eğitimi yalnızca konuya özgü bilgi değil, analitik düşünme ve problem çözme gibi aktarılabilir (transfer edilebilir) beceriler de kazandırır; bu beceriler farklı sektörlerde de değerli olabilir",
      "Analitik düşünme becerisi yalnızca kimya eğitimiyle kazanılabilir",
      "Bu bulgu kimya eğitiminin değersiz olduğunu gösterir"
    ],
    correct: 2,
    explain: "Kimya eğitimi, konuya özgü bilginin yanında analitik düşünme, veri yorumlama ve sistematik problem çözme gibi birçok sektörde değerli olabilecek aktarılabilir beceriler de kazandırır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir laboratuvar ekibi, kimya kariyerlerini araştırırken hem 'araştırma geliştirme (Ar-Ge)' hem 'üretim' hem de 'kalite güvence' departmanlarının bir ilaç şirketinde farklı sorumluluklara sahip olduğunu öğreniyor: Ar-Ge yeni ürün geliştirir, üretim mevcut formülü büyük ölçekte üretir, kalite güvence ise her partinin standartlara uyduğunu doğrular.",
    text: "Bu üç departman arasındaki iş akışı sırası en mantıklı şekilde hangisidir?",
    options: [
      "Üretim → Kalite güvence → Ar-Ge",
      "Kalite güvence → Ar-Ge → Üretim",
      "Ar-Ge (yeni ürün geliştirme) → Üretim (büyük ölçekli imalat) → Kalite güvence (standart doğrulama)",
      "Üçü de aynı anda, birbirinden bağımsız çalışır, sıra önemsizdir",
      "Bu üç departman arasında hiçbir iş akışı ilişkisi yoktur"
    ],
    correct: 2,
    explain: "Tipik bir ürün geliştirme sürecinde önce Ar-Ge yeni formülü geliştirir, ardından üretim bu formülü büyük ölçekte uygular, son olarak kalite güvence her partinin standartlara uygunluğunu doğrular."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Sınıftaki öğrenciler, kimya alanında kariyer olanaklarını araştırırken şu gözlemi yapıyor: bazı ülkelerde kimya mezunlarının işsizlik oranı düşükken, bazı ülkelerde yüksek; bu farkın o ülkenin sanayileşme düzeyi, Ar-Ge yatırımları ve eğitim sisteminin işgücü piyasasıyla uyumuyla ilişkili olabileceğini öğreniyor.",
    text: "Bu gözlem, kariyer planlamasında hangi ek etkenin dikkate alınması gerektiğini gösterir?",
    options: [
      "İşsizlik oranı yalnızca kişisel başarısızlıktan kaynaklanır",
      "Kariyer olanakları hiçbir zaman ülke ekonomisinden etkilenmez",
      "Kariyer olanakları yalnızca bireysel yetenek ve tercihe değil, aynı zamanda bulunulan ülke/bölgenin ekonomik ve sanayi yapısına da bağlı olabilir",
      "Sanayileşme düzeyinin kariyer olanaklarıyla hiçbir ilişkisi yoktur",
      "Bu gözlem kariyer planlamasıyla ilgisizdir"
    ],
    correct: 2,
    explain: "Kariyer olanakları, bireysel beceri ve tercihlerin yanı sıra, bulunulan ülke/bölgenin sanayileşme düzeyi, Ar-Ge yatırımları gibi makro-ekonomik etkenlerden de etkilenebilir; bu, gerçekçi kariyer planlaması için önemli bir faktördür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir aşçı, iklim değişikliğiyle mücadele kapsamında 'yeşil kimya' ve 'sürdürülebilir enerji' alanlarında son yıllarda yeni iş ilanlarının hızla arttığını fark ediyor; bu alanların 20 yıl önce bu kadar yaygın olmadığını öğreniyor.",
    text: "Bu gözlem, kimya kariyerlerinin zaman içindeki değişimi hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Yeşil kimya kariyerleri gerçek kimya kariyerleri sayılmaz",
      "Kimya kariyerleri hiçbir zaman değişmez, hep aynı kalır",
      "Kimya kariyer alanları statik değildir; toplumsal ihtiyaçlar (örneğin çevresel sürdürülebilirlik kaygıları) ve teknolojik gelişmeler yeni kariyer alanlarının ortaya çıkmasına ve mevcut alanların büyümesine yol açabilir",
      "20 yıl önce var olmayan bir alan hiçbir zaman önemli hâle gelemez",
      "Toplumsal ihtiyaçların kariyer alanlarıyla hiçbir ilişkisi yoktur"
    ],
    correct: 2,
    explain: "Kimya kariyer alanları, toplumsal öncelikler (çevre, sürdürülebilirlik gibi) ve teknolojik gelişmelerle birlikte zaman içinde değişip yeni uzmanlaşmış alanların (yeşil kimya gibi) ortaya çıkmasına yol açabilir; bu, kariyer planlamasında güncel eğilimleri takip etmenin önemini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir ev hanımı, bir kimya kariyerinde başarılı olmuş üç farklı kişiyle görüşüyor: Biri üniversitede tek bir dar konuda (örneğin belirli bir katalizör türü) 20 yıldır derinlemesine uzmanlaşmış bir araştırmacı. Diğeri, kariyeri boyunca sırasıyla laboratuvar teknisyenliği, kalite kontrol ve son olarak Ar-Ge yöneticiliği yapmış biri. Üçüncüsü ise kimya lisansından sonra işletme yüksek lisansı yaparak bir kimya şirketinde üst düzey yöneticilik yapan biri.",
    text: "Bu üç farklı kariyer yolu, kimya alanındaki kariyer gelişimi hakkında en kapsamlı hangi çıkarımı destekler?",
    options: [
      "İşletme yüksek lisansı yapan kişi artık kimyager sayılmaz",
      "Yalnızca derinlemesine uzmanlaşan kişi gerçek bir kimyager sayılır",
      "Kimya eğitimi almış kişiler, derinlemesine uzmanlaşma, çeşitli rollerde ilerleme veya farklı disiplinlerle (işletme gibi) birleştirme gibi birbirinden çok farklı kariyer yolları izleyebilir; 'tek doğru yol' yoktur",
      "Kariyer boyunca rol değiştirmek her zaman başarısızlık göstergesidir",
      "Bu üç kişinin kariyer yolları arasında hiçbir ortak nokta yoktur, karşılaştırılamaz"
    ],
    correct: 2,
    explain: "Kimya eğitimi/bilgisi, doğrusal veya tek bir 'doğru' kariyer yolu dayatmaz; derinlemesine uzmanlaşma, çok yönlü rol değişimi veya farklı disiplinlerle (işletme gibi) birleştirme gibi çeşitli yollarla başarılı bir kariyer inşa edilebilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir hemşire, bir kimya kariyeri seçerken şu etik ikilemle karşılaşabileceğini öğreniyor: bir kimyager, işvereninin çevreye zararlı ama yasal sınırlar içinde kalan bir üretim yöntemini kullanmaya devam etmesini istediği bir durumla karşılaşabilir; burada hem işini kaybetme riski hem de kişisel/toplumsal sorumluluk arasında bir gerilim yaşanabilir.",
    text: "Bu tür bir senaryo, kimya kariyerlerinde mesleki etik hakkında en olgun hangi çıkarımı destekler?",
    options: [
      "Kimyagerler işverenlerinin her isteğini sorgusuz kabul etmelidir",
      "Kimya kariyerlerinde etik hiçbir zaman bir sorun oluşturmaz",
      "Kimya kariyerleri yalnızca teknik bilgi değil, aynı zamanda mesleki etik, toplumsal sorumluluk ve bazen zor kararlar verme becerisi de gerektirebilir",
      "Yasal sınırlar içinde kalan hiçbir uygulama etik açıdan sorgulanamaz",
      "Bu tür ikilemler yalnızca kurgusal senaryolardır, gerçek hayatta yaşanmaz"
    ],
    correct: 2,
    explain: "Kimya kariyerleri (ve birçok teknik meslek), yalnızca bilimsel/teknik yetkinlik değil, aynı zamanda mesleki etik ve toplumsal sorumluluk bilinciyle karar verme becerisini de gerektirebilir; yasallık ile etik her zaman birebir örtüşmeyebilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir gazeteci, küresel ilaç şirketlerinin yeni bir ilacı geliştirmek için ortalama 10-15 yıl ve yüz milyonlarca dolar harcadığını, bu sürecin çoğu adayın başarısız olmasıyla sonuçlandığını öğreniyor; buna rağmen bu alanda çalışan kimyagerlerin sayısının azalmadığını fark ediyor.",
    text: "Bu gözlem, yüksek riskli/uzun soluklu kimya kariyerlerinde çalışmayı tercih eden kişilerin motivasyonu hakkında en makul hangi çıkarımı destekler?",
    options: [
      "İlaç geliştirme süreci hiçbir risk içermez",
      "Bu alanda çalışan herkes garantili başarıya sahiptir",
      "Bu alanlarda çalışanlar, kısa vadeli garantili sonuçlardan çok, uzun vadeli bilimsel katkı, toplumsal etki veya kişisel tatmin gibi etkenlerden motive olabilir",
      "Uzun soluklu projelerde çalışmak mantıksızdır ve hiçbir kimyager bunu tercih etmez",
      "Bu gözlemden hiçbir çıkarım yapılamaz"
    ],
    correct: 2,
    explain: "Yüksek risk ve uzun süreye rağmen bu tür alanlarda çalışmayı sürdüren kişiler, genellikle kısa vadeli garantiler yerine bilimsel katkı, toplumsal fayda ve mesleki tatmin gibi daha uzun vadeli motivasyon kaynaklarına sahip olabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir laboratuvar teknisyeni, kimya kariyerlerinde cinsiyet dağılımını araştırıyor ve tarihsel olarak bazı alt alanlarda (örneğin ağır sanayi kimyası) erkeklerin, bazılarında (örneğin biyokimya/klinik laboratuvar) kadınların sayıca daha fazla temsil edildiğini; ancak bu dağılımın zamanla değiştiğini öğreniyor.",
    text: "Bu bilgiye dayanarak en dengeli ve bilimsel yaklaşım hangisidir?",
    options: [
      "Geçmişteki dağılım hiçbir zaman değişemez, gelecekte de aynı kalacaktır",
      "Bu dağılım, kadınların veya erkeklerin belirli alanlarda doğuştan daha yetenekli olduğunu kanıtlar",
      "Geçmişteki dağılım eğilimleri, bir kişinin bireysel yeteneğine veya bir alanda başarılı olup olamayacağına dair bir kanıt değildir; kariyer tercihleri toplumsal, tarihsel etkenlerden etkilenmiş olabilir ve zamanla değişebilir",
      "Kariyer seçimlerinde toplumsal etkenlerin hiçbir rolü yoktur",
      "Bu konu bilimsel bir tartışma konusu değildir"
    ],
    correct: 2,
    explain: "Geçmişteki mesleki dağılım eğilimleri, bireysel yetenekle ilgili bir kanıt sunmaz; bu tür örüntüler genellikle tarihsel/toplumsal etkenlerden kaynaklanır ve eğitim erişimi ile toplumsal tutumlar değiştikçe zamanla dönüşebilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir laborant, bir fabrikanın çalışanlarının kimyasal maddelerle güvenli çalışmasını sağlamak için iş sağlığı ve güvenliği kurallarını denetliyor.",
    text: "Bu görev tanımı hangi kariyer alanına aittir?",
    options: [
      "Turizm rehberliği",
      "Astronomi araştırmacılığı",
      "İş sağlığı ve güvenliği (EHS) uzmanlığı",
      "Grafik tasarım",
      "Spor koçluğu"
    ],
    correct: 2,
    explain: "Kimyasal maddelerle çalışan işçilerin güvenliğini sağlamak iş sağlığı ve güvenliği (EHS) uzmanlığının görevidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir spor yapan kişi, bir şirketin fabrika atıklarının çevre mevzuatına uygun şekilde bertaraf edilmesi konusunda şirkete danışmanlık veriyor.",
    text: "Bu danışmanlık hizmeti hangi kariyer alanına girer?",
    options: [
      "Turizm rehberliği",
      "Kozmetik satışı",
      "Spor yönetimi",
      "Çevre danışmanlığı",
      "Muhasebecilik"
    ],
    correct: 3,
    explain: "Atık yönetimi ve çevre mevzuatına uygunluk konusunda danışmanlık vermek çevre danışmanlığının görev alanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Ali, kendi kurduğu küçük şirkette doğal içerikli temizlik ürünleri formüle edip satıyor; hem kimyager hem işletmeci rolünü üstleniyor.",
    text: "Bu kişinin izlediği kariyer yolu en çok hangi kavramla ilişkilidir?",
    options: [
      "Sendika temsilciliği",
      "Akademik araştırmacılık",
      "Kamu memurluğu",
      "Girişimcilik (kimya temelli)",
      "Devlet denetçiliği"
    ],
    correct: 3,
    explain: "Kendi işini kurup kimya bilgisini ticari bir ürüne dönüştürmek, kimya temelli girişimciliğin bir örneğidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Ece, bir savcılık bünyesinde olay yerinden toplanan kimyasal delilleri analiz ederek mahkemeye bilirkişi raporu sunuyor.",
    text: "Bu uzmanlık alanı hangi kariyer kategorisine girer?",
    options: [
      "Spor koçluğu",
      "Turizm işletmeciliği",
      "Grafik tasarım",
      "Adli kimya uzmanlığı",
      "Muhasebecilik"
    ],
    correct: 3,
    explain: "Adli olaylarla ilgili kimyasal delillerin analiz edilip mahkemeye rapor sunulması adli kimya uzmanlığının görevidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aşağıdaki grafikte, bir üniversitenin kimya bölümü mezunlarının beş yıl sonra çalıştıkları sektörlerin (varsayımsal) dağılımı gösterilmiştir.",
    chart: {
      type: "bar",
      labels: ["Sanayi", "Akademi", "Sağlık/İlaç", "Eğitim", "Diğer"],
      values: [38, 15, 22, 18, 7],
      title: "Mezunların 5 yıl sonraki sektör dağılımı (%)"
    },
    text: "Grafiğe göre, kimya mezunlarının kariyer olanakları hakkında en doğru çıkarım hangisidir?",
    options: [
      "Grafiğe göre kimya mezunlarının hiçbiri sağlık sektöründe çalışmamaktadır",
      "Kimya mezunlarının tamamı akademisyen olmaktadır",
      "Kimya mezunları yalnızca eğitim sektöründe çalışabilir",
      "Kimya mezunlarının büyük çoğunluğu sanayi sektöründe, ama önemli bir kısmı da akademi, sağlık ve eğitim gibi çeşitli sektörlerde istihdam edilmektedir",
      "Grafikten hiçbir anlamlı sonuç çıkarılamaz"
    ],
    correct: 3,
    explain: "Grafik, kimya mezunlarının en büyük payla sanayi sektöründe (%38) olmakla birlikte, akademi, sağlık/ilaç ve eğitim gibi farklı sektörlere de dağıldığını göstermektedir — bu, kimya kariyerlerinin çeşitliliğini yansıtır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir güvenlik uzmanı, kimya öğretmenliğinin yalnızca lisede ders anlatmaktan ibaret olmadığını; bazı öğretmenlerin ayrıca ders materyali/kitap yazarlığı, olimpiyat öğrenci koçluğu veya eğitim teknolojileri danışmanlığı gibi ek roller de üstlenebildiğini öğreniyor.",
    text: "Bu bilgi, tek bir meslek unvanı (öğretmenlik) içindeki çeşitlilik hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Yalnızca üniversite hocaları ek roller üstlenebilir",
      "Öğretmenlik kariyeri hiçbir zaman çeşitlendirilemez",
      "Ders kitabı yazarlığı öğretmenlikle hiç ilgili değildir",
      "Aynı meslek unvanı altında bile kişiler farklı ek roller ve uzmanlıklar geliştirerek kariyerlerini çeşitlendirebilir",
      "Bu bilgi kariyer planlamasıyla ilgisizdir"
    ],
    correct: 3,
    explain: "Tek bir meslek unvanı (örneğin öğretmenlik) içinde bile, kişiler ek uzmanlıklar (yazarlık, koçluk, danışmanlık gibi) geliştirerek kariyerlerini zenginleştirebilir ve çeşitlendirebilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Burak, yurt dışında kimya alanında yüksek lisans/doktora yapmanın uluslararası araştırma projelerine katılma ve farklı ülkelerde çalışma fırsatı sunabileceğini, ancak bu yolun aynı zamanda dil öğrenimi, kültürel uyum ve genellikle uzun bir zaman taahhüdü gerektirdiğini öğreniyor.",
    text: "Bu bilgiye dayanarak, uluslararası bir kimya kariyeri hakkında en dengeli çıkarım hangisidir?",
    options: [
      "Herkes mutlaka yurt dışında eğitim almalıdır",
      "Yurt dışında eğitim almanın hiçbir dezavantajı yoktur",
      "Yurt dışı deneyimi kimya kariyerinde hiçbir fark yaratmaz",
      "Uluslararası kariyer fırsatları önemli avantajlar sunabilir, ancak beraberinde ek zorluklar ve uzun vadeli taahhütler de getirebilir; karar verirken her iki yön de değerlendirilmelidir",
      "Uluslararası kariyer fırsatları yalnızca olumsuz sonuçlar doğurur"
    ],
    correct: 3,
    explain: "Uluslararası kariyer/eğitim fırsatları önemli avantajlar (yeni deneyimler, geniş ağ) sunabileceği gibi, zorluklar (dil, kültürel uyum, zaman taahhüdü) da içerebilir; dengeli bir kariyer kararı bu iki yönü birlikte değerlendirmeyi gerektirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Meraklı bir gözlemci, bir kimya şirketinin genel müdürünün aslında kimya lisansı ile işe başlayıp yıllar içinde laboratuvar sorumluluğundan proje yöneticiliğine, oradan da üst yönetime terfi ettiğini öğreniyor.",
    text: "Bu örnek, kimya alanındaki kariyer gelişimi hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Laboratuvar deneyimi yönetici olmak için hiçbir katkı sağlamaz",
      "Kimya lisansı olan biri hiçbir zaman yönetici olamaz",
      "Üst yönetime yalnızca işletme mezunları terfi edebilir",
      "Teknik bir eğitimle (kimya lisansı) başlayan bir kariyer, zamanla yönetim ve liderlik sorumluluklarına doğru genişleyebilir",
      "Kariyer gelişimi her zaman aynı görevde kalmayı gerektirir"
    ],
    correct: 3,
    explain: "Teknik bir alanda (kimya gibi) başlayan bir kariyer, deneyim ve ek becerilerle zamanla proje yönetimi ve üst düzey yöneticilik gibi sorumluluklara doğru genişleyebilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir bahçıvan, kimya kariyerini araştırırken hem 'temel araştırma' (yeni bilimsel bilgi üretmek, kısa vadeli somut ürün hedefi olmayabilir) hem 'uygulamalı araştırma' (belirli bir ürün/teknolojiyi geliştirmek amacıyla yapılan araştırma) kavramlarını öğreniyor.",
    text: "Bir üniversitede atomun temel yapısını inceleyen bir profesör ile bir şirkette yeni bir pil teknolojisi geliştiren bir mühendis, sırasıyla hangi araştırma türüyle daha çok ilişkilidir?",
    options: [
      "İkisi de uygulamalı araştırma yapmaktadır",
      "Profesör: uygulamalı araştırma, Mühendis: temel araştırma",
      "İkisi de temel araştırma yapmaktadır",
      "Profesör: temel araştırma, Mühendis: uygulamalı araştırma",
      "Bu ayrım gerçek hayatta hiçbir zaman yapılamaz"
    ],
    correct: 3,
    explain: "Atomun temel yapısını incelemek, kısa vadeli bir ürün hedefi gütmeyen temel araştırmaya; yeni bir pil teknolojisi geliştirmek ise belirli bir ürünü hedefleyen uygulamalı araştırmaya örnektir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir mühendis, kimya kariyeri planlarken staj yapmanın önemini öğreniyor: bir öğrenci staj sırasında laboratuvar ortamının kendi ilgi alanına uygun olup olmadığını doğrudan deneyimleyebiliyor, bu da mezuniyet sonrası kariyer kararını daha bilinçli vermesini sağlıyor.",
    text: "Bu bilgi, kariyer planlamasında stajın rolü hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Staj yapan herkes mutlaka o alanda çalışmak zorundadır",
      "Staj yapmanın kariyer kararlarıyla hiçbir ilgisi yoktur",
      "Yalnızca teorik bilgi kariyer kararı için yeterlidir, pratik deneyime gerek yoktur",
      "Staj deneyimi, teorik bilgiyi pratikle test ederek daha bilinçli kariyer kararları verilmesine yardımcı olabilir",
      "Staj deneyimi yalnızca not ortalamasını etkiler"
    ],
    correct: 3,
    explain: "Staj gibi doğrudan deneyimler, öğrencinin teorik bilgiyi gerçek çalışma ortamıyla karşılaştırarak kariyer tercihlerini daha bilinçli ve bilgiye dayalı şekilde yapmasına yardımcı olabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir sağlık çalışanı, gelişmekte olan bir ülkede kimya alanında kariyer yapmayı düşünüyor; bu ülkede sanayi altyapısı henüz sınırlı olsa da, hükûmetin son yıllarda Ar-Ge'ye yatırımı artırdığını ve yabancı şirketlerin üretim tesisleri kurmaya başladığını öğreniyor.",
    text: "Bu bilgilere dayanarak, bu ülkede kimya kariyeri yapmanın gelecekteki olanakları hakkında en makul öngörü hangisidir?",
    options: [
      "Yabancı şirket yatırımları yerel kariyer olanaklarını her zaman azaltır",
      "Sınırlı mevcut altyapı, bu ülkede hiçbir zaman kimya kariyeri yapılamayacağı anlamına gelir",
      "Ar-Ge yatırımlarının kariyer olanaklarıyla hiçbir ilişkisi yoktur",
      "Mevcut sınırlı altyapıya rağmen, artan Ar-Ge yatırımları ve yeni yatırımlar, gelecekte kimya alanında kariyer olanaklarının genişleyebileceğine işaret eden olumlu göstergelerdir",
      "Bu bilgilerden hiçbir öngörüde bulunulamaz"
    ],
    correct: 3,
    explain: "Artan Ar-Ge yatırımları ve yeni sanayi tesisleri, bir ülkede gelecekteki kimya kariyeri olanaklarının genişleyebileceğine dair olumlu (ama kesin olmayan) göstergeler sunar; bu tür makro eğilimler kariyer planlamasında dikkate alınabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kalite kontrol uzmanı, iki farklı kariyer stratejisini karşılaştırıyor: Strateji A, tek bir dar uzmanlık alanında (örneğin yalnızca bir tür polimer sentezi) derinlemesine uzmanlaşmayı önerirken; Strateji B, birden fazla alanda (örneğin hem sentez hem analiz hem yönetim becerisi) orta düzeyde yetkinlik kazanmayı öneriyor.",
    text: "Bu iki stratejinin olası avantaj/dezavantajları hakkında en dengeli değerlendirme hangisidir?",
    options: [
      "Kariyer stratejisi seçmenin sonuçlar üzerinde hiçbir etkisi yoktur",
      "Derinlemesine uzmanlaşma her zaman kesin olarak daha iyidir",
      "Çok yönlülük her zaman kesin olarak daha iyidir",
      "Bu iki strateji arasında hiçbir fark yoktur",
      "Derinlemesine uzmanlaşma o dar alanda yüksek değer yaratabilir ama alan daralırsa risk taşıyabilir; çok yönlülük ise esneklik sağlar ama her alanda en üst düzey uzman olmayı zorlaştırabilir — ikisi de duruma göre avantajlı olabilir"
    ],
    correct: 4,
    explain: "Derinlemesine uzmanlaşma ile çok yönlülük stratejilerinin her ikisinin de kendine özgü avantaj ve riskleri vardır; en uygun strateji kişinin hedeflerine, sektörün durumuna ve risk toleransına bağlı olarak değişebilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir analitik kimyager, bir kimya kariyerinde ilerlerken karşılaşabileceği bir durumu düşünüyor: bir araştırma projesinin sonuçları şirketin beklediği gibi çıkmıyor; proje yöneticisi sonuçları 'iyileştirilmiş' göstermesini istiyor, ama bu bilimsel verinin çarpıtılması anlamına geliyor.",
    text: "Bu senaryoda öğrencinin mesleki bütünlük (bilimsel dürüstlük) ile ilgili çıkarması gereken en doğru ders hangisidir?",
    options: [
      "Bu tür durumlar kimya kariyerlerinde hiçbir zaman yaşanmaz",
      "Şirket yöneticisinin her isteği bilimsel doğruluktan önce gelmelidir",
      "Veri çarpıtmak, sonuçlar şirkete fayda sağladığı sürece kabul edilebilir",
      "Bilimsel dürüstlük yalnızca akademik ortamlarda önemlidir, endüstride önemli değildir",
      "Kimya kariyerlerinde bilimsel verinin doğru ve dürüst raporlanması, iş baskısına rağmen korunması gereken temel bir mesleki değerdir"
    ],
    correct: 4,
    explain: "Ticari/kurumsal baskılara rağmen bilimsel verinin doğru ve dürüst şekilde raporlanması, tüm kimya kariyerlerinde (akademik veya endüstriyel) korunması gereken temel bir mesleki bütünlük ilkesidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir gıda mühendisi, bir üniversite kütüphanesinde kimya alanındaki yeni bilimsel yayınları takip edip araştırmacılara kaynak taraması hizmeti sunuyor.",
    text: "Bu hizmet hangi kariyer alanının parçasıdır?",
    options: [
      "İnşaat ustalığı",
      "Maden mühendisliği",
      "Turizm rehberliği",
      "Spor koçluğu",
      "Bilimsel bilgi/kütüphane uzmanlığı"
    ],
    correct: 4,
    explain: "Bilimsel yayınları takip edip araştırmacılara kaynak desteği sunmak, bilimsel bilgi yönetimi/kütüphanecilik alanının bir örneğidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir akademisyen, bir devlet kurumunda ithal edilen kimyasal maddelerin güvenlik standartlarına uygunluğunu denetleyip ruhsat veriyor.",
    text: "Bu görev hangi kariyer alanının sorumluluğundadır?",
    options: [
      "Muhasebecilik",
      "Turizm işletmeciliği",
      "Grafik tasarım",
      "Spor yönetimi",
      "Kamu sektöründe kimyasal madde denetçiliği/ruhsatlandırma uzmanlığı"
    ],
    correct: 4,
    explain: "Kimyasal maddelerin güvenlik standartlarına uygunluğunu denetleyip resmî izin vermek, kamu sektöründeki denetçilik/ruhsatlandırma kariyerlerinin görevidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir üniversite öğrencisi, kimya kariyerinde ilerlemenin yalnızca teknik bilgiyle değil, aynı zamanda takım çalışması, proje yönetimi ve etkili iletişim gibi 'yumuşak becerilerle' de ilişkili olabileceğini öğreniyor; bir laboratuvar yöneticisinin hem kimya bilgisine hem de ekibini yönetme becerisine ihtiyaç duyduğunu fark ediyor.",
    text: "Bu bilgi, kimya kariyerinde ilerleme hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Yumuşak beceriler yalnızca satış mesleklerinde önemlidir",
      "Kimya kariyerinde ilerlemek yalnızca teknik bilgiye bağlıdır, başka hiçbir beceri gerekmez",
      "Takım çalışması becerisi kimya kariyerinde hiçbir zaman önemli değildir",
      "Laboratuvar yöneticiliği teknik bilgi gerektirmez",
      "Kariyer basamaklarında ilerledikçe, teknik bilginin yanında liderlik ve iletişim gibi becerilerin önemi de artabilir"
    ],
    correct: 4,
    explain: "Kariyer basamaklarında ilerledikçe (örneğin laboratuvar yöneticiliği gibi rollerde), teknik bilginin yanı sıra liderlik, iletişim ve proje yönetimi gibi 'yumuşak becerilerin' önemi de artabilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Ali, bir devlet üniversitesinde ücretsiz kimya eğitimi alabileceğini, ancak özel bir üniversitede burs olanaklarının ve laboratuvar imkanlarının daha geniş olabileceğini öğreniyor; her iki seçeneğin de kendine göre avantaj ve dezavantajları olduğunu fark ediyor.",
    text: "Bu bilgiye dayanarak, üniversite/kariyer yolu seçiminde en olgun yaklaşım hangisidir?",
    options: [
      "Bu tür kararlar tamamen rastgele verilmelidir",
      "Her zaman en pahalı seçeneği tercih etmek",
      "Her zaman en ücretsiz seçeneği tercih etmek, başka hiçbir etkeni düşünmemek",
      "Üniversite seçiminin kariyer sonuçlarıyla hiçbir ilişkisi yoktur",
      "Farklı seçeneklerin (devlet/özel üniversite gibi) avantaj ve dezavantajlarını kişisel öncelikler ve olanaklar çerçevesinde karşılaştırarak bilinçli bir karar vermek"
    ],
    correct: 4,
    explain: "Eğitim/kariyer yolu seçimi, maliyet, olanaklar ve kişisel öncelikler gibi birden fazla etkenin dengeli biçimde değerlendirildiği bilinçli bir karar sürecini gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir araştırmacı, bir bölgede belirli bir kimya alt alanında (örneğin petrokimya) çok sayıda iş fırsatı olduğunu, ancak bu alanın gelecekte fosil yakıtlardan uzaklaşma eğilimi nedeniyle daralabileceğini öğreniyor; aynı zamanda yenilenebilir enerji kimyası alanının büyüme potansiyeli taşıdığını fark ediyor.",
    text: "Bu bilgilere dayanarak, uzun vadeli kariyer planlaması yapan bir öğrenci için en akılcı yaklaşım hangisidir?",
    options: [
      "Yenilenebilir enerji kimyasının hiçbir gelecek potansiyeli yoktur",
      "Yalnızca şu anda en çok iş imkânı olan alanı seçmek, geleceği hiç düşünmemek",
      "Petrokimya alanının gelecekte tamamen yok olacağını varsaymak",
      "Gelecekteki eğilimlerin kariyer kararlarıyla hiçbir ilgisi yoktur",
      "Yalnızca mevcut iş fırsatı sayısına değil, aynı zamanda alanın gelecekteki büyüme/daralma eğilimlerine de bakarak kariyer kararı vermek"
    ],
    correct: 4,
    explain: "Akılcı bir uzun vadeli kariyer planlaması, yalnızca mevcut iş fırsatı yoğunluğuna değil, aynı zamanda o alanın gelecekteki büyüme veya daralma eğilimlerine de dikkat etmeyi gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Zeynep, kimya kariyerinde 'başarı'nın farklı insanlar için farklı anlamlara gelebileceğini fark ediyor: biri için başarı yüksek maaş, biri için toplumsal fayda sağlamak, biri için ise bilimsel keşif yapmaktır.",
    text: "Bu gözlem, kariyer planlaması ve kişisel değerler arasındaki ilişki hakkında en olgun hangi çıkarımı destekler?",
    options: [
      "Kişisel değerlerin kariyer seçimiyle hiçbir ilişkisi yoktur",
      "Başarının tek bir evrensel tanımı vardır ve herkes bu tanıma göre kariyer seçmelidir",
      "Yüksek maaş, başarının tek geçerli ölçütüdür",
      "Toplumsal fayda sağlamak kariyer başarısıyla hiç ilgili değildir",
      "Kariyer planlaması, evrensel bir 'başarı' tanımına göre değil, kişinin kendi değerlerine ve önceliklerine göre şekillendirilmelidir"
    ],
    correct: 4,
    explain: "Kariyer başarısının tanımı kişiden kişiye değişebilir; bilinçli bir kariyer planlaması, kişinin kendi değerlerini (maddi kazanç, toplumsal fayda, bilimsel merak vb.) tanıyıp bunlara uygun kararlar vermesini gerektirir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Merve, bir üniversite laboratuvarında araştırmacılara deney düzeneklerini hazırlama, kimyasal stok takibi yapma ve cihaz bakımı gibi konularda destek oluyor.",
    text: "Bu destek görevi hangi kariyer alanının parçasıdır?",
    options: [
      "Muhasebecilik",
      "Bilim gazeteciliği",
      "Patent hukuku",
      "Turizm rehberliği",
      "Laboratuvar teknisyenliği"
    ],
    correct: 4,
    explain: "Laboratuvar düzeneklerinin hazırlanması ve cihaz/stok yönetimi gibi destek görevleri laboratuvar teknisyenliğinin görev alanına girer."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir çevre mühendisi, bir kimya kariyerinde 'sürekli mesleki gelişim' kavramını araştırıyor: mezun olduktan sonra bile kimyagerlerin yeni yöntemleri, yönetmelikleri ve teknolojileri öğrenmeye devam etmesi gerektiğini fark ediyor.",
    text: "Bu bilgi, kimya kariyerinin doğası hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bu bilgi kariyer planlamasıyla ilgisizdir",
      "Mezuniyetten sonra hiçbir yeni bilgiye ihtiyaç duyulmaz",
      "Kimya alanındaki bilgiler hiçbir zaman değişmez",
      "Sürekli mesleki gelişim yalnızca akademisyenler için gereklidir",
      "Kimya kariyeri, mezuniyetle biten değil, kariyer boyunca sürekli öğrenmeyi gerektiren dinamik bir süreçtir"
    ],
    correct: 4,
    explain: "Kimya kariyeri, mezuniyetle sona ermeyen; yeni yöntemler, teknolojiler ve düzenlemeler öğrenilmeye devam edilmesini gerektiren, kariyer boyunca süren dinamik bir öğrenme sürecidir."
  }
],
  "guvenlik": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir doktora öğrencisi laboratuvarda asitli bir çözeltiyle çalışırken gözlerine sıçrama riskine karşı önlem almak istiyor.",
    text: "Bu risk için en uygun kişisel koruyucu donanım hangisidir?",
    options: ["Önlük", "Eldiven", "Koruyucu gözlük", "Maske", "Bone"],
    correct: 2,
    explain: "Göze sıçrama riskine karşı en doğrudan koruma koruyucu gözlük kullanmaktır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir kimyasal madde kabının üzerinde alevle çevrili bir sembol bulunuyor.",
    text: "Bu sembol maddenin hangi özelliğine dikkat çekmektedir?",
    options: ["Radyoaktif olduğuna", "Kolay tutuşabilir (yanıcı) olduğuna", "Aşındırıcı olduğuna", "Çevreye zararlı olduğuna", "Basınçlı gaz olduğuna"],
    correct: 1,
    explain: "Alev sembolü, maddenin yanıcı/tutuşabilir özelliğine dikkat çeken bir GHS tehlike işaretidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Sınıftaki öğrenciler laboratuvarda kullanacağı bir kimyasalın tehlikelerini öğrenmek istiyor.",
    text: "Bu bilgiye en güvenilir şekilde hangi belgeden ulaşabilir?",
    options: ["Sosyal medya paylaşımları", "Ürünün reklam broşürü", "Güvenlik Bilgi Formu (GBF/SDS)", "Arkadaşının tahmini", "Ürünün fiyat etiketi"],
    correct: 2,
    explain: "Kimyasal maddelerin tehlikeleri, kullanımı ve acil durum önlemleri Güvenlik Bilgi Formunda (GBF/SDS) resmi olarak yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Onur deney sırasında elinize az miktarda aşındırıcı bir kimyasal döküldüğünde ilk yapılması gerekeni öğreniyor.",
    text: "Bu durumda ilk yapılması gereken en doğru davranış hangisidir?",
    options: ["Beklemek, kendiliğinden geçmesini ummak", "Kimyasalı elle silmek", "Bölgeyi hemen bol suyla yıkamak", "Üzerine başka bir kimyasal dökmek", "Görmezden gelip deneye devam etmek"],
    correct: 2,
    explain: "Cilde temas eden aşındırıcı/tahriş edici kimyasallar için ilk ve en etkili müdahale bol suyla yıkamaktır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir grup öğrenci laboratuvarda bir kimyasalın kokusunu tanımak istiyor.",
    text: "Bu amaçla güvenli koklama yöntemi hangisidir?",
    options: ["Şişeyi doğrudan buruna dayamak", "Buharı elle yelpazeleyerek uzaktan hafifçe koklamak", "Kimyasalı içmeye çalışmak", "Kimyasalı ısıtıp dumanını içine çekmek", "Koklamak için gözleri kapatmak yeterlidir"],
    correct: 1,
    explain: "Laboratuvarda güvenli koklama yöntemi, buharı elle yelpazeleyerek uzaktan ve hafifçe koklamaktır; doğrudan buruna dayamak zararlı olabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Can evde çamaşır suyu ile tuz ruhu (hidroklorik asit içeren bir temizlik ürünü) kullanıyor.",
    text: "Bu iki ürünün birlikte karıştırılması neden tehlikelidir?",
    options: [
      "Renk değişimi olur, tehlikesi yoktur",
      "Zehirli klor gazı açığa çıkabilir",
      "Sadece koku değişir, başka etkisi yoktur",
      "İkisi birbirini etkisiz hale getirir, güvenlidir",
      "Karışım daha az etkili bir temizleyici olur, başka riski yoktur"
    ],
    correct: 1,
    explain: "Çamaşır suyu (sodyum hipoklorit) ile asidik temizlik ürünlerinin karışımı zehirli klor gazı açığa çıkarabilir; bu iki ürün asla karıştırılmamalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir gazeteci laboratuvarda kullanacağı kimyasalların üzerinde çarpı işaretli bir insan silueti sembolü görüyor.",
    text: "Bu sembol neyi ifade eder?",
    options: ["Basınçlı gaz içerdiğini", "Sağlığa ciddi zarar (örn. kanserojen, solunum toksisitesi) verebileceğini", "Çevreye zararlı olduğunu", "Oksitleyici olduğunu", "Patlayıcı olduğunu"],
    correct: 1,
    explain: "İnsan silueti üzerindeki tehlike sembolü, maddenin ciddi sağlık tehlikeleri (kanserojenlik, solunum toksisitesi gibi) taşıdığını belirtir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laboratuvar ekibi laboratuvarda deney bittikten sonra ellerini yıkamadan sınıftan çıkmayı düşünüyor.",
    text: "Bu davranışın olası riski en iyi hangi seçenekle açıklanır?",
    options: [
      "Hiçbir risk yoktur, eller görünürde temizse yıkamaya gerek yoktur",
      "Ellerde kalabilecek görünmez kimyasal kalıntılar yiyecek/içecekle veya yüze temasla vücuda geçebilir",
      "El yıkamak yalnızca hijyen için önemlidir, kimyasal güvenlikle ilgisi yoktur",
      "Sadece renkli kimyasallar tehlikelidir, renksiz olanlar risksizdir",
      "Bu davranış yalnızca eldiven takılmadığında risklidir"
    ],
    correct: 1,
    explain: "Deneyden sonra el yıkamamak, ellerde kalan görünmez kimyasal kalıntıların yiyecek, içecek veya yüze temas yoluyla vücuda geçmesine yol açabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Burak laboratuvarda deney önlüğünün kollarını sıvamadan, saçını toplamadan deney yapıyor.",
    text: "Bu durumun en olası riski nedir?",
    options: [
      "Sadece deneyin sonucu etkilenir, güvenlikle ilgisi yoktur",
      "Hiçbir risk yoktur, bu tamamen görünümle ilgilidir",
      "Uzun saç veya geniş kolların bir alev veya dönen ekipmana yakalanma riski artar",
      "Bu durum yalnızca estetik bir sorundur",
      "Saç toplamak yalnızca kız öğrenciler için gereklidir"
    ],
    correct: 2,
    explain: "Toplanmamış saç ve sıvanmamış geniş kollar, alev veya hareketli ekipmanla temas edip yanma/yakalanma riski oluşturabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir kariyer danışmanı, laboratuvarda kullanılmayan kimyasalların nasıl saklanacağını öğreniyor: yanıcı maddelerin oksitleyicilerden uzak, farklı sınıftaki asit ve bazların ayrı raflarda tutulması gerektiğini fark ediyor.",
    text: "Bu ayrım neden önemlidir?",
    options: [
      "Yalnızca raf düzenini estetik açıdan iyileştirmek için",
      "Birbiriyle tepkimeye girebilecek maddelerin istenmeyen şekilde temas etmesini önlemek için",
      "Etiketlerin daha kolay okunması için",
      "Sadece yer tasarrufu sağlamak için",
      "Kimyasalların renklerini korumak için"
    ],
    correct: 1,
    explain: "Kimyasalların sınıflarına göre ayrı depolanması, birbiriyle tepkimeye girip tehlikeli sonuçlar (yangın, zehirli gaz vb.) doğurabilecek istenmeyen temasları önler."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir kimya öğretmeni, laboratuvarda ısıtılan bir sıvının ağzı kapalı bir kapta ısıtıldığını fark ediyor.",
    text: "Bu durumun taşıdığı temel risk nedir?",
    options: [
      "Sıvı hiçbir zaman ısınmaz",
      "Kabın içinde basınç artarak kabın patlamasına yol açabilir",
      "Hiçbir risk yoktur, bu güvenli bir yöntemdir",
      "Sıvı rengini kaybeder, başka riski yoktur",
      "Kap otomatik olarak soğur"
    ],
    correct: 1,
    explain: "Kapalı bir kapta sıvı ısıtıldığında oluşan buhar basıncı artar ve bu, kabın patlamasına yol açabilecek ciddi bir güvenlik riskidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir ev hanımı evde temizlik yaparken eldiven takmadan güçlü bir kireç çözücüyle çalışıyor.",
    text: "Bu davranışın en olası sonucu nedir?",
    options: [
      "Kireç çözücü daha etkili çalışır",
      "Hiçbir etkisi yoktur",
      "Cilt tahrişi veya yanığı riski artar",
      "Ellerin daha temiz görünmesini sağlar",
      "Sadece koku hissedilir, başka etkisi yoktur"
    ],
    correct: 2,
    explain: "Aşındırıcı temizlik ürünleriyle eldivensiz çalışmak cilt tahrişi veya kimyasal yanık riskini artırır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir itfaiyeci, bir kimyasal madde şişesinin etiketinin solup okunmaz hale geldiğini fark ediyor.",
    text: "Bu durumda en doğru davranış hangisidir?",
    options: [
      "Şişeyi kokusuna göre tahmin ederek kullanmaya devam etmek",
      "İçeriği kesin olarak belirlenene kadar maddeyi kullanmamak ve sorumlu kişiye bildirmek",
      "Şişeyi rastgele bir kimyasalla aynı kabul edip kullanmak",
      "Şişeyi açıp renk ve kıvamına bakarak karar vermek",
      "Şişeyi lavaboya boşaltmak"
    ],
    correct: 1,
    explain: "İçeriği belirsizleşen bir kimyasal, tahmin yoluyla kullanılmamalı; güvenlik açısından içerik netleşene kadar kullanılmamalı ve durum sorumlu kişiye bildirilmelidir."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laboratuvar teknisyeni, bir kimyasalın Güvenlik Bilgi Formunda (GBF) şu bilgileri görüyor: 'Solunum yoluyla zararlı', 'Gözle temasında ciddi hasar', 'Yanıcı sıvı ve buhar'.",
    text: "Bu bilgilere göre, öğrencinin bu kimyasalla çalışırken alması gereken önlemler kombinasyonu hangisidir?",
    options: [
      "Kapalı, havalandırmasız bir dolapta çalışmak daha güvenlidir",
      "Sadece eldiven takmak yeterlidir, başka önlem gerekmez",
      "İyi havalandırılan bir ortamda, koruyucu gözlükle ve açık alevden uzakta çalışmak",
      "Yalnızca maske takmak, gözlük ve alevden uzaklaşma gerekmez",
      "Bu bilgiler önlem alınmasını gerektirmez"
    ],
    correct: 2,
    explain: "Solunum, göz ve yanıcılık tehlikeleri bir arada olduğunda, iyi havalandırma, göz koruması ve alevden uzak çalışma gibi önlemlerin birlikte alınması gerekir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir sağlık çalışanı, bir laboratuvarda yangın çıktığında söndürme yönteminin, yangının kaynağına (elektrikli cihaz, yanıcı sıvı, kağıt vb.) göre değişmesi gerektiğini öğreniyor; örneğin elektrikli bir yangına su ile müdahale etmenin elektrik çarpması riski taşıdığını fark ediyor.",
    text: "Bu bilgiye dayanarak, laboratuvar güvenliği hakkında en doğru genelleme hangisidir?",
    options: [
      "Elektrikli yangınlarda su kullanmanın hiçbir riski yoktur",
      "Su her tür yangın için en güvenli söndürme yöntemidir",
      "Her tür yangına aynı yöntemle (örneğin her zaman suyla) müdahale etmek güvenli değildir; yangın söndürme yöntemi yangının kaynağına göre seçilmelidir",
      "Yangın söndürme yönteminin yangının kaynağıyla hiçbir ilişkisi yoktur",
      "Laboratuvarlarda yangın söndürme eğitimi gereksizdir"
    ],
    correct: 2,
    explain: "Farklı yangın türleri (elektrikli, yanıcı sıvı, kâğıt vb.) farklı söndürme yöntemleri gerektirir; yanlış yöntem (örneğin elektrikli yangına su) durumu kötüleştirebilir veya yeni tehlikeler (elektrik çarpması) yaratabilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir bilim insanı, derişik bir asidi seyreltmek için 'önce su, sonra asit' kuralını öğreniyor: asit her zaman suya yavaşça eklenmeli, asla su asidin üzerine dökülmemeli.",
    text: "Bu kuralın bilimsel gerekçesi en doğru hangi seçenekte açıklanmıştır?",
    options: [
      "Su her zaman asitten daha tehlikelidir",
      "Bu kuralın hiçbir bilimsel gerekçesi yoktur, sadece bir gelenektir",
      "Derişik asit suya eklendiğinde açığa çıkan ısı büyük hacimdeki suya yayılır; ama su az miktardaki asidin üzerine dökülürse, açığa çıkan ısı küçük hacimde yoğunlaşıp ani kaynama ve sıçramaya neden olabilir",
      "Asit suya eklendiğinde hiçbir ısı açığa çıkmaz",
      "Bu kural yalnızca bazlar için geçerlidir, asitler için önemli değildir"
    ],
    correct: 2,
    explain: "Derişik asidin suyla seyreltilmesi ekzotermiktir (ısı açığa çıkar); asit büyük hacimdeki suya eklenirse ısı güvenle dağılır, ama tersi yapılırsa küçük hacimdeki su aniden kaynayıp tehlikeli sıçramalara yol açabilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Aşağıdaki tabloda dört ev kimyasalının birlikte kullanılmasının olası tehlikeleri özetlenmiştir.",
    table: {
      headers: ["Karışım", "Olası tehlike"],
      rows: [
        ["Çamaşır suyu + Amonyak", "Zehirli kloramin gazları"],
        ["Çamaşır suyu + Asit temizleyici", "Zehirli klor gazı"],
        ["Hidrojen peroksit + Sirke", "Aşındırıcı perasetik asit"],
        ["Farklı marka ilaç temizleyicileri", "Genellikle düşük risk (ürüne göre değişir)"]
      ]
    },
    text: "Tabloya göre, ev temizliğinde en genel geçerli güvenlik prensibi hangisidir?",
    options: [
      "Yalnızca çamaşır suyu tehlikelidir, diğer ürünlerin karışımı risksizdir",
      "Tüm temizlik ürünleri güvenle karıştırılabilir",
      "Farklı temizlik ürünlerini rastgele karıştırmamak, her ürünü tek başına ve etiketindeki talimata göre kullanmak",
      "Tabloya göre hiçbir karışım güvenlik sorunu oluşturmaz",
      "Sadece amonyak içeren ürünlerden kaçınmak yeterlidir"
    ],
    correct: 2,
    explain: "Tablo, farklı temizlik ürünlerinin karıştırılmasının çoğu zaman öngörülemeyen tehlikeli gazlar oluşturabileceğini gösterir; bu nedenle genel kural, ürünleri karıştırmadan, talimatına göre tek tek kullanmaktır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Meraklı bir gözlemci, bir kimyasalın 'akut toksisite' (kısa süreli yüksek dozda maruziyetin etkisi) ile 'kronik toksisite' (uzun süreli düşük dozda maruziyetin etkisi) arasındaki farkı öğreniyor.",
    text: "Bir laboratuvar çalışanının yıllarca düşük düzeyde belirli bir çözücü buharına maruz kalması sonucu zamanla sağlık sorunları geliştirmesi, hangi toksisite türüne örnektir?",
    options: ["Akut toksisite", "Kronik toksisite", "Hiçbiri, bu toksisiteyle ilgisizdir", "Yalnızca alerjik reaksiyon, toksisite değildir", "Fiziksel yaralanma, kimyasal etkiyle ilgisizdir"],
    correct: 1,
    explain: "Uzun süre boyunca düşük dozda maruziyet sonucu zamanla ortaya çıkan sağlık etkileri kronik toksisiteye örnektir; akut toksisite ise kısa süreli yüksek doz maruziyetle ilişkilidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir mühendis, bir laboratuvarda çalışırken 'göz duşu' ve 'acil duş' istasyonlarının yerini önceden öğrenmesi gerektiğini fark ediyor; deney sırasında bu bilgiyi aramaya vakit kaybetmenin riskli olabileceğini düşünüyor.",
    text: "Bu düşünce, laboratuvar güvenliğinde 'önleyici hazırlık' kavramı hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Deney sırasında ekipman aramak hiçbir zaman zaman kaybına yol açmaz",
      "Acil durum ekipmanının yerini bilmek kaza riskini hiçbir şekilde etkilemez",
      "Acil durum ekipmanının yerini önceden bilmek, gerçek bir kaza anında tepki süresini kısaltarak zararı azaltabilir",
      "Önleyici hazırlık yalnızca profesyonel kimyagerler için gereklidir, öğrenciler için gereksizdir",
      "Bu bilgi yalnızca teoriktir, pratik bir faydası yoktur"
    ],
    correct: 2,
    explain: "Acil durum ekipmanının (göz duşu, acil duş vb.) yerini önceden bilmek, gerçek bir kaza durumunda tepki süresini kısaltarak olası zararın azaltılmasına yardımcı olabilir — bu, önleyici güvenlik kültürünün önemli bir parçasıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir spor yapan kişi, bir kimyasal madde deposunda yangın söndürme sisteminin neden bazı kimyasal sınıfları için (örneğin bazı metal yangınları için) su bazlı değil, özel toz bazlı olması gerektiğini araştırıyor; bazı metallerin suyla temas ettiğinde şiddetli tepkimeye girip yangını büyütebileceğini öğreniyor.",
    text: "Bu bilgi, güvenlik sistemlerinin tasarımı hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Metal yangınlarının söndürülmesi imkânsızdır",
      "Tüm yangın söndürme sistemleri her tür kimyasal için aynı şekilde etkilidir",
      "Su her zaman en güvenli söndürme maddesidir",
      "Güvenlik önlemleri (söndürme sistemi gibi) genel geçer değil, depolanan/kullanılan maddenin özel kimyasal özelliklerine göre tasarlanmalıdır",
      "Güvenlik sistemi tasarımı maddenin türünden bağımsızdır"
    ],
    correct: 3,
    explain: "Bazı metaller suyla şiddetli tepkimeye girebildiğinden, bu tür maddelerin bulunduğu ortamlarda su bazlı değil, özel (toz bazlı gibi) söndürme sistemleri kullanılmalıdır — güvenlik önlemleri maddenin özelliklerine göre özelleştirilmelidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir analitik kimyager, bir kimyasal madde taşınırken kullanılan ambalajın (cam, plastik, metal) maddenin türüne göre özenle seçilmesi gerektiğini öğreniyor; örneğin hidroflorik asidin camı aşındırdığı için plastik kaplarda saklandığını fark ediyor.",
    text: "Bu bilgi, kimyasal madde depolamasında ambalaj seçimi hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Ambalaj seçiminin güvenlikle hiçbir ilişkisi yoktur",
      "Her kimyasal her tür kapta güvenle saklanabilir",
      "Cam her zaman en güvenli ambalaj malzemesidir",
      "Ambalaj malzemesi, içindeki kimyasalla etkileşime girmeyecek şekilde maddenin özelliklerine göre seçilmelidir",
      "Plastik kaplar hiçbir zaman kimyasal saklamak için kullanılamaz"
    ],
    correct: 3,
    explain: "Ambalaj malzemesi, içindeki kimyasalla tepkimeye girip aşınmayacak veya sızıntı yapmayacak şekilde, maddenin kimyasal özelliklerine uygun olarak dikkatle seçilmelidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laborant, bir fabrikada çalışan işçilerin belirli bir kimyasala maruziyet sınırının (mesleki maruziyet limiti) bilimsel çalışmalarla belirlendiğini ve bu sınırın altında kalmanın sağlık riskini azalttığını, ama tamamen sıfıra indirmediğini öğreniyor.",
    text: "Bu bilgiye dayanarak, mesleki maruziyet limitleri hakkında en doğru bilimsel çıkarım hangisidir?",
    options: [
      "Maruziyet limitlerinin işçi sağlığıyla hiçbir ilişkisi yoktur",
      "Maruziyet limitinin altında kalmak riski tamamen sıfıra indirir",
      "Maruziyet limitleri rastgele belirlenir, bilimsel bir temeli yoktur",
      "Maruziyet limitleri, riski tamamen ortadan kaldırmak yerine, bilimsel verilere dayanarak riski kabul edilebilir bir düzeye indirmeyi amaçlayan pratik eşik değerleridir",
      "Bu limitler yalnızca hukuki bir formaliteden ibarettir"
    ],
    correct: 3,
    explain: "Mesleki maruziyet limitleri, bilimsel toksikoloji verilerine dayanarak belirlenen ve riski kabul edilebilir düzeye indirmeyi amaçlayan eşik değerlerdir; sınırın altında kalmak riski azaltır ama sıfıra indirmez."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir lise öğrencisi, büyük bir sanayi kazasını (örneğin bir kimya fabrikasındaki patlama) araştırıyor ve kaza raporunda 'birden fazla küçük hatanın art arda gelmesi' (örneğin arızalı bir valf + eğitim eksikliği + acil durum protokolünün uygulanmaması) sonucunda büyük bir felaketin ortaya çıktığını öğreniyor.",
    text: "Bu bilgi, endüstriyel güvenlik kazaları hakkında en olgun hangi çıkarımı destekler?",
    options: [
      "Bir kez güvenlik protokolü oluşturulduktan sonra hiçbir zaman gözden geçirilmesine gerek yoktur",
      "Büyük kazalar her zaman tek bir kişinin hatasından kaynaklanır",
      "Küçük hataların büyük kazalarla hiçbir ilişkisi yoktur",
      "Büyük kazalar genellikle tek bir nedenden değil, birbirini tetikleyen birden fazla küçük hatanın bir araya gelmesinden kaynaklanabilir; bu yüzden güvenlik sistemlerinde birden fazla bağımsız koruma katmanı önemlidir",
      "Endüstriyel kazalar tamamen öngörülemez, önlenemez olaylardır"
    ],
    correct: 3,
    explain: "Büyük endüstriyel kazalar genellikle birbirini tetikleyen çoklu küçük hataların (teknik arıza, eğitim eksikliği, protokol ihlali gibi) bir araya gelmesiyle ortaya çıkar; bu nedenle etkili güvenlik sistemleri tek bir önleme değil, birden fazla bağımsız koruma katmanına (çoklu bariyer ilkesi) dayanır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Ali, bazı kimyasalların (örneğin belirli plastikleştiriciler) düşük dozlarda anlık olarak zararsız görünse de, uzun vadeli ve düşük dozlu maruziyetin bilimsel çalışmalarla hâlâ tam olarak anlaşılamamış potansiyel etkileri olabileceğini öğreniyor; bilim insanlarının bu konuda hâlâ araştırma yaptığını fark ediyor.",
    text: "Bu durum, bilimsel bilgi ile güvenlik düzenlemeleri arasındaki ilişki hakkında en dengeli hangi çıkarımı destekler?",
    options: [
      "Bilimsel belirsizlik, güvenlik konusunda hiçbir önlem alınmaması gerektiği anlamına gelir",
      "Bilim insanları hâlâ araştırıyorsa, bu maddenin kesinlikle çok tehlikeli olduğu anlamına gelir",
      "Güvenlik düzenlemeleri bir kez belirlendikten sonra hiçbir zaman değişmemelidir",
      "Güvenlik düzenlemeleri, mevcut bilimsel bilgiye dayanır ve bilim ilerledikçe (yeni veriler ortaya çıktıkça) güncellenmesi gerekebilir; 'şu an zararsız görünüyor' ifadesi 'kesin olarak sonsuza dek zararsız' anlamına gelmez",
      "Bu durum güvenlik düzenlemeleriyle hiçbir ilgisi olmayan bir konudur"
    ],
    correct: 3,
    explain: "Güvenlik düzenlemeleri, o anki en iyi bilimsel bilgiye dayanır; bilim ilerledikçe ve yeni veriler ortaya çıktıkça bu düzenlemelerin güncellenmesi gerekebilir — bu, bilimsel sürecin doğası gereği normal ve beklenen bir durumdur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir stajyer, bir ülkede belirli bir kimyasalın kullanımının yasak olduğunu, ancak komşu bir ülkede aynı kimyasalın hâlâ yaygın olarak kullanıldığını öğreniyor; bu farkın bilimsel kanıttan çok, ülkelerin düzenleyici süreçlerinin hızı ve önceliklerinden kaynaklanabileceğini fark ediyor.",
    text: "Bu gözlem, kimyasal güvenlik düzenlemeleri hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Yasal olan her madde bilimsel olarak kanıtlanmış şekilde güvenlidir",
      "Bir madde bir ülkede yasaksa, tüm dünyada da otomatik olarak yasak olmalıdır",
      "Ülkeler arasındaki düzenleme farkları tamamen rastgeledir, hiçbir açıklaması yoktur",
      "Bir maddenin bir ülkede yasal olması, o maddenin kesinlikle güvenli olduğu anlamına gelmeyebilir; düzenlemeler bilimsel kanıtın yanında siyasi, ekonomik ve idari süreçlerden de etkilenebilir",
      "Düzenleyici süreçlerin hızının güvenlikle hiçbir ilgisi yoktur"
    ],
    correct: 3,
    explain: "Bir kimyasalın bir ülkede yasal/yaygın kullanılması, o maddenin mutlak olarak güvenli olduğunu garanti etmez; düzenlemeler bilimsel kanıtların yanında ülkelerin idari süreç hızı, ekonomik öncelikleri gibi etkenlerden de etkilenebilir — bu, eleştirel düşünmeyi gerektiren önemli bir nüanstır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir aşçı, bir laboratuvarda 'güvenlik kültürü' kavramını araştırıyor: bazı laboratuvarlarda çalışanlar kuralları eksiksiz uygulanması gereken bir zorunluluk olarak değil, ortak bir sorumluluk ve alışkanlık olarak benimsiyor; bu tür yerlerde kaza oranlarının daha düşük olduğunu öğreniyor.",
    text: "Bu bilgi, güvenlik kurallarının etkinliği hakkında en kapsamlı hangi çıkarımı destekler?",
    options: [
      "Kaza oranları yalnızca ekipman kalitesine bağlıdır, insan davranışının hiçbir etkisi yoktur",
      "Yazılı kurallar tek başına her zaman yeterlidir, kültürün hiçbir katkısı yoktur",
      "Güvenlik kültürü kavramı bilimsel bir temele sahip değildir",
      "Yazılı kuralların varlığı tek başına yeterli olmayabilir; kuralların içselleştirildiği, paylaşılan bir 'güvenlik kültürü' oluşturulması kaza önlemede önemli bir ek etken olabilir",
      "Bu bilgi laboratuvar güvenliğiyle ilgisizdir"
    ],
    correct: 3,
    explain: "Yazılı güvenlik kurallarının varlığı gerekli ama tek başına yeterli olmayabilir; kuralların çalışanlar tarafından içselleştirildiği paylaşılan bir 'güvenlik kültürü', kaza oranlarını azaltmada önemli bir tamamlayıcı etken olabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Zeynep, bir kimyasal madde sızıntısına müdahale eden ekiplerin, önce sızıntının türünü ve miktarını değerlendirip sonra müdahale stratejisi belirlediğini; acele ve plansız müdahalenin durumu kötüleştirebileceğini (örneğin yanlış nötrleştirici kullanmanın yeni bir tehlikeli tepkime başlatabileceğini) öğreniyor.",
    text: "Bu bilgi, acil durum müdahalesinde 'değerlendirme önce, aksiyon sonra' ilkesi hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Yanlış nötrleştirici kullanmanın hiçbir riski yoktur",
      "Acil durumlarda değerlendirme yapmak zaman kaybıdır, hemen aksiyon almak her zaman daha iyidir",
      "Sızıntı türünün müdahale stratejisiyle hiçbir ilişkisi yoktur",
      "Acil bir durumda bile aceleyle, değerlendirme yapmadan hareket etmek, iyi niyetli olsa bile durumu daha da kötüleştirebilir; sistematik değerlendirme genellikle daha güvenli sonuçlar sağlar",
      "Bu ilke yalnızca profesyonel ekipler için geçerlidir, öğrenciler için önemli değildir"
    ],
    correct: 3,
    explain: "Acil durumlarda bile sistematik bir değerlendirme yapmadan aceleyle hareket etmek (örneğin yanlış nötrleştirici madde kullanmak), iyi niyetli olsa bile durumu kötüleştirebilir; 'önce değerlendir, sonra aksiyon al' ilkesi genellikle daha güvenli sonuçlar sağlar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Ayşe evde ilaçların ve temizlik ürünlerinin küçük çocukların ulaşamayacağı, kilitli bir dolapta saklanması gerektiğini öğreniyor.",
    text: "Bu önlemin temel amacı nedir?",
    options: ["Ürünlerin daha uzun süre dayanmasını sağlamak", "Küçük çocukların yanlışlıkla zararlı maddeleri yutma/temas riskini azaltmak", "Evin daha düzenli görünmesini sağlamak", "Ürünlerin fiyatını korumak", "Ürünlerin kokusunu azaltmak"],
    correct: 1,
    explain: "İlaç ve kimyasal ürünlerin çocuklardan uzak tutulması, yanlışlıkla yutma veya temas etme gibi ciddi risklerin önlenmesi içindir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Buse kullanılmış pil ve bataryaların normal çöpe değil, özel toplama noktalarına atılması gerektiğini öğreniyor.",
    text: "Bu uygulamanın temel gerekçesi nedir?",
    options: [
      "Bu uygulamanın hiçbir bilimsel gerekçesi yoktur",
      "Piller normal çöpten daha ağırdır, bu yüzden ayrılır",
      "Pillerin rengi farklı olduğu için ayrı toplanır",
      "Piller normal çöple karıştığında toprağa/suya karışabilecek ağır metaller içerir, bu da çevre kirliliğine yol açabilir",
      "Piller çok küçük olduğu için kaybolmaması amacıyla ayrılır"
    ],
    correct: 3,
    explain: "Piller kurşun, kadmiyum gibi ağır metaller içerebilir; normal çöple bertaraf edilmesi bu maddelerin toprak ve su kaynaklarına karışarak çevre kirliliğine yol açmasına neden olabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Kerem bir kimyasal madde kabının üzerinde yuvarlak, ortası dolu daire şeklinde bir alev sembolü (oksitleyici sembolü) görüyor.",
    text: "Bu sembol maddenin hangi özelliğini belirtir?",
    options: [
      "Maddenin manyetik özellik taşıdığını",
      "Maddenin donmuş olduğunu",
      "Maddenin radyoaktif olduğunu",
      "Maddenin yenilebilir olduğunu",
      "Maddenin diğer yanıcı maddelerin yanmasını hızlandırabileceğini/şiddetlendirebileceğini"
    ],
    correct: 4,
    explain: "Oksitleyici madde sembolü, maddenin başka yanıcı maddelerin yanmasını hızlandırabileceğini veya şiddetlendirebileceğini belirtir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Elif, laboratuvarda kırılan bir cam deney tüpünün parçalarını çıplak elle toplamayı düşünüyor.",
    text: "Bu davranış yerine yapılması gereken en doğru yaklaşım hangisidir?",
    options: [
      "Cam parçalarını suyla yıkayıp lavaboya akıtmak",
      "Cam parçalarını ayakla ittirerek köşeye toplamak",
      "Cam parçalarını normal çöp kutusuna elle atmak",
      "Cam parçalarını görmezden gelip üzerine basmamaya dikkat etmek yeterlidir",
      "Cam parçalarını süpürge/maşa gibi uygun araçlarla toplayıp özel bir kaba atmak, sorumlu kişiye bildirmek"
    ],
    correct: 4,
    explain: "Kırık cam parçaları çıplak elle değil, süpürge/maşa gibi uygun araçlarla toplanmalı, özel bir atık kabına konmalı ve durum sorumlu kişiye bildirilmelidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir hemşire laboratuvarda kimyasal madde taşırken şişeyi vücuduna yakın, gövdesinin önünde iki elle tutarak taşıyor.",
    text: "Bu taşıma şeklinin güvenlik açısından mantığı nedir?",
    options: [
      "Yalnızca görgü kuralı gereğidir",
      "Bu şekilde taşımanın hiçbir güvenlik gerekçesi yoktur",
      "Sadece daha hızlı taşımak içindir",
      "Şişenin ağırlığını azaltmak için yapılır",
      "Şişe düşerse dökülen madde vücuttan uzakta kalır ve düşme riski azalır"
    ],
    correct: 4,
    explain: "İki elle, vücuda yakın ve dengeli taşımak, şişenin düşme riskini azaltır ve olası bir dökülmede maddenin vücuda daha az temas etmesini sağlar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Emre laboratuvarda bir kimyasal maddeyi tatmayı ya da yiyecek gibi denemeyi asla yapmaması gerektiğini öğreniyor.",
    text: "Bu kuralın temel gerekçesi nedir?",
    options: [
      "Bu kuralın hiçbir bilimsel/güvenlik gerekçesi yoktur",
      "Kimyasalların tadı her zaman kötüdür, bu yüzden yasaktır",
      "Bu kural yalnızca hijyen amaçlıdır, güvenlikle ilgisi yoktur",
      "Kimyasalları tatmak yalnızca zaman kaybıdır",
      "Laboratuvar kimyasalları genellikle zehirli/zararlı olabilir ve gıda amaçlı üretilmemiştir"
    ],
    correct: 4,
    explain: "Laboratuvar kimyasalları gıda amaçlı üretilmez ve birçoğu zehirli veya zararlı olabilir; bu nedenle hiçbir zaman tadılmamalı veya yenilmeye çalışılmamalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir veli, bir kimya laboratuvarında yiyecek veya içecek tüketmenin neden yasak olduğunu araştırıyor.",
    text: "Bu yasağın temel gerekçesi nedir?",
    options: [
      "Bu yasağın hiçbir bilimsel temeli yoktur",
      "Yiyecek yemek yalnızca dikkat dağıtır, başka bir riski yoktur",
      "Bu kural yalnızca temizlik içindir",
      "Yiyecekler laboratuvar cihazlarına zarar verir",
      "Yiyecek/içeceklerin laboratuvar ortamındaki kimyasallarla kirlenip yanlışlıkla tüketilmesi ciddi sağlık riski oluşturabilir"
    ],
    correct: 4,
    explain: "Laboratuvar ortamında bulunan kimyasal kalıntılar yiyecek/içeceklere bulaşabilir; bunların fark edilmeden tüketilmesi zehirlenme gibi ciddi sağlık risklerine yol açabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir tüketici, bir kimyasal madde deposunda 'acil çıkış' işaretlerinin ve tahliye yollarının her zaman açık tutulması gerektiğini öğreniyor.",
    text: "Bu kuralın en önemli gerekçesi nedir?",
    options: [
      "Yalnızca yangın söndürme ekiplerinin işini kolaylaştırmak, çalışanlarla ilgisi yoktur",
      "Sadece düzenli görünüm sağlamak",
      "Depoyu daha ferah göstermek",
      "Bu kuralın güvenlikle hiçbir ilgisi yoktur",
      "Acil bir durumda (yangın, sızıntı gibi) çalışanların hızlı ve güvenli şekilde tahliye edilebilmesini sağlamak"
    ],
    correct: 4,
    explain: "Açık tahliye yolları, acil bir durumda çalışanların hızlı ve güvenli şekilde binayı terk edebilmesini sağlayarak can kaybını önlemeye yardımcı olur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir bahçıvan, laboratuvarda kullanılan kimyasal atıkların lavaboya veya normal çöpe değil, ayrı etiketlenmiş atık kaplarına atılması gerektiğini öğreniyor.",
    text: "Bu uygulamanın temel amacı nedir?",
    options: [
      "Yalnızca maliyet tasarrufu sağlamak",
      "Yalnızca laboratuvarı düzenli göstermek",
      "Atık kaplarının dolmasını hızlandırmak",
      "Bu uygulamanın hiçbir çevresel gerekçesi yoktur",
      "Kimyasal atıkların çevreye kontrolsüz yayılmasını ve su/toprak kirliliğini önlemek"
    ],
    correct: 4,
    explain: "Kimyasal atıkların uygun şekilde toplanıp bertaraf edilmesi, bu maddelerin su ve toprak kaynaklarına kontrolsüz karışarak çevre kirliliğine yol açmasını önler."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Meraklı bir öğrenci, bir kimyasal maddenin 'yanıcı' hem de 'oksitleyici' özellikte olmadığını, ama iki farklı kimyasalın (biri yanıcı, biri oksitleyici) bir arada depolanmasının yangın riskini artırdığını öğreniyor.",
    text: "Bu bilgiye dayanarak, kimyasal madde depolamasında en doğru yaklaşım hangisidir?",
    options: [
      "Bu bilgi yalnızca teorik bir durumdur, pratikte önemi yoktur",
      "Yalnızca tek başına tehlikeli olan maddeler ayrı depolanmalıdır, diğerleri birlikte tutulabilir",
      "Maddelerin birbirleriyle etkileşimi depolama planlamasında önemsizdir",
      "Yanıcı ve oksitleyici maddeler her zaman birlikte depolanmalıdır",
      "Tek başına düşük riskli görünen maddeler bile, başka maddelerle bir arada depolandığında birlikte yüksek risk oluşturabilir; bu yüzden depolama planı maddelerin birbirleriyle etkileşimini de dikkate almalıdır"
    ],
    correct: 4,
    explain: "Depolama güvenliği, yalnızca tek bir maddenin kendi tehlikesini değil, farklı maddelerin bir arada bulunmasının yaratabileceği ek riskleri de (örneğin yanıcı + oksitleyici birlikteliği) dikkate almalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Mehmet, bir kimyasal madde ile çalışırken kullanılan eldiven türünün maddeye göre değişmesi gerektiğini öğreniyor; örneğin bazı organik çözücülerin lateks eldiveni delip geçebildiğini, bu durumlarda nitril veya özel eldiven gerektiğini fark ediyor.",
    text: "Bu bilgi, kişisel koruyucu donanım (KKD) seçimi hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bu bilgi yalnızca profesyonel laboratuvarlar için geçerlidir",
      "Her türlü eldiven her kimyasala karşı aynı derecede koruma sağlar",
      "Eldiven türünün önemi yoktur, önemli olan sadece eldiven takmaktır",
      "Organik çözücülerle çalışırken eldiven takmaya gerek yoktur",
      "'Eldiven takmak' tek başına yeterli bir güvenlik önlemi değildir; eldivenin türü, çalışılan kimyasala karşı gerçekten koruyucu olacak şekilde seçilmelidir"
    ],
    correct: 4,
    explain: "Kişisel koruyucu donanımın etkili olması için yalnızca kullanılması değil, çalışılan kimyasala karşı gerçekten koruma sağlayacak doğru türde seçilmesi de gereklidir; yanlış eldiven türü yanlış bir güvenlik hissi yaratabilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Merve, bir kimyasal maddenin taşınması sırasında karayolu, denizyolu ve havayolu için farklı uluslararası güvenlik düzenlemelerinin (ambalajlama, etiketleme, miktar sınırları) bulunduğunu öğreniyor.",
    text: "Bu bilgi, kimyasal madde güvenliğinin kapsamı hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bu düzenlemeler yalnızca büyük şirketleri ilgilendirir",
      "Kimyasal güvenlik yalnızca laboratuvar ortamıyla ilgilidir",
      "Taşımacılık sırasında kimyasal güvenliğin hiçbir önemi yoktur",
      "Tüm taşıma yöntemleri (kara, deniz, hava) için aynı kurallar geçerlidir",
      "Kimyasal güvenlik yalnızca laboratuvar veya depolama ile sınırlı değildir; taşımacılık gibi farklı aşamalarda da özel düzenlemeler ve önlemler gerektirebilir"
    ],
    correct: 4,
    explain: "Kimyasal madde güvenliği, üretim ve kullanım aşamalarının ötesinde, farklı taşıma yöntemlerine özgü uluslararası düzenlemeleri de kapsayan geniş bir alandır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir kalite kontrol uzmanı, bir kimyasal maddenin GBF'sinde (Güvenlik Bilgi Formu) 'LD50' değeri olarak bir sayı görüyor ve bu değerin, bir maddenin test edilen hayvanların yarısını öldüren doz miktarını ifade ettiğini öğreniyor; düşük LD50 değerinin daha toksik olduğu anlamına geldiğini fark ediyor.",
    text: "İki farklı kimyasaldan LD50 değeri düşük olanı ile ilgili en doğru çıkarım hangisidir?",
    options: [
      "Bu madde, yüksek LD50 değerine sahip diğer maddeye göre daha az miktarda bile ciddi/ölümcül etki gösterebilir, yani daha toksiktir",
      "LD50 değeri düşük olan madde daha güvenlidir",
      "LD50 değerinin toksisiteyle hiçbir ilişkisi yoktur",
      "LD50 değeri yalnızca maddenin rengini gösterir",
      "Düşük LD50 değeri maddenin yanıcı olmadığı anlamına gelir"
    ],
    correct: 0,
    explain: "LD50, test edilen popülasyonun yarısını öldüren doz miktarıdır; bu değer ne kadar düşükse, madde o kadar az miktarda ciddi/ölümcül etki gösterebilir, yani o kadar toksiktir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir güvenlik uzmanı, bir laboratuvarda düzenli olarak yapılan 'tatbikat'ların (örneğin yangın tatbikatı, kimyasal sızıntı tatbikatı) gerçek bir kaza anında insanların panik yapmadan doğru adımları izlemesine yardımcı olduğunu öğreniyor.",
    text: "Bu bilgi, güvenlik eğitiminde tekrarlı uygulamanın (tatbikatların) rolü hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Teorik bilgi tek başına yeterli olmayabilir; düzenli pratik uygulama (tatbikat), gerçek bir acil durumda insanların daha hızlı ve doğru tepki vermesine katkı sağlayabilir",
      "Tatbikatların gerçek kazalarla hiçbir ilişkisi yoktur",
      "Yalnızca teorik eğitim yeterlidir, tatbikata gerek yoktur",
      "Tatbikatlar yalnızca zaman kaybıdır",
      "Panik yapmak kaza anında kaçınılmazdır, hiçbir önlem bunu değiştiremez"
    ],
    correct: 0,
    explain: "Düzenli tatbikatlar, teorik bilgiyi pratiğe dönüştürerek gerçek bir acil durumda insanların paniklemeden, öğrenilmiş adımları otomatik olarak uygulamasına yardımcı olabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir çiftçi, bir kimyasal madde felaketinin (örneğin büyük bir sanayi bölgesindeki sızıntı) sonrasında etkilenen bölgede yaşayan insanların uzun vadeli sağlık takibinin yapıldığını, ancak bu tür çalışmaların sonuçlarının kesin nedensellik kanıtlamasının yıllar sürebileceğini öğreniyor.",
    text: "Bu bilgi, çevresel/toplumsal sağlık araştırmalarının doğası hakkında en dengeli hangi çıkarımı destekler?",
    options: [
      "Bir kimyasal maruziyetin uzun vadeli sağlık etkilerini kesin olarak belirlemek, karmaşık ve zaman alan bilimsel bir süreçtir; kısa vadede kesin sonuç bulunamaması, maruziyetin zararsız olduğu anlamına gelmez",
      "Uzun süren araştırmalar, olayın önemsiz olduğunu gösterir",
      "Kesin nedensellik kanıtlanamadıysa, hiçbir önlem alınmasına gerek yoktur",
      "Sağlık takibi çalışmaları bilimsel olarak değersizdir",
      "Bu tür araştırmalar birkaç günde kesin sonuç verebilir"
    ],
    correct: 0,
    explain: "Çevresel maruziyetlerin uzun vadeli sağlık etkilerini kesin olarak kanıtlamak, birçok değişkenin kontrol edilmesini gerektiren karmaşık ve zaman alan bir süreçtir; kısa vadede kesin sonuç elde edilememesi, olayın önemsiz veya zararsız olduğu anlamına gelmez — bu nedenle önleyici yaklaşım genellikle tercih edilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir gıda mühendisi, bir şirketin maliyet kısmak için güvenlik ekipmanlarının bakımını erteleyip ertelemediğini araştırıyor ve bunun kısa vadede para tasarrufu sağlarken, uzun vadede daha büyük bir kaza/tazminat maliyetine yol açma riski taşıdığını öğreniyor.",
    text: "Bu durum, güvenlik yatırımlarının ekonomik boyutu hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Güvenlik önlemlerini ihmal etmek kısa vadede maliyet tasarrufu gibi görünse de, uzun vadede çok daha büyük mali ve insani kayıplara yol açma riski taşıyabilir",
      "Güvenlik yatırımlarının hiçbir ekonomik boyutu yoktur",
      "Güvenlik ekipmanı bakımını ertelemenin hiçbir riski yoktur",
      "Şirketler için en akılcı strateji her zaman güvenlik maliyetlerini en aza indirmektir",
      "Bu konu tamamen etik bir mesele olup ekonomiyle ilgisizdir"
    ],
    correct: 0,
    explain: "Güvenlik yatırımlarının ihmal edilmesi kısa vadeli tasarruf sağlasa da, olası bir kazanın insani, mali ve itibar maliyeti bu tasarrufu kat kat aşabilir; bu nedenle güvenlik yatırımı genellikle uzun vadeli bir ekonomik akılcılık olarak değerlendirilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir fabrika işçisi, 'sıfır risk' kavramının pratikte imkânsız olduğunu; her kimyasal madde kullanımının bir miktar risk taşıdığını, güvenlik çalışmalarının amacının riski tamamen yok etmek değil, kabul edilebilir düzeye indirmek olduğunu öğreniyor.",
    text: "Bu bilgi, güvenlik yönetimi felsefesi hakkında en olgun hangi çıkarımı destekler?",
    options: [
      "Gerçekçi güvenlik yönetimi, riski tamamen ortadan kaldırmayı değil, bilimsel değerlendirmeyle riski mümkün olan en düşük ve kabul edilebilir düzeye indirmeyi hedefler",
      "Sıfır risk her zaman ulaşılabilir bir hedeftir, yeterli çaba gösterilmemesi sorundur",
      "Risk kabul edilebilir düzeye indirilemez, bu yüzden hiçbir kimyasal kullanılmamalıdır",
      "Güvenlik yönetiminin bir felsefesi yoktur, sadece kurallardan ibarettir",
      "Risk kavramı kimya güvenliğiyle ilgisizdir"
    ],
    correct: 0,
    explain: "Pratikte 'sıfır risk' ulaşılması genellikle mümkün olmayan bir hedeftir; olgun bir güvenlik yönetimi yaklaşımı, riski bilimsel değerlendirmeyle mümkün olan en düşük, kabul edilebilir düzeye indirmeyi amaçlar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir teknisyen, bir laboratuvarda meydana gelen 'neredeyse kaza' (kazaya çok yaklaşılan ama gerçekleşmeyen olay) raporlarının, gerçek kazalar kadar ciddiye alınıp incelendiğini öğreniyor; bu raporların, benzer bir durumun gelecekte gerçek bir kazaya dönüşmesini önlemek için kullanıldığını fark ediyor.",
    text: "Bu uygulama, güvenlik kültürü açısından en doğru hangi çıkarımı destekler?",
    options: [
      "Gerçek bir kaza olmasa bile, tehlikeli durumları raporlamak ve analiz etmek, gelecekteki kazaları önlemek için değerli bir öğrenme fırsatı sunabilir",
      "Yalnızca gerçekleşen kazalar incelenmeye değerdir, 'neredeyse kaza'ların hiçbir önemi yoktur",
      "'Neredeyse kaza' raporlaması zaman kaybıdır",
      "Bu tür raporlar yalnızca çalışanları suçlamak için kullanılır",
      "Kaza önleme yalnızca ekipman kalitesiyle ilgilidir, raporlama sistemiyle ilgisizdir"
    ],
    correct: 0,
    explain: "'Neredeyse kaza' olaylarının ciddiye alınıp incelenmesi, gerçek bir kaza gerçekleşmeden önce sistemdeki zayıf noktaların tespit edilip düzeltilmesini sağlayan proaktif bir güvenlik yaklaşımıdır — bu, olgun bir güvenlik kültürünün önemli bir göstergesidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir okulun laboratuvarı, farklı eldiven türlerinin hangi kimyasal gruplarına karşı koruma sağladığını gösteren bir tablo hazırlıyor.",
    table: {
      headers: ["Eldiven türü", "Asitlere karşı", "Organik çözücülere karşı", "Kesilmeye karşı"],
      rows: [
        ["Nitril", "İyi", "Orta", "Orta"],
        ["Lateks", "Orta", "Zayıf", "Zayıf"],
        ["Neopren", "İyi", "İyi", "Orta"],
        ["Kevlar örgü", "Zayıf", "Zayıf", "Çok iyi"]
      ]
    },
    text: "Cam kırıklarıyla temas riski taşıyan bir işlemde en uygun eldiven türü tabloya göre hangisidir?",
    options: ["Nitril", "Lateks", "Neopren", "Kevlar örgü", "Hiçbiri yeterli değildir"],
    correct: 3,
    explain: "Tabloya göre kesilmeye karşı en yüksek koruma 'çok iyi' düzeyiyle Kevlar örgü eldivende bulunur; bu tür eldivenler cam kırığı gibi kesici risklere karşı tercih edilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir okulun laboratuvar güvenliği kulübü, geçen yıl kaydedilen laboratuvar kazalarının ana nedenlerini bir grafikte özetliyor.",
    chart: {
      type: "bar",
      title: "Laboratuvar kazalarının nedenlere göre dağılımı (%)",
      labels: ["KKD kullanılmaması", "Dikkatsizlik", "Ekipman arızası", "Eğitim eksikliği"],
      values: [38, 30, 12, 20]
    },
    text: "Grafiğe göre kazaları azaltmak için en öncelikli iki önlem hangi seçenekte doğru verilmiştir?",
    options: [
      "Kişisel koruyucu donanım kullanımını zorunlu kılmak ve dikkat/farkındalık eğitimi vermek",
      "Sadece ekipmanları yenilemek",
      "Sadece laboratuvar boyasını yenilemek",
      "Hiçbir önlem almaya gerek yoktur, oranlar düşüktür",
      "Sadece bina aydınlatmasını güçlendirmek"
    ],
    correct: 0,
    explain: "Grafikte en yüksek paya sahip iki neden KKD kullanılmaması (%38) ve dikkatsizlik (%30) olduğundan, önceliğin bu iki alana yönelik önlemlere (KKD zorunluluğu ve farkındalık eğitimi) verilmesi en mantıklı yaklaşımdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir kimya mühendisi, bazı kimyasal üreticilerinin ürünlerini 'çevre dostu' olarak pazarladığını, ancak bu ifadenin bağımsız bir kurum tarafından doğrulanmadığı sürece pazarlama amaçlı bir söylem olabileceğini öğreniyor.",
    text: "Bu bilgi, tüketici olarak kimyasal ürün etiketlerini değerlendirirken en doğru hangi yaklaşımı destekler?",
    options: [
      "Etiketteki iddiaları bağımsız sertifikasyon/kaynaklarla karşılaştırmadan doğru kabul etmemek, eleştirel biçimde değerlendirmek",
      "Üreticinin her iddiasını sorgusuz kabul etmek",
      "Etiketlerdeki tüm bilgileri yok saymak",
      "Yalnızca ürünün fiyatına bakarak güvenilirliğine karar vermek",
      "Bu tür ifadelerin her zaman yasal olarak zorunlu bağımsız denetimden geçtiğini varsaymak"
    ],
    correct: 0,
    explain: "Pazarlama ifadeleri her zaman bağımsız bilimsel doğrulamayı yansıtmayabilir; bilinçli bir tüketici, bu tür iddiaları güvenilir sertifikasyon kuruluşlarının verileriyle karşılaştırarak değerlendirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir turist, bir kimyasalın 'doğal' kaynaklı olmasının onu otomatik olarak güvenli, 'sentetik' kaynaklı olmasının ise otomatik olarak zararlı yaptığı şeklindeki yaygın bir inancı araştırıyor ve bunun bilimsel olarak doğru olmadığını, toksisitenin kaynağa değil dozuna ve kimyasal yapıya bağlı olduğunu öğreniyor.",
    text: "Bu bulgu, kimyasal güvenlik konusunda en doğru hangi çıkarımı destekler?",
    options: [
      "Bir maddenin doğal ya da sentetik kökenli olması tek başına güvenliğini belirlemez; toksisite dozla ve kimyasal özelliklerle ilişkilidir",
      "Doğal kaynaklı tüm maddeler kesinlikle güvenlidir",
      "Sentetik kaynaklı tüm maddeler kesinlikle zararlıdır",
      "Kaynağın doğal ya da sentetik olması toksisiteyi belirleyen tek etkendir",
      "Doğal ve sentetik maddeler arasında hiçbir kimyasal fark yoktur"
    ],
    correct: 0,
    explain: "'Doğal olan güvenlidir' yaygın bir yanılgıdır; toksisiteyi belirleyen temel etken maddenin dozu ve kimyasal yapısıdır, kaynağının doğal ya da sentetik olması tek başına belirleyici değildir (örneğin birçok doğal toksin oldukça tehlikelidir)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Selin, iki farklı temizlik ürününün ayrı ayrı kullanıldığında güvenli kabul edildiğini, ancak çamaşır suyu (hipoklorit içeren) ile amonyak içeren bir temizleyicinin karıştırılması durumunda zehirli kloramin gazı oluştuğunu öğreniyor.",
    text: "Bu bilgiden yola çıkarak ev temizliği sırasında en doğru güvenlik ilkesi hangisidir?",
    options: [
      "Farklı temizlik ürünlerini asla birbirine karıştırmamak ve her ürünü etiketindeki talimata göre ayrı ayrı kullanmak",
      "İki ürünü karıştırmak temizlik etkisini her zaman artırır, bu yüzden karıştırılmalıdır",
      "Etiket talimatları sadece öneri niteliğindedir, dikkate alınmayabilir",
      "Yalnızca çamaşır suyu tek başına da tehlikelidir, amonyaklı ürünle ilgisi yoktur",
      "Kloramin gazı zararsız bir yan üründür"
    ],
    correct: 0,
    explain: "Çamaşır suyu ile amonyaklı temizleyicilerin karışımı zehirli kloramin gazı açığa çıkarır; bu nedenle farklı temizlik kimyasallarını karıştırmamak ve etiket talimatlarına uymak temel bir ev güvenliği ilkesidir."
  }
],
  "teori": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir kalite kontrol uzmanı, John Dalton'ın 1808'de öne sürdüğü atom teorisinin temel varsayımlarını inceliyor.",
    text: "Dalton'ın atom teorisine göre atomlar için aşağıdakilerden hangisi doğrudur?",
    options: ["Atomlar içi boş bir küredir", "Atomlar bölünemez ve parçalanamaz taneciklerdir", "Atomlar sürekli yer değiştiren bulutlardan oluşur", "Atomlar yalnızca sıvı maddelerde bulunur", "Atomlar birbirinden farklı yüklere sahip iki parçadan oluşur"],
    correct: 1,
    explain: "Dalton'ın atom teorisinin temel varsayımlarından biri, atomların o dönemde bilinen en küçük, bölünemez ve parçalanamaz maddesel birimler olduğudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Selin, J.J. Thomson'ın katot ışını tüpü deneyleriyle keşfettiği taneciği araştırıyor.",
    text: "Thomson'ın bu deneyle keşfettiği tanecik hangisidir?",
    options: ["Nötron", "Proton", "Elektron", "Foton", "Nötrino"],
    correct: 2,
    explain: "Thomson, katot ışını tüpü deneyleriyle negatif yüklü, kütlesi atomdan çok küçük olan elektronu keşfetmiştir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir ev hanımı, Thomson'ın elektronu keşfettikten sonra önerdiği atom modelinin günlük hayattan bir benzetmeyle anıldığını öğreniyor.",
    text: "Thomson'ın modeli hangi popüler adla anılır?",
    options: ["Gezegen modeli", "Üzümlü kek (kekik) modeli", "Bulut modeli", "Kristal kafes modeli", "Katı küre modeli"],
    correct: 1,
    explain: "Thomson'ın modelinde pozitif yüklü bir 'hamur' içine elektronların gömülü olduğu düşünülür; bu benzetme nedeniyle model 'üzümlü kek modeli' olarak anılır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir laborant, Ernest Rutherford'ın 1911'de gerçekleştirdiği ünlü altın levha (alfa saçılması) deneyini araştırıyor.",
    text: "Bu deneyde ince altın levhaya hangi tanecikler gönderilmiştir?",
    options: ["Elektronlar", "Nötronlar", "Alfa tanecikleri (pozitif yüklü)", "Fotonlar", "Nötrinolar"],
    correct: 2,
    explain: "Rutherford'ın deneyinde ince altın levhaya pozitif yüklü alfa tanecikleri gönderilmiş ve saçılma davranışları incelenmiştir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir sağlık çalışanı, Rutherford'ın altın levha deneyi sonucunda atomun merkezinde ne bulunduğunu keşfettiğini öğreniyor.",
    text: "Rutherford'ın bu deneyle keşfettiği yapı hangisidir?",
    options: ["Elektron bulutu", "Küçük, yoğun ve pozitif yüklü çekirdek", "Negatif yüklü katı küre", "Nötr bir kabuk", "Homojen dağılmış pozitif yük"],
    correct: 1,
    explain: "Rutherford, atomun kütlesinin ve pozitif yükünün merkezdeki küçük, yoğun bir çekirdekte toplandığını keşfetmiştir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir turist, James Chadwick'in 1932'de gerçekleştirdiği deneyle atom çekirdeğinde yeni bir tanecik keşfettiğini öğreniyor.",
    text: "Chadwick'in keşfettiği bu tanecik hangisidir?",
    options: ["Proton", "Elektron", "Nötron", "Pozitron", "Foton"],
    correct: 2,
    explain: "Chadwick, çekirdekte yüksüz (nötr) bir tanecik olan nötronu keşfetmiştir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir grup öğrenci, Niels Bohr'un 1913'te hidrojen atomu için önerdiği modeli inceliyor.",
    text: "Bohr modeline göre elektronlar atom çekirdeği etrafında nasıl bulunur?",
    options: ["Rastgele her yerde eşit olasılıkla", "Belirli, izin verilen enerji düzeylerinde (yörüngelerde)", "Yalnızca çekirdeğin içinde", "Sabit, hareketsiz noktalarda", "Çekirdekten bağımsız serbest parçacıklar olarak"],
    correct: 1,
    explain: "Bohr modeline göre elektronlar, belirli ve kesikli (kuantumlu) enerji düzeylerinde, izin verilen dairesel yörüngelerde bulunur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Ali, atom kavramının kökenini araştırırken Antik Yunan filozofu Demokritos'un fikrini öğreniyor.",
    text: "Demokritos'un 'atom' kavramına yaklaşımı için hangisi doğrudur?",
    options: ["Deneysel verilere dayanan bilimsel bir modeldi", "Maddenin bölünemez en küçük parçaları olduğuna dair felsefi bir düşünceydi", "Elektron mikroskobuyla doğrulanmış bir teoriydi", "Modern kuantum mekaniğiyle aynı matematiksel temele sahipti", "Deneyle çürütülmüş ilk bilimsel teoriydi"],
    correct: 1,
    explain: "Demokritos'un atom fikri, deneysel kanıta değil felsefi/mantıksal akıl yürütmeye dayanan öncü bir düşünceydi; modern anlamda bilimsel bir model değildi."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim insanı, Eugen Goldstein'ın katot ışını tüpü deneylerinde gözlemlediği pozitif yüklü ışınları araştırıyor.",
    text: "Bu gözlemler sonucunda hangi tanecik keşfedilmiştir?",
    options: ["Elektron", "Nötron", "Proton", "Foton", "Kuark"],
    correct: 2,
    explain: "Goldstein'ın gözlemlediği 'kanal ışınları', pozitif yüklü proton taneciklerinin varlığına dair ilk kanıtlardan biridir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Onur, Robert Millikan'ın yağ damlası deneyiyle neyi ölçtüğünü araştırıyor.",
    text: "Millikan'ın bu deneyle belirlediği büyüklük hangisidir?",
    options: ["Atomun kütlesi", "Elektronun elektrik yükü", "Protonun çapı", "Nötronun ömrü", "Işığın hızı"],
    correct: 1,
    explain: "Millikan, yağ damlası deneyiyle elektronun taşıdığı elektrik yükünün büyüklüğünü hassas biçimde ölçmüştür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Can, Bohr modelinin hidrojen atomunun ışık yayma davranışını açıklamak için kullanıldığını öğreniyor.",
    text: "Bohr modeli, hidrojenin çizgi spektrumundaki kesikli (ayrık) çizgileri en iyi hangi varsayımla açıklar?",
    options: ["Elektronların sürekli enerji kaybederek çekirdeğe düşmesiyle", "Elektronların yalnızca belirli enerji düzeyleri arasında geçiş yapabilmesiyle", "Elektronların rastgele her enerjiyi alabilmesiyle", "Protonların ışık yaymasıyla", "Nötronların titreşmesiyle"],
    correct: 1,
    explain: "Bohr modeline göre elektronlar yalnızca belirli (kuantumlu) enerji düzeyleri arasında geçiş yapabilir; bu geçişlerde belirli enerjide foton yayılır, bu da kesikli spektrum çizgilerini oluşturur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir stajyer, atom modellerinin tarihsel gelişimini kronolojik olarak sıralamak istiyor.",
    text: "Aşağıdaki sıralamalardan hangisi atom modellerinin tarihsel gelişimini doğru sırada verir?",
    options: [
      "Bohr → Rutherford → Thomson → Dalton → Kuantum mekaniksel model",
      "Dalton → Thomson → Rutherford → Bohr → Kuantum mekaniksel model",
      "Kuantum mekaniksel model → Bohr → Rutherford → Thomson → Dalton",
      "Thomson → Dalton → Bohr → Rutherford → Kuantum mekaniksel model",
      "Rutherford → Dalton → Bohr → Thomson → Kuantum mekaniksel model"
    ],
    correct: 1,
    explain: "Atom modellerinin tarihsel gelişimi kronolojik olarak Dalton (1808) → Thomson (1897) → Rutherford (1911) → Bohr (1913) → kuantum mekaniksel model (1920'ler sonrası) şeklindedir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Zeynep, günümüzde kabul gören modern atom modelinin temel özelliğini araştırıyor.",
    text: "Modern kuantum mekaniksel modele göre elektronların konumu için en doğru ifade hangisidir?",
    options: [
      "Elektronlar çekirdek etrafında sabit, değişmeyen dairesel yörüngelerde döner",
      "Elektronlar, belirli bir anda kesin konumlarıyla değil, bulunma olasılığı en yüksek bölgelerle (orbitallerle) tanımlanır",
      "Elektronların konumu her zaman kesin olarak hesaplanabilir",
      "Elektronlar çekirdeğin içinde protonlarla iç içe bulunur",
      "Elektronlar atomun dışına tamamen serbest halde yayılır"
    ],
    correct: 1,
    explain: "Modern kuantum mekaniksel modelde elektronun kesin konumu değil, belirli bir bölgede bulunma olasılığı (orbital) tanımlanır; bu, Heisenberg belirsizlik ilkesiyle uyumludur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir güvenlik uzmanı, Dalton'ın atom teorisindeki 'aynı element atomları birbirinin aynısıdır' varsayımını hatırlıyor.",
    text: "Bu varsayıma göre aynı elementin tüm atomları için ne söylenebilir?",
    options: ["Her biri farklı bir element gibi davranır", "Her biri farklı sayıda proton içerir", "Kütle ve özellikleri bakımından özdeştirler", "Kimyasal tepkimelere hiç girmezler", "Her biri farklı yük taşır"],
    correct: 2,
    explain: "Dalton'ın teorisine göre aynı elementin atomları kütle ve özellikler bakımından birbirinin aynısı kabul edilir (bu varsayım daha sonra izotoplarla sınırlı biçimde revize edilmiştir)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir akademisyen, atomun temel yapı taşlarının neler olduğunu özetliyor.",
    text: "Bir atomun temel yapı taşları hangi seçenekte doğru verilmiştir?",
    options: ["Asit, baz, tuz", "Molekül, iyon, izotop", "Proton, nötron, elektron", "Element, bileşik, karışım", "Katı, sıvı, gaz"],
    correct: 2,
    explain: "Bir atom; pozitif yüklü proton, yüksüz nötron ve negatif yüklü elektron olmak üzere üç temel tanecikten oluşur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir kimya mühendisi, Rutherford'ın deneyinde alfa taneciklerinin büyük çoğunluğunun altın levhadan hiç sapmadan geçtiğini öğreniyor.",
    text: "Bu gözlem atomun yapısı hakkında en doğrudan hangi çıkarımı destekler?",
    options: ["Atomda hiç boşluk yoktur", "Atom tamamen katı bir küredir", "Atomun büyük kısmı boş uzaydan oluşur", "Elektronlar çekirdeğin içindedir", "Atomun tüm kütlesi yüzeyde toplanmıştır"],
    correct: 2,
    explain: "Alfa taneciklerinin büyük çoğunluğunun sapmadan geçmesi, atomun büyük kısmının boş uzaydan oluştuğunu; kütle ve pozitif yükün ise çok küçük bir hacimde (çekirdekte) yoğunlaştığını gösterir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir spor yapan kişi, bilim tarihinde atom modellerinin zamanla değiştiğini fark ediyor.",
    text: "Atom modellerinin zaman içinde değişmesinin temel nedeni en doğru şekilde hangisidir?",
    options: ["Modellerin hiçbir bilimsel değeri olmaması", "Bilim insanlarının rastgele fikir değiştirmesi", "Yeni deneysel kanıtların ortaya çıkması ve eski modellerin bu kanıtları açıklayamaması", "Atomların zamanla fiziksel olarak değişmesi", "Yeni modellerin eskileriyle hiçbir ilgisinin olmaması"],
    correct: 2,
    explain: "Bilimsel modeller, yeni deneysel kanıtlar eski modelin açıklayamadığı gözlemler ortaya çıkardığında revize edilir veya yenileriyle değiştirilir; bu, bilimsel bilginin değişebilir doğasının bir göstergesidir."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Rutherford'ın altın levha deneyinde alfa taneciklerinin saçılma açılarına göre sayıları aşağıdaki grafikte özetlenmiştir.",
    chart: {
      type: "bar",
      title: "Alfa taneciklerinin saçılma açısına göre dağılımı",
      labels: ["0°-1°", "1°-10°", "10°-90°", ">90° (geri saçılma)"],
      values: [8000, 1900, 90, 8]
    },
    text: "Grafikteki veriler, Thomson'ın 'üzümlü kek' modeliyle karşılaştırıldığında en doğru hangi çıkarımı destekler?",
    options: [
      "Bu veriler atomun tamamen boş olduğunu, hiçbir kütle merkezinin olmadığını gösterir",
      "Tüm alfa taneciklerinin sapmadan geçmesi beklenirdi ve öyle de olmuştur, bu yüzden Thomson modeli doğrulanmıştır",
      "Geri saçılan taneciklerin sayısı, Thomson modelinin öngörüsüyle birebir uyuşmaktadır",
      "Çok az alfa taneciğinin büyük açıyla geri saçılması, atomda yoğun ve küçük bir pozitif yük merkezinin bulunduğunu gösterir; bu, Thomson modeliyle uyuşmaz",
      "Bu veriler elektronların çekirdekte bulunduğunu kanıtlar"
    ],
    correct: 3,
    explain: "Thomson'ın dağınık pozitif yük modeline göre büyük açılı saçılma beklenmezdi; ancak az sayıda taneciğin büyük açıyla (hatta geri) saçılması, pozitif yükün ve kütlenin küçük, yoğun bir merkezde (çekirdekte) toplandığını gösterdi ve Rutherford'ı nükleer modele yöneltti."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Merve, Thomson'ın katot ışını deneyinde ışınların pozitif yüklü levhaya doğru saptığını gözlemliyor.",
    text: "Bu sapma yönü, katot ışınlarının yükü hakkında en doğru hangi çıkarımı sağlar?",
    options: [
      "Katot ışınları hem pozitif hem negatif yük taşır",
      "Katot ışınları pozitif yüklüdür, çünkü aynı yükler birbirini çeker",
      "Katot ışınlarının hiç yükü yoktur",
      "Katot ışınları negatif yüklüdür, çünkü zıt yükler birbirini çeker",
      "Sapma yönü yükle ilgili hiçbir bilgi vermez"
    ],
    correct: 3,
    explain: "Zıt yükler birbirini çektiğinden, ışınların pozitif levhaya doğru sapması, katot ışınlarının (elektronların) negatif yüklü olduğunu gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Aşağıdaki tabloda dört farklı atom modelinin temel özellikleri karşılaştırılmaktadır.",
    table: {
      headers: ["Model", "Bilim insanı", "Temel varsayım"],
      rows: [
        ["Katı küre modeli", "Dalton", "Atom bölünemez, içi dolu bir küredir"],
        ["Üzümlü kek modeli", "Thomson", "Elektronlar pozitif yüklü hamura gömülüdür"],
        ["Gezegen modeli", "Rutherford", "Elektronlar merkezdeki çekirdek etrafında dolanır"],
        ["Enerji düzeyleri modeli", "Bohr", "Elektronlar belirli enerji düzeylerinde bulunur"]
      ]
    },
    text: "Tabloya göre atomun kütlesinin küçük bir merkezde yoğunlaştığı fikrini ilk öneren model hangisidir?",
    options: ["Katı küre modeli", "Üzümlü kek modeli", "Gezegen modeli", "Enerji düzeyleri modeli", "Hiçbiri"],
    correct: 2,
    explain: "Rutherford'ın gezegen modeli, atomun kütlesinin ve pozitif yükünün küçük, yoğun bir çekirdekte toplandığı fikrini ilk kez ortaya koymuştur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir tüketici, izotop kavramını öğrendikten sonra Dalton'ın 'aynı elementin tüm atomları özdeştir' varsayımını yeniden değerlendiriyor.",
    text: "İzotopların keşfi, Dalton'ın bu varsayımı hakkında en doğru hangi sonucu doğurmuştur?",
    options: [
      "İzotop kavramı Dalton'ın teorisiyle hiçbir şekilde ilişkili değildir",
      "Dalton'ın teorisi tamamen ve tümüyle geçersiz sayılmıştır",
      "İzotoplar, Dalton'ın varsayımını tam olarak doğrulamıştır",
      "Varsayım kısmen revize edilmiştir: aynı elementin atomları proton sayısı bakımından aynı, nötron sayısı (dolayısıyla kütle) bakımından farklı olabilir",
      "İzotoplar yalnızca yapay olarak üretilen, doğada bulunmayan atomlardır"
    ],
    correct: 3,
    explain: "İzotopların keşfi, Dalton'ın 'aynı elementin atomları tamamen özdeştir' varsayımının kütle açısından revize edilmesini gerektirmiştir: aynı elementin atomları proton sayısı (atom numarası) bakımından aynıdır, ancak nötron sayısı farklı olabilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir eczacı, Rutherford'ın altın levhayı özellikle çok ince (yaklaşık birkaç bin atom kalınlığında) hazırlattığını öğreniyor.",
    text: "Levhanın bu kadar ince olmasının deney açısından önemi en doğru hangi seçenekte açıklanmıştır?",
    options: [
      "Alfa taneciklerinin levhadan hiç geçmemesini sağlamak",
      "Levhanın daha ucuza mal olmasını sağlamak",
      "Levhanın rengini değiştirmek",
      "Alfa taneciklerinin levhayı geçebilmesini ve saçılma açılarının net biçimde ölçülebilmesini sağlamak",
      "Deneyin daha uzun sürmesini sağlamak"
    ],
    correct: 3,
    explain: "İnce levha, alfa taneciklerinin çoğunun malzemeden geçebilmesini ve saçılma açılarının atom yapısı hakkında anlamlı veri verecek şekilde ölçülebilmesini sağlar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir veli, Bohr'un modelinde elektronun bir enerji düzeyinden diğerine geçerken enerji soğurduğunu veya yaydığını öğreniyor.",
    text: "Bir elektron daha yüksek enerjili bir düzeye geçtiğinde ne olur?",
    options: [
      "Protona dönüşür",
      "Belirli miktarda enerji (foton) yayar",
      "Kütlesini kaybeder",
      "Belirli miktarda enerji (foton) soğurur",
      "Hiçbir enerji alışverişi olmaz"
    ],
    correct: 3,
    explain: "Bohr modeline göre elektron daha yüksek enerjili bir düzeye çıkarken, iki düzey arasındaki enerji farkına eşit miktarda enerjiyi foton olarak soğurur (uyarılma); düşerken ise bu enerjiyi foton olarak yayar (ışıma)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir çiftçi, Thomson'ın modelinin Rutherford'ın deney sonuçlarını neden açıklayamadığını araştırıyor.",
    text: "Thomson'ın modeli, Rutherford'ın gözlemlediği büyük açılı saçılmayı en çok hangi nedenle açıklayamaz?",
    options: [
      "Modelde atom çok büyük olduğundan",
      "Modelde elektron hiç bulunmadığından",
      "Modelde proton sayısı çok fazla olduğundan",
      "Modelde pozitif yük atomun tamamına yayıldığından, hiçbir bölgede alfa taneciğini büyük açıyla itecek kadar yoğun bir yük merkezi yoktur",
      "Modelde nötron bulunmadığından"
    ],
    correct: 3,
    explain: "Thomson modelinde pozitif yük atomun tüm hacmine yayıldığı için, hiçbir noktada alfa taneciğini büyük açıyla itebilecek kadar yoğun ve lokalize bir yük yoktur; bu yüzden model gözlemlenen geri saçılmayı açıklayamaz."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir itfaiyeci, Millikan'ın yağ damlası deneyinde ölçtüğü yük değerlerinin her zaman belirli bir sayının (e) tam katları olduğunu öğreniyor.",
    text: "Bu gözlem elektrik yükü hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Elektrik yükü süreklidir, herhangi bir değeri alabilir",
      "Elektrik yükü kuantumludur; belirli bir temel yükün (elektronun yükünün) tam sayı katları şeklinde bulunur",
      "Elektrik yükünün büyüklüğü ölçülemez",
      "Her yağ damlası farklı miktarda temel yük içerir ve bu rastgeledir",
      "Elektrik yükü yalnızca pozitif değerler alabilir"
    ],
    correct: 1,
    explain: "Ölçülen yüklerin hep aynı temel değerin tam katları çıkması, elektrik yükünün sürekli değil kuantumlu (kesikli) olduğunu ve bu temel birimin elektronun yükü olduğunu gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir çevre mühendisi, farklı elementlerin alevde yakıldığında farklı renkte ışık yaydığını (alev testi) gözlemliyor.",
    text: "Bu gözlem, Bohr'un enerji düzeyi modeliyle en doğru hangi şekilde açıklanabilir?",
    options: [
      "Renk farkı yalnızca elementin kütlesine bağlıdır, enerji düzeyleriyle ilgisi yoktur",
      "Her element aynı enerji düzeylerine sahiptir, renk farkı tesadüfidir",
      "Alev testi atom modelleriyle hiçbir şekilde ilişkili değildir",
      "Her elementin elektronlarının enerji düzeyleri arasındaki farklar kendine özgüdür, bu yüzden yayılan foton enerjisi (dolayısıyla rengi) elementten elemente değişir",
      "Bütün elementler aynı renkte ışık yaymalıdır, gözlemlenen farklar hatalıdır"
    ],
    correct: 3,
    explain: "Her elementin elektron enerji düzeyleri kendine özgü olduğundan, elektron geçişlerinde yayılan foton enerjisi (ve dolayısıyla ışığın rengi) elementten elemente farklılık gösterir; bu, alev testinin bilimsel temelidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Emre, atom modellerinin gelişim sürecinde her yeni modelin bir öncekini nasıl etkilediğini araştırıyor.",
    text: "Bu süreç için en doğru genel çıkarım hangisidir?",
    options: [
      "İlk model olan Dalton'ın modeli hâlâ değiştirilmeden kullanılmaktadır",
      "Her yeni model, bir önceki modelle hiçbir bağlantısı olmadan tesadüfen ortaya çıkmıştır",
      "Modeller zamanla daha basit hale gelmiştir",
      "Her yeni model, bir önceki modelin açıklayamadığı yeni deneysel bulguları hesaba katarak geliştirilmiştir",
      "Modellerin gelişim sırası deneysel kanıtlarla değil, bilim insanlarının ünüyle belirlenmiştir"
    ],
    correct: 3,
    explain: "Atom modellerinin tarihsel gelişimi, her yeni modelin bir önceki modelin açıklayamadığı deneysel gözlemleri (katot ışınları, alfa saçılması, çizgi spektrumu vb.) hesaba katarak inşa edilmesiyle ilerlemiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Meraklı bir gözlemci, Rutherford'ın modelinde elektronların çekirdek etrafında dairesel yörüngelerde dolandığını, ancak bu modelin klasik fizik açısından bir soruna işaret ettiğini öğreniyor.",
    text: "Klasik fiziğe göre Rutherford modelindeki bu sorun en doğru hangi seçenekte tanımlanmıştır?",
    options: [
      "Elektronların kütlesi klasik fizikte tanımsızdır",
      "Elektronlar çekirdekten çok uzakta olduğu için hiçbir sorun yoktur",
      "Klasik fizik, elektronların varlığını tamamen reddeder",
      "İvmeli hareket eden yüklü bir tanecik (elektron) enerji yaymalı ve sonunda çekirdeğe düşmelidir; ancak atomlar kararlıdır",
      "Sorun yalnızca büyük atomlarla ilgilidir, hidrojende görülmez"
    ],
    correct: 3,
    explain: "Klasik elektromanyetik teoriye göre dairesel yörüngede ivmeli hareket eden yüklü bir tanecik sürekli enerji kaybederek kısa sürede çekirdeğe düşmelidir; ancak atomların kararlı olduğu gözlemi bu öngörüyle çelişir — bu çelişki Bohr'un kuantum varsayımlarını gerekli kılmıştır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Aşağıdaki grafik, dört farklı atom modelinin tarihsel olarak önerildiği yılları göstermektedir.",
    chart: {
      type: "line",
      title: "Atom modellerinin önerildiği yıllar",
      labels: ["Dalton", "Thomson", "Rutherford", "Bohr"],
      values: [1808, 1897, 1911, 1913]
    },
    text: "Grafikteki verilere göre, bu dört model arasındaki en kısa zaman aralığı hangi iki model arasındadır?",
    options: ["Dalton – Thomson", "Thomson – Rutherford", "Rutherford – Bohr", "Dalton – Rutherford", "Dalton – Bohr"],
    correct: 2,
    explain: "Rutherford (1911) ile Bohr (1913) arasındaki fark yalnızca 2 yıldır; bu, diğer aralıklardan (Dalton-Thomson: 89 yıl, Thomson-Rutherford: 14 yıl, Dalton-Rutherford: 103 yıl) daha kısadır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir laboratuvar teknisyeni, Dalton'ın teorisinde 'kimyasal tepkimelerde atomlar yeniden düzenlenir, yok olmaz ya da yaratılmaz' varsayımını okuyor.",
    text: "Bu varsayım günümüz kimyasında en çok hangi ilkeyle doğrudan ilişkilidir?",
    options: ["Periyodik yasa", "Sabit oranlar kanunu", "Avogadro sayısı", "Kütlenin korunumu kanunu", "Termodinamiğin ikinci yasası"],
    correct: 3,
    explain: "Atomların tepkimede yok olmadığı, sadece yeniden düzenlendiği varsayımı, kütlenin korunumu kanununun atom düzeyindeki temel açıklamasıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir gazeteci, Bohr modelinin yalnızca hidrojen gibi tek elektronlu atomların spektrumunu başarıyla açıkladığını, çok elektronlu atomlarda ise tahminlerin gözlemle tam örtüşmediğini öğreniyor.",
    text: "Bu durum bilimsel modeller hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Hidrojen atomu diğer atomlardan farklı fizik kurallarına tabidir",
      "Bohr modeli tüm atomlar için kusursuzdur, gözlemlerde hata vardır",
      "Çok elektronlu atomlar bilim dışıdır",
      "Bir model bir kez başarılı olduysa asla değiştirilmemelidir",
      "Bir modelin belirli bir kapsamda başarılı olması, onun her koşulda tam doğru olduğu anlamına gelmez; modelin sınırları deneyle belirlenir"
    ],
    correct: 4,
    explain: "Bohr modelinin hidrojende başarılı, çok elektronlu atomlarda ise sınırlı kalması, bilimsel modellerin belirli bir kapsamda geçerli olabileceğini ve bu sınırların yeni deneysel karşılaştırmalarla ortaya konduğunu gösterir — bu da kuantum mekaniksel modele geçişi motive etmiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir lise öğrencisi, atom modelleri tarihinde 'proton' ve 'nötron' kavramlarının 'elektron'dan çok sonra tam olarak tanımlandığını fark ediyor (elektron 1897, proton 1919 civarı isimlendirme, nötron 1932).",
    text: "Bu kronolojik sıralama en doğru hangi çıkarımı destekler?",
    options: [
      "Nötronlar aslında elektronlardan önce keşfedilmiş ama gizli tutulmuştur",
      "Nötronlar elektronlardan daha basit taneciklerdir, bu yüzden geç keşfedilmiştir",
      "Bilim insanları nötronu bilerek en sona bırakmıştır",
      "Kronoloji tamamen rastlantısaldır, hiçbir bilimsel nedeni yoktur",
      "Deneysel olarak tespit edilmesi güç olan yüksüz tanecikler (nötron), teknoloji ve yöntemler geliştikçe daha geç keşfedilmiştir"
    ],
    correct: 4,
    explain: "Elektrik yükü taşımayan nötron, yüklü taneciklere göre elektrik/manyetik alanlarla tespit edilmesi daha zor bir tanecik olduğundan, tespiti daha gelişmiş deney düzenekleri gerektirmiş ve daha geç (1932) keşfedilmiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Mehmet, Bohr'un modelinde her enerji düzeyine bir tam sayı (n = 1, 2, 3...) atandığını öğreniyor.",
    text: "Bu tam sayı (n) en doğru şekilde neyi temsil eder?",
    options: [
      "Atomun yaydığı ışığın rengini doğrudan",
      "Atomun toplam kütlesini",
      "Elementin atom numarasını",
      "Çekirdekteki nötron sayısını",
      "Elektronun bulunduğu enerji düzeyini (baş kuantum sayısını)"
    ],
    correct: 4,
    explain: "Bohr modelinde n, elektronun bulunduğu enerji düzeyini (bugünkü adıyla baş kuantum sayısını) belirtir; n arttıkça enerji düzeyi çekirdekten uzaklaşır ve enerjisi artar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Sınıftaki öğrenciler, atom modelleri tarihinde bilim insanlarının birbirinin öğrencisi ya da çalışma arkadaşı olduğunu fark ediyor (örneğin Rutherford, Thomson'ın öğrencisiydi; Bohr, Rutherford'la çalışmıştı).",
    text: "Bu bilgi, bilimsel bilginin üretim süreci hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bu bilgi bilimin doğası hakkında hiçbir şey söylemez",
      "Bilimsel keşifler her zaman tamamen yalnız çalışan bireyler tarafından yapılır",
      "Öğretmen-öğrenci ilişkisi bilimsel sonuçları geçersiz kılar",
      "Bilim insanları birbirinden tamamen bağımsız, izole çalışmalıdır",
      "Bilimsel bilgi genellikle işbirliği ve önceki çalışmalar üzerine kümülatif biçimde inşa edilir"
    ],
    correct: 4,
    explain: "Rutherford'ın Thomson'ın öğrencisi olması, Bohr'un Rutherford'la çalışması gibi ilişkiler, bilimsel bilginin izole değil, önceki çalışmalar ve işbirlikleri üzerine kümülatif olarak inşa edildiğini gösterir."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir doktora öğrencisi, bilim felsefesinde bir teorinin 'yanlışlanabilir' (test edilip çürütülebilir) olmasının, onun bilimsel sayılması için önemli bir ölçüt olduğunu öğreniyor.",
    text: "Atom modellerinin tarihine bu ölçütle bakıldığında en doğru çıkarım hangisidir?",
    options: [
      "Thomson'ın modeli hiçbir zaman test edilmemiştir",
      "Bilimsel modeller asla test edilemez, bu yüzden yanlışlanamazlar",
      "Bir model yanlışlandığında, o modeli öneren bilim insanının tüm çalışmaları değersizleşir",
      "Yanlışlanabilirlik yalnızca kimya dışındaki bilimler için geçerlidir",
      "Thomson'ın modeli, Rutherford'ın deneyiyle test edilebildiği ve gözlemle çelişkiye düştüğü için yanlışlanmış, bu da bilimsel bir modelin özelliğidir"
    ],
    correct: 4,
    explain: "Thomson'ın modelinin somut bir deneyle (Rutherford'ın altın levha deneyi) test edilip gözlemle çelişkiye düşmesi ve bu nedenle terk edilmesi, bilimsel bir teorinin 'yanlışlanabilir' olması gerektiği ilkesinin iyi bir örneğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Elif, eski atom modellerinin 'tamamen yanlış' olarak değil, 'sınırlı geçerlilik alanına sahip, sonradan geliştirilen' modeller olarak değerlendirildiğini öğreniyor.",
    text: "Bu yaklaşım bilimsel modellerin doğası hakkında en olgun hangi çıkarımı destekler?",
    options: [
      "Bir model bir kez kabul edildiğinde asla değiştirilmemelidir",
      "Eski modellerin hiçbir bilimsel değeri yoktur ve tamamen unutulmalıdır",
      "Yeni bir model geldiğinde eski model her zaman tamamen hatalı kabul edilmelidir",
      "Bilimsel modeller arasında hiçbir mantıksal bağlantı yoktur",
      "Bilimsel modeller genellikle bir öncekinin tamamen çöpe atılması değil, onun üzerine inşa edilerek daha kapsamlı hale getirilmesiyle gelişir"
    ],
    correct: 4,
    explain: "Bilim tarihinde modeller genellikle bir öncekinin tamamen reddi değil, onun açıklama gücünü koruyup sınırlarını genişleten, daha kapsamlı yeni modellerle geliştirilir (örneğin Bohr modeli hâlâ basit açıklamalar için kullanılır, ama kuantum mekaniksel model daha kapsamlıdır)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir teknisyen, Bohr modelinin çok elektronlu atomların spektrumlarını tam açıklayamadığını, bunun üzerine Schrödinger ve Heisenberg gibi bilim insanlarının kuantum mekaniksel modeli geliştirdiğini öğreniyor.",
    text: "Bu geçiş süreci, bilimsel modellerin sınırları hakkında en doğru hangi genellemeyi destekler?",
    options: [
      "Modellerin sınırları asla deneyle tespit edilemez",
      "Bir model başarısız olduğunda bilim insanları genellikle araştırmayı tamamen bırakır",
      "Bohr modelinin başarısızlığı, atom kavramının bilimsel olarak geçersiz olduğu anlamına gelir",
      "Kuantum mekaniksel model, Bohr modeliyle hiçbir ortak noktaya sahip değildir",
      "Bir modelin bazı durumlarda başarısız kalması, o alanda yeni ve daha kapsamlı bir modelin geliştirilmesi için itici güç olabilir"
    ],
    correct: 4,
    explain: "Bir modelin açıklayamadığı gözlemlerin (burada çok elektronlu atomların spektrumu) fark edilmesi, bilim insanlarını daha kapsamlı ve doğru tahminler yapan yeni modeller (kuantum mekaniksel model) geliştirmeye yöneltir; bu, bilimin kendi kendini düzelten doğasının bir örneğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir mühendis, 'tüm modeller yanlıştır, ancak bazıları faydalıdır' şeklindeki bir bilim felsefesi görüşünü okuyor ve bunu atom modelleriyle ilişkilendiriyor.",
    text: "Bu görüşün atom modelleri bağlamında en doğru yorumu hangisidir?",
    options: [
      "Bu görüş bilimin kesin ve değişmez gerçekleri ortaya koyduğunu iddia eder",
      "Bu görüşe göre hiçbir atom modeli hiçbir işe yaramaz",
      "Bu görüş yalnızca sosyal bilimler için geçerlidir, doğa bilimlerine uygulanamaz",
      "En doğru model her zaman en karmaşık olandır, bu yüzden basit modeller kullanılmamalıdır",
      "Modeller gerçekliğin birebir kopyası değil, belirli amaçlar için gerçekliği yeterince iyi tahmin eden basitleştirilmiş temsillerdir"
    ],
    correct: 4,
    explain: "'Tüm modeller yanlıştır, bazıları faydalıdır' görüşü, bilimsel modellerin gerçekliğin tam ve mükemmel bir kopyası olmadığını, ancak belirli bağlamlarda (örneğin lise düzeyinde kimyasal bağ açıklaması için Bohr modeli) yeterince faydalı tahminler sağladığını vurgular."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir araştırmacı, günümüzde lise kimyasında hâlâ Bohr modelinin basitleştirilmiş çizimlerle kullanıldığını, oysa bilim insanlarının kuantum mekaniksel modeli kullandığını fark ediyor.",
    text: "Bu durum en doğru hangi şekilde açıklanabilir?",
    options: [
      "İki model arasında hiçbir fark yoktur, sadece isimleri farklıdır",
      "Bohr modeli bilim insanları tarafından hâlâ tam doğru kabul edilmektedir",
      "Kuantum mekaniksel model yalnızca üniversitede var olan, aslında geçersiz bir modeldir",
      "Lise kitapları bilerek yanlış bilgi öğretmektedir",
      "Bohr modeli, temel kavramları (enerji düzeyleri, elektron geçişleri) basit ve görsel biçimde anlatmak için eğitimde hâlâ faydalıdır; ancak ileri düzey araştırmalarda daha kapsamlı kuantum mekaniksel model kullanılır"
    ],
    correct: 4,
    explain: "Bohr modeli, temel enerji düzeyi ve elektron geçişi kavramlarını basit ve sezgisel biçimde açıklamak için eğitimde pedagojik olarak faydalıdır; bilimsel araştırmalarda ise daha doğru tahminler sunan kuantum mekaniksel model kullanılır — bu, modelin 'kullanım amacına göre' seçilmesinin bir örneğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Burak, mass spektrometresi gibi teknolojik gelişmelerin izotopların kütle farklarını hassas biçimde ölçebilmeyi mümkün kıldığını, bu ölçümlerin de Dalton döneminde yapılamayacağını öğreniyor.",
    text: "Bu bilgi, bilimsel bilginin değişebilirliği ile teknoloji arasındaki ilişki hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Teknolojik gelişmeler bilimsel modelleri değiştiremez, yalnızca doğrular",
      "Teknoloji bilimsel modellerin gelişimini hiçbir şekilde etkilemez",
      "Dalton'ın döneminde teknoloji yeterliydi, sadece bilim insanları dikkatsizdi",
      "Mass spektrometresi yalnızca kimya dışı alanlarda kullanılır",
      "Yeni ölçüm teknolojilerinin geliştirilmesi, önceden gözlemlenemeyen olguların (örneğin izotop kütle farkları) tespit edilmesini sağlayarak bilimsel modellerin revize edilmesine katkıda bulunabilir"
    ],
    correct: 4,
    explain: "Mass spektrometresi gibi araçların geliştirilmesi, önceden ölçülemeyen izotop kütle farkları gibi verilerin elde edilmesini sağlamış; bu da Dalton'ın 'atomlar özdeştir' varsayımının revize edilmesine yol açmıştır — teknoloji ile bilimsel bilginin gelişimi yakından ilişkilidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Kerem, farklı ülkelerdeki bilim insanlarının aynı dönemde birbirinden bağımsız olarak benzer sonuçlara ulaştığı (örneğin farklı laboratuvarların benzer spektrum verileri elde etmesi) durumların bilimde sıkça yaşandığını öğreniyor.",
    text: "Bu durum bilimsel bilginin güvenilirliği hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bağımsız araştırmacıların aynı sonuca ulaşması (tekrarlanabilirlik), bir bulgunun güvenilirliğini artıran önemli bir bilimsel ölçüttür",
      "Bu durum yalnızca tesadüftür ve bilimsel güvenilirlikle ilgisi yoktur",
      "Farklı laboratuvarların aynı sonucu bulması, sonuçların uydurma olduğu anlamına gelir",
      "Tekrarlanabilirlik yalnızca sosyal bilimlerde önemlidir",
      "Bağımsız doğrulama bilimsel yöntemde gereksiz bir adımdır"
    ],
    correct: 0,
    explain: "Bağımsız araştırma gruplarının benzer sonuçlara ulaşması (tekrarlanabilirlik), bir bulgunun tesadüfi ya da hatalı olmadığını, güvenilir olduğunu gösteren temel bilimsel ölçütlerden biridir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir fabrika işçisi, 'bilimsel teori' kelimesinin günlük dildeki 'sadece bir tahmin/varsayım' anlamıyla bilimdeki anlamının farklı olduğunu öğreniyor.",
    text: "Bilimsel bağlamda 'teori' kavramı için en doğru tanım hangisidir?",
    options: [
      "Çok sayıda gözlem ve deneyle desteklenmiş, açıklama ve tahmin gücü yüksek, sistematik bir bilgi bütünüdür",
      "Kanıtlanmamış, rastgele bir tahmindir ve günlük dildeki 'teorim var' ifadesiyle aynı anlama gelir",
      "Bir kez ortaya atıldıktan sonra asla test edilmeyen sabit bir gerçektir",
      "Yalnızca matematiksel formüllerden oluşan, deneyle ilgisi olmayan bir yapıdır",
      "Bilim insanlarının kişisel görüşünden ibarettir"
    ],
    correct: 0,
    explain: "Bilimsel bağlamda 'teori', günlük dildeki gevşek 'tahmin' anlamından farklı olarak, çok sayıda gözlem ve deneyle desteklenmiş, geniş açıklama ve tahmin gücüne sahip sistematik bir bilgi yapısını ifade eder (örneğin atom teorisi, evrim teorisi)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir üniversite öğrencisi, gelecekte hipotetik olarak kuantum mekaniksel modelin de bazı gözlemleri açıklayamadığı bir durumla karşılaşılırsa ne olabileceğini düşünüyor.",
    text: "Bilimin doğası göz önüne alındığında bu senaryoda en olası ve tutarlı yaklaşım hangisidir?",
    options: [
      "Model, yeni gözlemleri de kapsayacak şekilde revize edilir ya da daha kapsamlı yeni bir modelle desteklenir/değiştirilir",
      "Kuantum mekaniği kesin ve değişmez olduğu için hiçbir revizyon yapılamaz",
      "Böyle bir durumda bilim insanları araştırmayı tamamen durdurur",
      "Yeni gözlem, ölçüm hatası olduğu gerekçesiyle her zaman yok sayılır",
      "Atom kavramının kendisi tamamen terk edilir"
    ],
    correct: 0,
    explain: "Bilimin doğası gereği, mevcut en iyi model bile yeni ve tutarlı gözlemlerle çelişirse gözden geçirilir; bu, atom modellerinin tarihinde defalarca yaşanmış bir süreçtir ve kuantum mekaniksel model de bu ilkeden istisna değildir — bilimsel bilgi her zaman mevcut kanıtlara göre 'şu ana kadarki en iyi açıklama'dır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir kariyer danışmanı, atom modelleri tarihinde bazı bilim insanlarının önce kendi hipotezlerini test etmek için deney tasarladığını, bazı deneylerin ise (Rutherford'ın altın levha deneyi gibi) beklenmedik sonuçlar verdiğini öğreniyor.",
    text: "Beklenmedik bir deney sonucunun bilimsel süreçteki rolü en doğru hangi seçenekte açıklanmıştır?",
    options: [
      "Beklenmedik sonuçlar, mevcut modelin eksik ya da hatalı olduğunu gösteren değerli ipuçları olup yeni bilgiye kapı açabilir",
      "Beklenmedik sonuçlar her zaman deney hatasından kaynaklanır ve göz ardı edilmelidir",
      "Bilim insanları yalnızca beklediği sonucu bulana kadar deneyi tekrar tekrar değiştirmelidir",
      "Beklenmedik sonuçlar bilimsel yöntemin dışındadır",
      "Bir deneyden yalnızca önceden tahmin edilen sonuçlar bilimsel kabul edilir"
    ],
    correct: 0,
    explain: "Rutherford'ın deneyinde gözlemlenen 'beklenmedik' büyük açılı saçılma, mevcut (Thomson) modelinin eksik olduğunu gösteren kritik bir ipucu olmuş ve nükleer atom modelinin doğuşuna yol açmıştır — bilim tarihinde beklenmedik sonuçlar genellikle önemli keşiflerin kapısını aralar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir laboratuvar ekibi, 'bilimsel konsensüs' (bilim insanları arasındaki fikir birliği) kavramının, bir konudaki en güçlü kanıtlara dayalı ortak görüşü ifade ettiğini, ancak bunun da yeni kanıtlarla değişebileceğini öğreniyor.",
    text: "Bu bilgi ışığında bilimsel konsensüs hakkında en doğru çıkarım hangisidir?",
    options: [
      "Bilimsel konsensüs, o an mevcut olan en güçlü kanıtlara dayanır ve yeni, tutarlı kanıtlar ortaya çıktıkça güncellenebilir; bu bir zayıflık değil, bilimin kendini düzeltme mekanizmasıdır",
      "Bilimsel konsensüs bir kez oluştuğunda asla değişmez",
      "Konsensüs, bilim insanlarının oylamayla rastgele karar vermesinden ibarettir",
      "Konsensüsün değişmesi, önceki bilim insanlarının yalancı olduğu anlamına gelir",
      "Bilimsel konsensüs kanıtlarla değil, popülerlikle belirlenir"
    ],
    correct: 0,
    explain: "Bilimsel konsensüs, mevcut en güçlü kanıtlara dayanan geçici bir 'en iyi anlayış'tır; atom modellerinin tarihinde görüldüğü gibi, yeni ve tutarlı kanıtlar ortaya çıktığında konsensüs güncellenir — bu, bilimin güvenilirliğini azaltmaz, aksine kendi kendini düzeltme kapasitesini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir analitik kimyager, atom modelleri tarihinde her modelin, döneminin mevcut teknolojik ve kavramsal sınırları içinde en iyi açıklamayı sunduğunu; bu nedenle 'geçmişteki bilim insanlarının aptal olduğu' şeklindeki bir yorumun yanlış olacağını tartışıyor.",
    text: "Bu tartışma en doğru hangi bilimsel bakış açısını yansıtır?",
    options: [
      "Geçmiş bilim insanlarının modelleri, kendi dönemlerinin mevcut kanıt ve araçlarına göre rasyoneldi; sonraki düzeltmeler onların yetersizliğinden değil, bilginin ve teknolojinin ilerlemesinden kaynaklanır",
      "Geçmiş bilim insanları gerçekten yetersizdi ve bu yüzden modelleri yanlıştı",
      "Bilim tarihinde ilerleme diye bir şey yoktur, her dönem birbirinin aynısıdır",
      "Sadece günümüz bilim insanlarının fikirleri değerlidir, geçmiş modellerin hiçbir katkısı olmamıştır",
      "Bilimsel modellerin doğru ya da yanlış olması tamamen şansa bağlıdır"
    ],
    correct: 0,
    explain: "Bilim tarihini değerlendirirken, geçmiş bilim insanlarının modellerini kendi dönemlerinin mevcut kanıt ve teknolojik sınırları bağlamında değerlendirmek gerekir; sonraki düzeltmeler onların 'yetersizliğinden' değil, bilginin ve araçların zamanla ilerlemesinden kaynaklanır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Ece, popüler bilim yazılarında bazen 'bilim insanları her şeyi kesin olarak kanıtladı' şeklinde ifadeler görüyor ve bunu atom modelleri tarihiyle karşılaştırıyor.",
    text: "Atom modellerinin tarihi göz önüne alındığında bu tür kesinlik ifadeleri hakkında en doğru eleştirel çıkarım hangisidir?",
    options: [
      "Bilim, mevcut en iyi kanıtlara dayalı güçlü açıklamalar sunar; ancak 'mutlak ve değişmez kesinlik' iddiası, bilimin kendini düzeltme ve gelişme doğasıyla çelişebilir",
      "Bilimin hiçbir zaman güvenilir bir bilgi üretmediği doğrudur",
      "'Kesin kanıtlandı' ifadeleri bilimde her zaman tam olarak doğrudur ve sorgulanmamalıdır",
      "Atom modellerinin değişmesi, bilimin hiçbir zaman güvenilir olmadığını kanıtlar",
      "Popüler bilim yazıları her zaman bilimsel makalelerle birebir aynı kesinlikte olmalıdır"
    ],
    correct: 0,
    explain: "Atom modellerinin tarihi, bilimin 'mutlak ve değişmez kesinlik' değil, mevcut en güçlü kanıtlara dayalı, yeni bulgularla güncellenebilir açıklamalar sunduğunu gösterir; popüler dildeki aşırı kesinlik ifadeleri bu inceliği bazen gözden kaçırabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Ayşe, atom modelleri tarihindeki her aşamada, yeni modelin bir öncekinin başarılı açıkladığı olguları (örneğin kütlenin korunumu, sabit oranlar) hâlâ açıklayabildiğini fark ediyor.",
    text: "Bu gözlem, bilimsel modellerin gelişimi hakkında en doğru hangi ilkeyi örnekler?",
    options: [
      "Yeni bir model genellikle eskisinin başarıyla açıkladığı olguları da kapsamalı, üstüne yeni gözlemleri de açıklayabilmelidir (kapsayıcılık ilkesi)",
      "Yeni modeller eski modellerin açıkladığı hiçbir şeyi açıklamak zorunda değildir",
      "Bir modelin eskiyle hiçbir ortak noktası olmaması, onun daha güçlü olduğunu gösterir",
      "Kapsayıcılık ilkesi yalnızca fizikte geçerlidir, kimyada geçerli değildir",
      "Eski modelin açıkladığı olgular yeni modelde önemsizdir"
    ],
    correct: 0,
    explain: "Bilimde iyi bir yeni model, genellikle eski modelin başarıyla açıkladığı olguları da (örneğin kütlenin korunumu) açıklamaya devam ederken, ek olarak eskisinin açıklayamadığı yeni gözlemleri de kapsar; bu 'kapsayıcılık' ilkesi, atom modellerinin art arda gelişiminde açıkça görülür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir aşçı, atom modelleri tarihini özetleyen bir sunum hazırlıyor ve sunumun son sloganını 'Bilim asla \"bitmiş\" değildir' olarak belirliyor.",
    text: "Bu slogan, atom modelleri tarihinden hareketle en doğru hangi mesajı vermektedir?",
    options: [
      "Bilimsel bilgi, mevcut en iyi açıklamaları sunar; ancak yeni kanıt ve araçlar ortaya çıktıkça sürekli sorgulanabilir ve geliştirilebilir bir süreçtir",
      "Bilim hiçbir zaman güvenilir sonuç üretemeyeceği için değersizdir",
      "Bilimin 'bitmemiş' olması, her bilimsel iddianın eşit derecede belirsiz olduğu anlamına gelir",
      "Atom modelleri artık kesinleşmiştir ve gelecekte hiç değişmeyecektir",
      "Bilimin bitmemiş olması yalnızca kimya alanına özgü bir durumdur"
    ],
    correct: 0,
    explain: "Atom modellerinin yaklaşık iki yüzyıllık gelişimi, bilimin statik/'bitmiş' bir bilgi yığını değil, yeni kanıt ve teknolojilerle sürekli sorgulanan, geliştirilen dinamik bir süreç olduğunu gösterir — bu, bilimsel bilginin gücünü azaltmaz, tam tersine güvenilirliğinin kaynağıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bahçıvan, Rutherford'ın modelinin çekirdeğin varlığını doğru öngörmesine rağmen, elektronların neden çekirdeğe düşmediğini açıklayamadığını; Bohr'un ise bu sorunu 'elektronlar yalnızca belirli enerji düzeylerinde kararlı olabilir' varsayımıyla (kanıtlanmamış bir postülat olarak) çözdüğünü öğreniyor.",
    text: "Bohr'un bu yaklaşımı, bilimsel model geliştirme süreci hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bazen bir model, o an tam olarak temellendirilemeyen ancak gözlemlerle (spektrum verileriyle) tutarlı sonuçlar veren postülatlar içerebilir; bu postülatlar sonraki teorilerle (kuantum mekaniği) daha derin bir temele oturtulabilir",
      "Bilim insanları hiçbir zaman kanıtlanmamış bir varsayım kullanamaz",
      "Bohr'un varsayımı tamamen keyfi olduğu için bilimsel değildir",
      "Bir postülatın daha sonra daha derin bir teoriyle açıklanması, ilk halinin bilim dışı olduğu anlamına gelir",
      "Kuantum mekaniği Bohr'un varsayımıyla hiçbir bağlantı kurmamıştır"
    ],
    correct: 0,
    explain: "Bohr'un 'elektronlar belirli enerji düzeylerinde kararlıdır' postülatı, o dönemde tam teorik temeli olmasa da hidrojen spektrumunu başarıyla açıklıyordu; bu tür postülatlar bilimde geçici köprüler olabilir ve sonraki, daha derin teoriler (kuantum mekaniği) tarafından temellendirilebilir — bu, bilimin katmanlı ve kümülatif gelişiminin bir örneğidir."
  }
],
  "orbital": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir veli, kimya dersinde 'orbital' kavramının tanımını öğreniyor.",
    text: "Orbital için en doğru tanım hangisidir?",
    options: ["Elektronun çekirdek etrafındaki sabit, çizilebilir yörüngesi", "Elektronun bulunma olasılığının yüksek olduğu üç boyutlu bölge", "Çekirdekteki protonların dizilim şekli", "Atomun toplam kütlesinin dağıldığı alan", "Nötronların bulunduğu sabit nokta"],
    correct: 1,
    explain: "Orbital, bir elektronun belirli bir anda bulunma olasılığının en yüksek olduğu üç boyutlu uzay bölgesi olarak tanımlanır; klasik anlamda çizilebilir bir 'yörünge' değildir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir kimya öğretmeni, s orbitalinin geometrik şeklini inceliyor.",
    text: "s orbitalinin şekli için en doğru tanım hangisidir?",
    options: ["Halter (dumbbell) şeklinde", "Küresel (küre şeklinde)", "Yonca yaprağı şeklinde", "Düzlemsel altıgen", "Silindirik"],
    correct: 1,
    explain: "s orbitali, çekirdek merkezli küresel simetriye sahiptir; elektronun bulunma olasılığı çekirdekten her yönde eşit uzaklıkta benzerdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Buse, p orbitalinin şeklini ve yönelimini araştırıyor.",
    text: "p orbitali için en doğru ifade hangisidir?",
    options: ["Küre şeklindedir ve tek yönelimi vardır", "Halter (iki loblu) şeklindedir ve üç farklı yönelimi (px, py, pz) vardır", "Beş farklı yönelimi vardır", "Yalnızca çekirdeğin içinde bulunur", "Elektron içermez"],
    correct: 1,
    explain: "p orbitalleri halter şeklindedir ve uzayda birbirine dik üç yönelimde bulunur: px, py, pz."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir tüketici, Pauli dışarlama (dışlama) ilkesini öğreniyor.",
    text: "Pauli ilkesine göre bir orbitalde en fazla kaç elektron bulunabilir?",
    options: ["1", "2", "3", "6", "10"],
    correct: 1,
    explain: "Pauli dışlama ilkesine göre bir orbitalde en fazla 2 elektron bulunabilir ve bu iki elektronun spinleri zıt yönde olmalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Zeynep, alt kabuklardaki (s, p, d, f) maksimum elektron sayılarını inceliyor.",
    text: "Bir s alt kabuğu en fazla kaç elektron alabilir?",
    options: ["6", "2", "10", "14", "1"],
    correct: 1,
    explain: "s alt kabuğunda yalnızca 1 orbital bulunur ve her orbital en fazla 2 elektron alabileceğinden, s alt kabuğu en fazla 2 elektron içerir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir grup öğrenci, p alt kabuğunun elektron kapasitesini hesaplıyor.",
    text: "Bir p alt kabuğu en fazla kaç elektron alabilir?",
    options: ["2", "6", "10", "3", "4"],
    correct: 1,
    explain: "p alt kabuğunda 3 orbital (px, py, pz) bulunur; her biri en fazla 2 elektron alabileceğinden toplam kapasite 6 elektrondur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Ayşe, d alt kabuğunun elektron kapasitesini araştırıyor.",
    text: "Bir d alt kabuğu en fazla kaç elektron alabilir?",
    options: ["6", "8", "10", "14", "5"],
    correct: 2,
    explain: "d alt kabuğunda 5 orbital bulunur; her biri en fazla 2 elektron alabileceğinden toplam kapasite 10 elektrondur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir eczacı, p alt kabuğundaki orbital sayısını sayıyor.",
    text: "p alt kabuğunda kaç orbital bulunur?",
    options: ["1", "2", "3", "5", "7"],
    correct: 2,
    explain: "p alt kabuğu, uzayda birbirine dik üç farklı yönelime sahip 3 orbitalden (px, py, pz) oluşur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Burak, d alt kabuğundaki orbital sayısını inceliyor.",
    text: "d alt kabuğunda kaç orbital bulunur?",
    options: ["3", "5", "7", "1", "10"],
    correct: 1,
    explain: "d alt kabuğu 5 farklı orbitalden oluşur; bu orbitallerin her biri kendine özgü uzaysal yönelime sahiptir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir bilim insanı, baş kuantum sayısı (n) kavramını öğreniyor.",
    text: "Baş kuantum sayısı (n) en doğru şekilde neyi ifade eder?",
    options: ["Elektronun spinini", "Elektronun bulunduğu ana enerji düzeyini (kabuğu)", "Orbitalin şeklini", "Elektronun yükünü", "Çekirdekteki nötron sayısını"],
    correct: 1,
    explain: "Baş kuantum sayısı (n = 1, 2, 3...), elektronun bulunduğu ana enerji düzeyini (kabuğu) belirtir; n arttıkça enerji düzeyi çekirdekten uzaklaşır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Can, Aufbau (yapılandırma) ilkesinin ne anlama geldiğini öğreniyor.",
    text: "Aufbau ilkesine göre elektronlar orbitallere nasıl yerleşir?",
    options: ["Önce en yüksek enerjili orbitalden başlayarak", "Önce en düşük enerjili boş orbitalden başlayarak, enerji arttıkça sırayla", "Tamamen rastgele sırayla", "Yalnızca s orbitallerine", "Yalnızca en dış kabuğa"],
    correct: 1,
    explain: "Aufbau ilkesine göre elektronlar, en düşük enerjili boş orbitalden başlayarak enerji arttıkça sırasıyla orbitallere yerleşir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Meraklı bir gözlemci, Hund kuralının ne söylediğini araştırıyor.",
    text: "Hund kuralına göre eş enerjili (dejenere) orbitallere elektronlar nasıl yerleşir?",
    options: ["Elektronlar her zaman ilk orbitalde eşleşerek başlar", "Önce her orbitale tek tek, aynı yönde spinle yerleşir; eşleşme ancak tüm orbitaller birer elektron aldıktan sonra başlar", "Elektronlar rastgele herhangi bir orbitale eşleşerek yerleşir", "Elektronlar yalnızca son orbitale yerleşir", "Hund kuralı yalnızca s orbitalleri için geçerlidir"],
    correct: 1,
    explain: "Hund kuralına göre eş enerjili orbitallere elektronlar önce tek tek ve aynı yönde spinle yerleşir; eşleşme, tüm orbitaller birer elektron aldıktan sonra başlar. Bu, elektron-elektron itmesini en aza indirir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Emre, karbonun (6C) elektron dizilimini yazıyor: 1s² 2s² 2p².",
    text: "Bu diziliş için hangisi doğrudur?",
    options: ["Karbon yalnızca s orbitallerine sahiptir", "Karbonun toplam elektron sayısı 2'dir", "Karbonun toplam 6 elektronu, dizilimdeki üslerin toplamına eşittir", "Dizilim yanlıştır, karbon 8 elektrona sahiptir", "Üsler elektronun kütlesini gösterir"],
    correct: 2,
    explain: "Elektron diziliminde üsler, o alt kabuktaki elektron sayısını gösterir; 2+2+2=6, karbonun atom numarasıyla (6) uyumludur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Selin, enerji düzeyi ile alt kabuk (alt düzey) kavramlarını karşılaştırıyor.",
    text: "'2p alt kabuğu' ifadesindeki '2' ve 'p' neyi belirtir?",
    options: ["2, nötron sayısını; p, pozitif yükü belirtir", "2, elektron sayısını; p, protonu belirtir", "2, baş kuantum sayısını (enerji düzeyini); p, orbital türünü (şeklini) belirtir", "İkisi de rastgele semboldür, anlamı yoktur", "2, atomun kütle numarasını belirtir"],
    correct: 2,
    explain: "'2p' ifadesinde 2, baş kuantum sayısını (n=2, ikinci enerji düzeyi); p ise orbital türünü (p orbitali) belirtir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir güvenlik uzmanı, n=2 enerji düzeyindeki toplam orbital sayısını hesaplamak istiyor (2s ve 2p alt kabukları).",
    text: "n=2 düzeyinde toplam kaç orbital bulunur?",
    options: ["1", "2", "4", "5", "9"],
    correct: 2,
    explain: "n=2 düzeyinde 1 tane 2s orbitali ve 3 tane 2p orbitali bulunur; toplamda 1+3=4 orbital vardır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Ece, aynı enerji düzeyindeki (n) s ve p orbitallerinin enerjilerini karşılaştırıyor.",
    text: "Aynı baş kuantum sayısına (n) sahip s ve p orbitalleri için hangisi doğrudur?",
    options: ["İkisi her zaman tam olarak eşit enerjilidir", "p orbitali her zaman s orbitalinden daha düşük enerjilidir", "s orbitali her zaman p orbitalinden daha düşük enerjilidir", "Enerjileri karşılaştırılamaz", "s orbitali her zaman d orbitalinden yüksek enerjilidir"],
    correct: 2,
    explain: "Aynı n değeri için orbital enerjisi s < p < d < f sırasıyla artar; bu nedenle örneğin 3s orbitali 3p'den daha düşük enerjilidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Kerem, elektron dizilimi yazarken 4s ve 3d orbitallerinin doldurulma sırasını merak ediyor.",
    text: "Enerji sırasına göre elektronlar hangi orbitale önce yerleşir?",
    options: ["İkisine aynı anda", "3d orbitaline", "4s orbitaline", "Hiçbirine, doğrudan 4p'ye geçilir", "Sıra elementten elemente rastgele değişir"],
    correct: 2,
    explain: "Genel enerji sıralamasına göre (n+l kuralı) 4s orbitali (4+0=4), 3d orbitalinden (3+2=5) daha düşük enerjilidir; bu yüzden elektronlar önce 4s'ye yerleşir."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Aşağıdaki tabloda orbital türlerinin temel özellikleri karşılaştırılmaktadır.",
    table: {
      headers: ["Orbital türü", "Yörünge açısal momentum sayısı (l)", "Orbital sayısı", "Maksimum elektron"],
      rows: [
        ["s", "0", "1", "2"],
        ["p", "1", "3", "6"],
        ["d", "2", "5", "10"],
        ["f", "3", "7", "14"]
      ]
    },
    text: "Tabloya göre bir f alt kabuğu tamamen dolduğunda kaç elektron içerir?",
    options: ["6", "10", "14", "7", "2"],
    correct: 2,
    explain: "Tabloya göre f alt kabuğu 7 orbitale sahiptir ve her orbital en fazla 2 elektron alabileceğinden, tam dolu bir f alt kabuğu 14 elektron içerir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Aşağıdaki grafik, ilk birkaç orbitalin yaklaşık bağıl enerji sırasını göstermektedir (birim keyfi ölçektedir).",
    chart: {
      type: "bar",
      title: "Orbitallerin yaklaşık bağıl enerji sırası",
      labels: ["1s", "2s", "2p", "3s", "3p", "4s", "3d"],
      values: [1, 2, 2.5, 3, 3.5, 4, 4.2]
    },
    text: "Grafiğe göre enerji bakımından 4s ile 3d orbitalleri hakkında en doğru çıkarım hangisidir?",
    options: [
      "4s ve 3d orbitalleri arasında hiçbir enerji farkı yoktur",
      "3d orbitali her zaman 4s'den çok daha düşük enerjilidir",
      "4s orbitali 3d'den biraz daha düşük enerjilidir, bu nedenle elektronlar önce 4s'yi doldurur",
      "3d orbitali 1s'den daha düşük enerjilidir",
      "4s orbitali her elementte 3d'den çok daha yüksek enerjilidir"
    ],
    correct: 2,
    explain: "Grafikteki yaklaşık değerlere göre 4s (4,0), 3d'den (4,2) biraz daha düşük enerjilidir; bu, elektronların Aufbau ilkesine göre önce 4s'yi doldurmasının nedenidir. Ancak bu fark küçüktür ve bazı elementlerde (Cr, Cu gibi) sıralama istisnalar gösterebilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir itfaiyeci, azotun (7N) elektron dizilimini yazarken 2p orbitallerine elektronları yerleştiriyor: 2p³.",
    text: "Hund kuralına göre bu üç elektron 2p orbitallerine (px, py, pz) en doğru nasıl yerleşir?",
    options: [
      "Üç elektron da aynı orbitale sığdırılır",
      "İlk orbitale iki elektron eşleşerek, üçüncü orbital boş kalır",
      "Her orbitale birer elektron, hepsi aynı yönde spinle (paralel spin)",
      "Elektronlar rastgele, herhangi bir kurala uymadan dağıtılır",
      "Elektronlar yalnızca px orbitaline yerleşir"
    ],
    correct: 2,
    explain: "Hund kuralına göre eş enerjili üç p orbitaline üç elektron, her orbitale birer tane ve aynı yönde (paralel) spinle yerleşir; bu düzenleme elektron-elektron itmesini minimize eder ve en kararlı durumu oluşturur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir aşçı, bir orbital diyagramında iki elektronun aynı orbitalde aynı yönde ok (↑↑) ile gösterildiği hatalı bir çizimle karşılaşıyor.",
    text: "Bu çizim hangi ilkeyi ihlal etmektedir?",
    options: ["Kütlenin korunumu kanununu", "Hund kuralını", "Aufbau ilkesini", "Pauli dışlama ilkesini", "Heisenberg belirsizlik ilkesini"],
    correct: 3,
    explain: "Aynı orbitaldeki iki elektronun aynı spin yönünde olması Pauli dışlama ilkesine aykırıdır; bir orbitaldeki iki elektron zıt spinli olmalıdır (↑↓)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir stajyer, oksijenin (8O) elektron dizilimini 1s² 2s² 2p⁴ olarak yazıyor ve 2p orbitallerindeki elektron dağılımını çiziyor.",
    text: "Hund kuralına göre 2p⁴ orbital dağılımı en doğru hangi şekilde gösterilir?",
    options: [
      "Elektronlar yalnızca px ve py'ye, pz her zaman boş kalır",
      "Dört elektronun tamamı tek bir orbitale sıkıştırılır",
      "Üç orbitalin her birinde birer elektron, dördüncü elektron orbital dışında kalır",
      "Üç orbitalin ikisinde birer elektron, birinde iki eşleşmiş elektron (↑↓)(↑)(↑)",
      "Elektronların hepsi zıt spinli olarak aynı orbitale yerleşir"
    ],
    correct: 3,
    explain: "2p⁴ için önce üç orbitale birer elektron paralel spinle yerleştirilir (Hund kuralı); dördüncü elektron ise bu orbitallerden birine zıt spinle eşleşerek girer — sonuç: bir orbitalde 2, diğer ikisinde 1'er elektron."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir sağlık çalışanı, iyonlaşma sırasında geçiş metallerinin (örneğin demir, Fe) önce hangi orbitalden elektron kaybettiğini araştırıyor.",
    text: "Fe atomu iyonlaşırken (elektron kaybederken) elektronlar önce hangi orbitalden ayrılır?",
    options: ["1s orbitalinden", "3d orbitalinden", "3p orbitalinden", "4s orbitalinden", "Hepsinden eşit oranda"],
    correct: 3,
    explain: "İlginç biçimde, dolum sırasında 4s önce dolsa da (Aufbau), iyonlaşma sırasında elektronlar önce 4s orbitalinden ayrılır; çünkü iyonlaşmış durumda 3d orbitalinin enerjisi 4s'ninkinden daha düşük hale gelir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir spor yapan kişi, azot (N, 7 elektron) ile oksijen (O, 8 elektron) atomlarının 2p orbitallerindeki elektron dağılımını karşılaştırıyor.",
    text: "Azotun 2p³ dağılımı, oksijenin 2p⁴ dağılımına göre en doğru hangi açıdan farklıdır?",
    options: [
      "İki atomda da elektron dağılımı birebir aynıdır",
      "Azotta hiç elektron eşleşmesi yokken oksijende de hiç eşleşme yoktur",
      "Azotta tüm elektronlar eşleşmişken oksijende hiçbiri eşleşmemiştir",
      "Azotta üç orbitalin her birinde birer eşlenmemiş elektron varken, oksijende bir orbitalde elektronlar eşleşmiştir",
      "Azotta elektronlar d orbitaline taşar"
    ],
    correct: 3,
    explain: "Azotta (2p³) yarı dolu p alt kabuğu nedeniyle üç orbitalin her birinde birer eşlenmemiş elektron bulunur; oksijende (2p⁴) ise bir orbitalde elektronlar eşleşmek zorundadır, bu da azotun görece kararlılığını (yarı dolu kabuk kararlılığı) açıklar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir turist, n+l kuralının (Madelung kuralı) orbital enerji sırasını tahmin etmek için kullanıldığını öğreniyor: küçük (n+l) toplamı daha düşük enerji anlamına gelir; eşitlik durumunda küçük n önceliklidir.",
    text: "Bu kurala göre 3d (n+l=3+2=5) ile 4p (n+l=4+1=5) orbitalleri karşılaştırıldığında hangisi daha düşük enerjilidir?",
    options: ["4p her zaman 3d'den önce dolar", "4p, çünkü n+l eşit olduğunda büyük n önceliklidir", "İkisi de tam olarak eşit enerjilidir, sıralama yapılamaz", "3d, çünkü n+l eşit olduğunda küçük n önceliklidir", "Bu kural yalnızca s orbitalleri için geçerlidir"],
    correct: 3,
    explain: "n+l kuralına göre iki orbitalin (n+l) toplamı eşitse, daha küçük n değerine sahip olan daha düşük enerjilidir; 3d ve 4p'de n+l=5 eşit olduğundan, n=3 olan 3d daha düşük enerjilidir ve önce dolar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir teknisyen, bir orbital diyagramında 2s orbitali dolu, 2p orbitallerinden yalnızca biri elektron içeren bir azot atomunun eksik/hatalı bir dizilimiyle karşılaşıyor: (↑↓)(↑↓)( )( )",
    text: "Bu diyagram Hund kuralı açısından neden hatalıdır?",
    options: [
      "Diyagramda fazla elektron gösterilmiştir",
      "Diyagramda hiçbir hata yoktur",
      "2s orbitali hiç elektron içermemelidir",
      "Üç eş enerjili 2p orbitaline elektronlar tek tek dağıtılmadan bir orbitalde toplanmıştır",
      "Hund kuralı yalnızca d orbitalleri için geçerlidir, bu diyagramla ilgisizdir"
    ],
    correct: 3,
    explain: "Azotun 2p³ dağılımında Hund kuralına göre üç elektron üç ayrı orbitale birer tane, paralel spinle dağıtılmalıdır; verilen diyagramda elektronların bir orbitalde toplanması (eşleşmesi) hatalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir mühendis, çekirdek yükünün (proton sayısının) artmasının orbital enerjileri üzerindeki etkisini araştırıyor.",
    text: "Aynı orbital türü (örneğin 2s) için çekirdek yükü arttıkça (elektron sayısı sabit tutulduğunda) orbital enerjisi genel olarak nasıl değişir?",
    options: [
      "Orbital tamamen kaybolur",
      "Orbital enerjisi hiç değişmez",
      "Orbital enerjisi her zaman artar",
      "Elektronlar çekirdeğe daha güçlü çekildiğinden orbital enerjisi düşer (daha negatif/kararlı hale gelir)",
      "Orbital enerjisi rastgele değişir"
    ],
    correct: 3,
    explain: "Çekirdek yükü arttıkça elektron ile çekirdek arasındaki çekim kuvveti artar; bu, elektronun bulunduğu orbitali enerji bakımından daha düşük (daha kararlı) hale getirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir ev hanımı, iç kabuk elektronlarının dış kabuktaki elektronlar üzerindeki 'perdeleme (ekranlama) etkisini' araştırıyor.",
    text: "Perdeleme etkisi, dış kabuktaki bir elektronun hissettiği etkin çekirdek yükünü en doğru şekilde nasıl etkiler?",
    options: [
      "Perdeleme yalnızca d orbitallerinde görülür",
      "Perdeleme etkisi, dış elektronun hissettiği çekirdek yükünü artırır",
      "Perdeleme etkisinin orbital enerjisiyle hiçbir ilgisi yoktur",
      "İç kabuk elektronları çekirdeğin pozitif yükünü kısmen perdeler, bu yüzden dış elektronun hissettiği etkin yük gerçek çekirdek yükünden küçüktür",
      "Perdeleme etkisi çekirdek yükünü tam olarak sıfırlar"
    ],
    correct: 3,
    explain: "İç kabuktaki elektronlar, çekirdeğin pozitif yükünü dış elektronlara karşı kısmen perdeler (ekranlar); bu nedenle dış elektronun hissettiği 'etkin çekirdek yükü', gerçek çekirdek yükünden daha küçüktür."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir bahçıvan, aynı n değerine sahip s, p, d orbitallerinin çekirdeğe olan 'nüfuz etme (penetrasyon)' derecelerini karşılaştırıyor.",
    text: "Aynı n değeri için orbitallerin çekirdeğe nüfuz etme derecesi ve buna bağlı enerji sıralaması için en doğru ifade hangisidir?",
    options: [
      "Nüfuz etme derecesi orbital enerjisiyle hiçbir ilişkisi yoktur",
      "d orbitali çekirdeğe en çok nüfuz eder ve en düşük enerjilidir",
      "Tüm orbitaller çekirdeğe eşit derecede nüfuz eder",
      "s orbitali çekirdeğe en çok nüfuz eder ve bu nedenle en düşük enerjilidir; nüfuz etme s>p>d>f sırasıyla azalır",
      "f orbitali her zaman en düşük enerjilidir"
    ],
    correct: 3,
    explain: "Aynı n değeri için s orbitali çekirdeğe en fazla nüfuz eder (çekirdeğe yakın bulunma olasılığı daha yüksektir), bu da onu en düşük enerjili yapar; nüfuz etme derecesi s>p>d>f sırasıyla azalır ve enerji buna paralel olarak artar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir doktora öğrencisi, potasyumun (19K) elektron dizilimini yazmaya çalışırken 3d orbitaline mi yoksa 4s orbitaline mi önce elektron yerleştireceğini düşünüyor.",
    text: "Potasyumun en dıştaki (19.) elektronu hangi orbitale yerleşir?",
    options: ["4p orbitaline", "3d orbitaline", "3p orbitaline", "4s orbitaline", "4d orbitaline"],
    correct: 3,
    explain: "Enerji sırasına göre 4s orbitali 3d'den daha düşük enerjilidir; bu yüzden potasyumun 19. elektronu 3d yerine 4s orbitaline yerleşir ([Ar] 4s¹)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Ali, bir atomun taban (temel) hâl elektron dizilimi ile uyarılmış hâl dizilimi arasındaki farkı araştırıyor.",
    text: "Bir atomun 'uyarılmış hâl'i için en doğru tanım hangisidir?",
    options: [
      "Atomun nötr olmadığı durum",
      "Atomun tüm elektronlarını kaybettiği durum",
      "Atomun proton sayısının değiştiği durum",
      "Atomun her zaman bulunduğu en kararlı durum",
      "Bir veya daha fazla elektronun enerji soğurarak normalden daha yüksek enerjili bir orbitale geçtiği geçici durum"
    ],
    correct: 4,
    explain: "Uyarılmış hâl, bir atomun elektronlarından birinin (veya birkaçının) enerji soğurarak taban haldeki orbitalinden daha yüksek enerjili bir orbitale geçtiği, genellikle kısa süreli ve kararsız bir durumdur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir analitik kimyager, sodyumun (11Na) elektron dizilimini 1s² 2s² 2p⁶ 3s¹ olarak yazıyor ve bunu [Ne] 3s¹ şeklinde kısaltıyor.",
    text: "Bu kısaltılmış gösterimde [Ne] neyi ifade eder?",
    options: [
      "Hiçbir anlamı yoktur, sadece kısaltmadır",
      "Sodyumun neon ile aynı element olduğunu gösterir",
      "Neon gazının atom ağırlığını gösterir",
      "Sodyumun neondan bir proton fazla olduğunu gösterir",
      "Neon atomunun tamamlanmış elektron dizilimini (iç kabuk elektronlarını) temsil eder"
    ],
    correct: 4,
    explain: "[Ne] gösterimi, sodyumun iç kabuk elektronlarının neon atomunun tam dolu elektron dizilimiyle (1s² 2s² 2p⁶) aynı olduğunu belirtir; bu, elektron dizilimini kısa ve pratik biçimde yazmayı sağlar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Deniz, elektron dizilimi yazarken 3s, 3p, 3d orbitallerinin aynı n=3 düzeyinde olmasına rağmen enerjilerinin farklı olduğunu fark ediyor.",
    text: "Aynı n değerine (n=3) sahip olmalarına rağmen 3s, 3p, 3d orbitallerinin enerjilerinin farklı olmasının temel nedeni en doğru hangisidir?",
    options: [
      "Orbitallerin rengi farklı olduğu için",
      "Bu orbitallerin elektron sayıları farklı olduğu için",
      "3d orbitali her zaman 3s'den daha az elektron içerdiği için",
      "Bu farklılık yalnızca hidrojen atomunda görülür, çok elektronlu atomlarda yoktur",
      "Orbital türü (açısal momentum kuantum sayısı l) farklı olduğundan, çekirdeğe nüfuz etme ve perdeleme dereceleri de farklıdır"
    ],
    correct: 4,
    explain: "Çok elektronlu atomlarda, aynı n değerine sahip olsalar bile s, p, d orbitalleri farklı l değerlerine (farklı şekil ve nüfuz etme derecelerine) sahip olduğundan enerjileri farklıdır; bu fark tek elektronlu hidrojen atomunda görülmez (orada yalnızca n enerjiyi belirler)."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Onur, kromun (24Cr) beklenen elektron diziliminin [Ar] 4s² 3d⁴ olacağını hesaplıyor, ancak gerçek dizilimin [Ar] 4s¹ 3d⁵ olduğunu öğreniyor.",
    text: "Bu farkın en olası bilimsel açıklaması hangisidir?",
    options: [
      "4s orbitali kromda hiç elektron içermez",
      "Krom atomunda hesaplama hatası vardır, gerçek dizilim [Ar] 4s² 3d⁴ olmalıdır",
      "Kromun proton sayısı yanlış bilinmektedir",
      "Bu farkın hiçbir bilimsel açıklaması yoktur, tamamen rastlantısaldır",
      "Yarı dolu (d⁵) bir d alt kabuğunun simetrik elektron dağılımı ve azalan elektron-elektron itmesi ekstra bir kararlılık sağlar; bu enerji kazancı bir 4s elektronunun 3d'ye geçmesini enerjik olarak avantajlı kılar"
    ],
    correct: 4,
    explain: "Yarı dolu (d⁵) ve tam dolu (d¹⁰) d alt kabukları, simetrik elektron dağılımı nedeniyle ekstra kararlılık kazanır; bu kararlılık kazancı, kromda bir 4s elektronunun 3d'ye geçerek [Ar] 4s¹ 3d⁵ dizilimini oluşturmasını enerjik olarak avantajlı kılar (n+l kuralının bir istisnası)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir akademisyen, bakırın (29Cu) beklenen elektron diziliminin [Ar] 4s² 3d⁹ olacağını hesaplıyor, ancak gerçek dizilimin [Ar] 4s¹ 3d¹⁰ olduğunu öğreniyor.",
    text: "Bakırdaki bu istisnanın kromdakiyle ortak temel nedeni en doğru hangisidir?",
    options: [
      "Bakırın atom numarası hesaplama hatasına yol açar",
      "Bakır ve krom arasında hiçbir ortak neden yoktur, tamamen farklı mekanizmalardır",
      "Bakırda 4s orbitali hiç var olmaz",
      "Bu istisna yalnızca bakıra özgüdür, kromla ilgisizdir",
      "Tam dolu (d¹⁰) bir alt kabuğun sağladığı ekstra kararlılık, bir 4s elektronunun 3d'ye geçmesini enerjik olarak avantajlı kılar"
    ],
    correct: 4,
    explain: "Kromdaki yarı dolu (d⁵) kararlılığına benzer şekilde, bakırda tam dolu (d¹⁰) alt kabuğun simetrik ve düşük enerjili elektron dağılımı, bir 4s elektronunun 3d'ye geçmesini enerjik olarak avantajlı kılar; her iki istisna da 'dolu/yarı dolu alt kabuk kararlılığı' ilkesine dayanır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Aşağıdaki tabloda Cr ve Cu elementlerinin n+l kuralına göre 'beklenen' ve deneysel olarak gözlemlenen 'gerçek' elektron dizilimleri karşılaştırılmaktadır.",
    table: {
      headers: ["Element", "Beklenen dizilim (n+l kuralı)", "Gerçek dizilim"],
      rows: [
        ["Cr (24)", "[Ar] 4s² 3d⁴", "[Ar] 4s¹ 3d⁵"],
        ["Cu (29)", "[Ar] 4s² 3d⁹", "[Ar] 4s¹ 3d¹⁰"]
      ]
    },
    text: "Tablodaki bu iki istisna, n+l kuralı (Aufbau ilkesi) hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Cr ve Cu, periyodik tablodaki tek istisna elementlerdir ve başka hiçbir element benzer davranış göstermez",
      "n+l kuralı tamamen geçersizdir ve hiçbir element için kullanılamaz",
      "Bu istisnalar yalnızca deney hatasından kaynaklanır, gerçek dizilim tablodaki 'beklenen' sütunla aynı olmalıdır",
      "n+l kuralı yalnızca soy gazlar için geçerlidir",
      "n+l kuralı çoğu element için iyi bir tahmin aracı olsa da, elektron-elektron etkileşimlerinden kaynaklanan ekstra kararlılık etkileri nedeniyle bazı istisnalar gösterebilir"
    ],
    correct: 4,
    explain: "n+l kuralı (Aufbau ilkesi), basit bir tek-elektron yaklaşımına dayandığından çoğu element için iyi çalışır; ancak Cr ve Cu gibi örneklerde, yarı dolu/tam dolu d alt kabuğunun sağladığı ekstra kararlılık (elektron-elektron etkileşimlerinden kaynaklanan) kuralın basit tahminini geçersiz kılar. Bu, modellerin yaklaşık olduğunu ve istisnaların olabileceğini gösterir (Cr, Cu dışında Mo, Ag gibi başka istisna örnekleri de vardır)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir kariyer danışmanı, orbital enerjilerinin tahmin edilmesinde kullanılan n+l kuralının, çok elektronlu atomlardaki elektron-elektron itmelerini tam olarak hesaba katan matematiksel bir formülden değil, deneysel gözlemlere dayalı ampirik bir genelleme olduğunu öğreniyor.",
    text: "Bu bilgi, n+l kuralının bilimsel statüsü hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "n+l kuralı tüm istisnaları da kapsayacak şekilde kusursuzdur",
      "Ampirik kurallar bilimsel olarak hiçbir değer taşımaz",
      "n+l kuralı matematiksel değil, tamamen tahminidir ve rastgele sonuç verir",
      "Ampirik bir kuralın istisna göstermesi, o kuralın tamamen kullanılamaz olduğu anlamına gelir",
      "Ampirik bir kural olarak n+l kuralı, çoğu durumda güvenilir tahminler sağlasa da, tüm karmaşık elektron etkileşimlerini kusursuz biçimde modelleyen tam bir teori değildir; bu yüzden istisnalar beklenebilir"
    ],
    correct: 4,
    explain: "n+l kuralı gibi ampirik genellemeler, karmaşık sistemleri basitleştirilmiş biçimde modellediğinden çoğu durumda faydalı tahminler sağlar; ancak çok elektronlu atomlardaki tüm etkileşimleri (örneğin dolu/yarı dolu kabuk kararlılığı) tam olarak hesaba katmadığından, bazı istisnalar (Cr, Cu vb.) beklenebilir bir durumdur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir araştırmacı, molibdenin (42Mo) elektron diziliminin de [Kr] 5s² 4d⁴ yerine [Kr] 5s¹ 4d⁵ şeklinde gerçekleştiğini öğreniyor; bu, kromla (Cr) aynı türde bir istisnadır.",
    text: "Bu bilgi, Cr'deki istisnanın genellenebilirliği hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bu benzerlik tamamen tesadüftür ve hiçbir kimyasal anlamı yoktur",
      "Mo'nun istisnası Cr'yle hiçbir şekilde ilişkili değildir, tamamen farklı bir nedenden kaynaklanır",
      "Bu, periyodik tablodaki tüm elementlerin aynı istisnayı göstereceği anlamına gelir",
      "Mo'nun elektron dizilimi hakkındaki bilgi yanlıştır, çünkü yalnızca Cr istisna olabilir",
      "Yarı dolu d alt kabuğunun sağladığı ekstra kararlılık etkisi, Cr'ye özgü tek bir 'anomali' değil, benzer elektron yapısına sahip başka elementlerde de (örneğin aynı grup) tekrarlanabilen sistematik bir eğilimdir"
    ],
    correct: 4,
    explain: "Mo, Cr ile aynı grupta (6. grup) yer alır ve benzer elektron yapısı taşıdığından, yarı dolu d alt kabuk kararlılığı etkisi burada da görülür; bu, istisnanın rastgele değil, benzer elektronik yapıya sahip elementlerde sistematik olarak tekrarlanabilen bir eğilim olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir laboratuvar teknisyeni, orbital enerji sıralamasının atom numarasına (Z) bağlı olarak değiştiğini; örneğin hafif elementlerde 3d ile 4s arasındaki enerji farkının, ağır elementlerdekinden farklı olabileceğini öğreniyor.",
    text: "Bu bilgi, orbital enerjileri hakkında yapılan tahminler için en doğru hangi çıkarımı destekler?",
    options: [
      "Orbital enerji sırası yalnızca soy gazlarda değişir",
      "Orbital enerjileri her elementte birebir aynıdır, hiçbir zaman değişmez",
      "Atom numarasının orbital enerjisiyle hiçbir ilişkisi yoktur",
      "Yalnızca 1s orbitalinin enerjisi elementten elemente değişir, diğerleri sabittir",
      "Orbital enerjilerinin bağıl sırası sabit/evrensel bir sabit değildir; çekirdek yükü ve elektron sayısı değiştikçe (farklı elementlerde) bağıl enerji sırası da değişebilir"
    ],
    correct: 4,
    explain: "Orbital enerjilerinin bağıl sırası, çekirdek yükü ve elektron-elektron etkileşimlerine bağlı olarak elementten elemente değişebilir; bu yüzden genel orbital enerji diyagramları (örneğin n+l kuralı) bir 'ortalama eğilim' sunar, ancak her element için birebir sabit bir sıralama garanti etmez — bu, bazı geçiş metallerindeki istisnaların da temel nedenlerinden biridir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir laboratuvar ekibi, kararlı bir atomun elektron diziliminin her zaman 'en düşük toplam enerjili' düzenleme olacağı ilkesini, Cr ve Cu istisnalarıyla birlikte yeniden değerlendiriyor.",
    text: "Bu değerlendirmeden çıkarılabilecek en doğru genel ilke hangisidir?",
    options: [
      "Cr ve Cu'nun dizilimleri kararsızdır ve zamanla 'beklenen' dizilime döner",
      "'En düşük enerji' ilkesi Cr ve Cu için geçersizdir, bu elementler enerjiyi önemsemez",
      "Toplam sistem enerjisi kavramı yalnızca teorik fizikte kullanılır, kimyada anlamı yoktur",
      "Orbital enerjisi ile toplam sistem enerjisi her zaman birebir aynı sonucu verir",
      "'En düşük enerji' ilkesi yalnızca tek tek orbital enerjilerine değil, elektron-elektron itmesi, değişim enerjisi gibi tüm katkıları içeren toplam sistem enerjisine bakılarak değerlendirilmelidir"
    ],
    correct: 4,
    explain: "Bir atomun gerçek taban hâli, yalnızca bireysel orbital enerjilerinin toplamıyla değil; elektron-elektron itmesi, değişim (exchange) enerjisi gibi tüm katkıları içeren toplam sistem enerjisiyle belirlenir. Cr ve Cu'da d⁵/d¹⁰ dağılımının sağladığı ekstra değişim enerjisi kazancı, basit orbital enerji sıralamasının öngördüğü dizilimden daha düşük toplam enerjili bir düzenleme oluşturur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir hemşire, orbital enerji diyagramlarının genellikle basitleştirilmiş, tek boyutlu bir 'merdiven' şeklinde çizildiğini, ancak gerçekte orbital enerjilerinin çekirdek yükü, elektron sayısı ve elektron etkileşimlerine bağlı çok değişkenli bir fonksiyon olduğunu öğreniyor.",
    text: "Bu bilgi, orbital enerji diyagramlarının eğitimde kullanımı hakkında en dengeli hangi değerlendirmeyi destekler?",
    options: [
      "Basitleştirilmiş diyagramlar, temel eğilimleri (örneğin genel dolum sırasını) öğretmek için pedagojik olarak faydalıdır; ancak tüm istisnaları açıklayabilecek kadar kapsamlı değildir ve bu sınır bilinmelidir",
      "Basitleştirilmiş diyagramlar tamamen yanlış olduğundan hiç kullanılmamalıdır",
      "Gerçek orbital enerjileri sabittir, diyagramların basitleştirilmiş olması önemsizdir",
      "Öğrencilere yalnızca istisnalar öğretilmeli, genel kural hiç öğretilmemelidir",
      "Orbital enerji diyagramlarının pedagojik değeri yoktur"
    ],
    correct: 0,
    explain: "Basitleştirilmiş orbital enerji diyagramları, temel dolum eğilimini (Aufbau sırasını) sezgisel biçimde öğretmek için pedagojik olarak faydalıdır; ancak gerçek orbital enerjilerinin çok değişkenli doğası nedeniyle Cr, Cu gibi istisnaları tam açıklayamayabilir — bu sınırlılığın bilinmesi, modelin doğru kullanımı için önemlidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Mehmet, gümüşün (47Ag) elektron diziliminin [Kr] 5s² 4d⁹ yerine [Kr] 5s¹ 4d¹⁰ olduğunu öğrenip bunu bakırla (Cu) karşılaştırıyor.",
    text: "Ag'nin bu dizilimi, periyodik tablodaki istisna örüntüsü hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Cu ve Ag aynı grupta (11. grup) yer aldığından, tam dolu d alt kabuk kararlılığı etkisi bu grupta tekrarlanan, grup içi bir eğilim olarak görülür",
      "Ag'nin istisnası Cu'nunkiyle hiçbir bağlantısı olmayan, tamamen bağımsız bir olaydır",
      "Bu benzerlik yalnızca tesadüftür ve grup ilişkisiyle açıklanamaz",
      "Ag ve Cu farklı gruplarda olduğundan bu karşılaştırma anlamsızdır",
      "Bu istisna yalnızca değerli metallerde (altın, gümüş) görülür, başka hiçbir nedeni yoktur"
    ],
    correct: 0,
    explain: "Cu ve Ag aynı grupta (11. grup, bakır grubu) yer alır ve benzer elektron yapısına sahiptir; bu nedenle tam dolu d alt kabuğun sağladığı kararlılık etkisi bu grup boyunca tekrarlanan sistematik bir eğilimdir (grup elementi Au için de benzer bir istisna gözlenir) — bu, istisnaların periyodik tabloda gruplar hâlinde örüntü oluşturabileceğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Sınıftaki öğrenciler, orbital kavramının kuantum mekaniğinin olasılıksal doğasına dayandığını; bu nedenle bir orbitalin 'şekli' denildiğinde aslında elektronun belirli bir bölgede bulunma olasılığının belirli bir yüzdesini (örneğin %90) içeren sınır yüzeyinin kastedildiğini öğreniyor.",
    text: "Bu bilgi, orbital 'şekli' kavramının doğru yorumlanması için en önemli hangi uyarıyı içerir?",
    options: [
      "Orbital şekli, elektronun kesin sınırlarla çevrili katı bir 'kutusu' değil, olasılık yoğunluğunun belirli bir eşiği aştığı bölgeyi gösteren istatistiksel bir temsildir",
      "Orbital şekli, elektronun tam ve kesin konumunu gösteren katı bir cisimdir",
      "Orbital şekli tamamen keyfi çizilir, hiçbir fiziksel temeli yoktur",
      "Orbital sınırının dışında elektron bulunma olasılığı tam olarak sıfırdır",
      "Orbital şekli yalnızca s orbitalleri için olasılıksal, diğerleri için kesindir"
    ],
    correct: 0,
    explain: "Orbital 'şekli', elektronun kesin sınırlı bir 'kutusunu' değil, belirli bir olasılık eşiğini (genellikle ~%90) aşan bölgenin sınır yüzeyini temsil eder; bu sınırın hemen dışında da (küçük olasılıkla) elektron bulunabilir — bu, kuantum mekaniğinin temel olasılıksal doğasının bir yansımasıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Elif, periyodik tabloda geçiş metalleri bloğunun (d bloğu) neden 4. periyottan itibaren başladığını, 3. periyotta d orbitali olmasına rağmen bu bloğun neden orada görünmediğini sorguluyor.",
    text: "Bu durumun en doğru açıklaması hangisidir?",
    options: [
      "3d orbitali enerji bakımından 4s'den sonra dolduğundan, 3d orbitallerinin dolumu ancak 4. periyotta (4s dolduktan sonra) gerçekleşir; bu yüzden d bloğu görünürde 4. periyottan başlar",
      "3. periyotta d orbitali fiziksel olarak yoktur",
      "d bloğunun periyottaki konumu tamamen keyfi seçilmiştir, enerjiyle ilgisi yoktur",
      "3d orbitali yalnızca ağır elementlerde var olabilir",
      "d bloğu aslında 2. periyotta başlar ama gösterilmez"
    ],
    correct: 0,
    explain: "3d orbitali kuantum mekaniksel olarak n=3 düzeyine ait olsa da, enerji bakımından 4s'den sonra dolduğu için, periyodik tabloda elektron dizilimi sırasına göre düzenlenen bloklar açısından d bloğu 4. periyottan itibaren görünür hale gelir; bu, orbital enerji sırasının periyodik tablo yapısını doğrudan etkilediğinin somut bir örneğidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir laborant, klorun (17Cl) elektron dizilimini [Ne] 3s² 3p⁵ olarak yazıyor ve 3p orbitallerindeki dağılımı inceliyor.",
    text: "Klorun 3p⁵ dağılımı için Hund kuralına uygun en doğru orbital diyagramı hangisidir?",
    options: [
      "Üç orbitalin ikisinde eşleşmiş (2'şer), birinde tek (1) elektron bulunur",
      "Üç orbitalin hepsinde birer elektron bulunur, ikisi boş kalır",
      "Beş elektronun tamamı tek bir orbitalde toplanır",
      "Üç orbitalin hepsi tamamen boş kalır",
      "Elektronlar 3d orbitaline taşar"
    ],
    correct: 0,
    explain: "3p⁵ için önce üç orbitale birer elektron paralel spinle yerleştirilir; kalan iki elektron sırayla mevcut orbitallerden ikisine eşleşerek girer — sonuçta iki orbitalde 2'şer, bir orbitalde 1 elektron bulunur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir gıda mühendisi, altının (79Au) elektron diziliminin de [Xe] 6s² 4f¹⁴ 5d⁹ yerine [Xe] 6s¹ 4f¹⁴ 5d¹⁰ şeklinde gerçekleştiğini öğreniyor.",
    text: "Bu bilgi, tam dolu d alt kabuk kararlılığı ilkesinin kapsamı hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bu istisna örüntüsü yalnızca 3d ve 4d serilerine özgü değildir; 5d serisinde (Au, Cu-Ag-Au grubunda) de aynı kararlılık mekanizması geçerlidir",
      "Au'nun istisnası Cu ve Ag'den tamamen farklı, ilgisiz bir nedene dayanır",
      "5d orbitalleri hiçbir zaman istisna göstermez, bu bilgi yanlıştır",
      "Bu istisna yalnızca radyoaktif elementlerde görülür",
      "Au'nun elektron dizilimi periyodik tablo ile hiçbir ilişki taşımaz"
    ],
    correct: 0,
    explain: "Au, Cu ve Ag ile aynı grupta (11. grup) yer aldığından, tam dolu d alt kabuğun (d¹⁰) sağladığı kararlılık etkisi 3d, 4d ve 5d serilerinin hepsinde tutarlı biçimde görülür; bu, istisnanın tek bir seriye özgü olmayıp elektronik yapı benzerliğine dayalı sistematik bir eğilim olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Meraklı bir öğrenci, bir bilim insanının 'Aufbau ilkesi bir doğa yasası değil, çoğu element için işe yarayan güçlü bir tahmin aracıdır' şeklindeki açıklamasını okuyor.",
    text: "Bu açıklama, bilimsel ilke ve kurallar arasındaki fark hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bazı bilimsel 'kurallar', altında yatan daha temel fiziksel gerçekliğin (elektron-elektron etkileşimleri, kuantum mekaniği) basitleştirilmiş bir yaklaşımıdır ve bu nedenle her durumda kusursuz çalışmayabilir",
      "Aufbau ilkesi bir 'kural' olduğu için her koşulda istisnasız geçerli olmalıdır",
      "Doğa yasaları ile tahmin araçları arasında hiçbir fark yoktur",
      "Bu açıklama Aufbau ilkesinin tamamen değersiz olduğunu ima eder",
      "Yalnızca 'yasa' olarak adlandırılan kurallar bilimsel kabul edilir, diğerleri değildir"
    ],
    correct: 0,
    explain: "Aufbau ilkesi gibi kurallar, atomun karmaşık kuantum mekaniksel davranışının basitleştirilmiş bir yaklaşımıdır; bu basitleştirme çoğu durumda iyi çalışsa da, altında yatan tam fiziksel gerçekliği (elektron-elektron etkileşimleri gibi) tam yansıtmadığından Cr, Cu gibi istisnalar ortaya çıkabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir lise öğrencisi, iyonlaşma sırasında 4s elektronlarının 3d'den önce kaybedilmesinin (Fe → Fe²⁺ iyonu oluşurken 4s² kaybedilir, 3d⁶ korunur), dolum sırasındaki (4s önce dolar) durumla çeliştiğini düşünüyor.",
    text: "Bu görünürdeki çelişki en doğru hangi şekilde açıklanır?",
    options: [
      "Nötr atomda 4s, 3d'den biraz daha düşük enerjilidir; ancak elektron çekirdekten uzaklaştıkça (iyonlaşma sırasında) elektron sayısı azalır ve perdeleme değişir, bu da 3d'yi 4s'ye göre nispeten daha düşük enerjili hale getirir",
      "Bu bir çelişkidir ve bilim insanları bunu hâlâ açıklayamamıştır",
      "Dolum sırası ile iyonlaşma sırası aslında birbirinin aynısıdır, çelişki gözlem hatasıdır",
      "İyonlaşma sırasında elektronlar rastgele, hiçbir kurala uymadan kaybedilir",
      "4s orbitali iyonlaşma sırasında tamamen yok olur"
    ],
    correct: 0,
    explain: "Nötr atomda 4s enerjisi 3d'den biraz düşüktür (bu yüzden önce dolar); ancak bir elektron uzaklaştırıldığında (iyonlaşma), kalan elektronların perdeleme ve etkin çekirdek yükü dengesi değişir ve 3d orbitali enerji bakımından 4s'nin altına iner — bu yüzden iyonlaşırken önce 4s elektronları kaybedilir. Bu, orbital enerjilerinin sabit olmadığını, atomun elektron sayısına bağlı olarak dinamik biçimde değiştiğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir gazeteci, orbital enerji tahminlerinde kullanılan basit kuralların (n+l kuralı gibi) bilgisayar destekli kuantum kimyası hesaplamalarıyla karşılaştırıldığında daha az kesin olduğunu, ancak elle hesaplama ve sezgisel anlama için hâlâ yaygın kullanıldığını öğreniyor.",
    text: "Bu bilgi, farklı karmaşıklık düzeyindeki bilimsel modellerin bir arada kullanılması hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Basit ve karmaşık modeller farklı amaçlara hizmet edebilir: basit modeller hızlı sezgisel tahmin sağlarken, karmaşık hesaplamalar daha yüksek doğruluk gerektiren durumlarda tercih edilir",
      "Karmaşık hesaplamalar var olduğu için basit kurallar artık tamamen terk edilmelidir",
      "Basit kurallar her zaman karmaşık hesaplamalardan daha doğru sonuç verir",
      "Bilgisayar hesaplamaları güvenilmezdir, yalnızca elle yapılan hesaplamalar bilimseldir",
      "Modellerin karmaşıklık düzeyinin doğrulukla hiçbir ilişkisi yoktur"
    ],
    correct: 0,
    explain: "Basit ampirik kurallar (n+l kuralı gibi) hızlı, sezgisel ve eğitimde faydalı tahminler sağlarken, bilgisayar destekli kuantum kimyası hesaplamaları elektron-elektron etkileşimlerini daha kapsamlı hesaba katarak daha yüksek doğruluk sunar; bilimde farklı karmaşıklık düzeyindeki modeller, amaca göre birlikte ve tamamlayıcı biçimde kullanılabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir kalite kontrol uzmanı, lantanit ve aktinit serilerindeki (f bloğu) elektron dizilimlerinin de sıkça n+l kuralından sapan istisnalar gösterdiğini (örneğin lantan, seryum gibi elementlerde) öğreniyor.",
    text: "Bu bilgi, orbital enerjileri arasındaki farkların periyodik tablo boyunca değişimi hakkında en doğru hangi genellemeyi destekler?",
    options: [
      "4f, 5d ve 6s gibi orbitaller arasındaki enerji farkları özellikle küçük olabilir; enerjiler birbirine bu denli yakın olduğunda küçük elektronik etkiler bile dolum sırasını değiştirebilir, bu da istisnaların f bloğunda daha sık görülmesini açıklar",
      "f bloğu elementleri kimyasal kurallara tabi değildir",
      "Lantanitlerdeki istisnalar Cr ve Cu'daki istisnalarla hiçbir ortak mekanizmayı paylaşmaz",
      "f bloğunda hiçbir zaman istisna görülmez, bu bilgi hatalıdır",
      "İstisnaların sıklığı orbital enerjileriyle değil, elementlerin keşfedilme sırasıyla ilgilidir"
    ],
    correct: 0,
    explain: "4f, 5d ve 6s orbitalleri arasındaki enerji farkları oldukça küçük olabilir; enerji düzeyleri bu kadar yakın olduğunda elektron-elektron itmesi ve değişim enerjisi gibi ince etkiler dolum sırasını kolayca değiştirebilir — bu da n+l kuralından sapan istisnaların özellikle f bloğu (lantanit/aktinit) elementlerinde daha sık gözlenmesinin temel nedenidir."
  }
],
  "yerbulma": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir kimya öğretmeni, periyodik tablodaki yatay sıraların ve dikey sütunların isimlerini öğreniyor.",
    text: "Periyodik tablodaki yatay sıralara ne ad verilir?",
    options: ["Grup", "Periyot", "Blok", "Seri", "Aile"],
    correct: 1,
    explain: "Periyodik tablodaki yatay sıralara periyot denir; aynı periyottaki elementler aynı sayıda enerji düzeyine (kabuğa) sahiptir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir analitik kimyager, periyodik tablodaki dikey sütunların isimlerini öğreniyor.",
    text: "Periyodik tablodaki dikey sütunlara ne ad verilir?",
    options: ["Periyot", "Grup", "Kabuk", "Katman", "Blok"],
    correct: 1,
    explain: "Periyodik tablodaki dikey sütunlara grup denir; aynı gruptaki elementler genellikle aynı sayıda değerlik elektronuna sahiptir ve benzer kimyasal özellikler gösterir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir kalite kontrol uzmanı, aynı grupta yer alan elementlerin ortak özelliğini araştırıyor.",
    text: "Aynı gruptaki elementler için en doğru ortak özellik hangisidir?",
    options: ["Aynı atom kütlesine sahiptirler", "Aynı sayıda proton içerirler", "Aynı sayıda değerlik elektronuna sahiptirler", "Aynı sayıda nötron içerirler", "Aynı radyoaktif özelliktedirler"],
    correct: 2,
    explain: "Aynı gruptaki elementler aynı sayıda değerlik elektronuna sahiptir; bu, onların benzer kimyasal özellikler göstermesinin temel nedenidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir akademisyen, aynı periyotta yer alan elementlerin ortak özelliğini araştırıyor.",
    text: "Aynı periyottaki elementler için en doğru ortak özellik hangisidir?",
    options: ["Aynı sayıda değerlik elektronuna sahiptirler", "Aynı sayıda enerji düzeyine (kabuğa) sahiptirler", "Hepsi metaldir", "Hepsi aynı yükte iyon oluşturur", "Hepsi soy gazdır"],
    correct: 1,
    explain: "Aynı periyottaki elementler, en dış elektronlarının bulunduğu aynı sayıda enerji düzeyine (baş kuantum sayısına) sahiptir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Kerem, periyodik tabloda metallerin genel olarak hangi bölgede toplandığını gözlemliyor.",
    text: "Periyodik tabloda metaller çoğunlukla nerede bulunur?",
    options: ["Tablonun sağ üst köşesinde", "Yalnızca tablonun en üst satırında", "Tablonun sol ve orta kısmında", "Yalnızca son grupta", "Tablonun tam ortasında tek bir sütunda"],
    correct: 2,
    explain: "Periyodik tabloda metaller, tablonun sol ve orta (geçiş metalleri dahil) kısmında yoğunlaşır; ametaller ise sağ üst köşede toplanır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir kimya mühendisi, periyodik tabloda ametallerin genel konumunu araştırıyor.",
    text: "Periyodik tabloda ametaller çoğunlukla nerede bulunur?",
    options: ["Sol alt köşede", "Sağ üst köşede (hidrojen hariç)", "Tam ortada", "Yalnızca 1. grupta", "Tablonun en altında"],
    correct: 1,
    explain: "Ametaller (hidrojen istisnası dışında), periyodik tablonun sağ üst köşesinde yoğunlaşır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir güvenlik uzmanı, metal ile ametal arasındaki basamaklı sınır çizgisi boyunca yer alan elementleri araştırıyor.",
    text: "Metal ve ametal arasındaki sınırda bulunan, her iki grubun bazı özelliklerini taşıyan elementlere ne ad verilir?",
    options: ["Geçiş metalleri", "Yarı metaller (metaloidler)", "Lantanitler", "Aktinitler", "Soy gazlar"],
    correct: 1,
    explain: "Metal-ametal sınırı boyunca yer alan, hem metalik hem ametalik özellik gösteren elementlere yarı metal (metaloid) denir (örneğin bor, silisyum, germanyum)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir turist, 1. ve 2. grup elementlerinin hangi orbital türüne elektron yerleştirdiğini araştırıyor.",
    text: "1. ve 2. grup elementleri hangi blokta yer alır?",
    options: ["d bloğu", "p bloğu", "s bloğu", "f bloğu", "Hiçbiri"],
    correct: 2,
    explain: "1. ve 2. grup elementlerinin en son eklenen elektronu s orbitaline yerleştiği için bu elementler s bloğunda yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir ev hanımı, 13-18. grup elementlerinin hangi blokta yer aldığını araştırıyor.",
    text: "13-18. grup elementleri (soy gazlar dahil) hangi blokta yer alır?",
    options: ["s bloğu", "p bloğu", "d bloğu", "f bloğu", "Geçiş bloğu"],
    correct: 1,
    explain: "13-18. grup elementlerinin en son eklenen elektronu p orbitaline yerleştiği için bu elementler p bloğunda yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir hemşire, periyodik tablonun ortasındaki geçiş metallerinin hangi blokta yer aldığını araştırıyor.",
    text: "Geçiş metalleri (3-12. gruplar) hangi blokta yer alır?",
    options: ["s bloğu", "p bloğu", "d bloğu", "f bloğu", "q bloğu"],
    correct: 2,
    explain: "Geçiş metallerinin en son eklenen elektronu d orbitaline yerleştiği için bu elementler d bloğunda yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir lise öğrencisi, periyodik tablonun altında ayrı satırlarda gösterilen lantanit ve aktinit serilerinin hangi blokta yer aldığını araştırıyor.",
    text: "Lantanit ve aktinit serileri hangi blokta yer alır?",
    options: ["s bloğu", "p bloğu", "d bloğu", "f bloğu", "Hiçbir blokta değildir"],
    correct: 3,
    explain: "Lantanit ve aktinit serilerinin en son eklenen elektronu f orbitaline yerleştiği için bu elementler f bloğunda yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir eczacı, periyodik tablonun en sağındaki 18. grup elementlerinin genel adını araştırıyor.",
    text: "18. grup elementlerine genel olarak ne ad verilir?",
    options: ["Alkali metaller", "Toprak alkali metaller", "Halojenler", "Soy gazlar", "Geçiş metalleri"],
    correct: 3,
    explain: "18. grup elementleri (He, Ne, Ar, Kr, Xe, Rn) tam dolu değerlik kabuğuna sahip oldukları için kimyasal olarak oldukça kararlıdır ve soy gazlar olarak adlandırılır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir kariyer danışmanı, periyodik tablonun 1. grubundaki (hidrojen hariç) elementlerin genel adını öğreniyor.",
    text: "1. grup elementlerine (hidrojen hariç) genel olarak ne ad verilir?",
    options: ["Halojenler", "Alkali metaller", "Soy gazlar", "Toprak alkali metaller", "Lantanitler"],
    correct: 1,
    explain: "1. grup elementleri (Li, Na, K, Rb, Cs, Fr), tek değerlik elektronlarını kolayca vererek +1 yüklü katyon oluşturma eğiliminde olan alkali metallerdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir laboratuvar teknisyeni, 17. grup elementlerinin genel adını araştırıyor.",
    text: "17. grup elementlerine genel olarak ne ad verilir?",
    options: ["Alkali metaller", "Toprak alkali metaller", "Halojenler", "Soy gazlar", "Geçiş metalleri"],
    correct: 2,
    explain: "17. grup elementleri (F, Cl, Br, I, At), bir elektron alarak -1 yüklü anyon oluşturma eğiliminde olan halojenlerdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir veli, bir sodyum atomunun (Na) bir elektron kaybederek nasıl iyon oluşturduğunu inceliyor.",
    text: "Sodyum bir elektron kaybettiğinde oluşan iyonun yükü nedir?",
    options: ["-1", "+1", "+2", "-2", "0 (nötr kalır)"],
    correct: 1,
    explain: "Sodyum bir elektron kaybettiğinde proton sayısı elektron sayısından bir fazla olur, bu da +1 yüklü bir katyon (Na⁺) oluşturur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir laborant, bir klor atomunun (Cl) bir elektron kazanarak nasıl iyon oluşturduğunu inceliyor.",
    text: "Klor bir elektron kazandığında oluşan iyonun yükü nedir?",
    options: ["+1", "-1", "+2", "-2", "0 (nötr kalır)"],
    correct: 1,
    explain: "Klor bir elektron kazandığında elektron sayısı proton sayısından bir fazla olur, bu da -1 yüklü bir anyon (Cl⁻) oluşturur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir sağlık çalışanı, modern periyodik tablonun elementleri hangi özelliğe göre sıraladığını öğreniyor.",
    text: "Modern periyodik yasaya göre elementler hangi özelliğe göre artan sırada dizilir?",
    options: ["Atom kütlesine göre", "Atom numarasına (proton sayısına) göre", "Keşfedilme tarihine göre", "Erime noktasına göre", "Renklerine göre"],
    correct: 1,
    explain: "Modern periyodik yasaya göre elementler, atom numarasına (proton sayısına) göre artan sırada düzenlenir; bu, Mendeleev'in atom kütlesine dayalı ilk sıralamasından farklı ve daha tutarlı bir yaklaşımdır."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Aşağıdaki tabloda bazı elementlerin elektron dizilimleri ve buna karşılık gelen periyodik tablo konumları verilmiştir.",
    table: {
      headers: ["Element", "Elektron dizilimi", "Periyot", "Grup"],
      rows: [
        ["Na", "1s² 2s² 2p⁶ 3s¹", "3", "1"],
        ["Mg", "1s² 2s² 2p⁶ 3s²", "3", "2"],
        ["Cl", "1s² 2s² 2p⁶ 3s² 3p⁵", "3", "17"],
        ["Ar", "1s² 2s² 2p⁶ 3s² 3p⁶", "3", "18"]
      ]
    },
    text: "Tablodaki verilerden yola çıkarak, bir elementin periyot numarasının en doğrudan hangi bilgiden çıkarılabileceği söylenebilir?",
    options: [
      "Elementin proton sayısından bağımsız olarak",
      "Elementin toplam elektron sayısından",
      "Elektron diziliminde görülen en büyük baş kuantum sayısından (en dış enerji düzeyinden)",
      "Yalnızca elementin adının ilk harfinden",
      "Elementin izotop sayısından"
    ],
    correct: 2,
    explain: "Tablodaki tüm elementlerin elektron diziliminde en büyük baş kuantum sayısı 3 olduğundan hepsi 3. periyottadır; bu, periyot numarasının en dış (değerlik) enerji düzeyinin baş kuantum sayısına eşit olduğunu gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir spor yapan kişi, yukarıdaki tabloda Na (grup 1, 3s¹), Mg (grup 2, 3s²), Cl (grup 17, 3s²3p⁵) örneklerini inceleyerek grup numarası ile değerlik elektron sayısı arasında bir örüntü arıyor.",
    text: "Bu örneklerden tümevarımsal olarak çıkarılabilecek en doğru genel kural hangisidir?",
    options: [
      "Tüm elementlerde grup numarası her zaman değerlik elektron sayısına birebir eşittir (istisnasız)",
      "Grup numarasının değerlik elektron sayısıyla hiçbir ilişkisi yoktur",
      "Ana grup (temsili) elementlerde grup numarası, değerlik elektron sayısıyla doğrudan ilişkilidir (örneğin grup 1 → 1 değerlik e⁻, grup 17 → 7 değerlik e⁻)",
      "Değerlik elektron sayısı yalnızca periyot numarasına bağlıdır, gruba bağlı değildir",
      "Bu örnekler yalnızca 3. periyot için geçerlidir, başka periyotlara genellenemez"
    ],
    correct: 2,
    explain: "Verilen örneklerden (Na: grup 1, 1 değerlik e⁻; Mg: grup 2, 2 değerlik e⁻; Cl: grup 17, 7 değerlik e⁻) tümevarımsal olarak, ana grup elementlerinde grup numarasının değerlik elektron sayısıyla ilişkili olduğu genellenebilir (grup 13-18 için değerlik e⁻ = grup no - 10); bu ilişki geçiş metallerinde (d bloğu) bu kadar basit değildir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir stajyer, alüminyumun (13Al) elektron dizilimini 1s² 2s² 2p⁶ 3s² 3p¹ olarak yazıyor.",
    text: "Bu elektron dizilimine göre alüminyum periyodik tabloda hangi periyot ve grupta yer alır?",
    options: ["3. periyot, 3. grup", "2. periyot, 3. grup", "3. periyot, 13. grup", "13. periyot, 3. grup", "1. periyot, 13. grup"],
    correct: 2,
    explain: "En büyük baş kuantum sayısı 3 olduğundan alüminyum 3. periyottadır; p bloğunda 1 değerlik elektronu (3p¹) olduğundan grup numarası 13'tür (p bloğu için grup no = 10 + değerlik p elektron sayısı + s elektron sayısı)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir itfaiyeci, potasyum iyonunun (K⁺) elektron diziliminin argon (Ar) atomunun elektron dizilimiyle aynı olduğunu fark ediyor.",
    text: "Bu gözlem 'izoelektronik' kavramı için en doğru hangi çıkarımı destekler?",
    options: [
      "K⁺ ve Ar'nin izoelektronik olması imkânsızdır çünkü farklı elementlerdir",
      "İzoelektronik iyonlar mutlaka aynı proton sayısına sahip olmalıdır",
      "Farklı elementlere ait atom/iyonlar, aynı sayıda elektrona ve aynı elektron dizilimine sahip olduğunda izoelektronik kabul edilir",
      "İzoelektronik kavramı yalnızca nötr atomlar için geçerlidir, iyonlar için kullanılmaz",
      "İzoelektronik türler her zaman aynı kimyasal reaktifliği gösterir"
    ],
    correct: 2,
    explain: "İzoelektronik türler, proton sayıları farklı olsa da aynı sayıda elektrona ve aynı elektron dizilimine sahip atom/iyonlardır; K⁺ (19 proton, 18 elektron) ile Ar (18 proton, 18 elektron) aynı elektron dizilimine ([Ne]3s²3p⁶) sahip olduğundan izoelektroniktir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Aslı, Na⁺, Mg²⁺ ve Al³⁺ iyonlarının hepsinin neon (Ne) atomuyla aynı elektron dizilimine ([Ne] yapısı) sahip olduğunu gözlemliyor.",
    text: "Bu gözlemden tümevarımsal olarak en doğru hangi genel eğilim çıkarılabilir?",
    options: [
      "Bu üç iyonun oluşumu birbirinden tamamen bağımsız, ilişkisiz olaylardır",
      "Tüm metaller aynı sayıda elektron kaybeder, yük büyüklüğü önemli değildir",
      "Ana grup metalleri, en yakın önceki soy gazın kararlı elektron dizilimine ulaşana kadar değerlik elektronlarını kaybetme eğilimindedir",
      "Metaller elektron kaybetmez, yalnızca ametaller elektron kaybeder",
      "Neon yapısına ulaşmak yalnızca 3. periyot elementlerine özgüdür"
    ],
    correct: 2,
    explain: "Na (1 elektron kaybeder), Mg (2 elektron kaybeder) ve Al (3 elektron kaybeder) örneklerinden, ana grup metallerinin en yakın önceki soy gazın kararlı elektron dizilimine ulaşana kadar (değerlik elektron sayısı kadar) elektron kaybettiği genel eğilimi tümevarımsal olarak çıkarılabilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir bahçıvan, O²⁻, F⁻ ve Na⁺ iyonlarının hepsinin neon (Ne) ile aynı elektron sayısına (10 elektron) sahip olduğunu, ancak farklı proton sayılarına sahip olduğunu gözlemliyor.",
    text: "Bu izoelektronik seri hakkında en doğru çıkarım hangisidir?",
    options: [
      "Bu iyonlar arasında hiçbir karşılaştırma yapılamaz",
      "Aynı elektron sayısına sahip oldukları için bu iyonlar birebir aynı özelliklere sahiptir",
      "İzoelektronik iyonların çekirdek yükü de her zaman aynıdır",
      "Aynı elektron sayısına sahip olsalar da, farklı proton (çekirdek yükü) sayıları nedeniyle bu iyonların fiziksel/kimyasal özellikleri (örneğin iyon yarıçapı) farklı olabilir",
      "İzoelektronik seri kavramı yalnızca nötr atomlara uygulanabilir"
    ],
    correct: 3,
    explain: "O²⁻, F⁻ ve Na⁺ aynı elektron sayısına (10) sahip olsa da farklı proton sayılarına (8, 9, 11) sahiptir; çekirdek yükündeki bu farklılık, elektronları farklı derecede çektiğinden iyon yarıçapı gibi özelliklerde farklılığa yol açar (proton sayısı arttıkça çekim artar, yarıçap küçülür)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Ali, geçiş metallerinin (örneğin demir, Fe) birden fazla farklı yükte iyon oluşturabildiğini (Fe²⁺, Fe³⁺) fark ediyor; oysa sodyum (Na) yalnızca Na⁺ iyonu oluşturur.",
    text: "Bu fark en doğru hangi şekilde açıklanabilir?",
    options: [
      "Bu fark tamamen rastlantısaldır, hiçbir elektronik nedeni yoktur",
      "Demir atomunun proton sayısı belirsiz olduğu için farklı yüklü iyonlar oluşur",
      "Sodyum atomunun elektron sayısı demirden az olduğu için yalnızca tek yükte iyon oluşturur",
      "Geçiş metallerinde değerlik s ve d orbitalleri enerji bakımından birbirine yakın olduğundan, farklı sayıda elektron kaybederek birden fazla kararlı iyon durumu oluşabilir",
      "Geçiş metalleri iyon oluşturamaz, yalnızca ana grup metalleri iyon oluşturur"
    ],
    correct: 3,
    explain: "Geçiş metallerinde (n)s ve (n-1)d orbitalleri enerji bakımından birbirine yakın olduğundan, farklı sayıda elektron kaybetmek görece küçük enerji farklarıyla mümkün olabilir; bu da birden fazla kararlı yükseltgenme basamağının (iyon yükünün) oluşmasına imkân tanır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir çevre mühendisi, hidrojenin periyodik tabloda 1. grupta (alkali metallerle aynı sütunda) gösterildiğini, ancak kimyasal özelliklerinin alkali metallerden oldukça farklı (bir ametal gibi davranan) olduğunu fark ediyor.",
    text: "Hidrojenin bu 'sınırda' konumu en doğru hangi şekilde açıklanabilir?",
    options: [
      "Hidrojenin elektron sayısı diğer 1. grup elementleriyle tamamen farklıdır",
      "Hidrojenin periyodik tablodaki yeri kesin ve tartışmasızdır, hiçbir istisna yoktur",
      "Hidrojen aslında bir geçiş metalidir",
      "Hidrojen, alkali metaller gibi tek değerlik elektronuna sahip olduğundan 1. grupta gösterilir; ancak metalik özellik göstermediğinden sınıflandırması tartışmalıdır ve bazı tablolarda ayrı gösterilir",
      "Hidrojen periyodik tabloda hiçbir gruba ait değildir"
    ],
    correct: 3,
    explain: "Hidrojen, tek değerlik elektronu (1s¹) bakımından 1. grup elementlerine benzese de, elektronegatifliği yüksek olup ametal gibi davranır (metal değildir); bu nedenle periyodik tablodaki konumu bir dereceye kadar tartışmalıdır ve bazı tablolarda ayrı bir yerde gösterilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Onur, helyumun (He, 1s²) elektron dizilimi bakımından s bloğuna ait olmasına rağmen periyodik tabloda soy gazlarla (18. grup) birlikte gösterildiğini fark ediyor.",
    text: "Helyumun bu konumu en doğru hangi şekilde açıklanabilir?",
    options: [
      "Helyumun grup konumu tamamen keyfi seçilmiştir, hiçbir bilimsel nedeni yoktur",
      "Helyumun elektron dizilimi 18. grup elementleriyle birebir aynıdır",
      "Helyum aslında 2. grup elementidir ama yanlışlıkla 18. grupta gösterilir",
      "Helyum, elektron dizilimi bakımından s bloğunda olsa da, tam dolu değerlik kabuğuna (1s²) sahip olduğundan kimyasal kararlılık bakımından soy gazlara benzer ve bu yüzden 18. grupta gösterilir",
      "Helyum periyodik tabloda hiçbir bloğa ait değildir"
    ],
    correct: 3,
    explain: "Helyum elektron dizilimi (1s²) açısından s bloğuna aitse de, tam dolu değerlik kabuğuna sahip olması onu kimyasal olarak son derece kararlı (soy gaz gibi) yapar; bu yüzden periyodik tabloda kimyasal davranışına göre 18. grupta (soy gazlarla) gösterilir — bu, sınıflandırmanın bazen orbital türü yerine kimyasal davranışa dayanabileceğini gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir bilim insanı, Mendeleev'in 1869'daki ilk periyodik tablosunun elementleri atom kütlesine göre sıraladığını, ancak bu sıralamanın bazı elementlerde (örneğin tellür ve iyot) beklenmedik yer değişimlerine yol açtığını öğreniyor.",
    text: "Bu sorunun modern periyodik tabloda nasıl çözüldüğü en doğru hangi seçenekte açıklanmıştır?",
    options: [
      "Modern tabloda atom kütlesi kavramı tamamen terk edilmiştir",
      "Sorun hiçbir zaman çözülmemiştir, modern tablo da aynı hataları içerir",
      "Modern tablo elementleri alfabetik sıraya göre düzenler",
      "Elementler atom kütlesi yerine atom numarasına (proton sayısına) göre sıralanarak, kimyasal özelliklere dayalı tutarlı bir düzen elde edilmiştir",
      "Tellür ve iyot modern tablodan çıkarılmıştır"
    ],
    correct: 3,
    explain: "Mendeleev'in atom kütlesine dayalı sıralaması bazı elementlerde (Te-I gibi) kimyasal özelliklerle uyumsuz sıralamalara yol açıyordu; Henry Moseley'in çalışmalarıyla elementlerin atom numarasına (proton sayısına) göre sıralanması, bu tutarsızlıkları ortadan kaldırarak modern periyodik yasayı oluşturmuştur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Buse, kalsiyum (Ca, [Ar]4s²) atomunun 2 elektron kaybederek Ca²⁺ iyonuna dönüştüğünü, bu iyonun elektron diziliminin argonla ([Ar]) aynı olduğunu gözlemliyor.",
    text: "Bu gözlem, ana grup metallerinin iyon oluşturma eğilimi hakkında en doğru hangi genel ilkeyi destekler?",
    options: [
      "Metaller iyon oluştururken her zaman tüm elektronlarını kaybeder",
      "Kalsiyum elektron kazanarak iyon oluşturur, kaybetmez",
      "Ca²⁺ iyonunun elektron dizilimi kripton ile aynıdır",
      "Ana grup metalleri, en dış kabuktaki değerlik elektronlarını kaybederek bir önceki soy gazın kararlı elektron dizilimine ulaşma eğilimindedir",
      "Bu gözlem yalnızca kalsiyuma özgüdür, diğer 2. grup elementlerine genellenemez"
    ],
    correct: 3,
    explain: "Kalsiyum, 2 değerlik elektronunu (4s²) kaybederek bir önceki soy gaz olan argonun kararlı elektron dizilimine ([Ar]) ulaşır; bu örüntü, tüm 2. grup elementlerinin (Mg, Sr, Ba gibi) 2 elektron kaybederek benzer şekilde kararlı iyonlar oluşturduğu genel ilkesine tümevarımsal olarak genellenebilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir aşçı, oksijenin (O, [He]2s²2p⁴) 2 elektron kazanarak O²⁻ iyonuna dönüştüğünü, bu iyonun elektron diziliminin neonla ([Ne]) aynı olduğunu gözlemliyor.",
    text: "Bu gözlem, ana grup ametallerinin iyon oluşturma eğilimi hakkında en doğru hangi genel ilkeyi destekler?",
    options: [
      "O²⁻ iyonunun elektron dizilimi argon ile aynıdır",
      "Oksijen elektron kaybederek iyon oluşturur, kazanmaz",
      "Tüm ametaller aynı sayıda (2 tane) elektron kazanır",
      "Ana grup ametalleri, bir sonraki soy gazın kararlı elektron dizilimine ulaşana kadar elektron kazanma eğilimindedir",
      "Bu gözlem yalnızca oksijene özgüdür, diğer 16. grup elementlerine genellenemez"
    ],
    correct: 3,
    explain: "Oksijen, 6 değerlik elektronuna (2s²2p⁴) sahip olduğundan 8 elektronluk kararlı dizilime ulaşmak için 2 elektron kazanır ve bir sonraki soy gaz olan neonun dizilimine ([Ne]) ulaşır; bu örüntü, 16. grup ametallerinin genellikle 2 elektron kazanma eğiliminin genel ilkesine tümevarımsal olarak genellenebilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Aşağıdaki grafik, birkaç ana grup elementinin değerlik elektron sayısını grup numarasına göre göstermektedir.",
    chart: {
      type: "bar",
      title: "Ana grup elementlerinde değerlik elektron sayısı",
      labels: ["Grup 1", "Grup 2", "Grup 15", "Grup 16", "Grup 17", "Grup 18"],
      values: [1, 2, 5, 6, 7, 8]
    },
    text: "Grafikteki örüntüden yola çıkarak ana grup (13-18. grup) elementlerinde değerlik elektron sayısını grup numarasından hesaplamak için en doğru genel kural hangisidir?",
    options: [
      "Değerlik elektron sayısı grup numarasıyla hiç ilişkili değildir",
      "Değerlik elektron sayısı = Grup numarası + 10",
      "Değerlik elektron sayısı her zaman grup numarasına eşittir",
      "Değerlik elektron sayısı = Grup numarası - 10",
      "Değerlik elektron sayısı = Grup numarası / 2"
    ],
    correct: 3,
    explain: "13-18. grup (p bloğu) elementlerinde değerlik elektron sayısı, grup numarasından 10 çıkarılarak bulunur (örneğin grup 17 → 17-10=7 değerlik elektronu); grafikteki grup 15 (5 e⁻), grup 16 (6 e⁻), grup 17 (7 e⁻), grup 18 (8 e⁻) verileri bu kuralla tutarlıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Selin, bir elementin elektron diziliminin [Ne] 3s² 3p⁴ olduğunu görüyor.",
    text: "Bu elektron dizilimine sahip element periyodik tabloda hangi periyot ve grupta yer alır?",
    options: ["3. periyot, 14. grup", "2. periyot, 16. grup", "3. periyot, 6. grup", "16. periyot, 3. grup", "3. periyot, 16. grup"],
    correct: 4,
    explain: "En büyük baş kuantum sayısı 3 olduğundan element 3. periyottadır; p bloğunda 4 değerlik elektronu (3p⁴, toplam s+p=6) olduğundan grup numarası 10+6=16'dır (bu element kükürttür)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir mühendis, bir X elementinin +2 yüklü iyonunun elektron diziliminin [Ar] 3d⁶ olduğunu öğreniyor.",
    text: "Bu bilgiden yola çıkarak X elementinin nötr atomunun elektron dizilimi en doğru hangisidir?",
    options: ["[Ar] 3d⁶ 4p²", "[Ar] 3d⁸", "[Ar] 4s² 3d⁴", "[Ar] 4s¹ 3d⁷", "[Ar] 4s² 3d⁶"],
    correct: 4,
    explain: "X²⁺ iyonu 2 elektron eksik olduğundan, X²⁺ oluşurken kaybedilen elektronlar önce 4s'den alınır (geçiş metalleri iyonlaşırken önce 4s kaybeder); bu yüzden nötr X atomunun dizilimi [Ar] 4s² 3d⁶'dır (bu element demirdir, Fe)."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir grup öğrenci, Na⁺, Mg²⁺, Al³⁺, O²⁻, F⁻ iyonlarının hepsinin aynı elektron sayısına (10) ve aynı elektron dizilimine ([Ne]) sahip olduğunu, ancak proton sayılarının 11'den 8'e kadar farklılık gösterdiğini inceliyor.",
    text: "Bu izoelektronik seriden tümevarımsal olarak çekirdek yükü ile iyon büyüklüğü arasında en doğru hangi genel ilişki çıkarılabilir?",
    options: [
      "Bu iyonların büyüklüğü yalnızca keşfedilme sırasına göre belirlenir",
      "Proton sayısının iyon büyüklüğüyle hiçbir ilişkisi yoktur",
      "Elektron sayısı sabit olduğunda tüm iyonlar aynı büyüklükte olmalıdır",
      "Proton sayısı arttıkça iyon büyüklüğü de her zaman artar",
      "Elektron sayısı sabitken proton sayısı arttıkça, çekirdeğin elektronları çekme kuvveti artar ve iyon yarıçapı küçülür"
    ],
    correct: 4,
    explain: "İzoelektronik bir seride (aynı elektron sayısı) proton sayısı arttıkça (Al³⁺ > Mg²⁺ > Na⁺ > F⁻ > O²⁻ proton sırasıyla), çekirdeğin elektronlar üzerindeki net çekim kuvveti artar; bu da elektron bulutunun daha sıkı çekilmesine ve iyon yarıçapının küçülmesine yol açar (Al³⁺ en küçük, O²⁻ en büyüktür bu seride)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Emre, Fe²⁺ ([Ar]3d⁶) ile Fe³⁺ ([Ar]3d⁵) iyonlarını karşılaştırıyor ve Fe³⁺'ün d⁵ (yarı dolu) yapısı nedeniyle Fe²⁺'a göre bazı bağlamlarda görece daha kararlı olabileceğini öğreniyor.",
    text: "Bu bilgi, geçiş metali iyonlarının yükleri hakkında yapılan tahminler için en doğru hangi çıkarımı destekler?",
    options: [
      "Yalnızca +2 yüklü iyonlar demirde mümkündür",
      "Fe²⁺ her zaman Fe³⁺'ten daha kararlıdır, istisnasız",
      "d⁵ yapısı hiçbir zaman ekstra kararlılık sağlamaz",
      "Geçiş metali iyonlarının kararlılığı tamamen rastgeledir, hiçbir kurala uymaz",
      "Geçiş metali iyonlarının hangi yükte daha yaygın/kararlı olacağını tahmin ederken, yalnızca elektron sayısını değil, yarı dolu/tam dolu d alt kabuk gibi ekstra kararlılık etkilerini de göz önünde bulundurmak gerekir"
    ],
    correct: 4,
    explain: "Geçiş metali iyonlarının göreli kararlılığını değerlendirirken, basit elektron sayısı hesabının ötesinde, yarı dolu (d⁵) veya tam dolu (d¹⁰) alt kabukların sağladığı ekstra simetrik kararlılık etkisi de dikkate alınmalıdır; bu, Fe³⁺'ün (d⁵) bazı bağlamlarda görece kararlı olmasının nedenlerinden biridir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir araştırmacı, Li, Na, K, Rb, Cs (1. grup elementleri) örneklerinin hepsinin tek değerlik elektronu kaybederek +1 yüklü iyon oluşturduğunu; buna karşılık grup içinde aşağı indikçe bu elektronu kaybetmenin (iyonlaşma enerjisinin) gitgide kolaylaştığını öğreniyor.",
    text: "Bu iki gözlemden ('hepsi +1 iyon oluşturur' ve 'aşağı indikçe kolaylaşır') tümevarımsal olarak en doğru birleşik genel ilke hangisidir?",
    options: [
      "Bu örüntü yalnızca 1. grup için geçerlidir, hiçbir başka grupta benzer eğilim yoktur",
      "Grup içindeki tüm elementler birbirinin tamamen aynısıdır, hiçbir fark yoktur",
      "İyon yükü grup içinde aşağı indikçe değişir, +1'den +2'ye çıkar",
      "İyonlaşma kolaylığının çekirdek-elektron uzaklığıyla hiçbir ilgisi yoktur",
      "Bir grup içindeki elementler benzer iyon oluşturma davranışı (aynı yük) gösterirken, bu davranışın 'kolaylığı' (iyonlaşma enerjisi) çekirdekten değerlik elektronuna olan uzaklık gibi etkenlere bağlı olarak sistematik biçimde değişebilir"
    ],
    correct: 4,
    explain: "1. grup elementlerinin hepsinin +1 iyon oluşturması (nitel benzerlik) ile grupta aşağı indikçe bu iyonlaşmanın kolaylaşması (nicel eğilim, çekirdekten uzaklaşan değerlik elektronunun daha zayıf çekilmesi nedeniyle) birlikte değerlendirildiğinde, grup içi elementlerin hem kalitatif benzerlik hem de sistematik nicel değişim gösterdiği genel ilkesi tümevarımsal olarak çıkarılabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Ece, periyodik tablodaki 'köşegen ilişkisi' (diagonal relationship) kavramını araştırıyor: Li ile Mg, Be ile Al gibi köşegen komşu elementlerin, aynı grup komşularından bazen daha benzer özellikler gösterdiğini öğreniyor.",
    text: "Bu gözlem, 'aynı gruptaki elementler her zaman en benzer elementlerdir' varsayımı hakkında en doğru eleştirel çıkarımı destekler?",
    options: [
      "Bu gözlem periyodik tablonun tamamen yeniden düzenlenmesi gerektiğini gösterir",
      "Köşegen ilişkisi, grup benzerliği kavramını tamamen geçersiz kılar",
      "Li ve Mg'nin benzerliği tesadüftür, hiçbir sistematik nedeni yoktur",
      "Köşegen ilişkisi yalnızca 1. ve 2. grup elementleri arasında görülebilir, başka hiçbir yerde yoktur",
      "Grup benzerliği genel bir eğilim olsa da, atom/iyon büyüklüğü ve yük yoğunluğu gibi etkenler bazı durumlarda köşegen komşuların daha benzer davranış göstermesine yol açabilir; bu, periyodik eğilimlerin karmaşık ve çok etkenli olduğunu gösterir"
    ],
    correct: 4,
    explain: "Köşegen ilişkisi, periyodik eğilimlerin (grup boyunca artan atom yarıçapı, periyot boyunca artan çekirdek yükü gibi) bazen köşegen komşu elementlerde benzer yük yoğunluğu/polarize edici güç oluşturabileceğini gösterir; bu, 'aynı grup = en benzer' basit kuralının her zaman mutlak geçerli olmadığını, periyodik özelliklerin çok etkenli ve bazen ince nüanslar taşıdığını ortaya koyar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Sınıftaki öğrenciler, bakırın ([Ar]4s¹3d¹⁰) Cu⁺ ([Ar]3d¹⁰) ve Cu²⁺ ([Ar]3d⁹) olmak üzere iki farklı kararlı iyon oluşturabildiğini; her ikisinin de günlük hayatta (örneğin farklı renkte bileşiklerde) yaygın kullanıldığını öğreniyor.",
    text: "Bu bilgi, geçiş metallerinin değişken yükseltgenme basamağı (iyon yükü) gösterme eğilimi hakkında en doğru genel çıkarımı destekler?",
    options: [
      "Bu durum yalnızca bakırın günlük hayatta kullanılmasıyla ilgilidir, elektronik yapıyla ilgisi yoktur",
      "Bakırın iki farklı iyonu olması istisnai bir durumdur ve başka hiçbir geçiş metalinde görülmez",
      "Cu⁺ ve Cu²⁺ aslında aynı iyon olup yalnızca isimlendirme farkıdır",
      "Değişken yükseltgenme basamağı yalnızca bakıra özgü, açıklanamayan bir olgudur",
      "Geçiş metallerinde d orbitalindeki elektronların görece yakın enerji seviyelerinde bulunması, birden fazla elektron sayısının da kimyasal olarak erişilebilir/kararlı olmasına, dolayısıyla birden fazla yaygın iyon yükünün ortaya çıkmasına imkân tanır"
    ],
    correct: 4,
    explain: "Geçiş metallerinde d orbitalindeki elektronların enerji bakımından birbirine yakın olması, farklı sayıda elektron kaybının görece küçük enerji maliyetleriyle mümkün olmasını sağlar; bu, birçok geçiş metalinin (Fe, Cu, Mn, Cr gibi) birden fazla kararlı yükseltgenme basamağı göstermesinin genel elektronik temelidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir gıda mühendisi, periyodik tabloda bir elementin grup ve periyot numarasının, o elementin kimyasal davranışını (iyon yükü, bağ yapma eğilimi vb.) yüksek doğrulukla tahmin etmede kullanılabildiğini fark ediyor.",
    text: "Bu gözlem, periyodik tablonun bilimsel bir araç olarak gücü hakkında en doğru hangi genel çıkarımı destekler?",
    options: [
      "Periyodik tablonun tahmin gücü yalnızca metal elementler için geçerlidir",
      "Periyodik tablo yalnızca elementleri alfabetik olarak listelemek için kullanılan bir referans kitabıdır",
      "Periyodik tablodaki konum, elementin kimyasal davranışıyla hiçbir ilişkisi olmayan keyfi bir sıralamadır",
      "Periyodik tablo yalnızca geçmişte keşfedilen elementler için geçerlidir, tahmin gücü yoktur",
      "Periyodik tablo, elementlerin elektron dizilimindeki düzenli örüntüleri yansıttığından, yalnızca bilinen elementleri sınıflandırmakla kalmaz, henüz doğrudan incelenmemiş özellikleri de güvenilir biçimde tahmin etmeyi sağlayan güçlü bir bilimsel araçtır"
    ],
    correct: 4,
    explain: "Periyodik tablo, elektron dizilimindeki tekrarlayan (periyodik) örüntüleri sistematik biçimde yansıttığından, Mendeleev'in henüz keşfedilmemiş elementlerin özelliklerini önceden tahmin etmesinde olduğu gibi, güçlü bir tahmin ve genelleme aracı olarak işlev görür; bu, bilimsel sınıflandırma sistemlerinin yalnızca tanımlayıcı değil, öngörücü de olabileceğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Merve, N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺ iyonlarının hepsinin aynı elektron sayısına (10) sahip izoelektronik bir seri oluşturduğunu ve bu seride yükün -3'ten +3'e değiştiğini inceliyor.",
    text: "Bu geniş izoelektronik seriden tümevarımsal olarak proton sayısı ile iyon yarıçapı arasındaki ilişki için en doğru genel kural hangisidir?",
    options: [
      "İzoelektronik seride tüm iyonların yarıçapı birbirine eşit olmalıdır",
      "İyon yarıçapı yalnızca yükle belirlenir, proton sayısının hiçbir etkisi yoktur",
      "Bu seride iyon yarıçapı rastgele, öngörülemez biçimde değişir",
      "Proton sayısı arttıkça iyon yarıçapı da orantılı olarak büyür",
      "Elektron sayısı sabitken, proton sayısı arttıkça (N³⁻'den Al³⁺'a doğru) çekirdek-elektron çekimi güçlenir ve iyon yarıçapı sistematik olarak küçülür"
    ],
    correct: 4,
    explain: "N³⁻ (7 proton) → O²⁻ (8 proton) → F⁻ (9 proton) → Na⁺ (11 proton) → Mg²⁺ (12 proton) → Al³⁺ (13 proton) sırasında elektron sayısı sabit (10) kalırken proton sayısı düzenli olarak artar; bu artan çekirdek yükü elektronları daha güçlü çektiğinden iyon yarıçapı bu sırada sistematik olarak küçülür (N³⁻ en büyük, Al³⁺ en küçük iyondur)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Can, periyodik tablonun 'tahmin gücünü' test etmek amacıyla, henüz elektron dizilimini bilmediği hipotetik bir X elementinin 4. periyot, 2. grupta olduğunu öğreniyor.",
    text: "Yalnızca bu periyot/grup bilgisinden yola çıkarak X elementinin elektron dizilimi ve olası iyon yükü hakkında en güvenilir hangi tahmin yapılabilir?",
    options: [
      "4. periyot, 2. grup bilgisi X'in yalnızca kütlesini belirler, elektron davranışını belirlemez",
      "X'in kaç elektron kaybedeceği periyot/grup bilgisinden asla tahmin edilemez",
      "X kesinlikle -2 yüklü bir anyon oluşturacaktır",
      "X'in elektron dizilimi periyodik tablo konumuyla hiçbir ilgisi olmayan rastgele bir dizilim olacaktır",
      "X'in değerlik elektron dizilimi 4s² olmalı ve X, 2 elektron kaybederek +2 yüklü kararlı bir iyon (X²⁺) oluşturma eğiliminde olmalıdır (kalsiyuma benzer davranış)"
    ],
    correct: 4,
    explain: "4. periyot, 2. grup konumu, X'in en dış elektron diziliminin 4s² olacağını (2. grup = s bloğu, 2 değerlik elektronu; periyot 4 = n=4) güvenilir biçimde tahmin etmeyi sağlar; bu elektron dizilimine sahip elementler (Ca gibi) tipik olarak 2 elektron kaybederek +2 yüklü kararlı iyonlar oluşturur — bu, periyodik tablonun sistematik tahmin gücünün somut bir örneğidir (X burada gerçekte kalsiyumdur)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir doktora öğrencisi, periyodik tablonun modern biçiminin yaklaşık 150 yıllık bir süreçte (Mendeleev'den Moseley'e, oradan kuantum mekaniğine) aşamalı olarak geliştiğini; her aşamada bir önceki modelin sınırlarının yeni kanıtlarla aşıldığını fark ediyor.",
    text: "Bu tarihsel gelişim süreci, bilimsel sınıflandırma sistemleri hakkında en doğru hangi genel çıkarımı destekler?",
    options: [
      "Bilimsel sınıflandırma sistemleri (periyodik tablo gibi) da atom modelleri gibi, yeni deneysel kanıtlar ve kuramsal anlayış geliştikçe aşamalı olarak revize edilebilen, gelişmeye açık yapılardır",
      "Periyodik tablo yalnızca bir kez, tek seferde ve kusursuz biçimde oluşturulmuştur",
      "Sınıflandırma sistemlerinin gelişimi atom modellerinin gelişiminden tamamen bağımsız, ilgisiz bir süreçtir",
      "Modern periyodik tablo artık kesinleşmiştir ve gelecekte hiçbir revizyon görmeyecektir",
      "Mendeleev'in orijinal tablosunun modern tabloyla hiçbir ortak yönü yoktur"
    ],
    correct: 0,
    explain: "Periyodik tablonun Mendeleev'in atom kütlesine dayalı ilk halinden, Moseley'in atom numarasına dayalı düzeltmesine, oradan kuantum mekaniksel elektron dizilimi temelli modern anlayışa uzanan gelişimi, atom modellerinde görülen aynı genel bilimsel ilkeyi yansıtır: sınıflandırma sistemleri de yeni kanıt ve kuramsal ilerlemeyle aşamalı olarak geliştirilebilen, açık uçlu yapılardır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir tüketici, periyodik tabloda bazı elementlerin (örneğin geçiş sonrası metaller olan Ga, Sn, Pb) hem metal hem de sınırlı ölçüde ametal benzeri davranış (amfoterlik gibi) gösterebildiğini öğreniyor.",
    text: "Bu gözlem, 'metal/ametal' sınıflandırmasının doğası hakkında en doğru hangi eleştirel çıkarımı destekler?",
    options: [
      "Metal-ametal ayrımı kesin, keskin bir sınır değil, bir davranış spektrumunu (yelpazesini) temsil eder; bazı elementler bu spektrumun ara bölgesinde, koşula bağlı karma davranış gösterebilir",
      "Metal ve ametal kategorileri arasında hiçbir ara durum yoktur, her element ya kesin metaldir ya kesin ametaldir",
      "Amfoter davranış gösteren elementler periyodik tablodan çıkarılmalıdır",
      "Metal-ametal sınıflandırması bilimsel bir temele sahip değildir",
      "Bu gözlem yalnızca yarı metallere özgüdür, geçiş sonrası metallerle ilgisizdir"
    ],
    correct: 0,
    explain: "Periyodik tabloda metal-ametal ayrımı, iki ayrık kutup arasında keskin bir çizgi değil, yarı metaller ve bazı geçiş-sonrası metaller (Ga, Sn, Pb gibi) üzerinden geçişli bir spektrum oluşturur; bu elementlerin koşula bağlı olarak (örneğin amfoter oksit oluşturarak) hem metalik hem ametalik davranış sergileyebilmesi, kimyasal sınıflandırmaların çoğu zaman kesin sınırlardan çok eğilim/derece meselesi olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Deniz, lantanit serisindeki 15 elementin kimyasal özelliklerinin birbirine oldukça benzer olduğunu; bunun nedeninin, bu elementlerde eklenen elektronların en dış (değerlik) kabukta değil, daha içteki 4f orbitalinde bulunmasından kaynaklandığını öğreniyor.",
    text: "Bu bilgi, kimyasal benzerlik ile elektron dizilimi arasındaki ilişki hakkında en doğru genel çıkarımı destekler?",
    options: [
      "Kimyasal davranış temel olarak değerlik (en dış) elektronlar tarafından belirlenir; bir seri element aynı değerlik elektron yapısını paylaşıyorsa (iç orbitallerdeki farklılıklara rağmen), kimyasal özellikleri de birbirine oldukça benzer olabilir",
      "Kimyasal davranış yalnızca toplam elektron sayısına bağlıdır, hangi orbitalde bulunduklarının önemi yoktur",
      "Lantanitlerin benzerliği tamamen rastlantısaldır, elektron dizilimiyle ilgisi yoktur",
      "İç orbitallerdeki elektronlar kimyasal davranışı değerlik elektronlarından daha çok etkiler",
      "Bu benzerlik yalnızca lantanitlere özgüdür ve hiçbir genel ilkeye dayanmaz"
    ],
    correct: 0,
    explain: "Lantanitlerde eklenen elektronlar iç kabuktaki 4f orbitaline yerleştiğinden, bu elementlerin değerlik (en dış) elektron yapısı büyük ölçüde sabit kalır; kimyasal davranış esas olarak değerlik elektronları tarafından belirlendiğinden, bu 15 element birbirine oldukça benzer kimyasal özellikler gösterir — bu, 'kimyasal benzerlik = benzer değerlik elektron yapısı' ilkesinin güçlü bir örneğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir teknisyen, periyodik tablodaki bir elementin özelliklerini tahmin ederken yalnızca 'grup numarasına' değil, aynı zamanda 'periyot numarasına' da bakmanın gerekli olduğunu; örneğin flor (2. periyot, grup 17) ile iyotun (5. periyot, grup 17) aynı grupta olsa da reaktiflik bakımından belirgin farklar gösterdiğini öğreniyor.",
    text: "Bu bilgi, periyodik tablo temelli tahminlerin doğruluğu hakkında en doğru hangi dengeli çıkarımı destekler?",
    options: [
      "Grup numarası genel kimyasal davranış türünü (örneğin iyon yükü eğilimini) güvenilir biçimde tahmin etmede güçlüdür; ancak reaktiflik derecesi gibi nicel özellikler için periyot numarasının (atom büyüklüğü, çekirdek uzaklığı) etkisi de mutlaka hesaba katılmalıdır",
      "Yalnızca grup numarası bilindiğinde bir elementin tüm özellikleri kusursuz tahmin edilebilir, periyot önemsizdir",
      "Periyot numarasının hiçbir tahmin değeri yoktur, yalnızca grup önemlidir",
      "Flor ve iyot aslında birbirinden tamamen farklı gruplardadır",
      "Reaktiflik periyodik tablo konumuyla hiçbir şekilde ilişkilendirilemez"
    ],
    correct: 0,
    explain: "Grup numarası, elementlerin genel kimyasal davranış türünü (örneğin halojenlerin -1 iyon oluşturma eğilimini) güvenilir biçimde tahmin etmeyi sağlarken, aynı gruptaki elementler arasındaki nicel farklar (örneğin flor ile iyot arasındaki reaktiflik farkı) periyot numarasının etkisiyle (artan atom büyüklüğü, azalan çekirdek çekimi) açıklanır; kapsamlı ve doğru bir tahmin için hem grup hem periyot bilgisinin birlikte değerlendirilmesi gerekir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Ayşe, bir Y elementinin elektron diziliminin [Kr] 5s² 4d¹⁰ 5p³ olduğunu görüyor.",
    text: "Bu elektron dizilimine göre Y elementi periyodik tabloda hangi periyot ve grupta yer alır?",
    options: ["5. periyot, 15. grup", "4. periyot, 15. grup", "5. periyot, 13. grup", "3. periyot, 15. grup", "5. periyot, 5. grup"],
    correct: 0,
    explain: "En büyük baş kuantum sayısı 5 olduğundan Y 5. periyottadır; p bloğunda 3 değerlik elektronu (5p³) olduğundan grup numarası 10+5=15'tir (bu element antimondur, Sb)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Meraklı bir gözlemci, berilyumun (Be, [He]2s²) ve baryumun (Ba, [Xe]6s²) her ikisinin de 2. grupta yer aldığını, ikisinin de 2 elektron kaybederek +2 iyon oluşturduğunu, ancak baryumun berilyuma göre bu elektronları çok daha kolay kaybettiğini öğreniyor.",
    text: "Bu karşılaştırmadan tümevarımsal olarak grup içi eğilimler hakkında en doğru genel çıkarım hangisidir?",
    options: [
      "Aynı gruptaki elementler benzer iyon yükü eğilimi gösterse de, değerlik elektronunun çekirdekten uzaklığı arttıkça (periyot arttıkça) bu elektronun koparılması enerji bakımından kolaylaşır",
      "Berilyum ve baryum arasında hiçbir ortak özellik yoktur",
      "Grup içindeki tüm elementler elektronlarını tamamen aynı kolaylıkla kaybeder",
      "Baryumun daha kolay iyonlaşması grup numarasıyla değil, tamamen rastgele bir özellikle ilgilidir",
      "Bu karşılaştırma yalnızca 2. grup için özeldir ve başka gruplara hiç uygulanamaz"
    ],
    correct: 0,
    explain: "Be ve Ba aynı grupta olduğundan aynı iyon yükü eğilimini (her ikisi +2) paylaşır; ancak Ba'nın değerlik elektronu çekirdekten çok daha uzakta (n=6) olduğundan çekim kuvveti zayıftır ve bu elektronların koparılması (iyonlaşma enerjisi) Be'ye (n=2) göre çok daha kolaydır — bu, grup içi nitel benzerliğin nicel bir eğilimle (periyot arttıkça kolaylaşan iyonlaşma) birlikte var olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir gazeteci, periyodik tabloda bir X elementinin komşu bir Y elementiyle (X'ten bir periyot sonra, aynı grup) iyon oluşturma eğilimi bakımından aynı yükü paylaştığını, ancak X²⁺ iyonunun Y²⁺'dan daha küçük yarıçapa sahip olduğunu gözlemliyor.",
    text: "Bu gözlemden, aynı grup içindeki iyonların yarıçapı hakkında tümevarımsal olarak en doğru genel kural çıkarılabilir?",
    options: [
      "Aynı yükte iyonlar oluşturan grup elementlerinde, periyot numarası arttıkça (aşağı indikçe) iyon yarıçapı da genellikle artar, çünkü değerlik elektronları daha yüksek enerji düzeylerinde (çekirdekten daha uzakta) bulunur",
      "Aynı gruptaki iyonların yarıçapı periyot numarasından bağımsız olarak her zaman eşittir",
      "İyon yarıçapı yalnızca yükle belirlenir, hangi periyotta olduğunun önemi yoktur",
      "Periyot arttıkça iyon yarıçapı azalır, çünkü çekirdek yükü de artar",
      "Bu gözlem yalnızca X ve Y elementlerine özgüdür, genellenemez"
    ],
    correct: 0,
    explain: "Aynı grupta, aynı yükte iyon oluşturan elementlerde (örneğin Mg²⁺ ve Ca²⁺), periyot arttıkça değerlik elektronlarının bulunduğu enerji düzeyi (n) de arttığından, elektron bulutu çekirdekten daha uzağa yerleşir ve iyon yarıçapı büyür; bu, grup boyunca aşağı inildikçe iyon yarıçapının genel olarak arttığı sistematik eğilimin bir örneğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir çiftçi, bir bilim insanının periyodik tabloyu 'kimyanın gramer kitabı' olarak tanımladığını okuyor: tıpkı dil bilgisi kurallarının sonsuz sayıda cümle üretmeyi mümkün kılması gibi, periyodik tablonun da sınırlı sayıda ilkeyle çok sayıda elementin davranışını tahmin etmeyi sağladığını öğreniyor.",
    text: "Bu benzetme, periyodik tablonun bilimsel değeri hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Periyodik tablo, ezberlenmesi gereken ayrık olgular yığını değil; sınırlı sayıda temel ilkeden (elektron dizilimi, değerlik elektron sayısı vb.) çok sayıda elementin davranışının sistematik olarak türetilebildiği, ekonomik ve güçlü bir kavramsal çerçevedir",
      "Bu benzetme yalnızca bir edebi süsleme olup bilimsel bir anlam taşımaz",
      "Periyodik tablo, dil bilgisi gibi öznel ve keyfi kurallardan oluşur",
      "Bu benzetme, periyodik tablonun her elementin özelliklerini ayrı ayrı ezberlemek zorunda olduğumuz anlamına geldiğini gösterir",
      "Kimya ve dil bilimi arasında hiçbir yapısal benzerlik kurulamaz"
    ],
    correct: 0,
    explain: "'Gramer kitabı' benzetmesi, periyodik tablonun her elementin özelliğini ayrı ayrı ezberlemeyi gerektiren dağınık bir bilgi yığını olmadığını; aksine sınırlı sayıda temel ilkeden (elektron dizilimi kuralları, grup/periyot eğilimleri) çok sayıda elementin davranışının sistematik ve ekonomik biçimde türetilip tahmin edilebildiği güçlü bir kavramsal çerçeve olduğunu vurgular."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir fabrika işçisi, periyodik tabloda henüz sentezlenmemiş, çok yüksek atom numaralı hipotetik bir elementin (örneğin 119. element) hangi grup ve periyotta yer alacağının, elektron dizilimi kurallarına dayanılarak önceden tahmin edilebildiğini öğreniyor.",
    text: "Bu bilgi, periyodik tablonun bilimsel bir sistem olarak gücü hakkında en doğru hangi ileri düzey çıkarımı destekler?",
    options: [
      "Periyodik tablonun altında yatan elektron dizilimi ilkeleri o kadar sistematik ve tutarlıdır ki, henüz fiziksel olarak gözlemlenmemiş elementlerin bile konumu ve genel kimyasal davranışı önceden, deneyden bağımsız olarak tahmin edilebilir",
      "Henüz sentezlenmemiş elementler hakkında hiçbir bilimsel tahmin yapılamaz",
      "119. elementin periyodik tablodaki yeri tamamen rastgele belirlenecektir",
      "Periyodik tablo yalnızca zaten keşfedilmiş elementler için anlamlıdır, gelecekteki elementlere uygulanamaz",
      "Bu tahminler yalnızca deneysel gözlemle yapılabilir, teorik ilkelerle yapılamaz"
    ],
    correct: 0,
    explain: "Periyodik tablonun temelindeki elektron dizilimi ilkeleri (Aufbau, n+l kuralı, blok yapısı) o kadar sistematik ve güvenilirdir ki, bilim insanları henüz sentezlenmemiş ağır elementlerin bile periyodik tablodaki konumunu ve genel kimyasal davranış eğilimini teorik olarak, deneyden önce tahmin edebilir; bu, periyodik sistemin gücünün en çarpıcı göstergelerinden biridir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir üniversite öğrencisi, S²⁻, Cl⁻, K⁺, Ca²⁺ iyonlarının hepsinin argon (Ar) ile aynı elektron sayısına (18) sahip izoelektronik bir seri oluşturduğunu; bu seride proton sayısının 16'dan 20'ye kadar arttığını inceliyor.",
    text: "Bu seriden yola çıkarak, izoelektronik iyonlarda yük büyüklüğü ile iyon yarıçapı arasındaki ilişki için tümevarımsal olarak en doğru genel kural hangisidir?",
    options: [
      "Elektron sayısı sabitken proton sayısı (dolayısıyla pozitif yük) arttıkça çekirdek çekimi güçlenir ve iyon yarıçapı küçülür; bu nedenle S²⁻ en büyük, Ca²⁺ en küçük iyondur",
      "Negatif yüklü iyonlar her zaman pozitif yüklü iyonlardan daha küçüktür",
      "İzoelektronik seride yük büyüklüğünün iyon yarıçapıyla hiçbir ilişkisi yoktur",
      "Proton sayısı arttıkça iyon yarıçapı da orantılı biçimde büyür",
      "Bu seride tüm iyonların yarıçapı elektron sayısı eşit olduğundan birbirine eşittir"
    ],
    correct: 0,
    explain: "S²⁻ (16 proton), Cl⁻ (17 proton), K⁺ (19 proton), Ca²⁺ (20 proton) sırasında elektron sayısı sabit (18) kalırken proton sayısı artar; bu artan çekirdek yükü elektron bulutunu daha güçlü çektiğinden iyon yarıçapı bu sırayla sistematik olarak küçülür — S²⁻ en büyük, Ca²⁺ en küçük iyondur."
  }
],
  "ozellikler": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir kimya mühendisi, 'atom yarıçapı' kavramının tanımını öğreniyor.",
    text: "Atom yarıçapı için en doğru tanım hangisidir?",
    options: ["Yalnızca çekirdeğin büyüklüğü", "Çekirdek merkezinden en dış elektron kabuğuna olan uzaklık", "Protonun boyutu", "Atomun kütlesi", "Elektronun hızı"],
    correct: 1,
    explain: "Atom yarıçapı, bir atomun çekirdek merkezinden en dış kararlı elektron kabuğuna olan yaklaşık uzaklığı olarak tanımlanır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir çevre mühendisi, periyodik tabloda aynı grup boyunca (yukarıdan aşağıya) atom yarıçapının nasıl değiştiğini araştırıyor.",
    text: "Aynı grupta yukarıdan aşağıya inildikçe atom yarıçapı genel olarak nasıl değişir?",
    options: ["Azalır", "Artar", "Değişmez", "Önce artar sonra azalır", "Rastgele değişir"],
    correct: 1,
    explain: "Aynı grupta aşağı inildikçe enerji düzeyi (n) arttığından, elektronlar çekirdekten daha uzak kabuklarda bulunur ve atom yarıçapı genel olarak artar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Deniz, aynı periyot boyunca (soldan sağa) atom yarıçapının nasıl değiştiğini araştırıyor.",
    text: "Aynı periyotta soldan sağa gidildikçe atom yarıçapı genel olarak nasıl değişir?",
    options: ["Artar", "Azalır", "Değişmez", "Yalnızca metallerde değişir", "Rastgele değişir"],
    correct: 1,
    explain: "Aynı periyotta soldan sağa gidildikçe çekirdek yükü (proton sayısı) artar, elektron sayısı aynı kabukta arttığından çekim kuvveti güçlenir ve atom yarıçapı genel olarak azalır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir veli, 'iyonlaşma enerjisi' kavramının tanımını öğreniyor.",
    text: "İyonlaşma enerjisi için en doğru tanım hangisidir?",
    options: ["Bir atomun kütlesi", "Gaz hâlindeki bir atomdan bir elektron koparmak için gereken minimum enerji", "Bir atomun yarıçapı", "Bir atomun elektron kazanma isteği", "Bir bileşiğin erime sıcaklığı"],
    correct: 1,
    explain: "İyonlaşma enerjisi, gaz hâlindeki nötr bir atomdan bir elektron koparıp uzaklaştırmak için gereken minimum enerji miktarıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir kariyer danışmanı, aynı periyot boyunca (soldan sağa) iyonlaşma enerjisinin genel eğilimini araştırıyor.",
    text: "Aynı periyotta soldan sağa gidildikçe iyonlaşma enerjisi genel olarak nasıl değişir?",
    options: ["Azalır", "Artar", "Değişmez", "Yalnızca ametallerde artar", "Sıfıra iner"],
    correct: 1,
    explain: "Aynı periyotta soldan sağa gidildikçe çekirdek yükü artar ve atom yarıçapı küçülür; bu, elektronların daha güçlü çekilmesine ve iyonlaşma enerjisinin genel olarak artmasına yol açar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir fabrika işçisi, aynı grup boyunca (yukarıdan aşağıya) iyonlaşma enerjisinin genel eğilimini araştırıyor.",
    text: "Aynı grupta yukarıdan aşağıya inildikçe iyonlaşma enerjisi genel olarak nasıl değişir?",
    options: ["Artar", "Azalır", "Değişmez", "Önce azalır sonra sabit kalır", "Rastgele değişir"],
    correct: 1,
    explain: "Aynı grupta aşağı inildikçe değerlik elektronu çekirdekten uzaklaşır ve iç kabuk elektronlarının perdeleme etkisi artar; bu nedenle iyonlaşma enerjisi genel olarak azalır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir doktora öğrencisi, 'elektronegatiflik' kavramının tanımını öğreniyor.",
    text: "Elektronegatiflik için en doğru tanım hangisidir?",
    options: ["Bir atomun kütlesi", "Bir atomun kimyasal bağdaki elektronları kendine çekme gücü", "Bir atomun renk özelliği", "Bir atomun manyetik özelliği", "Bir atomun radyoaktif olma derecesi"],
    correct: 1,
    explain: "Elektronegatiflik, bir atomun kimyasal bir bağdaki ortak elektronları kendine doğru çekme eğiliminin (gücünün) bir ölçüsüdür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Can, periyodik tablodaki en elektronegatif elementi araştırıyor.",
    text: "Periyodik tablodaki en elektronegatif element hangisidir?",
    options: ["Sodyum (Na)", "Flor (F)", "Helyum (He)", "Sezyum (Cs)", "Karbon (C)"],
    correct: 1,
    explain: "Flor (F), periyodik tablodaki tüm elementler arasında en yüksek elektronegatifliğe sahiptir; bu, küçük atom yarıçapı ve yüksek etkin çekirdek yükünün bir sonucudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir hemşire, aynı periyotta soldan sağa gidildikçe elektronegatifliğin nasıl değiştiğini araştırıyor.",
    text: "Aynı periyotta soldan sağa gidildikçe elektronegatiflik genel olarak nasıl değişir?",
    options: ["Değişmez", "Azalır", "Artar", "Önce artar sonra sıfırlanır", "Yalnızca metallerde artar"],
    correct: 2,
    explain: "Aynı periyotta soldan sağa gidildikçe atom yarıçapı küçülür ve çekirdek çekimi güçlenir; bu, elektronegatifliğin genel olarak artmasına yol açar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir sağlık çalışanı, aynı grupta yukarıdan aşağıya inildikçe elektronegatifliğin nasıl değiştiğini araştırıyor.",
    text: "Aynı grupta yukarıdan aşağıya inildikçe elektronegatiflik genel olarak nasıl değişir?",
    options: ["Artar", "Azalır", "Değişmez", "Önce azalır sonra artar", "Yalnızca ametallerde azalır"],
    correct: 1,
    explain: "Aynı grupta aşağı inildikçe atom yarıçapı büyür ve değerlik elektronları çekirdekten uzaklaşır; bu, elektronegatifliğin genel olarak azalmasına yol açar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir kimya öğretmeni, periyodik tabloda metalik özelliğin (elektron verme eğiliminin) genel dağılımını araştırıyor.",
    text: "Periyodik tabloda metalik özellik en fazla nerede görülür?",
    options: ["Tam ortada", "Sağ üst köşede", "Sol alt köşede", "Yalnızca 18. grupta", "Yalnızca 2. periyotta"],
    correct: 2,
    explain: "Metalik özellik (elektron verme, iyonlaşma enerjisinin düşük olması), periyodik tablonun sol alt köşesine doğru artar; bu bölgedeki elementler (Cs, Fr gibi) en metalik karakterdedir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir turist, periyodik tabloda ametalik özelliğin (elektron alma eğiliminin) genel dağılımını araştırıyor.",
    text: "Periyodik tabloda ametalik özellik en fazla nerede görülür?",
    options: ["Sol alt köşede", "Sağ üst köşede (soy gazlar hariç)", "Tam ortada", "Yalnızca 1. grupta", "Yalnızca son periyotta"],
    correct: 1,
    explain: "Ametalik özellik (elektron alma eğilimi, yüksek elektronegatiflik), periyodik tablonun sağ üst köşesine doğru artar (soy gazlar bu eğilimin dışında değerlendirilir çünkü zaten kararlıdırlar)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir lise öğrencisi, soy gazların (18. grup) neden çok yüksek iyonlaşma enerjisine sahip olduğunu araştırıyor.",
    text: "Soy gazların yüksek iyonlaşma enerjisine sahip olmasının temel nedeni en doğru hangisidir?",
    options: ["Çok az proton içermeleri", "Çok büyük atom yarıçapına sahip olmaları", "Tam dolu ve kararlı bir değerlik elektron dizilimine sahip olmaları", "Renksiz gazlar olmaları", "Doğada çok az bulunmaları"],
    correct: 2,
    explain: "Soy gazlar tam dolu ve kararlı bir değerlik elektron dizilimine sahip olduğundan, bu kararlı yapıdan bir elektron koparmak için çok yüksek enerji gerekir; bu da onların yüksek iyonlaşma enerjisine sahip olmasını açıklar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir gazeteci, alkali metallerin (1. grup) neden düşük iyonlaşma enerjisine sahip olduğunu araştırıyor.",
    text: "Alkali metallerin düşük iyonlaşma enerjisine sahip olmasının temel nedeni en doğru hangisidir?",
    options: ["Hiç elektron içermemeleri", "Çok yüksek elektronegatifliğe sahip olmaları", "Tek bir değerlik elektronuna sahip olmaları ve bu elektronun görece zayıf bağlı olması", "Tam dolu değerlik kabuğuna sahip olmaları", "Yalnızca gaz hâlinde bulunmaları"],
    correct: 2,
    explain: "Alkali metallerin tek bir değerlik elektronu vardır ve bu elektron, iç kabuk elektronlarının perdeleme etkisi nedeniyle çekirdeğe görece zayıf bağlıdır; bu nedenle bu elektronu koparmak için düşük enerji yeterlidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Onur, 'etkin çekirdek yükü' kavramının ne anlama geldiğini öğreniyor.",
    text: "Etkin çekirdek yükü için en doğru tanım hangisidir?",
    options: ["Çekirdekteki toplam nötron sayısı", "Çekirdekteki toplam proton sayısı", "Bir elektronun, iç kabuk elektronlarının perdeleme etkisi hesaba katıldıktan sonra hissettiği net pozitif yük", "Atomun toplam elektron sayısı", "Atomun kütle numarası"],
    correct: 2,
    explain: "Etkin çekirdek yükü, bir elektronun gerçek çekirdek yükünden, iç kabuk elektronlarının perdeleme (ekranlama) etkisi çıkarıldıktan sonra hissettiği net pozitif çekim kuvvetini ifade eder."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir stajyer, katyon (pozitif iyon) yarıçapını nötr atomun yarıçapıyla karşılaştırıyor.",
    text: "Bir atomun katyonu, nötr atoma göre yarıçap bakımından nasıldır?",
    options: ["Nötr atomla tam olarak aynı büyüklüktedir", "Nötr atomdan daha büyüktür", "Nötr atomdan daha küçüktür", "Katyonların yarıçapı yoktur", "Karşılaştırma yapılamaz"],
    correct: 2,
    explain: "Bir atom elektron kaybederek katyon oluşturduğunda, hem elektron sayısı azalır hem de kalan elektronlar aynı çekirdek yüküyle daha az sayıda elektrona dağıtılan çekim kuvvetini hisseder; bu nedenle katyon, nötr atomdan daha küçüktür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir kalite kontrol uzmanı, anyon (negatif iyon) yarıçapını nötr atomun yarıçapıyla karşılaştırıyor.",
    text: "Bir atomun anyonu, nötr atoma göre yarıçap bakımından nasıldır?",
    options: ["Nötr atomla tam olarak aynı büyüklüktedir", "Nötr atomdan daha küçüktür", "Nötr atomdan daha büyüktür", "Anyonların yarıçapı yoktur", "Karşılaştırma yapılamaz"],
    correct: 2,
    explain: "Bir atom elektron kazanarak anyon oluşturduğunda, aynı çekirdek yükü artık daha fazla sayıda elektronu çekmek zorunda kalır ve elektron-elektron itmesi artar; bu nedenle anyon, nötr atomdan daha büyüktür."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Aşağıdaki grafik, 3. periyot elementlerinin (Na'dan Ar'a) yaklaşık atom yarıçapı değerlerini (pikometre, pm) göstermektedir.",
    chart: {
      type: "line",
      title: "3. periyot elementlerinde atom yarıçapı (pm)",
      labels: ["Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"],
      values: [186, 160, 143, 117, 110, 104, 99, 71]
    },
    text: "Grafikteki genel eğilime göre bu azalışın en doğru açıklaması hangisidir?",
    options: [
      "Bu azalış tamamen rastlantısaldır, hiçbir sistematik nedeni yoktur",
      "Soldan sağa gidildikçe elektron sayısı azaldığı için yarıçap küçülür",
      "Aynı periyotta soldan sağa gidildikçe çekirdek yükü artarken elektronlar aynı ana enerji düzeyinde kaldığından, artan çekim kuvveti atom yarıçapını küçültür",
      "Soldan sağa gidildikçe enerji düzeyi (n) arttığı için yarıçap küçülür",
      "Yarıçap yalnızca elementin renginden etkilenir"
    ],
    correct: 2,
    explain: "3. periyotta soldan sağa gidildikçe her elementte bir proton eklenirken elektronlar aynı ana enerji düzeyinde (n=3) kalmaya devam eder; artan çekirdek yükü elektronları daha güçlü çektiğinden atom yarıçapı sistematik olarak küçülür."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Aşağıdaki grafik, 2. periyot elementlerinin (Li'dan Ne'ye) birinci iyonlaşma enerjisi değerlerini (kJ/mol) göstermektedir.",
    chart: {
      type: "bar",
      title: "2. periyot elementlerinde 1. iyonlaşma enerjisi (kJ/mol)",
      labels: ["Li", "Be", "B", "C", "N", "O", "F", "Ne"],
      values: [520, 900, 801, 1086, 1402, 1314, 1681, 2081]
    },
    text: "Grafikte genel artan eğilime rağmen Be→B ve N→O arasında görülen küçük düşüşlerin en olası açıklaması hangisidir?",
    options: [
      "Be ve N elementleri aslında farklı bir periyottadır",
      "Bu düşüşler ölçüm hatasından kaynaklanır, gerçekte hiçbir düşüş yoktur",
      "Be'de tam dolu 2s² alt kabuğunun görece kararlılığı ve N'de yarı dolu 2p³ alt kabuğunun görece kararlılığı, bir sonraki elementten (B, O) elektron koparmayı nispeten kolaylaştırır",
      "Düşüşler yalnızca elementlerin renkleriyle ilgilidir",
      "B ve O'nun proton sayısı Be ve N'den azdır"
    ],
    correct: 2,
    explain: "Be'nin tam dolu 2s² alt kabuğu ve N'nin yarı dolu 2p³ alt kabuğu ekstra kararlılık sağlar; B'de (2s²2p¹) elektron enerji bakımından biraz daha yüksek olan p orbitalinden, O'da (2s²2p⁴) ise eşleşmiş bir elektrondan koparıldığından, bu elementlerin iyonlaşma enerjisi bir önceki elementten (Be, N) beklenenin biraz altında kalır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Aşağıdaki tabloda birkaç elementin elektronegatiflik değerleri (Pauling ölçeği) verilmiştir.",
    table: {
      headers: ["Element", "Elektronegatiflik", "Grup"],
      rows: [
        ["Na", "0,93", "1"],
        ["Mg", "1,31", "2"],
        ["Al", "1,61", "13"],
        ["Cl", "3,16", "17"]
      ]
    },
    text: "Tablodaki verilere göre Na ile Cl arasındaki büyük elektronegatiflik farkı, bu iki elementin oluşturacağı bağ türü hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bu fark, aralarında yalnızca kovalent bağ oluşacağını gösterir",
      "Bu fark, aralarında hiçbir bağ oluşamayacağını gösterir",
      "Aralarındaki büyük elektronegatiflik farkı, elektronların Cl'ye neredeyse tamamen aktarıldığı iyonik bir bağ (NaCl) oluşumuna işaret eder",
      "Elektronegatiflik farkının bağ türüyle hiçbir ilişkisi yoktur",
      "Bu fark, Na'nın Cl'den elektron alacağını gösterir"
    ],
    correct: 2,
    explain: "Na (0,93) ile Cl (3,16) arasındaki elektronegatiflik farkı oldukça büyüktür (yaklaşık 2,2); bu büyüklükteki farklar genellikle elektronların bir atomdan diğerine neredeyse tamamen aktarıldığı iyonik bağ oluşumuna işaret eder (NaCl iyonik bir bileşiktir)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir teknisyen, sodyum (Na) ile magnezyumun (Mg) atom yarıçapını karşılaştırıyor; ikisi de 3. periyottadır ancak Mg'nin yarıçapı Na'dan küçüktür.",
    text: "Bu fark en doğru hangi şekilde açıklanır?",
    options: [
      "Bu fark tamamen rastlantısaldır",
      "Mg'nin elektron sayısı Na'dan azdır",
      "Mg farklı bir periyotta yer aldığı için yarıçapı küçüktür",
      "Mg'nin çekirdek yükü Na'dan bir fazladır ve aynı enerji düzeyindeki elektronlar bu ekstra yükü hissederek daha güçlü çekilir",
      "Mg'nin nötron sayısı Na'dan az olduğu için yarıçapı küçüktür"
    ],
    correct: 3,
    explain: "Mg (12 proton), Na'dan (11 proton) bir fazla çekirdek yüküne sahiptir; her iki element de aynı ana enerji düzeyinde (n=3) elektron bulundurduğundan, Mg'deki ekstra çekirdek yükü elektronları daha güçlü çeker ve atom yarıçapını küçültür."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir ev hanımı, bir atomun ardışık iyonlaşma enerjilerini (1., 2., 3. elektronu koparmak için gereken enerjileri) inceliyor ve değerlik elektronları bittikten sonra bir sonraki iyonlaşma enerjisinde çok büyük bir sıçrama olduğunu gözlemliyor (örneğin sodyumda 2. iyonlaşma enerjisi 1.'den yaklaşık 10 kat fazladır).",
    text: "Bu büyük sıçramanın en doğru açıklaması hangisidir?",
    options: [
      "Sodyum atomunun ikinci iyonlaşmadan sonra farklı bir elemente dönüştüğü için sıçrama olur",
      "Bu sıçrama ölçüm hatasından kaynaklanır",
      "İkinci elektronun kütlesi birinciden fazladır",
      "Değerlik elektronları tükendikten sonra bir sonraki elektron, çekirdeğe çok daha yakın ve daha az perdelenen bir iç kabuktan koparılmaya çalışılır, bu da çok daha fazla enerji gerektirir",
      "Bu sıçrama yalnızca sodyuma özgüdür, başka hiçbir elementte görülmez"
    ],
    correct: 3,
    explain: "Sodyumun tek değerlik elektronu (3s¹) koparıldıktan sonra geriye kalan Na⁺ iyonu tam dolu, çekirdeğe yakın bir iç kabuk (2p⁶) yapısına sahiptir; bu iç kabuk elektronunu koparmak, hem çekirdeğe daha yakın olmaları hem de daha az perdelenmeleri nedeniyle çok daha fazla enerji gerektirir — bu örüntü, değerlik elektron sayısını belirlemede kullanılabilecek genel bir ipucudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir laboratuvar ekibi, geçiş metallerinde (d bloğu) atom yarıçapının bir periyot boyunca ana grup elementlerine göre çok daha az değiştiğini (görece sabit kaldığını) gözlemliyor.",
    text: "Bu görece sabitliğin en olası açıklaması hangisidir?",
    options: [
      "Bu sabitlik yalnızca görsel bir yanılsamadır, gerçekte büyük değişim vardır",
      "Geçiş metallerinde çekirdek yükü hiç değişmez",
      "Geçiş metalleri elektron içermez",
      "Geçiş metallerinde eklenen elektronlar iç d orbitaline yerleştiğinden, değerlik (en dış) elektronlar üzerindeki perdeleme etkisi artan çekirdek yükünü büyük ölçüde dengeler",
      "Geçiş metallerinde periyot kavramı geçerli değildir"
    ],
    correct: 3,
    explain: "Geçiş metallerinde art arda eklenen elektronlar en dış (n) değil, bir iç (n-1) d orbitaline yerleştiğinden, bu iç elektronlar değerlik elektronlarını artan çekirdek yükünden önemli ölçüde perdeler; bu denge, atom yarıçapının bir periyot boyunca ana grup elementlerine kıyasla çok daha az değişmesine yol açar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir aşçı, oksijenin (O) elektron ilgisinin (bir elektron aldığında açığa çıkan enerjinin) florun (F) elektron ilgisinden bir miktar farklı olduğunu, ancak genel eğilimin periyot boyunca sağa doğru artan bir elektron ilgisi olduğunu öğreniyor.",
    text: "Elektron ilgisi (elektron afinitesi) kavramı için en doğru tanım hangisidir?",
    options: [
      "Bir atomun sahip olduğu toplam proton sayısı",
      "Bir atomun kütlesinin elektron sayısına oranı",
      "Bir atomun yarıçapının elektronegatifliğe oranı",
      "Gaz hâlindeki nötr bir atomun bir elektron alarak anyon oluşturması sırasında açığa çıkan (veya gereken) enerji miktarı",
      "Bir bileşiğin erime noktası"
    ],
    correct: 3,
    explain: "Elektron ilgisi (elektron afinitesi), gaz hâlindeki nötr bir atomun bir elektron alarak anyon oluşturması sırasında açığa çıkan (genellikle) enerji miktarını ifade eder; ametallerde bu değer genellikle metallere göre daha büyüktür (daha fazla enerji açığa çıkar) çünkü ametaller elektron almaya daha yatkındır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir itfaiyeci, periyodik tabloda klor (Cl) ile bromun (Br) her ikisinin de halojen olduğunu, ancak klorun bromdan daha reaktif olduğunu öğreniyor.",
    text: "Bu reaktiflik farkının en doğru açıklaması hangisidir?",
    options: [
      "Reaktiflik atom yarıçapıyla hiçbir ilişkisi yoktur",
      "Klor daha fazla proton içerdiği için daha az reaktiftir",
      "Brom daha küçük olduğu için daha reaktiftir",
      "Klor, brom'dan daha küçük atom yarıçapına ve daha yüksek elektronegatifliğe sahip olduğundan elektron alma eğilimi (ve dolayısıyla reaktifliği) daha yüksektir",
      "Klor ve brom'un reaktifliği birbirine tamamen eşittir"
    ],
    correct: 3,
    explain: "Klor, brom'a göre daha yukarıdaki periyotta yer aldığından daha küçük atom yarıçapına ve daha yüksek elektronegatifliğe sahiptir; bu, klorun elektron alma eğiliminin (ve halojen olarak reaktifliğinin) bromdan daha yüksek olmasını açıklar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir üniversite öğrencisi, periyodik tabloda sol alt köşeye yakın elementlerin (Cs, Fr gibi) su ile şiddetli tepkimeye girdiğini, sağ üst köşeye yakın elementlerin (F, O gibi) ise güçlü yükseltgen/elektron alıcı olarak davrandığını öğreniyor.",
    text: "Bu iki uç davranış, periyodik özellikler ile kimyasal reaktiflik arasındaki ilişki hakkında en doğru hangi genel çıkarımı destekler?",
    options: [
      "Sol alt köşedeki elementler her zaman ametaldir",
      "Periyodik tablonun her iki köşesi de aynı derecede kararlıdır, reaktiflik farkı yoktur",
      "Reaktiflik yalnızca atomun rengiyle ilgilidir, periyodik özelliklerle ilgisi yoktur",
      "Düşük iyonlaşma enerjisi/elektronegatiflik (sol alt köşe) elektron verme eğilimini, yüksek elektronegatiflik/elektron ilgisi (sağ üst köşe) ise elektron alma eğilimini artırır; bu zıt eğilimler her iki uçtaki elementleri de kimyasal olarak oldukça reaktif kılar",
      "Sağ üst köşedeki elementler hiçbir zaman tepkimeye girmez"
    ],
    correct: 3,
    explain: "Periyodik tablonun sol alt köşesindeki elementler (düşük iyonlaşma enerjisi nedeniyle) elektron vermeye çok yatkınken, sağ üst köşedeki elementler (yüksek elektronegatiflik/elektron ilgisi nedeniyle) elektron almaya çok yatkındır; bu zıt ama güçlü eğilimler, her iki bölgedeki elementleri de kimyasal olarak oldukça reaktif kılar (soy gazlar hariç)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir laboratuvar teknisyeni, aynı grupta metalik özelliğin neden aşağı indikçe arttığını (örneğin Li'den Cs'ye) sorguluyor.",
    text: "Bu eğilimin en doğru açıklaması hangisidir?",
    options: [
      "Metalik özellik grup içinde hiç değişmez",
      "Grupta aşağı inildikçe elektronegatiflik artar, bu da metalik özelliği artırır",
      "Grupta aşağı inildikçe proton sayısı azalır, bu da metalik özelliği artırır",
      "Grupta aşağı inildikçe atom yarıçapı büyür ve iyonlaşma enerjisi azalır; bu da elektron verme (metalik) eğilimini artırır",
      "Grupta aşağı inildikçe değerlik elektron sayısı artar, bu da metalik özelliği artırır"
    ],
    correct: 3,
    explain: "Grupta aşağı inildikçe atom yarıçapı büyür ve değerlik elektronu çekirdekten uzaklaşıp daha zayıf çekildiğinden iyonlaşma enerjisi azalır; düşük iyonlaşma enerjisi, elektron verme (metalik) eğiliminin artması anlamına gelir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Meraklı bir öğrenci, kalsiyum (Ca) ile onun Ca²⁺ iyonunun yarıçapını karşılaştırıyor; iyonun yarıçapı atomdan belirgin biçimde küçüktür.",
    text: "Bu büyük yarıçap farkının en doğru açıklaması hangisidir?",
    options: [
      "Yarıçap farkı yalnızca ölçüm belirsizliğinden kaynaklanır",
      "Ca²⁺ iyonunda proton sayısı azaldığı için yarıçap küçülür",
      "Ca²⁺ iyonu Ca atomundan farklı bir elementtir",
      "Ca²⁺ oluşurken en dış enerji düzeyindeki (n=4) tüm elektronlar kaybedildiğinden, kalan elektronlar bir alt enerji düzeyinde (n=3) toplanır; bu da yarıçapta belirgin bir küçülmeye yol açar",
      "Ca²⁺ iyonunda hiç elektron kalmaz"
    ],
    correct: 3,
    explain: "Ca ([Ar]4s²) Ca²⁺ye dönüşürken tüm n=4 elektronlarını kaybeder; kalan elektronlar artık en dış kabuk olarak n=3 düzeyinde bulunur. Bir enerji düzeyinin tamamen kaybedilmesi, iyonun nötr atomdan belirgin biçimde küçük olmasına yol açar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Buse, silisyumun (Si) hem metal hem ametal özellikleri sınırlı ölçüde gösteren bir 'yarı metal' olduğunu; bunun periyodik tablodaki metal-ametal sınırına yakın konumundan kaynaklandığını öğreniyor.",
    text: "Bu bilgi, periyodik özelliklerin (elektronegatiflik, iyonlaşma enerjisi) metal/ametal karakterle ilişkisi hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Metal-ametal sınırındaki elementlerin hiçbir ölçülebilir periyodik özelliği yoktur",
      "Yarı metallerin elektronegatiflik değeri metallerden daha düşüktür",
      "Yarı metallerin periyodik özellikleri tamamen rastgeledir",
      "Metal-ametal sınırına yakın elementler, orta düzeyde elektronegatiflik ve iyonlaşma enerjisi değerlerine sahip olma eğilimindedir; bu ara değerler, karma (hem metalik hem ametalik) davranışla ilişkilendirilebilir",
      "Yarı metaller periyodik tablonun sol alt köşesinde bulunur"
    ],
    correct: 3,
    explain: "Metal-ametal sınırına yakın konumlanan yarı metaller (Si, Ge, As gibi), tipik metallerden yüksek ama tipik ametallerden düşük elektronegatiflik/iyonlaşma enerjisi değerlerine sahip olma eğilimindedir; bu 'ara' periyodik özellik değerleri, gözlemlenen karma (hem iletken hem yalıtkan benzeri) kimyasal/fiziksel davranışla tutarlıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir mühendis, bir A elementinin B elementinden daha büyük atom yarıçapına, ama daha düşük iyonlaşma enerjisine sahip olduğunu öğreniyor.",
    text: "Bu iki bilgi arasındaki ilişki hakkında en doğru çıkarım hangisidir?",
    options: [
      "Büyük atom yarıçapı her zaman yüksek iyonlaşma enerjisiyle ilişkilidir",
      "Bu iki gözlem birbiriyle çelişir, ikisi aynı anda doğru olamaz",
      "Atom yarıçapı ile iyonlaşma enerjisi arasında hiçbir ilişki yoktur",
      "Bu iki gözlem tutarlıdır, çünkü büyük atom yarıçapı genellikle düşük iyonlaşma enerjisiyle ilişkilidir (değerlik elektronu çekirdekten uzak ve zayıf bağlıdır)",
      "Bu bilgilerden hiçbir çıkarım yapılamaz"
    ],
    correct: 3,
    explain: "Atom yarıçapı büyüdükçe değerlik elektronu çekirdekten uzaklaşır ve çekim kuvveti (iç kabukların perdelemesi nedeniyle de) zayıflar; bu nedenle büyük atom yarıçapı ile düşük iyonlaşma enerjisi genellikle birlikte görülen, tutarlı periyodik eğilimlerdir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Aslı, potasyumun (K) kalsiyumdan (Ca) daha düşük iyonlaşma enerjisine sahip olduğunu öğreniyor; oysa ikisi de 4. periyottadır ve Ca, K'dan sonra gelir.",
    text: "Bu sıralama, periyot içi genel iyonlaşma enerjisi artışı eğilimiyle en doğru şekilde nasıl açıklanır?",
    options: [
      "Ca'nın düşük iyonlaşma enerjisi K'nin fazla proton içermesinden kaynaklanır",
      "Bu sıralama genel eğilimle çelişir ve açıklanamaz",
      "K'nin iyonlaşma enerjisi her zaman Ca'dan yüksektir, bu bilgi yanlıştır",
      "İyonlaşma enerjisi periyot içindeki sıralamayla hiçbir ilişkisi yoktur",
      "Bu, genel periyot içi artış eğilimiyle tutarlıdır: K (grup 1, tek değerlik e⁻) düşük iyonlaşma enerjisine sahipken, Ca (grup 2, daha fazla çekirdek yükü) periyotta ondan sonra geldiği için daha yüksek iyonlaşma enerjisine sahiptir"
    ],
    correct: 4,
    explain: "K, periyodun en solundaki (grup 1) elementi olarak en düşük iyonlaşma enerjisine sahiptir; Ca ise periyotta bir sonraki elementtir ve bir fazla çekirdek yüküne sahip olduğundan (aynı ana enerji düzeyinde), K'dan daha yüksek iyonlaşma enerjisine sahiptir — bu, periyot içi genel artış eğilimiyle tam olarak tutarlıdır."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Elif, azotun (N, [He]2s²2p³) birinci iyonlaşma enerjisinin oksijenden (O, [He]2s²2p⁴) daha yüksek olduğunu; bu durumun genel 'periyotta sağa gidildikçe iyonlaşma enerjisi artar' eğilimine aykırı göründüğünü fark ediyor.",
    text: "Bu görünürdeki istisnanın en doğru elektronik açıklaması hangisidir?",
    options: [
      "Bu istisna yalnızca azot ve oksijene özgüdür, hiçbir genel elektronik prensibe dayanmaz",
      "Bu istisna tamamen ölçüm hatasından kaynaklanır",
      "Azotun proton sayısı oksijenden fazladır, bu yüzden iyonlaşma enerjisi yüksektir",
      "Oksijenin elektron sayısı azottan azdır",
      "N'nin 2p³ dağılımı (üç ayrı orbitalde birer eşlenmemiş elektron) simetrik ve görece kararlıdır; O'da (2p⁴) ise bir orbitalde elektronlar eşleşmek zorunda kalır ve elektron-elektron itmesi bu elektronun koparılmasını nispeten kolaylaştırır"
    ],
    correct: 4,
    explain: "Azotun yarı dolu p³ alt kabuğu (her orbitalde birer eşlenmemiş elektron, Hund kuralına göre paralel spin) ekstra kararlılık sağlar. Oksijende ise dördüncü elektron mevcut bir orbitalde eşleşmek zorundadır; eşleşen iki elektron arasındaki ekstra itme, bu elektronun koparılmasını (iyonlaşmasını) nispeten kolaylaştırır — bu, genel artış eğilimindeki küçük ama sistematik bir sapmadır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Ece, berilyumun (Be, [He]2s²) birinci iyonlaşma enerjisinin bordan (B, [He]2s²2p¹) daha yüksek olduğunu öğreniyor.",
    text: "Bu istisnanın en doğru elektronik açıklaması hangisidir?",
    options: [
      "Berilyum bir soy gazdır, bu yüzden iyonlaşma enerjisi yüksektir",
      "Berilyumun proton sayısı bordan fazladır",
      "Bu fark tamamen rastlantısaldır, hiçbir elektronik temeli yoktur",
      "Bor, berilyumdan daha fazla elektrona sahip olduğu için iyonlaşma enerjisi otomatik olarak düşüktür",
      "Be'nin tam dolu 2s² alt kabuğu ekstra kararlıdır; B'de ise koparılan elektron enerji bakımından biraz daha yüksek olan (çekirdeğe daha az nüfuz eden) 2p orbitalinden alınır, bu da koparılmasını nispeten kolaylaştırır"
    ],
    correct: 4,
    explain: "Be'nin tam dolu 2s² alt kabuğu simetrik ve görece kararlıdır. B'de eklenen elektron 2p orbitaline gider; 2p orbitali 2s'den daha yüksek enerjilidir ve çekirdeğe daha az nüfuz ettiğinden daha zayıf bağlıdır — bu nedenle B'nin iyonlaşma enerjisi Be'ninkinden düşüktür, genel artış eğiliminde küçük bir sapma oluşur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bilim insanı, Be-B ve N-O arasındaki iyonlaşma enerjisi düşüşlerinin her ikisinin de 'ekstra kararlı bir alt kabuk yapısından (tam dolu veya yarı dolu) bir sonraki elemente geçiş' örüntüsünü paylaştığını fark ediyor.",
    text: "Bu iki istisnadan tümevarımsal olarak çıkarılabilecek en doğru genel ilke hangisidir?",
    options: [
      "Bu örüntü yalnızca 2. periyotta görülür, 3. periyotta hiç görülmez",
      "İyonlaşma enerjisi trendleri tamamen düzensizdir, hiçbir genel kural çıkarılamaz",
      "Bu iki istisna birbirinden tamamen bağımsızdır, ortak bir mekanizma paylaşmaz",
      "Tam dolu/yarı dolu alt kabuklar iyonlaşma enerjisini her zaman artırır, hiç azaltmaz",
      "Tam dolu veya yarı dolu bir alt kabuğun sağladığı ekstra elektronik kararlılık, periyot boyunca beklenen düzenli iyonlaşma enerjisi artışında öngörülebilir küçük sapmalara yol açabilir"
    ],
    correct: 4,
    explain: "Be→B (tam dolu 2s²'den sonra) ve N→O (yarı dolu 2p³'ten sonra) düşüşleri aynı temel mekanizmayı paylaşır: ekstra kararlı bir alt kabuk yapısından hemen sonraki elementte, yeni eklenen elektronun (farklı orbital enerjisi veya elektron eşleşme itmesi nedeniyle) nispeten daha kolay koparılması. Bu örüntü, 3. periyotta da (Mg→Al, P→S) benzer şekilde tekrarlanan sistematik bir eğilimdir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Burak, geçiş metallerinde iyonlaşma sırasında elektronların (n)s orbitalinden, (n-1)d orbitalinden önce kaybedildiğini (örneğin Fe → Fe²⁺'de önce 4s kaybedilir); ancak elektron dizilimi yazılırken (dolum sırasında) 4s'nin 3d'den önce dolduğunu hatırlıyor.",
    text: "Bu iki gözlem (dolum sırası ve iyonlaşma sırası) arasındaki görünürdeki tutarsızlık en doğru hangi şekilde çözümlenir?",
    options: [
      "Bu tutarsızlık yalnızca demir elementine özgüdür",
      "Bu iki gözlem birbiriyle çelişir ve bilim insanları bu çelişkiyi hâlâ çözememiştir",
      "Dolum sırası ve iyonlaşma sırası aslında birbirinin tam tersidir ve hiçbir mantıksal bağlantısı yoktur",
      "4s orbitali iyonlaşma sırasında tamamen ortadan kalkar",
      "Nötr atomda 4s enerjisi 3d'den biraz düşüktür (bu yüzden önce dolar); ancak bir veya daha fazla elektron uzaklaştırıldığında kalan elektronların perdeleme dengesi değişir ve 3d, 4s'nin altına iner — bu, orbital enerjilerinin atomun elektron sayısına bağlı olarak dinamik olduğunu gösterir"
    ],
    correct: 4,
    explain: "Orbital enerjileri sabit değildir; atomun elektron sayısına (ve dolayısıyla perdeleme/etkin çekirdek yükü dengesine) bağlı olarak değişir. Nötr atomda 4s enerjisi 3d'den biraz düşükken (Aufbau sırasını belirler), bir elektron kaybedildiğinde bu denge değişir ve 3d enerji bakımından 4s'nin altına iner; bu yüzden iyonlaşma sırasında önce 4s elektronları kaybedilir — bu, aynı orbitallerin farklı bağlamlarda farklı bağıl enerjilere sahip olabileceğinin önemli bir örneğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Mehmet, alüminyumun (Al³⁺) oksijenle (O²⁻) oluşturduğu Al₂O₃ bileşiğinde her iki iyonun da izoelektronik seriye ait olduğunu ([Ne] elektron dizilimi) ve bu bileşiğin oldukça yüksek erime noktasına (~2072°C) sahip olduğunu öğreniyor.",
    text: "Bu yüksek erime noktası, iyon yükü ve iyon yarıçapı ile iyonik bağ kuvveti arasındaki ilişki hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "İzoelektronik olmaları erime noktasını düşürür",
      "Erime noktası yalnızca bileşiğin rengiyle ilişkilidir, iyon yükü/yarıçapıyla ilgisi yoktur",
      "İyon yükü ne kadar yüksek olursa olursa iyonik bağ o kadar zayıf olur",
      "Al₂O₃'ün yüksek erime noktası tamamen rastlantısaldır",
      "Yüksek iyon yükleri (Al³⁺, O²⁻) ve görece küçük iyon yarıçapları, iyonlar arasındaki elektrostatik çekim kuvvetini artırır; bu da bileşiğin iyonik bağının güçlü ve erime noktasının yüksek olmasına katkıda bulunur"
    ],
    correct: 4,
    explain: "İyonik bağ kuvveti kabaca iyon yüklerinin çarpımıyla doğru, iyonlar arası uzaklıkla (yaklaşık yarıçap toplamı) ters orantılıdır (Coulomb yasasına benzer bir ilişki). Al³⁺ ve O²⁻'nin yüksek yükleri ve görece küçük yarıçapları, güçlü bir elektrostatik çekim ve dolayısıyla yüksek erime noktası ile sonuçlanır; bu, periyodik özelliklerin (iyon yükü, iyon yarıçapı) bileşik özelliklerini (erime noktası) doğrudan etkileyebileceğinin somut bir örneğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Sınıftaki öğrenciler, periyodik tabloda birbirine köşegen komşu olan lityum (Li) ile magnezyumun (Mg), aynı grupta olan Li ile Na'ya göre bazı özellik bakımından (örneğin karbonatlarının çözünürlüğü, iyonlaşma enerjisi eğilimi) daha benzer davrandığını öğreniyor (köşegen ilişkisi).",
    text: "Bu gözlem, periyodik özelliklerin (yarıçap, yük yoğunluğu) davranış benzerliğini belirlemedeki rolü hakkında en doğru hangi ileri düzey çıkarımı destekler?",
    options: [
      "Köşegen ilişkisi yalnızca metal olmayan elementlerde görülebilir",
      "Köşegen ilişkisi periyodik özelliklerle hiçbir şekilde açıklanamaz, tamamen tesadüftür",
      "Li ve Mg'nin benzerliği yalnızca isimlerinin alfabetik yakınlığından kaynaklanır",
      "Grup ve periyot etkileri birbirinden tamamen bağımsızdır, asla birbirini dengelemez",
      "Grup boyunca aşağı inme (artan yarıçap) ile periyot boyunca sağa gitme (artan çekirdek yükü/azalan yarıçap) etkileri birbirini kısmen dengeleyebilir; bu da köşegen komşu elementlerin benzer iyon yük yoğunluğuna (yük/yarıçap oranına) ve dolayısıyla benzer kimyasal davranışa sahip olmasına yol açabilir"
    ],
    correct: 4,
    explain: "Grupta aşağı inme atom/iyon yarıçapını büyütürken (Li→Na), periyotta sağa gitme çekirdek yükünü artırıp yarıçapı küçültür (Li→Mg, aynı periyotta bir sağda ve bir alt grupta). Li'den Mg'ye geçişte bu iki etki (bir periyot sağa + bir grup aşağı) kısmen birbirini dengeleyerek, Li ile Mg'nin iyon yük yoğunluğunun (yük/yarıçap oranı) Li ile Na'dan daha yakın olmasına yol açabilir; bu da köşegen komşu elementler arasındaki beklenmedik benzerliğin periyodik özelliklere dayalı bir açıklamasıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir laborant, periyodik özelliklerin (atom yarıçapı, iyonlaşma enerjisi, elektronegatiflik) birbiriyle güçlü biçimde ilişkili olduğunu; örneğin küçük yarıçaplı bir atomun genellikle hem yüksek iyonlaşma enerjisine hem de yüksek elektronegatifliğe sahip olduğunu fark ediyor.",
    text: "Bu üç özelliğin birbiriyle tutarlı biçimde ilişkili olmasının ortak temel nedeni en doğru hangisidir?",
    options: [
      "Üç özellik de yalnızca elementin keşfedilme tarihine bağlıdır",
      "Bu üç özellik birbirinden tamamen bağımsızdır, aralarındaki tutarlılık tesadüftür",
      "Atom yarıçapı, iyonlaşma enerjisi ve elektronegatiflik farklı fiziksel büyüklükler olduğundan hiçbir ortak açıklaması olamaz",
      "Bu ilişki yalnızca ametallerde geçerlidir, metallerde geçerli değildir",
      "Üç özellik de temelde aynı fiziksel etkene, yani değerlik elektronlarının çekirdek tarafından ne kadar güçlü çekildiğine (etkin çekirdek yükü ve elektron-çekirdek uzaklığına) dayanır"
    ],
    correct: 4,
    explain: "Atom yarıçapı, iyonlaşma enerjisi ve elektronegatifliğin hepsi, değerlik elektronlarının çekirdek tarafından ne kadar güçlü çekildiğiyle (etkin çekirdek yükü ve elektron-çekirdek uzaklığıyla) ilişkilidir: güçlü çekim → küçük yarıçap, yüksek iyonlaşma enerjisi (elektronu koparmak zor) ve yüksek elektronegatiflik (elektron çekme gücü fazla) anlamına gelir. Bu ortak fiziksel temel, üç özelliğin periyodik tabloda tutarlı biçimde birlikte değişmesini (aynı yönde eğilim göstermesini) açıklar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir güvenlik uzmanı, periyodik tablonun 'periyodik' olarak adlandırılmasının nedenini düşünüyor: belirli aralıklarla (periyotlarla) benzer kimyasal özelliklerin tekrar etmesi.",
    text: "Bu tekrarlayan (periyodik) örüntünün altında yatan temel elektronik neden en doğru hangisidir?",
    options: [
      "Periyodiklik kavramının hiçbir elektronik temeli yoktur, tamamen tanımsaldır",
      "Periyodiklik yalnızca elementlerin alfabetik sıralamasından kaynaklanır",
      "Periyodiklik, elementlerin kütlesinin rastgele dalgalanmasından kaynaklanır",
      "Periyodiklik yalnızca metallerde görülür, ametallerde görülmez",
      "Değerlik elektron dizilimleri (örneğin ns¹, ns²np⁵ gibi) belirli aralıklarla tekrar eder; benzer değerlik yapısına sahip elementler benzer kimyasal davranış sergilediğinden, özellikler de periyodik olarak tekrar eder"
    ],
    correct: 4,
    explain: "Elektron dizilimleri, orbital dolum kurallarına (Aufbau, Pauli, Hund) bağlı olarak belirli örüntülerle (ns¹, ns², ..., ns²np⁶) tekrar eder; benzer değerlik elektron yapısına sahip elementler (örneğin tüm ns¹ elementleri = alkali metaller) benzer kimyasal davranış sergilediğinden, atom yarıçapı, iyonlaşma enerjisi gibi özellikler de belirli periyotlarla (satırlarla) tekrarlayan bir örüntü (periyodiklik) gösterir — bu, periyodik tablonun isminin ve temel mantığının kaynağıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Ayşe, periyodik özelliklerin (örneğin atom yarıçapı) grafiğe döküldüğünde her periyotta düzenli bir 'testere dişi' (art arda düşüş ve sonra sıçrama) örüntüsü oluşturduğunu fark ediyor: periyot boyunca azalır, yeni periyoda geçişte aniden büyük ölçüde artar.",
    text: "Bu testere dişi örüntüsünün her iki yönü de (periyot içi azalış ve periyotlar arası sıçrama) için en doğru birleşik açıklama hangisidir?",
    options: [
      "Testere dişi örüntüsü elementlerin keşfedilme sırasına bağlıdır",
      "Testere dişi örüntüsü yalnızca ölçüm cihazlarındaki hassasiyet farkından kaynaklanır",
      "Periyot içi azalış ile periyotlar arası artış birbiriyle hiçbir ortak nedene dayanmaz",
      "Bu örüntü yalnızca atom yarıçapında görülür, başka hiçbir periyodik özellikte görülmez",
      "Periyot içi azalış, aynı enerji düzeyinde artan çekirdek yükünden kaynaklanır; periyotlar arası ani artış ise yeni bir enerji düzeyine (daha yüksek n) geçilmesinden, yani elektronun çekirdekten çok daha uzak bir kabukta bulunmaya başlamasından kaynaklanır"
    ],
    correct: 4,
    explain: "Bir periyot boyunca (örneğin Na'dan Ar'a) elektronlar aynı ana enerji düzeyinde kalırken çekirdek yükü artar, bu da yarıçapı sürekli küçültür; ancak bir sonraki periyoda geçildiğinde (örneğin Ar'dan K'ya) en dış elektron artık bir üst enerji düzeyine (n+1) yerleşir ve çekirdekten çok daha uzakta bulunmaya başlar, bu da yarıçapta ani ve büyük bir artışa yol açar. Bu iki zıt etkinin (yavaş azalış + ani sıçrama) birleşimi, periyodik tablonun ismine kaynaklık eden karakteristik 'testere dişi' grafiğini oluşturur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir akademisyen, periyodik özellik trendlerinin (yarıçap, iyonlaşma enerjisi, elektronegatiflik) yalnızca kimyada değil, malzeme bilimi ve mühendislikte de (örneğin hangi elementlerin yarı iletken, hangilerinin iletken olacağını tahmin etmede) kullanıldığını öğreniyor.",
    text: "Bu bilgi, periyodik özelliklerin bilimsel/teknolojik değeri hakkında en doğru hangi geniş kapsamlı çıkarımı destekler?",
    options: [
      "Periyodik özelliklerdeki sistematik eğilimler, yalnızca akademik bir sınıflandırma aracı değil; yeni malzemelerin özelliklerini tahmin etmek ve tasarlamak için de kullanılabilen pratik ve öngörücü bir bilimsel çerçevedir",
      "Periyodik özelliklerin mühendislikle hiçbir ilgisi yoktur",
      "Malzeme biliminde kullanılan tek kriter elementin rengidir",
      "Periyodik trendler yalnızca teorik öneme sahiptir, hiçbir pratik uygulaması yoktur",
      "Yarı iletken özellikleri tamamen rastgele, tahmin edilemez bir şekilde ortaya çıkar"
    ],
    correct: 0,
    explain: "Elektronegatiflik, iyonlaşma enerjisi gibi periyodik özellikler, bir elementin/bileşiğin elektriksel iletkenlik davranışını (iletken, yarı iletken, yalıtkan) tahmin etmede kullanılır (örneğin metal-ametal sınırındaki yarı metaller sıkça yarı iletken özellik gösterir, Si ve Ge gibi); bu, periyodik tablonun ve altında yatan özelliklerin yalnızca akademik değil, doğrudan teknolojik tasarım değeri taşıyan pratik bir araç olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bahçıvan, bilim insanlarının bir X ve Y elementinin (henüz karşılaştırmadığı) hangisinin daha yüksek elektronegatifliğe sahip olacağını, yalnızca periyodik tablodaki konumlarına (grup ve periyot) bakarak yüksek güvenle tahmin edebildiğini gözlemliyor.",
    text: "Bu tahmin gücü, periyodik tablonun bilimsel bir sistem olarak taşıdığı en önemli özelliği hangi seçenekte en doğru yansıtır?",
    options: [
      "Periyodik tablo, ayrık ve ilişkisiz olgular yığını değil; konum bilgisinden (grup, periyot) özellik tahminine sistematik ve güvenilir biçimde geçiş yapılabilen, iyi organize edilmiş bir bilgi yapısıdır",
      "Bu tahmin gücü yalnızca şans eseri doğru çıkar, sistematik bir temeli yoktur",
      "Elektronegatiflik tahmini yalnızca deneysel ölçümle mümkündür, teorik tahmin yapılamaz",
      "Periyodik tablodaki konum ile elektronegatiflik arasında hiçbir ilişki yoktur",
      "Bu tahmin gücü yalnızca soy gazlar için geçerlidir"
    ],
    correct: 0,
    explain: "Periyodik özelliklerin (elektronegatiflik dahil) grup ve periyot boyunca sistematik ve öngörülebilir biçimde değişmesi, periyodik tablonun yalnızca tanımlayıcı değil, aynı zamanda güçlü bir tahmin aracı olduğunu gösterir; bu, iyi kurulmuş bilimsel sınıflandırma sistemlerinin ortak ve değerli bir özelliğidir — dağınık olguları değil, altta yatan düzenli ilkeleri yansıtırlar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir eczacı, periyodik özellik trendlerinin (örneğin atom yarıçapı) yalnızca ana grup elementlerinde değil, lantanit serisinde de gözlemlenen ancak çok daha küçük ve düzenli bir azalışa ('lantanit kontraksiyonu') sahip olduğunu öğreniyor; bunun sonucunda 4d ve 5d serisi elementlerinin (örneğin Zr ve Hf) beklenenden çok daha benzer yarıçapa sahip olduğunu fark ediyor.",
    text: "Bu bilgi, periyodik trendlerin karmaşıklığı hakkında en doğru hangi ileri düzey çıkarımı destekler?",
    options: [
      "f orbitallerinin zayıf perdeleme etkisi nedeniyle lantanit serisi boyunca beklenenden fazla bir çekirdek yükü birikimi (kontraksiyon) oluşur; bu, kendisinden sonra gelen d bloğu elementlerinin (Hf gibi) yarıçapını da etkileyerek periyodik trendlerde ek, ince bir katman oluşturur",
      "Lantanit kontraksiyonu periyodik trendlerle hiçbir ilişkisi olmayan bağımsız bir olgudur",
      "Zr ve Hf'nin benzer yarıçapı tamamen tesadüftür",
      "f orbitalleri atom yarıçapını hiçbir şekilde etkilemez",
      "Lantanit kontraksiyonu yalnızca lantanitlerin kendi yarıçapını etkiler, başka hiçbir elementi etkilemez"
    ],
    correct: 0,
    explain: "f orbitalleri diğer orbital türlerine göre çekirdek yükünü daha zayıf perdeler; bu nedenle lantanit serisi boyunca (57-71) beklenenden fazla bir net çekirdek yükü artışı (kontraksiyon) birikir. Bu etki, lantanitlerden sonra gelen 5d serisi elementlerinin (Hf, Ta gibi) yarıçapını da küçültür ve bu elementlerin 4d serisi analoglarına (Zr, Nb) beklenmedik derecede yakın yarıçaplara sahip olmasına yol açar — bu, basit grup/periyot trendlerinin ötesinde, orbital türünün perdeleme gücü gibi ince etkenlerin de periyodik özellikleri şekillendirdiğini gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Aşağıdaki tabloda dört elementin atom yarıçapı ve birinci iyonlaşma enerjisi değerleri karşılaştırılmaktadır.",
    table: {
      headers: ["Element", "Atom yarıçapı (pm)", "1. İyonlaşma enerjisi (kJ/mol)"],
      rows: [
        ["Li", "152", "520"],
        ["Na", "186", "496"],
        ["K", "227", "419"],
        ["Rb", "248", "403"]
      ]
    },
    text: "Tablodaki verilerden yola çıkarak atom yarıçapı ile iyonlaşma enerjisi arasındaki ilişki için en doğru genel çıkarım hangisidir?",
    options: [
      "Bu grup (1. grup) içinde atom yarıçapı arttıkça iyonlaşma enerjisi genel olarak azalır",
      "Atom yarıçapı arttıkça iyonlaşma enerjisi de orantılı olarak artar",
      "Atom yarıçapı ile iyonlaşma enerjisi arasında hiçbir ilişki gözlenmemektedir",
      "Bu elementlerin hepsi aynı iyonlaşma enerjisine sahiptir",
      "Atom yarıçapı arttıkça iyonlaşma enerjisi önce artar sonra azalır"
    ],
    correct: 0,
    explain: "Tabloya göre Li'den Rb'ye doğru atom yarıçapı artarken (152→248 pm) iyonlaşma enerjisi azalır (520→403 kJ/mol); bu, aynı grup içinde büyüyen atom yarıçapının değerlik elektronunu çekirdekten uzaklaştırıp zayıf bağlı hale getirdiğini ve iyonlaşmayı kolaylaştırdığını gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Ali, flor (F) ile klorun (Cl) her ikisinin de halojen olmasına rağmen flor atomunun elektron ilgisinin beklenenden biraz düşük (klordan bile düşük) olduğunu öğreniyor.",
    text: "Bu ilginç istisnanın en olası açıklaması hangisidir?",
    options: [
      "Flor atomu çok küçük olduğundan, yeni gelen elektron mevcut yoğun elektron bulutuyla güçlü bir itme yaşar; bu itme, beklenen elektron ilgisi kazancını bir miktar azaltır",
      "Bu istisna tamamen ölçüm hatasından kaynaklanır",
      "Flor hiçbir zaman elektron alamaz",
      "Klorun elektronegatifliği flordan yüksektir, bu yüzden elektron ilgisi de yüksektir",
      "Flor atomunun çekirdek yükü klordan azdır"
    ],
    correct: 0,
    explain: "Flor atomu son derece küçük olduğundan mevcut değerlik elektronları zaten sıkışık haldedir; yeni gelen elektron bu yoğun elektron bulutuyla güçlü bir itme kuvveti yaşar. Bu ekstra elektron-elektron itmesi, beklenen elektron ilgisi kazancını bir miktar azaltarak florun elektron ilgisinin klordan bile düşük çıkmasına yol açar — bu, atom yarıçapının çok küçük olmasının bazen beklenmedik etkiler yaratabileceğini gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir tüketici, bir X elementinin periyodik tabloda 3. periyot, 1. grupta; bir Y elementinin ise 3. periyot, 17. grupta yer aldığını öğreniyor.",
    text: "Yalnızca bu konum bilgisinden yola çıkarak X ve Y'nin atom yarıçapı ve elektronegatiflik bakımından karşılaştırılması için en doğru tahmin hangisidir?",
    options: [
      "X (grup 1), Y'den (grup 17) daha büyük atom yarıçapına ve daha düşük elektronegatifliğe sahip olmalıdır, çünkü aynı periyotta soldan sağa yarıçap küçülür ve elektronegatiflik artar",
      "X ve Y aynı periyotta oldukları için atom yarıçapı ve elektronegatiflikleri birebir eşit olmalıdır",
      "Y, X'ten daha büyük atom yarıçapına sahip olmalıdır",
      "Periyot bilgisi bu karşılaştırma için hiçbir ipucu vermez",
      "X'in elektronegatifliği Y'den yüksek olmalıdır"
    ],
    correct: 0,
    explain: "Aynı periyotta (3. periyot) soldan sağa gidildikçe atom yarıçapı küçülür ve elektronegatiflik artar; grup 1'deki X, grup 17'deki Y'ye göre periyodun çok daha solunda olduğundan daha büyük yarıçapa ve daha düşük elektronegatifliğe sahip olmalıdır (X burada sodyum, Y ise klordur)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Merve, manganezin (Mn, [Ar]4s²3d⁵) ikinci iyonlaşma enerjisinin, komşusu kroma (Cr, [Ar]4s¹3d⁵) göre beklenenden farklı bir örüntü izlediğini öğreniyor; bunun her iki elementin de yarı dolu 3d⁵ yapısına ilişkin farklı elektron kaybı senaryolarından kaynaklandığını inceliyor.",
    text: "Bu tür karşılaştırmalarda geçiş metalleri için genel iyonlaşma enerjisi tahminleri yaparken en dikkatli olunması gereken husus hangisidir?",
    options: [
      "Geçiş metallerinde d⁵ ve d¹⁰ gibi ekstra kararlı ara durumların hangi iyonlaşma basamağında ortaya çıktığı elementten elemente farklılık gösterebilir; bu yüzden basit doğrusal bir artış varsayımı yerine, her elementin özgül elektron dizilimi dikkatle değerlendirilmelidir",
      "Geçiş metallerinin iyonlaşma enerjisi hiçbir zaman tahmin edilemez",
      "Tüm geçiş metalleri birebir aynı iyonlaşma enerjisi örüntüsünü gösterir",
      "d⁵ yapısı yalnızca kromda ekstra kararlılık sağlar, manganezde hiçbir etkisi yoktur",
      "İyonlaşma enerjisi geçiş metallerinde tamamen rastgeledir, hiçbir düzenlilik yoktur"
    ],
    correct: 0,
    explain: "Cr ([Ar]4s¹3d⁵) zaten taban halde yarı dolu d⁵ yapısındadır, bu yüzden ilk iyonlaşmasında farklı bir senaryo izlerken; Mn ([Ar]4s²3d⁵) ikinci iyonlaşmasında (bir 4s ve bazı d elektronları kaybettikten sonra) farklı bir noktada d⁵ kararlılığına ulaşabilir. Bu, geçiş metallerinde ekstra kararlı elektron dağılımlarının hangi iyonlaşma basamağında devreye gireceğinin elementten elemente değişebileceğini ve genellemelerin dikkatli yapılması gerektiğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir çiftçi, aynı yükte fakat farklı büyüklükte iki katyonun (örneğin Li⁺ ve Cs⁺) sulu çözeltide farklı derecede 'hidratlaştığını' (su molekülleriyle çevrildiğini) ve küçük olan Li⁺'nin daha güçlü hidratlaştığını öğreniyor.",
    text: "Bu gözlem, iyon yarıçapı ile iyon-su etkileşim kuvveti arasındaki ilişki hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Küçük iyonlarda pozitif yük daha küçük bir hacimde yoğunlaştığından yük yoğunluğu (yük/yarıçap oranı) daha yüksektir; bu da çevresindeki polar su molekülleriyle daha güçlü elektrostatik etkileşim kurmasını sağlar",
      "İyon büyüklüğünün su ile etkileşimle hiçbir ilgisi yoktur",
      "Büyük iyonlar her zaman küçük iyonlardan daha güçlü hidratlaşır",
      "Hidratlaşma derecesi yalnızca iyonun yüküne bağlıdır, büyüklüğün hiçbir etkisi yoktur",
      "Li⁺ ve Cs⁺ suyla aynı derecede etkileşime girer, gözlemlenen fark yanılsamadır"
    ],
    correct: 0,
    explain: "Aynı yükteki iyonlarda, küçük yarıçaplı olan (Li⁺) yükünü daha küçük bir hacimde yoğunlaştırır, bu da yüksek yük yoğunluğu anlamına gelir; yüksek yük yoğunluğu, çevresindeki polar su molekülleriyle daha güçlü elektrostatik çekim (hidratlaşma) kurmasını sağlar. Bu, atom/iyon yarıçapı gibi periyodik özelliklerin, çözelti kimyası gibi pratik alanlarda da doğrudan sonuçları olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Meraklı bir gözlemci, periyodik özellik grafiklerinin (atom yarıçapı, iyonlaşma enerjisi vb.) her zaman kusursuz düz bir çizgi değil, küçük yerel sapmalar (Be-B, N-O gibi) içeren genel bir eğilim çizgisi olduğunu fark ediyor.",
    text: "Bu gözlem, bilimsel 'eğilim' (trend) kavramının doğru yorumlanması için en önemli hangi metodolojik dersi verir?",
    options: [
      "Bir bilimsel eğilim, her tekil veri noktasının istisnasız uyması gereken katı bir kural değil; çoğunluk davranışını yansıtan, yerel sapmalara açık genel bir örüntüdür; sapmaların kendisi de genellikle daha derin bir mekanizmayı ortaya çıkarır",
      "Eğilimde herhangi bir sapma görülmesi, o eğilimin tamamen geçersiz ve kullanışsız olduğu anlamına gelir",
      "Bilimsel eğilimler yalnızca istisnasız, kusursuz veriler için tanımlanabilir",
      "Sapmalar her zaman ölçüm hatasından kaynaklanır ve hiçbir bilgi taşımaz",
      "Trend kavramı yalnızca periyodik tabloya özgüdür, başka hiçbir bilimsel alanda kullanılmaz"
    ],
    correct: 0,
    explain: "Bilimsel bir 'eğilim', veri kümesindeki baskın genel örüntüyü tanımlar; tekil sapmalar (Be-B, N-O gibi) eğilimi geçersiz kılmaz, aksine genellikle altta yatan ek bir mekanizmayı (burada alt kabuk kararlılığı) ortaya çıkarır. Bu, bilimsel genellemelerin 'ya hep ya hiç' değil, olasılıksal/çoğunlukçu ve sapmalarıyla birlikte daha derin anlayışa açılan yapılar olduğunu gösteren önemli bir metodolojik derstir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Kerem, periyodik özelliklerin (atom yarıçapı, iyonlaşma enerjisi, elektronegatiflik) sadece nitel ('artar/azalır') değil, nicel (sayısal) verilerle de ifade edilebildiğini; bu sayısal verilerin malzeme tasarımı, ilaç geliştirme gibi alanlarda hesaplama modellerine girdi olarak kullanıldığını öğreniyor.",
    text: "Bu bilgi, periyodik özelliklerin bilimsel kullanımı hakkında en doğru hangi kapsamlı çıkarımı destekler?",
    options: [
      "Periyodik özelliklerin yalnızca genel yönelimi (artış/azalış) değil, kesin sayısal değerleri de bilimsel ve mühendislik uygulamalarında niceliksel tahmin ve modelleme için kritik öneme sahiptir",
      "Periyodik özelliklerin sayısal değerleri hiçbir pratik uygulamada kullanılmaz, yalnızca nitel eğilimler önemlidir",
      "Malzeme tasarımı periyodik özelliklerden tamamen bağımsız bir alandır",
      "Nicel veriler yalnızca teorik fizikte kullanılır, kimya mühendisliğinde kullanılmaz",
      "Periyodik özelliklerin sayısal değerleri sürekli değişir, bu yüzden güvenilir değildir"
    ],
    correct: 0,
    explain: "Periyodik özelliklerin yalnızca 'artar/azalır' şeklindeki nitel eğilimleri değil, kesin sayısal değerleri (örneğin belirli bir elektronegatiflik veya iyonlaşma enerjisi sayısı) de malzeme bilimi, ilaç tasarımı ve kimya mühendisliğindeki hesaplamalı modellerde doğrudan girdi olarak kullanılır; bu, periyodik özelliklerin hem kavramsal hem de niceliksel/pratik değer taşıdığını gösterir."
  }
]
};

// Global erişim kullanan eski sayfalarla uyumluluk
if (typeof window !== "undefined") {
  window.QUIZ = QUIZ;
}
