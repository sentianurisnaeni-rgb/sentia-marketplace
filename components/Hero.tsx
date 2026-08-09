export default function Hero() {
  return (
    <section className="bg-light py-5">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1 className="display-4 fw-bold">
              Discover Your Beauty
            </h1>

            <p className="lead">
              Temukan berbagai produk skincare,
              makeup, bodycare dan haircare
              terbaik hanya di SENTIA BEAUTY.
            </p>

            <button className="btn btn-primary btn-lg">
              Shop Now
            </button>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="/image/skincare1.jpg"
              className="img-fluid rounded"
              alt="Hero"
            />

          </div>

        </div>

      </div>
    </section>
  );
}