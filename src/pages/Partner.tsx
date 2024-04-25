// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { CITIES } from "../constants";
import TCValidation from "../components/TCValidation";
const Partner = () => {
    const cityRef = useRef(null)
    const [dateType, setDateType] = useState("text")
    const [selectedDistrict, setSelectedDistrict] = useState(-1)
    const [whereDidYouSeeUs, setWhereDidYouSeeUs] = useState("")
    const animate = useAnimation()

    useEffect(() => {
        animate()
        window.scrollTo(0, 0);

        const checkboxGroups = document.querySelectorAll(".kvkk-onay");
        // Her bir grup için işlemleri yapıyoruz
        checkboxGroups.forEach(function (group) {
            const disabledButton = group.querySelector(".disabledButton");
            const selectedButton = group.querySelector(".selectedButton");
            const kvkkCheckbox = group.querySelector(".kvkkCheckbox");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const labelText = group.querySelector("label");

            disabledButton.addEventListener("click", function (event) {
                event.preventDefault();
                kvkkCheckbox.checked = true;
                selectedButton.style.display = "inline-block";
                disabledButton.style.display = "none";
            });

            selectedButton.addEventListener("click", function (event) {
                event.preventDefault();
                kvkkCheckbox.checked = false;
                selectedButton.style.display = "none";
                disabledButton.style.display = "inline-block";
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="job-application-form-ctr d-flex justify-content-center flex-column align-items-center">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="page-banner-third w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container d-flex flex-column justify-content-center align-items-center">
                        <div className="image d-flex justify-content-center align-items-center" data-animation="slideInUp">
                            <img src="./images/business-partner-form.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="jaf-inner-ctr">
                    <div className="page-container jaf-inner pb-0 d-flex flex-column justify-content-center align-items-center">
                        <div className="jaf-inner-card">
                            <h1 data-animation="zoomIn">
                                İş ortağı olmak istiyorum

                            </h1>
                            <p data-animation="zoomIn">
                                Anketin tamamlanması yaklaşık 4 dakika sürüyor. Merhaba, fiyuu ailesine katılmak için ilk adımı atıyorsun. Biz "Çevik" ve "Müşteri Odaklı" adaylar arıyoruz. Eğer sen de ekibimize katılmak istersen yapman gereken başvuru formunu ayrıntılı ve özenli bir şekilde doldurmak. Sonrasında İşe Alım ekiplerimiz seninle bağlantıya geçecek.
                            </p>
                        </div>
                        <div className="jaf-inner-form w-100">

                            <form action="#" className="w-100 d-flex justify-content-center flex-column align-items-center">
                                <div className="form-content w-100 row m-0 justify-content-between">
                                    <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                        <h3>
                                            Kişisel bilgiler
                                        </h3>
                                    </div>

                                    <div className="col-12 col-lg-7 p-0">
                                        <div className="form-items">
                                            <div className="form-control-ctr ">
                                                <input type="text" className="form-control" id="fullName"
                                                    placeholder="Ad Soyad" />
                                            </div>
                                            <div className="form-control-ctr">
                                                <InputMask type="tel" className="form-control" id="phoneNumber" mask="999 999 99 99" placeholder="Telefon" />
                                            </div>
                                        </div>
                                        <div className="form-items">
                                            <TCValidation />

                                            <div className="form-control-ctr">
                                                <input type="email" className="form-control" id="email" placeholder="E-posta" />
                                            </div>

                                        </div>



                                    </div>

                                </div>



                                <div className="form-content w-100 row m-0 justify-content-between">
                                    <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                        <h3>
                                            Müşteri bilgileri
                                        </h3>

                                    </div>


                                    <div className="col-12 col-lg-7 p-0 form-items d-flex flex-column">
                                        <div className="form-items">
                                            <div className="form-control-ctr">
                                                <select className="form-select" id="cisektorty">
                                                    <option value="0" defaultValue='0'>Sektör</option>
                                                    <option value="1">Restoran</option>
                                                    <option value="2">Yeme-içme</option>
                                                    <option value="2">Petshop</option>
                                                    <option value="2">Sağlık</option>
                                                    <option value="2">Kozmetik</option>
                                                    <option value="2">Diğer</option>
                                                </select>
                                            </div>

                                            <div className="form-control-ctr">
                                                <input type="text" className="form-control" id="marka-adi" placeholder="Marka Adı" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-sm-row w-100 align-items-stretch">
                                            <div className="form-items flex-column d-flex w-100 w-sm-50 me-4 mb-sm-0">
                                                <div className="form-control-ctr">
                                                    <select className="form-select" id="city" onChange={(e) => {
                                                        setSelectedDistrict(parseInt(e.target.value))
                                                    }}>
                                                        <option value={-1}> İl Seçiniz</option>
                                                        {CITIES.map((city, index) => (
                                                            <option key={index} value={index}>{city.il}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-control-ctr">
                                                    <select className="form-select form-disabled" id="city" disabled={selectedDistrict === -1} ref={cityRef}>
                                                        <option value="0" defaultValue='0'> İlçe Seçiniz</option>
                                                        {selectedDistrict !== -1 && CITIES[selectedDistrict].ilceleri.map((ilce, index) => (
                                                            <option key={index} value={index}>{ilce}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-control-ctr w-100 w-sm-50 ms-sm-2 h-auto">
                                                <textarea name="" id="" className="form-control h-100"
                                                    placeholder="Adres"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-items">
                                            <div className="form-control-ctr">
                                                <select className="form-select" id="city">
                                                    <option value="0" defaultValue='0'>İşletme tipi</option>
                                                    <option value="0">Kurumsal</option>
                                                    <option value="0">Bireysel</option>
                                                </select>
                                            </div>

                                            <div className="form-control-ctr">
                                                <InputMask type="branh" className="form-control" id="phoneNumber" mask="999" placeholder="Şube sayısı" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-content w-100 row m-0 justify-content-between border-0">
                                    <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                        <h3>
                                            Bizi Nereden Gördünüz
                                        </h3>

                                    </div>


                                    <div className="col-12 col-lg-7 p-0 form-items d-flex flex-column">

                                        <div className="form-items w-100  d-flex">
                                            <div className="form-control-ctr">
                                                <select className="form-select w-100" id="licenseType" onChange={(e) => setWhereDidYouSeeUs(e.target.value)}>
                                                    <option value='0' defaultValue='0'>Bizi Nereden Gördünüz</option>
                                                    <option value="websitesi">Web Sitesi</option>
                                                    <option value="instagram">İnstagram</option>
                                                    <option value="linkedin">Linkedin</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="twitter">Twitter</option>
                                                    <option value="esnaf-referansi">Esnaf referansı</option>
                                                    <option value="restoran-referansi">Restoran referansı</option>
                                                    <option value="satis-temsilcisi">Satış temsilcisi</option>
                                                </select>
                                            </div>
                                        </div>

                                        {(whereDidYouSeeUs === "esnaf-referansi" || whereDidYouSeeUs === "restoran-referansi") && (
                                            <div className="form-control-ctr">
                                                <input type="text" className="form-control" id="fullName" placeholder="Ad Soyad" />
                                            </div>
                                        )}

                                    </div>
                                </div>

                                <div className="kvkk-onay">
                                    <button className="disabledButton">
                                        <img src="./images/button-disabled.svg" alt="" />
                                    </button>
                                    <button className="selectedButton" style={{ display: "none" }}>
                                        <img src="./images/button-selected.svg" alt="" />
                                    </button>
                                    <span>
                                        <input type="checkbox" className="kvkkCheckbox" style={{ display: "none" }} />
                                        <label className="ms-4"><NavLink to="/aydinlatma-metni" target="blank" >Aydınlatma Metni (işe alım süreçleri hakkında
                                            bilgi)</NavLink></label>
                                    </span>
                                </div>


                                <div className="kvkk-onay">
                                    <button className="disabledButton">
                                        <img src="./images/button-disabled.svg" alt="" />
                                    </button>
                                    <button className="selectedButton" style={{ display: "none" }}>
                                        <img src="./images/button-selected.svg" alt="" />
                                    </button>
                                    <span>
                                        <input type="checkbox" className="kvkkCheckbox" style={{ display: "none" }} />
                                        <label className="ms-4"><NavLink to="/kisisel-verilerin-korunumu" target="blank" >KVKK Onayı
                                            (Kişisel bilgilerimin Esnaf Kurye işe
                                            alım
                                            süreçlerinde kullanılmasını onaylıyorum.)</NavLink></label>
                                    </span>
                                </div>


                                <div className="kvkk-onay">
                                    <button className="disabledButton">
                                        <img src="./images/button-disabled.svg" alt="" />
                                    </button>
                                    <button className="selectedButton" style={{ display: "none" }}>
                                        <img src="./images/button-selected.svg" alt="" />
                                    </button>
                                    <span>
                                        <input type="checkbox" className="kvkkCheckbox" style={{ display: "none" }} />
                                        <label className="ms-4"> <NavLink to="/bilgilendirme-metni" target="blank" >Ticari Elektronik
                                            Bilgilendirme Metni (telefonlara
                                            giden
                                            mesajlar için onay)</NavLink></label>
                                    </span>
                                </div>
                                <button
                                    className
                                    ="g-recaptcha submit-btn d-flex mt-5 justify-content-center align-items-center"
                                    data-sitekey="6Lf6MsUpAAAAADM2SMMV1zeYGjRCHi-nc4-NSwvF"
                                    data-callback='onSubmit'
                                    data-action='submit'>
                                    <span className="text-center d-inline-block">
                                        Hemen Başvur
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner;