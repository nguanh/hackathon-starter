# Hackathon Starter
Template Project to be used in Hackathons.
Uses the MERN Stack
- MongoDB
- Express.js
- React
- Node.js

The Application is a basic Todo Application because it contains all CRUD operations.

## Setup
1. Clone Project
2. run `yarn install` in `server` folder to install server dependencies
3. run `yarn install` in `client` folder to install web application dependencies
4. run `yarn install` in `app` folder to install app dependencies

 Start app + server with `yarn run appstart` or
 Start WebApplication + server with `yarn run start` or
 
 Download "expo" app and scan QR Code to run app.
 Server can be reached with `localhost:5000`
 Add URI to MongoDB in `server/config/keys.ts`

## Structure
All files use TS and Babel
#### `app` folder

- react-native + expo as frontend
- native-base for design
- redux for state management
- axios for REST

#### `client` folder

- react as frontend
- reacstrap for design
- redux for state management
- axios for REST


#### `server` folder

- mongoose for MongoDB communication

uses Typescript and Babel 


#Sources 
- https://github.com/microsoft/TypeScript-Babel-Starter
- https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE


