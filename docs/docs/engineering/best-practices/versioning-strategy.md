---
sidebar_position: 8
sidebar_label: Estratégia de controle de versão
---

# Estratégia de controle de versão

Há muitas maneiras de versionar nossa infraestrutura e nosso aplicativo. O que vamos incentivá-lo nesta postagem é escolher uma delas. De acordo com <a href="https://flowcanon.com/software/versioning-strategy/" target="_blank" rel="noreferrer">flow canon</a>: "Usar uma estratégia de controle de versão de software para suas compilações pode reduzir a carga cognitiva de todos que desenvolvem e usam seu software. As estratégias de controle de versão permitem que você identifique cada artefato de construção de forma rápida e fácil".

Entre as muitas estratégias que temos para versionar algo, temos:

- <a href="https://semver.org/" target="_blank" rel="noreferrer">Semantic Versioning</a>
- <a href="https://calver.org/" target="_blank" rel="noreferrer">CalVer</a>
- <a href="https://flowcanon.com/software/versioning-strategy/" target="_blank" rel="noreferrer">Outras estratégias</a>

Recomendamos o uso do versionamento semântico como estratégia padrão para aplicativos corporativos, mas qualquer uma das estratégias acima é válida e você deve escolher a que funciona melhor para o produto e a equipe.

## Por que o controle de versão semântico?

O controle de versão semântico é provavelmente a estratégia de controle de versão mais usada no setor de software moderno e tem uma maneira muito direta de descrever a versão do software.

O controle de versão é composto basicamente de 3 informações: MAJOR.MINOR.PATCH

1. Versão MAJOR quando você faz alterações incompatíveis na API
2. Versão MENOR quando você adiciona funcionalidade de forma compatível com versões anteriores
3. Versão PATCH quando você faz correções de bugs compatíveis com versões anteriores

Rótulos adicionais para metadados de pré-lançamento e compilação estão disponíveis como extensões para o formato MAJOR.MINOR.PATCH.

Créditos:

- <a href="https://flowcanon.com/software/versioning-strategy/" target="_blank" rel="noreferrer">Flowcanon</a>
- <a href="https://semver.org/" target="_blank" rel="noreferrer">SemVer</a>
- <a href="https://calver.org/" target="_blank" rel="noreferrer">CalVer</a>
- <a href="https://nehckl0.medium.com/semver-and-calver-2-popular-software-versioning-schemes-96be80efe36" target="_blank" rel="noreferrer">Luke Chen Post</a>
