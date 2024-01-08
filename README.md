<img src="./images/logo-nlw-esports.svg" alt="Logo" align="right">

# Find your duo &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[English](./README-en.md) 👈

> Desenvolvido na Next Level Week da Rocketseat 🚀

Plataforma onde você pode formar uma dupla para jogar seu jogo favorito juntos.

## Instalação / Execução

### Api

Clone esse repositório utilizando Git e no diretório */server* execute:

```shell
npm install
npm run db:migrate
```

agora, com as migrations executadas e o banco de dados criado, é só rodar o servidor:

```shell
npm run dev
```

que estará online na porta [:3333](http://localhost:3333/).

### Web

No diretório */web* execute:

```shell
npm install
npm run dev
```

a aplicação web estará rodando na porta [:5173](http://localhost:5173/).

## Tecnologias e ferramentas utilizadas

### Front end

A aplicação web foi desenvolvida em **ReactJS** com **Typescript** e criada utilizando o [**Vite**](https://pt.vitejs.dev/guide/why).
A estilização foi feita utilizando o framework CSS **TailwindCSS**, instalado utilizando **PostCSS**, e seguindo o design de um protótipo do app no **Figma**.
Para construir diversos componentes foi utilizada a biblioteca **Radix UI** para ReactJS.

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Back end

A API foi desenvolvida em **NodeJS** com **Express** e **TypeScript**.
Foi utilizado o ORM **Prisma** com **SQLite** para criação e modelagem do banco de dados, juntamente com a integração da API com o banco de dados.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)