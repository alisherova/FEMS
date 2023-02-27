import React from "react";

import "styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import {css, Global} from "@emotion/react";

import {ToastContainer} from "react-toastify";
import NextNProgress from "nextjs-progressbar";

import {useAuth} from "hooks";
import {CookiesProvider} from "react-cookie";

import {ProSidebarProvider} from "../components/sidebar";

import type {AppProps} from "next/app";
import {Provider, useSelector} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import {IStore, store} from "store";
import GlobalComponent from "global"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {AppFrame} from "../components";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

const Switch = ({Component, pageProps}: AppProps) => {
    const [user] = useAuth();
    const isLoading = useSelector((state: IStore) => state.user.isLoading);

    if (isLoading) {
        return <div>loading...</div>;
    }

    return !user ? (
        <ProSidebarProvider>
            <AppFrame theme={{}}>
                <Component {...pageProps} />
            </AppFrame>
        </ProSidebarProvider>
    ) : (
        <Component {...pageProps} />
    );
};

export default function App({Component, pageProps, ...args}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <CookiesProvider>
                    <Switch Component={Component} pageProps={pageProps} {...args} />
                </CookiesProvider>
                <GlobalComponent/>
            </Provider>
            <ToastContainer/>
            <Global
                styles={css`
                  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

                  body {
                    font-family: Inter, sans-serif !important;
                  }
                `}
            />
            <NextNProgress/>
        </QueryClientProvider>
    );
}
