# RECOMOTOR wish list

RECOMOTOR wish list is an application web that alow the any Recomotor worker, set cars to favorites from a cars list. Also alows to the users to se all cars and it's details to all users.

## Tech stack

RECOMOTOR wish list is built using the following technologies:

- TypeScript
- React
- Node
- Express
- Redux Toolkit
- Styled components
- Jest & Vitest & Supertest & React Testing Library (RTL)
- MSW / Axios
- React-router-dom
- MongoDB & Mongoose & Mongo-Memory-Server
- Husky-Hooks
- ESLint & Prettier
- Git & Github
- Github Actions
- Postman
- Netlify | Render
- SonarCloud & Lighthoue
- MODELO DE RAMAS
- PIPELINE CI/CS

## Instructions for use

To see the project in "LOCAL" you have to follow this steps:

### FRONT

https://github.com/nilserratio/carWishList-Front
https://sonarcloud.io/summary/new_code?id=nilserratio_carWishList-Front

Create a .env file with the following enviroment variables:

- VITE_API_URL=http://localhost:4001

Run the following script:

- npm run dev

### BACK

https://github.com/nilserratio/carWishList-Back/pull/11

Create a .env file with the following enviroment variables:

- PORT=4001
- DEBUG=Recomotor-api:\*
- MONGODB_CONNECTION=mongodb+srv://nilserratio:usaias@items.qx1i0wv.mongodb.net/RecomotorDB
- JWT_SECRET=D5UHPRn2sIM8O1e-id5NxnT0YnHvBoPc1gJlrj7N-Xk
- ALLOWED_ORIGIN_DEV=http://localhost:5173
- ALLOWED_ORIGIN_PROD=https://carwishlist-front.netlify.app

Run the following script:

- npm run build
- npm run start

### TESTING

To run the testing bateries on each project run the following scripts:

- npm run test
- npm run test:coverage

## Author

Nil Serra Tió

https://github.com/nilserratio
