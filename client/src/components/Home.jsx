import React from 'react'
import "../styles/home.scss"
import FeaturedProducts from "./FeaturedProducts.jsx";
import Slider  from "./Slider.jsx";
import Categories from './Categories.jsx';
import Contact from './Contact.jsx';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <Categories/>
      <FeaturedProducts type="Trending"/>
      <Contact/>
      
    </div>
  )
}

export default Home