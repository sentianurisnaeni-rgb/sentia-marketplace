type ProductProps = {
  image: string;
  name: string;
  brand: string;
  price: string;
};

export default function ProductCard({
  image,
  name,
  brand,
  price,
}: ProductProps) {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{
          width: "100%",
          aspectRatio: "4 / 5",
          objectFit: "cover",
        }}
      />

      <div className="card-body text-center">
        <h5 className="fw-bold">{name}</h5>

        <p className="text-muted mb-1">{brand}</p>

        <h6 className="text-primary fw-bold">
          {price}
        </h6>

        <button className="btn btn-primary rounded-pill mt-3 w-100">
          Detail Produk
        </button>
      </div>
    </div>
  );
}