import Link from "next/link";
import "../styles/globals.css";
import { ReactNode } from "react";

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

      <head>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <body className="">
        <header className="">
          <div className="">
            <h1 className="roboto title header-title">Handcrafted Haven</h1>
            <nav className="header-links">
              <Link href="/" className="inter">Theme ☀️/🌑</Link> {/*This has to be a button / toggle for theme swtiching to day or night*/}
              <Link href="/HCH-Home/shop/home" className="inter">Home</Link>
              <Link href="/HCH-Home/shop" className="inter">Shop</Link>
              <Link href="/login" className="inter">Login🤵</Link>
            </nav>
          </div>
        </header>
        <main className="">
          {children}
        </main>
        <footer className="">
          <h1 className="roboto title footer-title">Handcrafted Haven</h1>
          <div className="footer-bottom">
            <p className="inter copyright">&copy; Handcrafted Haven {new Date().getFullYear()} | WDD430</p>
            <p className="inter"> Become A Seller</p>
            <Link href="/" className="inter">About Us</Link>
            <Link href="/" className="inter">Theme ☀️/🌑</Link>
          </div>
        </footer>
      </body>
    </html>

    // Logged in user

  );
}
