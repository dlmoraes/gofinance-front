import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      teriary: string;
      black1: string;
      black2: string;
      black3: string;
      white: string;
    };
  }
}
