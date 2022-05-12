// import { StyledContentAuth, StyledAuth } from "src/components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Router from "next/router";

import { ILayout } from "@interfaces";
import { selectAuth } from "@redux";

export const LayoutAuth = (props: ILayout) => {
    const { auth } = useSelector(selectAuth);

    useEffect(() => {
        if (auth) {
            Router.push("/");
        }
    }, [auth]);

    return (
        <main>
            <section className="relative w-full h-full py-40 min-h-screen">
                <div
                    className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                    style={{
                        backgroundImage: "url('/img/register_bg_2.png')",
                    }}
                ></div>
                {props.children}
            </section>
        </main>
    );
};
