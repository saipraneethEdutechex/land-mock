import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://saipraneeth:h4tg0thmjCvjUC7y@cluster0.1krfyx2.mongodb.net/ "
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
