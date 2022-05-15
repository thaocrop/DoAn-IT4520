import { useEffect, useState } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";

import { MMPostForm } from "@modules";
import { IPostForm } from "@interfaces";
import { selectAuth } from "@redux";
import { postApi } from "@api";
import LoadingOverlayWrapper from "react-loading-overlay-ts";

const initialValues: IPostForm = {
    title: "",
    slug: "",
    location_id: "",
    address: "",
    short_description: "",
    content: "",
    image_url: "",
};
const PostNew = () => {
    const { auth } = useSelector(selectAuth);
    const [error, setError] = useState<string | undefined>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!auth) {
            Router.push("/dang-nhap");
        }
    }, [auth]);

    const onSubmit = async (values: IPostForm) => {
        try {
            setError("");
            setLoading(true);
            await postApi.createPosts(values);
            Router.push("/");
        } catch (error: any) {
            if (error.response) {
                const mess = Array.isArray(error.response.data.errors)
                    ? error.response.data.errors[0]
                    : error.response.data.errors;
                setError(mess);
            } else {
                setError("Có lỗi xảy ra!");
            }
        } finally {
            setLoading(false);
        }
    };

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
                        <LoadingOverlayWrapper
                            styles={{
                                overlay: (base) => ({
                                    ...base,
                                    background: "rgba(0, 0, 0, 0.2)",
                                }),
                            }}
                            active={loading}
                            spinner
                            text="Chờ chút ..."
                        >
                            <MMPostForm
                                initialValues={initialValues}
                                formError={error}
                                onSubmit={onSubmit}
                            />
                        </LoadingOverlayWrapper>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PostNew;
