import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb://localhost:27017/${
      process.env.NODE_ENV === "test" ? "challenge_test" : "challenge"
    }`
  )
  .then(() => {
    if (process.env.NODE_ENV !== "test") {
      console.log("Connected database!✅");
    }
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.Promise = global.Promise;

export { mongoose };
