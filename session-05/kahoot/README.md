# Kahoot

1. Escolha a opção correta para alterar o conteúdo HTML abaixo

```html
<p id="test">¡Hola DOM!</p>
```

- ❌ `document.getElementsById(“test”).innerHTML = “Manipulando o DOM!”;`
- ❌ `document.getElementByTagName(“p”)[0].innerHTML = “Manipulando o DOM!”;`
- ❌ `document.getElementById(test).innerHTML = “Manipulando o DOM!”;`
- ✅ `document.getElementById(“test”).innerHTML = “Manipulando o DOM!”;`

2. Exemplo de seletor de atributo CSS

- ✅
  
  ```css
  a[href="http://www.example.org"] {
    color: green;
  }
  ```

- ❌
  
  ```css
  a .google {
    color: green;
  }
  ```

- ❌
  
  ```css
  a {
    color: green;
  }
  ```

- ❌
  
  ```css
  a span {
    color: green;
  }
  ```

3. É a melhor implementação?

```html
<a href="https://example.com">
  <button>Example</button>
</a>
```

- ❌ True
- ✅ False

4. Qual das opções a seguir escreverá a mensagem "Olá Dev" em um `alert`?

- ❌ `alertBox(“Olá Dev”);`
- ✅ `alert(“Olá Dev”);`
- ❌ `alert(Olá Dev);`
- ❌ `console.log(“Olá Dev”);`

5. Qual das opções a seguir tem um erro?

- ❌ `const fun = function bar(){}`
- ❌ `function fun(){}`
- ✅ `const fun = function bar{}`
- ❌ Nenhuma tem erro

6. Como posso importar `name` no exemplo a seguir?

```js
export const name = 'value';
```

- ✅ `import { name } from '...';`
- ❌ `import { newName } from '...';`
- ❌ `import { name } form '...';`
- ❌ Nenhuma das anteriores

7. Qual é o propósito da instrução `return` em uma função?

- ❌ Retorna o valor e continua executando o resto das instruções
- ✅ Finaliza a execução da função e especifica um valor a ser retornado

8. Cria um novo array com os resultados da chamada de uma função para cada elemento do array

- ❌ `forEach()`
- ❌ `push()`
- ✅ `map()`
- ❌ `join()`

9. O que veremos no console?

```js
const cities = [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 },
  { name: 'Chicago', population: 2695598 },
  { name: 'Houston', population: 2099451 },
  { name: 'Philadelphia', population: 1526006 }
];

const bigCities = cities.filter(city => city.population > 3000000);

console.log(bigCities);
```

- ✅

  ```js
  [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 }
  ]
  ```

- ❌

  ```js
  [
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
  ]
  ```

- ❌

  ```js
  ReferenceError: bigCities is not defined
  ```

- ❌

  ```js
  []
  ```

10. O que veremos no console?

```js
for (let i = 0; i < 100; i++) {
  console.log(i);
}
```

- ❌ Números de 1 a 100
- ❌ Números de 1 a 99
- ✅ Números de 0 a 99
- ❌ Nenhuma das anteriores

11. Comando Git para listar todas as ramificações atuais do repositório

- ❌ `git checkout -b [ramo]`
- ✅ `git branch -a`
- ❌ `git checkout [ramo]`
- ❌ `git branch [ramo]`

---

↩️ [Voltar](../README.md)
