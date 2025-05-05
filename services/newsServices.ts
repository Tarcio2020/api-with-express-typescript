import NewsModel from "../repository/newRepository"; // ou renomeie para "../models/newsModel"

class NewsService {
  get() {
    return NewsModel.find({});
  }

  getById(_id: string) {
    return NewsModel.findById(_id);
  }

  create(news: any) {
    return NewsModel.create(news);
  }

  update(_id: string, news: any) {
    return NewsModel.findByIdAndUpdate(_id, news, { new: true });
}

  delete(_id: string) {
    return NewsModel.findByIdAndDelete(_id);
  }
}
export default new NewsService();
