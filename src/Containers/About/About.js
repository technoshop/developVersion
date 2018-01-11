import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Title } from '../Projects/Projects.style';
import { Spot } from './About.style';
import ScrollMagic from 'scrollmagic';
import {addIndicator} from './debug.addIndicators';

class About extends Component {

    constructor() {
        super();
        this.state = {
            magic: '',
        }
    }

    componentDidMount() {
        window.addEventListener('load', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleResize);
    }

    handleResize() {
        // init
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave'
            }
        });

        // get all slides
        var slides = document.querySelectorAll("section.panel");

        // create scene for every slide
        for (var i = 0; i < slides.length; i++) {
            new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
                .setPin(slides[i])
                .addTo(controller);
        }
    }

    render() {
        return (
            <Container magic={this.handleResize()}>
                <Title>About Us</Title>
                <Spot>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, provident nobis. Quam voluptates tenetur, corrupti expedita eos hic cupiditate odit.</Spot>
                <section className="panel blue">
                    <b>ONE</b>
                </section>
                <section className="panel turqoise">
                    <b>TWO</b>
                </section>
                <section className="panel green">
                    <b>THREE</b>
                </section>
                <section className="panel bordeaux">
                    <b>FOUR</b>
                </section>
            </Container>
        );
    }
}

export default About;
