// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { CITIES } from "../constants";
import TCValidation from "../components/TCValidation";
const Kurye = () => {

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

            disabledButton.addEventListener("click", function (event) {
                console.log('disabledButton' , event);
                
                event.preventDefault();
                kvkkCheckbox.checked = true;
                selectedButton.style.display = "inline-block";
                disabledButton.style.display = "none";
            });

            selectedButton.addEventListener("click", function (event) {
                console.log('selectedButton' , event);
                event.preventDefault();
                kvkkCheckbox.checked = false;
                selectedButton.style.display = "none";
                disabledButton.style.display = "inline-block";
            });
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (cityRef.current) {
            cityRef.current.children[0].selected = true
        }
    }, [selectedDistrict])
    const [formData, setFormData] = useState({
        adSoyad: '',
        tel: '',
        tc: '',
        dogumTarihi: '',
        email: '',
        cinsiyet: '',
        calismaSekli: '',
        il: '',
        ilce: '',
        ehliyetTipi: '',
        sirketTipi: '',
        referans: '',
        referansAdSoyad: '',
        gdpr: '',
    });

    const [errors, setErrors] = useState({
        adSoyad: false,
        tel: false,
        tc: false,
        dogumTarihi: false,
        email: false,
        cinsiyet: false,
        calismaSekli: false,
        il: false,
        ilce: false,
        ehliyetTipi: false,
        sirketTipi: false,
        referans: false,
        referansAdSoyad: false,
        gdpr: false,
    });

    // Function to handle input changes
    const handleInputChange = (event) => {
        console.log('name = ' + event.target.name, 'value = ' + event.target.value);
        // console.log('event' , event.target);


        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validateForm();
        if (name === 'il') {
            setSelectedDistrict(event.target.value)
        }
    };

    // Function to validate form data
    const validateForm = () => {
        const { adSoyad, tel, tc, dogumTarihi, email, cinsiyet, calismaSekli, il, ilce, ehliyetTipi, sirketTipi, referans, referansAdSoyad, gdpr } = formData;
        const birthDate = new Date(dogumTarihi);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        let total = 0;
        for (let i = 0; i < 10; i++) {
            total += parseInt(tc[i]);
        }
        const newErrors = {
            adSoyad: adSoyad.length < 5 || adSoyad.length === '',
            tel: tel.length < 13 || tel.includes('_'),
            tc: tc.length !== 11 || total % 10 !== parseInt(tc[10]),
            dogumTarihi: dogumTarihi.length < 10 || age < 18,
            email: !/\S+@\S+\.\S+/.test(email),
            cinsiyet: cinsiyet === '' || cinsiyet === '0',
            calismaSekli: calismaSekli === '' || calismaSekli === '0',
            il: il === '' || il === '0',
            ilce: ilce === '' || ilce === '0',
            ehliyetTipi: ehliyetTipi === '' || ehliyetTipi === '0',
            sirketTipi: sirketTipi === '' || sirketTipi === '0',
            referans: referans === '' || referans === '0',
            referansAdSoyad: referansAdSoyad.length < 5 || referansAdSoyad.length === '',
            gdpr: gdpr === false,
        };
        setErrors(newErrors);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {

        validateForm();
        // Process form data if there are no errors
        if (!Object.values(errors).some((error) => error)) {
            // Your submission logic here
            // console.log('Form submitted successfully:', formData);
        } else {
            // console.log('Form validation failed:', errors);
            window.scrollTo(0, 900);
        }
        event.preventDefault();
    };
    return (
        <div className="job-application-form-ctr d-flex justify-content-center flex-column align-items-center">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="page-banner-third w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container d-flex flex-column justify-content-center align-items-center">
                        <div className="image d-flex justify-content-center align-items-center" data-animation="slideInUp"
                            data-animation-delay="50ms">
                            <img src="./images/jaf-image.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="jaf-inner-ctr">
                    <div className="page-container jaf-inner pb-0 d-flex flex-column justify-content-center align-items-center">
                        <div className="jaf-inner-card">
                            <h1 data-animation="zoomIn" data-animation-delay="50ms">
                                Kurye olmak istiyorum
                            </h1>
                            <p data-animation="zoomIn" data-animation-delay="50ms">
                                Anketin tamamlanması yaklaşık 4 dakika sürüyor. Merhaba, fiyuu ailesine katılmak için ilk adımı atıyorsun. Biz "Çevik" ve "Müşteri Odaklı" adaylar arıyoruz. Eğer sen de ekibimize katılmak istersen yapman gereken başvuru formunu ayrıntılı ve özenli bir şekilde doldurmak. Sonrasında İşe Alım ekiplerimiz seninle bağlantıya geçecek.
                            </p>

                        </div>
                        <div className="jaf-inner-form w-100">

                            <form onSubmit={handleSubmit} className="w-100 d-flex justify-content-center flex-column align-items-center">
                                <div className="form-content w-100 row m-0 justify-content-between">
                                    <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                        <h3>
                                            Kişisel bilgiler
                                        </h3>

                                    </div>

                                    <div className="col-12 col-lg-7 p-0">

                                        <div className="form-items w-100">
                                            <div className="form-control-ctr">
                                                <input type="text" placeholder="Ad Soyad"
                                                    id="adSoyad"
                                                    name="adSoyad"
                                                    value={formData.adSoyad}
                                                    onChange={handleInputChange}
                                                    className={errors.adSoyad ? "error-form-item" : "form-control"}

                                                />
                                            </div>
                                            <div className="form-control-ctr">
                                                <InputMask
                                                    type="tel" mask="999 999 99 99" placeholder="Telefon"
                                                    id="tel"
                                                    name="tel"
                                                    value={formData.tel}
                                                    onChange={handleInputChange}
                                                    className={errors.tel ? "error-form-item" : "form-control"}
                                                />
                                            </div>
                                            {/* <TCValidation
                                            /> */}

                                            <div className="form-control-ctr">
                                                <InputMask type="tckn"
                                                    mask="99999999999" placeholder="TC Kimlik No"
                                                    id="tc"
                                                    name="tc"
                                                    value={formData.tc}
                                                    onChange={handleInputChange}
                                                    className={errors.tc ? "error-form-item" : "form-control"}
                                                />

                                            </div>
                                            <div className="form-control-ctr">
                                                <input
                                                    type={dateType}
                                                    onFocus={() => setDateType('date')}
                                                    onBlur={() => setDateType('text')}
                                                    placeholder="Doğum Tarihinizi Giriniz"
                                                    id="dogumTarihi"
                                                    name="dogumTarihi"
                                                    value={formData.dogumTarihi}
                                                    onChange={handleInputChange}
                                                    className={errors.dogumTarihi ? "error-form-item" : "form-control"}

                                                />
                                            </div>
                                        </div>
                                        <div className="form-items d-flex">
                                            <div className="form-control-ctr">
                                                <input type="email" placeholder="E-posta"

                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={errors.email ? "error-form-item" : "form-control"}
                                                />
                                            </div>
                                            <div className="form-control-ctr">
                                                <select
                                                    id="cinsiyet"
                                                    name="cinsiyet"
                                                    value={formData.cinsiyet}
                                                    onChange={handleInputChange}
                                                    className={errors.cinsiyet ? "error-form-item-select" : "form-select"}
                                                >
                                                    <option value="0" defaultValue='0'>Cinsiyet</option>
                                                    <option value="Kadın" >Kadın</option>
                                                    <option value="Erkek">Erkek</option>
                                                </select>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="form-content w-100 row m-0 justify-content-between">
                                    <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                        <h3>
                                            Çalışma Şekli
                                        </h3>
                                        <p>
                                            Çalışmak istediğiniz yeri ve zamanları seçiniz
                                        </p>
                                    </div>


                                    <div className="col-12 col-lg-7 p-0 form-items d-flex flex-column">
                                        <div className="form-items-secondary">
                                            <div className="form-control-ctr">
                                                <select
                                                    id="calismaSekli"
                                                    name="calismaSekli"
                                                    value={formData.calismaSekli}
                                                    onChange={handleInputChange}
                                                    className={errors.calismaSekli ? "error-form-item-select" : "form-select"}
                                                >
                                                    <option value="0" defaultValue='0'>Çalışma Zamanı</option>
                                                    <option value="tam_zamanli" >Tam Zamanlı</option>
                                                    <option value="yari_zamanli">Yarı Zamanlı</option>
                                                </select>
                                            </div>
                                            <div className="form-control-ctr">
                                                <select
                                                    id="il"
                                                    name="il"
                                                    value={formData.il}
                                                    className={errors.il ? "error-form-item-select" : "form-select"}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value={-1}> İl Seçiniz</option>
                                                    {CITIES.map((city, index) => (
                                                        <option key={index} value={index}>{city.il}</option>
                                                    ))}
                                                </select>

                                            </div>
                                            <div className="form-control-ctr">
                                                <select
                                                    id="ilce"
                                                    name="ilce"
                                                    value={formData.ilce}
                                                    onChange={handleInputChange}
                                                    className={errors.ilce ? "error-form-item-select" : "form-select"}

                                                    disabled={selectedDistrict === -1} ref={cityRef}>
                                                    <option value="0" defaultValue='0'> İlçe Seçiniz</option>
                                                    {selectedDistrict !== -1 && CITIES[selectedDistrict].ilceleri.map((ilce, index) => (
                                                        <option key={index} value={index}>{ilce}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-items">
                                            <div className="form-control-ctr">
                                                <select
                                                    id="ehliyetTipi"
                                                    name="ehliyetTipi"
                                                    value={formData.ehliyetTipi}
                                                    onChange={handleInputChange}
                                                    className={errors.ehliyetTipi ? "error-form-item-select" : "form-select"}
                                                >
                                                    <option value="0" defaultValue='0'>Ehliyet tipi seçin</option>
                                                    <option value="a">A</option>
                                                    <option value="b">B</option>
                                                    <option value="c">C</option>
                                                    <option value="d">D</option>
                                                    <option value="e">E</option>
                                                </select>
                                            </div>
                                            <div className="form-control-ctr">
                                                <select
                                                    id="sirketTipi"
                                                    name="sirketTipi"
                                                    value={formData.sirketTipi}
                                                    onChange={handleInputChange}
                                                    className={errors.sirketTipi ? "error-form-item-select" : "form-select"}
                                                >
                                                    <option value="0" defaultValue='0'>Şirket tipi seçin</option>
                                                    <option value="var">Şahıs Şirketim var</option>
                                                    <option value="yok">Şahıs şirketim yok</option>
                                                </select>
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
                                                <select
                                                    id="referans"
                                                    name="referans"
                                                    value={formData.referans}
                                                    className={errors.ehliyetTipi ? "error-form-item-select" : "form-select"}
                                                    onChange={handleInputChange}>
                                                    <option value="0" defaultValue='0'>Bizi Nereden Gördünüz</option>
                                                    <option value="Instagram">Instagram</option>
                                                    <option value="Tiktok">Tiktok</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="Eleman">Eleman.net</option>
                                                    <option value="sahibinden">Sahibinden</option>
                                                    <option value="24saatteis">24 Saatte İş</option>
                                                    <option value="yenibiris">Yeni Bir İş</option>
                                                    <option value="bitoniş">Bitoniş</option>
                                                    <option value="Calisan-refereansi">Çalışan Referansı</option>
                                                    <option value="isin-olsun">İşin Olsun</option>
                                                    <option value="secretcv">Secret CV</option>
                                                    <option value="websitesi">Web Sitesi</option>
                                                    <option value="Kariyer">Kariyer.net</option>
                                                    <option value="KadınKurye">Kadın Kurye Getir Bonusu</option>
                                                </select>
                                            </div>

                                        </div>

                                        {(formData.referans === "Calisan-refereansi" || formData.referans === "KadınKurye") && (
                                            <div className="form-control-ctr">
                                                <input type="text" placeholder="Ad Soyad"
                                                    id="referansAdSoyad"
                                                    name="referansAdSoyad"
                                                    value={formData.referansAdSoyad}
                                                    onChange={handleInputChange}
                                                    className={errors.referansAdSoyad ? "error-form-item" : "form-control"}
                                                />
                                            </div>
                                        )}



                                    </div>
                                </div>

                                <div className="kvkk-onay">
                                    <label className="disabledButton">
                                        <img src="./images/button-disabled.svg" alt="" />
                                    </label>
                                    <label className="selectedButton" style={{ display: "none" }}>
                                        <img src="./images/button-selected.svg" alt="" />
                                    </label>
                                    <span>
                                        <input type="checkbox" className="kvkkCheckbox"
                                            style={{ display: "none" }}
                                        />
                                        <label className="ms-4">
                                            <NavLink to="https://fiyuu.com.tr/wp-content/uploads/2022/10/Musteri_Acik_Riza_-Aydinlatma_Metni.pdf"
                                                target="_blank">Aydınlatma Metni (işe alım süreçleri hakkında
                                                bilgi)</NavLink>
                                        </label>
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
                                        <label className="ms-4">  <NavLink to="https://fiyuu.com.tr/wp-content/uploads/2022/10/Kisisel-Verilerin-Korunmasi-ve-Islenmesi-Politikasi.pdf" target="blank" >Ticari Elektronik
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


export default Kurye;