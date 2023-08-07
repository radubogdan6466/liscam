import mongoose from "mongoose";

const Connection = async (username, password) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("Conectatt cu bd");
  } catch (error) {
    console.log("Naspa, eroare la conectare cu bd", error);
  }
};

export default Connection;
