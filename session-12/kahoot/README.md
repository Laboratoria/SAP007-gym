# Kahoot

1. ______ permite modificar o fluxo de execução das instruções de um programa

- ❌ Eventos
- ❌ Laços
- ✅ Estruturas de controle
- ❌ Nodes (Nós)

2. Que resultado obtemos ao executar o seguinte código?

```js
nomeDoGato("cosmo");

function nomeDoGato(nome) {
  console.log("O nome do meu gato é " + nome);
}
```

- ❌ error
- ❌ O nome do meu gato é undefined
- ✅ O nome do meu gato é cosmo
- ❌ O nome do meu gato é null

3. Que imprime o seguinte `console.log(element)`?

```js
let element = 5;

do {
  element++;
} while (element < 5);

console.log(element);
```

- ❌ 5
- ❌ error
- ❌ não imprime nada
- ✅ 6

4. `5 > 3` corresponde a uma `expression`

- ✅ True
- ❌ False

5. `x = 20` corresponde a uma `expression`

- ❌ True
- ✅ False

6. Qual é a diferença entre usar `while` e/ou usar `do while`?

- ✅ `do while` executa pelo menos uma vez
- ❌ Não há nenhuma diferença
- ❌ `while` é a versão simplificada de `do while`
- ❌ `while` é uma estrutura de controle iterativa enquanto que `do while` não

7. O que está faltando no código a seguir?

```js
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
  case 1:
    day = "Monday";
  case 2:
    day = "Tuesday";
  case 3:
    day = "Wednesday";
  case 4:
    day = "Thursday";
  case 5:
    day = "Friday";
  case 6:
    day = "Saturday";
}
```

- ❌ `return day;`
- ✅ `break`
- ❌ `switch (new Date().getDay() => {`
- ❌ um valor `default`

8. Os `switch` oferecem uma forma rápida e simples de fazer algo repetidamente

- ❌ True
- ✅ False

9. Que resultado obtemos ao executar o seguinte código?

```js
nomeDoGato("cosmo");

const nomeDoGato = (nome) => {
  console.log("O nome do meu gato é " + nome);
}
```

- ✅ error
- ❌ O nome do meu gato é undefined
- ❌ O nome do meu gato é cosmo
- ❌ O nome do meu gato é null

10. O que imprime o `console.log()`?

```js
const nome = "Sabrina Sato";

function saudar(nome = "Paulo Vieira") {
  return "Olá " + nome;
}

function processarEntrada(callback) {
  let nome = "Arthur Aguiar";
  return callback(nome);
}

console.log(processarEntrada(saudar));
```

- ❌ `Olá Sabrina Sato`
- ❌ `Olá Paulo Vieira`
- ✅ `Olá Arthur Aguiar`
- ❌ `error callback`

↩️ [Voltar](../README.md)
