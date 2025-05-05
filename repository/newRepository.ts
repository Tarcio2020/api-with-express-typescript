import * as mongoose from "mongoose";
import NewsSchemas from "../models/newsSchemas";

const NewsModel = mongoose.model("news", NewsSchemas);
export default NewsModel;
