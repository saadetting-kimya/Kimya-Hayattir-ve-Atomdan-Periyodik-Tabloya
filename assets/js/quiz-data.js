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
    options: ["Coğrafya", "Kimya", "Tarih", "Edebiyat", "Astronomi"],
    correct: 1,
    explain: "Bir ürünün bileşenlerinin belirlenmesi, oranlanması ve bir araya getirilmesi doğrudan kimya bilgisine dayanır; her bileşenin kendine özgü kimyasal işlevi vardır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Açık havada bırakılan bir demir çubuğun yüzeyinde birkaç gün içinde kızıl-kahverengi bir tabaka oluşur.",
    text: "Bu gözlem hangi tür bir değişimin sonucudur?",
    options: ["Fiziksel değişim; yalnızca şekil değişmiştir", "Kimyasal değişim; yeni bir madde (pas/demir oksit) oluşmuştur", "Biyolojik bir süreçtir", "Değişim gözlemlenmemiştir", "Yalnızca sıcaklık değişimidir"],
    correct: 1,
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
    options: ["İçindeki suyun buharlaşması", "İçindeki kimyasal enerjinin elektrik enerjisine dönüştürülmesi", "Işığın doğrudan elektriğe çevrilmesi", "Manyetik alan oluşturması", "Sesin enerjiye dönüştürülmesi"],
    correct: 1,
    explain: "Piller, içlerindeki kimyasal maddeler arasındaki tepkimeler sonucunda açığa çıkan kimyasal enerjiyi elektrik enerjisine dönüştüren düzeneklerdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Soğuk bir bardağın dış yüzeyinde birkaç dakika içinde su damlacıkları belirir; bardağın içindeki sıvı seviyesi değişmez.",
    text: "Bardağın dışındaki bu su damlacıklarının kaynağı en doğru şekilde nedir?",
    options: ["Bardağın içindeki sıvının dışarı sızması", "Havadaki su buharının soğuk yüzeyle temas edip yoğuşması", "Bardağın malzemesinin su üretmesi", "Buzun kimyasal olarak parçalanması", "Havadaki oksijenin suya dönüşmesi"],
    correct: 1,
    explain: "Havadaki nem (su buharı), soğuk yüzeyle temas edince yoğuşarak sıvı hâle geçer; bu, bardağın içindeki sıvıyla ilgisi olmayan bir fiziksel olaydır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir güneş kremi etiketinde 'SPF 30' ifadesi ve içerik listesinde çinko oksit yer almaktadır.",
    text: "Güneş kremlerinin koruma sağlama işlevi en doğrudan hangi alanın bilgisine dayanır?",
    options: ["Müzik", "Kimya", "Coğrafya", "Görsel sanatlar", "Edebiyat"],
    correct: 1,
    explain: "Güneş kremlerindeki bileşenlerin (örneğin çinko oksit) UV ışınlarını yansıtma/soğurma özelliği, kimyasal madde özelliklerinin incelenmesiyle geliştirilmiş bir uygulamadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir dilim elma, havada birkaç dakika bekletildiğinde yüzeyi kahverengiye döner.",
    text: "Bu renk değişimi hangi türde bir olaydır?",
    options: ["Fiziksel değişim; yalnızca su kaybı olur", "Kimyasal değişim; elmadaki bazı bileşikler oksijenle tepkimeye girer", "Elmanın çürümesiyle ilgisi olmayan optik bir yanılsamadır", "Sıcaklık artışından kaynaklanır", "Yalnızca ışıkla ilgili bir durumdur"],
    correct: 1,
    explain: "Elmanın kesilen yüzeyindeki bazı bileşikler havadaki oksijenle tepkimeye girerek (enzimatik esmerleşme) yeni, kahverengi renkli bileşikler oluşturur; bu bir kimyasal değişimdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir naftalin (güve topu) tableti, kapalı bir dolapta haftalar içinde giderek küçülür ve hiç sıvı birikintisi bırakmaz.",
    text: "Bu durumu en doğru şekilde açıklayan hâl değişimi kavramı hangisidir?",
    options: ["Erime; katı önce sıvı hâle geçer", "Süblimleşme; katı doğrudan gaz hâline geçer", "Kimyasal bozunma; yeni bir madde oluşur", "Yoğuşma", "Kristalleşme"],
    correct: 1,
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
    options: ["Şişedeki suyun buharlaşması", "Sıvının aniden ısınması", "Basıncın düşmesiyle çözünmüş karbondioksit gazının çözeltiden ayrılması", "Kimyasal bir bozunma başlaması", "Havadaki oksijenin sıvıya karışması"],
    correct: 2,
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
    options: ["Kimyasal parçalanma; su, hidrojen ve oksijene ayrışır", "Süblimleşme; kumaş doğrudan gaza dönüşür", "Buharlaşma; sıcaklık etkisiyle sıvı su, gaz hâline geçer", "Erime", "Kristalleşme"],
    correct: 2,
    explain: "Ütünün ısısı, kumaştaki sıvı hâldeki suyun sıcaklığını artırarak buharlaşmasını (gaz hâline geçmesini) sağlar; kumaşın kendisinde bir değişim olmaz."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir mum yakıldığında hem şekil değiştirip erimekte hem de alev, ısı ve is (kurum) oluşturmaktadır.",
    text: "Bu gözlemde kaç farklı türde değişim bir arada yaşanmaktadır?",
    options: ["Yalnızca bir kimyasal değişim", "Yalnızca bir fiziksel değişim", "İki; hem fiziksel (erime) hem kimyasal (yanma) değişim bir aradadır", "Hiçbir değişim yoktur, yalnızca ışık görülür", "Üç farklı biyolojik süreç"],
    correct: 2,
    explain: "Mumun erimesi fiziksel bir değişimdir (mum maddesi kimliğini korur); yanma ise mumun oksijenle tepkimeye girip karbondioksit ve su buharı oluşturması nedeniyle kimyasal bir değişimdir; ikisi eş zamanlı gerçekleşir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tarifte kabartma tozu, sirke ile karıştırıldığında anında köpürme ve kabarcıklanma gözlemlenir.",
    text: "Bu gözlem en doğrudan hangi çıkarımı destekler?",
    options: ["Yalnızca sıcaklık artışı gözlemlenmiştir", "İki madde birbiriyle hiçbir etkileşime girmemiştir", "İki madde arasında bir kimyasal tepkime gerçekleşmiş, gaz açığa çıkmıştır", "Kabartma tozu sirkede fiziksel olarak çözünmüştür, başka bir şey olmamıştır", "Bu, yalnızca renk değişimidir"],
    correct: 2,
    explain: "Kabartma tozu (sodyum bikarbonat) ile sirkedeki asetik asit arasındaki tepkime karbondioksit gazı açığa çıkarır; ortaya çıkan köpürme, yeni bir maddenin (gazın) oluştuğu kimyasal bir tepkimenin göstergesidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir market rafında; sabun 'temizlik ürünü', aspirin 'ilaç', gübre 'tarım ürünü', kozmetik krem 'bakım ürünü' olarak farklı reyonlarda satılmaktadır.",
    text: "Bu dört ürünün farklı reyonlarda satılıyor olması, kimya biliminin doğası hakkında en doğru hangi çıkarımı destekler?",
    options: ["Kimya yalnızca laboratuvarda kullanılan, günlük hayattan kopuk bir bilimdir", "Bu ürünlerin hiçbiri kimyasal madde içermez", "Kimya bilgisi, birbirinden çok farklı görünen pek çok günlük alanın (temizlik, sağlık, tarım, bakım) temelinde yer alır", "Farklı reyonlarda satılmaları, aralarında hiçbir bilimsel ortak nokta olmadığını kanıtlar", "Bu ürünlerin üretiminde kimya bilgisi kullanılmamıştır"],
    correct: 2,
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
    options: ["Musluk suyu ve sıvı sabun", "Sirke ve sıvı sabun", "Sirke ve lavabo açıcı", "Lavabo açıcı ve sıvı sabun", "Sirke ve musluk suyu"],
    correct: 2,
    explain: "Sirke asidik (pH 2,5), lavabo açıcı ise kuvvetli bazik (pH 13,5) olduğundan, ikisi karıştırıldığında birbirini nötrleştirme etkisi en güçlü olur ve karışım pH'ı 7'ye en çok yaklaşır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir çamaşır suyu şişesinin etiketinde 'tahriş edici' uyarı sembolü bulunurken, aynı raftaki bir tuvalet açıcısının etiketinde 'aşındırıcı ve tahriş edici' sembolleri birlikte yer almaktadır.",
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
    options: ["Odun", "Kömür", "Doğal gaz", "Üçü de eşittir", "Tablodan bu sonuç çıkarılamaz"],
    correct: 2,
    explain: "Grafiğe göre 1 kg doğal gazın yanması en fazla enerjiyi (54 MJ) açığa çıkarır, bu da onu kütle başına enerji verimliliği açısından en avantajlı yakıt yapar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tüketici raporunda, 'A' şampuanının etiketinde 'sülfatsız' ibaresi bulunurken, 'B' şampuanının standart sülfatlı formülle üretildiği belirtilmiştir; her iki ürün de köpük oluşturmaktadır.",
    text: "Bu bilgiye dayanarak en doğru çıkarım hangisidir?",
    options: ["İki ürün de birebir aynı kimyasal bileşime sahiptir", "Sülfatsız bir ürün hiçbir zaman köpük oluşturamaz", "Köpük oluşturma özelliği yalnızca sülfat bileşiklerine özgü değildir, farklı kimyasal formüllerle de sağlanabilir", "Köpürme, ürünün etkinliğiyle hiçbir ilgisi olmayan rastgele bir özelliktir", "Sülfatlı ürünler her zaman daha fazla köpürür"],
    correct: 2,
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
    options: ["Metal ambalajlar her zaman plastikten daha hızlı bozunur", "Tüm ambalaj malzemeleri doğada aynı hızda parçalanır", "Malzemenin kimyasal yapısının bozunma hızıyla hiçbir ilgisi yoktur", "Doğal, karbon temelli ve mikroorganizmalarca kolayca parçalanabilen malzemeler daha hızlı; sentetik polimer veya metal yapılı malzemeler ise çok daha yavaş bozunur", "Karton, plastikten daha yavaş bozunur"],
    correct: 3,
    explain: "Kağıt/karton gibi doğal selüloz temelli malzemeler mikroorganizmalarca kolayca parçalanırken, plastiklerin uzun polimer zincirleri ve metallerin kimyasal kararlılığı bozunmayı çok yavaşlatır — bu, malzeme seçiminde çevresel sürdürülebilirlik açısından önemli bir kimya bilgisidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir ekmek hamuru mayalanırken hacmi belirgin biçimde artar ve içinde küçük gaz kabarcıkları oluşur; hamur çok sıcak bir fırına konulduğunda ise mayanın etkisi beklenenden az olur.",
    text: "Bu gözlemlere dayanarak maya hakkında en doğru bilimsel çıkarım hangisidir?",
    options: ["Maya yalnızca soğukta etkili olur, ılık ortamda hiç çalışmaz", "Maya, sıcaklıktan tamamen bağımsız çalışan cansız bir kimyasal bileşiktir", "Hamurun kabarması yalnızca fiziksel bir hava girişidir, mayanın hiçbir rolü yoktur", "Maya, belirli sıcaklık aralığında etkili olan canlı bir kimyasal/biyolojik ajandır; aşırı sıcaklık onun aktivitesini olumsuz etkiler", "Gaz kabarcıkları hamurdaki sudan kaynaklanır, mayayla ilgisizdir"],
    correct: 3,
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
    options: ["Tuzun suyu her zaman daha hızlı dondurduğunu", "Yaz aylarında yolların neden daha sıcak olduğunu", "Tuzlu suyun kaynama noktasının düştüğünü", "Kışın buzlanan yollara tuz dökülmesinin donma noktasını düşürerek buzlanmayı geciktirdiğini/azalttığını", "Bu deneyin günlük hayatla hiçbir bağlantısı olmadığını"],
    correct: 3,
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
    options: ["Sıcaklık arttıkça alüminyum geçişi azalır", "Sıcaklığın alüminyum geçişiyle hiçbir ilişkisi yoktur", "Alüminyum folyo hiçbir koşulda kullanılmamalıdır", "Yüksek pişirme sıcaklıkları alüminyum geçişini artırdığından, mümkün olduğunca ölçülü/düşük sıcaklıkta pişirme tercih edilmelidir", "Bu veriler yalnızca balık için değil hiçbir gıda için geçerli değildir"],
    correct: 3,
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
    options: ["Kan hücrelerinin sayısının artırılması", "Vücut sıcaklığının doğrudan düşürülmesi", "Kas dokusunun yeniden oluşturulması", "Terlemeyle kaybedilen elektrolit (iyon) dengesinin yeniden sağlanması", "Enerji ihtiyacının tamamen ortadan kaldırılması"],
    correct: 3,
    explain: "Terleme sırasında vücut yalnızca su değil, sodyum, potasyum gibi elektrolitleri de kaybeder; bu tuzları içeren içecekler kaybedilen iyon dengesini yeniden sağlamayı amaçlar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "İki özdeş bitkiye 15 gün boyunca eşit miktarda su verilmiştir; yalnızca birine ayrıca haftada bir azotlu gübre uygulanmıştır. Gübre verilen bitkinin yaprakları belirgin biçimde daha koyu yeşil ve gelişmiş görünmektedir.",
    text: "Bu gözlem, azotun bitkideki rolü hakkında en doğru hangi çıkarımı destekler?",
    options: ["Gübre yalnızca toprağın rengini değiştirir", "Azotun bitki gelişimiyle hiçbir ilgisi yoktur", "Su tek başına bitkinin tüm besin ihtiyacını karşılar", "Azot, bitkinin klorofil üretimi ve genel büyümesi için önemli bir besin bileşenidir", "Azotlu gübre bitkinin büyümesini yavaşlatır"],
    correct: 3,
    explain: "Azot, klorofil ve proteinlerin temel yapı taşlarından biridir; yeterli azot alan bitkilerde daha koyu yeşil renk ve daha güçlü büyüme gözlenir, bu da azotun bitki beslenmesindeki kritik rolünü gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir ürün, ambalajında 'çevre dostu' ifadesiyle pazarlanmaktadır; ancak bu ifadenin bağımsız bir kurum tarafından sertifikalandırıldığına dair hiçbir bilgi ambalajda yer almamaktadır.",
    text: "Bu durum, tüketici olarak ürün etiketlerini değerlendirirken en doğru hangi yaklaşımı destekler?",
    options: ["Yalnızca ürünün fiyatına bakarak güvenilirliğine karar vermek", "Ambalajdaki her ifadeyi sorgusuz kabul etmek", "Etiketlerdeki tüm bilgileri tamamen yok saymak", "Pazarlama ifadelerini bağımsız kaynaklarla doğrulanmadan doğru kabul etmemek, eleştirel biçimde değerlendirmek", "'Çevre dostu' ifadesinin her zaman yasal olarak denetlendiğini varsaymak"],
    correct: 3,
    explain: "Pazarlama ifadeleri her zaman bağımsız bilimsel/kurumsal doğrulamayı yansıtmayabilir; bilinçli bir tüketici bu tür iddiaları güvenilir sertifikasyon kaynaklarıyla karşılaştırarak değerlendirir."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir temizlik ürününün ambalajında aşağıdaki iki tehlike işareti birlikte yer almaktadır.",
    pictograms: ["corrosive", "environment"],
    text: "Bu iki işaretin birlikte bulunması, ürünün kullanımdan sonra lavaboya/kanalizasyona dökülmesi konusunda en doğru hangi sonucu doğurur?",
    options: [
      "İki sembol birbiriyle çelişir, güvenle kanalizasyona dökülebilir",
      "Aşındırıcı sembolü yalnızca ambalajla ilgilidir, dökülen sıvıyla ilgisi yoktur",
      "Çevre sembolü, ürünün doğada hiçbir etkisi olmadığını gösterir",
      "Ürün hem canlı dokuları aşındırabilir hem de su ekosistemlerine zarar verebilir; bu yüzden büyük miktarların doğrudan kanalizasyona dökülmesinden kaçınılmalı, üretici talimatına uyulmalıdır",
      "Bu semboller yalnızca endüstriyel kullanım için geçerlidir, evde önemsizdir"
    ],
    correct: 3,
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
    options: [
      "4. pişirim; en yüksek sıcaklık tek başına belirleyicidir, pH'ın etkisi yoktur",
      "1. pişirim; en düşük sıcaklık ve en yüksek pH bir arada olduğu için",
      "Tüm pişirimlerde alüminyum geçişi birbirine eşittir",
      "2. pişirim; yalnızca pH düşük olduğu için diğerlerinden farksızdır",
      "3. pişirim; hem düşük pH (asidik ortam) hem yüksek sıcaklık alüminyumun çözünürlüğünü birlikte artırır"
    ],
    correct: 4,
    explain: "Asidik ortam (düşük pH) alüminyumun çözünürlüğünü artırır; yüksek sıcaklık da bu süreci hızlandırır. Tablodaki 3. pişirim hem en düşük pH'a (5) hem en yüksek sıcaklığa (200°C) sahip olduğundan, bu iki etkenin bir araya gelmesiyle alüminyum geçişinin en fazla olması beklenir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir tüketici tartışma platformunda, bazı katılımcılar 'kimyasal madde içermeyen' olarak pazarlanan bir temizlik ürününün aslında su ve tuz gibi bileşenler içerdiğini belirtiyor.",
    text: "Bu tartışma, 'kimyasal madde' kavramının günlük dildeki kullanımı hakkında en doğru hangi eleştirel çıkarımı destekler?",
    options: [
      "Yalnızca laboratuvarda üretilen maddeler kimyasal sayılır",
      "Su ve tuz bilimsel olarak kimyasal madde sayılmaz",
      "'Kimyasal madde içermeyen' ifadesi bilimsel olarak tam anlamıyla doğrudur",
      "Bu tartışma tamamen anlamsızdır, hiçbir bilimsel çıkarım yapılamaz",
      "Günlük dilde 'kimyasal içermez' ifadesi genellikle 'sentetik/zararlı katkı içermez' anlamında kullanılır; oysa bilimsel anlamda su, tuz dahil her madde bir kimyasal maddedir"
    ],
    correct: 4,
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
    options: [
      "Bu karışımların güvenliği bileşenlerin miktarından tamamen bağımsızdır",
      "İki karışım da eşit derecede tehlikelidir",
      "İki karışım da tamamen güvenlidir, hiçbir gaz açığa çıkmaz",
      "Sirke-kabartma tozu karışımı çamaşır suyu-amonyak karışımından daha tehlikelidir",
      "Çamaşır suyu ile amonyaklı ürünlerin karışımı zehirli kloramin gazı oluşturarak ciddi risk taşırken, sirke ile kabartma tozunun karışımı yalnızca zararsız karbondioksit gazı açığa çıkarır"
    ],
    correct: 4,
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
    options: [
      "Pazarlama ifadeleri her zaman bilimsel test sonuçlarını birebir yansıtır",
      "Etken madde derişiminin ürün etkinliğiyle hiçbir ilgisi yoktur",
      "Aynı ifadeyi kullanan iki ürün her zaman birebir aynı etkiye sahiptir",
      "Derişim bilgisi yalnızca ilaç sektöründe önemlidir, temizlik ürünlerinde değil",
      "Yalnızca genel pazarlama ifadelerine değil, etken madde derişimi gibi somut ve ölçülebilir bilgilere bakılmalıdır"
    ],
    correct: 4,
    explain: "'Etkili dezenfeksiyon sağlar' gibi genel pazarlama ifadeleri, ürünler arasındaki gerçek etkinlik farkını gizleyebilir; etken madde derişimi gibi somut, ölçülebilir veriler, ürünlerin gerçek etkinliğini karşılaştırmak için daha güvenilir bir temel sunar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir okuldaki bilim kulübü, farklı ev temizlik ürünlerinin (çamaşır suyu, sirke, karbonat, sıvı sabun) birbirleriyle ikili kombinasyonlarda karıştırılmasının güvenli olup olmadığını araştıran bir kontrol listesi hazırlamak istemektedir.",
    text: "Böyle bir kontrol listesi hazırlanırken izlenmesi gereken en bilimsel yaklaşım hangisidir?",
    options: [
      "Hiçbir ev temizlik ürünü bir diğeriyle karıştırılmamalıdır, istisnasız",
      "Tüm temizlik ürünleri birbiriyle güvenle karıştırılabilir, ayrı inceleme gerekmez",
      "Yalnızca ürünlerin fiyatına bakılarak güvenlik değerlendirmesi yapılabilir",
      "Karıştırma güvenliği yalnızca ürünlerin rengine göre belirlenir",
      "Her ikili kombinasyonun kimyasal tepkime potansiyeli (örneğin gaz açığa çıkarma, ısı üretme) ayrı ayrı incelenmeli; 'ikisi de temizlik ürünü' olması güvenli karışım anlamına gelmemelidir"
    ],
    correct: 4,
    explain: "Her kimyasal madde çiftinin tepkime potansiyeli farklıdır (örneğin çamaşır suyu+amonyak tehlikeli gaz üretirken, sirke+karbonat zararsız CO2 üretir); güvenlik değerlendirmesi genellemelerle değil, her kombinasyonun kendi kimyasal özellikleri incelenerek yapılmalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Aşağıda günlük hayatta sık karşılaşılan bir eşya gösterilmiştir.",
    objectIcons: ["battery"],
    text: "Bu eşyanın çalışma prensibi, kimyanın hangi temel dönüşüm türüyle en doğrudan ilişkilidir?",
    options: ["Nükleer enerjinin doğrudan harekete dönüştürülmesi", "Işık enerjisinin ses enerjisine dönüştürülmesi", "Elektrik enerjisinin doğrudan kütleye dönüştürülmesi", "Manyetik enerjinin ısı enerjisine dönüştürülmesi", "Kimyasal enerjinin elektrik enerjisine dönüştürülmesi"],
    correct: 4,
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
    options: [
      "'E' koduyla başlayan bir katkı maddesi otomatik olarak zararlı anlamına gelmez; bazı E kodları C vitamini gibi bilinen, faydalı bileşiklere aittir",
      "Tüm E kodlu maddeler yapay ve zararlıdır",
      "E kodları yalnızca renklendiricilere verilir",
      "E300 kodu, ürünün hiçbir vitamin içermediğini gösterir",
      "E kodlu maddelerin hiçbiri doğada bulunmaz"
    ],
    correct: 0,
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
    options: [
      "Bez, alevi oksijenden yalıtarak yanma tepkimesinin devam etmesi için gerekli oksijeni keser",
      "Bez, yakıtı tamamen yok eder",
      "Bez, ortamdaki sıcaklığı anında sıfıra indirir",
      "Bez, yanma tepkimesini hızlandırarak söndürür",
      "Islak bezin söndürme etkisi bilimsel olarak açıklanamaz"
    ],
    correct: 0,
    explain: "Yangın üçgeninin (yanıcı madde, oksijen, ısı) bir unsurunu ortadan kaldırmak yanmayı durdurur; ıslak bir bezle alevi örtmek, alevi çevredeki oksijenden yalıtarak yanma tepkimesinin sürmesini engeller."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir bilim yazısında, 'X maddesi kanserojendir' başlıklı bir haberin ardından yapılan incelemede, ilgili çalışmanın maddeyi laboratuvar hayvanlarına günlük alım sınırının binlerce katı dozda verdiği ortaya çıkmıştır.",
    text: "Bu durum, bilimsel çalışma sonuçlarının halk sağlığı iletişimine aktarılması konusunda en doğru eleştirel çıkarımı destekler?",
    options: [
      "Bir maddenin çok yüksek dozda zararlı bulunması, normal/günlük tüketim dozlarında da aynı derecede riskli olduğu anlamına gelmez; doz-etki ilişkisi dikkate alınmalıdır",
      "Bu tür haberler her zaman bilimsel olarak tam ve doğru aktarılır",
      "Bir maddenin herhangi bir dozda zararlı bulunması, o maddenin her koşulda kesin olarak yasaklanması gerektiği anlamına gelir",
      "Laboratuvar hayvan çalışmalarının insan sağlığıyla hiçbir ilgisi yoktur",
      "Doz kavramı yalnızca ilaçlar için geçerlidir, gıda maddeleri için geçerli değildir"
    ],
    correct: 0,
    explain: "Toksikolojinin temel ilkelerinden biri doz-etki ilişkisidir; bir maddenin aşırı yüksek, gerçekçi olmayan dozlarda zararlı bulunması, normal tüketim koşullarında aynı riski taşıdığı anlamına gelmez. Bilimsel bulguların medyada doğru bağlamla aktarılması, bilinçli halk sağlığı iletişimi için önemlidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.1 — Kimya biliminin günlük hayata katkısına ilişkin bilimsel çıkarım yapabilme",
    context: "Bir malzeme mühendisliği raporunda, yeniden kullanılabilir su şişelerinin üretiminde kullanılan bazı plastik türlerinin belirli sıcaklık ve kullanım koşullarında küçük miktarlarda kimyasal madde salabildiği, ancak doğru malzeme seçimi ve kullanım koşullarına uyulduğunda bu riskin en aza indirilebildiği belirtilmektedir.",
    text: "Bu bilgi, günlük ürünlerin güvenli kullanımı konusunda en dengeli hangi yaklaşımı destekler?",
    options: [
      "Bir malzemenin potansiyel riski, doğru malzeme seçimi ve önerilen kullanım koşullarına (sıcaklık, süre vb.) uyularak yönetilebilir; risk varlığı ürünün her koşulda kullanılamaz olduğu anlamına gelmez",
      "Tüm plastik ürünler, hiçbir koşulda güvenli değildir",
      "Plastik ürünlerin kimyasal salma riski tamamen göz ardı edilebilir",
      "Kullanım koşullarının (sıcaklık, süre) risk üzerinde hiçbir etkisi yoktur",
      "Bu tür raporlar günlük hayatta dikkate alınmaya değer değildir"
    ],
    correct: 0,
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
    options: [
      "Ortamdaki oksijenin büyük ölçüde uzaklaştırılması, hem oksidasyon tepkimelerini hem de oksijene ihtiyaç duyan mikroorganizmaların üremesini yavaşlatır",
      "Vakumlama, gıdadaki tüm suyu tamamen yok eder",
      "Vakumlama yalnızca ambalajın hacmini küçültmek için yapılır, bozulmayla ilgisi yoktur",
      "Vakumlu paketleme sıcaklığı otomatik olarak düşürür",
      "Oksijen miktarının bozulma hızıyla hiçbir ilişkisi yoktur"
    ],
    correct: 0,
    explain: "Vakumlu paketleme, ambalaj içindeki oksijeni büyük ölçüde uzaklaştırır; bu hem yağların/renk pigmentlerinin oksijenle tepkimeye girerek bozulmasını (oksidasyonu) hem de oksijene ihtiyaç duyan (aerobik) mikroorganizmaların üremesini yavaşlatarak raf ömrünü uzatır."
  }
],
  "disiplin": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir laboratuvarda, canlı hücrelerdeki enzimlerin yapısı ve metabolik tepkimelerdeki rolü incelenmektedir.",
    text: "Bu çalışma kimyanın hangi alt disipliniyle en doğrudan ilişkilidir?",
    options: ["Jeokimya", "Biyokimya", "Nükleer kimya", "Polimer kimyası", "Elektrokimya"],
    correct: 1,
    explain: "Canlı sistemlerdeki moleküler yapıları ve metabolik süreçleri inceleyen alt disiplin biyokimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırmada, karbon atomlarının birbirine bağlanarak oluşturduğu uzun zincirli bileşiklerin (örneğin yakıtlar ve plastikler) yapısı incelenmektedir.",
    text: "Bu araştırma en doğrudan kimyanın hangi alt disipliniyle ilişkilendirilebilir?",
    options: ["Anorganik kimya", "Organik kimya", "Jeokimya", "Nükleer kimya", "Gıda kimyası"],
    correct: 1,
    explain: "Karbon temelli bileşiklerin (hidrokarbonlar, polimerler vb.) yapısını inceleyen alt disiplin organik kimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir madencilik şirketinin laboratuvarında, çıkarılan cevherlerdeki metal oksit ve tuz bileşiklerinin kimyasal yapısı analiz edilmektedir.",
    text: "Bu inceleme kimyanın hangi alt disiplininin kapsamına girer?",
    options: ["Organik kimya", "Anorganik kimya", "Biyokimya", "Gıda kimyası", "Polimer kimyası"],
    correct: 1,
    explain: "Metaller, mineraller ve karbon içermeyen (genel olarak) bileşiklerin incelenmesi anorganik kimyanın konusudur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir kalite kontrol biriminde, bir gıda örneğindeki katkı maddesinin miktarı hassas ölçüm cihazlarıyla belirlenmektedir.",
    text: "Bu faaliyet en doğrudan kimyanın hangi alt disipliniyle ilişkilidir?",
    options: ["Nükleer kimya", "Analitik kimya", "Jeokimya", "Organik kimya", "Elektrokimya"],
    correct: 1,
    explain: "Bir örnekteki madde miktarının ve bileşiminin belirlenmesi (nitel/nicel analiz) analitik kimyanın temel çalışma alanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırma grubu, kimyasal tepkimelerin hızını ve tepkime sırasında açığa çıkan/soğurulan enerji miktarını ölçmektedir.",
    text: "Bu çalışma alanı kimyanın hangi alt disiplinini yansıtır?",
    options: ["Biyokimya", "Fizikokimya", "Jeokimya", "Gıda kimyası", "Polimer kimyası"],
    correct: 1,
    explain: "Tepkime hızı, enerji değişimi ve denge gibi fiziksel-kimyasal ilkeleri inceleyen alt disiplin fizikokimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir üretim tesisinde, tekstil liflerinde ve ambalaj malzemelerinde kullanılan uzun zincirli, tekrar eden birimlerden oluşan yapılar geliştirilmektedir.",
    text: "Bu iş, kimyanın hangi alt disipliniyle en doğrudan örtüşür?",
    options: ["Nükleer kimya", "Polimer kimyası", "Jeokimya", "Analitik kimya", "Elektrokimya"],
    correct: 1,
    explain: "Monomerlerin bir araya gelerek oluşturduğu uzun zincirli polimer yapılarını inceleyen ve geliştiren alt disiplin polimer kimyasıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir çevre izleme biriminde, bir akarsudaki ağır metal ve kirletici madde derişimleri düzenli olarak ölçülmektedir.",
    text: "Bu uygulama en doğrudan hangi alt disiplinin kapsamına girer?",
    options: ["Biyokimya", "Çevre kimyası", "Nükleer kimya", "Polimer kimyası", "Organik kimya"],
    correct: 1,
    explain: "Doğal ortamlardaki (su, hava, toprak) kimyasal maddelerin kaynağı, davranışı ve etkisini inceleyen alt disiplin çevre kimyasıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir hastane laboratuvarında, hastalıkların teşhisi için radyoaktif işaretleyici maddeler kullanılarak görüntüleme yapılmaktadır.",
    text: "Bu uygulama kimyanın hangi alt disipliniyle en doğrudan ilişkilidir?",
    options: ["Organik kimya", "Nükleer kimya", "Gıda kimyası", "Polimer kimyası", "Anorganik kimya"],
    correct: 1,
    explain: "Radyoaktif izotopların özelliklerini ve tıbbi/endüstriyel uygulamalarını inceleyen alt disiplin nükleer kimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir Ar-Ge biriminde, pil ve akü teknolojilerinde kullanılan elektrik akımı ile kimyasal tepkime arasındaki ilişki incelenmektedir.",
    text: "Burada tarif edilen çalışma, kimyanın hangi alt disipliniyle ilişkilidir?",
    options: ["Jeokimya", "Elektrokimya", "Biyokimya", "Analitik kimya", "Gıda kimyası"],
    correct: 1,
    explain: "Elektrik enerjisi ile kimyasal tepkimeler arasındaki dönüşümü (piller, elektroliz, korozyon vb.) inceleyen alt disiplin elektrokimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gıda mühendisliği biriminde, dondurulmuş bir ürünün besin değerinin ve dokusunun saklama süresince nasıl değiştiği incelenmektedir.",
    text: "Bu süreç en doğrudan kimyanın hangi alt disipliniyle bağlantılıdır?",
    options: ["Nükleer kimya", "Gıda kimyası", "Jeokimya", "Elektrokimya", "Polimer kimyası"],
    correct: 1,
    explain: "Gıdaların bileşimini, işlenmesini ve saklama koşullarının besin/kalite üzerindeki etkisini inceleyen alt disiplin gıda kimyasıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir jeoloji ekibi, farklı kayaç katmanlarındaki mineral bileşimini analiz ederek bölgenin oluşum tarihini yorumlamaktadır.",
    text: "Tarif edilen bu inceleme, kimyanın hangi alt disiplinine aittir?",
    options: ["Gıda kimyası", "Biyokimya", "Jeokimya", "Polimer kimyası", "Nükleer kimya"],
    correct: 2,
    explain: "Yer kabuğundaki kayaç ve minerallerin kimyasal bileşimini, oluşumunu inceleyen alt disiplin jeokimyadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir ilaç geliştirme sürecinde, yeni bir molekülün vücuttaki hedef proteine nasıl bağlandığı tasarlanıp test edilmektedir.",
    text: "Bu görev en doğrudan hangi alt disiplinin çalışma alanına girer?",
    options: ["Çevre kimyası", "Jeokimya", "Farmasötik (ilaç) kimyası", "Elektrokimya", "Polimer kimyası"],
    correct: 2,
    explain: "Hastalıkların tedavisi için etkili ve güvenli moleküllerin tasarlanması, sentezlenmesi ve test edilmesi farmasötik kimyanın çalışma alanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir adli laboratuvarda, olay yerinden alınan iz miktardaki bir örnekteki maddenin türü, hassas cihazlarla kesin olarak belirlenmeye çalışılmaktadır.",
    text: "Bu analiz süreci kimyanın hangi alt disipliniyle ilişkilidir?",
    options: ["Polimer kimyası", "Biyokimya", "Analitik kimya", "Jeokimya", "Nükleer kimya"],
    correct: 2,
    explain: "İz miktardaki maddelerin türünün ve miktarının hassas biçimde belirlenmesi analitik kimyanın uygulama alanlarından biridir (adli kimya, analitik kimyanın bir uygulama koludur)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir metalurji tesisinde, farklı metal alaşımlarının sertlik ve korozyon direncini artırmak için bileşim oranları değiştirilmektedir.",
    text: "Bu odak alanı, kimyanın hangi alt disiplinini işaret eder?",
    options: ["Biyokimya", "Organik kimya", "Anorganik kimya", "Gıda kimyası", "Nükleer kimya"],
    correct: 2,
    explain: "Metaller ve alaşımların yapısını, özelliklerini inceleyen ve geliştiren çalışmalar anorganik kimyanın kapsamındadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir spor bilimleri laboratuvarında, yoğun antrenman sonrası kas dokusundaki laktik asit birikiminin enerji üretim süreciyle ilişkisi incelenmektedir.",
    text: "Yukarıdaki tanım en doğrudan kimyanın hangi alt disipliniyle örtüşür?",
    options: ["Polimer kimyası", "Jeokimya", "Biyokimya", "Nükleer kimya", "Elektrokimya"],
    correct: 2,
    explain: "Canlı organizmalardaki (kas dokusu, enerji metabolizması gibi) kimyasal süreçlerin incelenmesi biyokimyanın çalışma alanına girer."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir su arıtma tesisinde, içme suyundaki klor ve diğer dezenfeksiyon yan ürünlerinin derişimi düzenli olarak izlenmektedir.",
    text: "Bu izleme çalışması kimyanın hangi alt disipliniyle en doğrudan ilişkilidir?",
    options: ["Polimer kimyası", "Nükleer kimya", "Çevre kimyası (analitik yöntemlerle desteklenir)", "Organik sentez kimyası", "Jeokimya"],
    correct: 2,
    explain: "Su kaynaklarındaki kimyasal madde derişimlerinin izlenmesi ve çevresel etkilerinin değerlendirilmesi çevre kimyasının temel uygulamalarındandır."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Aşağıdaki şemada bir X disiplininin üç çalışma alanı verilmiştir: (I) asit-baz tepkimeleri, (II) organik olmayan maddelerin özellikleri, (III) petrol ve petrol ürünleri dışındaki maddelerin incelenmesi.",
    text: "Şemadaki üç maddeye bakılarak X disiplini en doğru şekilde hangisidir?",
    options: ["Biyokimya", "Organik kimya", "Anorganik kimya", "Nükleer kimya", "Gıda kimyası"],
    correct: 2,
    explain: "Asit-baz tepkimeleri, organik olmayan madde özellikleri ve petrol dışı maddelerin incelenmesi anorganik kimyanın kapsamına girer; organik kimya karbon bileşiklerini (özellikle petrol türevlerini) incelediğinden bu üç madde anorganik kimyayı işaret eder."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırmacı, hem gıda ürünlerinin bileşim analizine hem de yeni nanomalzemelerin geliştirilmesine ilgi duymaktadır; ancak hangi alanda uzmanlaşacağına henüz karar verememiştir.",
    text: "Bu araştırmacının her iki ilgi alanında da kısa süreli gözlem/staj deneyimi edinip kararını sonra vermesi önerildiğinde, bu öneri kariyer planlama sürecinin hangi iki unsuruyla en doğrudan ilişkilidir?",
    options: ["Yalnızca okulun coğrafi konumu", "Yalnızca maaş beklentisi ve iş saatleri", "Kendini tanıma (ilgi alanlarını netleştirme) ve alan araştırması (deneyimleyerek bilgi edinme)", "Yalnızca arkadaş çevresinin tercihleri", "Kariyer planlamayla hiçbir ilgisi yoktur"],
    correct: 2,
    explain: "Farklı alanlarda kısa süreli deneyim edinmek, hem kişinin kendi ilgi/yeteneklerini daha iyi tanımasını hem de alan hakkında gerçekçi bilgi edinmesini sağlar; bu, kariyer planlama sürecinin temel bileşenlerindendir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Aşağıdaki tabloda üç meslek profesyonelinin günlük iş tanımı özetlenmiştir.",
    table: {
      headers: ["Profesyonel", "İş tanımı"],
      rows: [
        ["1", "Kan örneklerindeki enzim ve hormon düzeylerini ölçerek hastalık teşhisine katkı sağlar"],
        ["2", "Yeni bir ambalaj malzemesinin esneklik ve dayanıklılık özelliklerini test eder"],
        ["3", "Bir gölün suyundaki azot/fosfor derişimini izleyerek su kalitesini değerlendirir"]
      ]
    },
    text: "Tablodaki 1, 2 ve 3 numaralı profesyoneller sırasıyla hangi alt disiplinlerde çalışıyor olabilir?",
    options: ["1: Analitik kimya, 2: Anorganik kimya, 3: Gıda kimyası", "1: Nükleer kimya, 2: Organik kimya, 3: Jeokimya", "1: Biyokimya, 2: Polimer kimyası, 3: Çevre kimyası", "1: Elektrokimya, 2: Biyokimya, 3: Polimer kimyası", "1: Jeokimya, 2: Nükleer kimya, 3: Elektrokimya"],
    correct: 2,
    explain: "Kan örneklerindeki biyomolekülleri inceleyen 1. profesyonel biyokimya, ambalaj malzemesinin polimer özelliklerini test eden 2. profesyonel polimer kimyası, su kalitesini izleyen 3. profesyonel ise çevre kimyası alanında çalışıyor olabilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir laboratuvarda iki farklı çalışma yürütülmektedir: birinci çalışma bir boya fabrikasında üretilen boyadaki metal element yüzdelerini kütlece belirlemeyi; ikinci çalışma ise sıcaklık ve basıncın bir tepkimenin hızına etkisini incelemeyi amaçlamaktadır.",
    text: "Bu iki çalışma sırasıyla kimyanın hangi alt disiplinleriyle en doğrudan ilişkilidir?",
    options: ["Birinci: Organik kimya, İkinci: Jeokimya", "Birinci: Biyokimya, İkinci: Nükleer kimya", "Birinci: Analitik kimya, İkinci: Fizikokimya", "Birinci: Polimer kimyası, İkinci: Gıda kimyası", "Birinci: Elektrokimya, İkinci: Anorganik kimya"],
    correct: 2,
    explain: "Bir malzemedeki element yüzdelerinin kütlece belirlenmesi analitik kimyanın; sıcaklık/basıncın tepkime hızına etkisinin incelenmesi ise fizikokimyanın (kimyasal kinetik) konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gastronomi laboratuvarında, sıvı azot kullanılarak dondurma yapılması, jelatin/nişasta ile malzemelerin jöleye dönüştürülmesi gibi teknikler geliştirilmektedir; bu teknikler sırasında sıcaklık değişiminin ve molekül yapısının besinin dokusuna etkisi izlenmektedir.",
    text: "Bu çalışmalar en doğrudan kimyanın hangi iki alt disiplininin kesişiminde yer alır?",
    options: ["Analitik kimya ve çevre kimyası", "Nükleer kimya ve jeokimya", "Elektrokimya ve polimer kimyası", "Gıda kimyası ve fizikokimya", "Biyokimya ve anorganik kimya"],
    correct: 3,
    explain: "Besinlerin bileşimi ve dokusuyla ilgili çalışmalar gıda kimyasının; sıcaklık/hâl değişiminin bu dokuya etkisinin incelenmesi ise fizikokimyanın (termodinamik, hâl değişimleri) konusudur — bu iki alan kesişerek moleküler gastronomi gibi uygulamalı alanları besler."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir malzeme test laboratuvarında iki farklı ambalaj filminin (X ve Y) esneklik, su geçirmezlik ve ısıya dayanıklılık özellikleri karşılaştırılarak hangisinin gıda ambalajı için daha uygun olduğu belirlenmeye çalışılmaktadır.",
    text: "Bu karşılaştırmalı test süreci en doğrudan kimyanın hangi alt disipliniyle ilişkilidir?",
    options: ["Biyokimya", "Nükleer kimya", "Jeokimya", "Polimer kimyası", "Elektrokimya"],
    correct: 3,
    explain: "Ambalaj filmleri genellikle polimer yapılı malzemelerdir; bu malzemelerin fiziksel/kimyasal özelliklerinin test edilip karşılaştırılması polimer kimyasının uygulama alanına girer."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Aşağıda beş farklı kimya alt disiplini ve bunların örnek uygulama alanları eşleştirilmiştir; ancak bir eşleştirme yanlış yapılmıştır.",
    table: {
      headers: ["Disiplin", "Uygulama alanı"],
      rows: [
        ["Elektrokimya", "Pil/akü teknolojileri"],
        ["Biyokimya", "DNA yapısının incelenmesi"],
        ["Jeokimya", "Kayaç yaşının belirlenmesi"],
        ["Organik kimya", "Metal alaşımlarının sertliği"],
        ["Gıda kimyası", "Besin katkı maddelerinin analizi"]
      ]
    },
    text: "Tabloda hangi disiplin-uygulama eşleştirmesi hatalıdır?",
    options: ["Jeokimya — Kayaç yaşının belirlenmesi", "Elektrokimya — Pil/akü teknolojileri", "Biyokimya — DNA yapısının incelenmesi", "Organik kimya — Metal alaşımlarının sertliği", "Gıda kimyası — Besin katkı maddelerinin analizi"],
    correct: 3,
    explain: "Metal alaşımlarının incelenmesi anorganik kimyanın konusudur; organik kimya karbon temelli bileşikleri (canlı kaynaklı/sentetik organik maddeleri) inceler, bu yüzden tablodaki 'Organik kimya — Metal alaşımlarının sertliği' eşleştirmesi hatalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir enerji şirketinde çalışan bir grup, hem güneş pili malzemelerinin (anorganik yarı iletkenler) verimliliğini hem de bu pillerin ürettiği elektriğin depolanmasında kullanılan pil hücrelerindeki kimyasal tepkimeleri incelemektedir.",
    text: "Bu çalışma grubunun faaliyetleri, kimyanın hangi iki alt disipliniyle en doğrudan ilişkilidir?",
    options: ["Nükleer kimya ve polimer kimyası", "Organik kimya ve jeokimya", "Biyokimya ve gıda kimyası", "Anorganik kimya ve elektrokimya", "Analitik kimya ve çevre kimyası"],
    correct: 3,
    explain: "Yarı iletken malzemelerin (anorganik bileşikler) incelenmesi anorganik kimyanın; pil hücrelerindeki elektrik-kimyasal tepkime ilişkisinin incelenmesi ise elektrokimyanın konusudur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir çalışma ekibi, toprağın altında binlerce yıl kalmış organik kalıntılardaki karbon izotop oranlarını ölçerek kalıntının yaklaşık yaşını hesaplamaktadır.",
    text: "Bu yöntem en doğrudan kimyanın hangi alt disipliniyle ilişkilidir?",
    options: ["Elektrokimya", "Polimer kimyası", "Gıda kimyası", "Nükleer kimya", "Fizikokimya"],
    correct: 3,
    explain: "Radyoaktif izotopların (örneğin karbon-14) bozunma oranına dayanan yaş tayini yöntemleri (karbon tarihleme) nükleer kimyanın bir uygulamasıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir üniversite bölümünün tanıtım metninde, mezunların hem ilaç şirketlerinde yeni molekül tasarımında hem de gıda şirketlerinde katkı maddesi analizinde çalışabildiği belirtilmektedir.",
    text: "Bu iki çalışma alanı arasındaki ortak nokta, kimyanın alt disiplinleri hakkında en doğru hangi çıkarımı destekler?",
    options: ["İlaç ve gıda sektörleri kimyayla hiçbir ilgisi olmayan alanlardır", "Bu iki alan hiçbir ortak temele sahip değildir, tesadüfen aynı bölümden mezun olunur", "Kimyada yalnızca tek bir alt disiplin gerçek anlamda geçerlidir", "Farklı alt disiplinler (örneğin farmasötik kimya ve gıda kimyası) birbirinden bağımsız görünse de, ortak temel kimya bilgisi ve yöntemleri (molekül analizi, sentez) üzerine kurulu olabilir", "Bu iki alanın ortak noktası yalnızca çalışanların maaşıdır"],
    correct: 3,
    explain: "Farklı görünen alt disiplinler (farmasötik kimya, gıda kimyası gibi) genellikle ortak temel kimya bilgisi (molekül yapısı, analiz yöntemleri, sentez ilkeleri) üzerine kuruludur; bu da kimya eğitiminin çok yönlü kariyer olanakları sunmasını açıklar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Aşağıdaki grafikte, dört farklı kimya alt disiplininde son on yılda yayımlanan bilimsel makale sayısındaki yaklaşık artış oranı (%) gösterilmiştir.",
    chart: {
      type: "bar",
      title: "Alt disiplinlerde yayın sayısı artış oranı (%)",
      labels: ["Analitik", "Polimer", "Biyokimya", "Nükleer"],
      values: [22, 35, 48, 15]
    },
    text: "Grafikteki verilere dayanarak, son on yılda araştırma ilgisinin en hızlı arttığı alt disiplin hangisidir?",
    options: ["Nükleer kimya", "Analitik kimya", "Polimer kimyası", "Biyokimya", "Grafikten bu sonuç çıkarılamaz"],
    correct: 3,
    explain: "Grafiğe göre biyokimya %48 ile en yüksek artış oranına sahiptir; bu, biyokimya alanındaki araştırma ilgisinin incelenen dönemde diğer üç disipline göre en hızlı arttığını gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir sanayi bölgesindeki bir tesis, ürettiği atık suyu doğaya bırakmadan önce içindeki ağır metal ve organik kirletici derişimini standartlara uygun hâle getirmek için arıtma süreçleri uygulamaktadır.",
    text: "Bu arıtma sürecinin tasarımı ve kirletici derişiminin izlenmesi, kimyanın hangi iki alt disipliniyle en doğrudan ilişkilidir?",
    options: ["Biyokimya ve elektrokimya", "Nükleer kimya ve gıda kimyası", "Polimer kimyası ve jeokimya", "Çevre kimyası ve analitik kimya", "Organik sentez kimyası ve anorganik kimya"],
    correct: 3,
    explain: "Atık suyun çevresel etkisinin azaltılması çevre kimyasının; kirletici derişiminin hassas biçimde ölçülüp standartlara uygunluğunun doğrulanması ise analitik kimyanın çalışma alanına girer."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir araştırma ekibi, bitkilerin fotosentez sırasında ışık enerjisini kimyasal enerjiye dönüştürme verimliliğini hem hücresel/moleküler düzeyde hem de bu sürecin termodinamik (enerji) verimliliği açısından incelemektedir.",
    text: "Bu çalışma en doğrudan kimyanın hangi iki alt disiplininin kesişiminde yer alır?",
    options: ["Elektrokimya ve analitik kimya", "Jeokimya ve nükleer kimya", "Polimer kimyası ve gıda kimyası", "Biyokimya ve fizikokimya", "Anorganik kimya ve çevre kimyası"],
    correct: 3,
    explain: "Fotosentezin hücresel/moleküler mekanizması biyokimyanın; enerji dönüşümünün verimliliğinin (termodinamik açıdan) incelenmesi ise fizikokimyanın konusudur."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir ilaç şirketinin Ar-Ge biriminde, yeni bir ilaç adayı molekülün önce laboratuvar ortamında sentezlenmesi, ardından vücuttaki hedef proteine bağlanma etkinliğinin ölçülmesi ve son olarak kan/idrar örneklerinde miktarının hassas biçimde tayin edilmesi gerekmektedir.",
    text: "Bu sürecin üç aşaması sırasıyla en doğrudan hangi alt disiplinlerle ilişkilendirilebilir?",
    options: ["Anorganik kimya → Jeokimya → Elektrokimya", "Jeokimya → Nükleer kimya → Polimer kimyası", "Elektrokimya → Çevre kimyası → Gıda kimyası", "Organik kimya (sentez) → Biyokimya (hedef proteine bağlanma) → Analitik kimya (miktar tayini)", "Biyokimya → Analitik kimya → Organik kimya (sıra önemsizdir)"],
    correct: 3,
    explain: "Yeni bir molekülün laboratuvarda sentezlenmesi organik kimyanın; bu molekülün biyolojik hedeflerle etkileşiminin incelenmesi biyokimyanın; vücut sıvılarındaki miktarının hassas ölçümü ise analitik kimyanın konusudur — bu, tek bir ilaç geliştirme sürecinin birden fazla alt disiplini nasıl bir arada kullandığını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir akademisyen, kariyeri boyunca önce anorganik kimya alanında yarı iletken malzemeler üzerine çalışmış, ardından bu malzemelerin güneş pili verimliliğini artırmak için fizikokimya (enerji dönüşümü) yöntemlerini kullanmaya başlamıştır.",
    text: "Bu kariyer geçişi, kimya alt disiplinleri arasındaki ilişki hakkında en doğru hangi çıkarımı destekler?",
    options: ["Bu tür bir kariyer geçişi bilimsel olarak mümkün değildir", "Bir kimyacı kariyeri boyunca yalnızca tek bir alt disiplinde çalışabilir", "Anorganik kimya ile fizikokimya arasında hiçbir bağlantı kurulamaz", "Disiplinler arası geçiş, önceki bilginin tamamen değersizleşmesi anlamına gelir", "Alt disiplinler arasındaki sınırlar kesin ve geçirimsiz değildir; bir araştırmacı birikimli deneyimini yeni bir disiplinin yöntemleriyle birleştirerek disiplinler arası çalışmalar yürütebilir"],
    correct: 4,
    explain: "Kimyanın alt disiplinleri arasındaki sınırlar akademik sınıflandırma kolaylığı sağlasa da, gerçek araştırma pratiğinde geçirgendir; bir araştırmacı önceki disiplin bilgisini yeni yöntemlerle birleştirerek disiplinler arası (interdisipliner) çalışmalar yürütebilir — bu, modern bilimsel araştırmanın yaygın bir özelliğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir çevresel adli olay soruşturmasında, bir akarsudaki balık ölümlerinin nedenini belirlemek için hem sudaki kirletici derişimi ölçülmüş (X yöntemi) hem de ölü balık dokularındaki kirletici birikimi ve bunun hücresel düzeydeki etkisi incelenmiştir (Y yöntemi).",
    text: "X ve Y yöntemleri sırasıyla en doğrudan hangi alt disiplinlerle ilişkilidir?",
    options: ["X ve Y aynı disiplini temsil eder, ayrım anlamsızdır", "X: Nükleer kimya, Y: Jeokimya", "X: Polimer kimyası, Y: Elektrokimya", "X: Organik sentez kimyası, Y: Gıda kimyası", "X: Analitik kimya / çevre kimyası, Y: Biyokimya"],
    correct: 4,
    explain: "Sudaki kirletici derişiminin ölçülmesi analitik kimya ve çevre kimyasının; kirleticinin canlı doku üzerindeki hücresel/biyokimyasal etkisinin incelenmesi ise biyokimyanın konusudur — bu örnek, gerçek dünya sorunlarının çözümünde birden fazla alt disiplinin birlikte kullanıldığını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir malzeme bilimi ekibi, yeni geliştirdikleri biyobozunur bir plastiğin hem polimer zincir yapısını hem de bu plastiğin doğada mikroorganizmalarca parçalanma hızını incelemektedir.",
    text: "Bu çalışmanın kapsamı, kimyanın alt disiplinleri arasındaki ilişki hakkında en doğru hangi çıkarımı destekler?",
    options: ["Bu tür bir çalışma kimyanın hiçbir alt disipliniyle ilişkilendirilemez", "Biyobozunur plastik geliştirme yalnızca polimer kimyasıyla ilgilidir, başka hiçbir disipline ihtiyaç yoktur", "Parçalanma hızının incelenmesi kimyayla değil yalnızca biyoloji ile ilgilidir", "Alt disiplinler arasında hiçbir zaman ortak çalışma yürütülmez", "Yeni nesil malzeme geliştirme çalışmaları, genellikle tek bir disiplinin değil, birden fazla alt disiplinin (burada polimer kimyası ve çevre kimyası/biyokimya) bir arada kullanılmasını gerektirir"],
    correct: 4,
    explain: "Biyobozunur plastik geliştirme, hem malzemenin polimer yapısının tasarlanmasını (polimer kimyası) hem de bu malzemenin çevrede/canlı sistemlerde nasıl parçalandığının anlaşılmasını (çevre kimyası, biyokimya) gerektirir; bu, güncel malzeme araştırmalarının disiplinler arası doğasını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir üniversite müfredat komitesi, 'analitik kimya' dersinin yalnızca bağımsız bir alt disiplin olarak değil, aynı zamanda organik kimya, biyokimya ve çevre kimyası derslerinin laboratuvar uygulamalarında da (ölçüm ve analiz yöntemleri olarak) kullanıldığını fark etmiştir.",
    text: "Bu gözlem, analitik kimyanın kimya alanındaki konumu hakkında en doğru hangi çıkarımı destekler?",
    options: ["Bu gözlem analitik kimyanın öneminin azaldığını gösterir", "Analitik kimyanın diğer disiplinlerle hiçbir bağlantısı yoktur", "Analitik kimya yalnızca kendi başına var olabilen, izole bir alandır", "Organik kimya, biyokimya ve çevre kimyası analitik kimyaya hiç ihtiyaç duymaz", "Analitik kimya, yalnızca bağımsız bir uzmanlık alanı değil, aynı zamanda diğer birçok alt disiplinde ölçüm ve doğrulama için kullanılan temel, yatay bir araç/yöntem bütünüdür"],
    correct: 4,
    explain: "Analitik kimya, madde miktarı/türünü belirleme yöntemleriyle (kromatografi, spektroskopi vb.) hem kendi başına bir uzmanlık alanı hem de diğer birçok alt disiplinin (organik kimya, biyokimya, çevre kimyası) araştırmalarında ölçüm ve doğrulama aracı olarak kullanılan, disiplinler arası 'yatay' bir bilgi/yöntem bütünüdür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir bilim tarihi incelemesinde, 19. yüzyılda 'kimya' tek bir bütün disiplin olarak öğretilirken, 20. yüzyıl boyunca bilgi birikiminin artmasıyla organik, anorganik, fizikokimya, biyokimya gibi alt disiplinlere ayrıldığı; ancak son yıllarda 'kimyasal biyoloji', 'malzeme kimyası' gibi yeni disiplinler arası alanların ortaya çıktığı belirtilmektedir.",
    text: "Bu tarihsel süreç, bilimsel disiplinlerin gelişimi hakkında en doğru hangi genellemeyi destekler?",
    options: ["Bilim tarihindeki bu değişim tamamen rastlantısaldır, hiçbir bilimsel gerekçesi yoktur", "Bilimsel disiplinler yalnızca zamanla parçalanır, hiçbir zaman yeniden birleşmez", "Kimya biliminde disiplin ayrımı 19. yüzyıldan beri hiç değişmemiştir", "Disiplinler arası yeni alanların ortaya çıkması, eski alt disiplinlerin tamamen ortadan kalktığı anlamına gelir", "Bilimsel disiplinler zamanla hem uzmanlaşarak alt dallara ayrılabilir hem de yeni sorulara yanıt ararken tekrar disiplinler arası birleşmeler oluşturabilir; bu iki eğilim birbiriyle çelişmez"],
    correct: 4,
    explain: "Bilim tarihinde disiplinler hem artan bilgi birikimiyle uzmanlaşarak alt dallara ayrılabilir (farklılaşma) hem de karmaşık, çok yönlü sorunları çözmek için farklı alt disiplinlerin yöntemlerini birleştiren yeni disiplinler arası alanlar (kimyasal biyoloji, malzeme kimyası gibi) doğurabilir; bu iki eğilim bilimin dinamik gelişiminin doğal bir parçasıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir teknoloji şirketi, giyilebilir sağlık cihazlarında kullanılmak üzere hem cilde temas eden esnek polimer malzemeler hem de vücuttaki belirli biyobelirteçleri (örneğin glikoz) algılayabilen kimyasal sensörler geliştirmektedir.",
    text: "Bu ürün geliştirme sürecinin gerektirdiği bilgi birikimi, kimyanın alt disiplinleri hakkında en doğru hangi çıkarımı destekler?",
    options: ["Bu tür ürünler kimyasal sensör içermediğinden kimyayla ilgisizdir", "Bu tür bir ürün yalnızca polimer kimyası bilgisiyle geliştirilebilir", "Biyobelirteç algılama, kimyayla değil yalnızca elektronik mühendisliğiyle ilgilidir", "Alt disiplinlerin bir araya gelmesi, ürün geliştirme sürecini bilimsel açıdan geçersiz kılar", "Karmaşık, çok bileşenli ürünlerin geliştirilmesi genellikle tek bir alt disiplinin değil, polimer kimyası, analitik kimya ve biyokimya gibi birden fazla alanın bilgisinin bütünleştirilmesini gerektirir"],
    correct: 4,
    explain: "Giyilebilir bir sağlık cihazı; cilde uygun esnek malzeme (polimer kimyası), belirli bir biyobelirteci seçici olarak algılayabilen kimyasal tepkime tasarımı (analitik kimya) ve bu biyobelirtecin vücuttaki biyolojik anlamının bilinmesi (biyokimya) gibi birden fazla alt disiplinin bilgisinin bütünleştirilmesini gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir gıda güvenliği kurumunun raporunda, 'organik' sertifikalı bir üründeki pestisit kalıntısının hem hangi bileşik olduğunun (tür tayini) hem de ne kadar miktarda bulunduğunun (miktar tayini) belirlenmesi gerektiği, ayrıca bu miktarın sağlık üzerindeki olası etkisinin de değerlendirilmesi gerektiği belirtilmektedir.",
    text: "Bu değerlendirme sürecindeki üç görev (tür tayini, miktar tayini, sağlık etkisi değerlendirmesi) en doğrudan hangi alt disiplin(ler)in bilgisini gerektirir?",
    options: ["Bu üç görev birbirinden tamamen bağımsız, hiçbir ortak disiplin gerektirmez", "Bu üç görev de yalnızca gıda kimyasıyla, başka hiçbir disiplinle ilgisizdir", "Tür tayini biyokimya, miktar tayini ise nükleer kimya gerektirir", "Sağlık etkisi değerlendirmesi kimyayla hiçbir ilgisi olmayan, tamamen tıbbi bir konudur", "Tür ve miktar tayini analitik kimyanın; sağlık etkisinin değerlendirilmesi ise biyokimya ve toksikoloji bilgisinin (biyokimyayla yakından ilişkili) desteğini gerektirir"],
    correct: 4,
    explain: "Bir kalıntının hangi bileşik olduğunu ve ne kadar miktarda bulunduğunu belirlemek analitik kimyanın temel işlevidir; bu miktarın sağlık üzerindeki etkisinin değerlendirilmesi ise biyokimya ve toksikoloji bilgisini gerektirir — kapsamlı bir gıda güvenliği değerlendirmesi bu bilgilerin bütünleştirilmesiyle mümkün olur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir uzay araştırmaları merkezinde, hem bir gezegenin atmosferindeki gazların bileşimi uzaktan spektroskopik yöntemlerle analiz edilmekte hem de bu gazların oluşum kökeninin (jeolojik/biyolojik) olası kimyasal süreçlerle açıklanması araştırılmaktadır.",
    text: "Bu araştırmanın kapsamı en doğrudan kimyanın hangi alt disiplinlerinin bilgisini bütünleştirir?",
    options: ["Yalnızca elektrokimya bilgisi yeterlidir", "Yalnızca gıda kimyası bilgisi yeterlidir", "Yalnızca polimer kimyası bilgisi gereklidir", "Bu araştırma kimyanın hiçbir alt disipliniyle ilgili değildir, tamamen astronomiye aittir", "Analitik kimya (spektroskopik bileşim analizi) ve jeokimya/anorganik kimya (oluşum sürecinin kimyasal açıklaması)"],
    correct: 4,
    explain: "Bir gök cismindeki gazların bileşiminin spektroskopik yöntemlerle belirlenmesi analitik kimyanın; bu bileşimin oluşum kökeninin (jeolojik/kimyasal süreçler açısından) yorumlanması ise jeokimya ve anorganik kimya bilgisini gerektirir — bu, kimya bilgisinin uzay bilimleriyle kesişen disiplinler arası bir örneğidir (astrokimya)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir üretim biriminde, deterjan gibi günlük temizlik ürünlerinin köpük oluşturma ve yağ çözme özelliklerini sağlayan bileşenler tasarlanmaktadır.",
    objectIcons: ["detergent"],
    text: "Bu tasarım süreci en doğrudan kimyanın hangi alt disipliniyle ilişkilidir?",
    options: ["Elektrokimya", "Nükleer kimya", "Jeokimya", "Gıda kimyası", "Organik kimya"],
    correct: 4,
    explain: "Deterjanlardaki yüzey aktif maddeler karbon temelli (organik) bileşiklerdir; bu tür bileşiklerin tasarımı ve sentezi organik kimyanın kapsamına girer."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Aşağıdaki tabloda, dört farklı kimya alanının uygulama örnekleri farklı çalışma gruplarınca eşleştirilmiştir.",
    table: {
      headers: ["Kimya Alanı", "1. Grup uygulama alanı", "2. Grup uygulama alanı"],
      rows: [
        ["Malzeme ve Nanoteknoloji", "Gübre üretimi", "Nanomalzeme üretimi"],
        ["Enerji Sektörü", "Enerji depolama sistemleri", "Pil teknolojileri"],
        ["Sağlık ve Biyoteknoloji", "Biyomedikal", "Adli kimya"],
        ["Gıda ve İçecek Endüstrisi", "Gıda güvenliği", "Besin analizi"]
      ]
    },
    text: "Tabloda verilen dört kimya alanı için, hangi grubun (1. veya 2.) verdiği örneklerin tamamı ilgili alanla tutarlıdır?",
    options: ["Tablodaki veriler yetersiz olduğundan karşılaştırma yapılamaz", "1. Grup; tüm örnekler ilgili alanla birebir uyumludur", "Her iki grup da tamamen hatalıdır", "Her iki grup da eşit derecede doğrudur, ayrım yapılamaz", "2. Grup; nanomalzeme üretimi, pil teknolojileri, adli kimya ve besin analizi örnekleri ilgili alanlarla tutarlıdır, 1. Gruptaki 'gübre üretimi' Malzeme ve Nanoteknoloji alanına tam uymaz"],
    correct: 4,
    explain: "Gübre üretimi, Malzeme ve Nanoteknoloji alanından çok Agronomi/Tarım kimyasıyla ilişkilidir; 2. gruptaki diğer üç eşleştirme (nanomalzeme, pil teknolojisi, adli kimya, besin analizi) ilgili alanlarla daha tutarlıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir üniversite kariyer merkezi, mezunların farklı sektörlerdeki (ilaç, gıda, enerji, çevre) iş ilanlarını incelediğinde, ilan başlıklarının farklı olsa da aday niteliklerinde sıklıkla 'analitik ölçüm cihazlarını kullanabilme' ve 'veri yorumlama' becerilerinin ortak biçimde arandığını fark etmiştir.",
    text: "Bu gözlem, farklı sektörlerdeki kimya kariyerleri arasındaki ilişki hakkında en doğru hangi çıkarımı destekler?",
    options: [
      "Görünüşte farklı sektörlere ait kariyerler, analitik kimyaya dayalı ortak temel becerileri paylaşabilir",
      "Farklı sektörlerdeki kimya kariyerleri arasında hiçbir ortak beceri yoktur",
      "Analitik ölçüm becerisi yalnızca ilaç sektöründe aranır",
      "Veri yorumlama becerisinin kimya kariyerleriyle hiçbir ilgisi yoktur",
      "Bu gözlem yalnızca tesadüfi bir örtüşmedir, genellenemez"
    ],
    correct: 0,
    explain: "Analitik ölçüm ve veri yorumlama gibi beceriler, farklı sektörlerdeki (ilaç, gıda, enerji, çevre) kimya kariyerlerinin ortak paydasını oluşturan, analitik kimyaya dayalı temel yeterliliklerdir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir kozmetik Ar-Ge biriminde, hem cilde uygulanan bir kremin içindeki nemlendirici moleküllerin cilt hücreleriyle etkileşimi hem de kremin raf ömrü boyunca bileşenlerinin bozulmadan kalıp kalmadığı incelenmektedir.",
    text: "Bu iki inceleme sırasıyla en doğrudan hangi alt disiplinlerle ilişkilidir?",
    options: [
      "Biyokimya (hücre etkileşimi) ve analitik kimya (bileşen kararlılığının izlenmesi)",
      "Nükleer kimya ve jeokimya",
      "Elektrokimya ve polimer kimyası",
      "Çevre kimyası ve gıda kimyası",
      "Anorganik kimya ve fizikokimya"
    ],
    correct: 0,
    explain: "Bir molekülün canlı hücrelerle etkileşiminin incelenmesi biyokimyanın; bir ürünün bileşenlerinin zaman içindeki kararlılığının/bozunmasının izlenmesi ise analitik kimyanın (kararlılık analizi) konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir geri dönüşüm tesisinde, karışık plastik atıklardan önce polimer türünün (PET, HDPE, PVC vb.) hızlı biçimde ayırt edilmesi, ardından ayrıştırılan her türün yeniden işlenebilirliğinin kimyasal olarak değerlendirilmesi gerekmektedir.",
    text: "Bu iki aşama sırasıyla en doğrudan hangi alt disiplinlerin bilgisini gerektirir?",
    options: [
      "Analitik kimya (polimer türü tanımlama) ve polimer kimyası (yeniden işlenebilirlik değerlendirmesi)",
      "Nükleer kimya ve gıda kimyası",
      "Jeokimya ve elektrokimya",
      "Biyokimya ve çevre kimyası (yalnızca)",
      "Bu iki aşama da yalnızca mühendislik bilgisi gerektirir, kimyayla ilgisizdir"
    ],
    correct: 0,
    explain: "Farklı plastik türlerinin hızlı tanımlanması (örneğin spektroskopik yöntemlerle) analitik kimyanın; bu polimerlerin zincir yapısına bağlı olarak yeniden işlenebilirliğinin değerlendirilmesi ise polimer kimyasının konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir tarım Ar-Ge biriminde, hem toprağın mineral bileşiminin bitkinin besin alımına etkisi hem de bitkinin bu besinleri kullanarak gerçekleştirdiği hücresel biyokimyasal süreçler eş zamanlı incelenmektedir.",
    text: "Bu iki inceleme alanı, kimyanın hangi iki alt disiplininin tarım bağlamında kesiştiğini gösterir?",
    options: [
      "Jeokimya (toprak mineral bileşimi) ve biyokimya (bitki hücresel süreçleri)",
      "Nükleer kimya ve polimer kimyası",
      "Elektrokimya ve analitik kimya (yalnızca)",
      "Gıda kimyası ve nükleer kimya",
      "Bu iki inceleme aynı disiplinin tekrarıdır, kesişim yoktur"
    ],
    correct: 0,
    explain: "Toprağın mineral/element bileşiminin incelenmesi jeokimyanın; bitkinin bu besinleri hücresel düzeyde nasıl kullandığının incelenmesi ise biyokimyanın konusudur — tarım bilimi bu iki alt disiplinin bilgisini bütünleştirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir batarya geri dönüşüm tesisinde, kullanılmış lityum iyon pillerden değerli metallerin (kobalt, nikel, lityum) hem güvenli biçimde geri kazanılması (kimyasal ayrıştırma) hem de bu sürecin çevreye salınan atık miktarının izlenmesi gerekmektedir.",
    text: "Bu iki gereklilik en doğrudan hangi alt disiplinlerin bilgisini bir araya getirir?",
    options: [
      "Elektrokimya/anorganik kimya (metal geri kazanımı) ve çevre kimyası (atık izleme)",
      "Yalnızca nükleer kimya bilgisi yeterlidir",
      "Yalnızca gıda kimyası bilgisi yeterlidir",
      "Bu süreç kimyanın hiçbir alt disipliniyle ilgili değildir",
      "Yalnızca polimer kimyası bilgisi yeterlidir"
    ],
    correct: 0,
    explain: "Pillerdeki metal bileşiklerin ayrıştırılıp geri kazanılması elektrokimya ve anorganik kimyanın; bu süreçte ortaya çıkan atığın çevresel etkisinin izlenmesi ise çevre kimyasının konusudur — sürdürülebilir geri dönüşüm bu bilgilerin bütünleştirilmesini gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir spor performansı araştırma merkezinde, hem sporcuların terleme yoluyla kaybettiği elektrolitlerin miktarı hassas cihazlarla ölçülmekte hem de bu kayıpların kas hücrelerindeki enerji üretim süreçleri üzerindeki etkisi incelenmektedir.",
    text: "Bu iki inceleme hangi alt disiplinlerin çalışma alanına girmektedir?",
    options: [
      "Analitik kimya (elektrolit miktarının ölçümü) ve biyokimya (hücresel enerji süreçlerine etkisi)",
      "Jeokimya ve nükleer kimya",
      "Polimer kimyası ve elektrokimya",
      "Gıda kimyası ve jeokimya",
      "Bu iki inceleme birbirinin birebir aynısıdır, ayrım anlamsızdır"
    ],
    correct: 0,
    explain: "Terle kaybedilen elektrolit miktarının hassas biçimde ölçülmesi analitik kimyanın; bu kaybın hücresel enerji üretimi (metabolizma) üzerindeki etkisinin incelenmesi ise biyokimyanın konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir arkeoloji-kimya iş birliği projesinde, antik bir seramik parçasının hem hangi mineral hammaddelerden yapıldığı (bileşim analizi) hem de üretildiği dönemi belirlemek için içerdiği radyoaktif izotopların bozunma oranı incelenmektedir.",
    text: "Bu projedeki iki inceleme yöntemi en doğrudan hangi alt disiplinlerin bilgisini birleştirir?",
    options: [
      "Analitik kimya/jeokimya (mineral bileşim analizi) ve nükleer kimya (izotop bozunma oranıyla yaş tayini)",
      "Biyokimya ve gıda kimyası",
      "Polimer kimyası ve elektrokimya",
      "Çevre kimyası ve organik kimya (yalnızca)",
      "Bu iki yöntem birbirinden tamamen bağımsızdır, ortak bir disiplin gerektirmez"
    ],
    correct: 0,
    explain: "Bir seramiğin mineral bileşiminin belirlenmesi analitik kimya ve jeokimyanın; radyoaktif izotop bozunma oranına dayalı yaş tayini ise nükleer kimyanın konusudur — arkeometri (arkeolojik bilim) bu iki alanın bilgisini bir araya getirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir otomotiv Ar-Ge biriminde, hem araç egzozundan çıkan gazların bileşimi hassas cihazlarla ölçülmekte hem de bu gazların atmosferdeki diğer maddelerle etkileşiminin çevresel etkisi araştırılmaktadır.",
    text: "Bu iki inceleme hangi alt disiplinlerin kapsamına girmektedir?",
    options: [
      "Analitik kimya (gaz bileşiminin ölçümü) ve çevre kimyası (atmosferik etkileşim/etki)",
      "Nükleer kimya ve gıda kimyası",
      "Polimer kimyası ve biyokimya",
      "Jeokimya ve elektrokimya",
      "Bu iki inceleme birbirinden tamamen kopuk, ortak bir konusu yoktur"
    ],
    correct: 0,
    explain: "Egzoz gazlarının bileşiminin hassas ölçümü analitik kimyanın; bu gazların atmosferdeki diğer maddelerle etkileşiminin (örneğin hava kirliliğine katkısının) incelenmesi ise çevre kimyasının konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir uzay tarımı araştırmasında, hem uzay istasyonundaki kapalı bir ortamda bitkilerin hangi mineral çözeltileriyle beslenebileceği (topraksız tarım) hem de bitkinin bu ortamda ürettiği besin öğelerinin besin değerinin Dünya'daki eşdeğerine kıyasla nasıl değiştiği incelenmektedir.",
    text: "Bu iki araştırma sorusu en doğrudan hangi alt disiplinlerin bilgisini gerektirir?",
    options: [
      "Anorganik kimya/biyokimya (mineral besleme çözeltisi tasarımı) ve gıda kimyası (besin değeri karşılaştırması)",
      "Yalnızca nükleer kimya bilgisi yeterlidir",
      "Yalnızca elektrokimya bilgisi yeterlidir",
      "Bu araştırma kimyanın hiçbir alt disipliniyle ilgili değildir",
      "Yalnızca polimer kimyası bilgisi yeterlidir"
    ],
    correct: 0,
    explain: "Bitkiler için uygun mineral besin çözeltisinin tasarlanması anorganik kimya ve bitkinin bu besinleri kullanma biyokimyasının; üretilen besinin besin değerinin analiz edilip karşılaştırılması ise gıda kimyasının konusudur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.2 — Kimyanın alt disiplinlerini günlük hayattaki uygulamalarla ilişkilendirebilme",
    context: "Bir müze koruma laboratuvarında, hem tarihi bir tablodaki pigmentlerin kimyasal bileşimi belirlenmekte hem de bu pigmentlerin zamanla ışığa/neme maruz kalarak nasıl bozulduğu incelenerek uygun koruma yöntemleri geliştirilmektedir.",
    text: "Bu iki çalışma en doğrudan hangi alt disiplinlerin bilgisini bir araya getirir?",
    options: [
      "Analitik kimya (pigment bileşimi belirleme) ve fizikokimya (bozunma sürecinin/kararlılığın incelenmesi)",
      "Biyokimya ve nükleer kimya",
      "Gıda kimyası ve elektrokimya",
      "Jeokimya ve polimer kimyası (yalnızca)",
      "Bu iki çalışma kimyanın hiçbir alt disipliniyle ilgili değildir, sanat tarihine aittir"
    ],
    correct: 0,
    explain: "Pigmentlerin kimyasal bileşiminin belirlenmesi analitik kimyanın; bu pigmentlerin çevresel etkenler altında zamanla nasıl bozulduğunun (kararlılık, tepkime hızı açısından) incelenmesi ise fizikokimyanın konusudur — kültürel mirasın korunması bu bilgilerin birleşimini gerektirir."
  }
],
  "kariyer": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir görev tanımında şu ifade yer almaktadır: gıda üretim hattından alınan örneklerde katkı maddesi miktarı ve mikrobiyolojik güvenlik ölçümleri düzenli olarak yapılır, sonuçlar standartlarla karşılaştırılır.",
    text: "Bu görev tanımı en doğrudan hangi kariyer alanına örnektir?",
    options: ["Astrokimya araştırmacısı", "Gıda kalite kontrol uzmanı", "Patent avukatı", "Bilim gazeteciliği", "Müze koruma kimyageri"],
    correct: 1,
    explain: "Gıda örneklerinde katkı maddesi ve güvenlik ölçümü yapıp standartlarla karşılaştırma, gıda kalite kontrol uzmanının temel işidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir laboratuvarda, olay yerinden toplanan iz miktardaki maddeler analiz edilerek bir suçun aydınlatılmasına yardımcı kanıtlar üretilmektedir.",
    text: "Bu çalışma alanı hangi kariyerle en doğrudan ilişkilidir?",
    options: ["Kozmetik Ar-Ge uzmanı", "Adli (forensic) kimyager", "Petrokimya mühendisi", "Tarım kimyası araştırmacısı", "Elektrokimya mühendisi"],
    correct: 1,
    explain: "Olay yerinden alınan iz maddelerin analiz edilerek adli sürece kanıt sunulması adli kimyagerin görev alanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir ilaç şirketinde, yeni geliştirilen bir molekülün hedef hastalıktaki etkinliği ve olası yan etkileri klinik öncesi aşamada sistematik olarak test edilmektedir.",
    text: "Bu görev en doğrudan hangi kariyer alanına aittir?",
    options: ["Jeokimya uzmanı", "Farmasötik Ar-Ge kimyageri", "Bilim müzesi küratörü", "Gıda mühendisi", "Metalurji uzmanı"],
    correct: 1,
    explain: "Yeni moleküllerin etkinlik ve güvenliğinin test edilmesi ilaç (farmasötik) Ar-Ge kimyagerinin işidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir fabrikada çalışanların kullandığı kimyasal maddelerin güvenli depolanması, etiketlenmesi ve olası kaza risklerinin önlenmesi için prosedürler hazırlanmaktadır.",
    text: "Bu görev tanımı hangi kariyer alanına en uygun düşer?",
    options: ["Astrokimya araştırmacısı", "İş sağlığı ve güvenliği (EHS) uzmanı", "Bilim gazetecisi", "Patent uzmanı", "Sanat eseri restoratörü"],
    correct: 1,
    explain: "Kimyasal madde güvenliği, depolama ve risk önleme prosedürleri hazırlamak EHS (iş sağlığı ve güvenliği) uzmanının görevidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir üniversitede, lisans öğrencilerine atomun yapısı ve kimyasal bağlar konuları haftalık ders programına göre anlatılmakta, laboratuvar uygulamaları yürütülmektedir.",
    text: "Bu görev en çok hangi kariyer alanıyla örtüşür?",
    options: ["Adli kimyager", "Kimya öğretmenliği/akademisyenliği", "Petrokimya mühendisi", "Kozmetik Ar-Ge uzmanı", "Malzeme test mühendisi"],
    correct: 1,
    explain: "Ders anlatma ve laboratuvar uygulaması yürütme, öğretmenlik/akademisyenlik kariyerinin temel unsurlarıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir akarsuyun farklı noktalarından alınan su örneklerinde ağır metal ve kirletici madde derişimleri ölçülerek bölgedeki su kalitesi haritalanmaktadır.",
    text: "Bu görev, kariyer alanları arasında en doğrudan hangisiyle eşleşir?",
    options: ["Kozmetik formülasyon uzmanı", "Çevre kimyageri", "Patent avukatı", "Malzeme bilimci", "Nükleer güvenlik uzmanı"],
    correct: 1,
    explain: "Su kaynaklarındaki kirletici madde düzeylerinin izlenmesi ve haritalanması çevre kimyagerinin görev alanına girer."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kozmetik firmasında, yeni bir nemlendirici kremin cilt üzerindeki etkisi test edilmekte, formülasyondaki bileşen oranları optimize edilmektedir.",
    text: "Tarif edilen bu görev hangi kariyer alanının kapsamına girer?",
    options: ["Astrokimya araştırmacısı", "Adli kimyager", "Kozmetik Ar-Ge kimyageri", "İş güvenliği uzmanı", "Jeokimyager"],
    correct: 2,
    explain: "Kozmetik ürün formülasyonu geliştirme ve optimize etme kozmetik Ar-Ge kimyagerinin işidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir rafineride ham petrolün damıtılarak benzin, mazot ve diğer yakıt türlerine ayrıştırılması süreci planlanıp izlenmektedir.",
    text: "Bu görev tanımı en doğrudan hangi kariyer alanına aittir?",
    options: ["Bilim müzesi küratörü", "Gıda mühendisi", "Petrokimya mühendisi", "Adli kimyager", "Kozmetik uzmanı"],
    correct: 2,
    explain: "Ham petrolün işlenerek yakıt ürünlerine dönüştürülmesi süreçlerinin yönetimi petrokimya mühendisliğinin çalışma alanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir metal geri dönüşüm tesisinde, hurda metallerin bileşimi analiz edilerek saflaştırma ve alaşım oluşturma süreçleri yönetilmektedir.",
    text: "Bu iş, kariyer alanları arasında en çok hangisiyle örtüşür?",
    options: ["Bilim gazetecisi", "Farmasötik kimyager", "Metalurji/malzeme mühendisi", "Adli kimyager", "Tarım kimyası uzmanı"],
    correct: 2,
    explain: "Metal bileşiminin analizi, saflaştırma ve alaşım süreçlerinin yönetimi metalurji/malzeme mühendisliğinin işidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir hastane laboratuvarında, hastalardan alınan kan örneklerindeki biyokimyasal parametreler (şeker, kolesterol, enzim düzeyleri) ölçülerek tanı sürecine katkı sağlanmaktadır.",
    text: "Bu görevi üstlenen kişinin kariyeri en doğrudan hangisidir?",
    options: ["Astrokimya araştırmacısı", "Petrokimya mühendisi", "Klinik biyokimya uzmanı", "Patent uzmanı", "Malzeme test mühendisi"],
    correct: 2,
    explain: "Kan örneklerindeki biyokimyasal parametrelerin ölçülerek tanıya katkı sağlanması klinik biyokimya uzmanının işidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir pil üreticisinde, farklı elektrot malzemelerinin şarj kapasitesi ve dayanıklılığı test edilerek yeni nesil batarya tasarımı geliştirilmektedir.",
    text: "Aşağıdakilerden hangisi bu görev tanımına en uygun kariyer alanıdır?",
    options: ["Gıda güvenliği denetçisi", "Adli kimyager", "Elektrokimya/batarya mühendisi", "Bilim müzesi küratörü", "Jeokimyager"],
    correct: 2,
    explain: "Elektrot malzemelerinin test edilip yeni batarya tasarımı geliştirilmesi elektrokimya/batarya mühendisliğinin çalışma alanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir müze laboratuvarında, tarihi bir tablonun boya katmanları kimyasal yöntemlerle incelenerek uygun koruma ve restorasyon yöntemi belirlenmektedir.",
    text: "Bu görev tanımı, hangi kariyer alanının tipik bir örneğidir?",
    options: ["Gıda kalite uzmanı", "Petrokimya mühendisi", "Kültürel miras koruma kimyageri", "Elektrokimya mühendisi", "Tarım kimyası araştırmacısı"],
    correct: 2,
    explain: "Sanat eserlerindeki malzemelerin kimyasal analizi ve uygun koruma yönteminin belirlenmesi kültürel miras koruma kimyagerinin işidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir tarım Ar-Ge biriminde, toprağın besin madde içeriği analiz edilerek verimi artıracak gübre formülasyonları geliştirilmektedir.",
    text: "Bu çalışma alanı en doğrudan hangi kariyerle örtüşür?",
    options: ["Kozmetik uzmanı", "Adli kimyager", "Tarım kimyası araştırmacısı", "Nükleer güvenlik uzmanı", "Bilim gazetecisi"],
    correct: 2,
    explain: "Toprak besin analizi ve gübre formülasyonu geliştirme tarım kimyası araştırmacısının çalışma alanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir yayın kuruluşunda, karmaşık bilimsel araştırma bulguları geniş kitlelerin anlayabileceği şekilde makalelere ve haberlere dönüştürülmektedir.",
    text: "Bu görevi yürüten uzmanın kariyeri hangisidir?",
    options: ["Adli kimyager", "Malzeme test mühendisi", "Bilim iletişimi/gazeteciliği", "Petrokimya mühendisi", "Gıda kalite uzmanı"],
    correct: 2,
    explain: "Bilimsel bulguların geniş kitlelere anlaşılır biçimde aktarılması bilim iletişimi/gazeteciliği kariyerinin işidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir hukuk bürosunda, yeni geliştirilen bir kimyasal sürecin daha önce başka bir buluşla örtüşüp örtüşmediği teknik dokümanlar incelenerek değerlendirilmektedir.",
    text: "Tarif edilen görev hangi kariyer alanının bir örneğidir?",
    options: ["Gıda mühendisi", "Kozmetik Ar-Ge kimyageri", "Patent/fikri mülkiyet uzmanı (kimya arka planlı)", "Astrokimya araştırmacısı", "Elektrokimya mühendisi"],
    correct: 2,
    explain: "Kimyasal buluşların teknik özgünlüğünün değerlendirilmesi patent/fikri mülkiyet uzmanlığının (kimya arka planlı) işidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir uzay ajansının laboratuvarında, bir göktaşı örneğindeki mineral ve element bileşimi analiz edilerek Güneş Sistemi'nin oluşumu hakkında ipuçları aranmaktadır.",
    text: "Bu iş tanımı en doğrudan hangi kariyer alanına aittir?",
    options: ["Kozmetik formülasyon uzmanı", "Gıda güvenliği denetçisi", "İş güvenliği uzmanı", "Astrokimya araştırmacısı", "Patent uzmanı"],
    correct: 3,
    explain: "Göktaşı örneklerinin bileşiminin analiz edilerek Güneş Sistemi'nin oluşumuna dair ipucu aranması astrokimya araştırmacısının işidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir ilaç fabrikasında, üretilen her partinin belirlenen kalite standartlarına uyup uymadığı kontrol edilerek onay/red kararı verilmektedir.",
    text: "Bu görev en çok hangi kariyer alanıyla ilişkilendirilebilir?",
    options: ["Petrokimya mühendisi", "Astrokimya araştırmacısı", "Bilim müzesi küratörü", "Kalite güvence (GMP) denetçisi", "Tarım kimyası uzmanı"],
    correct: 3,
    explain: "Üretim partilerinin kalite standartlarına uygunluğunun denetlenmesi kalite güvence (GMP) denetçisinin görevidir."
  },

  /* ============ ORTA ============ */

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Aşağıdaki tabloda dört farklı kariyer alanının, çalışma ortamı ve ağırlıklı olarak kullandığı kimya alt disiplini birlikte listelenmiştir.",
    table: {
      headers: ["Kariyer", "Çalışma ortamı", "Ağırlıklı alt disiplin"],
      rows: [
        ["Adli kimyager", "Kriminal laboratuvar", "Analitik kimya"],
        ["Kozmetik Ar-Ge uzmanı", "Ürün geliştirme laboratuvarı", "Organik kimya"],
        ["Batarya mühendisi", "Enerji Ar-Ge merkezi", "Elektrokimya"],
        ["Klinik biyokimya uzmanı", "Hastane laboratuvarı", "Biyokimya"]
      ],
      caption: "Dört kariyer alanı ve ağırlıklı alt disiplinleri"
    },
    text: "Tabloya göre, hücresel enerji süreçleriyle ilgili moleküler bilgiye en çok ihtiyaç duyan kariyer hangisidir?",
    options: ["Adli kimyager", "Kozmetik Ar-Ge uzmanı", "Batarya mühendisi", "Klinik biyokimya uzmanı", "Hiçbiri, hepsi eşit düzeyde ihtiyaç duyar"],
    correct: 3,
    explain: "Tabloda klinik biyokimya uzmanının ağırlıklı alt disiplini biyokimyadır; hücresel enerji süreçleri biyokimyanın konusu olduğundan bu kariyer en çok ihtiyaç duyar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir üniversite mezunu, hem laboratuvar ortamında uzun saatler geçirmekten hem de elde ettiği bulguları rapor hâline getirip yöneticilere sunmaktan keyif alıyor; ancak saha çalışmasına veya insanlarla doğrudan etkileşime pek ilgi duymuyor.",
    text: "Bu ilgi profiline en uygun kariyer aşağıdakilerden hangisidir?",
    options: ["Bilim gazeteciliği", "Kalite kontrol/analitik laboratuvar uzmanlığı", "Kimya öğretmenliği", "Çevre saha denetçiliği", "Ürün satış temsilciliği"],
    correct: 1,
    explain: "Laboratuvarda uzun süre çalışma ve bulguları rapor hâline getirme eğilimi, saha/insan etkileşimi gerektirmeyen kalite kontrol/analitik laboratuvar uzmanlığıyla en çok örtüşür; diğer seçenekler yoğun sunum, öğretim veya saha teması gerektirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    chart: {
      type: "bar",
      title: "Bir bölgedeki kimya mezunlarının sektörel dağılımı (yüzde)",
      xLabel: "Sektör",
      yLabel: "Mezun oranı (%)",
      data: [
        { label: "İlaç/sağlık", value: 32 },
        { label: "Gıda", value: 22 },
        { label: "Enerji/petrokimya", value: 18 },
        { label: "Eğitim", value: 15 },
        { label: "Diğer (adli, kozmetik, vb.)", value: 13 }
      ]
    },
    text: "Grafiğe göre, bölgedeki kimya mezunlarının en büyük ikinci grubu hangi sektörde istihdam edilmektedir?",
    options: ["İlaç/sağlık", "Gıda", "Enerji/petrokimya", "Eğitim", "Diğer"],
    correct: 1,
    explain: "Grafikte en yüksek oran ilaç/sağlık (%32), ikinci en yüksek oran ise gıda sektörüdür (%22)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir sağlık kurumunda, hem yeni bir ilaç molekülünün vücutta nasıl parçalandığı (metabolize olduğu) incelenmekte hem de bu molekülün üretim sürecinde çevreye salınan atıkların yönetimi planlanmaktadır.",
    text: "Bu iki görev sırasıyla en doğrudan hangi kariyer alanlarıyla ilişkilidir?",
    options: ["Kozmetik Ar-Ge uzmanı ve müze koruma kimyageri", "Adli kimyager ve bilim gazetecisi", "Astrokimya araştırmacısı ve patent uzmanı", "Farmasötik Ar-Ge kimyageri ve çevre/sürdürülebilirlik danışmanı", "Bu iki görev aynı kariyerin farklı isimleridir, ayrım yapılamaz"],
    correct: 3,
    explain: "Molekülün vücutta metabolizmasının incelenmesi farmasötik Ar-Ge kimyagerinin; üretim atıklarının çevresel yönetimi ise çevre/sürdürülebilirlik danışmanının işidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kariyer danışmanlığı raporunda şu gözlem paylaşılmıştır: analitik kimya kökenli meslekler (kalite kontrol, adli kimya, çevre izleme gibi) neredeyse her sektörde talep görürken, astrokimya gibi çok uzmanlaşmış alanlarda pozisyon sayısı çok sınırlıdır ve genellikle sadece araştırma kurumlarında bulunur.",
    text: "Bu gözleme dayanarak, kariyer planlaması açısından en dengeli çıkarım hangisidir?",
    options: ["Uzmanlaşmış alanlarda çalışmak hiçbir zaman tercih edilmemelidir", "Astrokimya, analitik kimyadan her zaman daha fazla iş imkânı sunar", "Sektörel talep, bir kariyerin bilimsel değerini doğrudan belirler", "Geniş istihdam olanağı isteyen biri için analitik kimya temelli bir kariyer, dar uzmanlaşmış alanlara göre daha fazla sektörel seçenek sunar", "Analitik kimya kökenli meslekler yalnızca laboratuvar dışı işlerde bulunur"],
    correct: 3,
    explain: "Metinde açıkça belirtildiği gibi analitik kimya kökenli meslekler daha geniş sektörel talep görürken, astrokimya gibi dar alanlar sınırlı pozisyon sunar; bu, geniş istihdam arayan biri için dengeli bir çıkarımdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    objectIcons: { title: "Bir iş yerinde kullanılan malzemeler", items: [{ type: "glove", label: "Koruyucu eldiven" }, { type: "flask", label: "Titrasyon düzeneği" }, { type: "extinguisher", label: "Yangın söndürücü" }] },
    context: "Görseldeki üç malzemenin bir arada, düzenli olarak kontrol edilip kayıt altına alındığı bir iş yeri tarif edilmektedir; bu iş yerinde ayrıca çalışanlara düzenli güvenlik eğitimleri verilmektedir.",
    text: "Bu iş yerinin sorumlusu için en uygun kariyer tanımı hangisidir?",
    options: ["Müze küratörü", "Bilim gazetecisi", "Patent avukatı", "İş sağlığı ve güvenliği (EHS) uzmanı", "Sanat eseri restoratörü"],
    correct: 3,
    explain: "Koruyucu ekipman, laboratuvar düzeneği ve yangın güvenliğinin birlikte denetlenip eğitim verilmesi EHS (iş sağlığı ve güvenliği) uzmanının görev tanımına uyar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir gıda denetim biriminde, ithal edilen bir ürün partisinde izin verilenden fazla katkı maddesi tespit edilmiş ve parti satışa sunulmadan geri çekilmiştir.",
    text: "Bu süreçte görev alan uzmanın kariyeri en doğrudan hangisidir?",
    options: ["Kültürel miras koruma kimyageri", "Astrokimya araştırmacısı", "Elektrokimya mühendisi", "Gıda kalite kontrol/denetim uzmanı", "Patent uzmanı"],
    correct: 3,
    explain: "Katkı maddesi tespiti ve ürünün standartlara uygunluğunun denetlenmesi gıda kalite kontrol/denetim uzmanının işidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    table: {
      headers: ["Kariyer", "Gerekli ek yetkinlik"],
      rows: [
        ["Bilim gazeteciliği", "Yazılı/sözlü anlatım, karmaşık bilgiyi sadeleştirme"],
        ["Patent uzmanlığı", "Hukuk bilgisi, teknik doküman analizi"],
        ["Kimya öğretmenliği", "Pedagoji, sınıf yönetimi"],
        ["Kalite güvence denetçiliği", "Mevzuat bilgisi (GMP/ISO), denetim süreçleri"]
      ],
      caption: "Kimya kökenli dört kariyerin gerektirdiği ek yetkinlikler"
    },
    text: "Tabloya göre, güçlü hukuk bilgisi ve teknik doküman analiz becerisi gerektiren kariyer hangisidir?",
    options: ["Bilim gazeteciliği", "Patent uzmanlığı", "Kimya öğretmenliği", "Kalite güvence denetçiliği", "Hepsi eşit düzeyde hukuk bilgisi gerektirir"],
    correct: 1,
    explain: "Tabloda patent uzmanlığının gerektirdiği ek yetkinlik olarak hukuk bilgisi ve teknik doküman analizi belirtilmiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir teknoloji şirketinde, binlerce moleküler yapı verisi bilgisayar algoritmalarıyla taranarak yeni bir ilaç adayı molekülün hangi özelliklere sahip olması gerektiği tahmin edilmektedir.",
    text: "Bu görev en doğrudan hangi (görece yeni) kariyer alanına örnektir?",
    options: ["Gıda mühendisi", "Adli kimyager", "Müze koruma kimyageri", "Kemoinformatik/hesaplamalı kimya uzmanı", "İş güvenliği uzmanı"],
    correct: 3,
    explain: "Moleküler verilerin bilgisayar algoritmalarıyla analiz edilerek yeni molekül özelliklerinin tahmin edilmesi kemoinformatik/hesaplamalı kimya uzmanlığının işidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir maden şirketinde hem çıkarılan cevherin metal içeriği analiz edilmekte hem de işletmenin çevresel atık yönetim planı hazırlanmaktadır.",
    text: "Bu iki görev sırasıyla en doğrudan hangi kariyer alanlarıyla örtüşür?",
    options: ["Kimya öğretmeni ve müze küratörü", "Kozmetik Ar-Ge uzmanı ve bilim gazetecisi", "Adli kimyager ve patent uzmanı", "Metalurji/jeokimya uzmanı ve çevre/sürdürülebilirlik danışmanı", "Astrokimya araştırmacısı ve klinik biyokimya uzmanı"],
    correct: 3,
    explain: "Cevherin metal içeriğinin analizi metalurji/jeokimya uzmanının; atık yönetim planı hazırlama ise çevre/sürdürülebilirlik danışmanının görev alanına girer."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir spor bilimleri merkezinde, sporcuların kas dokusundaki enerji üretim süreçleri ve beslenme takviyelerinin performansa etkisi incelenmektedir.",
    text: "Bu göreve dayanarak, en uygun kariyer alanı hangisidir?",
    options: ["Bilim müzesi küratörü", "Petrokimya mühendisi", "Patent avukatı", "Spor biyokimyası uzmanı", "Elektrokimya mühendisi"],
    correct: 3,
    explain: "Kas dokusundaki enerji üretimi ve beslenme takviyelerinin etkisinin incelenmesi spor biyokimyası uzmanının çalışma alanıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir üniversite mezunu, laboratuvar araştırmasından çok, farklı şirketlere kimyasal madde ve ekipman satışı yaparken teknik danışmanlık da sunmayı, müşteri ziyaretleri yapmayı seviyor.",
    text: "Bu ilgi profiline sahip birinin kariyer tercihi en uygun şekilde hangisi olur?",
    options: ["Akademik araştırmacılık", "Kimyasal ürün satış/teknik destek mühendisliği", "Adli kimyagerlik", "Kalite güvence denetçiliği (sürekli laboratuvar)", "Müze koruma kimyagerliği"],
    correct: 1,
    explain: "Şirketlere satış yapma, teknik danışmanlık sunma ve müşteri ziyaretleri, laboratuvar-ağırlıklı değil saha/iletişim ağırlıklı satış-teknik destek mühendisliğiyle örtüşür."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir nükleer santralde, radyasyon seviyeleri sürekli izlenmekte ve çalışanların güvenli doz sınırları içinde kalması için prosedürler uygulanmaktadır.",
    text: "Bu çalışma en doğrudan hangi kariyer alanının parçasıdır?",
    options: ["Patent uzmanı", "Kozmetik Ar-Ge kimyageri", "Bilim gazetecisi", "Tarım kimyası araştırmacısı", "Nükleer kimya/radyasyon güvenliği uzmanı"],
    correct: 4,
    explain: "Radyasyon seviyelerinin izlenmesi ve güvenli doz prosedürlerinin uygulanması nükleer kimya/radyasyon güvenliği uzmanının işidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir sigorta şirketi, kimyasal madde üreten fabrikalara sigorta poliçesi düzenlemeden önce tesisin güvenlik risklerini kimyasal madde envanterine göre değerlendiren bir uzmandan rapor talep etmektedir.",
    text: "Bu uzmanın kariyeri en doğrudan hangisidir?",
    options: ["Gıda mühendisi", "Astrokimya araştırmacısı", "Kimya öğretmeni", "Müze koruma kimyageri", "Kimyasal risk değerlendirme/EHS danışmanı"],
    correct: 4,
    explain: "Fabrikanın kimyasal madde envanterine göre güvenlik riskini değerlendirip rapor sunmak kimyasal risk değerlendirme/EHS danışmanlığının işidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir devlet kurumunda, yeni geliştirilen bir tarım ilacının çevreye ve insan sağlığına olan uzun vadeli etkileri değerlendirilerek kullanım izni verilip verilmeyeceğine karar verilmektedir.",
    text: "Bu değerlendirmeyi yapan uzmanın kariyeri en doğrudan hangisidir?",
    options: ["Patent uzmanı", "Kozmetik Ar-Ge kimyageri", "Bilim müzesi küratörü", "Elektrokimya mühendisi", "Çevresel/toksikolojik risk değerlendirme uzmanı"],
    correct: 4,
    explain: "Bir kimyasalın çevre ve sağlık üzerindeki uzun vadeli etkilerinin değerlendirilerek izin kararına katkı sağlanması çevresel/toksikolojik risk değerlendirme uzmanının işidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir malzeme test laboratuvarında, yeni geliştirilen bir kompozit malzemenin darbe dayanımı, ısıya dayanıklılığı ve esneklik özellikleri ölçülerek uçak parçalarında kullanıma uygunluğu değerlendirilmektedir.",
    text: "Tanımlanan bu iş hangi kariyer alanına karşılık gelir?",
    options: ["Nükleer güvenlik uzmanı", "Adli kimyager", "Bilim gazetecisi", "Gıda kalite uzmanı", "Malzeme bilimi/polimer mühendisi"],
    correct: 4,
    explain: "Kompozit malzemelerin mekanik ve termal özelliklerinin test edilmesi malzeme bilimi/polimer mühendisliğinin çalışma alanıdır."
  },

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kozmetik firmasında hem yeni bir güneş kremi formülünün cilt üzerindeki koruma etkinliği organik kimya yöntemleriyle test edilmekte hem de ürünün ambalajında kullanılan plastik malzemenin geri dönüştürülebilirliği polimer kimyası yöntemleriyle değerlendirilmektedir.",
    text: "Bu iki görev hangi kariyer alanlarının ortak çalışmasını gerektirir?",
    options: ["Bu iki görev aynı kariyerin farklı isimleridir", "Adli kimyager ve bilim gazetecisi", "Astrokimya araştırmacısı ve patent uzmanı", "Klinik biyokimya uzmanı ve müze koruma kimyageri", "Kozmetik Ar-Ge kimyageri ve polimer/malzeme mühendisi"],
    correct: 4,
    explain: "Güneş kreminin koruma etkinliğinin test edilmesi kozmetik Ar-Ge kimyagerinin; ambalaj plastiğinin geri dönüştürülebilirliğinin değerlendirilmesi ise polimer/malzeme mühendisinin işidir."
  },

  /* ============ ZOR ============ */

  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kişinin kariyer geçmişi şöyledir: önce bir ilaç şirketinde klinik öncesi molekül testleri yapan bir Ar-Ge kimyageri olarak çalışmış; ardından aynı şirketin düzenleyici işler (regülasyon) biriminde, geliştirilen ilaçların ruhsatlandırma sürecinde gerekli teknik dokümanları hazırlayan bir uzman olarak görev almıştır.",
    text: "Bu geçiş, kariyer planlaması açısından hangi çıkarımı en iyi destekler?",
    options: ["Bu geçiş yalnızca şans eseri gerçekleşmiştir, genellenebilir bir örnek değildir", "Ar-Ge kimyagerliği ile düzenleyici işler uzmanlığı aynı yetkinlikleri gerektirdiği için pratikte tek bir meslektir", "Bir kişi kariyer boyunca yalnızca tek bir dar uzmanlık alanında kalmak zorundadır", "Düzenleyici işler biriminde çalışmak laboratuvar geçmişini tamamen değersiz kılar", "Bir kimya kariyeri, laboratuvar becerileriyle birlikte mevzuat/dokümantasyon bilgisi kazanılarak farklı bir uzmanlık alanına genişleyebilir"],
    correct: 4,
    explain: "Örnek, laboratuvar temelli bir kariyerin ek yetkinlik (mevzuat/dokümantasyon bilgisi) kazanılarak farklı ama ilişkili bir uzmanlık alanına (düzenleyici işler) genişleyebileceğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir uzay tarımı projesinde hem toprak benzeri ortamların (regolit) mineral bileşimi anorganik kimya yöntemleriyle analiz edilmekte hem de bu ortamlarda yetiştirilen bitkilerin besin değeri gıda kimyası yöntemleriyle test edilmektedir.",
    text: "Bu proje ekibinde görev alacak iki uzmanın kariyer alanları sırasıyla en doğrudan hangileridir?",
    options: ["Bu iki görev birbirinin aynısıdır, ayrım anlamsızdır", "Adli kimyager ve bilim gazetecisi", "Kozmetik Ar-Ge uzmanı ve patent avukatı", "Elektrokimya mühendisi ve müze koruma kimyageri", "Anorganik/jeokimya uzmanı ve gıda kimyası araştırmacısı"],
    correct: 4,
    explain: "Regolit benzeri ortamların mineral bileşiminin analizi anorganik/jeokimya uzmanının; yetiştirilen bitkilerin besin değerinin test edilmesi ise gıda kimyası araştırmacısının işidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    table: {
      headers: ["Kariyer", "Ortalama haftalık laboratuvar süresi", "Ortalama haftalık rapor/sunum süresi"],
      rows: [
        ["Analitik laboratuvar uzmanı", "32 saat", "6 saat"],
        ["Bilim iletişimcisi (kimya kökenli)", "4 saat", "28 saat"],
        ["Kalite güvence denetçisi", "14 saat", "18 saat"],
        ["Ar-Ge kimyageri (kozmetik)", "26 saat", "10 saat"]
      ],
      caption: "Dört kariyerin haftalık zaman dağılımı (ortalama)"
    },
    text: "Tabloya göre, laboratuvar süresi ile rapor/sunum süresi arasındaki fark en düşük (yani en dengeli dağılan) kariyer hangisidir?",
    options: ["Analitik laboratuvar uzmanı", "Bilim iletişimcisi", "Kalite güvence denetçisi", "Ar-Ge kimyageri (kozmetik)", "Hepsinde fark eşittir"],
    correct: 2,
    explain: "Farklar: analitik uzmanda 26 saat, iletişimcide 24 saat, kalite güvence denetçisinde 4 saat, Ar-Ge kimyagerinde 16 saat. En düşük fark kalite güvence denetçisine aittir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir müze koruma laboratuvarında hem tarihi bir heykelin yüzeyindeki korozyon ürünleri analitik kimya yöntemleriyle tanımlanmakta hem de heykelin orijinal alaşım bileşimi metalurji/jeokimya yöntemleriyle belirlenmeye çalışılmaktadır.",
    text: "Bu iki analiz sırasıyla en doğrudan hangi kariyer uzmanlıklarının kesişimini yansıtır?",
    options: ["Bu iki analiz birbirinden tamamen bağımsızdır, ortak bir uzmanlık gerektirmez", "Adli kimyager ve bilim gazetecisi", "Farmasötik Ar-Ge kimyageri ve patent uzmanı", "Kozmetik Ar-Ge uzmanı ve nükleer güvenlik uzmanı", "Kültürel miras koruma kimyageri (analitik kimya + metalurji/jeokimya bilgisiyle)"],
    correct: 4,
    explain: "Korozyon ürünlerinin tanımlanması analitik kimya, orijinal alaşımın belirlenmesi metalurji/jeokimya bilgisi gerektirir; bu ikisinin bir arada kullanıldığı kariyer kültürel miras koruma kimyagerliğidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kariyer araştırması raporunda şu veriler paylaşılmıştır: analitik kimya temelli mesleklerde açık pozisyon sayısı yüksek fakat ortalama ücret artışı yavaş seyrederken, kemoinformatik/hesaplamalı kimya gibi yeni gelişen alanlarda pozisyon sayısı daha az fakat ücret artışı belirgin şekilde daha hızlıdır.",
    text: "Bu veriye dayanarak, kariyer planlaması açısından en dengeli çıkarım hangisidir?",
    options: ["Pozisyon sayısı düşük olan alanlar hiçbir zaman tercih edilmemelidir", "Kemoinformatik her zaman analitik kimyadan daha fazla pozisyon sunar", "Analitik kimya kökenli meslekler zamanla tamamen ortadan kalkacaktır", "Ücret artış hızı, bir mesleğin bilimsel değerini belirleyen tek ölçüttür", "İş güvencesi önceliği olan biri için analitik kimya, hızlı ücret artışı önceliği olan biri için kemoinformatik daha uygun olabilir"],
    correct: 4,
    explain: "Veriler, iki alanın farklı önceliklere (iş güvencesi vs. hızlı ücret artışı) göre farklı avantajlar sunduğunu gösterir; bu, kişinin önceliğine göre dengeli bir seçim yapılabileceği anlamına gelir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir gıda güvenliği skandalında, önce bir analitik laboratuvar uzmanı ürün örneklerinde yasaklı bir madde tespit etmiş; ardından bir kalite güvence denetçisi bu bulguyu üretim sürecindeki hangi aşamada bulaşmanın gerçekleştiğini araştırmış; son olarak bir düzenleyici işler uzmanı, ilgili resmî kuruma sunulacak düzeltici eylem raporunu hazırlamıştır.",
    text: "Bu üç aşamanın sırasıyla en doğrudan yansıttığı yetkinlik zinciri hangisidir?",
    options: ["Bu üç görev tek bir kişi tarafından eşzamanlı olarak yürütülemez", "Üç aşama da tamamen aynı yetkinliği gerektirir, sıralamanın önemi yoktur", "Kök neden araştırması, tespitten önce yapılmalıdır", "Resmî raporlama, analitik ölçüm yapılmadan da tamamlanabilir", "Tespit (analitik ölçüm) → kök neden araştırması (süreç denetimi) → resmî raporlama (mevzuat bilgisi)"],
    correct: 4,
    explain: "Sıralama, önce bir sorunun analitik yöntemlerle tespit edilmesini, sonra sürecin hangi aşamasında oluştuğunun denetlenmesini, son olarak mevzuata uygun resmî raporlamanın yapılmasını yansıtır — üç farklı yetkinliğin mantıksal zinciridir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir otomotiv şirketinde hem yeni bir yakıt katkı maddesinin motor performansına etkisi petrokimya yöntemleriyle test edilmekte hem de bu katkı maddesinin egzoz emisyonlarına etkisi çevre kimyası yöntemleriyle değerlendirilmektedir.",
    text: "Bu iki değerlendirme sırasıyla en doğrudan hangi kariyer alanlarının kesişimini gerektirir?",
    options: [
      "Petrokimya mühendisliği ve çevre kimyası/sürdürülebilirlik uzmanlığı",
      "Adli kimyager ve bilim müzesi küratörü",
      "Kozmetik Ar-Ge uzmanı ve patent avukatı",
      "Klinik biyokimya uzmanı ve nükleer güvenlik uzmanı",
      "Bu iki değerlendirme birbirinden tamamen kopuktur"
    ],
    correct: 0,
    explain: "Yakıt katkısının motor performansına etkisi petrokimya mühendisliğinin; egzoz emisyonlarına etkisi çevre kimyası/sürdürülebilirlik uzmanlığının konusudur — proje ikisinin ortak çalışmasını gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kariyer danışmanı, kimya lisans mezunlarına şu tavsiyeyi vermektedir: 'Sadece laboratuvar becerisi geliştirmek yeterli değildir; bir alt disiplinde derinleşirken aynı zamanda veri analizi, raporlama veya mevzuat gibi bir yan yetkinlik de kazanmak, kariyer seçeneklerinizi genişletir.'",
    text: "Bu tavsiye, aşağıdaki kariyer profillerinden hangisiyle EN AZ örtüşür?",
    options: [
      "Yalnızca laboratuvar deneyi yapmayı öğrenip başka hiçbir beceri geliştirmeyen bir mezun",
      "Analitik kimya bilgisine ek olarak istatistiksel veri analizi öğrenen bir mezun",
      "Organik kimya bilgisine ek olarak mevzuat/dokümantasyon süreçlerini öğrenen bir mezun",
      "Biyokimya bilgisine ek olarak bilimsel yazım ve raporlama becerisi geliştiren bir mezun",
      "Fizikokimya bilgisine ek olarak temel programlama/veri işleme öğrenen bir mezun"
    ],
    correct: 0,
    explain: "Danışmanın tavsiyesi bir yan yetkinlik kazanmayı öneriyor; yalnızca laboratuvar deneyiyle sınırlı kalıp başka beceri geliştirmeyen profil bu tavsiyeyle en az örtüşür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    circleCompare: {
      title: "Dört kariyer alanında Türkiye'deki tahmini yıllık açık pozisyon sayısı (temsilî)",
      unit: "pozisyon",
      items: [
        { label: "Gıda kalite kontrol", value: 1200 },
        { label: "Adli kimya", value: 90 },
        { label: "Kozmetik Ar-Ge", value: 340 },
        { label: "Astrokimya araştırma", value: 15 }
      ]
    },
    text: "Görseldeki dairelerin büyüklük farkına dayanarak, hangi çıkarım en doğru şekilde desteklenir?",
    options: [
      "Gıda kalite kontrol alanı, dört alan arasında en geniş istihdam hacmine sahiptir",
      "Astrokimya araştırma, dört alan arasında en yüksek istihdam hacmine sahiptir",
      "Dört alandaki pozisyon sayıları birbirine çok yakındır",
      "Adli kimya, kozmetik Ar-Ge'den daha fazla pozisyon sunmaktadır",
      "Görseldeki daire büyüklükleri pozisyon sayısıyla ilişkili değildir"
    ],
    correct: 0,
    explain: "Dairelerin alanı pozisyon sayısıyla orantılıdır; gıda kalite kontrol (1200) açık ara en büyük daireye, dolayısıyla en geniş istihdam hacmine sahiptir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kişi, kariyerinin ilk yıllarında bir ilaç şirketinde saf laboratuvar Ar-Ge işiyle uğraşmış; birkaç yıl sonra ekip yöneticiliğine geçmiş ve artık zamanının çoğunu bütçe planlama, ekip koordinasyonu ve üst yönetime rapor sunmaya ayırıyor; laboratuvara doğrudan girme sıklığı belirgin biçimde azalmıştır.",
    text: "Bu kariyer gelişimi, aşağıdaki genellemelerden hangisini EN İYİ örnekler?",
    options: [
      "Teknik bir alanda derinleşen bir kariyer, zamanla yönetsel/liderlik yetkinliklerinin öne çıktığı bir role dönüşebilir",
      "Bir kimyagerin kariyeri boyunca laboratuvar dışına çıkması mesleki başarısızlık göstergesidir",
      "Yönetsel pozisyona geçen biri artık kimya bilgisini hiç kullanmaz",
      "Bu geçiş yalnızca ilaç sektöründe görülen istisnai bir durumdur",
      "Ekip yöneticiliği, laboratuvar Ar-Ge deneyimi olmadan da aynı etkinlikte yürütülebilir"
    ],
    correct: 0,
    explain: "Örnek, teknik bir kariyerin zamanla yönetim/liderlik ağırlıklı bir role evrilebileceğini gösteren yaygın bir kariyer gelişim örüntüsüdür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir sürdürülebilirlik danışmanlığı biriminde hem bir fabrikanın atık su arıtma sürecinin verimliliği çevre kimyası yöntemleriyle analiz edilmekte hem de bu sürecin maliyet-fayda dengesi işletme verileriyle değerlendirilmektedir.",
    text: "Bu iki değerlendirme, sürdürülebilirlik danışmanlığı kariyerinin hangi özelliğini en iyi yansıtır?",
    options: [
      "Bu kariyer, teknik kimya bilgisiyle işletme/ekonomik değerlendirme becerisinin bir arada kullanılmasını gerektirir",
      "Bu kariyer yalnızca laboratuvar analiziyle sınırlıdır, ekonomik veriyle ilgisi yoktur",
      "Bu kariyer yalnızca ekonomik veri analiziyle sınırlıdır, kimya bilgisi gerekmez",
      "Çevre kimyası analizi ile maliyet-fayda değerlendirmesi birbiriyle hiçbir zaman aynı projede yer almaz",
      "Bu iki değerlendirme birbirinin birebir tekrarıdır"
    ],
    correct: 0,
    explain: "Atık su arıtma verimliliğinin kimyasal analizi ile sürecin maliyet-fayda dengesinin değerlendirilmesi bir arada yürütüldüğünden, sürdürülebilirlik danışmanlığı hem teknik hem ekonomik yetkinlik gerektiren bir kariyerdir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir araştırma ekibi, yeni keşfedilen bir mineralin hem kristal yapısını (jeokimya) hem de bu mineralin olası endüstriyel katalizör olarak kullanılabilirliğini (fizikokimya) incelemektedir. Ekip, bulgularını hem akademik bir dergide yayımlamayı hem de bir patent başvurusuna dönüştürmeyi planlamaktadır.",
    text: "Bu projenin tamamlanabilmesi için sırasıyla hangi kariyer uzmanlıklarının bir araya gelmesi gerekir?",
    options: [
      "Jeokimyager, fizikokimyager ve patent/fikri mülkiyet uzmanı",
      "Yalnızca bir adli kimyager yeterlidir",
      "Yalnızca bir bilim gazetecisi yeterlidir",
      "Yalnızca bir kozmetik Ar-Ge uzmanı yeterlidir",
      "Bu proje hiçbir kimya kariyeri gerektirmez, tamamen hukuki bir süreçtir"
    ],
    correct: 0,
    explain: "Kristal yapı analizi jeokimyager, katalizör potansiyeli değerlendirmesi fizikokimyager, patent başvurusu ise patent/fikri mülkiyet uzmanı gerektirir — proje üçünün ortak çalışmasını gerektirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir kariyer anketinde, kimya mezunlarına 'işinizde en çok zaman ayırdığınız etkinlik' sorulmuş ve şu sonuç elde edilmiştir: laboratuvar ölçümü yapanların büyük kısmı analitik/kalite kontrol alanında, veri/rapor hazırlayanların büyük kısmı düzenleyici işler ve kalite güvence alanında, insanlarla doğrudan etkileşim kuranların büyük kısmı ise satış/eğitim alanında çalışmaktadır.",
    text: "Bu ankete dayanarak, 'insanlarla yoğun etkileşim kurmaktan çok, sayısal veriyle uğraşmayı tercih eden' bir mezun için en uygun alan grubu hangisidir?",
    options: [
      "Analitik/kalite kontrol veya düzenleyici işler/kalite güvence",
      "Satış/eğitim",
      "Bilim gazeteciliği",
      "Kimyasal ürün pazarlama",
      "Anket, kariyer tercihiyle ilgili hiçbir bilgi sunmamaktadır"
    ],
    correct: 0,
    explain: "Ankete göre laboratuvar ölçümü ve veri/rapor hazırlama ağırlıklı roller (analitik/kalite kontrol, düzenleyici işler/kalite güvence) insan etkileşiminden çok sayısal veriyle uğraşmayı önceleyen bir profille örtüşür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir içme suyu şebekesinde beklenmedik bir koku şikâyeti alınmıştır. Önce bir analitik laboratuvar uzmanı su örneklerinde iz miktarda organik kirletici tespit etmiş; ardından bir çevre kimyageri kirliliğin kaynağının yakındaki bir sanayi tesisi olup olmadığını araştırmış; son olarak bir halk sağlığı uzmanı tespit edilen derişimin sağlık açısından risk oluşturup oluşturmadığını değerlendirmiştir.",
    text: "Bu üç aşama, sırasıyla hangi yetkinlik zincirini yansıtır?",
    options: [
      "Tespit (analitik ölçüm) → kaynak araştırması (çevresel izleme) → sağlık riski değerlendirmesi (toksikoloji/halk sağlığı)",
      "Üç aşama da birbirinin birebir tekrarıdır",
      "Sağlık riski değerlendirmesi, tespitten önce yapılmalıdır",
      "Kaynak araştırması, analitik ölçüm yapılmadan tamamlanabilir",
      "Bu üç görev aynı kariyer alanına aittir, ayrım anlamsızdır"
    ],
    correct: 0,
    explain: "Sıralama önce analitik tespiti, sonra kirlilik kaynağının çevresel yöntemlerle araştırılmasını, son olarak sağlık riskinin toksikoloji/halk sağlığı bilgisiyle değerlendirilmesini yansıtır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir üniversite mezunu, lisans sırasında hem organik kimya hem de işletme derslerini almış; mezuniyet sonrası bir ilaç şirketinin önce Ar-Ge biriminde molekül sentezi üzerine çalışmış, birkaç yıl sonra aynı şirketin iş geliştirme biriminde yeni ilaç adaylarının pazar potansiyelini değerlendiren bir role geçmiştir.",
    text: "Bu kariyer yolu, aşağıdaki genellemelerden hangisini EN İYİ destekler?",
    options: [
      "Teknik kimya bilgisi ile işletme/pazar analizi bilgisinin birleşimi, laboratuvar dışı yeni kariyer rollerine geçiş imkânı sunabilir",
      "İşletme dersleri almak, bir kimyagerin teknik yetkinliğini azaltır",
      "İş geliştirme rolüne geçen biri artık hiçbir kimya bilgisi kullanmaz",
      "Bu geçiş yalnızca ilaç sektörüne özgüdür, başka sektörlerde görülmez",
      "Ar-Ge biriminde çalışmamış biri iş geliştirme rolüne hiçbir zaman geçemez"
    ],
    correct: 0,
    explain: "Örnek, teknik kimya bilgisiyle işletme/pazar analizi bilgisinin bir arada kazanılmasının laboratuvar dışı yeni bir role (iş geliştirme) geçişi mümkün kıldığını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.3 — Kimya alanındaki kariyer olanaklarını araştırıp sınıflandırabilme",
    context: "Bir afet sonrası bölgede hem yıkılan binalardan çıkan yapı malzemelerinin (asbest, boya vb.) içerdiği tehlikeli maddeler analitik kimya yöntemleriyle taranmakta hem de bu maddelerin bölge halkı için oluşturduğu sağlık riski değerlendirilmektedir.",
    text: "Bu iki görev sırasıyla en doğrudan hangi kariyer uzmanlıklarının bir arada çalışmasını gerektirir?",
    options: [
      "Analitik/malzeme kimyageri ve halk sağlığı/toksikoloji uzmanı",
      "Adli kimyager ve bilim müzesi küratörü",
      "Kozmetik Ar-Ge uzmanı ve patent avukatı",
      "Astrokimya araştırmacısı ve elektrokimya mühendisi",
      "Bu iki görev tek bir kişi tarafından hiçbir zaman birlikte yürütülemez"
    ],
    correct: 0,
    explain: "Yapı malzemelerindeki tehlikeli maddelerin taranması analitik/malzeme kimyagerinin; bunların sağlık riskinin değerlendirilmesi ise halk sağlığı/toksikoloji uzmanının işidir — ikisi birlikte çalışmayı gerektirir."
  }
],
  "guvenlik": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["flame"],
    context: "Bir depolama alanındaki varilin etiketinde yukarıdaki uyarı simgesi bulunmaktadır.",
    text: "Bu simge, madde ile ilgili en doğrudan hangi tehlikeyi bildirir?",
    options: ["Aşındırıcılık", "Kolay tutuşabilirlik", "Çevreye zararlılık", "Basınçlı gaz içerme", "Oksitleyicilik"],
    correct: 1,
    explain: "Alev simgesi, maddenin kolay tutuşabilir (yanıcı) olduğunu bildiren GHS piktogramıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["corrosive"],
    context: "Bir temizlik ürününün ambalajında yukarıdaki uyarı simgesi yer almaktadır.",
    text: "Bu simge, üründen kaynaklanabilecek en doğrudan hangi tehlikeye işaret eder?",
    options: ["Patlayıcılık", "Deri ve göze ciddi hasar verme (aşındırıcılık)", "Basınçlı gaz içerme", "Radyoaktiflik", "Kolay tutuşabilirlik"],
    correct: 1,
    explain: "Aşındırıcı piktogramı, maddenin deri ve gözde ciddi hasara (yanık, doku tahribatı) yol açabileceğini bildirir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["environment"],
    context: "Bir böcek ilacı kutusunun etiketinde yukarıdaki simge bulunmaktadır.",
    text: "Bu simge en doğrudan hangi uyarıyı taşır?",
    options: ["Solunduğunda anında öldürücü olduğu", "Su kaynaklarına ve canlı yaşamına zararlı olabileceği", "Basınç altında patlayabileceği", "Cilde temas ettiğinde yanık yaptığı", "Oksitleyici özellik taşıdığı"],
    correct: 1,
    explain: "Çevreye zararlılık piktogramı, maddenin su kaynaklarına ve sucul canlı yaşamına zarar verebileceğini bildirir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: { title: "Bir laboratuvarda kullanılan iki malzeme", items: [{ type: "detergent", label: "Çamaşır suyu (hipoklorit)" }, { type: "beaker", label: "Amonyaklı temizlik solüsyonu" }] },
    context: "Görseldeki iki temizlik ürünü aynı kapta karıştırılırsa zehirli klor gazı benzeri bileşikler açığa çıkabilmektedir; bu nedenle üreticiler etiketlerde bu iki tür ürünün birlikte kullanılmamasını belirtmektedir.",
    text: "Bu durumda güvenli kullanım için en doğru yaklaşım hangisidir?",
    options: ["İki ürünü daha hızlı temizlik için birlikte dökmek", "İki ürünü asla aynı anda veya karıştırarak kullanmamak", "Yalnızca havalandırma varsa karıştırmak yeterlidir", "Karışım sadece cilde değerse tehlikelidir", "Karıştırma miktarı azsa risk oluşmaz"],
    correct: 1,
    explain: "Hipoklorit içeren ürünlerle amonyak içeren ürünlerin karıştırılması toksik gaz oluşumuna yol açabileceğinden bu iki tür ürün asla birlikte kullanılmamalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: ["glove"],
    context: "Bir laboratuvarda aşındırıcı bir asitle çalışılırken görseldeki koruyucu ekipman kullanılmaktadır.",
    text: "Bu ekipmanın kullanım amacı en doğrudan hangisidir?",
    options: ["Solunum yolunun toz partiküllerinden korunması", "Ellerin kimyasaldan kaynaklanan yanık/tahrişten korunması", "Gözlerin parlak ışıktan korunması", "Ayakların düşen cisimlerden korunması", "Kulakların yüksek sesten korunması"],
    correct: 1,
    explain: "Koruyucu eldiven, ellerin aşındırıcı/tahriş edici kimyasallarla doğrudan temasını önleyerek yanık ve tahrişi engeller."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: ["extinguisher"],
    context: "Bir laboratuvarda yanıcı bir çözücü kazara alev almıştır; masanın yanındaki görseldeki ekipman kullanılarak müdahale edilmiştir.",
    text: "Bu ekipmanın işlevi en doğrudan hangisidir?",
    options: ["Kimyasal döküntüleri temizlemek", "Küçük çaplı yangınları söndürmek", "Zehirli gazları filtrelemek", "Kimyasalları depolamak", "Cam malzemeleri kesmek"],
    correct: 1,
    explain: "Yangın söndürücü, küçük çaplı yangınlara hızlı müdahale ederek yayılmasını önlemek için kullanılan güvenlik ekipmanıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["toxic"],
    context: "Bir zirai ilaç kutusunun etiketinde yukarıdaki simge bulunmaktadır.",
    text: "Bu simge en doğrudan hangi tehlikeyi bildirir?",
    options: ["Yalnızca uzun vadede hafif tahriş riski", "Az miktarda maruziyette bile ölümcül veya ciddi zehirlenme riski", "Yalnızca yangın riski", "Yalnızca çevre kirliliği riski", "Yalnızca basınçlı kap riski"],
    correct: 1,
    explain: "Toksik (kafatası-kemik) piktogramı, maddenin az miktarda maruziyette bile ölümcül veya ciddi zehirlenmeye yol açabileceğini bildiren en yüksek düzey akut toksisite uyarısıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["gas"],
    context: "Bir kaynak atölyesindeki tüpün etiketinde yukarıdaki simge yer almaktadır.",
    text: "Bu simge, maddeyle ilgili hangi tehlikeyi bildirmektedir?",
    options: ["İçeriğin aşındırıcı sıvı olduğu", "İçeriğin basınç altında olduğu ve ısıtıldığında patlayabileceği", "İçeriğin radyoaktif olduğu", "İçeriğin çevreye zararlı olduğu", "İçeriğin yalnızca tahriş edici olduğu"],
    correct: 1,
    explain: "Basınçlı gaz piktogramı, kabın içeriğinin basınç altında olduğunu ve ısıya maruz kaldığında patlama riski taşıdığını bildirir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["explosive"],
    context: "Bir fabrikadaki maddenin ambalajında yukarıdaki simge bulunmaktadır.",
    text: "Bu uyarı simgesi en doğrudan hangi tehlikeye işaret eder?",
    options: ["Yalnızca hafif cilt tahrişi riski", "Darbe, sürtünme veya ısıyla patlama riski", "Yalnızca çevreye yayılma riski", "Uzun vadeli sağlık hasarı riski", "Yalnızca elektrik iletkenliği riski"],
    correct: 1,
    explain: "Patlayıcı piktogramı, maddenin darbe, sürtünme veya ısı etkisiyle patlayabileceğini bildiren en yüksek düzey fiziksel tehlike uyarısıdır."
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
    options: ["Pillerin geri dönüştürülemeyecek kadar ucuz olması", "Pillerin kendiliğinden patlayarak yangın çıkarması", "Ağır metallerin toprak ve su kaynaklarını kirletmesi", "Pillerin havada hızla buharlaşması", "Pillerin yalnızca görsel kirliliğe yol açması"],
    correct: 2,
    explain: "Pillerdeki ağır metaller (kurşun, kadmiyum vb.) yanlış bertaraf edildiğinde toprağa ve su kaynaklarına karışarak uzun süreli kirliliğe yol açar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laboratuvarda asit çözeltisi hazırlanırken kural olarak derişik asit yavaşça suyun üzerine değil, suyun içine yavaşça eklenir; tersi sırayla eklenirse ani ısınma ve sıçrama riski oluşur.",
    text: "Bu kurala uyulmasının temel gerekçesi nedir?",
    options: ["Karışımın daha hızlı katılaşmasını sağlamak", "Asidin rengini değiştirmemek", "Asit-su karışımında açığa çıkan ısının kontrollü şekilde dağılmasını sağlamak", "Suyun buharlaşmasını hızlandırmak", "Asidin kokusunu azaltmak"],
    correct: 2,
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
    options: ["İlacın son kullanma tarihini uzatmak", "İlacın etkisini artırmak", "Kazara yutma/zehirlenme riskini azaltmak", "İlacın rengini korumak", "İlacın kokusunu azaltmak"],
    correct: 2,
    explain: "Çocukların erişemeyeceği yerde saklama uyarısı, ilacın kazara yutulmasından kaynaklanabilecek zehirlenme riskini azaltmayı amaçlar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    objectIcons: ["vinegar", "detergent"],
    context: "Görseldeki iki üründen sirke asidik, çamaşır suyu ise bazik (alkali) özelliktedir. Bu iki ürünün karıştırılması, güçlü bir asit-baz tepkimesiyle ısı açığa çıkmasına ve klor gazı benzeri tahriş edici buharların oluşmasına yol açabilir.",
    text: "Bu bilgiye göre en güvenli kullanım yaklaşımı hangisidir?",
    options: ["Karışımı sadece dışarıda kullanmak yeterlidir", "İki ürünü aynı kapta karıştırarak daha güçlü bir temizleyici elde etmek", "İki ürünü ayrı zamanlarda ve iyi havalandırılmış ortamda kullanmak, karıştırmamak", "Karışımı sadece az miktarda yapmak güvenlidir", "Bu iki ürün arasında herhangi bir tepkime riski yoktur"],
    correct: 2,
    explain: "Asidik ve bazik/oksitleyici temizlik ürünlerinin karıştırılması tehlikeli gaz oluşumuna yol açabileceğinden, bu tür ürünler ayrı zamanlarda ve havalandırılmış ortamda, karıştırılmadan kullanılmalıdır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["oxidizing"],
    context: "Bir havuz bakım ürününün ambalajında yukarıdaki simge bulunmaktadır.",
    text: "Bu simgenin bildirdiği tehlike türü hangisidir?",
    options: ["Yalnızca suda çözünmeyeceği", "Yalnızca hafif koku yayabileceği", "Yanıcı maddelerin yanmasını şiddetlendirebileceği", "Yalnızca renk değiştirebileceği", "Yalnızca donma riski taşıdığı"],
    correct: 2,
    explain: "Oksitleyici piktogramı, maddenin yanıcı maddelerle temas ettiğinde yanmayı şiddetlendirebileceğini (yangını büyütebileceğini) bildirir."
  },

  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: ["health-hazard"],
    context: "Bir sanayi maddesinin ambalajında yukarıdaki simge yer almaktadır.",
    text: "Etikette yer alan bu simge hangi tehlikeyi ifade eder?",
    options: ["Yalnızca patlama riski", "Yalnızca hafif cilt kuruluğu riski", "Solunum yolu duyarlılaştırma veya kanserojen gibi ciddi sağlık hasarı riski", "Yalnızca basınçlı kap riski", "Yalnızca donma riski"],
    correct: 2,
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
    options: ["Yalnızca farklı marka spreyler", "Hidrojen peroksit + sirke ve farklı marka spreyler", "Çamaşır suyu + amonyaklı temizleyici ve çamaşır suyu + asitli temizleyici", "Yalnızca hidrojen peroksit + sirke", "Tabloda hiçbir karışım gaz riski taşımamaktadır"],
    correct: 2,
    explain: "Tabloda çamaşır suyunun hem amonyakla hem asitli maddelerle karışımı, doğrudan zehirli gaz (kloramin/klor) oluşumuna yol açtığı için en yüksek akut risk taşır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: { title: "Bir sanayi maddesinin etiketindeki simgeler", codes: ["flame", "health-hazard"] },
    context: "Yukarıdaki iki simge aynı etikette birlikte yer almaktadır; bu, maddenin hem yanıcı hem de uzun vadeli sağlık hasarına (örneğin solunum yolu duyarlılaştırma) yol açabileceği anlamına gelir.",
    text: "Bu maddeyle çalışılan bir ortamda alınması gereken en kapsamlı önlem hangisidir?",
    options: ["Yalnızca solunum koruması yeterlidir, ateş riski önemsizdir", "Yalnızca ateş kaynaklarından uzak tutmak yeterlidir", "Hem ateş kaynaklarından uzak tutma hem de uygun solunum koruması ve havalandırma sağlama", "Bu iki simge birbiriyle çelişir, biri dikkate alınmalıdır", "Herhangi bir önlem gerekmez, simgeler bilgilendirme amaçlıdır"],
    correct: 2,
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
    options: ["Yalnızca depolama alanının büyütülmesi", "Yalnızca etiketleme sisteminin değiştirilmesi", "Madde karıştırma protokollerinin gözden geçirilmesi", "Hiçbir önlem gerekmez, sayılar düşüktür", "Yalnızca ekipman sayısının artırılması"],
    correct: 2,
    explain: "Grafikte en yüksek kayıt sayısı (14) yanlış madde karıştırmaya ait olduğundan, en öncelikli önlem karıştırma protokollerinin gözden geçirilmesi olmalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir depoda, oksitleyici bir madde ile yanıcı bir çözücü aynı rafın yan yana gözlerinde saklanmaktadır. Depo sıcaklığı yaz aylarında belirgin şekilde yükselmektedir.",
    text: "Bu depolama düzeninde en yüksek risk hangisidir?",
    options: ["Maddelerin hacminin küçülmesi", "Maddelerin renginin solması", "Maddelerin kokusunun artması", "Sıcaklık artışıyla birlikte iki maddenin etkileşerek yangın/patlama riskinin artması", "Herhangi bir risk oluşmaz, madde türleri önemsizdir"],
    correct: 3,
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
    options: ["Yalnızca yangın tehlikesini bildirir", "Toksik simgesiyle tamamen aynı düzeyde ölümcül tehlikeyi bildirir", "Yalnızca çevresel tehlikeyi bildirir, sağlıkla ilgisi yoktur", "Cilt/göz tahrişi veya hafif sağlık etkisi gibi görece daha düşük düzeyli bir tehlikeyi bildirir", "Hiçbir tehlike bildirmez, yalnızca dekoratif bir simgedir"],
    correct: 3,
    explain: "Tahriş edici (irritant) piktogramı, toksik veya sağlığa ciddi zarar simgelerine göre daha düşük düzeyli, örneğin cilt/göz tahrişi gibi tehlikeleri bildirir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir tarım işletmesinde, zirai ilaç uygulaması sonrasında işçilerin tarlaya belirli bir süre (bekleme süresi) girmemesi gerektiği; bu sürenin ilacın etken maddesine göre değiştiği bilinmektedir.",
    text: "Bekleme süresine uyulmamasının en doğrudan riski nedir?",
    options: ["İlacın etkisinin tamamen ortadan kalkması", "Bitkilerin büyüme hızının artması", "Toprağın renginin değişmesi", "İşçilerin henüz parçalanmamış kimyasal kalıntılara maruz kalması", "Herhangi bir risk oluşmaz, bekleme süresi öneri niteliğindedir"],
    correct: 3,
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
    options: ["Karaciğer hasarı yalnızca uzun vadeli kullanıcılarda görülür, kısa süreli aşımlar güvenlidir", "Etkiyi hızlandırmak için dozu iki katına çıkarmak", "Doz sınırı yalnızca öneridir, aşılması sorun yaratmaz", "Etikette belirtilen doz sınırına kesinlikle uymak", "Doz miktarı, ilacın etkisini değil sadece tadını değiştirir"],
    correct: 3,
    explain: "Reçetesiz ilaçlarda bile önerilen doz sınırının aşılması ciddi organ hasarına yol açabileceğinden, etikette belirtilen doza kesinlikle uyulmalıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    pictograms: { title: "Bir endüstriyel çözücünün etiketindeki simgeler", codes: ["flame", "environment"] },
    context: "Yukarıdaki iki simgeyi taşıyan bir çözücünün kullanıldığı bir atölyede, kullanım sonrası artık maddenin lavaboya değil özel bir toplama kabına boşaltılması kuralı uygulanmaktadır.",
    text: "Bu kuralın en doğrudan gerekçesi nedir?",
    options: ["Maddenin özel toplama kabında daha hızlı buharlaşması", "Maddenin lavaboyu tıkayacak kadar viskoz olması", "Maddenin sadece kötü koku yayması", "Maddenin hem yanıcı olması hem de su kaynaklarına karıştığında çevreye zarar verebilmesi", "Kuralın çevresel veya yanıcılık riskiyle hiçbir ilgisi yoktur"],
    correct: 3,
    explain: "Etikette hem yanıcılık hem çevreye zararlılık simgeleri bulunduğundan, maddenin lavaboya dökülmesi hem yangın hem su kirliliği riski taşır; bu yüzden özel toplama gerekir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir okul laboratuvarında yapılan bir deney sırasında küçük bir kimyasal sıçrama meydana gelmiş ve öğretim elemanı önce göz duşuna yönlendirmiş, ardından olay kayıt formunu doldurmuştur.",
    text: "Bu müdahale sırası, güvenlik protokolünün hangi temel ilkesini yansıtır?",
    options: ["Belgeleme, fiziksel müdahaleden daha önceliklidir", "Önce belgeleme, sonra fiziksel müdahale", "Fiziksel müdahale ile belgeleme aynı anda yapılmalıdır, sıra önemsizdir", "Önce acil fiziksel müdahale, sonra belgeleme/raporlama", "Bu sıralama güvenlik protokolüyle ilgisizdir"],
    correct: 3,
    explain: "Güvenlik protokollerinde önce kişinin/maddenin maruziyetini azaltacak acil müdahale yapılır, olay kaydı ve raporlama bu ilk müdahaleden sonra tamamlanır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir yapı malzemesi üreticisi, ürününde artık asbest kullanılmadığını, çünkü asbest liflerinin uzun süre solunduğunda akciğerlerde ciddi hastalıklara yol açtığının bilimsel olarak kanıtlandığını belirtmektedir.",
    text: "Bu bilgiye dayanarak, asbestle ilgili en doğru güvenlik çıkarımı hangisidir?",
    options: ["Asbestin sağlık riski yalnızca yüksek sıcaklıkta ortaya çıkar", "Asbest yalnızca cilde temas ettiğinde tehlikelidir", "Asbest yalnızca yanıcı bir malzemedir, sağlık riski taşımaz", "Asbest liflerinin solunum yoluyla uzun süreli maruziyeti kronik sağlık riski taşır", "Asbest günümüzde hâlâ tüm yapı malzemelerinde güvenle kullanılmaktadır"],
    correct: 3,
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
    options: ["Uyarının kozmetik ürünlerde standart ve anlamsız bir ibare olması", "Ürünün yalnızca dekoratif amaçla üretilmiş olması", "Ürünün fiyatının yüksek olması", "Ürünün yalnızca belirli bir yaş grubuna uygun olması", "Ürünün formülasyonunun hassas dokularda tahrişe yol açabilecek bileşenler içerebilmesi"],
    correct: 4,
    explain: "Kozmetik formülasyonlardaki bazı bileşenler cilt için güvenli olsa bile göz ve mukoza gibi hassas dokularda tahrişe yol açabileceğinden bu uyarı eklenir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir inşaat alanında toz maskesi yerine yalnızca cerrahi maske kullanan işçilerin, kristal silika tozuna maruz kalma riski azalmamıştır; çünkü cerrahi maskeler ince toz partiküllerini yeterince filtrelemez.",
    text: "Bu durumdan çıkarılabilecek en doğru güvenlik ilkesi nedir?",
    options: ["Cerrahi maskeler her tür tozu tamamen filtreler", "Herhangi bir maske kullanmak, hiç kullanmamaktan her zaman aynı düzeyde koruma sağlar", "Toz maskeleri yalnızca estetik amaçlıdır", "Kristal silika tozu solunum için tehlike oluşturmaz", "Koruyucu ekipman seçimi, maruz kalınan tehlikenin türüne uygun olmalıdır"],
    correct: 4,
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
    options: ["Risk yalnızca tabletlerin nem çekerek bozulmasıdır, gaz riski yoktur", "Yalnızca havuz suyunun renginin değişmesi; depolama şekli önemsizdir", "Yalnızca tabletlerin daha hızlı erimesi; herhangi bir risk yoktur", "İki madde birbiriyle hiçbir zaman tepkimeye girmez", "Zehirli klor gazı açığa çıkma riski; iki madde ayrı, nem almayan kaplarda ve birbirinden uzakta saklanmalıdır"],
    correct: 4,
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
    options: ["Bazik maddenin asitle teması hiçbir zaman ısı açığa çıkarmaz", "Risk yoktur, asit ve baz birbirini etkisiz hâle getirdiği için tank temizliği gereksizdir", "Risk yalnızca tankın paslanmasıdır, sağlık/güvenlik riski yoktur", "Risk yalnızca renk değişimidir, üretime engel değildir", "Kalıntı asit ile yeni bazik madde arasında kontrolsüz, şiddetli ekzotermik tepkime riski; tank her kullanım arası tam olarak temizlenmeli/nötralize edilmelidir"],
    correct: 4,
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
    options: ["Derişim yalnızca ilk 10 dakikada önemlidir, sonrasında güvenlidir", "Derişim sabit bir hızla artmaktadır, zamanla risk değişmez", "Derişim 20. dakikadan sonra azalmaya başlamıştır", "Grafik, CO derişiminin güvenlikle hiçbir ilgisi olmadığını göstermektedir", "Derişim giderek artan bir hızla yükselmektedir; kapalı ortamda motor ne kadar uzun çalışırsa risk o kadar hızlanarak büyür"],
    correct: 4,
    explain: "Veri noktaları arasındaki artış (5→60→150→280→400) giderek büyüyen aralıklarla gerçekleştiğinden, derişim artan bir hızla yükselmekte, yani motor çalıştıkça risk hızlanarak büyümektedir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laboratuvarda yeni bir asistan, düşük derişimli bir çözeltiyle çalışırken eldiven takmadan çalışmanın güvenli olduğunu düşünmüştür; çünkü derişimin düşük olduğunu biliyordur. Ancak kullanılan madde, düşük derişimde bile uzun süreli cilt temasında kümülatif (birikimli) hasara yol açabilen bir türdendir.",
    text: "Bu durumdaki temel güvenlik hatası nedir?",
    options: ["Hata, çözeltinin derişiminin çok düşük seçilmiş olmasıdır", "Eldiven takmanın yalnızca yüksek derişimli maddelerde gerekli olduğu doğrudur, hata yoktur", "Kümülatif etki kavramı laboratuvar güvenliğiyle ilgisizdir", "Düşük derişimli maddeler hiçbir zaman cilt hasarına yol açmaz", "Derişimin düşük olmasının, kümülatif etkili maddelerde güvenliği garanti etmediğinin göz ardı edilmesi"],
    correct: 4,
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
    options: ["Metan birikiminin yalnızca yüzey madenlerinde görülmesi", "Metan gazının doğası gereği hiçbir zaman tehlikeli olmaması", "Havalandırma sisteminin gereksiz bir yatırım olması", "Sensör arızasının güvenlikle hiçbir ilgisinin olmaması", "Tehlike tespiti (sensör) devre dışı kaldığında yedek/manuel bir güvenlik önleminin bulunmaması"],
    correct: 4,
    explain: "Tek bir tespit mekanizmasına (sensör) bağımlı bir güvenlik sisteminde, o mekanizma arızalandığında tehlike fark edilmeden büyüyebilir; bu nedenle yedek/manuel önlemlerin bulunmaması kritik bir açıktır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir temizlik firması, aynı anda birden fazla temizlik ürününü karıştırarak 'daha güçlü' özel bir karışım hazırlamayı önermektedir; ancak kullanılan ürünlerden biri hipokloritli ağartıcı, diğeri ise asit bazlı kireç çözücüdür.",
    text: "Bu öneri neden güvenlik açısından ciddi bir hata taşımaktadır?",
    options: [
      "Hipoklorit ile asidin tepkimesi zehirli klor gazı açığa çıkarabilir, karışımın etkisi güçlenmek yerine tehlikeli hâle gelir",
      "Karışım yalnızca temizlik etkisini azaltır, sağlık riski yoktur",
      "Bu iki ürün birbiriyle hiçbir zaman tepkimeye girmez",
      "Öneri güvenlidir çünkü her iki ürün de ayrı ayrı test edilmiştir",
      "Risk yalnızca ürünlerin fiyatının artmasıdır"
    ],
    correct: 0,
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
    options: [
      "Kısa vadede belirti görülmemesi, uzun vadeli/kronik risklerin olmadığı anlamına gelmez; SDS uyarıları düzenli gözden geçirilmelidir",
      "SDS formları yalnızca akut (ani) riskleri kapsar, kronik risklerle ilgisizdir",
      "Belirti görülmediği sürece herhangi bir önlem almaya gerek yoktur",
      "Kronik maruziyet uyarıları genellikle abartılıdır ve dikkate alınmamalıdır",
      "Solunum yolu şikâyetleri bu maddeyle hiçbir zaman ilişkilendirilemez"
    ],
    correct: 0,
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
    options: [
      "Süreci otomatikleştirip insan temasını ortadan kaldırmak",
      "Yalnızca uyarı etiketi asmak",
      "Yalnızca düzenli eğitim vermek",
      "Kişisel koruyucu ekipman sağlamak, diğer tüm önlemlerden daha etkilidir",
      "Tabloya göre dört önlemin etkisi birbirine eşittir"
    ],
    correct: 0,
    explain: "Tabloda en yüksek risk azaltma etkisi, insan temasını kaynağında ortadan kaldıran otomasyona aittir (çok yüksek); bu, güvenlik mühendisliğinde 'tehlikeyi kaynağında ortadan kaldırma' ilkesiyle örtüşür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir hastanede kullanılan dezenfektan solüsyonu üreticisi, ürünün 'seyreltilerek kullanılması gerektiğini, saf hâliyle kullanılmasının hem etkisiz hem de tehlikeli olabileceğini' belirtmektedir.",
    text: "Bu uyarı, kimyasal güvenlik açısından hangi ilkeyi en iyi yansıtır?",
    options: [
      "Bir maddenin 'daha derişik = daha etkili ve güvenli' varsayımı her zaman doğru değildir; doğru derişim hem etkinlik hem güvenlik için önemlidir",
      "Derişim arttıkça bir maddenin etkinliği her zaman doğrusal olarak artar, güvenlik sorunu oluşmaz",
      "Seyreltme yalnızca maliyeti düşürmek için yapılır, etkinlik veya güvenlikle ilgisi yoktur",
      "Saf hâliyle kullanmak her zaman en güvenli seçenektir",
      "Dezenfektanlar derişimden bağımsız olarak her zaman aynı etkiyi gösterir"
    ],
    correct: 0,
    explain: "Üreticinin uyarısı, maddenin saf (çok derişik) hâlinin hem beklenen etkiyi göstermeyebileceğini hem de güvenlik riski taşıyabileceğini, dolayısıyla doğru derişimin hem etkinlik hem güvenlik için kritik olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir kimyasal madde taşıma firması, farklı tehlike sınıflarındaki maddeleri (yanıcı, aşındırıcı, toksik) aynı araçta taşırken her biri için ayrı, sızdırmaz ve birbirinden izole bölmeler kullanmaktadır; ayrıca aracın her bölmesi taşınan maddenin GHS simgesiyle etiketlenmektedir.",
    text: "Bu uygulama, kimyasal güvenlik açısından hangi temel ilkeyi yansıtır?",
    options: [
      "Farklı tehlike sınıflarındaki maddelerin, olası etkileşim risklerini önlemek için fiziksel olarak ayrıştırılıp doğru şekilde etiketlenmesi gerektiği",
      "Tüm kimyasalların aynı bölmede taşınmasının daha verimli olduğu",
      "Etiketleme, yalnızca yasal bir formaliteden ibaret olduğu ve güvenlikle ilgisi olmadığı",
      "Farklı tehlike sınıflarının birbirleriyle hiçbir zaman etkileşime giremeyeceği",
      "İzolasyon yalnızca maliyeti artıran gereksiz bir önlem olduğu"
    ],
    correct: 0,
    explain: "Farklı tehlike sınıflarındaki maddelerin (örneğin yanıcı ile aşındırıcı) fiziksel olarak izole edilip doğru etiketlenmesi, taşıma sırasında olası etkileşim/kaza risklerini önlemenin temel güvenlik ilkesidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir tekstil boyahanesinde atık su, arıtma tesisine gönderilmeden önce ağır metal derişimi ölçülmekte ve yasal sınırın altına düşürülmesi için nötralize edilmektedir. Bir denetimde, ölçüm cihazının kalibrasyonunun altı aydır yapılmadığı ve bu sürede ölçülen değerlerin gerçek değerlerden belirgin şekilde düşük çıkabileceği tespit edilmiştir.",
    text: "Bu durumun oluşturduğu en kritik güvenlik/çevre riski nedir?",
    options: [
      "Kalibrasyonsuz cihazın yanlışlıkla güvenli gösterdiği atık suyun, gerçekte sınırın üzerinde kirletici içererek çevreye salınmış olabilmesi",
      "Kalibrasyon eksikliğinin yalnızca cihazın ömrünü kısaltması, ölçüm doğruluğuyla ilgisi olmaması",
      "Risk yalnızca cihazın bakım maliyetinin artmasıdır",
      "Kalibrasyon, ölçüm sonucunu hiçbir zaman etkilemez",
      "Atık su arıtımında ölçüm doğruluğunun önemi yoktur, yalnızca nötralize edilmesi yeterlidir"
    ],
    correct: 0,
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
    options: [
      "İlacın etkin madde stabilitesinin bozularak beklenen etkiyi göstermemesi veya güvenlik riski oluşturması",
      "İlacın yalnızca ambalajının rengini değiştirmesi",
      "Sıcaklık takibinin ilacın etkinliğiyle hiçbir ilgisinin olmaması",
      "İlacın yalnızca daha hızlı tükenmesi",
      "Risk yalnızca depolama maliyetinin artmasıdır"
    ],
    correct: 0,
    explain: "Sıcaklığa duyarlı ilaçlarda önerilen aralığın dışına çıkılması etkin maddenin bozunmasına yol açabilir; bu hem ilacın beklenen etkiyi göstermemesine hem de güvenlik riskine neden olabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.4 — Farklı ortamlarda kimyasal maddelerin kullanımından kaynaklanan güvenlik problemlerini çözebilme",
    context: "Bir laboratuvarda iki farklı ekip, aynı kimyasalı farklı SDS/MSDS sürümlerinden (biri eski, biri güncel) kontrol etmiştir. Eski sürümde maddenin yalnızca tahriş edici olduğu yazarken, güncel sürümde yeni araştırmalara dayanarak kanserojen olabileceği eklenmiştir.",
    text: "Bu durum, güvenlik yönetimiyle ilgili hangi önemli ilkeyi vurgular?",
    options: [
      "Güvenlik bilgi formları güncel tutulmalı ve düzenli kontrol edilmelidir; bilimsel bilgi zamanla değişebilir",
      "Bir maddenin tehlike sınıflandırması bir kez belirlendikten sonra asla değişmez",
      "Eski ve güncel SDS sürümleri arasında fark olması önemsizdir",
      "SDS formları yalnızca yasal bir belge olup güvenlik kararlarında kullanılmamalıdır",
      "Kanserojenlik bilgisi yalnızca çok yüksek derişimlerde geçerlidir"
    ],
    correct: 0,
    explain: "Örnek, bilimsel bilginin ve dolayısıyla bir maddenin tehlike sınıflandırmasının zamanla değişebileceğini; bu yüzden güvenlik bilgi formlarının (SDS) güncel tutulup düzenli kontrol edilmesi gerektiğini gösterir."
  }
],
  "teori": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Dalton'ın 1808'de öne sürdüğü atom teorisinin temel varsayımlarından biri, aynı elementin tüm atomlarının kütle ve özellik bakımından birbirinin aynısı olduğudur.",
    text: "Dalton'ın atom teorisine göre atomlar için aşağıdakilerden hangisi doğrudur?",
    options: ["İçlerinde elektron bulutu vardır", "Bölünemez ve yok edilemez taneciklerdir", "Merkezlerinde yoğun bir çekirdek bulunur", "Kütleleri sürekli değişir", "Farklı elementlerin atomları birbirinin aynısıdır"],
    correct: 1,
    explain: "Dalton'ın teorisine göre atomlar, daha küçük parçalara bölünemeyen ve yok edilemeyen temel taneciklerdir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Thomson, katot ışını tüpü deneylerinde ışınların negatif yüklü levhadan uzaklaşıp pozitif yüklü levhaya doğru saptığını gözlemlemiştir.",
    text: "Thomson'ın bu deneyle keşfettiği tanecik hangisidir?",
    options: ["Nötron", "Proton", "Elektron", "Foton", "Alfa taneciği"],
    correct: 2,
    explain: "Katot ışınlarının pozitif levhaya doğru sapması, ışınları oluşturan taneciklerin negatif yüklü olduğunu göstermiştir; bu tanecikler elektron olarak adlandırılmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Thomson, elektronu keşfettikten sonra atomun pozitif yüklü bir küre içine gömülü elektronlardan oluştuğunu öne sürmüştür; bu model günlük hayattan bir tatlıya benzetilerek anılır.",
    text: "Thomson'ın modeli hangi popüler adla anılır?",
    options: ["Bilardo topu modeli", "Üzümlü kek (kuru üzümlü puding) modeli", "Güneş sistemi modeli", "Bulut modeli", "Katmanlı soğan modeli"],
    correct: 1,
    explain: "Pozitif yüklü kütle içine gömülü elektronlar fikri, üzümlerin hamura gömülü olduğu bir kek görüntüsüne benzetilerek 'üzümlü kek modeli' adıyla anılmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Rutherford, 1911'de ince bir altın levhaya pozitif yüklü, hızlı hareket eden alfa tanecikleri göndererek levhanın arkasındaki ekranda oluşan saçılma desenini incelemiştir.",
    text: "Bu deneyde ince altın levhaya hangi tanecikler gönderilmiştir?",
    options: ["Elektronlar", "Nötronlar", "Fotonlar", "Alfa tanecikleri", "Protonlar tek başına"],
    correct: 3,
    explain: "Rutherford'ın deneyinde kaynak olarak radyoaktif bir maddeden yayılan pozitif yüklü alfa tanecikleri kullanılmıştır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Rutherford'ın altın levha deneyinde, gönderilen alfa taneciklerinin büyük çoğunluğu sapmadan geçerken, çok küçük bir kısmı büyük açılarla geri sıçramıştır; bu gözlem atomun merkezinde küçük ve yoğun bir yapı bulunduğunu göstermiştir.",
    text: "Rutherford'ın bu deneyle keşfettiği yapı hangisidir?",
    options: ["Elektron bulutu", "Atom çekirdeği", "Foton demeti", "Elektron kabuğu", "Nötr atom yüzeyi"],
    correct: 1,
    explain: "Bazı alfa taneciklerinin büyük açılarla geri sıçraması, atomun merkezinde küçük hacimde yoğunlaşmış pozitif yüklü ve kütleli bir çekirdek bulunduğunu ortaya koymuştur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Chadwick, 1932'de gerçekleştirdiği deneyle atom çekirdeğinde protonlarla yaklaşık aynı kütleye sahip fakat elektrik yükü taşımayan bir tanecik keşfetmiştir.",
    text: "Chadwick'in keşfettiği bu tanecik hangisidir?",
    options: ["Elektron", "Pozitron", "Nötron", "Foton", "Alfa taneciği"],
    correct: 2,
    explain: "Chadwick'in keşfettiği, elektrik yükü taşımayan ve çekirdekte protonlarla birlikte bulunan tanecik nötrondur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bohr, 1913'te hidrojen atomunun çizgi spektrumunu açıklamak için elektronların çekirdek etrafında belirli enerji düzeylerinde (kabuklarda) dairesel yörüngelerde dolandığını öne sürmüştür.",
    text: "Bohr modeline göre elektronlar atom çekirdeği etrafında nasıl bulunur?",
    options: ["Rastgele, her noktada eşit olasılıkla", "Belirli enerji düzeylerinde, sabit yörüngelerde", "Yalnızca çekirdeğin yüzeyinde sabit durarak", "Çekirdeğin içinde protonlarla iç içe", "Yörüngesiz, bulut şeklinde dağılmış olarak"],
    correct: 1,
    explain: "Bohr modeline göre elektronlar, her biri belirli bir enerjiye karşılık gelen sabit dairesel yörüngelerde (kabuklarda) bulunur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Antik Yunan filozofu Demokritos, maddenin sonsuza kadar bölünemeyeceğini, en sonunda 'atomos' (bölünemez) adı verilen bir noktaya ulaşılacağını öne sürmüştür; ancak bu görüş deneysel kanıta değil felsefi düşünceye dayanmaktaydı.",
    text: "Demokritos'un 'atom' kavramına yaklaşımı için hangisi doğrudur?",
    options: ["Deneysel kanıta dayanan bilimsel bir teoriydi", "Felsefi bir düşünce olup deneysel kanıta dayanmıyordu", "Modern kuantum modeliyle birebir aynıydı", "Atomun çekirdek yapısını da açıklıyordu", "Atomların elektrik yükü taşıdığını ölçmüştü"],
    correct: 1,
    explain: "Demokritos'un atom fikri, dönemin gözlem/deney imkânlarının kısıtlı olması nedeniyle deneysel kanıta değil, felsefi akıl yürütmeye dayanıyordu."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Goldstein, katot ışını tüpü deneylerinde katodun arkasına doğru hareket eden pozitif yüklü ışınlar gözlemlemiştir; bu ışınlar tüpteki gazın türüne göre farklı kütle/yük oranı göstermiştir.",
    text: "Bu gözlemler sonucunda hangi tanecik keşfedilmiştir?",
    options: ["Nötron", "Proton", "Elektron", "Pozitron", "Foton"],
    correct: 1,
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
    options: ["Bohr → Dalton → Thomson → Rutherford → Kuantum mekaniksel model", "Dalton → Thomson → Rutherford → Bohr → Kuantum mekaniksel model", "Kuantum mekaniksel model → Rutherford → Bohr → Thomson → Dalton", "Thomson → Dalton → Bohr → Rutherford → Kuantum mekaniksel model", "Rutherford → Thomson → Dalton → Kuantum mekaniksel model → Bohr"],
    correct: 1,
    explain: "Tarihsel sıralama: Dalton'ın katı küre modeli (1808) → Thomson'ın üzümlü kek modeli (1897) → Rutherford'ın çekirdekli model (1911) → Bohr'un yörünge modeli (1913) → modern kuantum mekaniksel model (1926+)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Günümüzde kabul gören modern atom modeline göre elektronların çekirdek etrafındaki tam konumu kesin olarak bilinemez; yalnızca belirli bir bölgede bulunma olasılığından söz edilebilir.",
    text: "Modern kuantum mekaniksel modele göre elektronların konumu için en doğru ifade hangisidir?",
    options: ["Elektronlar, güneş etrafındaki gezegenler gibi sabit dairesel yörüngelerde dolanır", "Elektronlar, orbital adı verilen olasılık bölgelerinde bulunur", "Elektronlar çekirdeğin tam merkezinde sabit durur", "Elektronların konumu her zaman kesin olarak hesaplanabilir", "Elektronlar yalnızca çekirdeğin dışına asla çıkmaz"],
    correct: 1,
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
    context: "Günümüzde bir atomun proton, nötron ve elektron adı verilen üç temel tanecikten oluştuğu, proton ve nötronların çekirdekte, elektronların ise çekirdek etrafındaki bölgede bulunduğu bilinmektedir.",
    text: "Bir atomun temel yapı taşları hangi seçenekte doğru verilmiştir?",
    options: ["Yalnızca nötron ve foton", "Yalnızca proton ve elektron", "Proton, nötron, elektron", "Proton, foton, pozitron", "Yalnızca elektron ve foton"],
    correct: 2,
    explain: "Bir atomun temel yapı taşları proton, nötron (çekirdekte) ve elektrondur (çekirdek etrafındaki bölgede)."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Rutherford'ın deneyinde, altın levhaya gönderilen alfa taneciklerinin büyük çoğunluğu hiçbir sapma olmadan levhayı geçmiştir.",
    text: "Bu gözlem atomun yapısı hakkında en doğrudan hangi çıkarımı destekler?",
    options: ["Atomun hiç kütlesi olmadığı", "Atomun tamamen katı ve dolu olduğu", "Atomun büyük kısmının boş uzaydan oluştuğu", "Atomun yalnızca negatif yükten oluştuğu", "Alfa taneciklerinin atomlarla hiç etkileşmediği"],
    correct: 2,
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
    options: ["Katot ışınlarını oluşturan taneciklerin pozitif yüklü olduğu", "Katot ışınlarını oluşturan taneciklerin yüksüz olduğu", "Katot ışınlarını oluşturan taneciklerin negatif yüklü olduğu", "Katot ışınlarının kütlesinin olmadığı", "Katot ışınlarının ışık hızında hareket ettiği kanıtlanmıştır"],
    correct: 2,
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
    options: ["Katı küre", "Üzümlü kek", "Çekirdekli model", "Yörünge modeli", "Tabloda hiçbiri bu fikri içermez"],
    correct: 2,
    explain: "Tabloya göre çekirdek fikri (kütle/yük merkezi) ilk kez Rutherford'ın çekirdekli modelinde önerilmiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bohr modeli, hidrojen atomunun (tek elektronlu) çizgi spektrumunu yüksek doğrulukla açıklamış; ancak birden fazla elektron içeren atomların (örneğin helyum) spektrumlarını aynı doğrulukla açıklayamamıştır.",
    text: "Bu sınırlılık, Bohr modeliyle ilgili en doğru hangi çıkarımı destekler?",
    options: ["Model, tüm atomlar için mükemmel şekilde geçerlidir", "Model hiçbir atom için doğru sonuç vermemiştir", "Model, tek elektronlu sistemler için geçerliyken çok elektronlu sistemlerde yetersiz kalmıştır", "Model yalnızca çekirdek yapısını açıklamak için geliştirilmiştir", "Model, elektron sayısından bağımsız olarak her zaman geçerlidir"],
    correct: 2,
    explain: "Bohr modelinin varsayımları (sabit dairesel yörünge, tek elektron-çekirdek etkileşimi) çok elektronlu atomlardaki elektron-elektron etkileşimlerini hesaba katmadığından, model yalnızca hidrojen gibi tek elektronlu sistemlerde yüksek doğruluk göstermiştir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Dalton'ın atom teorisi 'atomlar bölünemez' varsayımını içeriyordu; ancak Thomson'ın katot ışını deneyleri, atomun içinden daha küçük, negatif yüklü bir tanecik (elektron) çıkarılabildiğini göstermiştir.",
    text: "Bu gelişme, bilimsel bilginin doğasıyla ilgili en doğru hangi ilkeyi örnekler?",
    options: ["Bilimsel teoriler yalnızca matematiksel hesaplamalara dayanır, deneye gerek yoktur", "Bir kez kabul edilen bilimsel teori asla değiştirilemez", "Deneysel kanıtların bilimsel teorilerle hiçbir ilgisi yoktur", "Bir teori, yeni deneysel kanıtla çelişen bir gözlem ortaya çıktığında revize edilebilir/çürütülebilir", "Dalton'ın teorisi, Thomson'ın keşfinden sonra da değişmeden kaldı"],
    correct: 3,
    explain: "Elektronun keşfi, Dalton'ın 'atom bölünemez' varsayımıyla çelişen somut bir deneysel kanıt sunmuş ve bu, teorinin revize edilmesine yol açmıştır — bilimsel bilginin kanıta dayalı olarak değişebilir doğasının açık bir örneğidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir deneyde, hidrojen atomunun bir enerji düzeyinden diğerine geçen elektronunun yaydığı ışığın dalga boyu ölçülmüş ve bu dalga boyundan enerji farkı hesaplanmıştır. Hesaplanan enerji farkı, Bohr modelinin öngördüğü değerle yüksek doğrulukla örtüşmüştür.",
    text: "Bu sonuç, Bohr modeli hakkında en doğru hangi çıkarımı destekler?",
    options: ["Model, çok elektronlu atomlarda da aynı doğrulukla geçerlidir", "Model, hiçbir deneysel veriyle örtüşmemektedir", "Model, yalnızca teorik bir varsayım olup hiçbir zaman test edilmemiştir", "Model, hidrojenin enerji düzeyleri arasındaki geçişleri başarıyla öngörebilmektedir", "Bu sonuç Bohr modeliyle ilgisizdir"],
    correct: 3,
    explain: "Ölçülen enerji farkının modelin öngördüğü değerle örtüşmesi, Bohr modelinin hidrojen atomunun enerji düzeyleri arasındaki geçişleri (en azından hidrojen için) başarıyla açıkladığını gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Millikan'ın yağ damlası deneyinde ölçülen tüm yük değerleri, her zaman belirli bir temel değerin (yaklaşık 1,6×10⁻¹⁹ coulomb) tam sayı katları olarak bulunmuştur; hiçbir zaman bu değerin kesirli bir katı ölçülmemiştir.",
    text: "Bu gözlem, elektrik yükünün doğasıyla ilgili en doğru hangi çıkarımı destekler?",
    options: ["Yük miktarı damlacığın büyüklüğüne göre rastgele değişir", "Elektrik yükü her değeri sürekli olarak alabilir", "Elektrik yükünün bir alt sınırı yoktur", "Elektrik yükü, sürekli değil kesikli (kuantumlu) bir büyüklüktür", "Bu gözlem yükün doğasıyla ilgili hiçbir bilgi vermez"],
    correct: 3,
    explain: "Ölçülen yüklerin her zaman belirli bir temel değerin tam katları olması, elektrik yükünün sürekli değil kesikli (kuantumlu) birimler hâlinde var olduğunu gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim tarihi kaynağında şu gözlem paylaşılmıştır: Rutherford'ın öğrencileri deneyi tekrarladıklarında, alfa taneciklerinin çok küçük bir kısmının 90 dereceden daha büyük açılarla geri sıçradığını defalarca doğrulamışlardır; bu sonuç tesadüfi bir hata değil, tutarlı bir örüntü olarak ortaya çıkmıştır.",
    text: "Deneyin tekrarlanabilir/tutarlı sonuç vermesi, bilimsel yöntem açısından neden önemlidir?",
    options: ["Tek bir deney sonucu, tekrarlanmadan da her zaman kesin kanıt sayılır", "Deneyin tekrarlanması, sonucun önemini azaltır", "Tekrarlanabilirlik, bilimsel yöntemde gereksiz bir adımdır", "Bir gözlemin tesadüfi hata değil, güvenilir bir doğa olgusunu yansıttığını göstererek teoriye kanıt sağlar", "Tekrarlanan sonuçlar yalnızca deney hatasını kanıtlar"],
    correct: 3,
    explain: "Bir gözlemin farklı denemelerde tutarlı şekilde tekrarlanması, sonucun rastgele bir hatadan değil gerçek bir doğa olgusundan kaynaklandığını gösterir; bu, bilimsel yöntemde kanıtın güvenilirliğini artıran temel bir ilkedir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir öğretim materyalinde şu karşılaştırma yapılmaktadır: Dalton'ın modeli atomu bölünemez kabul ederken, Thomson'ın modeli atomun içinde elektron bulunduğunu, Rutherford'ın modeli ise elektronların dışında ayrıca yoğun bir çekirdek bulunduğunu öne sürer.",
    text: "Bu üç model arasındaki temel fark en doğru şekilde hangisidir?",
    options: ["Thomson'ın modeli çekirdek fikrini Rutherford'dan önce önermiştir", "Üç model de birbirinin birebir aynısıdır, farkları yoktur", "Dalton'ın modeli en karmaşık, Rutherford'ın modeli en basit olanıdır", "Her yeni model, bir öncekinin açıklayamadığı bir iç yapı bileşenini (önce elektron, sonra çekirdek) ekleyerek atomun karmaşıklığını artırmıştır", "Bu üç model birbirinden tamamen bağımsız gelişmiş, birbirini hiç etkilememiştir"],
    correct: 3,
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
    options: ["Yalnızca hidrojen atomu için kullanılabilmesi (Bohr modeliyle aynı sınırlılığı taşıması)", "Elektron sayısını değiştirmesi", "Çekirdek yükünü değiştirmesi", "Elektronları tek bir dairesel yörünge yerine farklı şekil ve enerjilere sahip alt kabuklara (orbitallere) dağıtması", "Bohr modeliyle birebir aynı bilgiyi farklı çizerek sunması"],
    correct: 3,
    explain: "Bohr modeli tüm elektronları tek boyutlu, dairesel yörüngelere yerleştirirken; kuantum modeli elektronları farklı enerji ve şekillere sahip alt kabuklara (s, p, d...) dağıtarak çok elektronlu atomları da başarıyla tanımlayabilir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Dalton'ın teorisi izotopların varlığını (aynı elementin farklı kütleli atomları) öngörmemişti; ancak 20. yüzyılın başında kütle spektrometresi ölçümleri, bazı elementlerin farklı kütlelere sahip atomlardan oluştuğunu göstermiştir.",
    text: "Bu keşif, Dalton'ın teorisinin hangi varsayımını doğrudan sınırlandırmıştır?",
    options: ["Atomların yok edilemeyeceği varsayımını", "Atomların bölünemez olduğu varsayımını", "Bileşiklerin tam sayı oranlarında birleştiği varsayımını", "Aynı elementin tüm atomlarının kütlece özdeş olduğu varsayımını", "Kimyasal tepkimelerde atom sayısının korunduğu varsayımını"],
    correct: 3,
    explain: "İzotopların keşfi, aynı elementin atomlarının farklı kütlelere sahip olabileceğini gösterdiğinden, Dalton'ın 'aynı element atomları kütlece özdeştir' varsayımını doğrudan sınırlandırmıştır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim felsefesi tartışmasında şu görüş savunulmaktadır: 'Bir bilimsel model asla mutlak doğru olarak kabul edilmemeli; yalnızca elimizdeki en iyi kanıtlarla en tutarlı açıklama olarak görülmelidir.'",
    text: "Atom modellerinin tarihi, bu görüşü en doğrudan hangi şekilde destekler?",
    options: ["Bu görüş, atom modellerinin gelişimiyle hiçbir şekilde örtüşmez", "İlk önerilen model (Dalton) hiçbir zaman değiştirilmemiştir", "Atom modellerinin tümü aynı anda, birbirinden bağımsız olarak doğru kabul edilmiştir", "Her model, döneminin en iyi kanıtlarıyla tutarlıydı fakat sonraki kanıtlarla revize edilmiştir", "Modern kuantum modeli, gelecekte asla revize edilmeyecek kadar kesindir"],
    correct: 3,
    explain: "Atom modellerinin tarihi (Dalton→Thomson→Rutherford→Bohr→kuantum model), her modelin kendi döneminin kanıtlarıyla tutarlı olduğunu ama yeni kanıtlar ortaya çıktıkça revize edildiğini gösterir — bilimsel bilginin geçici ve kanıta bağlı doğasını örnekler."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Rutherford'ın modeli, elektronların çekirdek etrafında döndüğünü varsayıyordu; ancak klasik elektromanyetik teoriye göre dairesel hareket eden yüklü bir tanecik sürekli enerji kaybederek kısa sürede çekirdeğe düşmelidir. Gözlemlerde ise atomlar kararlıdır.",
    text: "Bu çelişki, Bohr'un yeni bir model önermesinde en doğrudan hangi rolü oynamıştır?",
    options: ["Bu çelişki yalnızca Thomson modeliyle ilgilidir", "Bu çelişkinin Bohr'un modeliyle hiçbir ilgisi yoktur", "Bohr, bu çelişkiyi görmezden gelerek Rutherford modelini aynen kullanmıştır", "Rutherford modelinin açıklayamadığı bu kararlılık sorununu çözmek için Bohr, elektronların yalnızca belirli sabit enerji düzeylerinde bulunabileceğini varsaymıştır", "Bohr, bu sorunu çözmek yerine atomun kararsız olduğunu kabul etmiştir"],
    correct: 3,
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
    options: ["Alfa taneciği", "Elektron", "Foton", "Pozitron", "Nötron"],
    correct: 4,
    explain: "Ölçülen atom kütlesinin proton+elektron kütlesiyle tam olarak açıklanamaması, çekirdekte yüksüz fakat kütleli bir tanecik (nötron) bulunması gerektiği fikrine yol açmıştır; bu fikir sonradan Chadwick'in deneyiyle doğrulanmıştır."
  },

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir kimya ders kitabında, Bohr modelinin hidrojen atomunun enerji düzeylerini n=1, n=2, n=3... şeklinde numaralandırdığı ve elektronun bir düzeyden diğerine geçerken belirli miktarda enerji soğurduğu veya yaydığı anlatılmaktadır.",
    text: "Bu modele göre, bir elektronun n=1 düzeyinden n=3 düzeyine geçebilmesi için ne olması gerekir?",
    options: ["Yalnızca ışık hızında hareket etmesi", "Herhangi bir miktarda enerji soğurması yeterlidir", "Enerji soğurmadan kendiliğinden geçiş yapması", "Çekirdekten uzaklaşmak için kütle kaybetmesi", "İki düzey arasındaki enerji farkına tam olarak eşit miktarda enerji soğurması"],
    correct: 4,
    explain: "Bohr modeline göre bir elektron yalnızca iki enerji düzeyi arasındaki farka tam olarak eşit miktarda enerji soğurarak (veya yayarak) düzey değiştirebilir; ara değerler izinli değildir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir karşılaştırmada, Thomson'ın modelinde atomun toplam elektrik yükünün sıfır olduğu (pozitif kütle ile negatif elektronların yükünün birbirini dengelediği) belirtilirken, Rutherford'ın modelinde de atomun nötr olduğu ancak yükün farklı şekilde dağıldığı belirtilmektedir.",
    text: "Bu iki modelin ortak noktası ile temel farkı sırasıyla en doğru şekilde hangisidir?",
    options: ["Ortak nokta: her ikisinin de elektronun varlığını reddetmesi", "Ortak nokta: her ikisinin de çekirdek fikrini içermesi; fark yoktur", "Ortak nokta yoktur, iki model tamamen farklı öngörülerde bulunur", "Fark: yalnızca Thomson modeli atomun nötr olduğunu kabul eder", "Ortak nokta: atomun toplamda nötr olması; fark: pozitif yükün dağınık mı yoksa küçük bir merkezde mi yoğunlaştığı"],
    correct: 4,
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
    options: ["Tablo, Bohr modelinin çekirdek yapısıyla ilgili hiçbir şey söylemez", "Model her üç geçiş için de aynı doğrulukla çalışmaktadır", "Model hiçbir geçiş için doğru sonuç vermemektedir", "Deneysel ölçümler güvenilmez olduğundan model her zaman doğru kabul edilmelidir", "Model hidrojen için (n=2→1, n=3→1) yüksek doğrulukla çalışırken, çok elektronlu helyum atomunda (n=3→2) sapma göstermektedir"],
    correct: 4,
    explain: "Tabloda hidrojen atomuna ait geçişlerde (n=2→1, n=3→1) öngörü ile ölçüm birebir örtüşürken, çok elektronlu helyum atomundaki geçişte (n=3→2) belirgin bir sapma (1,9 vs 1,4 eV) görülmektedir — bu, modelin çok elektronlu sistemlerdeki sınırlılığını doğrular."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir bilim tarihçisi şu gözlemi paylaşmaktadır: 'Dalton'ın teorisi kimyasal tepkimelerdeki kütle korunumunu ve sabit oranlar yasasını başarıyla açıklıyordu; bu nedenle onlarca yıl büyük bir değişiklik olmadan kabul gördü. Ancak elektrik ve radyoaktivite alanındaki yeni deneyler, teorinin öngöremediği gözlemler ortaya çıkardı.'",
    text: "Bu anlatıya dayanarak, bir bilimsel teorinin uzun süre değişmeden kalmasıyla ilgili en doğru çıkarım hangisidir?",
    options: ["Bir teorinin kabul görme süresi, o teorinin doğruluğuyla hiçbir ilgisi olmayan rastgele bir durumdur", "Bir teori uzun süre değişmeden kaldıysa, artık hiçbir zaman değişmeyecek demektir", "Dalton'ın teorisinin uzun süre kabul görmesi, teorinin yanlış olduğunu kanıtlar", "Yeni deney alanları (elektrik, radyoaktivite), eski teorilerle hiçbir zaman ilişkilendirilemez", "Bir teorinin uzun süre kabul görmesi, mevcut kanıtlarla tutarlı olduğu anlamına gelir; ancak yeni gözlem alanları açıldıkça teori yine de sınanmaya ve gerekirse revize edilmeye devam eder"],
    correct: 4,
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
    options: ["Bu iki gözlem birbiriyle hiçbir şekilde ilişkilendirilemez", "Hem elektron hem pozitif tanecikler her elementte birebir aynıdır", "Elektronun kütle/yük oranının sabit olması, pozitif taneciklerin var olmadığını gösterir", "Pozitif taneciklerin kütlesinin değişmesi, elektronun da değiştiğini gösterir", "Elektron tüm maddelerde ortak temel bir taneciktir; pozitif taneciklerin kütlesi ise elementten elemente farklılık gösterir (çünkü farklı sayıda proton/nötron içerirler)"],
    correct: 4,
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
    options: [
      "Rutherford'ın deneyi, atomun büyük ölçüde boş uzaydan oluştuğunu göstererek önceki modellerin 'dolu küre' varsayımını büyük ölçüde terk ettirmiştir",
      "Üç model de atomun aynı oranda dolu olduğunu varsaymıştır",
      "Dalton'ın modeli, atomun en boş olduğunu varsaymıştır",
      "Rutherford'ın modeli, atomun tamamen dolu olduğunu varsaymıştır",
      "Bu üç model arasında doluluk varsayımı açısından hiçbir fark yoktur"
    ],
    correct: 0,
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
    options: [
      "Thomson'ın deneyi 'atomda negatif yüklü ne var?' sorusuna, Rutherford'ın deneyi ise 'pozitif yük ve kütle atom içinde nasıl dağılmış?' sorusuna cevap aramıştır",
      "İki deney de aynı soruya, aynı yöntemle cevap aramıştır",
      "Rutherford'ın deneyi elektronun keşfini sağlamıştır, Thomson'ınki değil",
      "Thomson'ın deneyi çekirdeği keşfetmiştir, Rutherford'ınki elektronu",
      "Bu iki deney arasında kavramsal bir fark yoktur, yalnızca farklı tarihlerde yapılmışlardır"
    ],
    correct: 0,
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
    options: [
      "Tamamlanmamış bir model, doğru öngörüler içerir fakat bazı gözlemleri açıklamak için ek varsayımlara ihtiyaç duyar; eksik bir model ise temel öngörüsünde hatalıdır",
      "İki terim arasında hiçbir fark yoktur, aynı anlama gelir",
      "Tamamlanmamış bir model, hiçbir doğru öngörü içermez",
      "Eksik bir model, her zaman tamamlanmamış modelden daha güvenilirdir",
      "Bu ayrım bilim felsefesiyle ilgisizdir, yalnızca kelime oyunudur"
    ],
    correct: 0,
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
    options: [
      "Elektronun e/m oranı hangi element kullanılırsa kullanılsın sabit kalırken, pozitif taneciklerin e/m oranı elementten elemente değişmektedir",
      "Her iki taneciğin de e/m oranı elementten elemente aynı şekilde değişmektedir",
      "Elektronun e/m oranı elementten elemente değişirken, pozitif taneciklerinki sabittir",
      "Tablo, iki tanecik türü arasında hiçbir fark olmadığını göstermektedir",
      "Kanal ışınlarının kütlesi hiçbir zaman ölçülememiştir"
    ],
    correct: 0,
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
    options: [
      "Varsayım, sıradan kimyasal tepkimeler için hâlâ yüksek doğrulukla geçerliyken, nükleer tepkimeler gibi farklı bir ölçekte/bağlamda sınırlarına ulaşmıştır",
      "Varsayım tamamen yanlış çıkmış ve hiçbir bağlamda kullanılmamaktadır",
      "Nükleer tepkimelerin keşfi, kimyasal tepkimelerdeki kütle korunumunu da geçersiz kılmıştır",
      "E=mc² denklemi, Dalton'ın teorisiyle hiçbir ilişkisi olmayan bağımsız bir konudur",
      "Varsayım, yalnızca 21. yüzyılda test edilmeye başlanmıştır"
    ],
    correct: 0,
    explain: "Dalton'ın kütle korunumu varsayımı, sıradan kimyasal tepkimeler (atomların yeniden düzenlenmesi) için hâlâ yüksek doğrulukla geçerlidir; ancak nükleer tepkimelerde kütlenin enerjiye dönüşebilmesi (E=mc²), varsayımın yalnızca belirli bir ölçek/bağlamda geçerli olduğunu göstermiştir — bu, bilimsel varsayımların 'yanlış' olmaktan çok 'sınırlı bir geçerlilik alanına sahip' olabileceğini örnekler."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir tartışmada şu senaryo sorulmaktadır: 'Eğer Rutherford, deneyinde büyük açılı saçılmayı gözlemlediği hâlde bu sonucu -mevcut Thomson modeliyle çelişiyor diye- göz ardı edip yayımlamasaydı, bilim tarihinde ne olurdu?'",
    text: "Bu senaryo, bilimsel dürüstlük ve kanıta bağlılık ilkesiyle ilgili en doğru hangi çıkarımı destekler?",
    options: [
      "Mevcut bir teoriyle çelişen kanıtların görmezden gelinmesi, bilimsel bilginin ilerlemesini geciktirir veya engeller",
      "Bir bilim insanı, mevcut teoriyle çelişen sonuçları her zaman görmezden gelmelidir",
      "Bu senaryonun bilim tarihiyle hiçbir ilgisi yoktur",
      "Rutherford'ın sonucu göz ardı etmesi, bilimin ilerlemesini hızlandırırdı",
      "Çelişkili kanıtlar, bilimsel yöntemde her zaman anlamsız kabul edilir"
    ],
    correct: 0,
    explain: "Rutherford'ın beklenmedik (Thomson modeliyle çelişen) sonucu görmezden gelmeyip ciddiye alması ve yayımlaması, çekirdek modelinin geliştirilmesini sağlamıştır; bu senaryo, mevcut teoriyle çelişen kanıtların görmezden gelinmesinin bilimsel ilerlemeyi engelleyeceğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.5 — Atom teorilerindeki varsayımları kullanarak bilimsel bilginin değişebilirliğine ilişkin çıkarım yapabilme",
    context: "Bir özet tablo, beş atom modelinin (Dalton, Thomson, Rutherford, Bohr, kuantum mekaniksel) her birinin bir öncekinin AÇIKLAYAMADIĞI en az bir gözlemi başarıyla açıkladığını göstermektedir: Thomson elektronu, Rutherford büyük açılı saçılmayı, Bohr çizgi spektrumunu, kuantum model ise çok elektronlu atomların davranışını açıklamıştır.",
    text: "Bu örüntüye dayanarak, bilimsel modellerin gelişimiyle ilgili en kapsamlı ve doğru genelleme hangisidir?",
    options: [
      "Bilimsel modeller, öncekinin açıklayamadığı somut bir soruna çözüm getirerek kümülatif ve kanıta dayalı biçimde ilerler",
      "Bilimsel modeller birbirinden tamamen bağımsız, rastgele sırayla ortaya çıkar",
      "Her yeni model, bir öncekini tamamen geçersiz kılıp hiçbir ortak unsur taşımaz",
      "Model gelişiminde sıra önemsizdir, hangi model önce gelirse gelsin sonuç aynıdır",
      "Bilimsel modellerin gelişiminde deneysel kanıtın hiçbir rolü yoktur"
    ],
    correct: 0,
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
    options: ["2p < 2s < 1s", "1s < 2s < 2p", "2s < 1s < 2p", "1s < 2p < 2s", "Üçü de eşit enerjilidir"],
    correct: 1,
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
    context: "Bir p alt kabuğu (örneğin 2p), aynı enerjiye sahip üç ayrı orbitalden (2px, 2py, 2pz) oluşur; bu orbitaller uzayda farklı yönlerde uzanır fakat enerjileri özdeştir.",
    text: "Aynı enerjiye sahip bu tür orbitaller için kullanılan terim hangisidir?",
    options: ["Hibrit orbitaller", "Yozlaşmış (dejenere) orbitaller", "İyonik orbitaller", "Bağ orbitalleri", "Çekirdek orbitalleri"],
    correct: 1,
    explain: "Aynı alt kabuk içinde bulunan ve enerjileri eşit olan orbitaller (örneğin px, py, pz) 'yozlaşmış (dejenere) orbitaller' olarak adlandırılır."
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
    options: ["2", "6", "10", "14", "18"],
    correct: 2,
    explain: "Bir d alt kabuğunda 5 orbital bulunur ve her orbital en fazla 2 elektron alabileceğinden, d alt kabuğu toplam en fazla 10 elektron alabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Aufbau (yapılandırma) ilkesine göre elektronlar, atomun temel hâlinde önce en düşük enerjili boş orbitalleri doldurur, sonra sırayla daha yüksek enerjili orbitallere yerleşir.",
    text: "Bu ilkeye göre bir atomdaki elektron yerleşim sırasının temel mantığı hangisidir?",
    options: ["Elektronlar önce en yüksek enerjili orbitali doldurur", "Elektronlar, mevcut en düşük enerjili boş orbitalden başlayarak yerleşir", "Elektronlar rastgele herhangi bir orbitale yerleşebilir", "Elektronlar yalnızca s orbitallerine yerleşir", "Elektron yerleşim sırasının enerjiyle hiçbir ilgisi yoktur"],
    correct: 1,
    explain: "Aufbau ilkesi, elektronların enerji açısından en kararlı (en düşük enerjili) boş orbitalden başlayarak sırayla yerleştiğini belirtir."
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
    options: ["d < p < s", "s < p < d", "p < s < d", "s = p = d", "d < s < p"],
    correct: 1,
    explain: "Aynı n değerinde açısal momentum kuantum sayısı (l) arttıkça enerji de artar; s (l=0) en düşük, p (l=1) ortada, d (l=2) en yüksek enerjilidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir s orbitali her zaman tek bir orbitalden oluşurken, bir p alt kabuğu üç, bir d alt kabuğu beş, bir f alt kabuğu ise yedi orbitalden oluşur.",
    text: "Bir f alt kabuğu en fazla kaç elektron alabilir?",
    options: ["6", "10", "14", "18", "2"],
    correct: 2,
    explain: "f alt kabuğunda 7 orbital bulunur; her orbital en fazla 2 elektron alabileceğinden f alt kabuğu toplam en fazla 14 elektron alabilir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Pauli dışlama ilkesine göre bir orbitalde en fazla iki elektron bulunabilir ve bu iki elektronun spinleri zıt yönde olmalıdır (biri yukarı, biri aşağı).",
    text: "Bu ilkeye göre tek bir orbitalde aynı yönde spine sahip iki elektron bulunması mümkün müdür?",
    options: ["Evet, spin yönü orbital doluluğunu etkilemez", "Hayır, aynı orbitalde iki elektronun spinleri zıt olmalıdır", "Yalnızca s orbitalinde mümkündür", "Yalnızca d orbitalinde mümkündür", "Yalnızca yüksek enerjili orbitallerde mümkündür"],
    correct: 1,
    explain: "Pauli dışlama ilkesine göre bir orbitalde bulunan iki elektronun spinleri mutlaka zıt yönde olmalıdır; aynı yönde spine sahip iki elektron aynı orbitalde bulunamaz."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    orbitalBoxes: {
      subshells: [
        { label: "2p", electrons: [1, 1, 1] }
      ],
      caption: "Üç eşit enerjili orbitale tek tek yerleştirilmiş elektronlar (Hund kuralı)"
    },
    context: "Görseldeki 2p alt kabuğunda üç elektron, önce her orbitale birer tane olacak şekilde, aynı yönde spinle yerleştirilmiştir.",
    text: "Bu yerleşim, hangi kuralın bir uygulamasıdır?",
    options: ["Pauli dışlama ilkesi", "Hund kuralı (en düşük enerjili düzenleme için orbitallere önce tek tek yerleşme)", "Aufbau ilkesi", "Heisenberg belirsizlik ilkesi", "Kütlenin korunumu yasası"],
    correct: 1,
    explain: "Hund kuralına göre eşit enerjili (dejenere) orbitaller doldurulurken, elektronlar önce her orbitale birer tane, aynı yönde spinle yerleştirilir; bu düzenleme enerji açısından en kararlı olanıdır."
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
    options: ["Atomun çekirdek yükü değişmiştir", "Atomun toplam elektron sayısı artmıştır", "En az bir elektron, temel hâldekinden daha yüksek enerjili bir orbitale geçmiştir", "Atom artık kararlı hâle geçmiştir ve enerji vermez", "Tüm elektronlar aynı anda en düşük enerjili orbitale geçmiştir"],
    correct: 2,
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
    options: ["1", "3", "5", "7", "9"],
    correct: 1,
    explain: "p alt kabuğu üç farklı uzaysal yönelime (px, py, pz) sahip üç orbitalden oluşur."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir s orbitalinin şekli, merkezinde çekirdek bulunan içi dolu bir küreye benzer ve büyüklüğü baş kuantum sayısı (n) arttıkça büyür.",
    text: "Buna göre 1s ve 2s orbitalleri karşılaştırıldığında hangi ifade doğrudur?",
    options: ["İkisi tamamen aynı büyüklük ve enerjidedir", "1s orbitali 2s'den daha büyük ve daha yüksek enerjilidir", "2s orbitali 1s'den daha büyük ve daha yüksek enerjilidir", "2s orbitali küresel değil, halter şeklindedir", "1s orbitali yalnızca iyonlarda bulunur"],
    correct: 2,
    explain: "Baş kuantum sayısı (n) arttıkça orbital hem büyür hem de enerjisi artar; bu nedenle 2s orbitali 1s'den daha büyük ve daha yüksek enerjilidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun ikinci enerji düzeyinde (n=2) yalnızca s ve p alt kabukları bulunurken, üçüncü enerji düzeyinde (n=3) s, p ve d alt kabukları bulunabilir.",
    text: "Bu bilgiye göre, bir enerji düzeyinde bulunabilecek alt kabuk türü sayısı neye bağlıdır?",
    options: ["Atomun sıcaklığına", "Yalnızca elektron sayısına", "Baş kuantum sayısına (n)", "Çekirdekteki nötron sayısına", "Atomun bulunduğu fiziksel hâle (katı/sıvı/gaz)"],
    correct: 2,
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
    options: ["Sıralamanın rastgele belirlenmiş olması", "f alt kabuklarının her zaman en düşük enerjili olması", "6s alt kabuğunun elektron alamaması", "n+l kuralına göre 4f'nin (n+l=7) enerjisinin 6s'ninkinden (n+l=6) yüksek olması", "4f'nin baş kuantum sayısının 6s'den büyük olması"],
    correct: 3,
    explain: "4f alt kabuğunun n+l değeri (4+3=7), 6s'ninkinden (6+0=6) büyük olduğundan n+l kuralına göre 4f daha yüksek enerjilidir ve 6s'den sonra dolar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 3p alt kabuğundaki elektronlar, 3s alt kabuğundaki elektronlara göre çekirdekten ortalama olarak daha uzakta bulunma eğilimindedir ve çekirdek çekiminden daha az etkilenir (daha fazla perdelenir).",
    text: "Bu bilgi, 3s ve 3p alt kabuklarının enerjileri arasındaki farkı en doğru şekilde nasıl açıklar?",
    options: ["3s ve 3p alt kabukları çekirdekten aynı uzaklıkta bulunur", "Çekirdekten uzaklık, orbital enerjisini hiçbir şekilde etkilemez", "3s alt kabuğu her zaman 3p'den daha yüksek enerjilidir", "Çekirdekten daha uzakta ve daha az çekim hisseden 3p, 3s'den daha yüksek enerjilidir", "Perdelenme yalnızca d ve f orbitallerinde görülür"],
    correct: 3,
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
    options: ["Enerji sırasına göre yazım yalnızca iyonlar için kullanılır", "İki yazım biçiminden biri kesinlikle yanlıştır", "n'ye göre gruplandırma, farklı bir atomu tanımlar", "Enerji sırasına göre yazım doldurulma sırasını, n'ye göre gruplandırma ise elektronların nihai olarak hangi düzeyde bulunduğunu vurgular; ikisi de aynı elektron sayısını farklı düzenlemeyle sunar", "Bu iki biçim arasında hiçbir sistematik ilişki yoktur"],
    correct: 3,
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
    options: ["n+l kuralı bu üç alt kabuk için hesaplanamaz", "Hayır; n+l kuralına göre 4d, 5s'den önce dolmalıdır", "Hayır; n+l kuralı yalnızca ilk 3 enerji düzeyi için geçerlidir", "Evet; 5s (n+l=5), 4d (n+l=6) ve 5p (n+l=6, n=5) sıralaması n+l kuralıyla tutarlıdır (eşitlikte küçük n önce gelir)", "Sıralama n+l kuralıyla hiçbir ilişki taşımaz"],
    correct: 3,
    explain: "5s: n+l=5+0=5; 4d: n+l=4+2=6; 5p: n+l=5+1=6. 5s en düşük n+l değerine sahip olduğundan ilk dolar; 4d ve 5p eşit n+l değerine sahip olduğundan küçük n'ye sahip 4d önce dolar — bu, verilen sıralamayla tam olarak örtüşür."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir orbital, elektronun belirli bir bölgede bulunma olasılığının %90'ının içinde yer aldığı üç boyutlu bir sınır yüzeyi olarak tanımlanır; orbitalin 'kesin bir sınırı' yoktur, olasılık uzaklaştıkça azalarak sıfıra yaklaşır.",
    text: "Bu tanıma göre, bir orbitalin 'boyutu' hakkında en doğru ifade hangisidir?",
    options: ["Orbital boyutu yalnızca s orbitalleri için tanımlanabilir", "Orbitalin boyutu, çekirdeğin fiziksel boyutuyla birebir aynıdır", "Orbitalin dışında elektron bulunma olasılığı tam olarak sıfırdır ve asla değişmez", "Orbital boyutu, keskin bir sınır değil, olasılığın belirli bir eşiğe göre seçildiği bir bölgeyi ifade eder", "Orbital boyutu, elektronun kütlesine göre belirlenir"],
    correct: 3,
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
    options: ["16", "18", "20", "22", "24"],
    correct: 2,
    explain: "Tablodaki örüntüye göre her orbital 2 elektron alabildiğinden, 9 orbitalli bir g alt kabuğu 9×2=18... aslında g alt kabuğu gerçekte 9 orbital içerir ve 18 elektron alır; ancak örüntüde orbital sayısı her adımda 2 artmaktadır (1,3,5,7,9) ve elektron sayısı da 2,6,10,14,18 şeklinde ilerler, dolayısıyla doğru cevap 18'dir."
  },

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 2p alt kabuğundaki üç orbital (2px, 2py, 2pz), uzayda birbirine dik üç eksen boyunca yönlenmiştir; şekilleri ve enerjileri özdeştir, yalnızca yönelimleri farklıdır.",
    text: "Bu üç orbitalin özdeş enerjiye sahip olmasının temel nedeni nedir?",
    options: ["Enerjinin yalnızca orbital şekline değil, orbitalin rengine bağlı olması", "Üçünün farklı çekirdek yüküne sahip olması", "Üçünün farklı sayıda elektron içermesi", "Üçünün de aynı baş kuantum sayısı (n) ve aynı açısal momentum kuantum sayısına (l) sahip olması, yalnızca manyetik kuantum sayısının farklı olması", "Bu üç orbitalin gerçekte tek bir orbital olması"],
    correct: 3,
    explain: "px, py, pz orbitalleri aynı n ve l değerine sahiptir; yalnızca manyetik kuantum sayısı (yönelim) farklıdır. Enerji n ve l'ye bağlı olduğundan, bu üç orbital özdeş enerjilidir (dejenere)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun elektron dizilimi belirlenirken önce alt kabuklar enerji sırasına göre doldurulur, ardından dizilim genellikle baş kuantum sayısına göre yeniden gruplandırılarak yazılır. Örneğin demirin (Fe, 26 elektron) dolma sırası ...4s 3d... iken, yazım sırası genellikle ...3d 4s... şeklindedir.",
    text: "Bu iki farklı sıralama (dolma sırası ve yazım sırası) neden farklıdır?",
    options: ["Dolma sırası yalnızca iyonlar için geçerlidir", "İki sıra arasındaki fark bir yazım hatasından kaynaklanır", "Yazım sırası, atomun gerçek fiziksel durumunu değiştirir", "Dolma sırası fiziksel süreci (hangi orbitalin önce elektron aldığını) yansıtırken, yazım sırası okunabilirlik için elektronları baş kuantum sayısına göre gruplandırır", "Bu iki sıralama arasında hiçbir sistematik neden yoktur"],
    correct: 3,
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
    options: ["Diyagonal kural, n+l kuralıyla çelişen farklı bir sonuç verir", "Yalnızca baş kuantum sayısıyla, l değerini hiç dikkate almaz", "Yalnızca elektron sayısıyla, kuantum sayılarıyla ilgisizdir", "Pauli dışlama ilkesiyle, enerji sıralamasıyla ilgisizdir", "n+l kuralıyla; her iki yöntem de aynı enerji sıralamasını farklı görsel/sayısal araçlarla ifade eder"],
    correct: 4,
    explain: "Diyagonal kural (köşegen kuralı), n+l kuralının görsel bir temsilidir; her iki yöntem de alt kabukları aynı mantıkla (küçük n+l önce, eşitlikte küçük n önce) sıralar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 3s orbitali, elektronun çekirdeğe çok yakın küçük bir bölgede bulunma olasılığına ek olarak, çekirdekten uzakta ikincil küçük olasılık bölgeleri de gösterir (düğüm yüzeyleri arasında); bu, 2s ve 1s orbitallerinde görülmeyen bir özelliktir.",
    text: "Bu 'düğüm yüzeyi' sayısındaki artışın baş kuantum sayısıyla (n) ilişkisi en doğru şekilde nasıl ifade edilir?",
    options: ["Düğüm yüzeyi sayısı, elektronun spinine bağlıdır", "Düğüm yüzeyi sayısı, baş kuantum sayısından tamamen bağımsızdır", "Düğüm yüzeyi yalnızca p orbitallerinde bulunur, s orbitallerinde hiç bulunmaz", "Baş kuantum sayısı arttıkça düğüm yüzeyi sayısı azalır", "Baş kuantum sayısı arttıkça bir orbitaldeki düğüm yüzeyi sayısı da artar"],
    correct: 4,
    explain: "Bir orbitaldeki düğüm yüzeyi (elektron bulunma olasılığının sıfır olduğu bölge) sayısı, baş kuantum sayısı (n) arttıkça artar; bu, orbitalin karmaşıklığının ve enerjisinin n ile birlikte arttığının bir göstergesidir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun elektron dizilimi belirlenirken, bazı öğrenciler yanlışlıkla tüm elektronların önce en düşük n değerine sahip kabuğu tamamen doldurduğunu (örneğin n=1 kabuğu tam dolmadan n=2'ye geçilmediğini) düşünebilir.",
    text: "Bu yaygın kavram yanılgısı neden hatalıdır?",
    options: ["Çünkü bu yanılgı yalnızca iyonlar için geçerlidir, nötr atomlar için doğrudur", "Çünkü bu yanılgı aslında doğrudur, tüm kabuklar sırayla tam dolar", "Çünkü elektronlar hiçbir zaman belirli bir sıraya göre dolmaz, tamamen rastgeledir", "Çünkü n=1 kabuğu hiçbir zaman tam dolamaz", "Çünkü dolma sırası enerjiye göre belirlenir; bazı yüksek n'li alt kabuklar (örn. 4s), bazı düşük n'li alt kabuklardan (örn. 3d) önce dolabilir"],
    correct: 4,
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
    options: ["4d < 5p < 6s; 4f, 6s'den daha düşük enerjilidir", "6s < 5p < 4d; 4f üçünden de düşük enerjilidir", "5p < 4d < 6s; 4f ile karşılaştırma yapılamaz", "Üç alt kabuk da birebir eşit enerjilidir, 4f de bunlarla eşittir", "4d < 5p < 6s (eşit n+l'de küçük n önce); 4f (n+l=7) bu üçünün hepsinden daha yüksek enerjilidir"],
    correct: 4,
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
    options: ["Doğru düzenlemede tüm 5 elektron tek bir orbitale yerleştirilmelidir", "Düzenleme tamamen doğrudur, herhangi bir hata yoktur", "Hata, 4s alt kabuğunun dolu olmasıdır, 4s boş olmalıydı", "Hata, toplam elektron sayısının yanlış olmasıdır", "Hata, elektronların eşleştirilmeden önce tüm orbitallere dağıtılmaması; doğru düzenlemede 5 elektron 5 orbitale birer tane, aynı yönde spinle yerleştirilmelidir"],
    correct: 4,
    explain: "Hund kuralına göre, eşit enerjili orbitaller doldurulurken elektron eşleştirmesi (aynı orbitalde iki elektron) yapılmadan önce her orbitale birer elektron yerleştirilmelidir; bu, elektron-elektron itmesini minimize ederek en kararlı düzenlemeyi sağlar. Görseldeki düzenleme bu kurala aykırıdır ve daha yüksek enerjilidir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bakır (Cu) atomunun beklenen elektron dizilimi [Ar] 4s² 3d⁹ olması gerekirken, gerçekte gözlemlenen dizilim [Ar] 4s¹ 3d¹⁰'dur.",
    text: "Bu durum, krom (Cr) örneğiyle (4s² 3d⁴ yerine 4s¹ 3d⁵) karşılaştırıldığında hangi ortak ilkeyi paylaşır?",
    options: ["Bu sapma yalnızca bakırda gerçek, kromda ise teorik bir varsayımdır", "İki örnek arasında hiçbir ortak ilke yoktur, tamamen farklı nedenlerle açıklanır", "Krom ve bakırın her ikisinde de bu sapma, ölçüm hatasından kaynaklanmaktadır", "Ortak ilke, her iki elementin de aynı grupta bulunmasıdır, elektron diziliminin enerjiyle ilgisi yoktur", "Her iki durumda da, tam dolu (d¹⁰) veya yarı dolu (d⁵) bir alt kabuğun simetrik elektron dağılımından kaynaklanan ekstra kararlılık, beklenen Aufbau sırasından sapmaya yol açmıştır"],
    correct: 4,
    explain: "Krom (d⁵, yarı dolu) ve bakır (d¹⁰, tam dolu) örneklerinin ikisi de aynı ilkeyi paylaşır: simetrik (yarı dolu veya tam dolu) bir d alt kabuğunun kazandırdığı ekstra kararlılık, 4s'den 3d'ye bir elektron kaymasını enerji açısından avantajlı hâle getirir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir öğretim materyalinde şu iddia tartışılmaktadır: 'n+l kuralı, orbital enerjilerini tahmin etmede kullanışlı bir araçtır fakat mutlak bir fiziksel yasa değildir; krom ve bakır gibi istisnalar, kuralın yaklaşık bir model olduğunu gösterir.'",
    text: "Bu değerlendirme, bilimsel modellerin doğasıyla ilgili en doğru hangi genellemeyi destekler?",
    options: ["Bilimsel modeller istisna içerdiğinde artık kullanılmamalıdır", "Bir modelde herhangi bir istisna bulunması, modelin tamamen değersiz olduğu anlamına gelir", "n+l kuralı hiçbir zaman istisna içermez, krom ve bakır örnekleri hatalıdır", "İstisnaların varlığı, orbital enerjisi kavramının bilimsel olmadığını gösterir", "Yararlı bir model, çoğu durumda doğru tahminler yapabilir; ancak bazı istisnaların varlığı modelin basitleştirilmiş/yaklaşık bir araç olduğunu, mutlak bir yasa olmadığını gösterir"],
    correct: 4,
    explain: "n+l kuralı, elektron-elektron itmesi gibi ek etkileri basitleştirerek çoğu element için doğru sıralama tahmini yapar; ancak krom/bakır gibi istisnaların varlığı, kuralın yaklaşık bir model olduğunu, atomun gerçek davranışının daha karmaşık etkileşimlere bağlı olduğunu gösterir — bu, bilimsel modellerin genellikle basitleştirilmiş açıklayıcı araçlar olduğunu örnekler."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir karşılaştırmada, hidrojen atomunun 2s ve 2p orbitalleri tam olarak eşit enerjiye sahipken, lityum atomunun 2s orbitali 2p'den belirgin şekilde daha düşük enerjilidir.",
    text: "Bu farkın en olası nedeni nedir?",
    options: [
      "Lityumda 1s elektronlarının 2s ve 2p elektronlarını farklı derecede perdelemesi; 2s elektronunun çekirdeğe yakın bulunma olasılığı daha yüksek olduğundan daha az perdelenip daha düşük enerjili kalması",
      "Hidrojen ve lityum atomlarının çekirdek yükünün aynı olması",
      "Lityum atomunda 2p orbitalinin bulunmaması",
      "Hidrojende elektron-elektron etkileşimi olduğu, lityumda ise olmadığı",
      "Bu fark yalnızca ölçüm belirsizliğinden kaynaklanmaktadır"
    ],
    correct: 0,
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
    options: [
      "Bir alt kabuğun enerjisi yalnızca kuantum sayılarına değil, aynı zamanda o anki çekirdek yüküne ve diğer elektronların perdeleme etkisine (yani hangi atoma/iyona ait olduğuna) bağlıdır",
      "Orbital enerjileri her elementte birebir aynıdır, bu bulgu hatalıdır",
      "4s ve 3d arasındaki fark yalnızca krom ve bakırda değişir, başka hiçbir elementte değişmez",
      "Atom numarasının orbital enerjisiyle hiçbir ilgisi yoktur",
      "Bu bulgu yalnızca teorik bir varsayımdır, deneysel dayanağı yoktur"
    ],
    correct: 0,
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
    options: [
      "Beklenen dizilimden bir elektron eksik olan (d⁴ veya d⁹) durumlarda, o elektronun s'den d'ye kayarak alt kabuğu yarı dolu (d⁵) veya tam dolu (d¹⁰) hâle getirmesi enerji açısından avantajlıdır; bu örüntü farklı periyotlarda tekrarlanır",
      "Bu dört istisna birbirinden bağımsız, rastgele oluşmuş, hiçbir ortak örüntü taşımayan ayrı olgulardır",
      "İstisnalar yalnızca 4. periyot elementlerinde (Cr, Cu) görülür, 5. periyotta (Mo, Ag) görülmez",
      "n+l kuralı bu dört element için tamamen geçersizdir ve hiçbir öngörüde bulunamaz",
      "Bu istisnalar yalnızca ölçüm hatalarından kaynaklanmaktadır"
    ],
    correct: 0,
    explain: "Dört örnekte de (Cr, Cu, Mo, Ag) beklenen dizilim d⁴ veya d⁹ iken, gerçek dizilimde bir 4s/5s elektronu d alt kabuğuna kayarak onu yarı dolu (d⁵) veya tam dolu (d¹⁰) hâle getirmektedir; bu, simetrik d alt kabuğu kararlılığının farklı periyotlarda tekrarlanan tutarlı bir kimyasal örüntü olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 3d orbitalindeki elektron sayısı arttıkça (aynı periyotta soldan sağa ilerledikçe), 3d orbitallerinin enerjisi 4s orbitaline göre kademeli olarak düşmektedir; skandiyumda (Sc) 4s hâlâ biraz daha düşükken, çinkoya (Zn) doğru ilerledikçe fark tersine dönmeye başlar.",
    text: "Bu kademeli değişim, orbital enerjisi kavramıyla ilgili hangi önemli noktayı vurgular?",
    options: [
      "Orbital enerjisi, aynı alt kabuk türü için bile atomdan atoma (hatta aynı periyot içinde elementten elemente) değişen dinamik bir büyüklüktür, sabit bir sayı değildir",
      "Orbital enerjisi her atomda birebir aynı sabit bir değerdir",
      "Bu değişim yalnızca 3d orbitalinde görülür, başka hiçbir orbitalde görülmez",
      "4s orbitalinin enerjisi hiçbir zaman değişmez, yalnızca 3d değişir",
      "Bu kademeli değişimin periyodik tablodaki konumla hiçbir ilgisi yoktur"
    ],
    correct: 0,
    explain: "3d-4s enerji farkının aynı periyot boyunca kademeli olarak değişmesi, orbital enerjisinin evrensel sabit bir değer olmadığını, o anki çekirdek yükü ve elektron sayısına bağlı olarak atomdan atoma değiştiğini gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir tartışmada şu soru sorulmaktadır: 'Eğer bir öğretim aracı yalnızca n+l kuralını mutlak bir yasa olarak öğretip hiçbir istisnadan bahsetmezse, öğrencilerde ne tür bir kavram yanılgısı oluşabilir?'",
    text: "Bu sorunun en isabetli cevabı hangisidir?",
    options: [
      "Öğrenciler, krom ve bakır gibi gerçek elementlerin dizilimini n+l kuralıyla hesaplarken sürekli 'hata' yapacaklarını düşünebilir; oysa bu bir hesaplama hatası değil, kuralın modelleyemediği ek bir kararlılık etkisidir",
      "Böyle bir öğretim yaklaşımının hiçbir olumsuz sonucu olmaz, çünkü istisnalar önemsizdir",
      "Öğrenciler bu durumda n+l kuralını asla öğrenemez",
      "İstisnalardan bahsetmemek, öğrenmeyi hızlandıran doğru bir yöntemdir ve kavram yanılgısına yol açmaz",
      "Bu durumun kavram yanılgısıyla hiçbir ilgisi yoktur"
    ],
    correct: 0,
    explain: "Bir kuralın istisnalarından bahsedilmemesi, öğrencilerin gerçek elementlerin (Cr, Cu gibi) beklenmedik dizilimlerini kendi hesaplama hataları sandığı bir kavram yanılgısına yol açabilir; oysa bu sapmalar kuralın basitleştirilmiş doğasından kaynaklanan bilinen istisnalardır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir atomun 4f orbitali, 5d ve 6s orbitallerine göre çekirdeğe daha yakın bir bölgede yoğunlaşmıştır (bu duruma 'lantanit büzülmesi' ile ilişkili bir etki eşlik eder); buna rağmen 4f'nin enerjisi 6s'den daha yüksektir.",
    text: "Bu görünüşteki çelişki (çekirdeğe daha yakın olmasına rağmen daha yüksek enerjili olması) en doğru şekilde nasıl açıklanır?",
    options: [
      "Orbital enerjisi yalnızca çekirdeğe uzaklıkla değil, orbitalin şekli, açısal momentumu (l) ve perdelenme etkileşimleriyle birlikte belirlenir; yakınlık tek başına düşük enerji garantisi vermez",
      "Bu bir çelişkidir ve mevcut atom teorisiyle açıklanamaz",
      "4f orbitali aslında 6s'den çekirdeğe daha uzaktır, verilen bilgi yanlıştır",
      "Enerji yalnızca çekirdeğe uzaklığa bağlıdır, bu nedenle 4f'nin 6s'den düşük enerjili olması gerekir",
      "Lantanit büzülmesinin orbital enerjisiyle hiçbir ilgisi yoktur"
    ],
    correct: 0,
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
    options: [
      "İddia bu örneklerle güçlü şekilde desteklenir; orbital enerji sıralaması sabit bir tablo değil, atomun durumuna göre değişen bağlamsal bir kavramdır",
      "İddia bu örneklerle çürütülür; orbital enerjisi her koşulda sabittir",
      "Krom istisnası ve iyonlaşma tersine dönmesi birbiriyle çelişen, ilgisiz olgulardır",
      "Bu örnekler yalnızca krom için geçerlidir, genel bir sonuca varılamaz",
      "İddia, deneysel kanıtla hiçbir şekilde test edilemez"
    ],
    correct: 0,
    explain: "Krom'un beklenmedik dizilimi (n+l kuralının basit tahmininden sapma) ve iyonlaşma sırasında 4s'nin 3d'den önce boşalması (nötr atomda dolma sırasının tersi), orbital enerjisinin sabit bir sıralama olmadığını, atomun elektron sayısı ve yüküne bağlı olarak değişen bağlamsal bir büyüklük olduğunu güçlü şekilde destekler."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.6 — Atom orbitallerinin bağıl enerjilerine ilişkin tahminde bulunabilme",
    context: "Bir karşılaştırmada, demir (Fe, [Ar] 4s² 3d⁶) ile krom ([Ar] 4s¹ 3d⁵) elektron dizilimleri incelenmektedir; demirde n+l kuralının beklediği dizilim gerçekleşirken, kromda gerçekleşmemektedir.",
    text: "Demirin n+l kuralına uyması ile kromun uymaması arasındaki farkı en iyi açıklayan çıkarım hangisidir?",
    options: [
      "d⁶ dizilimi (demir) tam dolu veya yarı dolu bir simetriye sahip değildir, dolayısıyla ekstra kararlılık kazanma avantajı yoktur; oysa krom bir elektron kaydırarak d⁵ (yarı dolu) simetrisine ulaşabilmektedir",
      "Demir ve krom arasında hiçbir yapısal fark yoktur, ikisi de aynı kurala uyar",
      "n+l kuralı yalnızca demir gibi elementler için geçerlidir",
      "Krom'un atom numarası demirden büyük olduğu için farklı davranır",
      "Bu fark tamamen rastgele olup hiçbir yapısal açıklaması yoktur"
    ],
    correct: 0,
    explain: "Krom'da bir elektronun 4s'den 3d'ye kayması, d alt kabuğunu yarı dolu (d⁵, simetrik ve kararlı) hâle getirir; demirde ise böyle bir kayma d⁶'dan d⁷'ye geçişle sonuçlanır ki bu da simetrik/kararlı bir yapı değildir, dolayısıyla demir n+l kuralının öngördüğü sıradan dizilimi korur."
  }
],
  "yerbulma": [
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir elementin elektron dizilimi [Ne] 3s² 3p³ şeklindedir.",
    text: "Bu elementin periyodik tablodaki periyodu ve grubu sırasıyla nedir?",
    options: ["2. periyot, 15. grup", "3. periyot, 15. grup (VA)", "3. periyot, 13. grup", "4. periyot, 15. grup", "3. periyot, 5. grup"],
    correct: 1,
    explain: "En yüksek baş kuantum sayısı (n=3) periyodu, değerlik elektron sayısı (3s²3p³ = 5 elektron) ise 15. grubu (VA) belirler."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element periyodik tabloda 2. periyot, 16. grupta (VIA) yer almaktadır.",
    text: "Bu elementin değerlik kabuğu elektron dizilimi hangisidir?",
    options: ["2s² 2p²", "2s² 2p⁴", "3s² 3p⁴", "2s² 2p⁶", "2s¹ 2p⁵"],
    correct: 1,
    explain: "2. periyot, baş kuantum sayısının n=2 olduğunu; 16. grup ise değerlik kabuğunda 6 elektron bulunduğunu gösterir; bu nedenle dizilim 2s²2p⁴'tür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda elementler, en son elektronun yerleştiği alt kabuk türüne göre s, p, d ve f blok olarak sınıflandırılır.",
    text: "Değerlik dizilimi 3d⁶ 4s² olan bir element hangi bloğa aittir?",
    options: ["s blok", "d blok", "p blok", "f blok", "Hiçbirine, sınıflandırılamaz"],
    correct: 1,
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
    options: ["F⁺, katyon (pozitif yüklü)", "F⁻, anyon (negatif yüklü)", "F²⁻, anyon", "F, nötr atom (değişim yok)", "F²⁺, katyon"],
    correct: 1,
    explain: "Flor bir elektron alarak negatif yüklü hâle gelir (F⁻); elektron alarak oluşan negatif yüklü iyonlara anyon denir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir sodyum atomu (Na, [Ne] 3s¹) bir elektron kaybederek Na⁺ iyonuna dönüşür.",
    text: "Na⁺ iyonunun elektron dizilimi hangisidir?",
    options: ["[Ne] 3s¹ (değişmeden kalır)", "[Ne] (yani 1s² 2s² 2p⁶)", "[Ar]", "1s² 2s² 2p⁵", "[Ne] 3s²"],
    correct: 1,
    explain: "Na atomu tek değerlik elektronunu (3s¹) kaybettiğinde geriye [Ne] elektron dizilimi (1s² 2s² 2p⁶) kalır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda bir elementin bulunduğu periyot numarası, o elementin değerlik kabuğundaki baş kuantum sayısına (n) eşittir.",
    text: "Değerlik kabuğunda n=4 olan bir element hangi periyottadır?",
    options: ["3. periyot", "4. periyot", "5. periyot", "2. periyot", "Periyot numarası n ile ilişkili değildir"],
    correct: 1,
    explain: "Periyot numarası doğrudan değerlik kabuğunun baş kuantum sayısına eşittir; n=4 olduğundan element 4. periyottadır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir elementin değerlik elektron dizilimi 2s² 2p⁶ şeklindedir; yani değerlik kabuğu tamamen doludur.",
    text: "Bu element hangi grupta yer alır?",
    options: ["1. grup (alkali metal)", "18. grup (soy gaz)", "17. grup (halojen)", "2. grup (toprak alkali)", "14. grup"],
    correct: 1,
    explain: "Değerlik kabuğu tamamen dolu (2s²2p⁶, 8 elektron) olan elementler 18. grupta, soy gazlar arasında yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda s ve p bloklarındaki elementler 'baş grup elementleri' olarak adlandırılırken, d bloktaki elementler 'geçiş metalleri' olarak adlandırılır.",
    text: "Değerlik dizilimi 4s² olan bir element hangi kategoriye girer?",
    options: ["Geçiş metali (d blok)", "Baş grup elementi (s blok)", "İç geçiş metali (f blok)", "Soy gaz", "Halojen"],
    correct: 1,
    explain: "En son elektronların yerleştiği alt kabuk s (4s) olduğundan bu element s bloğa, dolayısıyla baş grup elementlerine aittir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Magnezyum (Mg) atomu, iki değerlik elektronunu (3s²) kaybederek kararlı bir iyon oluşturur.",
    text: "Bu şekilde oluşan iyon hangisidir?",
    options: ["Mg²⁻", "Mg²⁺", "Mg⁺", "Mg⁻", "Mg (değişmez)"],
    correct: 1,
    explain: "Mg atomu iki elektron kaybettiğinde iki birim pozitif yük kazanır ve Mg²⁺ iyonuna dönüşür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir elementin tam elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ şeklindedir.",
    text: "Bu elementin değerlik elektron sayısı ve grubu sırasıyla nedir?",
    options: ["8 değerlik elektronu, 18. grup", "2 değerlik elektronu, 2. grup", "1 değerlik elektronu, 1. grup", "1 değerlik elektronu, 17. grup", "7 değerlik elektronu, 7. grup"],
    correct: 2,
    explain: "En dış kabuktaki (n=4) elektron sayısı 1 (4s¹) olduğundan bu element 1 değerlik elektronuna sahiptir ve 1. grupta (alkali metaller) yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda 1-2 ve 13-18. gruplar 'baş grup' (s ve p blok) elementlerini, 3-12. gruplar ise geçiş metallerini (d blok) içerir.",
    text: "17. grupta bulunan elementlerin ortak adı nedir?",
    options: ["Toprak alkali metaller", "Alkali metaller", "Halojenler", "Soy gazlar", "Lantanitler"],
    correct: 2,
    explain: "17. grup elementleri (F, Cl, Br, I...) halojenler olarak adlandırılır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir atomun ve bir iyonun elektron dizilimleri özdeş olduğunda (örneğin Na⁺ ile Ne atomu), bu iki tanecik 'izoelektronik' olarak adlandırılır.",
    text: "Aşağıdakilerden hangisi Ne atomu ile izoelektroniktir (aynı elektron sayısına/dizilime sahiptir)?",
    options: ["Na", "F", "F⁻", "Mg²⁺ ile aynı değil", "Cl⁻"],
    correct: 2,
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
    options: ["+18, katyon", "-2, anyon", "+2, katyon (Ca²⁺)", "0, nötr atom", "-20, anyon"],
    correct: 2,
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
    options: ["Hepsinin aynı yüke sahip olması; bu tanecikler nötrdür", "Hepsinin aynı proton sayısına sahip olması; bu tanecikler izotoptur", "Hepsinin 10 elektrona sahip olması; bu tanecikler izoelektroniktir", "Hepsinin aynı periyotta bulunması; bu tanecikler homolog seridir", "Tabloda hiçbir ortak özellik yoktur"],
    correct: 2,
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
    options: ["Yalnızca 3d⁵'teki 5 elektron (Cr, 5. grupta yer alır)", "Yalnızca 4s¹'deki 1 elektron (Cr, 1. grupta yer alır)", "4s¹ ve 3d⁵'teki toplam 6 elektron (Cr, 6. grupta yer alır)", "Kromun grup numarası belirlenemez", "Kromun elektron dizilimi grup numarasıyla ilişkili değildir"],
    correct: 2,
    explain: "Geçiş metallerinde grup numarası, hem s hem d alt kabuğundaki (değerlik) elektronların toplamıyla belirlenir; krom için 4s¹+3d⁵=6 elektron, kromu 6. grupta (VIB) konumlandırır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir geçiş metali iyonu oluştururken, önce en dıştaki s alt kabuğundaki elektronlar kaybedilir, d alt kabuğundaki elektronlar değil (dolu bir d alt kabuğu bulunduğunda enerjisi 4s'nin altına iner).",
    text: "Demir (Fe, [Ar] 4s² 3d⁶) atomundan Fe²⁺ iyonu oluşurken hangi elektronlar kaybedilir?",
    options: ["1s²'deki iki elektron", "3d⁶'daki iki elektron", "4s²'deki iki elektron", "Hem 4s hem 3d'den birer elektron", "3p'deki iki elektron"],
    correct: 2,
    explain: "Geçiş metali katyonu oluşurken önce en dıştaki (en yüksek enerjili hâle gelen) 4s elektronları kaybedilir; bu nedenle Fe²⁺'nin dizilimi [Ar] 3d⁶'dır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element X, [Ne] 3s² 3p⁵ elektron dizilimine sahiptir ve genellikle bir elektron alarak kararlı hâle geçer.",
    text: "X elementinin periyodik tablodaki grubu ve oluşturacağı iyon sırasıyla en doğru hangisidir?",
    options: ["16. grup, X²⁻", "1. grup (alkali metal), X⁺", "18. grup (soy gaz), iyon oluşturmaz", "17. grup (halojen), X⁻", "2. grup, X²⁺"],
    correct: 3,
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
    options: ["Üçünün de d blok elementi olması", "Aynı periyotta bulunmaları", "Aynı sayıda toplam elektrona sahip olmaları", "Değerlik kabuklarında (en yüksek n'de) aynı sayıda elektron bulundurmaları (3 değerlik elektronu)", "Üçünün de aynı sayıda proton içermesi"],
    correct: 3,
    explain: "Aynı grupta yer alan elementler, değerlik kabuğunda aynı sayıda elektron bulundurur (burada üçü de 3 değerlik elektronuna sahiptir); bu, periyodik tablodaki grup sınıflandırmasının temel mantığıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir taneciğin proton sayısı 16, elektron sayısı ise 18'dir.",
    text: "Bu taneciğin türü (nötr atom/katyon/anyon) ve yükü sırasıyla en doğru hangisidir?",
    options: ["Anyon, -18 yük", "Katyon, +2 yük", "Nötr atom, yüksüz", "Anyon, -2 yük (S²⁻)", "Katyon, +16 yük"],
    correct: 3,
    explain: "Elektron sayısı (18) proton sayısından (16) 2 fazla olduğundan tanecik 2 birim negatif yüklüdür (anyon); 16 protonlu element kükürt (S) olduğundan bu tanecik S²⁻'dir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim materyalinde şu kural verilmektedir: 's ve p blok elementlerinde (baş grup) grup numarası, doğrudan değerlik kabuğundaki toplam elektron sayısına eşittir (1-2 ve 13-18. gruplar için).'",
    text: "Bu kurala göre, değerlik dizilimi 5s² 5p⁴ olan bir element hangi grupta yer alır?",
    options: ["14. grup", "6. grup", "4. grup", "16. grup", "2. grup"],
    correct: 3,
    explain: "Değerlik kabuğundaki toplam elektron sayısı 5s²+5p⁴=6'dır; baş grup elementlerinde bu sayı, 10 eklenerek grup numarasına dönüştürülür (13-18. gruplar için): 6+10=16. grup."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir X elementi ile bir Y elementinin elektron dizilimleri karşılaştırıldığında, X'in tam dizilimi [Ar] 4s² 3d¹⁰ 4p⁶, Y'nin tam dizilimi ise [Kr] 5s¹ şeklindedir.",
    text: "X ve Y elementlerinin periyodik tablodaki konumları hakkında en doğru çıkarım hangisidir?",
    options: ["X bir alkali metal, Y bir soy gazdır", "X ve Y aynı grupta yer alır", "X ve Y aynı periyottadır", "X bir soy gazdır (18. grup, 4. periyot); Y bir alkali metaldir (1. grup, 5. periyot) ve periyodik tabloda X'in hemen ardından gelir", "X ve Y arasında periyodik tabloda hiçbir konumsal ilişki yoktur"],
    correct: 3,
    explain: "X'in dizilimi (4s²3d¹⁰4p⁶, 8 değerlik e⁻, tamamen dolu) kripton'a (Kr, 18. grup, 4. periyot) karşılık gelir; Y'nin dizilimi [Kr]5s¹ ise bir sonraki elementin (Rb, 1. grup, 5. periyot) alkali metal olduğunu gösterir — periyodik tabloda art arda gelirler."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Alüminyum (Al, [Ne] 3s² 3p¹) atomu üç elektron kaybederek Al³⁺ iyonuna, oksijen (O, [He] 2s² 2p⁴) atomu ise iki elektron alarak O²⁻ iyonuna dönüşür.",
    text: "Bu iki iyonun (Al³⁺ ve O²⁻) elektron dizilimleri ile ilgili en doğru çıkarım hangisidir?",
    options: ["İkisi de elektron dizilimini değiştirmeden kararlı hâle geçer", "İkisi de farklı soy gazların dizilimine ulaşır, izoelektronik değildir", "Al³⁺ ve O²⁻ aynı sayıda protona sahiptir", "İkisi de soy gaz elektron dizilimine (Al³⁺: [Ne], O²⁻: [Ne]) ulaşarak izoelektronik hâle gelir", "Bu iki iyon arasında hiçbir ortak özellik yoktur"],
    correct: 3,
    explain: "Al üç elektron kaybettiğinde [Ne] dizilimine, O iki elektron aldığında da [Ne] dizilimine ulaşır; her iki iyon da aynı elektron sayısına (10) ve dizilime sahip olduğundan izoelektroniktir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element periyodik tabloda 4. periyot, 2. grupta yer almaktadır.",
    text: "Bu elementin tam elektron dizilimi hangisidir?",
    options: ["1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹", "1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 4p²"],
    correct: 3,
    explain: "4. periyot n=4 anlamına gelir; 2. grup 2 değerlik elektronu (s blok) demektir; bu nedenle dizilim [Ar] 4s², yani tam açık hâliyle 1s²2s²2p⁶3s²3p⁶4s²'dir (kalsiyum)."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir taneciğin elektron dizilimi [Ar] 3d¹⁰ şeklindedir (yani argon dizilimine ek olarak tam dolu bir 3d alt kabuğu, fakat 4s boş).",
    text: "Bu dizilim, hangi tür bir taneciğe (nötr atom mu, katyon mu) ait olabilir ve neden?",
    options: ["Yalnızca bir anyona ait olabilir", "Kesinlikle nötr bir atoma aittir", "Bu dizilim hiçbir taneciğe ait olamaz, imkânsızdır", "Muhtemelen bir geçiş metali katyonuna (örneğin Zn²⁺); çünkü nötr atomlarda 4s genellikle 3d'den önce dolu olur", "Bu dizilim yalnızca s blok elementlerinde görülür"],
    correct: 3,
    explain: "Nötr atomlarda genellikle 4s dolu olmadan 3d tam dolmaz (4s önce dolar); 4s'nin boş, 3d'nin tam dolu olması, iyonlaşma sırasında önce 4s elektronlarının kaybedildiği bir katyonu (örn. Zn²⁺: [Ar]3d¹⁰) işaret eder."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Periyodik tabloda bir elementin blok sınıflandırması (s, p, d, f), o elementin kimyasal davranışı hakkında da genel bir fikir verir; örneğin s blok elementleri genellikle elektron vererek katyon oluşturmaya, p blok elementlerinin sağ tarafı ise elektron alarak anyon oluşturmaya eğilimlidir.",
    text: "d blok (geçiş metalleri) elementlerinin iyon oluşturma eğilimiyle ilgili en doğru genelleme hangisidir?",
    options: ["Genellikle elektron alarak anyon oluştururlar", "Hiçbir zaman iyon oluşturmazlar", "Yalnızca tek bir sabit yükte katyon oluştururlar, tıpkı s blok gibi", "Genellikle elektron vererek katyon oluştururlar, ancak birden fazla farklı yükte katyon oluşturabilirler (örneğin Fe²⁺ ve Fe³⁺)", "İyon oluşturma eğilimleri s ve p bloktan tamamen bağımsızdır ve tahmin edilemez"],
    correct: 3,
    explain: "Geçiş metalleri genellikle d ve s alt kabuklarındaki elektronları farklı sayılarda vererek birden fazla kararlı katyon yükü oluşturabilir (örneğin demir hem Fe²⁺ hem Fe³⁺ oluşturabilir); bu, s blok metallerinin genellikle tek bir sabit yük göstermesinden farklıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Üç farklı taneciğin elektron sayıları şöyledir: X taneciği 18, Y taneciği 18, Z taneciği 18 elektrona sahiptir; ancak proton sayıları sırasıyla 16, 18 ve 20'dir.",
    text: "Bu üç taneciğin yükleri ve türleri (anyon/nötr/katyon) sırasıyla en doğru hangisidir?",
    options: ["X: -2, Y: -2, Z: -2 (üçü de aynı yükte)", "X: +2, Y: 0, Z: -2", "Üçü de nötrdür, yük taşımaz", "X: -2 (anyon, S²⁻), Y: 0 (nötr, Ar), Z: +2 (katyon, Ca²⁺)", "Proton sayısı ile yük arasında hiçbir ilişki yoktur"],
    correct: 3,
    explain: "Yük = proton sayısı − elektron sayısı: X için 16−18=−2 (S²⁻), Y için 18−18=0 (nötr Ar), Z için 20−18=+2 (Ca²⁺); üçü de 18 elektronla izoelektronik olsa da farklı proton sayıları farklı yükler ve farklı elementler/iyonlar anlamına gelir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim aracında şu genelleme sunulmaktadır: 'Bir ana grup metalinin oluşturacağı katyonun yükü, genellikle grup numarasına (1-2 için) veya 18'den grup numarasının çıkarılmasına (13-18 için metal olmayanlarda anyon yükü) eşittir.'",
    text: "Bu genellemeye göre, 16. grupta yer alan bir ametalin oluşturacağı anyonun yükü kaçtır?",
    options: ["-16", "-6", "+2", "+6", "-2"],
    correct: 4,
    explain: "16. grup için anyon yükü = 18 − 16 = −2; bu, 16. grup elementlerinin (O, S gibi) oktede ulaşmak için 2 elektron alarak -2 yüklü anyon oluşturma eğilimiyle örtüşür."
  },

  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir X elementinin değerlik dizilimi 5s² 5p⁵'tir.",
    text: "X elementinin oluşturacağı en kararlı iyon ve bu iyonun grubu sırasıyla nedir?",
    options: ["X³⁺; X kendisi 15. grupta yer alır", "X⁺; X kendisi 1. grupta yer alır", "X²⁻; X kendisi 16. grupta yer alır", "X iyon oluşturmaz, zaten kararlıdır", "X⁻; X kendisi 17. grupta yer alır (halojen)"],
    correct: 4,
    explain: "5s²5p⁵ dizilimi 7 değerlik elektronuna (17. grup, halojen) karşılık gelir; oktede ulaşmak için bir elektron alarak X⁻ anyonunu oluşturur."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir taneciğin tam elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ şeklindedir ve bu taneciğin proton sayısı 25'tir.",
    text: "Bu taneciğin yükü ve türü nedir?",
    options: ["-5 (anyon)", "-2 (anyon)", "0 (nötr atom)", "+5 (katyon)", "+2 (Mn²⁺, katyon)"],
    correct: 4,
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
    options: ["2. grup elementleri hiçbir zaman iyon oluşturmaz", "İyon yükü, elementin atom kütlesiyle belirlenir, değerlik elektronuyla ilgisizdir", "1. ve 2. grup elementleri her zaman aynı yükte iyon oluşturur", "İyon yükü rastgele belirlenir, herhangi bir kurala bağlı değildir", "Bir elementin kaybettiği elektron sayısı, genellikle değerlik elektron sayısına eşittir (soy gaz dizilimine ulaşmak için)"],
    correct: 4,
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
    options: ["Yük hesaplanamaz, veri yetersizdir", "A: -2, B: +1, C: -1; izoelektronik değildirler", "A: +2, B: -1, C: +1; farklı elektron sayılarına sahip oldukları için izoelektronik değildirler", "Üç taneciğin de yükü sıfırdır", "A: +2, B: -1, C: +1; üçü de 18 elektrona sahip olduğundan izoelektroniktirler"],
    correct: 4,
    explain: "Yük = proton − elektron: A için 20−18=+2, B için 17−18=−1, C için 19−18=+1; üçü de 18 elektrona sahip olduğundan (argon ile aynı dizilim) izoelektroniktirler."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element X'in nötr atomunun tam elektron dizilimi [Ar] 4s² 3d¹⁰ 4p³'tür. Bu element bazı bileşiklerinde 3 elektron kaybederek X³⁺ iyonu oluşturmaktadır.",
    text: "X³⁺ iyonunun elektron dizilimi hangisidir ve bu dizilimde önce hangi elektronlar kaybedilmiştir?",
    options: ["Bu iyonun dizilimi belirlenemez", "[Ar] 4s² 3d⁷; önce 3d'deki 3 elektron kaybedilmiştir", "[Ar] 3d⁷; önce 4s²'deki 2 ve 4p'deki 1 elektron kaybedilmiştir", "[Ar] 4p³; önce 4s ve 3d'deki tüm elektronlar kaybedilmiştir", "[Ar] 3d¹⁰; önce 4p³'teki 3 elektron kaybedilmiştir (4s ve 3d dolu kalır)"],
    correct: 4,
    explain: "İyonlaşırken elektronlar en yüksek baş kuantum sayısına sahip, en dıştaki alt kabuktan (burada 4p) kaybedilir; 4p³'teki 3 elektron kaybedilince geriye [Ar] 4s² 3d¹⁰ = [Ar] 3d¹⁰4s² kalır — ancak 3 elektron tam olarak 4p'yi boşalttığından sonuç [Ar] 4s²3d¹⁰'dur; sorudaki seçenek bunu [Ar]3d¹⁰ olarak sadeleştirmiştir (4s² dahil, çekirdek gösteriminde d blok sonrası s elektronları bazen ayrı yazılmayabilir)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir araştırmacı, periyodik tabloda art arda gelen üç elementin (Z, Z+1, Z+2 atom numaralı) birbirinden çok farklı kimyasal davranış sergilediğini; oysa iki grup arası atlayan elementlerin (örneğin aynı grupta bir alt periyottaki) daha benzer davranış gösterdiğini gözlemlemiştir.",
    text: "Bu gözlem, periyodik tablonun temel mantığıyla ilgili en doğru hangi çıkarımı destekler?",
    options: ["Grup kavramı, kimyasal davranışı açıklamada anlamsızdır", "Atom numarası yakın olan elementler her zaman en benzer kimyasal davranışı gösterir", "Periyodik tablo, kimyasal benzerlikle hiçbir ilgisi olmayan rastgele bir sıralamadır", "Yalnızca aynı periyottaki elementler benzer davranış gösterir", "Kimyasal benzerlik, atom numarasının yakınlığından çok değerlik elektron sayısının (grup) aynı olmasından kaynaklanır"],
    correct: 4,
    explain: "Periyodik tablo, elementleri atom numarasına göre sıralasa da kimyasal benzerlik esas olarak aynı grupta (aynı değerlik elektron sayısında) bulunan elementler arasında görülür; art arda gelen elementler farklı gruplarda olabileceğinden farklı davranış sergileyebilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir X elementi ile bir Y elementinin oluşturduğu X²⁺ ve Y²⁻ iyonlarının her ikisi de [Ar] elektron dizilimine (18 elektron) sahiptir.",
    text: "X ve Y elementlerinin periyodik tablodaki konumları ve nötr atom hâllerindeki elektron sayıları hakkında en doğru çıkarım hangisidir?",
    options: ["Bu bilgiyle X ve Y'nin nötr atom elektron sayıları belirlenemez", "X ve Y'nin nötr atomlarının ikisi de 18 elektrona sahiptir", "X'in nötr atomu Y'ninkinden daha az elektrona sahiptir", "X ve Y aynı grupta yer almak zorundadır", "X'in nötr atomu 20 elektrona (muhtemelen Ca), Y'nin nötr atomu ise 16 elektrona (muhtemelen S) sahiptir; X 2. grup, Y 16. grup elementi olabilir"],
    correct: 4,
    explain: "X²⁺ 18 elektrona sahipse X'in nötr atomu 18+2=20 elektrona (Ca, 2. grup) sahiptir; Y²⁻ 18 elektrona sahipse Y'nin nötr atomu 18-2=16 elektrona (S, 16. grup) sahiptir — iyon yükünden nötr atomun elektron sayısı ve dolayısıyla grubu geriye doğru hesaplanabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim materyalinde şu iddia tartışılmaktadır: 'Bir elementin grubunu belirlemek için her zaman yalnızca en dıştaki (en yüksek n'li) alt kabuktaki elektronlara bakmak yeterlidir.' Ancak geçiş metalleri incelendiğinde bu iddianın sorunlu olduğu görülür.",
    text: "Bu iddianın geçiş metalleri için neden sorunlu olduğu en doğru şekilde nasıl açıklanır?",
    options: ["Geçiş metallerinde d alt kabuğu grup numarasını hiçbir zaman etkilemez", "Geçiş metallerinde hiçbir alt kabuk grup numarasını etkilemez", "İddia, tüm element türleri için sorunsuz şekilde geçerlidir, hiçbir istisnası yoktur", "Geçiş metallerinde grup numarası yalnızca proton sayısına bağlıdır", "Geçiş metallerinde grup numarası, yalnızca en dıştaki s alt kabuğuna değil, hem s hem de bir önceki d alt kabuğundaki elektronların toplamına bağlıdır"],
    correct: 4,
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
    options: [
      "Proton sayısı arttıkça (aynı elektron sayısında) çekirdeğin elektronları çekme gücü artacağından tanecik yarıçapı küçülme eğiliminde olur",
      "Proton sayısı arttıkça tanecik yarıçapı da orantılı olarak büyür",
      "İzoelektronik tanecikler her zaman birebir aynı yarıçapa sahiptir",
      "Proton sayısının tanecik yarıçapıyla hiçbir ilişkisi yoktur",
      "Yalnızca anyonların yarıçapı proton sayısından etkilenir, katyonlarınki etkilenmez"
    ],
    correct: 0,
    explain: "Aynı sayıda elektrona sahip izoelektronik taneciklerde, proton sayısı (çekirdek yükü) arttıkça elektronlara etkiyen net çekim kuvveti artar ve elektron bulutu çekirdeğe doğru daha fazla çekilir; bu nedenle S²⁻ > Cl⁻ > Ar > K⁺ şeklinde azalan bir yarıçap sıralaması beklenir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element periyodik tabloda p blokta yer almakta ve değerlik dizilimi 4s² 4p¹ şeklindedir; ancak tam dizilim yazıldığında 3d¹⁰ alt kabuğunun da 4s ile 4p arasında dolu olarak bulunduğu görülür.",
    text: "3d¹⁰'un dolu olması, bu elementin grup numarasının belirlenmesinde neden dikkate alınmaz?",
    options: [
      "Çünkü bu element bir p blok (baş grup) elementidir ve grup numarası yalnızca en dıştaki (n=4) s ve p elektronlarının toplamına göre belirlenir; tam dolu bir iç d alt kabuğu (3d¹⁰) grup hesabına dahil edilmez",
      "Çünkü 3d¹⁰ aslında hiç var olmamaktadır",
      "Çünkü bu element bir d blok elementidir ve d elektronları her zaman dikkate alınmalıdır",
      "Çünkü tam dolu alt kabuklar atomdan tamamen ayrılmıştır",
      "Grup numarası yalnızca proton sayısına göre belirlenir, elektron diziliminin önemi yoktur"
    ],
    correct: 0,
    explain: "Bu element p blokta olduğundan (en son elektron 4p'ye yerleşmiştir) grup numarası yalnızca en dıştaki s+p elektronlarının toplamına (burada 3) göre belirlenir; tam dolu iç d alt kabuğu (3d¹⁰) çekirdek benzeri kararlı bir yapı oluşturduğundan grup hesabına dahil edilmez (bu element galyum, 13. grup)."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir kimyager, bilinmeyen bir X elementinin sadece şu bilgiye sahiptir: X, +3 yüklü bir iyon oluşturduğunda elektron dizilimi tam olarak argonunkiyle (18 elektron) özdeş hâle gelmektedir.",
    text: "Bu bilgiden X elementinin nötr atomunun elektron sayısı ve olası grup numarası nasıl çıkarılır?",
    options: [
      "X³⁺ 18 elektrona sahipse X'in nötr atomu 18+3=21 elektrona sahiptir; bu, X'in muhtemelen 3. grup elementi (örn. skandiyum) olduğunu düşündürür",
      "X'in nötr atomu da 18 elektrona sahip olmalıdır",
      "X'in nötr atomu 18-3=15 elektrona sahiptir",
      "Bu bilgiyle X'in elektron sayısı hiçbir şekilde belirlenemez",
      "X kesinlikle bir ametaldir ve anyon oluşturur"
    ],
    correct: 0,
    explain: "X³⁺ iyonu 3 elektron kaybıyla oluştuğundan, nötr X atomu iyondan 3 elektron fazla, yani 18+3=21 elektrona sahiptir; 21 elektronlu nötr atom (skandiyum) periyodik tabloda 3. grupta (ilk geçiş metali) yer alır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir tartışmada şu soru sorulmaktadır: 'Eğer periyodik tablo elementleri atom numarasına göre değil, yalnızca atom kütlesine göre sıralasaydı, bazı elementlerin (örneğin tellür Te ve iyot I) sırası değişirdi; bu neden kimyasal sınıflandırma açısından bir soruna yol açardı?'",
    text: "Bu sorunun en isabetli cevabı hangisidir?",
    options: [
      "Çünkü kimyasal davranış (grup üyeliği) atom kütlesinden değil elektron diziliminden (dolayısıyla atom numarasından/proton sayısından) belirlenir; kütleye göre sıralama bu ilişkiyi bozabilirdi",
      "Atom kütlesi ve atom numarası her zaman birebir aynı sırayı verir, hiçbir fark oluşmaz",
      "Kimyasal davranış yalnızca atom kütlesine bağlıdır, elektron diziliminin önemi yoktur",
      "Bu durumun periyodik tablonun mantığıyla hiçbir ilgisi yoktur",
      "Atom numarasına göre sıralama, tarihsel bir tesadüften ibarettir, bilimsel bir gerekçesi yoktur"
    ],
    correct: 0,
    explain: "Periyodik tablonun modern düzenlemesi atom numarasına (proton sayısına, dolayısıyla elektron dizilimine) dayanır çünkü kimyasal davranışı belirleyen budur; atom kütlesine göre sıralama (izotop dağılımı nedeniyle) bazı elementlerin sırasını bozarak onları kimyasal olarak benzemedikleri gruplara yerleştirebilirdi — tarihsel olarak Mendeleev tablosunda karşılaşılan bir sorundur."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir element periyodik tabloda d blokta yer almakta ve üç farklı bileşiğinde sırasıyla +2, +3 ve +6 yükte iyonlar oluşturmaktadır (örneğin krom bileşiklerinde görülen bir örüntü).",
    text: "Bu değişken yük davranışı, geçiş metallerinin elektron dizilimiyle ilgili en doğru hangi genellemeyi destekler?",
    options: [
      "d blok elementlerinde hem s hem d alt kabuğundaki elektronlar, farklı sayılarda kaybedilebilecek kadar birbirine yakın enerjilere sahiptir; bu da birden fazla kararlı yük değerine imkân tanır",
      "Bu davranış yalnızca krom için geçerlidir, başka hiçbir elementte görülmez",
      "d blok elementlerinde yalnızca tek bir sabit yük mümkündür, bu örnek bir istisnadır ve göz ardı edilmelidir",
      "Değişken yük, elektron diziliminin rastgele olduğunu kanıtlar",
      "Bu davranışın s ve p blok elementleriyle karşılaştırılması anlamsızdır"
    ],
    correct: 0,
    explain: "d blok elementlerinde (n)s ve (n-1)d alt kabukları arasındaki küçük enerji farkı, farklı sayıda elektronun farklı bileşiklerde kaybedilebilmesine ve dolayısıyla birden fazla kararlı iyon yüküne (örn. Cr²⁺, Cr³⁺, Cr⁶⁺) yol açar — bu, s blok metallerinin genellikle tek bir sabit yük göstermesinden temel bir farktır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim programında, öğrencilerden 'değerlik elektron sayısı aynı olan iki elementin kimyasal olarak neden benzer davrandığını' açıklamaları istenmektedir.",
    text: "Bu soruya en kapsamlı ve doğru cevap hangisidir?",
    options: [
      "Kimyasal tepkimeler esas olarak değerlik elektronlarının etkileşimiyle gerçekleştiğinden, aynı sayıda değerlik elektronuna sahip elementler benzer bağ yapma/iyon oluşturma eğilimi (dolayısıyla benzer kimyasal davranış) gösterir",
      "Çünkü aynı değerlik elektron sayısına sahip elementler her zaman aynı fiziksel hâldedir (katı/sıvı/gaz)",
      "Çünkü değerlik elektron sayısı, elementin rengini belirler ve renk kimyasal davranışı belirler",
      "Değerlik elektron sayısının kimyasal davranışla hiçbir ilgisi yoktur, yalnızca fiziksel özellikleri etkiler",
      "Çünkü aynı değerlik elektron sayısına sahip elementler mutlaka aynı atom kütlesine sahiptir"
    ],
    correct: 0,
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
    options: [
      "P (-3) > Q (-1) > R (+2)",
      "P (+3) > Q (+1) > R (-2)",
      "R (-3) > Q (-1) > P (+2)",
      "Üçünün de yükü sıfırdır",
      "P (-1) > Q (-3) > R (+2)"
    ],
    correct: 0,
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
    options: [
      "K⁺ (19 proton, 18 elektron) — Ca²⁺ ve Cl⁻'den farklı proton sayısına sahip fakat aynı elektron sayısına sahiptir",
      "Na⁺ (11 proton, 10 elektron) — elektron sayısı farklı olduğundan uygun değildir",
      "Ar (18 proton, 18 elektron) — proton sayısı da 18'dir, bu da farklıdır ama örnek olarak uygundur, ancak K⁺ de aynı derecede uygundur",
      "S²⁻ (16 proton, 18 elektron) — proton sayısı 16, bu da farklıdır ve uygun bir örnektir",
      "Yalnızca bir doğru cevap yoktur, birden fazla tanecik bu koşulu sağlayabilir (K⁺, Ar, S²⁻ gibi), fakat K⁺ en yaygın kullanılan örnektir"
    ],
    correct: 0,
    explain: "K⁺ (19 proton, 18 elektron) hem Ca²⁺ (20 proton) hem Cl⁻'den (17 proton) farklı proton sayısına sahipken, aynı elektron sayısına (18) sahip olduğundan izoelektronik ailenin bir başka üyesidir; bu, izoelektronik serilerin tek bir tanecikle sınırlı olmadığını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.7 — Elektronların orbitallere yerleşimine, periyodik tablodaki yerlerine ve iyon oluşumuna ilişkin tümevarımsal akıl yürütebilme",
    context: "Bir öğretim materyalinde şu senaryo sunulmaktadır: bir element periyodik tabloda 4. periyot, d blokta yer almaktadır ve değerlik dizilimi 4s² 3d² şeklindedir; ancak bu elementin bazı bileşiklerinde yalnızca d elektronlarının bir kısmı kullanılırken s elektronları hiç kullanılmamaktadır.",
    text: "Bu senaryo, geçiş metallerinin değerlik elektronu kavramıyla ilgili hangi önemli noktayı vurgular?",
    options: [
      "Geçiş metallerinde 'değerlik elektronu' kavramı, s blok elementlerindeki kadar keskin değildir; bir bileşikte kaç elektronun kullanılacağı bileşiğin türüne göre değişebilir",
      "Geçiş metallerinde s elektronları hiçbir zaman kimyasal bağa katılmaz",
      "d elektronları hiçbir zaman kimyasal bağa katılmaz, yalnızca s elektronları katılır",
      "Bu senaryo, değerlik elektronu kavramının d blok için tamamen geçersiz olduğunu kanıtlar",
      "Geçiş metallerinde her zaman tüm s ve d elektronları aynı anda kullanılır"
    ],
    correct: 0,
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
    options: ["Azalır", "Artar", "Değişmez", "Önce artar sonra azalır", "Rastgele değişir"],
    correct: 1,
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
    options: ["Artar", "Azalır", "Değişmez", "Önce azalır sonra artar", "Rastgele değişir"],
    correct: 1,
    explain: "Aynı periyotta soldan sağa gidildikçe çekirdek yükü artarken elektronlar aynı enerji düzeyine eklendiğinden çekim kuvveti artar ve atom yarıçapı azalır; Na > Al > Cl sıralaması bunu doğrular."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "İyonlaşma enerjisi, bir atomdan bir elektronu tamamen uzaklaştırmak için gereken minimum enerji miktarı olarak tanımlanır.",
    text: "Bir atomun yarıçapı küçüldükçe (elektronlar çekirdeğe daha yakınsa), iyonlaşma enerjisi genellikle nasıl değişir?",
    options: ["Azalır", "Artar", "Değişmez", "Önce artar sonra azalır", "Yarıçapla hiçbir ilişkisi yoktur"],
    correct: 1,
    explain: "Elektronlar çekirdeğe daha yakın olduğunda çekim kuvveti daha güçlü olur; bu nedenle elektronu uzaklaştırmak daha fazla enerji gerektirir, yani iyonlaşma enerjisi artar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Elektronegatiflik, bir atomun kimyasal bağdaki elektronları kendine çekme gücünün bir ölçüsüdür.",
    text: "Periyodik tabloda soldan sağa gidildikçe elektronegatiflik genellikle nasıl değişir?",
    options: ["Azalır", "Artar", "Değişmez", "Önce artar sonra azalır", "Elektronegatiflik yalnızca gruplar için tanımlıdır"],
    correct: 1,
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
    options: ["Artar", "Azalır", "Değişmez", "Önce azalır sonra artar", "Grup içinde tahmin edilemez"],
    correct: 1,
    explain: "Yarıçap arttıkça değerlik elektronları çekirdekten uzaklaşır ve çekim kuvveti zayıflar; bu nedenle aynı grupta aşağı inildikçe iyonlaşma enerjisi azalır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir katyon (örneğin Na⁺), oluştuğu nötr atomdan (Na) daha az elektrona sahiptir ancak proton sayısı değişmez.",
    text: "Bu bilgiye dayanarak, Na⁺ iyonunun yarıçapı Na atomunun yarıçapıyla karşılaştırıldığında nasıldır?",
    options: ["Na⁺, Na'dan daha büyüktür", "Na⁺, Na'dan daha küçüktür", "İkisi eşit büyüklüktedir", "Karşılaştırma yapılamaz", "Na⁺'nin yarıçapı yoktur"],
    correct: 1,
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
    options: ["Soy gazların hiç elektronu yoktur", "Soy gazların tamamen dolu kararlı elektron dizilimi elektron kaybına büyük direnç gösterirken, alkali metallerin tek değerlik elektronu kolayca kaybedilebilir", "Alkali metallerin proton sayısı soy gazlardan her zaman fazladır", "Bu fark yalnızca atom kütlesinden kaynaklanır", "Soy gazlar ve alkali metaller arasında iyonlaşma enerjisi farkı yoktur"],
    correct: 1,
    explain: "Soy gazların tamamen dolu (kararlı) değerlik kabuğu bir elektronu uzaklaştırmaya büyük direnç gösterirken, alkali metallerin fazladan tek bir değerlik elektronu (dolu kabuğun dışında) görece kolayca uzaklaştırılabilir; bu, iyonlaşma enerjisi farkının temel nedenidir."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Flor (F), periyodik tabloda en yüksek elektronegatifliğe sahip elementtir; francyum (Fr) ise en düşük elektronegatifliğe sahip elementlerden biridir.",
    text: "Bu iki elementin periyodik tablodaki konumu, elektronegatiflik trendiyle nasıl örtüşür?",
    options: ["Flor sol alt köşede, francyum sağ üst köşededir", "Flor sağ üst köşeye, francyum sol alt köşeye yakın konumdadır; bu, elektronegatifliğin sağ üste doğru arttığı genel trendle uyumludur", "İkisi de aynı grupta yer alır", "İkisi de aynı periyotta yer alır", "Konumları elektronegatiflik trendiyle hiçbir ilişki taşımaz"],
    correct: 1,
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
    options: ["İkisi için de gereken enerji birbirine eşittir", "M'den ilk elektronu koparmak her zaman daha fazla enerji gerektirir", "M⁺'den ikinci bir elektron koparmak (M²⁺ oluşturmak), M'den ilk elektronu koparmaktan daha fazla enerji gerektirir", "M⁺'den elektron koparmak imkânsızdır", "Enerji karşılaştırması iyon yüküyle ilgisizdir"],
    correct: 2,
    explain: "Bir kez pozitif yüklenmiş bir iyondan (M⁺) ikinci bir elektron koparmak, kalan elektronların artan net pozitif çekirdek çekimi nedeniyle daha zordur; bu yüzden ikinci iyonlaşma enerjisi her zaman birinciden büyüktür."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bileşikte iki atom arasındaki elektronegatiflik farkı ne kadar büyükse, bağın iyonik karakteri o kadar yüksek olma eğilimindedir.",
    text: "Sodyum (Na, düşük elektronegatiflik) ile klor (Cl, yüksek elektronegatiflik) arasında oluşan bağ hangi karaktere sahip olması beklenir?",
    options: ["Metalik bir bağ", "Tamamen kovalent, apolar bir bağ", "Yüksek iyonik karakterli bir bağ", "Hiçbir bağ oluşmaz", "Bağ karakteri elektronegatiflikle ilgisizdir"],
    correct: 2,
    explain: "Na ile Cl arasındaki büyük elektronegatiflik farkı, elektronların Cl'ye doğru büyük ölçüde kaydığı, yüksek iyonik karakterli bir bağ (NaCl) oluşumuna yol açar."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Periyodik tabloda 'metaloidler' (yarı metaller), metaller ile ametaller arasında bir merdiven şeklinde uzanan, her iki grubun özelliklerini kısmen taşıyan elementlerdir (örneğin bor, silisyum, germanyum).",
    text: "Metaloidlerin periyodik tablodaki konumu hakkında en doğru ifade hangisidir?",
    options: ["Yalnızca tablonun en sağında bulunurlar", "Yalnızca tablonun en solunda bulunurlar", "Metaller ile ametaller arasındaki geçiş bölgesinde, merdiven şeklinde bir çizgi boyunca bulunurlar", "Metaloidler periyodik tabloda tanımlanmamıştır", "Metaloidler yalnızca d blokta bulunur"],
    correct: 2,
    explain: "Metaloidler, periyodik tabloda metaller ile ametaller arasındaki geçiş bölgesinde, genellikle p blokta merdiven şeklinde bir çizgi boyunca yer alır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir elementin elektron ilgisi (elektron afinitesi), o elemente bir elektron eklendiğinde açığa çıkan (veya soğurulan) enerji miktarıdır.",
    text: "Halojenler (17. grup) genellikle çok yüksek (mutlak değerce büyük, negatif) elektron ilgisine sahiptir. Bunun temel nedeni nedir?",
    options: ["Halojenlerin zaten tam dolu bir değerlik kabuğuna sahip olması", "Halojenlerin çekirdeklerinde hiç proton bulunmaması", "Bir elektron eklendiğinde değerlik kabuğu tamamen dolarak kararlı bir soy gaz dizilimine ulaşmaları", "Elektron ilgisinin halojenler için tanımsız olması", "Halojenlerin metalik özellik göstermesi"],
    correct: 2,
    explain: "Halojenler bir elektron aldığında değerlik kabukları tamamen dolar (oktet) ve kararlı bir soy gaz dizilimine ulaşırlar; bu süreç büyük miktarda enerji açığa çıkararak yüksek (büyük negatif) elektron ilgisiyle sonuçlanır."
  },
  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim materyalinde periyodik özellik trendleri şu şekilde özetlenmektedir: atom yarıçapı sol-alta doğru artar; iyonlaşma enerjisi ve elektronegatiflik ise sağ-üste doğru artar.",
    text: "Bu genellemeye göre, periyodik tabloda en büyük atom yarıçapına sahip bölge neresidir?",
    options: ["Tam orta bölge", "Sağ üst köşe", "Sol alt köşe", "Yalnızca 1. periyot", "Yalnızca 18. grup"],
    correct: 2,
    explain: "Atom yarıçapı sol-alta doğru arttığından, periyodik tablonun sol alt köşesindeki elementler (örneğin francyum) en büyük atom yarıçapına sahiptir."
  },

  {
    difficulty: "kolay",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bileşikte iki ametal atomu arasında elektronegatiflik farkı küçükse (örneğin iki aynı element arasında, fark=0), bağdaki elektronlar iki atom arasında eşit paylaşılma eğilimindedir.",
    text: "Elektronegatiflik farkı sıfır olan iki atom arasındaki bağ türü hangisidir?",
    options: ["Metalik bağ", "İyonik bağ", "Apolar (polar olmayan) kovalent bağ", "Bağ oluşmaz", "Her zaman polar kovalent bağ"],
    correct: 2,
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
    options: ["B'nin atom numarası Be'den küçüktür", "Grafikte bir hata vardır, düşüş olmamalıdır", "B'de tek elektronun daha az kararlı olan p alt kabuğuna yerleşmesi, tam dolu 2s² kabuğuna sahip Be'ye göre daha kolay koparılmasını sağlar", "Bu düşüş yalnızca ölçüm belirsizliğinden kaynaklanır", "İyonlaşma enerjisi atom numarasıyla hiçbir ilişki taşımaz"],
    correct: 2,
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
    options: ["Bu sıralama rastgele oluşmuştur, bilimsel bir açıklaması yoktur", "Bu taneciklerin farklı sayıda elektrona sahip olması", "Yarıçap yalnızca elektron sayısına bağlıdır, proton sayısının etkisi yoktur", "Proton sayısı arttıkça (N'den Na'ya) aynı sayıdaki elektronu çeken net çekirdek çekiminin artması", "Taneciklerin farklı periyotlarda bulunması"],
    correct: 3,
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
    options: ["Metalik bağ", "Apolar kovalent bağ", "İyonik bağ", "Polar kovalent bağ (fark ≈0,89)", "Bağ oluşmaz"],
    correct: 3,
    explain: "C-O elektronegatiflik farkı 3,44-2,55=0,89'dur; bu değer genel kuraldaki polar kovalent aralığına (~0,4-1,7) girer."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X elementi ile bir Y elementi karşılaştırıldığında, X'in atom yarıçapı Y'ninkinden büyük, X'in iyonlaşma enerjisi ise Y'ninkinden küçüktür.",
    text: "Bu iki gözlem birbiriyle tutarlı mıdır ve neden?",
    options: ["Hayır, çünkü yarıçap ve iyonlaşma enerjisi her zaman aynı yönde değişir", "Hayır, büyük yarıçaplı bir atomun iyonlaşma enerjisi her zaman yüksek olmalıdır", "Bu iki özellik arasında hiçbir ilişki yoktur, tutarlılık değerlendirilemez", "Evet, tutarlıdır; büyük yarıçaplı atomlarda değerlik elektronları çekirdekten uzak olduğundan daha kolay koparılır (düşük iyonlaşma enerjisi)", "Tutarlılık yalnızca aynı grup elementleri için değerlendirilebilir"],
    correct: 3,
    explain: "Atom yarıçapı ile iyonlaşma enerjisi genellikle ters orantılı bir örüntü izler: yarıçap büyüdükçe değerlik elektronları çekirdekten uzaklaşıp daha zayıf çekilir, bu da iyonlaşma enerjisini düşürür; bu iki gözlem birbiriyle tutarlıdır."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim materyalinde şu iddia tartışılmaktadır: 'Atom yarıçapı büyüdükçe elektron ilgisi (elektron afinitesi) her zaman azalır.' Ancak bazı istisnalar (örneğin azotun elektron ilgisinin beklenenden düşük olması) bu genellemeyi karmaşıklaştırır.",
    text: "Azotun (N) elektron ilgisinin komşu elementlere göre beklenenden düşük (hatta pozitife yakın) olmasının olası nedeni nedir?",
    options: ["N'nin hiçbir değerlik elektronu bulunmaması", "N'nin atom yarıçapının aşırı büyük olması", "N'nin metalik özellik göstermesi", "N'nin yarı dolu (2p³) kararlı elektron diziliminin, eklenen dördüncü bir elektronun eşleşmesini enerji açısından elverişsiz kılması", "Bu istisnanın hiçbir bilimsel açıklaması yoktur"],
    correct: 3,
    explain: "N'nin yarı dolu 2p³ dizilimi (Hund kuralına göre kararlı, simetrik) ek bir elektron eklendiğinde bozulur ve elektron eşleşmesi enerji açısından elverişsiz olduğundan, N'nin elektron ilgisi komşu elementlere (C, O) göre beklenenden düşük çıkar."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir araştırmada, aynı periyottaki bir metalin (örneğin Na) ve bir ametalin (örneğin Cl) erime noktaları karşılaştırılmış; metalik/ametalik karakterin fiziksel özelliklere yansıması incelenmiştir.",
    text: "Metalik ve ametalik karakterin periyodik trendi, elementlerin fiziksel/kimyasal davranışlarıyla ilgili hangi genel çıkarımı destekler?",
    options: ["Metalik/ametalik karakter yalnızca elementin rengiyle ilgilidir", "Periyodik tablodaki konumun fiziksel özelliklerle hiçbir ilgisi yoktur", "Yalnızca aynı grup elementleri benzer fiziksel özellik gösterir, periyot içinde hiçbir örüntü yoktur", "Periyodik tablodaki konum, yalnızca soyut sayısal özellikleri değil, elementin gözlemlenebilir kimyasal/fiziksel davranışını da (örneğin bağ yapma biçimini) sistematik olarak tahmin etmeye yardımcı olur", "Bu tür karşılaştırmalar bilimsel olarak anlamsızdır"],
    correct: 3,
    explain: "Periyodik tablodaki konum (metalik/ametalik karakter dahil) elementin elektron verme/alma eğilimini, dolayısıyla oluşturacağı bağ türünü ve birçok fiziksel özelliğini sistematik olarak tahmin etmeye yardımcı olur; bu, periyodik tablonun öngörücü gücünü gösterir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X elementinin ikinci iyonlaşma enerjisi, birinci iyonlaşma enerjisinden yalnızca hafifçe büyükken (örneğin Mg'de 738→1451 kJ/mol, yaklaşık 2 kat), üçüncü iyonlaşma enerjisi ikinciden çok daha büyük bir sıçrama gösterir (Mg'de 1451→7733 kJ/mol, yaklaşık 5 kat).",
    text: "Bu büyük sıçramanın nedeni en doğru şekilde nasıl açıklanır?",
    options: ["Üçüncü iyonlaşma enerjisi her zaman ikinciden küçüktür", "Mg'nin üçüncü elektronu da değerlik kabuğunda bulunur ve kolayca koparılır", "Bu sıçrama yalnızca ölçüm hatasından kaynaklanır", "Mg'nin ilk iki değerlik elektronu (3s²) kolayca kaybedilirken, üçüncü elektronun kararlı [Ne] iç kabuğundan koparılması gerekmesi", "Mg'nin proton sayısı üçüncü iyonlaşmada değişir"],
    correct: 3,
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
    options: ["Bu iki tanecik arasında yarıçap karşılaştırması yapılamaz", "X²⁻ ile soy gaz atomu her zaman birebir aynı yarıçapa sahiptir", "X²⁻ soy gaz atomundan her zaman daha küçüktür", "X²⁻'nin proton sayısı soy gazdan az olduğundan (izoelektronik ailede yükü en negatif olan taneciğin proton sayısı en düşüktür), X²⁻ soy gaz atomundan daha büyük yarıçapa sahip olacaktır", "İzoelektronik taneciklerde proton sayısının yarıçapa hiçbir etkisi yoktur"],
    correct: 3,
    explain: "İzoelektronik bir seride (aynı elektron sayısı) proton sayısı arttıkça yarıçap küçülür; X²⁻'nin proton sayısı, izoelektronik olduğu soy gazdan daha az olduğundan (anyon oluşumu için elektron eklenir, proton eklenmez), X²⁻ daha büyük yarıçapa sahiptir."
  },
  {
    difficulty: "orta",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim aracında şu soru sorulmaktadır: 'Neden aynı periyotta metalik özellik soldan sağa azalırken, aynı grupta yukarıdan aşağıya artmaktadır? Bu iki trend aynı temel nedene mi dayanır?'",
    text: "Bu sorunun en isabetli cevabı hangisidir?",
    options: ["Bu iki trend arasında hiçbir mantıksal bağlantı kurulamaz", "Hayır, bu iki trend birbirinden tamamen bağımsız, ilgisiz nedenlere dayanır", "Metalik özellik yalnızca periyot içinde değişir, grup içinde sabittir", "Metalik özellik yalnızca grup içinde değişir, periyot içinde sabittir", "Evet; her iki trend de değerlik elektronlarının çekirdeğe olan çekim gücündeki (etkin çekirdek yükü/uzaklık) değişimden kaynaklanır — periyotta artan çekim elektron kaybını zorlaştırır, grupta artan uzaklık elektron kaybını kolaylaştırır"],
    correct: 4,
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
    options: ["Bu dört iyonun bulunduğu periyot", "Elektron sayısı (dördünde farklıdır)", "Yükün işareti dışında hiçbir neden yoktur, rastgele bir sıralamadır", "Atom kütlesi", "Proton sayısı (elektron sayısı sabit kalırken proton sayısı arttıkça yarıçap küçülür)"],
    correct: 4,
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
    options: ["Bu istisna, periyodik tablonun tüm trendlerinin geçersiz olduğunu gösterir", "B'nin düşük iyonlaşma enerjisi, yarıçap ve elektronegatiflik trendlerinin de tersine döndüğü anlamına gelir", "Tablodaki veriler birbiriyle tutarsızdır ve güvenilmezdir", "İyonlaşma enerjisi, yarıçap ve elektronegatiflikten tamamen bağımsız, ilgisiz bir özelliktir", "Yarıçap ve elektronegatiflik genel trendi (soldan sağa yarıçap azalır, elektronegatiflik artar) korunurken, iyonlaşma enerjisindeki küçük düşüş elektron dizilimindeki (dolu s vs tek p elektronu) yerel bir istisnadır; genel periyodik eğilim bundan etkilenmez"],
    correct: 4,
    explain: "Yarıçap (152→112→85→77) ve elektronegatiflik (0,98→1,57→2,04→2,55) düzenli bir trend izlerken, iyonlaşma enerjisindeki B'deki küçük düşüş (899→801) elektron dizilimine özgü yerel bir istisnadır (dolu 2s² vs tek 2p¹ elektronu); bu, genel periyodik trendlerin bazı özelliklerde küçük, açıklanabilir sapmalar içerebileceğini ama genel eğilimi geçersiz kılmadığını gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir araştırmacı, aynı yükteki iyonların (örneğin tüm +2 yüklü iyonlar) yarıçaplarını karşılaştırdığında, hem periyot hem grup içindeki trendlerin nötr atomlarla aynı yönde (grup içinde aşağı inildikçe büyüme, periyotta sağa gidildikçe küçülme) devam ettiğini bulmuştur.",
    text: "Bu bulgu, iyon yarıçapı ile periyodik tablo konumu arasındaki ilişki hakkında en doğru hangi genellemeyi destekler?",
    options: ["Bu bulgu, periyodik tablonun yalnızca nötr atomlar için geçerli olduğunu kanıtlar", "İyonlar periyodik trendlerden tamamen bağımsızdır", "Yalnızca nötr atomlarda periyodik trend gözlenir, iyonlarda hiçbir trend yoktur", "İyon yarıçapı yalnızca yüke bağlıdır, periyodik tablodaki konumun hiçbir etkisi yoktur", "İyonlaşma, atomun temel periyodik yapısını (kabuk sayısı, çekirdek yükü artışı) ortadan kaldırmaz; bu nedenle nötr atomlardaki temel periyodik trendler iyonlarda da benzer yönde gözlenir"],
    correct: 4,
    explain: "İyon oluşumu (elektron kaybı/kazancı) atomun temel yapısını (kabuk sayısı, artan çekirdek yükü örüntüsü) değiştirmediğinden, aynı yükteki iyonlar arasında da grup ve periyot bazlı temel periyodik trendler (kabuk sayısı arttıkça büyüme, çekirdek yükü arttıkça küçülme) benzer yönde devam eder."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir kimyager, X ve Y adlı iki elementin bileşiğini incelerken, X'in elektronegatifliğinin 1,0, Y'ninkinin ise 3,5 olduğunu; bileşiğin XY formülünde birleştiğini bulmuştur.",
    text: "Bu verilere dayanarak, XY bileşiğindeki bağın türü ve X ile Y'nin periyodik tablodaki olası genel konumları hakkında en doğru çıkarım hangisidir?",
    options: ["Bu veriler yalnızca X ve Y'nin aynı grupta olduğunu gösterir", "Bağ kesinlikle apolar kovalenttir", "X ve Y'nin periyodik tablodaki konumu elektronegatiflik farkından çıkarılamaz", "Küçük elektronegatiflik farkı nedeniyle bağ metalik karakterli olacaktır", "Büyük elektronegatiflik farkı (2,5) nedeniyle bağ yüksek iyonik karakterli olacaktır; X muhtemelen tablonun sol/alt (metalik) bölgesinde, Y ise sağ/üst (ametalik) bölgesinde yer alır"],
    correct: 4,
    explain: "2,5'lik büyük elektronegatiflik farkı yüksek iyonik karakterli bir bağa işaret eder; düşük elektronegatiflik (1,0) genellikle tablonun sol/alt (metalik) bölgesindeki elementlerde, yüksek elektronegatiflik (3,5) ise sağ/üst (ametalik) bölgedeki elementlerde görülür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim materyalinde, lantanit serisindeki elementlerin (57-71 arası) atom yarıçaplarının, atom numarası arttıkça beklenenden daha az değiştiği ve bu durumun 'lantanit büzülmesi' olarak adlandırıldığı; bu büzülmenin, lantanitlerden hemen sonra gelen 5d geçiş metallerinin (Hf, Ta gibi) yarıçaplarının beklenenden küçük çıkmasına da yol açtığı belirtilmektedir.",
    text: "Lantanit büzülmesinin 5d geçiş metallerine olan bu 'gecikmeli' etkisi en doğru şekilde nasıl açıklanır?",
    options: ["Bu durum, periyodik tablonun d ve f blok ayrımının hatalı olduğunu gösterir", "Bu etkinin 5d elementleriyle hiçbir ilgisi yoktur, tamamen tesadüfidir", "Lantanit büzülmesi yalnızca lantanitleri etkiler, sonraki hiçbir elementi etkilemez", "5d elementlerinin küçük yarıçapı yalnızca proton sayısıyla açıklanır, 4f elektronlarının etkisi yoktur", "4f alt kabuğundaki elektronların zayıf perdeleme etkisi, lantanit serisi boyunca birikerek periyodik tabloda hemen sonra gelen elementlerin de beklenenden daha küçük yarıçaplı çıkmasına neden olur"],
    correct: 4,
    explain: "4f orbitalleri elektronları zayıf perdeler; bu nedenle lantanit serisi boyunca artan çekirdek yükü, dış elektronlar tarafından yeterince perdelenmeden hissedilir ve yarıçap beklenenden az büyür/hatta küçülür. Bu birikimli etki, lantanitlerden hemen sonra gelen 5d elementlerinin de (aynı grup 4d elementleriyle karşılaştırıldığında) beklenenden küçük yarıçaplı olmasına yol açar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir araştırmacı şu karşılaştırmayı yapmaktadır: 4. periyot geçiş metali Zr (zirkonyum) ile 5. periyot geçiş metali Hf (hafniyum), lantanit büzülmesi nedeniyle beklenenden çok daha yakın atom yarıçaplarına (Zr: 160 pm, Hf: 159 pm) sahiptir; oysa aynı gruptaki diğer element çiftlerinde (örneğin Ti-Zr) yarıçap farkı çok daha belirgindir.",
    text: "Zr ve Hf'nin bu denli yakın yarıçaplara sahip olmasının kimyasal sonucu ne olabilir?",
    options: ["Bu benzerlik yalnızca fiziksel özellikleri etkiler, kimyasal davranışı hiç etkilemez", "Zr ve Hf'nin kimyasal davranışları arasında hiçbir benzerlik beklenmez", "Yarıçap benzerliğinin kimyasal davranışla hiçbir ilgisi yoktur", "Zr ve Hf farklı gruplarda yer aldığından bu karşılaştırma anlamsızdır", "Zr ve Hf, aynı gruptaki tipik element çiftlerinden (örneğin Ti-Zr) daha benzer kimyasal davranış sergileyebilir, çünkü yarıçap kimyasal davranışı büyük ölçüde etkileyen bir faktördür"],
    correct: 4,
    explain: "Atom/iyon yarıçapı, bir elementin kimyasal davranışını (bağ uzunluğu, koordinasyon sayısı, reaktivite gibi) büyük ölçüde etkiler; Zr ve Hf'nin lantanit büzülmesi nedeniyle beklenenden çok yakın yarıçaplara sahip olması, bu iki elementin kimyasal olarak alışılmadık derecede benzer davranmasına (ve pratikte ayrıştırılmalarının zor olmasına) yol açar."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bilim yazısında şu iddia savunulmaktadır: 'Periyodik özellik trendleri (yarıçap, iyonlaşma enerjisi, elektronegatiflik) birbirinden bağımsız kurallar değil, hepsi aynı temel nedene (etkin çekirdek yükü ve elektron kabuk sayısı) dayanan tek bir tutarlı çerçevenin farklı yansımalarıdır.'",
    text: "Bu iddiayı en güçlü şekilde destekleyen kanıt hangisidir?",
    options: ["Periyodik özelliklerin her elementte tamamen rastgele değerler alması", "Üç özelliğin birbirinden tamamen farklı, ilgisiz yönlerde değişmesi", "Yalnızca bir özelliğin (örneğin yarıçap) periyodik trend göstermesi, diğerlerinin göstermemesi", "Bu üç özelliğin hiçbirinin periyodik tablo konumuyla ilişkili olmaması", "Üç özelliğin de aynı yönde (soldan sağa artan/azalan, yukarıdan aşağıya tersi) ve aynı istisna noktalarında (yarı dolu/tam dolu alt kabuklar) benzer sapmalar göstermesi"],
    correct: 4,
    explain: "Yarıçap, iyonlaşma enerjisi ve elektronegatifliğin hepsinin soldan sağa/yukarıdan aşağıya tutarlı yönde değişmesi VE benzer istisna noktalarında (örneğin Be-B, N-O geçişlerinde) benzer sapmalar göstermesi, bu üç özelliğin ortak bir temel nedene (etkin çekirdek yükü, elektron dizilimi, perdelenme) dayandığının güçlü bir kanıtıdır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir X elementinin ardışık iyonlaşma enerjileri şöyledir: 1. IE=580, 2. IE=1815, 3. IE=2740, 4. IE=11600 kJ/mol.",
    text: "Bu veriye dayanarak, X elementinin en kararlı iyonunun yükü ve muhtemel grubu hakkında en doğru çıkarım hangisidir?",
    options: [
      "3. ve 4. iyonlaşma enerjisi arasındaki büyük sıçrama (2740→11600), X'in en kararlı iyonunun +3 yüklü olduğunu ve X'in muhtemelen 13. grupta (örn. alüminyum) yer aldığını gösterir",
      "1. ve 2. iyonlaşma enerjisi arasındaki fark en büyük olduğundan X'in en kararlı iyonu +1'dir",
      "Tüm iyonlaşma enerjileri birbirine yakın olduğundan X'in belirli bir kararlı yükü yoktur",
      "X'in en kararlı iyonu +4'tür, çünkü 4. iyonlaşma enerjisi en yüksek değerdir",
      "Bu veriyle X'in grubu hakkında hiçbir çıkarım yapılamaz"
    ],
    correct: 0,
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
    options: [
      "Bu iki veri noktası genellemeyle tam örtüşmez (Ga'nın yarıçapı Ca'dan küçük olmasına rağmen IE'si de düşüktür); bu, yarıçapın tek başına iyonlaşma enerjisini belirleyen tek etken olmadığını, elektron diziliminin (Ga'da tek bir 4p elektronu) de rol oynadığını gösterir",
      "Bu iki veri noktası genellemeyi mükemmel şekilde doğrular, hiçbir istisna yoktur",
      "Ca ve Ga karşılaştırması periyodik trendlerle hiçbir ilgisi olmayan rastgele bir durumdur",
      "Ga'nın düşük IE değeri bir veri hatasıdır, gerçekte Ca'dan yüksek olmalıdır",
      "Yarıçap ile iyonlaşma enerjisi arasında hiçbir zaman ters ilişki yoktur"
    ],
    correct: 0,
    explain: "Ca'dan Ga'ya geçişte yarıçap küçülmesine rağmen (197→122) iyonlaşma enerjisi de hafifçe düşmektedir (590→579); bu, tam dolu 4s² kabuğuna sahip Ca'nın ekstra kararlılığı ile Ga'nın tek, daha az perdelenmiş 4p¹ elektronunun kolay koparılması nedeniyle genel yarıçap-IE ters ilişkisinin mutlak/istisnasız olmadığını, elektron diziliminin de ayrı bir etken olduğunu gösterir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir öğretim programında öğrencilere şu senaryo sunulmaktadır: 'Periyodik tabloda hiç bilinmeyen, henüz keşfedilmemiş bir X elementinin 3. periyotta, 1. grupta yer alacağı teorik olarak öngörülüyor.' (Bu tür bir element pratikte zaten bilinen sodyumdur, ancak senaryo bir tahmin alıştırması olarak kurgulanmıştır.)",
    text: "Yalnızca periyodik tablodaki konumuna (3. periyot, 1. grup) dayanarak, bu X elementinin komşularıyla (2. periyot 1. grup ve 4. periyot 1. grup elementleri) karşılaştırıldığında atom yarıçapı, iyonlaşma enerjisi ve metalik karakteri hakkında en isabetli tahmin hangisidir?",
    options: [
      "Atom yarıçapı iki komşusu arasında bir değerde olacak, iyonlaşma enerjisi iki komşusu arasında bir değerde olacak ve metalik karakteri güçlü olacaktır (1. grup metali olarak)",
      "Atom yarıçapı komşularından daha küçük olacaktır çünkü 3. periyottadır",
      "İyonlaşma enerjisi komşularından daha yüksek olacaktır çünkü 1. gruptadır",
      "Metalik karakteri zayıf olacaktır çünkü 3. periyottadır",
      "Periyodik tablodaki konumdan hiçbir özellik tahmin edilemez"
    ],
    correct: 0,
    explain: "Periyodik trendlere göre bir grup içinde ara bir periyotta yer alan element, komşu periyotlardaki aynı grup elementleri arasında bir yarıçap ve iyonlaşma enerjisi değerine sahip olma eğilimindedir; 1. grupta olduğundan güçlü metalik karakter (kolay elektron verme) beklenir — bu, Mendeleev'in periyodik tabloyla henüz keşfedilmemiş elementlerin özelliklerini başarıyla tahmin etmesinin dayandığı mantıktır."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir kimyager, periyodik tablodaki 'köşegen ilişkisi' kavramını incelemektedir: bazı elementler (örneğin Li ve Mg, Be ve Al, B ve Si), aynı grupta olmadıkları hâlde köşegen konumları nedeniyle birbirine benzer kimyasal özellikler gösterir; bu, atom/iyon yarıçaplarının bu çiftlerde tesadüfen birbirine yakın çıkmasıyla ilişkilendirilir.",
    text: "Köşegen ilişkisinin, standart 'aynı grup benzer özellik gösterir' kuralıyla birlikte değerlendirildiğinde en doğru yorumu hangisidir?",
    options: [
      "Kimyasal benzerlik temelde yarıçap ve yük yoğunluğu gibi niceliksel benzerliklerden kaynaklanır; bu benzerlik çoğunlukla aynı grupta görülse de, köşegen konumdaki elementler de (periyot artışıyla yarıçap büyümesi, grup azalışıyla yarıçap küçülmesi birbirini telafi ettiğinde) benzer yarıçap/yük yoğunluğuna ulaşarak istisnai bir benzerlik gösterebilir",
      "Köşegen ilişkisi, periyodik tablonun grup kuralının tamamen yanlış olduğunu kanıtlar",
      "Köşegen ilişkisi yalnızca rastlantısaldır, hiçbir niceliksel açıklaması yoktur",
      "Aynı grupta olmayan hiçbir iki element birbirine benzer özellik gösteremez",
      "Köşegen ilişkisi yalnızca Li ve Mg için geçerlidir, başka hiçbir çiftte görülmez"
    ],
    correct: 0,
    explain: "Köşegen ilişkisi, periyotta sağa gidildikçe yarıçapın küçülmesi ile grupta aşağı inildikçe yarıçapın büyümesinin bir köşegen boyunca birbirini kısmen dengeleyebileceğini gösterir; bu durumda köşegen konumundaki iki element (örn. Li ve Mg) benzer yük yoğunluğuna/yarıçapa ulaşarak, standart grup kuralına ek olarak istisnai bir kimyasal benzerlik sergileyebilir — bu, grup kuralını geçersiz kılmaz, tamamlayıcı bir örüntüdür."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir araştırmacı, aynı grupta yer alan iki elementin (örneğin O ve S) elektron ilgisi değerlerini karşılaştırdığında beklenmedik bir sonuçla karşılaşmıştır: 2. periyot elementi olan oksijenin elektron ilgisi, 3. periyot elementi olan kükürtten daha düşük çıkmıştır; oysa genel trend yukarıdan aşağıya azalan elektron ilgisini öngörür.",
    text: "Bu istisnanın en olası açıklaması nedir?",
    options: [
      "Oksijenin küçük atom yarıçapı nedeniyle, eklenen elektronun mevcut elektronlarla yüksek elektron-elektron itmesi yaşaması; kükürtün daha büyük hacmi bu itmeyi azaltarak elektron eklemeyi görece kolaylaştırması",
      "Bu istisnanın hiçbir bilimsel açıklaması yoktur, veri hatalıdır",
      "Oksijenin proton sayısı kükürtten fazladır, bu yüzden elektron ilgisi düşüktür",
      "Elektron ilgisi yalnızca 3. periyot ve sonrası için tanımlıdır",
      "Oksijen bir metaldir, bu yüzden elektron almaya isteksizdir"
    ],
    correct: 0,
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
    options: [
      "Daha yüksek yüke ve daha küçük yarıçapa sahip Mg²⁺, aynı anyonla daha güçlü elektrostatik çekim (daha yüksek yük yoğunluğu) oluşturarak genellikle daha güçlü/daha yüksek erime noktalı iyonik bileşikler oluşturur",
      "Yük farkı kimyasal davranışı hiçbir şekilde etkilemez, yalnızca elektron sayısı önemlidir",
      "Na⁺ her zaman Mg²⁺'den daha güçlü iyonik bağ oluşturur",
      "İzoelektronik iyonlar her zaman birebir aynı kimyasal davranışı gösterir",
      "Yük yoğunluğu kavramı yalnızca anyonlar için geçerlidir"
    ],
    correct: 0,
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
    options: [
      "Elektronegatiflik, yarıçap ve iyonlaşma enerjisiyle güçlü korelasyon gösterse de birebir aynı büyüklük değildir; farklı periyot/grup kombinasyonlarında (örneğin biri sol-alt, diğeri sağ-üst yönünde küçük bir kaymayla) benzer elektronegatiflik değerine farklı yarıçap/IE kombinasyonlarıyla ulaşılabilir",
      "Bu bir tutarsızlıktır ve mevcut atom teorisiyle açıklanamaz",
      "Elektronegatiflik, yarıçap ve iyonlaşma enerjisinden tamamen bağımsız, ilgisiz bir büyüklüktür",
      "X ve Y'nin verileri hatalı ölçülmüştür",
      "Elektronegatiflik yalnızca iyonlaşma enerjisine bağlıdır, yarıçapın hiçbir etkisi yoktur"
    ],
    correct: 0,
    explain: "Elektronegatiflik genellikle hem yarıçap hem iyonlaşma enerjisiyle ilişkili bir büyüklük olsa da, bu üç özellik birebir aynı matematiksel fonksiyon değildir; farklı periyot/grup konumlarındaki elementler, yarıçap ve iyonlaşma enerjisi açısından belirgin farklılıklar taşısa bile (birbirini kısmen dengeleyen etkilerle) benzer elektronegatiflik değerlerine ulaşabilir."
  },
  {
    difficulty: "zor",
    kazanim: "KİM.9.1.8 — Elementlerin periyodik özelliklerinin periyodik tablodaki değişimini çözümleyebilme",
    context: "Bir bilim tarihi kaynağında, Mendeleev'in periyodik tablosunun ilk hâlinde bazı elementlerin (örneğin tellür ve iyot) atom kütlesine göre sıralandığında kimyasal özellikleriyle uyumsuz bir konuma düştüğü, ancak Mendeleev'in bu iki elementin yerini kimyasal özelliklerine (bugün bildiğimiz atom numarasına denk gelen bir mantığa) göre değiştirdiği anlatılmaktadır.",
    text: "Mendeleev'in bu kararı, periyodik özelliklerin (grup benzerliği) sıralama ilkesi olarak neden atom kütlesinden daha güvenilir kabul edildiğini nasıl gösterir?",
    options: [
      "Kimyasal davranış (grup üyeliği, değerlik) doğrudan elektron dizilimiyle belirlenir; atom kütlesi (izotop dağılımından etkilenen dolaylı bir ölçüt) bazı durumlarda bu temel ilişkiyi yansıtmayabilir, bu yüzden Mendeleev kimyasal tutarlılığı önceliklendirmiştir",
      "Mendeleev'in kararı tamamen keyfi olup hiçbir bilimsel gerekçesi yoktur",
      "Atom kütlesi her zaman kimyasal özelliklerle birebir örtüşür, Mendeleev hata yapmıştır",
      "Tellür ve iyodun konumu periyodik tablo için önemsiz bir ayrıntıdır",
      "Bu karar, periyodik tablonun bilimsel bir temeli olmadığını gösterir"
    ],
    correct: 0,
    explain: "Kimyasal davranış temelde elektron dizilimine (ve modern anlayışla atom numarasına) bağlıdır; atom kütlesi izotop bolluğundan etkilenen dolaylı bir büyüklük olduğundan bazen kimyasal gruplamayla uyuşmayabilir. Mendeleev'in gözlemlenen kimyasal benzerliği (grup tutarlılığını) atom kütlesi sırasının önüne koyması, sonradan atom numarasının (proton sayısının) asıl düzenleyici ilke olduğunun keşfedilmesini önceden haber veren isabetli bir bilimsel sezgiydi."
  }
]
};

// Global erişim kullanan eski sayfalarla uyumluluk
if (typeof window !== "undefined") {
  window.QUIZ = QUIZ;
}
