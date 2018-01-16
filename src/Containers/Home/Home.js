import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Slider from '../../components/Intro/Intro';

class Home extends Component {
   

    render() {
        return (
            <div>
                <Hero></Hero>
                <Slider/>
            </div>
        );
    }
}

export default Home;
