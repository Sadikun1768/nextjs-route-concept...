import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

function About() {
  return (
    <div>
      <Navbar />
      <h3 className='text-amber-300 text-center mt-10'>About Us</h3>
      <p className='text-center'>Practice For Patterns</p>
      <Header />
      <p className='text-center text-pink-600 mt-15 cursor-pointer'>Click This Links</p>
    </div>
  )
}

export default About
