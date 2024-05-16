import { useEffect } from 'react';
import '/public/js/splide.min.js'
import Earnings from '../components/Earnings.js';
import Map from '../components/Map.js';
import News from '../components/News.js';
import { useAnimation } from '../hooks/useAnimation.js';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const animate = useAnimation()

    useEffect(() => {
        animate()
        window.scrollTo(0, 0);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const splideHero = new Splide('.splide-hero', {
            type: "loop",
            perPage: 1,
            gap: 4,
            autoplay: true,
            perMove: 1,
            arrows: false,
            pagination: false,
            interval: 6000,
        });

        splideHero.mount();
    }, [])

    function slideDown() {
        console.log('scroll' , window.innerWidth);
        if (window.innerWidth > 640) {
            window.scrollTo(0, 800);
        }else {
            window.scrollTo(0, 600);
        }
     
    }

    return (
        <div>
            <div className="page-hero d-flex justify-content-center align-items-center">
                <div className="splide h-100 w-100 splide-hero" role="group" aria-label="Splide Basic HTML Example">
                    <div className="splide__track h-100">
                        <ul className="splide__list">
                            <li className="splide__slide ">
                                <div className="hero-image">
                                    <img src="./images/hero.png" alt="" />
                                </div>
                                <div className="hero-content d-flex justify-content-start align-items-start flex-column">
                                    <h1 className="mb-3 hero-title" data-animation="slideInRight" data-animation-delay="50ms">
                                        Kurye olmak istiyorum!
                                    </h1>
                                    <p className="hero-text mb-5" data-animation="slideInRight" data-animation-delay="50ms">
                                        Çalıştığın kadar kazan!
                                    </p>


                   
                                    <NavLink to="/kurye" data-animation="slideInRight"
                                        data-animation-delay="50ms"
                                        className="hero-btn d-flex m-0 justify-content-center align-items-center">
                                        <span className="text-center d-inline-block">
                                            Hemen Başvur
                                        </span>
                                    </NavLink>

                                    <div className="arrow-down d-flex justify-content-center align-items-center" onClick={slideDown}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M15.7348 14.0909C16.1094 14.4968 16.0841 15.1294 15.6783 15.504L12.1783 18.7348C11.7953 19.0884 11.2048 19.0884 10.8218 18.7348L7.32172 15.504C6.9159 15.1294 6.89059 14.4968 7.26519 14.091C7.63979 13.6851 8.27245 13.6598 8.67827 14.0344L10.5 15.716L10.5 6C10.5 5.44772 10.9477 5 11.5 5C12.0523 5 12.5 5.44771 12.5 6L12.5 15.716L14.3217 14.0344C14.7275 13.6598 15.3602 13.6851 15.7348 14.0909Z"
                                                fill="#495980" />
                                        </svg>
                                    </div>
                                </div>
                            </li>
                            <li className="splide__slide">
                                <div className="hero-image">
                                    <img src="./images/hero-blue.png" alt="" />
                                </div>
                                <div className="hero-content d-flex justify-content-start align-items-start flex-column">
                                    <h1 className="mb-3 hero-title">
                                        İş Ortağı Olmak İstiyorum
                                    </h1>
                                    <NavLink  to="https://fiyuu.mi4biz.net/Customer/AnonymousIssueEntry.aspx?BusinessChannelID=MTBNNzFNTmlQMHhPdGg3REtRT2M2Zz090&q=eHFPUWJBODNzTWhwY09VVnpOZmR0TFllcVNiejMvdWJoZ09heHdhOUZiOElCSnBWWkkvRXh1ckJyQzJjTGhjR09XQVRFN01XTDJVNzFFRmIzMWc5Tnc9PQ2&catID=24887" target="blank"
                                        className="hero-btn d-flex m-0 justify-content-center align-items-center">
                                        <span className="text-center d-inline-block">
                                            Hemen Başvur
                                        </span>
                                    </NavLink>

                                    <div className="arrow-down d-flex justify-content-center align-items-center"  onClick={slideDown}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M15.7348 14.0909C16.1094 14.4968 16.0841 15.1294 15.6783 15.504L12.1783 18.7348C11.7953 19.0884 11.2048 19.0884 10.8218 18.7348L7.32172 15.504C6.9159 15.1294 6.89059 14.4968 7.26519 14.091C7.63979 13.6851 8.27245 13.6598 8.67827 14.0344L10.5 15.716L10.5 6C10.5 5.44772 10.9477 5 11.5 5C12.0523 5 12.5 5.44771 12.5 6L12.5 15.716L14.3217 14.0344C14.7275 13.6598 15.3602 13.6851 15.7348 14.0909Z"
                                                fill="#495980" />
                                        </svg>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <Earnings />
            <div className="what-is-fiyuu w-100 d-flex justify-content-center  flex-column align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="194" height="172" viewBox="0 0 194 172" fill="none">
                    <path
                        d="M-122 86C-122 38.5035 -83.4965 0 -36 0L108 0C155.496 0 194 38.5035 194 86C194 133.496 155.496 172 108 172H-36C-83.4965 172 -122 133.496 -122 86Z"
                        fill="url(#paint0_linear_34_1901)" fillOpacity="0.5" />
                    <defs>
                        <linearGradient id="paint0_linear_34_1901" x1="-171.809" y1="-11.4156" x2="78.8661" y2="333.282"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D3DDEC" />
                            <stop offset="1" stopColor="#FFEEDE" />
                        </linearGradient>
                    </defs>
                </svg>
                <div data-animation="slideInRight" data-animation-delay="50ms"
                    className="section-title  page-container w-100 d-flex flex-column justify-content-center align-items-start">
                    <h3>
                        Fiyuu Nedir?
                    </h3>
                </div>
                <div
                    className="page-container d-flex flex-row flex-column flex-xl-row justify-content-center align-items-start justify-content-xl-between ">
                    <div className="left d-flex flex-column justify-content-start align-items-start">

                        <h6 data-animation="slideInRight" data-animation-delay="50ms" className="subtext mb-5">
                            fiyuu, Türkiye’nin en yeni “Hızlı Teslimat” platformudur.
                        </h6>
                        <p data-animation="slideInRight" data-animation-delay="50ms" className="mb-5 page-text">
                            Yoğun şehir ve iş hayatı içerisinde koşuşturan tüketicilerin ihtiyaç duydukları şeyleri, istedikleri
                            zaman, istedikleri yere, zamanında ve güvenilir bir şekilde ulaştırmak isteyen firmalara kurumsal
                            kurye desteği vermek amacı ile kuruldu.
                        </p>
                        <p data-animation="slideInRight" data-animation-delay="800ms" className="mb-5 page-text">
                            Özel olarak seçilerek kurumsal bir eğitim sürecinden geçen fiyuu kuryeleri, tek bir merkezden
                            yönetilen ve sürekli denetlenen yüksek teknolojiye sahip bir sisteme bağlı olarak İhtiyacı olan
                            şirketlere;
                        </p>

                        <div className="cards w-100 p-0 m-0">
                            <div data-animation="slideInRight" data-animation-delay="150ms"
                                className="card-item d-flex justify-content-center align-items-center">
                                <div className="icon d-flex justify-content-center align-items-center me-4">
                                    <img src="./images/what-is-fiyuu-1.png" alt="" />
                                </div>
                                <span>
                                    Esnek ve
                                    Verimli
                                </span>
                            </div>
                            <div data-animation="slideInDown" data-animation-delay="50ms"
                                className="card-item d-flex justify-content-center align-items-center">
                                <div className="icon d-flex justify-content-center align-items-center me-4">
                                    <img src="./images/what-is-fiyuu-2.png" alt="" />
                                </div>
                                <span>
                                    Online
                                    İzlenebilir
                                </span>
                            </div>
                            <div data-animation="slideInUp" data-animation-delay="450ms"
                                className="card-item d-flex justify-content-center align-items-center">
                                <div className="icon d-flex justify-content-center align-items-center me-4">
                                    <img src="./images/what-is-fiyuu-3.png" alt="" />
                                </div>
                                <span>
                                    Hızlı ve Zamanında
                                </span>
                            </div>
                            <div data-animation="slideInLeft" data-animation-delay="50ms"
                                className="card-item d-flex justify-content-center align-items-center">
                                <div className="icon d-flex justify-content-center align-items-center me-4">
                                    <img src="./images/what-is-fiyuu-4.png" alt="" />
                                </div>
                                <span>
                                    Teslimat
                                    Çözümleri
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="right d-flex flex-column justify-content-center align-items-center justify-content-xl-start align-items-xl-start text-center text-xl-start mt-5 mt-xl-0">
                        <h4 className="mb-5" data-animation="slideInDown" data-animation-delay="50ms">
                            İş ortağı olmak istiyorum
                        </h4>
                        <h3 className="mb-4" data-animation="slideInLeft" data-animation-delay="50ms">
                            İş ortağımız olun, avantajlarımızı keşfedin.
                        </h3>

                        <div data-animation="slideInUp" data-animation-delay="50ms"
                            className=" mt-2 w-100 d-flex justify-content-center flex-column align-items-center discover-content">
                            <div className="image w-100 d-flex mb-5 justify-content-center align-items-center">
                                <img src="./images/what-is-fiyuu-right.png" alt="" className="w-100" />
                            </div>

                            <NavLink  to="https://fiyuu.mi4biz.net/Customer/AnonymousIssueEntry.aspx?BusinessChannelID=MTBNNzFNTmlQMHhPdGg3REtRT2M2Zz090&q=eHFPUWJBODNzTWhwY09VVnpOZmR0TFllcVNiejMvdWJoZ09heHdhOUZiOElCSnBWWkkvRXh1ckJyQzJjTGhjR09XQVRFN01XTDJVNzFFRmIzMWc5Tnc9PQ2&catID=24887" target="blank"  className="btn-discover mb-5">
                                <span>
                                    Keşfet
                                </span>
                            </NavLink>
                        </div>

                        <div className="w-100 d-flex justify-content-center align-items-center">
                            <img src="./images/what-is-fiyuu-right-2.png" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>

            <Map />

            <div className="our-profession w-100 d-flex justify-content-center  flex-column align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="194" height="172" viewBox="0 0 194 172" fill="none">
                    <path
                        d="M-122 86C-122 38.5035 -83.4965 0 -36 0L108 0C155.496 0 194 38.5035 194 86C194 133.496 155.496 172 108 172H-36C-83.4965 172 -122 133.496 -122 86Z"
                        fill="url(#paint0_linear_34_1901)" fillOpacity="0.5" />
                    <defs>
                        <linearGradient id="paint0_linear_34_1901" x1="-171.809" y1="-11.4156" x2="78.8661" y2="333.282"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D3DDEC" />
                            <stop offset="1" stopColor="#FFEEDE" />
                        </linearGradient>
                    </defs>
                </svg>
                <div
                    className="section-title mb-5 page-container w-100 d-flex flex-column justify-content-center align-items-start">
                    <h3 data-animation="slideInRight" data-animation-delay="50ms">
                        Uzmanlık Alanlarımız
                    </h3>
                    <span data-animation="slideInRight" data-animation-delay="50ms">
                        Yoğun şehir ve iş hayatı içerisinde koşuşturan tüketicilerin ihtiyaç duydukları şeyleri, istedikleri
                        zaman, istedikleri yere, zamanında ve güvenilir bir şekilde ulaştırmak isteyen firmalara kurumsal kurye
                        desteği vermek amacı ile kuruldu.
                    </span>
                </div>
                <div className="w-100 mt-5 d-flex page-container-secondary ">
                    <div className="content-inner flex-row flex-row justify-content-start align-items-start w-100">
                        <div className="our-profession__content">
                            <div className="our-profession__item" data-animation="zoomIn" data-animation-delay="50ms">
                                <div className="icon d-flex justify-content-center align-items-center me-5">
                                    <img src="./images/our-profession-content-1.png" alt="" />
                                </div>
                                <div className="flex-column justify-content-start align-items-start d-flex">
                                    <h5>
                                        Kurye ve teslimat yönetimi
                                    </h5>
                                    <span>
                                        Kurye uygulamamız ile teslimatlarınızı uçtan uca verimlilik ile yönetilmektedir.
                                    </span>
                                </div>
                            </div>
                            <div className="our-profession__item" data-animation="zoomIn" data-animation-delay="50ms">
                                <div className="icon d-flex justify-content-center align-items-center me-5">
                                    <img src="./images/our-profession-content-2.png" alt="" />
                                </div>
                                <div className="flex-column justify-content-start align-items-start d-flex">
                                    <h5>
                                        Kapıda teslimat
                                    </h5>
                                    <span>
                                        Tüm kuryelerimiz fiyuu pos makinaları ile kredi kartı, yemek kartları ve nakit
                                        tahsilatları
                                        gerçekleştirip, yazarkasa fişi verebilmektedir.
                                    </span>
                                </div>
                            </div>
                            <div className="our-profession__item" data-animation="zoomIn" data-animation-delay="50ms">
                                <div className="icon d-flex justify-content-center align-items-center me-5">
                                    <img src="./images/our-profession-content-3.png" alt="" />
                                </div>
                                <div className="flex-column justify-content-start align-items-start d-flex">
                                    <h5>
                                        Mutabakat
                                    </h5>
                                    <span>
                                        Eğitimli mutabakat ekibimiz tarafından haftalık olarak sizlerle mutabakat
                                        gerçekleştirmektedir.
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="our-profession__img" data-animation="slideInLeft" data-animation-delay="50ms">
                        <img src="./images/our-profession-right.png" alt="" />
                    </div>
                </div>
            </div>
            <News />
        </div>
    )
}

export default Home;