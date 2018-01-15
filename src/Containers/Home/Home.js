import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Intro from '../../components/Intro/Intro';


class Home extends Component {
   

    render() {
        return (
            <div>
                <Hero></Hero>
                <Intro></Intro>
            </div>
        );
    }
}

export default Home;
