import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --body-color:#040029;
        --container-color:#12255f;
        --white:#FFFFFD;
        --grey:#ADADAD;
        --search-color:#0061FF;
        --icon-color:#0645cc;


    }

    *, 
    *::before, 
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color:var(--body-color);
  color:var(--white);
 
}

html{
    font-size:62.5%;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

ul{
    margin: 0;
    padding: 0;
    list-style: none;
}

#root, #__next {
  isolation: isolate;
}
`;
