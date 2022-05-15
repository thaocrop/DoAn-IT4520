import Router from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AdminHeader, FooterAdmin, Sidebar } from "@components";
import { ILayout } from "@interfaces";
import { getLocations, selectAuth } from "@redux";
import { HeaderStats } from "@modules";

export const LayoutAdmin = (props: ILayout) => {
    const { auth } = useSelector(selectAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocations());
        if (!auth) {
            Router.push("/dang-nhap");
        }
    }, [auth, dispatch]);

    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-slate-100">
                <AdminHeader />
                {/* Header */}

                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24 mb-24">
                    <div className="relative min-h-screen-50 justify-between bg-white overflow-x-auto shadow-md sm:rounded-lg flex items-center flex-col ">
                        {props.children}
                    </div>
                </div>
                <FooterAdmin />
            </div>
        </>
    );
};
