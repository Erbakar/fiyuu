import { useEffect } from "react";
import { useAnimation } from "../hooks/useAnimation";

const Contact = () => {
    const animate = useAnimation()

    useEffect(() => {
        animate()
        window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="contact-ctr d-flex justify-content-center flex-column align-items-center">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="page-banner w-100 d-flex justify-content-center align-items-center"  >
                <div 
                    className="page-container p-0 d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-center">
                    <div className="page-banner__card" data-animation="slideInRight">
                        <h1 className="page-banner__card-title mb-4">
                            Bize Ulaşın
                        </h1>

                        <p className="page-banner__card-text mt-3">
                        Türkiye'nin 7 ilinde 9 operasyon merkeziyle sizelere en hızlı ve güvenilir hizmeti vermeye genişleyen ağımızla devam ediyoruz.
                        </p>
                    </div>

                    <div className="page-banner__image mt-5 mt-lg-0" data-animation="slideInLeft">
                        <img src="/images/contact-banner.png" alt=""/>
                    </div>
                </div>
            </div>

            <div className="contact-inner page-container w-100">
                <div className="contact-cards w-100">
                    <div data-animation="zoomIn" data-animation-delay="50ms"
                        className="contact-cards__item d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <h5 className="contact-item-title">
                                İstanbul Merkez Ofis
                            </h5>
                            <p className="contact-item-address">
                                Ayazağa Mahallesi Kemerburgaz Caddesi Vadi İstanbul Park Sitesi, 7A Blok No:7B İç Kapı
                                No:26 Sarıyer/ İstanbul
                            </p>
                            <a className="contact-item-phone mb-2" href="tel:05317637834">
                                0850 220 70 90
                            </a>
                            <a className="contact-item-email mb-3" href="mailto:info@fiyuu.com.tr">
                                info@fiyuu.com.tr
                            </a>
                            <ul className="contact-item-social p-0 m-0 mb-3">
                                <li className="d-flex justify-content-center align-items-center">
                                    <a href="https://www.linkedin.com/company/fiyuu/" target="blank" className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_1079)">
                                                    <path
                                                        d="M6.29176 5.23242C5.65614 5.23242 5.23239 5.76234 5.23239 6.34464C5.23239 6.87456 5.65614 7.35115 6.29176 7.35115C6.98023 7.35115 7.35112 6.87456 7.35112 6.29179C7.35112 5.70902 6.92738 5.23242 6.29176 5.23242Z"
                                                        fill="#495980" />
                                                    <path d="M7.35112 7.8811H5.23239V14.7677H7.35112V7.8811Z"
                                                        fill="#495980" />
                                                    <path
                                                        d="M12.4365 7.9873C11.3243 7.9873 10.6882 8.62292 10.4235 9.04667H10.3707L10.2645 8.14633H8.35764C8.35764 8.72909 8.41049 9.41757 8.41049 10.2122V14.7677H10.5292V11.0068C10.5292 10.795 10.5292 10.636 10.5821 10.4769C10.7411 10.106 11.0058 9.62944 11.5886 9.62944C12.3304 9.62944 12.648 10.2651 12.648 11.1126V14.7677H14.7667V10.8478C14.7667 8.88765 13.7602 7.9873 12.4361 7.9873H12.4365Z"
                                                        fill="#495980" />
                                                    <path
                                                        d="M15.9211 20H4.07891C1.8299 20 0 18.1701 0 15.9211V4.07891C0 1.8299 1.8299 0 4.07891 0H15.9206C18.1696 0 19.9995 1.8299 19.9995 4.07891V15.9206C19.9995 18.1696 18.1696 19.9995 15.9206 19.9995L15.9211 20ZM4.07891 1.11639C2.44558 1.11639 1.11639 2.44512 1.11639 4.07891V15.9206C1.11639 17.554 2.44558 18.8831 4.07891 18.8831H15.9206C17.554 18.8831 18.8831 17.554 18.8831 15.9206V4.07891C18.8831 2.44558 17.554 1.11639 15.9206 1.11639H4.07891Z"
                                                        fill="#495980" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_1079">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span>
                                            Linkedin
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="iframe-area">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6012.23607665877!2d28.977293151029574!3d41.110113085345674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab544c6e5a679%3A0xcf363019242aa31c!2sMeat%20Day%20Vadistanbul!5e0!3m2!1sen!2str!4v1712143662531!5m2!1sen!2str"
                                allowFullScreen loading="lazy"   style={{border: "0"}}
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div data-animation="zoomIn" data-animation-delay="50ms"
                        className="contact-cards__item d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <h5 className="contact-item-title">
                                İstanbul Operasyon Merkezi

                            </h5>
                            <p className="contact-item-address">
                                Seyrantepe Mah. İbrahim Karaoğlanoğlu Cad. No:105F İstanbul Kağıthane
                            </p>
                            <a className="contact-item-phone mb-2" href="tel:05317637834">
                                0850 220 70 90
                            </a>
                            <a className="contact-item-email mb-3" href="mailto:info@fiyuu.com.tr">
                                info@fiyuu.com.tr
                            </a>
                          
                        </div>
                        <div className="iframe-area">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.616579313059!2d28.993182877429838!3d41.0992233713381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab681ba7d9497%3A0xd08e4997d3d69eb1!2zU2V5cmFudGVwZSwgxLBicmFoaW0gS2FyYW_En2xhbm_En2x1IENkLiBObzoxMDUsIDM0NDE4IEvDosSfxLF0aGFuZS_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1712143714364!5m2!1sen!2str"
                                style={{border: "0"}} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div data-animation="zoomIn" data-animation-delay="50ms"
                        className="contact-cards__item d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <h5 className="contact-item-title">
                                Adana Operasyon Merkezi
                            </h5>
                            <p className="contact-item-address">
                                Mimar Semih Rüstem İs Merkezi Atatürk Cad. No:18 A Blok Kat:8-9 Seyhan / Adana
                            </p>
                            <a className="contact-item-phone mb-2" href="tel:05317637834">
                                0850 220 70 90
                            </a>
                            <a className="contact-item-email mb-3" href="mailto:info@fiyuu.com.tr">
                                info@fiyuu.com.tr
                            </a>
                       
                        </div>
                        <div className="iframe-area">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.618742231043!2d35.32279997731495!3d36.995032772192324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f464660e269%3A0x7759d582eae9dd79!2seOfis%20-%20Adana%20Semih%20R%C3%BCstem%20%C4%B0%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1712146282557!5m2!1str!2str" 
                                style={{border: "0"}} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                     </div>
                    <div data-animation="zoomIn" data-animation-delay="50ms"
                        className="contact-cards__item d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <h5 className="contact-item-title">
                                Ankara Operasyon Merkezi
                            </h5>
                            <p className="contact-item-address">
                                Metin Oktay Mah. Hınıs Cad. No:20/A Çankaya / Ankara
                            </p>
                            <a className="contact-item-phone mb-2" href="tel:05317637834">
                                0850 220 70 90
                            </a>
                            <a className="contact-item-email mb-3" href="mailto:info@fiyuu.com.tr">
                                info@fiyuu.com.tr 
                            </a>
                  
                        </div>
                        <div className="iframe-area">
                        <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.4191984271224!2d32.87268217739537!3d39.90963417152578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fb610d8c5f5%3A0xb5534dc48bcffb53!2zTWV0aW4gT2t0YXksIEjEsW7EsXMgQ2QuIE5vOjIwIEQ6YSwgMDY2NzAgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1712146032242!5m2!1str!2str"
                                style={{border: "0"}} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div data-animation="zoomIn" data-animation-delay="50ms"
                        className="contact-cards__item d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <h5 className="contact-item-title">
                                Antalya Operasyon Merkezi
                            </h5>
                            <p className="contact-item-address">
                                Altındağ Mah. 100. Yıl Bulvarı No:12/2 Muratpaşa / Antalya
                            </p>
                            <a className="contact-item-phone mb-2" href="tel:05317637834">
                                0850 220 70 90
                            </a>
                            <a className="contact-item-email mb-3" href="mailto:info@fiyuu.com.tr">
                                info@fiyuu.com.tr
                            </a>
                        </div>
                        <div className="iframe-area">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.9837974274537!2d30.689500977311862!3d36.89073587222134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3901ed70b6647%3A0x214e0a0d2b3b4f4!2zQWx0xLFuZGHEnywgMTAwIFnEsWwgQmx2IE5vOjEyIEQ6MiwgMDcwNTAgTXVyYXRwYcWfYS9BbnRhbHlh!5e0!3m2!1str!2str!4v1712146483673!5m2!1str!2str"
                                style={{border: "0"}} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div data-animation="zoomIn" data-animation-delay="50ms"
                        className="contact-cards__item d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <h5 className="contact-item-title">
                                İzmir Operasyon Merkezi
                            </h5>
                            <p className="contact-item-address">
                                Yunus Emre Mah. Şehit Volkan Koçyiğit Bulvarı Karabağlar / İzmir
                            </p>
                            <a className="contact-item-phone mb-2" href="tel:05317637834">
                                0850 220 70 90
                            </a>
                            <a className="contact-item-email mb-3" href="mailto:info@fiyuu.com.tr">
                                info@fiyuu.com.tr
                            </a>
      
                        </div>
                        <div className="iframe-area">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.754880130569!2d27.12839137735221!3d38.37779157183951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdf23eec8480f%3A0x5eb3775a51abea88!2zWXVudXMgRW1yZSwgxZ5odC4gUGlsb3QgVm9sa2FuIEtvw6d5acSfaXQgQmx2LCBLYXJhYmHEn2xhci_EsHptaXI!5e0!3m2!1str!2str!4v1712146440397!5m2!1str!2str"
                                style={{border: "0"}} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div data-animation="zoomIn" data-animation-delay="50ms"
                        className="contact-cards__item d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <h5 className="contact-item-title">
                                Konya Operasyon Merkezi
                            </h5>
                            <p className="contact-item-address">
                                Selahattin Eyyubi Mah. Beyhekim Cad. No: 89CB Selçuklu / Konya
                            </p>
                            <a className="contact-item-phone mb-2" href="tel:05317637834">
                                0850 220 70 90
                            </a>
                            <a className="contact-item-email mb-3" href="mailto:info@fiyuu.com.tr">
                                info@fiyuu.com.tr
                            </a>

                        </div>
                        <div className="iframe-area">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.40473272707!2d32.48679367734105!3d37.96768297193744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08e87226da83b%3A0x34171b8fed68e93d!2sSelahaddin%20Eyyubi%2C%20Beyhekim%20Cd.%2C%20Sel%C3%A7uklu%2FKonya!5e0!3m2!1str!2str!4v1712146563397!5m2!1str!2str"
                                style={{border: "0"}} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div data-animation="zoomIn" data-animation-delay="50ms"
                        className="contact-cards__item d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <h5 className="contact-item-title">
                                Diyarbakır Operasyon Merkezi
                            </h5>
                            <p className="contact-item-address">
                                Mezopotamya Mah. 329. Sok. A Blok No:21 Kayapınar / Diyarbakır
                            </p>
                            <a className="contact-item-phone mb-2" href="tel:05317637834">
                                0850 220 70 90
                            </a>
                            <a className="contact-item-email mb-3" href="mailto:info@fiyuu.com.tr">
                                info@fiyuu.com.tr
                            </a>
   
                        </div>
                        <div className="iframe-area">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.7997616762236!2d40.15327979485314!3d37.935108099609174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40751e564a054af9%3A0xfb361ccb06054985!2sMezopotamya%2C%20329.%20Sk.%2C%2021070%20Kayap%C4%B1nar%2FDiyarbak%C4%B1r!5e0!3m2!1str!2str!4v1712146610195!5m2!1str!2str"
                                style={{border: "0"}} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact;