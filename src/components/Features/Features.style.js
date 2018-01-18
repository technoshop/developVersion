import styled, { injectGlobal } from "styled-components";
import * as vars from "../../theme/variables";
import bgImg from '../../assets/05b370a36c2febc613ef9d1060e0af74.webp';

export const Btn = styled.button`
    background: none;
    border:none;
    cursor:pointer;
    &.active{
        color: ${vars.color_counter};
    }
    
`;
injectGlobal`
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
  .features {
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(${bgImg});
      background-size: 60%;
      height: 100vh;
  }
  .feaures-list{
      width: 25%;
      float: left;
  }
  .features-list__head{
      font-size: 3em;
      color: ${vars.color_2018};
  }

    .feature-carousel, .feature-subhead {
        transition: all ease-in-out .5s;

    }
`;
