import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Title } from '../Projects/Projects.style';
import {Spot} from './About.style';

class About extends Component {
    render() {
        return (
            <Container>
                <Title>About Us</Title>
                <Spot>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, provident nobis. Quam voluptates tenetur, corrupti expedita eos hic cupiditate odit.</Spot>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia, error exercitationem dolores ipsum explicabo harum cum eius maxime nobis culpa temporibus molestias fugit, mollitia accusantium nisi quae ea? Eveniet ad molestiae repudiandae blanditiis dolorum magni reiciendis ullam sunt aperiam quas sequi nesciunt, labore enim illum quis sed! Rem, recusandae!</p>
            </Container>
        );
    }
}

export default About;
