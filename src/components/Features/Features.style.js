import styled, { injectGlobal } from "styled-components";
import * as vars from "../../theme/variables";

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
    .feature-carousel, .feature-subhead {
        transition: all ease-in-out .5s;

    }
`;
