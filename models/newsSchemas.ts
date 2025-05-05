import * as mongoose from "mongoose";

    const NewsSchemas = new mongoose.Schema({
        hat: { type: String },
        title: { type: String },
        description: { type: String },
        image: { type: String },
        date: { type: Date },
        publishDate: { type: String },
        link: { type: String },
        category: { type: String },
    })

    export default NewsSchemas;