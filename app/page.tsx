import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* =========================
          HERO
      ========================== */}
      <section className="hero">
        <div className="container">
          <div className="hero-box">

            <p className="hero-tag">
              BEAUTY • CARE • CONFIDENCE
            </p>

            <h1>
              Beauty Begins
              <br />
              With You
            </h1>

            <p>
              Temukan berbagai produk skincare, makeup,
              dan haircare pilihan untuk menemani
              perjalanan kecantikanmu.
            </p>

            <Link href="/shop" className="btn-shop">
              Shop Now
            </Link>

          </div>
        </div>
      </section>


      {/* =========================
          FEATURES
      ========================== */}
      <section className="features">
        <div className="container">

          <div className="row">

            <div className="col-md-3 feature-box">
              <div className="feature-icon">🚚</div>
              <h6>Free Shipping</h6>
              <p>For selected orders</p>
            </div>

            <div className="col-md-3 feature-box">
              <div className="feature-icon">↩</div>
              <h6>Easy Returns</h6>
              <p>Simple return process</p>
            </div>

            <div className="col-md-3 feature-box">
              <div className="feature-icon">🛡</div>
              <h6>Secure Payment</h6>
              <p>Your payment is safe</p>
            </div>

            <div className="col-md-3 feature-box">
              <div className="feature-icon">♧</div>
              <h6>24/7 Support</h6>
              <p>We're here to help</p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          SHOP BY CATEGORY
      ========================== */}
      <section className="py-5">

        <div className="container">

          <h2 className="section-title">
            Shop By Category
          </h2>

          <div className="row g-4">

            {/* SKINCARE */}
            <div className="col-md-4">

              <Link
                href="/shop"
                className="category-card"
              >

                <img
                  src="/image/skincare1.jpg"
                  alt="Skincare"
                />

                <div className="card-body">
                  <h5>Skincare</h5>
                </div>

              </Link>

            </div>


            {/* MAKEUP */}
            <div className="col-md-4">

              <Link
                href="/shop"
                className="category-card"
              >

                <img
                  src="/image/makeup.jpg"
                  alt="Makeup"
                />

                <div className="card-body">
                  <h5>Makeup</h5>
                </div>

              </Link>

            </div>


            {/* HAIRCARE */}
            <div className="col-md-4">

              <Link
                href="/shop"
                className="category-card"
              >

                <img
                  src="/image/haircare.jpg"
                  alt="Haircare"
                />

                <div className="card-body">
                  <h5>Haircare</h5>
                </div>

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          BEST SELLERS
      ========================== */}
      <section className="py-5">

        <div className="container">

          <h2 className="section-title">
            Best Sellers
          </h2>

          <div className="row g-4">

            {/* PRODUCT 1 */}
            <div className="col-md-3">

              <div className="product-card">

                <img
                  src="/image/serum.jpg"
                  alt="Radiance Serum"
                />

                <div className="card-body">

                  <h5>Radiance Serum</h5>

                  <p>⭐⭐⭐⭐⭐</p>

                  <div className="price">
                    Rp.75.000
                  </div>

                </div>

              </div>

            </div>


            {/* PRODUCT 2 */}
            <div className="col-md-3">

              <div className="product-card">

                <img
                  src="/image/cream.jpg"
                  alt="Hydra Cream"
                />

                <div className="card-body">

                  <h5>Hydra Cream</h5>

                  <p>⭐⭐⭐⭐⭐</p>

                  <div className="price">
                    Rp.50.000
                  </div>

                </div>

              </div>

            </div>


            {/* PRODUCT 3 */}
            <div className="col-md-3">

              <div className="product-card">

                <img
                  src="/image/hairoil.jpg"
                  alt="Hair Oil"
                />

                <div className="card-body">

                  <h5>Hair Oil</h5>

                  <p>⭐⭐⭐⭐⭐</p>

                  <div className="price">
                    Rp.70.000
                  </div>

                </div>

              </div>

            </div>


            {/* PRODUCT 4 */}
            <div className="col-md-3">

              <div className="product-card">

                <img
                  src="/image/beautymist.jpg"
                  alt="Beauty Mist"
                />

                <div className="card-body">

                  <h5>Beauty Mist</h5>

                  <p>⭐⭐⭐⭐⭐</p>

                  <div className="price">
                    Rp.85.000
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PROMO
      ========================== */}
      <section className="container my-5">

        <div className="promo">

          <h2>
            Get 10% Off Your First Order
          </h2>

          <p>
            Use code SENTIA10 at checkout.
          </p>

          <Link href="/shop" className="btn-light">
            Shop Now
          </Link>

        </div>

      </section>


      {/* =========================
          NEWSLETTER
      ========================== */}
      <section className="newsletter">

        <div className="container">

          <h2 className="section-title">
            Join Our Beauty Club
          </h2>

          <p>
            Get exclusive offers and updates.
          </p>

          <div className="row justify-content-center">

            <div className="col-md-6">

              <div className="input-group">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />

                <button className="btn">
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer>

        <div className="container">

          <div className="row">

            <div className="col-md-4">

              <h3>SENTIA</h3>

              <p>
                Premium skincare and beauty essentials.
              </p>

            </div>

            <div className="col-md-4">

              <h5>Shop</h5>

              <ul>
                <li>Skincare</li>
                <li>Makeup</li>
                <li>Haircare</li>
              </ul>

            </div>

            <div className="col-md-4">

              <h5>Support</h5>

              <ul>
                <li>Contact</li>
                <li>Shipping</li>
                <li>FAQ</li>
              </ul>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}