/* =========================================================
   AtomLab 9 — quiz-data.js
   Bağlam temelli, düşündüren değerlendirme soruları
   (KİM.9.1.1 – KİM.9.1.8 ile sınırlıdır). Her soru 5 seçenekli;
   doğru cevabın konumu sorular arasında dengeli biçimde dağıtılır
   (her modülün toplamında A-E şıkları yaklaşık eşit sıklıkta doğrudur).
   ========================================================= */

export const QUIZ = {
  gunluk: [
    {
      context: "Doğada Su Filtresi",
      text: "Doğada kamp yapan bir grup, boş bir pet şişeye sırasıyla çakıl, kum, odun kömürü ve bir kumaş parçası yerleştirerek bulanık akarsu suyunu bu düzenekten geçiriyor. Elde edilen su daha berrak görünüyor. Bu işlemde suyun içindeki katı parçacıkların ayrılması hangi türde bir süreçtir?",
      options: ["Fiziksel bir ayırma işlemi, çünkü suyun kimliği (H₂O olması) değişmemiştir", "Kimyasal değişim, çünkü suyun rengi değişmiştir", "Yeni bir madde sentezi, çünkü kömür suya karışmıştır", "Biyokimyasal bir tepkime, çünkü doğal malzemeler kullanılmıştır", "Bu işlem kimya biliminin konusu değildir"],
      correct: 0,
      explain: "Çakıl-kum-kömür-kumaş katmanlarından geçirme, suyun kimliğini değiştirmeden katı parçacıkları tutan fiziksel bir süzme işlemidir; kimya bilgisi böyle günlük hayatta hayatta kalma becerilerine bile katkı sağlar.",
    },
    {
      context: "Sınırlı Malzemeyle Ateş Yakma",
      text: "Doğada kamp yapan bir kişinin yanında sadece kolonya, aseton ve bir miktar yağ bulunuyor; kibrit veya çakmaktan başka hiçbir ateşleme aracı yoktur ama bu üç malzemeden biriyle ateşi başlatabiliyor. Bu üç malzemenin ateş yakmada işe yaramasını sağlayan ortak özellik nedir?",
      options: ["Üçünün de yanıcı (tutuşabilir) kimyasal özellik taşıması", "Üçünün de suda çözünmesi", "Üçünün de sıvı hâlde olması", "Üçünün de kokulu olması", "Üçünün de doğal kaynaklı olması"],
      correct: 0,
      explain: "Kolonya, aseton ve yağ; yanıcı özellikleri sayesinde tutuşabilir ve alevi bir süre besleyebilir. Sıvı olmak veya kokulu olmak, tutuşma davranışını açıklamaz.",
    },
    {
      context: "Elektronik Cihazların Ortak Sırrı",
      text: "Bir bilgisayarın veri işlemesi, bir telefonun şarj olması ve bir televizyon ekranının ışıldaması — birbirinden çok farklı görünen bu üç olay, temelde hangi ortak mekanizmaya dayanır?",
      options: ["Üçü de aynı yazılımı kullanır", "Üçü de yalnızca mekanik parçaların hareketiyle çalışır", "Üçü de manyetik alan gerektirmez", "Üçü de atomların yapısındaki elektronların hareketine dayanır", "Üçü de sadece ışık enerjisiyle çalışır"],
      correct: 3,
      explain: "Bilgisayarların işlemesi, telefonların şarj olması ve ekranların ışıldaması, atomun yapısındaki elektronların hareketine dayanır; bu da kimya biliminin (ve atom yapısının) günlük teknolojideki görünmez izidir.",
    },
    {
      context: "Bir Ürünün Etiketini Okumak",
      text: "Bir öğrenci, ambalajlı içme suyu şişesinin etiketindeki mineral içerik tablosunu inceleyip bunu bitkilerden/doğal kaynaklardan elde edilen suyla karşılaştırmak istiyor. Bu karşılaştırmayı yaparken hangi bilgi türüne öncelikle ihtiyaç duyar?",
      options: ["Şişenin üretildiği fabrikanın adı", "Şişenin rengi ve şekli", "Suyun satıldığı marketin konumu", "Suyun içindeki çözünmüş madde (mineral) miktarları gibi ölçülebilir kimyasal veriler", "Şişenin plastik türünün marka logosu"],
      correct: 3,
      explain: "İki farklı su kaynağını karşılaştırmak, mineral/çözünmüş madde miktarları gibi ölçülebilir kimyasal verilere dayanır; bu da kimya biliminin günlük hayattaki karşılaştırma ve karar verme süreçlerine katkısını gösterir.",
    },
    {
      context: "Plastik Atık Sorunu",
      text: "Bir haberde, günümüzde giderek büyüyen bir çevre sorunu olarak plastik atıkların doğada uzun süre bozunmadan kalmasından bahsediliyor. Bu sorunun çözümüne yönelik (biyobozunur malzeme geliştirme gibi) çalışmalar hangi bilim dalının doğrudan katkı alanına girer?",
      options: ["Yalnızca coğrafya biliminin", "Yalnızca tarih biliminin", "Kimya biliminin, çünkü malzemelerin yapısını ve özelliklerini değiştirerek çözüm üretir", "Hiçbir bilim dalının, bu tamamen bir yönetim sorunudur", "Yalnızca güzel sanatların"],
      correct: 2,
      explain: "Kimya bilimi, maddelerin yapısını inceleyip yeni özelliklere sahip (örn. biyobozunur) malzemeler geliştirerek plastik atık gibi günlük hayat sorunlarına çözüm odaklı yaklaşımlar sunar.",
    },
  ],

  disiplin: [
    {
      context: "İlaç Fabrikasında Bir Gün",
      text: "Bir ilaç fabrikasında çalışan bir uzman, önce örnek numunelerin bileşimini ve numunedeki kimyasal maddelerin miktarını belirliyor; daha sonra bitkisel kökenli etken maddeler kullanarak yeni ilaçlar sentezliyor. Bu iki aşama sırasıyla hangi kimya disiplinlerini yansıtır?",
      options: ["Fizikokimya ve polimer kimyası", "Anorganik kimya ve biyokimya", "Polimer kimyası ve analitik kimya", "Analitik kimya ve organik kimya", "Organik kimya ve fizikokimya"],
      correct: 3,
      explain: "Numunenin bileşimini ve miktarını belirlemek analitik kimyanın (nitel/nicel analiz), bitkisel etken maddelerden yeni bileşikler sentezlemek ise organik kimyanın çalışma alanına girer.",
    },
    {
      context: "İlacın Vücutta Çözünmesi",
      text: "Aynı ilaç fabrikasındaki uzman, sentezlediği bir ilacın etken maddesinin hem suda hem de portakal suyunda çözünme hızını incelemek istiyor. Bu inceleme öncelikle hangi kimya disiplininin uzmanlık alanına girer?",
      options: ["Analitik kimya, çünkü herhangi bir ölçüm analitik kimyadır", "Polimer kimyası, çünkü çözelti büyük moleküllerden oluşur", "Biyokimya, çünkü konu insan sağlığıyla ilgilidir", "Anorganik kimya, çünkü su bir anorganik bileşiktir", "Fizikokimya, çünkü çözünme hızı fiziksel koşullara (derişim, sıcaklık vb.) bağlı bir süreçtir"],
      correct: 4,
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
      options: ["Analitik kimya", "Fizikokimya", "Anorganik kimya", "Biyokimya", "Polimer kimyası"],
      correct: 4,
      explain: "Büyük moleküllerin (makromoleküllerin) sentezi, yapısı ve özellikleriyle ilgilenen disiplin polimer kimyasıdır; plastikler ve biyopolimerler bu alanın konusudur.",
    },
    {
      context: "Bir Yarı İletken Çip Projesi",
      text: "Bir mühendislik ekibi, elektronik cihazlarda kullanılacak yeni bir yarı iletken malzemenin (metal içermeyen, kristal yapılı bir bileşiğin) özelliklerini geliştirmeye çalışıyor. Karbon içermeyen bu bileşiğin özellikleriyle ilgilenmek hangi disiplinin konusudur?",
      options: ["Organik kimya, çünkü tüm malzemeler organik kimyanın konusudur", "Biyokimya, çünkü canlı sistemlerle ilgilidir", "Anorganik kimya, çünkü karbon temelli olmayan bileşiklerin (mineral, yarı iletken vb.) yapısı ve özellikleriyle ilgilenir", "Polimer kimyası, çünkü her malzeme bir polimerdir", "Bu konu hiçbir kimya disiplinine girmez"],
      correct: 2,
      explain: "Anorganik kimya; asit, baz, tuz, metal ve mineral gibi karbon temelli olmayan bileşiklerin yapısını ve özelliklerini inceler ve yarı iletken teknolojisi bu disiplinin uygulama alanlarından biridir.",
    },
  ],

  kariyer: [
    {
      context: "Bir Fabrikadaki Kalite Kontrol Analisti",
      text: "İki yıllık bir kimya teknolojisi ön lisans programını tamamlayan bir kişi, bir gıda fabrikasında ürünlerin bileşimini kontrol eden bir pozisyonda çalışmaya başlıyor. Bu kişinin unvanı ve eğitim düzeyi hakkında aşağıdakilerden hangisi doğrudur?",
      options: ["Kimya mühendisi unvanına sahiptir, çünkü dört yıllık program mezunudur", "Kimya öğretmeni unvanına sahiptir", "Hiçbir unvana sahip değildir, çünkü kimya alanında lisans eğitimi şarttır", "Kimya teknikeri unvanına sahiptir; ön lisans programını tamamlamıştır", "Polimer malzeme mühendisi unvanına sahiptir"],
      correct: 3,
      explain: "Kimya teknolojisi ön lisans programını tamamlayanlar kimya teknikeri unvanı alır ve laboratuvar teknikeri, kalite kontrol analisti gibi pozisyonlarda çalışabilir; kimyager/mühendis unvanları dört yıllık lisans programlarına aittir.",
    },
    {
      context: "Gastronomi ve Kimya",
      text: "Son yıllarda mutfak sanatları alanında, yemeklerin dokusunu ve tadını bilimsel yöntemlerle (örneğin sıcaklığın protein yapısına etkisini inceleyerek) geliştiren bir yaklaşım popülerleşiyor. Bu yaklaşımın gelişiminde en doğrudan hangi bilim dalının katkısından söz edilebilir?",
      options: ["Yalnızca sanat tarihinin", "Yalnızca coğrafyanın, bölgesel yemek kültürü nedeniyle", "Hiçbir bilim dalının, bu tamamen deneyime dayalı bir zanaattır", "Yalnızca ekonominin", "Kimya biliminin, moleküler gastronomi kavramının gelişimine katkısıyla"],
      correct: 4,
      explain: "Kimya bilimi, gastronominin bilimsel bir alan olma sürecine katkıda bulunarak moleküler gastronomi kavramının gelişimine yardımcı olmuştur.",
    },
    {
      context: "Su Arıtma Teknolojisi Geliştirmek",
      text: "Bir mühendis, kirli suyu içilebilir hâle getiren yeni bir arıtma sistemi tasarlamak üzere bir ekipte çalışıyor. Bu çalışma alanı, kimya kariyer sektörlerinden en çok hangisiyle örtüşür?",
      options: ["Kimya endüstrisi (boya, plastik üretimi)", "Eğitim ve akademik çalışma", "Çevre ve sürdürülebilirlik (atık yönetimi, su arıtma teknolojileri)", "Gıda ve içecek endüstrisi", "Agronomi ve tarım"],
      correct: 2,
      explain: "Atık yönetimi ve su arıtma teknolojileri, çevre ve sürdürülebilirlik sektörünün kapsamına girer; bu sektör yeşil teknolojilerin geliştirilmesini de içerir.",
    },
    {
      context: "Enerji Depolama Araştırması",
      text: "Bir araştırma grubu, elektrikli araçlarda kullanılacak yeni nesil pillerin enerji depolama kapasitesini artırmaya çalışıyor. Bu çalışma alanı hangi kariyer sektörüyle en doğrudan ilişkilidir?",
      options: ["Enerji sektörüyle (pil teknolojileri, enerji depolama sistemleri)", "Malzeme ve nanoteknoloji sektörüyle değil, yalnızca otomotiv sektörüyle", "Sağlık ve biyoteknoloji sektörüyle", "Eğitim ve akademik çalışma sektörüyle", "Agronomi ve tarım sektörüyle"],
      correct: 0,
      explain: "Pil teknolojileri, yakıt hücreleri ve enerji depolama sistemleri, enerji sektörünün kimya kariyer alanlarından biridir.",
    },
    {
      context: "Bir Bilim İnsanının Yolculuğu",
      text: "Tıp fakültesini bitirdikten sonra yurt dışında moleküler biyoloji alanında akademik çalışmalar yürüten ve yıllar sonra DNA onarım mekanizmaları üzerine yaptığı araştırmalarla bir bilim ödülü kazanan bir Türk bilim insanının kariyer yolu, aşağıdaki disiplin kombinasyonlarından en çok hangisiyle örtüşür?",
      options: ["Yalnızca anorganik kimya", "Yalnızca polimer kimyası", "Yalnızca fizikokimya", "Yalnızca kimya endüstrisi", "Tıp ve biyokimya/moleküler biyoloji"],
      correct: 4,
      explain: "Bu tanım, tıp eğitimi almış ve DNA onarımı üzerine biyokimya/moleküler biyoloji alanında çalışan, 2015 Nobel Kimya Ödülü'nü kazanan bir bilim insanının kariyer yolunu betimler.",
    },
  ],

  guvenlik: [
    {
      context: "Banyo Temizliğinde Bir Hata",
      text: "Bir kişi banyo temizliğinde önce tuz ruhu (hidroklorik asit çözeltisi) kullanıyor, ardından yüzeyi durulamadan üzerine çamaşır suyu (sodyum hipoklorit çözeltisi) döküyor. Kısa süre sonra ortamda boğucu, keskin kokulu bir gaz oluşuyor. Bu durumun en olası nedeni nedir?",
      options: ["İki ürünün de aynı renkte olması", "Tuz ruhunun kendiliğinden buharlaşması", "Asidik ve bazik özellikteki iki temizlik ürününün tepkimeye girerek zehirli klor gazı açığa çıkarması", "Çamaşır suyunun ışıkla tepkimeye girmesi", "Banyodaki nemin gaz oluşturması"],
      correct: 2,
      explain: "Hidroklorik asit (tuz ruhu) ile sodyum hipoklorit (çamaşır suyu) karıştığında zehirli klor gazı (Cl₂) açığa çıkar; bu yüzden farklı temizlik ürünleri asla gelişigüzel karıştırılmamalıdır.",
    },
    {
      context: "Laboratuvarda Sıvı Aktarma",
      text: "Bir öğrenci, laboratuvarda küçük hacimli bir sıvı kimyasalı bir kaptan diğerine aktarmak için pipeti ağzıyla çekerek kullanmaya çalışıyor. Bu davranışın en büyük riski nedir?",
      options: ["Pipetin kırılma riski artar", "Sıvının rengi değişir", "Deney süresi uzar", "Kabın etiketi silinir", "Kimyasalın yanlışlıkla ağza/solunum yoluna kaçarak zehirlenmeye yol açması"],
      correct: 4,
      explain: "Sıvılar pipetle aktarılırken kesinlikle puar kullanılmalı, asla ağızla çekilmemelidir; aksi hâlde kimyasal madde ağız veya solunum yoluyla vücuda girip zehirlenmeye yol açabilir.",
    },
    {
      context: "Asit Çözeltisi Hazırlama Sırası",
      text: "Bir öğrenci derişik bir asidi seyreltmek için önce suyu bir behere koyup üzerine yavaşça asit ekliyor; bir diğer öğrenci ise önce asidi behere koyup üzerine su döküyor. Güvenlik kuralına göre hangi öğrencinin yöntemi doğrudur ve neden?",
      options: ["İkinci öğrenci doğrudur, çünkü asit her zaman önce konmalıdır", "İkisi de yanlıştır, seyreltme işlemi hiç yapılmamalıdır", "İkisi de doğrudur, sıra önemli değildir", "Birinci öğrenci doğrudur; asit, baget yardımıyla yavaşça suyun içine dökülerek seyreltilmelidir", "Hiçbiri, çünkü asitler seyreltilmeden kullanılmalıdır"],
      correct: 3,
      explain: "Asit çözeltisi hazırlanırken asit, baget yardımıyla yavaşça suyun içine dökülüp seyreltilmelidir; tersi sırada (suyu asidin üzerine dökmek) sıçrama ve yanma riski çok daha yüksektir.",
    },
    {
      context: "Etiketi Belirsiz Bir Kap",
      text: "Bir öğrenci laboratuvarda üzerinde etiket bulunmayan bir kaptaki maddeyi tanımak için kabı açıp kokluyor ve tadına bakmayı düşünüyor. Bu davranış hangi açıdan tehlikelidir?",
      options: ["Madde zehirli, tahriş edici veya korozif olabilir; koklama ve tatma vücuda zarar verebilir", "Sadece zaman kaybettirir, tehlikeli değildir", "Kabın kırılmasına neden olur", "Yalnızca kabın etiketinin daha çok silinmesine yol açar", "Hiçbir riski yoktur çünkü laboratuvar ortamı güvenlidir"],
      correct: 0,
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
      options: ["Çünkü hiçbir parçacık sapmamalıydı", "Çünkü altın yaprak deneyleri sadece metallerde yapılabilir", "Çünkü alfa parçacıkları negatif yüklüdür", "Çünkü pozitif yük eşit dağılmış olsaydı hiçbir parçacık büyük açıyla geri sekmemeliydi; geri sekme, yoğun ve küçük bir pozitif bölgenin (çekirdeğin) varlığına işaret eder", "Çünkü deney sonucu tamamen rastgeledir ve model üzerinde bir etkisi yoktur"],
      correct: 3,
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
      options: ["Bohr modeli sadece gazlar için geçerlidir", "Çok elektronlu atomlarda proton sayısı değişkendir", "Bohr modeli yalnızca metaller için geliştirilmiştir", "Çok elektronlu atomlarda çekirdek yoktur", "Bohr modeli, elektronların belirli dairesel yörüngelerde hareket ettiğini varsayar; ancak Heisenberg belirsizlik ilkesine göre elektronun konumu ve hızı aynı anda kesin olarak bilinemez"],
      correct: 4,
      explain: "Heisenberg'in belirsizlik ilkesine göre bir elektronun konumu ve hızı aynı anda kesin olarak belirlenemez; bu, Bohr modelinin öngördüğü kesin dairesel yörünge fikriyle çelişir ve modern (kuantum) modelin orbital kavramına yol açmıştır.",
    },
    {
      context: "CERN'deki Yeni Bulgular",
      text: "Bir haber, dünyanın en büyük parçacık çarpıştırıcısında yapılan deneylerin maddenin temel yapı taşları hakkında yeni veriler ortaya koyduğunu bildiriyor. Bu tür yeni deneysel bulguların atom teorisi üzerindeki olası etkisi için en doğru yaklaşım hangisidir?",
      options: ["Yeni bulgular önceki tüm bilgileri geçersiz kılar ve bilim baştan başlar", "Yeni bulgular atom teorisini hiçbir şekilde etkilemez, çünkü atom teorisi kesinleşmiştir", "Yeni kanıtlar, mevcut atom modelinin geliştirilmesine veya güncellenmesine yol açabilir; bilimsel bilgi kanıtlarla değişebilir bir yapıdadır", "Bu tür deneyler sadece mühendislik alanını ilgilendirir, kimyayı etkilemez", "Yeni bulgular yalnızca yeni element isimleri üretir"],
      correct: 2,
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

  /* =====================================================
     1 — ORBİTAL KAVRAMI VE TÜRLERİ
     ===================================================== */

  {
    context: "Bir öğrenci atomun elektronlarının çekirdek çevresindeki dağılımını inceliyor.",
    text: "Orbital kavramı aşağıdakilerden hangisini ifade eder?",
    options: [
      "Elektronun çekirdek etrafında izlediği kesin dairesel yol",
      "Elektronun bulunma olasılığının yüksek olduğu üç boyutlu bölge",
      "Atom çekirdeğinin kapladığı hacim",
      "Elektronların tamamının bulunduğu tek enerji düzeyi",
      "Protonların hareket ettiği bölge"
    ],
    correct: 1,
    explain: "Orbital, elektronun bulunma olasılığının yüksek olduğu çekirdek çevresindeki üç boyutlu bölgedir."
  },

  {
    context: "Bir öğretmen s, p, d ve f orbitallerini karşılaştırıyor.",
    text: "Bir s alt kabuğunda kaç orbital bulunur?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    correct: 0,
    explain: "s alt kabuğunda yalnızca 1 orbital bulunur."
  },

  {
    context: "Bir atomun p alt kabuğu inceleniyor.",
    text: "Bir p alt kabuğunda kaç orbital bulunur?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    correct: 2,
    explain: "p alt kabuğunda üç eş enerjili orbital bulunur."
  },

  {
    context: "Bir kimya öğrencisi d alt kabuğunun kapasitesini araştırıyor.",
    text: "Bir d alt kabuğunda toplam kaç orbital bulunur?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    correct: 3,
    explain: "d alt kabuğunda 5 orbital bulunur."
  },

  {
    context: "Elektronların farklı alt kabuklara yerleşimi inceleniyor.",
    text: "Aşağıdaki alt kabuklardan hangisi 7 orbital içerir?",
    options: [
      "s",
      "p",
      "d",
      "f",
      "Hiçbiri"
    ],
    correct: 3,
    explain: "f alt kabuğunda 7 orbital bulunur."
  },

  /* =====================================================
     2 — ELEKTRON KAPASİTESİ
     ===================================================== */

  {
    context: "Bir öğrenci orbitallerin elektron kapasitelerini karşılaştırıyor.",
    text: "Bir orbitalde en fazla kaç elektron bulunabilir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    correct: 1,
    explain: "Pauli dışlama ilkesine göre bir orbitalde en fazla 2 elektron bulunabilir."
  },

  {
    context: "s alt kabuğunun elektron kapasitesi araştırılıyor.",
    text: "Bir s alt kabuğu en fazla kaç elektron alabilir?",
    options: [
      "1",
      "2",
      "4",
      "6",
      "10"
    ],
    correct: 1,
    explain: "s alt kabuğunda 1 orbital vardır ve her orbital en fazla 2 elektron alır."
  },

  {
    context: "p alt kabuğunun elektron kapasitesi inceleniyor.",
    text: "Bir p alt kabuğu en fazla kaç elektron alabilir?",
    options: [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    correct: 2,
    explain: "p alt kabuğunda 3 orbital bulunur. 3 × 2 = 6 elektron alabilir."
  },

  {
    context: "d alt kabuğu inceleniyor.",
    text: "Bir d alt kabuğunun maksimum elektron kapasitesi kaçtır?",
    options: [
      "2",
      "6",
      "8",
      "10",
      "14"
    ],
    correct: 3,
    explain: "d alt kabuğunda 5 orbital bulunur. 5 × 2 = 10 elektron."
  },

  {
    context: "f alt kabuğunun kapasitesi hesaplanıyor.",
    text: "Bir f alt kabuğu en fazla kaç elektron içerebilir?",
    options: [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    correct: 4,
    explain: "f alt kabuğunda 7 orbital vardır. 7 × 2 = 14 elektron."
  },

  /* =====================================================
     3 — AUFBAU İLKESİ
     ===================================================== */

  {
    context: "Bir öğrenci elektron dizilimi oluşturmaya başlıyor.",
    text: "Aufbau ilkesine göre elektronlar orbitallere nasıl yerleşir?",
    options: [
      "Önce en yüksek enerjili orbitallere yerleşir.",
      "Rastgele orbitallere yerleşir.",
      "Önce düşük enerjili orbitallere yerleşir.",
      "Sadece p orbitallerine yerleşir.",
      "Her zaman yalnızca son katmana yerleşir."
    ],
    correct: 2,
    explain: "Aufbau ilkesine göre elektronlar temel hâlde düşük enerjili orbitallerden başlayarak yerleşir."
  },

  {
    context: "Bir öğrenci 3s ve 3p orbitallerini karşılaştırıyor.",
    text: "Elektron dizilimi oluşturulurken hangisi önce dolar?",
    options: [
      "3p",
      "3s",
      "İkisi aynı anda",
      "4p",
      "3d"
    ],
    correct: 1,
    explain: "3s orbitali 3p orbitalinden daha düşük enerjilidir ve önce dolar."
  },

  {
    context: "Bir atomun elektron dizilimi yazılıyor.",
    text: "Aşağıdaki sıralamalardan hangisi elektronların yerleşimi için doğrudur?",
    options: [
      "1s → 2s → 2p → 3s → 3p",
      "1s → 2p → 2s → 3p → 3s",
      "2s → 1s → 2p → 3s → 3p",
      "1s → 3s → 2s → 2p → 3p",
      "2p → 2s → 1s → 3s → 3p"
    ],
    correct: 0,
    explain: "Bu temel orbitaller için enerji sırası 1s, 2s, 2p, 3s, 3p şeklindedir."
  },

  {
    context: "Bir öğrenci 10 elektronlu bir atomun dizilimini oluşturuyor.",
    text: "10 elektronlu nötr atomda son elektron hangi alt kabuğa yerleşir?",
    options: [
      "1s",
      "2s",
      "2p",
      "3s",
      "3p"
    ],
    correct: 2,
    explain: "10 elektron için dizilim 1s² 2s² 2p⁶ olur."
  },

  {
    context: "Bir atomun elektron dizilimi 1s² 2s² 2p⁶ 3s¹ şeklindedir.",
    text: "Bu atomun son elektronu hangi alt kabuktadır?",
    options: [
      "1s",
      "2s",
      "2p",
      "3s",
      "3p"
    ],
    correct: 3,
    explain: "Dizilimin son terimi 3s¹ olduğundan son elektron 3s alt kabuğundadır."
  },

  {
    context: "Bir öğrenci elektronların enerji sırasını karıştırıyor.",
    text: "Aşağıdaki orbitallerden hangisi daha düşük enerjilidir?",
    options: [
      "3p",
      "3s",
      "4s",
      "3d",
      "4p"
    ],
    correct: 1,
    explain: "Verilen orbitaller arasında 3s daha düşük enerjilidir."
  },

  {
    context: "Bir atomun elektronları temel hâlde yerleştiriliyor.",
    text: "Elektronların düşük enerjili orbitallerden başlayarak yerleşmesini açıklayan ilke hangisidir?",
    options: [
      "Hund kuralı",
      "Pauli ilkesi",
      "Aufbau ilkesi",
      "Belirsizlik ilkesi",
      "Kütlenin korunumu"
    ],
    correct: 2,
    explain: "Bu açıklama doğrudan Aufbau ilkesine aittir."
  },

  /* =====================================================
     4 — PAULİ DIŞLAMA İLKESİ
     ===================================================== */

  {
    context: "Bir orbital kutusunda iki elektron gösteriliyor.",
    text: "Aynı orbitalde bulunan iki elektronun spinleri nasıl olmalıdır?",
    options: [
      "Aynı yönde",
      "Zıt yönde",
      "Spinleri olmak zorunda değildir",
      "Biri üç kat büyük olmalıdır",
      "İkisi de spinsiz olmalıdır"
    ],
    correct: 1,
    explain: "Pauli dışlama ilkesine göre aynı orbitaldeki iki elektronun spinleri zıt yönlü olmalıdır."
  },

  {
    context: "Bir öğrenci bir orbital kutusuna üç elektron yerleştirmiştir.",
    text: "Bu gösterim neden yanlıştır?",
    options: [
      "Orbital en fazla 2 elektron alabilir.",
      "Orbital yalnızca proton alabilir.",
      "Orbital yalnızca nötron alabilir.",
      "Elektronlar sadece p orbitallerinde bulunabilir.",
      "Elektronların kütlesi farklıdır."
    ],
    correct: 0,
    explain: "Bir orbital en fazla iki elektron alabilir."
  },

  {
    context: "Bir orbital şemasında aynı kutuda iki elektron aynı yönlü oklarla gösteriliyor.",
    text: "Bu gösterim hangi ilkeye aykırıdır?",
    options: [
      "Aufbau",
      "Hund",
      "Pauli dışlama",
      "Avogadro",
      "Lavoisier"
    ],
    correct: 2,
    explain: "Aynı orbitaldeki iki elektronun spinleri zıt olmalıdır."
  },

  {
    context: "Bir öğrenci Pauli ilkesini açıklıyor.",
    text: "Aşağıdakilerden hangisi Pauli dışlama ilkesine uygundur?",
    options: [
      "Bir orbitalde 3 elektron bulunması",
      "Bir orbitalde 2 elektronun aynı spinli olması",
      "Bir orbitalde 2 elektronun zıt spinli olması",
      "Her orbitalin 4 elektron alması",
      "Elektronların çekirdekte bulunması"
    ],
    correct: 2,
    explain: "Bir orbitalde en fazla iki elektron bulunabilir ve bunların spinleri zıt olmalıdır."
  },

  {
    context: "2s orbitali inceleniyor.",
    text: "2s orbitaline kaç elektron yerleştiğinde orbital dolmuş olur?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    correct: 1,
    explain: "Tek bir orbital en fazla iki elektron içerir."
  },

  {
    context: "Bir öğretmen elektronların aynı orbitaldeki durumunu soruyor.",
    text: "Aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "Aynı orbitaldeki iki elektronun spinleri mutlaka aynıdır.",
      "Aynı orbitalde üç elektron bulunabilir.",
      "Aynı orbitalde en fazla iki elektron bulunur.",
      "Elektronlar orbitallere kuralsız yerleşir.",
      "Pauli ilkesi yalnızca d orbitallerinde geçerlidir."
    ],
    correct: 2,
    explain: "Pauli dışlama ilkesi tüm orbitaller için geçerlidir ve bir orbitalde en fazla iki elektron bulunabilir."
  },

  /* =====================================================
     5 — HUND KURALI
     ===================================================== */

  {
    context: "Bir atomun 2p³ elektron dizilimi inceleniyor.",
    text: "Hund kuralına göre üç elektron 2p orbitallerine nasıl yerleşmelidir?",
    options: [
      "Tek bir orbitalde üç elektron bulunmalıdır.",
      "Bir orbital çift, biri tek, biri boş olmalıdır.",
      "Üç orbitalin her birinde birer elektron bulunmalıdır.",
      "İki orbital boş kalmalıdır.",
      "Elektronların tamamı aynı orbitale yerleşmelidir."
    ],
    correct: 2,
    explain: "Eş enerjili p orbitalleri önce birer elektronla tek tek doldurulur."
  },

  {
    context: "Bir p alt kabuğuna elektronlar yerleştiriliyor.",
    text: "Hund kuralının temel amacı aşağıdakilerden hangisidir?",
    options: [
      "Eş enerjili orbitallerin önce tek tek doldurulmasını sağlamak",
      "Elektronları çekirdeğe taşımak",
      "Protonları orbitallere yerleştirmek",
      "Her orbitalde dört elektron bulunmasını sağlamak",
      "Elektronları yalnızca s orbitaline yerleştirmek"
    ],
    correct: 0,
    explain: "Hund kuralına göre eş enerjili orbitaller eşleşmeden önce tek tek elektron alır."
  },

  {
    context: "2p⁴ elektron dizilimi için orbital şeması hazırlanıyor.",
    text: "Hund kuralına uygun olarak 2p⁴ nasıl gösterilir?",
    options: [
      "↑↓  ↑↓  boş",
      "↑   ↑   ↑↓",
      "↑↓  boş  boş",
      "↑↓  ↑↓  ↑↓",
      "↑   ↑↓  boş"
    ],
    correct: 1,
    explain: "Önce üç p orbitali birer elektron alır, ardından dördüncü elektron eşleşir."
  },

  {
    context: "2p² elektron dizilimi için orbital kutuları çiziliyor.",
    text: "Hund kuralına göre doğru gösterim hangisidir?",
    options: [
      "↑↓  boş  boş",
      "↑   ↑   boş",
      "↑↓  ↑   boş",
      "↑↓  ↑↓  boş",
      "↑   boş  ↑↓"
    ],
    correct: 1,
    explain: "İki elektron, eş enerjili iki ayrı p orbitaline tek tek yerleşir."
  },

  {
    context: "Bir öğrenci 3p³ için ↑↓, ↑, boş şeklinde bir şema çiziyor.",
    text: "Bu şemanın hatası nedir?",
    options: [
      "Pauli ilkesi ihlal edilmiştir.",
      "3p'de yalnızca iki orbital vardır.",
      "Hund kuralına göre üç orbital önce birer elektron almalıdır.",
      "Aufbau nedeniyle 3p hiç dolamaz.",
      "Elektronların tamamı eşleşmelidir."
    ],
    correct: 2,
    explain: "3p³ için üç eş enerjili p orbitalinin her birinde bir elektron bulunmalıdır."
  },

  {
    context: "Eş enerjili orbitallerde elektronların dağılımı inceleniyor.",
    text: "Aşağıdakilerden hangisi Hund kuralına uygundur?",
    options: [
      "↑↓  ↑↓  ↑",
      "↑↓  ↑↓  boş",
      "↑   ↑   ↑",
      "↑↓  boş  boş",
      "↑↑  ↑   boş"
    ],
    correct: 2,
    explain: "Eş enerjili üç orbitalin önce birer elektronla tek tek dolması Hund kuralına uygundur."
  },

  /* =====================================================
     6 — ORBİTAL ENERJİ SIRASI
     ===================================================== */

  {
    context: "Elektron dizilimi oluşturuluyor.",
    text: "Aşağıdaki orbitallerden hangisi diğerlerinden önce dolar?",
    options: [
      "3p",
      "4s",
      "3d",
      "4p",
      "5s"
    ],
    correct: 1,
    explain: "Temel enerji sıralamasında 4s, 3d'den önce gelir."
  },

  {
    context: "Bir öğrenci 4s ve 3d orbitallerinin enerji sırasını inceliyor.",
    text: "Elektron dizilimi oluşturulurken hangisine önce elektron yerleşir?",
    options: [
      "3d",
      "4s",
      "İkisine aynı anda",
      "4p",
      "5s"
    ],
    correct: 1,
    explain: "Elektron yerleşim sırasına göre 4s, 3d'den önce gelir."
  },

  {
    context: "Elektronların orbitallere yerleşme sırası yazılıyor.",
    text: "Aşağıdaki sıralamalardan hangisi doğrudur?",
    options: [
      "3p → 4s → 3d",
      "3d → 4s → 4p",
      "4s → 3p → 3d",
      "3p → 3d → 4s",
      "4p → 4s → 3d"
    ],
    correct: 0,
    explain: "Temel yerleşim sırasına göre 3p'den sonra 4s, ardından 3d gelir."
  },

  {
    context: "Bir elektron dizilimi oluşturulurken enerji sırası kontrol ediliyor.",
    text: "Aşağıdakilerden hangisi elektronların yerleşim sırasının bir parçasıdır?",
    options: [
      "1s → 2s → 2p → 3s",
      "1s → 2p → 2s → 3s",
      "2s → 1s → 2p → 3p",
      "2p → 1s → 3s → 2s",
      "3s → 2p → 2s → 1s"
    ],
    correct: 0,
    explain: "Düşük enerjiden yüksek enerjiye doğru temel sıra 1s, 2s, 2p, 3s şeklindedir."
  },

  {
    context: "Bir atomun elektron dizilimi yazılıyor.",
    text: "Aşağıdaki orbitallerden hangisi 3p'den sonra gelir?",
    options: [
      "2p",
      "3s",
      "4s",
      "2s",
      "1s"
    ],
    correct: 2,
    explain: "Elektron yerleşim sıralamasında 3p'den sonra 4s gelir."
  },

  /* =====================================================
     7 — ELEKTRON DİZİLİMİ
     ===================================================== */

  {
    context: "Atom numarası 6 olan karbon atomu inceleniyor.",
    text: "Karbon atomunun temel hâl elektron dizilimi hangisidir?",
    options: [
      "1s² 2s² 2p²",
      "1s² 2s² 2p⁴",
      "1s² 2p⁴",
      "1s² 2s¹ 2p³",
      "1s² 2s² 3p²"
    ],
    correct: 0,
    explain: "Karbonun 6 elektronu vardır: 1s² 2s² 2p²."
  },

  {
    context: "Atom numarası 7 olan azot atomu inceleniyor.",
    text: "Azot atomunun elektron dizilimi hangisidir?",
    options: [
      "1s² 2s² 2p³",
      "1s² 2s² 2p⁵",
      "1s² 2s¹ 2p⁴",
      "1s² 2p⁵",
      "1s² 2s² 3p³"
    ],
    correct: 0,
    explain: "Azotun 7 elektronu vardır: 1s² 2s² 2p³."
  },

  {
    context: "Atom numarası 8 olan oksijen atomu inceleniyor.",
    text: "Oksijen atomunun temel hâl elektron dizilimi hangisidir?",
    options: [
      "1s² 2s² 2p²",
      "1s² 2s² 2p³",
      "1s² 2s² 2p⁴",
      "1s² 2s² 2p⁵",
      "1s² 2p⁶"
    ],
    correct: 2,
    explain: "Oksijenin 8 elektronu vardır: 1s² 2s² 2p⁴."
  },

  {
    context: "Atom numarası 9 olan flor atomu inceleniyor.",
    text: "Flor atomunun elektron dizilimi hangisidir?",
    options: [
      "1s² 2s² 2p³",
      "1s² 2s² 2p⁴",
      "1s² 2s² 2p⁵",
      "1s² 2s² 2p⁶",
      "1s² 2s¹ 2p⁶"
    ],
    correct: 2,
    explain: "Florun 9 elektronu vardır: 1s² 2s² 2p⁵."
  },

  {
    context: "Atom numarası 10 olan neon atomu inceleniyor.",
    text: "Neon atomunun elektron dizilimi hangisidir?",
    options: [
      "1s² 2s² 2p⁴",
      "1s² 2s² 2p⁵",
      "1s² 2s² 2p⁶",
      "1s² 2s⁶ 2p²",
      "1s² 2p⁸"
    ],
    correct: 2,
    explain: "Neonun 10 elektronu vardır: 1s² 2s² 2p⁶."
  },

  {
    context: "Atom numarası 11 olan sodyum atomu inceleniyor.",
    text: "Sodyum atomunun elektron dizilimi hangisidir?",
    options: [
      "1s² 2s² 2p⁶ 3s¹",
      "1s² 2s² 2p⁵ 3s²",
      "1s² 2s² 2p⁶ 3p¹",
      "1s² 2s² 2p⁶ 4s¹",
      "1s² 2s² 2p⁴ 3s³"
    ],
    correct: 0,
    explain: "Sodyumun 11 elektronu vardır: 1s² 2s² 2p⁶ 3s¹."
  },

  {
    context: "Atom numarası 12 olan magnezyum atomu inceleniyor.",
    text: "Magnezyum atomunun elektron dizilimi hangisidir?",
    options: [
      "1s² 2s² 2p⁶ 3s¹",
      "1s² 2s² 2p⁶ 3s²",
      "1s² 2s² 2p⁶ 3p²",
      "1s² 2s² 2p⁵ 3s³",
      "1s² 2s² 2p⁶ 4s²"
    ],
    correct: 1,
    explain: "Magnezyumun 12 elektronu vardır: 1s² 2s² 2p⁶ 3s²."
  },

  {
    context: "Atom numarası 13 olan alüminyum atomu inceleniyor.",
    text: "Alüminyum atomunun son elektronu hangi alt kabuğa yerleşir?",
    options: [
      "2s",
      "2p",
      "3s",
      "3p",
      "4s"
    ],
    correct: 3,
    explain: "Alüminyumun dizilimi 1s² 2s² 2p⁶ 3s² 3p¹ şeklindedir."
  },

  {
    context: "Atom numarası 15 olan fosfor atomu inceleniyor.",
    text: "Fosfor atomunun elektron dizilimi hangisidir?",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p¹",
      "1s² 2s² 2p⁶ 3s² 3p²",
      "1s² 2s² 2p⁶ 3s² 3p³",
      "1s² 2s² 2p⁶ 3s² 3p⁴",
      "1s² 2s² 2p⁶ 3s² 3p⁵"
    ],
    correct: 2,
    explain: "Fosforun 15 elektronu vardır ve dizilimi 1s² 2s² 2p⁶ 3s² 3p³ şeklindedir."
  },

  {
    context: "Atom numarası 17 olan klor atomu inceleniyor.",
    text: "Klor atomunun elektron dizilimi hangisidir?",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p³",
      "1s² 2s² 2p⁶ 3s² 3p⁴",
      "1s² 2s² 2p⁶ 3s² 3p⁵",
      "1s² 2s² 2p⁶ 3s² 3p⁶",
      "1s² 2s² 2p⁶ 3p⁵"
    ],
    correct: 2,
    explain: "Klorun 17 elektronu vardır: 1s² 2s² 2p⁶ 3s² 3p⁵."
  },

  /* =====================================================
     8 — ELEKTRON SAYISINDAN ATOM NUMARASI
     ===================================================== */

  {
    context: "Bir nötr atomun elektron dizilimi 1s² 2s² 2p⁶ şeklindedir.",
    text: "Bu atomun atom numarası kaçtır?",
    options: [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    correct: 2,
    explain: "Elektron sayısı 2 + 2 + 6 = 10'dur. Nötr atomda elektron sayısı atom numarasına eşittir."
  },

  {
    context: "Bir nötr atomun elektron dizilimi 1s² 2s² 2p⁶ 3s¹ şeklindedir.",
    text: "Bu atomun atom numarası kaçtır?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    correct: 2,
    explain: "Toplam elektron sayısı 11'dir. Nötr atomun atom numarası 11 olur."
  },

  {
    context: "Bir atomun elektron dizilimi 1s² 2s² 2p⁶ 3s² şeklindedir.",
    text: "Bu atomun atom numarası kaçtır?",
    options: [
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
    correct: 2,
    explain: "2 + 2 + 6 + 2 = 12 elektron vardır."
  },

  {
    context: "Bir nötr atomun elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p² şeklindedir.",
    text: "Bu atomun atom numarası kaçtır?",
    options: [
      "12",
      "13",
      "14",
      "15",
      "16"
    ],
    correct: 2,
    explain: "Toplam elektron sayısı 14'tür."
  },

  {
    context: "Bir nötr atomun son elektronunun 3p alt kabuğuna yerleştiği biliniyor.",
    text: "Aşağıdaki atomlardan hangisi buna örnek olabilir?",
    options: [
      "Neon",
      "Sodyum",
      "Magnezyum",
      "Alüminyum",
      "Klor"
    ],
    correct: 4,
    explain: "Klorun elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁵ şeklindedir."
  },

  /* =====================================================
     9 — DEĞERLİK ELEKTRONLARI
     ===================================================== */

  {
    context: "Sodyum atomunun elektron dizilimi 1s² 2s² 2p⁶ 3s¹ şeklindedir.",
    text: "Sodyum atomunun en dış enerji düzeyinde kaç elektron vardır?",
    options: [
      "1",
      "2",
      "6",
      "8",
      "11"
    ],
    correct: 0,
    explain: "En dış enerji düzeyi n=3'tür ve burada 3s¹ bulunduğundan 1 elektron vardır."
  },

  {
    context: "Magnezyum atomunun elektron dizilimi 1s² 2s² 2p⁶ 3s² şeklindedir.",
    text: "Magnezyumun en dış enerji düzeyindeki elektron sayısı kaçtır?",
    options: [
      "1",
      "2",
      "6",
      "8",
      "12"
    ],
    correct: 1,
    explain: "En dış enerji düzeyinde 3s² bulunduğundan 2 elektron vardır."
  },

  {
    context: "Klor atomunun elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁵ şeklindedir.",
    text: "Klorun en dış enerji düzeyinde kaç elektron bulunur?",
    options: [
      "2",
      "5",
      "6",
      "7",
      "8"
    ],
    correct: 3,
    explain: "En dış katmanda 3s² + 3p⁵ = 7 elektron vardır."
  },

  {
    context: "Neon atomunun elektron dizilimi 1s² 2s² 2p⁶ şeklindedir.",
    text: "Neonun en dış enerji düzeyindeki elektron sayısı kaçtır?",
    options: [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    correct: 3,
    explain: "İkinci enerji düzeyinde 2s² + 2p⁶ = 8 elektron vardır."
  },

  {
    context: "Bir atomun elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p³ şeklindedir.",
    text: "Bu atomun en dış enerji düzeyindeki elektron sayısı kaçtır?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "8"
    ],
    correct: 2,
    explain: "En dış düzeyde 3s² + 3p³ = 5 elektron bulunur."
  }

],
  yerbulma: [
    {
      context: "Bir Elektron Diziliminden Adres Bulmak",
      text: "Bir elementin elektron dizilimi [Ar] 4s² 3d⁶ şeklindedir. Bu dizilime göre elementin periyodik tablodaki grup türü (A ya da B) hakkında ne söylenebilir?",
      options: ["B grubundadır, çünkü dizilim d orbitaliyle bitmektedir", "A grubundadır, çünkü en yüksek enerji düzeyi 4'tür", "Ne A ne B grubundadır, çünkü lantanit serisindedir", "Soy gazdır, çünkü son katman doludur", "Halojendir, çünkü 4s ve 3d toplamı 8'dir"],
      correct: 0,
      explain: "Elektron dizilimi d orbitaliyle bitiyorsa element B grubundadır; ns² (n-1)d⁶ dizilimi özel olarak 8B grubuna karşılık gelir.",
    },
    {
      context: "Aynı Aileden İki Element",
      text: "Bir element grubu, elektron dizilimleri sırasıyla ns¹ ile biten ve bileşiklerinde yalnızca +1 yüklü iyon oluşturan, su ile şiddetli tepkimeye giren yumuşak metalleri içerir. Bu grup hangisidir?",
      options: ["7A — Halojenler", "8A — Soy gazlar", "1A — Alkali metaller", "2A — Toprak alkali metaller", "3B — Geçiş metalleri"],
      correct: 2,
      explain: "1A grubu (alkali metaller, H hariç), elektron dizilimi ns¹ ile biter, bileşiklerinde yalnızca +1 yüklü iyon oluşturur ve su ile şiddetli tepkimeye girerek hidrojen gazı açığa çıkarır.",
    },
    {
      context: "Neden Kararlı Kalıyor?",
      text: "Bir element, tüm orbitalleri tam dolu olduğu için oda koşullarında tek atomlu hâlde bulunur ve başka elementlerle kolay kolay bileşik oluşturmaz. Bu tanım hangi element grubuna aittir?",
      options: ["8A — Soy gazlar", "1A — Alkali metaller", "7A — Halojenler", "3A — Toprak metalleri", "4B — Geçiş metalleri"],
      correct: 0,
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
      options: ["Alt periyotlara inildikçe proton sayısının azalması", "Alt periyotlara inildikçe elementlerin ametal hâle gelmesi", "Alt periyotlara inildikçe elektronegatifliğin artması", "Alt periyotlara inildikçe enerji seviyesi (katman) sayısının artması, dolayısıyla en dış elektronun çekirdekten uzaklaşması", "Bu elementlerin izotoplarının farklı olması"],
      correct: 3,
      explain: "Aynı grupta aşağıya inildikçe yeni enerji seviyeleri (katmanlar) eklenir; en dış katmandaki elektron çekirdekten daha uzakta bulunduğu için atom yarıçapı artar.",
    },
    {
      context: "Aynı Periyotta Küçülen Atomlar",
      text: "Üçüncü periyotta sodyumdan (Na) klora (Cl) doğru gidildikçe atom yarıçapı belirgin şekilde küçülür, oysa bu elementlerin hepsi aynı sayıda enerji seviyesine (katmana) sahiptir. Bu küçülmeyi en iyi açıklayan neden hangisidir?",
      options: ["Elektron sayısının azalması", "Nötron sayısının azalması", "Aynı katmana elektron eklenirken çekirdekteki proton sayısının da artması ve elektronları daha güçlü çekmesi", "Bu elementlerin farklı katmanlara sahip olması", "Elektronegatifliğin bu elementlerde sıfır olması"],
      correct: 2,
      explain: "Aynı periyotta soldan sağa gidildikçe elektronlar aynı enerji seviyesine eklenirken proton sayısı da artar; artan çekirdek yükü elektronları daha güçlü çeker ve atom yarıçapı küçülür.",
    },
    {
      context: "İkinci Elektronu Koparmak Neden Zor?",
      text: "Bir element için birinci iyonlaşma enerjisi 738 kJ/mol iken, ikinci iyonlaşma enerjisi 1451 kJ/mol olarak ölçülüyor — yaklaşık iki kat artış var, ama üçüncü iyonlaşma enerjisi 7733 kJ/mol'e sıçrıyor (beş kattan fazla artış). Bu büyük sıçramanın en olası nedeni nedir?",
      options: ["İlk iki elektron valans katmanından, üçüncü elektron ise bir alt (dolu ve çekirdeğe daha yakın, kararlı) enerji seviyesinden koparılmaktadır", "Ölçüm hatası, üçüncü değer güvenilir değildir", "Üçüncü elektron negatif yüklü değildir", "Bu element üç değil sadece iki elektrona sahiptir", "Sıçrama, elementin radyoaktif olduğunu gösterir"],
      correct: 0,
      explain: "Bu element muhtemelen 2 valans elektronuna sahiptir (2A grubu); ilk iki elektron nispeten kolay kopar ama üçüncü elektron dolu ve kararlı bir alt enerji seviyesinden koparıldığı için gereken enerjide büyük bir sıçrama gözlenir.",
    },
    {
      context: "Bir İyonun Boyutu Neden Değişir?",
      text: "Nötr bir klor atomunun yarıçapı yaklaşık 99 pm iken, elektron alarak oluşturduğu Cl⁻ iyonunun yarıçapı yaklaşık 181 pm'dir — belirgin bir büyüme var. Bu büyümeyi en iyi açıklayan ifade hangisidir?",
      options: ["Anyon oluşumunda proton sayısı da artar", "Elektron sayısı artarken proton sayısı sabit kaldığından çekirdeğin her bir elektron üzerindeki çekim etkisi nispeten azalır", "Cl⁻ iyonu farklı bir elementtir", "İyon oluşumu atomun kütlesini değiştirmez, bu yüzden yarıçap da değişmemelidir", "Anyonlar her zaman nötr atomdan küçüktür"],
      correct: 1,
      explain: "Anyon oluşurken proton sayısı sabit kalırken elektron sayısı artar; aynı çekirdek yükü artık daha fazla elektronu çekmek zorunda kaldığından çekim gücü elektron başına azalır ve iyon büyür.",
    },
    {
      context: "Flor'un Bağ Kurma Gücü",
      text: "Flor (F), periyodik tablodaki tüm elementler arasında en yüksek elektronegatiflik değerine (4,0) sahiptir. Bu bilgiye dayanarak flor hakkında en doğru genelleme hangisidir?",
      options: ["Flor, atom yarıçapı en büyük elementtir", "Flor, iyonlaşma enerjisi en düşük elementtir", "Flor, bağ elektronlarını kendine çekme eğilimi en yüksek olan elementtir", "Flor, bir soy gazdır ve bileşik oluşturmaz", "Flor, elektronegatifliği ölçülemeyen bir elementtir"],
      correct: 2,
      explain: "Elektronegatiflik, bir atomun kimyasal bağdaki ortak elektron çiftini kendine çekme eğiliminin ölçüsüdür; flor 4,0 değeriyle bu çekme eğiliminin en yüksek olduğu elementtir.",
    },
  ],
};
