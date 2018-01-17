import styled from 'styled-components';
import SliderTemp from 'react-slick';
import * as vars from '../../theme/variables';

export const Dot = styled.a`
    cursor: pointer;
    img{
        width: 24px;
    }
`;

export const SliderWr = styled(SliderTemp) `
    align-items:center;
    overflow:hidden;
    height: 100vh;
    .slide-dots{
        position: absolute;
        text-align: right;
        top: auto;
        left: 30px;
        bottom: 30px;
        width: 40%;
        hegiht: auto;
        li{
            display: inline-block;
            margin: 0 10px;
            a{
                display: block;
            padding: 10px;
            text-align: center;
            vertical-align: middle;
            border:1px solid transparent;
            border-radius: 50%;
            width: 34px;
            height: 34px;
            opacity: 0.5;
            transition:border .3s,opacity .3s;
            img {
                margin-top: 3px;
                width: 28px;
            }
            }
        }
        .slick-active {
            a {
                border:1px solid #fff;
                opacity: 1;
            }
        }
    }

    .slick-slide{
            position: absolute;
            height: 100vh;
        img{
            width: 100vw;
            position: absolute;
            top: 50%;
            left: 50%;
            transform:translate(-50%,-50%);
        }
        h2,h3{
            margin-top: 0;
            margin-bottom: 10px;
        }
        h2 {
            font-size: 2.8em;
        }
        h3 {
            font-size: 1.5em;
            font-weight: normal;
            text-transform: uppercase;
        }
        p {
            font-size: 13px;
            line-height: 1.5em;
            color: #fff;
        }
        &.slick-active{
            &:after{
                content:' ';
                position: absolute;
                top: auto;
                bottom: 0;
                height: 190px;
                width: 100vw;
                background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%);
            }
        }
    }
`;
export const SliderContainer = styled.div`
    position: absolute;
    top: auto;
    left: 30px;
    bottom: 110px;
    width: 40%;
    hegiht: auto;
    padding: 30px;
    background-color: rgba(95,75,139,0.85);
`;

