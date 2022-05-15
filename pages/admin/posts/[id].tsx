import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import LoadingOverlayWrapper from "react-loading-overlay-ts";
import { useRouter } from "next/router";

import { postApi } from "@api";
import { IPostForm } from "@interfaces";
import { LayoutAdmin } from "@layouts";
import { MMPostForm } from "@modules";
import { Status } from "@configs";

const initialValues: IPostForm = {
    title: "",
    slug: "",
    location_id: "",
    address: "",
    short_description: "",
    content: "",
    image_url: "",
};

export default function PostDetail() {
    const [error, setError] = useState<string | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const [post, setPost] = useState<IPostForm>();
    const router = useRouter();
    const { id } = router.query;

    const fetchPost = useCallback(async (id: string) => {
        setLoading(true);
        try {
            const res = await postApi.getPost(id);
            if (res?.data) {
                const editablePost: IPostForm = {
                    title: res.data.title || "",
                    slug: res.data.slug || "",
                    location_id: res.data.location?._id || "",
                    address: res.data.address || "",
                    short_description: res.data.short_description || "",
                    content: res.data.content || "",
                    image_url: res.data.image_url || "",
                    status: res.data.status || "",
                    user_name: res.data.user_name || "",
                };
                setPost(editablePost);
            }
        } catch {
            Router.push("/admin/dashboard");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (id) {
            fetchPost(id.toString());
        }
    }, [id, fetchPost]);

    const onSubmit = useCallback(async (values: IPostForm) => {
        try {
            setError("");
            setLoading(true);
            if (id) {
                await postApi.updatePost(id.toString(), values);
            }
            Router.push("/admin/dashboard");
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
    }, []);

    const handleApprove = useCallback(async () => {
        try {
            setLoading(true);
            if (id) {
                await postApi.updatePost(id.toString(), { status: Status.Active });
            }
            Router.push("/admin/dashboard");
        } catch {
            setLoading(false);
        }
    }, [id]);

    return (
        <div className="w-full">
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
                <div className="min-h-screen-50">
                    <div className="w-full lg:w-9/12 m-auto flex justify-between pt-12 px-4 flex-wrap gap-2">
                        <div>
                            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                Chỉnh sửa bài viết
                            </h3>
                            <span>Tác giả: {post?.user_name}</span>
                        </div>

                        {post?.status == Status.InActive && (
                            <div
                                onClick={handleApprove}
                                className="bg-sky-500 cursor-pointer py-4 text-white flex items-center justify-center px-20 font-bold rounded-xl"
                            >
                                Duyệt
                            </div>
                        )}
                    </div>

                    {post && (
                        <MMPostForm onSubmit={onSubmit} formError={error} initialValues={post} />
                    )}
                </div>
            </LoadingOverlayWrapper>
        </div>
    );
}

PostDetail.layout = LayoutAdmin;
