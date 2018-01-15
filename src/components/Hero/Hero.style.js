import styled, { css, injectGlobal } from 'styled-components';
import * as vars from '../../theme/variables';

export const HeroImage = styled.img`
    height: 100vh;
    }
    `;
export const SpotHead = styled.h2`
    font-size: 50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    text-align: center;
    width: 100%;
    margin: 0;

    /* transition: color, .5s; */
    animation: hi 0.5s ease 1.5s backwards;

    color: ${vars.color_counter};
    &.active {
      color: ${vars.color_2018};
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
    min-height: 100vh;
    background: linear-gradient(tomato, crimson);
  }
  .scroll-deck {
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
  margin: 0;
  /* font-size: 100px; */
  line-height: 0;
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
      /* transform: translate3d(-20px, 0, 0); */
      opacity: 0;
    }
    to {
      /* transform: translate3d(0, 0, 0); */
      opacity: 1;
    }
  }
`;