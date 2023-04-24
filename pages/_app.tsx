import type { AppProps } from "next/app";

import { CityProvider } from "@/contexts/city";
import "@/styles/globals.css";
import { ThemeProvider } from "@/contexts/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CityProvider>
        <Component {...pageProps} />
      </CityProvider>
    </ThemeProvider>
  );
}
