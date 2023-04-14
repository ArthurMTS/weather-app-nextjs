import type { AppProps } from "next/app";

import { CityProvider } from "@/contexts/city";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CityProvider>
      <Component {...pageProps} />
    </CityProvider>
  );
}
