import { prisma } from "../lib/prisma";
import CartButton from "../components/CartButton";

export default async function ShopPage() {
  const produk = await prisma.produk.findMany({
    include: {
      kategori: true,
    },
    orderBy: {
      id_produk: "desc",
    },
  });

  // =================================
  // MEMBAGI PRODUK BERDASARKAN KATEGORI
  // =================================

  const skincare = produk.filter(
    (item) =>
      item.kategori?.nama_kategori?.toLowerCase() === "skincare"
  );

  const makeup = produk.filter(
    (item) =>
      item.kategori?.nama_kategori?.toLowerCase() === "make up" ||
      item.kategori?.nama_kategori?.toLowerCase() === "makeup"
  );

  const haircare = produk.filter(
    (item) =>
      item.kategori?.nama_kategori?.toLowerCase() === "hair care" ||
      item.kategori?.nama_kategori?.toLowerCase() === "haircare"
  );

  // =================================
  // CARD PRODUK
  // =================================

  const ProductCard = ({
    item,
  }: {
    item: (typeof produk)[number];
  }) => {
    const imageSrc = item.gambar
      ? item.gambar.startsWith("/")
        ? item.gambar
        : `/image/${item.gambar}`
      : "/image/skincare1.jpg";

    return (
      <div className="shop-product-card">

        {/* GAMBAR PRODUK */}
        <div className="shop-image-wrapper">
          <img
            src={imageSrc}
            alt={item.nama_produk}
            className="shop-product-image"
          />
        </div>

        {/* INFORMASI PRODUK */}
        <div className="shop-product-body">

          {/* NAMA PRODUK */}
          <h3 className="product-name">
            {item.nama_produk}
          </h3>

          {/* BRAND */}
          <p className="product-brand">
            {item.brand}
          </p>

          {/* RATING */}
          <div className="product-rating">
            ⭐⭐⭐⭐⭐
          </div>

          {/* HARGA */}
          <p className="product-price">
            Rp {Number(item.harga).toLocaleString("id-ID")}
          </p>

          {/* TOMBOL KERANJANG */}
          <div className="product-actions">

  <CartButton
    product={{
      id_produk: item.id_produk,
      nama_produk: item.nama_produk,
      brand: item.brand,
      harga: Number(item.harga),
      gambar: item.gambar,
    }}
  />

</div>

        </div>
      </div>
    );
  };

  return (
    <main>

      {/* =================================
          HEADER SHOP
      ================================= */}

      <section className="shop-header">
        <div className="container">

          <p className="shop-tag">
            BEAUTY • CARE • CONFIDENCE
          </p>

          <h1>
            Shop
          </h1>

          <p>
            Temukan produk pilihan dari Sentia Beauty
          </p>

        </div>
      </section>


      {/* =================================
          SKINCARE
      ================================= */}

      {skincare.length > 0 && (
        <section className="shop-category-section">

          <div className="container">

            <div className="shop-category-header">

              <h2>
                Skincare
              </h2>

              <span>
                {skincare.length} Products
              </span>

            </div>

            <div className="shop-product-grid">

              {skincare.map((item) => (
                <ProductCard
                  key={item.id_produk}
                  item={item}
                />
              ))}

            </div>

          </div>

        </section>
      )}


      {/* =================================
          MAKE UP
      ================================= */}

      {makeup.length > 0 && (
        <section className="shop-category-section">

          <div className="container">

            <div className="shop-category-header">

              <h2>
                Make Up
              </h2>

              <span>
                {makeup.length} Products
              </span>

            </div>

            <div className="shop-product-grid">

              {makeup.map((item) => (
                <ProductCard
                  key={item.id_produk}
                  item={item}
                />
              ))}

            </div>

          </div>

        </section>
      )}


      {/* =================================
          HAIR CARE
      ================================= */}

      {haircare.length > 0 && (
        <section className="shop-category-section">

          <div className="container">

            <div className="shop-category-header">

              <h2>
                Hair Care
              </h2>

              <span>
                {haircare.length} Products
              </span>

            </div>

            <div className="shop-product-grid">

              {haircare.map((item) => (
                <ProductCard
                  key={item.id_produk}
                  item={item}
                />
              ))}

            </div>

          </div>

        </section>
      )}


      {/* =================================
          BAGIAN BAWAH SHOP
      ================================= */}

      <section className="shop-bottom">

        <div className="container">

          <h2>
            Find Your Beauty Essentials
          </h2>

          <p>
            Pilih produk favoritmu dan temukan
            perawatan yang sesuai untukmu.
          </p>

        </div>

      </section>

    </main>
  );
}