# Kahoot

1. Sincronia são tarefas que precisam esperar que um determinado evento ocorra

- ❌ True
- ✅ False

2. Qual é o principal objetivo do Promise.all?

- ❌ Executa todas as promessas em cascata
- ❌ Espera todas as promessas rejeitadas
- ✅ Espera um array de promessas para que todas se resolvam
- ❌ Encadeia uma promessa com a outra para resolver simultaneamente

3. Qual é a principal diferença entre `while` e `do while`?

- ❌ Antes se usava `do while` e agora só `while`
- ❌ Nenhuma diferença
- ✅ `do while` é executado pelo menos a primeira iteração
- ❌ `while` é executado sempre até que a condição se cumpra e `do while` não

4. O que deve ser usado para lidar com exceções em `async/await`?

- ❌ `only catch`
- ❌ `.then`
- ❌ `reject`
- ✅ `try/catch`

5. Para `Promises` usamos `.then/.catch` e para funções que usam `async/await` usamos `try/catch`

- ✅ True
- ❌ False

6. `finally` é executado antes de `catch`

- ❌ True
- ✅ False

7. O que o `Promise.race` faz?

- ✅ Resolve a promessa mais rápida e sem erros
- ❌ Resolve mais rápido uma promessa especificada no envio
- ❌ Retorna rapidamente a primeira promessa da fila
- ❌ Força a execução rápida de promessas simultâneas.

8. Que é impresso no console quando executado...

```js
function resolveAfterTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfterTwoSeconds();
  console.log(result);
}

asyncCall();
```

- ❌ > "calling"
- ❌ > "resolved"
- ✅ > "calling" > "resolved"
- ❌ > "resolved" > "calling"

9. usamos `await` para especificar que nossa função é assíncrona

- ❌ True
- ✅ False

10. A principal diferença entre `throw "I'm evil"` e `throw Error({error:"I'm evil"})`

- ❌ `throw` é mais personalizado
- ✅ `throw Error` é mais descritivo
- ❌ `throw` é mais rápido e melhor
- ❌ `throw Error` não está otimizado

↩️ [Voltar](../README.md)
