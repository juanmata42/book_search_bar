import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;        
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    list-style-type: none;
    }
    
html, body, #root {
        height: 100%;
    }
button {
     border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}
input {
    font-family: 'Roboto', sans-serif;
}
&::-moz-focus-inner {
    border: 0;
    padding: 0;
}
`;
export default GlobalStyles;
