import { useEffect, useState, useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";

const About = () => {
    const animate = useAnimation()
    const faq = [
        {
            id: 'question1',
            question: "Eşimin veya arkadaşımın şirketi üzerinden çalışabilir miyim?",
            answer: "Sadece kendi adınıza açılan şirket ile çalışabilirsiniz."
        },
        {
            id: 'question2',
            question: "Motosiklet marka ve model şartınız var mı?",
            answer: "Hayır marka ve model şartımız yoktur. A sınıfı ehliyete sahipseniz cc sınırlamamız yoktur. B sınıfı ehliyete sahip olanlar için 125cc sınırlamamız vardır."
        },
        {
            id: 'question3',
            question: "Bağkur borcunu siz mi ödüyorsunuz, borç limiti var mı?",
            answer: "Hayır, siz ödüyorsunuz. Bağkur borcu olmayan kuryelere istihdam konusunda öncelik veriyoruz."
        },
        {
            id: 'question4',
            question: "Ekipman desteği var mı?",
            answer: "Hayır yoktur. İşe girişte ücretli şekilde Operasyon Merkezlerimizden temin edebilirsiniz."
        },
        {
            id: 'question5',
            question: "Yan haklarınız var mı?",
            answer: "% 50 Tıkla Gelsin İndirimli yemek hakkı, Özel Sağlık Sigortası ve Logo işbaşı uygulamalarımızı kullanabilirsiniz."
        },
        {
            id: 'question6',
            question: "Ödeme günleri nelerdir?",
            answer: "Ayın 10 ve 25 olmak üzere iki kez ödeme yapılmaktadır."
        },
        {
            id: 'question7',
            question: "Ortalama sipariş sayısı nedir?",
            answer: "Lokasyon ve performans bazlı değişkenlik göstermektedir."
        },
        {
            id: 'question8',
            question: "Lokasyonlardaki kurye sayınız nedir?",
            answer: "Kurye sayıları her lokasyonda şipariş sayısına göre planlanmaktadır."
        },
        {
            id: 'question9',
            question: "Kuryelerin hizmet verdiği bölge sabit midir?",
            answer: "Her kuryemizin bir bölge sorumluluğu bulunmaktadır. Sorumlu olunan bölge içerisindeki tüm restoranlara kuryelerimiz hizmet vermektedir. İhtiyaç veya talebe göre bölge değişikliği yapılabilmektedir."
        },
        {
            id: 'question10',
            question: "Ortalama hakediş bedeli nedir?",
            answer: "Kuryenin çalışma saati ve performansına göre değişiklik göstermektedir."
        },
        {
            id: 'question11',
            question: "Vardiya ve saat seçimi yapılabiliyor mu?",
            answer: "Vardiya planlamaları, planlama ekipleri tarafından sipariş sayısına göre yapılmaktadır. 11:00 ile 05:00 saatleri arasında vardiya yazılmaktadır."
        },
        {
            id: 'question12',
            question: "Vardiyada kılık kıyafet uygulamanız var mı?",
            answer: "İşe girişte teslim edilen yelek ile çalışmak zorunludur. Erkekler için görsel olarak olumsuzluk oluşturmayacak saç sakal kesimleri tercih edilmelidir. Pantolon giyme şartımız bulunmakta olup, eşofman, terlik vb. kurumsallığı bozabilecek kıyafetler yasaktır."
        },
        {
            id: 'question13',
            question: "Özel sağlık sigortası yapılıyor mu?",
            answer: "Evet. Bağkur borcunuz olsun ya da olmasın; %100 Yatarak Tedavi, Kaza durumlarında hastanede yatılan gün için 500₺ destek, Ferdi Kaza poliçe kapsamı, Online Doktor Kontrolü ve Tedavisi, Yılda 1 Kez Check-up ve Diş Tedavisi"
        },
        {
            id: 'question14',
            question: "Part time çalışma seçeneğiniz var mı?",
            answer: "Evet, part time çalışabilirsiniz."
        },
        {
            id: 'question15',
            question: "Haftada kaç gün çalışma zorunluluğu vardır?",
            answer: "Haftada 6 gün çalışma zorunluluğu bulunmaktadır."
        },
        {
            id: 'question16',
            question: "İzin günlerini ben seçebiliyor muyum?",
            answer: "Vardiyanızı planlama ekibimiz haftalık olarak hazırlayıp bölge müdürlerine iletiyor. Hafta içi olmak koşulu ile izin gününüzü bölge müdürünüz ile ayarlayabilirsiniz."
        },
        {
            id: 'question17',
            question: "Motosiklet kiralama hizmetiniz var mı?",
            answer: "Erzurum, Erzincan, Elazığ, Aksaray, Antalya, İzmir, Balıkesir, Bursa, Yalova, Kırşehir, Nevşehir, Konya, Rize, Sivas, Trabzon, Kars."
        },
        {
            id: 'question18',
            question: "E- arşiv ile kesilen faturalardan ödeme alınabiliyor mu?",
            answer: "E-fatura ile çalışmaktayız. E-arşiv ile kesilen fatura ödemeleri 45 gün sonra yapılmaktadır."
        },
        {
            id: 'question19',
            question: "Saat başı ücret ödeme uygulamanız var mı?",
            answer: "Hayır yoktur, paket başı ücret verilmektedir."
        },
        {
            id: 'question20',
            question: "Sipariş garantisi var mı?",
            answer: "Sipariş garantisi bulunmamaktadır. Her personel için en verimli şekilde maksimum sipariş taşımak için planlama yapılmaktadır."
        },
        {
            id: 'question21',
            question: "Pos cihazı almadan çalışmak mümkün mü?",
            answer: "Mümkün, fakat pos cihazı olmadan yalnız online siparişlere gidilebileceği için sipariş sayısı diğer personellere göre az olacaktır."
        },
    ];
       

    useEffect(() => {
        animate()
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="about-us-ctr d-flex justify-content-center flex-column align-items-center">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">

                <div className="page-banner w-100 d-flex justify-content-center align-items-center">
                    <div
                        className="page-container p-0 d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-center" >
                        <div className="page-banner__card" data-animation="slideInRight" >
                            <h1 className="page-banner__card-title mb-4" >
                                Çalışma Şartları Ve Sıkça Sorulan Sorular
                            </h1>

                            <p className="page-banner__card-text mt-3" >
                                Aciklama gelecek
                            </p>

                        </div>

                        <div className="page-banner__image mt-5 mt-lg-0" data-animation="slideInLeft">
                            <img src="./images/career.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="why-us page-container w-100 d-flex flex-column justify-content-start align-items-start">
                    <h3 className="title" data-animation="slideInRight" data-animation-delay="50ms">
                        Çalışma Şartları
                    </h3>
                    <h5 className="subtitle mb-5" data-animation="slideInRight" data-animation-delay="50ms">
                        Çalışma şartlarımız ve avantajlarımızdan bahsedelim.
                    </h5>

                    <div className="w-100 row m-0  col-12 justify-content-between align-items-start">
                        <div className="col-12  p-0 content" data-animation="slideInUp" data-animation-delay="50ms">
                            <p>
                                Haftada 6 gün olacak şekilde minimum 10’ar saatlik vardiyalar halinde çalışıyorsunuz. Restoranlarımızın çalışma saatleri bölgesel olarak değişmektedir. 11:00 ile 05:00 saatleri arasında vardiya yazılmaktadır.
                            </p>
                            <p>
                                Tıkla gelsin uygulaması üzerinden aylık 4000 TL’ye kadar %50 indirimle yemek yiyebilirsiniz.
                            </p>
                            <p>
                                Ödeme süreçlerimiz ise 2 dönem şeklinde yapılır. Sizlerin tarafımıza fatura kesmeniz gerekmektedir. Her ödeme döneminde tarafınıza ne kadar fatura kesmeniz gerektiği bilgisi SMS ile iletilir. Ayın 1’i ile 15’i arasındaki çalışmanızın ödemesi aynı ayın 25inde, 16’sı ile 31 ‘in arasındaki çalışmanızın ödemesi takip eden ayın 10’unda yapılır.
                            </p>
                        </div>

                    </div>
                </div>




                <div className="our-technology  w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container row m-0 w-100 justify-content-start align-items-start">
                        <h3 className="title mb-5" data-animation="zoomIn" data-animation-delay="50ms">
                        <img src="./images/sss2.gif" alt="" /> Fiyuu Esnaf Kurye İşe Girişte Sıkça Sorulan Sorular     
                        </h3>

                      
                   
                        {
                            faq.map(item => (
                                <div key={item.id} className="accordion mt-5" id={`accordionExample${item.id}`}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={`heading${item.id}`}>
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false" aria-controls={`collapse${item.id}`}>
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div id={`collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${item.id}`} data-bs-parent={`#accordionExample${item.id}`}>
                                            <div className="accordion-body">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))      
                        }


                    </div>
                </div>





            </div>
        </div>
    )
}

export default About;