import { useLoginModal } from "./LoginModalContext";

export default function LoginModalUI() {
  const {
    isOpen,
    form,
    message,
    title,
    selectedPlan,
    description,
    buttonMessage,
    emailRef,
    modalRef,
    handleChange,
    handleSubmit,
    handleClose,
    handleBackdropClick,
  } = useLoginModal();

  if (!isOpen) return null;

  return (
    <div className="login-modal__backdrop" onMouseDown={handleBackdropClick}>
      <div
        ref={modalRef}
        className="login-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <button
          type="button"
          className="login-modal__close"
          onClick={handleClose}
          aria-label="Tutup modal"
        >
          <span aria-hidden="true">×</span>
        </button>

        <h2 id="login-modal-title" className="login-modal__title">
          {title}
        </h2>

        <p id="login-modal-description" className="login-modal__description">
          {description}
        </p>

        <form className="login-modal__form" onSubmit={handleSubmit}>
          <div className="login-modal__field">
            <label htmlFor="login-email" className="login-modal__label">
              Email
            </label>

            <input
              ref={emailRef}
              id="login-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              autoComplete="email"
              className="login-modal__input"
              required
            />
          </div>

          <div className="login-modal__field">
            <label htmlFor="login-password" className="login-modal__label">
              Password
            </label>

            <input
              id="login-password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              autoComplete="current-password"
              className="login-modal__input"
              required
            />
          </div>

          <button type="submit" className="login-modal__submit">
            {buttonMessage}
          </button>

          {message && (
            <p className="login-modal__message" role="status">
              {message}
            </p>
          )}
        </form>
        {!selectedPlan && (
          <a className="login-modal__sign-up">
            Belum punya akun, daftar disini!
          </a>
        )}
      </div>
    </div>
  );
}
