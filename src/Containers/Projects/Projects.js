import React, {Component} from 'react';
import ParallaxImage from 'react-image-parallax2';
import {Container} from 'Src/theme/grid';
import {Product, Title} from './Projects.style';

export default class Projects extends Component {
    render() {
        return (
            <Container>
                <Title>Tüm Ürünler</Title>
                <Product>
                    <h2>1. Ürün</h2>
                    <ParallaxImage 
                    reduceHeight={0.33}
                     src={require("../../assets/dummy-700x400-LaserTowardsMilkyWaysCentre.jpg")} />
                </Product>
                <Product>
                    <h2>2. Ürün</h2>
                    <ParallaxImage 
                    reduceHeight={0.6}
                     src="https://images.unsplash.com/photo-1478358161113-b0e11994a36b?auto=format&fit=crop&w=2134&q=80" />
                </Product>
                <Product>
                    <h2>3. Ürün</h2>
                    <ParallaxImage 
                    reduceHeight={0.4}
                     src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1950&q=80" />
                </Product>
            </Container>
        );

    }
}