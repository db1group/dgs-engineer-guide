# Documentação de Bugs

Classificação de Bugs

Abaixo está a classificação de bugs usada pela equipe de Garantia de Qualidade de Software da DB1 Global. Essas tags devem ser aplicadas ao título do cartão, por exemplo:

[MD][BR] - Cartão de Bug

**Tipo de Bug**

[AP] - API: Erros causados no código do backend.<br/>
[DB] - Banco de Dados: Erros causados por dados inválidos ou inconsistência de dados.<br/>
[DC] - Documentação: Erros causados devido à falta de especificação funcional ou especificação inadequada.<br/>
[DEV] - Desenvolvimento: Erro causado devido ao código implementado incorretamente pelo desenvolvedor.<br/>
[AE] - Acessibilidade: Erro causado pela complexidade da interface do sistema, tornando difícil o acesso, entendimento e, consequentemente, obtenção de informações. Erros que impedem a compreensão da usabilidade pelo usuário, com e sem deficiências.<br/>
[INF] - Infraestrutura: Erros causados por problemas na infraestrutura do servidor (por exemplo, conexões de energia e rede instáveis, atualizações internas do sistema, manutenção).<br/>
[INT] - Integração: Erro causado após a atualização/integração do software em funcionamento em outros ambientes (por exemplo, produção).<br/>
[LT] - Layout: Erro causado na parte visual/design do sistema (por exemplo, posição de parágrafos, abas, ortografia, textos, alinhamentos, botões, cores, linhas, padrões, responsividade da tela, ordenação de filtros).<br/>
[CQ] - Qualidade de Código: Erro causado devido à inconsistência no desenvolvimento do código.<br/>
[BR] - Regra de Negócio: Erro causado pela falta de compreensão dos requisitos descritos ou quando são encontradas diferenças nos critérios de aceitação descritos nas Histórias de Usuário.<br/>
[OT] - Outros: Erro que não se enquadra em nenhuma das categorias existentes.<br/>

**Severidade**

[CR] - Crítico: Erro que impede um processo, faz com que a aplicação falhe em funcionalidades principais. Exemplos:

O botão não funciona, impedindo o uso/teste da funcionalidade.
A funcionalidade/especificação esperada não aparece na versão testada.
Perda severa de dados.
"Erro fatal".
A funcionalidade desenvolvida em desacordo com requisitos especificados (desvio significativo).
Incompatibilidade com o navegador ou outros elementos do ambiente.
Questões de segurança (como senhas expostas no banco de dados).<br/>

[HG] - Alto: Comprometimento sério da funcionalidade. Exemplos:

Funcionalidade que não pode ser usada, sistema travando ou comportando-se de forma inesperada.
Bug em funcionalidade essencial do produto com uma solução alternativa complexa.
Comprometimento moderado à continuidade dos testes.
A funcionalidade desenvolvida em desacordo com os requisitos especificados (desvio moderado).
Problemas de desempenho perceptíveis com um impacto razoável no uso normal da aplicação.
Regras de validação de campos não aplicadas corretamente (por exemplo, data inválida e valor fora de alcance).<br/>

[MD] - Moderado: Problemas moderados com a funcionalidade do produto. Há uma solução simples. Baixo impacto nos testes. Exemplos:

Mensagem de erro/sucesso não exibida.
O foco é definido incorretamente.
Imagens não são carregadas.
Erros de ordenação/quebra em consultas e relatórios.
Termos inadequados/fora de contexto.<br/>

[LW] - Baixo: A funcionalidade sofre pouco ou nenhum impacto, mas ainda é um bug válido. Exemplos:

Erros ortográficos.
Pequenos erros na interface em geral, como alinhamento de campo.
Falta de clareza nas mensagens para o usuário.
NOTA: Erros ortográficos, apesar de serem classificados por padrão como "baixos", merecem atenção. Alinhe a correção de maior prioridade com a equipe, se necessário.
