import React, { Component } from 'react';
import { ContainerFluid } from 'Src/theme/grid';
import { Dot, SliderWr, SliderContainer } from './Intro.style';
import SliderTemp from 'react-slick';
import './slick.min.css';

export default class Slider extends Component {
    render() {
        var settings = {
            customPaging: function (i) {
                return <Dot><img src={require(`../../assets/drone${i + 1}.svg`)} /></Dot>
            },
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
            lazyLoad: true,
            dotsClass: 'slide-dots',
            draggable:false,
        };
        return (
            <ContainerFluid>
                <SliderWr {...settings}>
                    <div>
                        <img src={require("../../assets/alex-knight-199368-min.jpg")} alt="" />
                        <SliderContainer>
                            <h2>TechnoShop Robot</h2>
                            <h3>Creator Edition</h3>
                            <p>The Agras MG-1S integrates a number of cutting-edge DJI technologies, including the new
                            A3 Flight Controller, and a Radar Sensing System that provides additional reliability during
                            flight. The spraying system and flow sensor ensure accurate operations. When used with
                            the MG Intelligent Operation Planning System and the DJI Agriculture Management Platform,
                            a user can plan operations, manage flights in real-time, and closely monitor aircraft operating
                            status. The MG-1S is a high performance aircraft capable of offering comprehensive solutions
                            for agricultural care.</p>
                        </SliderContainer>
                    </div>
                    <div>
                        <img src={require("../../assets/dose-media-368248-min.jpg")} alt="" />
                        <SliderContainer>
                            <h2>MATRICE 200</h2>
                            <h3>Built to Endure</h3>
                            <p>High-performance motors paired with 17-inch propellers ensure stable flight in strong winds.
                            The new dual-battery power system automatically heats batteries when flying in sub-zero temperatures,
                            while an enclosed design ensures weather and water resistance, so you can fly in a wide range of environments.</p>
                        </SliderContainer>
                    </div>
                    <div>
                        <img src={require("../../assets/dummy-700x400-LaserTowardsMilkyWaysCentre.jpg")} alt="" />
                        <SliderContainer>
                            <h2>TechnoShop Robot</h2>
                            <h3>Creator Edition</h3>
                            <p>High-performance motors paired with 17-inch propellers ensure stable flight in strong winds.
                            The new dual-battery power system automatically heats batteries when flying in sub-zero temperatures,
                            while an enclosed design ensures weather and water resistance, so you can fly in a wide range of environments.</p>
                        </SliderContainer>
                    </div>
                    <div>

                        <img src={require("../../assets/eddie-kopp-264813-min.jpg")} alt="" />
                        <SliderContainer>
                            <h2>TechnoShop Robot</h2>
                            <h3>Creator Edition</h3>
                            <p>High-performance motors paired with 17-inch propellers ensure stable flight in strong winds.
                            The new dual-battery power system automatically heats batteries when flying in sub-zero temperatures,
                            while an enclosed design ensures weather and water resistance, so you can fly in a wide range of environments.</p>
                        </SliderContainer>
                    </div>
                </SliderWr>
            </ContainerFluid >
        );
    }
}




