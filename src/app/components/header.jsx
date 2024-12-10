import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Main header content */}
      <div className="container-fluid py-3 px-4">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo and Search */}
          <div className="d-flex align-items-center">
            {/* Logo */}
            <Link href="/" className="me-4">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="img-fluid" 
                style={{ maxWidth: '120px' }} 
              />
            </Link>

            {/* Search Bar */}
            <div className="input-group" style={{ width: '100%', maxWidth: '800px' }}>
              <input
                type="text"
                className="form-control py-2 px-3" // Adjust padding here
                placeholder="Rechercher un produit"
                style={{ height: '38px' }} // Height adjustment for search bar
              />
              <button className="btn btn-outline-secondary py-2 px-3" type="button" style={{ height: '38px' }}>
                <i className="bi bi-search" style={{ fontSize: '18px' }}></i> {/* Adjust icon size */}
              </button>
            </div>
          </div>

          {/* Navigation Links and Cart Button */}
          <div className="d-flex align-items-center">
            <Link href="/inspirations" className="text-dark me-4 text-decoration-none">
              Inspirations
            </Link>
            <Link href="/favorites" className="text-dark me-4 text-decoration-none">
              Mes favoris (24)
            </Link>
            <Link href="/cart" className="text-dark me-4 text-decoration-none">
              Panier
            </Link>
            <button className="btn btn-primary d-none d-lg-block" style={{ height: '38px' }}>
              Panier
            </button>
          </div>
        </div>
      </div>

      {/* Navbar for categories */}
      <nav className="bg-light py-2">
        <div className="container-fluid">
          <ul className="nav justify-content-center flex-wrap">
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Art de la Table</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Mobilier</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Nappage</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Cuisine</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Barbecue</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Tente</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Chauffage</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Décoration</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Luminaires</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Accessoires</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Événements</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Services</Link>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
};

export default Header;
