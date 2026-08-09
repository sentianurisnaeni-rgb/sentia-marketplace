"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CartProduct = {
  id_produk: number;
  nama_produk: string;
  brand: string | null;
  harga: number;
  gambar: string | null;
  quantity: number;
};

export default function CartPage() {

  const [cart, setCart] = useState<CartProduct[]>([]);

  // ================================
  // AMBIL DATA KERANJANG
  // ================================

  useEffect(() => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

  }, []);


  // ================================
  // SIMPAN CART
  // ================================

  const saveCart = (newCart: CartProduct[]) => {

    setCart(newCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );

  };


  // ================================
  // TAMBAH JUMLAH
  // ================================

  const increaseQuantity = (id: number) => {

    const newCart = cart.map((item) =>
      item.id_produk === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    saveCart(newCart);

  };


  // ================================
  // KURANGI JUMLAH
  // ================================

  const decreaseQuantity = (id: number) => {

    const newCart = cart
      .map((item) =>
        item.id_produk === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(newCart);

  };


  // ================================
  // HAPUS PRODUK
  // ================================

  const removeProduct = (id: number) => {

    const newCart = cart.filter(
      (item) => item.id_produk !== id
    );

    saveCart(newCart);

  };


  // ================================
  // TOTAL
  // ================================

  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.harga) * item.quantity,
    0
  );


  return (

    <main className="cart-page">

      {/* ================================
          HEADER
      ================================= */}

      <section className="cart-header">

        <div className="container">

          <p className="cart-tag">
            BEAUTY • CARE • CONFIDENCE
          </p>

          <h1>
            Shopping Cart
          </h1>

          <p>
            Produk pilihanmu ada di sini
          </p>

        </div>

      </section>


      {/* ================================
          CART CONTENT
      ================================= */}

      <section className="cart-content">

        <div className="container">

          {cart.length === 0 ? (

            /* =========================
               KERANJANG KOSONG
            ========================= */

            <div className="empty-cart">

              <div className="empty-cart-icon">
                🛒
              </div>

              <h2>
                Keranjangmu masih kosong
              </h2>

              <p>
                Yuk temukan produk beauty favoritmu.
              </p>

              <Link
                href="/shop"
                className="continue-shopping-button"
              >
                Belanja Sekarang
              </Link>

            </div>

          ) : (

            <div className="cart-layout">


              {/* =========================
                  PRODUK
              ========================= */}

              <div className="cart-products">

                <div className="cart-title-row">

                  <h2>
                    Keranjang Belanja
                  </h2>

                  <span>
                    {cart.length} Produk
                  </span>

                </div>


                {cart.map((item) => {

                  const imageSrc = item.gambar
                    ? item.gambar.startsWith("/")
                      ? item.gambar
                      : `/image/${item.gambar}`
                    : "/image/skincare1.jpg";


                  return (

                    <div
                      className="cart-item"
                      key={item.id_produk}
                    >

                      {/* GAMBAR */}

                      <div className="cart-image">

                        <img
                          src={imageSrc}
                          alt={item.nama_produk}
                        />

                      </div>


                      {/* INFORMASI */}

                      <div className="cart-info">

                        <p className="cart-category">
                          SENTIA BEAUTY
                        </p>

                        <h3>
                          {item.nama_produk}
                        </h3>

                        <p className="cart-brand">
                          {item.brand}
                        </p>

                        <p className="cart-price">
                          Rp{" "}
                          {Number(item.harga)
                            .toLocaleString("id-ID")}
                        </p>

                      </div>


                      {/* JUMLAH */}

                      <div className="cart-quantity">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item.id_produk
                            )
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(
                              item.id_produk
                            )
                          }
                        >
                          +
                        </button>

                      </div>


                      {/* TOTAL PRODUK */}

                      <div className="cart-item-total">

                        Rp{" "}
                        {(
                          Number(item.harga) *
                          item.quantity
                        ).toLocaleString("id-ID")}

                      </div>


                      {/* HAPUS */}

                      <button
                        type="button"
                        className="cart-remove"
                        onClick={() =>
                          removeProduct(
                            item.id_produk
                          )
                        }
                      >
                        ×
                      </button>

                    </div>

                  );

                })}


                <Link
                  href="/shop"
                  className="continue-shopping"
                >
                  ← Lanjut Belanja
                </Link>

              </div>


              {/* =========================
                  RINGKASAN
              ========================= */}

              <aside className="cart-summary">

                <h2>
                  Ringkasan Pesanan
                </h2>


                <div className="summary-line">

                  <span>
                    Subtotal
                  </span>

                  <strong>
                    Rp {subtotal.toLocaleString("id-ID")}
                  </strong>

                </div>


                <div className="summary-line">

                  <span>
                    Ongkir
                  </span>

                  <strong>
                    Gratis
                  </strong>

                </div>


                <div className="summary-divider"></div>


                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    Rp {subtotal.toLocaleString("id-ID")}
                  </strong>

                </div>


                <button
  type="button"
  className="checkout-button"
  onClick={() => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong.");
      return;
    }

    alert("🎉 Checkout berhasil! Terima kasih sudah berbelanja di Sentia Beauty 💗");

    setCart([]);
    localStorage.removeItem("cart");
  }}
>
  Checkout
</button>


                <p className="secure-payment">
                  🔒 Pembayaran aman dan terpercaya
                </p>

              </aside>

            </div>

          )}

        </div>

      </section>


      {/* ================================
          BOTTOM
      ================================= */}

      <section className="cart-bottom">

        <div className="container">

          <h2>
            Beauty Made Simple
          </h2>

          <p>
            Temukan produk kecantikan favoritmu
            hanya di Sentia Beauty.
          </p>

        </div>

      </section>

    </main>

  );
}