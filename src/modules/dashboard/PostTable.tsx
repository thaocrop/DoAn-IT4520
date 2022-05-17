import LoadingOverlay from "react-loading-overlay-ts";
import { useCallback, useEffect, useState } from "react";

import { Pagination, PostTableItem } from "@components";
import { IPage, IPost } from "@interfaces";
import { postApi } from "@api";

export const PostTable = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);
    const [posts, setPosts] = useState<IPost[]>([]);

    const fetchPost = useCallback(async (page: number) => {
        const params: IPage = { page };
        setLoading(true);
        try {
            const res = await postApi.getPosts(params);
            if (res?.data) {
                setPosts(res.data.docs);
                setPage(res.data.page);
                setTotalPage(res.data.totalPages);
            }
        } catch {
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const pageOne = 1;
        fetchPost(pageOne);
    }, [fetchPost]);

    const handleDeletePost = useCallback(
        async (id: string) => {
            try {
                await postApi.deletePost(id);
                fetchPost(page);
            } catch {}
        },
        [fetchPost, page]
    );

    return (
        <LoadingOverlay
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: "rgba(0, 0, 0, 0.2)",
                    borderRadius: 10,
                }),
            }}
            className="rounded-lg w-full"
            active={loading}
            spinner
            text="Đang tải ..."
        >
            <div className="min-h-screen-50 w-full flex flex-col justify-between ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tên bài viết
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Người đăng
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Thời gian
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trạng thái
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Hành Động</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <PostTableItem
                                post={post}
                                key={post._id}
                                handleDeletePost={handleDeletePost}
                            />
                        ))}
                    </tbody>
                </table>
                {posts.length < 1 && (
                    <div className="flex justify-center w-full">Không có dữ liệu</div>
                )}

                <Pagination page={page} totalPage={totalPage} handlePage={fetchPost} />
            </div>
        </LoadingOverlay>
    );
};
