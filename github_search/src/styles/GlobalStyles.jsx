import { createGlobalStyle } from "styled-components";

import "../assets/fonts/SpaceMono-Bold.ttf";
import "../assets/fonts/SpaceMono-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
    :root{
        --body-color:#141d2f;
        --container-color:#1e2a47;
        --white:#FFFFFf;
        --grey:#ADADAD;
        --search-color:#0079ff;
        --icon-color:#0079ff;
        --error:#F74646;


    }

    @font-face {
      font-family: "SpaceMonoBold";
      src: url("/src/assets/fonts/SpaceMono-Bold.ttf") format("truetype");
      font-weight:bold
    }
    @font-face {
      font-family: "SpaceMonoRegular";
      src: url("/src/assets/fonts/SpaceMono-Regular.ttf");
      font-weight:normal
    }

    h1{
      font-family:"SpaceMonoBold";
      font-size:26px;
      line-height: 38px;
      font-weight:bold ;


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
