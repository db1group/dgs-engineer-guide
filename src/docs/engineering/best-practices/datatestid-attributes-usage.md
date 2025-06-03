---
outline: deep
---

# Guia para Adicionar o Atributo `data-testid` em Elementos HTML

O atributo `data-testid` é usado para selecionar elementos durante testes automatizados de uma aplicação. Ao adicionar esse atributo aos elementos relevantes, você torna seus testes mais robustos e independentes de mudanças na estrutura da aplicação.

Normalmente, utilizamos `ids` nos elementos para mapear os componentes e facilitar a criação dos testes automatizados, mas criar testes com base em tags, classes ou `id` é muito volátil e altamente sujeito a mudanças (podem ser alterados ao modificar o JavaScript ou o CSS, por exemplo). Portanto, definir o seletor usando `data-testid` é uma abordagem melhor, pois ele tem um único propósito.

Para páginas existentes, podemos simplesmente fazer com que o `data-testid` tenha o mesmo valor do atributo `id`. Apenas tome cuidado para verificar se não há estilizações ou scripts JavaScript utilizando esse `id`, caso deseje removê-lo e manter apenas o `data-testid`.

Aqui estão algumas diretrizes para adicionar o atributo `data-testid` em elementos HTML:

## 1. Escolha nomes descritivos

Escolha nomes significativos e descritivos para o atributo `data-testid`. O nome deve refletir o propósito ou comportamento do elemento no contexto dos testes. Por exemplo, se você estiver testando um formulário de login, pode adicionar o atributo `data-testid` com o valor `login-form` ao elemento `form`.

## 2. Seja consistente

Mantenha uma convenção consistente ao adicionar o atributo `data-testid`. Isso facilita a leitura e manutenção dos testes, especialmente quando várias pessoas estão trabalhando no mesmo projeto. Estabeleça diretrizes claras para o uso desse atributo no código-fonte do projeto.

## 3. Evite detalhes da implementação

Evite depender de detalhes internos da implementação ao adicionar o atributo `data-testid`. Não utilize IDs gerados automaticamente ou estruturas HTML específicas para identificar os elementos. Isso garante que seus testes continuem funcionais mesmo que a estrutura da aplicação mude.

## 4. Priorize elementos únicos

Sempre que possível, escolha seletores que identifiquem elementos de forma única. Isso aumenta a confiabilidade dos testes e reduz a probabilidade de seleções incorretas. Certifique-se de que cada elemento com o atributo `data-testid` tenha um valor único na página.

## 5. Combine com outros seletores

Em alguns casos, pode ser necessário combinar o atributo `data-testid` com outros seletores, como classes ou identificadores HTML, para criar seleções mais específicas. Essa abordagem permite selecionar elementos com base em critérios adicionais, aumentando a precisão dos testes.

Para mais informações e boas práticas sobre testes com Cypress, consulte a [documentação de Boas Práticas do Cypress](https://docs.cypress.io/guides/references/best-practices)  
ou a [documentação de Localizadores do Playwright](https://playwright.dev/docs/other-locators#id-data-testid-data-test-id-data-test-selectors).

## Exemplo de Uso

Aqui está um exemplo de como adicionar o atributo `data-testid` a um elemento HTML:

```html
<button data-testid="login-button">Login</button>
```

Comparando seletores com e sem `data-testid`:

- **Sem `data-testid`**: o elemento é selecionado por tag, classe ou `id`, o que não é isolado e pode comprometer a estabilidade do teste ao longo do tempo.
- **Com `data-testid`**: o seletor é específico para testes, tornando a identificação mais confiável e estável.
