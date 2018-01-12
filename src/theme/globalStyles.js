import { injectGlobal } from 'styled-components';
import media from 'Src/theme/media';
import * as vars from './variables';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,900');
html {
    padding: 0;
    margin: 0; 
}
body {
    font-family: ${vars.ff_base};
    color: ${vars.color_base};
    padding: 0;
    margin: 0;
    padding-bottom:30px;
}
h1,h2,h3{
    font-weight:900;
    color: ${vars.color_counter};
}

}
`