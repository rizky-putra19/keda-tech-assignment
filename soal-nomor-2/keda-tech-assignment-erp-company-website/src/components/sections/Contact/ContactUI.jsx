import { CONTACT_INFO, CONTACT_FIELDS } from "@/constant/contact.constants";

import { useContact } from "./ContactContext";

export default function ContactUI() {
  const { form, statusMessage, handleChange, handleSubmit } = useContact();

  return (
    <section id="contact" className="contact">
      <div className="container contact__container">
        <div className="contact__info">
          <span className="contact__eyebrow">CONTACT US</span>

          <h2 className="contact__title">
            Ada pertanyaan? Kami siap membantu.
          </h2>

          <p className="contact__description">
            Ingin mengetahui paket yang paling cocok atau berdiskusi tentang
            kebutuhan bisnis Anda? Kirimkan pesan melalui formulir ini.
          </p>

          <div className="contact__details">
            {CONTACT_INFO.map((item) => (
              <div key={item.id} className="contact__detail">
                <img src={item.icon} alt="" className="contact__detail-icon" />

                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {CONTACT_FIELDS.map((field) => (
            <div key={field.id} className="contact__field">
              <label htmlFor={`contact-${field.id}`} className="contact__label">
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={`contact-${field.id}`}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="contact__textarea"
                />
              ) : (
                <input
                  id={`contact-${field.id}`}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="contact__input"
                />
              )}
            </div>
          ))}

          <button type="submit" className="contact__submit">
            <span>Kirim Pesan</span>

            <img
              src="/icons/arrow-right.svg"
              alt=""
              className="contact__submit-icon"
            />
          </button>

          {statusMessage && (
            <p className="contact__message" role="status">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
