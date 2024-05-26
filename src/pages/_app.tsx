import RootLayout from '@/components/RootLayout';
import { RouteNotLayout } from '@/constants/Routes';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
    const { pathname } = useRouter();

    const Layout = RouteNotLayout.includes(pathname) ? React.Fragment : RootLayout;

    return (
        <>
            <Head>
                <title>First Next App</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default App;
