import { createGlobalStyle } from "styled-components";
import { down } from "styled-breakpoints";

export default createGlobalStyle`
body {
  background-color: ${(props) => props.theme.background.color};
  z-index: 10;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

.arrowUp {
  position: fixed;
  width: 45px;
  height: 45px;
  cursor: pointer;
  top: 90%;
  right: 30px;
  display: none;
  opacity: 0;
  transition: ease-out opacity .2s;
  color: #4C4C4C;
  background-color: #F3EBEB;
  border-radius: 25px;
  z-index: 999;

  ${down("sm")} {
   right: 20px;
  }
}

.show {
    display: block;
    opacity: 0.8;
    transition: ease-in opacity .3s;
    :hover {
    opacity: 1;
    background-color: white;
    color: #000;
  }
  }

.App {
  text-align: flex-start;
  display: flex;
  flex-direction: column;
}

@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2")
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

.GoogleLogo::before {
  content: url("../img/google-play-5.svg");
}

.AppleLogo::before {
  content: url("../img/icons8-apple-logo.svg");
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-link {
  color: #61dafb;
}

.enabled {
    color: white;
    background: #dc3d3d;
    a {
      color: white;
    }
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

:target {
  scroll-margin-top: 120px;
}

:root {
  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background: #d2d2d2;
  }
}
`;