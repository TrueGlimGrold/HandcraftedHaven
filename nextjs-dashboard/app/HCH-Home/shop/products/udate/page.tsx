import { fetchProducts } from '@/app/lib/data';
 
export default async function Page() {
  const products = await fetchProducts();
 
  return (
    <main>
      <Form>
        
      </Form>
    </main>
  );
}