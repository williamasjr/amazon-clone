# Desafio amazon main page!

Esse projeto e um desafio para uma vaga de emprego. Ele permite que os usuários insiram uma palavra-chave em uma página da web, pressionem um botão e obtenham informações sobre produtos da Amazon. O servidor faz a busca na Amazon e envia os resultados para a página da web, que os exibe de forma organizada e estilizada. Dessa forma, os usuários podem ver as informações de produtos da Amazon com base em uma palavra-chave de pesquisa.

O back-end é a parte do projeto que opera no servidor.
Utiliza a linguagem Node.js para criar um servidor.
Configura um endpoint (URL) chamado /api que recebe solicitações de pesquisa.
Quando alguém faz uma solicitação para /api?keyword=algumaPalavra, o servidor busca essa palavra-chave na Amazon.
Front-end (HTML, CSS, JavaScript):

O front-end é a parte visível para o usuário em um navegador.
Inclui uma página da web com um campo de texto para inserir uma palavra-chave e um botão para iniciar a busca.
Quando o botão é clicado, um script JavaScript faz uma solicitação ao servidor para buscar informações da Amazon.
O resultado da busca é exibido na página da web.

O CORS é um mecanismo de segurança no navegador que controla as solicitações entre domínios diferentes.
Para permitir que o front-end acesse o back-end (em domínios diferentes), configuramos o servidor para permitir solicitações de origens específicas.

# Para rodar o projeto

1. Clone o repositório

- `https://github.com/williamasjr/amazon-clone.git`.

2. Instale as dependências e inicialize o projeto

- Instale as dependências:
  - `npm install`
- Inicialize o projeto:
  - `npm run dev`

Isso iniciará o servidor Node.js na porta 3000.

4. Executar o Front-end

Abra o arquivo HTML (index.html) em um navegador da web.

Você verá a página da web com um campo de entrada para a palavra-chave e um botão.

Digite uma palavra-chave de pesquisa na caixa de entrada e clique no botão "Search".

Os resultados da pesquisa serão exibidos na página em um formato organizado e estilizado.
