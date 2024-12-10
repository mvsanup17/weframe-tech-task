import React from 'react';
import Link from 'next/link';

const ProductPage = () => {
  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Art de la Table</li>
        </ol>
      </nav>

      {/* Main Product Section */}
      <div className="row">
        {/* Product Images */}
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-center">
            <div className="mb-3">
              <img
                src="/images/images.jpeg"
                alt="Main Product"
                className="img-fluid border"
                style={{ maxHeight: '400px' }}
              />
            </div>
            <div className="d-flex justify-content-center gap-2">
              <img
                src="/images/images.jpeg"
                alt="Thumbnail 1"
                className="img-thumbnail"
                style={{ width: '80px', height: '80px' }}
              />
              <img
                src="/images/images.jpeg"
                alt="Thumbnail 2"
                className="img-thumbnail"
                style={{ width: '80px', height: '80px' }}
              />
              <img
                src="/images/images.jpeg"
                alt="Thumbnail 3"
                className="img-thumbnail"
                style={{ width: '80px', height: '80px' }}
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h1 className="h3">Cheese – appareil à raclette 1/2 roue</h1>
          <p className="text-success fs-4">39,50€ / pièce</p>
          <div className="d-flex gap-3 mb-3">
            <span className="badge bg-secondary">20cm</span>
            <span className="badge bg-secondary">50cm</span>
          </div>
          <p>
            Location appareil à raclette - Raclette traditionnelle 1/2 roue<br />
            Réglable en hauteur<br />
            Appareil à raclette professionnel<br />
            Boîtier de chauffe horizontal réglable<br />
            220V<br />
            900W
          </p>
          <button className="btn btn-primary">Ajouter au Panier</button>
        </div>
      </div>

      <br /><br />

      {/* Product Description and Additional Info */}
      <div className="mt-4 row justify-content-center">
        {/* Product Description */}
        <div className="col-lg-6 d-flex justify-content-center">
          <div>
            <h3>Description produit</h3>
            <p>
              Festiv vous propose la location d'un "Jewel" – grand couteau/Toc pour votre événement.
              Ce produit est parfait pour votre mariage, fête, ou tout autre événement.
            </p>
          </div>
        </div>
 
        {/* Buttons (Livraisons & Questions) */}
        <div className="col-lg-6 d-flex justify-content-center" style={{ maxWidth: '450px' }}>
          <div className="d-flex flex-column gap-3 w-100">
            <button className="btn btn-outline-secondary w-100">
              <span className="me-2">+</span> Livraisons
            </button>
            <button className="btn btn-outline-secondary w-100">
              <span className="me-2">+</span> Questions
            </button>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default ProductPage;
