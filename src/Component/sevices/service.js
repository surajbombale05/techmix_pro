import React from 'react'
import Codedata from './codedata'
import Middle from './middle'
import YourComponent from './Preapare'
import CardData from '../Aboutus/CardData'
import Img from './img'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Customer from '../Aboutus/Customer'

const Serv = () => {
  return (
    <div>
      <Navbar/>
      <Img/>
      <CardData/>
      <Codedata/>
      <Middle/>
      <Customer/>
      <Footer/>
    </div>
  )
}

export default Serv
