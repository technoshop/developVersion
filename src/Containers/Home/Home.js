import React, { Component } from 'react';
import { ContainerFluid, Container } from 'Src/theme/grid';
import { RevealP, HeroImage } from './Home.style';
import WhenInView from 'Src/components/WhenInView/WhenInView';
import ScrollMagic from 'scrollmagic';
import addIndicators from './debug.addIndicators';
import TweenMax, {Back} from 'TweenMax';
import TweenLite from 'TweenLite';
import TimelineMax from 'TimelineMax';





class Home extends Component {


    constructor() {
        super();
        this.state = {
            magic: '',
        }
        this.handleResize = this.handleResize.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleResize);
        this.handleResize();
    }
    componentWillUnmount() {
        window.addEventListener('load', this.handleResize);
    }
    handleResize() {
        var controller = new ScrollMagic.Controller();

        var tweenHi = new TimelineMax();
        tweenHi.add([
          TweenMax.from(".scroll-deck1 h1", 0.5, {
            opacity: 1,
            x: 0,
            ease: Back.ease
          }),
          TweenMax.to(".scroll-deck1 h1", 0.5, {
            opacity: 0,
            x: 20,
            ease: Back.ease
          })
        ]);
        
        var sceneHi = new ScrollMagic.Scene({
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
                        <h1>Hi.</h1>
                    </section>
                </div>
            </ContainerFluid>
        );
    }
}

export default Home;
