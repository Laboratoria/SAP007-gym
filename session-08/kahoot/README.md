# Kahoot

1. Verdadeiro ou falso, essas duas linhas funcionam da mesma forma

```js
import myFunction from './data.js'
import { myFunction } from './data.js'
```

- ❌ True
- ✅ False

2. `.forEach()` retorna um array

- ❌ True
- ✅ False

3. O que veremos na tela ao executar esse código?

```js
const numeros = [7,4,8,0,1];
numeros = numeros.sort();
console.log(numeros);
```

- ✅ `TypeError`
- ❌ `[7, 4, 8, 0, 1]`
- ❌ `[0, 1, 4, 7, 8]`
- ❌ `[8, 7, 4, 1, 0]`

4. Qual seria o conteúdo do array `mayores5`?

```js
const numeros = [7,4,8,0,1];
const mayores5 = numeros.filter(valor => {valor > 5});
console.log(mayores5);
```

- ❌ `[8, 7]`
- ✅ `[]`
- ❌ `[7, 4, 8, 0, 1]`
- ❌ `[4, 0, 1]`

5. O que é ECMAScript?

- ❌ Define a versão do JS que usamos
- ❌ Vínculo entre NodeJS e JS
- ❌ intérprete de JS
- ✅ O verdadeiro nome do Javascript

6. O que significa CSS?

- ❌ Cascading Sheets Style
- ❌ Folha de estilo em cebola
- ✅ Cascading Style Sheets
- ❌ Folha de estilo externa

7. Com qual tag você substituiria a `div`?

```html
<div class="img-card">
  <img src="/img/sunset.jpg" alt="Picture of a Sunset">
</div>
```

- ✅ `<picture></picture>`
- ❌ `<section></section>`
- ❌ `<canvas></canvas>`
- ❌ `<article></article>`

8. ________ ocorre quando um evento se propaga

- ❌ Event delegation
- ✅ Event Bubbling
- ❌ `event.stopPropagation()`
- ❌ Event capturing

9. `e.stopPropagation()` impede a ação por padrão (default)?

- ❌ True
- ✅ False

10. O código a seguir é um exemplo de

```html
<div class="container">
  <p class="concert"></p>
  <p class="title"></p>
  <p class="price"></p>
</div>

<script>
  const container = document.querySelector('.container');

  container.addEventListener('click', e => {
    if (e.target.classList.contains('title')) {
      console.log('click title');
    }
    if (e.target.classList.contains('price')) {
      console.log('click price');
    }
  });
</script>
```

- ✅ Event delegation
- ❌ Event Bubbling
- ❌ `event.stopPropagation()`
- ❌ Prevent Default

↩️ [Voltar](../README.md)
