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
    kazanim: "KİM.9.1.1",
    text: "Doğada kamp yapan bir grup, boş bir pet şişeye sırasıyla çakıl, kum, odun kömürü ve bir kumaş parçası yerleştirerek bulanık akarsu suyunu bu düzenekten geçiriyor. Elde edilen su daha berrak görünüyor. Bu işlemde suyun içindeki katı parçacıkların ayrılması hangi türde bir süreçtir?",
    options: [
      "Fiziksel bir ayırma işlemidir; suyun kimliği değişmemiştir.",
      "Kimyasal değişimdir; çünkü suyun rengi değişmiştir.",
      "Yeni bir madde sentezidir.",
      "Biyokimyasal bir tepkimedir.",
      "Kimya biliminin konusu değildir."
    ],
    correct: 0,
    explain: "Süzme işleminde maddelerin kimliği değişmez. Katı parçacıklar fiziksel olarak sudan ayrılır."
  },

  {
    context: "Günlük Hayatta Kimya",
    kazanim: "KİM.9.1.1",
    text: "Bir öğrenci mutfakta limon suyunun metaller üzerindeki etkisini gözlemliyor. Bu olayın kimya biliminin çalışma alanına girmesinin temel nedeni aşağıdakilerden hangisidir?",
    options: [
      "Limonun sarı renkte olması",
      "Maddenin yapısı ve özellikleri arasındaki ilişkinin incelenmesi",
      "Limonun mutfakta kullanılması",
      "Metalin ağır olması",
      "Limon suyunun sıvı olması"
    ],
    correct: 1,
    explain: "Kimya; maddelerin yapısını, özelliklerini ve maddeler arasındaki etkileşimleri inceler."
  },

  {
    context: "Paslanan Bisiklet",
    kazanim: "KİM.9.1.1",
    text: "Yağmur altında bırakılan demir bisikletin yüzeyinde zamanla pas oluşuyor. Bu olay kimyanın hangi yönüyle ilişkilidir?",
    options: [
      "Maddenin yalnızca şeklini değiştirmesiyle",
      "Maddenin kütlesinin yok olmasıyla",
      "Yeni maddelerin oluşmasıyla",
      "Sadece fiziksel hareketle",
      "Maddenin sıcaklığının değişmesiyle"
    ],
    correct: 2,
    explain: "Demirin oksijen ve suyla etkileşmesi sonucunda yeni maddeler oluşur. Bu nedenle olay kimyasal değişimle ilişkilidir."
  },

  {
    context: "Kabarcıklı İçecek",
    kazanim: "KİM.9.1.1",
    text: "Gazlı içecek açıldığında sıvıdan çok sayıda gaz kabarcığı çıkıyor. Bu olayın incelenmesinde kimya bilimi hangi açıdan katkı sağlar?",
    options: [
      "Sadece içeceğin rengini belirler.",
      "Gazın çözünürlüğü ve maddenin özelliklerini inceleyebilir.",
      "Şişenin tasarımını belirler.",
      "İçeceğin reklamını yapar.",
      "Şişenin satış fiyatını belirler."
    ],
    correct: 1,
    explain: "Kimya maddelerin özelliklerini ve gazların sıvılardaki çözünürlüğünü inceleyerek olayı açıklayabilir."
  },

  {
    context: "Temizlik Ürünü Seçimi",
    kazanim: "KİM.9.1.1",
    text: "Bir kişi yüzey temizliği için farklı ürünlerin etiketlerini karşılaştırıyor. Kimya bilgisini kullanarak en doğru seçimi yapabilmesi için öncelikle hangi bilgiyi değerlendirmelidir?",
    options: [
      "Ürünün ambalaj rengini",
      "Reklamdaki sloganı",
      "Ürünün kimyasal özelliklerini ve kullanım amacını",
      "Şişenin şeklini",
      "Markanın logosunu"
    ],
    correct: 2,
    explain: "Kimyasal özellikler ve kullanım amacı bilinirse ürünün uygunluğu ve güvenliği daha doğru değerlendirilebilir."
  },

  {
    context: "Su Arıtma",
    kazanim: "KİM.9.1.1",
    text: "Bir belediye içme suyundaki bazı maddeleri uzaklaştırmak için farklı arıtma yöntemleri kullanıyor. Bu uygulama kimyanın hangi katkısını gösterir?",
    options: [
      "Maddelerin özelliklerinden yararlanarak uygun ayırma ve arıtma yöntemleri geliştirmeyi",
      "Suyun rengini değiştirmeyi",
      "Sadece mekanik tasarım yapmayı",
      "Su kaynaklarının haritasını çıkarmayı",
      "Suyun fiyatını belirlemeyi"
    ],
    correct: 0,
    explain: "Kimya, maddelerin fiziksel ve kimyasal özelliklerinden yararlanarak arıtma yöntemlerinin geliştirilmesine katkı sağlar."
  },

  {
    context: "Gıda Saklama",
    kazanim: "KİM.9.1.1",
    text: "Bir gıdanın buzdolabında daha uzun süre dayanmasının nedenleri araştırılıyor. Bu araştırmada kimyanın hangi yönü önemlidir?",
    options: [
      "Ambalajın rengi",
      "Maddelerin sıcaklıkla değişen özellikleri ve gerçekleşen kimyasal süreçler",
      "Marketin konumu",
      "Ürünün reklamı",
      "Kutunun şekli"
    ],
    correct: 1,
    explain: "Sıcaklık, gıdalardaki kimyasal tepkimelerin ve bazı bozunma süreçlerinin hızını etkileyebilir."
  },

  {
    context: "Güneş Kremi",
    kazanim: "KİM.9.1.1",
    text: "Güneş kremlerinin cildi UV ışınlarından koruması için özel maddeler kullanılıyor. Bu durum kimyanın hangi alandaki katkısını gösterir?",
    options: [
      "Maddelerin ışıkla etkileşimlerinden yararlanarak ürün geliştirmeyi",
      "Sadece meteorolojik ölçüm yapmayı",
      "Cildin rengini değiştirmeyi",
      "Güneşin hareketini hesaplamayı",
      "Sadece ambalaj tasarımını"
    ],
    correct: 0,
    explain: "Kimya, maddelerin ışıkla etkileşimlerinden yararlanarak koruyucu ürünlerin geliştirilmesine katkı sağlar."
  },

  {
    context: "Pil Teknolojisi",
    kazanim: "KİM.9.1.1",
    text: "Bir mühendis daha uzun süre çalışan bir pil geliştirmek için farklı maddeleri deniyor. Bu çalışmada kimya bilgisinin temel katkısı nedir?",
    options: [
      "Pil kutusunun rengini belirlemek",
      "Kimyasal enerji dönüşümlerini ve maddelerin tepkimelerini incelemek",
      "Aracın hızını ölçmek",
      "Pil fiyatını belirlemek",
      "Sadece pilin boyutunu değiştirmek"
    ],
    correct: 1,
    explain: "Pillerde kimyasal tepkimeler elektrik enerjisiyle ilişkilidir. Bu nedenle kimya pil teknolojisinin temel bilimlerinden biridir."
  },

  {
    context: "Plastik Atıklar",
    kazanim: "KİM.9.1.1",
    text: "Plastiklerin doğada uzun süre kalması çevre açısından sorun oluşturuyor. Biyobozunur plastik geliştirilmesi kimyanın hangi katkısını gösterir?",
    options: [
      "Maddelerin yapısını ve özelliklerini değiştirerek yeni malzemeler geliştirmeyi",
      "Plastiklerin rengini belirlemeyi",
      "Atıkların haritasını çıkarmayı",
      "Sadece ekonomik hesaplama yapmayı",
      "Plastikleri tamamen yok saymayı"
    ],
    correct: 0,
    explain: "Kimya, malzemelerin moleküler yapısını ve özelliklerini inceleyerek daha çevreci yeni malzemelerin geliştirilmesine katkı sağlar."
  },

  {
    context: "İlaç Geliştirme",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırma ekibi yeni bir ilaç etken maddesi geliştirmek için farklı moleküllerin yapısını inceliyor. Bu çalışma kimyanın hangi rolünü gösterir?",
    options: [
      "Yeni maddelerin yapı ve özelliklerinin araştırılmasını",
      "Sadece ilaç kutusu tasarımını",
      "Hastane binasının tasarımını",
      "İlacın reklamını",
      "Sadece satış fiyatının belirlenmesini"
    ],
    correct: 0,
    explain: "Kimya yeni maddelerin yapılarını, özelliklerini ve birbirleriyle etkileşimlerini inceleyerek ilaç geliştirme çalışmalarına katkı sağlar."
  },

  {
    context: "Laboratuvar Gözlemi",
    kazanim: "KİM.9.1.2",
    text: "Bir öğrenci deney sırasında renk değişimi, gaz çıkışı ve çökelti oluşumu gözlemliyor. Bu gözlemlerden hangisi kimyasal değişimin göstergesi olabilir?",
    options: [
      "Kabın şeklinin değişmesi",
      "Maddenin başka kaba aktarılması",
      "Gaz oluşumu ve yeni bir maddenin ortaya çıkması",
      "Sıvının dökülmesi",
      "Kabın yerinin değiştirilmesi"
    ],
    correct: 2,
    explain: "Gaz oluşumu, çökelti ve belirgin renk değişimi gibi gözlemler yeni maddelerin oluştuğuna işaret edebilir."
  },

  {
    context: "Meyvenin Kararması",
    kazanim: "KİM.9.1.2",
    text: "Kesilmiş elmanın bir süre sonra kahverengiye dönüştüğü görülüyor. Bu olayın kimyasal değişim olarak değerlendirilmesinin temel nedeni nedir?",
    options: [
      "Elmanın şeklinin değişmesi",
      "Yeni maddelerin oluşması",
      "Elmanın daha küçük olması",
      "Suyunun azalması",
      "Elmanın soğuması"
    ],
    correct: 1,
    explain: "Elmanın havadaki oksijenle tepkimesi sonucunda yeni maddeler oluşur."
  },

  {
    context: "Suyun Donması",
    kazanim: "KİM.9.1.2",
    text: "Bir bardak su dondurucuda bekletildiğinde buz hâline geliyor. Bu olay neden kimyasal değişim değildir?",
    options: [
      "Suyun rengi değiştiği için",
      "Yeni bir madde oluşmadığı, yalnızca fiziksel hâlin değiştiği için",
      "Su artık madde olmadığı için",
      "Buzun kütlesi olmadığı için",
      "Sıcaklık değişmediği için"
    ],
    correct: 1,
    explain: "Donma sırasında H₂O'nun kimliği değişmez; yalnızca fiziksel hâli değişir."
  },

  {
    context: "Mumun Yanması",
    kazanim: "KİM.9.1.2",
    text: "Yanan bir mumun parafininin zamanla azalması hangi tür değişime örnektir?",
    options: [
      "Yalnızca fiziksel değişim",
      "Kimyasal değişim",
      "Sadece hâl değişimi",
      "Hiçbir değişim",
      "Sadece şekil değişimi"
    ],
    correct: 1,
    explain: "Parafin oksijenle tepkimeye girerek yeni maddeler oluşturur. Bu nedenle yanma kimyasal değişimdir."
  },

  {
    context: "Kâğıdın Yırtılması",
    kazanim: "KİM.9.1.2",
    text: "Bir kâğıt makasla iki parçaya ayrılıyor. Bu olayın kimyasal değişim olmamasının nedeni nedir?",
    options: [
      "Kâğıt artık görünmediği için",
      "Yeni bir madde oluşmadığı için",
      "Kâğıdın rengi değiştiği için",
      "Kâğıt ısındığı için",
      "Kâğıt gaz hâline geçtiği için"
    ],
    correct: 1,
    explain: "Yırtılma veya kesilme sırasında maddenin kimliği değişmez; yalnızca şekli değişir."
  },

  {
    context: "Kimyasal Tepkime Gözlemi",
    kazanim: "KİM.9.1.2",
    text: "İki renksiz çözelti karıştırıldığında sarı bir katı oluşuyor. Bu gözlem için en uygun yorum hangisidir?",
    options: [
      "Kesinlikle yalnızca fiziksel değişim gerçekleşmiştir.",
      "Yeni bir katı oluştuğu için kimyasal değişim gerçekleşmiş olabilir.",
      "Hiçbir değişiklik olmamıştır.",
      "Sadece kabın rengi değişmiştir.",
      "Çözeltiler yok olmuştur."
    ],
    correct: 1,
    explain: "Yeni bir katı oluşması çökelti oluşumuna işaret eder ve kimyasal tepkime gerçekleşmiş olabilir."
  },

  {
    context: "Bilimsel Çalışma",
    kazanim: "KİM.9.1.3",
    text: "Bir bilim insanı bir hipotezi test etmek için deney yapıyor. Deney sonuçları hipotezi desteklemiyor. Bilim insanının en uygun davranışı nedir?",
    options: [
      "Sonuçları değiştirmek",
      "Sonuçları gizlemek",
      "Hipotezi kanıtlara göre yeniden değerlendirmek",
      "Deneyi hiç yapmamış gibi davranmak",
      "Verileri silmek"
    ],
    correct: 2,
    explain: "Bilimsel çalışmada sonuçlar beklentiyle uyuşmadığında hipotez kanıtlara göre yeniden değerlendirilmelidir."
  },

  {
    context: "Deney Tekrarı",
    kazanim: "KİM.9.1.3",
    text: "Bir deneyin sonucunun güvenilirliğini artırmak isteyen araştırmacı aşağıdakilerden hangisini yapmalıdır?",
    options: [
      "Deneyi yalnızca bir kez yapmak",
      "Sonuçları değiştirmek",
      "Deneyi uygun koşullarda tekrarlamak",
      "Beklenmeyen verileri silmek",
      "Sadece tahmin kullanmak"
    ],
    correct: 2,
    explain: "Deneylerin tekrarlanması sonuçların güvenilirliğini değerlendirmeye yardımcı olur."
  },

  {
    context: "Verilerin Kaydedilmesi",
    kazanim: "KİM.9.1.3",
    text: "Bir öğrenci deney sırasında ölçtüğü sıcaklık değerlerini düzenli olarak tabloya kaydediyor. Bu davranışın bilimsel açıdan temel amacı nedir?",
    options: [
      "Verilerin unutulmasını ve yanlış yorumlanmasını önlemek",
      "Deneyi daha renkli hâle getirmek",
      "Sadece defteri doldurmak",
      "Sonuçları önceden belirlemek",
      "Deneyi gereksiz hâle getirmek"
    ],
    correct: 0,
    explain: "Düzenli veri kaydı, sonuçların karşılaştırılmasını ve bilimsel olarak değerlendirilmesini sağlar."
  },

  {
    context: "Bilimsel Model",
    kazanim: "KİM.9.1.3",
    text: "Bir atom modeli yeni deneysel kanıtlarla açıklamakta yetersiz kalıyor. Bilimsel yaklaşım açısından ne yapılmalıdır?",
    options: [
      "Model hiçbir zaman değiştirilmemelidir.",
      "Yeni kanıtlar dikkate alınarak model geliştirilebilir.",
      "Deney sonuçları yok sayılmalıdır.",
      "Bilimsel modeller kesinlikle değişmez.",
      "Model yalnızca adı değiştirilerek korunmalıdır."
    ],
    correct: 1,
    explain: "Bilimsel modeller mevcut kanıtları açıklamak için kullanılır ve yeni kanıtlarla geliştirilebilir."
  },

  {
    context: "Laboratuvar Güvenliği",
    kazanim: "KİM.9.1.4",
    text: "Bir öğrenci laboratuvarda kimyasal madde kullanırken gözlük takıyor. Bunun temel amacı nedir?",
    options: [
      "Daha iyi görmek",
      "Gözleri kimyasal sıçramalarından korumak",
      "Deneyin hızını artırmak",
      "Kimyasalın rengini değiştirmek",
      "Kabın kırılmasını önlemek"
    ],
    correct: 1,
    explain: "Koruyucu gözlük, kimyasalların göze sıçraması durumunda oluşabilecek zararları azaltır."
  },

  {
    context: "Kimyasal Etiket",
    kazanim: "KİM.9.1.4",
    text: "Bir kimyasal madde kabının üzerinde tehlike piktogramı bulunuyor. Öğrenci ilk olarak ne yapmalıdır?",
    options: [
      "Maddeyi koklamalıdır.",
      "Maddeyi tatmalıdır.",
      "Etiketteki güvenlik bilgilerini incelemelidir.",
      "Maddeyi eline dökmelidir.",
      "Maddeyi ısıtmalıdır."
    ],
    correct: 2,
    explain: "Kimyasal maddeler kullanılmadan önce etiket ve güvenlik bilgileri mutlaka incelenmelidir."
  },

  {
    context: "Asit Seyreltme",
    kazanim: "KİM.9.1.4",
    text: "Derişik asit seyreltilirken güvenli uygulama hangisidir?",
    options: [
      "Suyu derişik asidin üzerine hızlıca dökmek",
      "Asidi suya yavaşça eklemek",
      "Asidi doğrudan ele dökmek",
      "Asidi kapalı kapta ısıtmak",
      "Asidi koklamak"
    ],
    correct: 1,
    explain: "Derişik asit seyreltilirken asit suya yavaşça eklenmelidir. Böylece oluşan ısının neden olabileceği sıçrama riski azaltılır."
  },

  {
    context: "Pipet Kullanımı",
    kazanim: "KİM.9.1.4",
    text: "Laboratuvarda bir sıvıyı pipetle aktarırken aşağıdakilerden hangisi kesinlikle yapılmamalıdır?",
    options: [
      "Puar kullanmak",
      "Koruyucu gözlük takmak",
      "Pipeti ağızla çekmek",
      "Etiketi kontrol etmek",
      "Uygun pipet kullanmak"
    ],
    correct: 2,
    explain: "Kimyasal sıvılar kesinlikle ağızla pipetlenmemelidir. Puar veya uygun pipetleme düzeneği kullanılmalıdır."
  },

  {
    context: "Kimyasal Atık",
    kazanim: "KİM.9.1.4",
    text: "Laboratuvarda oluşan kimyasal atıklarla ilgili en doğru yaklaşım hangisidir?",
    options: [
      "Lavaboya gelişigüzel dökmek",
      "Normal çöpe atmak",
      "Uygun atık kabında toplamak",
      "Elde biriktirmek",
      "Koklayarak sınıflandırmak"
    ],
    correct: 2,
    explain: "Kimyasal atıklar özelliklerine uygun şekilde ayrı toplanmalı ve güvenli biçimde bertaraf edilmelidir."
  },

  {
    context: "Korozif Madde",
    kazanim: "KİM.9.1.4",
    text: "Bir kimyasalın korozif olduğunu gösteren sembol görüldüğünde hangi davranış uygundur?",
    options: [
      "Maddeye çıplak elle dokunmak",
      "Koruyucu ekipman kullanmak",
      "Maddeyi koklamak",
      "Maddeyi tatmak",
      "Maddeyi metal yüzeye dökmek"
    ],
    correct: 1,
    explain: "Korozif maddeler cilt ve gözlerde ciddi hasara yol açabileceğinden uygun koruyucu ekipman kullanılmalıdır."
  },

  {
    context: "Kimya ve Çevre",
    kazanim: "KİM.9.1.5",
    text: "Bir araştırma grubu endüstriyel atıkların çevreye zararını azaltmak için yeni bir arıtma yöntemi geliştiriyor. Bu çalışma öncelikle hangi amaçla ilişkilidir?",
    options: [
      "Çevresel sürdürülebilirliği artırmak",
      "Atık miktarını artırmak",
      "Enerji tüketimini gereksiz artırmak",
      "Doğal kaynakları daha hızlı tüketmek",
      "Atıkları doğaya bırakmak"
    ],
    correct: 0,
    explain: "Atıkların çevreye zararını azaltmaya yönelik yöntemler sürdürülebilirlik ve çevre koruma amacı taşır."
  },

  {
    context: "Geri Dönüşüm",
    kazanim: "KİM.9.1.5",
    text: "Plastik atıkların geri dönüştürülmesinin önemli bir avantajı aşağıdakilerden hangisidir?",
    options: [
      "Hammadde kullanımını ve atık miktarını azaltabilmesi",
      "Her zaman sıfır enerji gerektirmesi",
      "Tüm plastikleri tamamen yok etmesi",
      "Kimyasal madde kullanımını artırması",
      "Atıkları çoğaltması"
    ],
    correct: 0,
    explain: "Geri dönüşüm, uygun malzemelerin yeniden kullanılmasıyla hammadde tüketimini ve atık miktarını azaltabilir."
  },

  {
    context: "Su Kirliliği",
    kazanim: "KİM.9.1.5",
    text: "Bir göldeki ağır metal miktarının arttığı belirleniyor. Kimya bilimi bu sorunun çözümüne nasıl katkı sağlayabilir?",
    options: [
      "Kirleticileri belirleyip uygun arıtma yöntemleri geliştirebilir.",
      "Gölün şeklini değiştirebilir.",
      "Yağış miktarını doğrudan artırabilir.",
      "Gölün çevresindeki yolları tasarlayabilir.",
      "Sadece gölün rengini değiştirebilir."
    ],
    correct: 0,
    explain: "Kimyasal analizlerle kirleticiler belirlenebilir ve özelliklerine uygun arıtma yöntemleri geliştirilebilir."
  },

  {
    context: "Yeşil Kimya",
    kazanim: "KİM.9.1.5",
    text: "Bir üretim sürecinde tehlikeli atıkların oluşumunu en baştan azaltacak yeni bir yöntem geliştiriliyor. Bu yaklaşım hangi kavramla en çok ilişkilidir?",
    options: [
      "Yeşil kimya",
      "Nükleer fizik",
      "Astronomi",
      "Jeoloji",
      "Mekanik"
    ],
    correct: 0,
    explain: "Yeşil kimya, kimyasal süreçlerin çevreye ve insan sağlığına zararını azaltmayı ve atık oluşumunu önlemeyi amaçlar."
  },

  {
    context: "Enerji Verimliliği",
    kazanim: "KİM.9.1.5",
    text: "Bir fabrika aynı ürünü daha az enerji ve daha az atık oluşturarak üretmeye başlıyor. Bu değişiklik hangi hedefe katkı sağlar?",
    options: [
      "Sürdürülebilir üretime",
      "Daha fazla atık oluşumuna",
      "Kaynak tüketiminin artırılmasına",
      "Çevre kirliliğinin artırılmasına",
      "Hammadde israfına"
    ],
    correct: 0,
    explain: "Daha az enerji ve atık kullanımı sürdürülebilir üretim anlayışına katkı sağlar."
  },

  {
    context: "Kimya Kariyerleri",
    kazanim: "KİM.9.1.6",
    text: "Bir laboratuvarda numunelerin bileşimi ve içerdikleri maddelerin miktarı belirleniyor. Bu çalışmayı yapan kimya alanı hangisidir?",
    options: [
      "Analitik kimya",
      "Organik kimya",
      "Polimer kimyası",
      "Biyokimya",
      "Nükleer kimya"
    ],
    correct: 0,
    explain: "Analitik kimya maddelerin bileşimini ve miktarlarını belirlemekle ilgilenir."
  },

  {
    context: "Yeni İlaç Molekülü",
    kazanim: "KİM.9.1.6",
    text: "Karbon temelli yeni ilaç moleküllerinin sentezlenmesiyle ilgilenen kimya disiplini hangisidir?",
    options: [
      "Anorganik kimya",
      "Organik kimya",
      "Analitik kimya",
      "Fizikokimya",
      "Polimer kimyası"
    ],
    correct: 1,
    explain: "Karbon temelli bileşiklerin yapısı, özellikleri ve tepkimeleri organik kimyanın temel konularındandır."
  },

  {
    context: "Protein Araştırması",
    kazanim: "KİM.9.1.6",
    text: "Proteinlerin yapısı ve canlılardaki kimyasal süreçler üzerinde çalışan bir araştırmacının çalışması hangi disiplinle doğrudan ilişkilidir?",
    options: [
      "Biyokimya",
      "Anorganik kimya",
      "Polimer kimyası",
      "Analitik kimya",
      "Fizikokimya"
    ],
    correct: 0,
    explain: "Biyokimya canlılardaki kimyasal maddeleri ve süreçleri inceler."
  },

  {
    context: "Yeni Plastik Malzeme",
    kazanim: "KİM.9.1.6",
    text: "Çok sayıda küçük molekülün birleşmesiyle oluşan büyük moleküllü yeni bir malzeme geliştiriliyor. Bu çalışma hangi disiplinle doğrudan ilişkilidir?",
    options: [
      "Analitik kimya",
      "Polimer kimyası",
      "Biyokimya",
      "Anorganik kimya",
      "Fizikokimya"
    ],
    correct: 1,
    explain: "Polimer kimyası büyük moleküllerin yani polimerlerin sentezi, yapısı ve özellikleriyle ilgilenir."
  },

  {
    context: "Çözünme Hızı",
    kazanim: "KİM.9.1.6",
    text: "Bir maddenin sıcaklık değiştikçe çözünme hızının nasıl değiştiği araştırılıyor. Bu çalışma hangi disiplinle yakından ilişkilidir?",
    options: [
      "Fizikokimya",
      "Organik kimya",
      "Biyokimya",
      "Polimer kimyası",
      "Anorganik kimya"
    ],
    correct: 0,
    explain: "Fizikokimya, kimyasal sistemlerin sıcaklık, basınç, derişim gibi fiziksel değişkenlerle ilişkisini inceler."
  },

  {
    context: "Kimya Teknikeri",
    kazanim: "KİM.9.1.7",
    text: "İki yıllık kimya teknolojisi ön lisans programını tamamlayan bir kişinin alabileceği unvan aşağıdakilerden hangisidir?",
    options: [
      "Kimya teknikeri",
      "Kimya mühendisi",
      "Kimyager",
      "Kimya öğretmeni",
      "Doktor"
    ],
    correct: 0,
    explain: "Kimya teknolojisi ön lisans programını tamamlayan kişiler kimya teknikeri unvanıyla çeşitli laboratuvar ve üretim alanlarında çalışabilir."
  },

  {
    context: "Kalite Kontrol",
    kazanim: "KİM.9.1.7",
    text: "Bir gıda fabrikasında ürünlerin belirlenen standartlara uygun olup olmadığını laboratuvar testleriyle kontrol eden kişinin çalışması hangi alanla ilişkilidir?",
    options: [
      "Kalite kontrol",
      "Astronomi",
      "Mimarlık",
      "Tarih",
      "Arkeoloji"
    ],
    correct: 0,
    explain: "Kalite kontrol çalışmaları ürünlerin belirlenen özellik ve standartlara uygunluğunu değerlendirmeyi amaçlar."
  },

  {
    context: "Su Arıtma Kariyeri",
    kazanim: "KİM.9.1.7",
    text: "Bir kimya çalışanı içme suyundaki kirleticileri belirleyip arıtma sistemlerinin geliştirilmesine katkı sağlıyor. Bu çalışma hangi kariyer alanıyla ilişkilidir?",
    options: [
      "Çevre ve sürdürülebilirlik",
      "Moda tasarımı",
      "Spor bilimleri",
      "Müzik",
      "Turizm"
    ],
    correct: 0,
    explain: "Su arıtma, atık yönetimi ve çevresel analizler çevre ve sürdürülebilirlik alanında önemli çalışma konularıdır."
  },

  {
    context: "Pil Araştırması",
    kazanim: "KİM.9.1.7",
    text: "Yeni nesil pillerin enerji depolama kapasitesini artırmaya yönelik kimyasal araştırmalar hangi sektörle doğrudan ilişkilidir?",
    options: [
      "Enerji",
      "Tarım",
      "Turizm",
      "Moda",
      "Basın-yayın"
    ],
    correct: 0,
    explain: "Pil, yakıt hücresi ve enerji depolama teknolojileri enerji sektöründeki önemli kimya uygulamalarındandır."
  },

  {
    context: "Kimya ve Eğitim",
    kazanim: "KİM.9.1.8",
    text: "Bir kimya öğretmeni öğrencilerinin günlük yaşam olaylarını kimyasal kavramlarla açıklamasını istiyor. Bu yaklaşımın temel amacı nedir?",
    options: [
      "Kimya bilgisini günlük yaşamla ilişkilendirmek",
      "Sadece formül ezberletmek",
      "Deneyleri tamamen kaldırmak",
      "Kimyayı günlük yaşamdan ayırmak",
      "Sadece sınav puanını artırmak"
    ],
    correct: 0,
    explain: "Kimya öğretiminde günlük yaşam bağlantıları öğrencilerin kavramları anlamlandırmasına yardımcı olur."
  },

  {
    context: "Kimya ve Teknoloji",
    kazanim: "KİM.9.1.8",
    text: "Akıllı telefonlarda kullanılan batarya, ekran ve yarı iletken malzemelerin geliştirilmesinde kimyanın rolü neden önemlidir?",
    options: [
      "Maddelerin özelliklerinden yararlanarak yeni teknolojik malzemeler geliştirilmesini sağlar.",
      "Telefonun yalnızca rengini belirler.",
      "Telefonun internet hızını tek başına belirler.",
      "Telefonun yazılımını oluşturur.",
      "Telefonun ekran boyutunu belirler."
    ],
    correct: 0,
    explain: "Malzemelerin yapısı ve özellikleri teknolojik cihazların geliştirilmesinde kritik öneme sahiptir."
  },

  {
    context: "Günlük Yaşamda Kimyasal Güvenlik",
    kazanim: "KİM.9.1.8",
    text: "Evde kullanılan kimyasal ürünlerin etiketlerini okumak neden önemlidir?",
    options: [
      "Ürünün rengini öğrenmek için",
      "Güvenli kullanım, saklama ve olası tehlikeler hakkında bilgi edinmek için",
      "Ürünün reklamını yapmak için",
      "Şişenin hacmini değiştirmek için",
      "Ürünü daha pahalı hâle getirmek için"
    ],
    correct: 1,
    explain: "Etiketler ürünün tehlikeleri, kullanım koşulları, saklama şartları ve güvenlik önlemleri hakkında önemli bilgiler verir."
  }
 ],
 disiplin: [
  {
    context: "İlaç Fabrikasında Bir Gün",
    kazanim: "KİM.9.1.2",
    text: "Bir ilaç fabrikasında çalışan uzman, önce bir numunenin hangi maddeleri içerdiğini ve bu maddelerin miktarlarını belirliyor; ardından bitkisel kökenli etken maddelerden yeni ilaç molekülleri sentezliyor. Bu iki çalışma sırasıyla hangi kimya disiplinleriyle ilgilidir?",
    options: [
      "Fizikokimya ve polimer kimyası",
      "Anorganik kimya ve biyokimya",
      "Polimer kimyası ve analitik kimya",
      "Analitik kimya ve organik kimya",
      "Organik kimya ve fizikokimya"
    ],
    correct: 3,
    explain: "Bir numunenin bileşimini ve miktarını belirlemek analitik kimyanın; karbon temelli yeni bileşiklerin sentezi ise organik kimyanın çalışma alanıdır."
  },
  {
    context: "Kan Tahlili",
    kazanim: "KİM.9.1.2",
    text: "Bir laboratuvarda kan örneğindeki glikoz, kolesterol ve trigliserit miktarları sayısal olarak belirleniyor. Bu çalışma öncelikle hangi disiplinle ilişkilidir?",
    options: [
      "Analitik kimya",
      "Organik kimya",
      "Polimer kimyası",
      "Anorganik kimya",
      "Nükleer kimya"
    ],
    correct: 0,
    explain: "Bir örneğin içerdiği maddelerin miktarlarının belirlenmesi analitik kimyanın temel çalışma alanlarından biridir."
  },
  {
    context: "Bilinmeyen Bir Numune",
    kazanim: "KİM.9.1.2",
    text: "Bir laboratuvara gelen bilinmeyen bir sıvının hangi iyonları içerdiği araştırılıyor. Bu işlem aşağıdakilerden hangisine örnektir?",
    options: [
      "Polimer sentezi",
      "Nitel analiz",
      "Polimerizasyon",
      "Biyokimyasal sentez",
      "Enerji dönüşümü"
    ],
    correct: 1,
    explain: "Bir örnekte hangi maddelerin veya iyonların bulunduğunu belirleme nitel analiz olarak adlandırılır ve analitik kimyanın konusudur."
  },
  {
    context: "Miktar Belirleme",
    kazanim: "KİM.9.1.2",
    text: "Bir içme suyunda bulunan nitrat miktarının 25 mg/L olduğu belirleniyor. Buradaki çalışma hangi analiz türüdür?",
    options: [
      "Nitel analiz",
      "Organik analiz",
      "Nicel analiz",
      "Biyolojik analiz",
      "Polimer analizi"
    ],
    correct: 2,
    explain: "Bir maddenin miktarının sayısal olarak belirlenmesi nicel analizdir."
  },
  {
    context: "İlaç Molekülü Tasarımı",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacı karbon, hidrojen, oksijen ve azot içeren yeni bir ilaç molekülü tasarlıyor. Molekülün sentezlenmesi ve tepkimelerinin incelenmesi hangi disiplinin konusudur?",
    options: [
      "Anorganik kimya",
      "Fizikokimya",
      "Analitik kimya",
      "Organik kimya",
      "Polimer kimyası"
    ],
    correct: 3,
    explain: "Karbon temelli bileşiklerin yapılarını, özelliklerini ve tepkimelerini inceleyen disiplin organik kimyadır."
  },
  {
    context: "Yakıt Araştırması",
    kazanim: "KİM.9.1.2",
    text: "Yeni bir yakıt molekülünün karbon-hidrojen yapısı ve yanma tepkimeleri araştırılıyor. Bu çalışma hangi kimya disipliniyle en doğrudan ilişkilidir?",
    options: [
      "Organik kimya",
      "Analitik kimya",
      "Biyokimya",
      "Polimer kimyası",
      "Anorganik kimya"
    ],
    correct: 0,
    explain: "Hidrokarbonlar ve karbon temelli bileşiklerin yapısı ile tepkimeleri organik kimyanın temel konularındandır."
  },
  {
    context: "Parfüm Molekülleri",
    kazanim: "KİM.9.1.2",
    text: "Bir kozmetik firması yeni bir parfümün kokusundan sorumlu molekülleri sentezlemeye çalışıyor. Bu çalışma hangi disiplinle ilişkilidir?",
    options: [
      "Anorganik kimya",
      "Organik kimya",
      "Fizikokimya",
      "Analitik kimya",
      "Nükleer kimya"
    ],
    correct: 1,
    explain: "Parfümlerde kullanılan koku verici moleküllerin önemli bir bölümü organik bileşiklerdir ve bunların sentezi organik kimyanın konusudur."
  },
  {
    context: "Petrol Ürünleri",
    kazanim: "KİM.9.1.2",
    text: "Petrolden elde edilen hidrokarbonların yapısı ve farklı tepkimeleri inceleniyor. Bu araştırma hangi disipline aittir?",
    options: [
      "Biyokimya",
      "Analitik kimya",
      "Organik kimya",
      "Polimer kimyası",
      "Anorganik kimya"
    ],
    correct: 2,
    explain: "Petrol ürünlerinin büyük bölümünü hidrokarbonlar oluşturur ve hidrokarbonların kimyası organik kimyanın temel konusudur."
  },
  {
    context: "Proteinlerin Yapısı",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacı proteinlerin yapısını ve canlı hücrelerde gerçekleştirdikleri kimyasal olayları inceliyor. Bu çalışma hangi disiplinle en doğrudan ilişkilidir?",
    options: [
      "Biyokimya",
      "Analitik kimya",
      "Polimer kimyası",
      "Anorganik kimya",
      "Fizikokimya"
    ],
    correct: 0,
    explain: "Biyokimya canlılarda bulunan maddeleri ve canlı sistemlerde gerçekleşen kimyasal süreçleri inceler."
  },
  {
    context: "DNA Araştırması",
    kazanim: "KİM.9.1.2",
    text: "Bir bilim insanı DNA'nın kimyasal yapısını ve DNA'daki moleküller arasındaki etkileşimleri araştırıyor. Bu çalışma hangi disiplinle ilişkilidir?",
    options: [
      "Anorganik kimya",
      "Biyokimya",
      "Analitik kimya",
      "Polimer kimyası",
      "Fizikokimya"
    ],
    correct: 1,
    explain: "DNA canlılarda bulunan biyomoleküllerden biridir. Yapısı ve canlılardaki kimyasal işlevleri biyokimyanın çalışma alanına girer."
  },
  {
    context: "Enzimlerin Çalışması",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırma ekibi enzimlerin hangi koşullarda daha hızlı çalıştığını inceliyor. Bu araştırma hangi kimya disiplinine yakındır?",
    options: [
      "Polimer kimyası",
      "Anorganik kimya",
      "Biyokimya",
      "Analitik kimya",
      "Organik kimya"
    ],
    correct: 2,
    explain: "Enzimler canlı sistemlerde görev yapan biyomoleküllerdir ve işlevlerinin incelenmesi biyokimyanın önemli konularındandır."
  },
  {
    context: "Hücrede Enerji Üretimi",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacı hücrelerde glikozun parçalanması sırasında gerçekleşen kimyasal olayları inceliyor. Bu çalışma hangi disipline aittir?",
    options: [
      "Biyokimya",
      "Polimer kimyası",
      "Anorganik kimya",
      "Analitik kimya",
      "Fizikokimya"
    ],
    correct: 0,
    explain: "Canlı hücrelerde gerçekleşen kimyasal tepkimelerin incelenmesi biyokimyanın çalışma alanıdır."
  },
  {
    context: "Plastik Geliştirme",
    kazanim: "KİM.9.1.2",
    text: "Bir mühendis çok sayıda küçük molekülün birbirine bağlanmasıyla yeni ve dayanıklı bir malzeme üretiyor. Bu çalışma hangi disiplinle doğrudan ilişkilidir?",
    options: [
      "Analitik kimya",
      "Polimer kimyası",
      "Biyokimya",
      "Anorganik kimya",
      "Fizikokimya"
    ],
    correct: 1,
    explain: "Küçük moleküllerin birleşmesiyle oluşan büyük moleküllerin, yani polimerlerin sentezi ve özellikleri polimer kimyasının konusudur."
  },
  {
    context: "Biyobozunur Ambalaj",
    kazanim: "KİM.9.1.2",
    text: "Bir ekip doğada daha kolay parçalanabilen büyük moleküllü bir ambalaj malzemesi geliştirmeye çalışıyor. Bu çalışma en doğrudan hangi disiplinle ilişkilidir?",
    options: [
      "Organik kimya",
      "Analitik kimya",
      "Polimer kimyası",
      "Anorganik kimya",
      "Fizikokimya"
    ],
    correct: 2,
    explain: "Biyobozunur polimerlerin sentezi, yapısı ve özellikleri polimer kimyasıyla doğrudan ilişkilidir."
  },
  {
    context: "Naylon Üretimi",
    kazanim: "KİM.9.1.2",
    text: "Naylon gibi uzun zincirli moleküllerden oluşan malzemelerin yapısı ve özellikleri araştırılıyor. Bu araştırma hangi disipline aittir?",
    options: [
      "Polimer kimyası",
      "Analitik kimya",
      "Biyokimya",
      "Anorganik kimya",
      "Fizikokimya"
    ],
    correct: 0,
    explain: "Naylon, uzun zincirli polimerik bir malzemedir. Polimerlerin yapısı ve özellikleri polimer kimyasının konusudur."
  },
  {
    context: "Plastiklerin Özellikleri",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacı farklı plastiklerin esneklik, dayanıklılık ve ısıya karşı davranışlarını karşılaştırıyor. Bu çalışma hangi disiplinle ilişkilendirilebilir?",
    options: [
      "Biyokimya",
      "Polimer kimyası",
      "Analitik kimya",
      "Anorganik kimya",
      "Nükleer kimya"
    ],
    correct: 1,
    explain: "Plastiklerin önemli bölümü polimerlerden oluşur ve polimerlerin fiziksel özelliklerinin incelenmesi polimer kimyasıyla ilişkilidir."
  },
  {
    context: "Çözünme Hızı",
    kazanim: "KİM.9.1.2",
    text: "Bir tabletin farklı sıcaklıklardaki sularda çözünme hızının nasıl değiştiği araştırılıyor. Bu çalışma hangi disiplinle en yakından ilişkilidir?",
    options: [
      "Fizikokimya",
      "Organik kimya",
      "Biyokimya",
      "Polimer kimyası",
      "Anorganik kimya"
    ],
    correct: 0,
    explain: "Çözünme hızı ve sıcaklık gibi fiziksel değişkenler arasındaki ilişki fizikokimyanın çalışma alanına girer."
  },
  {
    context: "Tepkime Hızı",
    kazanim: "KİM.9.1.2",
    text: "Bir kimyasal tepkimenin sıcaklık arttıkça neden hızlandığı araştırılıyor. Bu çalışma hangi disiplinin konusudur?",
    options: [
      "Organik kimya",
      "Analitik kimya",
      "Fizikokimya",
      "Biyokimya",
      "Polimer kimyası"
    ],
    correct: 2,
    explain: "Tepkime hızı, sıcaklık ve enerji arasındaki ilişkilerin incelenmesi fizikokimyanın konuları arasındadır."
  },
  {
    context: "Denge Araştırması",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacı kimyasal tepkimelerde denge koşullarının sıcaklık ve basınçla nasıl değiştiğini inceliyor. Bu çalışma hangi disiplinle ilişkilidir?",
    options: [
      "Fizikokimya",
      "Polimer kimyası",
      "Organik kimya",
      "Biyokimya",
      "Analitik kimya"
    ],
    correct: 0,
    explain: "Kimyasal denge ile sıcaklık, basınç ve derişim arasındaki ilişkiler fizikokimyanın önemli konularındandır."
  },
  {
    context: "Pil ve Enerji",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırma grubunun pilde gerçekleşen kimyasal tepkimeler ile elektrik enerjisi arasındaki ilişkiyi incelemesi hangi disiplinle ilişkilidir?",
    options: [
      "Polimer kimyası",
      "Fizikokimya",
      "Organik kimya",
      "Analitik kimya",
      "Biyokimya"
    ],
    correct: 1,
    explain: "Kimyasal enerji ile elektrik enerjisi arasındaki dönüşümlerin incelenmesi fizikokimyanın elektrokimya alanıyla ilişkilidir."
  },
  {
    context: "Gazların Davranışı",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacı gazların sıcaklık ve basınç değişimlerine karşı davranışını inceliyor. Bu çalışma hangi disiplinle ilişkilidir?",
    options: [
      "Biyokimya",
      "Organik kimya",
      "Fizikokimya",
      "Polimer kimyası",
      "Analitik kimya"
    ],
    correct: 2,
    explain: "Maddelerin fiziksel koşullar altındaki davranışlarının incelenmesi fizikokimyanın çalışma alanlarından biridir."
  },
  {
    context: "Tuzların Özellikleri",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacı farklı tuzların kristal yapısını ve özelliklerini inceliyor. Bu çalışma öncelikle hangi disiplinle ilişkilidir?",
    options: [
      "Anorganik kimya",
      "Organik kimya",
      "Biyokimya",
      "Polimer kimyası",
      "Analitik kimya"
    ],
    correct: 0,
    explain: "Tuzlar, mineraller ve birçok karbon temelli olmayan bileşik anorganik kimyanın temel çalışma alanlarındandır."
  },
  {
    context: "Asit ve Bazlar",
    kazanim: "KİM.9.1.2",
    text: "Bir laboratuvarda farklı asit ve bazların özellikleri ile tepkimeleri inceleniyor. Bu çalışma hangi disiplinle ilişkilidir?",
    options: [
      "Polimer kimyası",
      "Biyokimya",
      "Anorganik kimya",
      "Organik kimya",
      "Nükleer kimya"
    ],
    correct: 2,
    explain: "Asit, baz ve tuzların önemli bir bölümü anorganik kimyanın temel konuları arasında yer alır."
  },
  {
    context: "Mineral Araştırması",
    kazanim: "KİM.9.1.2",
    text: "Bir bilim insanı doğal minerallerin kimyasal bileşimini ve özelliklerini araştırıyor. Bu çalışma hangi disipline aittir?",
    options: [
      "Anorganik kimya",
      "Organik kimya",
      "Biyokimya",
      "Polimer kimyası",
      "Fizikokimya"
    ],
    correct: 0,
    explain: "Minerallerin ve birçok karbon temelli olmayan bileşiğin yapısı ve özellikleri anorganik kimyanın konusudur."
  },
  {
    context: "Metal Alaşım",
    kazanim: "KİM.9.1.2",
    text: "Bir mühendis çelik ve diğer metal alaşımlarının yapısını ve özelliklerini inceliyor. Bu çalışma hangi kimya disiplinine yakındır?",
    options: [
      "Biyokimya",
      "Anorganik kimya",
      "Organik kimya",
      "Polimer kimyası",
      "Analitik kimya"
    ],
    correct: 1,
    explain: "Metaller ve metal alaşımlarının kimyasal özellikleri anorganik kimyanın önemli çalışma alanlarındandır."
  },
  {
    context: "Yarı İletken Malzeme",
    kazanim: "KİM.9.1.2",
    text: "Karbon temelli olmayan kristal bir yarı iletken malzemenin kimyasal özellikleri araştırılıyor. Bu çalışma hangi disiplinle ilişkilidir?",
    options: [
      "Anorganik kimya",
      "Biyokimya",
      "Organik kimya",
      "Polimer kimyası",
      "Analitik kimya"
    ],
    correct: 0,
    explain: "Karbon temelli olmayan bileşiklerin yapı ve özellikleri anorganik kimyanın çalışma alanına girer."
  },
  {
    context: "Su Analizi",
    kazanim: "KİM.9.1.2",
    text: "Bir laboratuvarda içme suyunda bulunan Ca²⁺, Mg²⁺ ve Fe³⁺ iyonlarının miktarları belirleniyor. Bu çalışmada hangi disiplin doğrudan kullanılır?",
    options: [
      "Analitik kimya",
      "Polimer kimyası",
      "Organik kimya",
      "Biyokimya",
      "Fizikokimya"
    ],
    correct: 0,
    explain: "Belirli iyonların miktarlarının ölçülmesi analitik kimyanın doğrudan çalışma alanıdır."
  },
  {
    context: "Gıda Analizi",
    kazanim: "KİM.9.1.2",
    text: "Bir gıda laboratuvarında ürünün içerdiği protein, yağ ve şeker miktarları belirleniyor. Bu çalışma hangi disiplinle en doğrudan ilişkilidir?",
    options: [
      "Organik kimya",
      "Analitik kimya",
      "Anorganik kimya",
      "Polimer kimyası",
      "Fizikokimya"
    ],
    correct: 1,
    explain: "Bir örnekteki bileşenlerin miktarlarının belirlenmesi analitik kimyanın temel amaçlarından biridir."
  },
  {
    context: "Hastane Laboratuvarı",
    kazanim: "KİM.9.1.2",
    text: "Hastane laboratuvarında kan örneklerinin kimyasal bileşimi çeşitli cihazlarla analiz ediliyor. Bu çalışmanın temel disiplinlerinden biri hangisidir?",
    options: [
      "Analitik kimya",
      "Polimer kimyası",
      "Anorganik kimya",
      "Organik kimya",
      "Nükleer kimya"
    ],
    correct: 0,
    explain: "Biyolojik örneklerin bileşenlerinin belirlenmesi ve miktarlarının ölçülmesinde analitik kimya yöntemlerinden yararlanılır."
  },
  {
    context: "Biyomolekül Analizi",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacı hücredeki belirli bir proteinin miktarını ölçmek için laboratuvar yöntemi kullanıyor. Bu çalışmada hangi iki disiplinin kesişiminden söz edilebilir?",
    options: [
      "Biyokimya ve analitik kimya",
      "Polimer kimyası ve anorganik kimya",
      "Organik kimya ve nükleer fizik",
      "Fizikokimya ve jeoloji",
      "Anorganik kimya ve astronomi"
    ],
    correct: 0,
    explain: "Protein canlı sistemlerle ilişkili olduğu için biyokimyanın; miktarının ölçülmesi ise analitik kimyanın konusudur."
  },
  {
    context: "İlaç Çözünürlüğü",
    kazanim: "KİM.9.1.2",
    text: "Bir ilacın sıcaklık değiştikçe çözünürlüğünün nasıl değiştiği araştırılıyor. Bu çalışmada en belirgin disiplin hangisidir?",
    options: [
      "Polimer kimyası",
      "Fizikokimya",
      "Anorganik kimya",
      "Analitik kimya",
      "Biyokimya"
    ],
    correct: 1,
    explain: "Çözünürlük ve sıcaklık arasındaki ilişki fizikokimyanın incelediği fiziksel-kimyasal olaylardan biridir."
  },
  {
    context: "Katalizör Araştırması",
    kazanim: "KİM.9.1.2",
    text: "Bir kimyasal tepkimenin katalizör kullanıldığında daha hızlı gerçekleştiği gözleniyor. Katalizörün tepkime hızına etkisinin incelenmesi hangi disiplinle ilişkilidir?",
    options: [
      "Fizikokimya",
      "Polimer kimyası",
      "Biyokimya",
      "Anorganik kimya",
      "Analitik kimya"
    ],
    correct: 0,
    explain: "Tepkime hızı ve katalizörlerin tepkimeler üzerindeki etkileri fizikokimyanın konuları arasındadır."
  },
  {
    context: "Kimya Disiplinlerini Ayırt Etme",
    kazanim: "KİM.9.1.2",
    text: "Aşağıdaki araştırmalardan hangisi analitik kimyanın doğrudan çalışma alanına girer?",
    options: [
      "Yeni bir polimer sentezlemek",
      "Bir numunedeki kurşun miktarını belirlemek",
      "Yeni bir ilaç molekülü tasarlamak",
      "Proteinlerin hücre içindeki görevini incelemek",
      "Bir tepkimenin hız mekanizmasını açıklamak"
    ],
    correct: 1,
    explain: "Bir numunedeki belirli bir maddenin miktarını belirlemek analitik kimyanın doğrudan çalışma alanıdır."
  },
  {
    context: "Kimya Disiplinlerini Ayırt Etme",
    kazanim: "KİM.9.1.2",
    text: "Aşağıdaki çalışmalardan hangisi organik kimyanın doğrudan çalışma alanına girer?",
    options: [
      "Bir sudaki iyon miktarını belirlemek",
      "Bir proteinin hücredeki görevini araştırmak",
      "Yeni bir karbon temelli bileşik sentezlemek",
      "Bir metalin kristal yapısını incelemek",
      "Bir gazın basınç-sıcaklık ilişkisini araştırmak"
    ],
    correct: 2,
    explain: "Karbon temelli bileşiklerin sentezi ve tepkimeleri organik kimyanın temel çalışma alanıdır."
  },
  {
    context: "Kimya Disiplinlerini Ayırt Etme",
    kazanim: "KİM.9.1.2",
    text: "Aşağıdaki çalışmalardan hangisi biyokimyanın doğrudan çalışma alanına girer?",
    options: [
      "Proteinlerin canlı hücrelerdeki görevlerinin incelenmesi",
      "Bir metal alaşımının yapısının incelenmesi",
      "Bir plastik malzemenin dayanıklılığının araştırılması",
      "Bir çözeltinin derişiminin ölçülmesi",
      "Bir gazın basıncının ölçülmesi"
    ],
    correct: 0,
    explain: "Canlılardaki kimyasal maddeler ve süreçler biyokimyanın temel çalışma alanıdır."
  },
  {
    context: "Kimya Disiplinlerini Ayırt Etme",
    kazanim: "KİM.9.1.2",
    text: "Aşağıdaki çalışmalardan hangisi polimer kimyasına örnektir?",
    options: [
      "Kan örneğindeki glikoz miktarını ölçmek",
      "Yeni bir plastik polimerin sentezlenmesini araştırmak",
      "Bir mineralin iyonlarını belirlemek",
      "Proteinlerin enzimatik faaliyetini incelemek",
      "Bir gazın basıncını ölçmek"
    ],
    correct: 1,
    explain: "Polimerlerin sentezi, yapısı ve özelliklerinin incelenmesi polimer kimyasının çalışma alanıdır."
  },
  {
    context: "Kimya Disiplinlerini Ayırt Etme",
    kazanim: "KİM.9.1.2",
    text: "Aşağıdaki çalışmalardan hangisi fizikokimyaya örnektir?",
    options: [
      "Bir tepkimenin sıcaklık değişimine bağlı hızını araştırmak",
      "Yeni bir polimer üretmek",
      "DNA'nın yapısını incelemek",
      "Bir numunedeki metal miktarını ölçmek",
      "Yeni bir organik ilaç sentezlemek"
    ],
    correct: 0,
    explain: "Tepkime hızı ile sıcaklık arasındaki ilişkinin incelenmesi fizikokimyanın çalışma alanıdır."
  },
  {
    context: "Disiplinlerin Birlikte Kullanılması",
    kazanim: "KİM.9.1.2",
    text: "Yeni bir ilaç geliştiriliyor. İlacın molekülü sentezleniyor, kandaki miktarı ölçülüyor ve vücutta nasıl etki gösterdiği araştırılıyor. Bu süreçte hangi disiplinlerin birlikte kullanılması beklenir?",
    options: [
      "Yalnızca anorganik kimya",
      "Organik kimya, analitik kimya ve biyokimya",
      "Yalnızca polimer kimyası",
      "Yalnızca fizikokimya",
      "Yalnızca anorganik kimya ve polimer kimyası"
    ],
    correct: 1,
    explain: "Molekülün sentezi organik kimya, miktarının belirlenmesi analitik kimya, canlı sistemdeki etkilerinin incelenmesi ise biyokimya ile ilişkilidir."
  },
  {
    context: "Çevre Analizi",
    kazanim: "KİM.9.1.2",
    text: "Bir gölden alınan su örneğinde ağır metal miktarları belirleniyor ve ardından bu metallerin canlılar üzerindeki etkileri araştırılıyor. Bu çalışmada hangi disiplinlerin birlikte kullanılması beklenir?",
    options: [
      "Analitik kimya ve biyokimya",
      "Yalnızca polimer kimyası",
      "Organik kimya ve astronomi",
      "Yalnızca fizikokimya",
      "Yalnızca anorganik kimya"
    ],
    correct: 0,
    explain: "Metal miktarlarının belirlenmesi analitik kimya; canlı sistemler üzerindeki etkilerinin incelenmesi biyokimya ile ilişkilidir."
  },
  {
    context: "Yeni Malzeme Geliştirme",
    kazanim: "KİM.9.1.2",
    text: "Bir ekip yeni bir polimer üretip bu polimerin sıcaklık değişimlerinde gösterdiği davranışı inceliyor. Bu çalışmada hangi disiplinler birlikte düşünülebilir?",
    options: [
      "Polimer kimyası ve fizikokimya",
      "Yalnızca biyokimya",
      "Yalnızca analitik kimya",
      "Anorganik kimya ve tarih",
      "Yalnızca organik kimya"
    ],
    correct: 0,
    explain: "Polimerin sentezi ve yapısı polimer kimyasıyla, sıcaklığa bağlı fiziksel davranışı ise fizikokimyayla ilişkilendirilebilir."
  },
  {
    context: "Kimya Disiplinlerinin Kapsamı",
    kazanim: "KİM.9.1.2",
    text: "Aşağıdakilerden hangisi kimya disiplinlerinin farklı alanlarda uzmanlaşmasının temel nedenini en iyi açıklar?",
    options: [
      "Kimyanın yalnızca laboratuvarda yapılması",
      "Maddelerin yapı, özellik ve davranışlarının çok farklı yönlerden incelenebilmesi",
      "Her kimyasalın aynı özellikte olması",
      "Kimyanın diğer bilimlerden tamamen bağımsız olması",
      "Kimyada deney yapılmaması"
    ],
    correct: 1,
    explain: "Kimya çok geniş bir bilim alanıdır. Maddelerin yapısı, özellikleri, tepkimeleri ve canlı sistemlerle ilişkileri farklı disiplinlerde ayrıntılı olarak incelenir."
  },
  {
    context: "Bir Laboratuvar Ekibi",
    kazanim: "KİM.9.1.2",
    text: "Bir laboratuvarda yeni bir malzeme geliştiriliyor. Bir uzman malzemenin moleküler yapısını, başka bir uzman bileşimini, üçüncü uzman ise sıcaklıkla değişen özelliklerini inceliyor. Bu durum neyi gösterir?",
    options: [
      "Kimya disiplinlerinin birbirinden tamamen bağımsız olduğunu",
      "Farklı kimya disiplinlerinin aynı araştırmada birlikte kullanılabileceğini",
      "Kimyada uzmanlaşmanın gereksiz olduğunu",
      "Yalnızca analitik kimyanın önemli olduğunu",
      "Kimya disiplinlerinin yalnızca okulda kullanıldığını"
    ],
    correct: 1,
    explain: "Gerçek bilimsel araştırmalarda farklı kimya disiplinleri aynı problemin farklı yönlerini açıklamak için birlikte kullanılabilir."
  },
  {
    context: "Günlük Hayatta Kimya Disiplinleri",
    kazanim: "KİM.9.1.2",
    text: "Bir güneş kremi geliştirilirken aktif maddenin sentezi, ürün içindeki miktarının belirlenmesi ve cilt üzerindeki etkisinin araştırılması gerekiyor. Bu çalışmalar sırasıyla hangi disiplinlerle ilişkilendirilebilir?",
    options: [
      "Organik kimya – analitik kimya – biyokimya",
      "Anorganik kimya – polimer kimyası – fizikokimya",
      "Polimer kimyası – anorganik kimya – analitik kimya",
      "Biyokimya – fizikokimya – organik kimya",
      "Yalnızca analitik kimya"
    ],
    correct: 0,
    explain: "Aktif organik maddenin sentezi organik kimya; miktarının belirlenmesi analitik kimya; canlı doku üzerindeki etkilerinin araştırılması biyokimya ile ilişkilidir."
  },
  {
    context: "Kimya Disiplinlerini Sınıflandırma",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacının 'Bu örnekte hangi maddeler var ve her birinden ne kadar bulunuyor?' sorusuna cevap araması hangi disiplinin temel sorularındandır?",
    options: [
      "Analitik kimya",
      "Polimer kimyası",
      "Biyokimya",
      "Organik kimya",
      "Fizikokimya"
    ],
    correct: 0,
    explain: "Analitik kimya maddelerin nitel ve nicel analizini yaparak 'ne var?' ve 'ne kadar var?' sorularına cevap arar."
  },
  {
    context: "Kimya Disiplinlerini Sınıflandırma",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacının 'Bu karbon temelli molekül nasıl sentezlenebilir ve hangi tepkimeleri verir?' sorusuna cevap araması hangi disiplinle ilişkilidir?",
    options: [
      "Biyokimya",
      "Analitik kimya",
      "Organik kimya",
      "Anorganik kimya",
      "Polimer kimyası"
    ],
    correct: 2,
    explain: "Karbon temelli bileşiklerin yapısı, sentezi ve tepkimeleri organik kimyanın temel konularıdır."
  },
  {
    context: "Kimya Disiplinlerini Sınıflandırma",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacının 'Bu kimyasal sistem sıcaklık değiştiğinde neden farklı davranıyor?' sorusunu incelemesi hangi disiplinle daha yakından ilişkilidir?",
    options: [
      "Fizikokimya",
      "Polimer kimyası",
      "Organik kimya",
      "Analitik kimya",
      "Biyokimya"
    ],
    correct: 0,
    explain: "Kimyasal sistemlerin sıcaklık, basınç, enerji ve derişim gibi fiziksel değişkenlerle ilişkisi fizikokimyanın konusudur."
  },
  {
    context: "Kimya Disiplinlerini Sınıflandırma",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacının 'Canlı hücrede bu molekül hangi kimyasal görevi yapıyor?' sorusuna cevap araması hangi disiplinle ilişkilidir?",
    options: [
      "Analitik kimya",
      "Biyokimya",
      "Anorganik kimya",
      "Polimer kimyası",
      "Fizikokimya"
    ],
    correct: 1,
    explain: "Canlı sistemlerdeki moleküllerin görevleri ve kimyasal süreçleri biyokimyanın çalışma alanına girer."
  },
  {
    context: "Kimya Disiplinlerini Sınıflandırma",
    kazanim: "KİM.9.1.2",
    text: "Bir araştırmacının 'Bu uzun zincirli molekülün yapısı malzemenin dayanıklılığını nasıl etkiliyor?' sorusunu incelemesi hangi disiplinle ilişkilidir?",
    options: [
      "Polimer kimyası",
      "Analitik kimya",
      "Biyokimya",
      "Anorganik kimya",
      "Nükleer kimya"
    ],
    correct: 0,
    explain: "Uzun zincirli büyük moleküller polimerlerdir. Polimerlerin yapısı ile özellikleri arasındaki ilişki polimer kimyasında incelenir."
  }
 ],
 kariyer: [
  {
    context: "Bir Fabrikadaki Kalite Kontrol Analisti",
    kazanim: "KİM.9.1.7",
    text: "İki yıllık bir kimya teknolojisi ön lisans programını tamamlayan bir kişi, bir gıda fabrikasında ürünlerin bileşimini kontrol eden bir pozisyonda çalışmaya başlıyor. Bu kişinin eğitim düzeyi ve unvanı hakkında hangisi doğrudur?",
    options: [
      "Kimya mühendisi unvanına sahiptir",
      "Kimya öğretmeni unvanına sahiptir",
      "Kimyager unvanına sahiptir",
      "Kimya teknikeri unvanına sahiptir",
      "Polimer mühendisi unvanına sahiptir"
    ],
    correct: 3,
    explain: "Kimya teknolojisi ön lisans programını tamamlayan kişiler kimya teknikeri olarak görev yapabilir."
  },
  {
    context: "Laboratuvarda Çalışan Tekniker",
    kazanim: "KİM.9.1.7",
    text: "Bir laboratuvarda numune hazırlama, çözelti hazırlama ve cihazların günlük kullanımını gerçekleştiren çalışan iki yıllık kimya teknolojisi mezunudur. Bu kişinin görev tanımı aşağıdakilerden hangisine daha uygundur?",
    options: [
      "Kimya teknikeri",
      "Kimya mühendisi",
      "Kimyager",
      "Kimya öğretmeni",
      "Tıp doktoru"
    ],
    correct: 0,
    explain: "Ön lisans düzeyindeki kimya teknolojisi eğitimi, laboratuvar ve kalite kontrol gibi alanlarda teknikerlik görevlerine hazırlık sağlar."
  },
  {
    context: "Üniversitede Kimya Eğitimi",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci maddelerin yapısını, özelliklerini ve dönüşümlerini derinlemesine incelemek istiyor. Üniversitede doğrudan kimya bilimi üzerine dört yıllık eğitim almak isteyen bu öğrencinin tercih edebileceği bölüm hangisidir?",
    options: [
      "Kimya",
      "Tarih",
      "Mimarlık",
      "Hukuk",
      "Gazetecilik"
    ],
    correct: 0,
    explain: "Kimya bölümü, maddelerin yapısı, özellikleri, tepkimeleri ve dönüşümleri üzerine lisans eğitimi verir."
  },
  {
    context: "Kimya Mühendisinin Çalışma Alanı",
    kazanim: "KİM.9.1.7",
    text: "Bir kimya mühendisi laboratuvarda geliştirilmiş bir üretim yönteminin fabrikada büyük ölçekli uygulanması için çalışıyor. Bu görev aşağıdakilerden hangisiyle en çok ilişkilidir?",
    options: [
      "Tarih araştırması",
      "Kimyasal süreçlerin tasarlanması ve ölçeklendirilmesi",
      "Edebi metinlerin incelenmesi",
      "Dil öğretimi",
      "Arkeolojik kazı"
    ],
    correct: 1,
    explain: "Kimya mühendisleri kimyasal üretim süreçlerinin tasarlanması, geliştirilmesi ve büyük ölçekte uygulanmasıyla ilgilenebilir."
  },
  {
    context: "İlaç Araştırma Laboratuvarı",
    kazanim: "KİM.9.1.7",
    text: "Bir araştırmacı yeni bir ilacın etken maddesini geliştiriyor ve bu maddenin yapısını inceleyerek farklı türevler sentezliyor. Bu çalışma hangi kariyer alanıyla doğrudan ilişkilidir?",
    options: [
      "Kimya ve ilaç araştırmaları",
      "Spor yönetimi",
      "Mimarlık",
      "Turizm",
      "Tarih"
    ],
    correct: 0,
    explain: "İlaç geliştirme ve etken madde sentezi kimya biliminin önemli uygulama alanlarındandır."
  },
  {
    context: "Gıda Laboratuvarı",
    kazanim: "KİM.9.1.7",
    text: "Bir gıda fabrikasında çalışan kimyager, ürünlerdeki katkı maddelerinin miktarını ve bileşimini analiz ediyor. Bu çalışma hangi sektöre örnektir?",
    options: [
      "Tekstil",
      "Gıda",
      "İnşaat",
      "Ulaştırma",
      "Turizm"
    ],
    correct: 1,
    explain: "Gıda sektöründe ürünlerin bileşiminin ve güvenliğinin kimyasal analizlerle kontrol edilmesi önemli bir çalışma alanıdır."
  },
  {
    context: "Su Arıtma Tesisinde Çalışma",
    kazanim: "KİM.9.1.7",
    text: "Bir ekip, içme suyundaki zararlı maddeleri uzaklaştırmak için yeni bir arıtma yöntemi geliştiriyor. Bu çalışma hangi kariyer alanıyla en yakından ilişkilidir?",
    options: [
      "Çevre ve sürdürülebilirlik",
      "Moda tasarımı",
      "Basın-yayın",
      "Arkeoloji",
      "Müzik"
    ],
    correct: 0,
    explain: "Su arıtma, atık yönetimi ve çevre kirliliğinin azaltılması kimyanın çevre ve sürdürülebilirlik alanındaki uygulamalarıdır."
  },
  {
    context: "Pil Teknolojisi",
    kazanim: "KİM.9.1.7",
    text: "Bir araştırma ekibi elektrikli araçlarda kullanılabilecek daha yüksek kapasiteli piller geliştirmeye çalışıyor. Bu çalışma en çok hangi sektörle ilişkilidir?",
    options: [
      "Enerji",
      "Turizm",
      "Eğitim",
      "Basın",
      "Tarım tarihi"
    ],
    correct: 0,
    explain: "Pil ve enerji depolama teknolojileri enerji alanında kimyanın önemli uygulamalarındandır."
  },
  {
    context: "Boya Fabrikası",
    kazanim: "KİM.9.1.7",
    text: "Bir kimya şirketinde çalışan uzman, daha dayanıklı ve çevreye daha az zarar veren boyalar geliştirmek için çalışıyor. Bu çalışma hangi sektörle doğrudan ilişkilidir?",
    options: [
      "Kimya endüstrisi",
      "Turizm",
      "Spor",
      "Hukuk",
      "Müzik"
    ],
    correct: 0,
    explain: "Boya, plastik, deterjan ve benzeri ürünlerin geliştirilmesi kimya endüstrisinin çalışma alanlarındandır."
  },
  {
    context: "Polimer Araştırması",
    kazanim: "KİM.9.1.7",
    text: "Bir bilim insanı plastiklerin daha dayanıklı, hafif ve geri dönüştürülebilir hâle getirilmesi üzerine çalışıyor. Bu çalışma hangi alana örnektir?",
    options: [
      "Malzeme ve polimer teknolojileri",
      "Astronomi",
      "Tarih",
      "Coğrafya",
      "Müzik"
    ],
    correct: 0,
    explain: "Polimerlerin geliştirilmesi ve yeni malzemelerin tasarlanması kimyanın malzeme teknolojileriyle kesişen alanlarındandır."
  },
  {
    context: "Kimya Öğretmeni",
    kazanim: "KİM.9.1.7",
    text: "Bir kişi üniversitede kimya öğretmenliği eğitimi alarak lise öğrencilerine kimya dersi vermeye başlıyor. Bu kariyer yolu hangi alanla ilişkilidir?",
    options: [
      "Kimya eğitimi",
      "Enerji üretimi",
      "İlaç sanayisi",
      "Madencilik",
      "Gıda üretimi"
    ],
    correct: 0,
    explain: "Kimya öğretmenliği, kimya bilgisinin eğitim alanında kullanılmasına yönelik bir kariyer yoludur."
  },
  {
    context: "Akademik Araştırma",
    kazanim: "KİM.9.1.7",
    text: "Bir bilim insanı üniversitede yeni maddelerin özelliklerini araştırıyor ve elde ettiği sonuçları bilimsel makalelerde yayımlıyor. Bu kariyer hangi alanla ilişkilidir?",
    options: [
      "Akademik araştırma",
      "Turizm",
      "Spor",
      "Halkla ilişkiler",
      "Ulaştırma"
    ],
    correct: 0,
    explain: "Üniversitelerde bilimsel araştırma yapmak ve sonuçları yayımlamak akademik kariyerin temel özelliklerindendir."
  },
  {
    context: "Kalite Kontrol",
    kazanim: "KİM.9.1.7",
    text: "Bir fabrikada üretilen ürünlerden düzenli olarak numune alınarak ürünlerin standartlara uygunluğu kontrol ediliyor. Bu görev hangi çalışma alanına örnektir?",
    options: [
      "Kalite kontrol",
      "Grafik tasarım",
      "Turizm rehberliği",
      "Spor yönetimi",
      "Tarih"
    ],
    correct: 0,
    explain: "Ürünlerin bileşiminin ve standartlara uygunluğunun kontrol edilmesi kimyada kalite kontrol çalışmalarının önemli bir parçasıdır."
  },
  {
    context: "Adli Kimya Laboratuvarı",
    kazanim: "KİM.9.1.7",
    text: "Bir laboratuvar uzmanı olay yerinden alınan örneklerde belirli kimyasal maddelerin bulunup bulunmadığını araştırıyor. Bu çalışma hangi alana örnektir?",
    options: [
      "Adli kimya",
      "Astronomi",
      "Mimarlık",
      "Jeoloji tarihi",
      "Dilbilim"
    ],
    correct: 0,
    explain: "Olay yeri örneklerinin kimyasal analizlerle incelenmesi adli kimyanın çalışma alanlarından biridir."
  },
  {
    context: "Kozmetik Ürün Geliştirme",
    kazanim: "KİM.9.1.7",
    text: "Bir şirket cilt bakım ürünlerinin formülünü geliştirirken maddelerin birbirleriyle uyumunu ve ürünün kararlılığını araştırıyor. Bu çalışma hangi sektöre örnektir?",
    options: [
      "Kozmetik",
      "Ulaştırma",
      "Turizm",
      "Hukuk",
      "Mimarlık"
    ],
    correct: 0,
    explain: "Kozmetik ürünlerin formülasyonu, kararlılığı ve güvenliği kimyanın uygulama alanlarındandır."
  },
  {
    context: "Tarımda Gübre Geliştirme",
    kazanim: "KİM.9.1.7",
    text: "Bir araştırmacı bitkilerin ihtiyaç duyduğu elementleri daha verimli sağlayabilecek gübreler geliştirmeye çalışıyor. Bu çalışma hangi alanla ilişkilidir?",
    options: [
      "Tarım ve kimya",
      "Müzik",
      "Turizm",
      "Spor",
      "Basın"
    ],
    correct: 0,
    explain: "Gübrelerin geliştirilmesi ve bitki besinlerinin incelenmesi kimyanın tarımsal uygulamalarından biridir."
  },
  {
    context: "Petrokimya Tesisi",
    kazanim: "KİM.9.1.7",
    text: "Bir tesiste petrolden çeşitli kimyasal ürünler elde edilmekte ve bu ürünler plastik, boya ve yakıt üretiminde kullanılmaktadır. Bu çalışma hangi sektörle ilgilidir?",
    options: [
      "Petrokimya",
      "Turizm",
      "Eğitim",
      "Spor",
      "Mimarlık"
    ],
    correct: 0,
    explain: "Petrolden kimyasal ürünlerin elde edilmesi petrokimya sektörünün temel faaliyetlerindendir."
  },
  {
    context: "Nanoteknoloji Laboratuvarı",
    kazanim: "KİM.9.1.7",
    text: "Bir araştırma grubu çok küçük boyutlardaki malzemelerin özelliklerini değiştirerek daha işlevsel ürünler geliştirmeye çalışıyor. Bu çalışma hangi alanla ilişkilidir?",
    options: [
      "Nanoteknoloji ve malzeme bilimi",
      "Turizm",
      "Tarih",
      "Spor",
      "Müzik"
    ],
    correct: 0,
    explain: "Nanometre ölçeğindeki malzemelerin özelliklerinin incelenmesi nanoteknoloji ve malzeme bilimiyle ilişkilidir."
  },
  {
    context: "Enerji Üretiminde Kimya",
    kazanim: "KİM.9.1.7",
    text: "Bir araştırmacı yakıt hücrelerinde gerçekleşen kimyasal tepkimelerden daha verimli elektrik elde etmeye çalışıyor. Bu çalışma hangi alana girer?",
    options: [
      "Enerji teknolojileri",
      "Turizm",
      "Eğitim tarihi",
      "Spor",
      "Mimarlık"
    ],
    correct: 0,
    explain: "Yakıt hücreleri ve enerji dönüşüm teknolojileri kimyanın enerji alanındaki uygulamalarındandır."
  },
  {
    context: "Çevre Analizi",
    kazanim: "KİM.9.1.7",
    text: "Bir laboratuvarda nehir suyundan alınan örneklerde ağır metal miktarları ölçülüyor. Bu çalışma hangi amaçla yapılmaktadır?",
    options: [
      "Çevre kirliliğini belirlemek",
      "Suyun rengini değiştirmek",
      "Yeni bir müzik türü geliştirmek",
      "Tarihî eserleri sınıflandırmak",
      "Sporcuları seçmek"
    ],
    correct: 0,
    explain: "Sudaki ağır metal miktarlarının belirlenmesi çevre kirliliğinin izlenmesi ve değerlendirilmesinde kullanılır."
  },
  {
    context: "İlaç Kalite Kontrolü",
    kazanim: "KİM.9.1.7",
    text: "Bir ilaç fabrikasında üretilen tabletlerden alınan örneklerde etken madde miktarı ölçülüyor. Bu çalışmanın temel amacı nedir?",
    options: [
      "Ürünün kalite ve standartlara uygunluğunu kontrol etmek",
      "Tabletin rengini değiştirmek",
      "Fabrikanın reklamını yapmak",
      "Yeni bir bina tasarlamak",
      "Çalışanların vardiyasını belirlemek"
    ],
    correct: 0,
    explain: "Etken madde miktarının ölçülmesi ilacın kalite ve standartlara uygunluğunun kontrol edilmesini sağlar."
  },
  {
    context: "Kimya ve Sağlık",
    kazanim: "KİM.9.1.7",
    text: "Bir araştırmacı biyolojik örneklerdeki molekülleri inceleyerek hastalıkların tanısına yardımcı olacak yöntemler geliştiriyor. Bu çalışma hangi alanların kesişimindedir?",
    options: [
      "Kimya ve sağlık/biyokimya",
      "Kimya ve müzik",
      "Kimya ve spor tarihi",
      "Kimya ve mimarlık tarihi",
      "Kimya ve turizm"
    ],
    correct: 0,
    explain: "Biyolojik moleküllerin incelenmesi kimya, biyokimya ve sağlık bilimlerinin kesişiminde yer alır."
  },
  {
    context: "Yeni Nesil Batarya",
    kazanim: "KİM.9.1.7",
    text: "Bir ekip daha uzun süre çalışan ve daha kısa sürede şarj olabilen bataryalar geliştirmeye çalışıyor. Bu çalışmada kimyanın hangi uygulama alanından yararlanılır?",
    options: [
      "Enerji depolama ve malzeme kimyası",
      "Tarih",
      "Dilbilim",
      "Turizm",
      "Spor"
    ],
    correct: 0,
    explain: "Batarya geliştirme, elektrokimya, enerji depolama ve malzeme kimyasıyla yakından ilişkilidir."
  },
  {
    context: "Geri Dönüşüm Tesisi",
    kazanim: "KİM.9.1.7",
    text: "Bir tesiste plastik atıklar türlerine göre ayrılıyor ve yeniden kullanılabilecek hammaddelere dönüştürülüyor. Kimya bu sürece nasıl katkı sağlar?",
    options: [
      "Maddelerin yapısını ve özelliklerini inceleyerek uygun ayırma ve dönüşüm yöntemleri geliştirebilir.",
      "Atıkların rengini yalnızca gözlemleyerek",
      "Atıkların tarihini araştırarak",
      "Tesisin reklamını yaparak",
      "Çalışanların kıyafetlerini tasarlayarak"
    ],
    correct: 0,
    explain: "Kimya, maddelerin yapısını ve özelliklerini kullanarak geri dönüşüm ve yeniden kullanım süreçlerinin geliştirilmesine katkı sağlar."
  },
  {
    context: "Biyobozunur Ambalaj",
    kazanim: "KİM.9.1.7",
    text: "Bir firma doğada daha kısa sürede parçalanabilen ambalaj malzemeleri geliştirmek istiyor. Kimyanın hangi katkısı bu hedefe doğrudan yardımcı olabilir?",
    options: [
      "Yeni özelliklere sahip malzemelerin tasarlanması",
      "Reklam sloganı hazırlanması",
      "Ürünlerin mağazada sergilenmesi",
      "Taşıma araçlarının boyanması",
      "Satış fiyatının belirlenmesi"
    ],
    correct: 0,
    explain: "Kimya, malzemelerin moleküler yapısını değiştirerek biyobozunurluk gibi istenen özelliklerin geliştirilmesine katkı sağlayabilir."
  },
  {
    context: "Moleküler Gastronomi",
    kazanim: "KİM.9.1.7",
    text: "Bir aşçı yemeklerin dokusunu ve aromasını bilimsel yöntemlerle geliştirmek için proteinlerin ve diğer moleküllerin davranışlarını inceliyor. Bu yaklaşım hangi alanla ilişkilidir?",
    options: [
      "Moleküler gastronomi",
      "Astronomi",
      "Arkeoloji",
      "Hukuk",
      "Jeoloji"
    ],
    correct: 0,
    explain: "Moleküler gastronomi, yemek hazırlama süreçlerini moleküler düzeyde açıklamak ve geliştirmek için kimyadan yararlanır."
  },
  {
    context: "Tekstil Kimyası",
    kazanim: "KİM.9.1.7",
    text: "Bir tekstil firması kumaşların daha dayanıklı, leke tutmaz ve su geçirmez olması için yeni işlemler geliştiriyor. Bu çalışmada kimyanın hangi uygulaması görülür?",
    options: [
      "Tekstil ve malzeme kimyası",
      "Turizm",
      "Spor",
      "Tarih",
      "Müzik"
    ],
    correct: 0,
    explain: "Tekstil liflerinin ve yüzeylerinin kimyasal özelliklerinin değiştirilmesi tekstil kimyasının uygulama alanıdır."
  },
  {
    context: "Madencilikte Kimya",
    kazanim: "KİM.9.1.7",
    text: "Bir ekip cevher içerisindeki değerli metalin daha verimli ayrılması için kimyasal yöntemler araştırıyor. Kimyanın hangi alandaki katkısı söz konusudur?",
    options: [
      "Madencilik ve metalurji",
      "Turizm",
      "Eğitim",
      "Spor",
      "Müzik"
    ],
    correct: 0,
    explain: "Metallerin cevherlerden ayrılması ve saflaştırılması kimya ve metalurjinin önemli uygulama alanlarındandır."
  },
  {
    context: "Yakıt Geliştirme",
    kazanim: "KİM.9.1.7",
    text: "Bir araştırmacı daha az kirletici ve daha verimli yakıtlar geliştirmeye çalışıyor. Bu çalışma hangi alanla doğrudan ilişkilidir?",
    options: [
      "Enerji ve çevre",
      "Turizm",
      "Müzik",
      "Spor",
      "Tarih"
    ],
    correct: 0,
    explain: "Yakıtların geliştirilmesi hem enerji ihtiyacının karşılanması hem de çevresel etkilerin azaltılması açısından kimyanın önemli çalışma alanıdır."
  },
  {
    context: "Laboratuvar Cihazı Geliştirme",
    kazanim: "KİM.9.1.7",
    text: "Bir ekip kimyasal maddelerin çok küçük miktarlarını ölçebilen yeni bir analiz cihazı geliştiriyor. Bu çalışmada hangi alanlar birlikte kullanılabilir?",
    options: [
      "Kimya ve teknoloji",
      "Tarih ve edebiyat",
      "Spor ve müzik",
      "Turizm ve hukuk",
      "Mimarlık ve tarih"
    ],
    correct: 0,
    explain: "Kimyasal analiz cihazlarının geliştirilmesi kimya bilgisinin teknoloji ve mühendislikle birlikte kullanılmasını gerektirir."
  },
  {
    context: "Kimyasal Güvenlik Uzmanı",
    kazanim: "KİM.9.1.7",
    text: "Bir uzman fabrikadaki kimyasal maddelerin güvenli şekilde depolanması, etiketlenmesi ve kullanılmasına yönelik prosedürler hazırlıyor. Bu görev hangi ihtiyaca yöneliktir?",
    options: [
      "Kimyasal güvenliği sağlamak",
      "Ürünlerin reklamını yapmak",
      "Çalışanların maaşını hesaplamak",
      "Bina tasarlamak",
      "Satış hedefi belirlemek"
    ],
    correct: 0,
    explain: "Kimyasalların güvenli depolanması, etiketlenmesi ve kullanılması iş sağlığı ve kimyasal güvenlik açısından önemlidir."
  },
  {
    context: "Su Kalitesi Uzmanı",
    kazanim: "KİM.9.1.7",
    text: "Bir uzman içme suyundaki iyonların ve çözünmüş maddelerin miktarlarını düzenli olarak ölçüyor. Bu kişinin çalışmasının temel amacı nedir?",
    options: [
      "Su kalitesini değerlendirmek",
      "Suyun tadını değiştirmek",
      "Suyun rengini değiştirmek",
      "Suyu ısıtmak",
      "Suyun satışını artırmak"
    ],
    correct: 0,
    explain: "Sudaki çözünmüş maddelerin ve iyonların ölçülmesi su kalitesinin değerlendirilmesinde kullanılır."
  },
  {
    context: "Kimya ve Sürdürülebilirlik",
    kazanim: "KİM.9.1.7",
    text: "Bir şirket üretim sırasında oluşan atık miktarını azaltmak ve daha az tehlikeli maddeler kullanmak istiyor. Bu yaklaşım kimyanın hangi anlayışıyla ilişkilidir?",
    options: [
      "Sürdürülebilir ve yeşil kimya",
      "Astronomi",
      "Tarih",
      "Spor bilimi",
      "Mimarlık"
    ],
    correct: 0,
    explain: "Atıkları ve tehlikeli maddelerin kullanımını azaltmaya yönelik kimyasal süreçler yeşil kimya ve sürdürülebilirlik anlayışıyla ilişkilidir."
  },
  {
    context: "Yeşil Kimya Laboratuvarı",
    kazanim: "KİM.9.1.7",
    text: "Bir araştırmacı gerçekleştirdiği tepkimede daha az çözücü ve daha az tehlikeli madde kullanmaya çalışıyor. Bu yaklaşımın temel amacı nedir?",
    options: [
      "Çevresel etkiyi ve tehlikeyi azaltmak",
      "Deney süresini mutlaka uzatmak",
      "Daha fazla atık üretmek",
      "Kimyasal madde tüketimini artırmak",
      "Ürün sayısını azaltmak"
    ],
    correct: 0,
    explain: "Yeşil kimyanın amaçlarından biri tehlikeli maddelerin kullanımını ve atık oluşumunu azaltmaktır."
  },
  {
    context: "Kimya ve Uzay Teknolojileri",
    kazanim: "KİM.9.1.7",
    text: "Uzay araçlarında kullanılmak üzere yüksek sıcaklığa dayanıklı yeni malzemeler geliştiriliyor. Bu çalışma kimyanın hangi uygulama alanıyla ilişkilidir?",
    options: [
      "İleri malzeme teknolojileri",
      "Turizm",
      "Gıda servisi",
      "Spor yönetimi",
      "Tarih"
    ],
    correct: 0,
    explain: "Yüksek sıcaklığa ve zorlu koşullara dayanıklı malzemelerin geliştirilmesi ileri malzeme kimyasının uygulamalarındandır."
  },
  {
    context: "Kariyer Seçimi",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci yeni maddeler sentezlemekten ve laboratuvarda deney yapmaktan hoşlanıyor. Kimya alanında kariyer planlarken aşağıdakilerden hangisi onun ilgisine en uygun seçeneklerden biridir?",
    options: [
      "Kimya araştırmacılığı",
      "Spor hakemliği",
      "Turizm rehberliği",
      "Mimarlık tarihi",
      "Gazetecilik"
    ],
    correct: 0,
    explain: "Yeni maddeler sentezlemek ve laboratuvar araştırmaları yürütmek kimya araştırmacılığıyla doğrudan ilişkilidir."
  },
  {
    context: "Kimya Mezununun Çalışabileceği Alan",
    kazanim: "KİM.9.1.7",
    text: "Bir kimya lisans mezunu aşağıdaki alanlardan hangisinde çalışabilir?",
    options: [
      "İlaç, gıda, boya, çevre veya araştırma laboratuvarları",
      "Yalnızca spor salonlarında",
      "Yalnızca turizm sektöründe",
      "Yalnızca hukuk bürolarında",
      "Hiçbir laboratuvarda çalışamaz"
    ],
    correct: 0,
    explain: "Kimya eğitimi alan kişiler birçok sektörde, özellikle laboratuvar, üretim, kalite kontrol ve araştırma alanlarında görev alabilir."
  },
  {
    context: "Kimya ve Adli Bilimler",
    kazanim: "KİM.9.1.7",
    text: "Bir adli laboratuvar uzmanı olay yerinden alınan toz, sıvı veya biyolojik örneklerin kimyasal özelliklerini inceliyor. Bu çalışmanın temel amacı nedir?",
    options: [
      "Olayla ilgili bilimsel kanıt elde etmek",
      "Örneklerin rengini değiştirmek",
      "Örnekleri satmak",
      "Laboratuvarı tanıtmak",
      "Yeni bir spor dalı geliştirmek"
    ],
    correct: 0,
    explain: "Adli kimyasal analizler olayların aydınlatılmasına yardımcı olabilecek bilimsel kanıtların elde edilmesini sağlar."
  },
  {
    context: "Kozmetik Güvenliği",
    kazanim: "KİM.9.1.7",
    text: "Bir kozmetik ürün piyasaya sunulmadan önce içeriğindeki maddelerin güvenliği ve ürünün kararlılığı test ediliyor. Bu süreç neden önemlidir?",
    options: [
      "Ürünün güvenli ve uygun olduğunun değerlendirilmesi için",
      "Ürünün daha pahalı satılması için",
      "Ürünün renginin mutlaka değiştirilmesi için",
      "Reklam süresini artırmak için",
      "Ambalajı büyütmek için"
    ],
    correct: 0,
    explain: "Kozmetik ürünlerin güvenliği, içeriği ve kararlılığı tüketici sağlığı açısından değerlendirilmelidir."
  },
  {
    context: "Kimya ve Eğitim",
    kazanim: "KİM.9.1.7",
    text: "Bir kimya öğretmeni öğrencilerine deney yaptırırken kimyasal maddelerin özelliklerini ve güvenli kullanımını da öğretiyor. Burada kimya bilgisinin hangi kullanım alanı öne çıkar?",
    options: [
      "Eğitim",
      "Madencilik",
      "Petrokimya",
      "Gıda üretimi",
      "Tekstil"
    ],
    correct: 0,
    explain: "Kimya bilgisinin öğrencilere aktarılması kimya eğitiminin temel çalışma alanıdır."
  },
  {
    context: "Kimya ve Sağlık Ürünleri",
    kazanim: "KİM.9.1.7",
    text: "Bir ekip antiseptik bir ürün geliştirirken ürünün mikroorganizmalar üzerindeki etkisini ve kimyasal kararlılığını araştırıyor. Bu çalışma hangi sektörle ilişkilidir?",
    options: [
      "Sağlık ve kimya",
      "Turizm",
      "Spor",
      "Müzik",
      "Mimarlık"
    ],
    correct: 0,
    explain: "Antiseptik ve benzeri ürünlerin geliştirilmesi kimya ile sağlık sektörünün kesişiminde yer alır."
  },
  {
    context: "Üretim Sürecinde Kimya",
    kazanim: "KİM.9.1.7",
    text: "Bir fabrikada laboratuvarda belirlenen kimyasal üretim koşulları büyük üretim hattına aktarılıyor. Bu süreçte kimya bilgisinin yanında hangi alanın bilgisine özellikle ihtiyaç duyulur?",
    options: [
      "Mühendislik",
      "Tarih",
      "Müzik",
      "Turizm",
      "Edebiyat"
    ],
    correct: 0,
    explain: "Laboratuvar ölçeğindeki kimyasal süreçlerin büyük üretim sistemlerine aktarılmasında mühendislik bilgisi önemlidir."
  },
  {
    context: "Bilimsel Araştırmada Ekip Çalışması",
    kazanim: "KİM.9.1.7",
    text: "Yeni bir ilaç geliştirme projesinde kimyager, biyolog, mühendis ve doktor birlikte çalışıyor. Bu durum hangi gerçeği gösterir?",
    options: [
      "Bilimsel problemlerin çözümünde farklı disiplinler birlikte çalışabilir.",
      "Kimya diğer bilimlerden tamamen bağımsızdır.",
      "Sadece doktorlar araştırma yapabilir.",
      "Mühendislerin kimyayla ilgisi yoktur.",
      "Bilimsel çalışmalar yalnızca tek kişiyle yürütülür."
    ],
    correct: 0,
    explain: "Günümüzde birçok bilimsel ve teknolojik problem disiplinler arası ekip çalışmasıyla çözülmektedir."
  },
  {
    context: "Kimya Kariyerini Seçmek",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci laboratuvar çalışmalarını seviyor, maddelerin özelliklerini merak ediyor ve yeni ürünler geliştirmek istiyor. Bu öğrencinin kimya alanında kariyer seçmesinin temel nedeni aşağıdakilerden hangisi olabilir?",
    options: [
      "İlgi ve yeteneklerini kimya alanındaki çalışma fırsatlarıyla birleştirebilmesi",
      "Kimya alanında hiç laboratuvar bulunmaması",
      "Kimya mesleklerinin yalnızca masa başı olması",
      "Kimyanın hiçbir sektörde kullanılmaması",
      "Kimya eğitiminin uygulama içermemesi"
    ],
    correct: 0,
    explain: "Kariyer seçiminde kişinin ilgi ve yeteneklerini alanın sunduğu çalışma olanaklarıyla eşleştirmesi önemlidir."
  },
  {
    context: "Kimyanın Günlük Hayattaki Meslekleri",
    kazanim: "KİM.9.1.7",
    text: "Aşağıdaki mesleklerden hangisinin çalışma alanında kimya bilgisine doğrudan ihtiyaç duyulabilir?",
    options: [
      "Kimyager",
      "Kalite kontrol uzmanı",
      "Laboratuvar teknikeri",
      "İlaç araştırmacısı",
      "Hepsi"
    ],
    correct: 4,
    explain: "Kimya bilgisi kimyagerlikten kalite kontrole, laboratuvar teknikerliğinden ilaç araştırmalarına kadar birçok meslekte kullanılabilir."
  },
  {
    context: "Kimyanın Gelecekteki Alanları",
    kazanim: "KİM.9.1.7",
    text: "Enerji ihtiyacının artması ve çevre sorunlarının önem kazanması kimya alanında hangi çalışmaların önemini artırabilir?",
    options: [
      "Yeni enerji depolama sistemleri ve sürdürülebilir malzemeler",
      "Yalnızca geleneksel boya üretimi",
      "Yalnızca ambalaj tasarımı",
      "Yalnızca reklam çalışmaları",
      "Kimyayla ilgisiz alanlar"
    ],
    correct: 0,
    explain: "Enerji depolama, sürdürülebilir malzemeler ve çevre dostu teknolojiler gelecekte kimyanın önemli çalışma alanları arasında yer alabilir."
  },
  {
    context: "Bilim İnsanının Yolculuğu",
    kazanim: "KİM.9.1.7",
    text: "Tıp eğitimi alan bir bilim insanı daha sonra moleküler biyoloji alanında araştırmalar yaparak DNA onarım mekanizmalarını inceliyor. Bu kariyer yolu neyi gösterir?",
    options: [
      "Farklı bilim alanlarının kesişiminde kariyer yapılabileceğini",
      "Bilim dallarının birbirinden tamamen bağımsız olduğunu",
      "Tıp eğitiminin araştırmaya engel olduğunu",
      "Kimyanın biyolojiyle ilgisinin olmadığını",
      "Bilim insanlarının yalnızca tek alanda çalışabileceğini"
    ],
    correct: 0,
    explain: "Modern bilimde tıp, kimya, biyokimya ve moleküler biyoloji gibi alanlar birbirleriyle güçlü biçimde ilişkilidir."
  },
  {
    context: "Kimya ve Girişimcilik",
    kazanim: "KİM.9.1.7",
    text: "Bir kimya mezunu laboratuvarda geliştirdiği çevre dostu temizlik ürününü ticari bir ürüne dönüştürmek istiyor. Bu süreçte kimya bilgisinin yanında hangi beceriye ihtiyaç duyabilir?",
    options: [
      "Girişimcilik ve ürün geliştirme",
      "Yalnızca spor becerisi",
      "Yalnızca müzik bilgisi",
      "Yalnızca tarih bilgisi",
      "Hiçbir ek beceriye ihtiyaç yoktur"
    ],
    correct: 0,
    explain: "Bilimsel bir ürünün ticari ürüne dönüştürülmesinde girişimcilik, ürün geliştirme ve pazar bilgisi de önemlidir."
  },
  {
    context: "Kimya ve Ar-Ge",
    kazanim: "KİM.9.1.7",
    text: "Bir şirket yeni nesil batarya malzemeleri geliştirmek için deneyler yapıyor, sonuçları karşılaştırıyor ve yeni formüller deniyor. Bu çalışma hangi birimin görevi olabilir?",
    options: [
      "Ar-Ge",
      "Muhasebe",
      "İnsan kaynakları",
      "Satın alma",
      "Güvenlik"
    ],
    correct: 0,
    explain: "Yeni ürün ve teknolojilerin geliştirilmesi araştırma-geliştirme (Ar-Ge) faaliyetlerinin temelidir."
  },
  {
    context: "Kimya Sektöründe İş Birliği",
    kazanim: "KİM.9.1.7",
    text: "Bir boya firmasındaki kimyager yeni formül geliştirirken üretim mühendisi üretim hattını, kalite uzmanı ise ürünün standartlara uygunluğunu kontrol ediyor. Bu durum neyi gösterir?",
    options: [
      "Kimya sektöründe farklı uzmanlıkların birlikte çalışabildiğini",
      "Kimyagerlerin yalnızca üretim hattında çalıştığını",
      "Kalite kontrolün gereksiz olduğunu",
      "Mühendislerin kimyayla ilgilenmediğini",
      "Ürün geliştirmede araştırmaya gerek olmadığını"
    ],
    correct: 0,
    explain: "Kimya sektöründe ürün geliştirme, üretim ve kalite kontrol süreçlerinde farklı uzmanlıklar birlikte çalışabilir."
  },
  {
    context: "Kimya Mesleklerinin Çeşitliliği",
    kazanim: "KİM.9.1.7",
    text: "Aşağıdakilerden hangisi kimya eğitiminin kullanılabileceği alanlardan biri değildir?",
    options: [
      "İlaç",
      "Gıda",
      "Çevre",
      "Enerji",
      "Hiçbiri; kimya birçok farklı sektörde kullanılabilir"
    ],
    correct: 4,
    explain: "Kimya; ilaç, gıda, çevre, enerji, malzeme, kozmetik ve daha birçok sektörde kullanılan temel bilimlerden biridir."
  },
  {
    context: "Kariyer ve Yaşam Boyu Öğrenme",
    kazanim: "KİM.9.1.7",
    text: "Kimya alanında çalışan bir kişi yeni analiz cihazlarının ve yeni malzemelerin geliştirilmesiyle karşılaşıyor. Bu durumda neden kendisini geliştirmeye devam etmesi gerekir?",
    options: [
      "Bilim ve teknolojideki gelişmeleri takip etmek için",
      "Kimya bilgisinin zamanla tamamen gereksiz hâle gelmesi için",
      "Laboratuvar çalışmalarını bırakmak için",
      "Mesleğini değiştirmek zorunda olduğu için",
      "Bilimsel gelişmelerin kimyayı etkilememesi nedeniyle"
    ],
    correct: 0,
    explain: "Bilim ve teknoloji sürekli geliştiği için kimya alanında çalışanların yeni yöntemleri, cihazları ve bilgileri takip etmesi önemlidir."
  },
  {
    context: "Kimya ve Toplum",
    kazanim: "KİM.9.1.7",
    text: "Yeni bir su arıtma teknolojisinin geliştirilmesi, toplum açısından kimyanın hangi katkısını gösterir?",
    options: [
      "Toplumsal problemlere bilimsel ve teknolojik çözümler üretmesini",
      "Kimyanın yalnızca laboratuvar içinde kalmasını",
      "Kimyanın günlük yaşamdan bağımsız olduğunu",
      "Kimyanın yalnızca teorik bilgi olduğunu",
      "Kimyanın çevre sorunlarını çözemeyeceğini"
    ],
    correct: 0,
    explain: "Kimya, su arıtma gibi toplumun ihtiyaçlarına yönelik teknolojik çözümlerin geliştirilmesine katkı sağlar."
  },
  {
    context: "Kimya Kariyerlerinde Sorumluluk",
    kazanim: "KİM.9.1.7",
    text: "Bir kimyager yeni bir ürün geliştirirken ürünün insan sağlığı ve çevre üzerindeki etkilerini de değerlendiriyor. Bu yaklaşım neden önemlidir?",
    options: [
      "Bilimsel ve teknolojik çalışmaların güvenli ve sorumlu biçimde yürütülmesi için",
      "Ürünün mutlaka daha pahalı olması için",
      "Deney sayısını artırmak için",
      "Laboratuvar süresini uzatmak için",
      "Ürünün rengini değiştirmek için"
    ],
    correct: 0,
    explain: "Kimyasal ürünlerin geliştirilmesinde insan sağlığı, çevre ve güvenlik etkilerinin dikkate alınması bilimsel sorumluluğun bir parçasıdır."
  },
  {
    context: "Geleceğin Kimyacısı",
    kazanim: "KİM.9.1.7",
    text: "Bir lise öğrencisi gelecekte kimya alanında çalışmak istiyor. Aşağıdaki davranışlardan hangisi bu hedefe hazırlanmasına en çok katkı sağlar?",
    options: [
      "Kimya bilgisi yanında araştırma, problem çözme ve laboratuvar becerilerini geliştirmek",
      "Deneylerden tamamen uzak durmak",
      "Bilimsel kaynakları kullanmamak",
      "Sadece ezber yapıp uygulama yapmamak",
      "Yeni teknolojileri takip etmemek"
    ],
    correct: 0,
    explain: "Kimya kariyerlerinde bilimsel bilgi kadar araştırma, problem çözme, deneysel çalışma ve teknolojiyi takip etme becerileri de önemlidir."
  }
 ],
 guvenlik: [
  {
    context: "Laboratuvar Önlüğü",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci laboratuvarda asit ve bazlarla deney yapacaktır. Aşağıdakilerden hangisi uygun bir güvenlik önlemidir?",
    options: [
      "Koruyucu gözlük ve önlük kullanmak",
      "Kimyasalları çıplak elle taşımak",
      "Deney sırasında yemek yemek",
      "Kimyasalları koklayarak tanımak",
      "Deney sırasında laboratuvar kapısını kilitlemek"
    ],
    correct: 0,
    explain: "Kimyasallarla çalışırken gözlük, önlük ve gerektiğinde eldiven gibi kişisel koruyucu donanımlar kullanılmalıdır."
  },
  {
    context: "Laboratuvarda Dökülen Kimyasal",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrencinin kullandığı kimyasal maddenin bir miktarı laboratuvar tezgâhına dökülüyor. Öğrencinin ilk yapması gereken davranış hangisidir?",
    options: [
      "Dökülen maddeyi eliyle silmek",
      "Maddeyi koklayarak tanımaya çalışmak",
      "Durumu öğretmene veya sorumlu kişiye bildirmek",
      "Üzerine başka bir kimyasal dökmek",
      "Hiçbir şey olmamış gibi deneye devam etmek"
    ],
    correct: 2,
    explain: "Kimyasal dökülmelerde öğrencinin kendi başına müdahale etmek yerine öğretmeni veya laboratuvar sorumlusunu bilgilendirmesi gerekir."
  },
  {
    context: "Kırılan Cam Malzeme",
    kazanim: "KİM.9.1.7",
    text: "Laboratuvarda bir deney tüpü kırılıyor. Öğrencinin kırık cam parçalarıyla ilgili doğru davranışı hangisidir?",
    options: [
      "Cam parçalarını çıplak elle toplamak",
      "Cam parçalarını uygun araçlarla toplamak ve sorumlu kişiye bildirmek",
      "Camları normal çöp kutusuna atmak",
      "Camları tezgâhın üzerinde bırakmak",
      "Camları cebine koymak"
    ],
    correct: 1,
    explain: "Kırık camlar çıplak elle tutulmamalı, uygun araçlarla toplanmalı ve cam atıkları için ayrılmış kaplara konulmalıdır."
  },
  {
    context: "Kimyasal Etiketleri",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci laboratuvarda kullanacağı kimyasalın şişesindeki etiketi okumadan maddeyi kullanmak istiyor. Bu davranış neden yanlıştır?",
    options: [
      "Etiketler yalnızca üretici firmanın reklamıdır",
      "Etiketler sadece maddenin rengini gösterir",
      "Etiketler deney süresini belirtir",
      "Etiket, maddenin tehlikeleri ve güvenli kullanımı hakkında bilgi verebilir",
      "Kimyasalların etiketlere ihtiyacı yoktur"
    ],
    correct: 3,
    explain: "Kimyasal etiketleri maddenin adı, tehlike sembolleri ve güvenli kullanımına ilişkin önemli bilgiler içerir."
  },
  {
    context: "Koruyucu Gözlük",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci deney sırasında gözlük takmanın gereksiz olduğunu düşünüyor. Özellikle sıvı kimyasallarla çalışırken koruyucu gözlüğün temel amacı nedir?",
    options: [
      "Deneyin daha hızlı bitmesini sağlamak",
      "Kimyasal sıçramalarına karşı gözleri korumak",
      "Kimyasalın rengini değiştirmek",
      "Görmeyi güçlendirmek",
      "Kimyasalın buharlaşmasını önlemek"
    ],
    correct: 1,
    explain: "Koruyucu gözlük, kimyasal sıçramaları ve bazı fiziksel tehlikelere karşı gözleri korur."
  },
  {
    context: "Laboratuvarda Saçların Toplanması",
    kazanim: "KİM.9.1.7",
    text: "Uzun saçlı bir öğrencinin laboratuvar çalışması sırasında saçlarını toplaması neden önemlidir?",
    options: [
      "Saçların kimyasal tepkimeleri hızlandırmasını önlemek için",
      "Saç renginin değişmesini önlemek için",
      "Saçların deney sonucunu değiştirmesini önlemek için",
      "Saçların kimyasal madde veya alevle temas etme riskini azaltmak için",
      "Laboratuvarın daha güzel görünmesini sağlamak için"
    ],
    correct: 3,
    explain: "Uzun saçların açık bırakılması kimyasal maddeler veya alevle temas riskini artırabilir."
  },
  {
    context: "Laboratuvarda Yemek",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci deney sırasında su şişesinden içmek istiyor. Laboratuvarda yiyecek ve içecek tüketilmemesinin temel nedeni nedir?",
    options: [
      "Deneylerin daha uzun sürmesi",
      "Kimyasalların yiyecek veya içeceklere bulaşarak vücuda alınabilmesi",
      "Su tüketiminin deneyleri bozması",
      "Laboratuvarın sıcak olması",
      "Yemeklerin kimyasal özellik göstermesi"
    ],
    correct: 1,
    explain: "Kimyasal maddeler yiyecek ve içeceklere bulaşabilir ve fark edilmeden vücuda alınabilir."
  },
  {
    context: "Kimyasal Maddeyi Koklama",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrencinin kimyasal maddenin kokusunu doğrudan şişeden içine çekmesi neden tehlikelidir?",
    options: [
      "Kimyasalın rengi değişebilir",
      "Madde katılaşabilir",
      "Zararlı veya zehirli buharlar solunabilir",
      "Şişe ağırlaşabilir",
      "Kimyasalın sıcaklığı düşebilir"
    ],
    correct: 2,
    explain: "Kimyasal buharların doğrudan solunması zehirlenme veya solunum yollarında tahrişe neden olabilir."
  },
  {
    context: "Puar Kullanımı",
    kazanim: "KİM.9.1.7",
    text: "Laboratuvarda bir öğrenci pipetle sıvı çekmek için puar kullanıyor. Puar kullanımının temel amacı nedir?",
    options: [
      "Sıvının rengini değiştirmek",
      "Pipeti ısıtmak",
      "Kimyasalı karıştırmak",
      "Pipeti temizlemek",
      "Sıvının ağızla çekilmesini önlemek"
    ],
    correct: 4,
    explain: "Puar, sıvıların pipetle güvenli şekilde çekilmesini sağlar ve kimyasalın ağız yoluyla alınmasını önler."
  },
  {
    context: "Asit ve Bazların Karıştırılması",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci güçlü bir asitle güçlü bir bazı kontrolsüz biçimde karıştırıyor. Bu işlem neden dikkatli yapılmalıdır?",
    options: [
      "Tepkime sırasında ısı açığa çıkabileceği için",
      "Her zaman gaz oluştuğu için",
      "Maddeler kesinlikle tepkimeye girmediği için",
      "Sadece renk değişimi olduğu için",
      "Karışım mutlaka donacağı için"
    ],
    correct: 0,
    explain: "Asit-baz tepkimelerinde önemli miktarda ısı açığa çıkabilir. Bu nedenle kontrollü çalışılmalıdır."
  },
  {
    context: "Asit Seyreltme",
    kazanim: "KİM.9.1.7",
    text: "Derişik bir asit suyla seyreltilirken neden asit suya yavaşça eklenmelidir?",
    options: [
      "Asidin rengini korumak için",
      "Suyun kaynamasını engellemek için",
      "Isı açığa çıkması nedeniyle sıçrama riskini azaltmak için",
      "Asidin katılaşmasını sağlamak için",
      "Asidin kokusunu azaltmak için"
    ],
    correct: 2,
    explain: "Seyreltme sırasında önemli miktarda ısı açığa çıkabilir. Asidin suya yavaşça eklenmesi sıçrama riskini azaltır."
  },
  {
    context: "Temizlik Ürünleri",
    kazanim: "KİM.9.1.7",
    text: "Evde kullanılan farklı temizlik ürünlerinin rastgele karıştırılmaması gerekir. Bunun temel nedeni nedir?",
    options: [
      "Hepsinin aynı renkte olması",
      "Her zaman köpürmeleri",
      "Temizlik etkilerinin azalması",
      "Zehirli gaz veya tehlikeli maddeler oluşturabilecek tepkimeler gerçekleşebilmesi",
      "Şişelerin büyümesi"
    ],
    correct: 3,
    explain: "Bazı temizlik maddeleri karıştırıldığında sağlığa zararlı gazlar veya başka tehlikeli ürünler oluşabilir."
  },
  {
    context: "Çamaşır Suyu ve Asit",
    kazanim: "KİM.9.1.7",
    text: "Çamaşır suyunun asitli bir temizlik maddesiyle karıştırılması neden özellikle tehlikelidir?",
    options: [
      "Suyun donmasına neden olduğu için",
      "Zehirli klor gazı oluşabileceği için",
      "Çamaşır suyunun rengini değiştirdiği için",
      "Temizlik etkisini artırdığı için",
      "Karışımın katılaşmasına neden olduğu için"
    ],
    correct: 1,
    explain: "Hipoklorit içeren çamaşır suyunun asitlerle karıştırılması klor gazı oluşmasına neden olabilir."
  },
  {
    context: "Yanıcı Maddeler",
    kazanim: "KİM.9.1.7",
    text: "Yanıcı bir kimyasalın açık alevin yanında tutulması neden uygun değildir?",
    options: [
      "Kimyasalın rengi değişeceği için",
      "Şişe daha ağır olacağı için",
      "Yanıcı maddenin tutuşma veya yangına neden olma riski bulunduğu için",
      "Kimyasalın yoğunluğu azalacağı için",
      "Etiket silineceği için"
    ],
    correct: 2,
    explain: "Yanıcı maddeler ateş ve kıvılcım kaynaklarından uzak tutulmalıdır."
  },
  {
    context: "Kimyasal Atık",
    kazanim: "KİM.9.1.7",
    text: "Bir deneyden sonra kalan kimyasal çözeltinin lavaboya dökülmesi neden her zaman uygun değildir?",
    options: [
      "Lavabo her zaman kırılacağı için",
      "Kimyasal atıklar çevreye zarar verebilir ve uygun atık prosedürleriyle uzaklaştırılmalıdır",
      "Çözelti mutlaka katılaşacağı için",
      "Lavabo yalnızca su için tasarlanmıştır",
      "Deney sonucu tekrar hesaplanacağı için"
    ],
    correct: 1,
    explain: "Kimyasal atıklar türlerine uygun biçimde toplanmalı ve bertaraf edilmelidir."
  },
  {
    context: "Tehlike Piktogramı",
    kazanim: "KİM.9.1.7",
    text: "Bir kimyasalın etiketinde alev sembolü bulunuyor. Bu sembol öncelikle neyi belirtir?",
    options: [
      "Madde radyoaktiftir",
      "Madde yanıcıdır",
      "Madde çevre dostudur",
      "Madde basınçlı değildir",
      "Madde yalnızca katı hâlde bulunur"
    ],
    correct: 1,
    explain: "Alev piktogramı maddenin yanıcılık gibi yangın tehlikeleri taşıdığını gösterir."
  },
  {
    context: "Kafatası ve Çapraz Kemikler",
    kazanim: "KİM.9.1.7",
    text: "Bir kimyasal etiketinde kafatası ve çapraz kemikler sembolü bulunuyor. Bu sembol neye karşı uyarır?",
    options: [
      "Akut toksisite gibi ciddi zehirlenme tehlikesine",
      "Maddenin yanıcı olmadığına",
      "Maddenin yalnızca çevreye zarar verdiğine",
      "Maddenin radyoaktif olmadığına",
      "Maddenin tamamen zararsız olduğuna"
    ],
    correct: 0,
    explain: "Kafatası ve çapraz kemikler piktogramı akut toksisite gibi ciddi zehirlenme tehlikelerini ifade eder."
  },
  {
    context: "Çevre İçin Tehlikeli Madde",
    kazanim: "KİM.9.1.7",
    text: "Bir kimyasalın etiketinde ölü balık ve ağaç sembolü bulunuyor. Bu sembol hangi tehlikeyi gösterir?",
    options: [
      "Patlama tehlikesini",
      "Yanıcılığı",
      "Çevreye, özellikle sucul canlılara zarar verme tehlikesini",
      "Radyoaktifliği",
      "Basınçlı gaz olduğunu"
    ],
    correct: 2,
    explain: "Çevre sembolü özellikle sucul çevreye zararlı olabilecek maddeler için kullanılır."
  },
  {
    context: "Patlayıcı Madde",
    kazanim: "KİM.9.1.7",
    text: "Etiketinde patlayan bomba sembolü bulunan bir maddeyle çalışırken temel tehlike nedir?",
    options: [
      "Maddenin suya dönüşmesi",
      "Maddenin kesinlikle yanmaması",
      "Maddenin renk değiştirmesi",
      "Patlama tehlikesi",
      "Maddenin donması"
    ],
    correct: 3,
    explain: "Patlayan bomba piktogramı patlayıcı özellik taşıyan maddeler için kullanılır."
  },
  {
    context: "Basınçlı Gaz Tüpü",
    kazanim: "KİM.9.1.7",
    text: "Bir gaz tüpünün yüksek sıcaklıkta bırakılması neden tehlikeli olabilir?",
    options: [
      "Gazın rengi değişeceği için",
      "Basınç artışı ve tüpün zarar görmesi riski nedeniyle",
      "Gazın mutlaka katılaşacağı için",
      "Tüpün içindeki gazın suya dönüşeceği için",
      "Etiketin büyüyeceği için"
    ],
    correct: 1,
    explain: "Basınçlı gaz tüpleri ısı kaynaklarından uzak tutulmalıdır; sıcaklık artışı basıncı yükseltebilir."
  },
  {
    context: "Laboratuvar Havalandırması",
    kazanim: "KİM.9.1.7",
    text: "Bazı kimyasal deneylerin çeker ocakta yapılmasının temel amacı nedir?",
    options: [
      "Deneyin rengini değiştirmek",
      "Kimyasalın daha hızlı katılaşmasını sağlamak",
      "Zararlı buhar ve gazların solunma riskini azaltmak",
      "Deney tüplerini soğutmak",
      "Elektrik tüketimini azaltmak"
    ],
    correct: 2,
    explain: "Çeker ocak, oluşabilecek zararlı buhar ve gazların ortamdan uzaklaştırılmasına yardımcı olur."
  },
  {
    context: "Isıtılan Deney Tüpü",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci deney tüpündeki sıvıyı ısıtırken tüpün ağzını arkadaşına doğru tutuyor. Bu davranış neden tehlikelidir?",
    options: [
      "Sıvının rengi değişebilir",
      "Tüpün daha hızlı soğumasına neden olur",
      "Deney sonucu kesinlikle değişmez",
      "Isınan madde sıçrayabilir veya gaz çıkışı gerçekleşebilir",
      "Tüp daha ağır hâle gelir"
    ],
    correct: 3,
    explain: "Isıtılan maddeler sıçrayabilir veya gaz oluşturabilir. Deney tüpünün ağzı hiçbir zaman kişiye doğru tutulmamalıdır."
  },
  {
    context: "Deney Tüpünü Isıtma",
    kazanim: "KİM.9.1.7",
    text: "Bir deney tüpü doğrudan ve tek bir noktadan uzun süre ısıtılmak yerine neden hareket ettirilerek ısıtılabilir?",
    options: [
      "Tüpün rengini değiştirmek için",
      "Isının daha dengeli dağılmasını sağlamak için",
      "Kimyasalı katılaştırmak için",
      "Tüpün hacmini artırmak için",
      "Deneyi durdurmak için"
    ],
    correct: 1,
    explain: "Deney tüpünün kontrollü biçimde hareket ettirilmesi ısının daha dengeli dağılmasına yardımcı olur."
  },
  {
    context: "Elektrikli Laboratuvar Araçları",
    kazanim: "KİM.9.1.7",
    text: "Laboratuvarda elektrikli bir cihazın kablosunda hasar görülüyor. Öğrencinin doğru davranışı hangisidir?",
    options: [
      "Cihazı kullanmaya devam etmek",
      "Kabloyu çıplak elle onarmak",
      "Cihazı suyla temizlemek",
      "Kabloyu bantla kapatıp kullanmak",
      "Cihazı kullanmamak ve sorumlu kişiye bildirmek"
    ],
    correct: 4,
    explain: "Hasarlı elektrikli cihazlar kullanılmamalı ve durum sorumlu kişiye bildirilmelidir."
  },
  {
    context: "Kimyasalın Göze Sıçraması",
    kazanim: "KİM.9.1.7",
    text: "Bir kimyasal öğrencinin gözüne sıçrıyor. Laboratuvar güvenliği açısından en doğru ilk yaklaşım hangisidir?",
    options: [
      "Gözü ovuşturmak",
      "Gözü kapatıp beklemek",
      "Gözleri uygun göz yıkama sistemiyle bol suyla yıkamak ve hemen sorumlu kişiye haber vermek",
      "Göze başka bir kimyasal damlatmak",
      "Deneye devam etmek"
    ],
    correct: 2,
    explain: "Kimyasal göz temasında gözler bol suyla yıkanmalı ve olay derhal sorumlu kişiye bildirilmelidir."
  },
  {
    context: "Kimyasalın Cilde Teması",
    kazanim: "KİM.9.1.7",
    text: "Bir kimyasal madde öğrencinin cildine dökülüyor. En uygun davranış hangisidir?",
    options: [
      "Cildi hemen bol suyla yıkamak ve sorumlu kişiye haber vermek",
      "Kimyasalı bezle daha fazla yaymak",
      "Cildi kapatıp beklemek",
      "Kimyasalı koklamak",
      "Başka bir kimyasalla nötrleştirmeye çalışmak"
    ],
    correct: 0,
    explain: "Cilt temasında uygun ilk yardım prosedürleri uygulanmalı, bölge bol suyla yıkanmalı ve sorumlu kişiye haber verilmelidir."
  },
  {
    context: "Yanlışlıkla Kimyasal İçme",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci yanlışlıkla laboratuvar kimyasalını ağzına alıyor. Güvenli yaklaşım hangisidir?",
    options: [
      "Kendi kendine başka bir kimyasal içmek",
      "Durumu gizlemek",
      "Hemen sorumlu kişiye haber vermek ve belirlenen acil durum prosedürünü uygulamak",
      "Deneye devam etmek",
      "Kimyasalı tekrar tadına bakmak"
    ],
    correct: 2,
    explain: "Kimyasalın ağız yoluyla alınması ciddi bir durumdur. Derhal sorumlu kişiye haber verilmeli ve uygun acil durum prosedürü uygulanmalıdır."
  },
  {
    context: "Laboratuvar Acil Durumu",
    kazanim: "KİM.9.1.7",
    text: "Laboratuvarda yangın çıktığında öğrencinin öncelikli davranışı ne olmalıdır?",
    options: [
      "Yangının fotoğrafını çekmek",
      "Yangını tek başına büyütmeden söndürmeye çalışmak",
      "Kimyasal şişelerini toplamaya başlamak",
      "Güvenli biçimde ortamdan uzaklaşmak ve sorumlu kişiye haber vermek",
      "Deneyi tamamlamak"
    ],
    correct: 3,
    explain: "Acil durumda öncelik kişisel güvenliktir. Öğrenci güvenli biçimde ortamdan uzaklaşmalı ve sorumlu kişilere haber vermelidir."
  },
  {
    context: "Kimyasal Depolama",
    kazanim: "KİM.9.1.7",
    text: "Kimyasalların laboratuvarda gelişigüzel aynı dolapta tutulması neden sakıncalıdır?",
    options: [
      "Şişelerin rengi değişebilir",
      "Birbiriyle tepkimeye girebilecek maddeler temas edebilir",
      "Kimyasalların tamamı donar",
      "Etiketler otomatik olarak silinir",
      "Laboratuvarın sıcaklığı düşer"
    ],
    correct: 1,
    explain: "Uyumsuz kimyasalların birlikte depolanması tehlikeli tepkimelere yol açabilir."
  },
  {
    context: "Asitlerin Saklanması",
    kazanim: "KİM.9.1.7",
    text: "Derişik asitlerin depolanmasında aşağıdakilerden hangisine dikkat edilmelidir?",
    options: [
      "Yanıcı maddelerle birlikte tutulmalıdır",
      "Etiketsiz kaplara aktarılmalıdır",
      "Uygun ve uyumlu depolama koşullarında, güvenli biçimde saklanmalıdır",
      "Güneş altında bırakılmalıdır",
      "Kapakları açık tutulmalıdır"
    ],
    correct: 2,
    explain: "Asitler özelliklerine ve uyumluluklarına göre uygun koşullarda depolanmalıdır."
  },
  {
    context: "Etiketsiz Şişe",
    kazanim: "KİM.9.1.7",
    text: "Laboratuvarda içeriği bilinmeyen etiketsiz bir şişe bulunuyor. Öğrencinin doğru davranışı hangisidir?",
    options: [
      "Koklayarak tanımak",
      "Tadına bakmak",
      "Başka bir şişeye aktarmak",
      "Öğretmene veya laboratuvar sorumlusuna bildirmek ve kendiliğinden kullanmamak",
      "Lavaboya dökmek"
    ],
    correct: 3,
    explain: "İçeriği bilinmeyen kimyasallar kullanılmamalı, koklanmamalı veya tadılmamalıdır."
  },
  {
    context: "Kimyasalı Başka Kaba Aktarma",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci kimyasalı orijinal etiketini taşımayan başka bir kaba aktarıyor. Bu uygulamanın temel sakıncası nedir?",
    options: [
      "Kimyasalın kütlesi artar",
      "Kimyasalın rengi değişir",
      "Kabın içindeki maddenin kimliği ve tehlikeleri karışabilir",
      "Kimyasal kesinlikle buharlaşmaz",
      "Deney daha hızlı gerçekleşir"
    ],
    correct: 2,
    explain: "Kimyasallar başka kaba aktarılacaksa kap uygun şekilde etiketlenmelidir. Aksi durumda madde yanlış tanınabilir."
  },
  {
    context: "Kimyasal Maddeyle Çalışma",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci deney sırasında kimyasalın özelliklerini bilmediğini fark ediyor. En doğru yaklaşım hangisidir?",
    options: [
      "Rastgele kullanmak",
      "Tadına bakmak",
      "Koklamak",
      "Daha fazla miktarda kullanmak",
      "Güvenlik bilgi ve etiketlerini incelemek ve sorumlu kişiye danışmak"
    ],
    correct: 4,
    explain: "Kimyasalın özellikleri ve tehlikeleri bilinmeden çalışma yapılmamalıdır."
  },
  {
    context: "Laboratuvar Düzeni",
    kazanim: "KİM.9.1.7",
    text: "Deney sırasında tezgâhın üzerinde gereksiz çok sayıda malzeme bulunması neden risklidir?",
    options: [
      "Deney daha güzel görünür",
      "Kimyasalların rengi değişir",
      "Çalışma alanı daralır ve devrilme, dökülme veya karışıklık riski artar",
      "Maddelerin atom numarası değişir",
      "Laboratuvarın sıcaklığı artar"
    ],
    correct: 2,
    explain: "Düzenli bir çalışma alanı kazaları ve kimyasal dökülmelerini önlemeye yardımcı olur."
  },
  {
    context: "Laboratuvarda Koşmak",
    kazanim: "KİM.9.1.7",
    text: "Laboratuvarda koşmak neden güvenlik açısından uygun değildir?",
    options: [
      "Kimyasalların atom yapısını değiştirir",
      "Düşme, cam malzeme kırılması ve kimyasal dökülmesi riskini artırır",
      "Deneylerin tamamını hızlandırır",
      "Elektron sayısını değiştirir",
      "Laboratuvarı soğutur"
    ],
    correct: 1,
    explain: "Laboratuvarda kontrollü hareket etmek kazaları önlemek açısından önemlidir."
  },
  {
    context: "Laboratuvar Güvenlik Kuralları",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci deney yönergesini okumadan çalışmaya başlıyor. Bunun doğurabileceği temel sorun nedir?",
    options: [
      "Maddelerin atom numarası değişir",
      "Deney mutlaka başarılı olur",
      "Kimyasal maddelerin rengi kaybolur",
      "Yanlış uygulama ve güvenlik riskleri ortaya çıkabilir",
      "Laboratuvar otomatik olarak kapanır"
    ],
    correct: 3,
    explain: "Deney yönergesinin okunması hem doğru uygulama hem de güvenlik açısından gereklidir."
  },
  {
    context: "Kişisel Koruyucu Donanım",
    kazanim: "KİM.9.1.7",
    text: "Aşağıdakilerden hangisi kişisel koruyucu donanımlardan biridir?",
    options: [
      "Deney tüpü",
      "Beher",
      "Koruyucu gözlük",
      "Spatül",
      "Mezür"
    ],
    correct: 2,
    explain: "Koruyucu gözlük, kişiyi kimyasal ve fiziksel tehlikelere karşı korumaya yardımcı olan kişisel koruyucu donanımdır."
  },
  {
    context: "Eldiven Kullanımı",
    kazanim: "KİM.9.1.7",
    text: "Kimyasal maddelerle çalışırken uygun eldiven kullanılmasının amacı nedir?",
    options: [
      "Ellerin kimyasal maddelerle doğrudan temasını azaltmak",
      "Deneyin süresini uzatmak",
      "Kimyasalın sıcaklığını artırmak",
      "Maddenin rengini değiştirmek",
      "Elektronların hareketini durdurmak"
    ],
    correct: 0,
    explain: "Uygun eldiven, kimyasal maddelerin ciltle temas etme riskini azaltır."
  },
  {
    context: "Eldivenle Telefon Kullanmak",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci laboratuvarda kimyasal maddeyle çalıştıktan sonra eldivenlerini çıkarmadan telefonuna dokunuyor. Bu davranış neden sakıncalıdır?",
    options: [
      "Telefonun ekranı daha parlak olur",
      "Eldiven üzerindeki kimyasal kalıntılar başka yüzeylere taşınabilir",
      "Telefonun pili kesinlikle biter",
      "Kimyasalın atom numarası değişir",
      "Eldivenler kendiliğinden temizlenir"
    ],
    correct: 1,
    explain: "Kimyasal bulaşmış eldivenlerle farklı yüzeylere dokunmak çapraz bulaşmaya neden olabilir."
  },
  {
    context: "Deney Sonrası Eller",
    kazanim: "KİM.9.1.7",
    text: "Laboratuvar çalışması bittikten sonra ellerin yıkanmasının temel nedeni nedir?",
    options: [
      "Kimyasalların tamamen yok olması için her zaman yeterlidir",
      "Deney sonucunu değiştirmek için",
      "Eller üzerinde kalabilecek kimyasal kalıntıları uzaklaştırmak için",
      "Ellerin sıcaklığını artırmak için",
      "Kimyasalın rengini değiştirmek için"
    ],
    correct: 2,
    explain: "Çalışma sonrasında ellerin uygun şekilde yıkanması kimyasal kalıntıların vücuda taşınmasını azaltır."
  },
  {
    context: "Kimyasal Güvenlik Bilgisi",
    kazanim: "KİM.9.1.7",
    text: "Bir kimyasalın sağlık, yangın ve depolama tehlikeleri hakkında ayrıntılı bilgiye ihtiyaç duyan öğrenci öncelikle hangi kaynağa başvurmalıdır?",
    options: [
      "Kimyasalın rengine",
      "Arkadaşının tahminine",
      "Şişenin boyutuna",
      "Güvenlik Bilgi Formu (GBF/SDS) ve ürün etiketine",
      "Maddenin kokusuna"
    ],
    correct: 3,
    explain: "Güvenlik Bilgi Formu ve etiketler kimyasalın tehlikeleri, güvenli kullanımı ve acil durumları hakkında bilgi sağlar."
  },
  {
    context: "Güvenlik Piktogramlarını Okumak",
    kazanim: "KİM.9.1.7",
    text: "Kimyasal güvenlik piktogramlarının kullanılmasının temel amacı nedir?",
    options: [
      "Maddeleri daha renkli göstermek",
      "Tehlikeleri hızlı ve anlaşılır biçimde belirtmek",
      "Kimyasalın fiyatını göstermek",
      "Üretici firmanın logosunu göstermek",
      "Maddenin atom numarasını göstermek"
    ],
    correct: 1,
    explain: "Piktogramlar kimyasal tehlikelerin hızlı ve standart biçimde anlaşılmasına yardımcı olur."
  },
  {
    context: "Bilinmeyen Gaz",
    kazanim: "KİM.9.1.7",
    text: "Bir deney sırasında beklenmeyen bir gaz oluşuyor. Öğrencinin gazı tanımak için doğrudan koklaması neden uygun değildir?",
    options: [
      "Gazların tamamı kokusuzdur",
      "Gazın sıcaklığı değişir",
      "Gaz zehirli veya tahriş edici olabilir",
      "Gazın rengi değişir",
      "Gaz mutlaka patlar"
    ],
    correct: 2,
    explain: "Bilinmeyen gazlar doğrudan solunmamalıdır. Zararlı veya zehirli olabilirler."
  },
  {
    context: "Güvenlik ve Sorumluluk",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci arkadaşının laboratuvarda güvenlik kuralını ihlal ettiğini görüyor. En uygun davranış hangisidir?",
    options: [
      "Durumu görmezden gelmek",
      "Kural ihlalini teşvik etmek",
      "Fotoğraf çekmek",
      "Güvenli davranması konusunda uyarmak ve gerekirse öğretmene bildirmek",
      "Kendisi de aynı davranışı yapmak"
    ],
    correct: 3,
    explain: "Laboratuvar güvenliği yalnızca bireysel değil, ortak bir sorumluluktur."
  },
  {
    context: "Kimyasal Maddelerin Taşınması",
    kazanim: "KİM.9.1.7",
    text: "Bir öğrenci laboratuvarda birden fazla kimyasal şişesini aynı anda taşımaya çalışıyor. En güvenli yaklaşım hangisidir?",
    options: [
      "Hepsini üst üste koyarak taşımak",
      "Şişeleri dengeli ve güvenli şekilde, gerektiğinde uygun taşıma kabı kullanarak taşımak",
      "Şişeleri kapaksız taşımak",
      "Şişeleri sallayarak taşımak",
      "Kimyasalları etiketsiz kaba aktarmak"
    ],
    correct: 1,
    explain: "Kimyasallar taşınırken devrilme ve kırılma riskini azaltacak uygun taşıma yöntemleri kullanılmalıdır."
  },
  {
    context: "Deney Sonrası Temizlik",
    kazanim: "KİM.9.1.7",
    text: "Deney tamamlandıktan sonra çalışma alanının temizlenmesi neden önemlidir?",
    options: [
      "Kimyasal maddelerin çevreye yayılmasını ve sonraki çalışmalarda kazaları azaltmak için",
      "Deney sonucunu değiştirmek için",
      "Cam malzemeleri renklendirmek için",
      "Atomların hareketini durdurmak için",
      "Kimyasalları daha güçlü hâle getirmek için"
    ],
    correct: 0,
    explain: "Deney sonrası temizlik, kimyasal kalıntıların ve olası tehlikelerin sonraki çalışmalara taşınmasını önlemeye yardımcı olur."
  },
  {
    context: "Güvenlik Kuralının Nedeni",
    kazanim: "KİM.9.1.7",
    text: "Laboratuvar güvenlik kurallarının yalnızca deney sırasında değil, deney öncesinde de okunması neden önemlidir?",
    options: [
      "Kurallar yalnızca öğretmen için gereklidir",
      "Deneyin sonucunu önceden değiştirmek için",
      "Tehlikeleri önceden fark ederek uygun önlemleri almak için",
      "Kimyasalların miktarını artırmak için",
      "Deney süresini kesinlikle uzatmak için"
    ],
    correct: 2,
    explain: "Riskleri önceden bilmek uygun kişisel koruyucu donanımı ve çalışma yöntemini seçmeye yardımcı olur."
  },
  {
    context: "Kimya ve Güvenlik",
    kazanim: "KİM.9.1.7",
    text: "Kimya laboratuvarında güvenlik kurallarına uymanın temel amacı aşağıdakilerden hangisidir?",
    options: [
      "Deneyleri daha karmaşık hâle getirmek",
      "Kimyasalları daha pahalı hâle getirmek",
      "Sadece deney sonucunu doğru çıkarmak",
      "İnsan sağlığını, çevreyi ve laboratuvar malzemelerini korumak",
      "Kimyasal tepkimeleri tamamen durdurmak"
    ],
    correct: 3,
    explain: "Laboratuvar güvenliğinin temel amacı insan sağlığını, çevreyi ve laboratuvarın güvenli işleyişini korumaktır."
  }
 ],
 teori: [
  {
    kazanim: "KİM.9.1.5",
    context: "Altın Yaprak Deneyinin Şaşırtan Sonucu",
    text: "Bir deneyde, ince bir altın yaprağa gönderilen pozitif yüklü alfa parçacıklarının büyük çoğunluğu sapmadan doğrudan geçerken, çok küçük bir kısmı büyük açılarla geri sekiyor. Bu gözlem, o döneme kadar kabul gören 'pozitif yükün atom içinde eşit dağıldığı' modelini neden geçersiz kılmıştır?",
    options: [
      "Çünkü hiçbir parçacık sapmamalıydı",
      "Çünkü altın yaprak deneyleri sadece metallerde yapılabilir",
      "Çünkü alfa parçacıkları negatif yüklüdür",
      "Çünkü pozitif yük eşit dağılmış olsaydı hiçbir parçacık büyük açıyla geri sekmemeliydi; geri sekme, yoğun ve küçük bir pozitif bölgenin (çekirdeğin) varlığına işaret eder",
      "Çünkü deney sonucu tamamen rastgeledir ve model üzerinde bir etkisi yoktur"
    ],
    correct: 3,
    explain: "Alfa parçacıklarının büyük açılarla sapması, atomda küçük ve yoğun pozitif yüklü bir çekirdeğin bulunduğunu göstermiştir."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Bir Atomun Işık Yayması",
    text: "Bir gaz deşarj tüpündeki atomlar dışarıdan enerji aldıktan sonra belirli renklerde ışık yayıyor. Bohr atom teorisine göre bu ışık yayma olayı nasıl gerçekleşir?",
    options: [
      "Elektronların çekirdeğe düşmesiyle",
      "Uyarılmış elektronların daha yüksek enerji seviyesinden düşük enerji seviyesine geçerken enerji farkını ışık olarak yaymasıyla",
      "Protonların yer değiştirmesiyle",
      "Nötronların parçalanmasıyla",
      "Atomun tamamen iyonlaşmasıyla"
    ],
    correct: 1,
    explain: "Elektron üst enerji seviyesinden alt enerji seviyesine geçerken iki seviye arasındaki enerji farkını foton olarak yayar."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Bohr Modelinin Sınırı",
    text: "Bohr atom modeli hidrojen atomunun çizgi spektrumunu başarıyla açıklarken çok elektronlu atomlarda aynı başarıyı gösterememiştir. Bunun temel nedeni aşağıdakilerden hangisidir?",
    options: [
      "Bohr modelinin yalnızca gazları açıklaması",
      "Protonların çok elektronlu atomlarda bulunmaması",
      "Nötronların Bohr modelinde fazla olması",
      "Atom çekirdeğinin çok elektronlu atomlarda kaybolması",
      "Elektron-elektron etkileşimlerinin ve daha karmaşık enerji düzeylerinin modeli yetersiz bırakması"
    ],
    correct: 4,
    explain: "Çok elektronlu atomlarda elektronlar birbirleriyle etkileşir ve enerji düzeyleri hidrojen atomundan daha karmaşık hâle gelir."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Bilimsel Modellerin Değişimi",
    text: "Dalton, Thomson, Rutherford, Bohr ve modern atom modelleri incelendiğinde bilimsel bilginin doğası hakkında hangi sonuca ulaşılabilir?",
    options: [
      "Bilimsel modeller yeni kanıtlarla geliştirilebilir",
      "İlk ortaya atılan model her zaman doğrudur",
      "Atom modeli hiçbir zaman değişmez",
      "Deneysel kanıtların bilimsel modeller üzerinde etkisi yoktur",
      "Bilimsel modeller yalnızca kişisel görüşlere dayanır"
    ],
    correct: 0,
    explain: "Bilimsel modeller mevcut kanıtları açıklamak için geliştirilir ve yeni deneysel kanıtlarla değiştirilebilir."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Rutherford'un Çekirdek Modeli",
    text: "Rutherford modeline göre atomun büyük kısmının boşluklu yapı göstermesinin temel kanıtı nedir?",
    options: [
      "Protonların çok hafif olması",
      "Elektronların çekirdekte bulunması",
      "Alfa parçacıklarının büyük çoğunluğunun altın yapraktan sapmadan geçmesi",
      "Nötronların keşfedilmemiş olması",
      "Atomların yalnızca gaz hâlinde bulunması"
    ],
    correct: 2,
    explain: "Alfa parçacıklarının çoğunun sapmadan geçmesi atomun büyük kısmının boşluklu olduğunu göstermiştir."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Çekirdeğin Keşfi",
    text: "Rutherford deneyinde çok az sayıdaki alfa parçacığının büyük açılarla sapması hangi sonuca götürmüştür?",
    options: [
      "Elektronların çok ağır olduğuna",
      "Atomun tamamen dolu olduğuna",
      "Nötronların negatif yüklü olduğuna",
      "Pozitif yük ve kütlenin atomun çok küçük bir bölgesinde yoğunlaştığına",
      "Atomlarda proton bulunmadığına"
    ],
    correct: 3,
    explain: "Büyük açılı sapmalar, pozitif yük ve kütlenin küçük ve yoğun bir çekirdekte toplandığını göstermiştir."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Thomson Modeli",
    text: "Thomson atom modelinde pozitif yük ve elektronların atom içerisinde nasıl dağıldığı kabul edilmiştir?",
    options: [
      "Pozitif yük merkezde, elektronlar çekirdekte",
      "Pozitif yük atomun her tarafına yayılmış, elektronlar bu yapı içerisinde dağılmıştır",
      "Elektronlar yalnızca belirli enerji düzeylerinde bulunur",
      "Atom tamamen boşluktan oluşur",
      "Nötronlar pozitif yükü dengeler"
    ],
    correct: 1,
    explain: "Thomson modelinde pozitif yük atom hacmine yayılmış, elektronlar bu pozitif yapı içerisinde gömülü kabul edilmiştir."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Bohr'un Katmanlı Modeli",
    text: "Bohr modelinin Rutherford modeline getirdiği temel yenilik aşağıdakilerden hangisidir?",
    options: [
      "Elektronların çekirdekte bulunduğunu ileri sürmesi",
      "Protonları keşfetmesi",
      "Nötronların varlığını açıklaması",
      "Atomun tamamen boş olduğunu söylemesi",
      "Elektronların belirli enerji düzeylerinde bulunabileceğini ileri sürmesi"
    ],
    correct: 4,
    explain: "Bohr, elektronların belirli enerji düzeylerinde bulunabileceğini ve düzeyler arasında enerji alışverişi yapabileceğini öne sürmüştür."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Hidrojen Spektrumu",
    text: "Hidrojen atomunun belirli dalga boylarında ışık yayması Bohr modelinde nasıl açıklanır?",
    options: [
      "Elektronların sürekli enerji yaymasıyla",
      "Protonların titreşmesiyle",
      "Elektronların belirli enerji düzeyleri arasında geçiş yapmasıyla",
      "Nötronların ışık yaymasıyla",
      "Çekirdeğin parçalanmasıyla"
    ],
    correct: 2,
    explain: "Elektronlar belirli enerji düzeyleri arasında geçiş yaparken belirli enerjiye sahip fotonlar yayar."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Enerji Soğurulması",
    text: "Bir elektron bulunduğu enerji düzeyinden daha yüksek bir enerji düzeyine geçiyorsa atom hangi olayı gerçekleştirmiştir?",
    options: [
      "Enerji soğurmuştur",
      "Enerji yaymıştır",
      "Proton kaybetmiştir",
      "Nötron kazanmıştır",
      "Çekirdek parçalanmıştır"
    ],
    correct: 0,
    explain: "Elektron üst enerji düzeyine çıkmak için dışarıdan enerji soğurur."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Enerji Yayılması",
    text: "Uyarılmış bir elektron daha düşük enerji düzeyine dönerken ne olur?",
    options: [
      "Atom mutlaka iyonlaşır",
      "Elektron yok olur",
      "Proton sayısı azalır",
      "Enerji farkına karşılık gelen bir foton yayılır",
      "Nötron sayısı artar"
    ],
    correct: 3,
    explain: "Elektron daha düşük enerji seviyesine geçerken iki seviye arasındaki enerji farkı foton olarak yayılır."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Atom Modellerinin Sıralanması",
    text: "Aşağıdaki atom modellerinden hangisi tarihsel gelişim açısından doğru sırayı verir?",
    options: [
      "Bohr → Dalton → Rutherford → Thomson",
      "Dalton → Thomson → Rutherford → Bohr",
      "Rutherford → Dalton → Bohr → Thomson",
      "Thomson → Dalton → Bohr → Rutherford",
      "Dalton → Rutherford → Thomson → Bohr"
    ],
    correct: 1,
    explain: "Atom modeli tarihsel olarak Dalton, Thomson, Rutherford ve Bohr modelleri şeklinde gelişmiştir."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Dalton Modeli",
    text: "Dalton atom modelinin temel varsayımlarından biri aşağıdakilerden hangisidir?",
    options: [
      "Atomlar bölünemez ve içi dolu kürelerdir",
      "Elektronlar enerji düzeylerinde bulunur",
      "Atomun merkezinde yoğun çekirdek vardır",
      "Elektronların kesin konumu belirlenemez",
      "Atomlar tamamen boşluktan oluşur"
    ],
    correct: 0,
    explain: "Dalton atomu bölünemez, içi dolu ve küresel tanecikler olarak kabul etmiştir."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Atomun Bölünebilirliği",
    text: "Elektronun keşfi Dalton'un hangi düşüncesinin değiştirilmesine neden olmuştur?",
    options: [
      "Elementlerin farklı özelliklere sahip olması",
      "Bileşiklerin oluşması",
      "Atomun bölünemez ve iç yapısı olmayan bir tanecik olduğu düşüncesi",
      "Kimyasal tepkimelerin gerçekleşmesi",
      "Maddenin korunması"
    ],
    correct: 2,
    explain: "Elektronun keşfi atomun daha küçük parçacıklardan oluştuğunu göstermiş ve Dalton'un bölünemez atom görüşünü değiştirmiştir."
  },
  {
    kazanim: "KİM.9.1.5",
    context: "Modern Atom Modeli",
    text: "Modern atom modelinde elektronların çekirdek çevresindeki konumu nasıl ifade edilir?",
    options: [
      "Kesin dairesel yörüngelerle",
      "Çekirdeğin içinde",
      "Tek bir sabit noktada",
      "Belirli bir yolda hareket eden parçacıklar olarak",
      "Bulunma olasılıklarının yüksek olduğu orbitallerle"
    ],
    correct: 4,
    explain: "Modern atom modelinde elektronların kesin yörüngelerinden değil, bulunma olasılıklarının yüksek olduğu orbitallerden söz edilir."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "Orbital Kavramı",
    text: "Orbital kavramı için en doğru tanım aşağıdakilerden hangisidir?",
    options: [
      "Elektronun izlediği kesin yol",
      "Elektronun bulunma olasılığının yüksek olduğu üç boyutlu bölge",
      "Protonların hareket ettiği yörünge",
      "Çekirdeğin tamamı",
      "Bir atomun tamamı"
    ],
    correct: 1,
    explain: "Orbital, elektronun bulunma olasılığının yüksek olduğu üç boyutlu bölgedir."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "s Orbitali",
    text: "Bir s alt kabuğunda kaç orbital bulunur?",
    options: ["1", "2", "3", "5", "7"],
    correct: 0,
    explain: "s alt kabuğunda yalnızca bir orbital bulunur."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "p Orbitalleri",
    text: "Bir p alt kabuğunda kaç orbital bulunur?",
    options: ["1", "2", "3", "5", "7"],
    correct: 2,
    explain: "p alt kabuğunda üç orbital bulunur."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "d Orbitalleri",
    text: "Bir d alt kabuğunda toplam kaç orbital bulunur?",
    options: ["1", "2", "3", "5", "7"],
    correct: 3,
    explain: "d alt kabuğunda beş orbital bulunur."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "f Orbitalleri",
    text: "Bir f alt kabuğunda toplam kaç orbital bulunur?",
    options: ["1", "3", "5", "6", "7"],
    correct: 4,
    explain: "f alt kabuğunda yedi orbital bulunur."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "Orbital Kapasitesi",
    text: "Bir orbitalde bulunabilecek maksimum elektron sayısı kaçtır?",
    options: ["1", "2", "4", "6", "8"],
    correct: 1,
    explain: "Pauli dışlama ilkesine göre bir orbital en fazla iki elektron içerir."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "Alt Kabuk Kapasiteleri",
    text: "p alt kabuğunun maksimum elektron kapasitesi kaçtır?",
    options: ["2", "4", "6", "8", "10"],
    correct: 2,
    explain: "p alt kabuğunda üç orbital vardır ve her orbital iki elektron aldığı için kapasite 6'dır."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "Enerji Düzeyleri",
    text: "Bir ana enerji düzeyinde bulunan alt kabukların türleri hangi kuantum sayısıyla ilişkilidir?",
    options: [
      "Baş kuantum sayısı",
      "Spin kuantum sayısı",
      "Manyetik kuantum sayısı",
      "Kütle numarası",
      "Atom numarası"
    ],
    correct: 0,
    explain: "Ana enerji düzeyi baş kuantum sayısı n ile ifade edilir."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "Orbital ve Yörünge Farkı",
    text: "Bohr modelindeki yörünge kavramı ile modern atom modelindeki orbital kavramı arasındaki temel fark nedir?",
    options: [
      "İkisi tamamen aynıdır",
      "Orbital çekirdeğin içinde bulunur",
      "Yörünge elektronun kesin yolunu, orbital ise bulunma olasılığının yüksek olduğu bölgeyi ifade eder",
      "Yörünge yalnızca protonlar için kullanılır",
      "Orbital yalnızca nötronları açıklar"
    ],
    correct: 2,
    explain: "Modern model elektronun kesin bir yolunu değil, bulunma olasılığının yüksek olduğu bölgeyi tanımlar."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "Enerji ve Elektron",
    text: "Bir atomdaki elektronun enerjisi arttığında elektron genel olarak hangi duruma geçer?",
    options: [
      "Çekirdeğe yaklaşır ve enerji kaybeder",
      "Daha yüksek enerjili bir düzeye geçebilir",
      "Protona dönüşür",
      "Nötronu parçalar",
      "Atom numarasını değiştirir"
    ],
    correct: 1,
    explain: "Elektron enerji aldığında daha yüksek enerjili bir düzeye geçebilir."
  },
  {
    kazanim: "KİM.9.1.6",
    context: "Elektron Dizilimi",
    text: "Bir atomun elektron dizilimini oluştururken elektronların öncelikle hangi orbitallere yerleşmesi beklenir?",
    options: [
      "En yüksek enerjili orbitallere",
      "Rastgele orbitallere",
      "Düşük enerjili orbitallere",
      "Yalnızca d orbitallerine",
      "Yalnızca f orbitallerine"
    ],
    correct: 2,
    explain: "Aufbau ilkesine göre elektronlar temel hâlde düşük enerjili orbitallerden başlayarak yerleşir."
  },
  {
    kazanim: "KİM.9.1.7",
    context: "Periyodik Tablo ve Elektron Dizilimi",
    text: "Bir elementin elektron diziliminin son kısmı 3s² 3p⁵ şeklindedir. Bu elementin değerlik elektron sayısı kaçtır?",
    options: ["2", "5", "6", "7", "8"],
    correct: 3,
    explain: "En dış enerji düzeyindeki elektronlar 3s² + 3p⁵ = 7 elektrondur."
  },
  {
    kazanim: "KİM.9.1.7",
    context: "Periyot Belirleme",
    text: "Elektron dizilimi 1s² 2s² 2p⁶ 3s¹ olan nötr atom hangi periyottadır?",
    options: ["1", "2", "3", "4", "5"],
    correct: 2,
    explain: "Dizilimdeki en büyük baş kuantum sayısı 3 olduğundan atom 3. periyottadır."
  },
  {
    kazanim: "KİM.9.1.7",
    context: "Grup Belirleme",
    text: "Elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁵ olan element hangi gruptadır?",
    options: ["1A", "2A", "5A", "7A", "8A"],
    correct: 3,
    explain: "En dış enerji düzeyinde 7 elektron bulunduğu için element 7A grubundadır."
  },
  {
    kazanim: "KİM.9.1.7",
    context: "Soy Gaz Kararlılığı",
    text: "Elektron dizilimi 1s² 2s² 2p⁶ olan bir atomun kimyasal olarak görece kararlı olmasının temel nedeni nedir?",
    options: [
      "Çekirdeğinde proton bulunmaması",
      "Elektronlarının tamamının çekirdekte olması",
      "En dış enerji düzeyinin dolu olması",
      "Atom numarasının sıfır olması",
      "Nötronlarının bulunmaması"
    ],
    correct: 2,
    explain: "Neonun en dış enerji düzeyi 8 elektronla doludur ve bu durum kararlı elektron düzeni sağlar."
  },
  {
    kazanim: "KİM.9.1.7",
    context: "Değerlik Elektronları",
    text: "Bir elementin değerlik elektron sayısının belirlenmesi neden önemlidir?",
    options: [
      "Elementin proton kütlesini belirler",
      "Kimyasal bağ oluşturma ve tepkime eğilimi hakkında bilgi verir",
      "Nötron sayısını doğrudan belirler",
      "Elementin rengini kesin olarak belirler",
      "Atomun çapını tek başına belirler"
    ],
    correct: 1,
    explain: "Değerlik elektronları elementin bağ oluşturma ve kimyasal tepkime davranışında önemli rol oynar."
  },
  {
    kazanim: "KİM.9.1.7",
    context: "İyon Oluşumu",
    text: "Sodyum atomunun Na⁺ iyonu oluşturmasının temel nedeni aşağıdakilerden hangisidir?",
    options: [
      "Bir elektron vererek daha kararlı elektron dizilimine ulaşması",
      "Bir proton kazanması",
      "Bir nötron kaybetmesi",
      "İki elektron kazanması",
      "Çekirdeğinin parçalanması"
    ],
    correct: 0,
    explain: "Na atomu bir elektron vererek Ne ile aynı kararlı elektron dizilimine ulaşır."
  },
  {
    kazanim: "KİM.9.1.7",
    context: "İyon ve Elektron Sayısı",
    text: "17 protonlu nötr bir atom bir elektron kazanırsa oluşan taneciğin elektron sayısı kaç olur?",
    options: ["16", "17", "18", "19", "34"],
    correct: 2,
    explain: "Nötr atomda 17 elektron vardır. Bir elektron kazanırsa elektron sayısı 18 olur."
  },
  {
    kazanim: "KİM.9.1.7",
    context: "İzoelektronik Tanecikler",
    text: "Na⁺, Ne ve F⁻ taneciklerinin ortak özelliği aşağıdakilerden hangisidir?",
    options: [
      "Proton sayılarının eşit olması",
      "Nötron sayılarının eşit olması",
      "Elektron sayılarının eşit olması",
      "Atom numaralarının eşit olması",
      "Kütle numaralarının eşit olması"
    ],
    correct: 2,
    explain: "Na⁺, Ne ve F⁻ taneciklerinin her birinde 10 elektron vardır; bunlara izoelektronik tanecikler denir."
  },
  {
    kazanim: "KİM.9.1.7",
    context: "İyonlaşma ve Elektron Dizilimi",
    text: "Bir metal atomunun kararlı iyon oluştururken elektron vermesi aşağıdakilerden hangisini sağlar?",
    options: [
      "Daha kararsız bir elektron düzeni",
      "Soy gaz elektron dizilimine ulaşma olasılığı",
      "Proton sayısının azalması",
      "Atom numarasının değişmesi",
      "Çekirdeğin yok olması"
    ],
    correct: 1,
    explain: "Ana grup metalleri elektron vererek kendilerine en yakın soy gazın kararlı elektron düzenine ulaşabilir."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Periyodik Özelliklerin Değişimi",
    text: "Aynı grupta yukarıdan aşağıya doğru atom yarıçapının artmasının temel nedeni nedir?",
    options: [
      "Proton sayısının azalması",
      "Elektron sayısının tamamen yok olması",
      "Yeni enerji düzeylerinin eklenmesi",
      "Çekirdek yükünün sıfırlanması",
      "Elementlerin ametal olması"
    ],
    correct: 2,
    explain: "Grupta aşağıya doğru yeni elektron katmanları eklenir ve atomun yarıçapı artar."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Periyotta Atom Yarıçapı",
    text: "Aynı periyotta soldan sağa doğru atom yarıçapının genel olarak azalmasının nedeni nedir?",
    options: [
      "Elektronların tamamen yok olması",
      "Proton sayısının artmasıyla etkin çekirdek çekiminin artması",
      "Enerji düzeyi sayısının artması",
      "Nötronların elektronları itmesi",
      "Atomların kütlesinin azalması"
    ],
    correct: 1,
    explain: "Aynı enerji düzeyine elektron eklenirken proton sayısı arttığı için çekirdek elektronları daha güçlü çeker."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "İyonlaşma Enerjisi",
    text: "Bir atomdan elektron koparmak için gereken enerji hangi büyüklükle ifade edilir?",
    options: ["Elektronegatiflik", "Atom yarıçapı", "İyonlaşma enerjisi", "Kütle numarası", "Elektron sayısı"],
    correct: 2,
    explain: "Gaz hâlindeki nötr bir atomdan elektron koparmak için gereken enerji iyonlaşma enerjisidir."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Elektronegatiflik",
    text: "Elektronegatiflik neyi ifade eder?",
    options: [
      "Atomun nötron sayısını",
      "Atomun kütlesini",
      "Atomun bağ elektronlarını kendine çekme eğilimini",
      "Atomun çekirdek çapını",
      "Atomun protonlarını kaybetme hızını"
    ],
    correct: 2,
    explain: "Elektronegatiflik, bir atomun kimyasal bağdaki ortak elektronları kendine çekme eğilimidir."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Florun Elektronegatifliği",
    text: "Florun elektronegatifliğinin çok yüksek olması hangi özelliğini açıklar?",
    options: [
      "Bağ elektronlarını güçlü biçimde kendine çekmesini",
      "En büyük atom yarıçapına sahip olmasını",
      "Kolayca elektron vermesini",
      "Soy gaz olmasını",
      "Metalik özelliğinin çok yüksek olmasını"
    ],
    correct: 0,
    explain: "Flor bağ elektronlarını kendine çekme eğilimi en yüksek elementlerden biridir."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Metalik Özellik",
    text: "Periyodik tabloda metalik özellik genel olarak hangi yönde artar?",
    options: ["Sağ üst köşeye doğru", "Sol alt köşeye doğru", "Yalnızca sağa doğru", "Yalnızca yukarı doğru", "Tablonun merkezine doğru"],
    correct: 1,
    explain: "Metalik özellik genel olarak periyodik tablonun sol alt tarafına doğru artar."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Atom ve İyon Yarıçapı",
    text: "Bir atom elektron kazanarak anyon hâline geldiğinde yarıçapının genellikle artmasının nedeni nedir?",
    options: [
      "Proton sayısının artması",
      "Elektron sayısının artması ve elektronlar arasındaki itmenin güçlenmesi",
      "Çekirdeğin kaybolması",
      "Nötronların elektronlara dönüşmesi",
      "Atom numarasının sıfırlanması"
    ],
    correct: 1,
    explain: "Elektron sayısı arttığında elektron-elektron itmesi artar ve elektron bulutu genişleyebilir."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Katyon Yarıçapı",
    text: "Bir atom elektron vererek katyon hâline geldiğinde atom yarıçapının genellikle küçülmesinin temel nedeni nedir?",
    options: [
      "Elektron sayısının azalması ve çekirdek çekiminin kalan elektronlar üzerindeki etkisinin artması",
      "Proton sayısının sıfırlanması",
      "Nötronların tamamen yok olması",
      "Atomun başka elemente dönüşmesi",
      "Elektronların kütlesinin artması"
    ],
    correct: 0,
    explain: "Elektron kaybıyla elektron-elektron itmesi azalır ve çekirdeğin kalan elektronlar üzerindeki çekim etkisi göreli olarak artar."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "İyonlaşma Enerjisindeki Sıçrama",
    text: "Bir elementin ardışık iyonlaşma enerjilerinde belirgin bir sıçrama görülmesi ne hakkında bilgi verebilir?",
    options: [
      "Elementin nötron sayısı hakkında kesin bilgi verir",
      "Elementin erime noktasını doğrudan verir",
      "Değerlik elektronlarının sayısı hakkında fikir verebilir",
      "Elementin rengini belirler",
      "Elementin kütle numarasını doğrudan verir"
    ],
    correct: 2,
    explain: "Büyük sıçramanın hangi elektron koparıldıktan sonra gerçekleştiği, değerlik elektronlarının sayısı hakkında fikir verebilir."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Aynı Gruptaki Elementler",
    text: "Li, Na ve K elementlerinin aynı grupta bulunması aşağıdaki özelliklerden hangilerinin benzer olmasını bekletir?",
    options: [
      "Kimyasal davranışlarının ve değerlik elektron düzenlerinin",
      "Atom yarıçaplarının tamamen aynı olmasını",
      "Kütle numaralarının aynı olmasını",
      "Nötron sayılarının aynı olmasını",
      "Elektron katmanı sayılarının aynı olmasını"
    ],
    correct: 0,
    explain: "Aynı gruptaki ana grup elementlerinin değerlik elektron düzenleri benzer olduğundan kimyasal özellikleri de benzerlik gösterir."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Periyodik Eğilimleri Yorumlama",
    text: "Bir öğrenci periyodik tablodaki atom yarıçapı, iyonlaşma enerjisi ve elektronegatiflik eğilimlerini birlikte incelemek istiyor. En doğru yaklaşım hangisidir?",
    options: [
      "Her özelliği birbirinden tamamen bağımsız değerlendirmek",
      "Yalnızca atom kütlesine bakmak",
      "Elementin tablodaki konumunu ve elektron dizilimini birlikte değerlendirmek",
      "Sadece elementin rengini dikkate almak",
      "Yalnızca nötron sayısını karşılaştırmak"
    ],
    correct: 2,
    explain: "Periyodik özellikleri yorumlarken elementin periyot, grup, elektron dizilimi ve etkin çekirdek yükü birlikte değerlendirilmelidir."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Periyodik Tabloda Karşılaştırma",
    text: "Na ve Cl aynı periyotta bulunmaktadır. Bu iki element karşılaştırıldığında hangisinin atom yarıçapının daha büyük olması beklenir?",
    options: [
      "Cl, çünkü proton sayısı daha fazladır",
      "Na, çünkü aynı periyotta solda bulunur ve etkin çekirdek çekimi daha düşüktür",
      "İkisinin yarıçapı kesinlikle aynıdır",
      "Cl, çünkü elektron sayısı daha azdır",
      "Hiçbiri, çünkü atom yarıçapı periyodik bir özellik değildir"
    ],
    correct: 1,
    explain: "Aynı periyotta soldan sağa doğru etkin çekirdek çekimi arttığı için atom yarıçapı genel olarak küçülür. Bu nedenle Na'nın yarıçapı Cl'den büyüktür."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Kimyasal Özelliklerin Kaynağı",
    text: "Aynı gruptaki elementlerin benzer kimyasal özellik göstermesinin en önemli nedeni nedir?",
    options: [
      "Aynı kütle numarasına sahip olmaları",
      "Aynı sayıda nötron taşımaları",
      "Değerlik elektron sayılarının benzer olması",
      "Atom yarıçaplarının eşit olması",
      "Aynı renkte olmaları"
    ],
    correct: 2,
    explain: "Ana grup elementlerinde aynı grupta bulunan elementlerin değerlik elektron düzenleri benzerdir ve bu durum kimyasal davranışlarını etkiler."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Periyodik Özelliklerin Birlikte Kullanılması",
    text: "Bir elementin elektronu güçlü çektiği, atom yarıçapının küçük ve iyonlaşma enerjisinin yüksek olduğu biliniyor. Bu elementin periyodik tablodaki konumu için hangisi daha olasıdır?",
    options: ["Sol alt bölge", "Sol üst bölge", "Sağ üst bölge", "Tablonun en alt kısmı", "Yalnızca geçiş metalleri bölgesi"],
    correct: 2,
    explain: "Küçük atom yarıçapı, yüksek iyonlaşma enerjisi ve yüksek elektronegatiflik genel olarak periyodik tablonun sağ üst bölümünde belirgindir."
  },
  {
    kazanim: "KİM.9.1.8",
    context: "Periyodik Tabloyu Bir Harita Gibi Kullanmak",
    text: "Bir elementin periyodik tablodaki konumundan hangi özellikler hakkında genel tahminlerde bulunulabilir?",
    options: [
      "Değerlik elektronları, atom yarıçapı, iyonlaşma enerjisi ve elektronegatiflik gibi özellikler",
      "Elementin kesin erime noktası yalnızca konumdan",
      "Elementin kesin yoğunluğu yalnızca konumdan",
      "Elementin kesin kütle numarası",
      "Elementin bütün fiziksel özellikleri hiçbir deney yapılmadan"
    ],
    correct: 0,
    explain: "Periyodik tablo, elektron dizilimi ve periyodik eğilimlerden yararlanılarak birçok kimyasal özellik hakkında nitel tahmin yapılmasını sağlar."
  }
 ],
  orbital: [

  // =====================================================
  // KAZANIM 1 — ORBİTAL KAVRAMI VE TÜRLERİ
  // 10 SORU
  // =====================================================

  {
    id: "orbital-001",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "Orbital kavramı",
    difficulty: "kolay",
    context: "Bir öğrenci atomdaki elektronların çekirdek çevresindeki dağılımını inceliyor.",
    text: "Orbital kavramı aşağıdakilerden hangisini ifade eder?",
    options: [
      "Elektronun çekirdek çevresinde izlediği kesin yol",
      "Elektronun bulunma olasılığının yüksek olduğu üç boyutlu bölge",
      "Protonların hareket ettiği bölge",
      "Çekirdeğin kapladığı hacim",
      "Elektronların tamamının bulunduğu enerji düzeyi"
    ],
    correct: 1,
    explain: "Orbital, elektronun bulunma olasılığının yüksek olduğu çekirdek çevresindeki üç boyutlu bölgedir."
  },

  {
    id: "orbital-002",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "Orbital kavramı",
    difficulty: "kolay",
    context: "Bir öğretmen elektronların atom içindeki konumunu anlatıyor.",
    text: "Orbital ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "Elektronun kesin olarak izlediği yoldur.",
      "Atom çekirdeğinin bulunduğu bölgedir.",
      "Elektronun bulunma olasılığının yüksek olduğu bölgedir.",
      "Yalnızca protonların bulunabileceği bölgedir.",
      "Her orbital yalnızca bir elektron alabilir."
    ],
    correct: 2,
    explain: "Orbital, elektronun bulunma olasılığının yüksek olduğu bölgedir; elektronun kesin yolu değildir."
  },

  {
    id: "orbital-003",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "s orbitali",
    difficulty: "kolay",
    context: "Bir atomun s alt kabuğu inceleniyor.",
    text: "s alt kabuğunda kaç orbital bulunur?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    correct: 0,
    explain: "s alt kabuğunda yalnızca bir orbital bulunur."
  },

  {
    id: "orbital-004",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "p orbitali",
    difficulty: "kolay",
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
    explain: "p alt kabuğunda üç orbital bulunur."
  },

  {
    id: "orbital-005",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "d orbitali",
    difficulty: "kolay",
    context: "Bir öğrenci d alt kabuğunun yapısını araştırıyor.",
    text: "Bir d alt kabuğunda kaç orbital bulunur?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    correct: 3,
    explain: "d alt kabuğunda beş orbital bulunur."
  },

  {
    id: "orbital-006",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "f orbitali",
    difficulty: "kolay",
    context: "Elektronların f alt kabuğundaki dağılımı inceleniyor.",
    text: "Bir f alt kabuğunda kaç orbital bulunur?",
    options: [
      "1",
      "3",
      "5",
      "6",
      "7"
    ],
    correct: 4,
    explain: "f alt kabuğunda yedi orbital bulunur."
  },

  {
    id: "orbital-007",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "Orbital şekilleri",
    difficulty: "orta",
    context: "Bir öğrenci orbital şekillerini karşılaştırıyor.",
    text: "Küresel şekle sahip olan orbital türü hangisidir?",
    options: [
      "s",
      "p",
      "d",
      "f",
      "Hiçbiri"
    ],
    correct: 0,
    explain: "s orbitalleri küresel şekillidir."
  },

  {
    id: "orbital-008",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "p orbitalinin şekli",
    difficulty: "orta",
    context: "Bir modelde p orbitalleri gösteriliyor.",
    text: "p orbitalleri genel olarak hangi şekle sahiptir?",
    options: [
      "Küresel",
      "Dambıl benzeri",
      "Üçgensel",
      "Doğrusal",
      "Küp şeklinde"
    ],
    correct: 1,
    explain: "p orbitalleri iki loblu, dambıl benzeri şekle sahiptir."
  },

  {
    id: "orbital-009",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "Orbital sayısı",
    difficulty: "orta",
    context: "Bir öğrenci farklı alt kabukların orbital sayılarını karşılaştırıyor.",
    text: "Aşağıdaki alt kabuklardan hangisinde en fazla orbital bulunur?",
    options: [
      "s",
      "p",
      "d",
      "f",
      "Hepsinde eşittir"
    ],
    correct: 3,
    explain: "s, p, d ve f alt kabuklarında sırasıyla 1, 3, 5 ve 7 orbital bulunur."
  },

  {
    id: "orbital-010",
    kazanim: "KİM.9.1.6 — Orbital kavramını ve orbital türlerini açıklar.",
    konu: "Orbital-alt kabuk ilişkisi",
    difficulty: "orta",
    context: "Bir öğretmen alt kabuk ile orbital arasındaki ilişkiyi sorguluyor.",
    text: "Aşağıdakilerden hangisi doğrudur?",
    options: [
      "Her alt kabukta yalnızca bir orbital vardır.",
      "Bir orbital farklı alt kabuklara aynı anda aittir.",
      "s, p, d ve f alt kabuklarının orbital sayıları farklıdır.",
      "p alt kabuğunda 5 orbital vardır.",
      "d alt kabuğunda 3 orbital vardır."
    ],
    correct: 2,
    explain: "s, p, d ve f alt kabuklarında sırasıyla 1, 3, 5 ve 7 orbital bulunur."
  },


  // =====================================================
  // KAZANIM 2 — ORBİTALLERİN ELEKTRON KAPASİTESİ
  // 8 SORU
  // =====================================================

  {
    id: "orbital-011",
    kazanim: "KİM.9.1.6 — Orbitallerin elektron kapasitesini belirler.",
    konu: "Orbital elektron kapasitesi",
    difficulty: "kolay",
    context: "Bir öğrenci tek bir orbitalin kapasitesini araştırıyor.",
    text: "Bir orbitalde en fazla kaç elektron bulunabilir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    correct: 1,
    explain: "Bir orbital en fazla iki elektron barındırabilir."
  },

  {
    id: "orbital-012",
    kazanim: "KİM.9.1.6 — Orbitallerin elektron kapasitesini belirler.",
    konu: "s alt kabuğunun kapasitesi",
    difficulty: "kolay",
    context: "s alt kabuğunun elektron kapasitesi hesaplanıyor.",
    text: "Bir s alt kabuğu en fazla kaç elektron alabilir?",
    options: [
      "1",
      "2",
      "4",
      "6",
      "10"
    ],
    correct: 1,
    explain: "s alt kabuğunda 1 orbital vardır. 1 × 2 = 2 elektron alabilir."
  },

  {
    id: "orbital-013",
    kazanim: "KİM.9.1.6 — Orbitallerin elektron kapasitesini belirler.",
    konu: "p alt kabuğunun kapasitesi",
    difficulty: "kolay",
    context: "p alt kabuğunun kapasitesi hesaplanıyor.",
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
    id: "orbital-014",
    kazanim: "KİM.9.1.6 — Orbitallerin elektron kapasitesini belirler.",
    konu: "d alt kabuğunun kapasitesi",
    difficulty: "kolay",
    context: "d alt kabuğundaki elektron kapasitesi inceleniyor.",
    text: "Bir d alt kabuğu en fazla kaç elektron alabilir?",
    options: [
      "2",
      "6",
      "8",
      "10",
      "14"
    ],
    correct: 3,
    explain: "d alt kabuğunda 5 orbital bulunur. 5 × 2 = 10 elektron alabilir."
  },

  {
    id: "orbital-015",
    kazanim: "KİM.9.1.6 — Orbitallerin elektron kapasitesini belirler.",
    konu: "f alt kabuğunun kapasitesi",
    difficulty: "kolay",
    context: "f alt kabuğunun elektron kapasitesi hesaplanıyor.",
    text: "Bir f alt kabuğu en fazla kaç elektron alabilir?",
    options: [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    correct: 4,
    explain: "f alt kabuğunda 7 orbital vardır. 7 × 2 = 14 elektron alabilir."
  },

  {
    id: "orbital-016",
    kazanim: "KİM.9.1.6 — Orbitallerin elektron kapasitesini belirler.",
    konu: "Orbital kapasitesi",
    difficulty: "orta",
    context: "Bir öğrenci 4p alt kabuğunun kapasitesini hesaplıyor.",
    text: "4p alt kabuğunda en fazla kaç elektron bulunabilir?",
    options: [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    correct: 2,
    explain: "Baş kuantum sayısı değişse de p alt kabuğunun orbital sayısı 3 ve maksimum elektron sayısı 6'dır."
  },

  {
    id: "orbital-017",
    kazanim: "KİM.9.1.6 — Orbitallerin elektron kapasitesini belirler.",
    konu: "Alt kabuk kapasitesi",
    difficulty: "orta",
    context: "Bir atomun 3d alt kabuğu inceleniyor.",
    text: "3d alt kabuğu tamamen dolu olduğunda kaç elektron içerir?",
    options: [
      "2",
      "6",
      "8",
      "10",
      "14"
    ],
    correct: 3,
    explain: "d alt kabuğunun tamamı dolduğunda 10 elektron içerir."
  },

  {
    id: "orbital-018",
    kazanim: "KİM.9.1.6 — Orbitallerin elektron kapasitesini belirler.",
    konu: "Toplam elektron kapasitesi",
    difficulty: "zor",
    context: "Bir öğrenci bir alt kabuktaki orbitallerin tamamını elektronlarla dolduruyor.",
    text: "Bir alt kabukta 5 orbital varsa bu alt kabuk en fazla kaç elektron alır?",
    options: [
      "5",
      "7",
      "8",
      "10",
      "14"
    ],
    correct: 3,
    explain: "Her orbital en fazla 2 elektron alır. 5 × 2 = 10 elektron."
  },


  // =====================================================
  // KAZANIM 3 — AUFBAU İLKESİ VE ENERJİ SIRASI
  // 10 SORU
  // =====================================================

  {
    id: "orbital-019",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Aufbau ilkesi",
    difficulty: "kolay",
    context: "Bir öğrenci atomun temel hâl elektron dizilimini oluşturuyor.",
    text: "Aufbau ilkesine göre elektronlar orbitallere nasıl yerleşir?",
    options: [
      "Önce yüksek enerjili orbitallere",
      "Rastgele",
      "Önce düşük enerjili orbitallere",
      "Sadece p orbitallerine",
      "Sadece son katmana"
    ],
    correct: 2,
    explain: "Aufbau ilkesine göre elektronlar düşük enerjili orbitallerden başlayarak yerleşir."
  },

  {
    id: "orbital-020",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Enerji sırası",
    difficulty: "kolay",
    context: "Elektronların temel hâlde yerleşim sırası inceleniyor.",
    text: "Aşağıdaki orbitallerden hangisi önce dolar?",
    options: [
      "2p",
      "3s",
      "3p",
      "4s",
      "3d"
    ],
    correct: 0,
    explain: "Verilenler arasında enerji bakımından önce 2p orbitali dolar."
  },

  {
    id: "orbital-021",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Orbital enerji sırası",
    difficulty: "orta",
    context: "Bir öğrenci 3s ve 3p orbitallerini karşılaştırıyor.",
    text: "Hangisi daha düşük enerjilidir?",
    options: [
      "3p",
      "3s",
      "İkisi eşit",
      "4p",
      "3d"
    ],
    correct: 1,
    explain: "Aynı ana enerji düzeyindeki s orbitali p orbitalinden daha düşük enerjilidir."
  },

  {
    id: "orbital-022",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Orbital enerji sırası",
    difficulty: "orta",
    context: "Elektron dizilimi hazırlanırken 4s ve 3d orbitalleri karşılaştırılıyor.",
    text: "Temel hâl elektron yerleşiminde hangisi önce dolar?",
    options: [
      "3d",
      "4s",
      "4p",
      "5s",
      "İkisi aynı anda"
    ],
    correct: 1,
    explain: "Elektronların yerleşim sıralamasında 4s, 3d'den önce gelir."
  },

  {
    id: "orbital-023",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Enerji sıralaması",
    difficulty: "orta",
    context: "Bir elektron dizilimi oluşturuluyor.",
    text: "Aşağıdaki sıralamalardan hangisi doğrudur?",
    options: [
      "1s → 2s → 2p → 3s",
      "1s → 2p → 2s → 3s",
      "2s → 1s → 2p → 3s",
      "1s → 3s → 2s → 2p",
      "2p → 2s → 1s → 3s"
    ],
    correct: 0,
    explain: "Temel elektron yerleşiminde sıralama 1s, 2s, 2p, 3s şeklindedir."
  },

  {
    id: "orbital-024",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Elektron yerleşim sırası",
    difficulty: "orta",
    context: "Bir atomun elektronları enerji düzeylerine yerleştiriliyor.",
    text: "3p'den sonra elektronların yerleşeceği alt kabuk hangisidir?",
    options: [
      "3s",
      "3d",
      "4s",
      "4p",
      "5s"
    ],
    correct: 2,
    explain: "Temel yerleşim sıralamasında 3p'den sonra 4s gelir."
  },

  {
    id: "orbital-025",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Elektron yerleşim sırası",
    difficulty: "zor",
    context: "Bir öğrenci elektronların yerleşim sırasını aşağıdaki gibi yazıyor: 1s, 2s, 2p, 3s, 3p, 3d.",
    text: "Bu sıralamadaki temel hata nedir?",
    options: [
      "2p yanlış yazılmıştır.",
      "3s yanlış yazılmıştır.",
      "3p'den sonra 4s gelmelidir.",
      "1s en sona yazılmalıdır.",
      "3d'den sonra 4s gelmelidir."
    ],
    correct: 2,
    explain: "Temel yerleşim sırasına göre 3p'den sonra 4s, ardından 3d gelir."
  },

  {
    id: "orbital-026",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Elektron dizilimi",
    difficulty: "orta",
    context: "10 elektrona sahip bir atomun elektronları yerleştiriliyor.",
    text: "Son elektron hangi alt kabuğa yerleşir?",
    options: [
      "1s",
      "2s",
      "2p",
      "3s",
      "3p"
    ],
    correct: 2,
    explain: "10 elektronun dizilimi 1s² 2s² 2p⁶ şeklindedir."
  },

  {
    id: "orbital-027",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Elektron dizilimi",
    difficulty: "zor",
    context: "Bir atomun elektron dizilimi 1s² 2s² 2p⁶ 3s¹ şeklindedir.",
    text: "Bu atomda son elektron hangi orbitalde bulunur?",
    options: [
      "2p",
      "3s",
      "3p",
      "4s",
      "2s"
    ],
    correct: 1,
    explain: "Dizilimin son terimi 3s¹ olduğundan son elektron 3s orbitalindedir."
  },

  {
    id: "orbital-028",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Aufbau ilkesini uygular.",
    konu: "Aufbau uygulaması",
    difficulty: "zor",
    context: "Bir öğrenci elektronları önce yüksek enerjili orbitallere yerleştiriyor.",
    text: "Öğrencinin yaptığı hata hangi ilkenin ihlalidir?",
    options: [
      "Pauli dışlama ilkesi",
      "Hund kuralı",
      "Aufbau ilkesi",
      "Kütlenin korunumu",
      "Avogadro ilkesi"
    ],
    correct: 2,
    explain: "Elektronların düşük enerjili orbitallerden başlayarak yerleşmesi Aufbau ilkesidir."
  },


  // =====================================================
  // KAZANIM 4 — PAULİ DIŞLAMA İLKESİ
  // 8 SORU
  // =====================================================

  {
    id: "orbital-029",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Pauli dışlama ilkesini uygular.",
    konu: "Pauli ilkesi",
    difficulty: "kolay",
    context: "Bir orbitalde iki elektron bulunuyor.",
    text: "Bu iki elektronun spinleri nasıl olmalıdır?",
    options: [
      "Aynı yönde",
      "Zıt yönde",
      "Spinleri olamaz",
      "Biri proton spinine sahip olmalıdır",
      "İkisi de spinsiz olmalıdır"
    ],
    correct: 1,
    explain: "Aynı orbitalde bulunan iki elektronun spinleri zıt yönlü olmalıdır."
  },

  {
    id: "orbital-030",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Pauli dışlama ilkesini uygular.",
    konu: "Pauli ilkesi",
    difficulty: "kolay",
    context: "Bir öğrenci tek bir orbital kutusuna üç elektron yerleştiriyor.",
    text: "Bu gösterimin hatası nedir?",
    options: [
      "Orbital en fazla iki elektron alabilir.",
      "Orbital yalnızca proton alabilir.",
      "Elektronlar yalnızca p orbitalinde bulunabilir.",
      "Orbitalin enerjisi sıfırdır.",
      "Elektronların kütlesi farklıdır."
    ],
    correct: 0,
    explain: "Pauli dışlama ilkesine göre bir orbitalde en fazla iki elektron bulunabilir."
  },

  {
    id: "orbital-031",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Pauli dışlama ilkesini uygular.",
    konu: "Orbital şeması",
    difficulty: "orta",
    context: "Bir orbital kutusunda iki elektron aynı yönlü oklarla gösteriliyor.",
    text: "Bu gösterim hangi ilkeye aykırıdır?",
    options: [
      "Aufbau",
      "Hund",
      "Pauli dışlama",
      "Lavoisier",
      "Avogadro"
    ],
    correct: 2,
    explain: "Aynı orbitaldeki iki elektronun spinleri zıt olmalıdır."
  },

  {
    id: "orbital-032",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Pauli dışlama ilkesini uygular.",
    konu: "Pauli ilkesi",
    difficulty: "orta",
    context: "Bir öğretmen öğrencilerden doğru orbital gösterimini seçmelerini istiyor.",
    text: "Aşağıdakilerden hangisi Pauli ilkesine uygundur?",
    options: [
      "↑↑",
      "↑↑↑",
      "↑↓",
      "↑↓↑",
      "↑↑↓"
    ],
    correct: 2,
    explain: "Tek bir orbitalde iki elektron bulunuyorsa spinleri zıt olmalıdır: ↑↓."
  },

  {
    id: "orbital-033",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Pauli dışlama ilkesini uygular.",
    konu: "Orbital kapasitesi",
    difficulty: "kolay",
    context: "2s orbitali inceleniyor.",
    text: "2s orbitali tamamen dolduğunda kaç elektron içerir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    correct: 1,
    explain: "Bir orbital en fazla iki elektron içerir."
  },

  {
    id: "orbital-034",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Pauli dışlama ilkesini uygular.",
    konu: "Pauli ilkesi",
    difficulty: "orta",
    context: "Bir öğrenci Pauli ilkesini açıklıyor.",
    text: "Aşağıdakilerden hangisi doğrudur?",
    options: [
      "Bir orbitalde üç elektron bulunabilir.",
      "Bir orbitalde iki elektron aynı spinli olabilir.",
      "Bir orbitalde en fazla iki elektron bulunabilir.",
      "Pauli yalnızca p orbitalleri için geçerlidir.",
      "Pauli yalnızca d orbitalleri için geçerlidir."
    ],
    correct: 2,
    explain: "Pauli dışlama ilkesi tüm orbitaller için geçerlidir."
  },

  {
    id: "orbital-035",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Pauli dışlama ilkesini uygular.",
    konu: "Orbital şeması analizi",
    difficulty: "zor",
    context: "Bir öğrenci bir orbital için ↑↓ gösterimini, başka bir orbital için ↑↑ gösterimini kullanıyor.",
    text: "Hangi gösterim hatalıdır?",
    options: [
      "İlk gösterim",
      "İkinci gösterim",
      "Her ikisi",
      "Hiçbiri",
      "İkisinin de enerji seviyesi bilinmediği için karar verilemez"
    ],
    correct: 1,
    explain: "Aynı orbitalde bulunan iki elektronun spinleri zıt olmalıdır. Bu nedenle ↑↑ gösterimi hatalıdır."
  },

  {
    id: "orbital-036",
    kazanim: "KİM.9.1.6 — Elektronların orbitallere yerleşiminde Pauli dışlama ilkesini uygular.",
    konu: "Pauli ve orbital",
    difficulty: "zor",
    context: "Bir atomun orbital şemasında bir kutuda üç ok, başka bir kutuda iki zıt yönlü ok gösterilmiştir.",
    text: "Bu şemayla ilgili hangi sonuç doğrudur?",
    options: [
      "Şema tamamen doğrudur.",
      "Üç elektronlu kutu Pauli ilkesine aykırıdır.",
      "İki elektronlu kutu kesinlikle yanlıştır.",
      "Hund kuralı hiçbir şekilde uygulanamaz.",
      "Orbitaller elektron alamaz."
    ],
    correct: 1,
    explain: "Tek bir orbitalde üç elektron bulunamaz. Bu durum Pauli ilkesine aykırıdır."
  },


  // =====================================================
  // KAZANIM 5 — HUND KURALI
  // 8 SORU
  // =====================================================

  {
    id: "orbital-037",
    kazanim: "KİM.9.1.6 — Elektronların eş enerjili orbitallere yerleşiminde Hund kuralını uygular.",
    konu: "Hund kuralı",
    difficulty: "kolay",
    context: "2p alt kabuğuna üç elektron yerleştiriliyor.",
    text: "Hund kuralına göre elektronlar nasıl yerleşmelidir?",
    options: [
      "Tek orbitalde üç elektron",
      "Bir orbitalde iki, bir orbitalde bir elektron",
      "Üç orbitalin her birinde bir elektron",
      "İki orbital boş kalacak şekilde",
      "Üç elektron aynı orbitalde eşleşmiş"
    ],
    correct: 2,
    explain: "Eş enerjili p orbitalleri önce birer elektronla tek tek doldurulur."
  },

  {
    id: "orbital-038",
    kazanim: "KİM.9.1.6 — Elektronların eş enerjili orbitallere yerleşiminde Hund kuralını uygular.",
    konu: "Hund kuralı",
    difficulty: "kolay",
    context: "Bir öğretmen eş enerjili orbitallere elektronların yerleşimini açıklıyor.",
    text: "Hund kuralı neyi belirtir?",
    options: [
      "Elektronların önce yüksek enerjili orbitallere yerleşmesini",
      "Eş enerjili orbitallerin önce tek tek doldurulmasını",
      "Her orbitalde dört elektron bulunmasını",
      "Elektronların çekirdeğe yerleşmesini",
      "Protonların orbitallere dağılmasını"
    ],
    correct: 1,
    explain: "Hund kuralına göre eş enerjili orbitaller eşleşmeden önce birer elektron alır."
  },

  {
    id: "orbital-039",
    kazanim: "KİM.9.1.6 — Elektronların eş enerjili orbitallere yerleşiminde Hund kuralını uygular.",
    konu: "2p² orbital şeması",
    difficulty: "orta",
    context: "2p² elektron dizilimi için orbital şeması çiziliyor.",
    text: "Hund kuralına uygun gösterim hangisidir?",
    options: [
      "↑↓  boş  boş",
      "↑  ↑  boş",
      "↑↓  ↑  boş",
      "↑↓  ↑↓  boş",
      "↑↑  boş  boş"
    ],
    correct: 1,
    explain: "İki elektron, eş enerjili iki ayrı p orbitaline tek tek yerleşir."
  },

  {
    id: "orbital-040",
    kazanim: "KİM.9.1.6 — Elektronların eş enerjili orbitallere yerleşiminde Hund kuralını uygular.",
    konu: "2p³ orbital şeması",
    difficulty: "orta",
    context: "2p³ elektron dizilimi inceleniyor.",
    text: "Hund kuralına uygun gösterim hangisidir?",
    options: [
      "↑↓  ↑  boş",
      "↑↓  ↑↓  boş",
      "↑  ↑  ↑",
      "↑↓  boş  boş",
      "↑↑  ↑  boş"
    ],
    correct: 2,
    explain: "Üç eş enerjili p orbitalinin her biri önce bir elektron alır."
  },

  {
    id: "orbital-041",
    kazanim: "KİM.9.1.6 — Elektronların eş enerjili orbitallere yerleşiminde Hund kuralını uygular.",
    konu: "2p⁴ orbital şeması",
    difficulty: "orta",
    context: "2p⁴ için orbital şeması hazırlanıyor.",
    text: "Hund kuralına uygun gösterim hangisidir?",
    options: [
      "↑↓  ↑↓  boş",
      "↑  ↑  ↑↓",
      "↑↓  ↑  ↑",
      "↑↓  ↑↓  ↑↓",
      "↑  ↑↓  boş"
    ],
    correct: 1,
    explain: "Önce üç p orbitaline birer elektron yerleşir, dördüncü elektron bunlardan birinde eşleşir."
  },

  {
    id: "orbital-042",
    kazanim: "KİM.9.1.6 — Elektronların eş enerjili orbitallere yerleşiminde Hund kuralını uygular.",
    konu: "Hund kuralı analizi",
    difficulty: "zor",
    context: "Bir öğrenci 3p³ için ↑↓, ↑, boş şeklinde bir şema çiziyor.",
    text: "Öğrencinin yaptığı hata nedir?",
    options: [
      "Pauli ilkesi ihlal edilmiştir.",
      "3p'de yalnızca iki orbital vardır.",
      "Hund kuralına göre üç orbital önce birer elektron almalıdır.",
      "3p orbitali elektron alamaz.",
      "Elektronların tamamı eşleşmelidir."
    ],
    correct: 2,
    explain: "3p³ için üç eş enerjili p orbitalinin her birinde bir elektron bulunmalıdır."
  },

  {
    id: "orbital-043",
    kazanim: "KİM.9.1.6 — Elektronların eş enerjili orbitallere yerleşiminde Hund kuralını uygular.",
    konu: "Eş enerjili orbitaller",
    difficulty: "zor",
    context: "Bir alt kabukta eş enerjili üç orbital bulunmaktadır.",
    text: "Bu orbitallere üç elektron yerleştirildiğinde hangisi beklenir?",
    options: [
      "Elektronların tamamı tek orbitalde bulunur.",
      "İki elektron aynı orbitalde eşleşir.",
      "Her orbital bir elektron alır.",
      "Bir orbital dört elektron alır.",
      "Elektronlardan biri çekirdeğe geçer."
    ],
    correct: 2,
    explain: "Hund kuralına göre eş enerjili orbitaller önce birer elektronla doldurulur."
  },

  {
    id: "orbital-044",
    kazanim: "KİM.9.1.6 — Elektronların eş enerjili orbitallere yerleşiminde Hund kuralını uygular.",
    konu: "Hund-Pauli birlikte",
    difficulty: "zor",
    context: "Bir p alt kabuğuna elektronlar yerleştiriliyor.",
    text: "Aşağıdaki gösterimlerden hangisi hem Hund hem Pauli ilkelerine uygundur?",
    options: [
      "↑↑  ↑  boş",
      "↑↓  ↑  ↑",
      "↑↓  ↑↓  ↑↓",
      "↑↓  ↑↓  boş",
      "↑↑  ↑↓  boş"
    ],
    correct: 1,
    explain: "Üç p orbitalinin ikisinde eşleşme, birinde tek elektron vardır; her orbitaldeki elektronlar zıt spinlidir ve önce orbitaller tek tek doldurulmuştur."
  },


  // =====================================================
  // KAZANIM 6 — ELEKTRON DİZİLİMİ VE ORBİTAL ŞEMALARI
  // 10 SORU
  // =====================================================

  {
    id: "orbital-045",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Elektron dizilimi",
    difficulty: "kolay",
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
    id: "orbital-046",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Elektron dizilimi",
    difficulty: "kolay",
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
    id: "orbital-047",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Elektron dizilimi",
    difficulty: "kolay",
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
    id: "orbital-048",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Elektron dizilimi",
    difficulty: "orta",
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
    id: "orbital-049",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Elektron dizilimi",
    difficulty: "orta",
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
    id: "orbital-050",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Elektron dizilimi",
    difficulty: "orta",
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
    id: "orbital-051",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Elektron dizilimi",
    difficulty: "orta",
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
    id: "orbital-052",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Elektron dizilimi",
    difficulty: "orta",
    context: "Atom numarası 15 olan fosfor atomu inceleniyor.",
    text: "Fosfor atomunun son alt kabuktaki elektron sayısı kaçtır?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correct: 2,
    explain: "Fosforun dizilimi 1s² 2s² 2p⁶ 3s² 3p³ olduğundan son alt kabukta 3 elektron vardır."
  },

  {
    id: "orbital-053",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Orbital şeması",
    difficulty: "zor",
    context: "Karbon atomunun 2p² elektronları için orbital şeması hazırlanıyor.",
    text: "Doğru orbital şeması hangisidir?",
    options: [
      "↑↓  boş  boş",
      "↑  ↑  boş",
      "↑↓  ↑  boş",
      "↑↓  ↑↓  boş",
      "↑↑  boş  boş"
    ],
    correct: 1,
    explain: "Karbonun 2p² diziliminde Hund kuralına göre iki elektron ayrı p orbitallerinde bulunur."
  },

  {
    id: "orbital-054",
    kazanim: "KİM.9.1.6 — Atomların elektron dizilimlerini ve orbital şemalarını oluşturur.",
    konu: "Orbital şeması",
    difficulty: "zor",
    context: "Oksijen atomunun 2p⁴ elektronları için orbital şeması hazırlanıyor.",
    text: "Aşağıdakilerden hangisi temel hâle uygun bir gösterimdir?",
    options: [
      "↑↓  ↑↓  boş",
      "↑  ↑  ↑↓",
      "↑↓  ↑  ↑",
      "↑↓  ↑↓  ↑↓",
      "↑↑  ↑  ↑"
    ],
    correct: 1,
    explain: "2p⁴ için önce üç orbital birer elektron alır, ardından dördüncü elektron eşleşir."
  },


  // =====================================================
  // KAZANIM 7 — ELEKTRON SAYISI, ATOM NUMARASI VE
  // DEĞERLİK ELEKTRONLARI
  // 6 SORU
  // =====================================================

  {
    id: "orbital-055",
    kazanim: "KİM.9.1.6 — Elektron diziliminden elektron sayısını ve atom numarasını belirler.",
    konu: "Elektron sayısı",
    difficulty: "kolay",
    context: "Nötr bir atomun elektron dizilimi 1s² 2s² 2p⁶ şeklindedir.",
    text: "Bu atomun atom numarası kaçtır?",
    options: [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    correct: 2,
    explain: "Toplam elektron sayısı 2 + 2 + 6 = 10'dur. Nötr atomda elektron sayısı atom numarasına eşittir."
  },

  {
    id: "orbital-056",
    kazanim: "KİM.9.1.6 — Elektron diziliminden elektron sayısını ve atom numarasını belirler.",
    konu: "Elektron sayısı",
    difficulty: "orta",
    context: "Nötr bir atomun elektron dizilimi 1s² 2s² 2p⁶ 3s¹ şeklindedir.",
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
    id: "orbital-057",
    kazanim: "KİM.9.1.6 — Elektron diziliminden elektron sayısını ve atom numarasını belirler.",
    konu: "Elektron sayısı",
    difficulty: "orta",
    context: "Bir nötr atomun elektron dizilimi 1s² 2s² 2p⁶ 3s² şeklindedir.",
    text: "Bu atomun atom numarası kaçtır?",
    options: [
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
    correct: 2,
    explain: "Elektron sayısı 2 + 2 + 6 + 2 = 12'dir."
  },

  {
    id: "orbital-058",
    kazanim: "KİM.9.1.6 — Atomların değerlik elektron sayılarını elektron dizilimlerinden belirler.",
    konu: "Değerlik elektronları",
    difficulty: "orta",
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
    explain: "En dış enerji düzeyi n=3'tür ve burada 3s¹ bulunduğu için 1 elektron vardır."
  },

  {
    id: "orbital-059",
    kazanim: "KİM.9.1.6 — Atomların değerlik elektron sayılarını elektron dizilimlerinden belirler.",
    konu: "Değerlik elektronları",
    difficulty: "orta",
    context: "Klor atomunun elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p⁵ şeklindedir.",
    text: "Klor atomunun en dış enerji düzeyindeki elektron sayısı kaçtır?",
    options: [
      "2",
      "5",
      "6",
      "7",
      "8"
    ],
    correct: 3,
    explain: "En dış enerji düzeyinde 3s² + 3p⁵ = 7 elektron vardır."
  },

  {
    id: "orbital-060",
    kazanim: "KİM.9.1.6 — Atomların değerlik elektron sayılarını elektron dizilimlerinden belirler.",
    konu: "Değerlik elektronları",
    difficulty: "zor",
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
    explain: "En dış enerji düzeyinde 3s² + 3p³ = 5 elektron bulunur."
  }

],
 yerbulma: [

  /* =====================================================
     1 — ATOMDA ELEKTRONUN BULUNMA OLASILIĞI
     Kazanım: Elektronun atomdaki konumunun kesin olarak
     belirlenemeyeceğini ve bulunma olasılığını açıklar.
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Elektronun atomdaki konumunu olasılık üzerinden açıklar.",
    context: "Bir öğrenci elektronun atom içerisindeki konumunu incelemektedir.",
    text: "Elektronun atomdaki yerini belirlemek için aşağıdakilerden hangisi daha uygundur?",
    options: [
      "Elektronun kesin yörüngesini çizmek",
      "Elektronun bulunma olasılığının yüksek olduğu bölgeyi belirlemek",
      "Elektronu çekirdeğin içine yerleştirmek",
      "Elektronun sabit bir noktada bulunduğunu kabul etmek",
      "Elektronun hareket etmediğini düşünmek"
    ],
    correct: 1,
    explain: "Elektronun kesin konumu yerine bulunma olasılığının yüksek olduğu bölgelerden söz edilir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun atomdaki konumunu olasılık üzerinden açıklar.",
    context: "Bir öğretmen elektronun atomdaki konumunu anlatıyor.",
    text: "Elektronun belirli bir anda kesin olarak nerede bulunduğunu söylemek neden mümkün değildir?",
    options: [
      "Elektronun kütlesi olmadığı için",
      "Elektron yalnızca çekirdekte bulunduğu için",
      "Elektronun konumu olasılık dağılımıyla ifade edildiği için",
      "Elektron protondan daha büyük olduğu için",
      "Elektron hareketsiz olduğu için"
    ],
    correct: 2,
    explain: "Modern atom modelinde elektronun konumu kesin bir nokta yerine bulunma olasılığı ile ifade edilir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun bulunma olasılığının yüksek olduğu bölgeleri yorumlar.",
    context: "Bir atom modeli üzerinde bazı bölgeler farklı yoğunluklarda gösterilmiştir.",
    text: "Elektron bulutu üzerindeki daha yoğun bölgeler neyi gösterir?",
    options: [
      "Elektronun kütlesinin arttığını",
      "Elektronun bulunma olasılığının daha yüksek olduğunu",
      "Proton sayısının arttığını",
      "Çekirdeğin büyüdüğünü",
      "Elektronun daha hızlı hareket ettiğini"
    ],
    correct: 1,
    explain: "Elektron bulutundaki yoğun bölgeler elektronun bulunma olasılığının daha yüksek olduğu bölgeleri gösterir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun bulunma olasılığının yüksek olduğu bölgeleri yorumlar.",
    context: "Bir öğrenci elektron bulutu modelini inceliyor.",
    text: "Elektron bulutu modeli aşağıdakilerden hangisini ifade eder?",
    options: [
      "Elektronun kesin yörüngesini",
      "Protonların hareket yolunu",
      "Elektronun bulunma olasılığının dağılımını",
      "Nötronların enerji düzeylerini",
      "Çekirdeğin geometrik şeklini"
    ],
    correct: 2,
    explain: "Elektron bulutu, elektronun atom çevresindeki bulunma olasılığının dağılımını temsil eder."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun bulunma olasılığını yorumlar.",
    context: "Bir bölgede elektron bulunma olasılığı %80, başka bir bölgede %20 olarak hesaplanmıştır.",
    text: "Elektron hangi bölgede bulunmaya daha yatkındır?",
    options: [
      "%20'lik bölgede",
      "%50'lik bölgede",
      "%80'lik bölgede",
      "Her iki bölgede kesinlikle eşit",
      "Hiçbir bölgede"
    ],
    correct: 2,
    explain: "Elektronun %80 bulunma olasılığı olan bölgede bulunma ihtimali daha yüksektir."
  },

  /* =====================================================
     2 — YÖRÜNGE VE ORBİTAL AYRIMI
     Kazanım: Yörünge ve orbital kavramlarını ayırt eder.
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Yörünge ve orbital kavramlarını ayırt eder.",
    context: "Bir öğrenci Bohr atom modeli ile modern atom modelini karşılaştırıyor.",
    text: "Bohr atom modelindeki yörünge kavramı ile modern atom modelindeki orbital arasındaki temel fark nedir?",
    options: [
      "İkisi tamamen aynı kavramdır.",
      "Yörünge kesin bir yol, orbital ise bulunma olasılığının yüksek olduğu bölgedir.",
      "Orbital yalnızca çekirdekte bulunur.",
      "Yörünge elektron içermez.",
      "Orbital protonların hareket yoludur."
    ],
    correct: 1,
    explain: "Yörünge elektronun izlediği kesin yol fikrini, orbital ise elektronun bulunma olasılığının yüksek olduğu bölgeyi ifade eder."
  },

  {
    kazanim: "KİM.9.1.7 — Yörünge ve orbital kavramlarını ayırt eder.",
    context: "Bir öğretmen öğrencilerine iki farklı atom modelini gösteriyor.",
    text: "Aşağıdakilerden hangisi orbital kavramının doğru tanımıdır?",
    options: [
      "Elektronun kesin olarak izlediği dairesel yol",
      "Elektronun bulunma olasılığının yüksek olduğu bölge",
      "Çekirdeğin çevresindeki proton yolu",
      "Nötronların hareket ettiği yörünge",
      "Elektronun sabit durduğu nokta"
    ],
    correct: 1,
    explain: "Orbital, elektronun bulunma olasılığının yüksek olduğu üç boyutlu bölgedir."
  },

  {
    kazanim: "KİM.9.1.7 — Yörünge ve orbital kavramlarını ayırt eder.",
    context: "Bir öğrenci 'elektron çekirdeğin etrafında belirli bir çizgide döner' ifadesini kullanıyor.",
    text: "Bu ifade hangi atom modeliyle daha çok ilişkilidir?",
    options: [
      "Modern atom modeli",
      "Kuantum mekaniksel model",
      "Bohr atom modeli",
      "Dalton atom modeli",
      "Thomson atom modeli"
    ],
    correct: 2,
    explain: "Elektronların belirli yörüngelerde bulunduğu düşüncesi Bohr atom modeliyle ilişkilidir."
  },

  {
    kazanim: "KİM.9.1.7 — Yörünge ve orbital kavramlarını ayırt eder.",
    context: "Bir öğrenci orbital ile yörüngeyi aynı anlamda kullanıyor.",
    text: "Aşağıdakilerden hangisi bu iki kavramın aynı olmadığını gösterir?",
    options: [
      "Orbital bir elektron yolu değildir.",
      "Yörünge yalnızca protonlar içindir.",
      "Orbital çekirdeğin kendisidir.",
      "Yörünge elektron içermez.",
      "İki kavram da aynı şeyi ifade eder."
    ],
    correct: 0,
    explain: "Orbital elektronun kesin hareket yolu değil, bulunma olasılığının yüksek olduğu bölgedir."
  },

  {
    kazanim: "KİM.9.1.7 — Yörünge ve orbital kavramlarını ayırt eder.",
    context: "Bir atom modeli hazırlanırken elektron için çizgi yerine elektron bulutu kullanılmıştır.",
    text: "Elektronun çizgi şeklinde kesin bir yol yerine elektron bulutuyla gösterilmesinin nedeni nedir?",
    options: [
      "Elektronun kütlesinin değişmesi",
      "Elektronun kesin konumunun ve yolunun belirlenememesi",
      "Protonların hareket etmesi",
      "Çekirdeğin yok olması",
      "Nötronların elektronlara dönüşmesi"
    ],
    correct: 1,
    explain: "Modern atom modelinde elektronun kesin bir yörüngesi yerine olasılık dağılımı kullanılır."
  },

  /* =====================================================
     3 — BELİRSİZLİK İLKESİ
     Kazanım: Heisenberg belirsizlik ilkesini temel düzeyde
     açıklar.
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Heisenberg belirsizlik ilkesini açıklar.",
    context: "Bir öğrenci elektronun konumunu ve momentumunu aynı anda kesin olarak belirlemek istiyor.",
    text: "Heisenberg belirsizlik ilkesine göre aşağıdakilerden hangisi doğrudur?",
    options: [
      "Elektronun konumu ve momentumu aynı anda kesin olarak belirlenebilir.",
      "Elektronun konumu ve momentumu aynı anda sınırsız kesinlikle belirlenemez.",
      "Elektron hareketsizdir.",
      "Elektron yalnızca çekirdekte bulunur.",
      "Elektronun enerjisi sıfırdır."
    ],
    correct: 1,
    explain: "Heisenberg belirsizlik ilkesine göre elektronun konumu ve momentumu aynı anda kesin olarak belirlenemez."
  },

  {
    kazanim: "KİM.9.1.7 — Heisenberg belirsizlik ilkesini açıklar.",
    context: "Bir deneyde elektronun konumu çok hassas biçimde belirlenmeye çalışılıyor.",
    text: "Elektronun konumu daha hassas belirlendiğinde hangi büyüklüğün belirsizliği artar?",
    options: [
      "Atom numarası",
      "Proton sayısı",
      "Momentum",
      "Kütle numarası",
      "Nötron sayısı"
    ],
    correct: 2,
    explain: "Konum belirsizliği azaltıldığında momentum belirsizliği artar."
  },

  {
    kazanim: "KİM.9.1.7 — Heisenberg belirsizlik ilkesini açıklar.",
    context: "Bir öğrenci elektronun hareketini inceliyor.",
    text: "Elektron için 'hem kesin konumunu hem de kesin momentumunu aynı anda biliyorum' diyen bir öğrencinin ifadesi neden yanlıştır?",
    options: [
      "Elektronun yükü olmadığı için",
      "Heisenberg belirsizlik ilkesi nedeniyle",
      "Elektronun kütlesi olmadığı için",
      "Atomların çekirdeği olmadığı için",
      "Protonların hareket etmesi nedeniyle"
    ],
    correct: 1,
    explain: "Belirsizlik ilkesi konum ve momentumun aynı anda kesin olarak bilinmesini sınırlar."
  },

  {
    kazanim: "KİM.9.1.7 — Heisenberg belirsizlik ilkesini açıklar.",
    context: "Bir elektronun konumu hakkında çok hassas ölçüm yapılmaktadır.",
    text: "Konum belirsizliğinin azaltılması aşağıdakilerden hangisine yol açar?",
    options: [
      "Momentum belirsizliğinin artmasına",
      "Proton sayısının azalmasına",
      "Atom numarasının değişmesine",
      "Elektron sayısının artmasına",
      "Çekirdeğin yok olmasına"
    ],
    correct: 0,
    explain: "Belirsizlik ilkesi gereği konum ve momentum belirsizlikleri birbirleriyle ters ilişkilidir."
  },

  {
    kazanim: "KİM.9.1.7 — Heisenberg belirsizlik ilkesini yorumlar.",
    context: "Bir öğrenci elektron için 'çekirdeğin çevresinde şu çizgiyi takip eder' şeklinde bir model çizmiştir.",
    text: "Modern atom modeline göre bu çizimin temel sorunu nedir?",
    options: [
      "Elektronun kesin bir yörüngesinin kabul edilmesi",
      "Elektronun negatif olması",
      "Çekirdeğin pozitif olması",
      "Atomun nötr olması",
      "Elektronun kütlesinin bulunması"
    ],
    correct: 0,
    explain: "Modern atom modelinde elektron için kesin bir yörüngeden söz edilmez."
  },

  /* =====================================================
     4 — ELEKTRON BULUTU
     Kazanım: Elektron bulutu modelini yorumlar.
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Elektron bulutu modelini yorumlar.",
    context: "Bir atom modeli üç boyutlu elektron yoğunluğu şeklinde gösteriliyor.",
    text: "Elektron bulutu üzerindeki yoğunluk neyi temsil eder?",
    options: [
      "Elektronun kütlesini",
      "Elektronun bulunma olasılığını",
      "Protonların sayısını",
      "Nötronların hızını",
      "Çekirdeğin sıcaklığını"
    ],
    correct: 1,
    explain: "Elektron bulutunun yoğunluğu, elektronun ilgili bölgede bulunma olasılığı hakkında bilgi verir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektron bulutu modelini yorumlar.",
    context: "Bir elektron bulutu modelinde çekirdeğe yakın bölgelerin daha yoğun olduğu görülüyor.",
    text: "Bu durum nasıl yorumlanmalıdır?",
    options: [
      "Elektronun bu bölgelerde bulunma olasılığı daha yüksektir.",
      "Elektron kesinlikle bu bölgede bulunur.",
      "Protonlar bu bölgelere taşınmıştır.",
      "Elektronun yükü artmıştır.",
      "Çekirdek büyümüştür."
    ],
    correct: 0,
    explain: "Yoğunluğun fazla olduğu bölgeler elektronun bulunma olasılığının daha yüksek olduğunu gösterir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektron bulutu modelini yorumlar.",
    context: "İki farklı atom modeli karşılaştırılıyor. Birinde elektron çizgi üzerinde, diğerinde bulut şeklinde gösterilmiş.",
    text: "Modern atom modelini temsil eden hangisidir?",
    options: [
      "Kesin dairesel yörünge",
      "Elektron bulutu",
      "Proton yörüngesi",
      "Nötron yolu",
      "Çekirdek çizgisi"
    ],
    correct: 1,
    explain: "Modern atom modelinde elektronlar elektron bulutu veya olasılık dağılımı ile gösterilir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektron bulutu modelini yorumlar.",
    context: "Bir bölgede elektron yoğunluğu çok azdır.",
    text: "Bu bölge için aşağıdakilerden hangisi söylenebilir?",
    options: [
      "Elektronun bulunma olasılığı düşüktür.",
      "Elektron kesinlikle burada bulunur.",
      "Elektronun enerjisi sıfırdır.",
      "Proton sayısı fazladır.",
      "Bölge kesinlikle çekirdektir."
    ],
    correct: 0,
    explain: "Elektron yoğunluğunun düşük olması elektronun o bölgede bulunma olasılığının düşük olduğunu gösterir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektron bulutu modelini yorumlar.",
    context: "Bir elektron bulutu görselinde farklı renk yoğunlukları kullanılmıştır.",
    text: "Bu renk yoğunlukları genellikle neyi göstermektedir?",
    options: [
      "Elektronun bulunma olasılığındaki değişimi",
      "Protonların farklı kütlelerini",
      "Nötronların sayısını",
      "Atomun sıcaklığını",
      "Elektronun kesin hareket yolunu"
    ],
    correct: 0,
    explain: "Elektron bulutu görsellerinde yoğunluk değişimleri bulunma olasılığını temsil eder."
  },

  /* =====================================================
     5 — ORBİTALİN UZAYSAL BÖLGE OLARAK ANLAMI
     Kazanım: Orbitalin elektronun bulunma olasılığının
     yüksek olduğu uzaysal bölge olduğunu açıklar.
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Orbitalin uzaysal bölge anlamını açıklar.",
    context: "Bir atomun elektronlarının uzaydaki dağılımı inceleniyor.",
    text: "Orbital kavramı aşağıdakilerden hangisini ifade eder?",
    options: [
      "Elektronun kesin hareket yolu",
      "Elektronun bulunma olasılığının yüksek olduğu uzaysal bölge",
      "Çekirdeğin yüzeyi",
      "Protonların hareket ettiği yol",
      "Nötronların bulunduğu katman"
    ],
    correct: 1,
    explain: "Orbital, elektronun bulunma olasılığının yüksek olduğu üç boyutlu uzaysal bölgedir."
  },

  {
    kazanim: "KİM.9.1.7 — Orbitalin uzaysal bölge anlamını açıklar.",
    context: "Bir öğrenci orbitalin bir 'yol' olduğunu düşünüyor.",
    text: "Orbitalin yol olarak tanımlanmamasının temel nedeni nedir?",
    options: [
      "Orbital yalnızca çekirdekte bulunduğu için",
      "Orbital elektronun kesin hareket yolunu göstermediği için",
      "Elektronların hareket etmediği için",
      "Orbitalde protonlar bulunduğu için",
      "Atomların hareket etmediği için"
    ],
    correct: 1,
    explain: "Orbital kesin bir elektron yolu değil, elektronun bulunma olasılığının yüksek olduğu bölgedir."
  },

  {
    kazanim: "KİM.9.1.7 — Orbitalin uzaysal bölge anlamını açıklar.",
    context: "Bir orbital modeli üç boyutlu olarak çizilmiştir.",
    text: "Orbitalin üç boyutlu olarak gösterilmesinin nedeni nedir?",
    options: [
      "Elektronun yalnızca düzlemde hareket etmesi",
      "Elektronun bulunma olasılığının uzayın farklı bölgelerinde dağılım göstermesi",
      "Protonların üç boyutlu olması",
      "Nötronların yörünge çizmesi",
      "Çekirdeğin küresel olması"
    ],
    correct: 1,
    explain: "Elektronun bulunma olasılığı uzayda üç boyutlu bir dağılım oluşturduğu için orbitaller üç boyutlu bölgeler olarak düşünülür."
  },

  {
    kazanim: "KİM.9.1.7 — Orbitalin uzaysal bölge anlamını açıklar.",
    context: "Bir öğrenci 'elektron kesinlikle orbitalin merkezindedir' diyor.",
    text: "Bu ifade neden doğru değildir?",
    options: [
      "Elektron yalnızca çekirdekte bulunur.",
      "Orbital kesin konum değil, bulunma olasılığının yüksek olduğu bölgedir.",
      "Elektronun yükü yoktur.",
      "Orbital protonlardan oluşur.",
      "Atomun çekirdeği yoktur."
    ],
    correct: 1,
    explain: "Orbital elektronun kesin konumunu değil, bulunma olasılığının yüksek olduğu bölgeyi ifade eder."
  },

  {
    kazanim: "KİM.9.1.7 — Orbitalin uzaysal bölge anlamını açıklar.",
    context: "Bir orbitalin sınırları bilgisayar modeliyle çiziliyor.",
    text: "Orbitalin çizilen sınırı için en doğru yorum hangisidir?",
    options: [
      "Elektron kesinlikle sınırın içinde hareket eder.",
      "Elektronun bulunma olasılığının yüksek olduğu bölgeyi temsil eder.",
      "Elektron sınırın dışına çıkamaz.",
      "Bu sınır atomun gerçek yüzeyidir.",
      "Bu sınır çekirdeği gösterir."
    ],
    correct: 1,
    explain: "Orbital modellerinde çizilen sınır, elektronun yüksek bulunma olasılığını temsil eden bölgeyi göstermek için kullanılır."
  },

  /* =====================================================
     6 — ORBİTAL VE ELEKTRON SAYISI İLİŞKİSİ
     Kazanım: Bir orbitalde bulunabilecek maksimum elektron
     sayısını ve elektronların konumlanmasını ilişkilendirir.
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Orbital ve elektron sayısı ilişkisini kurar.",
    context: "Bir orbitalin elektron kapasitesi inceleniyor.",
    text: "Bir orbitalde en fazla kaç elektron bulunabilir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    correct: 1,
    explain: "Bir orbitalde en fazla iki elektron bulunabilir."
  },

  {
    kazanim: "KİM.9.1.7 — Orbital ve elektron sayısı ilişkisini kurar.",
    context: "Bir orbital kutusunda iki elektron bulunmaktadır.",
    text: "Bu orbitalin tamamen dolu olduğu söylenebilir mi?",
    options: [
      "Evet",
      "Hayır, en fazla dört elektron alır.",
      "Hayır, en fazla altı elektron alır.",
      "Hayır, elektron sayısı önemli değildir.",
      "Sadece d orbitalindeyse"
    ],
    correct: 0,
    explain: "Tek bir orbital maksimum iki elektron alabildiği için iki elektron bulunduğunda orbital doludur."
  },

  {
    kazanim: "KİM.9.1.7 — Orbital ve elektron sayısı ilişkisini kurar.",
    context: "Bir p alt kabuğu inceleniyor.",
    text: "p alt kabuğunda bulunan üç orbital toplam kaç elektron alabilir?",
    options: [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    correct: 2,
    explain: "Üç orbitalin her biri iki elektron alabilir. Toplam kapasite 3 × 2 = 6 elektrondur."
  },

  {
    kazanim: "KİM.9.1.7 — Orbital ve elektron sayısı ilişkisini kurar.",
    context: "Bir s alt kabuğunda tek orbital bulunuyor.",
    text: "Bu orbital tamamen dolduğunda kaç elektron içerir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    correct: 1,
    explain: "Bir orbital en fazla iki elektron içerir."
  },

  {
    kazanim: "KİM.9.1.7 — Orbital ve elektron sayısı ilişkisini kurar.",
    context: "Bir atomun bir alt kabuğunda beş orbital olduğu biliniyor.",
    text: "Bu alt kabuğunun maksimum elektron kapasitesi kaçtır?",
    options: [
      "5",
      "7",
      "8",
      "10",
      "14"
    ],
    correct: 3,
    explain: "Beş orbitalin her biri iki elektron alabileceğinden toplam kapasite 10 elektrondur."
  },

  /* =====================================================
     7 — ORBİTAL ŞEMALARINI YORUMLAMA
     Kazanım: Orbital şemalarını elektronların bulunma
     durumları açısından yorumlar.
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Orbital şemalarını yorumlar.",
    context: "Bir orbital kutusu ↑↓ şeklinde gösterilmiştir.",
    text: "Bu gösterim neyi ifade eder?",
    options: [
      "Orbitalde bir elektron bulunduğunu",
      "Orbitalde iki zıt spinli elektron bulunduğunu",
      "Orbitalde üç elektron bulunduğunu",
      "Orbitalin boş olduğunu",
      "Orbitalde proton bulunduğunu"
    ],
    correct: 1,
    explain: "↑↓ gösterimi aynı orbitalde bulunan iki zıt spinli elektronu ifade eder."
  },

  {
    kazanim: "KİM.9.1.7 — Orbital şemalarını yorumlar.",
    context: "Bir orbital kutusu yalnızca ↑ oku ile gösterilmiştir.",
    text: "Bu gösterim neyi ifade eder?",
    options: [
      "Orbital boştur.",
      "Orbitalde bir elektron vardır.",
      "Orbitalde iki elektron vardır.",
      "Orbitalde üç elektron vardır.",
      "Orbitalde proton vardır."
    ],
    correct: 1,
    explain: "Tek ok, orbitalde tek elektron bulunduğunu gösterir."
  },

  {
    kazanim: "KİM.9.1.7 — Orbital şemalarını yorumlar.",
    context: "Bir orbital kutusunda elektron bulunmadığı görülüyor.",
    text: "Boş bir orbital kutusu neyi gösterir?",
    options: [
      "Orbitalde elektron bulunmadığını",
      "Orbitalde iki elektron bulunduğunu",
      "Orbitalin çekirdek olduğunu",
      "Orbitalin proton içerdiğini",
      "Orbitalin atomdan bağımsız olduğunu"
    ],
    correct: 0,
    explain: "Boş kutu ilgili orbitalde elektron bulunmadığını gösterir."
  },

  {
    kazanim: "KİM.9.1.7 — Orbital şemalarını yorumlar.",
    context: "Bir p alt kabuğu ↑ ↑ ↑ şeklinde gösterilmiştir.",
    text: "Bu gösterimde kaç elektron vardır?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    correct: 2,
    explain: "Üç ayrı orbitalde birer elektron bulunduğu için toplam üç elektron vardır."
  },

  {
    kazanim: "KİM.9.1.7 — Orbital şemalarını yorumlar.",
    context: "Bir p alt kabuğu ↑↓ ↑ ↑ şeklinde gösterilmiştir.",
    text: "Bu gösterimde toplam kaç elektron bulunur?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    correct: 2,
    explain: "İlk orbitalde iki, diğer iki orbitalde birer elektron vardır. Toplam 4 elektron bulunur."
  },

  /* =====================================================
     8 — KAVRAMSAL YER BULMA
     Kazanım: Elektronun atom içerisindeki konumunun enerji
     düzeyi, alt kabuk ve orbital kavramlarıyla ifade
     edilebileceğini ilişkilendirir.
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir elektronun atom içerisindeki konumu ifade ediliyor.",
    text: "Elektronun atomdaki konumunu tanımlamada aşağıdakilerden hangisi kullanılabilir?",
    options: [
      "Enerji düzeyi, alt kabuk ve orbital",
      "Yalnızca atomun kütlesi",
      "Yalnızca proton sayısı",
      "Yalnızca nötron sayısı",
      "Yalnızca atomun çapı"
    ],
    correct: 0,
    explain: "Elektronların atomdaki durumları enerji düzeyi, alt kabuk ve orbital kavramlarıyla ifade edilir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir öğrenci elektronun '3p' olarak gösterildiğini görüyor.",
    text: "3p ifadesindeki '3' neyi belirtir?",
    options: [
      "Elektron sayısını",
      "Orbital sayısını",
      "Ana enerji düzeyini",
      "Proton sayısını",
      "Spin sayısını"
    ],
    correct: 2,
    explain: "3 sayısı elektronun bulunduğu üçüncü ana enerji düzeyini belirtir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir öğrenci 3p ifadesini inceliyor.",
    text: "3p ifadesindeki 'p' neyi belirtir?",
    options: [
      "Ana enerji düzeyini",
      "Alt kabuk türünü",
      "Elektron sayısını",
      "Atom numarasını",
      "Spin yönünü"
    ],
    correct: 1,
    explain: "p harfi alt kabuk türünü belirtir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir elektronun 2p alt kabuğunda bulunduğu belirtiliyor.",
    text: "Bu elektron hangi ana enerji düzeyindedir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correct: 1,
    explain: "2p ifadesindeki 2, ikinci ana enerji düzeyini gösterir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir elektronun 4s alt kabuğunda bulunduğu belirtiliyor.",
    text: "Bu elektron hangi ana enerji düzeyindedir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correct: 3,
    explain: "4s ifadesindeki 4, dördüncü ana enerji düzeyini belirtir."
  },

  /* =====================================================
     9 — KARMA YER BULMA SORULARI
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir atomun elektron dizilimi 1s² 2s² 2p⁶ şeklindedir.",
    text: "Bu atomdaki elektronların bulunduğu en yüksek ana enerji düzeyi hangisidir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    correct: 1,
    explain: "Dizilimdeki en büyük ana enerji düzeyi sayısı 2'dir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir atomun elektron dizilimi 1s² 2s² 2p⁶ 3s¹ şeklindedir.",
    text: "Son elektron hangi ana enerji düzeyindedir?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "11"
    ],
    correct: 2,
    explain: "Son elektron 3s alt kabuğunda olduğundan üçüncü ana enerji düzeyindedir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir atomun elektron dizilimi 1s² 2s² 2p⁶ 3s² 3p³ şeklindedir.",
    text: "Son elektron hangi alt kabuktadır?",
    options: [
      "2s",
      "2p",
      "3s",
      "3p",
      "4s"
    ],
    correct: 3,
    explain: "Dizilimin son terimi 3p³ olduğundan son elektron 3p alt kabuğundadır."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir elektronun 2p alt kabuğunda bulunduğu biliniyor.",
    text: "Bu elektronun bulunduğu alt kabukta kaç orbital vardır?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    correct: 2,
    explain: "p alt kabuğunda üç orbital bulunur."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir elektronun 3d alt kabuğunda bulunduğu biliniyor.",
    text: "3d alt kabuğunda kaç orbital bulunur?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    correct: 3,
    explain: "d alt kabuğunda beş orbital bulunur."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumunu enerji düzeyi, alt kabuk ve orbital ile ilişkilendirir.",
    context: "Bir elektronun 4f alt kabuğunda bulunduğu belirtiliyor.",
    text: "4f alt kabuğunun maksimum elektron kapasitesi kaçtır?",
    options: [
      "2",
      "6",
      "10",
      "14",
      "18"
    ],
    correct: 3,
    explain: "f alt kabuğunda 7 orbital vardır ve her orbital 2 elektron alabildiği için kapasite 14 elektrondur."
  },

  /* =====================================================
     10 — DEĞERLENDİRME / ÜST DÜZEY
     ===================================================== */

  {
    kazanim: "KİM.9.1.7 — Elektronun konumuna ilişkin modelleri karşılaştırır.",
    context: "Bir öğrenci 'Elektron çekirdeğin etrafında sabit bir daire üzerinde hareket eder.' diyor.",
    text: "Bu öğrencinin görüşü modern atom modeline göre nasıl değerlendirilmelidir?",
    options: [
      "Tamamen doğrudur.",
      "Orbital kavramıyla çelişir.",
      "Elektronun yükünü açıklar.",
      "Proton sayısını belirler.",
      "Atom numarasını gösterir."
    ],
    correct: 1,
    explain: "Modern atom modelinde elektronun kesin bir dairesel yörüngede hareket ettiği kabul edilmez."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumuna ilişkin modelleri karşılaştırır.",
    context: "Bir öğrenci elektronun yerini belirlemek için atom çevresinde bir çizgi çizmiştir.",
    text: "Bu çizim hangi kavramın yanlış anlaşılmasına örnektir?",
    options: [
      "Orbitalin kesin yörünge sanılması",
      "Protonun nötr sanılması",
      "Nötronun negatif sanılması",
      "Çekirdeğin elektronlardan oluşması",
      "Atom numarasının enerji olması"
    ],
    correct: 0,
    explain: "Orbital kesin bir elektron yörüngesi değildir; bulunma olasılığının yüksek olduğu bölgedir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumuna ilişkin modelleri karşılaştırır.",
    context: "İki öğrenci elektronun atomdaki konumunu tartışıyor. Birinci öğrenci 'Kesin olarak burada' derken ikinci öğrenci 'Burada bulunma olasılığı daha yüksek' diyor.",
    text: "Modern atom modeline uygun ifade hangisidir?",
    options: [
      "Birinci öğrencinin ifadesi",
      "İkinci öğrencinin ifadesi",
      "Her ikisi de",
      "Hiçbiri",
      "Yalnızca elektronun çekirdekte bulunduğu ifadesi"
    ],
    correct: 1,
    explain: "Modern atom modelinde elektronun konumu kesin bir nokta olarak değil, bulunma olasılığı ile ifade edilir."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumuna ilişkin modelleri karşılaştırır.",
    context: "Bir atom modelinde elektronun bulunabileceği bölgeler yoğunlukla gösteriliyor.",
    text: "Bu modelin temel amacı nedir?",
    options: [
      "Elektronun kesin yolunu göstermek",
      "Elektronun bulunma olasılığını göstermek",
      "Protonların hareketini göstermek",
      "Nötronların konumunu göstermek",
      "Atomun kütlesini ölçmek"
    ],
    correct: 1,
    explain: "Elektron bulutu modeli elektronun bulunma olasılığının dağılımını göstermeyi amaçlar."
  },

  {
    kazanim: "KİM.9.1.7 — Elektronun konumuna ilişkin modelleri karşılaştırır.",
    context: "Bir öğrenci orbitalin içinde elektronun herhangi bir noktada bulunabileceğini söylüyor.",
    text: "Bu ifade aşağıdakilerden hangisiyle en iyi tamamlanır?",
    options: [
      "Ancak bazı bölgelerde bulunma olasılığı daha yüksektir.",
      "Elektron yalnızca merkezde bulunur.",
      "Elektron kesinlikle yörünge üzerinde hareket eder.",
      "Elektron yalnızca çekirdekte bulunur.",
      "Elektronun konumu tamamen rastlantısaldır ve hiçbir şekilde açıklanamaz."
    ],
    correct: 0,
    explain: "Orbital, elektronun bulunma olasılığının yüksek olduğu bölgedir; olasılık dağılımı ile elektronun konumu hakkında bilgi edinilebilir."
  }

],
 ozellikler: [

  /* =====================================================
     1 — ATOM YARIÇAPI
     ===================================================== */

  {
    kazanim: "KİM.9.1.8 — Atom yarıçapının gruptaki değişimini açıklar",
    konu: "Grupta atom yarıçapı",
    context: "Aynı Grupta Büyüyen Atomlar",
    text: "Lityum (Li), sodyum (Na) ve potasyum (K) aynı grupta yer alır. Grupta aşağı doğru inildikçe atom yarıçapının artmasının temel nedeni nedir?",
    options: [
      "Proton sayısının azalması",
      "Ametalliğin artması",
      "Elektronegatifliğin artması",
      "Enerji seviyesi (katman) sayısının artması",
      "Nötron sayısının azalması"
    ],
    correct: 3,
    explain: "Grupta aşağı doğru inildikçe yeni enerji seviyeleri eklenir. En dış elektron çekirdekten uzaklaştığı için atom yarıçapı artar."
  },

  {
    kazanim: "KİM.9.1.8 — Atom yarıçapının periyottaki değişimini açıklar",
    konu: "Periyotta atom yarıçapı",
    context: "Aynı Periyotta Küçülen Atomlar",
    text: "Üçüncü periyotta Na'dan Cl'ye doğru gidildikçe atom yarıçapının küçülmesinin temel nedeni nedir?",
    options: [
      "Elektron sayısının azalması",
      "Nötron sayısının azalması",
      "Proton sayısının artmasıyla etkin çekirdek çekiminin artması",
      "Katman sayısının artması",
      "Elektronların çekirdekten uzaklaşması"
    ],
    correct: 2,
    explain: "Aynı periyotta elektronlar aynı ana enerji seviyesine eklenirken proton sayısı artar. Etkin çekirdek çekimi arttığı için yarıçap küçülür."
  },

  {
    kazanim: "KİM.9.1.8 — Atom yarıçaplarını karşılaştırır",
    konu: "Aynı periyotta yarıçap karşılaştırması",
    context: "Sodyum ve Magnezyum",
    text: "Na ve Mg aynı periyotta bulunmaktadır. Buna göre hangisinin atom yarıçapı daha büyüktür?",
    options: [
      "Na",
      "Mg",
      "İkisinin yarıçapı eşittir",
      "Karşılaştırılamaz",
      "Mg'nin iyonlaşma enerjisi büyük olduğu için Mg"
    ],
    correct: 0,
    explain: "Aynı periyotta soldan sağa gidildikçe atom yarıçapı küçülür. Na, Mg'nin solunda olduğu için daha büyüktür."
  },

  {
    kazanim: "KİM.9.1.8 — Atom yarıçaplarını karşılaştırır",
    konu: "Aynı grupta yarıçap karşılaştırması",
    context: "Li, Na ve K Atomları",
    text: "Li, Na ve K'nin atom yarıçaplarının doğru sıralaması hangisidir?",
    options: [
      "Li > Na > K",
      "K > Na > Li",
      "Na > K > Li",
      "K > Li > Na",
      "Li = Na = K"
    ],
    correct: 1,
    explain: "Grupta aşağı doğru inildikçe katman sayısı arttığından atom yarıçapı artar."
  },

  {
    kazanim: "KİM.9.1.8 — Atom yarıçapını etkin çekirdek yükü ile ilişkilendirir",
    konu: "Etkin çekirdek çekimi",
    context: "Çekirdeğin Elektronları Çekmesi",
    text: "Aynı periyotta soldan sağa gidildikçe atom yarıçapının küçülmesini açıklayan temel etken hangisidir?",
    options: [
      "Katman sayısının azalması",
      "Proton sayısının azalması",
      "Etkin çekirdek çekiminin artması",
      "Elektron sayısının azalması",
      "Nötron sayısının yok olması"
    ],
    correct: 2,
    explain: "Proton sayısı arttıkça çekirdeğin elektronlar üzerindeki çekim etkisi artar ve atom küçülür."
  },

  {
    kazanim: "KİM.9.1.8 — Atom yarıçaplarını periyodik konuma göre sıralar",
    konu: "Periyodik yarıçap sıralaması",
    context: "Periyodik Tabloda Karşılaştırma",
    text: "Aşağıdaki elementlerden hangisinin atom yarıçapı en büyüktür?",
    options: [
      "Li",
      "Na",
      "K",
      "F",
      "Cl"
    ],
    correct: 2,
    explain: "K, verilen elementler arasında daha alt periyotta ve solda bulunduğundan atom yarıçapı en büyüktür."
  },

  {
    kazanim: "KİM.9.1.8 — Atom yarıçapının periyodik değişimini yorumlar",
    konu: "Periyodik eğilim",
    context: "Periyodik Tabloda Hareket",
    text: "Atom yarıçapı genel olarak hangi yönde artar?",
    options: [
      "Sağ ve yukarı",
      "Sol ve aşağı",
      "Sağ ve aşağı",
      "Yalnızca sağa",
      "Yalnızca yukarı"
    ],
    correct: 1,
    explain: "Atom yarıçapı genel olarak periyodik tabloda sola ve aşağı doğru gidildikçe artar."
  },

  /* =====================================================
     2 — İYON YARIÇAPI
     ===================================================== */

  {
    kazanim: "KİM.9.1.8 — İyon yarıçapının oluşum nedenini açıklar",
    konu: "Anyon oluşumu",
    context: "Bir İyonun Boyutu Neden Değişir?",
    text: "Nötr Cl atomu elektron alarak Cl⁻ iyonuna dönüştüğünde yarıçapının artmasının temel nedeni nedir?",
    options: [
      "Proton sayısının artması",
      "Elektron sayısının azalması",
      "Elektron sayısının artmasına rağmen proton sayısının sabit kalması",
      "Çekirdeğin büyümesi",
      "Katman sayısının kesinlikle azalması"
    ],
    correct: 2,
    explain: "Elektron sayısı artarken proton sayısı sabit kalır. Elektron-elektron itmesi arttığından iyon yarıçapı büyür."
  },

  {
    kazanim: "KİM.9.1.8 — Katyon ve anyon yarıçaplarını karşılaştırır",
    konu: "Katyon yarıçapı",
    context: "Sodyum İyonu",
    text: "Na atomu bir elektron vererek Na⁺ iyonuna dönüştüğünde yarıçapı neden küçülür?",
    options: [
      "Elektron sayısı azalır ve dış katman kaybolabilir",
      "Proton sayısı azalır",
      "Yeni bir katman oluşur",
      "Nötron sayısı artar",
      "Elektron-elektron itmesi sonsuz olur"
    ],
    correct: 0,
    explain: "Na elektron verdiğinde dış katmandaki elektronunu kaybeder ve yarıçapı önemli ölçüde küçülür."
  },

  {
    kazanim: "KİM.9.1.8 — Katyon ve anyonları atom yarıçapıyla karşılaştırır",
    konu: "İyon yarıçapı",
    context: "Atom ve İyon",
    text: "Aşağıdaki karşılaştırmalardan hangisi doğrudur?",
    options: [
      "Na⁺ > Na",
      "Na⁺ = Na",
      "Na⁺ < Na",
      "Na⁺ her zaman Cl⁻'den büyüktür",
      "İyonların yarıçapı olmaz"
    ],
    correct: 2,
    explain: "Katyon oluşurken elektron kaybedildiği için iyon yarıçapı nötr atomunkinden küçüktür."
  },

  {
    kazanim: "KİM.9.1.8 — İyon yarıçaplarını karşılaştırır",
    konu: "Anyon yarıçapı",
    context: "Flor Atomunun İyonlaşması",
    text: "F atomu F⁻ iyonuna dönüştüğünde yarıçapı nasıl değişir?",
    options: [
      "Azalır",
      "Artar",
      "Değişmez",
      "Sıfır olur",
      "Önce kesinlikle sıfırlanır"
    ],
    correct: 1,
    explain: "Elektron alan atomda elektron-elektron itmesi artar ve elektron başına düşen çekim azalır. Bu nedenle yarıçap artar."
  },

  {
    kazanim: "KİM.9.1.8 — İzoelektronik taneciklerin yarıçaplarını karşılaştırır",
    konu: "İzoelektronik türler",
    context: "Aynı Elektron Sayısına Sahip İyonlar",
    text: "Na⁺, Mg²⁺ ve F⁻ iyonlarının elektron sayıları aynıdır. Bunlar arasında yarıçapı en küçük olan hangisidir?",
    options: [
      "F⁻",
      "Na⁺",
      "Mg²⁺",
      "Üçünün yarıçapı eşittir",
      "Belirlenemez"
    ],
    correct: 2,
    explain: "Elektron sayıları eşit olan türlerde proton sayısı arttıkça çekim artar ve yarıçap küçülür. Mg²⁺ en fazla protona sahip olduğundan en küçüktür."
  },

  {
    kazanim: "KİM.9.1.8 — İzoelektronik türlerin yarıçaplarını sıralar",
    konu: "İzoelektronik yarıçap sıralaması",
    context: "Elektron Sayıları Aynı",
    text: "O²⁻, F⁻, Na⁺ ve Mg²⁺ iyonlarının elektron sayıları eşittir. Büyükten küçüğe doğru sıralama hangisidir?",
    options: [
      "Mg²⁺ > Na⁺ > F⁻ > O²⁻",
      "O²⁻ > F⁻ > Na⁺ > Mg²⁺",
      "F⁻ > O²⁻ > Mg²⁺ > Na⁺",
      "Na⁺ > Mg²⁺ > O²⁻ > F⁻",
      "O²⁻ > Mg²⁺ > F⁻ > Na⁺"
    ],
    correct: 1,
    explain: "Elektron sayıları eşit olduğunda proton sayısı az olanın yarıçapı daha büyüktür."
  },

  /* =====================================================
     3 — İYONLAŞMA ENERJİSİ
     ===================================================== */

  {
    kazanim: "KİM.9.1.8 — İyonlaşma enerjisini tanımlar",
    konu: "İyonlaşma enerjisi",
    context: "Elektron Koparmak",
    text: "İyonlaşma enerjisi genel olarak neyi ifade eder?",
    options: [
      "Atomun elektron alma enerjisini",
      "Gaz hâlindeki nötr atomdan elektron koparmak için gereken enerjiyi",
      "Proton koparmak için gereken enerjiyi",
      "Nötron oluşturmak için gereken enerjiyi",
      "Atomun erime enerjisini"
    ],
    correct: 1,
    explain: "İyonlaşma enerjisi, gaz hâlindeki nötr bir atomdan elektron koparmak için gereken enerjidir."
  },

  {
    kazanim: "KİM.9.1.8 — İyonlaşma enerjisinin periyottaki değişimini açıklar",
    konu: "Periyotta iyonlaşma enerjisi",
    context: "Periyotta Elektron Koparmak",
    text: "Genel olarak bir periyotta soldan sağa gidildikçe iyonlaşma enerjisi neden artar?",
    options: [
      "Atom yarıçapı artar",
      "Katman sayısı artar",
      "Etkin çekirdek çekimi artar",
      "Proton sayısı azalır",
      "Elektron sayısı azalır"
    ],
    correct: 2,
    explain: "Soldan sağa proton sayısı artar ve elektronlar aynı enerji seviyesine eklenir. Elektronlar daha güçlü tutulur."
  },

  {
    kazanim: "KİM.9.1.8 — İyonlaşma enerjisinin gruptaki değişimini açıklar",
    konu: "Grupta iyonlaşma enerjisi",
    context: "Grupta Elektron Koparmak",
    text: "Bir grupta aşağı doğru gidildikçe iyonlaşma enerjisinin genel olarak azalmasının nedeni nedir?",
    options: [
      "Elektronların çekirdekten uzaklaşması",
      "Proton sayısının sıfırlanması",
      "Katman sayısının azalması",
      "Elektronların yok olması",
      "Çekirdeğin parçalanması"
    ],
    correct: 0,
    explain: "Aşağı doğru katman sayısı arttığı için değerlik elektronu çekirdekten uzaklaşır ve daha kolay koparılır."
  },

  {
    kazanim: "KİM.9.1.8 — İyonlaşma enerjilerini karşılaştırır",
    konu: "İyonlaşma enerjisi karşılaştırması",
    context: "Na ve Cl",
    text: "Na ve Cl aynı periyotta olduğuna göre genel olarak hangisinin birinci iyonlaşma enerjisi daha büyüktür?",
    options: [
      "Na",
      "Cl",
      "İkisi eşittir",
      "Her zaman Na",
      "Karşılaştırılamaz"
    ],
    correct: 1,
    explain: "Aynı periyotta genel olarak soldan sağa gidildikçe iyonlaşma enerjisi artar."
  },

  {
    kazanim: "KİM.9.1.8 — Ardışık iyonlaşma enerjilerini yorumlar",
    konu: "İyonlaşma enerjisi sıçraması",
    context: "İkinci Elektronu Koparmak Neden Zor?",
    text: "Bir elementte ikinci iyonlaşma enerjisinden üçüncü iyonlaşma enerjisine geçerken çok büyük bir sıçrama görülüyor. Bu durum en çok neyi gösterir?",
    options: [
      "Elementin iki değerlik elektronuna sahip olabileceğini",
      "Elementin bir elektronunun olduğunu",
      "Elementin soy gaz olduğunu",
      "Elementin radyoaktif olduğunu",
      "Elementin nötr olmadığını"
    ],
    correct: 0,
    explain: "İlk iki elektronun değerlik elektronları olması durumunda üçüncü elektron daha içteki kararlı katmandan koparılır ve büyük enerji gerekir."
  },

  {
    kazanim: "KİM.9.1.8 — Ardışık iyonlaşma enerjilerinden değerlik elektron sayısını belirler",
    konu: "İyonlaşma enerjisi sıçraması",
    context: "Bir Elementin İyonlaşma Enerjileri",
    text: "Bir elementin birinci ve ikinci iyonlaşma enerjileri birbirine yakınken üçüncü iyonlaşma enerjisi çok büyükse elementin değerlik elektron sayısı yaklaşık kaçtır?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "8"
    ],
    correct: 1,
    explain: "Büyük sıçrama üçüncü elektrona geçildiğinde meydana geliyorsa ilk iki elektron değerlik elektronlarıdır."
  },

  {
    kazanim: "KİM.9.1.8 — İyonlaşma enerjisini atom yarıçapıyla ilişkilendirir",
    konu: "Yarıçap ve iyonlaşma enerjisi",
    context: "İki Atomun Elektronları",
    text: "Atom yarıçapı küçük olan bir atomun iyonlaşma enerjisinin genellikle daha büyük olmasının nedeni nedir?",
    options: [
      "Elektronların çekirdekten uzak olması",
      "Elektronların çekirdeğe daha yakın olması",
      "Proton sayısının azalması",
      "Katman sayısının artması",
      "Nötronların elektronları çekmesi"
    ],
    correct: 1,
    explain: "Elektron çekirdeğe yaklaştıkça çekim kuvveti artar ve elektronu koparmak daha fazla enerji gerektirir."
  },

  {
    kazanim: "KİM.9.1.8 — Soy gazların iyonlaşma enerjisini yorumlar",
    konu: "Kararlı elektron dizilimi",
    context: "Soy Gazlar",
    text: "Soy gazların iyonlaşma enerjilerinin genel olarak yüksek olmasının temel nedeni nedir?",
    options: [
      "Çok büyük atom yarıçapına sahip olmaları",
      "Kararlı ve dolu değerlik katmanlarına sahip olmaları",
      "Elektronlarının olmaması",
      "Protonlarının bulunmaması",
      "Hepsinin metal olması"
    ],
    correct: 1,
    explain: "Soy gazların değerlik katmanları kararlı ve doludur. Bu nedenle elektron koparmak zordur."
  },

  /* =====================================================
     4 — ELEKTRONEGATİFLİK
     ===================================================== */

  {
    kazanim: "KİM.9.1.8 — Elektronegatifliği tanımlar",
    konu: "Elektronegatiflik",
    context: "Flor'un Bağ Kurma Gücü",
    text: "Elektronegatiflik neyi ifade eder?",
    options: [
      "Atomun elektron verme enerjisini",
      "Atomun proton çekme gücünü",
      "Bağdaki ortak elektronları kendine çekme eğilimini",
      "Atomun nötron sayısını",
      "Atomun kütlesini"
    ],
    correct: 2,
    explain: "Elektronegatiflik, bir atomun kimyasal bağdaki ortak elektron çiftini kendine çekme eğilimidir."
  },

  {
    kazanim: "KİM.9.1.8 — Elektronegatifliğin periyottaki değişimini açıklar",
    konu: "Periyotta elektronegatiflik",
    context: "Bağ Elektronlarını Çekmek",
    text: "Genel olarak bir periyotta soldan sağa gidildikçe elektronegatiflik neden artar?",
    options: [
      "Atom yarıçapı büyüdüğü için",
      "Etkin çekirdek çekimi arttığı için",
      "Katman sayısı arttığı için",
      "Proton sayısı azaldığı için",
      "Elektronlar çekirdekten uzaklaştığı için"
    ],
    correct: 1,
    explain: "Etkin çekirdek çekiminin artması atomun bağ elektronlarını kendine çekme eğilimini artırır."
  },

  {
    kazanim: "KİM.9.1.8 — Elektronegatifliğin gruptaki değişimini açıklar",
    konu: "Grupta elektronegatiflik",
    context: "Halojenler",
    text: "F, Cl ve Br arasında genel olarak elektronegatifliği en yüksek olan hangisidir?",
    options: [
      "F",
      "Cl",
      "Br",
      "Hepsi eşittir",
      "Br"
    ],
    correct: 0,
    explain: "Elektronegatiflik grupta aşağı doğru azalır. Flor en yüksek elektronegatifliğe sahiptir."
  },

  {
    kazanim: "KİM.9.1.8 — Elektronegatiflik değerlerini karşılaştırır",
    konu: "Elektronegatiflik sıralaması",
    context: "Na ve Cl",
    text: "Na ve Cl karşılaştırıldığında hangisinin elektronegatifliği daha yüksektir?",
    options: [
      "Na",
      "Cl",
      "Eşittir",
      "Na⁺",
      "Karşılaştırılamaz"
    ],
    correct: 1,
    explain: "Aynı periyotta sağa doğru elektronegatiflik genel olarak artar. Cl, Na'dan daha elektronegatiftir."
  },

  {
    kazanim: "KİM.9.1.8 — Elektronegatiflik ile bağ polaritesini ilişkilendirir",
    konu: "Bağ polaritesi",
    context: "H-Cl Bağı",
    text: "HCl molekülündeki bağın polar olmasının temel nedeni nedir?",
    options: [
      "H ve Cl'nin elektronegatifliklerinin farklı olması",
      "İki atomun aynı element olması",
      "Elektronların tamamen yok olması",
      "Protonların hareket etmesi",
      "H'nin soy gaz olması"
    ],
    correct: 0,
    explain: "H ve Cl'nin elektronegatiflikleri farklı olduğu için bağ elektronları Cl'ye daha fazla çekilir ve bağ polarlaşır."
  },

  {
    kazanim: "KİM.9.1.8 — Elektronegatiflik farkını bağ türüyle ilişkilendirir",
    konu: "İyonik bağ",
    context: "NaCl Oluşumu",
    text: "NaCl oluşumunda Na ile Cl arasındaki elektronegatiflik farkının büyük olması hangi durumu kolaylaştırır?",
    options: [
      "Elektronların eşit paylaşılmasını",
      "Elektron alışverişini ve iyon oluşumunu",
      "Nötron alışverişini",
      "Çekirdeğin parçalanmasını",
      "İki ametalin birleşmesini"
    ],
    correct: 1,
    explain: "Büyük elektronegatiflik farkı elektronun Na'dan Cl'ye aktarılmasını kolaylaştırır."
  },

  /* =====================================================
     5 — ELEKTRON İLGİSİ
     ===================================================== */

  {
    kazanim: "KİM.9.1.8 — Elektron ilgisini tanımlar",
    konu: "Elektron ilgisi",
    context: "Atom Elektron Alıyor",
    text: "Elektron ilgisi genel olarak hangi olayla ilişkilidir?",
    options: [
      "Gaz hâlindeki nötr atomun elektron alması",
      "Protonun çekirdekten ayrılması",
      "Nötronun elektron hâline gelmesi",
      "Atomun ışık yayması",
      "Çekirdeğin parçalanması"
    ],
    correct: 0,
    explain: "Elektron ilgisi, gaz hâlindeki nötr bir atomun elektron kazanmasıyla ilişkili enerji değişimidir."
  },

  {
    kazanim: "KİM.9.1.8 — Elektron ilgisinin periyodik değişimini yorumlar",
    konu: "Elektron alma eğilimi",
    context: "Halojenlerin Elektron Alma Eğilimi",
    text: "Halojenlerin elektron alma eğilimlerinin yüksek olmasının temel nedeni nedir?",
    options: [
      "Değerlik katmanlarının dolmaya yakın olması",
      "Elektronlarının hiç olmaması",
      "Metal olmaları",
      "Atom yarıçaplarının çok büyük olması",
      "Soy gaz olmaları"
    ],
    correct: 0,
    explain: "Halojenlerin değerlik katmanlarında 7 elektron vardır. Bir elektron alarak kararlı düzene ulaşabilirler."
  },

  {
    kazanim: "KİM.9.1.8 — Elektron ilgisini değerlik elektron sayısıyla ilişkilendirir",
    konu: "Kararlı elektron dizilimi",
    context: "Bir Elektron Daha",
    text: "7 değerlik elektronuna sahip bir atomun bir elektron alma eğiliminin yüksek olmasının nedeni nedir?",
    options: [
      "Kararlı düzene ulaşmak için bir elektrona ihtiyaç duyması",
      "Tüm elektronlarını kaybetmek istemesi",
      "Çekirdeğinin olmaması",
      "Katman sayısının sıfır olması",
      "Metal olması"
    ],
    correct: 0,
    explain: "7 değerlik elektronuna sahip atom bir elektron alarak değerlik katmanını 8 elektrona tamamlayabilir."
  },

  /* =====================================================
     6 — PERİYODİK ÖZELLİKLERİN BİRLİKTE YORUMLANMASI
     ===================================================== */

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikler arasındaki ilişkiyi yorumlar",
    konu: "Atom yarıçapı ve elektronegatiflik",
    context: "Küçük Atom, Güçlü Çekim",
    text: "Atom yarıçapı küçüldükçe elektronegatifliğin genel olarak artmasının nedeni nedir?",
    options: [
      "Bağ elektronlarının çekirdeğe daha yakın olması",
      "Proton sayısının azalması",
      "Katman sayısının artması",
      "Elektronların tamamen kaybolması",
      "Atomun metal olması"
    ],
    correct: 0,
    explain: "Küçük yarıçaplı atomlarda bağ elektronları çekirdeğe daha yakındır ve çekirdek tarafından daha güçlü çekilir."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikler arasındaki ilişkiyi yorumlar",
    konu: "Atom yarıçapı ve iyonlaşma enerjisi",
    context: "Elektronu Tutmak",
    text: "Aşağıdaki genel ilişkilerden hangisi doğrudur?",
    options: [
      "Atom yarıçapı arttıkça iyonlaşma enerjisi genellikle artar.",
      "Atom yarıçapı azaldıkça iyonlaşma enerjisi genellikle artar.",
      "Atom yarıçapı ve iyonlaşma enerjisi tamamen ilişkisizdir.",
      "Yarıçap arttıkça proton sayısı azalır.",
      "İyonlaşma enerjisi yalnızca nötron sayısına bağlıdır."
    ],
    correct: 1,
    explain: "Atom küçüldükçe değerlik elektronu çekirdeğe yaklaşır ve daha güçlü tutulur. Bu nedenle iyonlaşma enerjisi artar."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özelliklerin yönünü belirler",
    konu: "Genel periyodik eğilim",
    context: "Periyodik Tabloda Yönler",
    text: "Aşağıdaki özelliklerden hangisi genel olarak periyodik tabloda sağa ve yukarı doğru artar?",
    options: [
      "Atom yarıçapı",
      "Elektronegatiflik",
      "Katman sayısı",
      "Atom hacmi",
      "Metalik karakter"
    ],
    correct: 1,
    explain: "Elektronegatiflik genel olarak sağa ve yukarı doğru artar."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özelliklerin yönünü belirler",
    konu: "Metalik karakter",
    context: "Metal ve Ametal Eğilimi",
    text: "Metalik karakter periyodik tabloda genel olarak hangi yönde artar?",
    options: [
      "Sağa ve yukarı",
      "Sola ve aşağı",
      "Yalnızca sağa",
      "Yalnızca yukarı",
      "Değişmez"
    ],
    correct: 1,
    explain: "Metalik karakter elektron verme eğilimiyle ilişkilidir ve genel olarak sola ve aşağı doğru artar."
  },

  {
    kazanim: "KİM.9.1.8 — Metalik karakteri atom yarıçapı ve iyonlaşma enerjisiyle ilişkilendirir",
    konu: "Metalik karakter",
    context: "Elektron Vermeye Yatkınlık",
    text: "Metalik karakteri yüksek olan bir atom için aşağıdakilerden hangisi genellikle doğrudur?",
    options: [
      "Elektron vermeye daha yatkındır.",
      "Elektronları çok güçlü tutar.",
      "Elektronegatifliği çok yüksektir.",
      "İyonlaşma enerjisi çok yüksektir.",
      "Atom yarıçapı mutlaka en küçüktür."
    ],
    correct: 0,
    explain: "Metaller elektron vermeye yatkındır. Bu nedenle metalik karakter arttıkça elektron verme eğilimi artar."
  },

  {
    kazanim: "KİM.9.1.8 — Ametal karakteri periyodik özelliklerle ilişkilendirir",
    konu: "Ametal karakter",
    context: "Elektron Alma Eğilimi",
    text: "Ametal karakteri yüksek olan elementler için aşağıdakilerden hangisi daha olasıdır?",
    options: [
      "Elektron vermeye yatkın olmaları",
      "Elektron almaya yatkın olmaları",
      "Atom yarıçaplarının çok büyük olması",
      "İyonlaşma enerjilerinin çok düşük olması",
      "Metalik özelliklerinin yüksek olması"
    ],
    correct: 1,
    explain: "Ametaller elektron almaya veya ortaklaşa kullanmaya daha yatkındır."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri birlikte kullanarak elementleri karşılaştırır",
    konu: "Element karşılaştırması",
    context: "Na ve Cl'nin Özellikleri",
    text: "Na ve Cl aynı periyotta olduğuna göre aşağıdakilerden hangisi genel olarak doğrudur?",
    options: [
      "Na'nın yarıçapı Cl'den küçüktür.",
      "Cl'nin elektronegatifliği Na'dan büyüktür.",
      "Na'nın iyonlaşma enerjisi Cl'den büyüktür.",
      "Na'nın ametallik karakteri Cl'den büyüktür.",
      "Cl'nin atom yarıçapı Na'dan büyüktür."
    ],
    correct: 1,
    explain: "Aynı periyotta sağa doğru elektronegatiflik artar. Cl, Na'dan daha elektronegatiftir."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri birlikte kullanarak elementleri karşılaştırır",
    konu: "Li ve F karşılaştırması",
    context: "Periyodun İki Ucu",
    text: "Li ve F aynı periyotta bulunmaktadır. Buna göre aşağıdakilerden hangisi doğrudur?",
    options: [
      "Li'nin elektronegatifliği F'den büyüktür.",
      "F'nin atom yarıçapı Li'den büyüktür.",
      "Li'nin atom yarıçapı F'den büyüktür.",
      "Li'nin iyonlaşma enerjisi F'den büyüktür.",
      "İkisinin metalik karakteri aynıdır."
    ],
    correct: 2,
    explain: "Aynı periyotta soldan sağa atom yarıçapı küçülür. Li, F'nin solunda olduğundan yarıçapı daha büyüktür."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri birlikte kullanarak elementleri karşılaştırır",
    konu: "K ve F karşılaştırması",
    context: "Periyodik Tabloda Uzak İki Element",
    text: "K ve F için aşağıdakilerden hangisi genel olarak doğrudur?",
    options: [
      "K'nin elektronegatifliği F'den büyüktür.",
      "F'nin atom yarıçapı K'den büyüktür.",
      "K'nin atom yarıçapı F'den büyüktür.",
      "K'nin ametallik karakteri F'den büyüktür.",
      "F elektron vermeye K'den daha yatkındır."
    ],
    correct: 2,
    explain: "K daha aşağıda ve solda bulunduğundan atom yarıçapı F'den çok daha büyüktür."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri yorumlayarak elementin konumunu tahmin eder",
    konu: "Periyodik özelliklerden konum belirleme",
    context: "Bilinmeyen Element",
    text: "Bir elementin atom yarıçapı büyük, iyonlaşma enerjisi düşük ve metalik karakteri yüksekse periyodik tablonun hangi bölgesinde bulunması beklenir?",
    options: [
      "Sağ üst",
      "Sol alt",
      "Sağ üst köşe",
      "Soy gazlar bölgesi",
      "Yalnızca orta bölüm"
    ],
    correct: 1,
    explain: "Atom yarıçapı ve metalik karakter sola ve aşağı doğru artarken iyonlaşma enerjisi azalır."
  },

  /* =====================================================
     7 — BAĞLAM TEMELLİ YORUM
     ===================================================== */

  {
    kazanim: "KİM.9.1.8 — Periyodik özelliklerdeki değişimi nedenleriyle açıklar",
    konu: "Çekirdek yükü",
    context: "Proton Sayısı Artıyor",
    text: "Aynı periyotta proton sayısı arttıkça atom yarıçapının küçülmesinin temel nedeni nedir?",
    options: [
      "Elektronların çekirdekten uzaklaşması",
      "Çekirdeğin elektronları daha güçlü çekmesi",
      "Katman sayısının artması",
      "Elektron sayısının azalması",
      "Nötronların elektronları itmesi"
    ],
    correct: 1,
    explain: "Artan proton sayısı çekirdeğin çekim gücünü artırır ve elektron bulutunu çekirdeğe yaklaştırır."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özelliklerdeki değişimi nedenleriyle açıklar",
    konu: "Perdeleme etkisi",
    context: "İç Katman Elektronları",
    text: "Atomda iç katmanlardaki elektronların dış katmandaki elektronların çekirdek tarafından çekilmesini azaltmasına ne ad verilir?",
    options: [
      "Elektronegatiflik",
      "Perdeleme etkisi",
      "İyonlaşma",
      "Elektron ilgisi",
      "Hibritleşme"
    ],
    correct: 1,
    explain: "İç katman elektronları dış elektronların hissettiği çekirdek çekimini azaltır. Bu etkiye perdeleme etkisi denir."
  },

  {
    kazanim: "KİM.9.1.8 — Perdeleme etkisini atom yarıçapıyla ilişkilendirir",
    konu: "Perdeleme ve yarıçap",
    context: "Yeni Bir Katman",
    text: "Bir grupta aşağı doğru gidildikçe yeni enerji seviyelerinin eklenmesi aşağıdaki özelliklerden hangisini doğrudan etkiler?",
    options: [
      "Atom yarıçapının artmasını",
      "Proton sayısının azalmasını",
      "Çekirdeğin yok olmasını",
      "Elektron sayısının azalmasını",
      "Atomun element türünün değişmesini"
    ],
    correct: 0,
    explain: "Yeni enerji seviyeleri dış elektronları çekirdekten uzaklaştırarak atom yarıçapını artırır."
  },

  {
    kazanim: "KİM.9.1.8 — Etkin çekirdek yükünün periyodik özelliklere etkisini yorumlar",
    konu: "Etkin çekirdek yükü",
    context: "Çekim Gücü Artıyor",
    text: "Aynı periyotta etkin çekirdek yükünün artması aşağıdakilerden hangisine katkı sağlar?",
    options: [
      "Atom yarıçapının küçülmesine",
      "Atom yarıçapının artmasına",
      "Katman sayısının artmasına",
      "Proton sayısının azalmasına",
      "Elektronların yok olmasına"
    ],
    correct: 0,
    explain: "Etkin çekirdek yükü arttıkça elektronlar çekirdeğe daha güçlü çekilir ve atom yarıçapı küçülür."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri nicel veriler üzerinden yorumlar",
    konu: "İyonlaşma enerjisi verileri",
    context: "Enerji Değerleri",
    text: "Bir elementin ardışık iyonlaşma enerjileri 500, 4600, 6900 kJ/mol şeklindedir. Büyük sıçrama hangi iki değer arasındadır?",
    options: [
      "500 ile 4600",
      "4600 ile 6900",
      "500 ile 6900",
      "Hiçbirinde",
      "Değerler eşittir"
    ],
    correct: 0,
    explain: "500'den 4600'e geçişte çok büyük bir sıçrama vardır. Bu, ilk elektronun değerlik elektronu olduğunu düşündürür."
  },

  {
    kazanim: "KİM.9.1.8 — İyonlaşma enerjisi verilerinden değerlik elektron sayısını belirler",
    konu: "Ardışık iyonlaşma enerjileri",
    context: "Büyük Sıçrama",
    text: "Bir elementin iyonlaşma enerjileri 600, 1200, 7300, 9500 kJ/mol şeklindedir. Bu elementin değerlik elektron sayısı yaklaşık kaçtır?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correct: 1,
    explain: "İkinci ve üçüncü iyonlaşma enerjileri arasında büyük sıçrama vardır. Bu nedenle ilk iki elektron değerlik elektronlarıdır."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özelliklerden elementin metal-ametal karakterini tahmin eder",
    konu: "Metal-ametal ayrımı",
    context: "Bilinmeyen X Elementi",
    text: "X elementinin atom yarıçapı büyük, iyonlaşma enerjisi düşük ve elektronegatifliği düşükse X için hangi özellik daha olasıdır?",
    options: [
      "Güçlü metalik karakter",
      "Güçlü ametalik karakter",
      "Soy gaz karakteri",
      "Çok yüksek elektron çekme gücü",
      "Çok küçük atom yarıçapı"
    ],
    correct: 0,
    explain: "Büyük yarıçap, düşük iyonlaşma enerjisi ve düşük elektronegatiflik elektron vermeyi kolaylaştırır. Bu metalik karakterin göstergesidir."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri karşılaştırmalı olarak yorumlar",
    konu: "Özelliklerin birlikte değişimi",
    context: "Üç Element",
    text: "X, Y ve Z aynı periyotta soldan sağa doğru sıralanmıştır. Buna göre aşağıdakilerden hangisi genel olarak doğrudur?",
    options: [
      "Atom yarıçapı X < Y < Z",
      "İyonlaşma enerjisi X > Y > Z",
      "Elektronegatiflik X < Y < Z",
      "Metalik karakter X < Y < Z",
      "Atom yarıçapı X = Y = Z"
    ],
    correct: 2,
    explain: "Aynı periyotta soldan sağa doğru elektronegatiflik genel olarak artar."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri karşılaştırmalı olarak yorumlar",
    konu: "Grupta özellik değişimi",
    context: "Bir Grup İçindeki Elementler",
    text: "A, B ve C aynı grupta olup A en üstte, C en alttadır. Hangisi genel olarak doğrudur?",
    options: [
      "A'nın atom yarıçapı C'den büyüktür.",
      "C'nin atom yarıçapı A'dan büyüktür.",
      "C'nin metalik karakteri A'dan küçüktür.",
      "A'nın katman sayısı C'den fazladır.",
      "İyonlaşma enerjisi aşağı doğru artar."
    ],
    correct: 1,
    explain: "Grupta aşağı doğru katman sayısı ve atom yarıçapı artar."
  },

  /* =====================================================
     8 — İLERİ YORUM VE KARŞILAŞTIRMA
     ===================================================== */

  {
    kazanim: "KİM.9.1.8 — İzoelektronik türlerde proton sayısının yarıçapa etkisini yorumlar",
    konu: "İzoelektronik iyonlar",
    context: "Dört İyon Karşılaştırılıyor",
    text: "N³⁻, O²⁻, F⁻ ve Na⁺ türlerinin elektron sayıları aynıdır. Hangisinin yarıçapı en küçüktür?",
    options: [
      "N³⁻",
      "O²⁻",
      "F⁻",
      "Na⁺",
      "Hepsinin yarıçapı aynıdır"
    ],
    correct: 3,
    explain: "Elektron sayıları eşit olduğunda proton sayısı fazla olan çekirdeğin çekimi daha güçlüdür. Na⁺ en fazla protona sahip olduğundan en küçüktür."
  },

  {
    kazanim: "KİM.9.1.8 — İyon ve atom yarıçaplarını birlikte karşılaştırır",
    konu: "Katyon-anyon karşılaştırması",
    context: "Na⁺ ve F⁻",
    text: "Na⁺ ve F⁻ iyonlarının elektron sayıları eşittir. Buna göre hangisinin yarıçapı daha büyüktür?",
    options: [
      "Na⁺",
      "F⁻",
      "İkisi eşittir",
      "Proton sayısı fazla olan",
      "Karşılaştırılamaz"
    ],
    correct: 1,
    explain: "Her ikisi de 10 elektrona sahiptir. F⁻ 9 protona, Na⁺ ise 11 protona sahiptir. Daha az protona sahip F⁻ daha büyüktür."
  },

  {
    kazanim: "KİM.9.1.8 — Elektronegatiflik farkından bağ karakterini tahmin eder",
    konu: "Bağ karakteri",
    context: "İki Atomun Elektronegatiflikleri",
    text: "İki atom arasındaki elektronegatiflik farkı arttıkça bağın iyonik karakteri için genel olarak ne söylenebilir?",
    options: [
      "Azalır",
      "Artar",
      "Kesinlikle sıfır olur",
      "Bağ tamamen yok olur",
      "Değişmez"
    ],
    correct: 1,
    explain: "Elektronegatiflik farkı arttıkça elektronun bir atomdan diğerine aktarılma eğilimi artar ve bağın iyonik karakteri yükselir."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri kullanarak bağ elektronlarının davranışını tahmin eder",
    konu: "Elektronegatiflik ve elektron çekimi",
    context: "Bağ Elektronlarının Yolculuğu",
    text: "A ve B atomlarından B'nin elektronegatifliği daha büyükse A-B bağındaki ortak elektronların bulunma olasılığı hangi atoma daha yakındır?",
    options: [
      "A",
      "B",
      "İki atomdan eşit uzaklıkta",
      "Çekirdeğe değil nötrona yakın",
      "Elektronlar bağdan tamamen ayrılır"
    ],
    correct: 1,
    explain: "Elektronegatifliği daha büyük olan atom ortak bağ elektronlarını kendisine daha güçlü çeker."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri kullanarak elementleri sınıflandırır",
    konu: "Metal-ametal karakteri",
    context: "X Elementinin Özellikleri",
    text: "X elementinin iyonlaşma enerjisi düşük, atom yarıçapı büyük ve elektronegatifliği düşükse X'in metal olma olasılığı neden yüksektir?",
    options: [
      "Elektronlarını kolay verme eğiliminde olduğu için",
      "Elektronlarını çok güçlü tuttuğu için",
      "Bağ elektronlarını güçlü çektiği için",
      "Katman sayısı sıfır olduğu için",
      "Elektron alamadığı için"
    ],
    correct: 0,
    explain: "Düşük iyonlaşma enerjisi elektron koparmayı kolaylaştırır. Bu özellik büyük yarıçap ve düşük elektronegatiflikle birlikte metalik karakteri destekler."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri kullanarak elementin konumunu tahmin eder",
    konu: "Periyodik tablo konumu",
    context: "Bilinmeyen Elementin Konumu",
    text: "Bir elementin elektronegatifliği çok yüksek, atom yarıçapı küçük ve iyonlaşma enerjisi yüksekse bu elementin periyodik tablonun hangi bölgesinde bulunması beklenir?",
    options: [
      "Sol alt",
      "Sol üst",
      "Sağ üst",
      "Sağ alt",
      "Orta alt"
    ],
    correct: 2,
    explain: "Elektronegatiflik ve iyonlaşma enerjisi genel olarak sağa ve yukarı doğru artarken atom yarıçapı azalır."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri birlikte değerlendirir",
    konu: "Genel eğilimlerin karşılaştırılması",
    context: "Periyodik Tabloda Dört Özellik",
    text: "Aşağıdaki özelliklerden hangilerinin genel olarak aynı yönde arttığı söylenebilir?",
    options: [
      "Atom yarıçapı ve iyonlaşma enerjisi",
      "Atom yarıçapı ve elektronegatiflik",
      "Elektronegatiflik ve iyonlaşma enerjisi",
      "Metalik karakter ve elektronegatiflik",
      "Atom yarıçapı ve elektron ilgisi"
    ],
    correct: 2,
    explain: "Elektronegatiflik ve iyonlaşma enerjisi genel olarak sağa ve yukarı doğru artar."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özelliklerdeki istisnai değişimleri yorumlar",
    konu: "İyonlaşma enerjisi istisnaları",
    context: "Beklenmeyen İyonlaşma Enerjisi",
    text: "Bir periyotta genel eğilime rağmen ardışık iki element arasında iyonlaşma enerjisinde küçük bir düşüş görülmesi aşağıdakilerden hangisiyle açıklanabilir?",
    options: [
      "Alt kabukların enerji ve doluluk farklılıkları",
      "Protonların yok olması",
      "Atomların element olmaktan çıkması",
      "Elektronların tamamen yok olması",
      "Katman sayısının her zaman azalması"
    ],
    correct: 0,
    explain: "İyonlaşma enerjisindeki bazı küçük istisnalar alt kabukların enerji farkları ve elektron dizilimlerinin kararlılığıyla açıklanabilir."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özelliklerin nedenlerini açıklar",
    konu: "Perdeleme ve çekim",
    context: "Dış Elektronun Hissettiği Çekim",
    text: "Bir atomda iç katman elektronlarının sayısı arttığında dış elektronların çekirdek tarafından hissedilen çekiminde ne olabilir?",
    options: [
      "Perdeleme artabilir ve etkin çekim azalabilir.",
      "Proton sayısı kesinlikle azalır.",
      "Çekirdek yok olur.",
      "Elektron sayısı sıfırlanır.",
      "Atom mutlaka anyon olur."
    ],
    correct: 0,
    explain: "İç elektronların perdeleme etkisi dış elektronların hissettiği etkin çekirdek çekimini azaltabilir."
  },

  {
    kazanim: "KİM.9.1.8 — Periyodik özellikleri günlük ve kimyasal bağlamlarda yorumlar",
    konu: "Periyodik özelliklerin uygulaması",
    context: "Bir Bileşiğin Oluşumu",
    text: "Bir metal ile bir ametal arasında bileşik oluşurken metalin elektron verme, ametalin elektron alma eğiliminin yüksek olması hangi periyodik özelliklerle ilişkilidir?",
    options: [
      "Metal için düşük iyonlaşma enerjisi, ametal için yüksek elektronegatiflik",
      "Metal için yüksek elektronegatiflik, ametal için düşük iyonlaşma enerjisi",
      "Her ikisi için de düşük elektronegatiflik",
      "Her ikisi için de yüksek atom yarıçapı",
      "Yalnızca nötron sayısı"
    ],
    correct: 0,
    explain: "Metallerin düşük iyonlaşma enerjisi elektron vermelerini kolaylaştırırken ametallerin yüksek elektronegatifliği elektron çekmelerini destekler."
    }
  ]
};
