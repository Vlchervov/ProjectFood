import { createGlobalStyle } from "styled-components";

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

.App {
  text-align: flex-start;
  height: 100vh;
  display: flex;
  flex-direction: column;

  
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



html {
  scroll-behavior: smooth;
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
