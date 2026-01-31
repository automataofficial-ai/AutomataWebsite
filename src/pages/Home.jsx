import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <div className="reveal"><About /></div>
            <div className="reveal"><Services /></div>
            <div className="reveal"><Portfolio /></div>
            <div className="reveal"><WhyUs /></div>
            <div className="reveal"><Testimonials /></div>
        </>
    );
};

export default Home;
