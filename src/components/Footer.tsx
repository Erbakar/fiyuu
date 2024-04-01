import { NavLink } from "react-router-dom"

const Footer = () => (
    <div className="footer w-100 d-flex justify-content-center align-items-center">
        <div className="page-container flex-column">
            <div data-animation="slideInUp" data-animation-delay="50ms"
                className="footer-card d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start">
                <div className="logo mb-4 mb-lg-5 d-flex justify-content-center align-items-center">
                    <img src="./images/footer-card-logo.png" alt="" />
                </div>

                <p className="footer-card__text mb-4 mb-lg-5">
                    Yoğun şehir ve iş hayatı içerisinde koşuşturan tüketicilerin ihtiyaç duydukları şeyleri, istedikleri
                    zaman, istedikleri yere, zamanında ve güvenilir bir şekilde ulaştırmak isteyen firmalara kurumsal
                    kurye desteği vermek amacı ile kuruldu.
                </p>


                <div
                    className="footer-card__buttons d-flex flex-column flex-lg-row justify-content-start align-items-center">
                    <div
                        className="footer-card__button d-flex justify-content-center align-items-center mb-5 mb-lg-0 me-lg-5">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <img src="./images/kurye.png" alt="" />
                        </div>

                        <NavLink to="/career">
                            <span>
                                Kurye Olmak Istiyorum
                            </span>
                        </NavLink>
                    </div>
                    <div className="footer-card__button d-flex justify-content-center align-items-center">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <img src="./images/is-ortagi.png" alt="" />
                        </div>
                        <NavLink to="/partner">
                            <span>
                                İş Ortağımız Olun
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="footer-content w-100">
                <div
                    className="footer-content__top w-100 d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
                    <div className="footer-content__top-logo d-none d-lg-flex justify-content-center align-items-center">
                        <img src="./images/footer-top-logo.png" alt="" />
                    </div>
                    <ul className="p-0 footer-content__top-links  m-0">
                        <li>
                            <NavLink to="/home">
                                Anasayfa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                Hakkımızda
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/career">
                                Kariyer
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/partner">
                                İş Ortağımız Olun
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">
                                Fiyuu’dan Haberler
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                İletişim
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="p-0 footer-content__top-social mt-5 mt-md-0 m-0">
                        <li>
                            <a href="https://www.linkedin.com/company/fiyuu/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <g clipPath="url(#clip0_34_1881)">
                                        <path
                                            d="M7.13176 5.51514C6.46179 5.51514 6.01514 6.07369 6.01514 6.68747C6.01514 7.24603 6.46179 7.74839 7.13176 7.74839C7.85745 7.74839 8.24839 7.24603 8.24839 6.63176C8.24839 6.0175 7.80174 5.51514 7.13176 5.51514Z"
                                            fill="white" />
                                        <path d="M8.24839 8.30713H6.01514V15.5659H8.24839V8.30713Z" fill="white" />
                                        <path
                                            d="M13.6089 8.41895C12.4366 8.41895 11.7661 9.08892 11.4871 9.53557H11.4314L11.3195 8.58656H9.30957C9.30957 9.20083 9.36528 9.92651 9.36528 10.7641V15.5658H11.5985V11.6017C11.5985 11.3784 11.5985 11.2108 11.6542 11.0431C11.8219 10.6522 12.1009 10.1498 12.7152 10.1498C13.497 10.1498 13.8318 10.8198 13.8318 11.7131V15.5658H16.065V11.4341C16.065 9.36796 15.0041 8.41895 13.6085 8.41895H13.6089Z"
                                            fill="white" />
                                        <path
                                            d="M17.2816 21.081H4.79938C2.42881 21.081 0.5 19.1522 0.5 16.7816V4.29938C0.5 1.92881 2.42881 0 4.79938 0H17.2812C19.6517 0 21.5805 1.92881 21.5805 4.29938V16.7812C21.5805 19.1517 19.6517 21.0805 17.2812 21.0805L17.2816 21.081ZM4.79938 1.17673C3.07777 1.17673 1.67673 2.57728 1.67673 4.29938V16.7812C1.67673 18.5028 3.07777 19.9038 4.79938 19.9038H17.2812C19.0028 19.9038 20.4038 18.5028 20.4038 16.7812V4.29938C20.4038 2.57777 19.0028 1.17673 17.2812 1.17673H4.79938Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_34_1881">
                                            <rect width="21.081" height="21.081" fill="white"
                                                transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/fiyuutr/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                    fill="none">
                                    <g clipPath="url(#clip0_34_1886)">
                                        <path
                                            d="M0.121582 5.64834C0.313309 4.67537 0.494673 3.7024 1.04394 2.83421C2.29794 0.863324 4.26185 0.104906 6.5263 0.0550104C9.60948 -0.0198335 12.6978 -0.0148439 15.7862 0.0550104C17.8797 0.104906 19.7451 0.768522 21.0198 2.51488C21.8386 3.64253 22.1443 4.92984 22.165 6.26206C22.2116 9.11611 22.2324 11.9751 22.165 14.8292C22.108 17.1294 21.2789 19.0903 19.0456 20.2579C18.0144 20.7967 16.8796 21.0313 15.724 21.0462C12.6771 21.0812 9.63021 21.1111 6.5833 21.0462C4.29812 20.9963 2.31349 20.2529 1.04394 18.262C0.494673 17.3988 0.313309 16.4209 0.121582 15.4479L0.121582 5.64834ZM11.1744 2.06582C9.6613 2.06582 8.14821 2.03588 6.63512 2.07081C4.27221 2.12569 2.82131 3.18847 2.39122 5.14938C2.29794 5.56352 2.23058 5.99263 2.23058 6.41674C2.21503 9.17599 2.17876 11.9352 2.23576 14.6945C2.29276 17.4388 3.73331 18.9057 6.48485 19.0055C9.58875 19.1153 12.6978 19.1053 15.8017 19.0055C18.0921 18.9306 19.4549 17.8728 19.8902 15.9668C19.9679 15.6275 20.0405 15.2783 20.0457 14.929C20.0612 11.7855 20.2426 8.63711 19.9472 5.49866C19.771 3.63754 18.4807 2.42507 16.5531 2.1706C14.7654 1.93609 12.9673 2.10074 11.1744 2.06582Z"
                                            fill="white" />
                                        <path
                                            d="M16.8641 10.5778C16.8538 13.5416 14.2991 15.9766 11.1641 16.0115C8.01878 16.0464 5.40715 13.5466 5.41751 10.508C5.42787 7.51919 8.07578 5.01442 11.1745 5.07429C14.3561 5.13417 16.8693 7.56909 16.859 10.5778H16.8641ZM14.7448 10.5529C14.7448 8.6668 13.1332 7.12003 11.1538 7.11005C9.18469 7.10007 7.54724 8.65183 7.54205 10.5329C7.54205 12.419 9.1536 13.9657 11.1331 13.9757C13.1021 13.9857 14.7396 12.4339 14.7448 10.5529Z"
                                            fill="white" />
                                        <path
                                            d="M17.0193 3.63733C17.7758 3.62735 18.4184 4.23109 18.4184 4.95458C18.4184 5.64315 17.7965 6.23691 17.0659 6.25687C16.3094 6.27682 15.6513 5.68306 15.6409 4.96456C15.6254 4.24107 16.2472 3.64731 17.0245 3.63733H17.0193Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_34_1886">
                                            <rect width="22.0849" height="21.081" fill="white"
                                                transform="translate(0.121582)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/fiyuu/?locale=tr_TR" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <g clipPath="url(#clip0_34_1879)">
                                        <path
                                            d="M21.081 10.5405C21.081 4.7191 16.3619 0 10.5405 0C4.7191 0 0 4.7191 0 10.5405C0 15.8018 3.85512 20.1634 8.89598 20.9559V13.5912H6.22063V10.5465H8.89598V8.22267C8.89598 5.58308 10.469 4.12325 12.8762 4.12325C14.0322 4.12325 15.2358 4.3318 15.2358 4.3318V6.92373H13.907C12.5962 6.92373 12.191 7.73408 12.191 8.56826V10.5465H15.1166L14.6519 13.5912H12.197V20.9559C17.2378 20.1634 21.0929 15.8018 21.0929 10.5405H21.081Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_34_1879">
                                            <rect width="21.081" height="21.081" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/fiyuutr" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <g clipPath="url(#clip0_34_1877)">
                                        <path
                                            d="M19.9859 18.9306L12.9222 8.90228L20.7525 0H18.9612L17.4278 1.73492L12.1234 7.7681L7.07074 0.594491L6.65211 0H0.443258L1.95754 2.15044L8.67588 11.6897L0.418945 21.081H2.21024L9.47428 12.8227L14.8723 20.4872L15.2911 21.0812H21.5L19.9857 18.9308L19.9859 18.9306ZM16.0292 19.7086L10.421 11.7459L9.62246 10.6124L3.11477 1.37246H5.91405L11.1768 8.84488L11.9754 9.97837L18.8285 19.7084H16.0292V19.7086Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_34_1877">
                                            <rect width="21.081" height="21.081" fill="white"
                                                transform="translate(0.418945)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="footer-content__bottom w-100 d-flex justify-content-center flex-column flex-lg-row justify-content-lg-between align-items-center">
                    <div
                        className="footer-content__bottom-addresses d-flex flex-column justify-content-start align-items-start flex-lg-row justify-content-lg-center align-items-lg-center">
                        <div
                            className="fc__addresses-item d-flex flex-column flex-lg-row justify-content-center align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center mb-4 mb-lg-0 me-lg-4">
                                <div className="icon-in">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="28" viewBox="0 0 21 28"
                                        fill="none">
                                        <g clipPath="url(#clip0_34_1873)">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M10.3478 14.6087C12.6973 14.6087 14.6087 12.6973 14.6087 10.3478C14.6087 7.99822 12.6973 6.08691 10.3478 6.08691C7.99822 6.08691 6.08691 7.99822 6.08691 10.3478C6.08691 12.6973 7.99822 14.6087 10.3478 14.6087ZM10.3478 7.30431C12.0278 7.30431 13.3913 8.66778 13.3913 10.3478C13.3913 12.0278 12.0278 13.3913 10.3478 13.3913C8.66778 13.3913 7.30431 12.0278 7.30431 10.3478C7.30431 8.66778 8.66778 7.30431 10.3478 7.30431Z"
                                                fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M17.5304 21.0548C17.0861 20.793 16.5626 20.5557 15.9843 20.3548C16.4896 19.813 17.0009 19.2226 17.4939 18.5896C19.2957 16.2461 20.6957 13.3548 20.6957 10.3478C20.6957 4.63826 16.0574 0 10.3478 0C4.63826 0 0 4.63826 0 10.3478C0 13.3548 1.4 16.2522 3.20174 18.5896C3.6887 19.2226 4.2 19.813 4.7113 20.3548C4.13304 20.5617 3.60957 20.7991 3.16522 21.0548C1.89913 21.7913 1.21739 22.753 1.21739 23.7391C1.21739 24.7252 1.89913 25.6809 3.16522 26.4235C4.78435 27.373 7.40174 28 10.3478 28C13.2939 28 15.9113 27.367 17.5304 26.4235C18.7965 25.687 19.4783 24.7252 19.4783 23.7391C19.4783 22.753 18.7965 21.7974 17.5304 21.0548ZM4.16348 17.847C2.52 15.7104 1.2113 13.087 1.2113 10.3478C1.2113 5.30783 5.30174 1.21739 10.3417 1.21739C15.3817 1.21739 19.4722 5.30783 19.4722 10.3478C19.4722 13.093 18.1635 15.7165 16.52 17.847C14.2374 20.8113 11.3826 22.8017 11.3826 22.8017C10.7557 23.24 9.92174 23.24 9.29478 22.8017C9.29478 22.8017 6.44 20.8113 4.15739 17.847H4.16348ZM16.9157 25.3704C15.4365 26.2348 13.0383 26.7826 10.3478 26.7826C7.65739 26.7826 5.25913 26.2348 3.78 25.3704C2.97652 24.9017 2.43478 24.3661 2.43478 23.7391C2.43478 23.1122 2.97043 22.5765 3.78 22.1078C4.30348 21.8035 4.94261 21.5357 5.66696 21.3226C7.25565 22.8565 8.58261 23.7817 8.61304 23.8C9.66 24.5304 11.0539 24.5304 12.0948 23.8C12.1191 23.7817 13.4461 22.8565 15.0409 21.3226C15.7652 21.5357 16.4043 21.8035 16.9278 22.1078C17.7313 22.5765 18.273 23.1122 18.273 23.7391C18.273 24.3661 17.7374 24.9017 16.9278 25.3704H16.9157Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_34_1873">
                                                <rect width="20.6957" height="28" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="content justify-content-center align-items-center d-flex flex-column justify-content-lg-start align-items-lg-start">
                                <h5>
                                    İletişim Adresi
                                </h5>
                                <a href="https://www.google.com/maps/place/Vadistanbul+Park+Site+Y%C3%B6netimi/@41.1118047,28.9409648,13z/data=!4m10!1m2!2m1!1s+Ayaza%C4%9Fa+Mahallesi+Kemerburgaz+Caddesi+Vadi+%C4%B0stanbul+Park+Sitesi,+7A+Blok+No:7B!3m6!1s0x14cab595e054f74d:0xc68d62447551be57!8m2!3d41.1125578!4d28.9843121!15sClBBeWF6YcSfYSBNYWhhbGxlc2kgS2VtZXJidXJnYXogQ2FkZGVzaSBWYWRpIMSwc3RhbmJ1bCBQYXJrIFNpdGVzaSwgN0EgQmxvayBObzo3QpIBEWFwYXJ0bWVudF9jb21wbGV44AEA!16s%2Fg%2F11fl454j5k?entry=ttu" target="_blank">
                                    Ayazağa Mahallesi Kemerburgaz Caddesi Vadi İstanbul Park Sitesi, 7A Blok No:7B İç
                                    Kapı No:26 Sarıyer/ İstanbul
                                </a>
                            </div>
                        </div>
                        <div
                            className="fc__addresses-item d-flex flex-column flex-lg-row justify-content-center align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center mb-4 mb-lg-0 me-lg-4">
                                <div className="icon-in">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28"
                                        fill="none">
                                        <g clipPath="url(#clip0_34_1862)">
                                            <path
                                                d="M28.3 9.74379L25 7.23123V2.87444C25 2.59806 24.775 2.37193 24.5 2.37193H18.63L16.315 0.608111C15.245 -0.205959 13.765 -0.205959 12.69 0.608111L10.375 2.37193H4.505C4.23 2.37193 4.005 2.59806 4.005 2.87444V7.2262L0.7 9.74379C0.585 9.84429 0.515 9.99002 0.5 10.1458V21.9749C0.5 22.2513 0.725 22.4775 1 22.4775C1.275 22.4775 1.5 22.2513 1.5 21.9749V11.1709L11.82 19.2363L1.93 26.2262C1.41 25.6684 1.5 24.6885 1.5 23.98C1.5 23.7036 1.27 23.4825 0.995 23.4825C0.725 23.4825 0.505 23.7036 0.5 23.98V24.985C0.51 26.6483 1.845 27.99 3.5 28.0001H25.5C27.155 27.99 28.49 26.6483 28.5 24.985V10.1408C28.5 9.985 28.425 9.83424 28.3 9.73876V9.74379ZM4 11.8493L1.82 10.1458L4 8.48751V11.8493ZM25 8.48751L27.18 10.1458L25 11.8493V8.48751ZM13.295 1.41213C14.01 0.869418 14.995 0.869418 15.71 1.41213L16.975 2.37193H12.03L13.295 1.41213ZM25.5 26.995H3.5C3.25 26.995 3.005 26.9448 2.775 26.8543L12.665 19.8644C13.775 20.6232 15.23 20.6232 16.34 19.8644L26.23 26.8543C26 26.9448 25.755 26.995 25.505 26.995H25.5ZM27.5 24.985C27.5 25.4373 27.35 25.8694 27.07 26.2262L17.18 19.2312L18.715 18.0302C18.935 17.8594 18.97 17.5428 18.805 17.3267C18.64 17.1106 18.32 17.0704 18.105 17.2363L15.93 18.9347C15.09 19.593 13.91 19.593 13.07 18.9347L5 12.6332V3.37696H24V12.6282L19.875 15.8543C19.66 16.0302 19.625 16.3468 19.8 16.5629C19.97 16.7739 20.275 16.8091 20.49 16.6483L27.5 11.1709V24.99V24.985Z"
                                                fill="white" />
                                            <path
                                                d="M10.965 7.84418C8.12995 10.5779 9.66995 15.6884 13.575 16.3366C14.75 16.5578 15.965 16.3517 17.005 15.7487C17.245 15.608 17.325 15.3015 17.185 15.0603C17.045 14.8191 16.74 14.7387 16.5 14.8794C15.67 15.3618 14.695 15.5276 13.75 15.3467C8.55495 14.1859 10.035 6.58288 15.285 7.45222C16.87 7.76378 18.115 9.01001 18.425 10.603C18.63 11.5628 18.535 13.0301 17.25 12.9899V9.69845C17.25 9.42207 17.02 9.20097 16.745 9.20097C16.6 9.20097 16.465 9.26629 16.37 9.37685C15.26 8.33665 13.525 8.39695 12.485 9.5075C11.45 10.6231 11.51 12.3668 12.615 13.412C13.575 14.3115 15.03 14.407 16.095 13.6382C17.11 14.2964 18.46 14.005 19.115 12.9849C19.27 12.7437 19.38 12.4723 19.43 12.1859C19.52 11.598 19.51 11 19.4 10.412C18.72 6.51755 13.66 4.99996 10.955 7.83916L10.965 7.84418ZM14.48 13.1356C13.53 13.1256 12.76 12.3517 12.75 11.3969C12.76 10.4271 13.555 9.6482 14.52 9.65825C15.47 9.6683 16.24 10.4422 16.25 11.3969C16.24 12.3668 15.445 13.1457 14.48 13.1356Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_34_1862">
                                                <rect width="28" height="28" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="content justify-content-center align-items-center d-flex flex-column justify-content-lg-start align-items-lg-start">
                                <h5>
                                    E-Mail
                                </h5>
                                <a href="mailto:info@fiyuu.com.tr">
                                    info@fiyuu.com.tr
                                </a>
                            </div>
                        </div>
                        <div
                            className="fc__addresses-item d-flex flex-column flex-lg-row justify-content-center align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center mb-4 mb-lg-0 me-lg-4">
                                <div className="icon-in">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28"
                                        fill="none">
                                        <g clipPath="url(#clip0_34_1866)">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M27.955 21.3336C26.7646 20.1432 24.6531 18.0318 23.4627 16.8414C23.1119 16.4905 22.6294 16.29 22.1345 16.29C21.6395 16.29 21.1571 16.4905 20.8062 16.8414L18.6196 19.0217C18.4191 19.2222 18.1183 19.2598 17.874 19.1282C16.859 18.4766 15.0671 17.211 13.1812 15.3251C11.2953 13.4392 10.036 11.6473 9.39066 10.6386C9.24656 10.3943 9.29042 10.081 9.48464 9.88051C10.0986 9.2665 10.9946 8.36429 11.665 7.69389C12.0159 7.34303 12.2163 6.8606 12.2163 6.36563C12.2163 5.87066 12.0159 5.38823 11.665 5.03737L7.17272 0.551354C6.82185 0.200492 6.33942 0 5.84445 0C5.34949 0 4.86705 0.200492 4.51619 0.551354L2.15414 2.9134C0.788288 4.27926 0.211873 6.25285 0.637919 8.13873C0.637919 8.13873 0.637919 8.13873 0.637919 8.145C1.33964 11.0835 3.15034 15.8452 7.90577 20.6006C12.6612 25.356 17.4229 27.1667 20.3613 27.8684C20.3613 27.8684 20.3613 27.8684 20.3676 27.8684C22.2535 28.2945 24.2208 27.7181 25.5867 26.3585C26.3887 25.5628 27.2971 24.6543 27.955 23.9964C28.3059 23.6456 28.5064 23.1631 28.5064 22.6682C28.5064 22.1732 28.3059 21.6908 27.955 21.3399V21.3336ZM27.0716 23.1067C26.42 23.7583 25.5115 24.6668 24.7033 25.4688C23.6444 26.5339 22.1094 26.9787 20.6496 26.6467C17.8489 25.9825 13.3191 24.247 8.79545 19.7172C4.27184 15.1873 2.53007 10.6637 1.85967 7.85679C1.53387 6.39069 1.97871 4.86194 3.03756 3.79682L5.39961 1.43477C5.51865 1.31573 5.67529 1.25308 5.84445 1.25308C6.01362 1.25308 6.17025 1.322 6.2893 1.43477L10.7816 5.92705C10.9006 6.0461 10.9633 6.20273 10.9633 6.3719C10.9633 6.54106 10.8944 6.6977 10.7816 6.81674C10.1112 7.48713 9.20897 8.38935 8.60122 9.00336C7.99348 9.6111 7.8807 10.5509 8.31928 11.2902C8.31928 11.2902 8.32555 11.3028 8.33181 11.3028C9.00221 12.3491 10.3242 14.235 12.2978 16.2085C14.2714 18.1821 16.1573 19.5041 17.2036 20.1808C17.2036 20.1808 17.2161 20.1871 17.2224 20.1933C17.9617 20.6382 18.9078 20.5191 19.5155 19.9051L21.6959 17.7248C21.8149 17.6057 21.9716 17.5431 22.1407 17.5431C22.3099 17.5431 22.4665 17.612 22.5856 17.7248L27.0778 22.2171C27.1969 22.3361 27.2595 22.4927 27.2595 22.6619C27.2595 22.8311 27.1906 22.9877 27.0778 23.1067H27.0716Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_34_1866">
                                                <rect width="28.0063" height="28" fill="white"
                                                    transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="content justify-content-center align-items-center d-flex flex-column justify-content-lg-start align-items-lg-start">
                                <h5>
                                    İletişim Hattı
                                </h5>
                                <a href="tel:08502207090">
                                    0850 220 70 90
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content__bottom-wp d-flex flex-column justify-content-start align-items-start">
                        <h5>
                            Kurye işe alım Whatsapp hattı
                        </h5>

                        <div className="d-flex justify-content-center align-items-center">
                            <div className="d-flex justify-content-center align-items-center">
                                <a  href="https://wa.me/905317637834" className="whatsapp-btn">
                                    <img src="./images/wp-icon.svg" alt="" />
                                </a>
                            </div>
                            <a  href="https://wa.me/905317637834" className="btn-footer ms-3">
                                <span>
                                    Fiyuu İnsan Kaynakları
                                </span>
                            </a>
                        </div>

                    </div>
                </div>

                <div
                    className="copyright w-100 d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
                    <span>
                        © fiyuu 2024
                    </span>

                    <ul className="p-0 m-0 d-flex flex-column flex-lg-row">
                        <li>
                            <NavLink to="/kisisel-verilerin-korunumu">
                                Kişisel Verilerin Korunması
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/kisisel-verilerin-korunumu">
                                Kişisel Verilerin İşlenmesi ve Aydınlatma Metni
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/kisisel-verilerin-korunumu">
                                Kişisel Verilerin Korunması ve İşlenmesi Politikası
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/kisisel-verilerin-korunumu">
                                Kvk Başvuru Formu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/kisisel-verilerin-korunumu">
                                Bilgi Toplumu Hizmetleri
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Footer