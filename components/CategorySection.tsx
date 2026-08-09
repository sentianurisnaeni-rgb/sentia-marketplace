export default function CategorySection() {
  const categories = [
    {
      title: "Skincare",
      image: "/image/skincare1.jpg",
    },
    {
      title: "Makeup",
      image: "/image/makeup.jpg",
    },
    {
      title: "Haircare",
      image: "/image/haircare.jpg",
    },
    
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Kategori Produk</h2>

      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <img
  src={category.image}
  className="card-img-top"
  alt={category.title}
  style={{
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "cover",
  }}
/>

              <div className="card-body text-center">
                <h5>{category.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}