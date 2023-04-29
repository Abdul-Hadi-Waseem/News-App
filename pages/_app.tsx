import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from "next/font/google";
import Head from "next/head";
import { Container, Navbar, SSRProvider } from "react-bootstrap";
import styles from '@/styles/App.module.css'
import NavBar from "@/components/NavBar";
import NextNProgress from "nextjs-progressbar"

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title key={"title"}>News</title>
        <meta
          name="description" key={"description"}
          content="News App Build Using News Api And Next JS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SSRProvider>

      <NextNProgress/>
      <NavBar/>
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
      </SSRProvider>
    </div>
  );
}
