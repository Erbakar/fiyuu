
const Earnings = () => (
    <div className="calculate-earnings w-100 d-flex justify-content-center align-items-center">
        <div
            className="page-container d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between align-items-center">
            <div data-animation="slideInRight" data-animation-delay="50ms"
                className="calculate-earnings__left w-100 d-flex justify-content-start align-items-center mb-5 mb-xl-0">
                <div>
                    <div className="icon justify-content-center align-items-center me-5">
                        <img src="./images/motor.png" alt=""/>
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
                <form id="calculate-earnings-form">
                    <div className="content mb-5">
                        <div className="select-ctr">
                            <select className="form-select h-100" id="selectBox">
                                <option  defaultValue="deafult"  >il seçiniz</option>
                                <option  value="0">------</option>
                                <option  value="1">Adana</option>
                                <option  value="2">Adıyaman</option>
                                <option  value="3">Afyonkarahisar</option>
                                <option  value="4">Ağrı</option>
                                <option  value="5">Amasya</option>
                                <option  value="6">Ankara</option>
                                <option  value="7">Antalya</option>
                                <option  value="9">Aydın</option>
                                <option  value="10">Balıkesir</option>
                                <option  value="11">Bilecik</option>
                                <option  value="12">Bingöl</option>
                                <option  value="13">Bitlis</option>
                                <option  value="14">Bolu</option>
                                <option  value="15">Burdur</option>
                                <option  value="16">Bursa</option>
                                <option  value="17">Çanakkale</option>
                                <option  value="18">Çankırı</option>
                                <option  value="19">Çorum</option>
                                <option  value="20">Denizli</option>
                                <option  value="21">Diyarbakır</option>
                                <option  value="22">Edirne</option>
                                <option  value="23">Elazığ</option>
                                <option  value="24">Erzincan</option>
                                <option  value="25">Erzurum</option>
                                <option  value="26">Eskişehir</option>
                                <option  value="27">Gaziantep</option>
                                <option  value="28">Giresun</option>
                                <option  value="30">Hakkâri</option>
                                <option  value="31">Hatay</option>
                                <option  value="32">Isparta</option>
                                <option  value="33">Mersin</option>
                                <option  value="34">İstanbul</option>
                                <option  value="35">İzmir</option>
                                <option  value="36">Kars</option>
                                <option  value="37">Kastamonu</option>
                                <option  value="38">Kayseri</option>
                                <option  value="39">Kırklareli</option>
                                <option  value="40">Kırşehir</option>
                                <option  value="41">Kocaeli</option>
                                <option  value="42">Konya</option>
                                <option  value="43">Kütahya</option>
                                <option  value="44">Malatya</option>
                                <option  value="45">Manisa</option>
                                <option  value="46">Kahramanmaraş</option>
                                <option  value="47">Mardin</option>
                                <option  value="48">Muğla</option>
                                <option  value="50">Nevşehir</option>
                                <option  value="51">Niğde</option>
                                <option  value="52">Ordu</option>
                                <option  value="53">Rize</option>
                                <option  value="54">Sakarya</option>
                                <option  value="55">Samsun</option>
                                <option  value="56">Siirt</option>
                                <option  value="57">Sinop</option>
                                <option  value="58">Sivas</option>
                                <option  value="59">Tekirdağ</option>
                                <option  value="60">Tokat</option>
                                <option  value="61">Trabzon</option>
                                <option  value="63">Şanlıurfa</option>
                                <option  value="64">Uşak</option>
                                <option  value="65">Van</option>
                                <option  value="66">Yozgat</option>
                                <option  value="67">Zonguldak</option>
                                <option  value="68">Aksaray</option>
                                <option  value="70">Karaman</option>
                                <option  value="71">Kırıkkale</option>
                                <option  value="72">Batman</option>
                                <option  value="73">Şırnak</option>
                                <option  value="74">Bartın</option>
                                <option  value="77">Yalova</option>
                                <option  value="78">Karabük</option>
                                <option  value="79">Kilis</option>
                                <option  value="80">Osmaniye</option>
                                <option  value="81">Düzce</option>
                            </select> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23"
                                fill="none">
                                <circle cx="11.5713" cy="11.5" r="11.5" fill="#6D9CF8" />
                                <path
                                    d="M6.8684 9H16.2742C16.4245 8.99946 16.5719 9.0446 16.6992 9.13018C16.8265 9.21576 16.9286 9.33827 16.9935 9.48348C17.0584 9.62869 17.0834 9.79064 17.0658 9.95051C17.0482 10.1104 16.9885 10.2616 16.8938 10.3866L12.1909 15.6817C12.1165 15.781 12.0222 15.8612 11.9149 15.9163C11.8077 15.9714 11.6902 16 11.5713 16C11.4523 16 11.3349 15.9714 11.2277 15.9163C11.1204 15.8612 11.0261 15.781 10.9517 15.6817L6.24877 10.3866C6.15406 10.2616 6.09442 10.1104 6.07678 9.95051C6.05914 9.79064 6.08422 9.62869 6.14911 9.48348C6.214 9.33827 6.31603 9.21576 6.44336 9.13018C6.57069 9.0446 6.71807 8.99946 6.8684 9Z"
                                    fill="#F2F2F2" />
                            </svg>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="defaultValuem-check-label" htmlFor="flexRadioDefault1">
                                Rahat çalışırım
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Hızlı çalışırım
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Benden hızlısı yok
                            </label>
                        </div>
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <button type="submit" className="calculate-btn">
                            <span>
                                Hemen hesapla :)
                            </span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>

)

export default Earnings