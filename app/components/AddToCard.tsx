"use client";

import { useState } from "react";

type Product = {
  id_produk: number;
  nama_produk: string;
  harga: number;
  gambar: string | null;
};

export default function AddToCart({
  product,
}: {
  product: Product;
}) {
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingProduct = cart.find(
      (item: Product) => item.id_produk === product.id_produk
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  return (
    <button
      type="button"
      className="shop-button"
      onClick={handleAddToCart}
    >
      {added ? "✓ Ditambahkan" : "Tambah ke Keranjang"}
    </button>
  );
}