import {
  ABOUT_STOCK_PROGRESS,
  ABOUT_FEATURES,
} from "@/constant/about.constants";

export default function AboutUI() {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__illustration">
          <div className="about__stock-card">
            <h3 className="about__stock-title">
              <img
                src="/icons/package.svg"
                alt="package-icon"
                className="about__stock-icon"
              />
              <span>Manajemen Stok</span>
            </h3>

            <div className="about__progress-list">
              {ABOUT_STOCK_PROGRESS.map((item) => (
                <div key={item.label} className="about__progress-item">
                  <small className="about__progress-label">{item.label}</small>

                  <div
                    className="about__progress-track"
                    role="progressbar"
                    aria-label={item.label}
                    aria-valuenow={item.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span
                      className="about__progress-fill"
                      style={{
                        width: `${item.value}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="about__stock-status">
              <span>Semua tercatat otomatis</span>
              <img
                src="/icons/check.svg"
                alt="check-icon"
                className="about__status-icon"
              />
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="about__eyebrow">ABOUT US</span>

          <h2 className="about__title">
            Semua kebutuhan operasional bisnis dalam satu tempat.
          </h2>

          <p className="about__description">
            KeDA Tech ERP membantu pemilik usaha mengelola arus barang dan
            memahami kondisi keuangan tanpa spreadsheet yang rumit. Dari usaha
            kecil hingga bisnis yang berkembang, semua informasi penting
            tersedia dalam satu dashboard.
          </p>

          <div className="about__features">
            {ABOUT_FEATURES.map((feature) => (
              <div key={feature.id} className="about__feature">
                <img
                  src={feature.icon}
                  alt=""
                  className="about__feature-icon"
                />

                <h3 className="about__feature-title">{feature.title}</h3>

                <p className="about__feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
