import { useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";

import { MMPostForm } from "@modules";
import { IPostForm } from "@interfaces";
import { selectAuth } from "@redux";

const PostNew = () => {
    const initialValues: IPostForm = {
        title: "",
        slug: "",
        location_id: "",
        address: "",
        short_description: "",
        content: "",
        image_url: "",
    };
    const { auth } = useSelector(selectAuth);

    useEffect(() => {
        if (!auth) {
            Router.push("/dang-nhap");
        }
    }, [auth]);

    return (
        <main className="profile-page">
            <section className="relative block h-500-px">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('/img/create-new.jpeg')",
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-50 bg-black"
                    ></span>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-slate-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-slate-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="w-full lg:w-9/12 m-auto flex justify-between mt-24 px-4 flex-wrap">
                            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                Tạo mới bài viết
                            </h3>
                        </div>
                        <MMPostForm initialValues={initialValues} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PostNew;
