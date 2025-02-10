import Layout from '../../components/layout/Layout.jsx'
import HeroSection from '../../components/heroSection/HeroSection.jsx'
import Filter from '../../components/filter/Filter.jsx'
import ProductCard from '../../components/productCard/ProductCard.jsx'
import Track from '../../components/track/Track.jsx'
import Testimonial from '../../components/testimonial/Testimonial.jsx'

const Home = () => {

  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home