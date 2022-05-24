import { IPost } from "@interfaces";
import Router from "next/router";
import { useCallback } from "react";
import Moment from "react-moment";

interface Props {
    post: IPost;
}

export const PostItem = (props: Props) => {
    const { post } = props;

    const handleClick = useCallback(() => {
        Router.push(`posts/${post.slug}`);
    }, [post]);
    return (
        <div
            className="w-full lg:mb-0 gap-y-4 justify-center py-4 flex flex-wrap border-t-2 border-slate-200 cursor-pointer"
            onClick={handleClick}
        >
            <img alt={""} src={post.image_url} className=" rounded-lg object-cover xl:h-48 " />
            <div className="lg:ml-5 md:w-full xl:w-3/4">
                <h5 className="text-xl font-bold">{post.title}</h5>
                <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
                    <Moment format="HH:mm DD/MM/YYYY">{post.createdAt}</Moment>
                </p>
                <div className="text-sm w-1/5 flex flex-wrap gap-y-2 leading-normal mt-0 font-bold uppercase">
                    <div className="w-1/3 text-emerald-400">
                        <i className="fas fa-comment mr-2 text-lg "></i>
                        {post?.comments.length}
                    </div>
                    <div className="w-1/3 text-sky-400">
                        <i className="fas fa-thumbs-up mr-2 text-lg "></i>
                        {post?.like}
                    </div>
                    <div className="w-1/3 text-red-400">
                        <i className="fas fa-star mr-2 text-lg "></i>
                        {(post?.rate || 0) / 20}
                    </div>
                </div>
                <p className="text-md font-light text-Gray-200">{post.short_description}</p>
            </div>
        </div>
    );
};
