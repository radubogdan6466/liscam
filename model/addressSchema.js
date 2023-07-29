import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  address: String,
  details: String,
});

const address = mongoose.model("address", addressSchema);

export default address;
