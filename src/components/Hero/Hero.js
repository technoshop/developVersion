import React, {Component} from 'react';
import { ContainerFluid } from 'Src/theme/grid';
import { SpotHead, HeroImage } from './Hero.style';
import { TimelineMax, TweenMax, Back } from 'gsap';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
import * as vars from '../../theme/variables';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            active: '',
        }
        this.handleResize = this.handleResize.bind(this);
    }
    componentDidMount() {
        // window.addEventListener('load', this.handleResize);
        this.handleResize();
    }
    componentWillUnmount() {
        /* window.addEventListener('load', this.handleResize); */
        this.handleResize();

    }
    handleResize() {
        this.setState({
            active: 'active'
        });
        var controller = new ScrollMagic.Controller();

        var tweenHi = new TimelineMax();
        tweenHi.add([
            TweenMax.fromTo(".scroll-deck1 h1", 0.5, {
                opacity: 1,
                transform: 'scale(1.6)',
                ease: Back.ease
            }, {
                    opacity: 1,
                    transform: 'scale(1.0)',
                    ease: Back.ease
                }
            ),
            TweenMax.fromTo("#SpotHead", 0.9, {
                color: vars.color_counter,
                ease: Back.ease,
            }, {
                color: vars.color_2018,
                ease: Back.ease
                })
        ]);

        new ScrollMagic.Scene({
            duration: '100%'
        })
            .setTween(tweenHi)
            //.addIndicators({ name: "Hi (duration: 500)" })
            .setPin(".scroll-deck1")
            .addTo(controller);
    }

    render() {
        return (
            <ContainerFluid>
                <div className="wrap">
                    <section className="scroll-deck scroll-deck1">
                        <h1 className={this.state.active} >
                            <HeroImage src={require('Src/assets/samuel-zeller-158996-min.jpg')} alt="" />
                        </h1>
                        <SpotHead id="SpotHead" className={this.state.active}>TechnoShop'a Hoşgeldiniz</SpotHead>
                    </section>
                </div>
            </ContainerFluid>
        );
    }
}