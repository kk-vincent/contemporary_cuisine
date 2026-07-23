import React, { useState, useEffect } from 'react';
import '../style/home_hero.scss';
import '../style/block_page.scss';

import beef from '../pic/beef_bg.png';
import chick from '../pic/chick_bg.png';
import cowrt from '../pic/cowrt_bg.png';
import pig from '../pic/pig_bg.png';
import shrimp from '../pic/shrimp_bg.png';

import HomePage from '../features/block/home_page';
import AboutPage from '../features/block/about_page';
import MenuPage from '../features/block/Menu_page';
import Nav_Link from '../features/nav/header_nav';


const bgImages = [chick, cowrt, beef, shrimp, pig];

const Home = () => {
   
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeBlock, setActiveBlock] = useState(null);

   
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % bgImages.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [activeIndex]); 

    return (
        <div className="home-container">
   
            <div
                className="hero-bg"
                style={{ backgroundImage: `url(${bgImages[activeIndex]})` }}
            />

            <Nav_Link
                className="main-nav-position"
                onHomeOpen={() => setActiveBlock('home')}
                onMenuOpen={() => setActiveBlock('menu')}
                onAboutOpen={() => setActiveBlock('about')}
            />

            {activeBlock === 'home' && (
                <HomePage
                    activeIndex={activeIndex}
                    onSelectIndex={(index) => setActiveIndex(index)}
                    onClose={() => setActiveBlock(null)}
                />
            )}
            {activeBlock === 'menu' && (
                <MenuPage onClose={() => setActiveBlock(null)} />
            )}
            {activeBlock === 'about' && (
                <AboutPage onClose={() => setActiveBlock(null)} />
            )}
        </div>
    );
};

export default Home;