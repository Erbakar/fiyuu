// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const useAnimation = (options={offset: 5}) => {
    const Animation = function ({
        offset
    } = {
        offset: 10
    }) {
        let _elements;
        console.log('Animation');
        
        // Define a dobra superior, inferior e laterais da tela
        const windowTop = offset * window.innerHeight / 500;
        const windowBottom = window.innerHeight - windowTop;
        const windowLeft = 0;
        const windowRight = window.innerWidth;

        function start(element) {
            // Seta os atributos customizados
            element.style.animationDelay = element.dataset.animationDelay;
            element.style.animationDuration = element.dataset.animationDuration;
            // Inicia a animacao setando a classe da animacao
            element.classList.add(element.dataset.animation);
            // Seta o elemento como animado
            element.dataset.animated = "true";
        }

        function isElementOnScreen(element) {
            // Obtem o boundingbox do elemento
            const elementRect = element.getBoundingClientRect();
            const elementTop =
                elementRect.top + parseInt(element.dataset.animationOffset) ||
                elementRect.top;
            const elementBottom =
                elementRect.bottom - parseInt(element.dataset.animationOffset) ||
                elementRect.bottom;
            const elementLeft = elementRect.left;
            const elementRight = elementRect.right;

            // Verifica se o elemento esta na tela
            return (
                elementTop <= windowBottom &&
                elementBottom >= windowTop &&
                elementLeft <= windowRight &&
                elementRight >= windowLeft
            );
        }

        // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
        function checkElementsOnScreen(els) {
            if (els) {
                for (let i = 0, len = els.length; i < len; i++) {
                    // Passa para o proximo laço se o elemento ja estiver animado
                    if (els[i].dataset.animated) continue;

                    isElementOnScreen(els[i]) && start(els[i]);
                }
            }
        }

        // Atualiza a lista de elementos a serem animados
        function update() {
            
            _elements = document.querySelectorAll(
                "[data-animation]:not([data-animated])"
            );
            checkElementsOnScreen(_elements);
        }

        // Inicia os eventos
        update()
        
        window.addEventListener("scroll", () => checkElementsOnScreen(_elements), {
            passive: true
        });
        window.addEventListener("resize", () => checkElementsOnScreen(_elements), false);

        // Retorna funcoes publicas
        return {
            start,
            isElementOnScreen,
            update
        };
    };

    return () => Animation(options);
}