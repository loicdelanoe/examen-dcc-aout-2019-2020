// Nom :
// Prénom :
// Groupe :

const fizzBonnaci = {
    app: document.getElementById('app'),
    idx: 0,
    init() {
        document.documentElement.classList.add('js-enabled');
        this.generateItems();
        this.infiniteItems();
    },
    generateItems() {
        for (let i = 0; i < 200; i++) {
            if (this.isFibonacci(i)) {
                this.app.insertAdjacentHTML('beforeend', `<li class="fibonacci grid__item">${this.idx}
                                                             <div class="ribbon-wrapper">
                                                                <div data-text="somme" class="ribbon">Fibonacci</div>
                                                              </div>
                                                            </li>`);
            } else if (this.idx % 3 === 0 && this.idx % 9 === 0) {
                this.app.insertAdjacentHTML('beforeend', `<li class="multiple-3-9 grid__item">${this.idx}
                                                              <div class="ribbon-wrapper">
                                                                <div class="ribbon">3 et 9</div>
                                                              </div>
                                                            </li>`);
            } else if (this.idx % 3 === 0) {
                this.app.insertAdjacentHTML('beforeend', `<li class="multiple-3 grid__item">${this.idx}
                                                              <div class="ribbon-wrapper">
                                                                <div class="ribbon">3</div>
                                                              </div>
                                                            </li>`);
            } else {
                this.app.insertAdjacentHTML('beforeend', `<li class="grid__item">${this.idx}</li>`);
            }
            this.idx++
        }
    },
    isFibonacci(n) {
        let a = 0;
        let b = 1;
        while (b < n) {
            let temp = b;
            b = a + b;
            a = temp;

        }
        return b === n;
    },
    infiniteItems() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > document.documentElement.scrollHeight - 1000) {
                fizzBonnaci.generateItems();
            }
        });
    },
};

fizzBonnaci.init();


