"use client";

type Product = {
  id_produk: number;
  nama_produk: string;
  brand: string | null;
  harga: number;
  gambar: string | null;
};

export default function CartButton({
  product,
}: {
  product: Product;
}) {

  const addToCart = () => {

    const existingCart =
      localStorage.getItem("cart");

    const cart = existingCart
      ? JSON.parse(existingCart)
      : [];


    const existingProduct = cart.find(
      (item: Product & { quantity: number }) =>
        item.id_produk === product.id_produk
    );


    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      cart.push({
        ...product,
        quantity: 1,
      });

    }


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


    alert(
      `${product.nama_produk} berhasil ditambahkan ke keranjang 🛒`
    );

  };


  return (

    <button
      type="button"
      className="shop-button"
      onClick={addToCart}
    >
      🛒 Tambah ke Keranjang
    </button>

  );
}