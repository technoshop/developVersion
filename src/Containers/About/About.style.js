import styled, { injectGlobal } from 'styled-components';

export const Spot = styled.h2`
    margin: 90px 0;    
`;
injectGlobal`
.panel{
    height: 100vh;
    width: 100%;
}
.panel.green{
    margin-bottom: 400px;
}
.blue {
	background-color: #3883d8;
}
.turqoise {
	background-color: #38ced7;
}
.brown {
	background-color: #a66f28;
}
.bordeaux {
	background-color: #953543;
}
.skin {
	background-color: #ED9F4C;
}
.black {
	background-color: #000000;
}
.white {
	background-color: #FFFFFF;
}
.red {
	background-color: #cf3535;
}
.green {
	background-color: #22d659;
}
.orange {
	background-color: #ea6300;
}
`
