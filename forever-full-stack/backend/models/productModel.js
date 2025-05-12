import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Array, required: true },
  //category from category model
  category: { type: String, required: true },
  sizes: { type: Array, required: true },
  quantity: { type: Number, required: true },
  date: { type: Number, required: true },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
