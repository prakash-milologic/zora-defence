import FeatureCommonCount from '../Common/FeatureCommonCount'
import About from './About'
import Hero from './Hero'
import Testimonial from './Testimonial'

const Home = () => {
  const countItem = [
    {
      count: "647",
      title: "No. of Clients"
    },
    {
      count: "30+",
      title: "Years of Experience"
    },
    {
      count: "244",
      title: "No. of Employees"
    },
    {
      count: "12",
      title: "Global Markets"
    },
  ]
  return (
   <>
   <Hero />
   <About />
   <FeatureCommonCount featureItems = {countItem} />
   <Testimonial />
   </>
  )
}

export default Home