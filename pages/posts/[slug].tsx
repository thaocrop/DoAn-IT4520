import Router, { useRouter } from "next/router";
import { ChangeEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import Moment from "react-moment";
import ReactHtmlParser from "react-html-parser";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";

import { IPost } from "@interfaces";
import { postApi } from "@api";
import { getUser, selectAuth, selectUser } from "@redux";

const PostDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const dispatch = useDispatch();
    const { profile } = useSelector(selectUser);
    // const [loading, setLoading] = useState<boolean>(false);
    const [post, setPost] = useState<IPost>();
    const [comment, setComment] = useState<string>("");
    const isLikedPost = useMemo(() => {
        if (post && profile && profile.posts_like) {
            const isLike = profile.posts_like.includes(post._id);
            return isLike;
        }
        return false;
    }, [post, profile]);

    const isRatedPost = useMemo(() => {
        if (post && profile && profile.posts_rate) {
            return profile.posts_rate.some((userRate) => userRate.id === post._id);
        }
        return false;
    }, [post, profile]);

    const ratedPost = useMemo(() => {
        if (post && profile && profile.posts_rate) {
            return profile.posts_rate.find((userRate) => userRate.id === post._id)?.rate || 0;
        }
        return 0;
    }, [post, profile]);

    const fetchPost = useCallback(async (id: string) => {
        // setLoading(true);
        try {
            const res = await postApi.getPost(id);
            if (res?.data) {
                setPost(res?.data);
            }
        } catch {
            Router.push("/");
        } finally {
            // setLoading(false);
        }
    }, []);
    useEffect(() => {
        if (slug) fetchPost(slug.toString());
    }, [fetchPost, slug]);

    const handleLikePost = useCallback(async () => {
        if (!isLikedPost && post?._id && slug) {
            try {
                await postApi.likePost(post._id);
                dispatch(getUser());
                fetchPost(slug.toString());
            } catch {
                //
            }
        }
    }, [isLikedPost, post, slug, fetchPost, dispatch]);

    const handleRatePost = useCallback(
        async (rate: number) => {
            if (!isRatedPost && post?._id && slug) {
                try {
                    await postApi.ratePost(post._id, { rate });
                    dispatch(getUser());
                    fetchPost(slug.toString());
                } catch {
                    //
                }
            }
        },
        [isRatedPost, post, slug, fetchPost, dispatch]
    );

    const handleChangeComment: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        const value = event.target.value;
        setComment(value);
    }, []);

    const handleComment = useCallback(async () => {
        if (comment && post?._id && slug) {
            try {
                await postApi.commentPost(post._id, { comment });
                dispatch(getUser());
                fetchPost(slug.toString());
                setComment("");
            } catch {
                //
            }
        }
    }, [comment, post, slug, dispatch, fetchPost]);
    return (
        <main className="profile-page">
            <section className="relative block h-500-px">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('/img/camnhi-221505061554-cau-kinh-bach-long-pre.jpeg')",
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
                            <div className="relative  ">
                                <img
                                    alt={post?.title}
                                    src={post?.image_url || "/img/noimage.jpeg"}
                                    className="xl:max-w-sm rounded-lg w-auto object-cover  "
                                />
                            </div>

                            <div className="text-left lg:w-full xl:w-2/4  ">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700 mb-2">
                                    {post?.title}
                                </h3>
                                <div className="text-sm flex flex-wrap gap-y-2 leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
                                    <div className="w-1/2">
                                        <i className="fas fa-user mr-2 text-lg text-slate-400"></i>
                                        {post?.user_name}
                                    </div>
                                    <div className="w-1/2">
                                        <i className="fas fa-calendar mr-2 text-lg text-slate-400"></i>{" "}
                                        <Moment format="DD/MM/YYYY">{post?.createdAt}</Moment>
                                    </div>
                                    <div className="w-full">
                                        <i className="fas fa-address-book mr-2 text-lg text-slate-400"></i>{" "}
                                        {post?.address}
                                    </div>
                                </div>
                                <div className="text-sm flex w-1/2 sm:w-1/3 xl:w-2/5 gap-y-2 leading-normal mt-0 font-bold uppercase">
                                    <div className="w-1/3 text-emerald-400">
                                        <i className="fas fa-comment mr-2 text-xl "></i>
                                        {post?.comments.length}
                                    </div>
                                    <div className="w-1/3 text-sky-400">
                                        <i className="fas fa-thumbs-up mr-2 text-xl "></i>
                                        {post?.like}
                                    </div>
                                    <div className="w-1/3 text-red-400 ">
                                        <i className="fas fa-star mr-2 text-xl "></i>
                                        {(post?.rate || 0) / 20}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 pt-10 border-t border-slate-200">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    {ReactHtmlParser(post?.content || "")}
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 py-10 ">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 p-4 border-t border-slate-200">
                                    {profile ? (
                                        <>
                                            <div className="flex items-center mb-2">
                                                <i
                                                    className={`fas fa-thumbs-up mr-2 text-xl cursor-pointer ${
                                                        isLikedPost
                                                            ? "text-sky-400"
                                                            : "text-slate-400"
                                                    } `}
                                                    onClick={handleLikePost}
                                                ></i>
                                                <Rating
                                                    onClick={handleRatePost}
                                                    size={25}
                                                    ratingValue={ratedPost}
                                                    transition
                                                    readonly={isRatedPost}
                                                />
                                            </div>
                                            <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-slate-800 font-bold">
                                                Bình luận
                                            </h3>
                                            <div className="flex mb-3 pt-0 w-full justify-between gap-6">
                                                <div className=" w-3/4">
                                                    <input
                                                        type="text"
                                                        placeholder="Nhập bình luận"
                                                        value={comment}
                                                        onChange={handleChangeComment}
                                                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:shadow-outline w-full"
                                                    />
                                                </div>
                                                <div className="w-1/4 flex justify-end">
                                                    <div
                                                        onClick={handleComment}
                                                        className="get-started cursor-pointer text-white justify-center w-3/4 flex items-center font-bold rounded outline-none focus:outline-none bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                                    >
                                                        Bình luận
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-slate-800 font-bold">
                                                Bình luận
                                            </h3>
                                        </>
                                    )}
                                    {post?.comments && post?.comments.length < 1 && (
                                        <div className="text-slate-400 ">Không có bình luận</div>
                                    )}
                                    {post?.comments.map((comment) => (
                                        <div className="mb-4" key={comment._id}>
                                            <p className=" text-md leading-relaxed text-slate-700">
                                                <span className=" font-bold">
                                                    {comment.user_name}
                                                </span>
                                                {" - "}
                                                <span className="text-xs">
                                                    <Moment format="HH:mm DD/MM/YYYY">
                                                        {comment.createdAt}
                                                    </Moment>
                                                </span>
                                            </p>
                                            <p className=" text-xs leading-relaxed text-slate-700">
                                                {comment.comment}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PostDetail;
