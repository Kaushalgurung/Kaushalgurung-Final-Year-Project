import React from 'react'
import Navbar from '../components/Navbar'
import Announcement  from '../components/Announcement'
import Slider from '../components/Slider'
import Catagories from '../components/Catagories'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Catagories/>
        </div>
    )
}

export default Home
