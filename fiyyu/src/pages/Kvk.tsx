import { useEffect } from "react";
import { useAnimation } from "../hooks/useAnimation";

const Kvk = () => {
    const animate = useAnimation()

    useEffect(() => {
        animate()
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="d-flex justify-content-center page-ctr flex-column align-items-center">
        <div className="w-100 page-container flex-column justify-content-center align-items-center">
            <h1 className="page-title mb-5">
                Kişisel Verilerin Korunması
            </h1>
            <div className="page-content-card mt-5">
                <h5 className="mb-5">
                    ATA EXPRESS ELEKTRONİK İLETİŞİM TANITIM PAZARLAMA DAĞITIM SANAYİ VE TİCARET A.Ş. MÜŞTERİ KİŞİSEL
                    VERİLERİN KORUNMASI VE İŞLENMESİ AYDINLATMA METNİ
                </h5>
                <p className="mb-0">
                    <strong>
                        a) Veri Sorumlusu ve Temsilcisi
                    </strong>
                </p>
                <p className="mb-4">
                    6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca, kişisel verileriniz; veri
                    sorumlusu olarak Ata Express Elektronik İletişim Tanıtım Pazarlama Dağıtım Sanayi ve Ticaret Anonim
                    Şirketi (“Ata Express” veya “Şirket”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                </p>
                <p className="mb-4">
                    Kişisel verilerinizin Şirketimiz tarafından işlenme amaçları konusunda detaylı bilgilere;
                    www.fiyuu.com.tr adresinden kamuoyu ile paylaşılmış olan Ata Express Elektronik İletişim Tanıtım
                    Pazarlama Dağıtım Sanayi ve Ticaret Anonim Şirketi Kişisel Verilerin Korunması ve İşlenmesi
                    Politikasından ulaşabilirsiniz.
                </p>
                <p className="mb-0">
                    <strong>
                        b) Kişisel Verilerin Hangi Amaçla İşleneceği
                    </strong>
                </p>
                <p className="mb-0">
                    Toplanan kişisel verileriniz; Şirketimizin ürün ve hizmetlerinden yararlanmanız kapsamında;
                </p>
                <ul>
                    <li>
                        Şirketimiz tarafından yürütülen ticari faaliyetlerin gerçekleştirilmesi için ilgili iş
                        birimlerimiz tarafından gerekli çalışmaların yapılması ve buna bağlı iş süreçlerinin
                        yürütülmesi;

                    </li>
                    <li>
                        Ürün ve hizmetlerden sizlerin faydalandırması için gerekli çalışmaların iş birimlerimiz
                        tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi;

                    </li>
                    <li> Ürün ve hizmetlerin sizlerin beğeni, kullanım alışkanlıklarınız ve ihtiyaçlarınıza göre
                        özelleştirilerek sizlere önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması
                        ve icrası;
                    </li>
                </ul>
                <p className="mb-4">
                    amaçlarıyla (“Amaçlar”) Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve
                    amaçları dahilinde işlenecektir
                </p>

                <p className="mb-0">
                    <strong>
                        c) İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
                    </strong>
                </p>
                <p className="mb-4">
                    Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda;
                    tedarikçilerimize, kanunen yetkili kamu kurumlarına ve kanunen yetkili özel kişilere Kanun’un 8. ve
                    9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
                </p>
                <p className="mb-0">
                    <strong>
                        ç) Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
                    </strong>
                </p>
                <p className="mb-4">
                    Kişisel verileriniz, Şirketimizin ürün ve hizmetlerinden yararlanmanız kapsamında Şirketimiz
                    tarafından [___] elektronik ortamda, fiyuu internet sitesi ve mobil uygulaması üzerinden bizimle
                    temas kurduğunuz kanal yoluyla sözleşmenin ifası hukuki sebebine dayalı olarak ürün ve hizmetlerden
                    sizlerin faydalanmasını sağlanması ve açık rıza vermeniz halinde ürün ve hizmetlerimizin beğeni ve
                    kullanım alışkanlıklarınıza göre özelleştirilerek size sunulması amacıyla toplanmaktadır.
                </p>
                <p className="mb-0">
                    <strong>
                        d) Kişisel Veri Sahibinin Kanun’un 11. maddesinde Sayılan Hakları
                    </strong>
                </p>
                <p className="mb-0">
                    Kişisel veri sahibi olarak Kanun’un 11. maddesi uyarınca aşağıdaki haklara sahip olduğunuzu
                    bildiririz:
                </p>
                <ul>
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                    <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                    <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını
                        öğrenme,</li>
                    <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
                    <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme
                        ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini
                        isteme,</li>
                    <li>Kanun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini
                        gerektiren sebeplerin ortadan kalkması halinde kişisel verilerinizin silinmesini veya yok
                        edilmesini isteme ve bu kapsamda ve kişisel verilerinizin eksik veya yanlış işlenmiş olması
                        halinde yapılan işlemlerin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini
                        isteme,</li>
                    <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle
                        kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
                    <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın
                        giderilmesini talep etme.</li>

                </ul>
                <p className="mb-0">
                    Yukarıda sıralanan haklarınıza yönelik başvurularınızı, www.fiyuu.com.tr adresinden ulaşabileceğiniz
                    Veri Sahibi Başvuru Formu’nu doldurarak Şirketimize iletebilirsiniz. Talebinizin niteliğine göre en
                    kısa sürede ve en geç otuz gün içinde başvurularınız ücretsiz olarak sonuçlandırılacaktır; ancak
                    işlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarafından
                    belirlenecek tarifeye göre tarafınızdan ücret talep edilebilecektir.
                </p>
            </div>
        </div>
    </div>
    )
}

export default Kvk;