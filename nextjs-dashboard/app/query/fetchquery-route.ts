import { db } from "@vercel/postgres";

const client = await db.connect();

// Queries
async function listProducts() {
    try {
        const data = await client.sql`
            SELECT id, product_name, image_url, rating, age, artist, style, category, price, status, description, reviews
            FROM products;
        `;
        return data.rows;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
}


export async function GET() {

    try {
        return Response.json(await listProducts());
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
