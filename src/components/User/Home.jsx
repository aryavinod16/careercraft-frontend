import React from 'react'
import Herosection from './Herosection'
import LatestJobs from './LatestJobs'
import CategoryCarousel from './CategoryCarousel'
import Footer from './Footer'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <CategoryCarousel/>
      <LatestJobs/>
      <Footer/>

    </div>
  )
}

export default Home
