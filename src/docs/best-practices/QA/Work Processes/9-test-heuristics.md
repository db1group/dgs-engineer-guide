# Heurísticas de Testes

Heurística de teste de software é uma abordagem sistemática para identificar e projetar casos de teste com
base em princípios gerais e conhecimento adquirido através da experiência, baseado em padrões comuns e
técnicas de solução de problemas.

Envolve o uso de regras práticas e diretrizes para guiar o processo de teste e a seleção de casos de teste
relevantes. A heurística de teste de software ajuda a encontrar defeitos de forma mais eficiente, identificar
áreas críticas do sistema e melhorar a cobertura de teste.

Este documentos tem como objetivo dar algumas dicas de como testar diversas partes de um software
(dependendo do CONTEXTO de cada produto) utilizando a heurística.


## Arquivos e Caminhos em sistema
- Nome Longo (>255 caracteres)
- Caracteres Especiais no Nome (espaço * ? / \ | < > , . ( ) [ ] { } ; : ‘ “ !@ # $ % ^ &)
- Nome Inexistente
- Nome Já Existente
- Sem Espaço em disco
- Espaço Mínimo em disco
- Protegido contra Gravação
- Indisponível
- Bloqueado
- Em Máquina Remota
- Corrompido
- Temporização, Hora e Data
- Timeouts
- Diferença de Tempo entre Máquinas
- Atravessando Fusos Horários
- Dias Sempre Inválidos (30 de fevereiro, 31 de setembro)
- 29 de fevereiro em Anos Não Bissextos e Bissextos
- Diferentes Formatos (5 de junho de 2001; 06/05/2001; 06/05/01; 06-05-01; 6/5/2001 12:34)
- Mudança de Horário de Verão
- Ajuste do Relógio para Trás ou para Frente

## Números
- Valores limites inferiores e superiores
- Partição de equivalência
- 0, null, empty
- Notação científica
- Negativos
- Percentuais/decimais (0.001, 100.11, etc)
- Separação por vírgula
- Formato europeu/americano (1.500,36/1,566.99)
- Zeros à esquerda
- Arredondamento matemático
- Cálculos
- Validação de Idade, soma de datas, etc
- Máscaras e formatação

## Strings
- Long (255, 256, 257, 1000, 1024, 2000, 2048 ou mais caracteres)
- Caracteres com acento (àáâãäåçèéêëìíîðñòôõöö, etc.)
- Caracteres asiáticos
- Delimitadores comuns e caracteres especiais ( “ ‘ ` | / \ , ; : & < > ^ * ? Tab )
- Null, empty
- Espaço único, múltiplos espaços, espaço no início
- Caracteres de fim de linha, quebra de linha, etc.
- Injeção de SQL com todas as ações de inserts, search, update, etc
- Limites superiores e inferiores
- Concatenação
- Erros de escrita
- Atentar para abreviações em nomes ou caracteres únicos
- Upper e lower case
- Violação de domínios específicos, como endereço de e-mail, etc

## Navegação em sistemas WEB
-  Atentar para heurística de "Arquivos..., Hora e Data..., Números e Strings"
- Voltar (Navegador) e atalhos do teclado, botões oferecidos pelo sistema
- Atualizar
- Favoritar URL
- Selecionar páginas favoritas quando deslogado
- Acessar menus restritos por URL
- Acessos múltiplos
- Atentar para caminhos exibidos como "migalha de pão"
- Funcionamento de botões
- Redirecionamento de links e botões
- Resoluções mínimas e máximas
- Diferentes navegadores
- Posicionamento, alinhamento de elementos
- Cores, fontes, padronização de forma de escrita ou tamanho dos elementos
- Tipos de Menus por formato de dados
- Login Expirado
- Pop-Ups e Janelas novas
- Permissões em alert e modais

## Navegação em APP
- Atentar para heurística de "Arquivos..., Hora e Data..., Números e Strings"
- Voltar por gesto/botão nativo do dispositivo e botões oferecidos pelo sistema
- Atualizar (Arrastar pra baixo)
- Acessos múltiplos
- Diferentes plataformas e dispositivos (iOS, Android, Mobile, Tablet)
- Atualização automática
- Push notifications
- Login
- Atentar para caminhos exibidos como "migalha de pão"
- Funcionamento de botões
- Redirecionamento de links e botões
- Resoluções mínimas e máximas
- Posicionamento, alinhamento de elementos
- Cores, fontes, padronização de forma de escrita ou tamanho dos elementos
- Tipos de Menus por formato de dados
- Teclado aberto por tipo de menu (numérico, alfanumérico)
- Teclado sobrepondo campos digitáveis
- Fechar APP por funções nativas do dispositivo, navegar entre APP
- Permissão de funções do dispositivo (Câmera, Localização, Calendário, etc...)

## API
- Atentar para heurística de "Arquivos..., Hora e Data..., Números e Strings"
- Code Status e mensagens
- Performance e Carga
- Métodos
- Integração com banco de dados e interface
- Formato de dados
- Autenticação
- Documentação
- CRUD - Create, Read, Update, Delete

## Banco de Dados
- Atentar para heurística de "Arquivos..., Hora e Data..., Números e Strings"
- Case Sensitive
- CRUD - Create, Read, Update, Delete
- Fluxo de dados dentro do sistema