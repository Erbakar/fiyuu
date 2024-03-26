

import { useEffect } from "react";
import { useAnimation } from "../hooks/useAnimation";

const Aydinlatma = () => {
    const animate = useAnimation()

    useEffect(() => {
        animate()
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="about-us-ctr d-flex justify-content-center flex-column align-items-center">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="why-us page-container w-100 d-flex flex-column justify-content-start align-items-start">
                <h3 className="title" data-animation="slideInRight" data-animation-delay="50ms">
                    Aydınlanma Metni
                </h3>

                <div className="w-100 row m-0  mt-lg-5  justify-content-between align-items-start">
                    <div className="col-12 p-0 content" data-animation="slideInUp" data-animation-delay="50ms">
                        <p>
                            Yoğun şehir ve iş hayatı içerisinde koşuşturan tüketicilerin ihtiyaç duydukları şeyleri,
                            istedikleri zaman, istedikleri yere, zamanında ve güvenilir bir şekilde ulaştırmak isteyen
                            firmalara kurumsal kurye desteği vermek amacı ile kuruldu.
                        </p>
                        <p>
                            Özel olarak seçilerek kurumsal bir eğitim sürecinden geçen fiyuu kuryeleri, tek bir
                            merkezden yönetilen ve sürekli denetlenen yüksek teknolojiye sahip bir sisteme bağlı olarak
                            İhtiyacı olan şirketlere;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Aydinlatma;