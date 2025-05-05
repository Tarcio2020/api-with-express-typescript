import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"; // se preferir
import Helper from "../infra/helper"
import newsServices from '../services/newsServices';

class NewsController {
  get(req: Request, res: Response) {
    newsServices.get()
      .then(news => Helper.sendResponse(res, StatusCodes.OK, news))
      .catch(error => console.error(`Error ${error}`));
  }

  getById(req: Request, res: Response) {
    const _id = req.params.id;

    newsServices.getById(_id)
      .then(news => Helper.sendResponse(res, StatusCodes.OK, news))
      .catch(error => console.error(`Error ${error}`));
  }

  create(req: Request, res: Response) {
    let vm = req.body;

    newsServices.create(vm)
      .then(() =>
        Helper.sendResponse(res, StatusCodes.CREATED, "Notícia cadastrada com sucesso!")
      )
      .catch(error => console.error(`Error ${error}`));
  }

  update(req: Request, res: Response) {
    const _id = req.params.id;
    let news = req.body;

    newsServices.update(_id, news)
      .then(() =>
        Helper.sendResponse(res, StatusCodes.OK, "Notícia atualizada com sucesso!")
      )
      .catch(error => console.error(`Error ${error}`));
  }

  delete(req: Request, res: Response) {
    const _id = req.params.id;

    newsServices.delete(_id)
      .then(() =>
        Helper.sendResponse(res, StatusCodes.OK, "Notícia deletada com sucesso!")
      )
      .catch(error => console.error(`Error ${error}`));
  }
}

export default new NewsController();
