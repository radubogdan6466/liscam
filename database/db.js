import mongoose from "mongoose";

const Connection = async (username, password) => {
  //const URL = `mongodb+srv://radubogdan6466:a1b2c3d1@cluster0.p0w0hlz.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("Conectat cu bd");
  } catch (error) {
    console.log("Naspa, eroare la conectare cu bd", error);
  }
};

export default Connection;
