export default async function Page() {

  return (
    <main>
        <h1>Create New Product</h1>
        <form action="/submit_product" method="POST">
            {/* Product ID */}
            <label htmlFor="product_id">Product ID:</label>
            <input type="text" id="product_id" name="product_id" required />

            {/* Product Name */}
            <label htmlFor="product_name">Product Name:</label>
            <input type="text" id="product_name" name="product_name" required />

            {/* Age Date */}
            <label htmlFor="age_date">Age Date:</label>
            <input type="date" id="age_date" name="age_date" required />

            {/* Artist */}
            <label htmlFor="artist">Artist:</label>
            <input type="text" id="artist" name="artist" required />

            {/* Style */}
            <label htmlFor="style">Style:</label>
            <input type="text" id="style" name="style" required />

            {/* Category */}
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" required>
            <option value="">Select Category</option>
            <option value="painting">Painting</option>
            <option value="sculpture">Sculpture</option>
            <option value="photography">Photography</option>
            <option value="digital">Digital Art</option>
            </select>

            {/* Price */}
            <label htmlFor="price">Price ($):</label>
            <input type="number" id="price" name="price" step="0.01" required />

            {/* Status */}
            <label htmlFor="status">Status:</label>
            <select id="status" name="status" required>
            <option value="">Select Status</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="reserved">Reserved</option>
            </select>

            {/* Submit Button */}
            <button type="submit">Create Product</button>
        </form>
    </main>
  );
}