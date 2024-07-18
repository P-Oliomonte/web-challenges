import useSWR from "swr";

export default function ProductForm() {
  const { mutate } = useSWR("api/products");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <h4>Add a new fish</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" />

        <label htmlFor="description">Description: </label>
        <input type="text" id="description" name="description" />

        <label htmlFor="Price">Price: </label>
        <input type="number" id="price" name="price" />

        <label htmlFor="currency">Currency: </label>
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBR">GBR</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
