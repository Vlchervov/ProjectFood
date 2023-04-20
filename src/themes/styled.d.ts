import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    background: {
      color: string;
    };
    switchTheme: {
      color: string;
    };
    color: string;
    hover: {
      background: {
        color: string;
      };
      color: {
        color: string;
      };
    };
    active: {
      color: string;
    };
    border: {
      border: string;
      right: string;
      top: string;
      bottom: string;
    };
  }
}
