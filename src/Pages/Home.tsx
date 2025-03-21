import About from "../Components/About"
import Hero from "../Components/Hero"
import OurProducts from "../Components/OurProducts"
import PlywoodCalculator from "../Components/PlywoodCalculator"
import '../index.css'

const Home = () => {
  return (
    <>
    <Hero/>
    <PlywoodCalculator/>
    <About/>
    <OurProducts/>
    </>
  )
}

export default Home