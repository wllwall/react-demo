import { Layout } from "@/componements/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Children } from "react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  );
}
