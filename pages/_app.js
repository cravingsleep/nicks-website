import React from 'react';
import { CartProvider } from 'context/cart';
import Header from 'Components/header';
import Footer from 'Components/footer';
import Head from 'next/head';
import './app.scss';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
    return <div className="content">
        <Head>
            <title>Nick&#39;s Portfolio Shop</title>
        </Head>
        <Header />
        <main>
            <CartProvider>
                <Component {...pageProps} />
            </CartProvider>
        </main>
        <Footer />
    </div>;
}

export default App;
