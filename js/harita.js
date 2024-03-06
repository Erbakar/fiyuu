

function svgturkiyeharitasi() {
    const element = document.querySelector('#map-area');
    const info = document.querySelector('.city-names');

    element.addEventListener(
        'mouseover',
        function (event) {
            if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
                info.innerHTML = [
                    `<div class="ctr">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                    <g clip-path="url(#clip0_34_1585)">
                                    <path d="M8.17697 0.426178C4.02277 0.426178 0.655273 3.65631 0.655273 7.64106C0.655273 11.6258 8.17697 20.484 8.17697 20.484C8.17697 20.484 15.6987 11.6258 15.6987 7.64106C15.6987 3.65631 12.3312 0.426178 8.17697 0.426178ZM8.17697 10.9391C6.23464 10.9391 4.66123 9.42983 4.66123 7.56673C4.66123 5.70363 6.23464 4.1944 8.17697 4.1944C10.1193 4.1944 11.6927 5.70363 11.6927 7.56673C11.6927 9.42983 10.1193 10.9391 8.17697 10.9391Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_34_1585">
                                        <rect width="15.0434" height="20.0579" fill="white" transform="translate(0.655273 0.426178)"/>
                                    </clipPath>
                                    </defs>
                            </svg>
                        </div>
                        <span>${event.target.parentNode.getAttribute('data-iladi')}</span>
                    </div>`
                ].join('');
            }
        }
    );

    element.addEventListener(
        'mousemove',
        function (event) {
            info.style.top = event.pageY + 25 + 'px';
            info.style.left = event.pageX + 'px';
        }
    );

    element.addEventListener(
        'mouseout',
        function (event) {
            info.innerHTML = '';
        }
    );

    element.addEventListener(
        'click',
        function (event) {
            if (event.target.tagName === 'path') {
                const parent = event.target.parentNode;
                const id = parent.getAttribute('id');

                if (
                    id === 'guney-kibris'
                ) {
                    return;
                }

                window.location.href = (
                    '#' +
                    id +
                    '-' +
                    parent.getAttribute('data-plakakodu')
                );
            }
        }
    );
}

svgturkiyeharitasi();