# Ce n'est pas un FizzBuzz 2.0

> Examen DCC aout 2019-2020

## Consignes pour l'examen

1. Renommez le dossier qui se trouve sur le bureau de votre machine qui porte le nom `examen-dcc-aout-2019-2020` en `examen-dcc-aout-2019-2020-nom-prenom-group`.
1. Dans le cadre de cet examen de *Développement Côté Client* vous devez uniquement vous focaliser sur le fichier `main.js` qui se trouve à la racine. Mis à part ajouter la balise `script`, on ne vous demande pas de modifier le html ni le CSS qui s'y rapporte.
1. Cet examen dure maximum 3 heures.

## HTML

![step1](./img/step1.gif)

Dans le cadre cet examen nous vous demandons de produire par JavaScript du code HTML. Plus précisément, de produire une série d’items d'une liste ordonnée, en respectant les règles suivantes:

1. Mais avant ça, ajoutez à l'élément racine `html` la classe `js-enabled`.
1. Produisez un suite de nombres allant de 1 à 200. Le nombre `26` représente ici un des 100 nombres possibles.

    ~~~html
    <li class="grid__item">26</li>
    ~~~

1. S'il s'agit d'un nombre de la suite de Fibonacci alors, il faut ajouter la classe `fibonacci` à l'élément `<li>` ainsi que 2 éléments `.ribbon-wrapper` et `ribbon` constituant le ruban :

    ~~~html
    <li class="fibonacci grid__item">3
     <div class="ribbon-wrapper">
        <div data-text="somme" class="ribbon">Fibonacci</div>
      </div>
    </li>
    ~~~

1. S'il s'agit d'un nombre divisible par 3 il faut ajouter la classe `multiple-3` à l'élément `<li>` ainsi que 2 que éléments `.ribbon-wrapper` et `ribbon` constituant le ruban :

    ~~~html
    <li class="multiple-3 grid__item animate">15
      <div class="ribbon-wrapper">
        <div class="ribbon">3</div>
      </div>
    </li>
    ~~~

1. S'il s'agit d'un nombre divisible par 3 et par 9 alors il faut ajouter la classe `multiple-3-9`  à l'élément `<li>` ainsi que 2 éléments `.ribbon-wrapper` et `ribbon` constituant le ruban :

    ~~~HTML
    <li class="multiple-3-9 grid__item">27
      <div class="ribbon-wrapper">
        <div class="ribbon">3 et 9</div>
      </div>
    </li>
    ~~~

## Écouteurs d’événements

1. Rendez le scroll infini. Quand l'utilisateur scroll jusqu'au bas de la page, générez les 100 nombres suivants en respectant les mêmes règles.
 ![](./img/step1.gif)

## Aides

### La suite de Fibonacci

La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent.

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584.

### Documentation

* `window.scrollY` : La propriété `scrollY` de l'objet [`Window`](https://developer.mozilla.org/fr/docs/Web/API/Window) est une propriété en lecture seule. Elle retourne le nombre de pixels la page actuellement défilés verticalement. Dans les navigateurs modernes, cette valeur est précise au sous-pixel près. Ainsi, la valeur retournée n'est pas forcement un entier.

* `window.innerHeight`: Récupère la hauteur (en pixels) de la partie visible de la fenêtre de navigation en incluant, si elle est affichée, la barre de défilement horizontale.

* `element.scrollHeight` : L'attribut en lecture seule `element.scrollHeight` est une mesure de la hauteur du contenu d'un élément qui inclut le contenu débordant et non visible à l'écran. La valeur `scrollHeight` est égale à la hauteur minimum dont l'élément aurait besoin pour que le contenu rentre dans le viewpoint sans utiliser de barre de défilement. Cela inclut les marges internes, mais pas les marges externes.
