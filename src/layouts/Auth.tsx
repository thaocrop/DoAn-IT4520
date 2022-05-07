// import { StyledContentAuth, StyledAuth } from "src/components";

import { Header } from "@components";
import { ILayout } from "@interfaces";

export const LayoutAuth = (props: ILayout) => {
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

        // <StyledAuth notImage={notImageAuth}>
        //     <StyledContentAuth notImage={notImageAuthContent}>
        //         <img alt="" className="bg-image__logo" src="/images/auth/logo.png" />

        //         {props.children}
        //     </StyledContentAuth>
        // </StyledAuth>
    );
};
