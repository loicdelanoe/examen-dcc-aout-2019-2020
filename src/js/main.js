const app = {
  start: 1,
  eListItems: [],
  app: document.getElementById("app"),
  generateItems(number = 100) {
    number += this.start;
    for (; this.start < number; this.start++) {
      const li = this.generateItem(this.start);
      this.eListItems.push(li.item);
      this.app.appendChild(li.item);
    }
  },
  generateItem(idx) {
    const oResult = myLittleCalculator.isFibonacci(idx);
    const li = document.createElement('li');
    li.textContent = idx;
    if (oResult) {
      li.classList.add('fibonacci');
      li.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper"><div data-text="somme" class="ribbon">Fibonacci</div></div>`)
    } else if (myLittleCalculator.isMultipleOf(idx, 3)) {
      if (myLittleCalculator.isMultipleOf(this.start, 9)) {
        li.classList.add('multiple-3-9');
        li.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper"><div class="ribbon">3 et 9</div></div>`)
      } else {
        li.classList.add('multiple-3');
        li.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper"><div class="ribbon">3</div></div>`)
      }
    }
    li.classList.add("grid__item");
    return { isFirst: oResult, item: li };
  },
  addEventListeners() {
    document.addEventListener("scroll", () => {
      if (window.scrollY + window.innerHeight >= this.app.scrollHeight) {
        this.generateItems();
      }
    })
  },
  init() {
    document.documentElement.classList.add("js-enabled");
    this.generateItems();
    this.addEventListeners();
  }
};

window.myLittleCalculator = {
  Fibonacci1: 0,
  Fibonacci2: 1,
  isFibonacci(nbr) {
    if (this.Fibonacci1 + this.Fibonacci2 === nbr) {
      this.Fibonacci1 = this.Fibonacci2;
      this.Fibonacci2 = nbr;
      return true;
    }
    return false;
  },
  isMultipleOf(base, multiple) {
    return base % multiple === 0;
  }
};
app.init();
