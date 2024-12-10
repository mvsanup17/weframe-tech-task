// pages/product.jsx
import ProductPage from '../components/productPage.jsx'; // Adjust path to ProductPage component

const product = {
  name: 'Awesome Product',
  price: '$49.99',
  image: 'product1.webp', // Image inside `public/images/`
  description: 'This product is amazing and comes with great features.',
  delivery: 'Delivered within 5-7 business days.',
};

export default function Product() {
  return <ProductPage product={product} />;
}
