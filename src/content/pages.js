const EGM = 'https://www.egm.gov.tr/ozelguvenlik'

const official = (label, path) => ({ label, url: `${EGM}/${path}` })
const related = (...items) => items.map(([label, path]) => ({ label, path }))

export const navigation = [
  ['Eğitimler', '/egitimler'],
  ['Sınav merkezi', '/sinav'],
  ['ÖGG rehberi', '/ogg-rehberi'],
  ['Kurumsal', '/kurumsal'],
  ['Hizmetler', '/guvenlik-hizmetleri'],
]

export const sitePages = {
  '/egitimler': {
    eyebrow: 'Eğitim merkezi',
    title: 'Özel güvenlik eğitimleri',
    lead: 'Temel eğitimden yenilemeye, atış ve görev alanı eğitimlerinden sınav hazırlığına kadar adayın ve görevlinin ihtiyaç duyduğu başlıkları tek merkezde topluyoruz.',
    facts: ['Silahlı temel: 120 ders saati', 'Silahsız temel: 100 ders saati', 'Silahlı yenileme: en az 60 ders saati', 'Silahsız yenileme: en az 50 ders saati'],
    sections: [
      { title: 'Temel eğitim', paragraphs: ['Mesleğe ilk kez başlayacak adaylar teorik ve uygulamalı temel eğitime katılır. Silahlı programda temel eğitime silah bilgisi ve atış eğitimi eklenir.'], bullets: ['Özel güvenlik hukuku ve kişi hakları', 'Güvenlik tedbirleri ve uygulamalar', 'Güvenlik sistem ve cihazları', 'İlk yardım, yangın ve iletişim', 'Kalabalık yönetimi ve kişi koruma'] },
      { title: 'Yenileme eğitimi', paragraphs: ['Özel güvenlik görevlileri ve yöneticiler kimlik kartlarının yenilenebilmesi için beş yılda bir yenileme eğitimi alır.'] },
      { title: 'Alan eğitimleri', bullets: ['Kadro atışları', 'Özel güvenlik yöneticiliği', 'Kişi koruma', 'Kıymet nakli', 'Alarm izleme', 'Ulaşım güvenliği', 'Geçici toplu etkinlikler ve spor güvenliği'] }
    ],
    source: official('EGM Eğitim Sıkça Sorulan Sorular', 'egitim-sss'),
    related: related(['Silahlı temel eğitim', '/egitimler/silahli-temel-egitim'], ['Silahsız temel eğitim', '/egitimler/silahsiz-temel-egitim'], ['Yenileme eğitimi', '/egitimler/yenileme-egitimi'], ['Alan eğitimleri', '/egitimler/alan-egitimleri'])
  },

  '/egitimler/silahli-temel-egitim': {
    eyebrow: 'Temel eğitim',
    title: 'Silahlı özel güvenlik temel eğitimi',
    lead: 'Silahlı görev kapsamında özel güvenlik mesleğine hazırlanacak adaylar için temel eğitim ile silah bilgisi ve atış eğitimini birlikte kapsayan program.',
    facts: ['120 ders saati', '100 saat teorik ve pratik temel eğitim', '20 saat silah eğitimi', 'Sınav EGM takvimine bağlıdır'],
    sections: [
      { title: 'Programın yapısı', paragraphs: ['Temel program; hukuk, kişi hakları, güvenlik tedbirleri, güvenlik cihazları, ilk yardım, yangın, iletişim, kalabalık yönetimi ve saha uygulamalarını kapsar. Silahlı programda bunlara silah bilgisi ve uygulamalı atış eklenir.'] },
      { title: 'Başvuru öncesi', paragraphs: ['Adayın 5188 sayılı Kanundaki genel şartları, öğrenim koşullarını ve sağlık şartlarını taşıması gerekir. Sağlık raporu temel eğitim başlamadan önce tamamlanmalıdır.'] },
      { title: 'Atış eğitimi', paragraphs: ['Temel ve yenileme eğitimlerindeki atış uygulamaları mevzuatta belirlenen ölçütlere göre yürütülür. Eğitimde silah güvenliği, mekanik bilgi, bakım ve uygulamalı atış birlikte ele alınır.'] }
    ],
    source: official('EGM Temel Eğitim Programı', 'temel-egitim'),
    related: related(['Silahsız temel eğitim', '/egitimler/silahsiz-temel-egitim'], ['ÖGG olma rehberi', '/ogg-rehberi/nasil-ogg-olunur'], ['Sağlık raporu', '/ogg-rehberi/saglik-raporu'])
  },

  '/egitimler/silahsiz-temel-egitim': {
    eyebrow: 'Temel eğitim',
    title: 'Silahsız özel güvenlik temel eğitimi',
    lead: 'Silahsız görev kapsamında özel güvenlik mesleğine başlayacak adaylar için teorik ve uygulamalı meslek eğitimi.',
    facts: ['100 ders saati', 'Teorik + uygulamalı eğitim', 'Silah dersi bulunmaz', 'Sınav EGM takvimine bağlıdır'],
    sections: [
      { title: 'Eğitimin kapsamı', paragraphs: ['Program; özel güvenlik hukuku, kişi hakları, güvenlik tedbirleri, güvenlik sistemleri, ilk yardım, yangın güvenliği, iletişim, kalabalık yönetimi, kişi koruma ve genel kollukla ilişkiler gibi temel dersleri içerir.'] },
      { title: 'Sonraki adım', paragraphs: ['Eğitim tamamlandıktan sonra ilgili ÖGG sınavına girilir. Başarılı adaylar güncel belge listesiyle kimlik kartı başvuru sürecine geçer.'] }
    ],
    source: official('EGM Temel Eğitim Programı', 'temel-egitim'),
    related: related(['Silahlı temel eğitim', '/egitimler/silahli-temel-egitim'], ['Sınav merkezi', '/sinav'], ['Gerekli belgeler', '/ogg-rehberi/gerekli-belgeler'])
  },

  '/egitimler/yenileme-egitimi': {
    eyebrow: 'Yenileme',
    title: 'ÖGG yenileme eğitimi',
    lead: 'Özel güvenlik görevlileri ve yöneticiler için kimlik kartı yenileme sürecinin eğitim ayağı.',
    facts: ['Beş yılda bir yenileme', 'Silahlı: en az 60 ders saati', 'Silahsız: en az 50 ders saati', 'Yenileme kimlik müracaatında sağlık raporu tekrar istenmez'],
    sections: [
      { title: 'Ne zaman başlanmalı?', paragraphs: ['Yenileme eğitimine her zaman başvurulabilir. İşlemlerin zamanında tamamlanması için kimlik kartının bitiş tarihinden önce planlama yapılması önemlidir. EGM, kimlik süresinin dolmasına bir yıl kala eğitim kurumuna müracaat edilebileceğini belirtir.'] },
      { title: 'Eğitim içeriği', paragraphs: ['Mevzuat, güvenlik tedbirleri, cihazlar, ilk yardım, yangın, iletişim, kalabalık yönetimi, kişi koruma ve kollukla ilişkiler güncel içerikle tekrar edilir. Silahlı yenilemede silah bilgisi ve atış dersi bulunur.'] }
    ],
    source: official('EGM Yenileme Eğitimi', 'yenileme-egitimi'),
    related: related(['Kimlik yenileme rehberi', '/ogg-rehberi/kimlik-yenileme'], ['Sınav takvimi', '/sinav/sinav-takvimi'], ['Sınav sonucu', '/sinav/sinav-sonucu'])
  },

  '/egitimler/alan-egitimleri': {
    eyebrow: 'Alan eğitimleri',
    title: 'Göreve göre uzmanlaşma eğitimleri',
    lead: 'Temel ve yenileme eğitimlerinin yanında görev alanına, sorumluluğa ve hizmet türüne göre planlanan tamamlayıcı eğitimler.',
    sections: [
      { title: 'Kadro ve hizmet içi atışları', paragraphs: ['Silahlı görev yapan personelin atış becerisini güncel tutmaya yönelik uygulamalardır. EGM’ye göre silahlı görev yapan özel güvenlik görevlilerine istihdam edildikleri kurum, kuruluş veya şirket tarafından her yıl en az 25 fişek üzerinden hizmet içi eğitim atışı yaptırılır.'] },
      { title: 'Yönetim ve koruma', bullets: ['Özel güvenlik yöneticiliği', 'Kişi koruma', 'Kıymet nakli'] },
      { title: 'Operasyon alanları', bullets: ['Alarm izleme', 'Ulaşım güvenliği', 'Geçici toplu etkinlikler ve spor güvenliği'] }
    ],
    source: official('EGM Eğitim Sıkça Sorulan Sorular', 'egitim-sss'),
    related: related(['Eğitim merkezi', '/egitimler'], ['Saha hizmetleri', '/guvenlik-hizmetleri'], ['İletişim', '/iletisim'])
  },

  '/sinav': {
    eyebrow: 'Sınav ve öğrenme merkezi',
    title: 'ÖGG sınav sürecini tek yerde takip edin',
    lead: 'Sınav takvimi, sonuç yönlendirmesi, ders notları ve soru çalışması için sade bir başlangıç noktası.',
    facts: ['2026’da 6 temel/yenileme sınav dönemi', 'Sonuçlar EGM üzerinden açıklanır', 'Giriş belgesi eğitim kurumu üzerinden takip edilir'],
    sections: [
      { title: 'Sınava hazırlanırken', paragraphs: ['Dersleri yalnız soru ezberine indirgemeden; konu özeti, mevzuat mantığı, geçmiş soru yapıları ve hızlı tekrar üzerinden çalışmak daha sağlıklı bir yöntemdir.'] },
      { title: 'Sınav günü', paragraphs: ['Adayın sınav giriş belgesindeki bilgileri önceden kontrol etmesi ve sınav günü ilgili kılavuzda belirtilen kimlik/belge şartlarına uyması gerekir. Döneme özel duyurular EGM tarafından yayımlanır.'] },
      { title: 'Sonuç açıklandığında', paragraphs: ['Sonuç bilgisi EGM’nin resmî sayfasından kontrol edilmelidir. Yavuz sitesi adayları doğrudan resmî ekrana yönlendirir.'] }
    ],
    source: official('EGM Sınav Sonuçları', 'sinav-sonuclari'),
    related: related(['2026 sınav takvimi', '/sinav/sinav-takvimi'], ['Sınav sonucunu sorgula', '/sinav/sinav-sonucu'], ['Çıkmış sorular', '/sinav/cikmis-sorular'], ['Ders notları', '/sinav/ders-notlari'])
  },

  '/sinav/sinav-takvimi': {
    eyebrow: 'Sınav takvimi',
    title: '2026 ÖGG sınav takvimi',
    lead: 'Eğitim bitiş tarihini ve sınav gününü birlikte planlamak için 2026 yılı temel ve yenileme sınav dönemleri.',
    timeline: [
      ['22 Şubat 2026', '119. Temel / 95. Yenileme · eğitim bitişi 16 Ocak'],
      ['3 Mayıs 2026', '120. Temel / 96. Yenileme · eğitim bitişi 13 Mart'],
      ['5 Temmuz 2026', '121. Temel / 97. Yenileme · eğitim bitişi 22 Mayıs'],
      ['29 Ağustos 2026', '122. Temel / 98. Yenileme · eğitim bitişi 24 Temmuz'],
      ['24 Ekim 2026', '123. Temel / 99. Yenileme · eğitim bitişi 18 Eylül'],
      ['27 Aralık 2026', '124. Temel / 100. Yenileme · eğitim bitişi 13 Kasım']
    ],
    sections: [{ title: 'Takvimi nasıl okuyalım?', paragraphs: ['Eğitim bitiş tarihi, ilgili sınav dönemine yetişecek eğitimin tamamlanması gereken resmî tarihtir. Sınıf ve kurs başlangıç tarihi kurum planlamasına göre daha erken olabilir.'] }],
    source: official('EGM 2026 Yılı Sınav Takvimi', '2026-sinav-takvimi'),
    related: related(['Sınav merkezi', '/sinav'], ['Sınav sonucu', '/sinav/sinav-sonucu'], ['Eğitimler', '/egitimler'])
  },

  '/sinav/sinav-sonucu': {
    eyebrow: 'Resmî yönlendirme',
    title: 'ÖGG sınav sonucunu sorgula',
    lead: 'Sınava giren adayları sonuçların yayımlandığı resmî EGM ekranına yönlendiriyoruz.',
    sections: [
      { title: 'Sonuç ekranı', paragraphs: ['Temel eğitim ve yenileme eğitimi sınav sonuçları Emniyet Genel Müdürlüğü Özel Güvenlik Denetleme Başkanlığı tarafından yayımlanır. Sonucunuzu doğrudan resmî kaynaktan kontrol edin.'], action: { label: 'EGM sınav sonuçlarını aç ↗', url: `${EGM}/sinav-sonuclari` } },
      { title: 'Sonuç sonrası', paragraphs: ['Başarı durumuna göre kimlik kartı müracaatı veya sonraki sınav dönemi takip edilir. Kimlik işlemlerinde güncel belge ve ücret bilgisini resmî sayfadan kontrol edin.'] }
    ],
    source: official('EGM Sınav Sonuçları', 'sinav-sonuclari'),
    related: related(['Kimlik kartı belgeleri', '/ogg-rehberi/gerekli-belgeler'], ['Sınav takvimi', '/sinav/sinav-takvimi'])
  },

  '/sinav/cikmis-sorular': {
    eyebrow: 'Soru arşivi',
    title: 'Çıkmış ÖGG soruları',
    lead: 'Geçmiş sınavları yalnız cevap anahtarı olarak değil, hangi konuların nasıl sorulduğunu görmek için kullanın.',
    sections: [
      { title: 'Çalışma yöntemi', bullets: ['Önce süre tutmadan çözün', 'Yanlışları ders başlığına göre ayırın', 'Mevzuat sorularında güncel metni kontrol edin', 'İkinci turda süreli çözüm yapın'] },
      { title: 'Kaynak düzeni', paragraphs: ['Resmî yayımlanan soru kitapçıkları sınav dönemine göre takip edilir. Eski ders notları ve soru arşivleri güncel mevzuatla karşılaştırılarak kullanılmalıdır.'] }
    ],
    related: related(['Ders notları', '/sinav/ders-notlari'], ['Sınav çalışma yöntemi', '/sinav/online-deneme'], ['Sınav merkezi', '/sinav'])
  },

  '/sinav/online-deneme': {
    eyebrow: 'Sınav çalışması',
    title: 'Deneme sınavı nasıl çalışılmalı?',
    lead: 'Tam deneme, kısa tekrar ve yanlış analizi birlikte kullanıldığında çalışma daha ölçülebilir hale gelir.',
    sections: [
      { title: 'Üç aşamalı yöntem', bullets: ['Konu eksiğini görmek için serbest çözüm', 'Süre yönetimi için tam deneme', 'Yanlışları ders başlığına göre tekrar çözme'] },
      { title: 'Sonuca değil dağılıma bakın', paragraphs: ['Tek bir toplam puan yerine hangi derslerde hata yaptığınızı izleyin. Aynı konudan tekrar eden yanlışlar çalışma planında önceliklendirilmelidir.'] }
    ],
    related: related(['Çıkmış sorular', '/sinav/cikmis-sorular'], ['Ders notları', '/sinav/ders-notlari'])
  },

  '/sinav/ders-notlari': {
    eyebrow: 'Ders notları',
    title: 'ÖGG ders notları',
    lead: 'Sınavda ve sahada işe yarayan ana kavramları ders başlıklarına göre düzenleyen çalışma alanı.',
    sections: [
      { title: 'Temel dersler', bullets: ['Özel güvenlik hukuku ve kişi hakları', 'Güvenlik tedbirleri', 'Güvenlik sistem ve cihazları', 'Temel ilk yardım', 'Yangın güvenliği', 'Etkili iletişim', 'Kalabalık yönetimi', 'Kişi koruma', 'Genel kollukla ilişkiler', 'Silah bilgisi'] },
      { title: 'Kaynak disiplini', paragraphs: ['Mevzuata bağlı notlarda resmî metin esas alınır. Eski arşiv notları güncel düzenlemeyle karşılaştırılmadan güncel bilgi olarak kabul edilmemelidir.'] }
    ],
    source: official('EGM Temel Eğitim Programı', 'temel-egitim'),
    related: related(['Çıkmış sorular', '/sinav/cikmis-sorular'], ['ÖGG rehberi', '/ogg-rehberi'])
  },

  '/ogg-rehberi': {
    eyebrow: 'ÖGG rehberi',
    title: 'Özel güvenlik sürecini adım adım anlayın',
    lead: 'Kimler ÖGG olabilir, hangi belgeler gerekir, sağlık raporu ne zaman alınır ve kimlik yenileme nasıl ilerler? Temel başlıkları tek yerde topluyoruz.',
    sections: [
      { title: 'İlk kez başvuracaklar', paragraphs: ['Önce genel şartlar ve sağlık uygunluğu kontrol edilir, ardından uygun temel eğitim programına kayıt olunur. Eğitim ve sınav sonrası kimlik kartı müracaatı yapılır.'] },
      { title: 'Mevcut görevliler', paragraphs: ['Kimlik kartı süresi yaklaşan görevliler yenileme eğitimini ve sınav sürecini planlar. Yenileme kimlik başvurusunda sağlık raporu yeniden istenmez.'] }
    ],
    source: official('EGM Özel Güvenlik İşlemleri', 'ozel-guvenlik-islemleri'),
    related: related(['Nasıl ÖGG olunur?', '/ogg-rehberi/nasil-ogg-olunur'], ['Gerekli belgeler', '/ogg-rehberi/gerekli-belgeler'], ['Sağlık raporu', '/ogg-rehberi/saglik-raporu'], ['Kimlik yenileme', '/ogg-rehberi/kimlik-yenileme'])
  },

  '/ogg-rehberi/nasil-ogg-olunur': {
    eyebrow: 'Başlangıç Rehberi',
    title: 'Nasıl özel güvenlik görevlisi olunur?',
    lead: 'Uygunluk şartlarından sağlık raporuna, temel eğitimden sınav ve kimlik kartı başvurusuna kadar sürecin sade özeti.',
    facts: ['T.C. Vatandaşlığı', 'Silahsız: 18 Yaş + Ortaokul', 'Silahlı: 21 Yaş + Lise', 'Olumlu Güvenlik Soruşturması'],
    steps: [
      ['1', 'Uygunluğu Kontrol Edin', 'Vatandaşlık, yaş, öğrenim, adli durum ve diğer temel şartları kontrol edin.'],
      ['2', 'Sağlık Raporunu Alın', 'Temel eğitim öncesinde hedeflediğiniz görev türüne uygun aday sağlık raporunu tamamlayın.'],
      ['3', 'Temel Eğitime Katılın', 'Silahlı veya silahsız programı hedeflediğiniz görev türüne göre seçin.'],
      ['4', 'ÖGG Sınavına Girin', 'Eğitim kurumunun yönlendirdiği sınav dönemini ve giriş belgesini takip edin.'],
      ['5', 'Kimlik Kartına Başvurun', 'Başarılı sınav sonrası güncel belge listesiyle e-Devlet veya ilgili birim üzerinden müracaat edin.']
    ],
    accordions: [
      {
        title: 'T.C. Vatandaşlığı',
        text: 'Özel güvenlik görevlisi olabilmek için Türkiye Cumhuriyeti vatandaşı olmak gerekir.'
      },
      {
        title: 'Yaş Şartı',
        text: 'Silahsız özel güvenlik görevliliğinde 18 yaşını doldurmuş olmak gerekir. EGM’nin meslek standardında silahlı özel güvenlik görevliliği için 21 yaş şartı belirtilir.'
      },
      {
        title: 'Öğrenim Şartı',
        text: 'Silahsız görev için en az sekiz yıllık ilköğretim veya ortaokul; silahlı görev için en az lise veya dengi okul mezuniyeti gerekir.'
      },
      {
        title: 'Adli Durum ve Kovuşturma Şartları',
        text: '“Adli sicilin temiz olması” tek başına yeterli bir özet değildir. 5188 sayılı Kanun; kasten işlenen suçlardan bir yıl veya daha fazla hapis cezası ile belirli katalog suçlar bakımından mahkûmiyet, HAGB ve bazı devam eden soruşturma veya kovuşturmalar için özel sınırlamalar getirir. Kesin değerlendirmede güncel resmî metin esas alınmalıdır.'
      },
      {
        title: 'Sağlık Uygunluğu',
        text: 'Görevin yapılmasına engel olabilecek sağlık durumunun bulunmaması ve temel eğitim öncesinde hedeflenen silahlı veya silahsız statüye uygun aday sağlık raporunun alınması gerekir.'
      },
      {
        title: 'Temel Eğitim ve Sınav',
        text: 'Muafiyet kapsamına girmeyen adayların özel güvenlik temel eğitimini tamamlaması ve ilgili sınav sürecinde başarılı olması gerekir.'
      },
      {
        title: 'Güvenlik Soruşturması',
        text: 'Özel güvenlik görevlisi kimlik kartı sürecinde güvenlik soruşturmasının olumlu sonuçlanması gerekir.'
      }
    ],
    sections: [
      {
        title: 'Sağlık Kurulu İçin Nereye Başvurulur?',
        paragraphs: [
          'Özel güvenlik aday sağlık raporu, Özel Güvenlik Görevlileri Sağlık Şartları Yönetmeliğinde tanımlanan tam teşekküllü hastanelerin sağlık kurullarınca düzenlenir.',
          'Başvururken hastanenin Sağlık Kurulu / Heyet birimine “Özel Güvenlik Görevlisi Aday Sağlık Raporu” talebiyle başvurun. Randevu, ücret ve istenen ek belgeler hastaneye göre değişebildiği için gitmeden önce ilgili hastaneden teyit alın.'
        ]
      },
      {
        title: 'Tam Teşekküllü Hastane Ne Demek?',
        paragraphs: [
          'Yönetmelik; gerekli uzmanlık branşlarını bünyesinde bulunduran ve bu uzmanların katılımıyla sağlık kurulu oluşturabilen sağlık kurumlarını tam teşekküllü hastane olarak tanımlar. Aday raporu e-Rapor sistemi üzerinden düzenlenir.'
        ]
      }
    ],
    cta: {
      eyebrow: 'Eğitime Başlayın',
      title: 'Temel Eğitime Katılın',
      text: 'Silahlı veya silahsız eğitim yolunu seçin; kayıt ve uygunluk konusunda Yavuz Özel Güvenlik ile doğrudan iletişime geçebilirsiniz.',
      primary: { label: 'Temel Eğitime Katılın', url: '/egitimler' },
      secondary: { label: 'WhatsApp’tan Bilgi Al', url: 'https://wa.me/905454253180?text=Merhaba%2C%20temel%20%C3%B6zel%20g%C3%BCvenlik%20e%C4%9Fitimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.' }
    },
    source: official('EGM ÖGG’de Aranacak Şartlar', 'ozel-guvenlik-gorevlilerinde-aranacak-sartlar'),
    related: related(['Silahlı Eğitim', '/egitimler/silahli-temel-egitim'], ['Silahsız Eğitim', '/egitimler/silahsiz-temel-egitim'], ['Sağlık Raporu', '/ogg-rehberi/saglik-raporu'], ['Gerekli Belgeler', '/ogg-rehberi/gerekli-belgeler'])
  },

  '/ogg-rehberi/gerekli-belgeler': {
    eyebrow: 'Başvuru Rehberi',
    title: 'ÖGG kimlik kartı için gerekli belgeler',
    lead: 'İlk kimlik kartı müracaatında istenen belgeleri adet ve biçim bilgileriyle birlikte kontrol edin. Sistem üzerinden doğrulanabilen belgelerde fiziki ibraz gerekliliği değişebilir.',
    facts: ['2 Adet Biyometrik Fotoğraf', '1 Adet İmzalı Dilekçe', '1 Adet Sağlık Raporu', '2 Ayrı Ödeme Belgesi'],
    sections: [
      {
        title: 'İlk Kimlik Kartı Müracaatında',
        bullets: [
          '1 adet imzalı dilekçe — T.C. kimlik numarası yazılı olmalı; gerektiğinde kimlik fotokopisi eklenir.',
          '1 adet diploma fotokopisi — otomasyondan kontrol edilemeyenlerde belgenin aslı görülür.',
          '1 adet özel güvenlik görevlisi ruhsat harcı makbuzu — aslı; istenirse güvenlik soruşturması sonucundan sonra teslim edilebilir.',
          '1 adet sağlık raporu — silahlı veya silahsız statüye uygun karar ibareli; otomasyondan kontrol edilemeyenlerde aslı görülür.',
          '2 adet biyometrik fotoğraf — beyaz fonlu, açık renk giysi ile, son 6 ay içinde cepheden çekilmiş.',
          '1 adet kimlik kartı ücreti banka dekontu — istenirse güvenlik soruşturması sonucundan sonra teslim edilebilir.'
        ],
        paragraphs: [
          'Başvurular e-Devlet üzerinden veya başvuru yapılan ilin İl Emniyet Müdürlüğü Özel Güvenlik Şube Müdürlüğü / ilgili birimi üzerinden alınabilir.'
        ]
      },
      {
        title: 'Belge Adedi Konusunda Küçük Not',
        paragraphs: [
          'Yukarıdaki adetler EGM’nin kimlik kartı müracaat listesindeki fiziksel belge düzenine göre yazılmıştır. e-Devlet ve ÖGNET üzerinden doğrulanabilen kayıtlar için ayrıca fiziki belge istenip istenmeyeceğini başvuru sırasında kontrol edin.'
        ]
      },
      {
        title: 'Güncel Tutarları Kontrol Edin',
        paragraphs: ['Harç ve kart bedelleri değişebilir. Başvuru yapacağınız tarihte EGM’nin güncel belge listesindeki tutar ve ödeme yöntemlerini esas alın.']
      }
    ],
    source: official('EGM Kimlik Kartı Müracaat Belgeleri', 'ozel-guvenlik-kimlik-karti-muracaatinda-istenilen-belgeler'),
    related: related(['Sağlık Raporu', '/ogg-rehberi/saglik-raporu'], ['Kimlik Yenileme', '/ogg-rehberi/kimlik-yenileme'], ['Nasıl ÖGG Olunur?', '/ogg-rehberi/nasil-ogg-olunur'], ['İletişim', '/iletisim'])
  },

  '/ogg-rehberi/saglik-raporu': {
    eyebrow: 'Sağlık Süreci',
    title: 'Özel güvenlik sağlık raporu',
    lead: 'Temel eğitime başlamadan önce adayın hedeflediği görev türüne uygun aday sağlık raporunu tamamlaması gerekir.',
    facts: ['Tam Teşekküllü Hastane', 'Sağlık Kurulu / Heyet', 'e-Rapor', 'Temel Eğitimden Önce'],
    sections: [
      {
        title: 'Nereye Başvurulur?',
        paragraphs: [
          'Aday sağlık raporu, yönetmelikte tanımlanan tam teşekküllü hastaneler tarafından düzenlenir. Başvuru için hastanenin Sağlık Kurulu / Heyet birimine müracaat edilir.',
          'Hastaneyi ararken veya randevu alırken özellikle “Özel Güvenlik Görevlisi Aday Sağlık Raporu” düzenleyip düzenlemediklerini sorun. Başvuru şekli, randevu ve ücret uygulaması hastaneye göre değişebilir.'
        ]
      },
      {
        title: 'Tam Teşekküllü Hastane',
        paragraphs: [
          'Yönetmelik; gerekli uzmanlık branşlarını bünyesinde bulunduran ve bu uzmanların katılımıyla sağlık kurulu oluşturabilen sağlık kurumlarını tam teşekküllü hastane olarak tanımlar. Aday raporu e-Rapor sistemi üzerinden düzenlenir.'
        ]
      },
      {
        title: 'Raporun Karar Kısmı',
        paragraphs: ['Sağlık raporunun karar bölümünde hedeflenen statüye göre “Silahlı Özel Güvenlik Görevlisi Olur” veya “Silahsız Özel Güvenlik Görevlisi Olur” şeklinde kesin karar bulunmalıdır.']
      },
      {
        title: 'Neden Eğitimden Önce?',
        paragraphs: ['Sağlık uygunluğu kesinleşmeden eğitime başlanması, olumsuz rapor halinde adayın zaman ve ücret kaybetmesine yol açabilir. Bu nedenle aday sağlık raporu temel eğitim öncesinde tamamlanmalıdır.']
      },
      {
        title: 'Yenilemede Durum',
        paragraphs: ['EGM’nin eğitim SSS sayfasına göre yenileme eğitiminden sonra kimlik kartı yenileme müracaatında sağlık raporu yeniden alınması gerekmemektedir.']
      }
    ],
    source: official('EGM Sağlık Şartları Yönetmeliği', 'ozel-guvenlik-gorevlileri-saglik-sartlari-yonetmeligi'),
    related: related(['Nasıl ÖGG Olunur?', '/ogg-rehberi/nasil-ogg-olunur'], ['Gerekli Belgeler', '/ogg-rehberi/gerekli-belgeler'], ['Temel Eğitimler', '/egitimler'])
  },

  '/ogg-rehberi/kimlik-yenileme': {
    eyebrow: 'Kimlik yenileme',
    title: 'ÖGG kimlik kartı yenileme süreci',
    lead: 'Kimlik kartı süresi yaklaşırken yenileme eğitimini, sınavı ve kart müracaatını birbirine bağlı üç adım olarak düşünün.',
    steps: [
      ['1', 'Süreyi kontrol edin', 'Kimlik kartı bitiş tarihini kontrol edin ve yenileme planını erkenden başlatın.'],
      ['2', 'Yenileme eğitimine katılın', 'Silahlı veya silahsız statünüze uygun yenileme programını tamamlayın.'],
      ['3', 'Sınav ve müracaatı tamamlayın', 'İlgili sınav dönemini takip ederek yenileme kimlik kartı işlemlerine geçin.']
    ],
    sections: [
      { title: 'Sağlık raporu gerekir mi?', paragraphs: ['Yenileme eğitimi sonrası kimlik kartı yenileme müracaatında sağlık raporu yeniden alınması gerekmemektedir.'] },
      { title: 'Ne kadar erken başlanabilir?', paragraphs: ['EGM, işlemlerin zamanında tamamlanması için kimlik kartı süresinin dolmasına bir yıl kala eğitim kurumuna müracaat edilebileceğini belirtmektedir.'] }
    ],
    source: official('EGM Eğitim SSS', 'egitim-sss'),
    related: related(['Yenileme eğitimi', '/egitimler/yenileme-egitimi'], ['Sınav takvimi', '/sinav/sinav-takvimi'])
  },

  '/guvenlik-hizmetleri': {
    eyebrow: 'Saha hizmetleri',
    title: 'Eğitimin yanında gerçek güvenlik hizmeti',
    lead: 'Yavuz, özel güvenlik eğitim kurumunun yanında işletme ve tesislere özel güvenlik hizmeti sunan saha tecrübesine de sahiptir.',
    sections: [
      { title: 'Hizmet yaklaşımı', paragraphs: ['Her saha aynı risk profiline sahip değildir. Giriş-çıkış, çevre güvenliği, ziyaretçi akışı, kritik alanlar ve devriye ihtiyacı işletmenin yapısına göre değerlendirilir.'] },
      { title: 'Hizmet alanları', bullets: ['Fabrika ve sanayi tesisleri', 'Şantiye ve çalışma sahaları', 'Eğitim kurumları', 'Enerji ve kritik tesisler'] },
      { title: 'Eğitim ile saha arasındaki bağ', paragraphs: ['Saha uygulamasını bilen bir eğitim kurumu; mevzuatı, kontrol noktalarını, devriye mantığını ve olay yönetimini yalnız teorik başlık olarak değil operasyonun parçası olarak ele alır.'] }
    ],
    related: related(['Fabrika ve sanayi', '/guvenlik-hizmetleri/fabrika-ve-sanayi'], ['Şantiye güvenliği', '/guvenlik-hizmetleri/santiye'], ['Eğitim kurumları', '/guvenlik-hizmetleri/egitim-kurumlari'], ['Enerji tesisleri', '/guvenlik-hizmetleri/enerji-tesisleri'])
  },

  '/guvenlik-hizmetleri/fabrika-ve-sanayi': {
    eyebrow: 'Saha hizmetleri',
    title: 'Fabrika ve sanayi güvenliği',
    lead: 'Personel, ziyaretçi, araç ve yük hareketinin aynı anda yaşandığı üretim tesislerinde güvenliği süreçlere göre planlıyoruz.',
    sections: [
      { title: 'Öncelikli kontrol alanları', bullets: ['Ana giriş ve ziyaretçi kontrolü', 'Araç ve sevkiyat girişleri', 'Üretim ve depo kritik alanları', 'Çevre ve kamera kontrolü', 'Devriye planı'] },
      { title: 'Tesis bazlı planlama', paragraphs: ['Vardiya yapısı, kör noktalar, dış çevre, yükleme alanları ve çalışan yoğunluğu her işletmede farklıdır. Güvenlik planı saha keşfi ve operasyon akışı üzerinden şekillenmelidir.'] }
    ],
    related: related(['Saha hizmetleri', '/guvenlik-hizmetleri'], ['İletişim', '/iletisim'])
  },

  '/guvenlik-hizmetleri/santiye': {
    eyebrow: 'Saha hizmetleri',
    title: 'Şantiye ve saha güvenliği',
    lead: 'Geniş çevre, değişken giriş noktaları, malzeme ve araç hareketi bulunan çalışma sahaları için kontrollü erişim ve devriye odaklı güvenlik.',
    sections: [
      { title: 'Sahada odaklandığımız noktalar', bullets: ['Çevre ve sınır kontrolü', 'Personel ve taşeron giriş takibi', 'Araç ve malzeme hareketi', 'Gece devriyesi ve kritik bölgeler', 'Olay kayıt ve bildirim düzeni'] },
      { title: 'Dinamik saha', paragraphs: ['Şantiyenin fiziki düzeni proje ilerledikçe değişir. Kontrol noktaları ve devriye rotaları da bu değişime göre güncellenmelidir.'] }
    ],
    related: related(['Saha hizmetleri', '/guvenlik-hizmetleri'], ['İletişim', '/iletisim'])
  },

  '/guvenlik-hizmetleri/egitim-kurumlari': {
    eyebrow: 'Saha hizmetleri',
    title: 'Eğitim kurumlarında güvenlik',
    lead: 'Öğrenci, personel, veli ve ziyaretçi hareketinin yoğun olduğu alanlarda güvenlik ile günlük yaşamın akışını dengede tutan yaklaşım.',
    sections: [
      { title: 'Kontrol başlıkları', bullets: ['Ana giriş ve ziyaretçi yönetimi', 'Bahçe ve çevre kontrolü', 'Yoğun saatlerde giriş-çıkış düzeni', 'Acil durum ve tahliye planlarına uyum', 'Yetkisiz erişimin önlenmesi'] },
      { title: 'İletişim', paragraphs: ['Eğitim kurumlarında güvenlik yalnız fiziksel kontrol değildir. Öğrenci, veli ve personelle doğru iletişim kurabilen, gerilimi yükseltmeden sınır koyabilen personel yaklaşımı önem taşır.'] }
    ],
    related: related(['Saha hizmetleri', '/guvenlik-hizmetleri'], ['Alan eğitimleri', '/egitimler/alan-egitimleri'])
  },

  '/guvenlik-hizmetleri/enerji-tesisleri': {
    eyebrow: 'Saha hizmetleri',
    title: 'Enerji ve kritik tesis güvenliği',
    lead: 'Sınırlı giriş noktaları, kritik ekipman ve geniş çevre güvenliği ihtiyacı bulunan tesislerde erişim ve çevre kontrolünü birlikte ele alıyoruz.',
    sections: [
      { title: 'Kritik alan yaklaşımı', bullets: ['Yetkili erişim kontrolü', 'Çevre ve perimetre takibi', 'Kamera ve alarm koordinasyonu', 'Devriye ve olay doğrulama', 'Acil durumda hızlı bildirim'] },
      { title: 'Operasyon sürekliliği', paragraphs: ['Güvenlik planı tesisin günlük çalışmasını gereksiz yere yavaşlatmadan kritik alanlara erişimi kontrollü tutmalıdır.'] }
    ],
    related: related(['Saha hizmetleri', '/guvenlik-hizmetleri'], ['Alan eğitimleri', '/egitimler/alan-egitimleri'])
  },

  '/kurumsal': {
    eyebrow: 'Kurumsal',
    title: 'Yavuz Özel Güvenlik',
    lead: '2006’dan bu yana Akşehir’de özel güvenlik eğitimi, saha hizmeti ve mesleki bilgi birikimini aynı kurum kimliği altında sürdürüyoruz.',
    timeline: [['2006', 'Akşehir’de özel güvenlik alanında faaliyet başlangıcı'], ['2018', 'Eğitim ve kurum arşivinde yer alan dönemsel çalışmalar'], ['Bugün', 'Eğitim, saha hizmeti ve ÖGG bilgi merkezi yaklaşımı']],
    sections: [
      { title: 'Ne yapıyoruz?', paragraphs: ['Özel güvenlik temel ve yenileme eğitimleri veriyor, adayları sınav sürecine hazırlıyor, görev alanına yönelik eğitimler düzenliyor ve kurum/işletmelere özel güvenlik hizmeti sunuyoruz.'] },
      { title: 'Kurumsal hafıza', paragraphs: ['Yıllar içinde oluşan ders notu, soru, duyuru ve saha birikimini güncel resmî kaynaklardan ayırmadan, anlaşılır ve erişilebilir bir bilgi düzeninde koruyoruz.'] }
    ],
    related: related(['Hakkımızda', '/kurumsal/hakkimizda'], ['Referanslar', '/kurumsal/referanslar'], ['Galeri', '/kurumsal/galeri'], ['İletişim', '/iletisim'])
  },

  '/kurumsal/hakkimizda': {
    eyebrow: 'Hakkımızda',
    title: 'Yerel tecrübe, güncel eğitim, gerçek saha',
    lead: 'Yavuz Özel Güvenlik, Akşehir merkezli yapısında eğitim kurumu ile güvenlik hizmeti tecrübesini birlikte taşır.',
    sections: [
      { title: 'Eğitim', paragraphs: ['Adayı yalnız sınavı geçmeye değil, özel güvenlik mesleğinin hukuki ve operasyonel çerçevesini anlamaya hazırlayan bir eğitim yaklaşımını benimsiyoruz.'] },
      { title: 'Saha', paragraphs: ['Fabrika, çalışma sahası, eğitim kurumu ve enerji tesisi gibi farklı ortamlardaki güvenlik ihtiyaçlarının aynı şablonla çözülemeyeceğini biliyoruz.'] },
      { title: 'Bilgi', paragraphs: ['Resmî kaynakları esas alan rehber, sınav ve ders notu içerikleriyle adayların ihtiyaç duyduğu bilgiyi sade biçimde sunuyoruz.'] }
    ],
    related: related(['Eğitimler', '/egitimler'], ['Saha hizmetleri', '/guvenlik-hizmetleri'], ['ÖGG rehberi', '/ogg-rehberi'])
  },

  '/kurumsal/referanslar': {
    eyebrow: 'Kurumsal hafıza',
    title: 'Geçmiş saha referanslarından örnekler',
    lead: 'Kurum arşivinde yer alan çalışma örneklerini sektör başlıklarıyla bir arada gösteriyoruz.',
    sections: [
      { title: 'Sanayi ve üretim', bullets: ['İzi Süt · Akşehir Organize Sanayi', 'Marmara Tohum Çeltik Tesisleri'] },
      { title: 'Şantiye ve saha', bullets: ['Düzgün İş Makineleri · Ilgın Kömür İşletmeleri'] },
      { title: 'Eğitim kurumları', bullets: ['Akşehir Selçuklu Anadolu Lisesi', 'Akşehir Yıldırım İlkokulu'] },
      { title: 'Enerji', bullets: ['Makasçı Güneş Enerjisi Elektrik Üretim Tesisleri'] }
    ],
    notice: 'Bu liste geçmiş kurum arşivindeki çalışma örneklerini gösterir; güncel hizmet durumu ve kurum unvanları zaman içinde değişmiş olabilir.',
    related: related(['Saha hizmetleri', '/guvenlik-hizmetleri'], ['Hakkımızda', '/kurumsal/hakkimizda'])
  },

  '/kurumsal/galeri': {
    eyebrow: 'Galeri',
    title: 'Eğitim ve saha ortamı',
    lead: 'Kurumun eğitim, uygulama ve saha çalışmalarına ilişkin görsel arşiv bu bölümde yer alır.',
    sections: [
      { title: 'Arşiv yaklaşımı', paragraphs: ['Galeride yalnız kuruma ait veya kullanım izni doğrulanmış eğitim ve saha görselleri kullanılır. Görseller mümkün olduğunda tarih ve çalışma bağlamıyla birlikte sunulur.'] }
    ],
    related: related(['Hakkımızda', '/kurumsal/hakkimizda'], ['Referanslar', '/kurumsal/referanslar'], ['İletişim', '/iletisim'])
  },

  '/iletisim': {
    eyebrow: 'İletişim',
    title: 'Yavuz Özel Güvenlik ile iletişime geçin',
    lead: 'Eğitim kaydı, yenileme, sınav süreci veya işletmeniz için özel güvenlik hizmeti hakkında doğrudan ulaşabilirsiniz.',
    facts: ['WhatsApp: 0545 425 31 80', 'Sabit: 0 332 813 69 00', 'Akşehir / Konya'],
    sections: [
      { title: 'Adres', paragraphs: ['Yeni Mahalle Cumhuriyet Caddesi Kürşat 6 Sitesi A Blok 49/B, Akşehir / Konya'] },
      { title: 'Hangi konuda yazabilirsiniz?', bullets: ['Silahlı / silahsız temel eğitim', 'Yenileme eğitimi', 'Sınav ve belge süreci', 'Kadro ve alan eğitimleri', 'Fabrika, şantiye, okul veya tesis güvenlik hizmeti'], action: { label: 'WhatsApp’tan yaz', url: 'https://wa.me/905454253180?text=Merhaba%2C%20Yavuz%20%C3%96zel%20G%C3%BCvenlik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.' } }
    ],
    related: related(['Eğitimler', '/egitimler'], ['Saha hizmetleri', '/guvenlik-hizmetleri'])
  }
}

export const normalizePath = value => {
  const path = (value || '/').split('?')[0].split('#')[0]
  if (path === '/index.html' || path === '/') return '/'
  return path.replace(/\/+$/, '') || '/'
}

export const resolvePage = value => {
  const path = normalizePath(value)
  return sitePages[path] || {
    eyebrow: 'Sayfa bulunamadı',
    title: 'Aradığınız sayfa burada değil.',
    lead: 'Bağlantı değişmiş olabilir. Ana sayfaya veya temel bölümlerden birine dönebilirsiniz.',
    related: related(['Ana sayfa', '/'], ['Eğitimler', '/egitimler'], ['ÖGG rehberi', '/ogg-rehberi'], ['İletişim', '/iletisim'])
  }
}
