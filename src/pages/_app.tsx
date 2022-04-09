import "../styles/index.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../components";
import { ApolloProvider } from "@apollo/client";
import apolloClient from '../graphql/client'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <>
      <Head>
        <title>abtech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <SessionProvider session={session}>
          <ApolloProvider client={apolloClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;
