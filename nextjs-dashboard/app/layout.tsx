import "../styles/globals.css";
import { ReactNode } from "react";
import Link from "next/link";
export const metadata = {
  title: "Handcrafted Haven",
  description: "A curated collection of artisanal and handmade products to enrich your life.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="bg-white shadow-md py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Handcrafted Haven</h1>
            <nav className="flex space-x-6 justify-center w-full"> {/* Updated navigation container */}
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="/shop" className="text-gray-700 hover:text-gray-900">Shop</Link>
              <Link href="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto p-6">
          {children}
        </main>
        <footer className="bg-gray-100 text-center py-4 mt-8">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Handcrafted Haven. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
