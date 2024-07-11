import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    const data = getAllProducts();
    response.status(200).json(data);
    return;
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
