import React from 'react'
import Form from '../components/Form'

import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='CONTACT.' text='Contact GLX Travel'/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact