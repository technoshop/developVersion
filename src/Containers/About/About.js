import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Title } from '../Projects/Projects.style';
import { Spot } from './About.style';



class About extends Component {


    render() {
        return (
            <Container>
                <div >
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
                </div>
            </Container>

        );
    }
}

export default About;
