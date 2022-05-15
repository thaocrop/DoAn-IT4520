import { postApi, userApi } from "@api";
import { useCallback, useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { CardStats } from "src/components/Card";

export const HeaderStats = () => {
    const [userLoading, setUserLoading] = useState<boolean>(false);
    const [postLoading, setPostLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<number>(0);
    const [posts, setPosts] = useState<number>(0);

    const fetchPost = useCallback(async () => {
        setPostLoading(true);
        try {
            const res = await postApi.getAll();
            if (res?.data) {
                setPosts(res.data.length);
            }
        } catch {
        } finally {
            setPostLoading(false);
        }
    }, []);

    const fetchUser = useCallback(async () => {
        setUserLoading(true);
        try {
            const res = await userApi.getAll();
            if (res?.data) {
                setUsers(res.data.length);
            }
        } catch {
        } finally {
            setUserLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPost();
        fetchUser();
    }, [fetchPost, fetchUser]);

    return (
        <div className="relative bg-slate-800 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
                <div>
                    {/* Card stats */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-12">
                        <div className="w-full   ">
                            <LoadingOverlay
                                styles={{
                                    overlay: (base) => ({
                                        ...base,
                                        background: "rgba(0, 0, 0, 0.2)",
                                        borderRadius: 10,
                                    }),
                                }}
                                className="rounded-lg"
                                active={postLoading}
                                spinner
                            >
                                <CardStats
                                    statSubtitle="Bài Review"
                                    statTitle={posts.toString()}
                                    statIconName="far fa-chart-bar"
                                    statIconColor="bg-red-500"
                                />
                            </LoadingOverlay>
                        </div>
                        <div className="w-full gap-4  ">
                            <LoadingOverlay
                                styles={{
                                    overlay: (base) => ({
                                        ...base,
                                        background: "rgba(0, 0, 0, 0.2)",
                                        borderRadius: 10,
                                    }),
                                }}
                                className="rounded-lg"
                                active={userLoading}
                                spinner
                            >
                                <CardStats
                                    statSubtitle="Người Dùng mới"
                                    statTitle={users.toString()}
                                    statIconName="fas fa-chart-pie"
                                    statIconColor="bg-orange-500"
                                />
                            </LoadingOverlay>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
