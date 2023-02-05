<h1 align="center">Straightforward MERN Boilerplate</h1>

Most boilerplates try to make too many assumptions, 
this boilerplate is just a clean slate for your next MERN app.

Features include:
* Skeleton CRUD API
* Create-react-app typescript boilerplate
* Sample Mongoose connection

## Inital Setup
1. Copy **.env.example** and rename to **.env** in root of your project
2. Add your **MONGODB_URI**.
3. Run `yarn` to install all dependencies across all workspaces.

## Available Scripts

This boilerplate utilizes Yarn Workspaces to manage and run both client and server simultaneously.<br/>

### `yarn start`

Runs the server and client in the production mode.<br />

### `yarn run dev`

Runs the client, and then runs the server in the development mode with nodemon.
The server will listen for changes and auto-refresh.<br /

Server Listens on port 5001 by default [http://localhost:5001](http://localhost:5001)<br>

Client React app can be accessed at [http://localhost:3000](http://localhost:3000).

### `yarn run client-build`

Creates a client production build in client/build

### Dependencies

* NodeJS
* Yarn package manager

## LICENSE

[MIT LICENSE](LICENSE)
