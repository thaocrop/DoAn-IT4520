import Moment from "react-moment";
import { useCallback } from "react";

import { IPost } from "@interfaces";
import { PostStatus } from "@configs";

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
            <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
                {post.title}
            </td>
            <td className="px-6 py-4">{post.user_name || "Tác Giả"}</td>
            <td className="px-6 py-4">
                <Moment format="YYYY/MM/DD HH:mm">{post.createdAt}</Moment>
            </td>
            <td className="px-6 py-4">{PostStatus[post.status]}</td>
            <td className="px-6 py-4 text-right">
                <a
                    href="javascript:void(0)"
                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                >
                    Chỉnh sửa
                </a>
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
