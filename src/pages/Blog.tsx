
import { NavLink } from "react-router-dom";
import { useAnimation } from "../hooks/useAnimation";
import { useEffect, useState } from "react";
type NewsItem = {
    content: {
        title: string,
        spot: string,
        topic: string,
        img: string,

    },
    slug: string
}
const Blog = () => {
    const animate = useAnimation()
    const [news, setNews] = useState<NewsItem[] | null>(null)

    useEffect(() => {
        setTimeout(() => {
            animate()
            window.scrollTo(0, 0);
        }, 100);

        const cachedVal = localStorage.getItem('news')

        if (cachedVal) {
            setNews(JSON.parse(cachedVal))
        } else {
            // ...
        }

    }, [])
    return (
        <div className="blog-ctr d-flex justify-content-center flex-column align-items-center">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="page-banner w-100 d-flex justify-content-center align-items-center">
                    <div
                        className="page-container p-0 d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-center">
                        <div className="page-banner__card" data-animation="slideInRight">
                            <h1 className="page-banner__card-title mb-4">
                                Fiyuu’dan Haberler
                            </h1>

                            <p className="page-banner__card-text mt-3" >
                                En son haber ve duyurularımıza ulaşmak için bizi yakından takip edin.
                            </p>
                        </div>

                        <div className="page-banner__image mt-5 mt-lg-0">
                            <img src="/images/blog-banner.png" alt="" data-animation="slideInLeft" />
                        </div>
                    </div>
                </div>
                <div className="blog-inner page-container">
                    <div className="blog-cards">
                        {
                            news?.map((item, index) => {
                                return (


                                    <div key={index} data-animation="zoomIn" data-animation-delay="50ms"
                                        className="blog-cards__item d-flex flex-column justify-content-between align-items-start">
                                        <div className="d-flex flex-column justify-content-start align-items-start">
                                            <div className="blog-card-image d-flex justify-content-center align-items-center">
                                                <img src={item.content.img} alt="" />
                                            </div>
                                            <h4 className="blog-card-title">
                                                {item.content.title}
                                            </h4>
                                            <span className="blog-card-date">
                                            {item.content.topic}
                                            </span>
                                            <p className="blog-card-description">
                                            {item.content.spot}
                                            </p>
                                        </div>
                                        <NavLink to={`/blog/${item.slug}/${index}`} className="show-more">Daha fazlası</NavLink>
                                    </div>


                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;