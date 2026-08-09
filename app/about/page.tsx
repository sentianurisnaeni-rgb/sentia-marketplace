export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ABOUT HEADER */}
      <section className="about-header">
        <div className="container">

          <p className="about-tag">
            ABOUT SENTIA
          </p>

          <h1>
            Beauty Begins<br />
            With You
          </h1>

          <p className="about-subtitle">
            Mengenal lebih dekat Sentia Beauty
          </p>

        </div>
      </section>


      {/* ABOUT CONTENT */}
      <section className="about-content">

        <div className="container">

          <div className="about-grid">

            {/* IMAGE */}
            <div className="about-image">

              <img
                src="/image/skincare1.jpg"
                alt="Sentia Beauty"
              />

            </div>


            {/* TEXT */}
            <div className="about-text">

              <p className="about-small-title">
                OUR STORY
              </p>

              <h2>
                Tentang Sentia Beauty
              </h2>

              <p>
                Sentia Beauty hadir untuk menemani setiap
                perjalanan kecantikan dengan produk pilihan
                yang praktis dan nyaman digunakan.
              </p>

              <p>
                Kami percaya bahwa kecantikan bukan hanya
                tentang penampilan, tetapi juga tentang
                merawat diri dan membangun rasa percaya diri.
              </p>

              <p>
                Karena itu, Sentia Beauty menghadirkan
                berbagai pilihan skincare, makeup, dan
                haircare untuk kebutuhan sehari-hari.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* VALUES */}
      <section className="about-values">

        <div className="container">

          <h2>
            Why Sentia Beauty?
          </h2>

          <div className="values-grid">

            <div className="value-card">
              <div className="value-icon">
                ✨
              </div>

              <h3>
                Quality
              </h3>

              <p>
                Produk pilihan untuk menemani
                perawatan sehari-hari.
              </p>
            </div>


            <div className="value-card">
              <div className="value-icon">
                ♡
              </div>

              <h3>
                Care
              </h3>

              <p>
                Mengutamakan kenyamanan dalam
                setiap perjalanan kecantikan.
              </p>
            </div>


            <div className="value-card">
              <div className="value-icon">
                ✦
              </div>

              <h3>
                Confidence
              </h3>

              <p>
                Membantu kamu merasa nyaman
                dan percaya diri.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div className="container">

          <h2>
            Your Beauty, Your Story
          </h2>

          <p>
            Temukan produk pilihan untuk menemani
            perjalanan kecantikanmu.
          </p>

          <a
            href="/shop"
            className="about-button"
          >
            Explore Shop
          </a>

        </div>

      </section>

    </main>
  );
}