import * as mongoose from "mongoose";

class Database {
 
    private readonly DB_URL: string = "mongodb://localhost:27017/News";

  createConnection() {
    mongoose.connect(this.DB_URL);
  }
}

export default Database; 