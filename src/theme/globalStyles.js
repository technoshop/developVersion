import { injectGlobal } from 'styled-components';
import * as vars from './variables';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,900');
html {
    padding: 0;
    font-family: ${vars.ff_base};
    margin: 0; 
}
body {
    font-family: ${vars.ff_base};
    color: ${vars.color_base};
    padding: 0;
    margin: 0;
    padding-bottom:30px;
    font-weight: 400;
}
input, textarea {font-family: ${vars.ff_base}}
h1,h2,h3{
    font-weight:900;
    color: ${vars.color_counter};
}
    .slide-dots{
        list-style:none;
    }
    button,input[submit] {
        font-family: ${vars.ff_base} !important;
    }
`