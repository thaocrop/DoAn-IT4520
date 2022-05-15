// import { Layout, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Footer, Header } from "@components";
import { ILayout } from "@interfaces";
import { getLocations, getUser, selectAuth } from "@redux";
// import { selectApp, setLoading } from "src/redux";

export const LayoutApp = (props: ILayout) => {
    //redux state
    const dispatch = useDispatch();
    const { auth } = useSelector(selectAuth);

    // const loading = useSelector(selectApp).loading;

    useEffect(() => {
        dispatch(getLocations());
        if (auth) {
            dispatch(getUser());
        }
    }, [dispatch, auth]);

    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};
