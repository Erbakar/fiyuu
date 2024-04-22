import { NavLink } from "react-router-dom"
import clx from 'classnames'

const Header = () => (
    <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid p-0 w-100 justify-content-between align-items-center">
            <div className="navbar-left d-flex flex-row justify-content-start align-items-center">
                <NavLink
                            to="/"
                            className={({ isActive }) => clx('navbar-brand p-0 d-inline-block', {
                                'active': isActive
                            })}
                        >
                    <img src="./images/logo-header.png" alt="" />
                    </NavLink>
                <ul className="navbar-nav d-none d-lg-flex p-0 m-0">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => clx('nav-link', {
                                'active': isActive
                            })}
                        >
                            Anasayfa
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink
                            to="/about"
                            className={({ isActive }) => clx('nav-link', {
                                'active': isActive
                            })}
                        >
                            Hakkımızda
                        </NavLink>
            
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/partner"
                            className={({ isActive }) => clx('nav-link', {
                                'active': isActive
                            })}
                        >
                              İş Ortağımız Olun
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => clx('nav-link', {
                                'active': isActive
                            })}
                        >
                            Haberler
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => clx('nav-link', {
                                'active': isActive
                            })}
                        >
                            İletişim
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-right d-none d-lg-flex justify-content-start align-items-center">
                <a href="https://wa.me/905317637834" className="whatsapp-btn">
                    <img src="./images/wp-icon.svg" alt="" />
                </a>
                <a  href="https://wa.me/905317637834" className="btn-header me-5">
                    <span>
                      whatsapp hattı
                    </span>
                </a>
                <ul className="social-icons p-0 m-0 d-flex justify-content-center align-items-center">
                    <li>
                        <a href="https://www.linkedin.com/company/fiyuu/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <g clipPath="url(#clip0_34_2060)">
                                    <path
                                        d="M6.29179 5.23242C5.65617 5.23242 5.23242 5.76234 5.23242 6.34464C5.23242 6.87456 5.65617 7.35115 6.29179 7.35115C6.98026 7.35115 7.35115 6.87456 7.35115 6.29179C7.35115 5.70902 6.92741 5.23242 6.29179 5.23242Z"
                                        fill="#495980" />
                                    <path d="M7.35115 7.8811H5.23242V14.7677H7.35115V7.8811Z" fill="#495980" />
                                    <path
                                        d="M12.4363 7.9873C11.3241 7.9873 10.688 8.62292 10.4233 9.04667H10.3704L10.2643 8.14633H8.35742C8.35742 8.72909 8.41027 9.41757 8.41027 10.2122V14.7677H10.529V11.0068C10.529 10.795 10.529 10.636 10.5819 10.4769C10.7409 10.106 11.0056 9.62944 11.5884 9.62944C12.3302 9.62944 12.6477 10.2651 12.6477 11.1126V14.7677H14.7665V10.8478C14.7665 8.88765 13.76 7.9873 12.4359 7.9873H12.4363Z"
                                        fill="#495980" />
                                    <path
                                        d="M15.9211 20H4.07891C1.8299 20 0 18.1701 0 15.9211V4.07891C0 1.8299 1.8299 0 4.07891 0H15.9206C18.1696 0 19.9995 1.8299 19.9995 4.07891V15.9206C19.9995 18.1696 18.1696 19.9995 15.9206 19.9995L15.9211 20ZM4.07891 1.11639C2.44558 1.11639 1.11639 2.44512 1.11639 4.07891V15.9206C1.11639 17.554 2.44558 18.8831 4.07891 18.8831H15.9206C17.554 18.8831 18.8831 17.554 18.8831 15.9206V4.07891C18.8831 2.44558 17.554 1.11639 15.9206 1.11639H4.07891Z"
                                        fill="#495980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_2060">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/fiyuutr/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                fill="none">
                                <g clipPath="url(#clip0_34_2065)">
                                    <path
                                        d="M0 5.35849C0.181895 4.43541 0.353959 3.51234 0.875064 2.68867C2.06476 0.818847 3.92796 0.0993202 6.07629 0.0519829C9.00136 -0.0190231 11.9314 -0.0142893 14.8613 0.0519829C16.8474 0.0993202 18.6172 0.728906 19.8266 2.38571C20.6033 3.45553 20.8934 4.67684 20.9131 5.94074C20.9573 8.64843 20.977 11.3609 20.9131 14.0686C20.859 16.2508 20.0724 18.1112 17.9536 19.2188C16.9753 19.7301 15.8986 19.9526 14.8024 19.9668C11.9117 19.9999 9.02103 20.0283 6.13037 19.9668C3.96237 19.9194 2.07951 19.2141 0.875064 17.3254C0.353959 16.5064 0.181895 15.5786 0 14.6555L0 5.35849ZM10.486 1.95968C9.05052 1.95968 7.61503 1.93127 6.17953 1.96441C3.93779 2.01648 2.56128 3.02476 2.15325 4.88512C2.06476 5.27802 2.00085 5.68512 2.00085 6.08749C1.9861 8.70524 1.95169 11.323 2.00577 13.9407C2.05984 16.5443 3.42652 17.936 6.03696 18.0307C8.9817 18.1348 11.9314 18.1254 14.8761 18.0307C17.049 17.9597 18.3419 16.9561 18.7549 15.1478C18.8286 14.8259 18.8975 14.4946 18.9024 14.1632C18.9171 11.181 19.0892 8.19399 18.809 5.21648C18.6418 3.4508 17.4177 2.3005 15.5889 2.05908C13.8929 1.8366 12.187 1.99281 10.486 1.95968Z"
                                        fill="#495980" />
                                    <path
                                        d="M15.8841 10.0355C15.8743 12.8474 13.4506 15.1574 10.4764 15.1906C7.49232 15.2237 5.01461 12.8521 5.02444 9.96926C5.03428 7.13376 7.5464 4.75743 10.4862 4.81423C13.5047 4.87103 15.889 7.18109 15.8792 10.0355H15.8841ZM13.8734 10.0119C13.8734 8.22251 12.3445 6.75506 10.4666 6.74559C8.59844 6.73612 7.04496 8.20831 7.04004 9.99293C7.04004 11.7823 8.56894 13.2497 10.4469 13.2592C12.315 13.2687 13.8685 11.7965 13.8734 10.0119Z"
                                        fill="#495980" />
                                    <path
                                        d="M16.0316 3.4508C16.7493 3.44133 17.3589 4.01411 17.3589 4.7005C17.3589 5.35376 16.769 5.91707 16.0758 5.93601C15.3581 5.95494 14.7337 5.39163 14.7239 4.70997C14.7092 4.02358 15.2991 3.46027 16.0365 3.4508H16.0316Z"
                                        fill="#495980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_2065">
                                        <rect width="20.9524" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/fiyuu/?locale=tr_TR" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <g clipPath="url(#clip0_34_2057)">
                                    <path
                                        d="M20 10C20 4.47711 15.5229 0 10 0C4.47711 0 0 4.47711 0 10C0 14.9915 3.65743 19.1295 8.4398 19.8813V12.8943H5.90164V10.0057H8.4398V7.80102C8.4398 5.29678 9.93217 3.91181 12.2159 3.91181C13.3126 3.91181 14.4545 4.10967 14.4545 4.10967V6.56868H13.1939C11.9503 6.56868 11.5659 7.33748 11.5659 8.12889V10.0057H14.3414L13.9005 12.8943H11.5715V19.8813C16.3539 19.1295 20.0113 14.9915 20.0113 10H20Z"
                                        fill="#495980" />
                                    <path
                                        d="M13.8949 12.8887L14.3358 10.0001H11.5602V8.12332C11.5602 7.33191 11.9503 6.56312 13.1883 6.56312H14.4489V4.1041C14.4489 4.1041 13.307 3.90625 12.2103 3.90625C9.92652 3.90625 8.43415 5.29121 8.43415 7.79545V10.0001H5.896V12.8887H8.43415V19.8757C8.94292 19.9549 9.46298 20.0001 9.99436 20.0001C10.5257 20.0001 11.0458 19.9605 11.5546 19.8757V12.8887H13.8836H13.8949Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_2057">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/fiyuutr" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <g clipPath="url(#clip0_34_2055)">
                                    <path
                                        d="M18.5635 17.9598L11.8621 8.44578L19.2909 0H17.5914L16.1366 1.64595L11.1043 7.36976L6.31069 0.564006L5.91353 0H0.0230655L1.45969 2.04016L7.83352 11.0903L0 20H1.69944L8.59098 12.1651L13.7122 19.4367L14.1095 20.0002H20L18.5634 17.96L18.5635 17.9598ZM14.8098 18.6979L9.48919 11.1436L8.73156 10.0682L2.55758 1.30208H5.21331L10.2062 8.39132L10.9639 9.46668L17.4655 18.6978H14.8098V18.6979Z"
                                        fill="#495980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_2055">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path fill="currentColor" fillRule="evenodd"
                        d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75M0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8m.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"
                        clipRule="evenodd" /></svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-center p-0 mx-0 mt-5 mb-4">
                    <li className="nav-item">
                    <NavLink  to="/" className="nav-link" >
                            Anasayfa
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  to="/about" className="nav-link" >
                            Hakkımızda
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  to="/partner" className="nav-link" >
                            İş Ortağımız Olun
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  to="/blog" className="nav-link" >
                            Haberler
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  to="/contact" className="nav-link" >
                            İletişim
                        </NavLink>
                    </li>
                </ul>

                <a href="https://wa.me/905317637834" className="btn-header py-4 d-flex w-100 mb-4">
                    <span>
                        Fiyuu İnsan Kaynakları
                    </span>
                </a>
                <ul className="social-icons p-0 m-0 d-flex justify-content-center align-items-center">
                    <li>
                    <a href="https://www.linkedin.com/company/fiyuu/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <g clipPath="url(#clip0_34_2060)">
                                    <path
                                        d="M6.29179 5.23242C5.65617 5.23242 5.23242 5.76234 5.23242 6.34464C5.23242 6.87456 5.65617 7.35115 6.29179 7.35115C6.98026 7.35115 7.35115 6.87456 7.35115 6.29179C7.35115 5.70902 6.92741 5.23242 6.29179 5.23242Z"
                                        fill="#495980" />
                                    <path d="M7.35115 7.8811H5.23242V14.7677H7.35115V7.8811Z" fill="#495980" />
                                    <path
                                        d="M12.4363 7.9873C11.3241 7.9873 10.688 8.62292 10.4233 9.04667H10.3704L10.2643 8.14633H8.35742C8.35742 8.72909 8.41027 9.41757 8.41027 10.2122V14.7677H10.529V11.0068C10.529 10.795 10.529 10.636 10.5819 10.4769C10.7409 10.106 11.0056 9.62944 11.5884 9.62944C12.3302 9.62944 12.6477 10.2651 12.6477 11.1126V14.7677H14.7665V10.8478C14.7665 8.88765 13.76 7.9873 12.4359 7.9873H12.4363Z"
                                        fill="#495980" />
                                    <path
                                        d="M15.9211 20H4.07891C1.8299 20 0 18.1701 0 15.9211V4.07891C0 1.8299 1.8299 0 4.07891 0H15.9206C18.1696 0 19.9995 1.8299 19.9995 4.07891V15.9206C19.9995 18.1696 18.1696 19.9995 15.9206 19.9995L15.9211 20ZM4.07891 1.11639C2.44558 1.11639 1.11639 2.44512 1.11639 4.07891V15.9206C1.11639 17.554 2.44558 18.8831 4.07891 18.8831H15.9206C17.554 18.8831 18.8831 17.554 18.8831 15.9206V4.07891C18.8831 2.44558 17.554 1.11639 15.9206 1.11639H4.07891Z"
                                        fill="#495980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_2060">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/fiyuutr/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                fill="none">
                                <g clipPath="url(#clip0_34_2065)">
                                    <path
                                        d="M0 5.35849C0.181895 4.43541 0.353959 3.51234 0.875064 2.68867C2.06476 0.818847 3.92796 0.0993202 6.07629 0.0519829C9.00136 -0.0190231 11.9314 -0.0142893 14.8613 0.0519829C16.8474 0.0993202 18.6172 0.728906 19.8266 2.38571C20.6033 3.45553 20.8934 4.67684 20.9131 5.94074C20.9573 8.64843 20.977 11.3609 20.9131 14.0686C20.859 16.2508 20.0724 18.1112 17.9536 19.2188C16.9753 19.7301 15.8986 19.9526 14.8024 19.9668C11.9117 19.9999 9.02103 20.0283 6.13037 19.9668C3.96237 19.9194 2.07951 19.2141 0.875064 17.3254C0.353959 16.5064 0.181895 15.5786 0 14.6555L0 5.35849ZM10.486 1.95968C9.05052 1.95968 7.61503 1.93127 6.17953 1.96441C3.93779 2.01648 2.56128 3.02476 2.15325 4.88512C2.06476 5.27802 2.00085 5.68512 2.00085 6.08749C1.9861 8.70524 1.95169 11.323 2.00577 13.9407C2.05984 16.5443 3.42652 17.936 6.03696 18.0307C8.9817 18.1348 11.9314 18.1254 14.8761 18.0307C17.049 17.9597 18.3419 16.9561 18.7549 15.1478C18.8286 14.8259 18.8975 14.4946 18.9024 14.1632C18.9171 11.181 19.0892 8.19399 18.809 5.21648C18.6418 3.4508 17.4177 2.3005 15.5889 2.05908C13.8929 1.8366 12.187 1.99281 10.486 1.95968Z"
                                        fill="#495980" />
                                    <path
                                        d="M15.8841 10.0355C15.8743 12.8474 13.4506 15.1574 10.4764 15.1906C7.49232 15.2237 5.01461 12.8521 5.02444 9.96926C5.03428 7.13376 7.5464 4.75743 10.4862 4.81423C13.5047 4.87103 15.889 7.18109 15.8792 10.0355H15.8841ZM13.8734 10.0119C13.8734 8.22251 12.3445 6.75506 10.4666 6.74559C8.59844 6.73612 7.04496 8.20831 7.04004 9.99293C7.04004 11.7823 8.56894 13.2497 10.4469 13.2592C12.315 13.2687 13.8685 11.7965 13.8734 10.0119Z"
                                        fill="#495980" />
                                    <path
                                        d="M16.0316 3.4508C16.7493 3.44133 17.3589 4.01411 17.3589 4.7005C17.3589 5.35376 16.769 5.91707 16.0758 5.93601C15.3581 5.95494 14.7337 5.39163 14.7239 4.70997C14.7092 4.02358 15.2991 3.46027 16.0365 3.4508H16.0316Z"
                                        fill="#495980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_2065">
                                        <rect width="20.9524" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/fiyuu/?locale=tr_TR" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <g clipPath="url(#clip0_34_2057)">
                                    <path
                                        d="M20 10C20 4.47711 15.5229 0 10 0C4.47711 0 0 4.47711 0 10C0 14.9915 3.65743 19.1295 8.4398 19.8813V12.8943H5.90164V10.0057H8.4398V7.80102C8.4398 5.29678 9.93217 3.91181 12.2159 3.91181C13.3126 3.91181 14.4545 4.10967 14.4545 4.10967V6.56868H13.1939C11.9503 6.56868 11.5659 7.33748 11.5659 8.12889V10.0057H14.3414L13.9005 12.8943H11.5715V19.8813C16.3539 19.1295 20.0113 14.9915 20.0113 10H20Z"
                                        fill="#495980" />
                                    <path
                                        d="M13.8949 12.8887L14.3358 10.0001H11.5602V8.12332C11.5602 7.33191 11.9503 6.56312 13.1883 6.56312H14.4489V4.1041C14.4489 4.1041 13.307 3.90625 12.2103 3.90625C9.92652 3.90625 8.43415 5.29121 8.43415 7.79545V10.0001H5.896V12.8887H8.43415V19.8757C8.94292 19.9549 9.46298 20.0001 9.99436 20.0001C10.5257 20.0001 11.0458 19.9605 11.5546 19.8757V12.8887H13.8836H13.8949Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_2057">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/fiyuutr" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <g clipPath="url(#clip0_34_2055)">
                                    <path
                                        d="M18.5635 17.9598L11.8621 8.44578L19.2909 0H17.5914L16.1366 1.64595L11.1043 7.36976L6.31069 0.564006L5.91353 0H0.0230655L1.45969 2.04016L7.83352 11.0903L0 20H1.69944L8.59098 12.1651L13.7122 19.4367L14.1095 20.0002H20L18.5634 17.96L18.5635 17.9598ZM14.8098 18.6979L9.48919 11.1436L8.73156 10.0682L2.55758 1.30208H5.21331L10.2062 8.39132L10.9639 9.46668L17.4655 18.6978H14.8098V18.6979Z"
                                        fill="#495980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_2055">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header