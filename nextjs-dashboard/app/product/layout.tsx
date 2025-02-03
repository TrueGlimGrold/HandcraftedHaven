import Link from "next/link";
import "../styles/globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <header className="">
          <div className="">
            <h1 className="">Handcrafted Haven</h1>
            <nav className="">
              <Link href="/" className=""> Theme ☀️/🌑</Link>
              <Link href="/" className="">Home</Link>
              <Link href="/" className="">Shop</Link>
              <Link href="/login" className="">Login🤵</Link>
            </nav>
          </div>
        </header>
        <main className="">
          {children}
        </main>
        <footer className="">
          <h1 className="">Handcrafted Haven</h1>
          <div className="footer-bottom">
            <p className="">&copy; Handcrafted Haven {new Date().getFullYear()} | WDD430</p>
            <p className=""> Become A Seller</p>
            <Link href="/" className=""> About Us</Link>
            <Link href="/" className=""> Theme ☀️/🌑</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
