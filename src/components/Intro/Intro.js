import React, { Component } from 'react';
import { ContainerFluid } from 'Src/theme/grid';
import { } from './Intro.style';

const styles = {
    transition: 'all ease .3s',
}


class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfPosts: this.props.itemsPost,
			currentPostId: this.props.itemsPost[0].id
        }

      
    }


    
    
    
   


    render() {
        return (
            <div>
                <ul id="nav">
                    <li >bir</li>
                    <li >iki</li>
                    <li >üç</li>
                </ul>
                <ul id="slider">
                    <li>slide 1</li>
                    <li>slide 2</li>
                    <li>slide 3</li>
                </ul>
            </div>
        );
    }
}

export default Intro;