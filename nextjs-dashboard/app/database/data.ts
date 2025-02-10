// import sql from `@vercel/postgres`;

// export type ProductField = {
//     id: string;
//     name: string; 
// }

// export async function fetchProducts() {
//     try {
//       const data = await sql<ProductField>`
//         SELECT
//           id,
//           name
//         FROM Products
//         ORDER BY name ASC
//       `;
  
//       const Products = data.rows;
//       return Products;
//     } catch (err) {
//       console.error('Database Error:', err);
//       throw new Error('Failed to fetch all Products.');
//     }
//   }