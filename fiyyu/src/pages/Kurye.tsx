import { useEffect } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { NavLink } from "react-router-dom";

const Kurye = () => {
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
    }, [])

    return (
        <div className="job-application-form-ctr d-flex justify-content-center flex-column align-items-center">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="page-banner-third w-100 d-flex justify-content-center align-items-center">
                <div className="page-container d-flex flex-column justify-content-center align-items-center">
                    <div className="image d-flex justify-content-center align-items-center" data-animation="slideInUp"
                        data-animation-delay="50ms">
                        <img src="./images/jaf-image.png" alt=""/>
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
                            Anketin tamamlanması yaklaşık 4 dakika sürüyor. Merhaba, fiyuu ailesine katılmak için ilk
                            adımı
                            atıyorsun. Biz "Çevik" ve "Müşteri Odaklı" adaylar arıyoruz. Eğer sen de ekibimize katılmak
                            istersen yapman gerekenler çok kolay! Bu başvuru formunu ayrıntılı ve özenli bir şekilde
                            doldur.
                            İşe alım ekibimiz seninle hemen bağlantıya geçecek.
                        </p>
                    </div>
                    <div className="jaf-inner-form w-100">
                        <form action="#" className="w-100 d-flex justify-content-center flex-column align-items-center">
                            <div className="form-content w-100 row m-0 justify-content-between">
                                <div className="col-12 col-lg-3 p-0 form-description mb-5 mb-lg-0">
                                    <h3>
                                        İletişim Bilgileri
                                    </h3>
    
                                </div>

                                <div className="col-12 col-lg-7 p-0">
                                    <div className="form-items w-100">
                                        <div className="form-control-ctr">
                                            <input type="text" className="form-control" id="fullName" placeholder="Ad Soyad"/>
                                        </div>
                                        <div className="form-control-ctr">
                                            <input type="tel" className="form-control" id="phoneNumber" placeholder="Telefon"/>
                                        </div>
                                        <div className="form-control-ctr">
                                            <input type="tckn" className="form-control" id="text" placeholder="TC Kimlik No"/>
                                        </div>
                                        <div className="form-control-ctr">
                                            <input type="date" className="form-control" id="birthdate"/>
                                        </div>
                                    </div>
                                    <div className="form-items w-100 d-flex">
                                        <div className="form-control-ctr">
                                            <input type="email" className="form-control" id="email" placeholder="E-posta"/>
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
                                            <select className="form-select" id="employmentType">
                                                <option value="0" defaultValue='0'>Çalışma Zamanı</option>
                                                <option value="tam_zamanli" >Tam Zamanlı</option>
                                                <option value="yari_zamanli">Yarı Zamanlı</option>
                                            </select>
                                        </div>
                                        <div className="form-control-ctr">
                                            <select className="form-select" id="city">
                                                <option value="0"> İl Seçiniz</option>
                                            </select>
                                        </div>
                                        <div className="form-control-ctr">
                                        <input type="text" className="form-control" id="ilce" placeholder="İlçe Adı"/>
                                        </div>
                                    </div>
                                    <div className="form-items">
                                        <div className="form-control-ctr">
                                            <select className="form-select" id="licenseType">
                                                <option value="0" defaultValue='0'>Ehliyet tipi seçin</option>
                                                <option value="a">A</option>
                                                <option value="b">B</option>
                                                <option value="c">C</option>
                                                <option value="d">D</option>
                                                <option value="e">E</option>
                                            </select>
                                        </div>
                                        <div className="form-control-ctr">
                                            <select className="form-select" id="companyType">
                                                <option value="0" defaultValue='0'>Şirket tipi seçin</option>
                                                <option value="type1">Şahıs Şirketim var</option>
                                                <option value="type2">Şahıs şirketim yok</option>
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
                                            <select className="form-select w-100" id="licenseType">
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
                                </div>
                            </div>

                            <div className="kvkk-onay">
                                <button className="disabledButton">
                                    <img src="./images/button-disabled.svg" alt=""/>
                                </button>
                                <button className="selectedButton"  style={{display: "none"}}>
                                    <img src="./images/button-selected.svg" alt=""/>
                                </button>
                                <span>
                                    <input type="checkbox" className="kvkkCheckbox"  style={{display: "none"}}/>
                                    <label className="ms-4"><NavLink to="/aydinlatma-metni" target="blank" 
                                            target="_blank">Aydınlatma Metni (işe alım süreçleri hakkında
                                            bilgi)</NavLink></label>
                                </span>
                            </div>

                            <div className="kvkk-onay">
                                <button className="disabledButton">
                                    <img src="./images/button-disabled.svg" alt=""/>
                                </button>
                                <button className="selectedButton"  style={{display: "none"}}>
                                    <img src="./images/button-selected.svg" alt=""/>
                                </button>
                                <span>
                                    <input type="checkbox" className="kvkkCheckbox"  style={{display: "none"}}/>
                                    <label className="ms-4"><NavLink to="/kisisel-verilerin-korunumu"  target="blank" >KVKK Onayı
                                            (Kişisel bilgilerimin Esnaf Kurye işe
                                            alım
                                            süreçlerinde kullanılmasını onaylıyorum.)</NavLink></label>
                                </span>
                            </div>


                            <div className="kvkk-onay">
                                <button className="disabledButton">
                                    <img src="./images/button-disabled.svg" alt=""/>
                                </button>
                                <button className="selectedButton"  style={{display: "none"}}>
                                    <img src="./images/button-selected.svg" alt=""/>
                                </button>
                                <span>
                                    <input type="checkbox" className="kvkkCheckbox"  style={{display: "none"}}/>
                                    <label className="ms-4">  <NavLink to="/bilgilendirme-metni"  target="blank" >Ticari Elektronik
                                            Bilgilendirme Metni (telefonlara
                                            giden
                                            mesajlar için onay)</NavLink></label>
                                </span>
                            </div>
                            <button  className="submit-btn d-flex mt-5 justify-content-center align-items-center">
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