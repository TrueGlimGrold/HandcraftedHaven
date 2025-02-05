"use client" ; //must use client as it is client's response to give the cureent theme to the app
import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
      <html lang="en">

      <body>
      <header>
        <div>
          <h1 className="title">Handcrafted Haven</h1>
          <nav>
            <button onClick={toggleTheme} style={{ cursor: "pointer", padding: "5px 10px" }}>
              {theme === "light" ? "🌑 Dark Mode" : "☀️ Light Mode"}
            </button>
            <Link href="/HCH-Home">Home</Link>
            <Link href="/HCH-Home/shop">Shop</Link>
            <Link href="/login">Login 🤵</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <h1 className="title">Handcrafted Haven</h1>
        <div>
          <p>&copy; {new Date().getFullYear()} Handcrafted Haven | WDD430</p>
          <p>Become A Seller</p>
          <Link href="/about">About Us</Link>
          <button onClick={toggleTheme} style={{ cursor: "pointer", padding: "5px 10px" }}>
            {theme === "light" ? "🌑 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </footer>
      </body>
      </html>
  );
}
