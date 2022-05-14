import { createRef, useCallback, useState } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import { useDispatch, useSelector } from "react-redux";

import { logout, selectAuth, selectUser } from "@redux";
import { UserType } from "@configs";

export const IndexDropdown = () => {
    const { profile } = useSelector(selectUser);
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = createRef<HTMLAnchorElement>();
    const popoverDropdownRef = createRef<HTMLDivElement>();
    const dispatch = useDispatch();

    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    const openDropdownPopover = () => {
        //@ts-ignore
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    if (profile) {
        return (
            <>
                <a
                    className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="javascript:void(0)"
                    ref={btnDropdownRef}
                    onClick={(e) => {
                        e.preventDefault();
                        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                    }}
                >
                    <i className="fa fa-solid fa-user"></i> &nbsp; {profile.user_name}
                </a>
                <div
                    ref={popoverDropdownRef}
                    className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                    }
                >
                    {profile.user_type === UserType.Admin && (
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
                                    Dashboard
                                </a>
                            </Link>
                            <hr />
                        </>
                    )}
                    <Link href="/posts/tao-moi">
                        <a
                            href="javascript:void(0)"
                            className={
                                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                            }
                        >
                            Tạo mới bài viết
                        </a>
                    </Link>
                    <div
                        className={
                            "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={handleLogout}
                    >
                        Đăng Xuất
                    </div>
                </div>
            </>
        );
    } else {
        return <></>;
    }
};

export default IndexDropdown;
