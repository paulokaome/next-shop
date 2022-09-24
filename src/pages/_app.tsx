import type { AppProps } from "next/app";
import Logo from "../assets/Logo.svg";
import { globalStyles } from "../styles/global";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={Logo.src} alt="" />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
