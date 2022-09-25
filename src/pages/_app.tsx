import type { AppProps } from "next/app";
import Image from 'next/future/image';
import Logo from "../assets/Logo.svg";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image src={Logo.src} width={100} height={100} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
