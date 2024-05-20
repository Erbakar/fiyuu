import { useParams } from "react-router-dom";
import { useAnimation } from "../hooks/useAnimation";
import { useEffect } from "react";
import { render } from 'storyblok-rich-text-react-renderer';

const BlogDetail = () => {
    const { index } = useParams();
    const animate = useAnimation();

    const newsItem = localStorage.getItem('news')
    let newsDetail = null;

    
    if (newsItem && index) {
        newsDetail = JSON.parse(newsItem)[index]
    } else {
        const loadNews = async () => {
            try {

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                console.log('loading');


                let data = await fetch('https://api.storyblok.com/v2/cdn/stories/?version=draft&token=PU48xeT0YARVgQPLiYGmwAtt')
                const news = await data.json()
                let works = null;


                news.stories.forEach((element: any, idx: any) => {
                    if (element.full_slug.indexOf('haber-ve-blog') < 0) {
                        news.stories.splice(idx, 1)
                        works = element.content.table.tbody;
                    }



                });
                // setNews(news.stories)
                localStorage.setItem('news', JSON.stringify(news.stories));
                localStorage.setItem('works', JSON.stringify(works));
                // after last / in url
                const testIndex = Number(window.location.href.split('/').pop())
                console.log('testIndex', testIndex);
                newsDetail = news.stories[testIndex]

                window.location.reload();
                
                
            } catch (error) {

            }
        }
        useEffect(() => {
            loadNews()
        }, [])
    }
    useEffect(() => {
        animate()
        window.scrollTo(0, 0);
    }, [])
    return (
        newsDetail &&
        <div className="blog-detail-ctr d-flex justify-content-center flex-column align-items-center">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="page-banner-secondary w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container d-flex flex-column justify-content-center align-items-center">
                        <div className="image d-flex justify-content-center align-items-center" data-animation="zoomIn" data-animation-delay="50ms">
                            <img src={newsDetail.content.img} alt="" />
                        </div>
                        <h1 className="title mb-5" data-animation="zoomIn" data-animation-delay="50ms">
                            {newsDetail.content.title}
                        </h1>
                        <p className="sub-info" data-animation="zoomIn" data-animation-delay="50ms">
                            {newsDetail.content.topic}
                        </p>
                    </div>
                </div>

                <div className="blog-inner page-container pt-5 d-flex flex-column justify-content-start align-items-start">
                    <div className="blog-content w-100 d-flex flex-column justify-content-start align-items-start" data-animation="zoomIn" data-animation-delay="50ms">
                        <div className="blog-text">
                            {render(newsDetail.content.content)}
                        </div>


                    </div>
                    <div className="content-bottom ellipse" data-animation="zoomIn" data-animation-delay="50ms">
                        <div className="ellipse"></div>
                        <div className="ellipse"></div>
                        <div className="ellipse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail;