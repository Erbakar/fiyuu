// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { CITIES } from "../constants";
import Select from 'react-select'
import cx from "classnames";



const PAYMENT_OPTIONS = [
    {
        nane: 'Kredi Kartı (İnternetten Ödeme)',
        value: 'Kredi-Kartı-İnternetten-Ödeme',

        label: 'Kredi Kartı (İnternetten Ödeme)'
    },
    {
        nane: 'Kredi Kartı (Kapıda Ödeme)',
        value: 'Kredi-Kartı-Kapıda-Ödeme',

        label: 'Kredi Kartı (Kapıda Ödeme)'
    },
    {
        name: 'Nakit',
        value: 'Nakit',

        label: 'Nakit'
    },
    {
        name: 'Setcard Mobil Ödeme',
        value: 'Setcard-Mobil-Odeme',

        label: 'Setcard Mobil Ödeme'
    },
    {
        name: 'Ticket Mobil Ödeme',
        value: 'Ticket-Mobil-Odeme',

        label: 'Ticket Mobil Ödeme'
    },
    {
        name: 'Multinet Mobil Ödeme',
        value: 'Multinet-Mobil-Odeme',

        label: 'Multinet Mobil Ödeme'
    },
    {
        name: 'Sodexo Mobil Ödeme',
        value: 'Sodexo-Mobil-Ödeme',

        label: 'Sodexo Mobil Ödeme'
    },
    {
        name: 'Metropol Mobil',
        value: 'Metropol-Mobil',

        label: 'Metropol Mobil'
    },
    {
        name: 'Metropol',
        value: 'Metropol',

        label: 'Metropol'
    },
    {
        name: 'Smart Ticket',
        value: 'Smart-Ticket',

        label: 'Smart Ticket'
    },
    {
        name: 'Multinet',
        value: 'Multinet',

        label: 'Multinet'
    },
    {
        name: 'TicketKart',
        value: 'TicketKart',

        label: 'TicketKart'
    },
    {
        name: 'Paye Card',
        value: 'Paye-Card',

        label: 'Paye Card'
    },
    {
        name: 'SodexoKart',
        value: 'SodexoKart',

        label: 'SodexoKart'
    },
    {
        name: 'Set Card',
        value: 'Set-Card',

        label: 'Set Card'
    },
]

