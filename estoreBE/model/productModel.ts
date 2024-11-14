import { model, Schema, Types } from "mongoose";

interface iProduct {
  ProductName: string;
  ProductPrice: string;
  ProductQTY: string;
  ProductDetail: string;
  category: string;

  Product: {};
}

interface iProductData extends iProduct, Document {}

const productModel = new Schema<iProductData>({
  ProductName: {
    type: String,
  },
  ProductPrice: {
    type: String,
  },
  ProductQTY: {
    type: String,
  },
  ProductDetail: {
    type: String,
  },
  category: {
    type: String,
  },
  Product: {
    type: Types.ObjectId,
    ref: "sellers",
  },
});

export default model<iProductData>("Products", productModel);
