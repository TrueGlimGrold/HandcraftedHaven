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
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    </style>
      <body className="">
        <header className="">
          <div className="">
            <h1 className="roboto title header-title">Handcrafted Haven</h1>
            <nav className="header-links">
              <Link href="/" className="inter">Theme ☀️/🌑</Link>
              <Link href="/" className="inter">Home</Link>
              <Link href="/" className="inter">Shop</Link>
              <Link href="/" className="inter">Login🤵</Link>
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

    // <html lang="en">
    // <style>
    // @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    // </style>
    // <body className="">
    //   <header className="">
    //     <div className="">
    //       <Link href="/" className="roboto title header-title">Theme ☀️/🌑</Link>
    //       <h1 className="">Handcrafted Haven</h1>
    //       <nav className="header-links">
    //         <Link href="/" className="inter">Artist</Link>
    //         <Link href="/" className="inter">Price</Link>
    //         <Link href="/" className="inter">Age(Time)</Link>
    //         <Link href="/" className="inter">Category</Link>
    //       </nav>
    //       <nav className="">
    //        <Link href="/" className="inter">
    //          <p>🏠</p>
    //          <p>Home</p>
    //        </Link>
    //        <Link href="/" className="inter">
    //          <p>🛒</p>
    //          <p>Shop</p>
    //        </Link>
    //        <Link href="/" className="inter">
    //          <p>🤵</p>
    //          <p>Shop</p>
    //        </Link>
    //       </nav>
    //     </div>
    //   </header>
    //   <main className="">
    //     {children}
    //   </main>
    //   <footer className="">
    //     <h1 className="roboto title footer-title">Handcrafted Haven</h1>
    //     <div className="footer-bottom">
    //       <p className="inter copyright">&copy; Handcrafted Haven {new Date().getFullYear()} | WDD430</p>
    //       <p className="inter"> Become A Seller</p>
    //       <Link href="/" className="inter"> About Us</Link>
    //       <Link href="/" className="inter"> Theme ☀️/🌑</Link>
    //     </div>
    //   </footer>
    // </body>
    // </html>

    // Logged in administrator

    // <html lang="en">
    // <style>
    // @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    // </style>
    // <body className="">
    //   <header className="">
    //     <div className="">
    //       <Link href="/" className="inter">Theme ☀️/🌑</Link>
    //       <h1 className="roboto title header-title">Handcrafted Haven</h1>
    //       <nav className="">
    //         <Link href="/" className="inter">My Products</Link>
    //         <Link href="/" className="inter">Reveiws</Link>
    //         <Link href="/" className="inter">Manage</Link>
    //         <Link href="/" className="inter">Category</Link>
    //       </nav>
    //       <nav className="">
    //        <Link href="/" className="inter">
    //          <p>🏠</p>
    //          <p>Home</p>
    //        </Link>
    //        <Link href="/" className="inter">
    //          <p>🛒</p>
    //          <p>Shop</p>
    //        </Link>
    //        <Link href="/" className="inter">
    //          <p>🤵</p>
    //          <p>Shop</p>
    //        </Link>
    //       </nav>
    //     </div>
    //   </header>
    //   <main className="">
    //     {children}
    //   </main>
    //   <footer className="">
    //     <h1 className="roboto title footer-title">Handcrafted Haven</h1>
    //     <div className="footer-bottom">
    //       <p className="inter copyright">&copy; Handcrafted Haven {new Date().getFullYear()} | WDD430</p>
    //       <p className="inter"> Become A Seller</p>
    //       <Link href="/" className="inter"> About Us</Link>
    //       <Link href="/" className="inter"> Theme ☀️/🌑</Link>
    //     </div>
    //   </footer>
    // </body>
    // </html>
  );
}
