import Layout from '@/components/layout';
import { RouteNotLayout } from '@/constants/Routes';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
    const { pathname } = useRouter();

    const LayoutComponent = RouteNotLayout.includes(pathname)
        ? React.Fragment
        : Layout;

    return (
        <LayoutComponent>
            <Head>
                <title>First Next App</title>
            </Head>
            <Component {...pageProps} />
        </LayoutComponent>
    );
};

export default App;
