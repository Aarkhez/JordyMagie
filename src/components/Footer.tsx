function Footer() {
  return (
    <footer className="bg-dark py-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center social-icon-footer">
            <a
              href="https://www.tiktok.com/@jordymagie"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.instagram.com/jordymagie"
              target="_blank"
              className="social-icon"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-white">
              &copy; 2023 JordyMagie. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
