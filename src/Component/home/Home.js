import React from 'react'
import Navbar from '../Navbar/Navbar'
import StartCard from './StartCard'
import Prepare from './Prepare'
import Fourcards from './Fourcards'
import Reasons from './Reasons'
import Preparing from './Preparing'
import Homedata from './Homedata'
import IdSweeper from './IdSweeper'
import Footer from '../Footer/Footer'
import Customer from '../Aboutus/Customer'
import Carasoul from '../Carasoul'
import OneCarasoul from '../OneCarasoul'
const Home = () => {
    return (
        <>
            <Navbar />
            <StartCard />
            <Prepare />
            <Fourcards />
            <Reasons />
            <Preparing />
            <Carasoul />
            <OneCarasoul/>
            <Homedata />
            <IdSweeper />
            <Customer />
            < Footer />
        </>
    )
}

export default Home
