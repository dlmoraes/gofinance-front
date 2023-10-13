import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/global";
import { darkTheme } from "@/styles/themes/dark";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
