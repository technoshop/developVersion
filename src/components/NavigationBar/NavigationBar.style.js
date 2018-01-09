import styled from 'styled-components';
import * as vars from '../../theme/variables';
import { Link } from 'react-router';



export const NavigationContainer = styled.div`
display: flex;
position: fixed;
right: 60px;
top:95px;
z-index:999;
`;


export const NavItem = styled(Link) `
    margin:0 15px;
    font-size: 1.5em;    
    font-weight: 900;    
    cursor: pointer;
    transition: color .3s, background-color .3s;
    position:relative;
    text-decoration: none;
    color: ${vars.color_counter};
    &:after {
        content: '';
        position:absolute;
        left:0;
        width:100%;
        height: 100%;
        background-color: ${vars.color_2018};
        z-index:-1;
        transform: scale(1.0,.5);
        transform-origin: bottom;
        transition: transform .3s, background-color .3s;
        
    }
    
    &:hover{
        color: ${vars.color_2018};
        &:after {
            background-color: ${vars.color_counter};
            transform: scale(1.3,1.5);
            transform-origin: center;
        }
`;
