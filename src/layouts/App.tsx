// import { Layout, Spin } from "antd";
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Footer, Header } from "src/components";
import { ILayout } from "src/interfaces";
// import { selectApp, setLoading } from "src/redux";

export const LayoutApp = (props: ILayout) => {
    //redux state
    const dispatch = useDispatch();

    // const loading = useSelector(selectApp).loading;

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(setLoading(false));
    //     }, 1000);
    // }, []);

    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};
