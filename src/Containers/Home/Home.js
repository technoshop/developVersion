import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Slider from '../../components/Intro/Intro';
import Features from '../../components/Features/Features';

class Home extends Component {
   

    render() {
        return (
            <div>
                <Hero></Hero>
                <Slider/>
                <Features/>
            </div>
        );
    }
}

export default Home;
