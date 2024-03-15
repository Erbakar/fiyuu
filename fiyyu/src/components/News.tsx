import { useEffect, useState } from 'react';
import { useAnimation } from '../hooks/useAnimation';



type NewsItem = {
    id: number,
    title: string
}

const News = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [news, setNews] = useState<NewsItem[] | null>(null)

    const animate = useAnimation()

    const loadNews = async () => {
        try {
            setTimeout(() => {
                setLoading(false)

                setNews([
                    {
                        id: 1,
                        title: 'test',
                    }
                ])
            }, 3000)
            // const data = await fetch('blabla')

            // setNews(data)

        } catch(error) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        loadNews()
    }, [])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return (
            <div>Error....</div>
        )
    }

    setTimeout(() => {
        animate()
    }, 100)

    return (
        <div className="fiyuu-news w-100 d-flex justify-content-center  flex-column align-items-center">
        <svg className="filled" xmlns="http://www.w3.org/2000/svg" width="194" height="172" viewBox="0 0 194 172"
            fill="none">
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
            className="section-title mb-5 page-container w-100 d-flex flex-column justify-content-center align-items-start">
            <h3>
                Fiyuu’dan Haberler
            </h3>
        </div>
        <div className="page-container row m-0 p-0 align-items-stretch">
            <div className="col-12 col-lg-7 row p-0 m-0">
                <div data-animation="slideInUp" data-animation-delay="50ms"
                    className="col-12 col-sm-6 new-card-big-image p-0 pe-sm-4 mb-5 mb-sm-0">
                    <img src="./images/new-card-image.png" alt=""/>
                </div>
                <div data-animation="slideInDown" data-animation-delay="50ms"
                    className="col-12 col-sm-6 new-card-big d-flex flex-column justify-content-start align-items-start">
                    <div className="saved-icon d-flex justify-content-end align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M13.7136 1.71419C13.7136 1.25708 13.5307 0.822813 13.2107 0.50283C12.8907 0.182847 12.4508 0 11.9994 0H1.71419C1.25708 0 0.822813 0.182847 0.50283 0.50283C0.182847 0.822813 0 1.26279 0 1.71419V15.4277C0 15.6277 0.108566 15.8163 0.279985 15.9192C0.451405 16.022 0.668536 16.0277 0.845669 15.9306L6.85678 12.6508L12.8679 15.9306C13.045 16.0277 13.2622 16.022 13.4336 15.9192C13.605 15.8163 13.7136 15.6277 13.7136 15.4277V1.71419Z"
                                fill="#495980" />
                        </svg>
                    </div>
                    <h5 className="new-card-big__title mb-4">
                        Fiyuu'dan bir ilk "Kurye Akademisi"
                    </h5>
                    <p className="new-card-big__text mt-3 mb-5">
                        Hızlı sipariş teslimatı alanında hizmet veren Fiyuu, kuryelerin eğitimine ve gelişimine katkı
                        sunmak adına bir ilki daha gerçekleştirerek ‘Kurye Akademisi’ni kurdu. Kuryelere bir gün teorik,
                        bir gün pratik olmak üzere iki günlük bir eğitim programı başlatan şirketimiz, akademideki ilk
                        oturumunu 50 Fiyuu çalışanıyla tamamladı.
                    </p>

                    <span className="new-card-big__date mb-5">
                        2 saat önce
                    </span>

                    <a href="./blog.html">
                        Daha fazlası 
                    </a>
                </div>
            </div>
            <div className="col-12 col-lg-5 new-mini-cards p-0 mt-5 mt-lg-0 ps-lg-5">
                <div className="nmc-card" data-animation="slideInLeft" data-animation-delay="50ms">
                    <a href="./blog-detail.html"></a>
                    <div className="nmc-card__image">
                        <img src="./images/new-mini-1.png" alt=""/>
                    </div>
                    <div className="nmc-card__content">
                        <h5 className="nmc-card__content__title mb-1">
                            Fiyuu'dan bir ilk "Kurye Akademisi"
                        </h5>
                        <p className="nmc-card__content__text mt-3 mb-2">
                            Hızlı sipariş teslimatı alanında hizmet veren Fiyuu, kuryelerin eğitimine ve gelişimine
                            katkı
                            sunmak adına bir ilki daha gerçekleştirerek ‘Kurye Akademisi’ni kurdu. Kuryelere bir gün
                            teorik,
                            bir gün pratik olmak üzere iki günlük bir eğitim programı başlatan şirketimiz,
                            akademideki
                            ilk
                            oturumunu 50 Fiyuu çalışanıyla tamamladı.
                        </p>

                        <span className="nmc-card__content__date">
                            2 saat önce
                        </span>
                    </div>
                    <div className="saved-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M13.7136 1.71419C13.7136 1.25708 13.5307 0.822813 13.2107 0.50283C12.8907 0.182847 12.4508 0 11.9994 0H1.71419C1.25708 0 0.822813 0.182847 0.50283 0.50283C0.182847 0.822813 0 1.26279 0 1.71419V15.4277C0 15.6277 0.108566 15.8163 0.279985 15.9192C0.451405 16.022 0.668536 16.0277 0.845669 15.9306L6.85678 12.6508L12.8679 15.9306C13.045 16.0277 13.2622 16.022 13.4336 15.9192C13.605 15.8163 13.7136 15.6277 13.7136 15.4277V1.71419Z"
                                fill="#495980" />
                        </svg>
                    </div>
                </div>
                <div className="nmc-card" data-animation="slideInLeft" data-animation-delay="50ms">
                    <a href="./blog-detail.html"></a>
                    <div className="nmc-card__image">
                        <img src="./images/new-mini-2.png" alt=""/>
                    </div>
                    <div className="nmc-card__content">
                        <h5 className="nmc-card__content__title mb-1">
                            Fiyuu'dan bir ilk "Kurye Akademisi"
                        </h5>
                        <p className="nmc-card__content__text mt-3 mb-2">
                            Hızlı sipariş teslimatı alanında hizmet veren Fiyuu, kuryelerin eğitimine ve gelişimine
                            katkı
                            sunmak adına bir ilki daha gerçekleştirerek ‘Kurye Akademisi’ni kurdu. Kuryelere bir gün
                            teorik,
                            bir gün pratik olmak üzere iki günlük bir eğitim programı başlatan şirketimiz,
                            akademideki
                            ilk
                            oturumunu 50 Fiyuu çalışanıyla tamamladı.
                        </p>

                        <span className="nmc-card__content__date">
                            2 saat önce
                        </span>
                    </div>
                    <div className="saved-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path
                                d="M0.604231 15.4917L0.603298 15.4922C0.583653 15.5029 0.555956 15.5028 0.535282 15.4904C0.511854 15.4763 0.498047 15.4491 0.498047 15.4277V1.71419C0.498047 1.39602 0.627775 1.08304 0.854431 0.856384C1.08172 0.629099 1.38924 0.5 1.71224 0.5H11.9974C12.3156 0.5 12.6286 0.629728 12.8552 0.856384C13.0825 1.08367 13.2116 1.39119 13.2116 1.71419V15.4277C13.2116 15.4491 13.1978 15.4763 13.1744 15.4904C13.1537 15.5028 13.126 15.5029 13.1064 15.4922L13.1054 15.4917L7.09431 12.2118L6.85482 12.0812L6.61534 12.2118L0.604231 15.4917Z"
                                stroke="#495980" />
                        </svg>
                    </div>
                </div>
                <div className="nmc-card" data-animation="slideInLeft" data-animation-delay="50ms">
                    <a href="./blog-detail.html"></a>
                    <div className="nmc-card__image">
                        <img src="./images/new-mini-3.png" alt=""/>
                    </div>
                    <div className="nmc-card__content">
                        <h5 className="nmc-card__content__title mb-1">
                            Fiyuu'dan bir ilk "Kurye Akademisi"
                        </h5>
                        <p className="nmc-card__content__text mt-3 mb-2">
                            Hızlı sipariş teslimatı alanında hizmet veren Fiyuu, kuryelerin eğitimine ve gelişimine
                            katkı
                            sunmak adına bir ilki daha gerçekleştirerek ‘Kurye Akademisi’ni kurdu. Kuryelere bir gün
                            teorik,
                            bir gün pratik olmak üzere iki günlük bir eğitim programı başlatan şirketimiz,
                            akademideki
                            ilk
                            oturumunu 50 Fiyuu çalışanıyla tamamladı.
                        </p>

                        <span className="nmc-card__content__date">
                            2 saat önce
                        </span>
                    </div>
                    <div className="saved-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path
                                d="M0.604231 15.4917L0.603298 15.4922C0.583653 15.5029 0.555956 15.5028 0.535282 15.4904C0.511854 15.4763 0.498047 15.4491 0.498047 15.4277V1.71419C0.498047 1.39602 0.627775 1.08304 0.854431 0.856384C1.08172 0.629099 1.38924 0.5 1.71224 0.5H11.9974C12.3156 0.5 12.6286 0.629728 12.8552 0.856384C13.0825 1.08367 13.2116 1.39119 13.2116 1.71419V15.4277C13.2116 15.4491 13.1978 15.4763 13.1744 15.4904C13.1537 15.5028 13.126 15.5029 13.1064 15.4922L13.1054 15.4917L7.09431 12.2118L6.85482 12.0812L6.61534 12.2118L0.604231 15.4917Z"
                                stroke="#495980" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default News