import { createGlobalStyle } from "styled-components";
// import "antd/dist/antd.css";

export const GlobalStyle = createGlobalStyle`
/**
 * 1. Always reset this sucks.
 * 2. Inherit from default setting
 */

* {
  margin: 0; /* 1 */
  padding: 0; /* 1 */
  border: 0; /* 1 */
  background-repeat: no-repeat; /* 1 */
  box-sizing: inherit; /* 2 */
  font-family: 'Inter', sans-serif;
;
}

/**
 * 1. Prevent certain mobile browsers from automatically zooming fonts.
 * 2. Border box sizing 
 * 3. Default scroll behavior (not smooth)
 */

html {
  -ms-text-size-adjust: 100%; /* 1 */
  -webkit-text-size-adjust: 100%; /* 1 */
  box-sizing: border-box; /* 2 */
  scroll-behavior: auto; /* 3 */
}

/**
 * 1. Set default font styles
 * 2. Beautiful fonts again
 * 3. Prevent horizontal scroll
 */

body {
  font-size: 16px; /* 1 */
  -moz-osx-font-smoothing: grayscale; /* 2 */
  -webkit-font-smoothing: antialiased; /* 2 */

}

#root {

  width: 100%;
  height: 100vh;
}

/**
 * All Headings look the same
 */

h1,
h2,
h3,
h4,
h5 {
  font-size: 1em;
  font-weight: normal;
}


/**
 * 1. Reset link styles 
 * 2. Sized links
 * 3. Remove the gray background on active links in IE 10.
 */

a {
  text-decoration: none; /* 1 */
  color: inherit; /* 1 */
  display: inline-block; /* 2 */
  background-color: transparent; /* 3 */
}

/**
 * No bullets anymore
 */

ol,
ul {
  list-style: none;
}

/**
 * Remove all default styles and all elements look the same 
 */

button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: visible;
  border: 0;
  outline: 0;
  font: inherit;
  -webkit-font-smoothing: inherit;
  letter-spacing: inherit;
  color: inherit;
  background: none;
  vertical-align: top;
}

/**
 * Avoid no background on Edge and IE 
 */

option {
  background-color: inherit;
}

h2 {
  color: ${(props) => props.theme.colors.gray200};
  font-size: 18px;
  font-weight: 700;
}
h1 {
  color: ${(props) => props.theme.colors.black};
  font-size: 36px;
  font-weight: 700;
}
p {
    color: ${(props) => props.theme.colors.gray300};
    font-size: 14px;
    font-weight: 600;
  }
  h3 {
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors.black};;
  }
`;
