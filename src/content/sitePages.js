const EGM = 'https://www.egm.gov.tr/ozelguvenlik'

const official = (label, path) => ({ label, url: `${EGM}/${path}` })
const related = (...items) => items.map(([label, path]) => ({ label, path }))

export const sitePages = {
  '/egitimler': {
    eyebrow: 'Eğitim merkezi',
    title: 'Özel güvenlik eğitimleri',
    lead: 'Temel eğitimden yenilemeye, atış ve görev alanı eğitimlerinden sınav hazırlığına kadar adayın ve görevlinin ihtiyaç duyduğu eğitim başlıklarını tek merkezde topluyoruz.',
    facts: ['Silahlı temel: 120 ders saati', 'Silahsız temel: 100 ders saati', 'Silahlı yenileme: en az 60 ders saati', 'Silahsız yenileme: en az 50 ders saati'],
    sections: [
      { title: 'Temel eğitim', paragraphs: ['Özel güvenlik mesleğine ilk kez başlayacak adaylar için teorik ve uygulamalı eğitim sürecidir. Silahlı programda temel eğitime ek olarak silah bilgisi ve atış eğitimi bulunur.'], bullets: ['Özel güvenlik hukuku ve kişi hakları', 'Güvenlik tedbirleri ve uygulamalar', 'Güvenlik sistem ve cihazları', 'İlk yardım, yangın, iletişim ve kalabalık yönetimi', 'Silahlı programda silah bilgisi ve atış'] },
      { title: 'Yenileme eğitimi', paragraphs: ['Kimlik kartının yenilenmesi için beş yılda bir alınan eğitimdir. Amaç; görevlinin mevzuat, saha uygulaması ve güncel güvenlik yaklaşımı bakımından bilgisini tazelemektir.'] },
      { title: 'Alan ve hizmet içi eğitimler', paragraphs: ['Kadro atışları ile görev alanına yönelik uzmanlaşma başlıklarını temel programlardan ayrı değerlendiriyoruz.'], bullets: ['Kadro atışları', 'Özel güvenlik yöneticiliği', 'Kişi koruma', 'Kıymet nakli', 'Alarm izleme', 'Ulaşım güvenliği', 'Geçici toplu etkinlikler ve spor güvenliği'] }
    ],
    source: official('EGM Eğitim Sıkça Sorulan Sorular', 'egitim-sss'),
    related: related(['Silahlı temel eğitim', '/egitimler/silahli-temel-egitim'], ['Silahsız temel eğitim', '/egitimler/silahsiz-temel-egitim'], ['Yenileme eğitimi', '/egitimler/yenileme-egitimi'], ['Alan eğitimleri', '/egitimler/alan-egitimleri'])
  },

  '/egitimler/silahli-temel-egitim': {
    eyebrow: 'Temel eğitim',
    title: 'Silahlı özel güvenlik temel eğitimi',
    lead: 'Silahlı görev kapsamında özel güvenlik mesleğine hazırlanacak adaylar için temel eğitim ile silah bilgisi ve atış eğitimini birlikte kapsayan program.',
    facts: ['120 ders saati', '100 saat teorik ve pratik temel eğitim', '20 saat silah eğitimi', 'Sınav süreci EGM takvimine bağlıdır'],
    sections: [
      { title: 'Program nasıl ilerler?', paragraphs: ['Eğitim; özel güvenlik mevzuatı, temel haklar, güvenlik tedbirleri, cihaz kullanımı, ilk yardım, yangın, iletişim, kalabalık yönetimi ve saha uygulamalarını kapsar. Silahlı programda bunlara silah bilgisi ve uygulamalı atış eğitimi eklenir.'] },
      { title: 'Başvuru öncesi kontrol', paragraphs: ['Adayın 5188 sayılı Kanun kapsamındaki genel şartları ve silahlı görev için aranan öğrenim şartını taşıması gerekir. Temel eğitime başlamadan önce sağlık şartlarının uygunluğu da değerlendirilir.'], bullets: ['Kimlik ve öğrenim durumunuzu hazırlayın', 'Sağlık raporu sürecini eğitim başlamadan tamamlayın', 'Kurs ve sınav takvimini birlikte planlayın'] },
      { title: 'Atış eğitimi', paragraphs: ['Temel ve yenileme eğitimlerindeki atış uygulamaları mevzuatta belirlenen mesafe, fişek ve başarı ölçütlerine göre yürütülür. Yavuz’da eğitim süreci, sınav için gerekli teorik hazırlıkla birlikte ele alınır.'] }
    ],
    source: official('EGM Temel Eğitim Programı', 'temel-egitim'),
    related: related(['Silahsız temel eğitim', '/egitimler/silahsiz-temel-egitim'], ['Yenileme eğitimi', '/egitimler/yenileme-egitimi'], ['ÖGG olma rehberi', '/ogg-rehberi/nasil-ogg-olunur'])
  },

  '/egitimler/silahsiz-temel-egitim': {
    eyebrow: 'Temel eğitim',
    title: 'Silahsız özel güvenlik temel eğitimi',
    lead: 'Silahsız görev kapsamında özel güvenlik mesleğine başlayacak adaylar için teorik ve uygulamalı meslek eğitimi.',
    facts: ['100 ders saati', 'Teorik + uygulamalı eğitim', 'Silah dersi bulunmaz', 'Sınav süreci EGM takvimine bağlıdır'],
    sections: [
      { title: 'Eğitimin kapsamı', paragraphs: ['Program; özel güvenlik hukuku, kişi hakları, güvenlik tedbirleri, güvenlik sistemleri, ilk yardım, yangın güvenliği, etkili iletişim, kalabalık yönetimi, kişi koruma ve genel kollukla ilişkiler gibi temel dersleri içerir.'] },
      { title: 'Kimler için uygun?', paragraphs: ['Silah taşımayı gerektirmeyen görev alanlarında çalışmak isteyen ve mevzuattaki genel şartları taşıyan adaylar için temel yoldur. Öğrenim ve sağlık koşulları kayıt öncesinde kontrol edilmelidir.'] },
      { title: 'Sonraki adım', paragraphs: ['Eğitim tamamlandıktan sonra ilgili ÖGG sınavına girilir. Başarılı adaylar kimlik kartı başvuru sürecine geçer.'] }
    ],
    source: official('EGM Temel Eğitim Programı', 'temel-egitim'),
    related: related(['Silahlı temel eğitim', '/egitimler/silahli-temel-egitim'], ['Sınav merkezi', '/sinav'], ['Gerekli belgeler', '/ogg-rehberi/gerekli-belgeler'])
  },

  '/egitimler/yenileme-egitimi': {
    eyebrow: 'Yenileme',
    title: 'ÖGG yenileme eğitimi',
    lead: 'Özel güvenlik görevlileri ve yöneticiler için kimlik kartı yenileme sürecinin eğitim ayağı.',
    facts: ['Beş yılda bir yenileme', 'Silahlı: en az 60 ders saati', 'Silahsız: en az 50 ders saati', 'Yenilemede sağlık raporu yeniden istenmez'],
    sections: [
      { title: 'Ne zaman başvurulur?', paragraphs: ['Yenileme eğitimine her zaman başvurulabilir. İşlemlerin süresi düşünülerek kimlik kartının bitiş tarihinden önce planlama yapılması önemlidir. EGM, eğitim kurumlarına kimlik süresinin dolmasına bir yıl kala müracaat edilebileceğini belirtir.'] },
      { title: 'Eğitim içeriği', paragraphs: ['Mevzuat ve kişi hakları, güvenlik tedbirleri, cihazlar, ilk yardım, yangın, iletişim, kalabalık yönetimi, kişi koruma ve genel kollukla ilişkiler güncel içerikle tekrar edilir. Silahlı yenilemede silah bilgisi ve atış dersi bulunur.'] },
      { title: 'Kimlik yenileme', paragraphs: ['Yenileme eğitimi tamamlandıktan sonra sınav ve kimlik kartı işlemleri takip edilir. Yenileme kimlik müracaatında sağlık raporu yeniden alınması gerekmemektedir; güncel evrak listesi başvuru öncesinde resmî kaynaktan kontrol edilmelidir.'] }
    ],
    source: official('EGM Yenileme Eğitimi', 'yenileme-egitimi'),
    related: related(['Kimlik yenileme rehberi', '/ogg-rehberi/kimlik-yenileme'], ['Sınav takvimi', '/sinav/sinav-takvimi'], ['Sınav sonucu', '/sinav/sinav-sonucu'])
  },

  '/egitimler/alan-egitimleri': {
    eyebrow: 'Alan eğitimleri',
    title: 'Göreve göre uzmanlaşma eğitimleri',
    lead: 'Temel ve yenileme eğitimlerinin yanında saha görevine, sorumluluğa ve hizmet türüne göre planlanan tamamlayıcı eğitimler.',
    sections: [
      { title: 'Kadro ve hizmet içi atışları', paragraphs: ['Silahlı görev yapan personelin atış becerisini güncel tutmaya yönelik uygulamalardır. Hizmet içi atışlar ilgili kurum, kuruluş veya şirketin yükümlülükleri kapsamında planlanır.'] },
      { title: 'Yönetim ve koruma', bullets: ['Özel güvenlik yöneticiliği', 'Kişi koruma', 'Kıymet nakli'] },
      { title: 'Tesis ve operasyon güvenliği', bullets: ['Alarm izleme', 'Ulaşım güvenliği', 'Geçici toplu etkinlikler ve spor güvenliği'], paragraphs: ['Bu başlıklarda eğitim içeriği görev alanının risklerine ve operasyon yapısına göre şekillendirilir.'] }
    ],
    source: official('EGM Eğitim Sıkça Sorulan Sorular', 'egitim-sss'),
    related: related(['Eğitim merkezi', '/egitimler'], ['Saha hizmetleri', '/guvenlik-hizmetleri'], ['İletişim', '/iletisim'])
  },

  '/sinav': {
    eyebrow: 'Sınav ve öğrenme merkezi',
    title: 'ÖGG sınav sürecini tek yerde takip edin',
    lead: 'Sınav takvimi, sonuç yönlendirmesi, ders notları ve soru çalışması için sade bir başlangıç noktası.',
    facts: ['2026 takvimi: 6 temel/yenileme sınav dönemi', 'Sonuçlar EGM üzerinden açıklanır', 'Sınav giriş belgesi eğitim kurumu üzerinden takip edilir'],
    sections: [
      { title: 'Sınava hazırlanırken', paragraphs: ['Dersleri yalnız soru ezberine indirgemeden; konu özeti, mevzuat mantığı, geçmiş soru yapıları ve hızlı tekrar üzerinden çalışmak daha sürdürülebilir bir yöntemdir.'] },
      { title: 'Sınav günü ve belge', paragraphs: ['Adayın sınav giriş belgesindeki bilgileri önceden kontrol etmesi ve sınav günü resmî duyuruda belirtilen kimlik/belge şartlarına uyması gerekir. Döneme özel kılavuz ve duyurular EGM tarafından yayımlanır.'] },
      { title: 'Sonuç açıklandığında', paragraphs: ['Sonuç ekranı EGM’nin resmî sayfasından açılır. Yavuz sitesi sonuç verisini kopyalamak yerine adayı doğrudan resmî kaynağa yönlendirir.'] }
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
    sections: [
      { title: 'Takvimi nasıl okuyalım?', paragraphs: ['Eğitim bitiş tarihi, ilgili sınav dönemine yetişecek kurs programının tamamlanması gereken resmî tarihtir. Kayıt ve sınıf planlaması bundan daha önce kapanabilir; kesin kurs başlangıcını kurumdan teyit edin.'] }
    ],
    source: official('EGM 2026 Yılı Sınav Takvimi', '2026-sinav-takvimi'),
    related: related(['Sınav merkezi', '/sinav'], ['Sınav sonucu', '/sinav/sinav-sonucu'], ['Eğitimler', '/egitimler'])
  },

  '/sinav/sinav-sonucu': {
    eyebrow: 'Resmî yönlendirme',
    title: 'ÖGG sınav sonucunu sorgula',
    lead: 'Sınava giren adayları sonuç verisinin yayımlandığı resmî EGM ekranına yönlendiriyoruz.',
    sections: [
      { title: 'Sonuç ekranı', paragraphs: ['Temel eğitim ve yenileme eğitimi sınav sonuçları Emniyet Genel Müdürlüğü Özel Güvenlik Denetleme Başkanlığı tarafından yayımlanır. Sonuç bilgisini üçüncü taraf bir kopyadan değil doğrudan resmî ekrandan kontrol edin.'], action: { label: 'EGM sınav sonuçlarını aç ↗', url: `${EGM}/sinav-sonuclari` } },
      { title: 'Sonuç sonrası', paragraphs: ['Başarı durumuna göre kimlik kartı başvurusu veya sonraki sınav süreci planlanır. Kimlik müracaatında istenen belgeler ve güncel ücretler için EGM’nin güncel listesini esas alın.'] }
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
      { title: 'Arşiv yaklaşımı', paragraphs: ['Yavuz’un eski soru ve ders notu birikimi dönem, sınav numarası ve konu başlığına göre düzenlenecek. Resmî yayımlanan kitapçıklar kaynak olarak ayrıca işaretlenecek.'] }
    ],
    related: related(['Ders notları', '/sinav/ders-notlari'], ['Hızlı deneme', '/sinav/online-deneme'], ['Sınav merkezi', '/sinav'])
  },

  '/sinav/online-deneme': {
    eyebrow: 'Online deneme',
    title: 'Sınav provası ve hızlı tekrar',
    lead: 'Tam deneme, kısa tekrar ve yanlışlara dönüş modlarıyla sınav çalışmasını daha düzenli hale getirecek alan.',
    sections: [
      { title: 'Planlanan çalışma modları', bullets: ['Tam sınav denemesi', '10 soruluk hızlı tekrar', 'Ders bazlı soru çözümü', 'Yanlışlarım', 'Sonuç ve konu dağılımı'] },
      { title: 'Hesap zorunluluğu yok', paragraphs: ['İlk sürümde temel ilerleme ve yanlışlar tarayıcıda tutulabilir. Kullanıcıyı üyelik duvarıyla karşılamadan soru çözmeye başlatmak önceliğimizdir.'] }
    ],
    related: related(['Çıkmış sorular', '/sinav/cikmis-sorular'], ['Ders notları', '/sinav/ders-notlari'])
  },

  '/sinav/ders-notlari': {
    eyebrow: 'Ders notları',
    title: 'ÖGG ders notları',
    lead: 'Uzun metinler yerine sınavda ve sahada işe yarayan ana kavramları ders başlıklarına göre düzenleyen çalışma alanı.',
    sections: [
      { title: 'Temel dersler', bullets: ['Özel güvenlik hukuku ve kişi hakları', 'Güvenlik tedbirleri', 'Güvenlik sistem ve cihazları', 'Temel ilk yardım', 'Yangın güvenliği', 'Etkili iletişim', 'Kalabalık yönetimi', 'Kişi koruma', 'Genel kollukla ilişkiler', 'Silah bilgisi'] },
      { title: 'Kaynak disiplini', paragraphs: ['Mevzuata bağlı notlarda resmî metin esas alınır. Eski arşiv notları güncel düzenlemeyle karşılaştırılmadan “güncel bilgi” olarak sunulmaz.'] }
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
    eyebrow: 'Başlangıç rehberi',
    title: 'Nasıl özel güvenlik görevlisi olunur?',
    lead: 'Başvuru şartlarından eğitime, sınavdan kimlik kartına kadar sürecin sade özeti.',
    steps: [
      ['1', 'Uygunluğu kontrol edin', 'Vatandaşlık, öğrenim, adli durum ve diğer genel şartları kontrol edin.'],
      ['2', 'Sağlık raporunu alın', 'Temel eğitim öncesinde silahlı veya silahsız görev için uygun sağlık raporu sürecini tamamlayın.'],
      ['3', 'Temel eğitime katılın', 'Silahlı veya silahsız programı hedeflediğiniz görev türüne göre seçin.'],
      ['4', 'ÖGG sınavına girin', 'Eğitim kurumunun yönlendirdiği sınav dönemini ve giriş belgesini takip edin.'],
      ['5', 'Kimlik kartına başvurun', 'Başarılı sınav sonrası güncel belge listesiyle e-Devlet veya ilgili birim üzerinden müracaat edin.']
    ],
    sections: [
      { title: 'Genel şartlar', paragraphs: ['5188 sayılı Kanun; vatandaşlık, öğrenim, yaş, adli durum, sağlık, temel eğitim ve güvenlik soruşturmasına ilişkin şartlar öngörür. Silahlı görev için öğrenim şartı silahsıza göre farklıdır. Kesin uygunluk değerlendirmesinde güncel resmî metin esas alınmalıdır.'] }
    ],
    source: official('EGM ÖGG’de Aranacak Şartlar', 'ozel-guvenlik-gorevlilerinde-aranacak-sartlar'),
    related: related(['Silahlı eğitim', '/egitimler/silahli-temel-egitim'], ['Silahsız eğitim', '/egitimler/silahsiz-temel-egitim'], ['Sağlık raporu', '/ogg-rehberi/saglik-raporu'])
  },

  '/ogg-rehberi/gerekli-belgeler': {
    eyebrow: 'Başvuru rehberi',
    title: 'ÖGG kimlik kartı için gerekli belgeler',
    lead: 'Belge listesi işlem türüne ve güncel uygulamaya göre değişebildiği için burada sabit ücret yerine belge mantığını veriyor, güncel tutarları resmî kaynağa bırakıyoruz.',
    sections: [
      { title: 'İlk kimlik kartı müracaatında', bullets: ['İmzalı başvuru/dilekçe bilgileri', 'Öğrenim belgesi veya doğrulanamıyorsa diploma fotokopisi', 'İlgili sağlık raporu', 'Biyometrik fotoğraf', 'Güncel harç ve kimlik kartı ücretine ilişkin belgeler'], paragraphs: ['Başvuru e-Devlet üzerinden veya ilgili İl Emniyet Müdürlüğü Özel Güvenlik birimi üzerinden yürütülebilir.'] },
      { title: 'Ücretleri neden yazmıyoruz?', paragraphs: ['Harç ve kart bedelleri değişebilir. Eski bir rakamın aylar sonra yanlış yönlendirme yapmaması için güncel tutarı EGM’nin resmî belge listesinden kontrol etmenizi öneriyoruz.'] }
    ],
    source: official('EGM Kimlik Kartı Müracaat Belgeleri', 'ozel-guvenlik-kimlik-karti-muracaatinda-istenilen-belgeler'),
    related: related(['Sağlık raporu', '/ogg-rehberi/saglik-raporu'], ['Kimlik yenileme', '/ogg-rehberi/kimlik-yenileme'], ['İletişim', '/iletisim'])
  },

  '/ogg-rehberi/saglik-raporu': {
    eyebrow: 'Sağlık süreci',
    title: 'Özel güvenlik sağlık raporu',
    lead: 'Temel eğitime başlamadan önce adayın hedeflediği silahlı veya silahsız görev türüne uygun sağlık raporunu tamamlaması gerekir.',
    facts: ['Aday sağlık raporu e-Rapor sistemi üzerinden düzenlenir', 'Silahlı ve silahsız karar ibareleri farklıdır', 'Temel eğitim öncesi alınır', 'Yenileme kimlik başvurusunda tekrar istenmez'],
    sections: [
      { title: 'Raporun karar kısmı', paragraphs: ['Sağlık raporunun karar bölümünde ilgili yönetmeliğe uygun olarak silahlı veya silahsız özel güvenlik görevlisi olabileceğine ilişkin kesin karar yer alır.'] },
      { title: 'Neden eğitimden önce?', paragraphs: ['Sağlık uygunluğu kesinleşmeden eğitime başlanması, olumsuz rapor halinde adayın zaman ve ücret kaybetmesine yol açabilir. Bu nedenle sağlık sürecinin kayıt planıyla birlikte yürütülmesi gerekir.'] },
      { title: 'Yenilemede durum', paragraphs: ['EGM’nin eğitim SSS sayfasına göre yenileme eğitiminden sonra kimlik kartı yenileme müracaatında sağlık raporu alınması gerekmemektedir.'] }
    ],
    source: official('EGM Sağlık Şartları Yönetmeliği', 'ozel-guvenlik-gorevlileri-saglik-sartlari-yonetmeligi'),
    related: related(['Nasıl ÖGG olunur?', '/ogg-rehberi/nasil-ogg-olunur'], ['Gerekli belgeler', '/ogg-rehberi/gerekli-belgeler'])
  },

  '/ogg-rehberi/kimlik-yenileme': {
    eyebrow: 'Kimlik yenileme',
    title: 'ÖGG kimlik kartı yenileme süreci',
    lead: 'Kimlik kartı süresi yaklaşırken eğitimi son aya bırakmadan planlayın; yenileme eğitimini, sınavı ve kart müracaatını birbirine bağlı üç adım olarak düşünün.',
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
      { title: 'Eğitim ile saha arasındaki bağ', paragraphs: ['Saha uygulamasını bilen bir eğitim kurumu; mevzuatı, kontrol noktalarını, devriye mantığını ve olay yönetimini yalnız teorik başlık olarak değil operasyonun parçası olarak ele alabilir.'] }
    ],
    related: related(['Fabrika ve sanayi', '/guvenlik-hizmetleri/fabrika-ve-sanayi'], ['Şantiye güvenliği', '/guvenlik-hizmetleri/santiye'], ['Eğitim kurumları', '/guvenlik-hizmetleri/egitim-kurumlari'], ['Enerji tesisleri', '/guvenlik-hizmetleri/enerji-tesisleri'])
  },

  '/guvenlik-hizmetleri/fabrika-ve-sanayi': {
    eyebrow: 'Saha hizmetleri',
    title: 'Fabrika ve sanayi güvenliği',
    lead: 'Personel, ziyaretçi, araç ve yük hareketinin aynı anda yaşandığı üretim tesislerinde güvenliği süreçlere göre planlıyoruz.',
    sections: [
      { title: 'Öncelikli kontrol alanları', bullets: ['Ana giriş ve ziyaretçi kontrolü', 'Araç ve sevkiyat girişleri', 'Üretim ve depo kritik alanları', 'Çevre ve kamera kontrolü', 'Devriye planı'] },
      { title: 'Neden tesis bazlı plan?', paragraphs: ['Vardiya yapısı, kör noktalar, dış çevre, yükleme alanları ve çalışan yoğunluğu her işletmede farklıdır. Güvenlik planı hazır bir şablon yerine saha keşfi üzerinden şekillenmelidir.'] }
    ],
    related: related(['Saha hizmetleri', '/guvenlik-hizmetleri'], ['İletişim', '/iletisim'])
  },

  '/guvenlik-hizmetleri/santiye': {
    eyebrow: 'Saha hizmetleri',
    title: 'Şantiye ve saha güvenliği',
    lead: 'Geniş çevre, değişken giriş noktaları, malzeme ve araç hareketi bulunan çalışma sahaları için kontrollü erişim ve devriye odaklı güvenlik.',
    sections: [
      { title: 'Sahada odaklandığımız noktalar', bullets: ['Çevre ve sınır kontrolü', 'Personel/taşeron giriş takibi', 'Araç ve malzeme hareketi', 'Gece devriyesi ve kritik bölgeler', 'Olay kayıt ve bildirim düzeni'] },
      { title: 'Dinamik saha', paragraphs: ['Şantiyenin fiziki düzeni proje ilerledikçe değişir. Bu nedenle kontrol noktaları ve devriye rotaları da sabit kalmak yerine güncellenebilir olmalıdır.'] }
    ],
    related: related(['Saha hizmetleri', '/guvenlik-hizmetleri'], ['İletişim', '/iletisim'])
  },

  '/guvenlik-hizmetleri/egitim-kurumlari': {
    eyebrow: 'Saha hizmetleri',
    title: 'Eğitim kurumlarında güvenlik',
    lead: 'Öğrenci, personel, veli ve ziyaretçi hareketinin yoğun olduğu alanlarda güvenlik ile günlük yaşamın akışını dengede tutan yaklaşım.',
    sections: [
      { title: 'Kontrol başlıkları', bullets: ['Ana giriş ve ziyaretçi yönetimi', 'Bahçe ve çevre kontrolü', 'Yoğun saatlerde giriş-çıkış düzeni', 'Acil durum ve tahliye planlarına uyum', 'Yetkisiz erişimin önlenmesi'] },
      { title: 'İletişim önemli', paragraphs: ['Eğitim kurumlarında güvenlik yalnız fiziksel kontrol değildir. Öğrenci, veli ve personelle doğru iletişim kurabilen, gerilimi yükseltmeden sınır koyabilen personel yaklaşımı önem taşır.'] }
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
    related: related(['Saha hizmetleri', '/guvenlik-hizmetleri'], ['Alarm izleme ve alan eğitimleri', '/egitimler/alan-egitimleri'])
  },

  '/kurumsal': {
    eyebrow: 'Kurumsal',
    title: 'Yavuz Özel Güvenlik',
    lead: '2006’dan bu yana Akşehir’de özel güvenlik eğitimi, saha hizmeti ve mesleki bilgi birikimini aynı kurum kimliği altında sürdüren yapı.',
    timeline: [['2006', 'Akşehir’de özel güvenlik alanında faaliyet başlangıcı'], ['2018', 'Eğitim ve kurum arşivinde yer alan dönemsel çalışmalar'], ['Bugün', 'Eğitim, saha hizmeti ve ÖGG bilgi merkezi yaklaşımı']],
    sections: [
      { title: 'Ne yapıyoruz?', paragraphs: ['Özel güvenlik temel ve yenileme eğitimleri veriyor, adayları sınav sürecine hazırlıyor, görev alanına yönelik eğitimler düzenliyor ve kurum/işletmelere özel güvenlik hizmeti sunuyoruz.'] },
      { title: 'Dijital arşiv yaklaşımı', paragraphs: ['Eski soru, ders notu, duyuru ve mevzuat birikimini güncel kaynaklarla ayırarak erişilebilir bir bilgi merkezine dönüştürüyoruz.'] }
    ],
    related: related(['Hakkımızda', '/kurumsal/hakkimizda'], ['Referanslar', '/kurumsal/referanslar'], ['İletişim', '/iletisim'])
  },

  '/kurumsal/hakkimizda': {
    eyebrow: 'Hakkımızda',
    title: 'Yerel tecrübe, güncel eğitim, gerçek saha',
    lead: 'Yavuz Özel Güvenlik, Akşehir merkezli yapısında eğitim kurumu ile güvenlik hizmeti tecrübesini birlikte taşır.',
    sections: [
      { title: 'Eğitim', paragraphs: ['Adayı yalnız sınavı geçmeye değil, özel güvenlik mesleğinin hukuki ve operasyonel çerçevesini anlamaya hazırlayan bir eğitim yaklaşımını hedefliyoruz.'] },
      { title: 'Saha', paragraphs: ['Fabrika, çalışma sahası, eğitim kurumu ve enerji tesisi gibi farklı ortamlardaki güvenlik ihtiyaçlarının aynı şablonla çözülemeyeceğini biliyoruz.'] },
      { title: 'Bilgi', paragraphs: ['Resmî kaynakları esas alan rehber, sınav ve ders notu içerikleriyle eski web arşivini daha düzenli ve sürdürülebilir biçimde yeniden kuruyoruz.'] }
    ],
    related: related(['Eğitimler', '/egitimler'], ['Saha hizmetleri', '/guvenlik-hizmetleri'], ['ÖGG rehberi', '/ogg-rehberi'])
  },

  '/kurumsal/referanslar': {
    eyebrow: 'Kurumsal hafıza',
    title: 'Geçmiş saha referanslarından örnekler',
    lead: 'Eski kurum arşivinde yer alan çalışma örneklerini sektör başlıklarıyla koruyoruz. Güncel referans listesi kurum teyidiyle ayrıca yenilenecek.',
    sections: [
      { title: 'Sanayi ve üretim', bullets: ['İzi Süt · Akşehir Organize Sanayi', 'Marmara Tohum Çeltik Tesisleri'] },
      { title: 'Şantiye ve saha', bullets: ['Düzgün İş Makineleri · Ilgın Kömür İşletmeleri'] },
      { title: 'Eğitim kurumları', bullets: ['Akşehir Selçuklu Anadolu Lisesi', 'Akşehir Yıldırım İlkokulu'] },
      { title: 'Enerji', bullets: ['Makasçı Güneş Enerjisi Elektrik Üretim Tesisleri'] }
    ],
    notice: 'Bu bölüm geçmiş web arşivinden taşınan örnekleri gösterir. Yayına geçmeden önce güncel referans kullanım izinleri ve kurum adları yeniden teyit edilmelidir.',
    related: related(['Saha hizmetleri', '/guvenlik-hizmetleri'], ['Hakkımızda', '/kurumsal/hakkimizda'])
  },

  '/kurumsal/galeri': {
    eyebrow: 'Galeri',
    title: 'Eğitim ve saha ortamı',
    lead: 'Bu sayfanın metin ve yapı tarafı hazır. Gerçek Yavuz eğitim, sınıf, uygulama ve saha fotoğrafları geldiğinde yalnız doğrulanmış görseller kullanılacak.',
    sections: [
      { title: 'Görsel ilkesi', paragraphs: ['Stok veya kuruma aitmiş gibi gösterilen yapay fotoğraf kullanmıyoruz. Galeri, gerçek eğitim ortamı ve kurum arşivi geldikten sonra tarih ve bağlam bilgisiyle doldurulacak.'] }
    ],
    related: related(['Hakkımızda', '/kurumsal/hakkimizda'], ['İletişim', '/iletisim'])
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

export const navigation = [
  ['Eğitimler', '/egitimler'],
  ['Sınav merkezi', '/sinav'],
  ['ÖGG rehberi', '/ogg-rehberi'],
  ['Kurumsal', '/kurumsal'],
  ['Hizmetler', '/guvenlik-hizmetleri'],
]

export const normalizePath = value => {
  const path = (value || '/').split('?')[0].split('#')[0]
  if (path === '/index.html') return '/'
  if (path === '/') return '/'
  return path.replace(/\/+$/, '') || '/'
}

export const resolvePage = value => {
  const path = normalizePath(value)
  return sitePages[path] || {
    eyebrow: 'Sayfa bulunamadı',
    title: 'Aradığınız sayfa burada değil.',
    lead: 'Bağlantı değişmiş olabilir. Ana sayfaya veya aşağıdaki temel bölümlerden birine dönebilirsiniz.',
    related: related(['Ana sayfa', '/'], ['Eğitimler', '/egitimler'], ['ÖGG rehberi', '/ogg-rehberi'], ['İletişim', '/iletisim'])
  }
}
