# Kahoot

1. Como fazemos um canto arredondado usando CSS?

- ✅ Com border-radius
- ❌ Com uma imagen
- ❌ Com margin-border
- ❌ Com border-radio

2. Opacidade é uma propriedade que define a transparência de um elemento.

- ✅ True
- ❌ False

3. Qual não é um seletor válido em CSS?

- ❌ `div > p { }`
- ✅ `div ' p { }`
- ❌ `div + p { }`
- ❌ `div ~ p { }`

4. É um exemplo de CSS inline

```html
<section
  style="background-color: #fff;
  border-radius: 5px;
  margin: 1.5em auto;
  padding: 3em;
  width: 50%;"
></section>
```

- ✅ True
- ❌ False

5. De que cor veremos a palavra 'Olá'?

```html
<div class="container">
  <p id="titulo">Olá</p>
</div>
```

```css
div.container {
  color: red;
}

.container > #titulo {
  color: green;
}

div p {
  color: blue;
}
```

- ❌ Vermelha
- ❌ Azul
- ❌ Preta
- ✅ Verde

6. Essas duas propriedades produzem o mesmo resultado em nosso elemento?

- ❌ True
- ✅ False

7. Onde corre o eixo transversal?

- ❌ Nas linhas
- ✅ Nas colunas
- ❌ flex-start
- ❌ row

8. Qual a diferença entre uma classe e outra?

```css
.container-one {
  padding: 100px 0 0 0;
}

.container-two {
  padding: 100px;
}
```

- ✅ a primeira classe adiciona apenas padding no topo
- ❌ a primeira classe soma 100px e subtrai 0px de espaçamento
- ❌ a segunda adiciona padding interno
- ❌ nenhuma diferença

9. Qual a diferença entre uma classe e outra?

```css
.element-one {
  margin: 100px 100px 100px 100px;
}

.element-two {
  margin: 100px;
}
```

- ❌ a primeira classe adiciona apenas margin no topo
- ❌ a primeira classe adiciona margem a cada quadro
- ❌ o segundo adiciona margem interna
- ✅ nenhuma diferença

10. O que veremos no console?

```js
const cars = [
  'Ferrari 250 GT Berlinetta',
  'Tesla S',
  'Génesis G90',
  'Porsche Boxster',
];

cars.forEach(function (element) {
  console.log(element);
});
```

- ❌

  ```bash
    Ferrari 250 GT Berlinetta
  ```

- ❌

  ```bash
    0
    1
    2
    3
  ```

- ✅

  ```bash
  Ferrari 250 GT Berlinetta
  Tesla S
  Génesis G90
  Porsche Boxster
  ```

- ❌

  ```bash
    ReferenceError: element is not defined
  ```
