import { Suspense } from 'react';
import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginPage() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="username" id="username" name="username" placeholder="Enter Your usernme" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter Your Password" minLength={6} required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
}