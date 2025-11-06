import Layout from "@/components/Layout";
import { FormContextProvider } from "@/context";
import "@/styles/globals.css";
import { type AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <FormContextProvider>
        <Component {...pageProps} />
      </FormContextProvider>
    </Layout>
  );
}
