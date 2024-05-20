// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { CITIES } from "../constants";
import cx from "classnames";
import ReCAPTCHA from "react-google-recaptcha";
const Kurye = () => {
    const cityRef = useRef(null);
    const [dateType, setDateType] = useState("date");
    const [userMessenge, setUserMessenge] = useState("text");
    const [errorMessenge, setErrorMessenge] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [tcValid, setTCValid] = useState(true);
    const [spinnerShow, isSpinnerShow] = useState(false);
    const [showTCMessage, setShowTCMessageset] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState(-1);
    const [whereDidYouSeeUs, setWhereDidYouSeeUs] = useState("");
    const [ReCAPTCHAValue, setReCAPTCHAValue] = useState("text");

    const animate = useAnimation();
    const [formData, setFormData] = useState({
        name: "",
        gsm: "",
        identityNumber: false,
        birthdate: "",
        email: "",
        gender: "",
        workType: "",
        province: "",
        county: "",
        drivingLicenceType: "",
        companyType: "",
        reference: "",
        referenceName: "",
        gdpr: false,
        clarification: false,
        commercial: false,
    });

    const [errors, setErrors] = useState({
        name: false,
        gsm: false,
        identityNumber: false,
        birthdate: false,
        email: false,
        gender: false,
        workType: false,
        province: false,
        county: false,
        drivingLicenceType: false,
        companyType: false,
        reference: false,
        referenceName: false,
        gdpr: false,
        clarification: false,
        commercial: false,
    });

    // Function to handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        
        const newFormData = { ...formData, [name]: value };
        setFormData(newFormData);

        if (name === "province") {
            setSelectedDistrict(event.target.value);
        }
        if (name === "birthdate" && value ==='') {
            setDateType("text")
        }
        if(name === 'identityNumber'){
            if(!TCValidation(value)){
                setErrors({...errors, identityNumber: false})
            }
            else{
                setErrors({...errors, identityNumber: true})
            }
        }

       
    };

    useEffect(() => {
        animate();
        window.scrollTo(0, 0);
        if (window.innerWidth > 640) {
            setDateType("text")
        }
    }, []);

    useEffect(() => {
        if (cityRef.current) {
            cityRef.current.children[0].selected = true;
        }
    }, [selectedDistrict]);

    // there is a problem with this function that I can't solve it yet , the problem is that the function is not returning the correct value

    const validateForm = ({
        name,
        gsm,
        identityNumber,
        birthdate,
        email,
        gender,
        workType,
        province,
        county,
        drivingLicenceType,
        companyType,
        reference,
        referenceName,
        gdpr,
        clarification,
        commercial,
    }) => {
        const birthDate = new Date(birthdate);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();


        const newErrors = {
            name: name.length < 5 || name.length === "",
            gsm: gsm.length < 10 || gsm.includes("_"),
            identityNumber: TCValidation(identityNumber),
            birthdate: birthdate.length < 10 || age < 18,
            email: !/\S+@\S+\.\S+/.test(email),
            gender: gender === "" || gender === "0",
            workType: workType === "" || workType === "0",
            province: province === "" || province === "-1",
            county: county === "" || county === "0",
            drivingLicenceType: drivingLicenceType === "" || drivingLicenceType === "0",
            companyType: companyType === "" || companyType === "0",
            reference: reference === "" || reference === "0",
            referenceName: (reference === "Calisan-refereansi" || reference === "KadınKuryeGetirKampanyasi") && referenceName.length < 5 || referenceName.length === "",
            gdpr: gdpr === false,
            clarification: clarification === false,
            commercial: commercial === false,
        };
        setErrors(newErrors);

        return Object.values(newErrors).some((error) => error)
    };
    function onChangeReCAPTCHA(value) {
        console.log("Captcha value:", value);
        setReCAPTCHAValue(value);
    }

    // Function to handle form submission
    const handleSubmit = (event) => {
        // Process form data if there are no errors

        event.preventDefault();
        if (!validateForm(formData)) {
            
            if (ReCAPTCHAValue === "text") {
                setErrorMessenge ("Lütfen ReCAPTCHA Doğrulamasını Yapınız");
                window.scrollTo(0, 600);
                return;
            }
            // Your submission logic here
            if (CITIES[formData.province]?.province) {
                const data = { ...formData };
                data.province = CITIES[data.province].province;
                data.referenceName = data.referenceName || "Referans Yok";
                const day =  new Date(data.birthdate).getDate();
                const month = new Date(data.birthdate).getMonth()  < 9 ? `0${new Date(data.birthdate).getMonth() + 1}` : new Date(data.birthdate).getMonth() + 1;
                const year = new Date(data.birthdate).getFullYear();
                data.birthdate = `${day}.${month}.${year}`;  
                data.gsm = data.gsm.replace(/\s/g, "");
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const raw = JSON.stringify({ data });
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"

                };
                isSpinnerShow(true);
                fetch('https://gatewayv2.dev.fiyuu.com.tr/carrier/new', requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        if (result.code === 100) {
                            setFormValid(true);
                            setUserMessenge(result.message);
                            
                            window.scrollTo(0, 600);
                        } else {
                            setErrorMessenge(result.message);
                            window.scrollTo(0, 600);
                        }
                        isSpinnerShow(false);
                    })
                    .catch((error) => {
                        isSpinnerShow(false);
                     });
            }
            else {
                setErrorMessenge ("Lütfen İl ve İlçe Seçiniz");
                
                window.scrollTo(0, 600);
            }

        } else {
            setErrorMessenge ("Lütfen Tüm Alanları Doldurunuz");
            window.scrollTo(0, 600);
        }

    };

    const TCValidation = (value) => {
        let total = 0;
        for (let i = 0; i < 10; i++) {
            total += parseInt(value[i]);
        }

        if (total % 10 !== parseInt(value[10])) {
            return true;
        }
    }

    const handleTCSubmit = (event) => {
        const tcValue = document.getElementById("tcSorgulama").value

        let total = 0;
        for (let i = 0; i < 10; i++) {
            total += parseInt(tcValue[i]);
        }
        if (tcValue.length !== 11 || total % 10 !== parseInt(tcValue[10])) {
            setTCValid(false);

            window.scrollTo(0, 600);
            if (tcValue.length === 11 && !tcValue.includes("_")) {
                setShowTCMessageset(true);
            }
        } else {
            setTCValid(true);
            setShowTCMessageset(false);
            window.scrollTo(0, 900);
        }


        event.preventDefault();
    }

    return (

        <div className="job-application-form-ctr d-flex justify-content-center flex-column align-items-center">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="page-banner-third w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container d-flex flex-column justify-content-center align-items-center">
                        <div
                            className="image d-flex justify-content-center align-items-center"
                            data-animation="slideInUp"
                            data-animation-delay="50ms"
                        >
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
                            <p data-animation="zoomIn" data-animation-delay="50ms">    fiyuu ailesine katılmak için ilk adımı atıyorsun. Biz "Çevik" ve "Müşteri Odaklı" adaylar arıyoruz. Eğer sen de ekibimize katılmak istersen, yapman gereken başvuru formunu ayrıntılı ve özenli bir şekilde doldurmak. Sonrasında İşe Alım ekiplerimiz seninle bağlantıya geçecek.
                            </p>
                        </div>
                        {tcValid ? (
                            <div className="jaf-inner-form w-100">
                                {formValid ? (

                                    <div className="result w100" style={{ color: "#e61b80" }}>{userMessenge}</div>
                                ) : (
                                    
                                    <form
                                        onSubmit={handleSubmit}
                                        style={{ position: "relative"}}  
                                        className="w-100 d-flex justify-content-center flex-column align-items-center"
                                    >
                                           {errorMessenge  ? (  <div className="warning"> {errorMessenge} </div>) : null}  
                                        <div className="form-content w-100 row m-0 justify-content-between">
                                            <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                                <h3>Kişisel Bilgiler</h3>
                                            </div>

                                            <div className="col-12 col-lg-7 p-0">
                                                <div className="form-items w-100">
                                                    <div className="form-control-ctr">
                                                        <input
                                                            type="text"
                                                            placeholder="Ad Soyad *"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.name ? "error-form-item" : "form-control"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-control-ctr">
                                                        <InputMask
                                                            type="gsm"
                                                            mask="999 999 99 99"
                                                            placeholder="Cep Telefonu *"
                                                            id="gsm"
                                                            name="gsm"
                                                            value={formData.gsm}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.gsm ? "error-form-item" : "form-control"
                                                            }
                                                        />

                                                    </div>

                                                    <div className="form-control-ctr">
                                                        <InputMask
                                                            type="tckn"
                                                            mask="99999999999"
                                                            placeholder="TC Kimlik No *"
                                                            id="identityNumber"
                                                            name="identityNumber"
                                                            value={formData.identityNumber}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.identityNumber ? "error-form-item" : "form-control"
                                                            }
                                                        />
                                                        {errors.identityNumber && <small className="error-text">Geçersiz Kimlik Numarası</small>}
                                                    </div>
                                                    <div className="form-control-ctr birthdate-label" >
                                                        <label htmlFor="birthdate">Doğum Tarihinizi Giriniz *</label>
                                                        <input
                                                            style={{width: "100%"}}
                                                            type={dateType}
                                                            onClick={() => setDateType("date")}
                                                            placeholder="Doğum Tarihinizi Giriniz *"
                                                            id="birthdate"
                                                            name="birthdate"
                                                            value={formData.birthdate}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.birthdate
                                                                    ? "error-form-item"
                                                                    : "form-control"
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-items d-flex">
                                                    <div className="form-control-ctr">
                                                        <input
                                                            type="email"
                                                            placeholder="E-posta *"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.email ? "error-form-item" : "form-control"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-control-ctr">
                                                        <select
                                                            id="gender"
                                                            name="gender"
                                                            value={formData.gender}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.gender
                                                                    ? "error-form-item-select"
                                                                    : "form-select"
                                                            }
                                                        >
                                                            <option value="0" defaultValue="0">
                                                                Cinsiyet *
                                                            </option>
                                                            <option value="Kadın">Kadın</option>
                                                            <option value="Erkek">Erkek</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-content w-100 row m-0 justify-content-between">
                                            <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                                <h3>Çalışma Şekli</h3>
                                                <p>Çalışmak istediğiniz yeri ve zamanları seçiniz</p>
                                            </div>

                                            <div className="col-12 col-lg-7 p-0 form-items d-flex flex-column">
                                                <div className="form-items-secondary">
                                                    <div className="form-control-ctr">
                                                        <select
                                                            id="workType"
                                                            name="workType"
                                                            value={formData.workType}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.workType
                                                                    ? "error-form-item-select"
                                                                    : "form-select"
                                                            }
                                                        >
                                                            <option value="0" defaultValue="0">
                                                                Çalışma Zamanı *
                                                            </option>
                                                            <option value="Tam Zamanlı">Tam Zamanlı</option>
                                                            <option value="Yarı Zamanlı">Yarı Zamanlı</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-control-ctr">
                                                        <select
                                                            id="province"
                                                            name="province"
                                                            value={formData.province}
                                                            className={
                                                                errors.province ? "error-form-item-select" : "form-select"
                                                            }
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value={-1}> İl Seçiniz *</option>
                                                            {CITIES.map((city, index) => (
                                                                <option key={index} value={index}>
                                                                    {city.province}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="form-control-ctr">
                                                        <select
                                                            id="county"
                                                            name="county"
                                                            value={formData.county}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.county
                                                                    ? "error-form-item-select"
                                                                    : "form-select"
                                                            }
                                                            disabled={selectedDistrict === -1}
                                                            ref={cityRef}
                                                        >
                                                            <option value="0" defaultValue="0">
                                                                {" "}
                                                                İlçe Seçiniz *
                                                            </option>
                                                            {selectedDistrict !== -1 &&
                                                                CITIES[selectedDistrict].ilceleri.map(
                                                                    (county, index) => (
                                                                        <option key={index} value={county}>
                                                                            {county}
                                                                        </option>
                                                                    )
                                                                )}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-items">
                                                    <div className="form-control-ctr">
                                                        <select
                                                            id="drivingLicenceType"
                                                            name="drivingLicenceType"
                                                            value={formData.drivingLicenceType}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.drivingLicenceType
                                                                    ? "error-form-item-select"
                                                                    : "form-select"
                                                            }
                                                        >
                                                            <option value="0" defaultValue="0">
                                                                Ehliyet tipi seçin *
                                                            </option>
                                                            <option value="A">A</option>
                                                            <option value="B">B</option>
                                                            <option value="C">C</option>
                                                            <option value="D">D</option>
                                                            <option value="E">E</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-control-ctr">
                                                        <select
                                                            id="companyType"
                                                            name="companyType"
                                                            value={formData.companyType}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.companyType
                                                                    ? "error-form-item-select"
                                                                    : "form-select"
                                                            }
                                                        >
                                                            <option value="0" defaultValue="0">
                                                                Şirket tipi seçin *
                                                            </option>
                                                            <option value="Şahıs Şirketim Var">Şahıs Şirketim Var</option>
                                                            <option value="Şahıs Şirketim Yok">Şahıs şirketim Yok</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-content w-100 row m-0 justify-content-between border-0">
                                            <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                                <h3>Bizi Nereden Gördünüz</h3>
                                            </div>

                                            <div className="col-12 col-lg-7 p-0 form-items d-flex flex-column">
                                                <div className="form-items w-100  d-flex">
                                                    <div className="form-control-ctr">
                                                        <select
                                                            id="reference"
                                                            name="reference"
                                                            value={formData.reference}
                                                            className={
                                                                errors.reference
                                                                    ? "error-form-item-select"
                                                                    : "form-select"
                                                            }
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="0" defaultValue="0">
                                                                Bizi Nereden Gördünüz *
                                                            </option>
                                                            <option value="Instagram">Instagram</option>
                                                            <option value="Tiktok">Tiktok</option>
                                                            <option value="Facebook">Facebook</option>
                                                            <option value="Eleman.net">Eleman.net</option>
                                                            <option value="Sahibinden">Sahibinden</option>
                                                            <option value="24 Saatte İş">24 Saatte İş</option>
                                                            <option value="Yeni Bir İş">Yeni Bir İş</option>
                                                            <option value="Bitoniş">Bitoniş</option>
                                                            <option value="Çalışan Referansı">
                                                                Çalışan Referansı
                                                            </option>
                                                            <option value="İşin Olsun">İşin Olsun</option>
                                                            <option value="Secret CV">Secret CV</option>
                                                            <option value="Web Sitesi">Web Sitesi</option>
                                                            <option value="Kariyer.net">Kariyer.net</option>
                                                            <option value="Kadın Kurye Getir Kampanyası">
                                                                Kadın Kurye Getir Kampanyası
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {(formData.reference === "Çalışan Referansı" ||
                                                    formData.reference === "Kadın Kurye Getir Kampanyası") && (
                                                        <div className="form-control-ctr">
                                                            <input
                                                                type="text"
                                                                placeholder="Ad Soyad"
                                                                id="referenceName"
                                                                name="referenceName"
                                                                value={formData.referenceName}
                                                                onChange={handleInputChange}
                                                                className={
                                                                    errors.referenceName
                                                                        ? "error-form-item"
                                                                        : "form-control"
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                            </div>
                                        </div>

                                        <div
                                            className="kvkk-onay"

                                        >
                                            <button
                                                type="button"
                                                className={cx("disabledButton", {
                                                    "error-form-item-button": errors.gdpr,
                                                })}
                                                onClick={() => {
                                                    setFormData({ ...formData, gdpr: !formData.gdpr });
                                                    setErrors({ ...errors, gdpr: false });
                                                }}
                                            >
                                                {formData.gdpr ? (
                                                    <img src="./images/button-selected.svg" alt="" />
                                                ) : (
                                                    <img src="./images/button-disabled.svg" alt="" />
                                                )}
                                            </button>
                                            <span>
                                                <input
                                                    type="checkbox"
                                                    className="kvkkCheckbox"
                                                    style={{ display: "none" }}
                                                    name="gdpr"
                                                    onChange={handleInputChange}
                                                />
                                                <label className="ms-4">
                                                    <NavLink
                                                        to="https://fiyuu.com.tr/wp-content/uploads/2022/10/Musteri_Acik_Riza_-Aydinlatma_Metni.pdf"
                                                        target="_blank"
                                                    >
                                                        Aydınlatma Metni
                                                    </NavLink>
                                                </label>
                                            </span>
                                        </div>

                                        <div
                                            className="kvkk-onay"
                                        >
                                            <button

                                                className={cx("disabledButton", {
                                                    "error-form-item-button": errors.clarification,
                                                })}
                                                type="button"
                                                onClick={() => {
                                                    setFormData({ ...formData, clarification: !formData.clarification });
                                                    setErrors({ ...errors, clarification: false });
                                                }}
                                            >
                                                {formData.clarification ? (
                                                    <img src="./images/button-selected.svg" alt="" />
                                                ) : (
                                                    <img src="./images/button-disabled.svg" alt="" />
                                                )}
                                            </button>
                                            <span>
                                                <input
                                                    type="checkbox"
                                                    className="kvkkCheckbox"
                                                    style={{ display: "none" }}
                                                    name="clarification"
                                                    onChange={handleInputChange}
                                                />
                                                <label className="ms-4">
                                                    <NavLink to="/kisisel-verilerin-korunumu" target="blank">
                                                        KVKK Onayı
                                                    </NavLink>
                                                </label>
                                            </span>
                                        </div>

                                        <div
                                            className="kvkk-onay"
                                        >
                                            <button

                                                className={cx("disabledButton", {
                                                    "error-form-item-button": errors.commercial,
                                                })}
                                                type="button"
                                                onClick={() => {
                                                    setFormData({
                                                        ...formData,
                                                        commercial: !formData.commercial,
                                                    });
                                                    setErrors({ ...errors, commercial: false });
                                                }}
                                            >
                                                {formData.commercial ? (
                                                    <img src="./images/button-selected.svg" alt="" />
                                                ) : (
                                                    <img src="./images/button-disabled.svg" alt="" />
                                                )}
                                            </button>
                                            <span>
                                                <input
                                                    type="checkbox"
                                                    className="kvkkCheckbox"
                                                    style={{ display: "none" }}
                                                    name="commercial"
                                                    onChange={handleInputChange}
                                                />
                                                <label className="ms-4">
                                                    {" "}
                                                    <NavLink
                                                        to="https://fiyuu.com.tr/wp-content/uploads/2022/10/Kisisel-Verilerin-Korunmasi-ve-Islenmesi-Politikasi.pdf"
                                                        target="blank"
                                                    >
                                                        Ticari Elektronik Bilgilendirme Metni
                                                    </NavLink>
                                                </label>
                                            </span>
                                        </div>
                                        <br />
                                        <ReCAPTCHA
                                            sitekey="6LdCTN0pAAAAAMieGGlcfsEbecDczxfdShWnxD3Z"
                                            onChange={onChangeReCAPTCHA}
                                        />
                                        <br />
                                        
                                        <button
                                            className="submit-btn d-flex mt-5 justify-content-center align-items-center"
                                            type="submit"
                                            disabled={spinnerShow}
                                        >
                                            <span className="text-center d-inline-block">
                                            {spinnerShow ? <img src="./images/spinner.gif" style={{ width: "20px" }} alt="" /> : null} Hemen Başvur
                                            </span>
                                        </button>
                                    </form>
                                )}

                            </div>
                        ) : (
                            <div className="jaf-inner-form w-100">
                                <form
                                    className="w-100 d-flex justify-content-center flex-column align-items-center"
                                >

                                    <div className="form-control-ctr">
                                        <InputMask
                                            type="tckn"
                                            mask="99999999999"
                                            placeholder="TC Kimlik No"
                                            id="tcSorgulama"
                                            name="tcSorgulama"

                                            className={
                                                tcValid || !showTCMessage ? "form-control-tc" : "error-form-item"
                                            }
                                        />
                                    </div>

                                    <button
                                        className="submit-btn d-flex mt-5 justify-content-center align-items-center"
                                        onClick={handleTCSubmit}
                                    >
                                        <span className="text-center d-inline-block">
                                          Başvuru Sorgulama
                                        </span>
                                    </button>
                                </form>
                                {showTCMessage && (
                                    <div className="result" style={{ color: "#e61b80" }}>Daha önce başvuru yapantınız teşekkür ederiz. 24 saat içinde tarafınıza dönüş yapılacaktır.</div>

                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kurye;
