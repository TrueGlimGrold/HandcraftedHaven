import { db } from "@vercel/postgres";

const client = await db.connect();
// The red lines are from Type script ES Lint
// Queries
async function fetchProductsQuery() {
    return client.sql`
        SELECT id, product_name, image_url, rating, age, artist, style, category, price, status, description, reviews
        FROM products;
    `;
}

async function insertProductQuery(product) {
    const { id, product_name, image_url, rating, age, artist, style, category, price, status, description, reviews } = product;
    return client.sql`
        INSERT INTO products (id, product_name, image_url, rating, age, artist, style, category, price, status, description, reviews)
        VALUES (${id}, ${product_name}, ${image_url}, ${rating}, ${age}, ${artist}, ${style}, ${category}, ${price}, ${status}, ${description}, ${reviews})
        ON CONFLICT (id) DO NOTHING;
    `;
}

async function updateProductQuery(id, product) {
    const { product_name, image_url, rating, age, artist, style, category, price, status, description, reviews } = product;
    return client.sql`
        UPDATE products
        SET product_name = ${product_name}, image_url = ${image_url}, rating = ${rating}, age = ${age}, artist = ${artist}, style = ${style}, category = ${category}, price = ${price}, status = ${status}, description = ${description}, reviews = ${reviews}
        WHERE id = ${id};
    `;
}

async function deleteProductQuery(id) {
    return client.sql`
        DELETE FROM products WHERE id = ${id};
    `;
}

// CRUD Operations
async function listProducts() {
    try {
        const data = await fetchProductsQuery();
        return data.rows;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
}

async function addProduct(product) {
    try {
        await insertProductQuery(product);
        return { message: "Product added successfully" };
    } catch (error) {
        console.error("Error adding product:", error);
        throw new Error("Failed to add product");
    }
}

async function updateProduct(id, product) {
    try {
        await updateProductQuery(id, product);
        return { message: "Product updated successfully" };
    } catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Failed to update product");
    }
}

async function deleteProduct(id) {
    try {
        await deleteProductQuery(id);
        return { message: "Product deleted successfully" };
    } catch (error) {
        console.error("Error deleting product:", error);
        throw new Error("Failed to delete product");
    }
}

// API Handlers
export async function GET() {
    try {
        const products = await listProducts();
        return Response.json(products);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const product = await request.json();
        const response = await addProduct(product);
        return Response.json(response);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const { id, ...product } = await request.json();
        const response = await updateProduct(id, product);
        return Response.json(response);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        const response = await deleteProduct(id);
        return Response.json(response);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
