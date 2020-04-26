"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AppRouter {
    /**
  * Initialize the Router
  */
    constructor() {
        console.log('Initializing server...');
        this.router = express_1.Router();
        this.init();
    }
    /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
    init() {
        this.router.get('/', (req, res, next) => {
            let messages = res.locals.has_flashed_messages() ? res.locals.get_flashed_messages() : [];
            res.render('index', {
                title: 'Bienvenue sur notre projet',
                flashedMessages: messages
            });
        });
    }
}
exports.AppRouter = AppRouter;
