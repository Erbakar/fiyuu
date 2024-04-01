document.addEventListener('DOMContentLoaded', function () {

    // CALCULATE EARNINGS SELECT,RADİO
    const formCheckInputs = document.querySelectorAll('.form-check-input');
    formCheckInputs.forEach(input => {
        input.addEventListener('change', function () {
            const inputId = this.getAttribute('id').slice(-1);
            document.querySelector(`#flexRadioDefault${inputId}`).checked = true;
        });
    });


    //ACCORDION ITEMS
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            // Tüm akordiyon öğelerinin durumunu kontrol et
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.icon span').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                    <path d="M0 8C0 6.89543 0.895431 6 2 6H13C14.1046 6 15 6.89543 15 8C15 9.10457 14.1046 10 13 10H2C0.89543 10 0 9.10457 0 8Z" fill="white"/>
                    <path d="M7.5 0.5C8.60457 0.5 9.5 1.39543 9.5 2.5L9.5 13.5C9.5 14.6046 8.60457 15.5 7.5 15.5C6.39543 15.5 5.5 14.6046 5.5 13.5L5.5 2.5C5.5 1.39543 6.39543 0.5 7.5 0.5Z" fill="white"/>
                  </svg>`;
                    otherItem.querySelector('.accordion-collapse').classList.remove('show');
                }
            });

            // Tıklanan öğenin durumunu değiştir
            if (item.querySelector('.icon span').innerHTML.includes(`<svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/`)) {
                console.log('123');
                item.querySelector('.icon span').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path d="M0 8C0 6.89543 0.895431 6 2 6H13C14.1046 6 15 6.89543 15 8C15 9.10457 14.1046 10 13 10H2C0.89543 10 0 9.10457 0 8Z" fill="white"/>
                <path d="M7.5 0.5C8.60457 0.5 9.5 1.39543 9.5 2.5L9.5 13.5C9.5 14.6046 8.60457 15.5 7.5 15.5C6.39543 15.5 5.5 14.6046 5.5 13.5L5.5 2.5C5.5 1.39543 6.39543 0.5 7.5 0.5Z" fill="white"/>
              </svg>`;
            } else {
                item.querySelector('.icon span').innerHTML = `<svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="15" height="4" rx="2" fill="white"/>
                </svg>
                `;
            }
        });
    });



    // Tüm checkboxları ve ilgili düğmeleri seçiyoruz
    var checkboxGroups = document.querySelectorAll(".kvkk-onay");

    // Her bir grup için işlemleri yapıyoruz
    checkboxGroups.forEach(function (group) {
        var disabledButton = group.querySelector(".disabledButton");
        var selectedButton = group.querySelector(".selectedButton");
        var kvkkCheckbox = group.querySelector(".kvkkCheckbox");
        var labelText = group.querySelector("label");

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





});




/* document.addEventListener('DOMContentLoaded', function () { */

/* }) */


var arrowDown = document.querySelectorAll(".arrow-down");

if (arrowDown) {
    arrowDown.forEach((item) => {
        item.addEventListener("click", function () {
            var targetElement = document.querySelector(".calculate-earnings");

            var targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: targetOffset,
                behavior: "smooth"
            });
        });
    })
}