# Ask for missing details

[https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript](https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript)

Você receberá um array de objetos representando dados sobre desenvolvedores que
se inscreveram para participar do próximo encontro de codificação que você está
organizando.

Dado o seguinte array de entrada:

```js
let list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];
```

Escreva uma função que:

1. adiciona a propriedade `question` a cada objeto na matriz de entrada onde o
  desenvolvedor não forneceu os detalhes relevantes (marcados com um valor
  `null`). O valor da propriedade `question` deve ser a seguinte string:

    `Hi, could you please provide your <property name>.`

2. e retorna apenas os desenvolvedores com detalhes ausentes:

```js
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
  question: 'Hi, could you please provide your language.' }
]
```

## Objetivos de aprendizagem (OAs)

- Métodos de arrays
- Manipulação de objects (key | value)

↩️ [Voltar](../../README.md)
