import React, { Component } from 'react';
import { NavItem, NavigationContainer } from './NavigationBar.style';

class NavigationBar extends Component {
    render() {
        return (
            <NavigationContainer>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/About"  >About</NavItem>
                <NavItem to="/Projects"  >Projects</NavItem>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;