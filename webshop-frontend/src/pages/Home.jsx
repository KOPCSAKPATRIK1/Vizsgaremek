
import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import Categories from '../components/Categories'
import Products from "../components/Products";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slideshow/>
      <Categories />
      <Products/>
    </div>
  )
}

export default Home
