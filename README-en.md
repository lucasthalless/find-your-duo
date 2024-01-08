<img src="./images/logo-nlw-esports.svg" alt="Logo" align="right">

# Find your duo &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Developed in the Next Level Week by Rocketseat 🚀

Platform where you can find a partner to play your favorite game together.

## Installing / Running

#### Api

Clone this repo with Git and in the */server* directory run:

```shell
npm install
npm run db:migrate
```

now, with the migrations executed and the database created, you can run the server:

```shell
npm run dev
```

which will be running on the port [:3333](http://localhost:3333/).

#### Web

In the */web* directory run:

```shell
npm install
npm run dev
```

the web app will be running on the port [:5173](http://localhost:5173/).

## Technologies and tools used

### Front end

The web app was developed in **ReactJS** with **Typescript** and created using [**Vite**](https://vitejs.dev/guide/why).
The styling was made using the CSS framework **TailwindCSS**, installed using **PostCSS**, and following the design of a prototype of the app in **Figma**.
To build several of the aplication components, the library used was **Radix UI** for ReactJS.

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Back end

The API was developed in **NodeJS** with **Express** and **TypeScript**.
The ORM **Prisma** with **SQLite** was used for creation and modeling of the database, along with the integration of the API with the database.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)