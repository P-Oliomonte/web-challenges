import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  // if (!product) {
  //   response.status(404).json({ message: "Product not found" });
  // }

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    response.status(200).json(product);
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
