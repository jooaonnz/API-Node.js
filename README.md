CRUD Console Node.js – painel.js
Pré-requisitos

Node.js (versão 14 ou superior)

npm (Node Package Manager)

MySQL rodando

Instalação

Clone o repositório

git clone https://github.com/jooaonnz/API-Node.js.git
cd backend

Instale as dependências

npm install

Instale dependências adicionais

npm install prompt-sync mysql2 dotenv

npm install express mysql2

Configure o arquivo .env

DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

O CRUD e a API depende dessas variáveis para se conectar ao banco.

Como Executar

Inicie o painel no terminal

cd src
cd crud

Para rodar

node painel.js

Você verá o menu interativo no console

===== CRUD Console =====
1 - Listar Clientes
2 - Criar Cliente
3 - Atualizar Cliente
4 - Deletar Cliente
5 - Listar Pedidos
6 - Criar Pedido
0 - Sair

API Node.js com Swagger

Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL

Instalação

Clone o repositório

git clone https://github.com/jooaonnz/API-Node.js.git

cd backend

Instale as dependências

npm install

Instale as dependências específicas

npm install express mysql2 dotenv cors swagger-jsdoc swagger-ui-express

Configure o arquivo .env

DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
SERVER_PORT=3000

Como Executar
‘
Inicie o servidor

npm run dev

Acesse o Swagger UI

- Abra o navegador e acesse: `http://localhost:3000/api-docs`
