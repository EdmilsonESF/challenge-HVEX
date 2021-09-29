import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/challenge")
  .then(() => {
    console.log("Connected database!✅");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.Promise = global.Promise;

export { mongoose };
