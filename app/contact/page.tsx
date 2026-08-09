export default function ContactPage() {
  return (
    <main className="contact-page">

      {/* CONTACT HEADER */}
      <section className="contact-header">
        <div className="container">

          <p className="contact-tag">
            GET IN TOUCH
          </p>

          <h1>
            Contact Us
          </h1>

          <p className="contact-subtitle">
            Kami siap membantu dan menjawab pertanyaanmu.
          </p>

        </div>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-content">

        <div className="container">

          <div className="contact-grid">

            {/* CONTACT INFORMATION */}
            <div className="contact-info">

              <p className="contact-small-title">
                CONTACT US
              </p>

              <h2>
                Let's Talk
              </h2>

              <p className="contact-description">
                Punya pertanyaan tentang produk, pesanan,
                atau ingin mengetahui lebih banyak tentang
                Sentia Beauty? Hubungi kami melalui informasi
                di bawah ini.
              </p>


              {/* EMAIL */}
              <div className="contact-item">

                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <h3>
                    Email
                  </h3>

                  <p>
                    hello@sentia.com
                  </p>
                </div>

              </div>


              {/* PHONE */}
              <div className="contact-item">

                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <h3>
                    Phone
                  </h3>

                  <p>
                    +62 812 3456 7890
                  </p>
                </div>

              </div>


              {/* ADDRESS */}
              <div className="contact-item">

                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <h3>
                    Address
                  </h3>

                  <p>
                    Indonesia
                  </p>
                </div>

              </div>


              {/* SERVICE */}
              <div className="contact-item">

                <div className="contact-icon">
                  🕐
                </div>

                <div>
                  <h3>
                    Customer Service
                  </h3>

                  <p>
                    Monday - Friday, 09.00 - 17.00
                  </p>
                </div>

              </div>

            </div>


            {/* CONTACT FORM */}
            <div className="contact-form-box">

              <h2>
                Send Us a Message
              </h2>

              <p>
                Isi formulir di bawah ini dan kami akan
                segera menghubungimu.
              </p>


              <form>

                {/* NAME */}
                <div className="contact-form-group">

                  <label htmlFor="name">
                    Nama
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Masukkan nama kamu"
                  />

                </div>


                {/* EMAIL */}
                <div className="contact-form-group">

                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan email kamu"
                  />

                </div>


                {/* SUBJECT */}
                <div className="contact-form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subjek pesan"
                  />

                </div>


                {/* MESSAGE */}
                <div className="contact-form-group">

                  <label htmlFor="message">
                    Pesan
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tulis pesan kamu di sini..."
                  />

                </div>


                {/* BUTTON */}
                <button
                  type="submit"
                  className="contact-button"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="contact-cta">

        <div className="container">

          <h2>
            We're Here For You
          </h2>

          <p>
            Jangan ragu untuk menghubungi Sentia Beauty
            jika membutuhkan bantuan.
          </p>

        </div>

      </section>

    </main>
  );
}