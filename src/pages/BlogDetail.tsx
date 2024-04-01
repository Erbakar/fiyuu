import { useParams } from "react-router-dom";
import { useAnimation } from "../hooks/useAnimation";
import { useEffect } from "react";
import { render } from 'storyblok-rich-text-react-renderer';

const BlogDetail = () => {
    const { index } = useParams();
    const animate = useAnimation()
    const news = localStorage.getItem('news')
    let data = null;
    if (news && index) {
        data  = JSON.parse(news)[index]; 
    }
    useEffect(() => {
        animate()
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="blog-detail-ctr d-flex justify-content-center flex-column align-items-center">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="page-banner-secondary w-100 d-flex justify-content-center align-items-center">
                <div className="page-container d-flex flex-column justify-content-center align-items-center">
                    <div className="image d-flex justify-content-center align-items-center" data-animation="zoomIn" data-animation-delay="50ms">
                        <img src={data.content.img} alt=""/>
                    </div>
                    <h1 className="title mb-5"data-animation="zoomIn" data-animation-delay="50ms">
                    {data.content.title}
                    </h1>
                    <p className="sub-info"data-animation="zoomIn" data-animation-delay="50ms">
                    {data.content.topic}
                    </p>
                </div>
            </div>

            <div className="blog-inner page-container pt-5 d-flex flex-column justify-content-start align-items-start">
                <div className="blog-content w-100 d-flex flex-column justify-content-start align-items-start" data-animation="zoomIn" data-animation-delay="50ms">
                    <div className="blog-text">
                        {render(data.content.content)}
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