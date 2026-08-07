import ProductCard from "./ProductCard";

export default function ProductSection() {
  const products = [
    {
      image: "/image/skincare1.jpg",
      name: "Radiance Serum",
      brand: "Sentia Beauty",
      price: "Rp75.000",
    },
    {
      image: "/image/makeup.jpg",
      name: "Glow Cushion",
      brand: "Sentia Beauty",
      price: "Rp120.000",
    },
    {
      image: "/image/haircare.jpg",
      name: "Hair Treatment",
      brand: "Sentia Beauty",
      price: "Rp95.000",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5">
        Produk Terbaru
      </h2>

      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}