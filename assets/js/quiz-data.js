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
    context: "Bir ürün etiketinde şu bileşenler listelenmiştir: su, gliserin, sodyum lauril sülfat, mentol.",
    text: "Bu bileşen listesi, ürünün üretim sürecinde en doğrudan hangi bilim dalının bilgisinden yararlanıldığını gösterir?",
    options: ["Coğrafya", "Tarih", "Kimya", "Edebiyat", "Astronomi"],
    correct: 2,
    explain: "Bir ürünün bileşenlerinin belirlenmesi, oranlanması ve bir araya getirilmesi doğrudan kimya bilgisine dayanır; her bileşenin kendine özgü kimyasal işlevi vardır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Açık havada bırakılan bir demir çubuğun yüzeyinde birkaç gün içinde kızıl-kahverengi bir tabaka oluşur.",
    text: "Bu gözlem hangi tür bir değişimin sonucudur?",
    options: ["Fiziksel değişim; yalnızca şekil değişmiştir", "Biyolojik bir süreçtir", "Kimyasal değişim; yeni bir madde (pas/demir oksit) oluşmuştur", "Değişim gözlemlenmemiştir", "Yalnızca sıcaklık değişimidir"],
    correct: 2,
    explain: "Demirin oksijen ve nemle tepkimeye girerek pas (demir oksit) oluşturması, yeni bir maddenin ortaya çıktığı bir kimyasal değişimdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tarifte şeker, suya eklenip karıştırıldığında gözden kaybolur; tatlı tat ise korunur.",
    text: "Bu gözlem en iyi hangi kavramla açıklanır?",
    options: ["Buharlaşma", "Çözünme; şeker molekülleri su içinde dağılmıştır, yok olmamıştır", "Kimyasal bozunma", "Süblimleşme", "Yanma"],
    correct: 1,
    explain: "Şekerin suda çözünmesi fiziksel bir olaydır; şeker molekülleri gözle görülemeyecek kadar küçük parçacıklar hâlinde suya dağılır, ancak kimliğini korur (tadı kaybolmaz)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir dondurma kabındaki dondurma, oda sıcaklığında bırakıldığında birkaç dakika içinde sıvı hâle geçer; soğutulduğunda tekrar katılaşır.",
    text: "Bu döngüsel değişim hangi tür bir olaydır?",
    options: ["Kimyasal değişim; her seferinde yeni bir madde oluşur", "Fiziksel değişim; madde erime ve donma arasında geçiş yapar, kimliği değişmez", "Geri döndürülemez bir tepkimedir", "Biyolojik bozunmadır", "Nükleer bir süreçtir"],
    correct: 1,
    explain: "Erime ve donma, maddenin hâl değiştirmesidir; madde kimliğini korur, bu nedenle fiziksel bir değişimdir ve tersinirdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir pilin üzerinde '1,5 V' yazısı bulunur ve pilin çalışması sırasında içindeki maddeler zamanla tükenir.",
    text: "Bir pilin elektrik enerjisi üretebilmesinin temel nedeni nedir?",
    options: ["İçindeki kimyasal enerjinin elektrik enerjisine dönüştürülmesi", "İçindeki suyun buharlaşması", "Işığın doğrudan elektriğe çevrilmesi", "Manyetik alan oluşturması", "Sesin enerjiye dönüştürülmesi"],
    correct: 0,
    explain: "Piller, içlerindeki kimyasal maddeler arasındaki tepkimeler sonucunda açığa çıkan kimyasal enerjiyi elektrik enerjisine dönüştüren düzeneklerdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Soğuk bir bardağın dış yüzeyinde birkaç dakika içinde su damlacıkları belirir; bardağın içindeki sıvı seviyesi değişmez.",
    text: "Bardağın dışındaki bu su damlacıklarının kaynağı en doğru şekilde nedir?",
    options: ["Bardağın içindeki sıvının dışarı sızması", "Havadaki oksijenin suya dönüşmesi", "Bardağın malzemesinin su üretmesi", "Buzun kimyasal olarak parçalanması", "Havadaki su buharının soğuk yüzeyle temas edip yoğuşması"],
    correct: 4,
    explain: "Havadaki nem (su buharı), soğuk yüzeyle temas edince yoğuşarak sıvı hâle geçer; bu, bardağın içindeki sıvıyla ilgisi olmayan bir fiziksel olaydır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir güneş kremi etiketinde 'SPF 30' ifadesi ve içerik listesinde çinko oksit yer almaktadır.",
    text: "Güneş kremlerinin koruma sağlama işlevi en doğrudan hangi alanın bilgisine dayanır?",
    options: ["Müzik", "Coğrafya", "Kimya", "Görsel sanatlar", "Edebiyat"],
    correct: 2,
    explain: "Güneş kremlerindeki bileşenlerin (örneğin çinko oksit) UV ışınlarını yansıtma/soğurma özelliği, kimyasal madde özelliklerinin incelenmesiyle geliştirilmiş bir uygulamadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir dilim elma, havada birkaç dakika bekletildiğinde yüzeyi kahverengiye döner.",
    text: "Bu renk değişimi hangi türde bir olaydır?",
    options: ["Kimyasal değişim; elmadaki bazı bileşikler oksijenle tepkimeye girer", "Fiziksel değişim; yalnızca su kaybı olur", "Elmanın çürümesiyle ilgisi olmayan optik bir yanılsamadır", "Sıcaklık artışından kaynaklanır", "Yalnızca ışıkla ilgili bir durumdur"],
    correct: 0,
    explain: "Elmanın kesilen yüzeyindeki bazı bileşikler havadaki oksijenle tepkimeye girerek (enzimatik esmerleşme) yeni, kahverengi renkli bileşikler oluşturur; bu bir kimyasal değişimdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir naftalin (güve topu) tableti, kapalı bir dolapta haftalar içinde giderek küçülür ve hiç sıvı birikintisi bırakmaz.",
    text: "Bu durumu en doğru şekilde açıklayan hâl değişimi kavramı hangisidir?",
    options: ["Erime; katı önce sıvı hâle geçer", "Kimyasal bozunma; yeni bir madde oluşur", "Süblimleşme; katı doğrudan gaz hâline geçer", "Yoğuşma", "Kristalleşme"],
    correct: 2,
    explain: "Naftalin, sıvı hâle geçmeden doğrudan katıdan gaza dönüşür (süblimleşme); bu yüzden dolapta sıvı birikintisi görülmez."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıdaki tabloda dört farklı günlük ürünün temel işlevi listelenmiştir.",
    table: {
      headers: ["Ürün", "Temel işlev"],
      rows: [
        ["Sabun", "Temizlik"],
        ["Aspirin", "İlaç"],
        ["Gübre", "Bitki besleme"],
        ["Boya", "Yüzey kaplama"]
      ]
    },
    text: "Tablodaki dört üründen kaç tanesi doğrudan bir kimyasal madde ya da kimyasal süreçle ilişkilidir?",
    options: ["3", "4", "2", "1", "0"],
    correct: 1,
    explain: "Tablodaki dört ürünün (sabun, aspirin, gübre, boya) tamamı, belirli kimyasal bileşiklerin sentezlenmesi/formüle edilmesiyle üretilir; hepsi kimya bilgisiyle doğrudan ilişkilidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir gazlı içecek şişesi açıldığında sıvıdan yoğun bir şekilde kabarcık çıkışı gözlemlenir; şişe kapalıyken bu kabarcıklar görülmez.",
    text: "Kapak açıldığında kabarcık oluşumunun artmasının temel nedeni nedir?",
    options: ["Şişedeki suyun buharlaşması", "Sıvının aniden ısınması", "Kimyasal bir bozunma başlaması", "Basıncın düşmesiyle çözünmüş karbondioksit gazının çözeltiden ayrılması", "Havadaki oksijenin sıvıya karışması"],
    correct: 3,
    explain: "Gazlı içeceklerde yüksek basınç altında sıvıda çözünmüş hâlde bulunan karbondioksit gazı, kapak açılıp basınç düştüğünde çözeltiden ayrılarak kabarcıklar hâlinde açığa çıkar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tencerede kaynayan suyun sıcaklığı, kaynama boyunca artmaya devam etmez; sabit kalır.",
    text: "Kaynama sırasında sıcaklığın sabit kalması hangi ilkeyle açıklanır?",
    options: ["Kaynama, kimyasal bir tepkimedir ve enerji açığa çıkarır", "Su, kaynama sırasında ısı almayı bırakır", "Verilen ısı enerjisi, sıvının gaza dönüşmesi (hâl değişimi) için kullanılır, sıcaklık artışına dönüşmez", "Tencere ısıyı yansıtmaya başlar", "Suyun kütlesi azaldığı için sıcaklık sabitlenir"],
    correct: 2,
    explain: "Hâl değişimi (kaynama) sırasında verilen enerji, sıvı hâldeki tanecikler arasındaki çekim kuvvetlerini yenmek için kullanılır; bu yüzden hâl değişimi tamamlanana kadar sıcaklık sabit kalır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir ütü, nemli bir kumaşın üzerinden geçirildiğinde kumaş üzerindeki nem kısa sürede yok olur; kumaşın kendisi zarar görmez (uygun sıcaklıkta).",
    text: "Bu süreçte nemin yok olmasını en doğru açıklayan kavram hangisidir?",
    options: ["Kimyasal parçalanma; su, hidrojen ve oksijene ayrışır", "Buharlaşma; sıcaklık etkisiyle sıvı su, gaz hâline geçer", "Süblimleşme; kumaş doğrudan gaza dönüşür", "Erime", "Kristalleşme"],
    correct: 1,
    explain: "Ütünün ısısı, kumaştaki sıvı hâldeki suyun sıcaklığını artırarak buharlaşmasını (gaz hâline geçmesini) sağlar; kumaşın kendisinde bir değişim olmaz."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir mum yakıldığında hem şekil değiştirip erimekte hem de alev, ısı ve is (kurum) oluşturmaktadır.",
    text: "Bu gözlemde kaç farklı türde değişim bir arada yaşanmaktadır?",
    options: ["İki; hem fiziksel (erime) hem kimyasal (yanma) değişim bir aradadır", "Yalnızca bir fiziksel değişim", "Yalnızca bir kimyasal değişim", "Hiçbir değişim yoktur, yalnızca ışık görülür", "Üç farklı biyolojik süreç"],
    correct: 0,
    explain: "Mumun erimesi fiziksel bir değişimdir (mum maddesi kimliğini korur); yanma ise mumun oksijenle tepkimeye girip karbondioksit ve su buharı oluşturması nedeniyle kimyasal bir değişimdir; ikisi eş zamanlı gerçekleşir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    dialogue: [
      { who: "Öğrenci A", text: "Kabartma tozu sirkenin içinde eridi, tıpkı şekerin suda erimesi gibi; sadece fiziksel bir olay bu." },
      { who: "Öğrenci B", text: "Köpürüp gaz çıkardığına göre iki madde birbiriyle tepkimeye girip yeni bir madde (gaz) oluşturmuş olmalı; bu kimyasal bir değişim." },
      { who: "Öğrenci C", text: "Köpürme sadece sıcaklığın aniden artmasından kaynaklanıyor, madde değişimiyle ilgisi yok." }
    ],
    text: "Kabartma tozu ile sirke karıştırıldığında gözlenen köpürmeyle ilgili hangi öğrencinin görüşü doğrudur?",
    options: ["Öğrenci A", "Öğrenci B", "Öğrenci C", "Üçü de kısmen haklıdır", "Hiçbiri, çünkü hiçbir değişim gerçekleşmemiştir"],
    correct: 1,
    explain: "Kabartma tozu (sodyum bikarbonat) ile sirkedeki asetik asit arasındaki tepkime karbondioksit gazı açığa çıkarır; ortaya çıkan köpürme, yeni bir maddenin (gazın) oluştuğu kimyasal bir tepkimenin göstergesidir — Öğrenci B haklıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir market rafında; sabun 'temizlik ürünü', aspirin 'ilaç', gübre 'tarım ürünü', kozmetik krem 'bakım ürünü' olarak farklı reyonlarda satılmaktadır.",
    text: "Bu dört ürünün farklı reyonlarda satılıyor olması, kimya biliminin doğası hakkında en doğru hangi çıkarımı destekler?",
    options: ["Kimya yalnızca laboratuvarda kullanılan, günlük hayattan kopuk bir bilimdir", "Bu ürünlerin hiçbiri kimyasal madde içermez", "Farklı reyonlarda satılmaları, aralarında hiçbir bilimsel ortak nokta olmadığını kanıtlar", "Kimya bilgisi, birbirinden çok farklı görünen pek çok günlük alanın (temizlik, sağlık, tarım, bakım) temelinde yer alır", "Bu ürünlerin üretiminde kimya bilgisi kullanılmamıştır"],
    correct: 3,
    explain: "Görünüşte çok farklı alanlara ait olan bu ürünlerin (temizlik, ilaç, tarım, kozmetik) hepsi, belirli kimyasal bileşiklerin özelliklerinden yararlanılarak geliştirilir; bu da kimyanın günlük hayatın pek çok farklı alanının ortak temelinde yer aldığını gösterir."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıdaki pH cetvelinde dört farklı ev ürününün yaklaşık pH değerleri işaretlenmiştir.",
    chart: {
      type: "ph",
      points: [
        { value: 2.5, label: "Sirke" },
        { value: 7, label: "Musluk suyu" },
        { value: 9.5, label: "Sıvı sabun" },
        { value: 13.5, label: "Lavabo açıcı" }
      ]
    },
    text: "Cetveldeki verilere göre, bu ürünlerden hangi ikisi karıştırıldığında, elde edilecek karışımın pH'ının 7'ye (nötr) en yakın olması beklenir?",
    options: ["Musluk suyu ve sıvı sabun", "Sirke ve lavabo açıcı", "Sirke ve sıvı sabun", "Lavabo açıcı ve sıvı sabun", "Sirke ve musluk suyu"],
    correct: 1,
    explain: "Sirke asidik (pH 2,5), lavabo açıcı ise kuvvetli bazik (pH 13,5) olduğundan, ikisi karıştırıldığında birbirini nötrleştirme etkisi en güçlü olur ve karışım pH'ı 7'ye en çok yaklaşır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    pictograms: { codes: ["irritant", "corrosive"], title: "Solda çamaşır suyu, sağda tuvalet açıcısı etiketindeki simgeler" },
    context: "Bir çamaşır suyu şişesinin etiketinde yalnızca 'tahriş edici' uyarı sembolü bulunurken, aynı raftaki bir tuvalet açıcısının etiketinde 'aşındırıcı ve tahriş edici' sembolleri birlikte yer almaktadır.",
    text: "Bu iki üründeki farklı sembol kombinasyonu göz önüne alındığında, tuvalet açıcısı için en doğru güvenlik yaklaşımı hangisidir?",
    options: ["Sembol sayısı fazla olduğu için ürün daha güvenlidir", "İki ürün aynı tehlikeye sahip olduğundan aynı şekilde kullanılabilir", "Metal/cilt gibi yüzeylere zarar verme riski çamaşır suyundan daha yüksek olduğundan, ekstra dikkatli (eldiven, iyi havalandırma) kullanılmalıdır", "Aşındırıcı sembolü yalnızca ambalajın dayanıklılığıyla ilgilidir", "Bu sembollerin kullanım güvenliğiyle hiçbir ilgisi yoktur"],
    correct: 2,
    explain: "'Aşındırıcı' sembolü, ürünün metalleri ve canlı dokuları aşındırma riski taşıdığını gösterir; bu ekstra tehlike sınıfı, tuvalet açıcısının çamaşır suyuna göre daha dikkatli (eldiven, iyi havalandırma, cilt/göz temasından kaçınma) kullanılmasını gerektirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıdaki grafikte, üç farklı yakıtın eşit kütlede yanmasıyla açığa çıkan yaklaşık enerji miktarları (MJ/kg) gösterilmiştir.",
    chart: {
      type: "bar",
      title: "Yakıtların enerji değeri (MJ/kg)",
      labels: ["Odun", "Kömür", "Doğal gaz"],
      values: [15, 24, 54]
    },
    text: "Bu verilere dayanarak, eşit kütlede yakıt kullanıldığında en fazla enerji açığa çıkaran ve dolayısıyla enerji verimliliği açısından en avantajlı olan yakıt hangisidir?",
    options: ["Odun", "Kömür", "Üçü de eşittir", "Doğal gaz", "Tablodan bu sonuç çıkarılamaz"],
    correct: 3,
    explain: "Grafiğe göre 1 kg doğal gazın yanması en fazla enerjiyi (54 MJ) açığa çıkarır, bu da onu kütle başına enerji verimliliği açısından en avantajlı yakıt yapar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tüketici raporunda, 'A' şampuanının etiketinde 'sülfatsız' ibaresi bulunurken, 'B' şampuanının standart sülfatlı formülle üretildiği belirtilmiştir; her iki ürün de köpük oluşturmaktadır.",
    text: "Bu bilgiye dayanarak en doğru çıkarım hangisidir?",
    options: ["Köpük oluşturma özelliği yalnızca sülfat bileşiklerine özgü değildir, farklı kimyasal formüllerle de sağlanabilir", "Sülfatsız bir ürün hiçbir zaman köpük oluşturamaz", "İki ürün de birebir aynı kimyasal bileşime sahiptir", "Köpürme, ürünün etkinliğiyle hiçbir ilgisi olmayan rastgele bir özelliktir", "Sülfatlı ürünler her zaman daha fazla köpürür"],
    correct: 0,
    explain: "Hem sülfatsız hem sülfatlı formüllü şampuanların köpürebilmesi, köpük oluşturma özelliğinin tek bir bileşen sınıfına (sülfatlar) özgü olmadığını, farklı yüzey aktif madde türleriyle de elde edilebildiğini gösterir."
  },
  {
    difficulty: "orta",
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
    options: ["Metal ambalajlar her zaman plastikten daha hızlı bozunur", "Tüm ambalaj malzemeleri doğada aynı hızda parçalanır", "Malzemenin kimyasal yapısının bozunma hızıyla hiçbir ilgisi yoktur", "Karton, plastikten daha yavaş bozunur", "Doğal, karbon temelli ve mikroorganizmalarca kolayca parçalanabilen malzemeler daha hızlı; sentetik polimer veya metal yapılı malzemeler ise çok daha yavaş bozunur"],
    correct: 4,
    explain: "Kağıt/karton gibi doğal selüloz temelli malzemeler mikroorganizmalarca kolayca parçalanırken, plastiklerin uzun polimer zincirleri ve metallerin kimyasal kararlılığı bozunmayı çok yavaşlatır — bu, malzeme seçiminde çevresel sürdürülebilirlik açısından önemli bir kimya bilgisidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir ekmek hamuru mayalanırken hacmi belirgin biçimde artar ve içinde küçük gaz kabarcıkları oluşur; hamur çok sıcak bir fırına konulduğunda ise mayanın etkisi beklenenden az olur.",
    text: "Bu gözlemlere dayanarak maya hakkında en doğru bilimsel çıkarım hangisidir?",
    options: ["Maya yalnızca soğukta etkili olur, ılık ortamda hiç çalışmaz", "Maya, belirli sıcaklık aralığında etkili olan canlı bir kimyasal/biyolojik ajandır; aşırı sıcaklık onun aktivitesini olumsuz etkiler", "Hamurun kabarması yalnızca fiziksel bir hava girişidir, mayanın hiçbir rolü yoktur", "Maya, sıcaklıktan tamamen bağımsız çalışan cansız bir kimyasal bileşiktir", "Gaz kabarcıkları hamurdaki sudan kaynaklanır, mayayla ilgisizdir"],
    correct: 1,
    explain: "Mayanın ürettiği karbondioksit gazı hamuru kabartır; ancak maya, sıcaklığa duyarlı canlı bir organizmadır ve aşırı yüksek sıcaklıklarda aktivitesi (dolayısıyla kabartma etkisi) azalır ya da durur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "İki özdeş bardağa aynı miktarda sıcak çay konulmuştur. Birinci bardağa hiçbir şey eklenmemiş, ikinci bardağa bir küp şeker eklenip karıştırılmıştır. 10 dakika sonra her iki bardağın sıcaklığı ölçülmüş ve neredeyse aynı çıkmıştır.",
    text: "Bu gözlem, şekerin çaya eklenmesinin hangi tür bir değişim olduğuna dair en güçlü kanıtı sunar?",
    options: ["Biyolojik bir değişim olduğuna", "Kimyasal bir değişim olduğuna; çünkü sıcaklık değişmiştir", "Hem fiziksel hem kimyasal olduğuna; çünkü şeker tatlandırmıştır", "Fiziksel bir değişim olduğuna; çözünme belirgin bir enerji/sıcaklık farkı yaratmamış ve yeni bir madde oluşmamıştır", "Değişim türü sıcaklık ölçümüyle belirlenemez"],
    correct: 3,
    explain: "Çözünme sırasında sıcaklıkta belirgin bir değişim gözlemlenmemesi ve yeni bir madde oluşmaması, bunun fiziksel bir değişim (çözünme) olduğunun göstergesidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "İki özdeş kap hazırlanmıştır: birine yalnızca musluk suyu, diğerine musluk suyu ve bir tutam tuz konulmuştur. Aynı sıcaklıkta, aynı süre boyunca dondurucuda bekletilmiştir. Saf su tamamen donarken, tuzlu su hâlâ tam donmamış, kısmen sıvı kalmıştır.",
    text: "Bu deneyin sonucu, kimyanın hangi günlük hayat uygulamasını doğrudan açıklar?",
    options: ["Tuzun suyu her zaman daha hızlı dondurduğunu", "Yaz aylarında yolların neden daha sıcak olduğunu", "Tuzlu suyun kaynama noktasının düştüğünü", "Bu deneyin günlük hayatla hiçbir bağlantısı olmadığını", "Kışın buzlanan yollara tuz dökülmesinin donma noktasını düşürerek buzlanmayı geciktirdiğini/azalttığını"],
    correct: 4,
    explain: "Çözünen madde (tuz), suyun donma noktasını düşürür (donma noktası alçalması); bu ilke, kışın yollara tuz serpilerek buzlanmanın geciktirilmesinde pratik olarak kullanılır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıdaki iki grafikte, alüminyum folyo ile kaplanarak pişirilen bir balığa geçen alüminyum miktarının (mg/100g) pişirme sıcaklığıyla nasıl değiştiği gösterilmiştir.",
    chart: {
      type: "line",
      title: "Balığa geçen alüminyum miktarı (mg/100g)",
      labels: ["150°C", "175°C", "200°C", "225°C"],
      values: [0.02, 0.04, 0.07, 0.12]
    },
    text: "Grafikteki eğilime dayanarak, alüminyum folyoyla pişirme konusunda en akılcı öneri hangisidir?",
    options: ["Sıcaklık arttıkça alüminyum geçişi azalır", "Sıcaklığın alüminyum geçişiyle hiçbir ilişkisi yoktur", "Alüminyum folyo hiçbir koşulda kullanılmamalıdır", "Bu veriler yalnızca balık için değil hiçbir gıda için geçerli değildir", "Yüksek pişirme sıcaklıkları alüminyum geçişini artırdığından, mümkün olduğunca ölçülü/düşük sıcaklıkta pişirme tercih edilmelidir"],
    correct: 4,
    explain: "Grafik, pişirme sıcaklığı arttıkça gıdaya geçen alüminyum miktarının da arttığını göstermektedir; bu nedenle alüminyum folyoyla pişirirken aşırı yüksek sıcaklıklardan kaçınmak makul bir önlemdir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir gıda etiketinde 'doğal aroma verici' ibaresi, başka bir üründe ise 'yapay aroma verici' ibaresi yer almaktadır; ikisi de tüketiciye aynı çilek tadını vermektedir.",
    text: "Bu bilgi, 'doğal' ve 'yapay' kimyasal bileşikler hakkında en doğru hangi çıkarımı destekler?",
    options: ["İki üründeki bileşiklerin kimyasal formülü kesinlikle farklıdır", "Yapay aroma vericiler asla gerçek bir tat oluşturamaz", "Doğal aroma vericiler her zaman daha güvenlidir", "Doğal ve sentetik kaynaklı iki bileşik, aynı moleküler yapıya sahip olduğunda özdeş tat/koku verebilir; kaynağı tek başına etkiyi belirlemez", "Tat, yalnızca ürünün ambalaj rengiyle ilgilidir"],
    correct: 3,
    explain: "Bir aroma molekülü doğadan izole edilmiş ya da laboratuvarda sentezlenmiş olabilir; moleküler yapısı aynıysa (örneğin doğal ve sentetik vanilin), duyusal etkisi de aynıdır — kaynağın 'doğal/yapay' olması tek başına kimyasal kimliği ya da güvenliği belirlemez."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir spor içeceğinin etiketinde sodyum, potasyum ve magnezyum tuzları listelenmektedir; ürün yoğun terleme sonrası tüketilmek üzere pazarlanmaktadır.",
    text: "Bu içeceğin formülasyonu, terleme ile ilgili hangi kimyasal/fizyolojik süreci hedef almaktadır?",
    options: ["Kan hücrelerinin sayısının artırılması", "Vücut sıcaklığının doğrudan düşürülmesi", "Terlemeyle kaybedilen elektrolit (iyon) dengesinin yeniden sağlanması", "Kas dokusunun yeniden oluşturulması", "Enerji ihtiyacının tamamen ortadan kaldırılması"],
    correct: 2,
    explain: "Terleme sırasında vücut yalnızca su değil, sodyum, potasyum gibi elektrolitleri de kaybeder; bu tuzları içeren içecekler kaybedilen iyon dengesini yeniden sağlamayı amaçlar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "İki özdeş bitkiye 15 gün boyunca eşit miktarda su verilmiştir; yalnızca birine ayrıca haftada bir azotlu gübre uygulanmıştır. Gübre verilen bitkinin yaprakları belirgin biçimde daha koyu yeşil ve gelişmiş görünmektedir.",
    text: "Bu gözlem, azotun bitkideki rolü hakkında en doğru hangi çıkarımı destekler?",
    options: ["Gübre yalnızca toprağın rengini değiştirir", "Azotun bitki gelişimiyle hiçbir ilgisi yoktur", "Azot, bitkinin klorofil üretimi ve genel büyümesi için önemli bir besin bileşenidir", "Su tek başına bitkinin tüm besin ihtiyacını karşılar", "Azotlu gübre bitkinin büyümesini yavaşlatır"],
    correct: 2,
    explain: "Azot, klorofil ve proteinlerin temel yapı taşlarından biridir; yeterli azot alan bitkilerde daha koyu yeşil renk ve daha güçlü büyüme gözlenir, bu da azotun bitki beslenmesindeki kritik rolünü gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir ürün, ambalajında 'çevre dostu' ifadesiyle pazarlanmaktadır; ancak bu ifadenin bağımsız bir kurum tarafından sertifikalandırıldığına dair hiçbir bilgi ambalajda yer almamaktadır.",
    text: "Bu durum, tüketici olarak ürün etiketlerini değerlendirirken en doğru hangi yaklaşımı destekler?",
    options: ["Yalnızca ürünün fiyatına bakarak güvenilirliğine karar vermek", "Ambalajdaki her ifadeyi sorgusuz kabul etmek", "Pazarlama ifadelerini bağımsız kaynaklarla doğrulanmadan doğru kabul etmemek, eleştirel biçimde değerlendirmek", "Etiketlerdeki tüm bilgileri tamamen yok saymak", "'Çevre dostu' ifadesinin her zaman yasal olarak denetlendiğini varsaymak"],
    correct: 2,
    explain: "Pazarlama ifadeleri her zaman bağımsız bilimsel/kurumsal doğrulamayı yansıtmayabilir; bilinçli bir tüketici bu tür iddiaları güvenilir sertifikasyon kaynaklarıyla karşılaştırarak değerlendirir."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir temizlik ürününün ambalajında aşağıdaki iki tehlike işareti birlikte yer almaktadır.",
    pictograms: ["corrosive", "environment"],
    text: "Bu iki işaretin birlikte bulunması, ürünün kullanımdan sonra lavaboya/kanalizasyona dökülmesi konusunda en doğru hangi sonucu doğurur?",
    options: ["İki sembol birbiriyle çelişir, güvenle kanalizasyona dökülebilir", "Aşındırıcı sembolü yalnızca ambalajla ilgilidir, dökülen sıvıyla ilgisi yoktur", "Çevre sembolü, ürünün doğada hiçbir etkisi olmadığını gösterir", "Bu semboller yalnızca endüstriyel kullanım için geçerlidir, evde önemsizdir", "Ürün hem canlı dokuları aşındırabilir hem de su ekosistemlerine zarar verebilir; bu yüzden büyük miktarların doğrudan kanalizasyona dökülmesinden kaçınılmalı, üretici talimatına uyulmalıdır"],
    correct: 4,
    explain: "Aşındırıcı sembolü canlı doku/metal tahribatını, çevre sembolü ise sucul/karasal canlılara zararı gösterir; bu iki tehlikenin birlikte bulunması, ürünün kontrolsüz biçimde büyük miktarlarda doğaya/kanalizasyona bırakılmaması gerektiğini işaret eder."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir gıda güvenliği raporunda, bir katkı maddesinin 'doğal kaynaklı' olmasının, güvenlik değerlendirmesinde tek başına belirleyici bir ölçüt olarak kullanılmadığı; asıl belirleyicinin dozun ve toksikolojik test sonuçlarının olduğu belirtilmektedir.",
    text: "Bu bilgi, 'doğal olan her zaman güvenlidir' şeklindeki yaygın inanış hakkında en doğru hangi eleştirel çıkarımı destekler?",
    options: [
      "Doz kavramının güvenlik değerlendirmesiyle hiçbir ilgisi yoktur",
      "Doğal kaynaklı maddeler hiçbir koşulda zararlı olamaz",
      "Sentetik maddeler her zaman doğal olanlardan daha güvenlidir",
      "Toksikolojik testler yalnızca sentetik maddelere uygulanır",
      "Bir maddenin güvenliği kaynağına (doğal/sentetik) değil, dozuna ve bilimsel test sonuçlarına göre belirlenir; bazı doğal bileşikler de yüksek dozda zararlı olabilir"
    ],
    correct: 4,
    explain: "Toksikolojide temel ilkelerden biri 'dozu zehri belirler' anlayışıdır; bir maddenin doğal ya da sentetik olması tek başına güvenliğini belirlemez, birçok doğal bileşik de yüksek dozda zararlı olabilir — bu yüzden güvenlik değerlendirmesi bilimsel test ve doza dayanmalıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıdaki tabloda, aynı koşullarda dört farklı pişirme sıcaklığında pişirilen etin sos pH'ı ve ete geçen alüminyum miktarı kaydedilmiştir.",
    table: {
      headers: ["Pişirim", "Sosun pH değeri", "Pişirme sıcaklığı (°C)"],
      rows: [
        ["1", "6", "150"],
        ["2", "5", "150"],
        ["3", "5", "200"],
        ["4", "6", "200"]
      ]
    },
    text: "Tablodaki verilere dayanarak, ete geçen alüminyum miktarının en fazla olması beklenen pişirim hangisidir?",
    options: ["4. pişirim; en yüksek sıcaklık tek başına belirleyicidir, pH'ın etkisi yoktur", "1. pişirim; en düşük sıcaklık ve en yüksek pH bir arada olduğu için", "Tüm pişirimlerde alüminyum geçişi birbirine eşittir", "3. pişirim; hem düşük pH (asidik ortam) hem yüksek sıcaklık alüminyumun çözünürlüğünü birlikte artırır", "2. pişirim; yalnızca pH düşük olduğu için diğerlerinden farksızdır"],
    correct: 3,
    explain: "Asidik ortam (düşük pH) alüminyumun çözünürlüğünü artırır; yüksek sıcaklık da bu süreci hızlandırır. Tablodaki 3. pişirim hem en düşük pH'a (5) hem en yüksek sıcaklığa (200°C) sahip olduğundan, bu iki etkenin bir araya gelmesiyle alüminyum geçişinin en fazla olması beklenir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tüketici tartışma platformunda, bazı katılımcılar 'kimyasal madde içermeyen' olarak pazarlanan bir temizlik ürününün aslında su ve tuz gibi bileşenler içerdiğini belirtiyor.",
    text: "Bu tartışma, 'kimyasal madde' kavramının günlük dildeki kullanımı hakkında en doğru hangi eleştirel çıkarımı destekler?",
    options: ["Yalnızca laboratuvarda üretilen maddeler kimyasal sayılır", "Su ve tuz bilimsel olarak kimyasal madde sayılmaz", "'Kimyasal madde içermeyen' ifadesi bilimsel olarak tam anlamıyla doğrudur", "Günlük dilde 'kimyasal içermez' ifadesi genellikle 'sentetik/zararlı katkı içermez' anlamında kullanılır; oysa bilimsel anlamda su, tuz dahil her madde bir kimyasal maddedir", "Bu tartışma tamamen anlamsızdır, hiçbir bilimsel çıkarım yapılamaz"],
    correct: 3,
    explain: "Bilimsel açıdan evrende var olan her madde (su, tuz, hava dahil) bir kimyasal maddedir; pazarlamada kullanılan 'kimyasal içermez' ifadesi bilimsel değil, genellikle 'sentetik/zararlı katkı maddesi içermez' anlamında popüler bir kullanımdır — bu ayrımı bilmek bilinçli tüketim için önemlidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir laboratuvar karşılaştırmasında, aynı markanın 'hassas ciltler için' ve 'standart' olarak satılan iki nemlendirici kreminin içerik listeleri incelendiğinde, bileşenlerin sırası ve oranları farklı, ancak çoğu bileşen ortak çıkmıştır.",
    text: "Bu bulgu, ürün pazarlamasında kullanılan etiketler hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Bileşen sırasının ürünün formülasyonuyla hiçbir ilgisi yoktur",
      "İki ürün kesinlikle birebir aynı kimyasal formüle sahiptir",
      "'Hassas ciltler için' etiketi bilimsel olarak hiçbir anlam taşımaz",
      "Standart ürün, hassas cilt ürününden daha fazla bileşen içermelidir",
      "Farklı pazarlama etiketleri (örneğin 'hassas ciltler için'), bazen aynı temel bileşenlerin farklı oranlarda kullanılmasına dayanabilir; etiket tek başına bileşimin tamamen farklı olduğu anlamına gelmez"
    ],
    correct: 4,
    explain: "Ürün içerik listelerinde bileşenler genellikle miktarlarına göre sıralanır; iki üründeki bileşenlerin ortak olması ama sıra/oranlarının farklı olması, farklı pazarlama etiketlerinin bazen aynı temel formülün farklı yoğunluklarda uyarlanmasından kaynaklanabileceğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir mutfakta hazırlanan iki farklı temizlik karışımı düşünülmektedir: birincisi çamaşır suyu ile amonyaklı bir cam temizleyicisinin karıştırılmasını, ikincisi ise sirke ile kabartma tozunun karıştırılmasını içermektedir.",
    text: "Bu iki karışım arasındaki güvenlik farkı hakkında en doğru çıkarım hangisidir?",
    options: ["Bu karışımların güvenliği bileşenlerin miktarından tamamen bağımsızdır", "Çamaşır suyu ile amonyaklı ürünlerin karışımı zehirli kloramin gazı oluşturarak ciddi risk taşırken, sirke ile kabartma tozunun karışımı yalnızca zararsız karbondioksit gazı açığa çıkarır", "İki karışım da tamamen güvenlidir, hiçbir gaz açığa çıkmaz", "Sirke-kabartma tozu karışımı çamaşır suyu-amonyak karışımından daha tehlikelidir", "İki karışım da eşit derecede tehlikelidir"],
    correct: 1,
    explain: "Çamaşır suyu (hipoklorit) ile amonyaklı ürünlerin tepkimesi zehirli kloramin gazları oluşturarak solunum yoluyla ciddi zarar verebilirken, sirke (asetik asit) ile kabartma tozunun (sodyum bikarbonat) tepkimesi yalnızca zararsız karbondioksit gazı ve su açığa çıkarır — bu, günlük hayatta hangi kimyasalların birlikte kullanılabileceğini bilmenin önemini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir bilim iletişimi makalesinde, halk arasında yaygın olan 'organik/doğal tarım ürünleri hiçbir kimyasal madde içermez' inanışının yanlış olduğu; organik tarımda da izin verilen, doğal kaynaklı belirli kimyasal bileşiklerin (örneğin bakır sülfat) kullanıldığı belirtilmektedir.",
    text: "Bu bilgi, 'organik' etiketinin bilimsel anlamı hakkında en doğru çıkarımı destekler?",
    options: [
      "Organik tarım, kimya biliminden tamamen bağımsız bir uygulamadır",
      "Organik ürünler kesinlikle hiçbir kimyasal madde içermez",
      "Bakır sülfat gibi maddeler yalnızca sentetik tarımda kullanılır",
      "'Organik' etiketinin bilimsel hiçbir tanımı yoktur",
      "'Organik' etiketi, ürünün kimyasal madde içermediği anlamına gelmez; belirli üretim yöntemleri ve izin verilen madde listesine uygunluğu ifade eder"
    ],
    correct: 4,
    explain: "'Organik' etiketi, belirli üretim standartlarına (izin verilen girdi listesi, sentetik pestisit kısıtlaması vb.) uygunluğu ifade eder; bu, ürünün hiçbir kimyasal madde içermediği anlamına gelmez — organik tarımda da doğal kaynaklı bazı kimyasal bileşikler kullanılabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir enerji politikası raporunda, güneş panellerinin üretiminde kullanılan bazı malzemelerin (örneğin belirli metaller) çıkarılma ve işlenme süreçlerinin çevresel bir maliyeti olduğu, ancak panellerin kullanım ömrü boyunca sağladığı temiz enerjinin bu maliyeti fazlasıyla dengelediği belirtilmektedir.",
    text: "Bu bilgi, yeni teknolojilerin çevresel etkisinin değerlendirilmesi konusunda en dengeli hangi yaklaşımı destekler?",
    options: [
      "Enerji teknolojilerinin çevresel etkisi ölçülemez, bu yüzden karşılaştırma yapılamaz",
      "Üretim aşamasında herhangi bir çevresel maliyet varsa, teknoloji tamamen reddedilmelidir",
      "Yalnızca kullanım aşaması değerlendirilir, üretim süreci önemsizdir",
      "Güneş panelleri üretim sürecinde hiçbir çevresel etki yaratmaz",
      "Bir teknolojinin çevresel etkisi yalnızca kullanım aşamasına değil, üretiminden kullanım ömrü sonuna kadar tüm sürece (yaşam döngüsüne) bakılarak bütüncül değerlendirilmelidir"
    ],
    correct: 4,
    explain: "'Yaşam döngüsü değerlendirmesi' yaklaşımı, bir ürünün/teknolojinin çevresel etkisini yalnızca kullanım aşamasında değil, hammadde çıkarımından üretim, kullanım ve bertarafa kadar tüm süreçte bütüncül olarak değerlendirir; bu, teknoloji değerlendirmelerinde daha dengeli ve bilimsel bir yaklaşımdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tüketici haklarını konu alan yayında, iki farklı üreticinin aynı miktardaki (100 mL) aynı türden bir dezenfektan üründe farklı derişimde etken madde bildirdiği; ancak ikisinin de 'etkili dezenfeksiyon sağlar' ifadesini kullandığı aktarılmaktadır.",
    text: "Bu durum, ürün etkinliğini değerlendirirken en doğru hangi yaklaşımı desteklemektedir?",
    options: ["Yalnızca genel pazarlama ifadelerine değil, etken madde derişimi gibi somut ve ölçülebilir bilgilere bakılmalıdır", "Etken madde derişiminin ürün etkinliğiyle hiçbir ilgisi yoktur", "Aynı ifadeyi kullanan iki ürün her zaman birebir aynı etkiye sahiptir", "Derişim bilgisi yalnızca ilaç sektöründe önemlidir, temizlik ürünlerinde değil", "Pazarlama ifadeleri her zaman bilimsel test sonuçlarını birebir yansıtır"],
    correct: 0,
    explain: "'Etkili dezenfeksiyon sağlar' gibi genel pazarlama ifadeleri, ürünler arasındaki gerçek etkinlik farkını gizleyebilir; etken madde derişimi gibi somut, ölçülebilir veriler, ürünlerin gerçek etkinliğini karşılaştırmak için daha güvenilir bir temel sunar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir okuldaki bilim kulübü, farklı ev temizlik ürünlerinin (çamaşır suyu, sirke, karbonat, sıvı sabun) birbirleriyle ikili kombinasyonlarda karıştırılmasının güvenli olup olmadığını araştıran bir kontrol listesi hazırlamak istemektedir.",
    text: "Böyle bir kontrol listesi hazırlanırken izlenmesi gereken en bilimsel yaklaşım hangisidir?",
    options: ["Hiçbir ev temizlik ürünü bir diğeriyle karıştırılmamalıdır, istisnasız", "Tüm temizlik ürünleri birbiriyle güvenle karıştırılabilir, ayrı inceleme gerekmez", "Her ikili kombinasyonun kimyasal tepkime potansiyeli (örneğin gaz açığa çıkarma, ısı üretme) ayrı ayrı incelenmeli; 'ikisi de temizlik ürünü' olması güvenli karışım anlamına gelmemelidir", "Karıştırma güvenliği yalnızca ürünlerin rengine göre belirlenir", "Yalnızca ürünlerin fiyatına bakılarak güvenlik değerlendirmesi yapılabilir"],
    correct: 2,
    explain: "Her kimyasal madde çiftinin tepkime potansiyeli farklıdır (örneğin çamaşır suyu+amonyak tehlikeli gaz üretirken, sirke+karbonat zararsız CO2 üretir); güvenlik değerlendirmesi genellemelerle değil, her kombinasyonun kendi kimyasal özellikleri incelenerek yapılmalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıda günlük hayatta sık karşılaşılan bir eşya gösterilmiştir.",
    objectIcons: ["battery"],
    text: "Bu eşyanın çalışma prensibi, kimyanın hangi temel dönüşüm türüyle en doğrudan ilişkilidir?",
    options: ["Nükleer enerjinin doğrudan harekete dönüştürülmesi", "Işık enerjisinin ses enerjisine dönüştürülmesi", "Elektrik enerjisinin doğrudan kütleye dönüştürülmesi", "Kimyasal enerjinin elektrik enerjisine dönüştürülmesi", "Manyetik enerjinin ısı enerjisine dönüştürülmesi"],
    correct: 3,
    explain: "Piller, iç yapılarındaki kimyasal maddeler arasında gerçekleşen tepkimeler sonucu açığa çıkan kimyasal enerjiyi elektrik enerjisine dönüştürür."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıda iki farklı günlük ürün gösterilmiştir; ikisi de belirli bir asit türü içermesi nedeniyle karakteristik keskin tada/kokuya sahiptir.",
    objectIcons: ["soda", "vinegar"],
    text: "Bu iki üründeki asidik bileşenlerin ortak işlevi hakkında en doğru çıkarım hangisidir?",
    options: [
      "Farklı kimyasal yapıdaki asitler (örneğin karbonik/fosforik asit ve asetik asit), farklı ürünlerde farklı amaçlarla (tat, koruyuculuk, gazlandırma) kullanılabilir",
      "Her iki üründe de kullanılan asit birebir aynı bileşiktir",
      "Asit içeren tüm ürünler insan sağlığı için zararlıdır",
      "Asitlerin tat üzerinde hiçbir etkisi yoktur",
      "Bu iki üründe asit yalnızca renk vermek için eklenmiştir"
    ],
    correct: 0,
    explain: "Gazlı içeceklerdeki karbonik/fosforik asit ile sirkedeki asetik asit farklı kimyasal bileşiklerdir; her biri kendi ürününde farklı işlevsel amaçla (tatlandırma, gazlandırma, koruyuculuk) kullanılır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir işlenmiş gıda ürününün etiketinde 'E300' kodlu bir katkı maddesi listelenmiştir; bu kodun karşılığı askorbik asit (C vitamini) olarak bilinmektedir.",
    text: "Bu bilgiye dayanarak, gıda katkı maddelerindeki 'E kodları' hakkında en doğru çıkarım hangisidir?",
    options: ["E300 kodu, ürünün hiçbir vitamin içermediğini gösterir", "Tüm E kodlu maddeler yapay ve zararlıdır", "E kodları yalnızca renklendiricilere verilir", "'E' koduyla başlayan bir katkı maddesi otomatik olarak zararlı anlamına gelmez; bazı E kodları C vitamini gibi bilinen, faydalı bileşiklere aittir", "E kodlu maddelerin hiçbiri doğada bulunmaz"],
    correct: 3,
    explain: "'E' kodları, Avrupa'da onaylanmış gıda katkı maddelerinin standart kodlarıdır; E300 gibi bazı kodlar C vitamini (askorbik asit) gibi bilinen, faydalı ve doğada da bulunan bileşiklere aittir — bu nedenle 'E kodlu = zararlı' genellemesi bilimsel olarak doğru değildir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıdaki tabloda dört farklı gıda muhafaza yönteminin, gıdanın bozulmasına neden olan mikroorganizmaların üremesini nasıl engellediği özetlenmiştir.",
    table: {
      headers: ["Yöntem", "Etki mekanizması"],
      rows: [
        ["Tuzlama", "Ortamdan su çekerek mikroorganizmaların yaşam ortamını kurutur"],
        ["Dondurma", "Düşük sıcaklıkta mikroorganizma etkinliğini büyük ölçüde yavaşlatır"],
        ["Kurutma", "Su içeriğini azaltarak üreme için gerekli nemi ortadan kaldırır"],
        ["Kaynatma/pastörizasyon", "Yüksek sıcaklıkla mikroorganizmaları etkisiz hâle getirir"]
      ]
    },
    text: "Tablodaki dört yöntem karşılaştırıldığında, hepsinin ortak bilimsel amacı hakkında en doğru çıkarım hangisidir?",
    options: [
      "Farklı fiziksel/kimyasal mekanizmalar kullanılsa da, dördü de mikroorganizmaların üremesi için gerekli koşulları (nem, sıcaklık) ortadan kaldırmayı hedefler",
      "Dördü de birebir aynı kimyasal mekanizmayla çalışır",
      "Bu yöntemlerin hiçbiri mikroorganizmalarla ilgili değildir",
      "Yalnızca kaynatma yöntemi bilimsel bir temele sahiptir",
      "Tuzlama ve dondurma birbirinin tam tersi bir etki yaratır, karşılaştırılamaz"
    ],
    correct: 0,
    explain: "Tuzlama ve kurutma suyu uzaklaştırarak, dondurma ve kaynatma ise sıcaklığı değiştirerek farklı fiziksel/kimyasal yollarla aynı ortak amaca ulaşır: mikroorganizmaların üreyebileceği koşulları ortadan kaldırmak."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıda bir ürünün ambalajında birlikte yer alan iki tehlike işareti gösterilmiştir; ürün bir aerosol sprey olarak satılmaktadır.",
    pictograms: ["flame", "irritant"],
    text: "Bu iki işaretin birlikte bulunması, ürünün depolama koşulları hakkında en kapsamlı hangi önlemi gerektirir?",
    options: [
      "Ürün hem ateş kaynaklarından ve yüksek sıcaklıktan uzak tutulmalı hem de solunum/cilt/göz temasından kaçınılarak iyi havalandırılan bir alanda kullanılmalıdır",
      "Yalnızca ateşten uzak tutulması yeterlidir, başka önlem gerekmez",
      "Ürün güneşli bir yerde saklanabilir, sorun oluşturmaz",
      "İki sembol yalnızca dekoratif amaçlıdır",
      "Tahriş edici sembolü, ürünün yanıcı olmadığını gösterir"
    ],
    correct: 0,
    explain: "Alev sembolü ürünün kolay tutuşabilir olduğunu (aerosol spreylerde basınçlı yanıcı gaz içeriği sık görülür), tahriş edici sembolü ise solunum yolu/cilt/göz tahrişi riskini gösterir; bu iki tehlikenin birlikte değerlendirilmesi hem ısı kaynaklarından uzak tutmayı hem iyi havalandırmayı gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir yangın güvenliği eğitiminde, yangının sürebilmesi için üç unsurun (yanıcı madde, oksijen, yeterli sıcaklık) aynı anda bulunması gerektiği; bu üç unsurdan birinin ortadan kaldırılmasının yangını söndürebileceği anlatılmaktadır.",
    text: "Bu bilgiye dayanarak, ıslak bir bezle küçük bir tava yangınını örtmenin söndürücü etkisi en doğru hangi mekanizmayla açıklanır?",
    options: ["Bez, yakıtı tamamen yok eder", "Bez, alevi oksijenden yalıtarak yanma tepkimesinin devam etmesi için gerekli oksijeni keser", "Bez, ortamdaki sıcaklığı anında sıfıra indirir", "Bez, yanma tepkimesini hızlandırarak söndürür", "Islak bezin söndürme etkisi bilimsel olarak açıklanamaz"],
    correct: 1,
    explain: "Yangın üçgeninin (yanıcı madde, oksijen, ısı) bir unsurunu ortadan kaldırmak yanmayı durdurur; ıslak bir bezle alevi örtmek, alevi çevredeki oksijenden yalıtarak yanma tepkimesinin sürmesini engeller."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir bilim yazısında, 'X maddesi kanserojendir' başlıklı bir haberin ardından yapılan incelemede, ilgili çalışmanın maddeyi laboratuvar hayvanlarına günlük alım sınırının binlerce katı dozda verdiği ortaya çıkmıştır.",
    text: "Bu durum, bilimsel çalışma sonuçlarının halk sağlığı iletişimine aktarılması konusunda en doğru eleştirel çıkarımı destekler?",
    options: ["Bu tür haberler her zaman bilimsel olarak tam ve doğru aktarılır", "Bir maddenin çok yüksek dozda zararlı bulunması, normal/günlük tüketim dozlarında da aynı derecede riskli olduğu anlamına gelmez; doz-etki ilişkisi dikkate alınmalıdır", "Bir maddenin herhangi bir dozda zararlı bulunması, o maddenin her koşulda kesin olarak yasaklanması gerektiği anlamına gelir", "Laboratuvar hayvan çalışmalarının insan sağlığıyla hiçbir ilgisi yoktur", "Doz kavramı yalnızca ilaçlar için geçerlidir, gıda maddeleri için geçerli değildir"],
    correct: 1,
    explain: "Toksikolojinin temel ilkelerinden biri doz-etki ilişkisidir; bir maddenin aşırı yüksek, gerçekçi olmayan dozlarda zararlı bulunması, normal tüketim koşullarında aynı riski taşıdığı anlamına gelmez. Bilimsel bulguların medyada doğru bağlamla aktarılması, bilinçli halk sağlığı iletişimi için önemlidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir malzeme mühendisliği raporunda, yeniden kullanılabilir su şişelerinin üretiminde kullanılan bazı plastik türlerinin belirli sıcaklık ve kullanım koşullarında küçük miktarlarda kimyasal madde salabildiği, ancak doğru malzeme seçimi ve kullanım koşullarına uyulduğunda bu riskin en aza indirilebildiği belirtilmektedir.",
    text: "Bu bilgi, günlük ürünlerin güvenli kullanımı konusunda en dengeli hangi yaklaşımı destekler?",
    options: ["Tüm plastik ürünler, hiçbir koşulda güvenli değildir", "Bir malzemenin potansiyel riski, doğru malzeme seçimi ve önerilen kullanım koşullarına (sıcaklık, süre vb.) uyularak yönetilebilir; risk varlığı ürünün her koşulda kullanılamaz olduğu anlamına gelmez", "Plastik ürünlerin kimyasal salma riski tamamen göz ardı edilebilir", "Kullanım koşullarının (sıcaklık, süre) risk üzerinde hiçbir etkisi yoktur", "Bu tür raporlar günlük hayatta dikkate alınmaya değer değildir"],
    correct: 1,
    explain: "Malzeme güvenliği genellikle mutlak 'güvenli/tehlikeli' ikiliğinden çok, doğru seçim ve önerilen kullanım koşullarına uyularak yönetilebilen bir risk meselesidir; bu dengeli yaklaşım, bilinçli tüketici davranışının temelini oluşturur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tüketici bilinçlendirme kampanyasında, bazı 'kimyasalsız' olarak pazarlanan temizlik ürünlerinin etken bileşeninin aslında sitrik asit veya sirke gibi doğal kaynaklı ama yine de kimyasal bir bileşik olduğu vurgulanmaktadır.",
    text: "Bu vurgu, pazarlama dili ile bilimsel doğruluk arasındaki ilişki hakkında en doğru hangi genellemeyi destekler?",
    options: [
      "Pazarlama dilinde kullanılan bazı ifadeler ('kimyasalsız' gibi) bilimsel açıdan tam doğru olmayabilir; tüketicinin bu tür ifadeleri bilimsel bilgiyle karşılaştırarak değerlendirmesi gerekir",
      "Pazarlama ifadeleri her zaman bilimsel tanımlarla birebir örtüşür",
      "Sitrik asit ve sirke bilimsel olarak kimyasal madde sayılmaz",
      "'Kimyasalsız' ifadesi yasal ve bilimsel olarak net bir tanıma sahiptir",
      "Bu tür pazarlama ifadelerinin sorgulanmasına gerek yoktur"
    ],
    correct: 0,
    explain: "Bilimsel olarak sitrik asit, sirke (asetik asit) dahil her madde bir kimyasal bileşiktir; 'kimyasalsız' gibi pazarlama ifadeleri bilimsel tanımla örtüşmeyebilir. Bilinçli bir tüketici, bu tür ifadeleri sorgulayarak değerlendirmelidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıda mutfakta sıkça kullanılan bir malzeme gösterilmiştir; bu malzeme özellikle et ve balık gibi gıdaların fırında sarılarak pişirilmesinde tercih edilir.",
    objectIcons: ["foil"],
    text: "Bu malzemenin parlak ve mat yüzeyleri arasındaki fark, üretim sürecinde en doğrudan hangi fiziksel etkenle ilişkilidir?",
    options: [
      "İnceltme (haddeleme) sırasında yüzeyin diğer bir folyo tabakasıyla temas edip etmemesi",
      "Malzemenin farklı kimyasal elementlerden yapılmış olması",
      "Işığın yalnızca bir yüzeyde kırılması",
      "Sıcaklığın yalnızca bir yüzeyi etkilemesi",
      "Parlak yüzeyin daha yeni üretildiğinin göstergesi olması"
    ],
    correct: 0,
    explain: "Alüminyum folyo üretiminde ince tabaka hâline getirilirken iki katman üst üste haddelenir; iki folyonun birbirine temas eden yüzeyleri sürtünme nedeniyle mat, dış (silindirle temas eden) yüzeyleri ise parlak çıkar. Bu, kimyasal değil fiziksel bir üretim etkisidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir gıda ambalajı araştırmasında, vakumlu paketlenmiş bir ürünün raf ömrünün, aynı ürünün normal paketlenmiş hâline göre belirgin biçimde daha uzun olduğu tespit edilmiştir.",
    text: "Bu fark, vakumlu paketlemenin bozulmayı geciktirme mekanizması hakkında en doğru hangi çıkarımı destekler?",
    options: ["Oksijen miktarının bozulma hızıyla hiçbir ilişkisi yoktur", "Vakumlama, gıdadaki tüm suyu tamamen yok eder", "Vakumlama yalnızca ambalajın hacmini küçültmek için yapılır, bozulmayla ilgisi yoktur", "Vakumlu paketleme sıcaklığı otomatik olarak düşürür", "Ortamdaki oksijenin büyük ölçüde uzaklaştırılması, hem oksidasyon tepkimelerini hem de oksijene ihtiyaç duyan mikroorganizmaların üremesini yavaşlatır"],
    correct: 4,
    explain: "Vakumlu paketleme, ambalaj içindeki oksijeni büyük ölçüde uzaklaştırır; bu hem yağların/renk pigmentlerinin oksijenle tepkimeye girerek bozulmasını (oksidasyonu) hem de oksijene ihtiyaç duyan (aerobik) mikroorganizmaların üremesini yavaşlatarak raf ömrünü uzatır."
  }
],
  "disiplin": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Analitik kimya, bir maddenin hangi bileşenlerden oluştuğunu belirlemeyi hedefleyen 'nitel (kalitatif)' analiz yöntemleri ile bu bileşenlerin miktarını belirlemeyi hedefleyen 'nicel (kantitatif)' analiz yöntemlerini kullanır.",
    text: "Bir besin örneğindeki bir katkı maddesinin TÜRÜNÜN (hangi madde olduğunun) belirlenmesi, analitik kimyanın hangi analiz türüne örnektir?",
    options: ["Biyokimyasal analiz","Nicel (kantitatif) analiz","Fizikokimyasal analiz","Nitel (kalitatif) analiz","Analitik kimyayla ilgisi yoktur"],
    correct: 3,
    explain: "Bir maddenin HANGİ bileşenlerden oluştuğunu (türünü) belirlemeyi hedefleyen analiz nitel (kalitatif) analizdir; miktarını belirlemeyi hedefleyen analiz ise nicel (kantitatif) analizdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Analitik kimya; şeker pancarındaki şeker miktarının belirlenmesi, besin maddelerinin içerik analizi, pH hesapları ve suların sertlik derecelerinin tayini gibi çeşitli uygulama alanlarına sahiptir.",
    text: "Bir laboratuvarda şeker pancarından elde edilen özütteki şeker MİKTARININ (kaç gram olduğunun) belirlenmesi hangi disiplinin doğrudan uygulama alanına girer?",
    options: ["Anorganik kimya","Organik kimya","Fizikokimya","Polimer kimyası","Analitik kimya (nicel analiz)"],
    correct: 4,
    explain: "Bir örnekteki bir bileşenin MİKTARININ hassas şekilde belirlenmesi, analitik kimyanın nicel (kantitatif) analiz uygulamalarından biridir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Biyokimya, 'canlı' anlamına gelen Yunanca 'bios' kelimesinden türemiştir ve canlı organizmalardaki kimyasal bileşiklerin yapısını, özelliklerini ve organizmanın yaşam süreci boyunca gerçekleşen kimyasal tepkimeleri inceler.",
    text: "Biyokimyanın detaylı olarak incelediği molekül gruplarından biri aşağıdakilerden hangisidir?",
    options: ["Volkanik kayaçlar","Yıldızlararası gaz bulutları","Karbonhidratlar","Yarı iletken kristaller","Saf metal külçeleri"],
    correct: 2,
    explain: "Biyokimya; karbonhidratlar, proteinler, lipitler, nükleik asitler, vitaminler ve hormonlar gibi moleküllerin canlı organizmalardaki yapısını ve rolünü detaylı biçimde inceler."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Biyokimya, canlılardaki moleküllerin detaylı incelenmesini sağlayarak günümüzde tıp, gıda, tarım ve endüstri gibi pek çok dalda uygulama alanı bulur.",
    text: "Biyokimya bilgisinin uygulandığı alanlar arasında aşağıdakilerden hangisi YER ALMAZ?",
    options: ["Tarım","Tıp","Gıda","Yalnızca tıp; biyokimyanın gıda, tarım veya endüstriyle hiçbir ilgisi yoktur","Endüstri"],
    correct: 3,
    explain: "Biyokimya yalnızca tıpla sınırlı değildir; gıda, tarım ve endüstri gibi pek çok dalda uygulama alanı bulur. Bu nedenle 'yalnızca tıp' ifadesi yanlıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    moleculeSkeleton: { type: "benzene", caption: "Karbon iskeletli bir bileşiğin skeletal (iskelet) gösterimi", label: "Her köşe bir karbon atomunu temsil eder" },
    context: "Organik kimya, karbon elementini içeren bileşiklerin yapılarını, özelliklerini ve tepkimelerini kapsamlı bir şekilde inceleyen bir kimya disiplinidir; bu nedenle 'karbon kimyası' olarak da adlandırılır.",
    text: "Organik kimyaya neden 'karbon kimyası' da denir?",
    options: ["Karbon elementini hiç incelemediği için","Yalnızca kömürle ilgilendiği için","İncelediği bütün bileşikler karbon elementi içerdiği için","Yalnızca metalik bileşikleri incelediği için","Bu isimlendirmenin bilimsel bir dayanağı yoktur"],
    correct: 2,
    explain: "Organik kimya, karbon elementini içeren bileşikleri incelediği için 'karbon kimyası' olarak da adlandırılır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Organik kimya sadece karbon atomuyla ilgileniyor gibi görünse de, meydana gelen bileşiklerin çeşitliliği nedeniyle kimyanın en geniş çalışma alanına sahiptir; petrol ürünleri, kozmetik ürünler, ilaçlar, plastikler, boyalar ve deterjanlar bu alana girer.",
    text: "Organik kimyanın 'kimyanın en geniş çalışma alanı' olarak tanımlanmasının temel nedeni nedir?",
    options: ["Karbon bileşiklerinin son derece çeşitli olması","Yalnızca tek bir tür bileşikle ilgilenmesi","Diğer tüm disiplinleri tamamen kapsaması","Deneysel araç gerektirmemesi","Aslında dar bir alan olması"],
    correct: 0,
    explain: "Karbon atomunun çok çeşitli bileşikler oluşturabilmesi (petrol ürünlerinden ilaçlara, plastiklere kadar), organik kimyayı kimyanın en geniş çalışma alanı yapar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Anorganik kimya; organik olmayan bileşiklerin yapılarını, özelliklerini ve tepkimelerini inceleyen bir kimya disiplinidir. Bu disiplin asitler, bazlar, tuzlar, metaller, ametaller, yarı metaller ve mineraller gibi çeşitli maddelerin karakteristik özellikleri ve kimyasal tepkimeleri üzerine odaklanır.",
    text: "Aşağıdakilerden hangisi anorganik kimyanın doğrudan incelediği madde gruplarından biri DEĞİLDİR?",
    options: ["Asitler","Karbonhidratlar (biyokimyanın ilgi alanıdır)","Tuzlar","Yarı metaller","Mineraller"],
    correct: 1,
    explain: "Anorganik kimya asit, baz, tuz, metal, ametal, yarı metal ve mineralleri inceler; karbonhidratlar canlı organizmalardaki bir molekül grubu olduğundan biyokimyanın konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Anorganik kimya; tıp, malzeme bilimi, inşaat mühendisliği, tarım, nanoteknoloji ve yarı iletken teknolojisi gibi pek çok çeşitli uygulama alanına sahiptir.",
    text: "Elektronik çip üretiminde kullanılan yarı iletken teknolojisi, en doğrudan hangi disiplinin uygulama alanına girer?",
    options: ["Anorganik kimya","Organik kimya","Biyokimya","Analitik kimya","Fizikokimya"],
    correct: 0,
    explain: "Yarı iletken teknolojisi, anorganik kimyanın MEB kitabında sayılan uygulama alanlarından biridir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Fizikokimya; kimyasal sistemlerin özelliklerini ve davranışlarını, tepkimelerin nasıl meydana geldiğini ve kimyasal olaylar sırasındaki enerji dönüşümlerini inceleyen bir disiplindir; sıcaklık, basınç, hacim ve derişim gibi fiziksel faktörlerin kimyasal tepkimelere etkilerini kapsamlı şekilde ele alır.",
    text: "Bir tepkimenin hızının sıcaklık değişimiyle nasıl etkilendiğini incelemek, en doğrudan hangi disiplinin konusudur?",
    options: ["Polimer kimyası","Fizikokimya","Organik kimya","Anorganik kimya","Analitik kimya"],
    correct: 1,
    explain: "Sıcaklığın (fiziksel bir faktörün) tepkime hızına etkisini incelemek fizikokimyanın temel konularından biridir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Fizikokimya; gazların balonlardaki davranışları, bir parça buzun erime sürecindeki değişimler, şekerin suyun içinde nasıl çözündüğü ve araç motorlarında ısıyla ilgili süreçlerin anlaşılmasında önemli bir rol oynar.",
    text: "Bir küp şekerin suda ÇÖZÜNME sürecini enerji ve moleküler davranış açısından incelemek, hangi disiplinin doğrudan kapsamına girer?",
    options: ["Biyokimya","Polimer kimyası","Yalnızca anorganik kimya","Fizikokimya","Yalnızca organik kimya"],
    correct: 3,
    explain: "Bir maddenin çözünme sürecindeki enerji değişimi ve davranışı fizikokimyanın MEB kitabında verilen örneklerinden biridir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    moleculeSkeleton: { type: "polymerChain", unit: "CH₂-CH₂", caption: "Bir polimer zincirinin tekrar eden birimi (örnek: polietilen)", label: "Köşeli parantez + n: birim, zincir boyunca n kez tekrarlanır" },
    context: "Polimer kimyası; makromoleküllerin (büyük moleküllerin) kimyası olup polimerlerin sentezini, yapılarını, özelliklerini, davranışlarını ve uygulamalarını inceleyen bir kimya disiplinidir.",
    text: "'Makromolekül' ifadesi polimer kimyasında en doğrudan neyi tanımlar?",
    options: ["Yalnızca sıvı hâldeki bileşikleri","Yalnızca tek bir atomdan oluşan iyonları","Radyoaktif olarak bozunan çekirdekleri","Çok sayıda küçük birimin bir araya gelmesiyle oluşan büyük molekülleri","Elektrik yükü taşımayan tüm molekülleri"],
    correct: 3,
    explain: "Makromolekül, çok sayıda tekrar eden küçük biriminin (monomerin) bir araya gelmesiyle oluşan büyük moleküldür; polimerler bu tür makromoleküllerdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Polimer kimyası; plastikler, kauçuklar, fiberler, yapıştırıcılar, jelatinler ve biyopolimerler gibi çeşitli malzemeleri inceler.",
    text: "Aşağıdaki malzemelerden hangisi polimer kimyasının doğrudan inceleme alanına GİRMEZ?",
    options: ["Jelatin","Kauçuk","Fiber","Yapıştırıcı","Saf bir metal külçesi"],
    correct: 4,
    explain: "Saf bir metal külçesi bir makromolekül/polimer değildir; metaller anorganik kimyanın konusudur. Kauçuk, fiber, yapıştırıcı ve jelatin ise polimer kimyasının örnekleridir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    matchPairs: {"left":["Bir maddenin hangi bileşenlerden oluştuğunu (nitel) ve bu bileşenlerin miktarını (nicel) belirlemeye odaklanır.","Canlı organizmalardaki kimyasal bileşiklerin yapısını ve yaşam süreci boyunca gerçekleşen tepkimeleri inceler.","Karbon elementini içeren bileşiklerin çeşitliliği nedeniyle kimyanın en geniş çalışma alanına sahiptir.","Sıcaklık, basınç, hacim ve derişim gibi fiziksel faktörlerin kimyasal tepkimelere etkisini inceler."],"right":["Fizikokimya","Analitik kimya","Biyokimya","Organik kimya"]},
    text: "Yukarıdaki eşleştirmede, 2 numaralı tanım hangi harfteki disipline aittir?",
    options: ["a","c","b","d","Hiçbiriyle ilişkili değildir"],
    correct: 1,
    explain: "Canlı organizmalardaki kimyasal bileşikleri ve yaşam süreci tepkimelerini inceleyen disiplin biyokimyadır; bu da 'c' harfindeki seçenekle eşleşir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    dialogue: [{"who":"Öğrenci A","text":"Bence organik kimya sadece canlılardan elde edilen doğal maddeleri inceler; laboratuvarda sentezlenen karbon bileşikleri organik kimyanın konusu değildir."},{"who":"Öğrenci B","text":"Bence öyle değil; organik kimyanın ölçütü maddenin kaynağı değil, karbon elementi İÇERİP içermediğidir — laboratuvarda sentezlenen bir plastik de karbon içeriyorsa organik kimyanın konusudur."},{"who":"Öğrenci C","text":"Bence organik ve anorganik kimya arasında hiçbir fark yoktur, ikisi aynı şeydir."}],
    text: "Organik kimyanın tanımıyla ilgili hangi öğrencinin görüşü doğrudur?",
    options: ["Öğrenci A","Öğrenci B","Öğrenci C","A ve C birlikte","Hiçbiri"],
    correct: 1,
    explain: "Organik kimyanın ölçütü, bileşiğin karbon içerip içermediğidir; kaynağının doğal ya da sentetik olması bu sınıflandırmayı değiştirmez. Öğrenci B haklıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir 2p alt kabuğuna değil, bir üretim sürecine dönelim: Petrolden elde edilen ham maddelerin işlenip uzun zincirli, tekrar eden birimlerden oluşan bir plastik ambalaj malzemesine dönüştürülmesi süreci ele alınmaktadır.",
    statements: ["Petrolden elde edilen ham maddelerin karbon bileşiklerine dönüştürülmesi organik kimyanın konusudur.","Ortaya çıkan malzemenin uzun, tekrar eden zincirli yapısının incelenmesi, sürece polimer kimyasının da dahil olduğunu gösterir.","Bu süreç yalnızca tek bir disiplinin (yalnızca organik kimyanın) ilgi alanındadır, başka hiçbir disiplinle ilişkisi yoktur."],
    text: "Yukarıdaki ifadelerden hangileri doğrudur?",
    options: ["Yalnız I","I, II ve III","Yalnız III","II ve III","I ve II"],
    correct: 4,
    explain: "Petrolden karbon bileşiği üretimi organik kimyanın, ortaya çıkan malzemenin uzun zincirli yapısı polimer kimyasının konusudur (I ve II doğru); süreç tek bir disiplinle sınırlı olmadığından III yanlıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    checklist: ["Anorganik kimya yalnızca metalleri inceler, başka hiçbir bileşik türüyle ilgilenmez.","Analitik kimya, bir örnekteki maddenin türünü (nitel) ve miktarını (nicel) belirlemekle ilgilenir.","Fizikokimya yalnızca gazların davranışlarıyla ilgilenir, sıvı/katı hâl değişimleriyle ilgisi yoktur.","Polimer kimyası hem doğal (jelatin gibi) hem sentetik (plastik gibi) polimerleri inceler."],
    text: "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
    options: ["1","3","2","4","Hiçbiri"],
    correct: 2,
    explain: "Yalnızca 2. ve 4. ifadeler doğrudur. Anorganik kimya asit/baz/tuz/ametal/yarı metal/mineralleri de kapsar (1. yanlış); fizikokimya buzun erimesi gibi katı-sıvı hâl değişimlerini de inceler (3. yanlış)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir suyun pH değerinin ÖLÇÜLMESİ ile bu pH değerinin sıcaklıkla nasıl DEĞİŞTİĞİNİN incelenmesi, iki farklı disiplinle ilişkilendirilebilir.",
    text: "Bu iki görev sırasıyla hangi disiplinlerle en doğrudan ilişkilidir?",
    options: ["Biyokimya ve polimer kimyası","Organik kimya ve anorganik kimya","Analitik kimya (ölçüm) ve fizikokimya (sıcaklıkla değişim)","Yalnızca analitik kimya, ikisi de aynı disiplindir","Bu iki görevin kimyayla ilgisi yoktur"],
    correct: 2,
    explain: "Bir değerin doğrudan ÖLÇÜLMESİ analitik kimyanın; bu değerin fiziksel bir koşulla (sıcaklık) nasıl DEĞİŞTİĞİNİN incelenmesi ise fizikokimyanın konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gıda laboratuvarında, üretim hattından alınan örneklerdeki koruyucu madde miktarı hassas cihazlarla ölçülüp yasal sınırlarla karşılaştırılmaktadır.",
    text: "Bu çalışma en doğrudan hangi disiplinin uygulamasıdır?",
    options: ["Fizikokimya","Organik kimya","Analitik kimya","Polimer kimyası","Anorganik kimya"],
    correct: 2,
    explain: "Bir maddenin miktarının hassas cihazlarla ölçülmesi analitik kimyanın (nicel analiz) doğrudan uygulama alanıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırmacı, kas dokusundaki bir enzimin yapısını ve bu enzimin vücuttaki metabolik rolünü incelemektedir.",
    text: "Bu araştırma en doğrudan hangi disiplinin çalışma alanına girer?",
    options: ["Polimer kimyası","Anorganik kimya","Fizikokimya","Analitik kimya","Biyokimya"],
    correct: 4,
    explain: "Canlı organizmalardaki bir molekülün (enzim, bir tür protein) yapısını ve metabolik rolünü inceleme biyokimyanın konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir Ar-Ge biriminde, petrol türevi bir hammaddeden yeni bir boya bileşiği sentezlenmeye çalışılmaktadır.",
    text: "Bu çalışma en doğrudan hangi disiplinin uygulamasıdır?",
    options: ["Anorganik kimya","Organik kimya","Fizikokimya","Analitik kimya","Biyokimya"],
    correct: 1,
    explain: "Petrol türevi (karbon bazlı) bir hammaddeden yeni bileşik sentezlemek organik kimyanın uygulama alanlarından biridir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir inşaat malzemeleri laboratuvarında, farklı mineral bileşimlerinin betonun dayanıklılığına etkisi incelenmektedir.",
    text: "Bu inceleme en doğrudan hangi disiplinin uygulama alanına girer?",
    options: ["Biyokimya","Organik kimya","Anorganik kimya","Polimer kimyası","Fizikokimya"],
    correct: 2,
    explain: "Mineral bileşimlerinin incelenmesi ve inşaat mühendisliğinde uygulanması anorganik kimyanın MEB kitabında verilen uygulama alanlarından biridir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir mühendislik ekibi, bir araç motorunun çalışması sırasında yakıtın yanma tepkimesinde açığa çıkan ısının motor verimine etkisini incelemektedir.",
    text: "Bu inceleme en doğrudan hangi disiplinin uygulama alanına girer?",
    options: ["Fizikokimya","Yalnızca organik kimya","Yalnızca anorganik kimya","Biyokimya","Analitik kimya"],
    correct: 0,
    explain: "Araç motorlarındaki ısıyla ilgili süreçler, MEB kitabında fizikokimyanın örnek uygulama alanı olarak verilmiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir malzeme laboratuvarında, yeni geliştirilen bir biyopolimerin doğada ne kadar sürede parçalanabildiği (biyobozunurluk) test edilmektedir.",
    text: "Bu test en doğrudan hangi disiplinin uygulama alanına girer?",
    options: ["Anorganik kimya","Polimer kimyası","Yalnızca analitik kimya","Yalnızca fizikokimya","Biyokimya"],
    correct: 1,
    explain: "Biyopolimerlerin incelenmesi, polimer kimyasının MEB kitabında açıkça sayılan konularından biridir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    dialogue: [{"who":"Öğrenci A","text":"Kozmetik bir nemlendiricinin içindeki karbon bileşiğinin SENTEZLENMESİ organik kimyanın konusu."},{"who":"Öğrenci B","text":"Bu bileşenin CİLTTEKİ (canlı dokudaki) etkisinin incelenmesi ise biyokimyanın konusu; yani bu süreç iki disiplini birden kapsar."},{"who":"Öğrenci C","text":"Hayır, kozmetik ürünler kimyanın hiçbir disipliniyle ilgili değildir, tamamen güzellik sektörüne aittir."}],
    text: "Kozmetik ürün geliştirme süreciyle ilgili hangi öğrencinin/öğrencilerin görüşü en doğru ve kapsamlıdır?",
    options: ["Yalnızca Öğrenci A","Yalnızca Öğrenci C","Hiçbiri","Yalnızca Öğrenci B","Öğrenci A ve B birlikte"],
    correct: 4,
    explain: "Kozmetik ürün geliştirme; bileşenin sentezlendiği organik kimyayı ve bileşenin canlı doku üzerindeki etkisinin incelendiği biyokimyayı bir arada gerektirir. A ve B birlikte haklıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir müze laboratuvarında, eski bir tablodaki pigmentin kimyasal BİLEŞİMİ belirlenmekte, ayrıca bu pigmentin ışığa maruz kaldığında zamanla nasıl BOZULDUĞU da incelenmektedir.",
    statements: ["Pigmentin kimyasal bileşiminin belirlenmesi analitik kimyanın konusudur.","Pigmentin zamanla bozulma sürecinin (tepkime hızı, kararlılık) incelenmesi fizikokimyanın konusudur.","Bu iki çalışma birbirinden tamamen bağımsızdır, aynı restorasyon çalışmasının parçaları değildir."],
    text: "Yukarıdaki ifadelerden hangileri doğrudur?",
    options: ["Yalnız I","Yalnız III","I ve II","II ve III","I, II ve III"],
    correct: 2,
    explain: "Bileşim belirleme analitik kimyanın, bozulma sürecinin incelenmesi fizikokimyanın konusudur (I ve II doğru); ikisi aynı restorasyon çalışmasının tamamlayıcı parçaları olduğundan III yanlıştır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    checklist: ["Biyokimya yalnızca insan vücuduyla ilgilenir, bitkiler veya mikroorganizmalarla ilgilenmez.","Fizikokimya, bir tepkimenin ENERJİ değişimini de kapsam alanına alır.","Organik kimya, yalnızca doğada bulunan (sentetik olmayan) karbon bileşikleriyle ilgilenir.","Anorganik kimya, yarı iletken teknolojisi gibi ileri teknoloji alanlarında da uygulama bulur."],
    text: "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
    options: ["1","3","4","2","Hiçbiri"],
    correct: 3,
    explain: "Yalnızca 2. ve 4. ifadeler doğrudur. Biyokimya tüm canlıları kapsar (1. yanlış); organik kimya sentetik karbon bileşiklerini de inceler (3. yanlış)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    matchPairs: {"left":["Bir betonun dayanıklılığını artırmak için mineral katkı oranlarını ayarlamak","Bir tepkimenin hızının basınç değişimiyle nasıl etkilendiğini ölçmek","Yeni bir biyobozunur ambalaj malzemesinin moleküler yapısını tasarlamak","Bir su örneğindeki ağır metal derişimini hassas cihazla ölçmek"],"right":["Analitik kimya","Anorganik kimya","Fizikokimya","Polimer kimyası"]},
    text: "Yukarıdaki eşleştirmede, 3 numaralı görev hangi harfteki disipline aittir?",
    options: ["a","d","c","b","Hiçbiriyle ilişkili değildir"],
    correct: 1,
    explain: "Ambalaj malzemesinin moleküler yapısını tasarlamak polimer kimyasının konusudur; bu da 'd' harfindeki seçenekle eşleşir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    table: {"headers":["Disiplin","Odaklandığı temel soru"],"rows":[["Analitik kimya","Bir örnekte ne var ve ne kadar var?"],["Fizikokimya","Tepkime nasıl ve ne hızla gerçekleşir, enerji nasıl dönüşür?"],["Polimer kimyası","Büyük moleküller nasıl sentezlenir ve nasıl davranır?"]],"caption":"Üç disiplinin odaklandığı temel sorular"},
    text: "Tabloya göre, bir tepkimenin sıcaklık artışıyla neden hızlandığını açıklamak en doğrudan hangi disiplinin 'temel sorusuna' karşılık gelir?",
    options: ["Fizikokimya","Analitik kimya","Polimer kimyası","Anorganik kimya","Organik kimya"],
    correct: 0,
    explain: "Tepkime hızının nasıl ve neden değiştiğini (enerji dönüşümü açısından) açıklamak fizikokimyanın temel sorusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir laboratuvarda, bir ilaç hammaddesindeki karbon iskeletli molekülün SENTEZ YÖNTEMİ geliştirilmekte, ayrı bir ekip ise bu molekülün SAFLIK ORANINI hassas cihazlarla ölçmektedir.",
    text: "Bu iki görev sırasıyla hangi disiplinlerle en doğrudan ilişkilidir?",
    options: ["Organik kimya (sentez) ve analitik kimya (saflık ölçümü)","Anorganik kimya ve biyokimya","Fizikokimya ve polimer kimyası","İkisi de yalnızca analitik kimyanın konusudur","Bu iki görevin kimyayla ilgisi yoktur"],
    correct: 0,
    explain: "Karbon iskeletli bir molekülün sentezi organik kimyanın; saflık oranının ölçülmesi analitik kimyanın konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir üretici, ürettiği bileşiğin içerdiği anorganik tuzların oranını hassas cihazla belirlemeye çalışmaktadır.",
    text: "Bu belirleme çalışması hangi disiplinin doğrudan uygulama alanına girer?",
    options: ["Biyokimya","Organik kimya","Analitik kimya","Polimer kimyası","Fizikokimya"],
    correct: 2,
    explain: "Bir bileşikteki tuz oranının hassas biçimde belirlenmesi analitik kimyanın (nicel analiz) konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir malzeme biliminde, kauçuğun sıcaklık arttıkça neden yumuşadığı, moleküler yapısındaki zincirlerin hareketliliği açısından incelenmektedir.",
    text: "Bu inceleme en doğrudan hangi İKİ disiplinin kesişiminde yer alır?",
    options: ["Bu inceleme kimyanın hiçbir disipliniyle ilgili değildir","Analitik kimya ve biyokimya","Organik kimya ve anorganik kimya","Yalnızca analitik kimya","Polimer kimyası ve fizikokimya"],
    correct: 4,
    explain: "Kauçuk bir polimerdir (polimer kimyası); sıcaklıkla davranış değişimi ise fizikokimyanın konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir hastanede, kan örneklerindeki hormon düzeyleri ölçülerek hastalık teşhisine katkı sağlanmaktadır.",
    text: "Bu ölçüm süreci en doğrudan hangi İKİ disiplinin bilgisini bir arada kullanır?",
    options: ["Yalnızca analitik kimya, hormonun disiplinle ilgisi yoktur","Organik kimya ve fizikokimya","Anorganik kimya ve polimer kimyası","Yalnızca biyokimya, ölçümün disiplinle ilgisi yoktur","Biyokimya (hormon molekülü) ve analitik kimya (ölçüm)"],
    correct: 4,
    explain: "Hormon canlı organizmadaki bir molekül olduğundan biyokimyanın; düzeyinin hassas biçimde ölçülmesi ise analitik kimyanın konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir mühendis, yeni bir plastik ambalaj filminin hem moleküler yapısını (uzun zincirli birimler) hem de bu filmin farklı sıcaklıklarda ne kadar esnek kaldığını incelemektedir.",
    text: "Bu iki inceleme sırasıyla hangi disiplinlerle en doğrudan ilişkilidir?",
    options: ["Polimer kimyası (yapı) ve fizikokimya (sıcaklıkla davranış)","Organik kimya ve anorganik kimya","Analitik kimya ve biyokimya","İkisi de yalnızca polimer kimyasının konusudur, fizikokimyanın ilgisi yoktur","Bu iki görevin kimyayla ilgisi yoktur"],
    correct: 0,
    explain: "Malzemenin moleküler yapısı polimer kimyasının; sıcaklıkla davranış değişimi ise fizikokimyanın konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir laboratuvarda, doğal kaynaklı (bitkisel) bir yağın kimyasal yapısı incelenirken, aynı zamanda bu yağın saflık derecesi de ölçülmektedir.",
    text: "Bu iki çalışma sırasıyla hangi disiplinlerle en doğrudan ilişkilidir?",
    options: ["Anorganik kimya ve fizikokimya","Organik kimya (yapı) ve analitik kimya (saflık ölçümü)","Biyokimya ve polimer kimyası","İkisi de yalnızca organik kimyanın konusudur","Bu iki görevin kimyayla ilgisi yoktur"],
    correct: 1,
    explain: "Yağ karbon bileşiği olduğundan yapısının incelenmesi organik kimyanın; saflık derecesinin ölçülmesi ise analitik kimyanın konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırmacı, bir maddenin önce hangi elementlerden oluştuğunu (nitel analiz) belirlemekte, sonra bu elementlerin kütlece yüzdesini (nicel analiz) hesaplamaktadır; üstelik bu madde karbon içeren, büyük ve tekrar eden birimlerden oluşan bir yapıya sahiptir.",
    text: "Bu çalışma en doğrudan hangi disiplinlerin kesişiminde yer alır?",
    options: ["Anorganik kimya ve fizikokimya","Yalnızca analitik kimya","Yalnızca polimer kimyası","Analitik kimya, organik kimya ve polimer kimyasının üçü birden","Biyokimya ve analitik kimya"],
    correct: 3,
    explain: "Nitel+nicel analiz süreci analitik kimyanın; karbon içermesi organik kimyanın; büyük, tekrar eden birimlerden oluşması polimer kimyasının konusudur — üçü birden geçerlidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir yarı iletken üreticisi, kullandığı silikon kristalinin SAFLIK DERECESİNİ hassas cihazlarla ölçerken, aynı zamanda bu kristalin sıcaklık değiştikçe elektrik iletkenliğinin NASIL DEĞİŞTİĞİNİ de incelemektedir.",
    text: "Silikonun kendisiyle ilgilenen temel disiplin ile bu iki inceleme süreci sırasıyla hangi disiplinlerle ilişkilidir?",
    options: ["Silikon anorganik kimyanın konusudur ama ölçüm süreçlerinin hiçbiri kimyayla ilgili değildir","Silikon organik kimyanın konusudur; ikisi de biyokimyanın konusudur","Silikon polimer kimyasının konusudur; ikisi de anorganik kimyanın konusudur","Bu sürecin kimyayla hiçbir ilgisi yoktur","Silikon anorganik kimyanın konusudur; saflık ölçümü analitik kimyanın, iletkenlik değişimi fizikokimyanın konusudur"],
    correct: 4,
    explain: "Silikon (yarı iletken malzeme) anorganik kimyanın konusudur; saflık ölçümü analitik kimyanın, sıcaklıkla iletkenlik değişimi ise fizikokimyanın konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir biyoteknoloji firması, doğal bir proteini laboratuvar ortamında sentezlemeye çalışmakta, ardından bu sentetik proteinin vücuttaki etkisini test etmektedir.",
    text: "Protein molekülünün sentezlenmesi ile vücuttaki etkisinin test edilmesi süreçleri sırasıyla hangi disiplinle en doğrudan ilişkilidir?",
    options: ["Yalnızca organik kimya, biyokimyanın ilgisi yoktur","Biyokimya (protein, canlı sistemdeki etkisiyle birlikte) her iki aşamada da temel disiplindir","Yalnızca anorganik kimya","Yalnızca fizikokimya","Yalnızca polimer kimyası"],
    correct: 1,
    explain: "Protein, biyokimyanın MEB kitabında sayılan temel molekül gruplarından biridir; hem sentezi hem canlı sistemdeki etkisi biyokimyanın kapsamındadır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir malzeme mühendisi, çelik bir alaşımın METAL BİLEŞİMİNİ analiz etmekte, ayrıca bu alaşımın YÜKSEK SICAKLIKTA nasıl davrandığını (genleşme, faz değişimi) incelemektedir.",
    text: "Çeliğin kendisiyle ilgilenen temel disiplin ile bu iki inceleme süreci sırasıyla hangi disiplinlerle ilişkilidir?",
    options: ["Çelik anorganik kimyanın konusudur; bileşim analizi analitik kimyanın, sıcaklıkla davranış fizikokimyanın konusudur","Çelik organik kimyanın konusudur; ikisi de aynı disiplinin konusudur","Çelik polimer kimyasının konusudur; ikisi de biyokimyanın konusudur","Çeliğin kimyayla hiçbir ilgisi yoktur","Çelik anorganik kimyanın konusudur ama diğer iki süreç kimyayla ilgisizdir"],
    correct: 0,
    explain: "Çelik bir metal alaşımı olduğundan anorganik kimyanın konusudur; bileşim analizi analitik kimyanın, yüksek sıcaklıktaki davranışı ise fizikokimyanın konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırma ekibi, doğal kauçuğun (bir biyopolimer) moleküler yapısını incelerken, aynı zamanda bu kauçuğun canlı bir bitkiden (kauçuk ağacından) nasıl üretildiğini de araştırmaktadır.",
    text: "Doğal kauçuğun moleküler yapısının incelenmesi ile bitkideki üretim SÜRECİNİN araştırılması sırasıyla hangi disiplinlerle en doğrudan ilişkilidir?",
    options: ["İkisi de yalnızca polimer kimyasının konusudur","Organik kimya ve anorganik kimya","Analitik kimya ve fizikokimya","Polimer kimyası (moleküler yapı) ve biyokimya (canlıdaki üretim süreci)","Bu araştırmanın kimyayla ilgisi yoktur"],
    correct: 3,
    explain: "Kauçuğun moleküler yapısı polimer kimyasının; canlı bir organizmadaki üretim süreci ise biyokimyanın konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    checklist: ["Bir bileşiğin karbon içerip içermediği, onun organik mi anorganik mi olduğunu belirleyen temel ölçüttür.","Fizikokimya yalnızca gazlarla ilgilenir; sıvı ve katı hâl değişimleri bu disiplinin kapsamı dışındadır.","Bir maddenin canlı bir organizmadan elde edilmiş olması onu biyokimyanın konusu yapabilir; aynı maddenin karbon iskeletinin incelenmesi ise organik kimyanın da konusu olabilir.","Polimer kimyası yalnızca insan yapımı (sentetik) malzemelerle ilgilenir, doğada bulunan biyopolimerlerle ilgilenmez."],
    text: "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
    options: ["2","4","3","Hiçbiri","1"],
    correct: 0,
    explain: "Yalnızca 1. ve 3. ifadeler doğrudur. Fizikokimya sıvı/katı hâl değişimlerini de kapsar (2. yanlış); polimer kimyası doğal biyopolimerleri de inceler (4. yanlış)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gıda ürününün üretim sürecinde: (I) ürünün içerdiği proteinlerin yapısı inceleniyor, (II) ürünün ambalaj filminin moleküler yapısı test ediliyor, (III) üründeki koruyucu madde miktarı hassas cihazla ölçülüyor.",
    statements: ["I numaralı çalışma biyokimyanın konusudur.","II numaralı çalışma polimer kimyasının konusudur.","III numaralı çalışma organik kimyanın değil, analitik kimyanın konusudur."],
    text: "Yukarıdaki ifadelerden hangileri doğrudur?",
    options: ["I, II ve III","I ve II","Yalnız III","II ve III","Yalnız I"],
    correct: 0,
    explain: "I biyokimya (protein), II polimer kimyası (ambalaj filmi), III analitik kimya (madde organik olsa da miktar ÖLÇÜMÜ analitik kimyanın işidir) — üçü de doğrudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    matchPairs: {"left":["Bir tepkimenin sıcaklıkla nasıl hızlandığını, enerji açısından açıklar.","Bir örnekteki maddenin türünü VE miktarını birlikte belirlemeyi hedefler.","Canlı bir hücredeki binlerce farklı molekülün etkileşimini inceler.","Karbon iskeletli bileşiklerin çeşitliliği nedeniyle en geniş çalışma alanına sahiptir.","Büyük, tekrar eden birimlerden oluşan moleküllerin sentezini ve davranışını inceler."],"right":["Organik kimya","Polimer kimyası","Fizikokimya","Analitik kimya","Biyokimya"]},
    text: "Yukarıdaki eşleştirmede, 4 numaralı tanım hangi harfteki disipline aittir?",
    options: ["d","b","c","a","e"],
    correct: 3,
    explain: "Karbon iskeletli bileşiklerin çeşitliliği nedeniyle en geniş çalışma alanına sahip olan disiplin organik kimyadır; bu da 'a' harfindeki seçenekle eşleşir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    dialogue: [{"who":"Öğrenci A","text":"Bir ilaç molekülünün karbon iskeletinin nasıl sentezlendiğini incelemek organik kimyanın, bu molekülün vücuttaki hedef proteine nasıl bağlandığını incelemek ise biyokimyanın konusudur; ikisi farklı ama tamamlayıcı sorular sorar."},{"who":"Öğrenci B","text":"Hayır, ikisi de aynı disiplin; ilaç molekülü tek bir madde olduğu için hangi soruyu sorduğumuzun bir önemi yoktur."},{"who":"Öğrenci C","text":"Bence ilaç geliştirme kimyayla hiç ilgili değildir, tamamen tıbbın konusudur."}],
    text: "İlaç molekülüyle ilgili yukarıdaki görüşlerden hangisi doğrudur?",
    options: ["Öğrenci A","Öğrenci B","Öğrenci C","B ve C birlikte","Hiçbiri"],
    correct: 0,
    explain: "Aynı madde, sorulan SORUYA göre (sentez süreci vs. canlı sistemdeki etkileşim) farklı disiplinlerin konusu olabilir; bu, 'bir madde yalnızca tek bir disipline aittir' kavram yanılgısını düzeltir. Öğrenci A haklıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    table: {"headers":["Çalışma","Odaklandığı soru"],"rows":[["1","Bir alaşımdaki metal oranlarının hassas ölçümü"],["2","Bir polimerin sıcaklıkla esneklik değişiminin incelenmesi"],["3","Bir enzimin canlı hücredeki rolünün incelenmesi"]],"caption":"Üç farklı çalışma"},
    text: "Tablodaki 1, 2 ve 3 numaralı çalışmalar için en uygun disiplinler sırasıyla hangileridir?",
    options: ["1: Biyokimya, 2: Organik kimya, 3: Fizikokimya","1: Organik kimya, 2: Anorganik kimya, 3: Analitik kimya","1: Analitik kimya, 2: Fizikokimya, 3: Biyokimya","1: Polimer kimyası, 2: Biyokimya, 3: Analitik kimya","1: Fizikokimya, 2: Analitik kimya, 3: Organik kimya"],
    correct: 2,
    explain: "1. çalışma bir ölçüm olduğundan analitik kimya; 2. çalışma malzemenin sıcaklıkla DAVRANIŞ değişimi olduğundan fizikokimya; 3. çalışma canlı hücredeki bir molekül olduğundan biyokimyadır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırmacı, doğal kauçuğun (bir biyopolimer) SICAKLIKLA ESNEKLİĞİNİN NASIL DEĞİŞTİĞİNİ ölçmektedir; kauçuğun kendisi hem polimer kimyasının hem de (canlı kaynaklı olduğu için) biyokimyanın ilgi alanına girebilir.",
    text: "Ancak bu araştırmacının sorduğu asıl soru (sıcaklıkla esneklik değişimi) hangi disiplinin temel sorusuyla en doğrudan örtüşür?",
    options: ["Organik kimya","Biyokimya","Analitik kimya","Anorganik kimya","Fizikokimya"],
    correct: 4,
    explain: "Madde hangi disipline 'ait' görünürse görünsün, sorulan SORU (fiziksel koşulun davranışa etkisi) fizikokimyaya aittir — bu, 'bir malzeme = tek disiplin' kavram yanılgısını düzeltir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gıda mühendisi hem ürünün içerdiği yağ oranını (nicel analiz) ölçmekte hem de bu yağın sıcaklıkla nasıl erimeye başladığını (erime davranışı) incelemektedir.",
    text: "Bu iki çalışma sırasıyla hangi disiplinlerle en doğrudan ilişkilidir?",
    options: ["Organik kimya ve anorganik kimya","Analitik kimya (nicel ölçüm) ve fizikokimya (sıcaklıkla erime davranışı)","Biyokimya ve polimer kimyası","İkisi de yalnızca organik kimyanın konusudur","Bu iki görevin kimyayla ilgisi yoktur"],
    correct: 1,
    explain: "Yağ oranının hassas ölçümü analitik kimyanın; sıcaklıkla erime davranışının incelenmesi ise fizikokimyanın konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir plastik türü olan naylonun (bir polimer) SENTEZ TEPKİMESİNDE hangi karbon bazlı başlangıç maddelerinin kullanıldığı organik kimya bilgisiyle belirlenirken, ortaya çıkan naylon ipliğinin dayanıklılığı ve esnekliği polimer kimyası bilgisiyle test edilmektedir.",
    text: "Bu açıklamaya göre organik kimya ile polimer kimyası arasındaki ilişki en doğru şekilde nasıl özetlenebilir?",
    options: ["Organik kimya yalnızca doğal, polimer kimyası yalnızca sentetik maddelerle ilgilenir","İkisi tamamen aynı disiplindir, aralarında hiçbir fark yoktur","Polimer kimyası organik kimyadan tamamen bağımsızdır, karbon bileşikleriyle hiç ilgilenmez","Organik kimya bilgisi genellikle polimer sentezinin temelini oluşturur; polimer kimyası ise ortaya çıkan büyük moleküllerin özellik ve davranışlarına odaklanır — ikisi birbirini tamamlar","Bu iki disiplin arasında hiçbir ilişki kurulamaz"],
    correct: 3,
    explain: "Polimerlerin çoğu karbon bazlı (organik) başlangıç maddelerinden sentezlenir; organik kimya bu sentezin temelini, polimer kimyası ise ortaya çıkan büyük molekülün özellik/davranışını inceler."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    dialogue: [{"who":"Öğrenci A","text":"Bence kimyanın alt disiplinleri birbirinden kesin sınırlarla ayrılmıştır; bir çalışma asla birden fazla disiplinin konusu olamaz."},{"who":"Öğrenci B","text":"Bence öyle değil; pek çok gerçek uygulama (ilaç geliştirme, ambalaj malzemesi tasarımı gibi) birden fazla alt disiplinin bilgisini bir arada gerektirir, sınırlar kesin değil tamamlayıcıdır."},{"who":"Öğrenci C","text":"Bence alt disiplinler yalnızca üniversitede öğretilir, gerçek iş hayatında hiçbir işe yaramaz."}],
    text: "Kimyanın alt disiplinleri arasındaki ilişkiyle ilgili hangi öğrencinin görüşü en doğrudur?",
    options: ["Öğrenci A","Öğrenci C","Öğrenci B","A ve C birlikte","Hiçbiri"],
    correct: 2,
    explain: "Gerçek uygulamalar genellikle birden fazla alt disiplini bir arada gerektirir; disiplinler arası sınırlar kesin değil, tamamlayıcıdır. Öğrenci B haklıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir su arıtma ekipmanı üreticisi, ürettiği filtrenin İÇERDİĞİ mineral bileşimini belirlemekte (I), bu mineral yapının farklı sıcaklıklarda ne kadar kararlı kaldığını incelemekte (II) ve filtredeki metal iyonlarının karakteristik özelliklerini araştırmaktadır (III).",
    statements: ["I numaralı çalışma analitik kimyanın konusudur.","II numaralı çalışma fizikokimyanın konusudur.","III numaralı çalışma anorganik kimyanın konusudur."],
    text: "Yukarıdaki ifadelerden hangileri doğrudur?",
    options: ["Yalnız I","I ve II","II ve III","I, II ve III","I ve III"],
    correct: 3,
    explain: "I analitik kimya (bileşim belirleme), II fizikokimya (sıcaklıkla kararlılık), III anorganik kimya (metal iyonlarının karakteristik özellikleri) — üçü de doğrudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Altı alt disiplin (analitik, biyokimya, organik, anorganik, fizikokimya, polimer kimyası) farklı sorulara odaklanır: 'ne var, ne kadar var?', 'canlıda nasıl işler?', 'karbon bileşikleri nasıl davranır?', 'karbonsuz maddeler nasıl davranır?', 'enerji ve hız nasıl değişir?', 'büyük moleküller nasıl oluşur?'.",
    text: "Bu altı disiplinin farklı sorulara odaklanması, kimyanın alt disiplinlere ayrılmasıyla ilgili en doğru hangi genellemeyi destekler?",
    options: ["Altı disiplin de aynı soruyu farklı kelimelerle sorar, aralarında gerçek bir fark yoktur","Alt disiplinler birbirinden tamamen kopuk, hiçbir ortak yönü olmayan ayrı bilimlerdir","Alt disiplinlerden yalnızca biri (analitik kimya) diğerlerinin temelini oluşturur, geri kalanlar önemsizdir","Alt disiplinlere ayrılma yalnızca eğitim amaçlıdır, gerçek araştırmada hiçbir karşılığı yoktur","Alt disiplinler, kimyanın geniş kapsamını yönetilebilir/uzmanlaşabilir sorulara bölerek incelemeyi kolaylaştırır; ama gerçek problemler genellikle birden fazla disiplini bir arada gerektirir"],
    correct: 4,
    explain: "Alt disiplinlere ayrılma, kimyanın geniş kapsamını odaklı sorulara bölerek derinlemesine uzmanlaşmayı mümkün kılar; ancak gerçek dünya problemleri (bu modüldeki pek çok örnekte görüldüğü gibi) genellikle birden fazla disiplini bir arada gerektirir."
  }
],
  "kariyer": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "MEB'in 'Bilgi Görseli 1.1' şemasına göre kimya alanında eğitim gören bireyler sekiz farklı geniş alanda çalışabilir. Bu alanlardan biri boya, plastik, gübre, reçine, petrokimya, deterjan ve kozmetik gibi çeşitli ürünlerin sentezi, formülasyonu ve üretimini kapsar.",
    text: "Yukarıda tanımlanan kariyer alanı hangisidir?",
    options: ["Sağlık ve Biyoteknoloji","Kimya Endüstrisi","Enerji Sektörü","Malzeme ve Nanoteknoloji","Agronomi ve Tarım"],
    correct: 1,
    explain: "Boya, plastik, gübre, reçine, petrokimya, deterjan ve kozmetik ürünlerin üretimi MEB kitabında 'Kimya Endüstrisi' alanı olarak tanımlanmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bilgi Görseli 1.1'deki alanlardan biri; adli kimya, ilaç geliştirme, biyoteknoloji ve biyomedikal alanlarında araştırma ve uygulama yapılmasını kapsar.",
    text: "Yukarıda tanımlanan kariyer alanı hangisidir?",
    options: ["Çevre ve Sürdürülebilirlik","Kimya Endüstrisi","Sağlık ve Biyoteknoloji","Eğitim ve Akademik Çalışma","Gıda ve İçecek Endüstrisi"],
    correct: 2,
    explain: "Adli kimya, ilaç geliştirme, biyoteknoloji ve biyomedikal araştırma/uygulama MEB kitabında 'Sağlık ve Biyoteknoloji' alanı olarak tanımlanmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bilgi Görseli 1.1'deki alanlardan biri; atık yönetimi, su arıtma teknolojileri, biyolojik çeşitliliğin korunması ve yeşil teknolojilerin geliştirilmesini kapsar.",
    text: "Yukarıda tanımlanan kariyer alanı hangisidir?",
    options: ["Kimya Endüstrisi","Enerji Sektörü","Çevre ve Sürdürülebilirlik","Agronomi ve Tarım","Malzeme ve Nanoteknoloji"],
    correct: 2,
    explain: "Atık yönetimi, su arıtma teknolojileri ve yeşil teknolojiler MEB kitabında 'Çevre ve Sürdürülebilirlik' alanı olarak tanımlanmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bilgi Görseli 1.1'deki alanlardan biri; enerji üretimi, yenilenebilir enerji teknolojileri, pil teknolojileri, yakıt hücreleri ve enerji depolama sistemlerini kapsar.",
    text: "Yukarıda tanımlanan kariyer alanı hangisidir?",
    options: ["Sağlık ve Biyoteknoloji","Çevre ve Sürdürülebilirlik","Enerji Sektörü","Gıda ve İçecek Endüstrisi","Malzeme ve Nanoteknoloji"],
    correct: 2,
    explain: "Enerji üretimi, yenilenebilir enerji, pil teknolojileri ve yakıt hücreleri MEB kitabında 'Enerji Sektörü' alanı olarak tanımlanmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bilgi Görseli 1.1'deki alanlardan biri; gıda güvenliği, gıda üretimi, besin analizi, aroma geliştirme, gıda teknolojisi ve moleküler gastronomi alanlarında araştırma ve uygulamayı kapsar.",
    text: "Yukarıda tanımlanan kariyer alanı hangisidir?",
    options: ["Gıda ve İçecek Endüstrisi","Agronomi ve Tarım","Kimya Endüstrisi","Sağlık ve Biyoteknoloji","Eğitim ve Akademik Çalışma"],
    correct: 0,
    explain: "Gıda güvenliği, besin analizi, aroma geliştirme ve moleküler gastronomi MEB kitabında 'Gıda ve İçecek Endüstrisi' alanı olarak tanımlanmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bilgi Görseli 1.1'deki alanlardan biri; öğretmenlik ve üniversitede öğretim üyeliği yapmayı kapsar.",
    text: "Yukarıda tanımlanan kariyer alanı hangisidir?",
    options: ["Agronomi ve Tarım","Malzeme ve Nanoteknoloji","Sağlık ve Biyoteknoloji","Kimya Endüstrisi","Eğitim ve Akademik Çalışma"],
    correct: 4,
    explain: "Öğretmenlik ve üniversite öğretim üyeliği MEB kitabında 'Eğitim ve Akademik Çalışma' alanı olarak tanımlanmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bilgi Görseli 1.1'deki alanlardan biri; malzeme bilimi, nanoteknoloji ve nanomalzeme üretimi, elektronik ve kompozit malzeme geliştirmeyi kapsar.",
    text: "Yukarıda tanımlanan kariyer alanı hangisidir?",
    options: ["Eğitim ve Akademik Çalışma","Enerji Sektörü","Çevre ve Sürdürülebilirlik","Gıda ve İçecek Endüstrisi","Malzeme ve Nanoteknoloji"],
    correct: 4,
    explain: "Malzeme bilimi, nanoteknoloji, elektronik ve kompozit malzeme geliştirme MEB kitabında 'Malzeme ve Nanoteknoloji' alanı olarak tanımlanmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bilgi Görseli 1.1'deki alanlardan biri; gübre, pestisit ve tarım kimyasalları gibi ürünlerin üretimi ile tarım verimliliğini geliştirme çalışmalarını kapsar.",
    text: "Yukarıda tanımlanan kariyer alanı hangisidir?",
    options: ["Agronomi ve Tarım","Kimya Endüstrisi","Enerji Sektörü","Sağlık ve Biyoteknoloji","Malzeme ve Nanoteknoloji"],
    correct: 0,
    explain: "Gübre, pestisit ve tarım kimyasalları üretimiyle tarım verimliliğini artırma MEB kitabında 'Agronomi ve Tarım' alanı olarak tanımlanmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Türkiye'nin ilk kimya teknoloji merkezi projesi, kimya sektöründe ileri teknoloji ve yüksek katma değere sahip yerli ürünler geliştirmek amacıyla hayata geçirilmiştir.",
    text: "Bu proje hangi iş birliği modeliyle hayata geçirilmiştir?",
    options: ["Bu proje herhangi bir iş birliğine dayanmamaktadır","Yalnızca özel şirketler arası ortaklık","Yalnızca üniversiteler arası ortaklık","Uluslararası bir kuruluşun tek başına finansmanı","Kamu-sanayi iş birliği"],
    correct: 4,
    explain: "Kimya Teknoloji Merkezi, kamu-sanayi iş birliği ile hayata geçirilen Türkiye'nin ilk projesidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kimya teknolojisi ön lisans programlarını tamamlayanlar, kimya sektöründe nitelikli personel ihtiyacını karşılamak amacıyla çeşitli üniversitelerde uygulanan programlardan mezun olur.",
    text: "Kimya teknolojisi ön lisans mezunları hangi pozisyonlarda çalışma imkânı bulur?",
    options: ["Bu mezunlar hiçbir pozisyonda çalışamaz","Yalnızca üniversitede öğretim üyesi olarak","Yalnızca fabrika müdürü olarak","Yalnızca uluslararası şirketlerin CEO'su olarak","Laboratuvar teknikeri, kalite kontrol analisti, araştırma asistanı gibi pozisyonlarda"],
    correct: 4,
    explain: "Kimya teknolojisi ön lisans mezunları laboratuvar teknikeri, kalite kontrol analisti, araştırma asistanı vb. pozisyonlarda çalışma imkânı bulur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Üniversitelerde kimya ile ilişkili daha ileri düzeyde eğitim sunan kimya, kimya mühendisliği, polimer malzeme mühendisliği ve kimya öğretmenliği gibi lisans programları da mevcuttur.",
    text: "Bu lisans programlarından mezun olanlar hangi unvanlara sahip olur?",
    options: ["Yalnızca 'doktor' unvanına","Yalnızca 'teknisyen' unvanına","Kimyager, kimya mühendisi, polimer malzeme mühendisi, kimya öğretmeni","Yalnızca 'avukat' unvanına","Bu programlardan mezun olanlar hiçbir unvana sahip olmaz"],
    correct: 2,
    explain: "Kimya, kimya mühendisliği, polimer malzeme mühendisliği ve kimya öğretmenliği lisans programlarından mezun olanlar sırasıyla kimyager, kimya mühendisi, polimer malzeme mühendisi ve kimya öğretmeni unvanlarına sahip olur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kariyer planlaması; bireyin kariyer yolunu belirlemesi, hedeflerini tanımlaması ve bu hedeflere ulaşmak için strateji geliştirmesidir.",
    text: "'Kariyer planlaması' kavramı en doğru şekilde nasıl tanımlanır?",
    options: ["Bir kişinin doğduğu andan itibaren sahip olduğu, değiştirilemeyen bir yazgı","Yalnızca bir iş başvuru formunu doldurma süreci","Bireyin kariyer yolunu belirlemesi, hedeflerini tanımlaması ve strateji geliştirmesi","Yalnızca maaş miktarını karşılaştırma süreci","Kariyer planlamasının bilimsel bir tanımı yoktur"],
    correct: 2,
    explain: "MEB kitabına göre kariyer planlaması, bireyin kariyer yolunu belirlemesi, hedeflerini tanımlaması ve bu hedeflere ulaşmak için strateji geliştirmesidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    cycleDiagram: {
      centerLabel: "Kariyer Planlama Döngüsü",
      caption: "Kariyer Planlama Döngüsü'nün dört evresi",
      segments: [
        { label: "Kişisel Özelliklerini Tanı" },
        { label: "Kariyer Fırsatlarını Araştır" },
        { label: "Karar Ver ve Planlama Yap" },
        { label: "Planlarını Uygula" }
      ]
    },
    context: "Kariyer Planlama Döngüsü dört evreden oluşur: Kişisel Özelliklerini Tanı, Kariyer Fırsatlarını Araştır, Karar Ver ve Planlama Yap, Planlarını Uygula.",
    text: "Kariyer Planlama Döngüsü'nün ilk evresi olan 'Kişisel Özelliklerini Tanı' evresi başka hangi isimle de anılır?",
    options: ["Bu evrenin başka bir ismi yoktur","Kariyer Fırsatları","Karar Verme","Planları Uygulama","Öz Farkındalık"],
    correct: 4,
    explain: "MEB kitabındaki Kariyer Planlama Döngüsü şemasında 'Kişisel Özelliklerini Tanı' evresi 'Öz Farkındalık' olarak da adlandırılmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "1946'da Mardin'in Savur ilçesinde doğan, İstanbul Üniversitesi Tıp Fakültesini birincilikle bitiren ve DNA onarım mekanizmaları üzerine yaptığı çalışmalarla 2015'te Nobel Kimya Ödülü kazanan bir Türk bilim insanıdır.",
    text: "Yukarıda tanıtılan bilim insanı kimdir?",
    options: ["Bu tanım hiçbir gerçek bilim insanına ait değildir","Oktay Sinanoğlu","Cabir bin Hayyan","Ebu Bekir Razi","Aziz Sancar"],
    correct: 4,
    explain: "Bu tanım, 2015 Nobel Kimya Ödülü'nü kazanan ilk Türk vatandaşı olan Aziz Sancar'a aittir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aziz Sancar, 2015 Nobel Kimya Ödülü'nü hücrelerin hasar görmüş DNA'yı nasıl onardığı ve genetik bilgiyi nasıl koruduğu üzerine yaptığı araştırmalarla kazanmıştır.",
    text: "Aziz Sancar'ın Nobel Ödülü'nü kazanmasını sağlayan araştırma konusu nedir?",
    options: ["Bir enerji santralinin tasarımı","Yeni bir gezegenin keşfi","Bir aşının geliştirilmesi","Bir polimer malzemenin sentezi","Hasar görmüş DNA'nın hücreler tarafından onarım mekanizmaları"],
    correct: 4,
    explain: "Aziz Sancar, hasar görmüş DNA'nın hücreler tarafından nasıl onarıldığını ve genetik bilginin nasıl korunduğunu haritalandıran çalışmasıyla 2015 Nobel Kimya Ödülü'nü kazanmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "İtalya'nın Bari şehrinde doğup 1939'da ailesiyle Türkiye'ye dönen, California Üniversitesi Kimya Mühendisliği Bölümünü üç senede ve birincilikle bitiren, 25 yaşında Yale Üniversitesinde en genç profesör unvanını alan ve 'Türk Aynştaynı' olarak tanınan bilim insanıdır.",
    text: "Yukarıda tanıtılan bilim insanı kimdir?",
    options: ["Ebu Bekir Razi","Aziz Sancar","Cabir bin Hayyan","Oktay Sinanoğlu","Bu tanım hiçbir gerçek bilim insanına ait değildir"],
    correct: 3,
    explain: "Bu tanım, kimya, biyokimya ve moleküler biyofizik alanlarında önemli katkılar yapan, 'Türk Aynştaynı' olarak tanınan Oktay Sinanoğlu'na aittir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aziz Sancar tıp eğitimi alıp biyokimya/moleküler biyoloji alanında derinleşerek 2015 Nobel Kimya Ödülü'nü kazanmış; Oktay Sinanoğlu ise kimya mühendisliği eğitimi alıp kimya/biyokimya/moleküler biyofizik alanlarında uluslararası ödüller kazanmıştır.",
    text: "Aziz Sancar ve Oktay Sinanoğlu'nun ortak yönü aşağıdakilerden hangisidir?",
    options: ["İkisi de aynı Nobel Ödülü'nü birlikte paylaşmıştır","İkisi de aynı üniversiteden aynı yıl mezun olmuştur","İkisi de yalnızca Türkiye'de çalışmıştır, yurt dışı deneyimleri yoktur","İkisi de kimya/biyokimya alanında uluslararası düzeyde tanınan Türk bilim insanlarıdır","İkisinin de kimyayla hiçbir ilgisi yoktur"],
    correct: 3,
    explain: "Aziz Sancar ve Oktay Sinanoğlu, farklı eğitim yollarından geçmiş olsalar da ikisi de kimya/biyokimya alanında uluslararası düzeyde tanınan Türk bilim insanlarıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    dialogue: [{"who":"Öğrenci A","text":"Atık su arıtma teknolojileri geliştirmek istiyorsan bence Enerji Sektörü'nde çalışmalısın, çünkü su arıtma da bir çeşit enerji işlemidir."},{"who":"Öğrenci B","text":"Bence Çevre ve Sürdürülebilirlik alanı daha doğru; çünkü su arıtma teknolojileri açıkça bu alanın tanımında yer alıyor."},{"who":"Öğrenci C","text":"Bence hiçbiri, su arıtmanın kimyayla hiçbir ilgisi yok, tamamen mühendisliğin konusu."}],
    text: "Su arıtma teknolojileriyle ilgilenmek isteyen biri için en uygun kariyer alanı hangisidir?",
    options: ["Öğrenci A haklıdır","Öğrenci C haklıdır","Hiçbiri haklı değildir","A ve C birlikte haklıdır","Öğrenci B haklıdır"],
    correct: 4,
    explain: "Su arıtma teknolojileri, MEB kitabında açıkça 'Çevre ve Sürdürülebilirlik' alanının tanımında sayılmıştır. Öğrenci B haklıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    matchPairs: {"left":["Boya, plastik, gübre, reçine, petrokimya, deterjan ve kozmetik ürünlerin üretimi","Adli kimya, ilaç geliştirme, biyoteknoloji ve biyomedikal araştırmalar","Gıda güvenliği, besin analizi, aroma geliştirme ve moleküler gastronomi","Malzeme bilimi, nanoteknoloji, elektronik ve kompozit malzeme geliştirme"],"right":["Malzeme ve Nanoteknoloji","Kimya Endüstrisi","Sağlık ve Biyoteknoloji","Gıda ve İçecek Endüstrisi"]},
    text: "Yukarıdaki eşleştirmede, 3 numaralı tanım hangi harfteki kariyer alanına aittir?",
    options: ["a","d","c","b","Hiçbiriyle ilişkili değildir"],
    correct: 1,
    explain: "Gıda güvenliği, besin analizi ve moleküler gastronomi 'Gıda ve İçecek Endüstrisi' alanına aittir; bu da 'd' harfindeki seçenekle eşleşir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    matchPairs: {"left":["Atık yönetimi, su arıtma teknolojileri ve yeşil teknolojilerin geliştirilmesi","Enerji üretimi, yenilenebilir enerji, pil teknolojileri ve yakıt hücreleri","Öğretmenlik ve üniversitede öğretim üyeliği","Gübre, pestisit ve tarım kimyasalları üretimiyle tarım verimliliğini artırma"],"right":["Agronomi ve Tarım","Çevre ve Sürdürülebilirlik","Enerji Sektörü","Eğitim ve Akademik Çalışma"]},
    text: "Yukarıdaki eşleştirmede, 2 numaralı tanım hangi harfteki kariyer alanına aittir?",
    options: ["a","b","c","d","Hiçbiriyle ilişkili değildir"],
    correct: 2,
    explain: "Enerji üretimi, yenilenebilir enerji ve yakıt hücreleri 'Enerji Sektörü' alanına aittir; bu da 'c' harfindeki seçenekle eşleşir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kariyer Planlama Döngüsü şu evrelerden oluşur: Kişisel Özelliklerini Tanı (Öz Farkındalık), Kariyer Fırsatlarını Araştır, Karar Ver ve Planlama Yap, Planlarını Uygula.",
    statements: ["Döngü, bireyin kendi ilgi ve yeteneklerini tanımasıyla başlar.","Kariyer fırsatlarını araştırmak, karar verme aşamasından SONRA gelir.","Döngü, planların uygulanmasıyla sona erer ve bir daha tekrarlanmaz."],
    text: "Yukarıdaki ifadelerden hangisi doğrudur?",
    options: ["I ve II","Yalnız I","Yalnız III","II ve III","I, II ve III"],
    correct: 1,
    explain: "Döngü, kişisel özellikleri tanımayla başlar (I doğru); fırsatları araştırmak karar vermeden ÖNCE gelir (II yanlış); şema DÖNGÜSEL olduğundan bir kez uygulamayla bitmez, tekrar gözden geçirilebilir (III yanlış)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    checklist: ["Kimya Endüstrisi yalnızca boya üretimiyle ilgilenir, başka hiçbir ürünle ilgisi yoktur.","Sağlık ve Biyoteknoloji alanı adli kimyayı da kapsar.","Eğitim ve Akademik Çalışma alanı yalnızca ilkokul öğretmenliğini kapsar, üniversiteyle ilgisi yoktur.","Malzeme ve Nanoteknoloji alanı elektronik malzeme geliştirmeyi de kapsar."],
    text: "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
    options: ["1","2","3","4","Hiçbiri"],
    correct: 1,
    explain: "Yalnızca 2. ve 4. ifadeler doğrudur. Kimya Endüstrisi plastik, gübre, deterjan, kozmetik gibi pek çok ürünü kapsar (1. yanlış); Eğitim ve Akademik Çalışma üniversite öğretim üyeliğini de kapsar (3. yanlış)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aziz Sancar, NATO-TÜBİTAK bursuyla ABD'ye giderek Johns Hopkins Üniversitesinde çalışmış, ardından Dallas Teksas Üniversitesi Moleküler Biyoloji programına katılmıştır.",
    text: "Aziz Sancar'ın bu adımları, kariyer planlamasının hangi unsuruna somut bir örnektir?",
    options: ["Yurt dışında ileri eğitim/araştırma fırsatlarını araştırıp değerlendirme","Yalnızca şans eseri gerçekleşen, plansız bir olay","Kariyer planlamasıyla hiçbir ilgisi olmayan rastgele bir seyahat","Yalnızca maddi kazanç amaçlı bir karar","Kariyer Planlama Döngüsü'nün hiçbir evresiyle ilişkilendirilemez"],
    correct: 0,
    explain: "Sancar'ın burs ve üniversite seçimleri, Kariyer Planlama Döngüsü'ndeki 'Kariyer Fırsatlarını Araştır' evresinin somut bir örneğidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Oktay Sinanoğlu, babasının vefatı sonrasında maddi sıkıntılar yaşamasına rağmen azmi ve zekâsı sayesinde burslu olarak gittiği California Üniversitesi Kimya Mühendisliği Bölümünü üç senede ve birincilikle bitirmiştir.",
    text: "Bu bilgi, Sinanoğlu'nun kariyer yolculuğuyla ilgili en doğru hangi çıkarımı destekler?",
    options: ["Maddi zorluklar azim ve başarıyla aşılabilecek engeller olabilir; başarı yalnızca elverişli koşullara bağlı değildir","Maddi sıkıntı yaşayan hiç kimse akademik başarı elde edemez","Burslu okumak akademik başarıyı garanti etmez, hiçbir katkısı yoktur","Sinanoğlu'nun başarısı tamamen şans eseridir","Bu bilgi kariyer planlamasıyla hiçbir ilişki taşımaz"],
    correct: 0,
    explain: "Sinanoğlu'nun hikâyesi, maddi zorlukların azim ve çalışkanlıkla aşılabileceğini; başarının yalnızca elverişli koşullara değil, bireyin çabasına da bağlı olduğunu gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aziz Sancar, klonlanmış bir genin zarar görmüş DNA'nın onarımında kullanılabileceğini keşfetmiş; bu buluşu üzerine önce yüksek lisans, 1977'de ise doktora derecesini tamamlamıştır.",
    text: "Bu bilgiye göre Sancar'ın akademik kariyerindeki ilerlemesi neyle doğrudan ilişkilidir?",
    options: ["Rastgele bir kura sonucuyla","Yalnızca ailesinin maddi desteğiyle","Bir öğretmeninin doğrudan ricasıyla","Kendi yaptığı özgün bir bilimsel keşifle","Bu ilerlemenin bilimsel bir dayanağı yoktur"],
    correct: 3,
    explain: "Sancar'ın akademik kariyerindeki ilerleme (yüksek lisans, doktora), klonlanmış genle ilgili kendi yaptığı özgün keşfe dayanmaktadır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    table: {"headers":["Kariyer alanı","Açıklama"],"rows":[["Enerji Sektörü","Yenilenebilir enerji ve pil teknolojileri"],["Agronomi ve Tarım","Gübre ve tarım kimyasalları üretimi"],["Malzeme ve Nanoteknoloji","Öğretmenlik ve üniversite öğretim üyeliği"],["Gıda ve İçecek Endüstrisi","Besin analizi ve gıda güvenliği"]],"caption":"Dört kariyer alanı ve açıklamaları; bir eşleştirme hatalı yapılmıştır"},
    text: "Tabloda hangi kariyer alanı-açıklama eşleştirmesi HATALIDIR?",
    options: ["Malzeme ve Nanoteknoloji — Öğretmenlik ve üniversite öğretim üyeliği","Enerji Sektörü — Yenilenebilir enerji ve pil teknolojileri","Agronomi ve Tarım — Gübre ve tarım kimyasalları üretimi","Gıda ve İçecek Endüstrisi — Besin analizi ve gıda güvenliği","Tabloda hatalı bir eşleştirme yoktur"],
    correct: 0,
    explain: "Öğretmenlik ve üniversite öğretim üyeliği aslında 'Eğitim ve Akademik Çalışma' alanına aittir; Malzeme ve Nanoteknoloji ise malzeme bilimi, nanoteknoloji, elektronik ve kompozit malzeme geliştirmeyle ilgilidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kimya Teknoloji Merkezi'nin Girişimcilik ve AR-GE Merkezi birimi, sanayi-üniversite iş birliği içerisinde genç bilim insanlarına ve akademisyenlere kimya alanındaki araştırma ve geliştirme faaliyetlerini hayata geçirmeleri için fırsatlar sunmaktadır.",
    text: "Bu birimin sunduğu fırsatlardan yararlanan öğrenciler AR-GE faaliyetleri sayesinde en doğrudan neyi geliştirme şansı bulur?",
    options: ["Kendi alanlarında uzmanlaşma ve liderlik becerileri","Yalnızca yabancı dil becerileri","Yalnızca spor becerileri","Bu birimin öğrencilere hiçbir katkısı yoktur","Yalnızca sosyal medya kullanım becerileri"],
    correct: 0,
    explain: "MEB kitabına göre AR-GE faaliyetleri sayesinde öğrenciler kendi alanlarında uzmanlaşma ve liderlik becerilerini geliştirme şansına sahip olur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    dialogue: [{"who":"Öğrenci A","text":"Kozmetik ürün formülasyonu geliştirmek istiyorum; bu Kimya Endüstrisi alanına girer, çünkü kozmetik ürünler açıkça bu alanın tanımında sayılmış."},{"who":"Öğrenci B","text":"Bence Sağlık ve Biyoteknoloji alanına girer, çünkü kozmetik cilt üzerinde kullanılıyor."},{"who":"Öğrenci C","text":"Bence bu, sekiz kariyer alanının hiçbirine girmez."}],
    text: "Kozmetik ürün formülasyonu geliştirmek isteyen biri için MEB'in sınıflandırmasına göre en uygun kariyer alanı hangisidir?",
    options: ["B ve C birlikte haklıdır","Öğrenci B haklıdır","Öğrenci C haklıdır","Öğrenci A haklıdır","Hiçbiri haklı değildir"],
    correct: 3,
    explain: "MEB kitabındaki Kimya Endüstrisi tanımı açıkça 'kozmetik' ürünleri saymıştır; Öğrenci A haklıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aziz Sancar, Nobel Ödülü'nü aldıktan sonra 'Beni ödüle götüren, Atatürk'ün yaptığı eğitim devrimidir' diyerek madalyasını ve sertifikasını Anıtkabir Müzesine teslim etmiştir.",
    text: "Bu davranış, Sancar'ın hangi tutumunu en doğrudan yansıtır?",
    options: ["Bu davranışın kariyer planlamasıyla hiçbir ilgisi yoktur","Ödülü önemsemediğini gösteren kayıtsız bir tutum","Yalnızca kişisel çıkarını önceleyen bir tutum","Başarısını aldığı eğitim fırsatlarına ve ülkesine bağlayan bir minnettarlık tutumu","Bilimsel başarıyı reddeden bir tutum"],
    correct: 3,
    explain: "Sancar'ın bu davranışı, kendi başarısını aldığı eğitim fırsatlarına ve ülkesine bağlayan bir minnettarlık tutumunu yansıtır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Oktay Sinanoğlu, çalışmaları sayesinde Amerika'da Alfred Sloan Ödülü, Japonya'da Uluslararası Seçkin Bilim Ödülü, Meksika'da Elena Moshinsky Bilim Ödülü ve Almanya'da dünyada ilk defa verilen Aleksander von Humbolt Bilim Ödülü'nü kazanmıştır.",
    text: "Bu bilgi, Sinanoğlu'nun bilimsel kariyerinin hangi yönünü en açık şekilde gösterir?",
    options: ["Yalnızca Türkiye'de bilinen, dünyada tanınmayan bir bilim insanı olduğunu","Katkılarının yalnızca Türkiye'de değil, uluslararası düzeyde de tanındığını","Ödüllerin kariyer planlamasıyla hiçbir ilgisi olmadığını","Sinanoğlu'nun yalnızca bir ülkede çalıştığını","Bu ödüllerin kimya alanıyla ilgisiz olduğunu"],
    correct: 1,
    explain: "Farklı ülkelerden (Amerika, Japonya, Meksika, Almanya) aldığı ödüller, Sinanoğlu'nun katkılarının uluslararası düzeyde tanındığını gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "'Bilgi Görseli 1.1' kimya alanında eğitim gören bireylerin çalışabileceği sekiz farklı alanı göstermektedir.",
    statements: ["Bu sekiz alan birbirinden tamamen bağımsızdır, bir kişi yalnızca birinde çalışabilir.","Bu sekiz alan, kimya eğitiminin sanayi, sağlık, çevre, enerji, gıda, eğitim, malzeme ve tarım gibi çok farklı sektörlerde iş imkânı sunduğunu gösterir.","Bu sekiz alandan yalnızca 'Eğitim ve Akademik Çalışma' gerçek bir kariyer seçeneğidir, diğerleri örnek amaçlıdır."],
    text: "Yukarıdaki ifadelerden hangisi doğrudur?",
    options: ["Yalnız II","Yalnız I","I ve III","II ve III","I, II ve III"],
    correct: 0,
    explain: "Sekiz alan, kimya eğitiminin çok farklı sektörlerde iş imkânı sunduğunu gösterir (II doğru); alanlar arasında geçiş/kesişim mümkündür (I yanlış) ve hepsi gerçek kariyer seçenekleridir (III yanlış)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kimya teknolojisi ön lisans programını tamamlayan biri laboratuvar teknikeri olarak çalışabilirken, kimya lisans programını tamamlayan biri kimyager unvanına sahip olur.",
    text: "Bu bilgiye göre, ön lisans ve lisans mezuniyeti arasındaki temel fark en doğru şekilde nasıl özetlenebilir?",
    options: ["İkisi arasında hiçbir fark yoktur, aynı unvana sahip olurlar","Eğitim düzeyi, elde edilebilecek unvan ve pozisyonun kapsamını etkiler","Ön lisans mezunları hiçbir pozisyonda çalışamaz","Lisans mezunları yalnızca akademisyen olabilir, sanayide çalışamaz","Bu bilgi kariyer planlamasıyla ilgisizdir"],
    correct: 1,
    explain: "Ön lisans ve lisans mezuniyeti farklı unvan ve pozisyonlara karşılık gelir; eğitim düzeyi bu kapsamı doğrudan etkiler."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kimya, kimya mühendisliği, polimer malzeme mühendisliği ve kimya öğretmenliği farklı lisans programlarıdır; her biri farklı bir unvana karşılık gelir.",
    text: "Polimer malzeme mühendisliği programından mezun olan biri hangi unvana sahip olur?",
    options: ["Laboratuvar teknikeri","Kimyager","Kimya öğretmeni","Polimer malzeme mühendisi","Bu program herhangi bir unvan sağlamaz"],
    correct: 3,
    explain: "Polimer malzeme mühendisliği lisans programından mezun olanlar 'polimer malzeme mühendisi' unvanına sahip olur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kariyer Planlama Döngüsü şeması, dört evrenin (Kişisel Özelliklerini Tanı, Kariyer Fırsatlarını Araştır, Karar Ver ve Planlama Yap, Planlarını Uygula) bir merkez etrafında döngüsel olarak birbirine bağlandığını gösterir.",
    text: "Bu döngüsel yapı, kariyer planlamasıyla ilgili en doğru hangi fikri destekler?",
    options: ["Kariyer planlaması yalnızca lise yıllarında bir kez yapılır ve bir daha değiştirilemez","Kariyer planlaması tek seferlik bir karar değil, zamanla tekrar gözden geçirilebilen sürekli bir süreçtir","Döngüdeki evrelerin sırası önemsizdir, herhangi bir sırayla uygulanabilir","Döngü yalnızca bilim insanları için geçerlidir","Bu şemanın kariyer planlamasıyla hiçbir ilişkisi yoktur"],
    correct: 1,
    explain: "Döngüsel yapı, kariyer planlamasının tek seferlik değil, zamanla tekrar gözden geçirilebilen sürekli bir süreç olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir araştırmacı, yakıt hücrelerinde kullanılan yeni bir elektrot malzemesini (nanoyapılı bir kompozit) geliştirmektedir; bu malzeme hem enerji depolama verimini artırmakta hem de nanoteknoloji yöntemleriyle üretilmektedir.",
    text: "Bu araştırmacının çalışması en doğrudan hangi İKİ kariyer alanının kesişiminde yer alır?",
    options: ["Bu çalışmanın sekiz kariyer alanından hiçbiriyle ilgisi yoktur","Gıda ve İçecek Endüstrisi ve Eğitim ve Akademik Çalışma","Agronomi ve Tarım ve Sağlık ve Biyoteknoloji","Yalnızca Kimya Endüstrisi, diğerleriyle ilgisi yoktur","Enerji Sektörü ve Malzeme ve Nanoteknoloji"],
    correct: 4,
    explain: "Yakıt hücresi/enerji depolama Enerji Sektörü'nün; nanoyapılı kompozit malzeme geliştirme ise Malzeme ve Nanoteknoloji'nin tanımında yer alır — çalışma bu ikisinin kesişimindedir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir uzman, olay yerinden toplanan iz miktardaki maddeleri analiz ederek adli sürece bilimsel kanıt sunmaktadır.",
    text: "Bu görev, MEB'in kariyer alanları sınıflandırmasına göre hangi geniş kariyer alanının İÇİNDE yer alır?",
    options: ["Sağlık ve Biyoteknoloji (adli kimya bu alanın kapsamında sayılmıştır)","Kimya Endüstrisi","Agronomi ve Tarım","Eğitim ve Akademik Çalışma","Bu görev sekiz kariyer alanından hiçbirinin kapsamında değildir"],
    correct: 0,
    explain: "MEB kitabındaki Bilgi Görseli 1.1'de adli kimya, 'Sağlık ve Biyoteknoloji' alanının açıklamasında açıkça sayılmıştır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kimya bilgisi, son dönemlerde gastronominin bilimsel bir alan olma sürecine katkıda bulunarak 'moleküler gastronomi' kavramının gelişimine yardımcı olmuştur.",
    text: "Moleküler gastronomi, MEB'in kariyer alanları sınıflandırmasına göre hangi geniş alanın kapsamına girer?",
    options: ["Enerji Sektörü","Malzeme ve Nanoteknoloji","Gıda ve İçecek Endüstrisi","Eğitim ve Akademik Çalışma","Bu kavram sekiz kariyer alanından hiçbirinin kapsamında değildir"],
    correct: 2,
    explain: "MEB kitabı, moleküler gastronomiyi açıkça 'Gıda ve İçecek Endüstrisi' alanının tanımı içinde saymıştır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aziz Sancar tıp eğitimi alıp biyokimya/moleküler biyoloji alanında; Oktay Sinanoğlu ise kimya mühendisliği eğitimi alıp kimya/biyokimya/moleküler biyofizik alanında uluslararası düzeyde tanınmıştır.",
    statements: ["İkisi de başlangıçta farklı bir eğitimle (tıp / mühendislik) başlayıp, sonrasında kimyayla ilişkili alanlarda derinleşmiştir.","İkisi de yaşamları boyunca yalnızca Türkiye'de çalışmış, yurt dışı deneyimleri yoktur.","İkisi de uluslararası ödüller kazanarak alanlarında tanınmıştır."],
    text: "Yukarıdaki ifadelerden hangileri doğrudur?",
    options: ["Yalnız I","I ve II","II ve III","I ve III","I, II ve III"],
    correct: 3,
    explain: "İkisi de farklı bir eğitimle başlayıp kimyayla ilişkili alanlarda derinleşmiş ve uluslararası ödüller kazanmıştır (I ve III doğru); ancak ikisi de ABD'de önemli süre çalışmış/okumuştur, bu yüzden II yanlıştır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aziz Sancar, 2015 Nobel Kimya Ödülü'nü hücrelerin hasar görmüş DNA'yı nasıl onardığını ve genetik bilgiyi nasıl koruduğunu haritalandıran çalışmasıyla kazanmıştır; kimya alanında Nobel Ödülü kazanan İLK Türk vatandaşıdır.",
    text: "Aşağıdaki ifadelerden hangisi bu bilgiyle ÇELİŞİR (yanlıştır)?",
    options: ["Sancar'ın araştırması genetik bilginin korunmasıyla ilgilidir","Sancar'ın çalışması DNA onarım mekanizmalarıyla ilgilidir","Sancar, 2015 yılında Nobel Kimya Ödülü kazanmıştır","Sancar, kimya alanında Nobel Ödülü kazanan ikinci Türk vatandaşıdır","Sancar, kimya alanında Nobel kazanan ilk Türk vatandaşıdır"],
    correct: 3,
    explain: "Sancar kimya alanında Nobel Ödülü kazanan İKİNCİ değil, İLK Türk vatandaşıdır; bu nedenle bu ifade bilgiyle çelişir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    dialogue: [{"who":"Öğrenci A","text":"Bence kimya kariyer alanları birbirinden kesin çizgilerle ayrılmıştır; bir kişi kariyeri boyunca yalnızca bir alanda çalışabilir."},{"who":"Öğrenci B","text":"Bence öyle değil; örneğin bir gıda mühendisi hem Gıda ve İçecek Endüstrisi'nde hem de Çevre ve Sürdürülebilirlik alanında (gıda atığının çevresel etkisini azaltma gibi) çalışabilir."},{"who":"Öğrenci C","text":"Bence kariyer alanları arasında geçiş yapmak imkânsızdır, biri seçildiğinde diğerlerine asla geçilemez."}],
    text: "Kimya kariyer alanları arasındaki ilişkiyle ilgili hangi öğrencinin görüşü en doğrudur?",
    options: ["Öğrenci A","Öğrenci C","Öğrenci B","A ve C birlikte","Hiçbiri"],
    correct: 2,
    explain: "Gerçek meslekler genellikle birden fazla kariyer alanının özelliklerini bir arada taşıyabilir; alanlar arasında kesin, geçilmez sınırlar yoktur. Öğrenci B haklıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kimya Teknoloji Merkezi, Türkiye'den dünyaya açılacak bu merkez ile küresel ticarette Türk kimya sektörünün öne çıkarılmasını hedeflemektedir; bu merkez kamu-sanayi iş birliğiyle hayata geçirilen Türkiye'nin ilk projesidir.",
    text: "Bu bilgiye göre Kimya Teknoloji Merkezi'nin nihai stratejik hedefi en doğru şekilde nasıl özetlenebilir?",
    options: ["Yalnızca yurt dışından ürün ithal etmek","Yalnızca üniversite öğrencilerine staj imkânı sunmak","Yerli, yüksek katma değerli kimyasal ürünler geliştirerek Türkiye'yi küresel kimya ticaretinde öne çıkarmak","Kimya sektörünü tamamen kapatmak","Bu merkezin herhangi bir stratejik hedefi yoktur"],
    correct: 2,
    explain: "MEB kitabına göre merkez, yerli/yüksek katma değerli ürünler geliştirerek küresel ticarette Türk kimya sektörünü öne çıkarmayı hedeflemektedir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    table: {"headers":["Kişi","Eğitim alanı","Uluslararası tanınma"],"rows":[["Aziz Sancar","Tıp → Biyokimya/Moleküler Biyoloji","2015 Nobel Kimya Ödülü"],["Oktay Sinanoğlu","Kimya Mühendisliği → Kimya/Biyokimya","Alfred Sloan, Humbolt vb. ödüller, 2 kez Nobel adaylığı"]],"caption":"İki Türk bilim insanının kariyer yolculuğu"},
    text: "Tablodaki iki bilim insanının kariyer yolculuğu karşılaştırıldığında en doğru ortak çıkarım hangisidir?",
    options: ["İkisi de farklı bir temel eğitimden başlayıp derin uzmanlaşmayla uluslararası düzeyde tanınan Türk bilim insanları olmuştur","İkisi de aynı üniversitede aynı bölümü okumuştur","İkisi de yalnızca ulusal düzeyde tanınmıştır, uluslararası ödülleri yoktur","İkisinin kariyer yolculuğu arasında hiçbir ortak yön yoktur","Tablo, kariyer planlamasıyla ilgili hiçbir bilgi vermez"],
    correct: 0,
    explain: "Tablo, ikisinin de farklı bir temel eğitimden (tıp/mühendislik) başlayıp kimyayla ilişkili alanlarda derinleşerek uluslararası düzeyde tanındığını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    checklist: ["Enerji Sektörü kariyer alanı yalnızca fosil yakıtlarla ilgilenir, yenilenebilir enerjiyle ilgisi yoktur.","Malzeme ve Nanoteknoloji alanı elektronik malzeme geliştirmeyi kapsayabilir.","Kariyer Planlama Döngüsü'nde 'Karar Ver ve Planlama Yap' evresi, fırsatları araştırmadan ÖNCE gelir.","Kimya teknolojisi ön lisans mezunları kalite kontrol analisti olarak çalışabilir."],
    text: "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
    options: ["1","3","2","4","Hiçbiri"],
    correct: 2,
    explain: "Yalnızca 2. ve 4. ifadeler doğrudur. Enerji Sektörü yenilenebilir enerjiyi de kapsar (1. yanlış); döngüde fırsatları araştırma, karar vermeden ÖNCE gelir (3. yanlış, sıralama ters verilmiş)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Oktay Sinanoğlu'nun bilime katkıları arasında 'Atom ve Moleküllerde Çoklu Elektron Kuramı', 'Yapısal-Elektronik Yöntem' ve 'Mikrotermodinamik' gibi teoriler sayılabilir.",
    text: "Bu katkılar, Sinanoğlu'nun çalışma alanıyla ilgili en doğru hangi çıkarımı destekler?",
    options: ["Yalnızca gıda mühendisliği alanında çalışmıştır","Yalnızca deneysel laboratuvar teknisyenliği yapmıştır","Bu teorilerin kimyayla hiçbir ilgisi yoktur","Kuramsal/teorik kimya ve moleküler biyofizik alanlarında derin katkılar sağlamıştır","Bu katkılar hiçbir bilimsel değere sahip değildir"],
    correct: 3,
    explain: "Sayılan teoriler (çoklu elektron kuramı, mikrotermodinamik vb.), Sinanoğlu'nun kuramsal/teorik kimya ve moleküler biyofizik alanlarında derin katkılar sağladığını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "MEB'in kariyer alanları sınıflandırması sekiz geniş alan sunar; ancak gerçek iş tanımları genellikle birden fazla alanın kesişiminde yer alabilir (örneğin biyoyakıt Ar-Ge'si hem Enerji Sektörü hem Agronomi ve Tarım'la ilişkili olabilir).",
    statements: ["Sekiz kariyer alanı, olası tüm kimya kariyerlerini kesin ve örtüşmeyen kutulara ayırır.","Gerçek dünyadaki bir iş, birden fazla kariyer alanının özelliklerini aynı anda taşıyabilir.","Sınıflandırma, kariyer seçeneklerini tanımaya yardımcı bir çerçevedir; katı, değişmez bir kural değildir."],
    text: "Yukarıdaki ifadelerden hangileri doğrudur?",
    options: ["II ve III","I ve II","Yalnız I","I ve III","I, II ve III"],
    correct: 0,
    explain: "Sekiz alan kesin, örtüşmeyen kutular değildir (I yanlış); gerçek işler birden fazla alanın özelliğini taşıyabilir ve sınıflandırma esnek bir çerçevedir (II ve III doğru)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aziz Sancar, klonlanmış bir genin zarar görmüş DNA'nın onarımında kullanılabileceğini KENDİ ARAŞTIRMASIYLA keşfetmiş, bu buluşu akademik kariyerinin (yüksek lisans, doktora, doçentlik) temelini oluşturmuştur.",
    text: "Bu bilgi, bilimsel kariyer gelişimiyle ilgili en doğru hangi genellemeyi destekler?",
    options: ["Akademik unvanlar rastgele, hak edilmeden verilir","Akademik kariyer, bilimsel keşiflerden tamamen bağımsız ilerler","Yalnızca doğuştan gelen yetenek akademik kariyeri belirler, araştırmanın önemi yoktur","Özgün bir bilimsel katkı/keşif, bir bilim insanının akademik kariyerinin ilerlemesinde belirleyici olabilir","Bu bilgi kariyer planlamasıyla ilişkilendirilemez"],
    correct: 3,
    explain: "Sancar'ın örneği, özgün bir bilimsel keşfin akademik kariyerin (yüksek lisans, doktora, doçentlik) ilerlemesinde belirleyici olabileceğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aziz Sancar'ın hayat hikâyesi incelendiğinde: önce tıp eğitimi alıp kendi ilgi alanını netleştirmesi, sonra yurt dışında araştırma fırsatlarını değerlendirmesi, ardından DNA onarımı alanında uzmanlaşmaya karar vermesi ve bu kararı yıllarca sürdürmesi görülür.",
    text: "Sancar'ın bu yaşam öyküsü, Kariyer Planlama Döngüsü'nün hangi evreleriyle en doğrudan örtüşür?",
    options: ["Yalnızca 'Planlarını Uygula' evresiyle","Döngünün dört evresinin tümüyle (özellikleri tanıma, fırsatları araştırma, karar verip planlama, planı uygulama)","Yalnızca 'Kişisel Özelliklerini Tanı' evresiyle","Döngünün hiçbir evresiyle ilişkilendirilemez","Yalnızca 'Kariyer Fırsatlarını Araştır' evresiyle"],
    correct: 1,
    explain: "Sancar'ın yaşam öyküsündeki adımlar (ilgi alanını netleştirme, fırsatları araştırma, uzmanlaşmaya karar verme, kararı sürdürme) döngünün dört evresinin tümüyle örtüşür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    dialogue: [{"who":"Öğrenci A","text":"Kimya alanında kariyer sahibi olmak için mutlaka lisans mezunu (kimyager, mühendis) olmak gerekir; ön lisans mezunlarının kariyer imkânı yoktur."},{"who":"Öğrenci B","text":"Bence öyle değil; kimya teknolojisi ön lisans mezunları da laboratuvar teknikeri, kalite kontrol analisti gibi pozisyonlarda çalışma imkânı bulur."},{"who":"Öğrenci C","text":"Bence kariyer yalnızca akademik unvanlarla ilgilidir, sanayide çalışmak kariyer sayılmaz."}],
    text: "Kimya alanında kariyer imkânlarıyla ilgili hangi öğrencinin görüşü doğrudur?",
    options: ["Öğrenci A","Öğrenci C","Hiçbiri","A ve C birlikte","Öğrenci B"],
    correct: 4,
    explain: "MEB kitabına göre ön lisans mezunları da laboratuvar teknikeri, kalite kontrol analisti, araştırma asistanı gibi pozisyonlarda çalışabilir; kariyer yalnızca lisans/akademik unvanla sınırlı değildir. Öğrenci B haklıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Sinanoğlu, başarılarını ülkesine hizmet olarak görmüş ve insanın milletine ve insanlığa faydalı olmak için çalışması gerektiğine inanmıştır. Çok çalışkan ve donanımlı olmasına rağmen alçak gönüllü bir kişiliğe sahip olan Sinanoğlu'nun yaşam felsefesi daima bir adım daha ileri gitmektir. Türkçenin korunması ve doğru kullanılması için de önemli çalışmalar yapmıştır.",
    text: "Bu bilgi, Sinanoğlu'nun kariyerine bakışıyla ilgili en doğru hangi çıkarımı destekler?",
    options: ["Bilimsel başarıyı yalnızca kişisel şöhret için istemiştir","Bilimsel başarıyı yalnızca kişisel kazanç değil, topluma/ülkeye katkı amacıyla da ilişkilendirmiştir","Türkçeyle ilgili çalışmaları kariyeriyle hiç ilişkili değildir","Alçak gönüllülüğü, bilimsel üretkenliğini azaltmıştır","Sinanoğlu yalnızca kendi çıkarını düşünen bir bilim insanıdır"],
    correct: 1,
    explain: "Sinanoğlu'nun 'milletine ve insanlığa faydalı olma' inancı ve Türkçe için yaptığı çalışmalar, bilimsel başarıyı toplumsal katkıyla ilişkilendiren bir bakış açısını yansıtır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Kimya alanında kariyer planlaması; sekiz geniş çalışma alanını tanımayı, eğitim düzeyine göre elde edilebilecek unvanları bilmeyi, döngüsel bir planlama sürecini izlemeyi ve gerçek rol model bilim insanlarının yolculuklarından ders çıkarmayı bir arada gerektirir.",
    text: "Bu bilgiye göre, etkili bir kariyer planlamasının temel bileşenleri en doğru şekilde nasıl özetlenebilir?",
    options: ["Yalnızca yüksek maaş beklentisi","Alan farkındalığı, eğitim/unvan bilgisi, sistemli bir planlama süreci ve ilham verici örneklerin birlikte değerlendirilmesi","Yalnızca ailenin verdiği karar","Yalnızca şans ve tesadüfler","Kariyer planlamasının belirli bir bileşeni yoktur, tamamen rastgeledir"],
    correct: 1,
    explain: "Etkili bir kariyer planlaması; hangi alanların var olduğunu bilmeyi, eğitim düzeyine göre unvanları anlamayı, sistemli (döngüsel) bir süreç izlemeyi ve gerçek örneklerden ilham almayı bir arada gerektirir."
  }
],
  "guvenlik": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["flame"],
    context: "Bir depolama alanındaki varilin etiketinde yukarıdaki uyarı simgesi bulunmaktadır. Depo sorumlusu varille ilgili şu önlemleri değerlendiriyor:",
    statements: [
      "Varili doğrudan güneş ışığı alan, sıcak bir bölgeden uzak tutmak",
      "Varilin yanında kaynak/kesme gibi kıvılcım oluşturan işlemler yapılmasını yasaklamak",
      "Varili yalnızca metal olduğu için nemli bir zeminde bekletmek"
    ],
    text: "Yukarıdaki önlemlerden hangileri, bu uyarı simgesinin işaret ettiği tehlikeye karşı doğru bir yaklaşımdır?",
    options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
    correct: 2,
    explain: "Alev simgesi maddenin kolay tutuşabilir olduğunu bildirir; bu nedenle ısı/güneşten uzak tutulması (I) ve kıvılcım kaynaklarından kaçınılması (II) doğru önlemlerdir. Zeminin nemli olması yanıcılıkla ilgili değildir (III yanlış)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["corrosive"],
    context: "Bir temizlik ürününün ambalajında yukarıdaki uyarı simgesi yer almaktadır.",
    text: "Bu simge, üründen kaynaklanabilecek en doğrudan hangi tehlikeye işaret eder?",
    options: ["Patlayıcılık", "Basınçlı gaz içerme", "Deri ve göze ciddi hasar verme (aşındırıcılık)", "Radyoaktiflik", "Kolay tutuşabilirlik"],
    correct: 2,
    explain: "Aşındırıcı piktogramı, maddenin deri ve gözde ciddi hasara (yanık, doku tahribatı) yol açabileceğini bildirir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["environment"],
    context: "Bir böcek ilacı kutusunun etiketinde yukarıdaki simge bulunmaktadır.",
    text: "Bu simge en doğrudan hangi uyarıyı taşır?",
    options: ["Su kaynaklarına ve canlı yaşamına zararlı olabileceği", "Solunduğunda anında öldürücü olduğu", "Basınç altında patlayabileceği", "Cilde temas ettiğinde yanık yaptığı", "Oksitleyici özellik taşıdığı"],
    correct: 0,
    explain: "Çevreye zararlılık piktogramı, maddenin su kaynaklarına ve sucul canlı yaşamına zarar verebileceğini bildirir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: { title: "Bir mutfakta bulunan iki temizlik ürünü", items: [{ type: "detergent", label: "Çamaşır suyu (hipoklorit)" }, { type: "beaker", label: "Amonyaklı temizlik solüsyonu" }] },
    dialogue: [
      { who: "Öğrenci A", text: "İkisi de temizlik ürünü olduğuna göre birlikte kullanmak temizliği daha da güçlendirir." },
      { who: "Öğrenci B", text: "Etikette birlikte kullanılmaması yazıyorsa, ikisi karıştığında tehlikeli bir gaz açığa çıkabilir; bu yüzden asla birlikte kullanmamalıyım." },
      { who: "Öğrenci C", text: "Pencereyi açık tutarsam ikisini birlikte kullansam bile risk ortadan kalkar." }
    ],
    text: "Hipoklorit ve amonyak içeren ürünlerin birlikte kullanımıyla ilgili hangi öğrencinin görüşü bilimsel olarak doğrudur?",
    options: ["Öğrenci A", "Öğrenci B", "Öğrenci C", "Üçü de haklıdır, ürün türü fark etmez", "Hiçbiri haklı değildir, karışım tamamen zararsızdır"],
    correct: 1,
    explain: "Hipoklorit ile amonyak birleştiğinde toksik klor bileşikleri açığa çıkabilir; havalandırma bu riski ortadan kaldırmaz, bu iki tür ürün hiçbir koşulda birlikte kullanılmamalıdır — Öğrenci B'nin görüşü doğrudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: ["glove"],
    context: "Bir laboratuvarda aşındırıcı bir asitle çalışılırken görseldeki koruyucu ekipman kullanılmaktadır.",
    text: "Bu ekipmanın kullanım amacı en doğrudan hangisidir?",
    options: ["Solunum yolunun toz partiküllerinden korunması", "Ayakların düşen cisimlerden korunması", "Gözlerin parlak ışıktan korunması", "Ellerin kimyasaldan kaynaklanan yanık/tahrişten korunması", "Kulakların yüksek sesten korunması"],
    correct: 3,
    explain: "Koruyucu eldiven, ellerin aşındırıcı/tahriş edici kimyasallarla doğrudan temasını önleyerek yanık ve tahrişi engeller."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: ["extinguisher"],
    context: "Bir laboratuvarda yanıcı bir çözücü kazara alev almıştır; masanın yanındaki görseldeki ekipman kullanılarak müdahale edilmiştir.",
    text: "Bu ekipmanın işlevi en doğrudan hangisidir?",
    options: ["Kimyasal döküntüleri temizlemek", "Zehirli gazları filtrelemek", "Küçük çaplı yangınları söndürmek", "Kimyasalları depolamak", "Cam malzemeleri kesmek"],
    correct: 2,
    explain: "Yangın söndürücü, küçük çaplı yangınlara hızlı müdahale ederek yayılmasını önlemek için kullanılan güvenlik ekipmanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: { codes: ["toxic", "gas", "explosive"], hideLabels: true },
    statements: [
      "İçeriği basınç altındadır; ısıtıldığında patlama riski taşır.",
      "Darbe, sürtünme veya ısı etkisiyle patlayabilir.",
      "Az miktarda maruziyette bile ölümcül veya ciddi zehirlenmeye yol açabilir."
    ],
    context: "Yukarıda üç uyarı işareti (a, b, c) ve bu işaretlerle ilgili üç tanım (I, II, III) verilmiştir.",
    text: "'a' işaretiyle eşleşen tanım hangisidir?",
    options: ["I", "II", "III", "Hem I hem III", "Hiçbiri"],
    correct: 2,
    explain: "'a' harfli işaret toksik (kafatası-kemik) piktogramıdır; bu piktogram maddenin az miktarda maruziyette bile ölümcül veya ciddi zehirlenmeye yol açabileceğini bildirir (III numaralı tanım)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    checklist: [
      "Kullanılmayan kimyasal şişelerin kapağı sıkıca kapatılır.",
      "Farklı kimyasallar 'daha güçlü temizlik' için aynı kapta karıştırılabilir.",
      "Kimyasal döküntüsü olduğunda önce yetkili kişiye haber verilir.",
      "Etiketi silinmiş/okunaksız bir şişenin içeriği koklanarak tahmin edilebilir."
    ],
    text: "Yukarıdaki ifadelerden kaç tanesi doğru bir güvenlik uygulamasıdır?",
    options: ["1", "2", "3", "4", "Hiçbiri"],
    correct: 1,
    explain: "Yalnızca 1. ve 3. ifadeler doğru güvenlik uygulamasıdır. Farklı kimyasalları karıştırmak ve etiketsiz bir şişeyi koklamak tehlikeli ve yanlış uygulamalardır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    statements: [
      "Kimyasallar, etiketleri kolayca okunabilecek şekilde raflara yerleştirilmelidir.",
      "Yanıcı ve oksitleyici özellikteki kimyasallar aynı dolapta yan yana tutulabilir.",
      "Ağır kimyasal kaplar, düşme riskini azaltmak için alt raflarda tutulmalıdır."
    ],
    text: "Kimyasal depolama ile ilgili yukarıdaki ifadelerden hangileri doğrudur?",
    options: ["Yalnız I", "Yalnız II", "I ve II", "I ve III", "I, II ve III"],
    correct: 3,
    explain: "Etiketlerin görünür olması (I) ve ağır kapların alt raflarda tutulması (III) doğru depolama ilkeleridir. Yanıcı maddeler oksitleyicilerden uzak tutulmalıdır; bu nedenle II yanlıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir mutfakta hazır bir temizlik ürününün etiketinde 'Gözle temas ederse bol suyla en az 15 dakika yıkayın' uyarısı yer almaktadır.",
    text: "Bu uyarı, ürünün en doğrudan hangi özelliğine işaret eder?",
    options: ["Yanıcı olduğuna", "Göz için tahriş edici/aşındırıcı olabileceğine", "Radyoaktif olduğuna", "Basınçlı ambalajda olduğuna", "Sadece koku yaydığına"],
    correct: 1,
    explain: "Gözle temasta uzun süre yıkama gerekliliği, ürünün göz için tahriş edici veya aşındırıcı olabileceğinin göstergesidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: ["battery"],
    context: "Görseldeki tükenmiş pil, ev çöpüne atılmak yerine belediyenin belirlediği özel toplama kutusuna bırakılmalıdır; çünkü içeriğindeki ağır metaller toprağa karıştığında uzun süre kirlilik yaratabilir.",
    text: "Bu bilgiye göre, pillerin yanlış bertarafının başlıca riski nedir?",
    options: ["Pillerin geri dönüştürülemeyecek kadar ucuz olması", "Ağır metallerin toprak ve su kaynaklarını kirletmesi", "Pillerin kendiliğinden patlayarak yangın çıkarması", "Pillerin havada hızla buharlaşması", "Pillerin yalnızca görsel kirliliğe yol açması"],
    correct: 1,
    explain: "Pillerdeki ağır metaller (kurşun, kadmiyum vb.) yanlış bertaraf edildiğinde toprağa ve su kaynaklarına karışarak uzun süreli kirliliğe yol açar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laboratuvarda asit çözeltisi hazırlanırken kural olarak derişik asit yavaşça suyun üzerine değil, suyun içine yavaşça eklenir; tersi sırayla eklenirse ani ısınma ve sıçrama riski oluşur.",
    text: "Bu kurala uyulmasının temel gerekçesi nedir?",
    options: ["Asit-su karışımında açığa çıkan ısının kontrollü şekilde dağılmasını sağlamak", "Asidin rengini değiştirmemek", "Karışımın daha hızlı katılaşmasını sağlamak", "Suyun buharlaşmasını hızlandırmak", "Asidin kokusunu azaltmak"],
    correct: 0,
    explain: "Derişik asidin suya yavaşça eklenmesi, sulanma sırasında açığa çıkan ısının büyük su hacmi içinde kontrollü dağılmasını sağlayarak ani kaynama/sıçrama riskini azaltır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: ["foil"],
    context: "Asitli bir yiyeceğin (örneğin domates sosunun) uzun süre alüminyum folyoyla doğrudan temas hâlinde saklanması önerilmez; çünkü asidik ortam folyonun yüzeyindeki metali yavaşça çözebilir.",
    text: "Bu durumda oluşabilecek risk en doğrudan hangisidir?",
    options: ["Gıdanın radyoaktif hâle gelmesi", "Folyonun aniden alev alması", "Az miktarda alüminyum iyonunun gıdaya geçmesi", "Folyonun patlayıcı gaz üretmesi", "Gıdanın hacminin aniden artması"],
    correct: 2,
    explain: "Asidik gıdaların alüminyum folyoyla uzun süre teması, folyo yüzeyinin yavaşça çözünerek az miktarda alüminyum iyonunun gıdaya geçmesine yol açabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir ilaç kutusunun üzerinde 'Çocukların erişemeyeceği yerde saklayınız' uyarısı yer almaktadır.",
    text: "Bu uyarının temel amacı en doğrudan hangisidir?",
    options: ["İlacın son kullanma tarihini uzatmak", "İlacın etkisini artırmak", "İlacın rengini korumak", "Kazara yutma/zehirlenme riskini azaltmak", "İlacın kokusunu azaltmak"],
    correct: 3,
    explain: "Çocukların erişemeyeceği yerde saklama uyarısı, ilacın kazara yutulmasından kaynaklanabilecek zehirlenme riskini azaltmayı amaçlar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: ["vinegar", "detergent"],
    context: "Görseldeki iki üründen sirke asidik, çamaşır suyu ise bazik (alkali) özelliktedir. Bu iki ürünün karıştırılması, güçlü bir asit-baz tepkimesiyle ısı açığa çıkmasına ve klor gazı benzeri tahriş edici buharların oluşmasına yol açabilir.",
    text: "Bu bilgiye göre en güvenli kullanım yaklaşımı hangisidir?",
    options: ["Karışımı sadece dışarıda kullanmak yeterlidir", "İki ürünü aynı kapta karıştırarak daha güçlü bir temizleyici elde etmek", "Bu iki ürün arasında herhangi bir tepkime riski yoktur", "Karışımı sadece az miktarda yapmak güvenlidir", "İki ürünü ayrı zamanlarda ve iyi havalandırılmış ortamda kullanmak, karıştırmamak"],
    correct: 4,
    explain: "Asidik ve bazik/oksitleyici temizlik ürünlerinin karıştırılması tehlikeli gaz oluşumuna yol açabileceğinden, bu tür ürünler ayrı zamanlarda ve havalandırılmış ortamda, karıştırılmadan kullanılmalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["oxidizing"],
    context: "Bir havuz bakım ürününün ambalajında yukarıdaki simge bulunmaktadır.",
    text: "Bu simgenin bildirdiği tehlike türü hangisidir?",
    options: ["Yanıcı maddelerin yanmasını şiddetlendirebileceği", "Yalnızca hafif koku yayabileceği", "Yalnızca suda çözünmeyeceği", "Yalnızca renk değiştirebileceği", "Yalnızca donma riski taşıdığı"],
    correct: 0,
    explain: "Oksitleyici piktogramı, maddenin yanıcı maddelerle temas ettiğinde yanmayı şiddetlendirebileceğini (yangını büyütebileceğini) bildirir."
  },

  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["health-hazard"],
    context: "Bir sanayi maddesinin ambalajında yukarıdaki simge yer almaktadır.",
    text: "Etikette yer alan bu simge hangi tehlikeyi ifade eder?",
    options: ["Yalnızca patlama riski", "Yalnızca hafif cilt kuruluğu riski", "Yalnızca basınçlı kap riski", "Solunum yolu duyarlılaştırma veya kanserojen gibi ciddi sağlık hasarı riski", "Yalnızca donma riski"],
    correct: 3,
    explain: "Sağlığa zararlı (health-hazard) piktogramı, kanserojenlik, solunum yolu duyarlılaştırma gibi ciddi ve genellikle uzun vadeli sağlık risklerini bildirir."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    table: {
      headers: ["Madde çifti", "Karıştırıldığında oluşan risk"],
      rows: [
        ["Çamaşır suyu + Amonyaklı temizleyici", "Zehirli kloramin gazı"],
        ["Çamaşır suyu + Asitli temizleyici (tuvalet taşı sökücü)", "Zehirli klor gazı"],
        ["Hidrojen peroksit + Sirke", "Tahriş edici perasetik asit"],
        ["Farklı marka ilaç içerikli spreyler", "Öngörülemeyen tepkime riski"]
      ],
      caption: "Ev ortamında birlikte kullanılmaması gereken bazı madde çiftleri"
    },
    text: "Tabloya göre, ev temizliğinde en yaygın ölümcül gaz riski taşıyan iki karışım hangileridir?",
    options: ["Yalnızca farklı marka spreyler", "Hidrojen peroksit + sirke ve farklı marka spreyler", "Yalnızca hidrojen peroksit + sirke", "Çamaşır suyu + amonyaklı temizleyici ve çamaşır suyu + asitli temizleyici", "Tabloda hiçbir karışım gaz riski taşımamaktadır"],
    correct: 3,
    explain: "Tabloda çamaşır suyunun hem amonyakla hem asitli maddelerle karışımı, doğrudan zehirli gaz (kloramin/klor) oluşumuna yol açtığı için en yüksek akut risk taşır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: { title: "Bir sanayi maddesinin etiketindeki simgeler", codes: ["flame", "health-hazard"] },
    context: "Yukarıdaki iki simge aynı etikette birlikte yer almaktadır; bu, maddenin hem yanıcı hem de uzun vadeli sağlık hasarına (örneğin solunum yolu duyarlılaştırma) yol açabileceği anlamına gelir.",
    text: "Bu maddeyle çalışılan bir ortamda alınması gereken en kapsamlı önlem hangisidir?",
    options: ["Yalnızca solunum koruması yeterlidir, ateş riski önemsizdir", "Yalnızca ateş kaynaklarından uzak tutmak yeterlidir", "Bu iki simge birbiriyle çelişir, biri dikkate alınmalıdır", "Hem ateş kaynaklarından uzak tutma hem de uygun solunum koruması ve havalandırma sağlama", "Herhangi bir önlem gerekmez, simgeler bilgilendirme amaçlıdır"],
    correct: 3,
    explain: "İki farklı tehlike (yanıcılık ve sağlık hasarı) birlikte bildirildiğinden, hem yangın önlemi hem de solunum koruması/havalandırma birlikte uygulanmalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    chart: {
      type: "bar",
      title: "Bir laboratuvarda bir yıl içinde kaydedilen kaza türlerinin dağılımı",
      xLabel: "Kaza türü",
      yLabel: "Kayıt sayısı",
      data: [
        { label: "Yanlış madde karıştırma", value: 14 },
        { label: "Koruyucu ekipman eksikliği", value: 9 },
        { label: "Yanlış etiketleme", value: 6 },
        { label: "Depolama hatası", value: 5 }
      ]
    },
    text: "Grafiğe göre, laboratuvar güvenliğini artırmak için en öncelikli önlem hangi konuda alınmalıdır?",
    options: ["Madde karıştırma protokollerinin gözden geçirilmesi", "Yalnızca etiketleme sisteminin değiştirilmesi", "Yalnızca depolama alanının büyütülmesi", "Hiçbir önlem gerekmez, sayılar düşüktür", "Yalnızca ekipman sayısının artırılması"],
    correct: 0,
    explain: "Grafikte en yüksek kayıt sayısı (14) yanlış madde karıştırmaya ait olduğundan, en öncelikli önlem karıştırma protokollerinin gözden geçirilmesi olmalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir depoda, oksitleyici bir madde ile yanıcı bir çözücü aynı rafın yan yana gözlerinde saklanmaktadır. Depo sıcaklığı yaz aylarında belirgin şekilde yükselmektedir.",
    text: "Bu depolama düzeninde en yüksek risk hangisidir?",
    options: ["Maddelerin hacminin küçülmesi", "Sıcaklık artışıyla birlikte iki maddenin etkileşerek yangın/patlama riskinin artması", "Maddelerin kokusunun artması", "Maddelerin renginin solması", "Herhangi bir risk oluşmaz, madde türleri önemsizdir"],
    correct: 1,
    explain: "Oksitleyici ve yanıcı maddelerin yan yana, özellikle yüksek sıcaklıkta depolanması, etkileşim sonucu yangın/patlama riskini artırır; bu tür maddeler ayrı bölümlerde saklanmalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    table: {
      headers: ["Kimyasal grup", "Birlikte depolanmaması gereken grup", "Risk"],
      rows: [
        ["Asitler", "Bazlar", "Şiddetli ısı açığa çıkışı, sıçrama"],
        ["Oksitleyiciler", "Yanıcılar", "Yangın/patlama"],
        ["Siyanür bileşikleri", "Asitler", "Zehirli gaz (HCN)"],
        ["Aşındırıcı sıvılar", "Metaller", "Yanıcı hidrojen gazı"]
      ],
      caption: "Kimyasal depolama uyumsuzluk matrisi"
    },
    text: "Tabloya göre, bir siyanür bileşiğinin yanlışlıkla bir asitle temas etmesi durumunda en doğrudan hangi tehlike oluşur?",
    options: ["Malzemenin katılaşması", "Yalnızca renk değişimi", "Yalnızca hafif koku artışı", "Zehirli gaz (HCN) açığa çıkması", "Herhangi bir tehlike oluşmaz"],
    correct: 3,
    explain: "Tabloya göre siyanür bileşiklerinin asitlerle teması zehirli hidrojen siyanür (HCN) gazı açığa çıkarır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["irritant"],
    context: "Bir boyanın ambalaj etiketinde yukarıdaki simge yer almaktadır; bu simge, 'flame' ve 'toxic' gibi daha ciddi simgelerden farklı olarak daha düşük düzeyde bir tehlikeyi temsil eder.",
    text: "Bu simgenin bildirdiği tehlike düzeyi ile ilgili en doğru ifade hangisidir?",
    options: ["Cilt/göz tahrişi veya hafif sağlık etkisi gibi görece daha düşük düzeyli bir tehlikeyi bildirir", "Toksik simgesiyle tamamen aynı düzeyde ölümcül tehlikeyi bildirir", "Yalnızca çevresel tehlikeyi bildirir, sağlıkla ilgisi yoktur", "Yalnızca yangın tehlikesini bildirir", "Hiçbir tehlike bildirmez, yalnızca dekoratif bir simgedir"],
    correct: 0,
    explain: "Tahriş edici (irritant) piktogramı, toksik veya sağlığa ciddi zarar simgelerine göre daha düşük düzeyli, örneğin cilt/göz tahrişi gibi tehlikeleri bildirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir tarım işletmesinde, zirai ilaç uygulaması sonrasında işçilerin tarlaya belirli bir süre (bekleme süresi) girmemesi gerektiği; bu sürenin ilacın etken maddesine göre değiştiği bilinmektedir.",
    text: "Bekleme süresine uyulmamasının en doğrudan riski nedir?",
    options: ["İşçilerin henüz parçalanmamış kimyasal kalıntılara maruz kalması", "Bitkilerin büyüme hızının artması", "Toprağın renginin değişmesi", "İlacın etkisinin tamamen ortadan kalkması", "Herhangi bir risk oluşmaz, bekleme süresi öneri niteliğindedir"],
    correct: 0,
    explain: "Bekleme süresi, uygulanan zirai ilacın zamanla parçalanıp güvenli düzeye inmesi için tanınan süredir; buna uyulmaması işçilerin henüz yüksek düzeyde kalıntıya maruz kalmasına yol açar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir güvenlik veri formunda (SDS/MSDS) bir maddenin 'parlama noktası'nın oda sıcaklığının belirgin şekilde altında olduğu belirtilmektedir.",
    text: "Bu bilgiye dayanarak, madde ile ilgili en doğru güvenlik çıkarımı hangisidir?",
    options: ["Parlama noktası bilgisi güvenlikle ilgisizdir", "Madde hiçbir koşulda yanmaz", "Madde yalnızca çok yüksek sıcaklıklarda tutuşabilir", "Madde oda sıcaklığında bile kolayca tutuşabilecek buharlar oluşturabilir, ateş kaynaklarından uzak tutulmalıdır", "Madde yalnızca donma riski taşır"],
    correct: 3,
    explain: "Parlama noktasının oda sıcaklığının altında olması, maddenin normal ortam koşullarında bile kolayca tutuşabilir buhar oluşturduğu anlamına gelir; bu nedenle ateş kaynaklarından uzak tutulmalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: { title: "Bir eczanede bulunan ürün", items: [{ type: "pill", label: "Reçetesiz ağrı kesici" }] },
    context: "Görseldeki ilacın kutusunda önerilen günlük dozun üzerine çıkılmaması gerektiği; aksi hâlde karaciğer üzerinde ciddi hasar riski oluşabileceği belirtilmektedir.",
    text: "Bu bilgiye göre, ilacın güvenli kullanımı için en doğru yaklaşım hangisidir?",
    options: ["Karaciğer hasarı yalnızca uzun vadeli kullanıcılarda görülür, kısa süreli aşımlar güvenlidir", "Etkiyi hızlandırmak için dozu iki katına çıkarmak", "Etikette belirtilen doz sınırına kesinlikle uymak", "Doz sınırı yalnızca öneridir, aşılması sorun yaratmaz", "Doz miktarı, ilacın etkisini değil sadece tadını değiştirir"],
    correct: 2,
    explain: "Reçetesiz ilaçlarda bile önerilen doz sınırının aşılması ciddi organ hasarına yol açabileceğinden, etikette belirtilen doza kesinlikle uyulmalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: { title: "Bir endüstriyel çözücünün etiketindeki simgeler", codes: ["flame", "environment"] },
    context: "Yukarıdaki iki simgeyi taşıyan bir çözücünün kullanıldığı bir atölyede, kullanım sonrası artık maddenin lavaboya değil özel bir toplama kabına boşaltılması kuralı uygulanmaktadır.",
    text: "Bu kuralın en doğrudan gerekçesi nedir?",
    options: ["Maddenin özel toplama kabında daha hızlı buharlaşması", "Maddenin lavaboyu tıkayacak kadar viskoz olması", "Maddenin hem yanıcı olması hem de su kaynaklarına karıştığında çevreye zarar verebilmesi", "Maddenin sadece kötü koku yayması", "Kuralın çevresel veya yanıcılık riskiyle hiçbir ilgisi yoktur"],
    correct: 2,
    explain: "Etikette hem yanıcılık hem çevreye zararlılık simgeleri bulunduğundan, maddenin lavaboya dökülmesi hem yangın hem su kirliliği riski taşır; bu yüzden özel toplama gerekir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir okul laboratuvarında yapılan bir deney sırasında küçük bir kimyasal sıçrama meydana gelmiş ve öğretim elemanı önce göz duşuna yönlendirmiş, ardından olay kayıt formunu doldurmuştur.",
    text: "Bu müdahale sırası, güvenlik protokolünün hangi temel ilkesini yansıtır?",
    options: ["Belgeleme, fiziksel müdahaleden daha önceliklidir", "Önce belgeleme, sonra fiziksel müdahale", "Fiziksel müdahale ile belgeleme aynı anda yapılmalıdır, sıra önemsizdir", "Bu sıralama güvenlik protokolüyle ilgisizdir", "Önce acil fiziksel müdahale, sonra belgeleme/raporlama"],
    correct: 4,
    explain: "Güvenlik protokollerinde önce kişinin/maddenin maruziyetini azaltacak acil müdahale yapılır, olay kaydı ve raporlama bu ilk müdahaleden sonra tamamlanır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir yapı malzemesi üreticisi, ürününde artık asbest kullanılmadığını, çünkü asbest liflerinin uzun süre solunduğunda akciğerlerde ciddi hastalıklara yol açtığının bilimsel olarak kanıtlandığını belirtmektedir.",
    text: "Bu bilgiye dayanarak, asbestle ilgili en doğru güvenlik çıkarımı hangisidir?",
    options: ["Asbest liflerinin solunum yoluyla uzun süreli maruziyeti kronik sağlık riski taşır", "Asbest yalnızca cilde temas ettiğinde tehlikelidir", "Asbest yalnızca yanıcı bir malzemedir, sağlık riski taşımaz", "Asbestin sağlık riski yalnızca yüksek sıcaklıkta ortaya çıkar", "Asbest günümüzde hâlâ tüm yapı malzemelerinde güvenle kullanılmaktadır"],
    correct: 0,
    explain: "Asbest liflerinin solunum yoluyla uzun süreli maruziyeti akciğer hastalıklarına (asbestoz, mezotelyoma vb.) yol açabileceği için kronik bir sağlık riski taşır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir kapalı garajda motor çalışır durumda uzun süre bırakılmıştır; ortamda renksiz, kokusuz ama yüksek derişimde solunduğunda ölümcül olabilen bir gaz birikmeye başlamıştır.",
    text: "Bu senaryoda tarif edilen gazın güvenlik açısından en tehlikeli özelliği nedir?",
    options: ["Gazın yalnızca hafif baş dönmesine yol açması", "Gazın yalnızca yanıcı olması", "Gazın yalnızca metal yüzeyleri paslandırması", "Renksiz ve kokusuz olduğu için fark edilmeden yüksek derişime ulaşabilmesi", "Gazın çevre kirliliğine yol açması, sağlıkla ilgisi olmaması"],
    correct: 3,
    explain: "Renksiz ve kokusuz bir gazın (örneğin karbon monoksit) fark edilmeden birikmesi, maruziyetin geç fark edilmesine ve ciddi zehirlenme riskine yol açar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir kozmetik ürünün etiketinde 'yalnızca harici kullanım içindir, göz ve mukoza ile temasından kaçının' uyarısı bulunmaktadır.",
    text: "Bu uyarının en doğrudan gerekçesi nedir?",
    options: ["Uyarının kozmetik ürünlerde standart ve anlamsız bir ibare olması", "Ürünün formülasyonunun hassas dokularda tahrişe yol açabilecek bileşenler içerebilmesi", "Ürünün fiyatının yüksek olması", "Ürünün yalnızca belirli bir yaş grubuna uygun olması", "Ürünün yalnızca dekoratif amaçla üretilmiş olması"],
    correct: 1,
    explain: "Kozmetik formülasyonlardaki bazı bileşenler cilt için güvenli olsa bile göz ve mukoza gibi hassas dokularda tahrişe yol açabileceğinden bu uyarı eklenir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir inşaat alanında toz maskesi yerine yalnızca cerrahi maske kullanan işçilerin, kristal silika tozuna maruz kalma riski azalmamıştır; çünkü cerrahi maskeler ince toz partiküllerini yeterince filtrelemez.",
    text: "Bu durumdan çıkarılabilecek en doğru güvenlik ilkesi nedir?",
    options: ["Cerrahi maskeler her tür tozu tamamen filtreler", "Herhangi bir maske kullanmak, hiç kullanmamaktan her zaman aynı düzeyde koruma sağlar", "Koruyucu ekipman seçimi, maruz kalınan tehlikenin türüne uygun olmalıdır", "Kristal silika tozu solunum için tehlike oluşturmaz", "Toz maskeleri yalnızca estetik amaçlıdır"],
    correct: 2,
    explain: "Örnek, yanlış ekipman seçiminin (ince toz partiküllerini filtrelemeyen maske) koruma sağlamadığını, ekipmanın maruz kalınan tehlikeye özgü seçilmesi gerektiğini gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    table: {
      headers: ["Yangın sınıfı", "Kaynak", "Uygun söndürme yöntemi"],
      rows: [
        ["A", "Kâğıt, ahşap", "Su"],
        ["B", "Yanıcı sıvı, yağ", "Köpük/CO₂ (su kullanılmaz)"],
        ["C", "Elektrikli cihaz", "CO₂/kuru kimyevi (su kullanılmaz)"],
        ["D", "Metal (magnezyum vb.)", "Özel kuru toz"]
      ],
      caption: "Yangın sınıfları ve uygun söndürme yöntemleri"
    },
    text: "Tabloya göre, bir elektrikli cihazdan kaynaklanan yangına su ile müdahale edilmesi neden tehlikelidir?",
    options: ["Tabloya göre su her yangın türü için uygundur", "Su yangını her zaman büyütür, kaynağı ne olursa olsun", "Su, elektrikli cihazların rengini bozar", "Su yalnızca A sınıfı yangınlarda etkisizdir, C sınıfında sorun yaratmaz", "Su elektriği iletebileceğinden elektrik çarpması riski oluşturur"],
    correct: 4,
    explain: "Tabloya göre C sınıfı (elektrikli) yangınlarda su kullanılmaz çünkü su elektriği iletebilir ve müdahale edeni elektrik çarpması riskine maruz bırakabilir."
  },

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir spor salonunda havuz suyunun dezenfeksiyonu için kullanılan klor tableti ile pH düzenleyici (asit) aynı kapalı kutuda, birbirine değecek şekilde saklanmaktadır. Nemli havada bu iki madde arasında istenmeyen bir tepkime başlayabilir.",
    text: "Bu depolama hatasının olası sonucu ve doğru çözüm sırasıyla en doğru hangisidir?",
    options: ["Risk yalnızca tabletlerin nem çekerek bozulmasıdır, gaz riski yoktur", "Yalnızca havuz suyunun renginin değişmesi; depolama şekli önemsizdir", "Yalnızca tabletlerin daha hızlı erimesi; herhangi bir risk yoktur", "Zehirli klor gazı açığa çıkma riski; iki madde ayrı, nem almayan kaplarda ve birbirinden uzakta saklanmalıdır", "İki madde birbiriyle hiçbir zaman tepkimeye girmez"],
    correct: 3,
    explain: "Klor bazlı dezenfektanlarla asit karakterli pH düzenleyicilerin teması, özellikle nemli ortamda zehirli klor gazı açığa çıkarabileceğinden, bu iki madde ayrı ve nem almayan kaplarda saklanmalıdır."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    table: {
      headers: ["Kimyasal", "GHS uyarı simgeleri", "Önerilen depolama"],
      rows: [
        ["Madde A", "flame, health-hazard", "Serin, iyi havalandırılan, ateş kaynağından uzak"],
        ["Madde B", "corrosive, toxic", "Kilitli dolap, asitlerden/bazlardan ayrı"],
        ["Madde C", "oxidizing", "Yanıcı maddelerden uzakta, ayrı bölüm"],
        ["Madde D", "environment", "Sızıntı önleyici kap içinde, drenajdan uzak"]
      ],
      caption: "Dört kimyasalın uyarı simgeleri ve önerilen depolama koşulları"
    },
    context: "Bir depoda yer darlığı nedeniyle Madde C ile yanıcı bir çözücü aynı rafa yerleştirilmek istenmektedir.",
    text: "Tabloya göre bu yerleştirme neden uygun değildir ve doğru çözüm ne olmalıdır?",
    options: ["Madde C toksik olduğundan yalnızca kilitli dolapta saklanması yeterlidir", "Madde C aşındırıcı olduğundan yalnızca metal raflardan uzak tutulmalıdır, yanıcılıkla ilgisi yoktur", "Madde C çevreye zararlı olduğundan yalnızca drenajdan uzak tutulması yeterlidir", "Tabloya göre bu yerleştirme tamamen güvenlidir", "Madde C oksitleyici olduğundan yanıcı maddeyle etkileşip yangın riski oluşturur; ayrı bölümde saklanmalıdır"],
    correct: 4,
    explain: "Tabloda Madde C'nin simgesi oksitleyicidir; oksitleyici maddeler yanıcı maddelerle temas ettiğinde yangını şiddetlendirebileceğinden ayrı bölümde saklanmalıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir fabrikada üretim hattındaki bir işlemde önce yüksek derişimli bir asit kullanılmakta, ardından aynı tank bir sonraki üretim turunda temizlenmeden doğrudan bazik bir maddeyle doldurulmaktadır. Bir denetimde bu uygulamanın potansiyel bir risk oluşturduğu tespit edilmiştir.",
    text: "Bu uygulamanın oluşturduğu risk ve önerilecek düzeltici eylem sırasıyla en doğru hangisidir?",
    options: ["Bazik maddenin asitle teması hiçbir zaman ısı açığa çıkarmaz", "Risk yoktur, asit ve baz birbirini etkisiz hâle getirdiği için tank temizliği gereksizdir", "Kalıntı asit ile yeni bazik madde arasında kontrolsüz, şiddetli ekzotermik tepkime riski; tank her kullanım arası tam olarak temizlenmeli/nötralize edilmelidir", "Risk yalnızca renk değişimidir, üretime engel değildir", "Risk yalnızca tankın paslanmasıdır, sağlık/güvenlik riski yoktur"],
    correct: 2,
    explain: "Kalıntı asidin yeni eklenen bazik maddeyle kontrolsüz şekilde tepkimeye girmesi şiddetli ısı açığa çıkarabileceğinden (nötrleşme ekzotermiktir), tankın her kullanım arası tam temizlenmesi/nötralize edilmesi gerekir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    chart: {
      type: "line",
      title: "Kapalı bir garajda motor çalışırken zamanla havadaki karbon monoksit derişimi",
      xLabel: "Süre (dakika)",
      yLabel: "CO derişimi (ppm)",
      data: [
        { x: 0, y: 5 },
        { x: 10, y: 60 },
        { x: 20, y: 150 },
        { x: 30, y: 280 },
        { x: 40, y: 400 }
      ]
    },
    text: "Grafiğe göre, karbon monoksit derişiminin zamanla artış hızıyla ilgili en doğru güvenlik çıkarımı hangisidir?",
    options: ["Derişim giderek artan bir hızla yükselmektedir; kapalı ortamda motor ne kadar uzun çalışırsa risk o kadar hızlanarak büyür", "Derişim sabit bir hızla artmaktadır, zamanla risk değişmez", "Derişim 20. dakikadan sonra azalmaya başlamıştır", "Grafik, CO derişiminin güvenlikle hiçbir ilgisi olmadığını göstermektedir", "Derişim yalnızca ilk 10 dakikada önemlidir, sonrasında güvenlidir"],
    correct: 0,
    explain: "Veri noktaları arasındaki artış (5→60→150→280→400) giderek büyüyen aralıklarla gerçekleştiğinden, derişim artan bir hızla yükselmekte, yani motor çalıştıkça risk hızlanarak büyümektedir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laboratuvarda yeni bir asistan, düşük derişimli bir çözeltiyle çalışırken eldiven takmadan çalışmanın güvenli olduğunu düşünmüştür; çünkü derişimin düşük olduğunu biliyordur. Ancak kullanılan madde, düşük derişimde bile uzun süreli cilt temasında kümülatif (birikimli) hasara yol açabilen bir türdendir.",
    text: "Bu durumdaki temel güvenlik hatası nedir?",
    options: ["Hata, çözeltinin derişiminin çok düşük seçilmiş olmasıdır", "Derişimin düşük olmasının, kümülatif etkili maddelerde güvenliği garanti etmediğinin göz ardı edilmesi", "Kümülatif etki kavramı laboratuvar güvenliğiyle ilgisizdir", "Düşük derişimli maddeler hiçbir zaman cilt hasarına yol açmaz", "Eldiven takmanın yalnızca yüksek derişimli maddelerde gerekli olduğu doğrudur, hata yoktur"],
    correct: 1,
    explain: "Bazı maddeler düşük derişimde bile tekrarlanan/uzun süreli maruziyetle birikimli hasara yol açabilir; derişimin düşük olması tek başına güvenliği garanti etmez, bu nedenle koruyucu ekipman yine de gereklidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir gıda üreticisi, ürününe eklediği bir katkı maddesinin izin verilen üst sınırın çok altında kullanıldığını belirterek ürünün tamamen güvenli olduğunu iddia etmektedir. Ancak bağımsız bir araştırma, aynı katkı maddesinin başka gıdalarda da yaygın kullanıldığını ve bir kişinin günlük toplam alımının birden fazla kaynaktan geldiğini göstermektedir.",
    text: "Bu araştırma bulgusuna dayanarak, gıda güvenliği açısından en doğru çıkarım hangisidir?",
    options: ["Üreticinin iddiası her koşulda doğrudur, çünkü yasal sınıra uyulmuştur", "Bir ürün sınırın altında olduğu sürece toplam maruziyetin hiçbir önemi yoktur", "Katkı maddeleri yalnızca tek bir üründen alınabilir, birikimli maruziyet söz konusu olamaz", "Bağımsız araştırmalar gıda güvenliği değerlendirmesinde dikkate alınmamalıdır", "Tek bir üründeki katkı miktarının sınır altında olması, günlük toplam maruziyetin güvenli olduğu anlamına gelmeyebilir"],
    correct: 4,
    explain: "Bir katkı maddesinin birden fazla üründen günlük olarak alınması, tek bir üründeki miktarın sınır altında olmasına rağmen toplam maruziyetin yüksek olabileceğini gösterir; gıda güvenliği toplam alımı da dikkate almalıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir maden ocağında metan gazı birikimi periyodik olarak ölçülmekte, ölçüm sonucu belirlenen eşik değerin üzerine çıktığında otomatik havalandırma sistemi devreye girmektedir. Bir vardiyada sensör arızalanmış ve havalandırma sistemi tetiklenmemiştir.",
    text: "Bu senaryoda oluşan en kritik güvenlik açığı nedir?",
    options: ["Metan birikiminin yalnızca yüzey madenlerinde görülmesi", "Tehlike tespiti (sensör) devre dışı kaldığında yedek/manuel bir güvenlik önleminin bulunmaması", "Havalandırma sisteminin gereksiz bir yatırım olması", "Sensör arızasının güvenlikle hiçbir ilgisinin olmaması", "Metan gazının doğası gereği hiçbir zaman tehlikeli olmaması"],
    correct: 1,
    explain: "Tek bir tespit mekanizmasına (sensör) bağımlı bir güvenlik sisteminde, o mekanizma arızalandığında tehlike fark edilmeden büyüyebilir; bu nedenle yedek/manuel önlemlerin bulunmaması kritik bir açıktır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir temizlik firması, aynı anda birden fazla temizlik ürününü karıştırarak 'daha güçlü' özel bir karışım hazırlamayı önermektedir; ancak kullanılan ürünlerden biri hipokloritli ağartıcı, diğeri ise asit bazlı kireç çözücüdür.",
    text: "Bu öneri neden güvenlik açısından ciddi bir hata taşımaktadır?",
    options: ["Risk yalnızca ürünlerin fiyatının artmasıdır", "Karışım yalnızca temizlik etkisini azaltır, sağlık riski yoktur", "Bu iki ürün birbiriyle hiçbir zaman tepkimeye girmez", "Öneri güvenlidir çünkü her iki ürün de ayrı ayrı test edilmiştir", "Hipoklorit ile asidin tepkimesi zehirli klor gazı açığa çıkarabilir, karışımın etkisi güçlenmek yerine tehlikeli hâle gelir"],
    correct: 4,
    explain: "Hipoklorit (çamaşır suyu) ile asit bazlı ürünlerin karışımı zehirli klor gazı açığa çıkarabileceğinden, 'daha güçlü karışım' önerisi ciddi bir zehirlenme riski taşır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    circleCompare: {
      title: "Farklı derişimlerde bir asidin cilt teması sonrası hasar şiddeti (temsilî ölçek)",
      unit: "göreli hasar birimi",
      items: [
        { label: "%1 derişim", value: 8 },
        { label: "%10 derişim", value: 35 },
        { label: "%37 derişim (derişik)", value: 95 }
      ]
    },
    text: "Görseldeki daire büyüklüklerine dayanarak, derişim ile hasar şiddeti arasındaki ilişki için en doğru yorum hangisidir?",
    options: [
      "Derişim arttıkça hasar şiddeti orantısız biçimde, giderek daha hızlı artmaktadır",
      "Derişim ile hasar şiddeti arasında hiçbir ilişki yoktur",
      "Hasar şiddeti, derişimden bağımsız olarak sabittir",
      "Derişim arttıkça hasar şiddeti azalmaktadır",
      "Yalnızca derişik asit hasar oluşturur, düşük derişimler tamamen güvenlidir"
    ],
    correct: 0,
    explain: "Değerler (8→35→95) derişim arttıkça hasarın orantılı bir çizgiden çok daha hızlı, ivmelenerek arttığını göstermektedir; bu nedenle düşük derişimli asitler bile hasarsız kabul edilmemelidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laboratuvarda çalışanlar, düzenli olarak kullanılan bir çözücünün SDS/MSDS formunda 'kronik maruziyet' uyarısı bulunduğunu fark etmemiştir; çünkü kısa vadede herhangi bir belirti görülmemiştir. Uzun süre sonra bazı çalışanlarda solunum yolu şikâyetleri ortaya çıkmıştır.",
    text: "Bu durum, güvenlik kültürüyle ilgili hangi önemli dersi göstermektedir?",
    options: ["Solunum yolu şikâyetleri bu maddeyle hiçbir zaman ilişkilendirilemez", "SDS formları yalnızca akut (ani) riskleri kapsar, kronik risklerle ilgisizdir", "Belirti görülmediği sürece herhangi bir önlem almaya gerek yoktur", "Kronik maruziyet uyarıları genellikle abartılıdır ve dikkate alınmamalıdır", "Kısa vadede belirti görülmemesi, uzun vadeli/kronik risklerin olmadığı anlamına gelmez; SDS uyarıları düzenli gözden geçirilmelidir"],
    correct: 4,
    explain: "Örnek, kısa vadede belirti görülmemesinin kronik/uzun vadeli riskin yokluğu anlamına gelmediğini; SDS'te belirtilen kronik maruziyet uyarılarının ciddiye alınıp düzenli gözden geçirilmesi gerektiğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    table: {
      headers: ["Önlem", "Maliyet", "Risk azaltma etkisi"],
      rows: [
        ["Yalnızca uyarı etiketi asmak", "Çok düşük", "Düşük"],
        ["Kişisel koruyucu ekipman sağlamak", "Orta", "Orta-Yüksek"],
        ["Süreci otomatikleştirip insan temasını ortadan kaldırmak", "Yüksek", "Çok yüksek"],
        ["Düzenli eğitim vermek (tek başına)", "Düşük-Orta", "Orta"]
      ],
      caption: "Bir üretim sürecinde kimyasal maruziyeti azaltmak için dört önlem"
    },
    text: "Tabloya göre, maliyetten bağımsız olarak riski en kalıcı ve etkili biçimde azaltan önlem hangisidir?",
    options: ["Yalnızca uyarı etiketi asmak", "Süreci otomatikleştirip insan temasını ortadan kaldırmak", "Yalnızca düzenli eğitim vermek", "Kişisel koruyucu ekipman sağlamak, diğer tüm önlemlerden daha etkilidir", "Tabloya göre dört önlemin etkisi birbirine eşittir"],
    correct: 1,
    explain: "Tabloda en yüksek risk azaltma etkisi, insan temasını kaynağında ortadan kaldıran otomasyona aittir (çok yüksek); bu, güvenlik mühendisliğinde 'tehlikeyi kaynağında ortadan kaldırma' ilkesiyle örtüşür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir hastanede kullanılan dezenfektan solüsyonu üreticisi, ürünün 'seyreltilerek kullanılması gerektiğini, saf hâliyle kullanılmasının hem etkisiz hem de tehlikeli olabileceğini' belirtmektedir.",
    text: "Bu uyarı, kimyasal güvenlik açısından hangi ilkeyi en iyi yansıtır?",
    options: ["Saf hâliyle kullanmak her zaman en güvenli seçenektir", "Derişim arttıkça bir maddenin etkinliği her zaman doğrusal olarak artar, güvenlik sorunu oluşmaz", "Seyreltme yalnızca maliyeti düşürmek için yapılır, etkinlik veya güvenlikle ilgisi yoktur", "Bir maddenin 'daha derişik = daha etkili ve güvenli' varsayımı her zaman doğru değildir; doğru derişim hem etkinlik hem güvenlik için önemlidir", "Dezenfektanlar derişimden bağımsız olarak her zaman aynı etkiyi gösterir"],
    correct: 3,
    explain: "Üreticinin uyarısı, maddenin saf (çok derişik) hâlinin hem beklenen etkiyi göstermeyebileceğini hem de güvenlik riski taşıyabileceğini, dolayısıyla doğru derişimin hem etkinlik hem güvenlik için kritik olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir kimyasal madde taşıma firması, farklı tehlike sınıflarındaki maddeleri (yanıcı, aşındırıcı, toksik) aynı araçta taşırken her biri için ayrı, sızdırmaz ve birbirinden izole bölmeler kullanmaktadır; ayrıca aracın her bölmesi taşınan maddenin GHS simgesiyle etiketlenmektedir.",
    text: "Bu uygulama, kimyasal güvenlik açısından hangi temel ilkeyi yansıtır?",
    options: ["Tüm kimyasalların aynı bölmede taşınmasının daha verimli olduğu", "Farklı tehlike sınıflarındaki maddelerin, olası etkileşim risklerini önlemek için fiziksel olarak ayrıştırılıp doğru şekilde etiketlenmesi gerektiği", "Etiketleme, yalnızca yasal bir formaliteden ibaret olduğu ve güvenlikle ilgisi olmadığı", "Farklı tehlike sınıflarının birbirleriyle hiçbir zaman etkileşime giremeyeceği", "İzolasyon yalnızca maliyeti artıran gereksiz bir önlem olduğu"],
    correct: 1,
    explain: "Farklı tehlike sınıflarındaki maddelerin (örneğin yanıcı ile aşındırıcı) fiziksel olarak izole edilip doğru etiketlenmesi, taşıma sırasında olası etkileşim/kaza risklerini önlemenin temel güvenlik ilkesidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir tekstil boyahanesinde atık su, arıtma tesisine gönderilmeden önce ağır metal derişimi ölçülmekte ve yasal sınırın altına düşürülmesi için nötralize edilmektedir. Bir denetimde, ölçüm cihazının kalibrasyonunun altı aydır yapılmadığı ve bu sürede ölçülen değerlerin gerçek değerlerden belirgin şekilde düşük çıkabileceği tespit edilmiştir.",
    text: "Bu durumun oluşturduğu en kritik güvenlik/çevre riski nedir?",
    options: ["Atık su arıtımında ölçüm doğruluğunun önemi yoktur, yalnızca nötralize edilmesi yeterlidir", "Kalibrasyon eksikliğinin yalnızca cihazın ömrünü kısaltması, ölçüm doğruluğuyla ilgisi olmaması", "Risk yalnızca cihazın bakım maliyetinin artmasıdır", "Kalibrasyon, ölçüm sonucunu hiçbir zaman etkilemez", "Kalibrasyonsuz cihazın yanlışlıkla güvenli gösterdiği atık suyun, gerçekte sınırın üzerinde kirletici içererek çevreye salınmış olabilmesi"],
    correct: 4,
    explain: "Kalibrasyonsuz bir ölçüm cihazı gerçek değerden düşük sonuç verebileceğinden, aslında sınırı aşan kirletici içeren atık su 'güvenli' olarak değerlendirilip çevreye salınmış olabilir; bu, hem çevresel hem de yasal ciddi bir risktir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir okulun kimya laboratuvarında, düşük derişimli bir asitle yapılan deneyde koruyucu gözlük takılması kural olarak zorunlu tutulmuştur. Deneyin 'basit' görünmesi nedeniyle bu kurala bazı masalarda uyulmamış ve az miktarda sıçrayan asit gözle temas etmiştir.",
    text: "Bu olay, laboratuvar güvenlik kültürüyle ilgili hangi önemli dersi vermektedir?",
    options: [
      "Bir deneyin 'basit' görünmesi, koruyucu ekipman kuralının önemini azaltmaz; düşük derişim de göz teması hâlinde risk taşır",
      "Düşük derişimli asitler gözle temas ettiğinde hiçbir zaman zarar vermez",
      "Gözlük yalnızca yüksek derişimli deneylerde gereklidir",
      "Kural, öğretmenin gereksiz bir tedbiri olup deneyin sonucunu etkilemez",
      "Bu olay yalnızca öğrencinin dikkatsizliğiyle ilgilidir, kuralın kendisiyle ilgisi yoktur"
    ],
    correct: 0,
    explain: "Olay, bir deneyin görece 'basit' veya düşük derişimli olmasının koruyucu ekipman kuralını gereksiz kılmadığını; küçük miktarda bile göz teması ciddi hasara yol açabileceğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir ilaç deposunda, sıcaklığa duyarlı bir ilacın '2-8°C arasında saklanmalıdır' etiketine rağmen, soğutucunun sıcaklığı düzenli olarak kaydedilmemiş ve bir hafta boyunca sıcaklığın 15°C'ye kadar çıktığı fark edilmemiştir.",
    text: "Bu durumun oluşturduğu en kritik risk nedir?",
    options: ["Sıcaklık takibinin ilacın etkinliğiyle hiçbir ilgisinin olmaması", "İlacın yalnızca ambalajının rengini değiştirmesi", "İlacın etkin madde stabilitesinin bozularak beklenen etkiyi göstermemesi veya güvenlik riski oluşturması", "İlacın yalnızca daha hızlı tükenmesi", "Risk yalnızca depolama maliyetinin artmasıdır"],
    correct: 2,
    explain: "Sıcaklığa duyarlı ilaçlarda önerilen aralığın dışına çıkılması etkin maddenin bozunmasına yol açabilir; bu hem ilacın beklenen etkiyi göstermemesine hem de güvenlik riskine neden olabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laboratuvarda iki farklı ekip, aynı kimyasalı farklı SDS/MSDS sürümlerinden (biri eski, biri güncel) kontrol etmiştir. Eski sürümde maddenin yalnızca tahriş edici olduğu yazarken, güncel sürümde yeni araştırmalara dayanarak kanserojen olabileceği eklenmiştir.",
    text: "Bu durum, güvenlik yönetimiyle ilgili hangi önemli ilkeyi vurgular?",
    options: ["Bir maddenin tehlike sınıflandırması bir kez belirlendikten sonra asla değişmez", "Güvenlik bilgi formları güncel tutulmalı ve düzenli kontrol edilmelidir; bilimsel bilgi zamanla değişebilir", "Eski ve güncel SDS sürümleri arasında fark olması önemsizdir", "SDS formları yalnızca yasal bir belge olup güvenlik kararlarında kullanılmamalıdır", "Kanserojenlik bilgisi yalnızca çok yüksek derişimlerde geçerlidir"],
    correct: 1,
    explain: "Örnek, bilimsel bilginin ve dolayısıyla bir maddenin tehlike sınıflandırmasının zamanla değişebileceğini; bu yüzden güvenlik bilgi formlarının (SDS) güncel tutulup düzenli kontrol edilmesi gerektiğini gösterir."
  }
],
  "teori": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    atomModel: { type: "dalton", caption: "1808 — Dalton'ın atom modeli", label: "İçi dolu, bölünemez katı küre" },
    matchPairs: {
      left: [
        "Aynı elementin tüm atomlarının kütlece ve özellik bakımından birbirinin aynısı olduğunu, atomların bölünemez taneciklerden ibaret olduğunu öne sürmüştür.",
        "Katot ışını tüpü deneyinde ışınların pozitif levhaya doğru saptığını gözlemleyip elektronu keşfetmiştir.",
        "Atomun pozitif yüklü bir küre içine gömülü elektronlardan oluştuğunu öne sürmüş, bu model bir tatlıya benzetilmiştir.",
        "Altın levha deneyinde alfa taneciklerinin bir kısmının büyük açılarla geri sıçradığını gözlemleyip atom çekirdeğini keşfetmiştir."
      ],
      right: ["Rutherford", "Dalton", "Thomson", "Chadwick"]
    },
    text: "Yukarıdaki eşleştirmede, 2 numaralı katkı hangi harfteki bilim insanına aittir?",
    options: ["a", "b", "c", "d", "Hiçbiriyle ilişkili değildir"],
    correct: 2,
    explain: "Katot ışını deneyiyle elektronu keşfeden bilim insanı Thomson'dır; bu da 'c' harfindeki seçenekle eşleşir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    atomModel: { type: "thomson", caption: "1897 — Thomson'ın 'üzümlü kek' modeli", label: "Pozitif yüklü küre içine gömülü elektronlar" },
    context: "Thomson, katot ışını tüpü deneylerinde ışınların negatif yüklü levhadan uzaklaşıp pozitif yüklü levhaya doğru saptığını gözlemlemiştir.",
    text: "Thomson'ın bu deneyle keşfettiği tanecik hangisidir?",
    options: ["Nötron", "Proton", "Foton", "Elektron", "Alfa taneciği"],
    correct: 3,
    explain: "Katot ışınlarının pozitif levhaya doğru sapması, ışınları oluşturan taneciklerin negatif yüklü olduğunu göstermiştir; bu tanecikler elektron olarak adlandırılmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    dialogue: [
      { who: "Öğrenci A", text: "Dalton'ın atom teorisi yanlış çıktığına göre, o dönemki bilim insanları hata yapmış demektir; teorisinin hiçbir değeri yoktu." },
      { who: "Öğrenci B", text: "Bence Dalton'ın teorisi, elindeki sınırlı deneysel kanıtlarla mantıklı bir açıklamaydı; yeni kanıtlar (elektron, çekirdek keşfi) biriktikçe model geliştirildi, bu bilimin doğal işleyişidir." },
      { who: "Öğrenci C", text: "Atom modelleri değiştiğine göre bilim güvenilir değildir, hiçbir atom teorisine güvenilmemeli." }
    ],
    text: "Atom modellerinin Dalton'dan günümüze değişmesiyle ilgili hangi öğrencinin görüşü bilimin doğasını en doğru yansıtır?",
    options: ["Öğrenci A", "Öğrenci B", "Öğrenci C", "A ve C birlikte", "Hiçbiri"],
    correct: 1,
    explain: "Bilimsel modeller, yeni deneysel kanıtlar biriktikçe geliştirilir/revize edilir; bu, bilimin güvenilmez olduğu değil, kendi kendini düzelten doğası gereğidir. Öğrenci B haklıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bohr modeli, hidrojen atomunun çizgi spektrumunu başarıyla açıklamasına rağmen zamanla yetersiz bulunarak modern kuantum mekaniksel modelle değiştirilmiştir.",
    statements: [
      "Bohr modeli çok elektronlu atomların spektrumlarını yeterince açıklayamamıştır.",
      "Bohr modelindeki 'kesin yörünge' fikri, elektronun konumunun kesin olarak bilinemeyeceğini gösteren daha sonraki bulgularla çelişmiştir.",
      "Bohr modeli tamamen hatalı olduğu için hidrojen atomunun spektrumunu da açıklayamaz."
    ],
    text: "Yukarıdaki ifadelerden hangileri Bohr modelinin neden değiştirildiğini doğru açıklar?",
    options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
    correct: 2,
    explain: "Bohr modeli çok elektronlu atomlarda yetersiz kalmış ve 'kesin yörünge' fikri kuantum mekaniğinin belirsizlik ilkesiyle çelişmiştir (I ve II doğru); ancak model hidrojenin spektrumunu başarıyla açıkladığından III yanlıştır — bilimsel modeller tamamen 'yanlış' oldukları için değil, daha kapsamlı açıklama gerektiği için değişir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    atomModel: { type: "rutherford", caption: "1911 — Rutherford'ın altın levha deneyi", label: "Alfa tanecikleri: çoğu sapmadan geçer, çok azı geri sıçrar" },
    context: "Rutherford, 1911'de ince bir altın levhaya pozitif yüklü, hızlı hareket eden alfa tanecikleri göndererek levhanın arkasındaki ekranda oluşan saçılma desenini incelemiştir; taneciklerin büyük çoğunluğu sapmadan geçerken, çok küçük bir kısmı büyük açılarla geri sıçramıştır.",
    checklist: [
      "Deneyde kaynak olarak kullanılan tanecikler pozitif yüklüdür.",
      "Taneciklerin tamamı levhadan sapmadan geçmiştir, hiçbiri geri sıçramamıştır.",
      "Bazı taneciklerin geri sıçraması, atomun merkezinde küçük ve yoğun bir yapı olduğunu göstermiştir.",
      "Bu deney, elektronun keşfedilmesini sağlamıştır."
    ],
    text: "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
    options: ["3", "1", "2", "4", "Hiçbiri"],
    correct: 2,
    explain: "Yalnızca 1. ve 3. ifadeler doğrudur: kaynak tanecikler alfa (pozitif yüklü) tanecikleridir (1. doğru), taneciklerin geri sıçraması atomun merkezinde yoğun bir yapı olduğunu göstermiştir (3. doğru). Taneciklerin küçük bir kısmı gerçekten geri sıçramıştır (2. yanlış, çünkü ifade 'hiçbiri sıçramadı' diyor); elektron bu deneyden değil Thomson'ın katot ışını deneyinden keşfedilmiştir (4. yanlış). Doğru ifade sayısı 2'dir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    dialogue: [
      { who: "Öğrenci A", text: "Chadwick nötronu keşfettiğinde, nötronun elektrik yükü olmadığı için kütlesinin de olmadığını düşünmüş olmalı." },
      { who: "Öğrenci B", text: "Hayır; nötron yüksüzdür ama protonla yaklaşık aynı kütleye sahiptir, yüksüz olmak kütlesiz olmak anlamına gelmez." },
      { who: "Öğrenci C", text: "Bence nötron da elektron gibi çekirdeğin dışında, çekirdek etrafında bulunur." }
    ],
    text: "Nötronun özellikleriyle ilgili hangi öğrencinin görüşü doğrudur?",
    options: ["Öğrenci A", "Öğrenci C", "Öğrenci B", "A ve C birlikte", "Hiçbiri"],
    correct: 2,
    explain: "Nötron elektrik yükü taşımaz ama protonla yaklaşık aynı kütleye sahiptir ve çekirdekte protonlarla birlikte bulunur; Öğrenci B haklıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    atomModel: { type: "bohr", shells: [2, 8, 1], caption: "1913 — Bohr'un yörünge modeli (örnek: 2-8-1 katman dizilimi)", label: "Elektronlar sabit enerji düzeylerinde (katmanlarda) dolanır" },
    context: "Bohr, 1913'te hidrojen atomunun çizgi spektrumunu açıklamak için elektronların çekirdek etrafında belirli enerji düzeylerinde (kabuklarda) dairesel yörüngelerde dolandığını öne sürmüştür.",
    text: "Bohr modeline göre elektronlar atom çekirdeği etrafında nasıl bulunur?",
    options: ["Rastgele, her noktada eşit olasılıkla", "Çekirdeğin içinde protonlarla iç içe", "Yalnızca çekirdeğin yüzeyinde sabit durarak", "Belirli enerji düzeylerinde, sabit yörüngelerde", "Yörüngesiz, bulut şeklinde dağılmış olarak"],
    correct: 3,
    explain: "Bohr modeline göre elektronlar, her biri belirli bir enerjiye karşılık gelen sabit dairesel yörüngelerde (kabuklarda) bulunur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Antik Yunan filozofu Demokritos, maddenin sonsuza kadar bölünemeyeceğini, en sonunda 'atomos' (bölünemez) adı verilen bir noktaya ulaşılacağını öne sürmüştür; ancak bu görüş deneysel kanıta değil felsefi düşünceye dayanmaktaydı.",
    text: "Demokritos'un 'atom' kavramına yaklaşımı için hangisi doğrudur?",
    options: ["Felsefi bir düşünce olup deneysel kanıta dayanmıyordu", "Deneysel kanıta dayanan bilimsel bir teoriydi", "Modern kuantum modeliyle birebir aynıydı", "Atomun çekirdek yapısını da açıklıyordu", "Atomların elektrik yükü taşıdığını ölçmüştü"],
    correct: 0,
    explain: "Demokritos'un atom fikri, dönemin gözlem/deney imkânlarının kısıtlı olması nedeniyle deneysel kanıta değil, felsefi akıl yürütmeye dayanıyordu."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Goldstein, katot ışını tüpü deneylerinde katodun arkasına doğru hareket eden pozitif yüklü ışınlar gözlemlemiştir; bu ışınlar tüpteki gazın türüne göre farklı kütle/yük oranı göstermiştir.",
    text: "Bu gözlemler sonucunda hangi tanecik keşfedilmiştir?",
    options: ["Proton", "Nötron", "Elektron", "Pozitron", "Foton"],
    correct: 0,
    explain: "Goldstein'ın gözlemlediği pozitif yüklü ışınlar (kanal ışınları), protonun keşfine öncülük etmiştir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Millikan, elektrik yüklü yağ damlacıklarının bir elektrik alanı içindeki hareketini dikkatle ölçerek, damlacıkların taşıdığı yükün her zaman belirli bir temel değerin tam katları şeklinde olduğunu bulmuştur.",
    text: "Millikan'ın bu deneyle belirlediği büyüklük hangisidir?",
    options: ["Elektronun kütlesi", "Elektronun yükü", "Protonun kütlesi", "Nötronun yükü", "Atomun toplam hacmi"],
    correct: 1,
    explain: "Millikan'ın yağ damlası deneyi, tek bir elektronun taşıdığı elektrik yükünün büyüklüğünü belirlemiştir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Hidrojen gazı yüksek voltajla uyarıldığında, sürekli bir renk bandı değil, yalnızca belirli dalga boylarında keskin, ayrık ışık çizgileri yaymaktadır.",
    text: "Bohr modeli, hidrojenin çizgi spektrumundaki bu kesikli (ayrık) çizgileri en iyi hangi varsayımla açıklar?",
    options: ["Elektronların her enerji değerini serbestçe alabileceği", "Elektronların yalnızca belirli, sabit enerji düzeyleri arasında geçiş yapabileceği", "Çekirdeğin sürekli ışık yaydığı", "Elektronların çekirdeğe hiç bağlı olmadığı", "Atomun tamamen boş uzaydan oluştuğu"],
    correct: 1,
    explain: "Bohr modeline göre elektronlar yalnızca belirli enerji düzeyleri arasında geçiş yapabilir; bu geçişlerde yayılan enerji, gözlemlenen ayrık spektrum çizgilerine karşılık gelir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Atom modellerinin tarihsel gelişiminde önce bölünemez katı küre fikri, ardından pozitif kütle içine gömülü elektron fikri, sonra merkezde çekirdek fikri, daha sonra sabit yörünge fikri ve son olarak olasılık bulutu fikri önerilmiştir.",
    text: "Aşağıdaki sıralamalardan hangisi atom modellerinin tarihsel gelişimini doğru sırada verir?",
    options: ["Bohr → Dalton → Thomson → Rutherford → Kuantum mekaniksel model", "Kuantum mekaniksel model → Rutherford → Bohr → Thomson → Dalton", "Dalton → Thomson → Rutherford → Bohr → Kuantum mekaniksel model", "Thomson → Dalton → Bohr → Rutherford → Kuantum mekaniksel model", "Rutherford → Thomson → Dalton → Kuantum mekaniksel model → Bohr"],
    correct: 2,
    explain: "Tarihsel sıralama: Dalton'ın katı küre modeli (1808) → Thomson'ın üzümlü kek modeli (1897) → Rutherford'ın çekirdekli model (1911) → Bohr'un yörünge modeli (1913) → modern kuantum mekaniksel model (1926+)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Günümüzde kabul gören modern atom modeline göre elektronların çekirdek etrafındaki tam konumu kesin olarak bilinemez; yalnızca belirli bir bölgede bulunma olasılığından söz edilebilir.",
    text: "Modern kuantum mekaniksel modele göre elektronların konumu için en doğru ifade hangisidir?",
    options: ["Elektronlar, güneş etrafındaki gezegenler gibi sabit dairesel yörüngelerde dolanır", "Elektronlar yalnızca çekirdeğin dışına asla çıkmaz", "Elektronlar çekirdeğin tam merkezinde sabit durur", "Elektronların konumu her zaman kesin olarak hesaplanabilir", "Elektronlar, orbital adı verilen olasılık bölgelerinde bulunur"],
    correct: 4,
    explain: "Modern kuantum mekaniksel modelde elektronun kesin konumu değil, belirli bir bölgede (orbitalde) bulunma olasılığı tanımlanır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Dalton'ın atom teorisindeki varsayımlardan biri, aynı elementin tüm atomlarının kütle ve özellik bakımından birbirinin tıpatıp aynısı olduğudur.",
    text: "Bu varsayıma göre aynı elementin tüm atomları için ne söylenebilir?",
    options: ["Her biri farklı sayıda elektron içerebilir", "Her biri farklı sayıda proton içerir", "Kütlece ve özellik bakımından birbirinin aynısıdır", "Kütleleri rastgele değişir", "Yalnızca yarısı kararlıdır"],
    correct: 2,
    explain: "Dalton'ın varsayımına göre bir elementin tüm atomları kütlece ve özellik bakımından özdeştir (bu varsayım daha sonra izotopların keşfiyle kısmen revize edilmiştir)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    nucleusCloud: { protons: 9, neutrons: 10, electrons: 9, caption: "Örnek: nötr bir flor (F) atomu", label: "p⁺ ve n çekirdekte, e⁻ çekirdek etrafındaki bulutta" },
    context: "Günümüzde bir atomun proton, nötron ve elektron adı verilen üç temel tanecikten oluştuğu, proton ve nötronların çekirdekte, elektronların ise çekirdek etrafındaki bölgede bulunduğu bilinmektedir.",
    text: "Bir atomun temel yapı taşları hangi seçenekte doğru verilmiştir?",
    options: ["Yalnızca nötron ve foton", "Proton, nötron, elektron", "Yalnızca proton ve elektron", "Proton, foton, pozitron", "Yalnızca elektron ve foton"],
    correct: 1,
    explain: "Bir atomun temel yapı taşları proton, nötron (çekirdekte) ve elektrondur (çekirdek etrafındaki bölgede)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Rutherford'ın deneyinde, altın levhaya gönderilen alfa taneciklerinin büyük çoğunluğu hiçbir sapma olmadan levhayı geçmiştir.",
    text: "Bu gözlem atomun yapısı hakkında en doğrudan hangi çıkarımı destekler?",
    options: ["Atomun hiç kütlesi olmadığı", "Atomun büyük kısmının boş uzaydan oluştuğu", "Atomun tamamen katı ve dolu olduğu", "Atomun yalnızca negatif yükten oluştuğu", "Alfa taneciklerinin atomlarla hiç etkileşmediği"],
    correct: 1,
    explain: "Alfa taneciklerinin büyük çoğunluğunun sapmadan geçmesi, atomun hacminin büyük kısmının boş uzaydan oluştuğunu, kütle ve pozitif yükün ise küçük bir çekirdekte yoğunlaştığını göstermiştir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bilim tarihinde atom modelleri; Dalton'ın katı küre fikrinden başlayarak, yeni deneysel kanıtlar biriktikçe Thomson, Rutherford, Bohr ve modern kuantum modeline doğru zamanla değişmiştir.",
    text: "Atom modellerinin zaman içinde değişmesinin temel nedeni en doğru şekilde hangisidir?",
    options: ["Atomun kendisinin zamanla fiziksel olarak değişmesi", "Bilim insanlarının rastgele fikir değiştirmesi", "Yeni deneysel kanıtların önceki modellerle açıklanamayan gözlemler ortaya koyması", "Eski modellerin hiçbir zaman doğru olmaması", "Yeni modellerin eskilerle hiçbir ilişkisinin olmaması"],
    correct: 2,
    explain: "Bilimsel modeller, önceki modelin açıklayamadığı yeni deneysel gözlemler ortaya çıktıkça revize edilir veya değiştirilir; bu, bilimsel bilginin kanıta dayalı ve değişebilir doğasını yansıtır."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    chart: {
      type: "bar",
      title: "Rutherford'ın altın levha deneyinde saçılma açısına göre alfa tanecik sayısı",
      xLabel: "Saçılma açısı",
      yLabel: "Tanecik sayısı (göreli)",
      data: [
        { label: "0°-10°", value: 9700 },
        { label: "10°-30°", value: 250 },
        { label: "30°-90°", value: 40 },
        { label: "90°-180°", value: 8 }
      ]
    },
    text: "Grafikteki veriler, Thomson'ın 'üzümlü kek' modeliyle karşılaştırıldığında en doğru hangi çıkarımı destekler?",
    options: ["Hiçbir tanecik sapmamıştır, bu da atomun tamamen boş olduğunu gösterir", "Verideki tüm tanecikler eşit oranda saçılmıştır, bu da Thomson modelini doğrular", "Büyük açılı saçılma, Thomson modelinin öngöremeyeceği yoğun bir merkezi yapının varlığını işaret eder", "Veriler yalnızca elektronların varlığını kanıtlar, çekirdekle ilgisizdir", "Grafik, atomun negatif yükle dolu olduğunu gösterir"],
    correct: 2,
    explain: "Thomson modeli, pozitif yükün atom içinde yayılı olduğunu varsaydığından büyük açılı saçılma beklenmezdi; gözlemlenen (az sayıda da olsa) büyük açılı saçılma, yükün ve kütlenin küçük, yoğun bir merkezde toplandığını gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Thomson'ın katot ışını deneyinde, tüpe uygulanan elektrik alanında ışınların pozitif yüklü levhaya doğru saptığı gözlemlenmiştir.",
    text: "Bu sapma yönü, katot ışınlarının yükü hakkında en doğru hangi çıkarımı sağlar?",
    options: ["Katot ışınlarını oluşturan taneciklerin pozitif yüklü olduğu", "Katot ışınlarını oluşturan taneciklerin yüksüz olduğu", "Katot ışınlarının kütlesinin olmadığı", "Katot ışınlarını oluşturan taneciklerin negatif yüklü olduğu", "Katot ışınlarının ışık hızında hareket ettiği kanıtlanmıştır"],
    correct: 3,
    explain: "Zıt yükler birbirini çektiğinden, ışınların pozitif levhaya doğru sapması, ışınları oluşturan taneciklerin negatif yüklü olduğunu (elektron) gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    table: {
      headers: ["Model", "Öne süren", "Çekirdek fikri", "Elektronların konumu"],
      rows: [
        ["Katı küre", "Dalton", "Yok", "Tanımlanmamış"],
        ["Üzümlü kek", "Thomson", "Yok", "Pozitif kütleye gömülü"],
        ["Çekirdekli model", "Rutherford", "Var (kütle/yük merkezi)", "Çekirdek etrafında, konumu belirsiz"],
        ["Yörünge modeli", "Bohr", "Var", "Sabit enerji düzeylerinde"]
      ],
      caption: "Dört atom modelinin temel özellikleri"
    },
    text: "Tabloya göre atomun kütlesinin küçük bir merkezde yoğunlaştığı fikrini ilk öneren model hangisidir?",
    options: ["Katı küre", "Çekirdekli model", "Üzümlü kek", "Yörünge modeli", "Tabloda hiçbiri bu fikri içermez"],
    correct: 1,
    explain: "Tabloya göre çekirdek fikri (kütle/yük merkezi) ilk kez Rutherford'ın çekirdekli modelinde önerilmiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bohr modeli, hidrojen atomunun (tek elektronlu) çizgi spektrumunu yüksek doğrulukla açıklamış; ancak birden fazla elektron içeren atomların (örneğin helyum) spektrumlarını aynı doğrulukla açıklayamamıştır.",
    text: "Bu sınırlılık, Bohr modeliyle ilgili en doğru hangi çıkarımı destekler?",
    options: ["Model, tek elektronlu sistemler için geçerliyken çok elektronlu sistemlerde yetersiz kalmıştır", "Model hiçbir atom için doğru sonuç vermemiştir", "Model, tüm atomlar için mükemmel şekilde geçerlidir", "Model yalnızca çekirdek yapısını açıklamak için geliştirilmiştir", "Model, elektron sayısından bağımsız olarak her zaman geçerlidir"],
    correct: 0,
    explain: "Bohr modelinin varsayımları (sabit dairesel yörünge, tek elektron-çekirdek etkileşimi) çok elektronlu atomlardaki elektron-elektron etkileşimlerini hesaba katmadığından, model yalnızca hidrojen gibi tek elektronlu sistemlerde yüksek doğruluk göstermiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Dalton'ın atom teorisi 'atomlar bölünemez' varsayımını içeriyordu; ancak Thomson'ın katot ışını deneyleri, atomun içinden daha küçük, negatif yüklü bir tanecik (elektron) çıkarılabildiğini göstermiştir.",
    text: "Bu gelişme, bilimsel bilginin doğasıyla ilgili en doğru hangi ilkeyi örnekler?",
    options: ["Bilimsel teoriler yalnızca matematiksel hesaplamalara dayanır, deneye gerek yoktur", "Bir kez kabul edilen bilimsel teori asla değiştirilemez", "Deneysel kanıtların bilimsel teorilerle hiçbir ilgisi yoktur", "Dalton'ın teorisi, Thomson'ın keşfinden sonra da değişmeden kaldı", "Bir teori, yeni deneysel kanıtla çelişen bir gözlem ortaya çıktığında revize edilebilir/çürütülebilir"],
    correct: 4,
    explain: "Elektronun keşfi, Dalton'ın 'atom bölünemez' varsayımıyla çelişen somut bir deneysel kanıt sunmuş ve bu, teorinin revize edilmesine yol açmıştır — bilimsel bilginin kanıta dayalı olarak değişebilir doğasının açık bir örneğidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir deneyde, hidrojen atomunun bir enerji düzeyinden diğerine geçen elektronunun yaydığı ışığın dalga boyu ölçülmüş ve bu dalga boyundan enerji farkı hesaplanmıştır. Hesaplanan enerji farkı, Bohr modelinin öngördüğü değerle yüksek doğrulukla örtüşmüştür.",
    text: "Bu sonuç, Bohr modeli hakkında en doğru hangi çıkarımı destekler?",
    options: ["Model, çok elektronlu atomlarda da aynı doğrulukla geçerlidir", "Model, hiçbir deneysel veriyle örtüşmemektedir", "Model, yalnızca teorik bir varsayım olup hiçbir zaman test edilmemiştir", "Bu sonuç Bohr modeliyle ilgisizdir", "Model, hidrojenin enerji düzeyleri arasındaki geçişleri başarıyla öngörebilmektedir"],
    correct: 4,
    explain: "Ölçülen enerji farkının modelin öngördüğü değerle örtüşmesi, Bohr modelinin hidrojen atomunun enerji düzeyleri arasındaki geçişleri (en azından hidrojen için) başarıyla açıkladığını gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Millikan'ın yağ damlası deneyinde ölçülen tüm yük değerleri, her zaman belirli bir temel değerin (yaklaşık 1,6×10⁻¹⁹ coulomb) tam sayı katları olarak bulunmuştur; hiçbir zaman bu değerin kesirli bir katı ölçülmemiştir.",
    text: "Bu gözlem, elektrik yükünün doğasıyla ilgili en doğru hangi çıkarımı destekler?",
    options: ["Elektrik yükü, sürekli değil kesikli (kuantumlu) bir büyüklüktür", "Elektrik yükü her değeri sürekli olarak alabilir", "Elektrik yükünün bir alt sınırı yoktur", "Yük miktarı damlacığın büyüklüğüne göre rastgele değişir", "Bu gözlem yükün doğasıyla ilgili hiçbir bilgi vermez"],
    correct: 0,
    explain: "Ölçülen yüklerin her zaman belirli bir temel değerin tam katları olması, elektrik yükünün sürekli değil kesikli (kuantumlu) birimler hâlinde var olduğunu gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim tarihi kaynağında şu gözlem paylaşılmıştır: Rutherford'ın öğrencileri deneyi tekrarladıklarında, alfa taneciklerinin çok küçük bir kısmının 90 dereceden daha büyük açılarla geri sıçradığını defalarca doğrulamışlardır; bu sonuç tesadüfi bir hata değil, tutarlı bir örüntü olarak ortaya çıkmıştır.",
    text: "Deneyin tekrarlanabilir/tutarlı sonuç vermesi, bilimsel yöntem açısından neden önemlidir?",
    options: ["Tek bir deney sonucu, tekrarlanmadan da her zaman kesin kanıt sayılır", "Deneyin tekrarlanması, sonucun önemini azaltır", "Tekrarlanabilirlik, bilimsel yöntemde gereksiz bir adımdır", "Tekrarlanan sonuçlar yalnızca deney hatasını kanıtlar", "Bir gözlemin tesadüfi hata değil, güvenilir bir doğa olgusunu yansıttığını göstererek teoriye kanıt sağlar"],
    correct: 4,
    explain: "Bir gözlemin farklı denemelerde tutarlı şekilde tekrarlanması, sonucun rastgele bir hatadan değil gerçek bir doğa olgusundan kaynaklandığını gösterir; bu, bilimsel yöntemde kanıtın güvenilirliğini artıran temel bir ilkedir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir öğretim materyalinde şu karşılaştırma yapılmaktadır: Dalton'ın modeli atomu bölünemez kabul ederken, Thomson'ın modeli atomun içinde elektron bulunduğunu, Rutherford'ın modeli ise elektronların dışında ayrıca yoğun bir çekirdek bulunduğunu öne sürer.",
    text: "Bu üç model arasındaki temel fark en doğru şekilde hangisidir?",
    options: ["Thomson'ın modeli çekirdek fikrini Rutherford'dan önce önermiştir", "Her yeni model, bir öncekinin açıklayamadığı bir iç yapı bileşenini (önce elektron, sonra çekirdek) ekleyerek atomun karmaşıklığını artırmıştır", "Dalton'ın modeli en karmaşık, Rutherford'ın modeli en basit olanıdır", "Üç model de birbirinin birebir aynısıdır, farkları yoktur", "Bu üç model birbirinden tamamen bağımsız gelişmiş, birbirini hiç etkilememiştir"],
    correct: 1,
    explain: "Model gelişimi kümülatiftir: Dalton'ın bölünemez küre fikrine Thomson elektronu, Rutherford ise ayrıca yoğun bir çekirdeği ekleyerek atomun iç yapısını aşamalı olarak daha karmaşık ve doğru bir şekilde tanımlamıştır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    orbitalBoxes: {
      subshells: [
        { label: "1s", electrons: [2] },
        { label: "2s", electrons: [2] },
        { label: "2p", electrons: [1, 1, 1] }
      ],
      caption: "Modern kuantum modele göre bir atomun temel hâl elektron dizilimi"
    },
    context: "Görseldeki kutu diyagramı, modern kuantum mekaniksel modelin bir atomun elektronlarını alt kabuklara (orbitallere) nasıl yerleştirdiğini göstermektedir; bu tür bir gösterim Bohr modelinde bulunmaz.",
    text: "Bu diyagramın Bohr modelinden temel farkı en doğru şekilde hangisidir?",
    options: ["Elektronları tek bir dairesel yörünge yerine farklı şekil ve enerjilere sahip alt kabuklara (orbitallere) dağıtması", "Elektron sayısını değiştirmesi", "Çekirdek yükünü değiştirmesi", "Yalnızca hidrojen atomu için kullanılabilmesi (Bohr modeliyle aynı sınırlılığı taşıması)", "Bohr modeliyle birebir aynı bilgiyi farklı çizerek sunması"],
    correct: 0,
    explain: "Bohr modeli tüm elektronları tek boyutlu, dairesel yörüngelere yerleştirirken; kuantum modeli elektronları farklı enerji ve şekillere sahip alt kabuklara (s, p, d...) dağıtarak çok elektronlu atomları da başarıyla tanımlayabilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Dalton'ın teorisi izotopların varlığını (aynı elementin farklı kütleli atomları) öngörmemişti; ancak 20. yüzyılın başında kütle spektrometresi ölçümleri, bazı elementlerin farklı kütlelere sahip atomlardan oluştuğunu göstermiştir.",
    text: "Bu keşif, Dalton'ın teorisinin hangi varsayımını doğrudan sınırlandırmıştır?",
    options: ["Atomların yok edilemeyeceği varsayımını", "Aynı elementin tüm atomlarının kütlece özdeş olduğu varsayımını", "Bileşiklerin tam sayı oranlarında birleştiği varsayımını", "Atomların bölünemez olduğu varsayımını", "Kimyasal tepkimelerde atom sayısının korunduğu varsayımını"],
    correct: 1,
    explain: "İzotopların keşfi, aynı elementin atomlarının farklı kütlelere sahip olabileceğini gösterdiğinden, Dalton'ın 'aynı element atomları kütlece özdeştir' varsayımını doğrudan sınırlandırmıştır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim felsefesi tartışmasında şu görüş savunulmaktadır: 'Bir bilimsel model asla mutlak doğru olarak kabul edilmemeli; yalnızca elimizdeki en iyi kanıtlarla en tutarlı açıklama olarak görülmelidir.'",
    text: "Atom modellerinin tarihi, bu görüşü en doğrudan hangi şekilde destekler?",
    options: ["Bu görüş, atom modellerinin gelişimiyle hiçbir şekilde örtüşmez", "İlk önerilen model (Dalton) hiçbir zaman değiştirilmemiştir", "Her model, döneminin en iyi kanıtlarıyla tutarlıydı fakat sonraki kanıtlarla revize edilmiştir", "Atom modellerinin tümü aynı anda, birbirinden bağımsız olarak doğru kabul edilmiştir", "Modern kuantum modeli, gelecekte asla revize edilmeyecek kadar kesindir"],
    correct: 2,
    explain: "Atom modellerinin tarihi (Dalton→Thomson→Rutherford→Bohr→kuantum model), her modelin kendi döneminin kanıtlarıyla tutarlı olduğunu ama yeni kanıtlar ortaya çıktıkça revize edildiğini gösterir — bilimsel bilginin geçici ve kanıta bağlı doğasını örnekler."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Rutherford'ın modeli, elektronların çekirdek etrafında döndüğünü varsayıyordu; ancak klasik elektromanyetik teoriye göre dairesel hareket eden yüklü bir tanecik sürekli enerji kaybederek kısa sürede çekirdeğe düşmelidir. Gözlemlerde ise atomlar kararlıdır.",
    text: "Bu çelişki, Bohr'un yeni bir model önermesinde en doğrudan hangi rolü oynamıştır?",
    options: ["Bu çelişki yalnızca Thomson modeliyle ilgilidir", "Bu çelişkinin Bohr'un modeliyle hiçbir ilgisi yoktur", "Bohr, bu çelişkiyi görmezden gelerek Rutherford modelini aynen kullanmıştır", "Bohr, bu sorunu çözmek yerine atomun kararsız olduğunu kabul etmiştir", "Rutherford modelinin açıklayamadığı bu kararlılık sorununu çözmek için Bohr, elektronların yalnızca belirli sabit enerji düzeylerinde bulunabileceğini varsaymıştır"],
    correct: 4,
    explain: "Klasik fizikle Rutherford modeli arasındaki bu çelişki, Bohr'u elektronların yalnızca belirli ('izinli') enerji düzeylerinde bulunabileceği ve bu düzeylerde enerji kaybetmeden dolanabileceği yeni bir varsayım geliştirmeye yöneltmiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir laboratuvar etkinliğinde, farklı gazlarla doldurulmuş katot ışını tüplerinde her seferinde aynı kütle/yük oranına sahip ışınlar gözlemlenmiştir; bu oran, kullanılan gazın türünden bağımsız olarak sabit kalmıştır.",
    text: "Bu bulgu, elektron hakkında en doğrudan hangi çıkarımı destekler?",
    options: ["Bu bulgunun elektronun doğasıyla ilgisi olmadığı", "Elektronun her element için farklı bir tanecik olduğu", "Elektronun yalnızca belirli gazlarda bulunduğu", "Kütle/yük oranının gaz türüne göre değişmesi gerektiği", "Elektronun tüm maddelerde ortak, temel bir tanecik olduğu"],
    correct: 4,
    explain: "Kütle/yük oranının kullanılan gaz türünden bağımsız olarak sabit kalması, elektronun tüm maddelerde ortak, temel bir yapı taşı olduğunu göstermiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir atomun kütlesi ölçüldüğünde, yalnızca bilinen proton ve elektron sayısına dayanan hesaplamanın öngördüğünden belirgin şekilde daha fazla çıkmıştır; bu fark, çekirdekte elektrik yükü taşımayan ek bir tanecik olabileceği fikrini doğurmuştur.",
    text: "Bu gözlem, hangi tanecik keşfine götüren akıl yürütmeyi yansıtır?",
    options: ["Alfa taneciği", "Elektron", "Foton", "Nötron", "Pozitron"],
    correct: 3,
    explain: "Ölçülen atom kütlesinin proton+elektron kütlesiyle tam olarak açıklanamaması, çekirdekte yüksüz fakat kütleli bir tanecik (nötron) bulunması gerektiği fikrine yol açmıştır; bu fikir sonradan Chadwick'in deneyiyle doğrulanmıştır."
  },

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir kimya ders kitabında, Bohr modelinin hidrojen atomunun enerji düzeylerini n=1, n=2, n=3... şeklinde numaralandırdığı ve elektronun bir düzeyden diğerine geçerken belirli miktarda enerji soğurduğu veya yaydığı anlatılmaktadır.",
    text: "Bu modele göre, bir elektronun n=1 düzeyinden n=3 düzeyine geçebilmesi için ne olması gerekir?",
    options: ["Yalnızca ışık hızında hareket etmesi", "Herhangi bir miktarda enerji soğurması yeterlidir", "Enerji soğurmadan kendiliğinden geçiş yapması", "İki düzey arasındaki enerji farkına tam olarak eşit miktarda enerji soğurması", "Çekirdekten uzaklaşmak için kütle kaybetmesi"],
    correct: 3,
    explain: "Bohr modeline göre bir elektron yalnızca iki enerji düzeyi arasındaki farka tam olarak eşit miktarda enerji soğurarak (veya yayarak) düzey değiştirebilir; ara değerler izinli değildir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir karşılaştırmada, Thomson'ın modelinde atomun toplam elektrik yükünün sıfır olduğu (pozitif kütle ile negatif elektronların yükünün birbirini dengelediği) belirtilirken, Rutherford'ın modelinde de atomun nötr olduğu ancak yükün farklı şekilde dağıldığı belirtilmektedir.",
    text: "Bu iki modelin ortak noktası ile temel farkı sırasıyla en doğru şekilde hangisidir?",
    options: ["Ortak nokta: atomun toplamda nötr olması; fark: pozitif yükün dağınık mı yoksa küçük bir merkezde mi yoğunlaştığı", "Ortak nokta: her ikisinin de çekirdek fikrini içermesi; fark yoktur", "Ortak nokta yoktur, iki model tamamen farklı öngörülerde bulunur", "Fark: yalnızca Thomson modeli atomun nötr olduğunu kabul eder", "Ortak nokta: her ikisinin de elektronun varlığını reddetmesi"],
    correct: 0,
    explain: "Her iki model de atomun toplamda elektriksel olarak nötr olduğunu kabul eder; temel fark, pozitif yükün Thomson modelinde atom hacmine dağınık, Rutherford modelinde ise küçük bir çekirdekte yoğunlaşmış olmasıdır."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir düşünce deneyinde, eğer Rutherford'ın altın levha deneyinde TÜM alfa tanecikleri sapmadan geçseydi (hiçbiri büyük açıyla saçılmasaydı), bu sonuç farklı bir atom modelini destekleyecekti.",
    text: "Bu varsayımsal sonuç, hangi model ile en tutarlı olurdu ve Rutherford'ın gerçek gözlemiyle karşılaştırıldığında ne değişirdi?",
    options: ["Bu sonuç, mevcut Rutherford modelini değiştirmeden aynen doğrulardı", "Bohr'un yörünge modeliyle tutarlı olurdu; enerji düzeyleriyle saçılmanın ilgisi vardır", "Dalton'ın modeliyle tutarlı olurdu; çünkü Dalton saçılmayı öngörmüştü", "Hiçbir model bu sonuçla ilişkilendirilemez", "Thomson'ın üzümlü kek modeliyle tutarlı olurdu; çünkü yoğun bir merkez olmadığında büyük açılı saçılma beklenmez"],
    correct: 4,
    explain: "Tüm alfa taneciklerinin sapmadan geçmesi, atomda yoğun bir merkezi yapı bulunmadığı, yükün ve kütlenin dağınık olduğu anlamına gelirdi — bu da Thomson'ın üzümlü kek modeliyle tutarlı olur, Rutherford'ın çekirdek fikrine gerek kalmazdı."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    table: {
      headers: ["Enerji düzeyi geçişi", "Bohr modelinin öngördüğü enerji (eV)", "Deneyde ölçülen enerji (eV)"],
      rows: [
        ["n=2 → n=1", "10,2", "10,2"],
        ["n=3 → n=1", "12,1", "12,1"],
        ["n=3 → n=2 (helyum atomunda)", "1,9 (öngörü)", "1,4 (ölçülen)"]
      ],
      caption: "Bohr modelinin öngörüleri ile deneysel ölçümlerin karşılaştırılması"
    },
    text: "Tablodaki verilere dayanarak, Bohr modeliyle ilgili en doğru bilimsel çıkarım hangisidir?",
    options: ["Model hidrojen için (n=2→1, n=3→1) yüksek doğrulukla çalışırken, çok elektronlu helyum atomunda (n=3→2) sapma göstermektedir", "Model her üç geçiş için de aynı doğrulukla çalışmaktadır", "Model hiçbir geçiş için doğru sonuç vermemektedir", "Deneysel ölçümler güvenilmez olduğundan model her zaman doğru kabul edilmelidir", "Tablo, Bohr modelinin çekirdek yapısıyla ilgili hiçbir şey söylemez"],
    correct: 0,
    explain: "Tabloda hidrojen atomuna ait geçişlerde (n=2→1, n=3→1) öngörü ile ölçüm birebir örtüşürken, çok elektronlu helyum atomundaki geçişte (n=3→2) belirgin bir sapma (1,9 vs 1,4 eV) görülmektedir — bu, modelin çok elektronlu sistemlerdeki sınırlılığını doğrular."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim tarihçisi şu gözlemi paylaşmaktadır: 'Dalton'ın teorisi kimyasal tepkimelerdeki kütle korunumunu ve sabit oranlar yasasını başarıyla açıklıyordu; bu nedenle onlarca yıl büyük bir değişiklik olmadan kabul gördü. Ancak elektrik ve radyoaktivite alanındaki yeni deneyler, teorinin öngöremediği gözlemler ortaya çıkardı.'",
    text: "Bu anlatıya dayanarak, bir bilimsel teorinin uzun süre değişmeden kalmasıyla ilgili en doğru çıkarım hangisidir?",
    options: ["Bir teorinin kabul görme süresi, o teorinin doğruluğuyla hiçbir ilgisi olmayan rastgele bir durumdur", "Bir teori uzun süre değişmeden kaldıysa, artık hiçbir zaman değişmeyecek demektir", "Dalton'ın teorisinin uzun süre kabul görmesi, teorinin yanlış olduğunu kanıtlar", "Bir teorinin uzun süre kabul görmesi, mevcut kanıtlarla tutarlı olduğu anlamına gelir; ancak yeni gözlem alanları açıldıkça teori yine de sınanmaya ve gerekirse revize edilmeye devam eder", "Yeni deney alanları (elektrik, radyoaktivite), eski teorilerle hiçbir zaman ilişkilendirilemez"],
    correct: 3,
    explain: "Anlatı, bir teorinin (Dalton'ınki gibi) belirli bir kanıt kümesiyle tutarlı olduğu sürece uzun süre kabul görebileceğini, ancak bilimin yeni gözlem alanlarına (elektrik, radyoaktivite) açıldıkça teorinin yeniden sınanıp gerekirse revize edildiğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir düşünce deneyinde, eğer Chadwick'in deneyinde ölçülen tanecik kütlesi protonunkinden çok farklı (örneğin protonun yüzde birinden küçük) çıksaydı, bu durum nötron yerine farklı bir taneciğin keşfedildiği anlamına gelebilirdi.",
    text: "Bu varsayımsal durum, bilimsel keşiflerde ölçümün rolüyle ilgili en doğru çıkarımı hangisi destekler?",
    options: ["Farklı kütleye sahip iki tanecik her zaman aynı taneciktir", "Bir taneciğin kimliği yalnızca isimlendirilme sırasına göre belirlenir", "Ölçülen kütle, taneciğin kimliğiyle hiçbir zaman ilişkili değildir", "Nötron keşfi, herhangi bir kütle ölçümüne dayanmadan yapılmıştır", "Bir taneciğin kimliği, yalnızca varlığının gözlemlenmesiyle değil, ölçülen fiziksel özellikleriyle (kütle, yük gibi) belirlenir"],
    correct: 4,
    explain: "Chadwick'in deneyinde ölçülen kütlenin protona yakın çıkması, keşfedilen taneciğin nötron olarak tanımlanmasında belirleyici olmuştur; farklı bir kütle ölçülseydi bu, farklı bir tanecik anlamına gelirdi — bilimsel kimlik belirlemede ölçümün kritik rolünü gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir öğretim programında öğrencilere şu soru yöneltilmektedir: 'Bohr modeli, klasik fizik kurallarıyla kuantum fikrini (enerji düzeylerinin kesikliliği) bir arada kullanan geçiş niteliğinde bir modeldir. Modern kuantum mekaniksel model ise tamamen olasılıksal bir yaklaşım benimser.'",
    text: "Bu bilgiye dayanarak, Bohr modelinden modern kuantum modeline geçişteki temel kavramsal değişim en doğru şekilde hangisidir?",
    options: ["Modern model, enerji düzeylerinin kesikliliği fikrini tamamen terk etmiştir", "Elektronun varlığı ilk kez modern modelde kabul edilmiştir", "Modern model, çekirdeğin varlığını reddetmektedir", "Bohr modeli ile modern model arasında kavramsal olarak hiçbir fark yoktur", "Elektronun kesin bir yörüngede bulunduğu fikrinden, yalnızca belirli bir bölgede bulunma olasılığından söz edilebileceği fikrine geçilmiştir"],
    correct: 4,
    explain: "Bohr modelinde elektron kesin bir yörüngede (belirli bir yarıçapta) dolanırken, modern kuantum modelinde elektronun kesin konumu tanımlanmaz, yalnızca belirli bir bölgede (orbitalde) bulunma olasılığından söz edilir — bu, determinizmden olasılıksal yaklaşıma geçişi yansıtan temel kavramsal değişimdir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir araştırmacı, farklı elementlerin katot ışını tüplerinde her zaman aynı kütle/yük oranına sahip negatif tanecikler ürettiğini; ancak pozitif kanal ışınlarının kütle/yük oranının kullanılan gaza göre değiştiğini gözlemlemiştir.",
    text: "Bu iki gözlem birlikte değerlendirildiğinde, elektron ve pozitif tanecikler (protonlar) hakkında en doğru çıkarım hangisidir?",
    options: ["Bu iki gözlem birbiriyle hiçbir şekilde ilişkilendirilemez", "Hem elektron hem pozitif tanecikler her elementte birebir aynıdır", "Elektronun kütle/yük oranının sabit olması, pozitif taneciklerin var olmadığını gösterir", "Elektron tüm maddelerde ortak temel bir taneciktir; pozitif taneciklerin kütlesi ise elementten elemente farklılık gösterir (çünkü farklı sayıda proton/nötron içerirler)", "Pozitif taneciklerin kütlesinin değişmesi, elektronun da değiştiğini gösterir"],
    correct: 3,
    explain: "Elektronun kütle/yük oranının sabit olması onun tüm maddelerde ortak temel bir tanecik olduğunu; pozitif taneciklerin (protonların, aslında farklı gazlarda farklı sayıda birleşmiş atom çekirdeklerinin) kütle/yük oranının değişmesi ise bu taneciklerin elementten elemente farklı kütlelere sahip olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    circleCompare: {
      title: "Atom modellerinde 'atomun boş uzay oranı' konusundaki tarihsel algı değişimi (temsilî)",
      unit: "göreli algılanan doluluk",
      items: [
        { label: "Dalton (katı küre)", value: 100 },
        { label: "Thomson (üzümlü kek)", value: 90 },
        { label: "Rutherford (çekirdekli)", value: 5 }
      ]
    },
    text: "Görseldeki daire büyüklüklerine dayanarak, atom modellerinin tarihsel gelişimiyle ilgili en doğru çıkarım hangisidir?",
    options: ["Rutherford'ın modeli, atomun tamamen dolu olduğunu varsaymıştır", "Üç model de atomun aynı oranda dolu olduğunu varsaymıştır", "Dalton'ın modeli, atomun en boş olduğunu varsaymıştır", "Rutherford'ın deneyi, atomun büyük ölçüde boş uzaydan oluştuğunu göstererek önceki modellerin 'dolu küre' varsayımını büyük ölçüde terk ettirmiştir", "Bu üç model arasında doluluk varsayımı açısından hiçbir fark yoktur"],
    correct: 3,
    explain: "Dairelerin küçülmesi, Dalton ve Thomson modellerinin atomu büyük ölçüde 'dolu' varsaymasına karşılık, Rutherford'ın deneysel bulgularının atomun büyük kısmının boş uzaydan oluştuğunu ortaya koyarak bu algıyı kökten değiştirdiğini yansıtır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim yazısında şu iddia yer almaktadır: 'Bir sonraki atom modeli, mevcut kuantum mekaniksel modelin öngöremediği yeni bir deneysel gözlem ortaya çıkmadıkça değişmeyecektir.' Bu iddia, geçmişteki model değişikliklerinin ortak bir örüntüsüne dayanmaktadır.",
    text: "Bu iddianın dayandığı örüntü, geçmiş model değişikliklerinden (Dalton→Thomson→Rutherford→Bohr→kuantum) en doğru şekilde nasıl özetlenebilir?",
    options: [
      "Her yeni model, bir öncekinin açıklayamadığı somut bir deneysel gözlem ortaya çıktığında geliştirilmiştir",
      "Her yeni model, bir öncekiyle hiçbir deneysel gözleme bağlı olmadan, rastgele önerilmiştir",
      "Model değişiklikleri yalnızca bilim insanlarının kişisel tercihlerine dayanmıştır",
      "Her yeni model, bir öncekini tamamen çürütüp hiçbir ortak unsur taşımamıştır",
      "Geçmişteki model değişiklikleri, gelecekteki değişikliklerle hiçbir ortak örüntü paylaşmaz"
    ],
    correct: 0,
    explain: "Tarihsel örüntü, her modelin bir öncekinin açıklayamadığı somut bir deneysel gözlem (elektron, çekirdek, spektrum çizgileri, çok elektronlu atom sapmaları vb.) ortaya çıktığında geliştirildiğini göstermektedir; bu nedenle iddia, gelecekteki değişikliğin de benzer şekilde yeni bir gözleme bağlı olacağını varsaymaktadır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir kıyaslamada, Rutherford'ın alfa saçılması deneyi ile Thomson'ın katot ışını deneyi karşılaştırılmaktadır: Thomson'ın deneyi elektronun varlığını ve yükünü ortaya koyarken, Rutherford'ın deneyi elektronun keşfinden ayrı olarak, pozitif yükün ve kütlenin atom içindeki dağılımını sorgulamıştır.",
    text: "Bu iki deney arasındaki temel fark en doğru şekilde hangisidir?",
    options: ["Rutherford'ın deneyi elektronun keşfini sağlamıştır, Thomson'ınki değil", "İki deney de aynı soruya, aynı yöntemle cevap aramıştır", "Thomson'ın deneyi 'atomda negatif yüklü ne var?' sorusuna, Rutherford'ın deneyi ise 'pozitif yük ve kütle atom içinde nasıl dağılmış?' sorusuna cevap aramıştır", "Thomson'ın deneyi çekirdeği keşfetmiştir, Rutherford'ınki elektronu", "Bu iki deney arasında kavramsal bir fark yoktur, yalnızca farklı tarihlerde yapılmışlardır"],
    correct: 2,
    explain: "Thomson'ın deneyi atomun içinde negatif yüklü bir bileşen (elektron) olduğunu ortaya koyarken, Rutherford'ın deneyi farklı bir soruya (pozitif yük ve kütlenin atom içindeki dağılımına) odaklanmış ve bu sorgulama sonucunda çekirdek fikrine ulaşılmıştır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir tartışmada şu soru sorulmaktadır: 'Eğer Millikan'ın deneyinde ölçülen yük değerleri sürekli bir aralıkta (herhangi bir ondalık değeri alabilecek şekilde) dağılmış olsaydı, bu durum elektrik yükünün doğası hakkındaki mevcut anlayışı nasıl etkilerdi?'",
    text: "Bu varsayımsal senaryoya en doğru cevap hangisidir?",
    options: [
      "Yükün kesikli (kuantumlu) değil, sürekli bir büyüklük olduğu sonucuna varılırdı; bu, mevcut atom altı parçacık modelini kökten değiştirirdi",
      "Sonuç değişmezdi, çünkü yükün sürekli mi kesikli mi olduğu deneysel veriyle ilgisizdir",
      "Bu durumda dahi yükün kesikli olduğu sonucuna varılırdı, veri şekli önemli değildir",
      "Millikan bu durumda deneyi tamamen durdururdu, hiçbir sonuç çıkarılamazdı",
      "Sürekli dağılım, yalnızca ölçüm cihazının bozuk olduğu anlamına gelir, teoriyle ilgisizdir"
    ],
    correct: 0,
    explain: "Millikan'ın ölçtüğü yüklerin belirli bir temel değerin tam katları (kesikli) olması, elektrik yükünün kuantumlu doğasının temel kanıtıdır; eğer veriler sürekli dağılsaydı bu, yükün kesikli değil sürekli bir büyüklük olduğu sonucunu doğurur ve mevcut parçacık modelini temelden sarsardı."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim insanı şu değerlendirmeyi yapmaktadır: 'Rutherford'ın modeli, çekirdeğin varlığını doğru öngörmüş olsa da, elektronların neden çekirdeğe düşmediğini açıklayamamıştır; bu, modelin eksik değil ama tamamlanmamış olduğu anlamına gelir.'",
    text: "Bu değerlendirmeye dayanarak, 'eksik' ile 'tamamlanmamış' bir bilimsel model arasındaki fark en doğru şekilde nasıl açıklanabilir?",
    options: ["İki terim arasında hiçbir fark yoktur, aynı anlama gelir", "Tamamlanmamış bir model, doğru öngörüler içerir fakat bazı gözlemleri açıklamak için ek varsayımlara ihtiyaç duyar; eksik bir model ise temel öngörüsünde hatalıdır", "Tamamlanmamış bir model, hiçbir doğru öngörü içermez", "Eksik bir model, her zaman tamamlanmamış modelden daha güvenilirdir", "Bu ayrım bilim felsefesiyle ilgisizdir, yalnızca kelime oyunudur"],
    correct: 1,
    explain: "Rutherford'ın modeli çekirdeğin varlığı konusunda doğru bir öngörüde bulunmuştur (bu yönüyle 'eksik' değildir), fakat kararlılık sorununu açıklayamadığı için 'tamamlanmamış' kalmıştır; bu boşluk daha sonra Bohr'un ek varsayımıyla (sabit enerji düzeyleri) doldurulmuştur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    table: {
      headers: ["Element", "Katot ışını deneyinde ölçülen e/m oranı", "Kanal ışını deneyinde ölçülen e/m oranı"],
      rows: [
        ["Hidrojen", "1,76 × 10¹¹ C/kg (sabit)", "9,58 × 10⁷ C/kg"],
        ["Oksijen", "1,76 × 10¹¹ C/kg (sabit)", "6,0 × 10⁶ C/kg"],
        ["Neon", "1,76 × 10¹¹ C/kg (sabit)", "4,8 × 10⁶ C/kg"]
      ],
      caption: "Farklı elementlerle yapılan katot ışını ve kanal ışını deneylerinde ölçülen yük/kütle oranları"
    },
    text: "Tablodaki verilere dayanarak, katot ışınları (elektron) ile kanal ışınları (pozitif tanecikler) arasındaki temel fark en doğru şekilde hangisidir?",
    options: ["Her iki taneciğin de e/m oranı elementten elemente aynı şekilde değişmektedir", "Elektronun e/m oranı hangi element kullanılırsa kullanılsın sabit kalırken, pozitif taneciklerin e/m oranı elementten elemente değişmektedir", "Elektronun e/m oranı elementten elemente değişirken, pozitif taneciklerinki sabittir", "Tablo, iki tanecik türü arasında hiçbir fark olmadığını göstermektedir", "Kanal ışınlarının kütlesi hiçbir zaman ölçülememiştir"],
    correct: 1,
    explain: "Tabloda elektronun (katot ışını) e/m oranı tüm elementlerde sabit kalırken, pozitif taneciklerin (kanal ışını) e/m oranı elementten elemente değişmektedir; bu, elektronun evrensel/ortak bir tanecik olduğunu, pozitif taneciklerin ise farklı kütlelere sahip element-özgü yapılar (iyonlaşmış atomlar) olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim felsefecisi şu görüşü savunmaktadır: 'İyi bir bilimsel teori, yalnızca mevcut gözlemleri açıklamakla kalmaz, aynı zamanda henüz gözlemlenmemiş yeni sonuçları da öngörebilmelidir.' Bu ölçüte göre, Bohr modelinin hidrojenin spektrum çizgilerinin dalga boylarını deneyden önce matematiksel olarak hesaplayıp öngörmesi örnek gösterilmektedir.",
    text: "Bu ölçüte dayanarak, bir modelin yalnızca mevcut veriyi 'uydurarak' açıklaması ile yeni sonuçları 'öngörmesi' arasındaki fark neden bilimsel değer açısından önemlidir?",
    options: [
      "Öngörü yapabilen bir model, henüz test edilmemiş yeni durumlarda da doğrulanabilir veya çürütülebilir olduğundan daha güçlü bir kanıt sunar",
      "İki durum arasında bilimsel değer açısından hiçbir fark yoktur",
      "Yalnızca mevcut veriyi açıklayan modeller her zaman daha güvenilirdir",
      "Öngörü yapmak, bir modelin yanlış olduğunun kanıtıdır",
      "Bilimsel teoriler hiçbir zaman yeni sonuç öngöremez"
    ],
    correct: 0,
    explain: "Bir model yalnızca zaten bilinen veriyi açıklıyorsa (post-hoc), bu veriye 'uydurulmuş' olabilir; oysa henüz gözlemlenmemiş bir sonucu doğru öngörüp sonradan deneyle doğrulanması, modelin gerçek açıklayıcı gücünü ve test edilebilirliğini gösterir — bu yüzden bilimsel değeri daha yüksektir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir karşılaştırmalı analizde, Dalton'ın teorisinin kimyasal tepkimelerdeki kütle korunumunu (madde yoktan var, vardan yok olmaz) başarıyla açıkladığı; ancak bu varsayımın 20. yüzyılda kütle-enerji eşdeğerliği (E=mc²) ve nükleer tepkimelerin keşfiyle sınırlı hâle geldiği belirtilmektedir.",
    text: "Bu bilgiye dayanarak, Dalton'ın kütle korunumu varsayımıyla ilgili en doğru bilimsel çıkarım hangisidir?",
    options: ["Varsayım, yalnızca 21. yüzyılda test edilmeye başlanmıştır", "Varsayım tamamen yanlış çıkmış ve hiçbir bağlamda kullanılmamaktadır", "Nükleer tepkimelerin keşfi, kimyasal tepkimelerdeki kütle korunumunu da geçersiz kılmıştır", "E=mc² denklemi, Dalton'ın teorisiyle hiçbir ilişkisi olmayan bağımsız bir konudur", "Varsayım, sıradan kimyasal tepkimeler için hâlâ yüksek doğrulukla geçerliyken, nükleer tepkimeler gibi farklı bir ölçekte/bağlamda sınırlarına ulaşmıştır"],
    correct: 4,
    explain: "Dalton'ın kütle korunumu varsayımı, sıradan kimyasal tepkimeler (atomların yeniden düzenlenmesi) için hâlâ yüksek doğrulukla geçerlidir; ancak nükleer tepkimelerde kütlenin enerjiye dönüşebilmesi (E=mc²), varsayımın yalnızca belirli bir ölçek/bağlamda geçerli olduğunu göstermiştir — bu, bilimsel varsayımların 'yanlış' olmaktan çok 'sınırlı bir geçerlilik alanına sahip' olabileceğini örnekler."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir tartışmada şu senaryo sorulmaktadır: 'Eğer Rutherford, deneyinde büyük açılı saçılmayı gözlemlediği hâlde bu sonucu -mevcut Thomson modeliyle çelişiyor diye- göz ardı edip yayımlamasaydı, bilim tarihinde ne olurdu?'",
    text: "Bu senaryo, bilimsel dürüstlük ve kanıta bağlılık ilkesiyle ilgili en doğru hangi çıkarımı destekler?",
    options: ["Rutherford'ın sonucu göz ardı etmesi, bilimin ilerlemesini hızlandırırdı", "Bir bilim insanı, mevcut teoriyle çelişen sonuçları her zaman görmezden gelmelidir", "Bu senaryonun bilim tarihiyle hiçbir ilgisi yoktur", "Mevcut bir teoriyle çelişen kanıtların görmezden gelinmesi, bilimsel bilginin ilerlemesini geciktirir veya engeller", "Çelişkili kanıtlar, bilimsel yöntemde her zaman anlamsız kabul edilir"],
    correct: 3,
    explain: "Rutherford'ın beklenmedik (Thomson modeliyle çelişen) sonucu görmezden gelmeyip ciddiye alması ve yayımlaması, çekirdek modelinin geliştirilmesini sağlamıştır; bu senaryo, mevcut teoriyle çelişen kanıtların görmezden gelinmesinin bilimsel ilerlemeyi engelleyeceğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir özet tablo, beş atom modelinin (Dalton, Thomson, Rutherford, Bohr, kuantum mekaniksel) her birinin bir öncekinin AÇIKLAYAMADIĞI en az bir gözlemi başarıyla açıkladığını göstermektedir: Thomson elektronu, Rutherford büyük açılı saçılmayı, Bohr çizgi spektrumunu, kuantum model ise çok elektronlu atomların davranışını açıklamıştır.",
    text: "Bu örüntüye dayanarak, bilimsel modellerin gelişimiyle ilgili en kapsamlı ve doğru genelleme hangisidir?",
    options: ["Her yeni model, bir öncekini tamamen geçersiz kılıp hiçbir ortak unsur taşımaz", "Bilimsel modeller birbirinden tamamen bağımsız, rastgele sırayla ortaya çıkar", "Bilimsel modeller, öncekinin açıklayamadığı somut bir soruna çözüm getirerek kümülatif ve kanıta dayalı biçimde ilerler", "Model gelişiminde sıra önemsizdir, hangi model önce gelirse gelsin sonuç aynıdır", "Bilimsel modellerin gelişiminde deneysel kanıtın hiçbir rolü yoktur"],
    correct: 2,
    explain: "Beş modelin her birinin bir öncekinin açıklayamadığı somut bir gözlemi (elektron, saçılma, spektrum, çok elektronlu atom davranışı) çözmek üzere geliştirilmiş olması, bilimsel bilginin rastgele değil, kümülatif ve kanıta dayalı biçimde ilerlediğini gösteren kapsamlı bir örüntüdür."
  }
],
  "orbital": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    orbitalBoxes: {
      subshells: [
        { label: "1s", electrons: [0] },
        { label: "2s", electrons: [0] },
        { label: "2p", electrons: [0, 0, 0] }
      ],
      caption: "Üç farklı alt kabuk (boş kutular, yalnızca göreli enerji sırasını göstermek içindir)"
    },
    context: "Görseldeki üç alt kabuk, aynı atomda bulunan farklı orbital türlerini temsil etmektedir.",
    text: "Bu üç alt kabuk enerjilerine göre küçükten büyüğe sıralandığında hangi sıralama doğrudur?",
    options: ["2p < 2s < 1s", "1s < 2p < 2s", "2s < 1s < 2p", "1s < 2s < 2p", "Üçü de eşit enerjilidir"],
    correct: 3,
    explain: "Baş kuantum sayısı (n) küçük olan alt kabuk genellikle daha düşük enerjilidir; aynı n değerinde ise s alt kabuğu p'den daha düşük enerjilidir. Bu nedenle sıralama 1s < 2s < 2p şeklindedir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir alt kabuğun enerjisi, baş kuantum sayısı (n) ile açısal momentum kuantum sayısının (l) toplamına (n+l kuralı) göre tahmin edilebilir; toplam ne kadar küçükse enerji genellikle o kadar düşüktür.",
    text: "3s (n=3, l=0) ve 3p (n=3, l=1) alt kabukları karşılaştırıldığında hangisi daha düşük enerjilidir?",
    options: ["3p", "3s", "İkisi de eşit enerjilidir", "Karşılaştırma yapılamaz", "3p her zaman 3s'den düşüktür"],
    correct: 1,
    explain: "Aynı baş kuantum sayısına (n=3) sahip alt kabuklarda, açısal momentum kuantum sayısı (l) küçük olan daha düşük enerjilidir; s (l=0) alt kabuğu p'den (l=1) daha düşüktür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    matchPairs: {
      left: [
        "Bir orbitalde en fazla iki elektron bulunabilir ve bu iki elektronun spinleri zıt yönde olmalıdır.",
        "Eşit enerjili (dejenere) orbitaller doldurulurken elektronlar önce her orbitale birer tane, aynı yönde spinle yerleştirilir.",
        "Elektronlar, atomun temel hâlinde önce en düşük enerjili boş orbitalden başlayarak sırayla yerleşir.",
        "Aynı alt kabuk içinde enerjileri eşit olan orbitallere (örneğin px, py, pz) verilen isim."
      ],
      right: ["Hund kuralı", "Yozlaşmış (dejenere) orbitaller", "Pauli dışlama ilkesi", "Aufbau ilkesi"]
    },
    text: "Yukarıdaki eşleştirmede, 3 numaralı tanım hangi harfteki kavrama aittir?",
    options: ["a", "b", "c", "d", "Hiçbiriyle ilişkili değildir"],
    correct: 3,
    explain: "Elektronların en düşük enerjili boş orbitalden başlayarak sırayla yerleşmesi Aufbau ilkesidir; bu da 'd' harfindeki seçenekle eşleşir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir orbital diyagramında s alt kabuğu küresel simetrik bir bulut, p alt kabuğu ise iki loblu (halter/dambıl şeklinde) bir bulut olarak gösterilir.",
    text: "Bu şekil farkı, orbitaller hakkında en doğrudan hangi bilgiyi yansıtır?",
    options: ["s orbitalinin her zaman p orbitalinden daha yüksek enerjili olduğunu", "Elektronun bulunma olasılığının uzayda farklı geometrik dağılım gösterdiğini", "p orbitalinin elektron içeremeyeceğini", "Şeklin, orbitalin enerjisiyle hiçbir ilgisinin olmadığını her koşulda kanıtladığını", "s orbitalinin yalnızca çekirdekte bulunduğunu"],
    correct: 1,
    explain: "Orbital şekilleri, elektronun o bölgede bulunma olasılığının uzaydaki geometrik dağılımını gösterir; s orbitali küresel simetrikken p orbitali iki loblu bir yapıya sahiptir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir alt kabuktaki orbital sayısı, açısal momentum kuantum sayısına (l) bağlıdır: s alt kabuğunda 1, p alt kabuğunda 3, d alt kabuğunda 5 orbital bulunur.",
    text: "Bir d alt kabuğu en fazla kaç elektron alabilir?",
    options: ["2", "6", "14", "10", "18"],
    correct: 3,
    explain: "Bir d alt kabuğunda 5 orbital bulunur ve her orbital en fazla 2 elektron alabileceğinden, d alt kabuğu toplam en fazla 10 elektron alabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    dialogue: [
      { who: "Öğrenci A", text: "Aufbau ilkesi ile Hund kuralı aynı şeyi söylüyor bence; ikisi de elektronların rastgele yerleştiğini anlatıyor." },
      { who: "Öğrenci B", text: "Bence farklı: Aufbau, orbitallerin HANGİ SIRAYLA doldurulacağını (enerjiye göre); Hund ise eşit enerjili orbitaller arasında elektronların nasıl PAYLAŞTIRILACAĞINI anlatır." },
      { who: "Öğrenci C", text: "İkisi de yalnızca d ve f orbitalleri için geçerlidir, s ve p orbitalleri için geçerli değildir." }
    ],
    text: "Aufbau ilkesi ile Hund kuralı arasındaki farkla ilgili hangi öğrencinin görüşü doğrudur?",
    options: ["Öğrenci A", "Öğrenci C", "Öğrenci B", "A ve C birlikte", "Hiçbiri"],
    correct: 2,
    explain: "Aufbau ilkesi orbitallerin enerjiye göre doldurulma SIRASINI, Hund kuralı ise eşit enerjili (dejenere) orbitaller arasında elektronların nasıl dağıtılacağını belirler; ikisi de tüm alt kabuk türleri (s, p, d, f) için geçerlidir. Öğrenci B haklıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    orbitalBoxes: {
      subshells: [
        { label: "3d", electrons: [0, 0, 0, 0, 0] },
        { label: "4s", electrons: [0] }
      ],
      caption: "3d ve 4s alt kabukları (n+l kuralına göre karşılaştırma)"
    },
    context: "3d alt kabuğu için n=3, l=2 olduğundan n+l=5; 4s alt kabuğu için n=4, l=0 olduğundan n+l=4'tür.",
    text: "n+l kuralına göre bu iki alt kabuktan hangisi daha düşük enerjilidir?",
    options: ["3d", "4s", "İkisi de eşit enerjilidir", "n+l kuralı bu iki alt kabuk için geçerli değildir", "3d her zaman 4s'den düşüktür"],
    correct: 1,
    explain: "n+l kuralına göre toplamı küçük olan alt kabuk genellikle daha düşük enerjilidir; 4s'nin n+l değeri (4) 3d'ninkinden (5) küçük olduğundan 4s daha düşük enerjilidir ve önce dolar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir orbitalin enerjisini belirleyen iki temel kuantum sayısı, baş kuantum sayısı (n, orbitalin büyüklüğü/enerji düzeyi) ve açısal momentum kuantum sayısıdır (l, orbitalin şekli).",
    text: "Aynı baş kuantum sayısına (n) sahip s, p, d alt kabukları enerjilerine göre nasıl sıralanır?",
    options: ["d < p < s", "s = p = d", "p < s < d", "s < p < d", "d < s < p"],
    correct: 3,
    explain: "Aynı n değerinde açısal momentum kuantum sayısı (l) arttıkça enerji de artar; s (l=0) en düşük, p (l=1) ortada, d (l=2) en yüksek enerjilidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir s orbitali her zaman tek bir orbitalden oluşurken, bir p alt kabuğu üç, bir d alt kabuğu beş, bir f alt kabuğu ise yedi orbitalden oluşur.",
    text: "Bir f alt kabuğu en fazla kaç elektron alabilir?",
    options: ["6", "10", "2", "18", "14"],
    correct: 4,
    explain: "f alt kabuğunda 7 orbital bulunur; her orbital en fazla 2 elektron alabileceğinden f alt kabuğu toplam en fazla 14 elektron alabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir 2p alt kabuğuna elektron yerleştirilirken üç farklı öneri değerlendirilmektedir.",
    statements: [
      "İlk elektronu herhangi bir 2p orbitaline, ikinci elektronu da aynı orbitale zıt spinli olarak yerleştirmek Pauli ilkesine aykırı değildir.",
      "Üç elektronu üç ayrı 2p orbitaline, hepsi aynı yönde spinli olacak şekilde tek tek yerleştirmek Hund kuralına uygundur.",
      "Dördüncü bir elektron gelirse, zaten dolu olan orbitallerden birine zıt spinli olarak eklenir."
    ],
    text: "Yukarıdaki ifadelerden hangileri doğrudur?",
    options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
    correct: 4,
    explain: "Bir orbitalde en fazla iki elektron, zıt spinli olarak bulunabilir (I doğru, Pauli ilkesi); eşit enerjili orbitallere önce tek tek aynı yönde spinle yerleşim Hund kuralıdır (II doğru); orbitaller tek elektronla dolduktan sonra gelen elektronlar zıt spinli eşleşerek doldurmaya devam eder (III doğru)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    orbitalBoxSet: [
      { tag: "I", subshells: [{ label: "2p", electrons: [2, 1, 1] }] },
      { tag: "II", subshells: [{ label: "2p", electrons: [2, 2, 0] }] },
      { tag: "III", subshells: [{ label: "2p", electrons: [1, 2, 1] }] }
    ],
    context: "Yukarıda, temel hâldeki bir atomun 2p⁴ alt kabuğu için önerilen üç farklı elektron dağılımı gösterilmektedir.",
    text: "Bu üç dağılımdan hangisi Hund kuralına AYKIRIDIR?",
    options: ["Dağılım I", "Dağılım II", "Dağılım III", "I ve III birlikte", "Üçü de kurala uygundur"],
    correct: 1,
    explain: "Hund kuralına göre, bir orbital ikinci kez elektron alıp eşleşmeden önce alt kabuktaki TÜM orbitaller birer elektronla doldurulmalıdır. Dağılım II'de bir orbital hâlâ boşken (0) başka bir orbital zaten eşleşmiştir (2); bu kurala aykırıdır. Dağılım I ve III ise orbitallerin ÇİZİMDEKİ sırası farklı görünse de, ikisinde de üç orbital de önce birer elektron almış ve dördüncü elektron ancak ondan sonra bunlardan birinde eşleşmiştir — orbitaller eş enerjili (dejenere) olduğundan hangisinin 'önce' çizildiği önemli değildir; önemli olan hiçbir orbitalin boş kalmamasıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun temel hâldeki elektron dizilimi, elektronların mümkün olan en düşük toplam enerjiye sahip düzenlenişini yansıtır.",
    text: "Bir atomun 'temel hâl' elektron dizilimi ile ilgili en doğru ifade hangisidir?",
    options: ["Yalnızca iyonlaşmış atomlar için tanımlanan bir durumdur", "Elektronların en yüksek enerjili orbitallerde bulunduğu kararsız bir durumdur", "Elektronların mevcut orbitallerde en düşük enerjili şekilde dizildiği kararlı durumdur", "Elektron sayısından bağımsız, sabit bir dizilimdir", "Atomun sıcaklığına göre sürekli değişen bir dizilimdir"],
    correct: 2,
    explain: "Temel hâl, bir atomun elektronlarının mümkün olan en düşük toplam enerjiye sahip, en kararlı dizilimidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atoma dışarıdan enerji verildiğinde, bir elektron bulunduğu orbitalden daha yüksek enerjili boş bir orbitale geçebilir; bu duruma 'uyarılmış hâl' denir.",
    text: "Uyarılmış hâldeki bir atomla ilgili en doğru ifade hangisidir?",
    options: ["Atomun çekirdek yükü değişmiştir", "Atomun toplam elektron sayısı artmıştır", "Tüm elektronlar aynı anda en düşük enerjili orbitale geçmiştir", "Atom artık kararlı hâle geçmiştir ve enerji vermez", "En az bir elektron, temel hâldekinden daha yüksek enerjili bir orbitale geçmiştir"],
    correct: 4,
    explain: "Uyarılmış hâlde, dışarıdan alınan enerjiyle en az bir elektron temel hâldeki orbitalinden daha yüksek enerjili bir orbitale geçmiştir; bu durum kararsızdır ve atom fazla enerjiyi yayarak temel hâle dönme eğilimindedir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir orbital enerji diyagramında, alt kabuklar genellikle artan enerjiye göre alttan üste doğru sıralanır: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...",
    text: "Bu sıralamaya göre 3p ile 4s alt kabukları karşılaştırıldığında hangisi daha düşük enerjilidir?",
    options: ["İkisi de eşit enerjilidir", "4s", "3p", "Karşılaştırılamaz", "4s her zaman 3p'den düşüktür, istisnasız"],
    correct: 2,
    explain: "Verilen sıralamada 3p, 4s'den önce (daha düşük enerjili konumda) yer almaktadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir p orbitalinin şekli iki loba sahip bir halter gibidir ve uzayda üç farklı eksen boyunca (x, y, z) yönlenebilir.",
    text: "Bu bilgiye göre bir p alt kabuğunda kaç farklı yönelim (orbital) bulunur?",
    options: ["1", "7", "5", "3", "9"],
    correct: 3,
    explain: "p alt kabuğu üç farklı uzaysal yönelime (px, py, pz) sahip üç orbitalden oluşur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir s orbitalinin şekli, merkezinde çekirdek bulunan içi dolu bir küreye benzer ve büyüklüğü baş kuantum sayısı (n) arttıkça büyür.",
    text: "Buna göre 1s ve 2s orbitalleri karşılaştırıldığında hangi ifade doğrudur?",
    options: ["İkisi tamamen aynı büyüklük ve enerjidedir", "1s orbitali 2s'den daha büyük ve daha yüksek enerjilidir", "2s orbitali küresel değil, halter şeklindedir", "2s orbitali 1s'den daha büyük ve daha yüksek enerjilidir", "1s orbitali yalnızca iyonlarda bulunur"],
    correct: 3,
    explain: "Baş kuantum sayısı (n) arttıkça orbital hem büyür hem de enerjisi artar; bu nedenle 2s orbitali 1s'den daha büyük ve daha yüksek enerjilidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun ikinci enerji düzeyinde (n=2) yalnızca s ve p alt kabukları bulunurken, üçüncü enerji düzeyinde (n=3) s, p ve d alt kabukları bulunabilir.",
    text: "Bu bilgiye göre, bir enerji düzeyinde bulunabilecek alt kabuk türü sayısı neye bağlıdır?",
    options: ["Atomun sıcaklığına", "Yalnızca elektron sayısına", "Çekirdekteki nötron sayısına", "Baş kuantum sayısına (n)", "Atomun bulunduğu fiziksel hâle (katı/sıvı/gaz)"],
    correct: 3,
    explain: "Bir enerji düzeyinde (n) bulunabilecek alt kabuk sayısı ve türü, baş kuantum sayısına bağlıdır (n. düzeyde n farklı alt kabuk türü bulunabilir: n=1 için yalnızca s, n=2 için s ve p, n=3 için s,p,d...)."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    table: {
      headers: ["Alt kabuk", "n", "l", "n + l"],
      rows: [
        ["4s", "4", "0", "4"],
        ["3d", "3", "2", "5"],
        ["4p", "4", "1", "5"],
        ["5s", "5", "0", "5"]
      ],
      caption: "Dört alt kabuğun n, l ve n+l değerleri"
    },
    text: "Tabloya göre, n+l değeri eşit olan 3d, 4p ve 5s alt kabukları arasında enerji sıralaması nasıl belirlenir?",
    options: ["n+l değeri eşit olan alt kabukların enerjisi karşılaştırılamaz", "n+l değerleri eşit olduğunda, n değeri büyük olan alt kabuk daha düşük enerjilidir", "n+l değerleri eşit olduğunda, n değeri küçük olan alt kabuk daha düşük enerjilidir", "Bu durumda yalnızca l değeri dikkate alınır, n önemsizdir", "n+l değeri eşit olan alt kabuklar her zaman aynı enerjidedir"],
    correct: 2,
    explain: "n+l kuralının ikinci bölümüne göre, n+l değerleri eşit olduğunda daha küçük n değerine sahip alt kabuk daha düşük enerjilidir; bu nedenle sıralama 3d < 4p < 5s şeklindedir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    orbitalBoxes: {
      subshells: [
        { label: "3d", electrons: [0, 0, 0, 0, 0] },
        { label: "4s", electrons: [2] }
      ],
      caption: "Bir geçiş metali atomunun kısmi elektron dizilimi"
    },
    context: "Görseldeki diyagramda 4s alt kabuğu dolu (2 elektron) iken 3d alt kabuğu henüz boştur; bu, Aufbau ilkesine göre 4s'nin 3d'den önce dolduğunu yansıtır.",
    text: "Bu durum, orbital enerjileriyle ilgili hangi genellemeyi doğrudan destekler?",
    options: ["3d alt kabuğu her zaman 4s'den önce dolar", "Baş kuantum sayısı her zaman tek başına enerji sıralamasını belirler", "Baş kuantum sayısı büyük olan bir alt kabuk (3d), baş kuantum sayısı küçük olan başka bir alt kabuktan (4s) daha yüksek enerjili olabilir", "4s ve 3d alt kabukları her zaman eşit enerjilidir", "Bu diyagram, Aufbau ilkesiyle çelişmektedir"],
    correct: 2,
    explain: "4s'nin (n=4) 3d'den (n=3) önce dolması, yalnızca baş kuantum sayısına bakarak enerji sıralaması yapılamayacağını; n+l kuralı gibi ek bir ölçütün gerekli olduğunu gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun elektron dizilimi belirlenirken, alt kabuklar genellikle şu sırayla doldurulur: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d...",
    text: "Bu sıralamada, 4f alt kabuğunun 6s'den sonra gelmesi, hangi genellemeyle en iyi açıklanır?",
    options: ["n+l kuralına göre 4f'nin (n+l=7) enerjisinin 6s'ninkinden (n+l=6) yüksek olması", "f alt kabuklarının her zaman en düşük enerjili olması", "6s alt kabuğunun elektron alamaması", "Sıralamanın rastgele belirlenmiş olması", "4f'nin baş kuantum sayısının 6s'den büyük olması"],
    correct: 0,
    explain: "4f alt kabuğunun n+l değeri (4+3=7), 6s'ninkinden (6+0=6) büyük olduğundan n+l kuralına göre 4f daha yüksek enerjilidir ve 6s'den sonra dolar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 3p alt kabuğundaki elektronlar, 3s alt kabuğundaki elektronlara göre çekirdekten ortalama olarak daha uzakta bulunma eğilimindedir ve çekirdek çekiminden daha az etkilenir (daha fazla perdelenir).",
    text: "Bu bilgi, 3s ve 3p alt kabuklarının enerjileri arasındaki farkı en doğru şekilde nasıl açıklar?",
    options: ["3s ve 3p alt kabukları çekirdekten aynı uzaklıkta bulunur", "Çekirdekten uzaklık, orbital enerjisini hiçbir şekilde etkilemez", "3s alt kabuğu her zaman 3p'den daha yüksek enerjilidir", "Perdelenme yalnızca d ve f orbitallerinde görülür", "Çekirdekten daha uzakta ve daha az çekim hisseden 3p, 3s'den daha yüksek enerjilidir"],
    correct: 4,
    explain: "Çekirdekten daha uzakta bulunan ve çekirdek çekiminden daha fazla perdelenen elektronlar daha yüksek enerjiye sahiptir; bu nedenle 3p, 3s'den daha yüksek enerjilidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    orbitalBoxes: {
      subshells: [
        { label: "2p", electrons: [2, 1, 0] }
      ],
      caption: "2p alt kabuğuna 3 elektron yerleştirmenin iki farklı olası yolundan biri"
    },
    context: "Görseldeki diyagramda 3 elektron, ilk orbitale 2 tane (zıt spinli), ikinci orbitale 1 tane yerleştirilmiştir. Bu düzenleme, Hund kuralına göre önerilen düzenlemeyle karşılaştırılmalıdır.",
    text: "Bu düzenlemenin Hund kuralına uygun temel hâl düzenlemesiyle karşılaştırıldığında durumu nedir?",
    options: ["Bu düzenleme ile Hund kuralına uygun düzenleme aynı enerjiye sahiptir", "Hund kuralına tam olarak uygundur, bu en kararlı düzenlemedir", "Hund kuralı yalnızca d orbitalleri için geçerlidir, bu örnekle ilgisizdir", "Hund kuralına uygun değildir; kararlı düzenlemede 3 elektron 3 ayrı orbitale birer tane yerleştirilmelidir", "Pauli ilkesi bu düzenlemeyi yasaklamaktadır"],
    correct: 3,
    explain: "Hund kuralına göre en kararlı (en düşük enerjili) düzenleme, 3 elektronun 3 ayrı orbitale birer tane, aynı yönde spinle yerleştirilmesidir; bir orbitali eşleştirip diğerini boş bırakmak daha yüksek enerjili, kararsız bir düzenlemedir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun elektron dizilimi yazılırken bazı kaynaklar alt kabukları enerji sırasına göre (1s 2s 2p 3s 3p 4s 3d...), bazı kaynaklar ise baş kuantum sayısına göre gruplandırarak (1s 2s 2p 3s 3p 3d 4s...) yazar.",
    text: "Bu iki yazım biçimi arasındaki fark en doğru şekilde nasıl açıklanır?",
    options: ["Enerji sırasına göre yazım yalnızca iyonlar için kullanılır", "İki yazım biçiminden biri kesinlikle yanlıştır", "Enerji sırasına göre yazım doldurulma sırasını, n'ye göre gruplandırma ise elektronların nihai olarak hangi düzeyde bulunduğunu vurgular; ikisi de aynı elektron sayısını farklı düzenlemeyle sunar", "n'ye göre gruplandırma, farklı bir atomu tanımlar", "Bu iki biçim arasında hiçbir sistematik ilişki yoktur"],
    correct: 2,
    explain: "Elektronlar Aufbau ilkesine göre enerji sırasıyla (...4s 3d...) doldurulur; ancak dizilim çoğu zaman okunabilirlik için baş kuantum sayısına göre gruplandırılarak (...3d 4s...) yeniden yazılır. İkisi de aynı fiziksel durumu, farklı sunum sırasıyla ifade eder."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Hidrojen atomunda (tek elektronlu sistemde) bir orbitalin enerjisi yalnızca baş kuantum sayısına (n) bağlıdır; aynı n değerine sahip s, p, d alt kabukları hidrojen atomunda eşit enerjilidir. Ancak çok elektronlu atomlarda bu alt kabuklar arasında belirgin enerji farkı oluşur.",
    text: "Çok elektronlu atomlarda aynı n değerindeki alt kabuklar arasında enerji farkı oluşmasının temel nedeni nedir?",
    options: ["Alt kabuk şekillerinin çok elektronlu atomlarda değişmesi", "Çok elektronlu atomlarda çekirdek yükünün sürekli değişmesi", "Hidrojen atomunda elektron-elektron etkileşimi olduğu, çok elektronlu atomlarda ise olmadığı", "Elektron-elektron itmesi ve perdelenme etkisinin farklı şekillere sahip alt kabukları farklı derecede etkilemesi", "Bu fark yalnızca ölçüm hatasından kaynaklanır"],
    correct: 3,
    explain: "Çok elektronlu atomlarda, iç kabuktaki elektronlar dış kabuktaki elektronları farklı derecede perdeler (s elektronları çekirdeğe daha yakın bulunma olasılığı taşıdığından daha az perdelenir); bu, aynı n değerindeki s, p, d alt kabukları arasında enerji farkı oluşturur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir orbital enerji diyagramında 5s alt kabuğunun 4d'den önce, 4d'nin ise 5p'den önce dolduğu gösterilmektedir (5s < 4d < 5p).",
    text: "Bu sıralama n+l kuralıyla test edildiğinde tutarlı mıdır?",
    options: ["n+l kuralı bu üç alt kabuk için hesaplanamaz", "Evet; 5s (n+l=5), 4d (n+l=6) ve 5p (n+l=6, n=5) sıralaması n+l kuralıyla tutarlıdır (eşitlikte küçük n önce gelir)", "Hayır; n+l kuralı yalnızca ilk 3 enerji düzeyi için geçerlidir", "Hayır; n+l kuralına göre 4d, 5s'den önce dolmalıdır", "Sıralama n+l kuralıyla hiçbir ilişki taşımaz"],
    correct: 1,
    explain: "5s: n+l=5+0=5; 4d: n+l=4+2=6; 5p: n+l=5+1=6. 5s en düşük n+l değerine sahip olduğundan ilk dolar; 4d ve 5p eşit n+l değerine sahip olduğundan küçük n'ye sahip 4d önce dolar — bu, verilen sıralamayla tam olarak örtüşür."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir orbital, elektronun belirli bir bölgede bulunma olasılığının %90'ının içinde yer aldığı üç boyutlu bir sınır yüzeyi olarak tanımlanır; orbitalin 'kesin bir sınırı' yoktur, olasılık uzaklaştıkça azalarak sıfıra yaklaşır.",
    text: "Bu tanıma göre, bir orbitalin 'boyutu' hakkında en doğru ifade hangisidir?",
    options: ["Orbital boyutu, keskin bir sınır değil, olasılığın belirli bir eşiğe göre seçildiği bir bölgeyi ifade eder", "Orbitalin boyutu, çekirdeğin fiziksel boyutuyla birebir aynıdır", "Orbitalin dışında elektron bulunma olasılığı tam olarak sıfırdır ve asla değişmez", "Orbital boyutu yalnızca s orbitalleri için tanımlanabilir", "Orbital boyutu, elektronun kütlesine göre belirlenir"],
    correct: 0,
    explain: "Orbital, elektronun keskin bir sınır içinde 'hapsedildiği' bir bölge değil, olasılık yoğunluğunun belirli bir eşiğin (genellikle %90) üzerinde olduğu bölgeyi temsil eden bir sınır yüzeyidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    table: {
      headers: ["Alt kabuk", "Orbital sayısı", "Maksimum elektron sayısı"],
      rows: [
        ["s", "1", "2"],
        ["p", "3", "6"],
        ["d", "5", "10"],
        ["f", "7", "14"]
      ],
      caption: "Alt kabuk türlerine göre orbital ve maksimum elektron sayıları"
    },
    text: "Tablodaki örüntüye göre, eğer bir 'g' alt kabuğu olsaydı (9 orbital içerdiği varsayılırsa) maksimum kaç elektron alabilirdi?",
    options: ["20", "18", "16", "22", "24"],
    correct: 0,
    explain: "Tablodaki örüntüye göre her orbital 2 elektron alabildiğinden, 9 orbitalli bir g alt kabuğu 9×2=18... aslında g alt kabuğu gerçekte 9 orbital içerir ve 18 elektron alır; ancak örüntüde orbital sayısı her adımda 2 artmaktadır (1,3,5,7,9) ve elektron sayısı da 2,6,10,14,18 şeklinde ilerler, dolayısıyla doğru cevap 18'dir."
  },

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 2p alt kabuğundaki üç orbital (2px, 2py, 2pz), uzayda birbirine dik üç eksen boyunca yönlenmiştir; şekilleri ve enerjileri özdeştir, yalnızca yönelimleri farklıdır.",
    text: "Bu üç orbitalin özdeş enerjiye sahip olmasının temel nedeni nedir?",
    options: ["Enerjinin yalnızca orbital şekline değil, orbitalin rengine bağlı olması", "Üçünün farklı çekirdek yüküne sahip olması", "Üçünün farklı sayıda elektron içermesi", "Bu üç orbitalin gerçekte tek bir orbital olması", "Üçünün de aynı baş kuantum sayısı (n) ve aynı açısal momentum kuantum sayısına (l) sahip olması, yalnızca manyetik kuantum sayısının farklı olması"],
    correct: 4,
    explain: "px, py, pz orbitalleri aynı n ve l değerine sahiptir; yalnızca manyetik kuantum sayısı (yönelim) farklıdır. Enerji n ve l'ye bağlı olduğundan, bu üç orbital özdeş enerjilidir (dejenere)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun elektron dizilimi belirlenirken önce alt kabuklar enerji sırasına göre doldurulur, ardından dizilim genellikle baş kuantum sayısına göre yeniden gruplandırılarak yazılır. Örneğin demirin (Fe, 26 elektron) dolma sırası ...4s 3d... iken, yazım sırası genellikle ...3d 4s... şeklindedir.",
    text: "Bu iki farklı sıralama (dolma sırası ve yazım sırası) neden farklıdır?",
    options: ["Dolma sırası yalnızca iyonlar için geçerlidir", "İki sıra arasındaki fark bir yazım hatasından kaynaklanır", "Dolma sırası fiziksel süreci (hangi orbitalin önce elektron aldığını) yansıtırken, yazım sırası okunabilirlik için elektronları baş kuantum sayısına göre gruplandırır", "Yazım sırası, atomun gerçek fiziksel durumunu değiştirir", "Bu iki sıralama arasında hiçbir sistematik neden yoktur"],
    correct: 2,
    explain: "Elektronlar fiziksel olarak enerji sırasına göre (Aufbau ilkesi, ör. 4s önce 3d) yerleşir; ancak dizilim yazılırken genellikle okunabilirlik ve kimyasal yorumlama kolaylığı için baş kuantum sayısına göre gruplandırılır (3d, 4s'den önce yazılır). Bu, atomun fiziksel durumunu değiştirmez, yalnızca sunum biçimidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir orbital enerji karşılaştırmasında, aynı baş kuantum sayısına (n=4) sahip 4s, 4p, 4d ve 4f alt kabukları söz konusudur.",
    text: "Bu dört alt kabuk enerjilerine göre küçükten büyüğe nasıl sıralanır?",
    options: ["Dördü de eşit enerjilidir", "4f < 4d < 4p < 4s", "4s < 4d < 4p < 4f", "4s < 4p < 4d < 4f", "4p < 4s < 4f < 4d"],
    correct: 3,
    explain: "Aynı n değerinde açısal momentum kuantum sayısı (l) arttıkça enerji artar: s(l=0) < p(l=1) < d(l=2) < f(l=3); bu nedenle sıralama 4s < 4p < 4d < 4f şeklindedir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir öğretim aracında, bir atomun temel hâl elektron dizilimini bulmak için 'diyagonal kural' adı verilen bir görsel yöntem kullanılır: alt kabuklar köşegen çizgiler boyunca izlenerek doğru dolma sırası elde edilir.",
    text: "Diyagonal kuralın temelde hangi matematiksel ilkeyle örtüştüğü söylenebilir?",
    options: ["n+l kuralıyla; her iki yöntem de aynı enerji sıralamasını farklı görsel/sayısal araçlarla ifade eder", "Yalnızca baş kuantum sayısıyla, l değerini hiç dikkate almaz", "Yalnızca elektron sayısıyla, kuantum sayılarıyla ilgisizdir", "Pauli dışlama ilkesiyle, enerji sıralamasıyla ilgisizdir", "Diyagonal kural, n+l kuralıyla çelişen farklı bir sonuç verir"],
    correct: 0,
    explain: "Diyagonal kural (köşegen kuralı), n+l kuralının görsel bir temsilidir; her iki yöntem de alt kabukları aynı mantıkla (küçük n+l önce, eşitlikte küçük n önce) sıralar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 3s orbitali, elektronun çekirdeğe çok yakın küçük bir bölgede bulunma olasılığına ek olarak, çekirdekten uzakta ikincil küçük olasılık bölgeleri de gösterir (düğüm yüzeyleri arasında); bu, 2s ve 1s orbitallerinde görülmeyen bir özelliktir.",
    text: "Bu 'düğüm yüzeyi' sayısındaki artışın baş kuantum sayısıyla (n) ilişkisi en doğru şekilde nasıl ifade edilir?",
    options: ["Baş kuantum sayısı arttıkça bir orbitaldeki düğüm yüzeyi sayısı da artar", "Düğüm yüzeyi sayısı, baş kuantum sayısından tamamen bağımsızdır", "Düğüm yüzeyi yalnızca p orbitallerinde bulunur, s orbitallerinde hiç bulunmaz", "Baş kuantum sayısı arttıkça düğüm yüzeyi sayısı azalır", "Düğüm yüzeyi sayısı, elektronun spinine bağlıdır"],
    correct: 0,
    explain: "Bir orbitaldeki düğüm yüzeyi (elektron bulunma olasılığının sıfır olduğu bölge) sayısı, baş kuantum sayısı (n) arttıkça artar; bu, orbitalin karmaşıklığının ve enerjisinin n ile birlikte arttığının bir göstergesidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun elektron dizilimi belirlenirken, bazı öğrenciler yanlışlıkla tüm elektronların önce en düşük n değerine sahip kabuğu tamamen doldurduğunu (örneğin n=1 kabuğu tam dolmadan n=2'ye geçilmediğini) düşünebilir.",
    text: "Bu yaygın kavram yanılgısı neden hatalıdır?",
    options: ["Çünkü dolma sırası enerjiye göre belirlenir; bazı yüksek n'li alt kabuklar (örn. 4s), bazı düşük n'li alt kabuklardan (örn. 3d) önce dolabilir", "Çünkü bu yanılgı aslında doğrudur, tüm kabuklar sırayla tam dolar", "Çünkü elektronlar hiçbir zaman belirli bir sıraya göre dolmaz, tamamen rastgeledir", "Çünkü n=1 kabuğu hiçbir zaman tam dolamaz", "Çünkü bu yanılgı yalnızca iyonlar için geçerlidir, nötr atomlar için doğrudur"],
    correct: 0,
    explain: "Elektron dolma sırası, kabuk (n) bazında değil alt kabuk (n+l) bazında enerjiye göre belirlenir; bu nedenle 4s gibi bir alt kabuk, 3d gibi daha düşük n'li fakat daha yüksek enerjili bir alt kabuktan önce dolabilir — n=1 kabuğunun tamamen dolması, n=2'ye geçiş için ön koşul değildir (zaten n=1 yalnızca 1s içerir ve hızla dolar)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    orbitalBoxes: {
      subshells: [
        { label: "3p", electrons: [2, 2, 2] },
        { label: "4s", electrons: [0] }
      ],
      caption: "3p alt kabuğu tam dolu, 4s alt kabuğu boş"
    },
    context: "Görseldeki diyagramda 3p alt kabuğu tamamen doludur (6 elektron), 4s alt kabuğu ise henüz boştur; bu, argon (Ar) atomunun elektron dizilimine karşılık gelir.",
    text: "Bir sonraki elektron eklendiğinde (potasyum, K, 19. elektron) bu elektronun hangi alt kabuğa yerleşmesi beklenir?",
    options: ["4f alt kabuğuna", "3d alt kabuğuna", "4p alt kabuğuna", "3p alt kabuğuna (zaten dolu olmasına rağmen)", "4s alt kabuğuna"],
    correct: 4,
    explain: "n+l kuralına göre 4s (n+l=4), 3d'den (n+l=5) daha düşük enerjilidir; bu nedenle argon konfigürasyonundan sonraki elektron 3d'ye değil 4s alt kabuğuna yerleşir (potasyumun dizilimi [Ar] 4s¹'dir)."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Krom (Cr) atomunun beklenen elektron dizilimi [Ar] 4s² 3d⁴ olması gerekirken, gerçekte gözlemlenen dizilim [Ar] 4s¹ 3d⁵'tir; yani bir elektron 4s'den 3d'ye 'kaymış' görünmektedir.",
    text: "Bu sapmanın en olası açıklaması hangisidir?",
    options: ["3d alt kabuğu krom için 4s'den çok daha düşük enerjilidir, bu yüzden fark yoktur", "n+l kuralı krom için tamamen geçersizdir ve hiçbir açıklama yapılamaz", "Krom atomunda 4s alt kabuğu hiç elektron alamaz", "Bu, bir ölçüm hatasından kaynaklanmaktadır, gerçek dizilim [Ar] 4s² 3d⁴'tür", "Yarı dolu (d⁵) bir alt kabuğun, elektronların simetrik dağılımından kaynaklanan ek bir kararlılık kazanması, 4s ve 3d arasındaki küçük enerji farkını aşmaya yetmiştir"],
    correct: 4,
    explain: "4s ve 3d alt kabukları arasındaki enerji farkı oldukça küçüktür; yarı dolu (d⁵) veya tam dolu (d¹⁰) alt kabukların simetrik elektron dağılımından kaynaklanan ekstra kararlılık, bu küçük enerji farkını aşarak bir elektronun 4s'den 3d'ye geçmesine yol açabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    table: {
      headers: ["Alt kabuk", "n", "l", "n+l"],
      rows: [
        ["4d", "4", "2", "6"],
        ["5p", "5", "1", "6"],
        ["6s", "6", "0", "6"],
        ["4f", "4", "3", "7"]
      ],
      caption: "n+l değeri eşit veya yakın olan dört alt kabuk"
    },
    text: "Tabloya göre, n+l değeri 6 olan üç alt kabuğun (4d, 5p, 6s) doğru enerji sıralaması ile 4f'nin bu üçlü ile karşılaştırması sırasıyla en doğru hangisidir?",
    options: ["4d < 5p < 6s (eşit n+l'de küçük n önce); 4f (n+l=7) bu üçünün hepsinden daha yüksek enerjilidir", "6s < 5p < 4d; 4f üçünden de düşük enerjilidir", "5p < 4d < 6s; 4f ile karşılaştırma yapılamaz", "Üç alt kabuk da birebir eşit enerjilidir, 4f de bunlarla eşittir", "4d < 5p < 6s; 4f, 6s'den daha düşük enerjilidir"],
    correct: 0,
    explain: "n+l değeri eşit olan alt kabuklarda küçük n önce gelir: 4d(n=4) < 5p(n=5) < 6s(n=6). n+l=7 olan 4f ise n+l=6 olan üç alt kabuktan daha yüksek enerjilidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atom iyonlaştığında (örneğin bir geçiş metali katyon oluşturduğunda), elektronlar önce 4s alt kabuğundan uzaklaştırılır, 3d'den değil — bu, nötr atomda 4s'nin 3d'den önce dolmasına rağmen geçerlidir.",
    text: "Bu görünüşteki çelişki en doğru şekilde nasıl açıklanır?",
    options: ["İyonlaşma sırası, dolma sırasıyla her zaman birebir aynı olmak zorundadır", "Bu bir çelişkidir ve bilimsel olarak açıklanamaz", "4s alt kabuğu iyonlarda hiç var olmaz", "Nötr atomda verilen dolma sırası yanlıştır, gerçekte 3d önce dolar", "Elektronlar bir kez 3d'ye yerleştikten sonra, dolu 3d alt kabuğunun artan elektron-elektron itmesi 4s'nin enerjisini 3d'nin üzerine çıkarır; iyonlaşma bu yeni (dolu atom) enerji sırasına göre gerçekleşir"],
    correct: 4,
    explain: "Boş orbitallere elektron eklerken (nötr atom oluşumu) 4s, 3d'den önce dolar; ancak dolu bir 3d alt kabuğu bulunduğunda, artan elektron-elektron itmesi 4s elektronlarının enerjisini 3d'nin üzerine çıkarır. Bu nedenle iyonlaşırken önce 4s elektronları uzaklaştırılır — dolma sırası ile boşalma sırası aynı olmak zorunda değildir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    orbitalBoxes: {
      subshells: [
        { label: "3d", electrons: [2, 2, 1, 0, 0] },
        { label: "4s", electrons: [2] }
      ],
      caption: "Bir geçiş metali atomunun hatalı (Hund kuralına aykırı) 3d dizilimi"
    },
    context: "Görseldeki diyagramda 5 elektron, 3d alt kabuğunun 5 orbitaline dağıtılırken önce iki orbital eşleştirilmiş (her birine 2 elektron), üç orbital ise boş bırakılmıştır.",
    text: "Bu düzenlemedeki temel hata nedir ve doğru (Hund kuralına uygun) düzenleme nasıl olmalıdır?",
    options: ["Doğru düzenlemede tüm 5 elektron tek bir orbitale yerleştirilmelidir", "Düzenleme tamamen doğrudur, herhangi bir hata yoktur", "Hata, elektronların eşleştirilmeden önce tüm orbitallere dağıtılmaması; doğru düzenlemede 5 elektron 5 orbitale birer tane, aynı yönde spinle yerleştirilmelidir", "Hata, toplam elektron sayısının yanlış olmasıdır", "Hata, 4s alt kabuğunun dolu olmasıdır, 4s boş olmalıydı"],
    correct: 2,
    explain: "Hund kuralına göre, eşit enerjili orbitaller doldurulurken elektron eşleştirmesi (aynı orbitalde iki elektron) yapılmadan önce her orbitale birer elektron yerleştirilmelidir; bu, elektron-elektron itmesini minimize ederek en kararlı düzenlemeyi sağlar. Görseldeki düzenleme bu kurala aykırıdır ve daha yüksek enerjilidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bakır (Cu) atomunun beklenen elektron dizilimi [Ar] 4s² 3d⁹ olması gerekirken, gerçekte gözlemlenen dizilim [Ar] 4s¹ 3d¹⁰'dur.",
    text: "Bu durum, krom (Cr) örneğiyle (4s² 3d⁴ yerine 4s¹ 3d⁵) karşılaştırıldığında hangi ortak ilkeyi paylaşır?",
    options: ["Bu sapma yalnızca bakırda gerçek, kromda ise teorik bir varsayımdır", "Her iki durumda da, tam dolu (d¹⁰) veya yarı dolu (d⁵) bir alt kabuğun simetrik elektron dağılımından kaynaklanan ekstra kararlılık, beklenen Aufbau sırasından sapmaya yol açmıştır", "Krom ve bakırın her ikisinde de bu sapma, ölçüm hatasından kaynaklanmaktadır", "Ortak ilke, her iki elementin de aynı grupta bulunmasıdır, elektron diziliminin enerjiyle ilgisi yoktur", "İki örnek arasında hiçbir ortak ilke yoktur, tamamen farklı nedenlerle açıklanır"],
    correct: 1,
    explain: "Krom (d⁵, yarı dolu) ve bakır (d¹⁰, tam dolu) örneklerinin ikisi de aynı ilkeyi paylaşır: simetrik (yarı dolu veya tam dolu) bir d alt kabuğunun kazandırdığı ekstra kararlılık, 4s'den 3d'ye bir elektron kaymasını enerji açısından avantajlı hâle getirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir öğretim materyalinde şu iddia tartışılmaktadır: 'n+l kuralı, orbital enerjilerini tahmin etmede kullanışlı bir araçtır fakat mutlak bir fiziksel yasa değildir; krom ve bakır gibi istisnalar, kuralın yaklaşık bir model olduğunu gösterir.'",
    text: "Bu değerlendirme, bilimsel modellerin doğasıyla ilgili en doğru hangi genellemeyi destekler?",
    options: ["Bilimsel modeller istisna içerdiğinde artık kullanılmamalıdır", "Yararlı bir model, çoğu durumda doğru tahminler yapabilir; ancak bazı istisnaların varlığı modelin basitleştirilmiş/yaklaşık bir araç olduğunu, mutlak bir yasa olmadığını gösterir", "n+l kuralı hiçbir zaman istisna içermez, krom ve bakır örnekleri hatalıdır", "İstisnaların varlığı, orbital enerjisi kavramının bilimsel olmadığını gösterir", "Bir modelde herhangi bir istisna bulunması, modelin tamamen değersiz olduğu anlamına gelir"],
    correct: 1,
    explain: "n+l kuralı, elektron-elektron itmesi gibi ek etkileri basitleştirerek çoğu element için doğru sıralama tahmini yapar; ancak krom/bakır gibi istisnaların varlığı, kuralın yaklaşık bir model olduğunu, atomun gerçek davranışının daha karmaşık etkileşimlere bağlı olduğunu gösterir — bu, bilimsel modellerin genellikle basitleştirilmiş açıklayıcı araçlar olduğunu örnekler."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir karşılaştırmada, hidrojen atomunun 2s ve 2p orbitalleri tam olarak eşit enerjiye sahipken, lityum atomunun 2s orbitali 2p'den belirgin şekilde daha düşük enerjilidir.",
    text: "Bu farkın en olası nedeni nedir?",
    options: ["Lityum atomunda 2p orbitalinin bulunmaması", "Hidrojen ve lityum atomlarının çekirdek yükünün aynı olması", "Lityumda 1s elektronlarının 2s ve 2p elektronlarını farklı derecede perdelemesi; 2s elektronunun çekirdeğe yakın bulunma olasılığı daha yüksek olduğundan daha az perdelenip daha düşük enerjili kalması", "Hidrojende elektron-elektron etkileşimi olduğu, lityumda ise olmadığı", "Bu fark yalnızca ölçüm belirsizliğinden kaynaklanmaktadır"],
    correct: 2,
    explain: "Hidrojende tek elektron olduğundan perdeleme etkisi yoktur ve 2s-2p enerjileri eşittir. Lityumda ise iç kabuktaki (1s) elektronlar dış kabuk elektronlarını perdeler; 2s elektronunun çekirdeğe yaklaşma olasılığı 2p'den yüksek olduğundan daha az perdelenir ve daha düşük enerjili kalır — bu, çok elektronlu atomlarda alt kabuk ayrımının kaynağıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun elektron dizilimini n+l kuralıyla tahmin eden bir öğretim aracı, molibden (Mo, 42 elektron) için beklenen [Kr] 5s² 4d⁴ dizilimini önermektedir; ancak molibdenin gerçek dizilimi [Kr] 5s¹ 4d⁵'tir.",
    text: "Bu örnek, krom örneğiyle (aynı grupta, bir üst periyotta) karşılaştırıldığında hangi çıkarımı destekler?",
    options: [
      "Yarı dolu d alt kabuğunun kazandırdığı ekstra kararlılık eğilimi, aynı grupta farklı periyotlarda da (krom ve molibdende) tutarlı bir örüntü olarak tekrarlanabilir",
      "Molibden ve krom arasında hiçbir ortak örüntü yoktur, tamamen farklı elementlerdir",
      "n+l kuralı yalnızca 3. periyot elementleri için tanımlanmıştır, 5. periyotta geçersizdir",
      "Molibdendeki sapma, krom örneğinden tamamen farklı bir nedenden kaynaklanmaktadır",
      "Bu örnek, n+l kuralının hiçbir zaman doğru sonuç vermediğini kanıtlar"
    ],
    correct: 0,
    explain: "Krom (3d⁵4s¹) ve molibden (4d⁵5s¹), aynı grupta (6B) bulunan ve benzer bir istisna örüntüsü sergileyen elementlerdir; bu, yarı dolu d alt kabuğunun kararlılık avantajının yalnızca tek bir elemente özgü rastlantısal bir durum olmadığını, gruplar arasında tutarlı bir kimyasal örüntü olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir araştırmacı, farklı elementlerin 4s ve 3d alt kabukları arasındaki enerji farkını ölçtüğünde, bu farkın atom numarası arttıkça (soldan sağa periyotta ilerledikçe) giderek küçüldüğünü, hatta bazı elementlerde 3d'nin 4s'nin altına indiğini gözlemlemiştir.",
    text: "Bu bulgu, orbital enerjilerinin sabit olmadığı fikrini en doğru şekilde nasıl destekler?",
    options: ["4s ve 3d arasındaki fark yalnızca krom ve bakırda değişir, başka hiçbir elementte değişmez", "Orbital enerjileri her elementte birebir aynıdır, bu bulgu hatalıdır", "Bir alt kabuğun enerjisi yalnızca kuantum sayılarına değil, aynı zamanda o anki çekirdek yüküne ve diğer elektronların perdeleme etkisine (yani hangi atoma/iyona ait olduğuna) bağlıdır", "Atom numarasının orbital enerjisiyle hiçbir ilgisi yoktur", "Bu bulgu yalnızca teorik bir varsayımdır, deneysel dayanağı yoktur"],
    correct: 2,
    explain: "4s-3d enerji farkının atom numarasına göre değişmesi, orbital enerjisinin yalnızca soyut kuantum sayılarıyla değil, o atomdaki gerçek çekirdek yükü ve elektron-elektron etkileşimleriyle de belirlendiğini gösterir; bu nedenle n+l kuralı gibi genel kurallar yaklaşık bir rehber olup, kesin enerji sıralaması elementten elemente değişebilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    table: {
      headers: ["Element", "Beklenen dizilim (n+l kuralına göre)", "Gözlenen gerçek dizilim"],
      rows: [
        ["Krom (Cr)", "[Ar] 4s² 3d⁴", "[Ar] 4s¹ 3d⁵"],
        ["Bakır (Cu)", "[Ar] 4s² 3d⁹", "[Ar] 4s¹ 3d¹⁰"],
        ["Molibden (Mo)", "[Kr] 5s² 4d⁴", "[Kr] 5s¹ 4d⁵"],
        ["Gümüş (Ag)", "[Kr] 5s² 4d⁹", "[Kr] 5s¹ 4d¹⁰"]
      ],
      caption: "n+l kuralının istisnası olan dört geçiş metali"
    },
    text: "Tablodaki dört istisnayı birlikte değerlendirdiğimizde en doğru ve kapsamlı genelleme hangisidir?",
    options: ["n+l kuralı bu dört element için tamamen geçersizdir ve hiçbir öngörüde bulunamaz", "Bu dört istisna birbirinden bağımsız, rastgele oluşmuş, hiçbir ortak örüntü taşımayan ayrı olgulardır", "İstisnalar yalnızca 4. periyot elementlerinde (Cr, Cu) görülür, 5. periyotta (Mo, Ag) görülmez", "Beklenen dizilimden bir elektron eksik olan (d⁴ veya d⁹) durumlarda, o elektronun s'den d'ye kayarak alt kabuğu yarı dolu (d⁵) veya tam dolu (d¹⁰) hâle getirmesi enerji açısından avantajlıdır; bu örüntü farklı periyotlarda tekrarlanır", "Bu istisnalar yalnızca ölçüm hatalarından kaynaklanmaktadır"],
    correct: 3,
    explain: "Dört örnekte de (Cr, Cu, Mo, Ag) beklenen dizilim d⁴ veya d⁹ iken, gerçek dizilimde bir 4s/5s elektronu d alt kabuğuna kayarak onu yarı dolu (d⁵) veya tam dolu (d¹⁰) hâle getirmektedir; bu, simetrik d alt kabuğu kararlılığının farklı periyotlarda tekrarlanan tutarlı bir kimyasal örüntü olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 3d orbitalindeki elektron sayısı arttıkça (aynı periyotta soldan sağa ilerledikçe), 3d orbitallerinin enerjisi 4s orbitaline göre kademeli olarak düşmektedir; skandiyumda (Sc) 4s hâlâ biraz daha düşükken, çinkoya (Zn) doğru ilerledikçe fark tersine dönmeye başlar.",
    text: "Bu kademeli değişim, orbital enerjisi kavramıyla ilgili hangi önemli noktayı vurgular?",
    options: ["Bu kademeli değişimin periyodik tablodaki konumla hiçbir ilgisi yoktur", "Orbital enerjisi her atomda birebir aynı sabit bir değerdir", "Bu değişim yalnızca 3d orbitalinde görülür, başka hiçbir orbitalde görülmez", "4s orbitalinin enerjisi hiçbir zaman değişmez, yalnızca 3d değişir", "Orbital enerjisi, aynı alt kabuk türü için bile atomdan atoma (hatta aynı periyot içinde elementten elemente) değişen dinamik bir büyüklüktür, sabit bir sayı değildir"],
    correct: 4,
    explain: "3d-4s enerji farkının aynı periyot boyunca kademeli olarak değişmesi, orbital enerjisinin evrensel sabit bir değer olmadığını, o anki çekirdek yükü ve elektron sayısına bağlı olarak atomdan atoma değiştiğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir tartışmada şu soru sorulmaktadır: 'Eğer bir öğretim aracı yalnızca n+l kuralını mutlak bir yasa olarak öğretip hiçbir istisnadan bahsetmezse, öğrencilerde ne tür bir kavram yanılgısı oluşabilir?'",
    text: "Bu sorunun en isabetli cevabı hangisidir?",
    options: ["Böyle bir öğretim yaklaşımının hiçbir olumsuz sonucu olmaz, çünkü istisnalar önemsizdir", "Öğrenciler, krom ve bakır gibi gerçek elementlerin dizilimini n+l kuralıyla hesaplarken sürekli 'hata' yapacaklarını düşünebilir; oysa bu bir hesaplama hatası değil, kuralın modelleyemediği ek bir kararlılık etkisidir", "Öğrenciler bu durumda n+l kuralını asla öğrenemez", "İstisnalardan bahsetmemek, öğrenmeyi hızlandıran doğru bir yöntemdir ve kavram yanılgısına yol açmaz", "Bu durumun kavram yanılgısıyla hiçbir ilgisi yoktur"],
    correct: 1,
    explain: "Bir kuralın istisnalarından bahsedilmemesi, öğrencilerin gerçek elementlerin (Cr, Cu gibi) beklenmedik dizilimlerini kendi hesaplama hataları sandığı bir kavram yanılgısına yol açabilir; oysa bu sapmalar kuralın basitleştirilmiş doğasından kaynaklanan bilinen istisnalardır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 4f orbitali, 5d ve 6s orbitallerine göre çekirdeğe daha yakın bir bölgede yoğunlaşmıştır (bu duruma 'lantanit büzülmesi' ile ilişkili bir etki eşlik eder); buna rağmen 4f'nin enerjisi 6s'den daha yüksektir.",
    text: "Bu görünüşteki çelişki (çekirdeğe daha yakın olmasına rağmen daha yüksek enerjili olması) en doğru şekilde nasıl açıklanır?",
    options: ["Bu bir çelişkidir ve mevcut atom teorisiyle açıklanamaz", "Orbital enerjisi yalnızca çekirdeğe uzaklıkla değil, orbitalin şekli, açısal momentumu (l) ve perdelenme etkileşimleriyle birlikte belirlenir; yakınlık tek başına düşük enerji garantisi vermez", "4f orbitali aslında 6s'den çekirdeğe daha uzaktır, verilen bilgi yanlıştır", "Enerji yalnızca çekirdeğe uzaklığa bağlıdır, bu nedenle 4f'nin 6s'den düşük enerjili olması gerekir", "Lantanit büzülmesinin orbital enerjisiyle hiçbir ilgisi yoktur"],
    correct: 1,
    explain: "Orbital enerjisi tek bir etkene (yalnızca çekirdeğe uzaklığa) indirgenemez; l değeri yüksek olan f orbitalleri karmaşık açısal momentum ve perdelenme etkileri nedeniyle, çekirdeğe görece yakın olsalar bile s orbitallerinden daha yüksek enerjili olabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun elektron dizilimini deneysel olarak doğrulamanın yollarından biri, atomun iyonlaşma enerjisini (bir elektronu uzaklaştırmak için gereken enerjiyi) ölçmektir; bir alt kabuktaki elektronlar ne kadar yüksek enerjili (çekirdeğe daha az bağlı) ise, o elektronu uzaklaştırmak o kadar az enerji gerektirir.",
    text: "Bu ilişkiye dayanarak, krom atomunun (gerçek dizilim [Ar] 4s¹ 3d⁵) ilk iyonlaşma enerjisiyle ilgili en doğru öngörü hangisidir?",
    options: [
      "İlk uzaklaştırılan elektron, en yüksek enerjili (en az bağlı) alt kabuk olan 4s'den çıkarılacaktır",
      "İlk uzaklaştırılan elektron her zaman en düşük enerjili alt kabuktan (1s) çıkarılır",
      "İyonlaşma enerjisi, elektron dizilimiyle hiçbir ilişki taşımaz",
      "Krom atomunda tüm elektronlar aynı anda uzaklaştırılır",
      "İlk uzaklaştırılan elektron 3d alt kabuğundan çıkarılır çünkü 3d, 4s'den daha yüksek enerjilidir"
    ],
    correct: 0,
    explain: "İyonlaşırken en az bağlı (en yüksek enerjili, dolu 3d varlığında enerjisi 3d'nin üzerine çıkmış) 4s elektronu ilk uzaklaştırılan elektrondur; bu, dizilimin deneysel olarak iyonlaşma enerjisi ölçümleriyle tutarlı olduğunu doğrular."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir bilim yazısında şu iddia savunulmaktadır: 'Orbital enerjisi kavramı, atomun tek bir 'gerçek' enerji sıralamasına sahip olduğu izlenimini verebilir; oysa gerçekte enerji sıralaması, atomun o anki elektron sayısına, yüküne (nötr/iyon) ve hatta hangi elektronun hangi alt kabukta olduğuna bağlı olarak değişebilen bağlamsal bir büyüklüktür.'",
    text: "Bu iddia, krom istisnası ve iyonlaşma sırasındaki 4s-3d tersine dönmesi örnekleriyle birlikte değerlendirildiğinde nasıl bir sonuca varılır?",
    options: ["Krom istisnası ve iyonlaşma tersine dönmesi birbiriyle çelişen, ilgisiz olgulardır", "İddia bu örneklerle çürütülür; orbital enerjisi her koşulda sabittir", "İddia bu örneklerle güçlü şekilde desteklenir; orbital enerji sıralaması sabit bir tablo değil, atomun durumuna göre değişen bağlamsal bir kavramdır", "Bu örnekler yalnızca krom için geçerlidir, genel bir sonuca varılamaz", "İddia, deneysel kanıtla hiçbir şekilde test edilemez"],
    correct: 2,
    explain: "Krom'un beklenmedik dizilimi (n+l kuralının basit tahmininden sapma) ve iyonlaşma sırasında 4s'nin 3d'den önce boşalması (nötr atomda dolma sırasının tersi), orbital enerjisinin sabit bir sıralama olmadığını, atomun elektron sayısı ve yüküne bağlı olarak değişen bağlamsal bir büyüklük olduğunu güçlü şekilde destekler."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir karşılaştırmada, demir (Fe, [Ar] 4s² 3d⁶) ile krom ([Ar] 4s¹ 3d⁵) elektron dizilimleri incelenmektedir; demirde n+l kuralının beklediği dizilim gerçekleşirken, kromda gerçekleşmemektedir.",
    text: "Demirin n+l kuralına uyması ile kromun uymaması arasındaki farkı en iyi açıklayan çıkarım hangisidir?",
    options: ["Bu fark tamamen rastgele olup hiçbir yapısal açıklaması yoktur", "Demir ve krom arasında hiçbir yapısal fark yoktur, ikisi de aynı kurala uyar", "n+l kuralı yalnızca demir gibi elementler için geçerlidir", "Krom'un atom numarası demirden büyük olduğu için farklı davranır", "d⁶ dizilimi (demir) tam dolu veya yarı dolu bir simetriye sahip değildir, dolayısıyla ekstra kararlılık kazanma avantajı yoktur; oysa krom bir elektron kaydırarak d⁵ (yarı dolu) simetrisine ulaşabilmektedir"],
    correct: 4,
    explain: "Krom'da bir elektronun 4s'den 3d'ye kayması, d alt kabuğunu yarı dolu (d⁵, simetrik ve kararlı) hâle getirir; demirde ise böyle bir kayma d⁶'dan d⁷'ye geçişle sonuçlanır ki bu da simetrik/kararlı bir yapı değildir, dolayısıyla demir n+l kuralının öngördüğü sıradan dizilimi korur."
  }
],
  "yerbulma": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir elementin elektron dizilimi [Ne] 3s² 3p³ şeklindedir.",
    text: "Bu elementin periyodik tablodaki periyodu ve grubu sırasıyla nedir?",
    options: ["3. periyot, 15. grup (VA)", "2. periyot, 15. grup", "3. periyot, 13. grup", "4. periyot, 15. grup", "3. periyot, 5. grup"],
    correct: 0,
    explain: "En yüksek baş kuantum sayısı (n=3) periyodu, değerlik elektron sayısı (3s²3p³ = 5 elektron) ise 15. grubu (VA) belirler."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element periyodik tabloda 2. periyot, 16. grupta (VIA) yer almaktadır.",
    text: "Bu elementin değerlik kabuğu elektron dizilimi hangisidir?",
    options: ["2s² 2p²", "2s¹ 2p⁵", "3s² 3p⁴", "2s² 2p⁶", "2s² 2p⁴"],
    correct: 4,
    explain: "2. periyot, baş kuantum sayısının n=2 olduğunu; 16. grup ise değerlik kabuğunda 6 elektron bulunduğunu gösterir; bu nedenle dizilim 2s²2p⁴'tür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda elementler, en son elektronun yerleştiği alt kabuk türüne göre s, p, d ve f blok olarak sınıflandırılır.",
    text: "Değerlik dizilimi 3d⁶ 4s² olan bir element hangi bloğa aittir?",
    options: ["s blok", "f blok", "p blok", "d blok", "Hiçbirine, sınıflandırılamaz"],
    correct: 3,
    explain: "En son elektronun yerleştiği alt kabuk d (3d) olduğundan bu element d bloğa aittir (geçiş metali)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    periodicHighlight: {
      caption: "Periyodik tabloda vurgulanan grup (18. grup / VIIIA)",
      cells: [
        { period: 1, group: 18, symbol: "He", highlighted: true },
        { period: 2, group: 18, symbol: "Ne", highlighted: true },
        { period: 3, group: 18, symbol: "Ar", highlighted: true },
        { period: 4, group: 18, symbol: "Kr", highlighted: true }
      ]
    },
    context: "Görselde vurgulanan grup, değerlik kabuğu tamamen dolu (oktet, helyum için düet) olan elementleri içerir.",
    text: "Bu grup hangi ortak adla anılır?",
    options: ["Alkali metaller", "Soy gazlar (asal gazlar)", "Halojenler", "Toprak alkali metaller", "Geçiş metalleri"],
    correct: 1,
    explain: "Değerlik kabuğu tamamen dolu olan ve kimyasal olarak kararlı/tepkimeye girmeye eğilimi düşük olan 18. grup elementleri soy gazlar (asal gazlar) olarak adlandırılır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir atom, elektron alarak kararlı bir soy gaz elektron dizilimine ulaşmaktadır; örneğin flor (F) bir elektron alarak neon (Ne) ile aynı dizilime ulaşır.",
    text: "Bu şekilde oluşan iyonun yükü ve türü nedir?",
    options: ["F⁺, katyon (pozitif yüklü)", "F²⁺, katyon", "F²⁻, anyon", "F, nötr atom (değişim yok)", "F⁻, anyon (negatif yüklü)"],
    correct: 4,
    explain: "Flor bir elektron alarak negatif yüklü hâle gelir (F⁻); elektron alarak oluşan negatif yüklü iyonlara anyon denir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir sodyum atomu (Na, [Ne] 3s¹) bir elektron kaybederek Na⁺ iyonuna dönüşür.",
    text: "Na⁺ iyonunun elektron dizilimi hangisidir?",
    options: ["[Ne] 3s¹ (değişmeden kalır)", "[Ne] 3s²", "[Ar]", "1s² 2s² 2p⁵", "[Ne] (yani 1s² 2s² 2p⁶)"],
    correct: 4,
    explain: "Na atomu tek değerlik elektronunu (3s¹) kaybettiğinde geriye [Ne] elektron dizilimi (1s² 2s² 2p⁶) kalır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda bir elementin bulunduğu periyot numarası, o elementin değerlik kabuğundaki baş kuantum sayısına (n) eşittir.",
    text: "Değerlik kabuğunda n=4 olan bir element hangi periyottadır?",
    options: ["4. periyot", "3. periyot", "5. periyot", "2. periyot", "Periyot numarası n ile ilişkili değildir"],
    correct: 0,
    explain: "Periyot numarası doğrudan değerlik kabuğunun baş kuantum sayısına eşittir; n=4 olduğundan element 4. periyottadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir elementin değerlik elektron dizilimi 2s² 2p⁶ şeklindedir; yani değerlik kabuğu tamamen doludur.",
    text: "Bu element hangi grupta yer alır?",
    options: ["1. grup (alkali metal)", "17. grup (halojen)", "18. grup (soy gaz)", "2. grup (toprak alkali)", "14. grup"],
    correct: 2,
    explain: "Değerlik kabuğu tamamen dolu (2s²2p⁶, 8 elektron) olan elementler 18. grupta, soy gazlar arasında yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda s ve p bloklarındaki elementler 'baş grup elementleri' olarak adlandırılırken, d bloktaki elementler 'geçiş metalleri' olarak adlandırılır.",
    text: "Değerlik dizilimi 4s² olan bir element hangi kategoriye girer?",
    options: ["Geçiş metali (d blok)", "Soy gaz", "İç geçiş metali (f blok)", "Baş grup elementi (s blok)", "Halojen"],
    correct: 3,
    explain: "En son elektronların yerleştiği alt kabuk s (4s) olduğundan bu element s bloğa, dolayısıyla baş grup elementlerine aittir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Magnezyum (Mg) atomu, iki değerlik elektronunu (3s²) kaybederek kararlı bir iyon oluşturur.",
    text: "Bu şekilde oluşan iyon hangisidir?",
    options: ["Mg²⁻", "Mg⁺", "Mg²⁺", "Mg⁻", "Mg (değişmez)"],
    correct: 2,
    explain: "Mg atomu iki elektron kaybettiğinde iki birim pozitif yük kazanır ve Mg²⁺ iyonuna dönüşür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir elementin tam elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ şeklindedir.",
    text: "Bu elementin değerlik elektron sayısı ve grubu sırasıyla nedir?",
    options: ["8 değerlik elektronu, 18. grup", "2 değerlik elektronu, 2. grup", "1 değerlik elektronu, 17. grup", "1 değerlik elektronu, 1. grup", "7 değerlik elektronu, 7. grup"],
    correct: 3,
    explain: "En dış kabuktaki (n=4) elektron sayısı 1 (4s¹) olduğundan bu element 1 değerlik elektronuna sahiptir ve 1. grupta (alkali metaller) yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda 1-2 ve 13-18. gruplar 'baş grup' (s ve p blok) elementlerini, 3-12. gruplar ise geçiş metallerini (d blok) içerir.",
    text: "17. grupta bulunan elementlerin ortak adı nedir?",
    options: ["Toprak alkali metaller", "Halojenler", "Alkali metaller", "Soy gazlar", "Lantanitler"],
    correct: 1,
    explain: "17. grup elementleri (F, Cl, Br, I...) halojenler olarak adlandırılır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir atomun ve bir iyonun elektron dizilimleri özdeş olduğunda (örneğin Na⁺ ile Ne atomu), bu iki tanecik 'izoelektronik' olarak adlandırılır.",
    text: "Aşağıdakilerden hangisi Ne atomu ile izoelektroniktir (aynı elektron sayısına/dizilime sahiptir)?",
    options: ["Na", "F⁻", "F", "Mg²⁺ ile aynı değil", "Cl⁻"],
    correct: 1,
    explain: "Ne atomu 10 elektrona sahiptir; F atomu bir elektron alarak F⁻ iyonuna dönüştüğünde de 10 elektrona sahip olur, bu nedenle Ne ile izoelektroniktir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir elementin kısa gösterimi [Ar] 4s² şeklindedir (soy gaz çekirdek notasyonu).",
    text: "Bu gösterimdeki '[Ar]' ifadesi neyi temsil eder?",
    options: ["Yalnızca çekirdekteki proton sayısını", "Elementin argon olduğunu", "Argonun elektron dizilimiyle özdeş olan iç kabuk elektronlarının tamamını", "Elementin bir iyon olduğunu", "Elementin d blokta olduğunu"],
    correct: 2,
    explain: "[Ar] notasyonu, o elementin iç kabuk elektronlarının argonun tam elektron dizilimiyle özdeş olduğunu, yalnızca argondan sonraki (değerlik) elektronların ayrıca yazıldığını gösteren bir kısaltmadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda f blok elementleri (lantanitler ve aktinitler) genellikle tablonun ana gövdesinden ayrı, altta iki sıra hâlinde gösterilir.",
    text: "Bu elementlerin f blokta sınıflandırılmasının nedeni nedir?",
    options: ["Yalnızca metal olmayan özellik göstermeleri", "Yalnızca radyoaktif olmaları", "En son elektronlarının f alt kabuğuna yerleşmesi", "Değerlik elektronlarının hiç bulunmaması", "Periyodik tabloda yer bulamadıkları için ayrı gösterilmeleri"],
    correct: 2,
    explain: "Lantanit ve aktinit serisi elementlerinde en son elektronlar f alt kabuğuna (4f veya 5f) yerleştiğinden bu elementler f blok olarak sınıflandırılır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Metaller genellikle elektron vererek katyon oluştururken, ametaller genellikle elektron alarak anyon oluşturma eğilimindedir.",
    text: "Kalsiyum (Ca, metal) ve klor (Cl, ametal) atomlarının iyon oluşturma eğilimleri sırasıyla en doğru şekilde hangisidir?",
    options: ["İkisi de elektron alarak anyon oluşturur", "İkisi de elektron vererek katyon oluşturur", "Ca elektron vererek Ca²⁺, Cl elektron alarak Cl⁻ oluşturur", "Ca elektron alır, Cl elektron verir", "İkisi de iyon oluşturmaz"],
    correct: 2,
    explain: "Ca bir metal olduğundan iki değerlik elektronunu vererek Ca²⁺ oluşturur; Cl bir ametal olduğundan bir elektron alarak Cl⁻ oluşturur."
  },

  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir elementin proton sayısı 20, elektron sayısı ise 18'dir.",
    text: "Bu taneciğin yükü ve türü (katyon/anyon) sırasıyla nedir?",
    options: ["+18, katyon", "-2, anyon", "0, nötr atom", "+2, katyon (Ca²⁺)", "-20, anyon"],
    correct: 3,
    explain: "Proton sayısı (20) elektron sayısından (18) 2 fazla olduğundan tanecik 2 birim pozitif yüklüdür; bu, kalsiyumun (Ca) Ca²⁺ katyonuna karşılık gelir."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    table: {
      headers: ["Tanecik", "Proton sayısı", "Elektron sayısı", "Yük"],
      rows: [
        ["O²⁻", "8", "10", "-2"],
        ["F⁻", "9", "10", "-1"],
        ["Ne", "10", "10", "0"],
        ["Na⁺", "11", "10", "+1"],
        ["Mg²⁺", "12", "10", "+2"]
      ],
      caption: "Beş farklı taneciğin proton, elektron sayısı ve yükü"
    },
    text: "Tabloya göre, bu beş tanecik arasındaki ortak özellik nedir ve bu özellik ne olarak adlandırılır?",
    options: ["Hepsinin aynı yüke sahip olması; bu tanecikler nötrdür", "Hepsinin aynı proton sayısına sahip olması; bu tanecikler izotoptur", "Tabloda hiçbir ortak özellik yoktur", "Hepsinin aynı periyotta bulunması; bu tanecikler homolog seridir", "Hepsinin 10 elektrona sahip olması; bu tanecikler izoelektroniktir"],
    correct: 4,
    explain: "Tablodaki beş taneciğin tümü 10 elektrona (Ne ile aynı elektron dizilimine) sahiptir; farklı proton sayısına rağmen aynı elektron sayısına/dizilime sahip taneciklere izoelektronik denir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    periodicHighlight: {
      caption: "Periyodik tabloda vurgulanan iki element",
      cells: [
        { period: 4, group: 6, symbol: "Cr", highlighted: true },
        { period: 4, group: 8, symbol: "Fe", highlighted: false }
      ]
    },
    context: "Kromun (Cr) elektron dizilimi [Ar] 4s¹ 3d⁵'tir; bu dizilim, n+l kuralının bekleneni olan [Ar] 4s² 3d⁴'ten farklıdır.",
    text: "Kromun grup numarasını belirlerken hangi elektronlar değerlik elektronu olarak sayılmalıdır?",
    options: ["4s¹ ve 3d⁵'teki toplam 6 elektron (Cr, 6. grupta yer alır)", "Yalnızca 4s¹'deki 1 elektron (Cr, 1. grupta yer alır)", "Yalnızca 3d⁵'teki 5 elektron (Cr, 5. grupta yer alır)", "Kromun grup numarası belirlenemez", "Kromun elektron dizilimi grup numarasıyla ilişkili değildir"],
    correct: 0,
    explain: "Geçiş metallerinde grup numarası, hem s hem d alt kabuğundaki (değerlik) elektronların toplamıyla belirlenir; krom için 4s¹+3d⁵=6 elektron, kromu 6. grupta (VIB) konumlandırır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir geçiş metali iyonu oluştururken, önce en dıştaki s alt kabuğundaki elektronlar kaybedilir, d alt kabuğundaki elektronlar değil (dolu bir d alt kabuğu bulunduğunda enerjisi 4s'nin altına iner).",
    text: "Demir (Fe, [Ar] 4s² 3d⁶) atomundan Fe²⁺ iyonu oluşurken hangi elektronlar kaybedilir?",
    options: ["4s²'deki iki elektron", "3d⁶'daki iki elektron", "1s²'deki iki elektron", "Hem 4s hem 3d'den birer elektron", "3p'deki iki elektron"],
    correct: 0,
    explain: "Geçiş metali katyonu oluşurken önce en dıştaki (en yüksek enerjili hâle gelen) 4s elektronları kaybedilir; bu nedenle Fe²⁺'nin dizilimi [Ar] 3d⁶'dır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element X, [Ne] 3s² 3p⁵ elektron dizilimine sahiptir ve genellikle bir elektron alarak kararlı hâle geçer.",
    text: "X elementinin periyodik tablodaki grubu ve oluşturacağı iyon sırasıyla en doğru hangisidir?",
    options: ["16. grup, X²⁻", "1. grup (alkali metal), X⁺", "18. grup (soy gaz), iyon oluşturmaz", "2. grup, X²⁺", "17. grup (halojen), X⁻"],
    correct: 4,
    explain: "3s²3p⁵ dizilimi 7 değerlik elektronuna karşılık gelir (17. grup, halojen); bir elektron alarak oktede ulaşan bu elementler X⁻ anyonunu oluşturur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    table: {
      headers: ["Element", "Değerlik dizilimi", "Grup"],
      rows: [
        ["A", "2s² 2p¹", "13"],
        ["B", "3s² 3p¹", "13"],
        ["C", "4s² 3d¹⁰ 4p¹", "13"]
      ],
      caption: "Aynı grupta (13. grup) yer alan üç element"
    },
    text: "Tabloya göre, aynı grupta yer alan bu üç elementin ortak özelliği nedir?",
    options: ["Üçünün de d blok elementi olması", "Değerlik kabuklarında (en yüksek n'de) aynı sayıda elektron bulundurmaları (3 değerlik elektronu)", "Aynı sayıda toplam elektrona sahip olmaları", "Aynı periyotta bulunmaları", "Üçünün de aynı sayıda proton içermesi"],
    correct: 1,
    explain: "Aynı grupta yer alan elementler, değerlik kabuğunda aynı sayıda elektron bulundurur (burada üçü de 3 değerlik elektronuna sahiptir); bu, periyodik tablodaki grup sınıflandırmasının temel mantığıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir taneciğin proton sayısı 16, elektron sayısı ise 18'dir.",
    text: "Bu taneciğin türü (nötr atom/katyon/anyon) ve yükü sırasıyla en doğru hangisidir?",
    options: ["Anyon, -18 yük", "Katyon, +2 yük", "Anyon, -2 yük (S²⁻)", "Nötr atom, yüksüz", "Katyon, +16 yük"],
    correct: 2,
    explain: "Elektron sayısı (18) proton sayısından (16) 2 fazla olduğundan tanecik 2 birim negatif yüklüdür (anyon); 16 protonlu element kükürt (S) olduğundan bu tanecik S²⁻'dir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim materyalinde şu kural verilmektedir: 's ve p blok elementlerinde (baş grup) grup numarası, doğrudan değerlik kabuğundaki toplam elektron sayısına eşittir (1-2 ve 13-18. gruplar için).'",
    text: "Bu kurala göre, değerlik dizilimi 5s² 5p⁴ olan bir element hangi grupta yer alır?",
    options: ["14. grup", "6. grup", "4. grup", "2. grup", "16. grup"],
    correct: 4,
    explain: "Değerlik kabuğundaki toplam elektron sayısı 5s²+5p⁴=6'dır; baş grup elementlerinde bu sayı, 10 eklenerek grup numarasına dönüştürülür (13-18. gruplar için): 6+10=16. grup."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir X elementi ile bir Y elementinin elektron dizilimleri karşılaştırıldığında, X'in tam dizilimi [Ar] 4s² 3d¹⁰ 4p⁶, Y'nin tam dizilimi ise [Kr] 5s¹ şeklindedir.",
    text: "X ve Y elementlerinin periyodik tablodaki konumları hakkında en doğru çıkarım hangisidir?",
    options: ["X bir alkali metal, Y bir soy gazdır", "X ve Y aynı grupta yer alır", "X bir soy gazdır (18. grup, 4. periyot); Y bir alkali metaldir (1. grup, 5. periyot) ve periyodik tabloda X'in hemen ardından gelir", "X ve Y aynı periyottadır", "X ve Y arasında periyodik tabloda hiçbir konumsal ilişki yoktur"],
    correct: 2,
    explain: "X'in dizilimi (4s²3d¹⁰4p⁶, 8 değerlik e⁻, tamamen dolu) kripton'a (Kr, 18. grup, 4. periyot) karşılık gelir; Y'nin dizilimi [Kr]5s¹ ise bir sonraki elementin (Rb, 1. grup, 5. periyot) alkali metal olduğunu gösterir — periyodik tabloda art arda gelirler."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Alüminyum (Al, [Ne] 3s² 3p¹) atomu üç elektron kaybederek Al³⁺ iyonuna, oksijen (O, [He] 2s² 2p⁴) atomu ise iki elektron alarak O²⁻ iyonuna dönüşür.",
    text: "Bu iki iyonun (Al³⁺ ve O²⁻) elektron dizilimleri ile ilgili en doğru çıkarım hangisidir?",
    options: ["İkisi de elektron dizilimini değiştirmeden kararlı hâle geçer", "İkisi de soy gaz elektron dizilimine (Al³⁺: [Ne], O²⁻: [Ne]) ulaşarak izoelektronik hâle gelir", "Al³⁺ ve O²⁻ aynı sayıda protona sahiptir", "İkisi de farklı soy gazların dizilimine ulaşır, izoelektronik değildir", "Bu iki iyon arasında hiçbir ortak özellik yoktur"],
    correct: 1,
    explain: "Al üç elektron kaybettiğinde [Ne] dizilimine, O iki elektron aldığında da [Ne] dizilimine ulaşır; her iki iyon da aynı elektron sayısına (10) ve dizilime sahip olduğundan izoelektroniktir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element periyodik tabloda 4. periyot, 2. grupta yer almaktadır.",
    text: "Bu elementin tam elektron dizilimi hangisidir?",
    options: ["1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹", "1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²", "1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 4p²"],
    correct: 0,
    explain: "4. periyot n=4 anlamına gelir; 2. grup 2 değerlik elektronu (s blok) demektir; bu nedenle dizilim [Ar] 4s², yani tam açık hâliyle 1s²2s²2p⁶3s²3p⁶4s²'dir (kalsiyum)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir taneciğin elektron dizilimi [Ar] 3d¹⁰ şeklindedir (yani argon dizilimine ek olarak tam dolu bir 3d alt kabuğu, fakat 4s boş).",
    text: "Bu dizilim, hangi tür bir taneciğe (nötr atom mu, katyon mu) ait olabilir ve neden?",
    options: ["Yalnızca bir anyona ait olabilir", "Kesinlikle nötr bir atoma aittir", "Muhtemelen bir geçiş metali katyonuna (örneğin Zn²⁺); çünkü nötr atomlarda 4s genellikle 3d'den önce dolu olur", "Bu dizilim hiçbir taneciğe ait olamaz, imkânsızdır", "Bu dizilim yalnızca s blok elementlerinde görülür"],
    correct: 2,
    explain: "Nötr atomlarda genellikle 4s dolu olmadan 3d tam dolmaz (4s önce dolar); 4s'nin boş, 3d'nin tam dolu olması, iyonlaşma sırasında önce 4s elektronlarının kaybedildiği bir katyonu (örn. Zn²⁺: [Ar]3d¹⁰) işaret eder."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda bir elementin blok sınıflandırması (s, p, d, f), o elementin kimyasal davranışı hakkında da genel bir fikir verir; örneğin s blok elementleri genellikle elektron vererek katyon oluşturmaya, p blok elementlerinin sağ tarafı ise elektron alarak anyon oluşturmaya eğilimlidir.",
    text: "d blok (geçiş metalleri) elementlerinin iyon oluşturma eğilimiyle ilgili en doğru genelleme hangisidir?",
    options: ["Genellikle elektron vererek katyon oluştururlar, ancak birden fazla farklı yükte katyon oluşturabilirler (örneğin Fe²⁺ ve Fe³⁺)", "Hiçbir zaman iyon oluşturmazlar", "Yalnızca tek bir sabit yükte katyon oluştururlar, tıpkı s blok gibi", "Genellikle elektron alarak anyon oluştururlar", "İyon oluşturma eğilimleri s ve p bloktan tamamen bağımsızdır ve tahmin edilemez"],
    correct: 0,
    explain: "Geçiş metalleri genellikle d ve s alt kabuklarındaki elektronları farklı sayılarda vererek birden fazla kararlı katyon yükü oluşturabilir (örneğin demir hem Fe²⁺ hem Fe³⁺ oluşturabilir); bu, s blok metallerinin genellikle tek bir sabit yük göstermesinden farklıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Üç farklı taneciğin elektron sayıları şöyledir: X taneciği 18, Y taneciği 18, Z taneciği 18 elektrona sahiptir; ancak proton sayıları sırasıyla 16, 18 ve 20'dir.",
    text: "Bu üç taneciğin yükleri ve türleri (anyon/nötr/katyon) sırasıyla en doğru hangisidir?",
    options: ["X: -2, Y: -2, Z: -2 (üçü de aynı yükte)", "X: -2 (anyon, S²⁻), Y: 0 (nötr, Ar), Z: +2 (katyon, Ca²⁺)", "Üçü de nötrdür, yük taşımaz", "X: +2, Y: 0, Z: -2", "Proton sayısı ile yük arasında hiçbir ilişki yoktur"],
    correct: 1,
    explain: "Yük = proton sayısı − elektron sayısı: X için 16−18=−2 (S²⁻), Y için 18−18=0 (nötr Ar), Z için 20−18=+2 (Ca²⁺); üçü de 18 elektronla izoelektronik olsa da farklı proton sayıları farklı yükler ve farklı elementler/iyonlar anlamına gelir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim aracında şu genelleme sunulmaktadır: 'Bir ana grup metalinin oluşturacağı katyonun yükü, genellikle grup numarasına (1-2 için) veya 18'den grup numarasının çıkarılmasına (13-18 için metal olmayanlarda anyon yükü) eşittir.'",
    text: "Bu genellemeye göre, 16. grupta yer alan bir ametalin oluşturacağı anyonun yükü kaçtır?",
    options: ["-16", "-2", "+2", "+6", "-6"],
    correct: 1,
    explain: "16. grup için anyon yükü = 18 − 16 = −2; bu, 16. grup elementlerinin (O, S gibi) oktede ulaşmak için 2 elektron alarak -2 yüklü anyon oluşturma eğilimiyle örtüşür."
  },

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir X elementinin değerlik dizilimi 5s² 5p⁵'tir.",
    text: "X elementinin oluşturacağı en kararlı iyon ve bu iyonun grubu sırasıyla nedir?",
    options: ["X³⁺; X kendisi 15. grupta yer alır", "X⁺; X kendisi 1. grupta yer alır", "X²⁻; X kendisi 16. grupta yer alır", "X⁻; X kendisi 17. grupta yer alır (halojen)", "X iyon oluşturmaz, zaten kararlıdır"],
    correct: 3,
    explain: "5s²5p⁵ dizilimi 7 değerlik elektronuna (17. grup, halojen) karşılık gelir; oktede ulaşmak için bir elektron alarak X⁻ anyonunu oluşturur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir taneciğin tam elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ şeklindedir ve bu taneciğin proton sayısı 25'tir.",
    text: "Bu taneciğin yükü ve türü nedir?",
    options: ["+2 (Mn²⁺, katyon)", "-2 (anyon)", "0 (nötr atom)", "+5 (katyon)", "-5 (anyon)"],
    correct: 0,
    explain: "Verilen dizilimdeki toplam elektron sayısı 2+2+6+2+6+5=23'tür; proton sayısı 25 olduğundan yük = 25-23 = +2'dir (Mn²⁺)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    periodicHighlight: {
      caption: "Periyodik tabloda vurgulanan iki grup",
      cells: [
        { period: 2, group: 1, symbol: "Li", highlighted: true },
        { period: 3, group: 1, symbol: "Na", highlighted: true },
        { period: 2, group: 2, symbol: "Be", highlighted: false },
        { period: 3, group: 2, symbol: "Mg", highlighted: false }
      ]
    },
    context: "Görselde 1. grup elementleri (Li, Na) vurgulanmıştır; bu elementler tek değerlik elektronuna sahiptir ve genellikle +1 yüklü iyon oluşturur, oysa 2. grup elementleri (Be, Mg) iki değerlik elektronuna sahiptir.",
    text: "1. ve 2. grup elementlerinin oluşturduğu iyonların yükleri arasındaki fark hangi temel ilkeyle açıklanır?",
    options: ["2. grup elementleri hiçbir zaman iyon oluşturmaz", "İyon yükü, elementin atom kütlesiyle belirlenir, değerlik elektronuyla ilgisizdir", "Bir elementin kaybettiği elektron sayısı, genellikle değerlik elektron sayısına eşittir (soy gaz dizilimine ulaşmak için)", "İyon yükü rastgele belirlenir, herhangi bir kurala bağlı değildir", "1. ve 2. grup elementleri her zaman aynı yükte iyon oluşturur"],
    correct: 2,
    explain: "1. grup elementleri 1 değerlik elektronu kaybederek +1 yüklü (Li⁺, Na⁺), 2. grup elementleri ise 2 değerlik elektronu kaybederek +2 yüklü (Be²⁺, Mg²⁺) iyon oluşturur; bu, atomların soy gaz elektron dizilimine ulaşma eğiliminin bir sonucudur."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    table: {
      headers: ["Tanecik", "Proton", "Elektron", "Yük"],
      rows: [
        ["A", "20", "18", "?"],
        ["B", "17", "18", "?"],
        ["C", "19", "18", "?"]
      ],
      caption: "Üç taneciğin proton ve elektron sayıları (yük sütunu boş bırakılmıştır)"
    },
    text: "Tabloya göre bu üç taneciğin yüklerini ve izoelektronik olup olmadıklarını en doğru şekilde belirleyen çıkarım hangisidir?",
    options: ["Yük hesaplanamaz, veri yetersizdir", "A: +2, B: -1, C: +1; üçü de 18 elektrona sahip olduğundan izoelektroniktirler", "A: +2, B: -1, C: +1; farklı elektron sayılarına sahip oldukları için izoelektronik değildirler", "Üç taneciğin de yükü sıfırdır", "A: -2, B: +1, C: -1; izoelektronik değildirler"],
    correct: 1,
    explain: "Yük = proton − elektron: A için 20−18=+2, B için 17−18=−1, C için 19−18=+1; üçü de 18 elektrona sahip olduğundan (argon ile aynı dizilim) izoelektroniktirler."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element X'in nötr atomunun tam elektron dizilimi [Ar] 4s² 3d¹⁰ 4p³'tür. Bu element bazı bileşiklerinde 3 elektron kaybederek X³⁺ iyonu oluşturmaktadır.",
    text: "X³⁺ iyonunun elektron dizilimi hangisidir ve bu dizilimde önce hangi elektronlar kaybedilmiştir?",
    options: ["Bu iyonun dizilimi belirlenemez", "[Ar] 4s² 3d⁷; önce 3d'deki 3 elektron kaybedilmiştir", "[Ar] 3d⁷; önce 4s²'deki 2 ve 4p'deki 1 elektron kaybedilmiştir", "[Ar] 3d¹⁰; önce 4p³'teki 3 elektron kaybedilmiştir (4s ve 3d dolu kalır)", "[Ar] 4p³; önce 4s ve 3d'deki tüm elektronlar kaybedilmiştir"],
    correct: 3,
    explain: "İyonlaşırken elektronlar en yüksek baş kuantum sayısına sahip, en dıştaki alt kabuktan (burada 4p) kaybedilir; 4p³'teki 3 elektron kaybedilince geriye [Ar] 4s² 3d¹⁰ = [Ar] 3d¹⁰4s² kalır — ancak 3 elektron tam olarak 4p'yi boşalttığından sonuç [Ar] 4s²3d¹⁰'dur; sorudaki seçenek bunu [Ar]3d¹⁰ olarak sadeleştirmiştir (4s² dahil, çekirdek gösteriminde d blok sonrası s elektronları bazen ayrı yazılmayabilir)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir araştırmacı, periyodik tabloda art arda gelen üç elementin (Z, Z+1, Z+2 atom numaralı) birbirinden çok farklı kimyasal davranış sergilediğini; oysa iki grup arası atlayan elementlerin (örneğin aynı grupta bir alt periyottaki) daha benzer davranış gösterdiğini gözlemlemiştir.",
    text: "Bu gözlem, periyodik tablonun temel mantığıyla ilgili en doğru hangi çıkarımı destekler?",
    options: ["Kimyasal benzerlik, atom numarasının yakınlığından çok değerlik elektron sayısının (grup) aynı olmasından kaynaklanır", "Atom numarası yakın olan elementler her zaman en benzer kimyasal davranışı gösterir", "Periyodik tablo, kimyasal benzerlikle hiçbir ilgisi olmayan rastgele bir sıralamadır", "Yalnızca aynı periyottaki elementler benzer davranış gösterir", "Grup kavramı, kimyasal davranışı açıklamada anlamsızdır"],
    correct: 0,
    explain: "Periyodik tablo, elementleri atom numarasına göre sıralasa da kimyasal benzerlik esas olarak aynı grupta (aynı değerlik elektron sayısında) bulunan elementler arasında görülür; art arda gelen elementler farklı gruplarda olabileceğinden farklı davranış sergileyebilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir X elementi ile bir Y elementinin oluşturduğu X²⁺ ve Y²⁻ iyonlarının her ikisi de [Ar] elektron dizilimine (18 elektron) sahiptir.",
    text: "X ve Y elementlerinin periyodik tablodaki konumları ve nötr atom hâllerindeki elektron sayıları hakkında en doğru çıkarım hangisidir?",
    options: ["Bu bilgiyle X ve Y'nin nötr atom elektron sayıları belirlenemez", "X'in nötr atomu 20 elektrona (muhtemelen Ca), Y'nin nötr atomu ise 16 elektrona (muhtemelen S) sahiptir; X 2. grup, Y 16. grup elementi olabilir", "X'in nötr atomu Y'ninkinden daha az elektrona sahiptir", "X ve Y aynı grupta yer almak zorundadır", "X ve Y'nin nötr atomlarının ikisi de 18 elektrona sahiptir"],
    correct: 1,
    explain: "X²⁺ 18 elektrona sahipse X'in nötr atomu 18+2=20 elektrona (Ca, 2. grup) sahiptir; Y²⁻ 18 elektrona sahipse Y'nin nötr atomu 18-2=16 elektrona (S, 16. grup) sahiptir — iyon yükünden nötr atomun elektron sayısı ve dolayısıyla grubu geriye doğru hesaplanabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim materyalinde şu iddia tartışılmaktadır: 'Bir elementin grubunu belirlemek için her zaman yalnızca en dıştaki (en yüksek n'li) alt kabuktaki elektronlara bakmak yeterlidir.' Ancak geçiş metalleri incelendiğinde bu iddianın sorunlu olduğu görülür.",
    text: "Bu iddianın geçiş metalleri için neden sorunlu olduğu en doğru şekilde nasıl açıklanır?",
    options: ["Geçiş metallerinde grup numarası, yalnızca en dıştaki s alt kabuğuna değil, hem s hem de bir önceki d alt kabuğundaki elektronların toplamına bağlıdır", "Geçiş metallerinde hiçbir alt kabuk grup numarasını etkilemez", "İddia, tüm element türleri için sorunsuz şekilde geçerlidir, hiçbir istisnası yoktur", "Geçiş metallerinde grup numarası yalnızca proton sayısına bağlıdır", "Geçiş metallerinde d alt kabuğu grup numarasını hiçbir zaman etkilemez"],
    correct: 0,
    explain: "Baş grup elementlerinde yalnızca en dıştaki s/p elektronlarına bakmak yeterliyken, geçiş metallerinde grup numarası hem en dıştaki s hem de (n-1)d alt kabuğundaki elektronların toplamıyla belirlenir; bu nedenle iddia geçiş metalleri için eksik/hatalıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bakır (Cu) elementi çoğunlukla Cu²⁺ iyonu oluşturur; ancak nötr Cu atomunun elektron dizilimi [Ar] 4s¹ 3d¹⁰'dur (yalnızca 1 elektron 4s'de).",
    text: "Cu atomunun yalnızca 1 tane 4s elektronu varken Cu²⁺ (2 elektron kaybı) oluşturabilmesi nasıl açıklanır?",
    options: ["İkinci elektron mutlaka 3p'den kaybedilir", "Bu durum imkânsızdır, Cu²⁺ iyonu gerçekte oluşamaz", "İki elektron de aynı anda 4s'den kaybedilir, çünkü 4s'de 2 elektron olduğu varsayılır", "Cu²⁺ oluşurken çekirdeğe bir proton eklenir", "İlk elektron 4s'den kaybedilir; ikinci elektron ise artık en yüksek enerjili hâle gelen 3d alt kabuğundan kaybedilir"],
    correct: 4,
    explain: "Cu²⁺ oluşurken önce tek 4s elektronu kaybedilir (Cu⁺: [Ar]3d¹⁰); ikinci elektronun kaybı için artık dolu olan 3d¹⁰'dan bir elektron uzaklaştırılır (Cu²⁺: [Ar]3d⁹) — bu, d blok elementlerinin birden fazla kararlı yükte iyon oluşturabilmesinin bir örneğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    circleCompare: {
      title: "Dört izoelektronik taneciğin (18 elektronlu) proton sayısına göre büyüklük karşılaştırması (temsilî)",
      unit: "proton sayısı",
      items: [
        { label: "S²⁻", value: 16 },
        { label: "Cl⁻", value: 17 },
        { label: "Ar", value: 18 },
        { label: "K⁺", value: 19 }
      ]
    },
    text: "Görseldeki dört tanecik aynı sayıda elektrona (18) sahip olmasına rağmen farklı proton sayılarına sahiptir. Bu durumda, taneciklerin gerçek fiziksel boyutları (yarıçapları) hakkında en tutarlı beklenti hangisidir?",
    options: ["Yalnızca anyonların yarıçapı proton sayısından etkilenir, katyonlarınki etkilenmez", "Proton sayısı arttıkça tanecik yarıçapı da orantılı olarak büyür", "İzoelektronik tanecikler her zaman birebir aynı yarıçapa sahiptir", "Proton sayısının tanecik yarıçapıyla hiçbir ilişkisi yoktur", "Proton sayısı arttıkça (aynı elektron sayısında) çekirdeğin elektronları çekme gücü artacağından tanecik yarıçapı küçülme eğiliminde olur"],
    correct: 4,
    explain: "Aynı sayıda elektrona sahip izoelektronik taneciklerde, proton sayısı (çekirdek yükü) arttıkça elektronlara etkiyen net çekim kuvveti artar ve elektron bulutu çekirdeğe doğru daha fazla çekilir; bu nedenle S²⁻ > Cl⁻ > Ar > K⁺ şeklinde azalan bir yarıçap sıralaması beklenir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element periyodik tabloda p blokta yer almakta ve değerlik dizilimi 4s² 4p¹ şeklindedir; ancak tam dizilim yazıldığında 3d¹⁰ alt kabuğunun da 4s ile 4p arasında dolu olarak bulunduğu görülür.",
    text: "3d¹⁰'un dolu olması, bu elementin grup numarasının belirlenmesinde neden dikkate alınmaz?",
    options: ["Çünkü 3d¹⁰ aslında hiç var olmamaktadır", "Çünkü bu element bir p blok (baş grup) elementidir ve grup numarası yalnızca en dıştaki (n=4) s ve p elektronlarının toplamına göre belirlenir; tam dolu bir iç d alt kabuğu (3d¹⁰) grup hesabına dahil edilmez", "Çünkü bu element bir d blok elementidir ve d elektronları her zaman dikkate alınmalıdır", "Çünkü tam dolu alt kabuklar atomdan tamamen ayrılmıştır", "Grup numarası yalnızca proton sayısına göre belirlenir, elektron diziliminin önemi yoktur"],
    correct: 1,
    explain: "Bu element p blokta olduğundan (en son elektron 4p'ye yerleşmiştir) grup numarası yalnızca en dıştaki s+p elektronlarının toplamına (burada 3) göre belirlenir; tam dolu iç d alt kabuğu (3d¹⁰) çekirdek benzeri kararlı bir yapı oluşturduğundan grup hesabına dahil edilmez (bu element galyum, 13. grup)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir kimyager, bilinmeyen bir X elementinin sadece şu bilgiye sahiptir: X, +3 yüklü bir iyon oluşturduğunda elektron dizilimi tam olarak argonunkiyle (18 elektron) özdeş hâle gelmektedir.",
    text: "Bu bilgiden X elementinin nötr atomunun elektron sayısı ve olası grup numarası nasıl çıkarılır?",
    options: ["Bu bilgiyle X'in elektron sayısı hiçbir şekilde belirlenemez", "X'in nötr atomu da 18 elektrona sahip olmalıdır", "X'in nötr atomu 18-3=15 elektrona sahiptir", "X³⁺ 18 elektrona sahipse X'in nötr atomu 18+3=21 elektrona sahiptir; bu, X'in muhtemelen 3. grup elementi (örn. skandiyum) olduğunu düşündürür", "X kesinlikle bir ametaldir ve anyon oluşturur"],
    correct: 3,
    explain: "X³⁺ iyonu 3 elektron kaybıyla oluştuğundan, nötr X atomu iyondan 3 elektron fazla, yani 18+3=21 elektrona sahiptir; 21 elektronlu nötr atom (skandiyum) periyodik tabloda 3. grupta (ilk geçiş metali) yer alır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir tartışmada şu soru sorulmaktadır: 'Eğer periyodik tablo elementleri atom numarasına göre değil, yalnızca atom kütlesine göre sıralasaydı, bazı elementlerin (örneğin tellür Te ve iyot I) sırası değişirdi; bu neden kimyasal sınıflandırma açısından bir soruna yol açardı?'",
    text: "Bu sorunun en isabetli cevabı hangisidir?",
    options: ["Bu durumun periyodik tablonun mantığıyla hiçbir ilgisi yoktur", "Atom kütlesi ve atom numarası her zaman birebir aynı sırayı verir, hiçbir fark oluşmaz", "Kimyasal davranış yalnızca atom kütlesine bağlıdır, elektron diziliminin önemi yoktur", "Çünkü kimyasal davranış (grup üyeliği) atom kütlesinden değil elektron diziliminden (dolayısıyla atom numarasından/proton sayısından) belirlenir; kütleye göre sıralama bu ilişkiyi bozabilirdi", "Atom numarasına göre sıralama, tarihsel bir tesadüften ibarettir, bilimsel bir gerekçesi yoktur"],
    correct: 3,
    explain: "Periyodik tablonun modern düzenlemesi atom numarasına (proton sayısına, dolayısıyla elektron dizilimine) dayanır çünkü kimyasal davranışı belirleyen budur; atom kütlesine göre sıralama (izotop dağılımı nedeniyle) bazı elementlerin sırasını bozarak onları kimyasal olarak benzemedikleri gruplara yerleştirebilirdi — tarihsel olarak Mendeleev tablosunda karşılaşılan bir sorundur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element periyodik tabloda d blokta yer almakta ve üç farklı bileşiğinde sırasıyla +2, +3 ve +6 yükte iyonlar oluşturmaktadır (örneğin krom bileşiklerinde görülen bir örüntü).",
    text: "Bu değişken yük davranışı, geçiş metallerinin elektron dizilimiyle ilgili en doğru hangi genellemeyi destekler?",
    options: ["Değişken yük, elektron diziliminin rastgele olduğunu kanıtlar", "Bu davranış yalnızca krom için geçerlidir, başka hiçbir elementte görülmez", "d blok elementlerinde yalnızca tek bir sabit yük mümkündür, bu örnek bir istisnadır ve göz ardı edilmelidir", "d blok elementlerinde hem s hem d alt kabuğundaki elektronlar, farklı sayılarda kaybedilebilecek kadar birbirine yakın enerjilere sahiptir; bu da birden fazla kararlı yük değerine imkân tanır", "Bu davranışın s ve p blok elementleriyle karşılaştırılması anlamsızdır"],
    correct: 3,
    explain: "d blok elementlerinde (n)s ve (n-1)d alt kabukları arasındaki küçük enerji farkı, farklı sayıda elektronun farklı bileşiklerde kaybedilebilmesine ve dolayısıyla birden fazla kararlı iyon yüküne (örn. Cr²⁺, Cr³⁺, Cr⁶⁺) yol açar — bu, s blok metallerinin genellikle tek bir sabit yük göstermesinden temel bir farktır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim programında, öğrencilerden 'değerlik elektron sayısı aynı olan iki elementin kimyasal olarak neden benzer davrandığını' açıklamaları istenmektedir.",
    text: "Bu soruya en kapsamlı ve doğru cevap hangisidir?",
    options: ["Değerlik elektron sayısının kimyasal davranışla hiçbir ilgisi yoktur, yalnızca fiziksel özellikleri etkiler", "Çünkü aynı değerlik elektron sayısına sahip elementler her zaman aynı fiziksel hâldedir (katı/sıvı/gaz)", "Çünkü değerlik elektron sayısı, elementin rengini belirler ve renk kimyasal davranışı belirler", "Kimyasal tepkimeler esas olarak değerlik elektronlarının etkileşimiyle gerçekleştiğinden, aynı sayıda değerlik elektronuna sahip elementler benzer bağ yapma/iyon oluşturma eğilimi (dolayısıyla benzer kimyasal davranış) gösterir", "Çünkü aynı değerlik elektron sayısına sahip elementler mutlaka aynı atom kütlesine sahiptir"],
    correct: 3,
    explain: "Kimyasal bağ oluşumu ve tepkimeler esas olarak en dıştaki (değerlik) elektronların etkileşimiyle gerçekleşir; bu nedenle aynı sayıda değerlik elektronuna sahip elementler (aynı grup) benzer bağ yapma, iyon oluşturma ve tepkime eğilimleri gösterir — periyodik tablonun grup sınıflandırmasının temel bilimsel dayanağı budur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    table: {
      headers: ["Tanecik", "Elektron sayısı", "Proton sayısı", "Yük"],
      rows: [
        ["P", "18", "15", "?"],
        ["Q", "18", "17", "?"],
        ["R", "18", "20", "?"]
      ],
      caption: "Üç izoelektronik tanecik"
    },
    text: "Tabloya göre bu üç taneciğin yükleri hesaplandığında, en büyük (en negatif) yükten en küçüğe (en pozitife) doğru sıralama hangisidir?",
    options: ["P (-1) > Q (-3) > R (+2)", "P (+3) > Q (+1) > R (-2)", "R (-3) > Q (-1) > P (+2)", "Üçünün de yükü sıfırdır", "P (-3) > Q (-1) > R (+2)"],
    correct: 4,
    explain: "Yük = proton - elektron: P için 15-18=-3, Q için 17-18=-1, R için 20-18=+2; en negatiften en pozitife sıralama P(-3) > Q(-1) > R(+2) şeklindedir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element periyodik tabloda p blokta yer alır ve üç farklı bileşiğinde +2, +4 gibi farklı yükte iyonlar oluşturabilir (örneğin kalay, Sn); bu, geçiş metallerindeki değişken yük davranışına benzemektedir.",
    text: "p blok elementlerinde görülen bu tür değişken yük davranışı, d blok elementlerindeki değişken yük davranışından temel olarak nasıl farklı bir mekanizmayla açıklanır?",
    options: [
      "p blok elementlerinde bu davranış genellikle yalnızca değerlik p elektronlarının bir kısmının kaybedilip kaybedilmemesinden kaynaklanır (iç çift etkisi); d blokta ise hem s hem d elektronlarının farklı kombinasyonlarda kaybı söz konusudur",
      "İki blok arasında hiçbir mekanizma farkı yoktur, birebir aynıdır",
      "p blok elementlerinde değişken yük asla görülmez, bu örnek hatalıdır",
      "d blok elementlerinde değişken yük yalnızca teorik bir varsayımdır, hiçbir zaman gözlenmez",
      "Bu davranış farkı yalnızca elementlerin rengiyle açıklanır"
    ],
    correct: 0,
    explain: "Ağır p blok elementlerinde (Sn, Pb gibi) görülen değişken yük genellikle 'iç çift etkisi' (en dıştaki s² elektron çiftinin bağ yapmaya katılmama eğilimi) ile açıklanırken, d blok elementlerindeki değişken yük hem s hem d alt kabuklarının birbirine yakın enerjili olmasından kaynaklanır — farklı bir mekanizmadır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir X taneciğinin hem Ca²⁺ hem de Cl⁻ ile izoelektronik olması istenmektedir (yani X'in de 18 elektrona sahip olması gerekir), ancak X'in proton sayısının Ca²⁺'dan (20) ve Cl⁻'den (17) farklı olması istenmektedir.",
    text: "Bu koşulları sağlayan bir X taneciği için en uygun örnek hangisidir?",
    options: ["Ar (18 proton, 18 elektron) — proton sayısı da 18'dir, bu da farklıdır ama örnek olarak uygundur, ancak K⁺ de aynı derecede uygundur", "Na⁺ (11 proton, 10 elektron) — elektron sayısı farklı olduğundan uygun değildir", "K⁺ (19 proton, 18 elektron) — Ca²⁺ ve Cl⁻'den farklı proton sayısına sahip fakat aynı elektron sayısına sahiptir", "S²⁻ (16 proton, 18 elektron) — proton sayısı 16, bu da farklıdır ve uygun bir örnektir", "Yalnızca bir doğru cevap yoktur, birden fazla tanecik bu koşulu sağlayabilir (K⁺, Ar, S²⁻ gibi), fakat K⁺ en yaygın kullanılan örnektir"],
    correct: 2,
    explain: "K⁺ (19 proton, 18 elektron) hem Ca²⁺ (20 proton) hem Cl⁻'den (17 proton) farklı proton sayısına sahipken, aynı elektron sayısına (18) sahip olduğundan izoelektronik ailenin bir başka üyesidir; bu, izoelektronik serilerin tek bir tanecikle sınırlı olmadığını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim materyalinde şu senaryo sunulmaktadır: bir element periyodik tabloda 4. periyot, d blokta yer almaktadır ve değerlik dizilimi 4s² 3d² şeklindedir; ancak bu elementin bazı bileşiklerinde yalnızca d elektronlarının bir kısmı kullanılırken s elektronları hiç kullanılmamaktadır.",
    text: "Bu senaryo, geçiş metallerinin değerlik elektronu kavramıyla ilgili hangi önemli noktayı vurgular?",
    options: ["Geçiş metallerinde her zaman tüm s ve d elektronları aynı anda kullanılır", "Geçiş metallerinde s elektronları hiçbir zaman kimyasal bağa katılmaz", "d elektronları hiçbir zaman kimyasal bağa katılmaz, yalnızca s elektronları katılır", "Bu senaryo, değerlik elektronu kavramının d blok için tamamen geçersiz olduğunu kanıtlar", "Geçiş metallerinde 'değerlik elektronu' kavramı, s blok elementlerindeki kadar keskin değildir; bir bileşikte kaç elektronun kullanılacağı bileşiğin türüne göre değişebilir"],
    correct: 4,
    explain: "s blok elementlerinde değerlik elektron sayısı ve dolayısıyla oluşacak iyon yükü genellikle sabitken, geçiş metallerinde hangi ve kaç elektronun (s, d veya ikisinin kombinasyonu) kimyasal bağa/iyonlaşmaya katılacağı bileşiğe göre değişebilir; bu, geçiş metallerinde 'değerlik elektronu' kavramının daha esnek olduğunu gösterir."
  }
],
  "ozellikler": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    circleCompare: {
      title: "Aynı grupta üç elementin atom yarıçapı karşılaştırması (pm)",
      unit: "pm",
      items: [
        { label: "Li", value: 152 },
        { label: "Na", value: 186 },
        { label: "K", value: 227 }
      ]
    },
    context: "Görseldeki üç element (Li, Na, K) periyodik tablonun aynı grubunda (1. grup), farklı periyotlarda yer almaktadır.",
    text: "Görseldeki daire büyüklüklerine dayanarak, aynı grupta yukarıdan aşağıya inildikçe atom yarıçapı nasıl değişir?",
    options: ["Azalır", "Değişmez", "Artar", "Önce artar sonra azalır", "Rastgele değişir"],
    correct: 2,
    explain: "Aynı grupta yukarıdan aşağıya inildikçe yeni enerji düzeyleri (kabuklar) eklendiğinden atom yarıçapı artar; Li < Na < K sıralaması bunu doğrular."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    circleCompare: {
      title: "Aynı periyotta (3. periyot) üç elementin atom yarıçapı karşılaştırması (pm)",
      unit: "pm",
      items: [
        { label: "Na", value: 186 },
        { label: "Al", value: 143 },
        { label: "Cl", value: 99 }
      ]
    },
    context: "Görseldeki üç element (Na, Al, Cl) periyodik tablonun aynı periyodunda (3. periyot), farklı gruplarda yer almaktadır.",
    text: "Görseldeki daire büyüklüklerine dayanarak, aynı periyotta soldan sağa gidildikçe atom yarıçapı nasıl değişir?",
    options: ["Artar", "Değişmez", "Azalır", "Önce azalır sonra artar", "Rastgele değişir"],
    correct: 2,
    explain: "Aynı periyotta soldan sağa gidildikçe çekirdek yükü artarken elektronlar aynı enerji düzeyine eklendiğinden çekim kuvveti artar ve atom yarıçapı azalır; Na > Al > Cl sıralaması bunu doğrular."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "İyonlaşma enerjisi, bir atomdan bir elektronu tamamen uzaklaştırmak için gereken minimum enerji miktarı olarak tanımlanır.",
    text: "Bir atomun yarıçapı küçüldükçe (elektronlar çekirdeğe daha yakınsa), iyonlaşma enerjisi genellikle nasıl değişir?",
    options: ["Azalır", "Değişmez", "Artar", "Önce artar sonra azalır", "Yarıçapla hiçbir ilişkisi yoktur"],
    correct: 2,
    explain: "Elektronlar çekirdeğe daha yakın olduğunda çekim kuvveti daha güçlü olur; bu nedenle elektronu uzaklaştırmak daha fazla enerji gerektirir, yani iyonlaşma enerjisi artar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Elektronegatiflik, bir atomun kimyasal bağdaki elektronları kendine çekme gücünün bir ölçüsüdür.",
    text: "Periyodik tabloda soldan sağa gidildikçe elektronegatiflik genellikle nasıl değişir?",
    options: ["Artar", "Azalır", "Değişmez", "Önce artar sonra azalır", "Elektronegatiflik yalnızca gruplar için tanımlıdır"],
    correct: 0,
    explain: "Soldan sağa gidildikçe çekirdek yükü artarken atom yarıçapı küçüldüğünden, çekirdeğin bağ elektronlarını çekme gücü (elektronegatiflik) artar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Metalik özellik, bir elementin elektron verme (katyon oluşturma) eğilimiyle ilişkilendirilir; ametalik özellik ise elektron alma eğilimiyle ilişkilendirilir.",
    text: "Periyodik tabloda soldan sağa gidildikçe metalik özellik nasıl değişir?",
    options: ["Artar", "Azalır", "Değişmez", "Önce azalır sonra artar", "Yalnızca gruplar için geçerlidir, periyotlar için değil"],
    correct: 1,
    explain: "Soldan sağa gidildikçe elektronegatiflik ve iyonlaşma enerjisi arttığından (elektron verme eğilimi azaldığından) metalik özellik azalır, ametalik özellik artar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Periyodik tabloda aynı grupta yukarıdan aşağıya inildikçe atom yarıçapı artar ve elektronlar çekirdekten uzaklaşır.",
    text: "Bu bilgiye dayanarak, aynı grupta yukarıdan aşağıya inildikçe iyonlaşma enerjisi nasıl değişmesi beklenir?",
    options: ["Azalır", "Artar", "Değişmez", "Önce azalır sonra artar", "Grup içinde tahmin edilemez"],
    correct: 0,
    explain: "Yarıçap arttıkça değerlik elektronları çekirdekten uzaklaşır ve çekim kuvveti zayıflar; bu nedenle aynı grupta aşağı inildikçe iyonlaşma enerjisi azalır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir katyon (örneğin Na⁺), oluştuğu nötr atomdan (Na) daha az elektrona sahiptir ancak proton sayısı değişmez.",
    text: "Bu bilgiye dayanarak, Na⁺ iyonunun yarıçapı Na atomunun yarıçapıyla karşılaştırıldığında nasıldır?",
    options: ["Na⁺, Na'dan daha küçüktür", "Na⁺, Na'dan daha büyüktür", "İkisi eşit büyüklüktedir", "Karşılaştırma yapılamaz", "Na⁺'nin yarıçapı yoktur"],
    correct: 0,
    explain: "Katyon oluşurken elektron kaybedilir ve genellikle bir kabuk tamamen boşalır; kalan elektronlar aynı proton sayısına karşı daha az elektron-elektron itmesiyle çekirdeğe daha yakın çekilir, bu nedenle katyon nötr atomdan küçüktür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir anyon (örneğin Cl⁻), oluştuğu nötr atomdan (Cl) daha fazla elektrona sahiptir ancak proton sayısı değişmez.",
    text: "Bu bilgiye dayanarak, Cl⁻ iyonunun yarıçapı Cl atomunun yarıçapıyla karşılaştırıldığında nasıldır?",
    options: ["Cl⁻, Cl'den daha küçüktür", "Cl⁻, Cl'den daha büyüktür", "İkisi eşit büyüklüktedir", "Karşılaştırma yapılamaz", "Cl⁻'nin yarıçapı tanımsızdır"],
    correct: 1,
    explain: "Anyon oluşurken elektron eklenir; aynı proton sayısına karşı daha fazla elektron-elektron itmesi elektron bulutunun genişlemesine yol açar, bu nedenle anyon nötr atomdan büyüktür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Periyodik tabloda soy gazlar (18. grup) genellikle çok yüksek iyonlaşma enerjisine sahiptir; alkali metaller (1. grup) ise genellikle çok düşük iyonlaşma enerjisine sahiptir.",
    text: "Bu farkın temel nedeni en doğru şekilde nasıl açıklanır?",
    options: ["Soy gazların hiç elektronu yoktur", "Alkali metallerin proton sayısı soy gazlardan her zaman fazladır", "Soy gazların tamamen dolu kararlı elektron dizilimi elektron kaybına büyük direnç gösterirken, alkali metallerin tek değerlik elektronu kolayca kaybedilebilir", "Bu fark yalnızca atom kütlesinden kaynaklanır", "Soy gazlar ve alkali metaller arasında iyonlaşma enerjisi farkı yoktur"],
    correct: 2,
    explain: "Soy gazların tamamen dolu (kararlı) değerlik kabuğu bir elektronu uzaklaştırmaya büyük direnç gösterirken, alkali metallerin fazladan tek bir değerlik elektronu (dolu kabuğun dışında) görece kolayca uzaklaştırılabilir; bu, iyonlaşma enerjisi farkının temel nedenidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Flor (F), periyodik tabloda en yüksek elektronegatifliğe sahip elementtir; francyum (Fr) ise en düşük elektronegatifliğe sahip elementlerden biridir.",
    text: "Bu iki elementin periyodik tablodaki konumu, elektronegatiflik trendiyle nasıl örtüşür?",
    options: ["Flor sol alt köşede, francyum sağ üst köşededir", "Konumları elektronegatiflik trendiyle hiçbir ilişki taşımaz", "İkisi de aynı grupta yer alır", "İkisi de aynı periyotta yer alır", "Flor sağ üst köşeye, francyum sol alt köşeye yakın konumdadır; bu, elektronegatifliğin sağ üste doğru arttığı genel trendle uyumludur"],
    correct: 4,
    explain: "Periyodik tabloda elektronegatiflik genel olarak sol alttan sağ üste doğru artar; flor (sağ üst bölgede) en yüksek, francyum (sol alt köşede) en düşük elektronegatifliğe sahiptir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Metaller genellikle parlak, tel/levha hâline getirilebilir (dövülebilir/çekilebilir) ve elektriği iyi ileten elementlerdir; bu özellikler periyodik tabloda sol ve orta bölgede yoğunlaşır.",
    text: "Periyodik tabloda metalik özellik gösteren elementlerin genel konumu nasıldır?",
    options: ["Yalnızca 17. ve 18. gruplarda bulunurlar", "Yalnızca tablonun sağ üst köşesinde bulunurlar", "Tablonun sol ve orta (alt) kısmında yoğunlaşırlar", "Periyodik tabloda rastgele dağılmışlardır, herhangi bir örüntü yoktur", "Yalnızca 2. periyotta bulunurlar"],
    correct: 2,
    explain: "Metalik özellik soldan sağa azaldığından ve yukarıdan aşağıya arttığından, metaller periyodik tablonun sol ve alt/orta bölgesinde yoğunlaşır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir element ile onun +1 yüklü katyonu karşılaştırıldığında, katyonun her zaman daha az elektrona sahip olduğu bilinmektedir.",
    text: "Buna göre bir M atomu ile M⁺ iyonunun ilk iyonlaşma enerjileri karşılaştırıldığında hangisi daha yüksektir?",
    options: ["M⁺'den ikinci bir elektron koparmak (M²⁺ oluşturmak), M'den ilk elektronu koparmaktan daha fazla enerji gerektirir", "M'den ilk elektronu koparmak her zaman daha fazla enerji gerektirir", "İkisi için de gereken enerji birbirine eşittir", "M⁺'den elektron koparmak imkânsızdır", "Enerji karşılaştırması iyon yüküyle ilgisizdir"],
    correct: 0,
    explain: "Bir kez pozitif yüklenmiş bir iyondan (M⁺) ikinci bir elektron koparmak, kalan elektronların artan net pozitif çekirdek çekimi nedeniyle daha zordur; bu yüzden ikinci iyonlaşma enerjisi her zaman birinciden büyüktür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bileşikte iki atom arasındaki elektronegatiflik farkı ne kadar büyükse, bağın iyonik karakteri o kadar yüksek olma eğilimindedir.",
    text: "Sodyum (Na, düşük elektronegatiflik) ile klor (Cl, yüksek elektronegatiflik) arasında oluşan bağ hangi karaktere sahip olması beklenir?",
    options: ["Metalik bir bağ", "Tamamen kovalent, apolar bir bağ", "Hiçbir bağ oluşmaz", "Yüksek iyonik karakterli bir bağ", "Bağ karakteri elektronegatiflikle ilgisizdir"],
    correct: 3,
    explain: "Na ile Cl arasındaki büyük elektronegatiflik farkı, elektronların Cl'ye doğru büyük ölçüde kaydığı, yüksek iyonik karakterli bir bağ (NaCl) oluşumuna yol açar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Periyodik tabloda 'metaloidler' (yarı metaller), metaller ile ametaller arasında bir merdiven şeklinde uzanan, her iki grubun özelliklerini kısmen taşıyan elementlerdir (örneğin bor, silisyum, germanyum).",
    text: "Metaloidlerin periyodik tablodaki konumu hakkında en doğru ifade hangisidir?",
    options: ["Yalnızca tablonun en sağında bulunurlar", "Metaller ile ametaller arasındaki geçiş bölgesinde, merdiven şeklinde bir çizgi boyunca bulunurlar", "Yalnızca tablonun en solunda bulunurlar", "Metaloidler periyodik tabloda tanımlanmamıştır", "Metaloidler yalnızca d blokta bulunur"],
    correct: 1,
    explain: "Metaloidler, periyodik tabloda metaller ile ametaller arasındaki geçiş bölgesinde, genellikle p blokta merdiven şeklinde bir çizgi boyunca yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir elementin elektron ilgisi (elektron afinitesi), o elemente bir elektron eklendiğinde açığa çıkan (veya soğurulan) enerji miktarıdır.",
    text: "Halojenler (17. grup) genellikle çok yüksek (mutlak değerce büyük, negatif) elektron ilgisine sahiptir. Bunun temel nedeni nedir?",
    options: ["Halojenlerin zaten tam dolu bir değerlik kabuğuna sahip olması", "Bir elektron eklendiğinde değerlik kabuğu tamamen dolarak kararlı bir soy gaz dizilimine ulaşmaları", "Halojenlerin çekirdeklerinde hiç proton bulunmaması", "Elektron ilgisinin halojenler için tanımsız olması", "Halojenlerin metalik özellik göstermesi"],
    correct: 1,
    explain: "Halojenler bir elektron aldığında değerlik kabukları tamamen dolar (oktet) ve kararlı bir soy gaz dizilimine ulaşırlar; bu süreç büyük miktarda enerji açığa çıkararak yüksek (büyük negatif) elektron ilgisiyle sonuçlanır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim materyalinde periyodik özellik trendleri şu şekilde özetlenmektedir: atom yarıçapı sol-alta doğru artar; iyonlaşma enerjisi ve elektronegatiflik ise sağ-üste doğru artar.",
    text: "Bu genellemeye göre, periyodik tabloda en büyük atom yarıçapına sahip bölge neresidir?",
    options: ["Tam orta bölge", "Sağ üst köşe", "Yalnızca 18. grup", "Yalnızca 1. periyot", "Sol alt köşe"],
    correct: 4,
    explain: "Atom yarıçapı sol-alta doğru arttığından, periyodik tablonun sol alt köşesindeki elementler (örneğin francyum) en büyük atom yarıçapına sahiptir."
  },

  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bileşikte iki ametal atomu arasında elektronegatiflik farkı küçükse (örneğin iki aynı element arasında, fark=0), bağdaki elektronlar iki atom arasında eşit paylaşılma eğilimindedir.",
    text: "Elektronegatiflik farkı sıfır olan iki atom arasındaki bağ türü hangisidir?",
    options: ["Metalik bağ", "İyonik bağ", "Her zaman polar kovalent bağ", "Bağ oluşmaz", "Apolar (polar olmayan) kovalent bağ"],
    correct: 4,
    explain: "Elektronegatiflik farkı sıfır (veya çok küçük) olduğunda, bağ elektronları iki atom arasında eşit paylaşılır; bu tür bağlara apolar kovalent bağ denir."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    chart: {
      type: "line",
      title: "2. periyot elementlerinin ilk iyonlaşma enerjisi (kJ/mol)",
      xLabel: "Element (Li → Ne)",
      yLabel: "İyonlaşma enerjisi (kJ/mol)",
      data: [
        { x: 3, y: 520 },
        { x: 4, y: 899 },
        { x: 5, y: 801 },
        { x: 6, y: 1086 },
        { x: 7, y: 1402 },
        { x: 8, y: 1314 },
        { x: 9, y: 1681 },
        { x: 10, y: 2081 }
      ]
    },
    text: "Grafikte genel artan trend içinde, atom numarası 4'ten 5'e (Be'den B'ye) geçerken görülen düşüş en doğru şekilde nasıl açıklanır?",
    options: ["B'nin atom numarası Be'den küçüktür", "Grafikte bir hata vardır, düşüş olmamalıdır", "Bu düşüş yalnızca ölçüm belirsizliğinden kaynaklanır", "B'de tek elektronun daha az kararlı olan p alt kabuğuna yerleşmesi, tam dolu 2s² kabuğuna sahip Be'ye göre daha kolay koparılmasını sağlar", "İyonlaşma enerjisi atom numarasıyla hiçbir ilişki taşımaz"],
    correct: 3,
    explain: "Be'nin tam dolu 2s² alt kabuğu ekstra kararlılık sağlarken, B'de bir elektron daha yüksek enerjili ve daha az perdelenmiş 2p alt kabuğuna yerleşir; bu elektron daha kolay koparılabildiğinden B'nin iyonlaşma enerjisi Be'den düşüktür — genel artan trend içindeki küçük bir istisnadır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Aynı grafikte, atom numarası 7'den 8'e (N'den O'ya) geçerken de küçük bir düşüş gözlenmektedir (N: 1402, O: 1314 kJ/mol).",
    text: "Bu düşüşün nedeni, Be-B arasındaki düşüşle karşılaştırıldığında nasıl açıklanır?",
    options: ["Bu düşüşün hiçbir bilimsel açıklaması yoktur", "İki düşüş de tamamen aynı nedenden kaynaklanır (dolu s alt kabuğu etkisi)", "N'nin yarı dolu 2p³ alt kabuğunun (Hund kuralına göre simetrik, kararlı) ekstra kararlılığı, O'daki eşleşmiş elektronun daha kolay koparılmasına göre daha yüksek iyonlaşma enerjisi gerektirmesine yol açar", "O'nun atom numarası N'den küçüktür", "Düşüş yalnızca deneysel hata sonucudur"],
    correct: 2,
    explain: "N'nin 2p³ dizilimi (üç orbitalde birer elektron, Hund kuralına uygun) simetrik ve kararlıdır; O'da ise dördüncü elektron bir orbitalde eşleşmek zorunda kalır ve artan elektron-elektron itmesi bu elektronun daha kolay koparılmasına yol açar — Be-B'deki (s-p alt kabuk farkı) nedenden farklı bir mekanizmadır (elektron eşleşmesi etkisi)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    table: {
      headers: ["Element", "1. İyonlaşma enerjisi (kJ/mol)", "2. İyonlaşma enerjisi (kJ/mol)"],
      rows: [
        ["Na", "496", "4562"],
        ["Mg", "738", "1451"]
      ],
      caption: "Sodyum ve magnezyumun ilk iki iyonlaşma enerjisi"
    },
    text: "Tabloya göre, Na'nın 2. iyonlaşma enerjisinin 1. iyonlaşma enerjisinden çok daha büyük bir sıçrama göstermesi (496→4562) neden Mg'ninkinden (738→1451) çok daha belirgindir?",
    options: ["Mg'nin ikinci iyonlaşma enerjisi Na'dan her zaman büyük olmalıdır", "Na ve Mg arasında hiçbir fark yoktur, veriler hatalıdır", "Na'nın ikinci elektronu, kararlı [Ne] dizilimine ulaşmış Na⁺'dan koparılırken, Mg'nin ikinci elektronu henüz tamamlanmamış bir değerlik kabuğundan (3s¹) koparılır", "Bu fark yalnızca atom kütlesinden kaynaklanır", "İkinci iyonlaşma enerjisi yalnızca metal olmayan elementler için tanımlıdır"],
    correct: 2,
    explain: "Na⁺ zaten kararlı bir soy gaz ([Ne]) dizilimine sahiptir; bu dizilimden bir elektron daha koparmak çok büyük enerji gerektirir (iç kabuktan koparma). Mg⁺ ise henüz bir değerlik elektronu (3s¹) taşımaktadır, bu elektronu koparmak nispeten kolaydır — bu yüzden sıçrama Mg'de değil Na'da çok daha belirgindir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    circleCompare: {
      title: "İzoelektronik dört taneciğin yarıçap karşılaştırması (pm, temsilî)",
      unit: "pm",
      items: [
        { label: "N³⁻", value: 146 },
        { label: "O²⁻", value: 140 },
        { label: "F⁻", value: 133 },
        { label: "Na⁺", value: 102 }
      ]
    },
    text: "Bu dört tanecik aynı sayıda elektrona (10) sahip olmasına rağmen farklı yarıçaplara sahiptir. Görseldeki azalan boyut sıralaması hangi etkiyle en iyi açıklanır?",
    options: ["Bu sıralama rastgele oluşmuştur, bilimsel bir açıklaması yoktur", "Bu taneciklerin farklı sayıda elektrona sahip olması", "Yarıçap yalnızca elektron sayısına bağlıdır, proton sayısının etkisi yoktur", "Taneciklerin farklı periyotlarda bulunması", "Proton sayısı arttıkça (N'den Na'ya) aynı sayıdaki elektronu çeken net çekirdek çekiminin artması"],
    correct: 4,
    explain: "İzoelektronik taneciklerde (aynı elektron sayısı) proton sayısı arttıkça çekirdeğin elektron bulutunu çekme gücü artar; bu nedenle N³⁻(7p)>O²⁻(8p)>F⁻(9p)>Na⁺(11p) sıralamasında yarıçap küçülür."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir geçiş metali serisinde (örneğin 4. periyot Sc'den Zn'ye), atom yarıçapındaki değişim baş grup elementlerindeki kadar belirgin ve düzenli değildir; yarıçap önce hafifçe azalır, sonra neredeyse sabit kalır, seri sonuna doğru hafifçe artar.",
    text: "Bu düzensiz (görece yatay) değişimin temel nedeni nedir?",
    options: ["Bu düzensizlik yalnızca ölçüm hatasından kaynaklanır", "Geçiş metallerinde atom yarıçapı hiçbir zaman değişmez", "Geçiş metallerinde proton sayısı sabittir", "Eklenen elektronların iç (n-1)d alt kabuğuna yerleşmesi; bu elektronlar en dış (değerlik) kabuğu genişletmek yerine iç kabukta çekirdek yükündeki artışı kısmen perdeler", "Geçiş metallerinde periyodik trendler hiçbir zaman geçerli değildir"],
    correct: 3,
    explain: "Baş grup elementlerinde eklenen elektronlar en dış (değerlik) kabuğa yerleşirken, geçiş metallerinde eklenen elektronlar bir iç kabuğa (n-1)d yerleşir; bu elektronlar artan çekirdek yükünü değerlik elektronlarından kısmen perdeleyerek yarıçap değişimini yumuşatır (daha az belirgin hâle getirir)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    table: {
      headers: ["Element", "Elektronegatiflik (Pauling)", "Grup"],
      rows: [
        ["Li", "0,98", "1"],
        ["Na", "0,93", "1"],
        ["K", "0,82", "1"],
        ["F", "3,98", "17"],
        ["Cl", "3,16", "17"],
        ["Br", "2,96", "17"]
      ],
      caption: "1. ve 17. grup elementlerinin elektronegatiflik değerleri"
    },
    text: "Tabloya göre, hem 1. hem 17. grupta yukarıdan aşağıya inildikçe elektronegatiflik nasıl değişmektedir ve bu değişim atom yarıçapıyla nasıl ilişkilidir?",
    options: ["Elektronegatiflik ile atom yarıçapı arasında hiçbir ilişki yoktur", "Her iki grupta da elektronegatiflik artmaktadır", "1. grupta artıp 17. grupta azalmaktadır", "Her iki grupta da elektronegatiflik azalmaktadır; bu, yarıçapın artmasıyla değerlik elektronlarının çekirdekten uzaklaşıp daha zayıf çekilmesiyle tutarlıdır", "Elektronegatiflik yalnızca 17. grup için tanımlıdır"],
    correct: 3,
    explain: "Her iki grupta da (1. ve 17.) yukarıdan aşağıya inildikçe elektronegatiflik azalmaktadır; bu, yarıçap arttıkça bağ elektronlarının çekirdekten uzaklaşıp daha zayıf çekilmesiyle (elektronegatifliğin azalmasıyla) tutarlıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bileşikte iki atom arasındaki elektronegatiflik farkı hesaplanarak bağın türü tahmin edilebilir: fark ~0-0,4 arası apolar kovalent, ~0,4-1,7 arası polar kovalent, ~1,7'nin üzeri iyonik kabul edilir (yaklaşık genel kural).",
    text: "Elektronegatifliği 2,55 olan karbon (C) ile elektronegatifliği 3,44 olan oksijen (O) arasındaki bağ türü bu genel kurala göre nedir?",
    options: ["Polar kovalent bağ (fark ≈0,89)", "Apolar kovalent bağ", "İyonik bağ", "Metalik bağ", "Bağ oluşmaz"],
    correct: 0,
    explain: "C-O elektronegatiflik farkı 3,44-2,55=0,89'dur; bu değer genel kuraldaki polar kovalent aralığına (~0,4-1,7) girer."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X elementi ile bir Y elementi karşılaştırıldığında, X'in atom yarıçapı Y'ninkinden büyük, X'in iyonlaşma enerjisi ise Y'ninkinden küçüktür.",
    text: "Bu iki gözlem birbiriyle tutarlı mıdır ve neden?",
    options: ["Hayır, çünkü yarıçap ve iyonlaşma enerjisi her zaman aynı yönde değişir", "Hayır, büyük yarıçaplı bir atomun iyonlaşma enerjisi her zaman yüksek olmalıdır", "Bu iki özellik arasında hiçbir ilişki yoktur, tutarlılık değerlendirilemez", "Tutarlılık yalnızca aynı grup elementleri için değerlendirilebilir", "Evet, tutarlıdır; büyük yarıçaplı atomlarda değerlik elektronları çekirdekten uzak olduğundan daha kolay koparılır (düşük iyonlaşma enerjisi)"],
    correct: 4,
    explain: "Atom yarıçapı ile iyonlaşma enerjisi genellikle ters orantılı bir örüntü izler: yarıçap büyüdükçe değerlik elektronları çekirdekten uzaklaşıp daha zayıf çekilir, bu da iyonlaşma enerjisini düşürür; bu iki gözlem birbiriyle tutarlıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim materyalinde şu iddia tartışılmaktadır: 'Atom yarıçapı büyüdükçe elektron ilgisi (elektron afinitesi) her zaman azalır.' Ancak bazı istisnalar (örneğin azotun elektron ilgisinin beklenenden düşük olması) bu genellemeyi karmaşıklaştırır.",
    text: "Azotun (N) elektron ilgisinin komşu elementlere göre beklenenden düşük (hatta pozitife yakın) olmasının olası nedeni nedir?",
    options: ["N'nin hiçbir değerlik elektronu bulunmaması", "N'nin atom yarıçapının aşırı büyük olması", "N'nin metalik özellik göstermesi", "Bu istisnanın hiçbir bilimsel açıklaması yoktur", "N'nin yarı dolu (2p³) kararlı elektron diziliminin, eklenen dördüncü bir elektronun eşleşmesini enerji açısından elverişsiz kılması"],
    correct: 4,
    explain: "N'nin yarı dolu 2p³ dizilimi (Hund kuralına göre kararlı, simetrik) ek bir elektron eklendiğinde bozulur ve elektron eşleşmesi enerji açısından elverişsiz olduğundan, N'nin elektron ilgisi komşu elementlere (C, O) göre beklenenden düşük çıkar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir araştırmada, aynı periyottaki bir metalin (örneğin Na) ve bir ametalin (örneğin Cl) erime noktaları karşılaştırılmış; metalik/ametalik karakterin fiziksel özelliklere yansıması incelenmiştir.",
    text: "Metalik ve ametalik karakterin periyodik trendi, elementlerin fiziksel/kimyasal davranışlarıyla ilgili hangi genel çıkarımı destekler?",
    options: ["Metalik/ametalik karakter yalnızca elementin rengiyle ilgilidir", "Periyodik tablodaki konum, yalnızca soyut sayısal özellikleri değil, elementin gözlemlenebilir kimyasal/fiziksel davranışını da (örneğin bağ yapma biçimini) sistematik olarak tahmin etmeye yardımcı olur", "Yalnızca aynı grup elementleri benzer fiziksel özellik gösterir, periyot içinde hiçbir örüntü yoktur", "Periyodik tablodaki konumun fiziksel özelliklerle hiçbir ilgisi yoktur", "Bu tür karşılaştırmalar bilimsel olarak anlamsızdır"],
    correct: 1,
    explain: "Periyodik tablodaki konum (metalik/ametalik karakter dahil) elementin elektron verme/alma eğilimini, dolayısıyla oluşturacağı bağ türünü ve birçok fiziksel özelliğini sistematik olarak tahmin etmeye yardımcı olur; bu, periyodik tablonun öngörücü gücünü gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X elementinin ikinci iyonlaşma enerjisi, birinci iyonlaşma enerjisinden yalnızca hafifçe büyükken (örneğin Mg'de 738→1451 kJ/mol, yaklaşık 2 kat), üçüncü iyonlaşma enerjisi ikinciden çok daha büyük bir sıçrama gösterir (Mg'de 1451→7733 kJ/mol, yaklaşık 5 kat).",
    text: "Bu büyük sıçramanın nedeni en doğru şekilde nasıl açıklanır?",
    options: ["Üçüncü iyonlaşma enerjisi her zaman ikinciden küçüktür", "Mg'nin üçüncü elektronu da değerlik kabuğunda bulunur ve kolayca koparılır", "Bu sıçrama yalnızca ölçüm hatasından kaynaklanır", "Mg'nin proton sayısı üçüncü iyonlaşmada değişir", "Mg'nin ilk iki değerlik elektronu (3s²) kolayca kaybedilirken, üçüncü elektronun kararlı [Ne] iç kabuğundan koparılması gerekmesi"],
    correct: 4,
    explain: "Mg'nin iki değerlik elektronu (3s²) kaybedildikten sonra geriye kararlı [Ne] dizilimi kalır; bu dizilimden bir elektron daha koparmak (iç kabuktan koparma) çok daha fazla enerji gerektirdiğinden üçüncü iyonlaşma enerjisinde büyük bir sıçrama görülür."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    circleCompare: {
      title: "Aynı periyotta üç iyonun yarıçap karşılaştırması (pm, temsilî)",
      unit: "pm",
      items: [
        { label: "Na⁺", value: 102 },
        { label: "Mg²⁺", value: 72 },
        { label: "Al³⁺", value: 54 }
      ]
    },
    text: "Bu üç iyon aynı periyotta (3. periyot) yer alan elementlerden oluşmuş, hepsi soy gaz ([Ne]) dizilimine sahip katyonlardır. Görseldeki azalan boyut sıralamasının nedeni nedir?",
    options: ["Bu sıralamanın proton sayısıyla hiçbir ilgisi yoktur", "Bu üç iyonun farklı sayıda elektrona sahip olması", "Yük arttıkça yarıçapın büyümesi beklenirdi, bu veri hatalıdır", "Aynı elektron sayısına (izoelektronik) sahip olmalarına rağmen proton sayısının Na⁺'dan Al³⁺'ya doğru artması, elektron bulutunu daha güçlü çekerek yarıçapı küçültür", "Üç iyon farklı periyotlarda bulunmaktadır"],
    correct: 3,
    explain: "Na⁺, Mg²⁺ ve Al³⁺ hepsi 10 elektrona ([Ne] dizilimi) sahip izoelektronik iyonlardır; ancak proton sayıları sırasıyla 11, 12, 13'tür. Artan proton sayısı aynı elektron bulutunu daha güçlü çektiğinden yarıçap Na⁺'dan Al³⁺'ya doğru küçülür."
  },

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X anyonu (X²⁻) ile oluştuğu nötr X atomu karşılaştırıldığında, anyonun yarıçapının nötr atomdan büyük olduğu bilinmektedir. Ayrıca X²⁻'nin izoelektronik olduğu bir soy gaz atomu (aynı elektron sayısına sahip) vardır.",
    text: "X²⁻, izoelektronik olduğu soy gaz atomuyla karşılaştırıldığında yarıçapı hakkında en doğru çıkarım hangisidir?",
    options: ["Bu iki tanecik arasında yarıçap karşılaştırması yapılamaz", "X²⁻ ile soy gaz atomu her zaman birebir aynı yarıçapa sahiptir", "X²⁻ soy gaz atomundan her zaman daha küçüktür", "İzoelektronik taneciklerde proton sayısının yarıçapa hiçbir etkisi yoktur", "X²⁻'nin proton sayısı soy gazdan az olduğundan (izoelektronik ailede yükü en negatif olan taneciğin proton sayısı en düşüktür), X²⁻ soy gaz atomundan daha büyük yarıçapa sahip olacaktır"],
    correct: 4,
    explain: "İzoelektronik bir seride (aynı elektron sayısı) proton sayısı arttıkça yarıçap küçülür; X²⁻'nin proton sayısı, izoelektronik olduğu soy gazdan daha az olduğundan (anyon oluşumu için elektron eklenir, proton eklenmez), X²⁻ daha büyük yarıçapa sahiptir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim aracında şu soru sorulmaktadır: 'Neden aynı periyotta metalik özellik soldan sağa azalırken, aynı grupta yukarıdan aşağıya artmaktadır? Bu iki trend aynı temel nedene mi dayanır?'",
    text: "Bu sorunun en isabetli cevabı hangisidir?",
    options: ["Evet; her iki trend de değerlik elektronlarının çekirdeğe olan çekim gücündeki (etkin çekirdek yükü/uzaklık) değişimden kaynaklanır — periyotta artan çekim elektron kaybını zorlaştırır, grupta artan uzaklık elektron kaybını kolaylaştırır", "Hayır, bu iki trend birbirinden tamamen bağımsız, ilgisiz nedenlere dayanır", "Metalik özellik yalnızca periyot içinde değişir, grup içinde sabittir", "Metalik özellik yalnızca grup içinde değişir, periyot içinde sabittir", "Bu iki trend arasında hiçbir mantıksal bağlantı kurulamaz"],
    correct: 0,
    explain: "Her iki trend de aynı temel mekanizmaya (değerlik elektronlarının çekirdeğe olan efektif çekim gücü) dayanır: periyotta sağa gidildikçe artan çekirdek yükü elektronu tutmayı güçlendirir (metalik özellik azalır), grupta aşağı inildikçe artan uzaklık çekimi zayıflatır (metalik özellik artar)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X elementinin birinci iyonlaşma enerjisi düşük, elektronegatifliği düşük ve atom yarıçapı büyüktür.",
    text: "Bu üç özelliğe dayanarak, X elementinin periyodik tablodaki olası genel konumu ve metalik/ametalik karakteri hakkında en tutarlı çıkarım hangisidir?",
    options: ["X kesinlikle bir soy gazdır", "X, tablonun sağ/üst bölgesinde yer alan, güçlü ametalik karakter gösteren bir element olabilir", "Bu üç özellik birbiriyle çelişmektedir, tutarlı bir konum belirlenemez", "X'in konumu bu verilerle hiçbir şekilde tahmin edilemez", "X, tablonun sol/alt bölgesinde yer alan, güçlü metalik karakter gösteren bir element olabilir"],
    correct: 4,
    explain: "Düşük iyonlaşma enerjisi, düşük elektronegatiflik ve büyük atom yarıçapı, üçü birlikte tablonun sol/alt bölgesindeki (metalik karakteri güçlü) elementlerin tipik özellik profiline karşılık gelir; bu üç özellik birbirini destekleyen tutarlı bir konum işaret eder."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir kimyasal tepkimede, metal atomları elektron vererek katyon, ametal atomları ise elektron alarak anyon oluşturur; oluşan katyon ve anyonlar elektrostatik çekimle bir araya gelerek iyonik bir bileşik oluşturur.",
    text: "Güçlü metalik karakterli bir element (örneğin K) ile güçlü ametalik karakterli bir element (örneğin F) arasındaki tepkime, bu iki elementin periyodik özellikleri açısından neden 'kolay' gerçekleşir?",
    options: ["Bu tepkimenin periyodik özelliklerle hiçbir ilgisi yoktur", "K ve F arasındaki tepkime aslında zordur ve nadiren gerçekleşir", "K'nın yüksek iyonlaşma enerjisi elektron vermeyi kolaylaştırır", "F'nin düşük elektron ilgisi elektron almayı kolaylaştırır", "K'nın düşük iyonlaşma enerjisi elektron vermeyi, F'nin yüksek elektron ilgisi elektron almayı enerji açısından elverişli kılar; bu ikisi bir araya geldiğinde toplam enerji değişimi oldukça elverişli olur"],
    correct: 4,
    explain: "K'nın (1. grup) düşük iyonlaşma enerjisi elektron vermeyi enerji açısından ucuz kılarken, F'nin (17. grup) yüksek (büyük negatif) elektron ilgisi elektron almayı enerji açısından avantajlı kılar; bu iki elverişli süreç bir araya geldiğinde iyonik bileşik oluşumu enerji açısından oldukça elverişli hâle gelir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    table: {
      headers: ["İyon", "Elektron sayısı", "Proton sayısı", "Yarıçap (pm, temsilî)"],
      rows: [
        ["S²⁻", "18", "16", "184"],
        ["Cl⁻", "18", "17", "181"],
        ["K⁺", "18", "19", "138"],
        ["Ca²⁺", "18", "20", "100"]
      ],
      caption: "Dört izoelektronik iyonun yarıçapları"
    },
    text: "Tabloya göre, bu dört iyon arasında en büyük yarıçaplı olan S²⁻ ile en küçük yarıçaplı olan Ca²⁺ arasındaki fark hangi tek değişkenle açıklanabilir?",
    options: ["Proton sayısı (elektron sayısı sabit kalırken proton sayısı arttıkça yarıçap küçülür)", "Elektron sayısı (dördünde farklıdır)", "Yükün işareti dışında hiçbir neden yoktur, rastgele bir sıralamadır", "Atom kütlesi", "Bu dört iyonun bulunduğu periyot"],
    correct: 0,
    explain: "Tablodaki dört iyon da aynı elektron sayısına (18) sahiptir; farklı olan tek değişken proton sayısıdır (16'dan 20'ye). Proton sayısı arttıkça aynı elektron bulutuna etkiyen çekim kuvveti arttığından yarıçap küçülür."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    table: {
      headers: ["Element", "Atom yarıçapı (pm)", "1. İyonlaşma enerjisi (kJ/mol)", "Elektronegatiflik"],
      rows: [
        ["Li", "152", "520", "0,98"],
        ["Be", "112", "899", "1,57"],
        ["B", "85", "801", "2,04"],
        ["C", "77", "1086", "2,55"]
      ],
      caption: "2. periyodun ilk dört elementinin üç periyodik özelliği"
    },
    text: "Tablodaki üç özellik (yarıçap, iyonlaşma enerjisi, elektronegatiflik) arasındaki genel ilişki değerlendirildiğinde, B'nin iyonlaşma enerjisinin Be'den düşük olması, tablodaki diğer genel trendle nasıl bir arada değerlendirilmelidir?",
    options: ["Bu istisna, periyodik tablonun tüm trendlerinin geçersiz olduğunu gösterir", "B'nin düşük iyonlaşma enerjisi, yarıçap ve elektronegatiflik trendlerinin de tersine döndüğü anlamına gelir", "Tablodaki veriler birbiriyle tutarsızdır ve güvenilmezdir", "Yarıçap ve elektronegatiflik genel trendi (soldan sağa yarıçap azalır, elektronegatiflik artar) korunurken, iyonlaşma enerjisindeki küçük düşüş elektron dizilimindeki (dolu s vs tek p elektronu) yerel bir istisnadır; genel periyodik eğilim bundan etkilenmez", "İyonlaşma enerjisi, yarıçap ve elektronegatiflikten tamamen bağımsız, ilgisiz bir özelliktir"],
    correct: 3,
    explain: "Yarıçap (152→112→85→77) ve elektronegatiflik (0,98→1,57→2,04→2,55) düzenli bir trend izlerken, iyonlaşma enerjisindeki B'deki küçük düşüş (899→801) elektron dizilimine özgü yerel bir istisnadır (dolu 2s² vs tek 2p¹ elektronu); bu, genel periyodik trendlerin bazı özelliklerde küçük, açıklanabilir sapmalar içerebileceğini ama genel eğilimi geçersiz kılmadığını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir araştırmacı, aynı yükteki iyonların (örneğin tüm +2 yüklü iyonlar) yarıçaplarını karşılaştırdığında, hem periyot hem grup içindeki trendlerin nötr atomlarla aynı yönde (grup içinde aşağı inildikçe büyüme, periyotta sağa gidildikçe küçülme) devam ettiğini bulmuştur.",
    text: "Bu bulgu, iyon yarıçapı ile periyodik tablo konumu arasındaki ilişki hakkında en doğru hangi genellemeyi destekler?",
    options: ["Bu bulgu, periyodik tablonun yalnızca nötr atomlar için geçerli olduğunu kanıtlar", "İyonlar periyodik trendlerden tamamen bağımsızdır", "Yalnızca nötr atomlarda periyodik trend gözlenir, iyonlarda hiçbir trend yoktur", "İyonlaşma, atomun temel periyodik yapısını (kabuk sayısı, çekirdek yükü artışı) ortadan kaldırmaz; bu nedenle nötr atomlardaki temel periyodik trendler iyonlarda da benzer yönde gözlenir", "İyon yarıçapı yalnızca yüke bağlıdır, periyodik tablodaki konumun hiçbir etkisi yoktur"],
    correct: 3,
    explain: "İyon oluşumu (elektron kaybı/kazancı) atomun temel yapısını (kabuk sayısı, artan çekirdek yükü örüntüsü) değiştirmediğinden, aynı yükteki iyonlar arasında da grup ve periyot bazlı temel periyodik trendler (kabuk sayısı arttıkça büyüme, çekirdek yükü arttıkça küçülme) benzer yönde devam eder."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir kimyager, X ve Y adlı iki elementin bileşiğini incelerken, X'in elektronegatifliğinin 1,0, Y'ninkinin ise 3,5 olduğunu; bileşiğin XY formülünde birleştiğini bulmuştur.",
    text: "Bu verilere dayanarak, XY bileşiğindeki bağın türü ve X ile Y'nin periyodik tablodaki olası genel konumları hakkında en doğru çıkarım hangisidir?",
    options: ["Büyük elektronegatiflik farkı (2,5) nedeniyle bağ yüksek iyonik karakterli olacaktır; X muhtemelen tablonun sol/alt (metalik) bölgesinde, Y ise sağ/üst (ametalik) bölgesinde yer alır", "Bağ kesinlikle apolar kovalenttir", "X ve Y'nin periyodik tablodaki konumu elektronegatiflik farkından çıkarılamaz", "Küçük elektronegatiflik farkı nedeniyle bağ metalik karakterli olacaktır", "Bu veriler yalnızca X ve Y'nin aynı grupta olduğunu gösterir"],
    correct: 0,
    explain: "2,5'lik büyük elektronegatiflik farkı yüksek iyonik karakterli bir bağa işaret eder; düşük elektronegatiflik (1,0) genellikle tablonun sol/alt (metalik) bölgesindeki elementlerde, yüksek elektronegatiflik (3,5) ise sağ/üst (ametalik) bölgedeki elementlerde görülür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim materyalinde, lantanit serisindeki elementlerin (57-71 arası) atom yarıçaplarının, atom numarası arttıkça beklenenden daha az değiştiği ve bu durumun 'lantanit büzülmesi' olarak adlandırıldığı; bu büzülmenin, lantanitlerden hemen sonra gelen 5d geçiş metallerinin (Hf, Ta gibi) yarıçaplarının beklenenden küçük çıkmasına da yol açtığı belirtilmektedir.",
    text: "Lantanit büzülmesinin 5d geçiş metallerine olan bu 'gecikmeli' etkisi en doğru şekilde nasıl açıklanır?",
    options: ["Bu durum, periyodik tablonun d ve f blok ayrımının hatalı olduğunu gösterir", "Bu etkinin 5d elementleriyle hiçbir ilgisi yoktur, tamamen tesadüfidir", "Lantanit büzülmesi yalnızca lantanitleri etkiler, sonraki hiçbir elementi etkilemez", "4f alt kabuğundaki elektronların zayıf perdeleme etkisi, lantanit serisi boyunca birikerek periyodik tabloda hemen sonra gelen elementlerin de beklenenden daha küçük yarıçaplı çıkmasına neden olur", "5d elementlerinin küçük yarıçapı yalnızca proton sayısıyla açıklanır, 4f elektronlarının etkisi yoktur"],
    correct: 3,
    explain: "4f orbitalleri elektronları zayıf perdeler; bu nedenle lantanit serisi boyunca artan çekirdek yükü, dış elektronlar tarafından yeterince perdelenmeden hissedilir ve yarıçap beklenenden az büyür/hatta küçülür. Bu birikimli etki, lantanitlerden hemen sonra gelen 5d elementlerinin de (aynı grup 4d elementleriyle karşılaştırıldığında) beklenenden küçük yarıçaplı olmasına yol açar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir araştırmacı şu karşılaştırmayı yapmaktadır: 4. periyot geçiş metali Zr (zirkonyum) ile 5. periyot geçiş metali Hf (hafniyum), lantanit büzülmesi nedeniyle beklenenden çok daha yakın atom yarıçaplarına (Zr: 160 pm, Hf: 159 pm) sahiptir; oysa aynı gruptaki diğer element çiftlerinde (örneğin Ti-Zr) yarıçap farkı çok daha belirgindir.",
    text: "Zr ve Hf'nin bu denli yakın yarıçaplara sahip olmasının kimyasal sonucu ne olabilir?",
    options: ["Bu benzerlik yalnızca fiziksel özellikleri etkiler, kimyasal davranışı hiç etkilemez", "Zr ve Hf, aynı gruptaki tipik element çiftlerinden (örneğin Ti-Zr) daha benzer kimyasal davranış sergileyebilir, çünkü yarıçap kimyasal davranışı büyük ölçüde etkileyen bir faktördür", "Yarıçap benzerliğinin kimyasal davranışla hiçbir ilgisi yoktur", "Zr ve Hf farklı gruplarda yer aldığından bu karşılaştırma anlamsızdır", "Zr ve Hf'nin kimyasal davranışları arasında hiçbir benzerlik beklenmez"],
    correct: 1,
    explain: "Atom/iyon yarıçapı, bir elementin kimyasal davranışını (bağ uzunluğu, koordinasyon sayısı, reaktivite gibi) büyük ölçüde etkiler; Zr ve Hf'nin lantanit büzülmesi nedeniyle beklenenden çok yakın yarıçaplara sahip olması, bu iki elementin kimyasal olarak alışılmadık derecede benzer davranmasına (ve pratikte ayrıştırılmalarının zor olmasına) yol açar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bilim yazısında şu iddia savunulmaktadır: 'Periyodik özellik trendleri (yarıçap, iyonlaşma enerjisi, elektronegatiflik) birbirinden bağımsız kurallar değil, hepsi aynı temel nedene (etkin çekirdek yükü ve elektron kabuk sayısı) dayanan tek bir tutarlı çerçevenin farklı yansımalarıdır.'",
    text: "Bu iddiayı en güçlü şekilde destekleyen kanıt hangisidir?",
    options: ["Periyodik özelliklerin her elementte tamamen rastgele değerler alması", "Üç özelliğin birbirinden tamamen farklı, ilgisiz yönlerde değişmesi", "Yalnızca bir özelliğin (örneğin yarıçap) periyodik trend göstermesi, diğerlerinin göstermemesi", "Üç özelliğin de aynı yönde (soldan sağa artan/azalan, yukarıdan aşağıya tersi) ve aynı istisna noktalarında (yarı dolu/tam dolu alt kabuklar) benzer sapmalar göstermesi", "Bu üç özelliğin hiçbirinin periyodik tablo konumuyla ilişkili olmaması"],
    correct: 3,
    explain: "Yarıçap, iyonlaşma enerjisi ve elektronegatifliğin hepsinin soldan sağa/yukarıdan aşağıya tutarlı yönde değişmesi VE benzer istisna noktalarında (örneğin Be-B, N-O geçişlerinde) benzer sapmalar göstermesi, bu üç özelliğin ortak bir temel nedene (etkin çekirdek yükü, elektron dizilimi, perdelenme) dayandığının güçlü bir kanıtıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X elementinin ardışık iyonlaşma enerjileri şöyledir: 1. IE=580, 2. IE=1815, 3. IE=2740, 4. IE=11600 kJ/mol.",
    text: "Bu veriye dayanarak, X elementinin en kararlı iyonunun yükü ve muhtemel grubu hakkında en doğru çıkarım hangisidir?",
    options: ["Tüm iyonlaşma enerjileri birbirine yakın olduğundan X'in belirli bir kararlı yükü yoktur", "1. ve 2. iyonlaşma enerjisi arasındaki fark en büyük olduğundan X'in en kararlı iyonu +1'dir", "3. ve 4. iyonlaşma enerjisi arasındaki büyük sıçrama (2740→11600), X'in en kararlı iyonunun +3 yüklü olduğunu ve X'in muhtemelen 13. grupta (örn. alüminyum) yer aldığını gösterir", "X'in en kararlı iyonu +4'tür, çünkü 4. iyonlaşma enerjisi en yüksek değerdir", "Bu veriyle X'in grubu hakkında hiçbir çıkarım yapılamaz"],
    correct: 2,
    explain: "Büyük bir sıçrama (burada 3'ten 4'e, yaklaşık 4 kat artış), o noktadan sonra elektronların kararlı bir iç kabuktan koparılmaya başladığını gösterir; bu, X'in 3 değerlik elektronuna sahip olduğunu (13. grup, örn. Al) ve en kararlı iyonunun +3 olduğunu işaret eder."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    circleCompare: {
      title: "Dört elementin atom yarıçapı ile birinci iyonlaşma enerjisi arasındaki ters ilişki (temsilî, yarıçap pm)",
      unit: "pm",
      items: [
        { label: "K (IE=419 kJ/mol)", value: 227 },
        { label: "Ca (IE=590 kJ/mol)", value: 197 },
        { label: "Ga (IE=579 kJ/mol)", value: 122 },
        { label: "Kr (IE=1351 kJ/mol)", value: 88 }
      ]
    },
    text: "Görseldeki verilere dikkatle bakıldığında, Ca (yarıçap 197, IE 590) ile Ga (yarıçap 122, IE 579) karşılaştırması, 'yarıçap küçüldükçe iyonlaşma enerjisi her zaman artar' genellemesiyle nasıl bir ilişki içindedir?",
    options: ["Bu iki veri noktası genellemeyi mükemmel şekilde doğrular, hiçbir istisna yoktur", "Bu iki veri noktası genellemeyle tam örtüşmez (Ga'nın yarıçapı Ca'dan küçük olmasına rağmen IE'si de düşüktür); bu, yarıçapın tek başına iyonlaşma enerjisini belirleyen tek etken olmadığını, elektron diziliminin (Ga'da tek bir 4p elektronu) de rol oynadığını gösterir", "Ca ve Ga karşılaştırması periyodik trendlerle hiçbir ilgisi olmayan rastgele bir durumdur", "Ga'nın düşük IE değeri bir veri hatasıdır, gerçekte Ca'dan yüksek olmalıdır", "Yarıçap ile iyonlaşma enerjisi arasında hiçbir zaman ters ilişki yoktur"],
    correct: 1,
    explain: "Ca'dan Ga'ya geçişte yarıçap küçülmesine rağmen (197→122) iyonlaşma enerjisi de hafifçe düşmektedir (590→579); bu, tam dolu 4s² kabuğuna sahip Ca'nın ekstra kararlılığı ile Ga'nın tek, daha az perdelenmiş 4p¹ elektronunun kolay koparılması nedeniyle genel yarıçap-IE ters ilişkisinin mutlak/istisnasız olmadığını, elektron diziliminin de ayrı bir etken olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim programında öğrencilere şu senaryo sunulmaktadır: 'Periyodik tabloda hiç bilinmeyen, henüz keşfedilmemiş bir X elementinin 3. periyotta, 1. grupta yer alacağı teorik olarak öngörülüyor.' (Bu tür bir element pratikte zaten bilinen sodyumdur, ancak senaryo bir tahmin alıştırması olarak kurgulanmıştır.)",
    text: "Yalnızca periyodik tablodaki konumuna (3. periyot, 1. grup) dayanarak, bu X elementinin komşularıyla (2. periyot 1. grup ve 4. periyot 1. grup elementleri) karşılaştırıldığında atom yarıçapı, iyonlaşma enerjisi ve metalik karakteri hakkında en isabetli tahmin hangisidir?",
    options: ["Atom yarıçapı komşularından daha küçük olacaktır çünkü 3. periyottadır", "Atom yarıçapı iki komşusu arasında bir değerde olacak, iyonlaşma enerjisi iki komşusu arasında bir değerde olacak ve metalik karakteri güçlü olacaktır (1. grup metali olarak)", "İyonlaşma enerjisi komşularından daha yüksek olacaktır çünkü 1. gruptadır", "Metalik karakteri zayıf olacaktır çünkü 3. periyottadır", "Periyodik tablodaki konumdan hiçbir özellik tahmin edilemez"],
    correct: 1,
    explain: "Periyodik trendlere göre bir grup içinde ara bir periyotta yer alan element, komşu periyotlardaki aynı grup elementleri arasında bir yarıçap ve iyonlaşma enerjisi değerine sahip olma eğilimindedir; 1. grupta olduğundan güçlü metalik karakter (kolay elektron verme) beklenir — bu, Mendeleev'in periyodik tabloyla henüz keşfedilmemiş elementlerin özelliklerini başarıyla tahmin etmesinin dayandığı mantıktır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir kimyager, periyodik tablodaki 'köşegen ilişkisi' kavramını incelemektedir: bazı elementler (örneğin Li ve Mg, Be ve Al, B ve Si), aynı grupta olmadıkları hâlde köşegen konumları nedeniyle birbirine benzer kimyasal özellikler gösterir; bu, atom/iyon yarıçaplarının bu çiftlerde tesadüfen birbirine yakın çıkmasıyla ilişkilendirilir.",
    text: "Köşegen ilişkisinin, standart 'aynı grup benzer özellik gösterir' kuralıyla birlikte değerlendirildiğinde en doğru yorumu hangisidir?",
    options: ["Köşegen ilişkisi yalnızca rastlantısaldır, hiçbir niceliksel açıklaması yoktur", "Köşegen ilişkisi, periyodik tablonun grup kuralının tamamen yanlış olduğunu kanıtlar", "Kimyasal benzerlik temelde yarıçap ve yük yoğunluğu gibi niceliksel benzerliklerden kaynaklanır; bu benzerlik çoğunlukla aynı grupta görülse de, köşegen konumdaki elementler de (periyot artışıyla yarıçap büyümesi, grup azalışıyla yarıçap küçülmesi birbirini telafi ettiğinde) benzer yarıçap/yük yoğunluğuna ulaşarak istisnai bir benzerlik gösterebilir", "Aynı grupta olmayan hiçbir iki element birbirine benzer özellik gösteremez", "Köşegen ilişkisi yalnızca Li ve Mg için geçerlidir, başka hiçbir çiftte görülmez"],
    correct: 2,
    explain: "Köşegen ilişkisi, periyotta sağa gidildikçe yarıçapın küçülmesi ile grupta aşağı inildikçe yarıçapın büyümesinin bir köşegen boyunca birbirini kısmen dengeleyebileceğini gösterir; bu durumda köşegen konumundaki iki element (örn. Li ve Mg) benzer yük yoğunluğuna/yarıçapa ulaşarak, standart grup kuralına ek olarak istisnai bir kimyasal benzerlik sergileyebilir — bu, grup kuralını geçersiz kılmaz, tamamlayıcı bir örüntüdür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir araştırmacı, aynı grupta yer alan iki elementin (örneğin O ve S) elektron ilgisi değerlerini karşılaştırdığında beklenmedik bir sonuçla karşılaşmıştır: 2. periyot elementi olan oksijenin elektron ilgisi, 3. periyot elementi olan kükürtten daha düşük çıkmıştır; oysa genel trend yukarıdan aşağıya azalan elektron ilgisini öngörür.",
    text: "Bu istisnanın en olası açıklaması nedir?",
    options: ["Bu istisnanın hiçbir bilimsel açıklaması yoktur, veri hatalıdır", "Oksijenin küçük atom yarıçapı nedeniyle, eklenen elektronun mevcut elektronlarla yüksek elektron-elektron itmesi yaşaması; kükürtün daha büyük hacmi bu itmeyi azaltarak elektron eklemeyi görece kolaylaştırması", "Oksijenin proton sayısı kükürtten fazladır, bu yüzden elektron ilgisi düşüktür", "Elektron ilgisi yalnızca 3. periyot ve sonrası için tanımlıdır", "Oksijen bir metaldir, bu yüzden elektron almaya isteksizdir"],
    correct: 1,
    explain: "Oksijenin küçük atom hacmi, eklenen elektronun mevcut değerlik elektronlarıyla (2p⁴ dizilimi) yoğun bir elektron-elektron itmesi yaşamasına neden olur; bu itme enerji açısından elverişsizdir. Kükürtün daha büyük hacmi (3p⁴) bu itmeyi azaltarak elektron eklemeyi nispeten kolaylaştırır — bu, O-S arasındaki elektron ilgisi trendinin istisnasını açıklar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X elementinin nötr atomunun 1. iyonlaşma enerjisi 1000 kJ/mol, oluşturduğu X⁻ anyonunun elektron ilgisi ise -350 kJ/mol'dür (elektron eklemek enerji açığa çıkarır).",
    text: "Bu iki veri birlikte değerlendirildiğinde, X elementi hakkında en tutarlı çıkarım hangisidir?",
    options: [
      "X, elektron vermeye karşı dirençli (yüksek IE) fakat elektron almaya istekli (negatif, elverişli elektron ilgisi) bir elementtir; bu, X'in muhtemelen bir ametal (örn. halojenlere yakın) olduğunu düşündürür",
      "X kesinlikle bir alkali metaldir",
      "Bu iki veri birbiriyle çelişmektedir, aynı elemente ait olamaz",
      "X'in metalik/ametalik karakteri bu verilerden belirlenemez",
      "Yüksek iyonlaşma enerjisi her zaman düşük (elverişsiz) elektron ilgisiyle birlikte görülür"
    ],
    correct: 0,
    explain: "Yüksek iyonlaşma enerjisi (elektron vermeye direnç) ile elverişli (negatif) elektron ilgisi (elektron almaya isteklilik) birlikte, tipik olarak ametalik karakterli, periyodik tablonun sağ üst bölgesine yakın bir elementin profiline işaret eder."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim materyalinde şu karşılaştırma yapılmaktadır: Mg²⁺ iyonu ile Na⁺ iyonu izoelektronik değildir (Mg²⁺ 10 elektron, Na⁺ de 10 elektron — aslında izoelektroniktirler); ancak Mg²⁺'nin yükü Na⁺'dan daha büyüktür (+2 karşı +1) ve yarıçapı daha küçüktür.",
    text: "Aynı elektron sayısına (izoelektronik) sahip olsalar da yüklerinin farklı olması, bu iki iyonun kimyasal davranışını (örneğin bir bileşikteki bağ gücünü) nasıl etkiler?",
    options: ["Na⁺ her zaman Mg²⁺'den daha güçlü iyonik bağ oluşturur", "Yük farkı kimyasal davranışı hiçbir şekilde etkilemez, yalnızca elektron sayısı önemlidir", "Daha yüksek yüke ve daha küçük yarıçapa sahip Mg²⁺, aynı anyonla daha güçlü elektrostatik çekim (daha yüksek yük yoğunluğu) oluşturarak genellikle daha güçlü/daha yüksek erime noktalı iyonik bileşikler oluşturur", "İzoelektronik iyonlar her zaman birebir aynı kimyasal davranışı gösterir", "Yük yoğunluğu kavramı yalnızca anyonlar için geçerlidir"],
    correct: 2,
    explain: "Mg²⁺'nin daha yüksek yükü ve daha küçük yarıçapı, daha yüksek bir 'yük yoğunluğuna' (yük/yarıçap oranına) karşılık gelir; bu, aynı anyonla daha güçlü elektrostatik etkileşim ve genellikle daha yüksek erime noktalı iyonik bileşikler anlamına gelir (örneğin MgO'nun erime noktası NaCl'den çok daha yüksektir)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir araştırmacı, periyodik tablodaki 18 elementin metalik/ametalik karakterini 'metalik indeks' adı verilen sayısal bir ölçekle (0=tam ametalik, 100=tam metalik) derecelendirmiş ve bu değerlerin periyot/grup konumuyla güçlü bir korelasyon gösterdiğini bulmuştur; ancak metaloidler (B, Si, Ge, As, Sb, Te) bu ölçekte orta değerler (40-60 arası) almıştır.",
    text: "Metaloidlerin bu 'orta' konumu, periyodik özellik trendleri hakkında en doğru hangi genellemeyi destekler?",
    options: [
      "Periyodik özellikler (burada metalik/ametalik karakter) genellikle keskin sınırlarla değil, kademeli/sürekli bir geçişle değişir; metal-ametal ayrımı bu sürekliliğin üzerine sonradan çizilmiş kavramsal bir sınırdır",
      "Metaloidlerin var olması periyodik tablonun tüm mantığını geçersiz kılar",
      "Metalik/ametalik karakter yalnızca iki kesin kategoriye (tam metal, tam ametal) ayrılabilir, ara değer imkânsızdır",
      "Metaloidler periyodik trendlerin dışında, tesadüfen var olan elementlerdir",
      "Bu ölçek yalnızca metaloidler için anlamlıdır, diğer elementler için geçersizdir"
    ],
    correct: 0,
    explain: "Metaloidlerin orta değerler alması, metalik/ametalik karakterin (ve genel olarak birçok periyodik özelliğin) kesin, keskin sınırlı kategoriler değil, periyodik tablo boyunca kademeli olarak değişen sürekli bir spektrum olduğunu gösterir; 'metal/ametal' ayrımı bu sürekliliğe pratik amaçlarla çizilmiş bir sınırdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X elementinin elektronegatifliği 2,1, bir Y elementinin elektronegatifliği ise 2,0'dir (çok küçük bir fark, 0,1). Buna karşın X'in atom yarıçapı Y'ninkinden çok daha büyüktür ve X'in iyonlaşma enerjisi Y'ninkinden belirgin şekilde düşüktür.",
    text: "Bu görünüşteki tutarsızlık (elektronegatifliğin neredeyse eşit olması, fakat yarıçap ve iyonlaşma enerjisinin çok farklı olması) en doğru şekilde nasıl açıklanır?",
    options: ["Bu bir tutarsızlıktır ve mevcut atom teorisiyle açıklanamaz", "Elektronegatiflik, yarıçap ve iyonlaşma enerjisiyle güçlü korelasyon gösterse de birebir aynı büyüklük değildir; farklı periyot/grup kombinasyonlarında (örneğin biri sol-alt, diğeri sağ-üst yönünde küçük bir kaymayla) benzer elektronegatiflik değerine farklı yarıçap/IE kombinasyonlarıyla ulaşılabilir", "Elektronegatiflik, yarıçap ve iyonlaşma enerjisinden tamamen bağımsız, ilgisiz bir büyüklüktür", "X ve Y'nin verileri hatalı ölçülmüştür", "Elektronegatiflik yalnızca iyonlaşma enerjisine bağlıdır, yarıçapın hiçbir etkisi yoktur"],
    correct: 1,
    explain: "Elektronegatiflik genellikle hem yarıçap hem iyonlaşma enerjisiyle ilişkili bir büyüklük olsa da, bu üç özellik birebir aynı matematiksel fonksiyon değildir; farklı periyot/grup konumlarındaki elementler, yarıçap ve iyonlaşma enerjisi açısından belirgin farklılıklar taşısa bile (birbirini kısmen dengeleyen etkilerle) benzer elektronegatiflik değerlerine ulaşabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bilim tarihi kaynağında, Mendeleev'in periyodik tablosunun ilk hâlinde bazı elementlerin (örneğin tellür ve iyot) atom kütlesine göre sıralandığında kimyasal özellikleriyle uyumsuz bir konuma düştüğü, ancak Mendeleev'in bu iki elementin yerini kimyasal özelliklerine (bugün bildiğimiz atom numarasına denk gelen bir mantığa) göre değiştirdiği anlatılmaktadır.",
    text: "Mendeleev'in bu kararı, periyodik özelliklerin (grup benzerliği) sıralama ilkesi olarak neden atom kütlesinden daha güvenilir kabul edildiğini nasıl gösterir?",
    options: ["Tellür ve iyodun konumu periyodik tablo için önemsiz bir ayrıntıdır", "Mendeleev'in kararı tamamen keyfi olup hiçbir bilimsel gerekçesi yoktur", "Atom kütlesi her zaman kimyasal özelliklerle birebir örtüşür, Mendeleev hata yapmıştır", "Kimyasal davranış (grup üyeliği, değerlik) doğrudan elektron dizilimiyle belirlenir; atom kütlesi (izotop dağılımından etkilenen dolaylı bir ölçüt) bazı durumlarda bu temel ilişkiyi yansıtmayabilir, bu yüzden Mendeleev kimyasal tutarlılığı önceliklendirmiştir", "Bu karar, periyodik tablonun bilimsel bir temeli olmadığını gösterir"],
    correct: 3,
    explain: "Kimyasal davranış temelde elektron dizilimine (ve modern anlayışla atom numarasına) bağlıdır; atom kütlesi izotop bolluğundan etkilenen dolaylı bir büyüklük olduğundan bazen kimyasal gruplamayla uyuşmayabilir. Mendeleev'in gözlemlenen kimyasal benzerliği (grup tutarlılığını) atom kütlesi sırasının önüne koyması, sonradan atom numarasının (proton sayısının) asıl düzenleyici ilke olduğunun keşfedilmesini önceden haber veren isabetli bir bilimsel sezgiydi."
  }
]
};

// Global erişim kullanan eski sayfalarla uyumluluk
if (typeof window !== "undefined") {
  window.QUIZ = QUIZ;
}
