import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";

import { LayoutApp } from "@layouts";
import styles from "../styles/Home.module.css";

import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            hello world
        </div>
    );
};

Home.layout = (page: ReactElement) => {
    return <LayoutApp>{page}</LayoutApp>;
};

export default Home;
