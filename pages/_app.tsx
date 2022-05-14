import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "styles/tailwind.css";
import "styles/index.css";
import "draft-js/dist/Draft.css";
import type { AppProps } from "next/app";
import { store, persistor } from "src/redux";
import { theme } from "src/utils";
import { LayoutApp } from "@layouts";
import { ILayout } from "@interfaces";

export type NextPageWithLayout = NextPage & {
    layout?: (props: ILayout) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.layout || LayoutApp;

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <PersistGate loading={null} persistor={persistor}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
