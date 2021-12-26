import React from 'react'
import Navbar from '../components/Navbar'
import Announcement  from '../components/Announcement'
import Slider from '../components/Slider'
import Catagories from '../components/Catagories'
import Products from "../components/Products";

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Catagories/>
            <Products/>
        </div>
    )
}

export default Home
