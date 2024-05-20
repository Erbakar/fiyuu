// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState } from 'react';

function Earnings() {
    const [workStyle, setWorkStyle] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [avmValue, setAvmValue] = useState('');
    const [monthlyEarnings, setMonthlyEarnings] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hesaplama yapılacak
        if (workStyle && cityValue && avmValue) {
            const cityValue2 = cityValue.split('-')[1];
            const earnings = parseFloat(workStyle) * 26 * (parseFloat(cityValue2) + parseFloat(avmValue));
            setMonthlyEarnings(earnings.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.'));
        } else {
            alert('Lütfen tüm seçenekleri belirleyin.');
        }
    };

    return (
        <div className="calculate-earnings w-100 d-flex justify-content-center align-items-center">
            <div
                className="page-container d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between align-items-center">
                <div data-animation="slideInRight" data-animation-delay="50ms"
                    className="calculate-earnings__left w-100 d-flex justify-content-start align-items-center mb-5 mb-xl-0">
                    <div>
                        <div className="icon justify-content-center align-items-center me-5">
                            <img src="./images/motor.png" alt="" />
                        </div>
                    </div>
                    <div className="d-flex content justify-content-start align-items-start flex-column ms-lg-2">
                        <h3 className="mb-3">
                            Çalışma şeklini seç, kazancını öğren
                        </h3>
                        <p className="m-0">
                            Özel olarak seçilerek kurumsal bir eğitim sürecinden geçen fiyuu kuryeleri, tek bir merkezden
                            yönetilen ve sürekli denetlenen.
                        </p>
                    </div>
                </div>
                <div data-animation="slideInLeft" data-animation-delay="50ms"
                    className="calculate-earnings__right d-flex flex-column justify-content-start align-items-start">
                    <h3>
                        Kazancını hesapla!
                    </h3>

                    <form id="calculate-earnings-form" onSubmit={handleSubmit}>
                        <div className="content mb-5">


                            <div className="col">
                                <label className="form-check" htmlFor="flexRadioDefault1">
                                    <input className="form-check-input" value="25" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setWorkStyle(e.target.value)} />
                                    <label className="defaultValuem-check-label">
                                        Rahat çalışırım
                                    </label>
                                </label>
                                <label className="form-check" htmlFor="flexRadioDefault2">
                                    <input className="form-check-input" value="35" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e) => setWorkStyle(e.target.value)} />
                                    <label className="form-check-label">
                                        Hızlı çalışırım
                                    </label>
                                </label>
                                <label className="form-check" htmlFor="flexRadioDefault3">
                                    <input className="form-check-input" value="45" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={(e) => setWorkStyle(e.target.value)} />
                                    <label className="form-check-label">
                                        Benden hızlısı yok
                                    </label>
                                </label>
                            </div>
                            <div className="col">
                                <div className="select-ctr">
                                    <select className="form-select h-100" id="selectBox" value={cityValue} onChange={(e) => setCityValue(e.target.value)}>
                                        <option defaultValue="deafult" value="0" >Şehir seçiniz</option>
                                        <option value="Avrupa-54">İstanbul Avrupa</option>
                                        <option value="Anadolu-54">İstanbul Anadolu</option>
                                        <option value="Kocaeli-54">Kocaeli</option>
                                        <option value="Sakarya-54">Sakarya</option>
                                        <option value="Adana-48">Adana</option>
                                        <option value="Ankara-48">Ankara</option>
                                        <option value="Antalya-48">Antalya</option>
                                        <option value="Aydın-48">Aydın</option>
                                        <option value="Balıkesir-48">Balıkesir</option>
                                        <option value="Bolu-48">Bolu</option>
                                        <option value="Bursa-48">Bursa</option>
                                        <option value="Denizli-48">Denizli</option>
                                        <option value="Diyarbakır-48">Diyarbakır</option>
                                        <option value="Düzce-48">Düzce</option>
                                        <option value="Edirne-48">Edirne</option>
                                        <option value="Elazığ-48">Elazığ</option>
                                        <option value="Erzurum-48">Erzurum</option>
                                        <option value="Eskişehir-48">Eskişehir</option>
                                        <option value="Gaziantep-48">Gaziantep</option>
                                        <option value="İzmir-48">İzmir</option>
                                        <option value="Kayseri-48">Kayseri</option>
                                        <option value="Konya-48">Konya</option>
                                        <option value="Manisa-48">Manisa</option>
                                        <option value="Mersin-48">Mersin</option>
                                        <option value="Muğla-48">Muğla</option>
                                        <option value="Samsun-48">Samsun</option>
                                        <option value="Tekirdağ-48">Tekirdağ</option>
                                        <option value="Trabzon-48">Trabzon</option>
                                        <option value="Van-48">Van</option>
                                        <option value="Yalova-48">Yalova</option>
                                        <option value="Adıyaman-40">Adıyaman</option>
                                        <option value="Afyon-40">Afyon</option>
                                        <option value="Aksaray-40">Aksaray</option>
                                        <option value="Amasya-40">Amasya</option>
                                        <option value="Batman-40">Batman</option>
                                        <option value="Bilecik-40">Bilecik</option>
                                        <option value="Bingöl-40">Bingöl</option>
                                        <option value="Burdur-40">Burdur</option>
                                        <option value="Çanakkalev">Çanakkale</option>
                                        <option value="Çankırı-40">Çankırı</option>
                                        <option value="Çorum-40">Çorum</option>
                                        <option value="Erzincan">Erzincan</option>
                                        <option value="Giresun-40">Giresun</option>
                                        <option value="Hatay">Hatay</option>
                                        <option value="Isparta-40">Isparta</option>
                                        <option value="Kahramanmaraş-40">Kahramanmaraş</option>
                                        <option value="Karabük-40">Karabük</option>
                                        <option value="Karaman-40">Karaman</option>
                                        <option value="Kars-40">Kars</option>
                                        <option value="Kastamonu-40">Kastamonu</option>
                                        <option value="Kırıkkale-40">Kırıkkale</option>
                                        <option value="Kırklareli-40">Kırklareli</option>
                                        <option value="Kırşehir-40">Kırşehir</option>
                                        <option value="Kütahya-40">Kütahya</option>
                                        <option value="Malatya-40">Malatya</option>
                                        <option value="Mardin-40">Mardin</option>
                                        <option value="Nevşehir-40">Nevşehir</option>
                                        <option value="Niğde-40">Niğde</option>
                                        <option value="Ordu-40">Ordu</option>
                                        <option value="Osmaniye-40">Osmaniye</option>
                                        <option value="Rize-40">Rize</option>
                                        <option value="Siirt-40">Siirt</option>
                                        <option value="Sivas-40">Sivas</option>
                                        <option value="Sinop-40">Sinop</option>
                                        <option value="Şanlıurfa-40">Şanlıurfa</option>
                                        <option value="Şırnak-40">Şırnak</option>
                                        <option value="Tokat-40">Tokat</option>
                                        <option value="Uşak-40">Uşak</option>
                                        <option value="Yozgat-40">Yozgat</option>
                                        <option value="Zonguldak-40">Zonguldak</option>
                                        <option value="Bitlis-40">Bitlis</option>

                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23"
                                        fill="none">
                                        <circle cx="11.5713" cy="11.5" r="11.5" fill="#6D9CF8" />
                                        <path
                                            d="M6.8684 9H16.2742C16.4245 8.99946 16.5719 9.0446 16.6992 9.13018C16.8265 9.21576 16.9286 9.33827 16.9935 9.48348C17.0584 9.62869 17.0834 9.79064 17.0658 9.95051C17.0482 10.1104 16.9885 10.2616 16.8938 10.3866L12.1909 15.6817C12.1165 15.781 12.0222 15.8612 11.9149 15.9163C11.8077 15.9714 11.6902 16 11.5713 16C11.4523 16 11.3349 15.9714 11.2277 15.9163C11.1204 15.8612 11.0261 15.781 10.9517 15.6817L6.24877 10.3866C6.15406 10.2616 6.09442 10.1104 6.07678 9.95051C6.05914 9.79064 6.08422 9.62869 6.14911 9.48348C6.214 9.33827 6.31603 9.21576 6.44336 9.13018C6.57069 9.0446 6.71807 8.99946 6.8684 9Z"
                                            fill="#F2F2F2" />
                                    </svg>


                                </div>
                                <div className="select-ctr">
                                    <select className="form-select h-100" id="avm" value={avmValue} onChange={(e) => setAvmValue(e.target.value)}>
                                        <option defaultValue="deafult">Avm bonusu</option>
                                        <option value="7.5">Var</option>
                                        <option value="0">Yok</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23"
                                        fill="none">
                                        <circle cx="11.5713" cy="11.5" r="11.5" fill="#6D9CF8" />
                                        <path
                                            d="M6.8684 9H16.2742C16.4245 8.99946 16.5719 9.0446 16.6992 9.13018C16.8265 9.21576 16.9286 9.33827 16.9935 9.48348C17.0584 9.62869 17.0834 9.79064 17.0658 9.95051C17.0482 10.1104 16.9885 10.2616 16.8938 10.3866L12.1909 15.6817C12.1165 15.781 12.0222 15.8612 11.9149 15.9163C11.8077 15.9714 11.6902 16 11.5713 16C11.4523 16 11.3349 15.9714 11.2277 15.9163C11.1204 15.8612 11.0261 15.781 10.9517 15.6817L6.24877 10.3866C6.15406 10.2616 6.09442 10.1104 6.07678 9.95051C6.05914 9.79064 6.08422 9.62869 6.14911 9.48348C6.214 9.33827 6.31603 9.21576 6.44336 9.13018C6.57069 9.0446 6.71807 8.99946 6.8684 9Z"
                                            fill="#F2F2F2" />
                                    </svg>


                                </div>
                                <div className="w-100 d-flex justify-content-center align-items-center mt-2">
                                    <button type="submit" className="calculate-btn">
                                        <span>
                                            Hemen hesapla :)
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                    {monthlyEarnings && <div className='result'><img src="./images/money-trans.gif" alt="" /> Tahmini Aylık Kazancınız <br /> <b>{monthlyEarnings}</b>TL</div>}
                </div>
            </div>
        </div>

    )
}

export default Earnings;