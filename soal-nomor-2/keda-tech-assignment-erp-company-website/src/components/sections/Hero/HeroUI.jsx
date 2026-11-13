import {
  HERO_STATISTICS,
  HERO_CHART_DATA,
  HERO_BENEFITS,
} from "@/constant/hero.constants";

export default function HeroUI() {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <img
              src="/icons/sparkle.svg"
              alt="sparkle-icon"
              className="hero__eyebrow-icon"
            />
            <span>SMART INVENTORY & BUSINESS INSIGHTS</span>
          </div>

          <h1 className="hero__title">
            Kelola bisnis lebih{" "}
            <span className="hero__title-gradient">
              mudah, cepat, dan cerdas.
            </span>
          </h1>

          <p className="hero__description">
            Pantau stok barang masuk dan keluar, catat keuntungan harian, dan
            ambil keputusan bisnis berdasarkan data dalam satu platform.
          </p>

          <div className="hero__actions">
            <a href="#pricing" className="hero__button hero__button--primary">
              <span>Mulai Sekarang</span>
            </a>
            <a href="#about" className="hero__button hero__button--outline">
              Pelajari Lebih Lanjut
            </a>
          </div>

          <div className="hero__benefits">
            {HERO_BENEFITS.map((benefit) => (
              <span key={benefit} className="hero__benefit">
                <img
                  src="/icons/check.svg"
                  alt="check-icon"
                  className="hero__benefit-icon"
                />
                <span>{benefit}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="hero__dashboard">
          <div className="hero__dashboard-header">
            <div className="hero__dashboard-heading">
              <img
                src="/icons/chart-column.svg"
                alt=""
                className="hero__dashboard-icon"
              />
              <span className="hero__dashboard-title">Ringkasan Bisnis</span>
            </div>
            <span className="hero__live-badge">
              <img
                src="/icons/circle-dot.svg"
                alt="icon-circle-dot"
                className="hero__live-icon"
              />
              <span>Live dashboard</span>
            </span>
          </div>

          <div className="hero__stats">
            {HERO_STATISTICS.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <small className="hero__stat-label">{stat.label}</small>
                <strong className="hero__stat-value">{stat.value}</strong>
                <span className="hero__stat-growth">
                  <img
                    src="/icons/trending-up.svg"
                    alt="icon-trending-up"
                    className="hero__stat-icon"
                  />
                  <span>{stat.growth}</span>
                </span>
              </div>
            ))}
          </div>

          <div
            className="hero__chart"
            role="img"
            aria-label="Ilustrasi grafik penjualan selama delapan periode"
          >
            {HERO_CHART_DATA.map(({ label, value }) => (
              <div
                key={label}
                className="hero__chart-bar"
                style={{
                  height: `${value}%`,
                }}
              />
            ))}
          </div>

          <div className="hero__chart-labels" aria-hidden="true">
            {HERO_CHART_DATA.map(({ label }) => (
              <span key={label} className="hero__chart-label">
                {label}
              </span>
            ))}
          </div>

          <div className="hero__floating hero__floating--top">
            <img
              src="/icons/sparkle.svg"
              alt="icon-sparkle"
              className="hero__floating-icon"
            />
            <span>Bisnis makin terarah</span>
          </div>

          <div className="hero__floating hero__floating--bottom">
            <img
              src="/icons/trending-up.svg"
              alt="icon-trending-up"
              className="hero__floating-icon"
            />
            <span>Profit naik +18,4%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
