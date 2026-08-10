/* =========================================================
   AtomLab 9 — quiz-data.js
   Bağlam temelli, düşündüren değerlendirme soruları
   (KİM.9.1.1 – KİM.9.1.8 ile sınırlıdır). Her soru 5 seçenekli;
   doğru cevabın konumu sorular arasında kasıtlı olarak değiştirilir.
   ========================================================= */

export const QUIZ = {
  gunluk: [
    {
      context: "Doğada Su Filtresi",
      text: "Doğada kamp yapan bir grup, boş bir pet şişeye sırasıyla çakıl, kum, odun kömürü ve bir kumaş parçası yerleştirerek bulanık akarsu suyunu bu düzenekten geçiriyor. Elde edilen su daha berrak görünüyor. Bu işlemde suyun içindeki katı parçacıkların ayrılması hangi türde bir süreçtir?",
      options: ["Kimyasal değişim, çünkü suyun rengi değişmiştir", "Fiziksel bir ayırma işlemi, çünkü suyun kimliği (H₂O olması) değişmemiştir", "Yeni bir madde sentezi, çünkü kömür suya karışmıştır", "Biyokimyasal bir tepkime, çünkü doğal malzemeler kullanılmıştır", "Bu işlem kimya biliminin konusu değildir"],
      correct: 1,
      explain: "Çakıl-kum-kömür-kumaş katmanlarından geçirme, suyun kimliğini değiştirmeden katı parçacıkları tutan fiziksel bir süzme işlemidir; kimya bilgisi böyle günlük hayatta hayatta kalma becerilerine bile katkı sağlar.",
    },
    {
      context: "Sınırlı Malzemeyle Ateş Yakma",
      text: "Doğada kamp yapan bir kişinin yanında sadece kolonya, aseton ve bir miktar yağ bulunuyor; kibrit veya çakmaktan başka hiçbir ateşleme aracı yoktur ama bu üç malzemeden biriyle ateşi başlatabiliyor. Bu üç malzemenin ateş yakmada işe yaramasını sağlayan ortak özellik nedir?",
      options: ["Üçünün de suda çözünmesi", "Üçünün de yanıcı (tutuşabilir) kimyasal özellik taşıması", "Üçünün de sıvı hâlde olması", "Üçünün de kokulu olması", "Üçünün de doğal kaynaklı olması"],
      correct: 1,
      explain: "Kolonya, aseton ve yağ; yanıcı özellikleri sayesinde tutuşabilir ve alevi bir süre besleyebilir. Sıvı olmak veya kokulu olmak, tutuşma davranışını açıklamaz.",
    },
    {
      context: "Elektronik Cihazların Ortak Sırrı",
      text: "Bir bilgisayarın veri işlemesi, bir telefonun şarj olması ve bir televizyon ekranının ışıldaması — birbirinden çok farklı görünen bu üç olay, temelde hangi ortak mekanizmaya dayanır?",
      options: ["Üçü de aynı yazılımı kullanır", "Üçü de atomların yapısındaki elektronların hareketine dayanır", "Üçü de yalnızca mekanik parçaların hareketiyle çalışır", "Üçü de manyetik alan gerektirmez", "Üçü de sadece ışık enerjisiyle çalışır"],
      correct: 1,
      explain: "Bilgisayarların işlemesi, telefonların şarj olması ve ekranların ışıldaması, atomun yapısındaki elektronların hareketine dayanır; bu da kimya biliminin (ve atom yapısının) günlük teknolojideki görünmez izidir.",
    },
    {
      context: "Bir Ürünün Etiketini Okumak",
      text: "Bir öğrenci, ambalajlı içme suyu şişesinin etiketindeki mineral içerik tablosunu inceleyip bunu bitkilerden/doğal kaynaklardan elde edilen suyla karşılaştırmak istiyor. Bu karşılaştırmayı yaparken hangi bilgi türüne öncelikle ihtiyaç duyar?",
      options: ["Şişenin üretildiği fabrikanın adı", "Suyun içindeki çözünmüş madde (mineral) miktarları gibi ölçülebilir kimyasal veriler", "Şişenin rengi ve şekli", "Suyun satıldığı marketin konumu", "Şişenin plastik türünün marka logosu"],
      correct: 1,
      explain: "İki farklı su kaynağını karşılaştırmak, mineral/çözünmüş madde miktarları gibi ölçülebilir kimyasal verilere dayanır; bu da kimya biliminin günlük hayattaki karşılaştırma ve karar verme süreçlerine katkısını gösterir.",
    },
    {
      context: "Plastik Atık Sorunu",
      text: "Bir haberde, günümüzde giderek büyüyen bir çevre sorunu olarak plastik atıkların doğada uzun süre bozunmadan kalmasından bahsediliyor. Bu sorunun çözümüne yönelik (biyobozunur malzeme geliştirme gibi) çalışmalar hangi bilim dalının doğrudan katkı alanına girer?",
      options: ["Yalnızca coğrafya biliminin", "Kimya biliminin, çünkü malzemelerin yapısını ve özelliklerini değiştirerek çözüm üretir", "Yalnızca tarih biliminin", "Hiçbir bilim dalının, bu tamamen bir yönetim sorunudur", "Yalnızca güzel sanatların"],
      correct: 1,
      explain: "Kimya bilimi, maddelerin yapısını inceleyip yeni özelliklere sahip (örn. biyobozunur) malzemeler geliştirerek plastik atık gibi günlük hayat sorunlarına çözüm odaklı yaklaşımlar sunar.",
    },
  ],

  disiplin: [
    {
      context: "İlaç Fabrikasında Bir Gün",
      text: "Bir ilaç fabrikasında çalışan bir uzman, önce örnek numunelerin bileşimini ve numunedeki kimyasal maddelerin miktarını belirliyor; daha sonra bitkisel kökenli etken maddeler kullanarak yeni ilaçlar sentezliyor. Bu iki aşama sırasıyla hangi kimya disiplinlerini yansıtır?",
      options: ["Fizikokimya ve polimer kimyası", "Analitik kimya ve organik kimya", "Anorganik kimya ve biyokimya", "Polimer kimyası ve analitik kimya", "Organik kimya ve fizikokimya"],
      correct: 1,
      explain: "Numunenin bileşimini ve miktarını belirlemek analitik kimyanın (nitel/nicel analiz), bitkisel etken maddelerden yeni bileşikler sentezlemek ise organik kimyanın çalışma alanına girer.",
    },
    {
      context: "İlacın Vücutta Çözünmesi",
      text: "Aynı ilaç fabrikasındaki uzman, sentezlediği bir ilacın etken maddesinin hem suda hem de portakal suyunda çözünme hızını incelemek istiyor. Bu inceleme öncelikle hangi kimya disiplininin uzmanlık alanına girer?",
      options: ["Analitik kimya, çünkü herhangi bir ölçüm analitik kimyadır", "Fizikokimya, çünkü çözünme hızı fiziksel koşullara (derişim, sıcaklık vb.) bağlı bir süreçtir", "Polimer kimyası, çünkü çözelti büyük moleküllerden oluşur", "Biyokimya, çünkü konu insan sağlığıyla ilgilidir", "Anorganik kimya, çünkü su bir anorganik bileşiktir"],
      correct: 1,
      explain: "Bir maddenin çözünme hızı gibi fiziksel koşullara bağlı süreçlerin incelenmesi fizikokimyanın konusudur; fizikokimya, kimyasal sistemlerin fiziksel faktörlere (derişim, sıcaklık, basınç) bağlı davranışını inceler.",
    },
    {
      context: "Kan Tahlili Sonucu",
      text: "Bir sağlık kuruluşunda bir kişinin kan örneğindeki şeker ve kolesterol miktarları ölçülüyor; sonuçlar sayısal değerler (mg/dL) olarak raporlanıyor. Bu ölçüm süreci hangi analiz türüne örnektir?",
      options: ["Nitel (kalitatif) analiz, çünkü sadece hangi maddenin var olduğu belirlenir", "Nicel (kantitatif) analiz, çünkü bileşenlerin miktarı sayısal olarak belirlenir", "Ne nitel ne nicel analizdir, çünkü tıbbi bir işlemdir", "Sadece fizikokimyasal bir ölçümdür, analiz sayılmaz", "Organik kimya deneyi, çünkü kan organik bir sıvıdır"],
      correct: 1,
      explain: "Bir maddenin (burada şeker/kolesterolün) miktarının sayısal olarak belirlenmesi nicel (kantitatif) analizdir; hangi maddenin var olduğunu belirlemek ise nitel (kalitatif) analiz olurdu.",
    },
    {
      context: "Biyobozunur Ambalaj Geliştirme",
      text: "Bir araştırma ekibi, doğada kısa sürede parçalanabilen, büyük moleküllerden oluşan yeni bir ambalaj malzemesi geliştirmeye çalışıyor. Bu çalışma en doğrudan hangi kimya disipliniyle ilişkilidir?",
      options: ["Analitik kimya", "Polimer kimyası", "Fizikokimya", "Anorganik kimya", "Biyokimya"],
      correct: 1,
      explain: "Büyük moleküllerin (makromoleküllerin) sentezi, yapısı ve özellikleriyle ilgilenen disiplin polimer kimyasıdır; plastikler ve biyopolimerler bu alanın konusudur.",
    },
    {
      context: "Bir Yarı İletken Çip Projesi",
      text: "Bir mühendislik ekibi, elektronik cihazlarda kullanılacak yeni bir yarı iletken malzemenin (metal içermeyen, kristal yapılı bir bileşiğin) özelliklerini geliştirmeye çalışıyor. Karbon içermeyen bu bileşiğin özellikleriyle ilgilenmek hangi disiplinin konusudur?",
      options: ["Organik kimya, çünkü tüm malzemeler organik kimyanın konusudur", "Anorganik kimya, çünkü karbon içermeyen bileşiklerin (mineral, yarı iletken vb.) özellikleriyle ilgilenir", "Biyokimya, çünkü canlı sistemlerle ilgilidir", "Polimer kimyası, çünkü her malzeme bir polimerdir", "Bu konu hiçbir kimya disiplinine girmez"],
      correct: 1,
      explain: "Anorganik kimya; asit, baz, tuz, metal ve mineral gibi karbon içermeyen bileşiklerin özelliklerini inceler ve yarı iletken teknolojisi bu disiplinin uygulama alanlarından biridir.",
    },
  ],

  kariyer: [
    {
      context: "Bir Fabrikadaki Kalite Kontrol Analisti",
      text: "İki yıllık bir kimya teknolojisi ön lisans programını tamamlayan bir kişi, bir gıda fabrikasında ürünlerin bileşimini kontrol eden bir pozisyonda çalışmaya başlıyor. Bu kişinin unvanı ve eğitim düzeyi hakkında aşağıdakilerden hangisi doğrudur?",
      options: ["Kimya mühendisi unvanına sahiptir, çünkü dört yıllık program mezunudur", "Kimya teknikeri unvanına sahiptir; ön lisans programını tamamlamıştır", "Kimya öğretmeni unvanına sahiptir", "Hiçbir unvana sahip değildir, çünkü kimya alanında lisans eğitimi şarttır", "Polimer malzeme mühendisi unvanına sahiptir"],
      correct: 1,
      explain: "Kimya teknolojisi ön lisans programını tamamlayanlar kimya teknikeri unvanı alır ve laboratuvar teknikeri, kalite kontrol analisti gibi pozisyonlarda çalışabilir; kimyager/mühendis unvanları dört yıllık lisans programlarına aittir.",
    },
    {
      context: "Gastronomi ve Kimya",
      text: "Son yıllarda mutfak sanatları alanında, yemeklerin dokusunu ve tadını bilimsel yöntemlerle (örneğin sıcaklığın protein yapısına etkisini inceleyerek) geliştiren bir yaklaşım popülerleşiyor. Bu yaklaşımın gelişiminde en doğrudan hangi bilim dalının katkısından söz edilebilir?",
      options: ["Yalnızca sanat tarihinin", "Kimya biliminin, moleküler gastronomi kavramının gelişimine katkısıyla", "Yalnızca coğrafyanın, bölgesel yemek kültürü nedeniyle", "Hiçbir bilim dalının, bu tamamen deneyime dayalı bir zanaattır", "Yalnızca ekonominin"],
      correct: 1,
      explain: "Kimya bilimi, gastronominin bilimsel bir alan olma sürecine katkıda bulunarak moleküler gastronomi kavramının gelişimine yardımcı olmuştur.",
    },
    {
      context: "Su Arıtma Teknolojisi Geliştirmek",
      text: "Bir mühendis, kirli suyu içilebilir hâle getiren yeni bir arıtma sistemi tasarlamak üzere bir ekipte çalışıyor. Bu çalışma alanı, kimya kariyer sektörlerinden en çok hangisiyle örtüşür?",
      options: ["Kimya endüstrisi (boya, plastik üretimi)", "Çevre ve sürdürülebilirlik (atık yönetimi, su arıtma teknolojileri)", "Eğitim ve akademik çalışma", "Gıda ve içecek endüstrisi", "Agronomi ve tarım"],
      correct: 1,
      explain: "Atık yönetimi ve su arıtma teknolojileri, çevre ve sürdürülebilirlik sektörünün kapsamına girer; bu sektör yeşil teknolojilerin geliştirilmesini de içerir.",
    },
    {
      context: "Enerji Depolama Araştırması",
      text: "Bir araştırma grubu, elektrikli araçlarda kullanılacak yeni nesil pillerin enerji depolama kapasitesini artırmaya çalışıyor. Bu çalışma alanı hangi kariyer sektörüyle en doğrudan ilişkilidir?",
      options: ["Malzeme ve nanoteknoloji sektörüyle değil, yalnızca otomotiv sektörüyle", "Enerji sektörüyle (pil teknolojileri, enerji depolama sistemleri)", "Sağlık ve biyoteknoloji sektörüyle", "Eğitim ve akademik çalışma sektörüyle", "Agronomi ve tarım sektörüyle"],
      correct: 1,
      explain: "Pil teknolojileri, yakıt hücreleri ve enerji depolama sistemleri, enerji sektörünün kimya kariyer alanlarından biridir.",
    },
    {
      context: "Bir Bilim İnsanının Yolculuğu",
      text: "Tıp fakültesini bitirdikten sonra yurt dışında moleküler biyoloji alanında akademik çalışmalar yürüten ve yıllar sonra DNA onarım mekanizmaları üzerine yaptığı araştırmalarla bir bilim ödülü kazanan bir Türk bilim insanının kariyer yolu, aşağıdaki disiplin kombinasyonlarından en çok hangisiyle örtüşür?",
      options: ["Yalnızca anorganik kimya", "Tıp ve biyokimya/moleküler biyoloji", "Yalnızca polimer kimyası", "Yalnızca fizikokimya", "Yalnızca kimya endüstrisi"],
      correct: 1,
      explain: "Bu tanım, tıp eğitimi almış ve DNA onarımı üzerine biyokimya/moleküler biyoloji alanında çalışan, 2015 Nobel Kimya Ödülü'nü kazanan bir bilim insanının kariyer yolunu betimler.",
    },
  ],

  guvenlik: [
    {
      context: "Banyo Temizliğinde Bir Hata",
      text: "Bir kişi banyo temizliğinde önce tuz ruhu (hidroklorik asit çözeltisi) kullanıyor, ardından yüzeyi durulamadan üzerine çamaşır suyu (sodyum hipoklorit çözeltisi) döküyor. Kısa süre sonra ortamda boğucu, keskin kokulu bir gaz oluşuyor. Bu durumun en olası nedeni nedir?",
      options: ["İki ürünün de aynı renkte olması", "Asidik ve bazik özellikteki iki temizlik ürününün tepkimeye girerek zehirli klor gazı açığa çıkarması", "Tuz ruhunun kendiliğinden buharlaşması", "Çamaşır suyunun ışıkla tepkimeye girmesi", "Banyodaki nemin gaz oluşturması"],
      correct: 1,
      explain: "Hidroklorik asit (tuz ruhu) ile sodyum hipoklorit (çamaşır suyu) karıştığında zehirli klor gazı (Cl₂) açığa çıkar; bu yüzden farklı temizlik ürünleri asla gelişigüzel karıştırılmamalıdır.",
    },
    {
      context: "Laboratuvarda Sıvı Aktarma",
      text: "Bir öğrenci, laboratuvarda küçük hacimli bir sıvı kimyasalı bir kaptan diğerine aktarmak için pipeti ağzıyla çekerek kullanmaya çalışıyor. Bu davranışın en büyük riski nedir?",
      options: ["Pipetin kırılma riski artar", "Kimyasalın yanlışlıkla ağza/solunum yoluna kaçarak zehirlenmeye yol açması", "Sıvının rengi değişir", "Deney süresi uzar", "Kabın etiketi silinir"],
      correct: 1,
      explain: "Sıvılar pipetle aktarılırken kesinlikle puar kullanılmalı, asla ağızla çekilmemelidir; aksi hâlde kimyasal madde ağız veya solunum yoluyla vücuda girip zehirlenmeye yol açabilir.",
    },
    {
      context: "Asit Çözeltisi Hazırlama Sırası",
      text: "Bir öğrenci derişik bir asidi seyreltmek için önce suyu bir behere koyup üzerine yavaşça asit ekliyor; bir diğer öğrenci ise önce asidi behere koyup üzerine su döküyor. Güvenlik kuralına göre hangi öğrencinin yöntemi doğrudur ve neden?",
      options: ["İkinci öğrenci doğrudur, çünkü asit her zaman önce konmalıdır", "Birinci öğrenci doğrudur; asit, baget yardımıyla yavaşça suyun içine dökülerek seyreltilmelidir", "İkisi de yanlıştır, seyreltme işlemi hiç yapılmamalıdır", "İkisi de doğrudur, sıra önemli değildir", "Hiçbiri, çünkü asitler seyreltilmeden kullanılmalıdır"],
      correct: 1,
      explain: "Asit çözeltisi hazırlanırken asit, baget yardımıyla yavaşça suyun içine dökülüp seyreltilmelidir; tersi sırada (suyu asidin üzerine dökmek) sıçrama ve yanma riski çok daha yüksektir.",
    },
    {
      context: "Etiketi Belirsiz Bir Kap",
      text: "Bir öğrenci laboratuvarda üzerinde etiket bulunmayan bir kaptaki maddeyi tanımak için kabı açıp kokluyor ve tadına bakmayı düşünüyor. Bu davranış hangi açıdan tehlikelidir?",
      options: ["Sadece zaman kaybettirir, tehlikeli değildir", "Madde zehirli, tahriş edici veya korozif olabilir; koklama ve tatma vücuda zarar verebilir", "Kabın kırılmasına neden olur", "Yalnızca kabın etiketinin daha çok silinmesine yol açar", "Hiçbir riski yoktur çünkü laboratuvar ortamı güvenlidir"],
      correct: 1,
      explain: "Laboratuvardaki kimyasal maddeler yakından koklanmamalı ve tadına bakılmamalıdır; madde zehirli, tahriş edici veya korozif olabilir ve doğrudan sağlık zararına yol açabilir.",
    },
    {
      context: "Bir Etiketin Üzerindeki Sembol",
      text: "Bir kimyasal madde şişesinin etiketinde, canlı dokuyu tahrip eden ya da metali aşındıran maddeleri belirten bir uyarı sembolü bulunuyor. Bu sembolü gören bir kullanıcı hangi önlemi almalıdır?",
      options: ["Maddeyi doğrudan cilde sürebilir, semboller sadece bilgilendirme amaçlıdır", "Gözleri ve cildi korumak için özel önlemler almalı, koruyucu giysi giymeli ve maddeyi metallerden uzak tutmalıdır", "Maddeyi ateşe yakın tutarak test etmelidir", "Sembolü görmezden gelip normal şekilde kullanabilir", "Maddeyi açık havada koklayarak tanımaya çalışmalıdır"],
      correct: 1,
      explain: "Bu tanım korozif madde piktogramına aittir: canlı dokuyu tahrip eder ya da metali aşındırır/paslandırır; kullanıcı gözleri ve cildi korumalı, koruyucu giysi giymeli ve maddeyi metallerden uzak tutmalıdır.",
    },
  ],

  teori: [
    {
      context: "Altın Yaprak Deneyinin Şaşırtan Sonucu",
      text: "Bir deneyde, ince bir altın yaprağa gönderilen pozitif yüklü alfa parçacıklarının büyük çoğunluğu sapmadan doğrudan geçerken, çok küçük bir kısmı büyük açılarla geri sekiyor. Bu gözlem, o döneme kadar kabul gören 'pozitif yükün atom içinde eşit dağıldığı' modelini neden geçersiz kılmıştır?",
      options: ["Çünkü hiçbir parçacığın sapmaması beklenirdi", "Çünkü pozitif yük eşit dağılmış olsaydı hiçbir parçacığın büyük açıyla geri sekmemesi gerekirdi; geri sekme, yoğun ve küçük bir pozitif bölgenin (çekirdeğin) varlığına işaret eder", "Çünkü altın yaprak deneyleri sadece metallerde yapılabilir", "Çünkü alfa parçacıkları negatif yüklüdür", "Çünkü deney sonucu tamamen rastgeledir ve model üzerinde bir etkisi yoktur"],
      correct: 1,
      explain: "Pozitif yük atom içine eşit dağılmış olsaydı hiçbir parçacık büyük açıyla geri sekmemeliydi; gözlenen geri sekme, pozitif yükün küçük ve yoğun bir çekirdekte toplandığını gösterir — bu da Thomson modelini geçersiz kılıp Rutherford modelini doğurmuştur.",
    },
    {
      context: "Bir Atomun Işık Yayması",
      text: "Bir gaz deşarj tüpündeki atomlar dışarıdan enerji aldıktan sonra belirli renklerde ışık yayıyor. Bohr atom teorisine göre bu ışık yayma (emisyon) olayı elektronların hangi hareketiyle açıklanır?",
      options: ["Elektronların çekirdeğe düşmesiyle", "Enerji almış (uyarılmış) elektronların daha üst enerji seviyesinden temel hâldeki alt enerji seviyesine geri dönerken enerji fazlasını ışık olarak yaymasıyla", "Protonların yer değiştirmesiyle", "Nötronların parçalanmasıyla", "Atomun tamamen iyonlaşmasıyla"],
      correct: 1,
      explain: "Bohr teorisine göre elektron enerji soğurarak üst yörüngeye çıkar (absorbsiyon/uyarılma); daha sonra alt yörüngeye dönerken yörüngeler arasındaki enerji farkı kadar enerjiyi ışık olarak yayar (emisyon).",
    },
    {
      context: "Bohr Modelinin Açıklayamadığı Durum",
      text: "Bohr atom teorisi hidrojen atomunun davranışını başarıyla açıklarken, iki veya daha fazla elektronu olan atomlarda beklenenden farklı sonuçlar veriyor. Bu sınırlılığın altında yatan temel neden aşağıdakilerden hangisidir?",
      options: ["Bohr modeli sadece gazlar için geçerlidir", "Bohr modeli, elektronların belirli dairesel yörüngelerde hareket ettiğini varsayar; ancak Heisenberg belirsizlik ilkesine göre elektronun konumu ve hızı aynı anda kesin olarak bilinemez", "Çok elektronlu atomlarda proton sayısı değişkendir", "Bohr modeli yalnızca metaller için geliştirilmiştir", "Çok elektronlu atomlarda çekirdek yoktur"],
      correct: 1,
      explain: "Heisenberg'in belirsizlik ilkesine göre bir elektronun konumu ve hızı aynı anda kesin olarak belirlenemez; bu, Bohr modelinin öngördüğü kesin dairesel yörünge fikriyle çelişir ve modern (kuantum) modelin orbital kavramına yol açmıştır.",
    },
    {
      context: "CERN'deki Yeni Bulgular",
      text: "Bir haber, dünyanın en büyük parçacık çarpıştırıcısında yapılan deneylerin maddenin temel yapı taşları hakkında yeni veriler ortaya koyduğunu bildiriyor. Bu tür yeni deneysel bulguların atom teorisi üzerindeki olası etkisi için en doğru yaklaşım hangisidir?",
      options: ["Yeni bulgular önceki tüm bilgileri geçersiz kılar ve bilim baştan başlar", "Yeni kanıtlar, mevcut atom modelinin geliştirilmesine veya güncellenmesine yol açabilir; bilimsel bilgi kanıtlarla değişebilir bir yapıdadır", "Yeni bulgular atom teorisini hiçbir şekilde etkilemez, çünkü atom teorisi kesinleşmiştir", "Bu tür deneyler sadece mühendislik alanını ilgilendirir, kimyayı etkilemez", "Yeni bulgular yalnızca yeni element isimleri üretir"],
      correct: 1,
      explain: "Dalton'dan modern atom teorisine kadarki süreçte görüldüğü gibi, yeni deneysel kanıtlar bilimsel modellerin terk edilmesine değil, geliştirilmesine/güncellenmesine yol açar — bilimsel bilgi zamanla kanıtlarla değişebilir bir yapıdadır.",
    },
    {
      context: "Bir Atomun Kütlesi Nerede Toplanır?",
      text: "Bir proton ya da nötronun kütlesi bir elektronun kütlesinden yaklaşık 1836 kat fazladır ve çekirdek atomun kendi yarıçapının yaklaşık on binde biri kadar küçüktür. Bu iki bilgiden hangi çıkarım yapılabilir?",
      options: ["Atomun kütlesinin neredeyse tamamı, hacimce çok küçük olan çekirdekte yoğunlaşmıştır", "Atomun kütlesinin çoğu elektron bulutunda toplanmıştır", "Atomun tamamı boşluktan oluşur, kütlesi yoktur", "Proton ve elektron aynı kütleye sahiptir", "Çekirdek, atomun en büyük hacimli bölgesidir"],
      correct: 0,
      explain: "Proton ve nötronların elektrona göre çok daha ağır olması ve çekirdeğin son derece küçük olması birlikte değerlendirildiğinde, atomun kütlesinin neredeyse tamamının hacimce çok küçük bir bölgede (çekirdekte) yoğunlaştığı sonucuna varılır.",
    },
  ],

  orbital: [
    {
      context: "Bir Öğrencinin Çizdiği Orbital Şeması",
      text: "Bir öğrenci, 2p³ elektron dizilimine sahip bir alt kabuğu gösterirken üç 2p orbitalinden ikisini elektron çifti ile tam dolu, birini ise boş çizmiştir. Bu şema hangi ilkeyle çelişir?",
      options: ["Pauli dışlama ilkesiyle, çünkü orbitalde en fazla 2 elektron olabilir", "Hund kuralıyla, çünkü eş enerjili orbitaller önce birer elektronla tek tek dolmalıdır, hemen eşleşmemelidir", "Aufbau ilkesiyle, çünkü elektronlar 2p'den önce 3s'ye yerleşmelidir", "Hiçbir ilkeyle çelişmez, bu dizilim geçerlidir", "Kütlenin korunumu kanunuyla çelişir"],
      correct: 1,
      explain: "Hund kuralına göre eş enerjili orbitaller (üç 2p orbitali gibi) önce birer elektronla, aynı yönlü spinle tek tek doldurulur; üç elektronlu bir p alt kabuğunda üç orbitalin de tek elektronla dolu olması, hiçbirinin henüz eşleşmemiş olması beklenir.",
    },
    {
      context: "Beklenenden Farklı Bir Dizilim",
      text: "Bir öğretmen, 24 elektronlu bir atomun beklenen elektron diziliminin [Ar] 4s² 3d⁴ olması gerekirken, deneysel olarak gözlenen diziliminin [Ar] 4s¹ 3d⁵ olduğunu belirtiyor. Bu farkın en olası açıklaması nedir?",
      options: ["Deneysel ölçüm hatalıdır, doğrusu her zaman [Ar] 4s² 3d⁴'tür", "Yarı dolu (3d⁵) bir alt kabuğun getirdiği ekstra kararlılık, elektronun 4s'den 3d'ye kaymasını enerji açısından daha uygun kılar", "Bu atom radyoaktif olduğu için dizilimi kararsızdır", "4s orbitali bu atomda hiç dolmaz", "3d orbitali bu atomda mevcut değildir"],
      correct: 1,
      explain: "Krom (Cr) gibi bazı atomlarda, tam yarı dolu (d⁵) bir alt kabuğun küresel simetrisi ve elektron-elektron itmesinin azalması ekstra kararlılık sağlar; bu yüzden saf Aufbau öngörüsünden küçük bir sapma gözlenir.",
    },
    {
      context: "Bir Orbital Kutusundaki İki Ok",
      text: "Bir orbital şemasında tek bir kutuda (orbitalde) biri yukarı biri aşağı yönlü iki ok gösteriliyor. Bu gösterim hangi ilkenin doğrudan bir uygulamasıdır?",
      options: ["Hund kuralının, çünkü elektronlar önce ayrı ayrı yerleşmelidir", "Pauli dışlama ilkesinin, çünkü aynı orbitaldeki iki elektron zıt spinli olmalıdır", "Aufbau ilkesinin, çünkü elektronlar önce düşük enerjili orbitale yerleşir", "Kütlenin korunumu kanununun", "Bu gösterim hiçbir ilkeyle ilgili değildir, sadece estetik bir tercihtir"],
      correct: 1,
      explain: "Pauli dışlama ilkesine göre bir orbitalde en fazla 2 elektron bulunabilir ve bu iki elektronun spinleri zıt yönlü (biri yukarı, biri aşağı) olmalıdır.",
    },
    {
      context: "Elektron Dizilimini Sıfırdan Kurmak",
      text: "Bir öğrenci 15 elektronlu bir atomun elektron dizilimini yazarken önce 3p orbitaline, sonra 3s orbitaline elektron yerleştiriyor. Bu sıralama hangi ilkeye aykırıdır?",
      options: ["Hund kuralına, çünkü p orbitalleri s'den önce dolmalıdır", "Aufbau ilkesine, çünkü elektronlar enerjisi düşük orbitalden (3s) başlanarak, enerjisi daha yüksek orbitale (3p) doğru sırayla yerleştirilmelidir", "Pauli dışlama ilkesine, çünkü aynı orbitalde iki elektron kullanılmıştır", "Hiçbir ilkeye aykırı değildir, sıralama önemli değildir", "İzoelektronik kurala aykırıdır"],
      correct: 1,
      explain: "Aufbau ilkesine göre elektronlar önce enerjisi en düşük boş orbitalden başlayarak yerleştirilir; 3s orbitali 3p'den daha düşük enerjilidir, bu yüzden önce 3s dolmalıdır.",
    },
    {
      context: "Kararlı Bir Alt Kabuk",
      text: "Bir atomun son enerji düzeyindeki p orbitallerinin tamamı tek elektronla (yarı dolu) yerleşmiş durumda ve çekirdeğin çekim gücü bu orbitallere dengeli dağılmış. Bu durumda atomun bu alt kabuğu için ne söylenebilir?",
      options: ["Kararsızdır ve hemen elektron kaybeder", "Küresel simetri özelliği gösterir ve göreli olarak kararlıdır", "Bu durum hiçbir zaman gerçekleşmez", "Atomun kütlesi bu durumda değişir", "Bu durum sadece d orbitalleri için geçerlidir"],
      correct: 1,
      explain: "Çekirdeğin çekim gücü eş enerjili alt orbitallere dengeli dağıldığında (tam dolu ya da tam yarı dolu durumlarda olduğu gibi) atom küresel simetri gösterir ve göreli olarak daha kararlıdır.",
    },
  ],

  yerbulma: [
    {
      context: "Bir Elektron Diziliminden Adres Bulmak",
      text: "Bir elementin elektron dizilimi [Ar] 4s² 3d⁶ şeklindedir. Bu dizilime göre elementin periyodik tablodaki grup türü (A ya da B) hakkında ne söylenebilir?",
      options: ["A grubundadır, çünkü en yüksek enerji düzeyi 4'tür", "B grubundadır, çünkü dizilim d orbitaliyle bitmektedir", "Ne A ne B grubundadır, çünkü lantanit serisindedir", "Soy gazdır, çünkü son katman doludur", "Halojendir, çünkü 4s ve 3d toplamı 8'dir"],
      correct: 1,
      explain: "Elektron dizilimi d orbitaliyle bitiyorsa element B grubundadır; ns² (n-1)d⁶ dizilimi özel olarak 8B grubuna karşılık gelir.",
    },
    {
      context: "Aynı Aileden İki Element",
      text: "Bir element grubu, elektron dizilimleri sırasıyla ns¹ ile biten ve bileşiklerinde yalnızca +1 yüklü iyon oluşturan, su ile şiddetli tepkimeye giren yumuşak metalleri içerir. Bu grup hangisidir?",
      options: ["7A — Halojenler", "1A — Alkali metaller", "8A — Soy gazlar", "2A — Toprak alkali metaller", "3B — Geçiş metalleri"],
      correct: 1,
      explain: "1A grubu (alkali metaller, H hariç), elektron dizilimi ns¹ ile biter, bileşiklerinde yalnızca +1 yüklü iyon oluşturur ve su ile şiddetli tepkimeye girerek hidrojen gazı açığa çıkarır.",
    },
    {
      context: "Neden Kararlı Kalıyor?",
      text: "Bir element, tüm orbitalleri tam dolu olduğu için oda koşullarında tek atomlu hâlde bulunur ve başka elementlerle kolay kolay bileşik oluşturmaz. Bu tanım hangi element grubuna aittir?",
      options: ["1A — Alkali metaller", "7A — Halojenler", "8A — Soy gazlar", "3A — Toprak metalleri", "4B — Geçiş metalleri"],
      correct: 2,
      explain: "8A grubu elementleri (soy/asal gazlar) tüm orbitalleri tam dolu olduğu için kararlıdır, tek atomlu hâlde bulunur ve bileşik oluşturmaya eğilimli değildir.",
    },
    {
      context: "Aynı Elektron Sayısına Sahip Üç Tanecik",
      text: "Bir nötr atom (¹⁰Ne), bir anyon (⁹F⁻) ve bir katyon (¹¹Na⁺) inceleniyor; üçünün de elektron dizilimi 1s² 2s² 2p⁶ olarak bulunuyor. Bu üç taneciğin ortak özelliğine ne ad verilir?",
      options: ["İzotop", "İzoelektronik", "İzomer", "Alotrop", "Radikal"],
      correct: 1,
      explain: "Aynı sayıda elektrona (ve dolayısıyla aynı elektron dizilimine) sahip atom ya da iyonlara izoelektronik tanecikler denir; Ne, F⁻ ve Na⁺ üçü de 10 elektronludur.",
    },
    {
      context: "Bir Metalin Kararlı İyonu",
      text: "Bir 2A grubu elementi kararlı bileşiklerinde her zaman aynı yükte iyon oluşturuyor. Bu elementin oluşturduğu iyonun yükü ve elektron dizilimi hakkında en doğru genelleme hangisidir?",
      options: ["+1 yüklü iyon oluşturur ve valans elektronunu tamamen kaybeder", "+2 yüklü iyon oluşturur; en yüksek enerji düzeyindeki 2 valans elektronunu vererek bir önceki soy gazın elektron dizilimine ulaşır", "-2 yüklü iyon oluşturur, çünkü 2A grubu ametaldir", "İyon oluşturmaz, çünkü 2A grubu zaten kararlıdır", "+7 yüklü iyon oluşturur"],
      correct: 1,
      explain: "2A grubu (toprak alkali metaller) elementleri kararlı bileşiklerinde yalnızca +2 yüklü iyon oluşturur; iki valans elektronunu vererek bir önceki soy gazın kararlı elektron dizilimine ulaşırlar.",
    },
  ],

  ozellikler: [
    {
      context: "Aynı Grupta Büyüyen Atomlar",
      text: "Lityum (Li), sodyum (Na) ve potasyum (K) aynı grupta (1A) yer alır ve aşağı doğru inildikçe atom yarıçapları belirgin şekilde artar. Bu artışın temel nedeni nedir?",
      options: ["Alt periyotlara inildikçe proton sayısının azalması", "Alt periyotlara inildikçe enerji seviyesi (katman) sayısının artması, dolayısıyla en dış elektronun çekirdekten uzaklaşması", "Alt periyotlara inildikçe elementlerin ametal hâle gelmesi", "Alt periyotlara inildikçe elektronegatifliğin artması", "Bu elementlerin izotoplarının farklı olması"],
      correct: 1,
      explain: "Aynı grupta aşağıya inildikçe yeni enerji seviyeleri (katmanlar) eklenir; en dış katmandaki elektron çekirdekten daha uzakta bulunduğu için atom yarıçapı artar.",
    },
    {
      context: "Aynı Periyotta Küçülen Atomlar",
      text: "Üçüncü periyotta sodyumdan (Na) klora (Cl) doğru gidildikçe atom yarıçapı belirgin şekilde küçülür, oysa bu elementlerin hepsi aynı sayıda enerji seviyesine (katmana) sahiptir. Bu küçülmeyi en iyi açıklayan neden hangisidir?",
      options: ["Elektron sayısının azalması", "Aynı katmana elektron eklenirken çekirdekteki proton sayısının da artması ve elektronları daha güçlü çekmesi", "Nötron sayısının azalması", "Bu elementlerin farklı katmanlara sahip olması", "Elektronegatifliğin bu elementlerde sıfır olması"],
      correct: 1,
      explain: "Aynı periyotta soldan sağa gidildikçe elektronlar aynı enerji seviyesine eklenirken proton sayısı da artar; artan çekirdek yükü elektronları daha güçlü çeker ve atom yarıçapı küçülür.",
    },
    {
      context: "İkinci Elektronu Koparmak Neden Zor?",
      text: "Bir element için birinci iyonlaşma enerjisi 738 kJ/mol iken, ikinci iyonlaşma enerjisi 1451 kJ/mol olarak ölçülüyor — yaklaşık iki kat artış var, ama üçüncü iyonlaşma enerjisi 7733 kJ/mol'e sıçrıyor (beş kattan fazla artış). Bu büyük sıçramanın en olası nedeni nedir?",
      options: ["Ölçüm hatası, üçüncü değer güvenilir değildir", "İlk iki elektron valans katmanından, üçüncü elektron ise bir alt (dolu ve çekirdeğe daha yakın, kararlı) enerji seviyesinden koparılmaktadır", "Üçüncü elektron negatif yüklü değildir", "Bu element üç değil sadece iki elektrona sahiptir", "Sıçrama, elementin radyoaktif olduğunu gösterir"],
      correct: 1,
      explain: "Bu element muhtemelen 2 valans elektronuna sahiptir (2A grubu); ilk iki elektron nispeten kolay kopar ama üçüncü elektron dolu ve kararlı bir alt enerji seviyesinden koparıldığı için gereken enerjide büyük bir sıçrama gözlenir.",
    },
    {
      context: "Bir İyonun Boyutu Neden Değişir?",
      text: "Nötr bir klor atomunun yarıçapı yaklaşık 99 pm iken, elektron alarak oluşturduğu Cl⁻ iyonunun yarıçapı yaklaşık 181 pm'dir — belirgin bir büyüme var. Bu büyümeyi en iyi açıklayan ifade hangisidir?",
      options: ["Elektron sayısı artarken proton sayısı sabit kaldığından çekirdeğin her bir elektron üzerindeki çekim etkisi nispeten azalır", "Anyon oluşumunda proton sayısı da artar", "Cl⁻ iyonu farklı bir elementtir", "İyon oluşumu atomun kütlesini değiştirmez, bu yüzden yarıçap da değişmemelidir", "Anyonlar her zaman nötr atomdan küçüktür"],
      correct: 0,
      explain: "Anyon oluşurken proton sayısı sabit kalırken elektron sayısı artar; aynı çekirdek yükü artık daha fazla elektronu çekmek zorunda kaldığından çekim gücü elektron başına azalır ve iyon büyür.",
    },
    {
      context: "Flor'un Bağ Kurma Gücü",
      text: "Flor (F), periyodik tablodaki tüm elementler arasında en yüksek elektronegatiflik değerine (4,0) sahiptir. Bu bilgiye dayanarak flor hakkında en doğru genelleme hangisidir?",
      options: ["Flor, bağ elektronlarını kendine çekme eğilimi en yüksek olan elementtir", "Flor, atom yarıçapı en büyük elementtir", "Flor, iyonlaşma enerjisi en düşük elementtir", "Flor, bir soy gazdır ve bileşik oluşturmaz", "Flor, elektronegatifliği ölçülemeyen bir elementtir"],
      correct: 0,
      explain: "Elektronegatiflik, bir atomun kimyasal bağdaki ortak elektron çiftini kendine çekme eğiliminin ölçüsüdür; flor 4,0 değeriyle bu çekme eğiliminin en yüksek olduğu elementtir.",
    },
  ],
};
