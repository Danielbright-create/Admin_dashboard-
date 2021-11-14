import React from 'react'
import "./Home.css";
import FeaturedInfo from "./FeaturedInfo";
import Userlist from './Userlist';


const Home = () => {
    return (
        <div >
            <div className="home">
                <FeaturedInfo /> 
                <Userlist />
            </div>
           

            
        </div>
    )
}

export default Home
