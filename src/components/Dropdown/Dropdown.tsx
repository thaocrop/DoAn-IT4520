import { createRef, useState } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

export const IndexDropdown = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = createRef<HTMLAnchorElement>();
    const popoverDropdownRef = createRef<HTMLDivElement>();
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
    return (
        <>
            <a
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="javascript:void(0)"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <i className="fa fa-solid fa-user"></i> &nbsp; User Name
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
            >
                <span
                    className={
                        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
                    }
                >
                    Admin
                </span>
                <Link href="/admin/dashboard">
                    <a
                        href="javascript:void(0)"
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        }
                    >
                        Dashboard
                    </a>
                </Link>
                <hr />
                <div
                    className={
                        "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                >
                    Đăng Xuất
                </div>
            </div>
        </>
    );
};

export default IndexDropdown;
