export default async function Page() {

    return (
      <main>
          <h1>Delete Product</h1>
          <form action="/submit_product" method="POST">
              {/* Submit Button */}
              <button type="submit">Delete Product</button>
          </form>
      </main>
    );
  }