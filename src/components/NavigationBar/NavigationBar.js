import React, { Component } from 'react';
import { NavigationContainer } from './NavigationBar.style';

class NavigationBar extends Component {
    render() {
        return (
            <NavigationContainer>
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;