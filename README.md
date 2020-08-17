# nodemailer-react-express

This project demonstrates the usage of nodemailer with express.

The client side is built using react js and handles a contact form where users can enter a message and their relevant information. The server side is built using node js and express and handles validating the input and sending the email. The request to the server is made using the fetch api.

The ui is built with the help of material-ui.

### Client features include:

- async fetch api
- contact form
- custom form hook
- form validation

### Server features include:

- dev and production npm scripts
- dotenv
- email REST
- express validator

### Requirements:

- node js v12 (current version: 12.18.0)

### Usage:

- clone repository or download source code
- acquire nodemailer api keys (https://console.cloud.google.com/)
- create .env file in server config dir and add environment variables, which will include the above mentioned api keys (see: /server/config/.env.example)
- open project directory in terminal
- cd to server dir
- run npm install
- npm run dev
- cd to client dir
- run npm install
- npm start

## Available Client Scripts

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Available Server Scripts

In the server directory, you can run:

### `npm run start`

Starts the server in production mode

### `npm run dev`

Starts the server in development mode
