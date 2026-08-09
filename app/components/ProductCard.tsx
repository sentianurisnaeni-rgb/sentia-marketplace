"use client";

import { useState } from "react";

type Product = {
  id_produk: number;
  nama_produk: string;
  brand: string;
  harga: number;
  gambar: string | null;
  deskripsi: string | null;
  kategori: {
    nama_kategori: string;
  } | null;
};

export default function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    const oldCart = localStorage.getItem("sentia-cart");

    const cart = oldCart ? JSON.parse(oldCart) : [];

    const existingProduct = cart.find(
      (item: any) => item.id_produk === product.id_produk
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id_produk: product.id_produk,
        nama_produk: product.nama_produk,
        brand: product.brand,
        harga: product.harga,
        gambar: product.gambar,
        quantity: 1,
      });
    }

    localStorage.setItem("sentia-cart", JSON.stringify(cart));

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="shop-product-card">

      {/* GAMBAR PRODUK */}
      <div className="shop-image-wrapper">
        <img
          src={product.gambar || "/image/no-image.jpg"}
          alt={product.nama_produk}
          className="shop-product-image"
        />
      </div>

      {/* INFORMASI */}
      <div className="shop-product-info">

        <h3>{product.nama_produk}</h3>

        <p className="shop-product-price">
          Rp {Number(product.harga).toLocaleString("id-ID")}
        </p>

        <button
          className={`shop-cart-button ${added ? "added" : ""}`}
          onClick={addToCart}
        >
          {added ? "✓ Ditambahkan" : "Tambah ke Keranjang"}
        </button>

      </div>

    </div>
  );
}