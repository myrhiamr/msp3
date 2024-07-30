import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/homeimg.png';
import '../index.css';

const Home = () => {
    return (
        <div className="home-container">
            <Link to="/postcardsforsale">
                <img src={homeImg} alt="Home" className="home-img" />
            </Link>
        </div>
    );
};

export default Home;
