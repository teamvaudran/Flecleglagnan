import { Router, Request, Response, NextFunction } from 'express';
import * as flash from 'node-twinkle';

export class AppRouter {
    router: Router;


     /**
   * Initialize the Router
   */
  constructor() {
    console.log('Initializing server...');
    
    this.router = Router();
    this.init();

  }

    /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  private init() {
    this.router.get('/', (req, res, next) => {
      let messages = res.locals.has_flashed_messages() ? res.locals.get_flashed_messages() : [];
      res.render('index', {
        title: 'Bienvenue sur notre projet',
        flashedMessages: messages
      });
    });
}
}