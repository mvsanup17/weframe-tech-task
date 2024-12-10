import Header from './components/header.jsx'
import Product from './components/productPage.jsx';
import Card from './components/cards.jsx'
import Footer from './components/footer.jsx'

function page() {
  return (
    <div>
      <Header />
      <Product/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default page
