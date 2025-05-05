import express from 'express';
import Database from './infra/db';

import * as bodyParser from 'body-parser';

import NewsController from './controller/newsController';

class StartUp {
    public readonly app: express.Application;
    private readonly _db: Database;
    private readonly bodyParser: typeof bodyParser = bodyParser;
  
    constructor() {
      this.app = express();
      // Conecta ao banco
      this._db = new Database();
      this._db.createConnection();
      
      this.middler();
      this.routes();
    }

    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

  private routes() {
    this.app.get('/', (req, res) => {
      res.send({ versao: '0.0.1' });
    });

    this.app.route("/api/v1/news").get(NewsController.get);

    this.app.route("/api/v1/news/:id").get(NewsController.getById);

    this.app.route("/api/v1/news").post(NewsController.create);

    this.app.route("/api/v1/news/:id").put(NewsController.update);

    this.app.route("/api/v1/news/:id").delete(NewsController.delete);

  }
}

export default new StartUp();
