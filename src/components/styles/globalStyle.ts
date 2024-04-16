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
.button-next {
  width: 20px;
  height: 10px;
}

.swiper-slide {
  width: 116px;
}

.swiperCategory {
  margin: 0px;
  padding: 0px;
  width: 1200px;
  height: 50px;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-button-next {
    height: 50px;
    width: 0px;
  ::after {
    font-size: 30px;
  }
}

.swiper-button-prev {
  width: 0px;
  height: 50px;
  ::after {
    font-size: 30px;
  }
}
}

/* html {
  scroll-behavior: smooth;
} */

@keyframes HideHeader {
  0% {
    top: 0px;
  }
  100% {
    top: -145px;
  }
}

@keyframes OpenHeader {
  0% {
    top: -120px;
  }
  100% {
    top: 0;
  }
}

.visible {
  top: 0;
  animation: OpenHeader 0.8s ease;
}

.hidden {
  top: -145px;
  animation: HideHeader 0.8s ease;
}

.arrowUp {
  position: fixed;
  width: 35px;
  height: 35px;
  cursor: pointer;
  bottom: 5%;
  right: 30px;
  display: none;
  opacity: 0;
  transition: ease-out opacity .2s;
  color: #4C4C4C;
  background-color: #F3EBEB;
  border-radius: 25px;
  z-index: 999;

  ${down("sm")} {
   right: 15px;
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
  scroll-margin-top: 160px;
}

:root {
  ::-webkit-scrollbar {
    width: 6px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background-color: #c7c7c7;
  }
}
`;