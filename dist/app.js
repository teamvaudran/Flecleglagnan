"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const flash = require("node-twinkle");
const ExpressSession = require("express-session");
const AppRouter_1 = require("./routes/AppRouter");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        //ici on defini quelle langage frontend on va utiliser
        this.expressApp.set('view engine', 'pug');
        this.expressApp.use(express.static(__dirname + '/public')); // https://expressjs.com/en/starter/static-files.html
    }
    // Configure Express middleware.
    middleware() {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(ExpressSession({ secret: 'My Secret Key',
            resave: false,
            saveUninitialized: true }));
        this.expressApp.use(flash); // https://www.npmjs.com/package/node-twinkle typed using https://stackoverflow.com/a/53786892/1168342 (solution #2)
    }
    // Configure API endpoints.
    routes() {
        /* This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        let appRouter = new AppRouter_1.AppRouter();
        this.expressApp.use('/', appRouter.router);
        this.expressApp.use('/', router); // routage de base
    }
}
exports.default = new App().expressApp;
