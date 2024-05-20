import { useEffect } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { NavLink } from "react-router-dom";

const Career = () => {
    const animate = useAnimation()

 

        const cachedVal = localStorage.getItem('works')
        // console.log(cachedVal);
        let works = null;
        if (cachedVal) {
            works = JSON.parse(cachedVal)
            console.log(works);
        } else {
            const loadNews = async () => {
                try {
                    console.log('loading');
               
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                   
    
    
                    let data = await fetch('https://api.storyblok.com/v2/cdn/stories/?version=draft&token=PU48xeT0YARVgQPLiYGmwAtt')
                    const news = await data.json()
                    let works2 = null;
    
    
                    news.stories.forEach((element: any, idx: any) => {
                        if (element.full_slug.indexOf('haber-ve-blog') < 0) {
                            news.stories.splice(idx, 1)
                            works2 = element.content.table.tbody;
                        }
                    });

                    localStorage.setItem('news', JSON.stringify(news.stories));
                    localStorage.setItem('works', JSON.stringify(works2));
                    works = works2;
                     console.log('works 2', works);
                    window.location.reload();
                    
                    
                } catch (error) {
    
                }
            }
            useEffect(() => {
                loadNews()
            }, [])
        }
        useEffect(() => {

            setTimeout(() => {
                animate()
                window.scrollTo(0, 0);
            }, 100);
        }, [])

    return (
        works &&
        <div className="career-ctr d-flex justify-content-center flex-column align-items-center">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="page-banner w-100 d-flex justify-content-center align-items-center">
                    <div
                        className="page-container p-0 d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-center">
                        <div className="page-banner__card">
                            <h1 className="page-banner__card-title mb-4" data-animation="slideInDown"
                                data-animation-delay="50ms">
                                Kariyer
                            </h1>

                            <p className="page-banner__card-text mt-3" data-animation="slideInUp" data-animation-delay="50ms">
                            Siz de ekibimizin bir parçası olun! 
                            </p>
                        </div>

                        <div className="page-banner__image mt-5 mt-lg-0" data-animation="slideInLeft"
                            data-animation-delay="50ms">
                            <img src="./images/career.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="career-content d-flex justify-content-center align-items-center">
                    <div className="page-container w-100 d-flex justify-content-center align-items-center flex-column">
                        <div className="career-content__text" data-animation="fadeIn" data-animation-delay="50ms">
                            <p>
                                Modern insan kaynakları yaklaşımımızla; hedeflerimiz doğrultusunda fayda sağlayacak çalışma
                                sistemleri yaratarak,
                                çalışanlarımızın yeteneklerini ortaya çıkarmanın ve <strong>fiyuu’lu</strong> olmaktan gurur
                                duymalarını
                                sağlamanın önemine inanıyoruz.
                            </p>
                            <p>
                                Başarmaya istekli, performansını ortaya koyabilen ve daha fazla sorumluluğu taşıyabileceğine
                                inanan herkesi, ekibimizin bir parçası olmaya davet ediyoruz!
                            </p>
                            <ul className="d-flex flex-column justify-content-start align-items-start">
                                <li>
                                    Takımlar, hizmet zincirimizin bütününü oluştururlar. Kendi içlerinde olduğu gibi
                                    aralarında da yardımlaşma ve bilgi akışının sağlıklı olması temel hedeflerimizdendir.
                                    Takımların yarattığı sonuçların, çoğunlukla bireysel sonuçların toplamından daha
                                    başarılı olduğuna inanırız.
                                </li>
                                <li>
                                    Müşterilerimizin menfaatleri her zaman ön plandadır. Başarı, onlara verdiğimiz iyi
                                    hizmet sonucunda gelir. Müşterilerimize karşı her zaman açık, kesin ve şeffaf
                                    davranırız. Amacımız müşterilerimize her zaman beklentilerinin üzerinde servis
                                    sunabilmektir. İş yoğunluğumuzun servis standardımızı düşürmesine asla izin veremeyiz.
                                    Bizim için en önemlisi, müşterilerimizle uzun vadeli ilişkiler kurmaktır.
                                </li>
                            </ul>
                        </div>
                        <div className="career-content__card">
                            <h2 className="text-center title" data-animation="slideInUp" data-animation-delay="50ms">
                            Siz de ekibimizin bir parçası olun! 
                            </h2>
                            <p className="text-center subtext" data-animation="slideInUp" data-animation-delay="50ms">
                            Açık pozisyon ve detaylara aşağıdaki listemizden ulaşabilirsiniz.
                            </p>

                            <div className="career-cards d-flex justify-content-start align-items-start w-100 flex-column">
                                <div className="career-cards__title d-flex row m-0 w-100" data-animation="fadeIn"
                                    data-animation-delay="50ms">
                                    <span className="col-3 p-0 px-3">Açık Pozisyonlar</span>
                                    <span className="col-3 p-0 px-3">Departman</span>
                                    <span className="col-3 p-0 px-3">Bölge</span>
                                    <span className="col-3 p-0 px-3">Başvuru Linki</span>
                                </div>

                                {
                                    works?.map((item: any, index :number) => {
                                        return (


                                            <div key={index} className="career-cards__item row mx-0 w-100 ">
                                                <div className="col-3 p-0 px-3 d-flex flex-column justify-content-start align-items-start">
                                                    <h5>
                                                        {item?.body[0].value}
                                                    </h5>
                                                    <span>
                                                        {item?.body[1].value}
                                                    </span>
                                                </div>
                                                <span className="col-3 p-0 px-3">
                                                    {item?.body[2].value}
                                                </span>
                                                <span className="col-3 p-0 px-3">
                                                    {item?.body[3].value}
                                                </span>
                                                <NavLink to={item?.body[4].value} target="blank" className="col-3 p-0 px-3">
                                                    {item?.body[5].value}
                                                </NavLink>
                                            </div>


                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career;