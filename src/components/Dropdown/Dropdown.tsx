import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { logout, selectUser } from "@redux";
import { UserType } from "@configs";

export const IndexDropdown = () => {
    const { profile } = useSelector(selectUser);
    const { pathname } = useRouter();
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setDropdownPopoverShow(false);
    }, [pathname]);

    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    const openDropdownPopover = () => {
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    if (profile) {
        return (
            <div className="relative">
                <a
                    className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="javascript:void(0)"
                    onClick={(e) => {
                        e.preventDefault();
                        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                    }}
                >
                    <i className="fa fa-solid fa-user"></i> &nbsp; {profile.user_name}
                </a>
                <div
                    className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute"
                    }
                >
                    {profile.user_type === UserType.Admin ? (
                        <>
                            <span
                                className={
                                    "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
                                }
                            >
                                Admin
                            </span>
                            <Link href="/admin/dashboard">
                                <a
                                    href="javascript:void(0)"
                                    className={
                                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                    }
                                >
                                    <i className=" fa fa-tv"></i>&nbsp; Dashboard
                                </a>
                            </Link>
                            <hr />
                        </>
                    ) : (
                        <Link href="/posts/tao-moi">
                            <a
                                href="javascript:void(0)"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            >
                                <i className=" fa fa-file-alt"></i>&nbsp; Tạo mới bài viết
                            </a>
                        </Link>
                    )}
                    <div
                        className={
                            "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={handleLogout}
                    >
                        <i className="fa fa-sign-out-alt"></i>&nbsp; Đăng Xuất
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default IndexDropdown;
