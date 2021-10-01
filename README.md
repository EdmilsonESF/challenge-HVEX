# Challenge-HVEX

<p align="center">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EdmilsonESF/challenge-HVEX">
  
  <a href="https://github.com/EdmilsonESF/challenge-HVEX/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EdmilsonESF/challenge-HVEX">
  </a>
    
</p>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#💻-sobre-o-projeto)
   * [Funcionalidades](#⚙️-funcionalidades)
   * [Como executar o projeto](#🚀-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o servidor](#🎲-rodando-o-servidor)
     * [Rodando os testes](#🧪-rodando-os-testes)
   * [Tecnologias](#🛠-tecnologias)

---


## ⚙️ Funcionalidades
- [x] Criacão de um novo usuário.
- [x] Exibir os dados de um usuário.
- [x] Atualizar os dados de um usuário.
- [x] Remover um usuário.

| Métodos | Rotas | Request Body | Response |
|:---|---|---|---|
| <span style="color:green">POST</span> | /create | {<br>  "name": "Name",<br>  "userName": "User Name",<br>  "password": "123123"<br>} | {<br><br>  "name": "Name",<br>  "userName": "User NAme",<br>  "lastAccess": "2021-10-01T13:55:37.355Z",<br>  "id": "61574584462d32c65f251cc6"<br>} |
| <span style="color:cyan">GET</span> | /read/:id | No Body | {<br>  "name": "Name",<br>  "userName": "User NAme",<br>  "lastAccess": "2021-10-01T13:55:37.355Z",<br>  "id": "61574584462d32c65f251cc6"<br>} |
| <span style="color:orange">PUT</span> | /update/:id | {<br>  "name": "Name Update",<br>  "userName": "User Name Update",<br>  "password": "123123"<br>} | {<br>  "name": "Name Update",<br>  "userName": "User Name Update",<br>  "lastAccess": "2021-10-01T17:34:14.173Z",<br>  "id": "61574584462d32c65f251cc6"<br>} |
| <span style="color:red">DELETE</span> | /delete/:id | No Body | No Content |

</br>

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker e Docker-Compose](https://www.notion.so/Docker-e-Docker-Compose-16771f2ceefe4a05a8c29df4ca49e97a).

#### 🎲 Rodando o servidor

```bash

# Clone este repositório
$ git clone https://github.com/EdmilsonESF/challenge-HVEX.git

# Acesse a pasta do projeto no terminal/cmd
$ cd challenge-HVEX

# Instale as dependências
$ npm install
# Ou
$ yarn

#Crie o container do banco de dados
$ sudo docker-compose up -d --build

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Ou
$ yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

#### 🧪 Rodando os testes

```bash
# Execute os testes da aplicação
$ npm run test
# Ou
$ yarn test

```

<p align="center">
  <a href="http://localhost:3333/api-docs" target="_blank"><img src="https://img.shields.io/badge/-Swagger-232129?style=flat-square&logo=swagger" width="120" alt="swagger"></a>
</p>

<p align="center">
  <a href="https://github.com/EdmilsonESF/challenge-HVEX/blob/main/insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[MongoDB](https://www.mongodb.com/pt-br)**
-   **[Docker](https://www.docker.com/)**
-   **[Docker-Compose](https://docs.docker.com/compose/)**
-   **[Mongoose](https://mongoosejs.com/)**
-   **[Tsyringe](https://github.com/microsoft/tsyringe)**

> Veja o arquivo  [package.json](https://github.com/EdmilsonESF/challenge-HVEX/blob/main/package.json)

#### [](utilitarios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   GUI do MongoDB: **[MongoDB Compass](https://www.mongodb.com/pt-br/products/compass)**
