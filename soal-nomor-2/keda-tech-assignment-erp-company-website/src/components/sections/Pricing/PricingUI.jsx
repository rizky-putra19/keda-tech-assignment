import classNames from "classnames";
import { PRICING_PLANS } from "@/constant/pricing.constants";
import { usePricing } from "./PricingContext";

export default function PricingUI() {
  const { handleSelectPlan } = usePricing();

  return (
    <section id="pricing" className="pricing">
      <div className="container pricing__container">
        <div className="pricing__header">
          <span className="pricing__eyebrow">SIMPLE PRICING</span>

          <h2 className="pricing__title">
            Pilih paket sesuai kebutuhan bisnis
          </h2>

          <p className="pricing__description">
            Mulai dari pencatatan dasar hingga prediksi penghasilan dengan AI.
            Upgrade kapan saja saat bisnis berkembang.
          </p>
        </div>

        <div className="pricing__grid">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={classNames("pricing__card", {
                "pricing__card--popular": plan.popular,
              })}
            >
              {plan.popular && (
                <span className="pricing__popular-tag">PALING POPULER</span>
              )}

              <h3 className="pricing__plan-name">{plan.name}</h3>

              <p className="pricing__plan-description">{plan.description}</p>

              <div className="pricing__price">
                <span className="pricing__price-value">{plan.price}</span>

                <small className="pricing__price-period">{plan.period}</small>
              </div>

              <ul className="pricing__features">
                {plan.features.map((feature) => (
                  <li key={feature} className="pricing__feature">
                    <img
                      src="/icons/check.svg"
                      alt=""
                      className="pricing__feature-icon"
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={classNames("pricing__button", {
                  "pricing__button--primary": plan.popular,
                  "pricing__button--outline": !plan.popular,
                })}
                onClick={() => handleSelectPlan(plan.name)}
              >
                {plan.buttonLabel}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
