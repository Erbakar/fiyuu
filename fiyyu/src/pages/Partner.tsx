import { useEffect } from "react";
import { useAnimation } from "../hooks/useAnimation";

const Partner = () => {
    const animate = useAnimation()

    useEffect(() => {
        animate()
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="job-application-form-ctr d-flex justify-content-center flex-column align-items-center">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="page-banner-third w-100 d-flex justify-content-center align-items-center">
                <div className="page-container d-flex flex-column justify-content-center align-items-center">
                    <div className="image d-flex justify-content-center align-items-center" data-animation="slideInUp">
                        <img src="./images/business-partner-form.png" alt=""/>
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
                            Anketin tamamlanması yaklaşık 4 dakika sürüyor. Merhaba, fiyuu ailesine katılmak için ilk
                            adımı atıyorsun. Biz "Çevik" ve "Müşteri Odaklı" adaylar arıyoruz. Eğer sen de ekibimize
                            katılmak istersen yapman gerekenler çok kolay! Bu başvuru formunu ayrıntılı ve özenli bir
                            şekilde doldur. İşe alım ekibimiz seninle hemen bağlantıya geçecek.
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
                                    <div className="form-items">
                                        <div className="form-control-ctr ">
                                            <input type="text" className="form-control" id="fullName"
                                                placeholder="Ad Soyad"/>
                                        </div>
                                        <div className="form-control-ctr">
                                            <input type="tel" className="form-control" id="phoneNumber"
                                                placeholder="Telefon"/>
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
                                    <div className="form-items mb-0">
                                        <div className="form-control-ctr">
                                            <select className="form-select" id="sektor">
                                                <option value="sektor-1" defaultValue='sektor-1'>Sektör 1</option>
                                                <option value="sektor-2">Sektör 2</option>
                                            </select>
                                        </div>
                                        <div className="form-control-ctr">
                                            <input type="text" className="form-control" id="marka-adi" placeholder="Marka Adı"/>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row w-100 align-items-stretch">
                                        <div className="form-items flex-column d-flex w-100 w-sm-50 me-4 mb-sm-0">
                                            <div className="form-control-ctr">
                                                <select className="form-select" id="city">
                                                    <option value="0">Lütfen Bir İl Seçiniz</option>
                                                </select>
                                            </div>
                                            <div className="form-control-ctr">
                                                <select className="form-select" id="district" disabled="disabled">
                                                    <option defaultValue='0' value="0">Lütfen Önce  İl seçiniz</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-control-ctr w-100 w-sm-50 ms-sm-2 h-auto">
                                            <textarea name="" id="" className="form-control h-100"
                                                placeholder="Adres"></textarea>
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
                                                <option value='0' defaultValue='0'>Bizi Nereden Gördünüz</option>
                                                <option value="Instagram">Instagram</option>
                                                <option value="Tiktok">Tiktok</option>
                                                <option value="Facebook">Facebook</option>
                                                <option value="Eleman.net">Eleman.net</option>
                                                <option value="sahibinden">Sahibinden</option>
                                                <option value="24saatteis">24 Saatte İş</option>
                                                <option value="yenibiris">Yeni Bir İş</option>
                                                <option value="bitoniş">Bitoniş</option>
                                                <option value="Calisan-refereansi">Çalışan Referansı</option>
                                                <option value="isin-olsun">İşin Olsun</option>
                                                <option value="secretcv">Secret CV</option>
                                                <option value="websitesi">Web Sitesi</option>
                                                <option value="Kariyer.net">Kariyer.net</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="kvkk-onay">
                                <button className="disabledButton">
                                    <img src="./images/button-disabled.svg" alt=""/>
                                </button>
                                <button className="selectedButton"   style={{display: "none"}}>
                                    <img src="./images/button-selected.svg" alt=""/>
                                </button>
                                <span>
                                    <input type="checkbox" className="kvkkCheckbox"   style={{display: "none"}}/>
                                    <label className="ms-4"><a href="./Musteri_Acik_Riza_-Aydinlatma_Metni.pdf"
                                            target="_blank">Aydınlatma Metni (işe alım süreçleri hakkında
                                            bilgi)</a></label>
                                </span>
                            </div>


                            <div className="kvkk-onay">
                                <button className="disabledButton">
                                    <img src="./images/button-disabled.svg" alt=""/>
                                </button>
                                <button className="selectedButton"   style={{display: "none"}}>
                                    <img src="./images/button-selected.svg" alt=""/>
                                </button>
                                <span>
                                    <input type="checkbox" className="kvkkCheckbox"  style={{display: "none"}}/>
                                    <label className="ms-4"><a href="./Kvk-Basvuru-Formu.pdf" target="_blank">KVKK Onayı
                                            (Kişisel bilgilerimin Esnaf Kurye işe
                                            alım
                                            süreçlerinde kullanılmasını onaylıyorum.)</a></label>
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
                                    <label className="ms-4"><a href="./bilgilendirme-metni.html">Ticari Elektronik
                                            Bilgilendirme Metni (telefonlara
                                            giden
                                            mesajlar için onay)</a></label>
                                </span>
                            </div>

                            <button
                                className="submit-btn d-flex mt-5 justify-content-center align-items-center">
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