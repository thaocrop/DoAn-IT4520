import Router from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { AdminHeader, FooterAdmin, Sidebar } from "@components";
import { ILayout } from "@interfaces";
import { selectAuth } from "@redux";

export const LayoutAdmin = (props: ILayout) => {
    const { auth } = useSelector(selectAuth);

    useEffect(() => {
        if (!auth) {
            Router.push("/dang-nhap");
        }
    }, [auth]);

    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-slate-100">
                <AdminHeader />
                {/* Header */}
                {props.children}
                <FooterAdmin />
            </div>
        </>
    );
};
