"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email dan password harus diisi.");
      return;
    }

    alert("Login berhasil! 💗");
  };

  return (
    <main className="login-page">

      {/* ================================
          LOGIN HEADER
      ================================= */}

      <section className="login-header">

        <div className="container">

          <p className="login-tag">
            BEAUTY • CARE • CONFIDENCE
          </p>

          <h1>
            Welcome Back
          </h1>

          <p>
            Masuk ke akun Sentia Beauty kamu
          </p>

        </div>

      </section>


      {/* ================================
          LOGIN FORM
      ================================= */}

      <section className="login-content">

        <div className="login-card">

          <div className="login-card-header">

            <h2>
              Login
            </h2>

            <p>
              Silakan masuk untuk melanjutkan
            </p>

          </div>


          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <div className="login-form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="Masukkan email kamu"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>


            {/* PASSWORD */}

            <div className="login-form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>


          {/* REGISTER */}

          <div className="login-register">

            <p>
              Belum punya akun?
            </p>

            <Link href="/register">
              Buat akun baru
            </Link>

          </div>


          {/* BACK */}

          <Link
            href="/"
            className="login-back"
          >
            ← Kembali ke Home
          </Link>

        </div>

      </section>

    </main>
  );
}