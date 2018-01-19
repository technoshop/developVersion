import styled, { injectGlobal } from "styled-components";
import * as vars from "../../theme/variables";
import bgImg from '../../assets/05b370a36c2febc613ef9d1060e0af74.webp';

export const Btn = styled.button`
    background: none;
    border:none;
    cursor:pointer;
    opacity: 0.4;
    position: relative;
    padding-left: 30px;
    margin-left: 0;
    transition: transform .3s;
    font-size: 1em;
    font: normal 1em ${vars.ff_base};
    font-family: ${vars.ff_base};
    line-height: 1.5;
    &:hover{
        transform: scale(1.1);
    }
    &:focus{
        outline:none;
    }
    &:after{
        content:' ';
        position: absolute;
        opacity: 0.4;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius:50%;
        background-color: ${vars.color_base};
    }
    &.active{
        opacity: 1;
        color: ${vars.color_counter};
        &:after{
        opacity: 1;
        background-color: ${vars.color_counter};
        }
    }
    
`;
injectGlobal`
@keyframes hi {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .features {
      width: 100%;
      background-repeat: no-repeat;
      background-position: 65% 16%;
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
  .feature-carousel{
      width: 45%;
      float: right;
      margin-top: 40%;
  }
    .feature-carousel, .feature-subhead {
        transition: all ease-in-out .5s;

    }
    .feature-subhead{
        font-size: 2em;
        margin-bottom: 15px;
    }
    .features-paragraph{
        opacity: 0.8;
        line-height: 1.5;
        font-size: 1.2em;
    }
    .features-list__ul{
        padding-left: 0;
    }
    .features-link__li{
        list-style: none;
        margin-left: 0;
        line-height: 1.5;
    }
    button[style*="color"] {
        opacity:1;
        &:after{
        opacity: 1;
        background-color: ${vars.color_counter};
        }
    }
`;
