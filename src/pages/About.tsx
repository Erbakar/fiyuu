import { useEffect } from "react";
import { useAnimation } from "../hooks/useAnimation";

const About = () => {
    const animate = useAnimation()

    useEffect(() => {
        animate()
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="about-us-ctr d-flex justify-content-center flex-column align-items-center">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
    
                <div className="page-banner w-100 d-flex justify-content-center align-items-center">
                    <div
                        className="page-container p-0 d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-center" >
                        <div className="page-banner__card"  data-animation="slideInRight" >
                            <h1 className="page-banner__card-title mb-4" >
                                Hakkımızda
                            </h1>
    
                            <p className="page-banner__card-text mt-3" >
                            Türkiye’de 2016 yılında ilk siparişini taşıyan fiyuu, kendisini “yeni nesil bir son teslimat platformu” olarak tanımlamakta olup, müşterilerine en iyi “uçtan uca teslimat” deneyimini sunma amacıyla yola çıktı.
                            </p>
                        </div>
    
                        <div className="page-banner__image mt-5 mt-lg-0" data-animation="slideInLeft">
                            <img src="./images/hakkimizda.png" alt="" />
                        </div>
                    </div>
                </div>
    
                <div className="why-us page-container w-100 d-flex flex-column justify-content-start align-items-start">
                    <h3 className="title" data-animation="slideInRight" data-animation-delay="50ms">
                        Nedir bu Fiyuu?
                    </h3>
                    <h5 className="subtitle mb-5" data-animation="slideInRight" data-animation-delay="50ms">
                        fiyuu, Türkiye’nin en yeni “Hızlı Teslimat” platformudur.
                    </h5>
    
                    <div className="w-100 row m-0  mt-lg-5  justify-content-between align-items-start">
                        <div className="col-12 col-lg-4 p-0 content" data-animation="slideInUp" data-animation-delay="50ms">
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
                        <div className="col-12 col-lg-7 p-0">
                            <div className="cards w-100 p-0 m-0">
                                <div className="card-item d-flex justify-content-center align-items-center"
                                    data-animation="slideInRight" data-animation-delay="50ms">
                                    <div className="icon d-flex justify-content-center align-items-center me-4">
                                        <img src="./images/what-is-fiyuu-1.png" alt="" />
                                    </div>
                                    <div className="d-flex flex-column justify-content-start align-items-start">
                                        <span>
                                            Esnek ve
                                            Verimli
                                        </span>
                                      
                                    </div>
                                </div>
                                <div className="card-item d-flex justify-content-center align-items-center"
                                    data-animation="slideInDown" data-animation-delay="50ms">
                                    <div className="icon d-flex justify-content-center align-items-center me-4">
                                        <img src="./images/what-is-fiyuu-2.png" alt="" />
                                    </div>
                                    <div className="d-flex flex-column justify-content-start align-items-start">
                                        <span>
                                            Online
                                            İzlenebilir
                                        </span>
                                 
                                    </div>
                                </div>
                                <div className="card-item d-flex justify-content-center align-items-center"
                                    data-animation="slideInUp" data-animation-delay="50ms">
                                    <div className="icon d-flex justify-content-center align-items-center me-4">
                                        <img src="./images/what-is-fiyuu-3.png" alt="" />
                                    </div>
                                    <div className="d-flex flex-column justify-content-start align-items-start">
                                        <span>
                                            Hızlı ve
                                            Zamanında
                                        </span>
                                    
                                    </div>
                                </div>
                                <div className="card-item d-flex justify-content-center align-items-center"
                                    data-animation="slideInLeft" data-animation-delay="50ms">
                                    <div className="icon d-flex justify-content-center align-items-center me-4">
                                        <img src="./images/what-is-fiyuu-4.png" alt="" />
                                    </div>
    
                                    <div className="d-flex flex-column justify-content-start align-items-start">
                                        <span>
                                            Teslimat
                                            Çözümleri
                                        </span>
                                        {/* <p>
                                            ilgili icerik buraya gelecek.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="expertise  w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container row m-0 w-100 justify-content-between align-items-start">
                        <div
                            className="order-2 order-lg-1 col-12 col-lg-3 expertise-img p-0 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
                            <img src="./images/our-expertise.png" alt="" className="w-100" data-animation="slideInLeft"
                                data-animation-delay="50ms" />
                        </div>
                        <div className="order-1 order-lg-2 col-12 col-lg-7 p-0">
                            <h3 className="title mb-5" data-animation="slideInDown" data-animation-delay="50ms">
                                Uzmanlığımız
                            </h3>
    
                            <div className="list-items w-100">
                                <div className="list-item d-flex flex-row justify-content-start align-items-start"
                                    data-animation="fadeIn" data-animation-delay="50ms">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path
                                                d="M18 10C18 14.9706 14.1944 19 9.5 19C4.80558 19 1 14.9706 1 10C1 5.02944 4.80558 1 9.5 1C14.1944 1 18 5.02944 18 10Z"
                                                fill="#E61B80" />
                                            <path
                                                d="M13.4644 5.99306C13.6552 5.80231 13.9036 5.71289 14.1639 5.70295C14.4301 5.69103 14.6785 5.82019 14.8673 5.99306C15.0501 6.16196 15.1574 6.45207 15.1574 6.69647C15.1574 6.9528 15.0481 7.21906 14.8673 7.39988L14.8434 7.42373C14.515 7.75746 14.1839 8.08678 13.8525 8.4164C13.6867 8.58133 13.5208 8.74634 13.3551 8.91202L9.0989 13.1682C9.0891 13.178 9.07909 13.1883 9.06893 13.1986C9.04819 13.2198 9.02685 13.2416 9.00551 13.2616C8.52663 13.7226 7.77752 13.7206 7.29865 13.2596C7.28415 13.2465 7.27053 13.2324 7.25662 13.2181C7.24956 13.2108 7.24242 13.2034 7.23506 13.1961L4.44129 10.4023C4.25252 10.2115 4.1631 9.96316 4.15118 9.69888C4.13926 9.43262 4.26842 9.18424 4.44129 8.99547C4.61019 8.81266 4.90029 8.70536 5.1447 8.70536C5.40103 8.70536 5.66729 8.81465 5.84811 8.99547L8.15579 11.3032C8.20976 11.2484 8.26377 11.1937 8.318 11.1395L13.4644 5.99306Z"
                                                fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M19.3146 9.67264C19.3146 9.66767 19.3146 9.66269 19.3146 9.65769C19.3126 8.66418 19.1636 7.65476 18.8556 6.71092C18.5575 5.79689 18.1323 4.91663 17.5739 4.13374C17.2759 3.71447 16.952 3.3111 16.5943 2.94152C16.2347 2.56994 15.8432 2.24208 15.4319 1.92813C14.6689 1.33996 13.8105 0.896856 12.9064 0.563034C11.9765 0.221264 10.9809 0.0444181 9.99339 0.00666446C9.00186 -0.0310892 7.98649 0.092107 7.03072 0.362344C6.10675 0.624632 5.20464 1.028 4.40188 1.55655C3.60706 2.07914 2.87385 2.71102 2.2678 3.44622C1.93994 3.84363 1.63195 4.25892 1.36767 4.70203C1.09942 5.14911 0.880849 5.62004 0.684132 6.1009C0.308583 7.01692 0.103918 7.99057 0.0264237 8.97614C-0.0510707 9.97562 0.044307 10.9989 0.280764 11.9746C0.507286 12.9105 0.888797 13.8265 1.38953 14.6491C1.88231 15.4598 2.4983 16.2149 3.20965 16.8448C3.92499 17.4787 4.72576 18.0251 5.59807 18.4185C6.07695 18.6351 6.56576 18.8259 7.07046 18.967C7.58709 19.11 8.11564 19.1974 8.64817 19.259C9.64765 19.3743 10.661 19.3087 11.6446 19.11C12.5924 18.9193 13.5204 18.5636 14.3649 18.0946C15.1955 17.6337 15.9664 17.0356 16.6221 16.35C17.2799 15.6625 17.8501 14.8717 18.2754 14.0192C18.7105 13.1449 19.0304 12.213 19.1795 11.2473C19.2604 10.7244 19.3138 10.2014 19.3146 9.67264ZM17.2656 10.6957C17.3069 10.3506 17.3275 10.0042 17.3275 9.65769C17.3275 9.31268 17.3071 8.96766 17.2661 8.62545C17.166 7.9625 16.9888 7.31152 16.7386 6.68889C16.4708 6.0787 16.1334 5.50187 15.7347 4.9681C15.3253 4.45528 14.86 3.99001 14.3472 3.58061C13.8133 3.1818 13.2365 2.84437 12.6262 2.57662C12.0073 2.32789 11.3617 2.15131 10.7014 2.05089C10.0083 1.96874 9.30645 1.96867 8.61329 2.05071C7.95382 2.15111 7.30628 2.32778 6.6868 2.5767C6.07659 2.84444 5.49976 3.18185 4.96598 3.58063C4.45318 3.99001 3.98791 4.45528 3.57852 4.96809C3.1797 5.50192 2.84227 6.07882 2.57452 6.68909C2.3258 7.30795 2.14921 7.95355 2.0488 8.61383C1.96664 9.30698 1.96658 10.0088 2.04861 10.702C2.14901 11.3615 2.32568 12.009 2.5746 12.6285C2.84234 13.2387 3.17975 13.8155 3.57853 14.3493C3.98791 14.8621 4.45318 15.3274 4.96599 15.7368C5.49982 16.1356 6.07671 16.473 6.68698 16.7408C7.30584 16.9895 7.95146 17.1661 8.61174 17.2665C9.30489 17.3486 10.0067 17.3487 10.6999 17.2667C11.3594 17.1663 12.0069 16.9896 12.6264 16.7407C13.2366 16.4729 13.8134 16.1355 14.3472 15.7368C14.86 15.3274 15.3253 14.8621 15.7347 14.3493C16.1335 13.8154 16.4709 13.2386 16.7387 12.6283C16.9884 12.007 17.1654 11.3587 17.2656 10.6957Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h5 className="mb-3">
                                            Kurye ve teslimat yönetimi
                                        </h5>
                                        <p className="m-0">
                                            Kurye uygulamamız ile teslimatlarınızı uçtan uca verimlilik ile yönetilmektedir.
                                        </p>
                                    </div>
                                </div>
                                <div className="list-item d-flex flex-row justify-content-start align-items-start"
                                    data-animation="fadeIn" data-animation-delay="50ms">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path
                                                d="M18 10C18 14.9706 14.1944 19 9.5 19C4.80558 19 1 14.9706 1 10C1 5.02944 4.80558 1 9.5 1C14.1944 1 18 5.02944 18 10Z"
                                                fill="#E61B80" />
                                            <path
                                                d="M13.4644 5.99306C13.6552 5.80231 13.9036 5.71289 14.1639 5.70295C14.4301 5.69103 14.6785 5.82019 14.8673 5.99306C15.0501 6.16196 15.1574 6.45207 15.1574 6.69647C15.1574 6.9528 15.0481 7.21906 14.8673 7.39988L14.8434 7.42373C14.515 7.75746 14.1839 8.08678 13.8525 8.4164C13.6867 8.58133 13.5208 8.74634 13.3551 8.91202L9.0989 13.1682C9.0891 13.178 9.07909 13.1883 9.06893 13.1986C9.04819 13.2198 9.02685 13.2416 9.00551 13.2616C8.52663 13.7226 7.77752 13.7206 7.29865 13.2596C7.28415 13.2465 7.27053 13.2324 7.25662 13.2181C7.24956 13.2108 7.24242 13.2034 7.23506 13.1961L4.44129 10.4023C4.25252 10.2115 4.1631 9.96316 4.15118 9.69888C4.13926 9.43262 4.26842 9.18424 4.44129 8.99547C4.61019 8.81266 4.90029 8.70536 5.1447 8.70536C5.40103 8.70536 5.66729 8.81465 5.84811 8.99547L8.15579 11.3032C8.20976 11.2484 8.26377 11.1937 8.318 11.1395L13.4644 5.99306Z"
                                                fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M19.3146 9.67264C19.3146 9.66767 19.3146 9.66269 19.3146 9.65769C19.3126 8.66418 19.1636 7.65476 18.8556 6.71092C18.5575 5.79689 18.1323 4.91663 17.5739 4.13374C17.2759 3.71447 16.952 3.3111 16.5943 2.94152C16.2347 2.56994 15.8432 2.24208 15.4319 1.92813C14.6689 1.33996 13.8105 0.896856 12.9064 0.563034C11.9765 0.221264 10.9809 0.0444181 9.99339 0.00666446C9.00186 -0.0310892 7.98649 0.092107 7.03072 0.362344C6.10675 0.624632 5.20464 1.028 4.40188 1.55655C3.60706 2.07914 2.87385 2.71102 2.2678 3.44622C1.93994 3.84363 1.63195 4.25892 1.36767 4.70203C1.09942 5.14911 0.880849 5.62004 0.684132 6.1009C0.308583 7.01692 0.103918 7.99057 0.0264237 8.97614C-0.0510707 9.97562 0.044307 10.9989 0.280764 11.9746C0.507286 12.9105 0.888797 13.8265 1.38953 14.6491C1.88231 15.4598 2.4983 16.2149 3.20965 16.8448C3.92499 17.4787 4.72576 18.0251 5.59807 18.4185C6.07695 18.6351 6.56576 18.8259 7.07046 18.967C7.58709 19.11 8.11564 19.1974 8.64817 19.259C9.64765 19.3743 10.661 19.3087 11.6446 19.11C12.5924 18.9193 13.5204 18.5636 14.3649 18.0946C15.1955 17.6337 15.9664 17.0356 16.6221 16.35C17.2799 15.6625 17.8501 14.8717 18.2754 14.0192C18.7105 13.1449 19.0304 12.213 19.1795 11.2473C19.2604 10.7244 19.3138 10.2014 19.3146 9.67264ZM17.2656 10.6957C17.3069 10.3506 17.3275 10.0042 17.3275 9.65769C17.3275 9.31268 17.3071 8.96766 17.2661 8.62545C17.166 7.9625 16.9888 7.31152 16.7386 6.68889C16.4708 6.0787 16.1334 5.50187 15.7347 4.9681C15.3253 4.45528 14.86 3.99001 14.3472 3.58061C13.8133 3.1818 13.2365 2.84437 12.6262 2.57662C12.0073 2.32789 11.3617 2.15131 10.7014 2.05089C10.0083 1.96874 9.30645 1.96867 8.61329 2.05071C7.95382 2.15111 7.30628 2.32778 6.6868 2.5767C6.07659 2.84444 5.49976 3.18185 4.96598 3.58063C4.45318 3.99001 3.98791 4.45528 3.57852 4.96809C3.1797 5.50192 2.84227 6.07882 2.57452 6.68909C2.3258 7.30795 2.14921 7.95355 2.0488 8.61383C1.96664 9.30698 1.96658 10.0088 2.04861 10.702C2.14901 11.3615 2.32568 12.009 2.5746 12.6285C2.84234 13.2387 3.17975 13.8155 3.57853 14.3493C3.98791 14.8621 4.45318 15.3274 4.96599 15.7368C5.49982 16.1356 6.07671 16.473 6.68698 16.7408C7.30584 16.9895 7.95146 17.1661 8.61174 17.2665C9.30489 17.3486 10.0067 17.3487 10.6999 17.2667C11.3594 17.1663 12.0069 16.9896 12.6264 16.7407C13.2366 16.4729 13.8134 16.1355 14.3472 15.7368C14.86 15.3274 15.3253 14.8621 15.7347 14.3493C16.1335 13.8154 16.4709 13.2386 16.7387 12.6283C16.9884 12.007 17.1654 11.3587 17.2656 10.6957Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h5 className="mb-3">
                                            Mutabakat
                                        </h5>
                                        <p className="m-0">
                                            Eğitimli mutabakat ekibimiz tarafından haftalık olarak sizlerle mutabakat
                                            gerçekleştirmektedir.
                                        </p>
                                    </div>
                                </div>
                                <div className="list-item d-flex flex-row justify-content-start align-items-start"
                                    data-animation="fadeIn" data-animation-delay="50ms">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path
                                                d="M18 10C18 14.9706 14.1944 19 9.5 19C4.80558 19 1 14.9706 1 10C1 5.02944 4.80558 1 9.5 1C14.1944 1 18 5.02944 18 10Z"
                                                fill="#E61B80" />
                                            <path
                                                d="M13.4644 5.99306C13.6552 5.80231 13.9036 5.71289 14.1639 5.70295C14.4301 5.69103 14.6785 5.82019 14.8673 5.99306C15.0501 6.16196 15.1574 6.45207 15.1574 6.69647C15.1574 6.9528 15.0481 7.21906 14.8673 7.39988L14.8434 7.42373C14.515 7.75746 14.1839 8.08678 13.8525 8.4164C13.6867 8.58133 13.5208 8.74634 13.3551 8.91202L9.0989 13.1682C9.0891 13.178 9.07909 13.1883 9.06893 13.1986C9.04819 13.2198 9.02685 13.2416 9.00551 13.2616C8.52663 13.7226 7.77752 13.7206 7.29865 13.2596C7.28415 13.2465 7.27053 13.2324 7.25662 13.2181C7.24956 13.2108 7.24242 13.2034 7.23506 13.1961L4.44129 10.4023C4.25252 10.2115 4.1631 9.96316 4.15118 9.69888C4.13926 9.43262 4.26842 9.18424 4.44129 8.99547C4.61019 8.81266 4.90029 8.70536 5.1447 8.70536C5.40103 8.70536 5.66729 8.81465 5.84811 8.99547L8.15579 11.3032C8.20976 11.2484 8.26377 11.1937 8.318 11.1395L13.4644 5.99306Z"
                                                fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M19.3146 9.67264C19.3146 9.66767 19.3146 9.66269 19.3146 9.65769C19.3126 8.66418 19.1636 7.65476 18.8556 6.71092C18.5575 5.79689 18.1323 4.91663 17.5739 4.13374C17.2759 3.71447 16.952 3.3111 16.5943 2.94152C16.2347 2.56994 15.8432 2.24208 15.4319 1.92813C14.6689 1.33996 13.8105 0.896856 12.9064 0.563034C11.9765 0.221264 10.9809 0.0444181 9.99339 0.00666446C9.00186 -0.0310892 7.98649 0.092107 7.03072 0.362344C6.10675 0.624632 5.20464 1.028 4.40188 1.55655C3.60706 2.07914 2.87385 2.71102 2.2678 3.44622C1.93994 3.84363 1.63195 4.25892 1.36767 4.70203C1.09942 5.14911 0.880849 5.62004 0.684132 6.1009C0.308583 7.01692 0.103918 7.99057 0.0264237 8.97614C-0.0510707 9.97562 0.044307 10.9989 0.280764 11.9746C0.507286 12.9105 0.888797 13.8265 1.38953 14.6491C1.88231 15.4598 2.4983 16.2149 3.20965 16.8448C3.92499 17.4787 4.72576 18.0251 5.59807 18.4185C6.07695 18.6351 6.56576 18.8259 7.07046 18.967C7.58709 19.11 8.11564 19.1974 8.64817 19.259C9.64765 19.3743 10.661 19.3087 11.6446 19.11C12.5924 18.9193 13.5204 18.5636 14.3649 18.0946C15.1955 17.6337 15.9664 17.0356 16.6221 16.35C17.2799 15.6625 17.8501 14.8717 18.2754 14.0192C18.7105 13.1449 19.0304 12.213 19.1795 11.2473C19.2604 10.7244 19.3138 10.2014 19.3146 9.67264ZM17.2656 10.6957C17.3069 10.3506 17.3275 10.0042 17.3275 9.65769C17.3275 9.31268 17.3071 8.96766 17.2661 8.62545C17.166 7.9625 16.9888 7.31152 16.7386 6.68889C16.4708 6.0787 16.1334 5.50187 15.7347 4.9681C15.3253 4.45528 14.86 3.99001 14.3472 3.58061C13.8133 3.1818 13.2365 2.84437 12.6262 2.57662C12.0073 2.32789 11.3617 2.15131 10.7014 2.05089C10.0083 1.96874 9.30645 1.96867 8.61329 2.05071C7.95382 2.15111 7.30628 2.32778 6.6868 2.5767C6.07659 2.84444 5.49976 3.18185 4.96598 3.58063C4.45318 3.99001 3.98791 4.45528 3.57852 4.96809C3.1797 5.50192 2.84227 6.07882 2.57452 6.68909C2.3258 7.30795 2.14921 7.95355 2.0488 8.61383C1.96664 9.30698 1.96658 10.0088 2.04861 10.702C2.14901 11.3615 2.32568 12.009 2.5746 12.6285C2.84234 13.2387 3.17975 13.8155 3.57853 14.3493C3.98791 14.8621 4.45318 15.3274 4.96599 15.7368C5.49982 16.1356 6.07671 16.473 6.68698 16.7408C7.30584 16.9895 7.95146 17.1661 8.61174 17.2665C9.30489 17.3486 10.0067 17.3487 10.6999 17.2667C11.3594 17.1663 12.0069 16.9896 12.6264 16.7407C13.2366 16.4729 13.8134 16.1355 14.3472 15.7368C14.86 15.3274 15.3253 14.8621 15.7347 14.3493C16.1335 13.8154 16.4709 13.2386 16.7387 12.6283C16.9884 12.007 17.1654 11.3587 17.2656 10.6957Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h5 className="mb-3">
                                            Kapıda teslimat
                                        </h5>
                                        <p className="m-0">
                                            Tüm kuryelerimiz fiyuu pos makinaları ile kredi kartı, yemek kartları ve nakit
                                            tahsilatları gerçekleştirip, yazarkasa fişi verebilmektedir.
                                        </p>
                                    </div>
                                </div>
                                <div className="list-item d-flex flex-row justify-content-start align-items-start"
                                    data-animation="fadeIn" data-animation-delay="50ms">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path
                                                d="M18 10C18 14.9706 14.1944 19 9.5 19C4.80558 19 1 14.9706 1 10C1 5.02944 4.80558 1 9.5 1C14.1944 1 18 5.02944 18 10Z"
                                                fill="#E61B80" />
                                            <path
                                                d="M13.4644 5.99306C13.6552 5.80231 13.9036 5.71289 14.1639 5.70295C14.4301 5.69103 14.6785 5.82019 14.8673 5.99306C15.0501 6.16196 15.1574 6.45207 15.1574 6.69647C15.1574 6.9528 15.0481 7.21906 14.8673 7.39988L14.8434 7.42373C14.515 7.75746 14.1839 8.08678 13.8525 8.4164C13.6867 8.58133 13.5208 8.74634 13.3551 8.91202L9.0989 13.1682C9.0891 13.178 9.07909 13.1883 9.06893 13.1986C9.04819 13.2198 9.02685 13.2416 9.00551 13.2616C8.52663 13.7226 7.77752 13.7206 7.29865 13.2596C7.28415 13.2465 7.27053 13.2324 7.25662 13.2181C7.24956 13.2108 7.24242 13.2034 7.23506 13.1961L4.44129 10.4023C4.25252 10.2115 4.1631 9.96316 4.15118 9.69888C4.13926 9.43262 4.26842 9.18424 4.44129 8.99547C4.61019 8.81266 4.90029 8.70536 5.1447 8.70536C5.40103 8.70536 5.66729 8.81465 5.84811 8.99547L8.15579 11.3032C8.20976 11.2484 8.26377 11.1937 8.318 11.1395L13.4644 5.99306Z"
                                                fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M19.3146 9.67264C19.3146 9.66767 19.3146 9.66269 19.3146 9.65769C19.3126 8.66418 19.1636 7.65476 18.8556 6.71092C18.5575 5.79689 18.1323 4.91663 17.5739 4.13374C17.2759 3.71447 16.952 3.3111 16.5943 2.94152C16.2347 2.56994 15.8432 2.24208 15.4319 1.92813C14.6689 1.33996 13.8105 0.896856 12.9064 0.563034C11.9765 0.221264 10.9809 0.0444181 9.99339 0.00666446C9.00186 -0.0310892 7.98649 0.092107 7.03072 0.362344C6.10675 0.624632 5.20464 1.028 4.40188 1.55655C3.60706 2.07914 2.87385 2.71102 2.2678 3.44622C1.93994 3.84363 1.63195 4.25892 1.36767 4.70203C1.09942 5.14911 0.880849 5.62004 0.684132 6.1009C0.308583 7.01692 0.103918 7.99057 0.0264237 8.97614C-0.0510707 9.97562 0.044307 10.9989 0.280764 11.9746C0.507286 12.9105 0.888797 13.8265 1.38953 14.6491C1.88231 15.4598 2.4983 16.2149 3.20965 16.8448C3.92499 17.4787 4.72576 18.0251 5.59807 18.4185C6.07695 18.6351 6.56576 18.8259 7.07046 18.967C7.58709 19.11 8.11564 19.1974 8.64817 19.259C9.64765 19.3743 10.661 19.3087 11.6446 19.11C12.5924 18.9193 13.5204 18.5636 14.3649 18.0946C15.1955 17.6337 15.9664 17.0356 16.6221 16.35C17.2799 15.6625 17.8501 14.8717 18.2754 14.0192C18.7105 13.1449 19.0304 12.213 19.1795 11.2473C19.2604 10.7244 19.3138 10.2014 19.3146 9.67264ZM17.2656 10.6957C17.3069 10.3506 17.3275 10.0042 17.3275 9.65769C17.3275 9.31268 17.3071 8.96766 17.2661 8.62545C17.166 7.9625 16.9888 7.31152 16.7386 6.68889C16.4708 6.0787 16.1334 5.50187 15.7347 4.9681C15.3253 4.45528 14.86 3.99001 14.3472 3.58061C13.8133 3.1818 13.2365 2.84437 12.6262 2.57662C12.0073 2.32789 11.3617 2.15131 10.7014 2.05089C10.0083 1.96874 9.30645 1.96867 8.61329 2.05071C7.95382 2.15111 7.30628 2.32778 6.6868 2.5767C6.07659 2.84444 5.49976 3.18185 4.96598 3.58063C4.45318 3.99001 3.98791 4.45528 3.57852 4.96809C3.1797 5.50192 2.84227 6.07882 2.57452 6.68909C2.3258 7.30795 2.14921 7.95355 2.0488 8.61383C1.96664 9.30698 1.96658 10.0088 2.04861 10.702C2.14901 11.3615 2.32568 12.009 2.5746 12.6285C2.84234 13.2387 3.17975 13.8155 3.57853 14.3493C3.98791 14.8621 4.45318 15.3274 4.96599 15.7368C5.49982 16.1356 6.07671 16.473 6.68698 16.7408C7.30584 16.9895 7.95146 17.1661 8.61174 17.2665C9.30489 17.3486 10.0067 17.3487 10.6999 17.2667C11.3594 17.1663 12.0069 16.9896 12.6264 16.7407C13.2366 16.4729 13.8134 16.1355 14.3472 15.7368C14.86 15.3274 15.3253 14.8621 15.7347 14.3493C16.1335 13.8154 16.4709 13.2386 16.7387 12.6283C16.9884 12.007 17.1654 11.3587 17.2656 10.6957Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <h5 className="mb-3">
                                            Şikayet Yönetimi ve Müşteri Memnuniyeti
                                        </h5>
                                        <p className="m-0">
                                            Bölge sorumlularımız ve Çağrı Merkezimiz kurye ve teslimat ile ilgili oluşacak
                                            şikayetlere anlık olarak çözüm sağlamaktadır.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="our-process  w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container row m-0 w-100 justify-content-between align-items-start">
                        <div
                            className="order-2 order-lg-1 col-12 col-lg-3 expertise-img p-0 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
                            <img src="./images/our-process.png" alt="" className="w-100" data-animation="slideInLeft"
                                data-animation-delay="50ms" />
                        </div>
                        <div className="order-1 order-lg-2 col-12 col-lg-7 p-0">
                            <h3 className="title mb-5" data-animation="slideInLeft" data-animation-delay="50ms">
                                Sürecimiz
                            </h3>
    
                            <div className="card-list-items w-100">
                                <div className="card-list-item d-flex flex-row justify-content-start align-items-center"
                                    data-animation="slideInLeft" data-animation-delay="50ms">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span>
                                                1
                                            </span>
                                        </div>
                                    </div>
                                    <p className="m-0">
                                        Restoran alternatif kanallardan siparişleri alır.
                                    </p>
                                </div>
                                <div className="card-list-item d-flex flex-row justify-content-start align-items-center"
                                    data-animation="slideInLeft" data-animation-delay="50ms">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <p className="m-0">
                                        Sipariş bilgileri Fiyuu sistemine aktarılır.
                                    </p>
                                </div>
                                <div className="card-list-item d-flex flex-row justify-content-start align-items-center"
                                    data-animation="slideInLeft" data-animation-delay="50ms">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <p className="m-0">
                                        Fiyuu akıllı algoritması müsaitte olan en uygun kuryeyi tespit eder.
                                    </p>
                                </div>
                                <div className="card-list-item d-flex flex-row justify-content-start align-items-center"
                                    data-animation="slideInLeft" data-animation-delay="50ms">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span>
                                                4
                                            </span>
                                        </div>
                                    </div>
                                    <p className="m-0">
                                        Kuryenin ekranına sipariş bilgileri düşer ve kurye restorana doğru yola çıkar.
                                    </p>
                                </div>
                                <div className="card-list-item d-flex flex-row justify-content-start align-items-center"
                                    data-animation="slideInRight" data-animation-delay="50ms">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span>
                                                5
                                            </span>
                                        </div>
                                    </div>
                                    <p className="m-0">
                                        Kurye siparişi teslim alır ve gönderi adresine doğru yola çıkar. </p>
                                </div>
                                <div className="card-list-item d-flex flex-row justify-content-start align-items-center"
                                    data-animation="slideInRight" data-animation-delay="50ms">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span>
                                                6
                                            </span>
                                        </div>
                                    </div>
                                    <p className="m-0">
                                        Kurye kapıda ödeme sistemini kullanarak sipariş bedelini tahsil eder ve teslimatı
                                        gerçekleştirir. </p>
                                </div>
                                <div className="card-list-item d-flex flex-row justify-content-start align-items-center"
                                    data-animation="slideInRight" data-animation-delay="50ms">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span>
                                                7
                                            </span>
                                        </div>
                                    </div>
                                    <p className="m-0">
                                        Restoran, Fiyuu ile dönemsel mutabakat yaparak, sipariş bedellerinin toplanması için
                                        fatura keser.
                                    </p>
                                </div>
                                <div className="card-list-item d-flex flex-row justify-content-start align-items-center"
                                    data-animation="slideInRight" data-animation-delay="50ms">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span>
                                                8
                                            </span>
                                        </div>
                                    </div>
                                    <p className="m-0">
                                        Fiyuu, kesilmiş olan fatura bedelinin Restorana ödemesini gerçekleştirir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="our-technology  w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container row m-0 w-100 justify-content-start align-items-start">
                        <h3 className="title mb-5" data-animation="zoomIn" data-animation-delay="50ms">
                            Teknolojimiz
                        </h3>
                        <div className="cards mt-3 px-0">
                            <div data-animation="zoomIn" data-animation-delay="50ms"
                                className="card-item d-flex justify-content-start align-items-center"
                                 style={{backgroundColor: "#6089EE"}}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"
                                            fill="none">
                                            <g clipPath="url(#clip0_1_1388)">
                                                <path
                                                    d="M2.0167 7.80817C1.8436 9.50485 3.40155 11.0544 5.10665 10.7947C6.53478 10.6215 7.57341 9.28844 7.48686 7.80817H9.13137C9.67665 7.80817 9.668 6.97715 9.13137 6.97715H7.75517C7.65997 2.84799 1.69646 2.81337 1.54932 6.94252V7.39266C1.54932 7.6437 1.7657 7.82549 2.0167 7.80817ZM6.65595 7.80817V7.99862C6.56074 10.7774 2.6572 10.5263 2.84761 7.80817H6.65595Z"
                                                    fill="#6089EE" />
                                                <path
                                                    d="M7.14062 20.0918C7.14062 20.0918 7.17525 20.0138 7.19256 19.9792H11.9184C12.1521 19.9792 12.3338 19.7974 12.3338 19.5637V13.5907C12.3338 13.357 12.1521 13.1752 11.9184 13.1752H7.86767L6.66458 11.7382C6.58669 11.643 6.47417 11.5911 6.34434 11.5911H2.37155C2.24172 11.5911 2.12054 11.643 2.04265 11.7469L0.450069 13.7379C0.398138 13.7985 0.372172 13.8677 0.363516 13.9543L-6.733e-06 17.1312C-0.0432833 17.5294 0.155789 17.9276 0.519312 18.1181L5.31435 20.6804C5.95485 21.044 6.82903 20.7497 7.14062 20.0918ZM5.57401 17.7112V14.0062H8.3264C8.35237 16.3954 7.98019 15.9539 10.3344 15.9972C10.5595 15.9972 10.7499 15.8154 10.7499 15.5817V14.0062H11.5116V19.1482H7.25314C7.24449 19.0963 7.22718 19.053 7.20121 19.001C7.19256 18.9664 7.17525 18.9404 7.15794 18.9058C7.14063 18.8712 7.12331 18.8366 7.106 18.8019C7.05407 18.7154 6.98483 18.6288 6.90693 18.5509C6.78576 18.3778 5.77309 17.8411 5.59132 17.7112H5.57401Z"
                                                    fill="#6089EE" />
                                                <path
                                                    d="M19.4052 0H7.67726C6.88963 0 6.24913 0.640582 6.24913 1.42832V3.08172C6.24913 3.62708 7.08004 3.62708 7.0887 3.08172V1.42832C7.0887 1.09938 7.34836 0.831025 7.67726 0.831025H19.4052C19.7341 0.831025 19.9938 1.09938 19.9938 1.42832V22.0828H7.08004C7.15794 21.4681 6.28376 21.3643 6.24048 21.9875V23.5803C6.24048 24.3681 6.88097 25.0087 7.6686 25.0087H19.3966C20.1842 25.0087 20.8247 24.3681 20.8247 23.5803V1.42832C20.8247 0.640582 20.1842 0 19.3966 0H19.4052Z"
                                                    fill="#6089EE" />
                                                <path
                                                    d="M17.6223 2.62291L14.9824 5.26315L14.0217 4.42347C13.6062 4.06855 13.0609 4.69182 13.4764 5.04674L14.7228 6.13746C14.8006 6.20671 14.8959 6.24134 14.9997 6.24134C15.1036 6.24134 15.2161 6.19805 15.294 6.12015L18.2108 3.2029C18.5917 2.81336 18.0118 2.23337 17.6223 2.61426V2.62291Z"
                                                    fill="#6089EE" />
                                                <path
                                                    d="M15.5536 2.67486C13.8918 2.03428 11.9184 3.22022 11.6933 4.97749C11.4077 6.71745 12.8099 8.35353 14.5756 8.33622C15.8046 8.33622 16.9125 7.55713 17.3193 6.39716C17.3972 6.18075 17.2847 5.93837 17.0683 5.86911C16.8519 5.79121 16.6096 5.90374 16.5403 6.12015C15.6748 8.46607 12.178 7.59176 12.5243 5.10734C12.6801 3.85215 14.0822 3.00381 15.2766 3.45395C15.493 3.53186 15.7354 3.41932 15.8133 3.20291C15.8912 2.9865 15.7787 2.74411 15.5623 2.6662L15.5536 2.67486Z"
                                                    fill="#6089EE" />
                                                <path
                                                    d="M18.332 9.99828H12.4983C11.953 9.99828 11.953 10.8293 12.4983 10.8293H18.332C18.8773 10.8293 18.8773 9.99828 18.332 9.99828Z"
                                                    fill="#6089EE" />
                                                <path
                                                    d="M18.3318 11.669H14.9995C14.4543 11.669 14.4543 12.5 14.9995 12.5H18.3318C18.8771 12.5 18.8771 11.669 18.3318 11.669Z"
                                                    fill="#6089EE" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1388">
                                                    <rect width="20.8333" height="25" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <p className="m-0">
                                    Kurye uygulaması
                                </p>
                            </div>
                            <div data-animation="zoomIn" data-animation-delay="50ms"
                                className="card-item d-flex justify-content-start align-items-center"
                                style={{backgroundColor: "#7B7B7B"}}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_1404)">
                                                <path
                                                    d="M19.6964 0H3.30357C1.48214 0 0 1.48455 0 3.30894V18.6732C0 20.4976 1.48214 21.9821 3.30357 21.9821H19.6964C21.5179 21.9821 23 20.4976 23 18.6732V3.30894C23 1.48455 21.5179 0 19.6964 0ZM21.9107 18.6732C21.9107 19.8894 20.9286 20.8911 19.6964 20.8911H3.30357C2.08929 20.8911 1.08929 19.9073 1.08929 18.6732V6.0813H21.8929V18.6732H21.9107ZM21.9107 4.97236H1.10714V3.30894C1.10714 2.09268 2.08929 1.09106 3.32143 1.09106H19.7143C20.9286 1.09106 21.9286 2.0748 21.9286 3.30894V4.97236H21.9107Z"
                                                    fill="#7B7B7B" />
                                                <path
                                                    d="M4.50005 2.48618H3.58934C3.28577 2.48618 3.03577 2.73658 3.03577 3.04065C3.03577 3.34471 3.28577 3.59512 3.58934 3.59512H4.50005C4.80362 3.59512 5.05362 3.34471 5.05362 3.04065C5.05362 2.73658 4.80362 2.48618 4.50005 2.48618Z"
                                                    fill="#7B7B7B" />
                                                <path
                                                    d="M13.4286 9.62277H16.4643C16.7679 9.62277 17.0179 9.37236 17.0179 9.0683C17.0179 8.76423 16.7679 8.51382 16.4643 8.51382H13.4286C13.125 8.51382 12.875 8.76423 12.875 9.0683C12.875 9.37236 13.125 9.62277 13.4286 9.62277Z"
                                                    fill="#7B7B7B" />
                                                <path
                                                    d="M13.4286 12.3772H18.6786C18.9821 12.3772 19.2321 12.1268 19.2321 11.8228C19.2321 11.5187 18.9821 11.2683 18.6786 11.2683H13.4286C13.125 11.2683 12.875 11.5187 12.875 11.8228C12.875 12.1268 13.125 12.3772 13.4286 12.3772Z"
                                                    fill="#7B7B7B" />
                                                <path
                                                    d="M13.4286 15.4179H16.4643C16.7679 15.4179 17.0179 15.1675 17.0179 14.8634C17.0179 14.5594 16.7679 14.3089 16.4643 14.3089H13.4286C13.125 14.3089 12.875 14.5594 12.875 14.8634C12.875 15.1675 13.125 15.4179 13.4286 15.4179Z"
                                                    fill="#7B7B7B" />
                                                <path
                                                    d="M13.4286 18.1724H18.6786C18.9821 18.1724 19.2321 17.922 19.2321 17.6179C19.2321 17.3138 18.9821 17.0634 18.6786 17.0634H13.4286C13.125 17.0634 12.875 17.3138 12.875 17.6179C12.875 17.922 13.125 18.1724 13.4286 18.1724Z"
                                                    fill="#7B7B7B" />
                                                <path
                                                    d="M6.53575 9.62277H9.57146C9.87504 9.62277 10.125 9.37236 10.125 9.0683C10.125 8.76423 9.87504 8.51382 9.57146 8.51382H6.53575C6.23218 8.51382 5.98218 8.76423 5.98218 9.0683C5.98218 9.37236 6.23218 9.62277 6.53575 9.62277Z"
                                                    fill="#7B7B7B" />
                                                <path
                                                    d="M4.33934 12.3772H9.58934C9.89291 12.3772 10.1429 12.1268 10.1429 11.8228C10.1429 11.5187 9.89291 11.2683 9.58934 11.2683H4.33934C4.03577 11.2683 3.78577 11.5187 3.78577 11.8228C3.78577 12.1268 4.03577 12.3772 4.33934 12.3772Z"
                                                    fill="#7B7B7B" />
                                                <path
                                                    d="M9.57146 14.3089H6.53575C6.23218 14.3089 5.98218 14.5594 5.98218 14.8634C5.98218 15.1675 6.23218 15.4179 6.53575 15.4179H9.57146C9.87504 15.4179 10.125 15.1675 10.125 14.8634C10.125 14.5594 9.87504 14.3089 9.57146 14.3089Z"
                                                    fill="#7B7B7B" />
                                                <path
                                                    d="M4.33934 18.1724H9.58934C9.89291 18.1724 10.1429 17.922 10.1429 17.6179C10.1429 17.3138 9.89291 17.0634 9.58934 17.0634H4.33934C4.03577 17.0634 3.78577 17.3138 3.78577 17.6179C3.78577 17.922 4.03577 18.1724 4.33934 18.1724Z"
                                                    fill="#7B7B7B" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1404">
                                                    <rect width="23" height="22" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
    
                                    </div>
                                </div>
                                <p className="m-0">
                                    Yazılım Geliştirme
                                </p>
                            </div>
                            <div data-animation="zoomIn" data-animation-delay="50ms"
                                className="card-item d-flex justify-content-start align-items-center"
                               style={{backgroundColor: "#737CCD"}}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22"
                                            fill="none">
                                            <path
                                                d="M24.6473 18.4533C24.3051 17.272 23.2402 16.4718 22.0232 16.4528C21.795 16.4528 21.5668 16.4718 21.3576 16.529L19.3039 12.9662C20.3498 11.8612 20.2927 10.1084 19.1898 9.06052C18.6764 8.56516 17.9728 8.29843 17.2693 8.31748L16.6607 8.39369L14.493 4.62134C15.5198 3.49726 15.4247 1.74445 14.3028 0.715631C13.1809 -0.313191 11.4314 -0.217929 10.4046 0.906154C9.4538 1.95403 9.4538 3.57347 10.4046 4.62134L8.23679 8.39369L7.62829 8.31748C6.10703 8.29843 4.852 9.51777 4.83298 11.042C4.83298 11.7659 5.0992 12.4518 5.57459 12.9662L3.50188 16.5481C2.03767 16.148 0.516418 17.0053 0.0980724 18.4723C-0.301257 19.9394 0.554449 21.4635 2.01866 21.8827C3.48287 22.2828 4.98511 21.4445 5.40345 19.9775H9.75805C10.1764 21.4445 11.6976 22.3018 13.1619 21.9017C14.0936 21.635 14.8162 20.911 15.0824 19.9775H19.361C19.7793 21.4445 21.3196 22.2828 22.7838 21.8636C24.248 21.4445 25.0847 19.9013 24.6664 18.4342L24.6473 18.4533ZM11.6976 5.44059C12.1921 5.57396 12.7055 5.57396 13.1809 5.44059L15.3106 9.13673C15.0824 9.36536 14.8923 9.63209 14.7402 9.93692H10.1384C10.0053 9.63209 9.81509 9.36536 9.56789 9.13673L11.6976 5.44059ZM9.77706 18.4533H5.40345C5.28936 18.0532 5.08019 17.6912 4.81397 17.3673L6.88668 13.7474C7.11487 13.8045 7.36207 13.8426 7.60927 13.8426L8.17974 13.7855L10.3095 17.4435C10.0813 17.7293 9.91017 18.0532 9.79608 18.4152L9.77706 18.4533ZM13.333 16.6052C12.7625 16.3956 12.116 16.3956 11.5455 16.6052L9.52986 13.0996C9.98624 12.6614 10.2715 12.0898 10.3475 11.4611H14.55C14.6261 12.0898 14.9113 12.6614 15.3677 13.0996L13.352 16.6052H13.333ZM19.361 18.4533H15.0824C14.9874 18.0913 14.7972 17.7674 14.569 17.4816L16.6988 13.8236L17.2693 13.8807C17.5165 13.8807 17.7446 13.8426 17.9918 13.7855L20.0075 17.3292C19.7033 17.6531 19.4941 18.0532 19.361 18.4914V18.4533Z"
                                                fill="#737CCD" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="m-0">
                                    Akıllı Algoritma
                                </p>
                            </div>
                            <div data-animation="zoomIn" data-animation-delay="50ms"
                                className="card-item d-flex justify-content-start align-items-center"
                                 style={{backgroundColor: "#F582B2"}}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_1396)">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M6.47686 6.0231H7.40508C7.52884 6.0231 7.65261 6.06436 7.73511 6.16749L8.7871 7.21947V6.4769C8.7871 6.22937 8.99337 6.0231 9.24089 6.0231H18.5024C18.6262 6.0231 18.75 5.98185 18.8325 5.87871C18.915 5.7962 18.9769 5.67244 18.9769 5.54868V0.453795C18.9769 0.330032 18.9356 0.20627 18.8325 0.123761C18.75 0.0412532 18.6262 -0.020628 18.5024 -0.020628H6.47686C6.3531 -0.020628 6.22934 0.0206262 6.14683 0.123761C6.06432 0.20627 6.00244 0.330032 6.00244 0.453795V5.54868C6.00244 5.67244 6.0437 5.7962 6.14683 5.87871C6.22934 5.96122 6.3531 6.0231 6.47686 6.0231ZM11.2417 2.90842C11.4274 2.72277 11.7161 2.72277 11.9018 2.90842L12.4175 3.42409L13.5107 1.60891C13.6345 1.38201 13.9232 1.32013 14.1501 1.44389C14.377 1.56766 14.4389 1.85643 14.3151 2.08333L12.9331 4.39356C12.8506 4.51733 12.7269 4.59983 12.5825 4.62046C12.4381 4.62046 12.2937 4.57921 12.1906 4.4967L11.2623 3.56848C11.0767 3.38284 11.0767 3.09406 11.2623 2.90842H11.2417Z"
                                                    fill="#F582B2" />
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M16.3572 18.0899C15.3052 17.2236 13.9644 16.6873 12.5205 16.6873C11.0766 16.6873 9.71526 17.2236 8.68391 18.0899C7.36378 19.2038 6.51807 20.8746 6.51807 22.7516C6.51807 23.2673 6.88935 23.6592 7.42566 23.9686C7.42566 23.9686 7.44628 23.9686 7.46691 23.9686C7.50817 23.9893 7.57005 24.0305 7.6113 24.0512C8.80767 24.67 10.6641 24.9794 12.5412 24.9794C14.4182 24.9794 16.2747 24.67 17.471 24.0512C17.5329 24.0305 17.5742 23.9893 17.6154 23.9686C17.6154 23.9686 17.6361 23.9686 17.6567 23.9686C18.2136 23.6386 18.5643 23.2467 18.5643 22.7516C18.5643 20.8746 17.7186 19.2038 16.3984 18.0899H16.3572Z"
                                                    fill="#F582B2" />
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M19.9051 17.1411C18.9975 17.1411 18.1311 17.3886 17.4092 17.8012C18.6674 19.08 19.4513 20.8333 19.4513 22.7723C19.4513 23.2467 19.2862 23.6799 18.9562 24.0718C20.5857 24.1749 22.3184 24.0099 23.556 23.5561C24.0098 23.3911 24.4018 23.1848 24.6699 22.9373C24.8762 22.7517 24.9999 22.5248 24.9999 22.2566C24.9999 19.4307 22.7103 17.1617 19.9051 17.1617V17.1411Z"
                                                    fill="#F582B2" />
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M7.59076 17.8012C6.84818 17.3886 6.00248 17.1411 5.09488 17.1411C2.2896 17.1411 0 19.4307 0 22.236C0 22.5041 0.123762 22.7104 0.330033 22.9167C0.598185 23.1642 0.990099 23.3705 1.44389 23.5355C2.68152 23.9893 4.41419 24.1543 6.04373 24.0512C5.73432 23.6592 5.54868 23.2261 5.54868 22.7516C5.54868 20.8127 6.33251 19.0594 7.59076 17.7805V17.8012Z"
                                                    fill="#F582B2" />
                                                <path
                                                    d="M5.09496 14.3564C6.12024 14.3564 6.9514 13.5253 6.9514 12.5C6.9514 11.4747 6.12024 10.6436 5.09496 10.6436C4.06968 10.6436 3.23853 11.4747 3.23853 12.5C3.23853 13.5253 4.06968 14.3564 5.09496 14.3564Z"
                                                    fill="#F582B2" />
                                                <path
                                                    d="M12.4999 13.882C13.7758 13.882 14.8102 12.8477 14.8102 11.5718C14.8102 10.2959 13.7758 9.26155 12.4999 9.26155C11.224 9.26155 10.1897 10.2959 10.1897 11.5718C10.1897 12.8477 11.224 13.882 12.4999 13.882Z"
                                                    fill="#F582B2" />
                                                <path
                                                    d="M19.905 14.3564C20.9303 14.3564 21.7615 13.5253 21.7615 12.5C21.7615 11.4747 20.9303 10.6436 19.905 10.6436C18.8797 10.6436 18.0486 11.4747 18.0486 12.5C18.0486 13.5253 18.8797 14.3564 19.905 14.3564Z"
                                                    fill="#F582B2" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1396">
                                                    <rect width="25" height="25" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
    
                                    </div>
                                </div>
                                <p className="m-0">
                                    Mutabakat Ekranları
                                </p>
                            </div>
                            <div data-animation="zoomIn" data-animation-delay="50ms"
                                className="card-item d-flex justify-content-start align-items-center"
                                  style={{backgroundColor: "#F6AD57"}}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg width="32" height="22" viewBox="0 0 32 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_1415)">
                                                <path
                                                    d="M28.3935 7.45658H28.1642V4.33427C28.1642 4.02614 27.914 3.80019 27.6013 3.80019H24.6202V3.57423C24.6202 1.62278 23.015 0.0205421 21.0345 0.0205421C19.0541 0.0205421 17.428 1.62278 17.428 3.57423V3.80019H10.3401C10.0274 3.80019 9.79805 4.04669 9.79805 4.33427V5.11485C9.79805 6.49113 8.69316 7.57983 7.29642 7.57983C5.89967 7.57983 4.79479 6.49113 4.79479 5.11485V4.33427C4.79479 4.02614 4.54463 3.80019 4.25277 3.80019H0.562866C0.250163 3.77965 0 4.02614 0 4.31373V17.6657C0 17.9739 0.250163 18.2204 0.54202 18.2204H3.71075V18.4463C3.71075 20.3978 5.31596 22 7.31726 22C9.31857 22 10.9238 20.4183 10.9238 18.4463V18.2204H27.6222C27.9349 18.2204 28.185 17.9739 28.185 17.6863V14.564H28.4143C30.3948 14.564 32.0208 12.9823 32.0208 11.0103C32.0208 9.03828 30.4156 7.45658 28.4143 7.45658H28.3935ZM17.3446 11.4622C17.3446 11.5854 17.3029 11.7087 17.2821 11.8114C17.2821 11.8525 17.2612 11.8936 17.2404 11.9346C17.1987 12.0579 17.157 12.1606 17.1153 12.2633C17.0736 12.3249 17.0528 12.4071 17.0111 12.4687C16.9485 12.5714 16.886 12.6741 16.8026 12.7563C16.7818 12.7768 16.7609 12.8179 16.7192 12.8385C16.6984 12.859 16.6567 12.9001 16.6358 12.9206C16.615 12.9412 16.5733 12.9823 16.5524 13.0028C16.4691 13.085 16.3648 13.1466 16.2814 13.2288C16.2189 13.2698 16.1564 13.3109 16.073 13.352C15.927 13.4342 15.7811 13.4958 15.6352 13.5369C15.5935 13.5369 15.5518 13.5574 15.5101 13.578C15.4684 13.578 15.4267 13.578 15.385 13.5985C15.3016 13.5985 15.2182 13.619 15.1349 13.6396C15.0932 13.6396 15.0515 13.6396 15.0098 13.6396C14.9681 13.6396 14.9264 13.6396 14.8847 13.6396H14.0925C13.7798 13.6396 13.5505 13.8861 13.5505 14.1942V17.1317H10.3818C10.0691 17.1317 9.83974 17.3782 9.83974 17.6657V18.4463C9.83974 19.8226 8.73485 20.9113 7.33811 20.9113C5.94137 20.9113 4.83648 19.8226 4.83648 18.4463V17.6657C4.83648 17.3576 4.58632 17.1317 4.29446 17.1317H1.10489V4.86835H3.71075V5.0943C3.71075 7.04575 5.31596 8.64799 7.31726 8.64799C9.31857 8.64799 10.9238 7.04575 10.9238 5.0943V4.86835H13.5296V8.17554C13.5296 8.48366 13.7798 8.73016 14.0717 8.73016H14.8638C14.8638 8.73016 14.9472 8.73016 14.9889 8.73016C15.0723 8.73016 15.1557 8.73016 15.2182 8.7507C15.2808 8.7507 15.3642 8.77124 15.4267 8.79178C15.4267 8.79178 15.4267 8.79178 15.4476 8.79178C15.5726 8.81232 15.6769 8.85341 15.802 8.91503C15.8645 8.93557 15.927 8.97666 15.9896 8.9972C15.9896 8.9972 16.0104 8.9972 16.0313 8.9972C16.073 8.9972 16.0938 9.03828 16.1355 9.05882C16.198 9.09991 16.2606 9.14099 16.344 9.18207C16.3857 9.22316 16.4482 9.26424 16.4899 9.30532C16.4899 9.30532 16.5107 9.32586 16.5316 9.34641C16.5524 9.36695 16.5941 9.40803 16.615 9.42857C16.6358 9.44911 16.6775 9.4902 16.6984 9.51074C16.7192 9.53128 16.7609 9.57236 16.7818 9.5929C16.8651 9.67507 16.9277 9.77778 16.9902 9.88048C17.0319 9.94211 17.0736 10.0243 17.0945 10.0859C17.0945 10.127 17.1362 10.1475 17.1362 10.1886C17.1779 10.2913 17.2195 10.4146 17.2612 10.5378C17.2821 10.6611 17.3029 10.7843 17.3238 10.9076C17.3238 10.9486 17.3238 10.9897 17.3238 11.0308C17.3238 11.0308 17.3238 11.113 17.3238 11.1541C17.3238 11.2362 17.3238 11.3184 17.3238 11.4006L17.3446 11.4622Z"
                                                    fill="#F6AD57" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1415">
                                                    <rect width="32" height="22" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
    
                                    </div>
                                </div>
                                <p className="m-0">
                                    Kolay Entegrasyon
                                </p>
                            </div>
                            <div data-animation="zoomIn" data-animation-delay="50ms"
                                className="card-item d-flex justify-content-start align-items-center"
                                  style={{backgroundColor: "#36CBDF"}}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_1418)">
                                                <path
                                                    d="M24.7719 7.53334C24.2739 5.74261 22.9461 4.30178 21.2034 3.62254C20.1453 3.21087 18.9835 3.08737 17.8839 3.29321C16.3901 0.349811 12.7802 -0.844015 9.81335 0.637975C8.65153 1.2143 7.71792 2.14055 7.13701 3.29321C6.01667 3.08737 4.85485 3.21087 3.8175 3.62254C2.05402 4.30178 0.726217 5.74261 0.228292 7.53334C-0.29038 9.36525 0.0830639 11.3207 1.24489 12.8438C2.13701 13.9965 3.40257 14.7992 4.8341 15.0874V21.2006C4.8341 22.7443 6.09966 23.9999 7.65568 23.9999H17.3237C18.8797 23.9999 20.1453 22.7443 20.1453 21.2006V15.0874C21.5768 14.7992 22.8631 13.9965 23.7345 12.8438C24.8963 11.3412 25.2698 9.36525 24.7511 7.53334H24.7719ZM17.7387 21.2006C17.7387 21.427 17.5519 21.5917 17.3445 21.5917H7.65568C7.42746 21.5917 7.26149 21.4064 7.26149 21.2006V18.7923H17.7387V21.2006ZM21.8258 11.3824C21.1412 12.2881 20.0831 12.8232 18.942 12.8232H17.7387V16.4253H7.26149V12.8232H6.05817C4.91709 12.8232 3.859 12.3086 3.17435 11.403C2.46896 10.4973 2.24074 9.3035 2.57269 8.19201C2.88389 7.14226 3.65153 6.29835 4.68887 5.88669C5.12456 5.72202 5.60174 5.61911 6.05817 5.61911C6.5146 5.61911 6.97103 5.70144 7.40671 5.88669L8.67227 6.38068L9.02497 5.08394C9.54364 3.16971 11.5146 2.03763 13.4233 2.55221C14.6681 2.88154 15.6432 3.84895 15.9752 5.08394L16.3279 6.38068L17.5934 5.88669C19.4399 5.14569 21.5561 6.03077 22.3237 7.86267C22.3652 7.96559 22.4067 8.06851 22.4275 8.17142C22.7594 9.26233 22.5312 10.4562 21.8258 11.3618V11.3824Z"
                                                    fill="#36CBDF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1418">
                                                    <rect width="25" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
    
                                    </div>
                                </div>
                                <p className="m-0">
                                    Restoran Ekranları
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    
    
    
                <div className="advantages  w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container row m-0 w-100 justify-content-between align-items-start">
    
                        <div className="col-12 col-lg-6 p-0 ">
                            <h3 className="title mb-5" data-animation="zoomIn" data-animation-delay="50ms">
                                Avantajlarımız
                            </h3>
    
                            <div className="list-items w-100">
                                <div data-animation="zoomIn" data-animation-delay="50ms"
                                    className="list-item d-flex flex-row justify-content-start align-items-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center"></div>
                                    </div>
                                    <p className="m-0">
                                        Kurye uygulamamız ile teslimatlarınızı uçtan uca verimlilik ile yönetilmektedir.
                                    </p>
                                </div>
                                <div data-animation="zoomIn" data-animation-delay="50ms"
                                    className="list-item d-flex flex-row justify-content-start align-items-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center"></div>
                                    </div>
                                    <p className="m-0">
                                        Gün Sonu Kurye Mutabakatı yapmayacaksınız.
                                    </p>
                                </div>
                                <div data-animation="zoomIn" data-animation-delay="50ms"
                                    className="list-item d-flex flex-row justify-content-start align-items-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center"></div>
                                    </div>
                                    <p className="m-0">
                                        Kurye Arama, İşe Alma, İşten Çıkarma sorunlarıyla uğraşmayacaksınız.
                                    </p>
                                </div>
                                <div data-animation="zoomIn" data-animation-delay="50ms"
                                    className="list-item d-flex flex-row justify-content-start align-items-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center"></div>
                                    </div>
                                    <p className="m-0">
                                        Motor Bakım, Onarım İşleri ve Yakıt Maliyetleri ile ilgilenmeyeceksiniz.
                                    </p>
                                </div>
                                <div data-animation="zoomIn" data-animation-delay="50ms"
                                    className="list-item d-flex flex-row justify-content-start align-items-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center"></div>
                                    </div>
                                    <p className="m-0">
                                        Kurye İzin ve Vardiya Planlama işlerini yapmak zorunda kalmayacaksınız.
                                    </p>
                                </div>
                                <div data-animation="zoomIn" data-animation-delay="50ms"
                                    className="list-item d-flex flex-row justify-content-start align-items-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center"></div>
                                    </div>
                                    <p className="m-0">
                                        Kurye Takip ve İzlemeye zaman harcamayacaksınız.
                                    </p>
                                </div>
                                <div data-animation="zoomIn" data-animation-delay="50ms"
                                    className="list-item d-flex flex-row justify-content-start align-items-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center"></div>
                                    </div>
                                    <p className="m-0">
                                        ̇İptal, Eksik, Gecikmeli Ürün şikayetleriyle uğraşmayacaksınız.
                                    </p>
                                </div>
                                <div data-animation="zoomIn" data-animation-delay="50ms"
                                    className="list-item d-flex flex-row justify-content-start align-items-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="icon d-flex justify-content-center align-items-center"></div>
                                    </div>
                                    <p className="m-0">
                                        Hırsızlık, Çalınma gibi konularla ilgilenmeyeceksiniz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-animation="slideInLeft" data-animation-delay="50ms"
                            className="col-12 col-lg-5 advantages-img p-0 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
                            <img src="./images/advantages.png" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    )
}

export default About;