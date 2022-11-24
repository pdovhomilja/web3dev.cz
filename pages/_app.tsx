import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { GoogleAnalytics } from "nextjs-google-analytics";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
