import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  // if (!product) {
  //   response.status(404).json({ message: "Product not found" });
  // }

  if (request.method === "GET") {
    try {
      const product = await Product.findById(id).populate("reviews");
      response.status(200).json(product);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "PUT") {
    try {
      const updatedProduct = request.body;
      await Product.findByIdAndUpdate(id, updatedProduct);
      return response.status(200).json({ status: "Product updated" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      return response.status(200).json({ message: "Product deleted" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