const Partner = () => {
    const cityRef = useRef(null);
    const [dateType, setDateType] = useState("text");
    const [formValid, setFormValid] = useState(false);
    const [tcValid, setTCValid] = useState(true);
    const [showTCMessage, setShowTCMessageset] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState(-1);
    const [whereDidYouSeeUs, setWhereDidYouSeeUs] = useState("");
    const animate = useAnimation()

    const [formData, setFormData] = useState({
        sektor: "",
        markaAdi: "",
        paketSayisi: "",
        kasaSistemi: "",
        mutfakTuru: "",
        odemeYontemleri: [],
        il: "",
        ilce: "",
        adres: "",
        isletmeTipi: "",
        subeSayisi: "",
        isletmeAttribute1: "",
        kendiKuryenizVarMi: "",
        adSoyad: "",
        tel: "",
        tc: "",
        dogumTarihi: "",
        email: "",
        cinsiyet: "",
        calismaSekli: "",
        ehliyetTipi: "",
        sirketTipi: "",
        referans: "",
        referansAdSoyad: "",
        gdpr: false,
        kvkk: false,
        aydinlatma: false,
    });

    const [errors, setErrors] = useState({
        sektor: false,
        markaAdi: false,
        paketSayisi: false,
        kasaSistemi: false,
        mutfakTuru: false,
        odemeYontemleri: false,
        il: false,
        ilce: false,
        adres: false,
        isletmeTipi: false,
        isletmeAttribute1: false,
        subeSayisi: false,
        kendiKuryenizVarMi: false,
        adSoyad: false,
        tel: false,
        tc: false,
        dogumTarihi: false,
        email: false,
        referans: false,
        referansAdSoyad: false,
        gdpr: false,
        kvkk: false,
        aydinlatma: false,
    });
    // Function to handle input changes
    const handleInputChange = (event) => {

        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validateForm();
        if (name === "il") {
            setSelectedDistrict(event.target.value);

        }
        console.log("formData", formData);

    };
    const handleSelectChange = (newValue) => {
        formData.odemeYontemleri = newValue.map((item) => item.value);
        validateForm();

    }
    useEffect(() => {
        animate();
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (cityRef.current) {
            cityRef.current.children[0].selected = true;
        }
    }, [selectedDistrict]);

    // Function to validate form data
    const validateForm = () => {
        const {
            sektor,
            markaAdi,
            paketSayisi,
            kasaSistemi,
            mutfakTuru,
            odemeYontemleri,
            il,
            ilce,
            adres,
            isletmeTipi,
            isletmeAttribute1,
            subeSayisi,
            kendiKuryenizVarMi,
            adSoyad,
            tel,
            tc,
            dogumTarihi,
            email,
            referans,
            referansAdSoyad,
            gdpr,
            kvkk,
            aydinlatma,
        } = formData;
        const birthDate = new Date(dogumTarihi);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        let total = 0;
        for (let i = 0; i < 10; i++) {
            total += parseInt(tc[i]);
        }

        const newErrors = {
            sektor: sektor === "" || sektor === "0",
            markaAdi: (sektor === "Restoran") && markaAdi.length < 2 || markaAdi.length === "",
            paketSayisi: paketSayisi.length < 1 || paketSayisi.length === "",
            kasaSistemi: kasaSistemi === "" || kasaSistemi === "0",
            mutfakTuru: mutfakTuru === "" || mutfakTuru === "0",
            odemeYontemleri: odemeYontemleri.length < 1,
            il: il === "" || il === "0",
            ilce: ilce === "" || ilce === "0",
            adres: adres.length < 15 || adres.length === "",
            isletmeTipi: isletmeTipi === "" || isletmeTipi === "0",
            isletmeAttribute1: isletmeAttribute1.length < 10 || isletmeAttribute1.length === "",
            subeSayisi: subeSayisi.length < 1 || subeSayisi.length === "",
            kendiKuryenizVarMi: kendiKuryenizVarMi === "" || kendiKuryenizVarMi === "0",
            adSoyad: adSoyad.length < 5 || adSoyad.length === "",
            tel: tel.length < 13 || tel.includes("_"),
            tc: tc.length !== 11 || total % 10 !== parseInt(tc[10]),
            dogumTarihi: dogumTarihi.length < 10 || age < 18,
            email: !/\S+@\S+\.\S+/.test(email),
            referans: referans === "" || referans === "0",
            referansAdSoyad: (referans === "isletme-referansi" || referans === "kurye-referansi") && referansAdSoyad.length < 5 || referansAdSoyad.length === "",
            gdpr: gdpr === false,
            kvkk: kvkk === false,
            aydinlatma: aydinlatma === false,
        };
        console.log("newErrors:", newErrors);


        setErrors(newErrors);

        return Object.values(newErrors).some((error) => error)
    };




    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form data if there are no errors

        if (!validateForm()) {
            // Your submission logic here
            console.log("Form submitted successfully:", formData);
            setFormValid(true);
            window.scrollTo(0, 600);
        } else {
            console.log("Form validation failed:", errors);
            setFormValid(false);
            window.scrollTo(0, 900);
        }
    }


    return (
        <div className="job-application-form-ctr d-flex justify-content-center flex-column align-items-center">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="page-banner-third w-100 d-flex justify-content-center align-items-center">
                    <div className="page-container d-flex flex-column justify-content-center align-items-center">
                        <div className="image d-flex justify-content-center align-items-center" data-animation="slideInUp">
                            <img src="/images/business-partner-form.png" alt="" />
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
                                fiyuu ile işbirliği yapmak için ilk adımı atıyorsunuz. Eğer siz de hızlı ve güvenilir teslimatı deneyimlemek isterseniz, başvuru formunu doldurup, işinizin büyümesine katkıda bulunabilirsiniz.
                            </p>
                        </div>
                        <div className="jaf-inner-form w-100">

                            <form
                                onSubmit={handleSubmit}
                                className="w-100 d-flex justify-content-center flex-column align-items-center"
                            >


                                <div className="form-content w-100 row m-0 justify-content-between">
                                    <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                        <h3>
                                            Müşteri bilgileri
                                        </h3>

                                    </div>


                                    <div className="col-12 col-lg-7 p-0 form-items d-flex flex-column">
                                        <div className="form-items">
                                            <div className="form-control-ctr">
                                                <select
                                                    id="sektor"
                                                    name="sektor"
                                                    value={formData.sektor}
                                                    onChange={handleInputChange}
                                                    className={
                                                        errors.sektor
                                                            ? "error-form-item-select"
                                                            : "form-select"
                                                    }
                                                >
                                                    <option value="0" defaultValue='0'>Sektör</option>
                                                    <option value="Restoran">Restoran</option>
                                                    <option value="Yeme-içme">Yeme-içme</option>
                                                    <option value="Petshop">Petshop</option>
                                                    <option value="Sağlık">Sağlık</option>
                                                    <option value="Kozmetik">Kozmetik</option>
                                                    <option value="Diğer">Diğer</option>
                                                </select>
                                            </div>
                                            <div className="form-control-ctr">

                                                <input
                                                    type="text"
                                                    placeholder="Marka Adı"
                                                    id="markaAdi"
                                                    name="markaAdi"
                                                    value={formData.markaAdi}
                                                    onChange={handleInputChange}
                                                    className={
                                                        errors.markaAdi ? "error-form-item" : "form-control"
                                                    }
                                                />

                                            </div>
                                            {(formData.sektor === "Restoran") && (


                                                <>

                                                    <div className="form-control-ctr">

                                                        <input
                                                            type="number"
                                                            placeholder="Günlük Ortalama Paket Sipariş Sayısı "
                                                            id="paketSayisi"
                                                            name="paketSayisi"
                                                            value={formData.paketSayisi}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.paketSayisi ? "error-form-item" : "form-control"
                                                            }
                                                        />
                                                    </div>

                                                    <div className="form-control-ctr">
                                                        <select
                                                            id="kasaSistemi"
                                                            name="kasaSistemi"
                                                            value={formData.kasaSistemi}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.kasaSistemi
                                                                    ? "error-form-item-select"
                                                                    : "form-select"
                                                            }
                                                        >
                                                            <option value="0" defaultValue='0'>Kasa Sistemi</option>
                                                            <option value="Entegre-pos">Entegre Pos Sistemi</option>
                                                            <option value="Pc">Pc / Laptop</option>
                                                            <option value="Tablet">Tablet</option>
                                                            <option value="Mobil-app">Mobil APP</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-control-ctr">
                                                        <select
                                                            id="mutfakTuru"
                                                            name="mutfakTuru"
                                                            value={formData.mutfakTuru}
                                                            onChange={handleInputChange}
                                                            className={
                                                                errors.mutfakTuru
                                                                    ? "error-form-item-select"
                                                                    : "form-select"
                                                            }
                                                        >
                                                            <option value="0" defaultValue='0'>Mutfak Türü</option>
                                                            <option value="burger">Burger</option>
                                                            <option value="döner">Döner</option>
                                                            <option value="kebap">Kebap</option>
                                                            <option value="pizza">Pizza</option>
                                                            <option value="tavuk">Tavuk</option>
                                                            <option value="mantı-makarna">Mantı & Makarna</option>
                                                            <option value="salata-saglik">Salata & Fit</option>
                                                            <option value="tatlı">Tatlı</option>
                                                            <option value="dondurma">Dondurma</option>
                                                            <option value="kahvaltı">Kahvaltı</option>
                                                            <option value="ev-yemekleri">Ev Yemekleri</option>
                                                            <option value="pide-lahmacun">Pide & Lahmacun</option>
                                                            <option value="pastane-fırın">Pastane & Fırın</option>
                                                            <option value="kahve-icecek">Kahve & İçecek</option>
                                                            <option value="tost-sandvic">Tost & Sandviç</option>
                                                            <option value="cigkofte">Çiğköfte</option>
                                                            <option value="uzak-dogu">Uzak Doğu</option>
                                                            <option value="sokak-yemekleri">Sokak Yemekleri</option>
                                                            <option value="balik-deniz-urunleri">Balık & Deniz Ürünleri</option>
                                                        </select>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <Select




                                            onChange={handleSelectChange}
                                            className={
                                                errors.odemeYontemleri ? "error-form-item-select-multi" : ''}
                                            placeholder="Ödeme Yöntemi"

                                            isMulti
                                            options={PAYMENT_OPTIONS}
                                        />


                                        <div className="d-flex flex-column flex-sm-row w-100 align-items-stretch">
                                            <div className="form-items flex-column d-flex w-100 w-sm-50 me-4 mb-sm-0">
                                                <div className="form-control-ctr">
                                                    <select
                                                        id="il"
                                                        name="il"
                                                        value={formData.il}
                                                        className={
                                                            errors.il ? "error-form-item-select" : "form-select"
                                                        }
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value={-1}> İl Seçiniz</option>
                                                        {CITIES.map((city, index) => (
                                                            <option key={index} value={index}>
                                                                {city.il}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-control-ctr">
                                                    <select
                                                        id="ilce"
                                                        name="ilce"
                                                        value={formData.ilce}
                                                        onChange={handleInputChange}
                                                        className={
                                                            errors.ilce
                                                                ? "error-form-item-select"
                                                                : "form-select"
                                                        }
                                                        disabled={selectedDistrict === -1}
                                                        ref={cityRef}
                                                    >
                                                        <option value="0" defaultValue="0">
                                                            {" "}
                                                            İlçe Seçiniz
                                                        </option>
                                                        {selectedDistrict !== -1 &&
                                                            CITIES[selectedDistrict].ilceleri.map(
                                                                (ilce, index) => (
                                                                    <option key={index} value={index}>
                                                                        {ilce}
                                                                    </option>
                                                                )
                                                            )}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-control-ctr w-100 w-sm-50 ms-sm-2 h-auto">
                                                <textarea
                                                    id="adres"
                                                    name="adres"
                                                    value={formData.adres}
                                                    maxLength="500"
                                                    onChange={handleInputChange}
                                                    className={
                                                        errors.adres ? "error-form-item h-100" : "form-control h-100"
                                                    }

                                                    placeholder="Adres"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-items">
                                            <div className="form-control-ctr">
                                                <select
                                                    id="isletmeTipi"
                                                    name="isletmeTipi"
                                                    value={formData.isletmeTipi}
                                                    onChange={handleInputChange}
                                                    className={
                                                        errors.isletmeTipi
                                                            ? "error-form-item-select"
                                                            : "form-select"
                                                    }
                                                >
                                                    <option value="0" defaultValue='0'>İşletme tipi</option>
                                                    <option value="Kurumsal">Kurumsal</option>
                                                    <option value="Bireysel">Bireysel</option>
                                                </select>
                                            </div>
                                            <div className="form-control-ctr ">
                                                {(formData.isletmeTipi !== "0" && formData.isletmeTipi !== '') && (

                                                    <input
                                                        type="text"
                                                        placeholder={formData.isletmeTipi === "Kurumsal" ? "Vergi No" : "TC Kimlik No"}
                                                        id="isletmeAttribute1"
                                                        name="isletmeAttribute1"
                                                        value={formData.isletmeAttribute1}
                                                        onChange={handleInputChange}
                                                        className={
                                                            errors.isletmeAttribute1 ? "error-form-item" : "form-control"
                                                        }
                                                    />

                                                )}

                                            </div>

                                            <div className="form-control-ctr">
                                                <input type="number" placeholder="Şube sayısı" id="subeSayisi" name="subeSayisi" value={formData.subeSayisi} onChange={handleInputChange} className={errors.subeSayisi ? "error-form-item" : "form-control"} />

                                            </div>
                                            <div className="form-control-ctr">
                                                <select
                                                    id="kendiKuryenizVarMi"
                                                    name="kendiKuryenizVarMi"
                                                    value={formData.kendiKuryenizVarMi}
                                                    onChange={handleInputChange}
                                                    className={
                                                        errors.kendiKuryenizVarMi
                                                            ? "error-form-item-select"
                                                            : "form-select"
                                                    }
                                                >
                                                    <option value="0" defaultValue='0'>Kendi kuryeniz var mı?</option>
                                                    <option value="kendikuryemvar">Kendi kuryem var</option>
                                                    <option value="kendikuryemyok">Kendi kuryem yok</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-content w-100 row m-0 justify-content-between">
                                    <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                        <h3>
                                            Kişisel bilgiler
                                        </h3>
                                    </div>

                                    <div className="col-12 col-lg-7 p-0">
                                        <div className="form-items">
                                            <div className="form-control-ctr ">
                                                <input
                                                    type="text"
                                                    placeholder="Ad Soyad"
                                                    id="adSoyad"
                                                    name="adSoyad"
                                                    value={formData.adSoyad}
                                                    onChange={handleInputChange}
                                                    className={
                                                        errors.adSoyad ? "error-form-item" : "form-control"
                                                    }
                                                />
                                            </div>
                                            <div className="form-control-ctr">
                                                <InputMask
                                                    type="tel"
                                                    mask="999 999 99 99"
                                                    placeholder="Cep Telefonu"
                                                    id="tel"
                                                    name="tel"
                                                    value={formData.tel}
                                                    onChange={handleInputChange}
                                                    className={
                                                        errors.tel ? "error-form-item" : "form-control"
                                                    }
                                                />

                                            </div>
                                        </div>
                                        <div className="form-items">
                                            <div className="form-control-ctr">
                                                <InputMask
                                                    type="tckn"
                                                    mask="99999999999"
                                                    placeholder="TC Kimlik No"
                                                    id="tc"
                                                    name="tc"
                                                    value={formData.tc}
                                                    onChange={handleInputChange}
                                                    className={
                                                        errors.tc ? "error-form-item" : "form-control"
                                                    }
                                                />
                                                {errors.tc && <small className="error-text">Geçersiz Kimlik Numarası</small>}
                                            </div>

                                            <div className="form-control-ctr">
                                                <input
                                                    type="email"
                                                    placeholder="E-posta"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={
                                                        errors.email ? "error-form-item" : "form-control"
                                                    }
                                                />
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
                                                    className={
                                                        errors.referans
                                                            ? "error-form-item-select"
                                                            : "form-select"
                                                    }
                                                    onChange={handleInputChange}
                                                >
                                                    <option value='0' defaultValue='0'>Bizi Nereden Gördünüz</option>
                                                    <option value="websitesi">Web Sitesi</option>
                                                    <option value="instagram">İnstagram</option>
                                                    <option value="linkedin">Linkedin</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="twitter">Twitter</option>
                                                    <option value="kurye-referansi">Kurye Referansı</option>
                                                    <option value="isletme-referansi">İşletme Referansı</option>
                                                    <option value="satis-temsilcisi">Satış temsilcisi</option>
                                                </select>
                                            </div>
                                        </div>

                                        {(formData.referans === "kurye-referansi" ||
                                            formData.referans === "isletme-referansi") && (
                                                <div className="form-control-ctr">
                                                    <input
                                                        type="text"
                                                        placeholder="Ad Soyad"
                                                        id="referansAdSoyad"
                                                        name="referansAdSoyad"
                                                        value={formData.referansAdSoyad}
                                                        onChange={handleInputChange}
                                                        className={
                                                            errors.referansAdSoyad
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
                                            <img src="/images/button-selected.svg" alt="" />
                                        ) : (
                                            <img src="/images/button-disabled.svg" alt="" />
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
                                                Aydınlatma Metni (işe alım süreçleri hakkında bilgi)
                                            </NavLink>
                                        </label>
                                    </span>
                                </div>


                                <div
                                    className="kvkk-onay"
                                >
                                    <button

                                        className={cx("disabledButton", {
                                            "error-form-item-button": errors.kvkk,
                                        })}
                                        type="button"
                                        onClick={() => {
                                            setFormData({ ...formData, kvkk: !formData.kvkk });
                                            setErrors({ ...errors, kvkk: false });
                                        }}
                                    >
                                        {formData.kvkk ? (
                                            <img src="/images/button-selected.svg" alt="" />
                                        ) : (
                                            <img src="/images/button-disabled.svg" alt="" />
                                        )}
                                    </button>
                                    <span>
                                        <input
                                            type="checkbox"
                                            className="kvkkCheckbox"
                                            style={{ display: "none" }}
                                            name="kvkk"
                                            onChange={handleInputChange}
                                        />
                                        <label className="ms-4">
                                            <NavLink to="/kisisel-verilerin-korunumu" target="blank">
                                                KVKK Onayı (Kişisel bilgilerimin Esnaf Kurye işe alım
                                                süreçlerinde kullanılmasını onaylıyorum.)
                                            </NavLink>
                                        </label>
                                    </span>
                                </div>

                                <div
                                    className="kvkk-onay"
                                >
                                    <button

                                        className={cx("disabledButton", {
                                            "error-form-item-button": errors.aydinlatma,
                                        })}
                                        type="button"
                                        onClick={() => {
                                            setFormData({
                                                ...formData,
                                                aydinlatma: !formData.aydinlatma,
                                            });
                                            setErrors({ ...errors, aydinlatma: false });
                                        }}
                                    >
                                        {formData.aydinlatma ? (
                                            <img src="/images/button-selected.svg" alt="" />
                                        ) : (
                                            <img src="/images/button-disabled.svg" alt="" />
                                        )}
                                    </button>
                                    <span>
                                        <input
                                            type="checkbox"
                                            className="kvkkCheckbox"
                                            style={{ display: "none" }}
                                            name="aydinlatma"
                                            onChange={handleInputChange}
                                        />
                                        <label className="ms-4">
                                            {" "}
                                            <NavLink
                                                to="https://fiyuu.com.tr/wp-content/uploads/2022/10/Kisisel-Verilerin-Korunmasi-ve-Islenmesi-Politikasi.pdf"
                                                target="blank"
                                            >
                                                Ticari Elektronik Bilgilendirme Metni (telefonlara giden
                                                mesajlar için onay)
                                            </NavLink>
                                        </label>
                                    </span>
                                </div>

                                <button
                                    className="g-recaptcha submit-btn d-flex mt-5 justify-content-center align-items-center"
                                    data-sitekey="6Lf6MsUpAAAAADM2SMMV1zeYGjRCHi-nc4-NSwvF"
                                    data-callback="onSubmit"
                                    data-action="submit"
                                >
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