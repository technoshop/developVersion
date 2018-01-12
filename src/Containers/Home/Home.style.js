import styled, { css, injectGlobal } from 'styled-components';
import media from 'Src/theme/media';
import * as vars from '../../theme/variables';




export const Image = styled.img`
    width: 100%;
`;

export const HeroImageWr = styled.div`
    overflow: hidden;

`;

export const HeroImage = styled.div`
    height: 100vh;
    background: url('${require('Src/assets/street-cropped.gif')}') no-repeat center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    justify-content: center;
    

    transform:  scale(1.5);

    color: #ffffff;
    font-weight: bold;
    font-size: 2em;

    padding: 0 60px;
    transition: all 0.5s ease-in-out;
    }


    ${media.xs`
    padding: 0 30px;
    `}


    h1 {
        margin-bottom: 0;
    }
    h2{
        ${media.sm`
        font-size:1.25em;
        `}
        ${media.xs`
        font-size:1em;
        `}
    }
    h1,h2{
        background-color: rgba(0,0,0, .5);
        padding: 20px;
        display: inline-block;
        width:auto;
        
        
    }
    `;

export const RevealP = styled.p`
    position: relative;
    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${vars.color_2018};
        content: '';


        transform-origin: left;
        transition: transform 3s;

        transform: rotateY(90deg);
        
    }
    ${({ hide }) => hide && css`
         &:after {
             transform: rotateY(0deg);
         }
    `}
`;
injectGlobal`
.wrap {
    min-height: 300vh;
    background: linear-gradient(tomato, crimson);
  }
  .scroll-deck {
    height: 100vh;
    position: relative;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .scroll-deck1 {
    h1 {
      opacity: 0;
      &.active {
        animation: hi 0.5s ease 1s backwards;
      }
    } 
  }
  
  @keyframes hi {
    from {
      transform: translate3d(-20px, 0, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;