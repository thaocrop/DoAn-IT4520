import Moment from "react-moment";
import { useCallback } from "react";

import { IPost } from "@interfaces";
import { PostStatus } from "@configs";
import Link from "next/link";

interface Props {
    post: IPost;
    handleDeletePost?: (id: string) => void;
}

export const PostTableItem = (props: Props) => {
    const { post, handleDeletePost } = props;

    const memoHandleDelete = useCallback(() => {
        if (handleDeletePost) handleDeletePost(post._id);
    }, [handleDeletePost, post]);

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white ">
                {post.title}
            </td>
            <td className="px-6 py-4">{post.user_name || "Tác Giả"}</td>
            <td className="px-6 py-4">
                <Moment format="HH:mm DD/MM/YYYY">{post.createdAt}</Moment>
            </td>
            <td className="px-6 py-4">{PostStatus[post.status]}</td>
            <td className="px-6 py-4 flex flex-wrap  ">
                <Link href={`/admin/posts/${post._id}`}>
                    <a
                        href="javascript:void(0)"
                        className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline whitespace-nowrap"
                    >
                        Chỉnh sửa
                    </a>
                </Link>
                {handleDeletePost && (
                    <a
                        href="javascript:void(0)"
                        onClick={memoHandleDelete}
                        className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    >
                        Xoá
                    </a>
                )}
            </td>
        </tr>
    );
};
