---
outline: deep
---

# Easy Docs

## Introdução

O Easy Docs é uma ferramenta projetada para simplificar a geração de documentos em formato PDF a partir de componentes React. Em vários projetos, a necessidade de criar documentos PDF, como relatórios ou contratos, representa um desafio considerável. O Easy Docs resolve esse problema ao permitir que desenvolvedores criem documentos PDF diretamente de componentes React estilizados, eliminando a necessidade de estilizações inline. Além disso, nossa solução é compatível com Docker, facilitando a integração em diversos ambientes de desenvolvimento.

## Objetivo

O objetivo principal do Easy Docs é oferecer uma forma eficiente e descomplicada de converter componentes React em documentos PDF. Isso é realizado por meio de um endpoint que os desenvolvedores podem utilizar para enviar dados ao template definido, gerando assim o documento desejado.

## Como Funciona

O processo começa com o desenvolvimento de um template em React específico para o documento PDF. Dentro deste template, você poderá incorporar e estilizar componentes conforme necessário, além de definir propriedades que serão preenchidas com os dados fornecidos. Após finalizar a criação do template, basta enviar os dados ao endpoint do Easy Docs. O sistema, então, processará esses dados e retornará o documento PDF pronto.

Para usar o Easy Docs, simplesmente execute o container Docker e acesse o endpoint com os dados requeridos para a geração do documento. Com esta abordagem, o Easy Docs se posiciona como uma solução prática e versátil para a criação de documentos PDF em qualquer projeto.
