import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "styles/tailwind.css";
import "styles/index.css";
import type { AppProps } from "next/app";
import { store, persistor } from "src/redux";
import { theme } from "src/utils";

export type NextPageWithLayout = NextPage & {
    layout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.layout ?? ((page) => page);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <PersistGate loading={null} persistor={persistor}>
                    {getLayout(<Component {...pageProps} />)}
                </PersistGate>
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
