import { useEffect, useState } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { NavLink } from 'react-router-dom';



type NewsItem = {
    content: {
        title: string,
        spot: string,
        topic: string,
        img: string,
       
    },
    slug: string
}

const News = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [news, setNews] = useState<NewsItem[] | null>(null)

    const animate = useAnimation()

    const loadNews = async () => {
        try {
            setLoading(false)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const data = await fetch('https://api.storyblok.com/v2/cdn/stories/?version=draft&token=PU48xeT0YARVgQPLiYGmwAtt')
            const news = await data.json()
            setNews(news.stories)
            localStorage.setItem('news' , JSON.stringify(news.stories));
        } catch (error) {
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
    }, 10);



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
                        <img src={news?.[0].content.img} alt="" />
                    </div>
                    <div data-animation="slideInDown" data-animation-delay="50ms"
                        className="col-12 col-sm-6 new-card-big d-flex flex-column justify-content-start align-items-start">
                   
                        <h5 className="new-card-big__title mb-4">
                            {news?.[0].content.title}
                        </h5>
                        <p className="new-card-big__text mt-3 mb-5">
                            {news?.[0].content.spot}
                        </p>

                        <span className="new-card-big__date mb-5">
                            {news?.[0].content.topic}
                        </span>
                        <NavLink to={`/blog/${news?.[0].slug}/0`}>Daha fazlası</NavLink>
                    </div>
                </div>
                <div className="col-12 col-lg-5 new-mini-cards p-0 mt-5 mt-lg-0 ps-lg-5">
                    {
                        news?.slice(1, 4).map((item: NewsItem , index) => {
                            return (
                                <div key={index} className="nmc-card" data-animation="slideInLeft" data-animation-delay="50ms">
                                  <NavLink to={`/blog/${item?.slug}/${index+1}`}></NavLink>
                                <div className="nmc-card__image">
                                    <img src={item.content.img} alt="" />
                                </div>
                                <div className="nmc-card__content">
                                    <h5 className="nmc-card__content__title mb-1">
                                    {item.content.title}
                                    </h5>
                                    <p className="nmc-card__content__text mt-3 mb-2">
                                    {item.content.spot}
                                    </p>
        
                                    <span className="nmc-card__content__date">
                                    {item.content.topic}
                                    </span>
                                </div>
    
                            </div>
                        )
                        })
                    }
                   
              
                </div>
            </div>
        </div>
    )
}

export default News