import React from 'react';
import Link from 'next/link';
import '../styles/global.css';

const Footer = () => {
  return (
    <>
      {/* Highlight Section */}
      <section className="highlight-section py-5">
        <div className="container">
          <h3 className="text-center mb-4">
            On s'occupe de <span style={{ color: 'turquoise' }}>tout</span>
          </h3>
          <div className="row text-center">
            <div className="col-md-3">
              <div className="highlight-item">
                <img src="/images/carry.png" alt="Livraison" className="highlight-icon mb-2" />
                <h5>Aditya Tadas</h5>
                <p>Livraison & Reprise</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="highlight-item">
                <img src="/images/address.png" alt="Nettoyage" className="highlight-icon mb-2" />
                <h5>Nettoyage</h5>
                <p>Selon vos besoins</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="highlight-item">
                <img src="/images/cart.png" alt="Commande Illimitée" className="highlight-icon mb-2" />
                <h5>Commande Illimitée</h5>
                <p>Tout est possible</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="highlight-item">
                <img src="/images/car.png" alt="Transport" className="highlight-icon mb-2" />
                <h5>Transport & Enlèvement</h5>
                <p>On s'occupe de tout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sofa Image and Subscription Section */}
      <div className="subscription-highlight bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column (Sofa Image) */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/images/sofa.jpeg"
                alt="Sofa"
                className="img-fluid"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '300px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </div>

            {/* Right Column (Subscription Form) */}
            <div className="col-md-6">
              <div className="d-flex flex-column align-items-start">
                <h4 className="mb-3">Abonnez-vous à notre newsletter</h4>
                <p>
                  Profitez de 10% de réduction sur votre première commande en vous abonnant à notre newsletter !
                </p>
                <form className="w-100">
                  <div className="d-flex">
                    <input
                      type="email"
                      className="form-control me-2"
                      placeholder="Entrez votre email"
                      required
                    />
                    <button type="submit" className="btn btn-turquoise">
                      S'abonner
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-top-left d-flex align-items-center">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="img-fluid me-3" 
              style={{ maxWidth: '150px' }}
            />
            <div>
              <h5>Nos Services</h5>
              <Link href="/about">À propos</Link>
              <Link href="/livraisons-reprises">Livraisons & Reprises</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/mode-d-emploi">Mode d'emploi</Link>
            </div>
          </div>
          <div className="footer-top-center">
            <h5>Mon Compte</h5>
            <Link href="/mon-compte">Accéder à mon compte</Link>
            <Link href="/ma-liste-d-envie">Ma liste d'envie</Link>
            <Link href="/creer-un-compte">Créer un compte</Link>
            <Link href="/mot-de-passe-oublie">Mot de passe oublié</Link>
          </div>
          <div className="footer-top-right">
            <h5>Informations Légales</h5>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/cgu">CGU</Link>
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
            <Link href="/cgv">CGV</Link>
          </div>
          <div className="footer-top-follow">
            <p>NOUS SUIVRE</p>
            <ul>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
