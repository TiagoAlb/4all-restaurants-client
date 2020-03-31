## Servidor de aplicação

Foi configurado o projeto em um servidor externo, para facilitar os testes da equipe. 

Link do projeto: http://ec2-18-229-143-41.sa-east-1.compute.amazonaws.com:3001/

Para testes de requisições a API: http://ec2-18-229-143-41.sa-east-1.compute.amazonaws.com:3333/

# Client-Side

A aplicação foi desenvolvida utilizando, para o lado do cliente, React na sua nova versão com uso de Hooks. Para instalção dos pacotes externos do projeto e funcionamento da aplicação é necessária a instalação do NodeJS. 

# Server-Side

Para a parte do servidor, foi utilizado Node JS, com Express, banco de dados SQLite e o Knex migration para controle de versão da base.

# Configuração
Realizar a instação do Node JS
Veja mais em: [NodeJS](https://nodejs.org/en/)

Com o NodeJS instalado, rode o seguinte comando no diretório do projeto de cada um dos projetos (4allTest-Client e 4allTest-Server):
### `npm install`

Após a instalação dos pacotes o comando a baixo iniciará o servidor - Rode o comando para cada um dos dirtórios dos projetos (4allTest-Client e 4allTest-Server):
### `npm start`

### Banco de dados

Como informado na entrega da atividade, foi realizado o banco de dados SQLite

## Endpoints

Foram criados endpoints de cominicação do lado do servidor para comunicação entre cliente e server, dentre eles estão:
### GET:
Listar lugares: /api/places

Listar lugar específico: /api/places/{placeId}

Listar pratos: /api/places/{placeId}/dishes

### POST:
Criar novo lugar: /api/places

Criar novo prato em um lugar: /api/places/{placeId}/dishes

## Funcionamento básico do sistema:

- O sistema inicia com a listagem dos lugares disponíveis para inclusão de pratos
- Ao clicar no card referente a algum dos lugares, serão listados os pratos já cadastrados para ele
- Ao clicar no botão de adicionar, ao lado do card do lugar, o usuário será direcionado a tela de cadastro de novo prato para aquele lugar
- Na tela de listagem de pratos já cadastrados, é mostrado um botão amarelo, também para direcionamento a página de cadastro de pratos
- Ao clicar no botão de retornar, nas telas de cadastro de prato e lista de pratos, o usuário será direcionado a página de lugares
- Rotas inválidas ou vazias farão com que seja realizado o direcionamento para a página de lugares, no caminho /places

### Rotas da parte do cliente
Página de lugares: /places

Página de pratos: /places/{placeId}/dishes

Página de cadastro de prato: /places/{placeId}/dishes/new

## Desenvolvimentos futuros:

O sistema foi realizado buscando otimizar o tempo de desenvolvimento para entrega, portanto alguns pontos seriam interessantes para desenvolvimento futuro:
- Paginação da listagem dos lugares
- Paginação da listagem dos pratos
- Criação de cadastro para lugares
- Inclusão de componentes para mensagens personalizadas na parte do cliente
- Inclusão de estrelas para a votação da qualidade de cada restaurante e pratos
- Autenticação e criação de usuários
- Inclusão de camada de segurança na parte do servidor, com controle de requisições
