import React from "react";

import { UserDropdown } from "../Dropdown";

export const AdminHeader = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <a
                        className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                        href="javascript:void(0)"
                        onClick={(e) => e.preventDefault()}
                    >
                        Dashboard
                    </a>
                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                        <a
                            className="hover:text-slate-200 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="javascript:void(0)"
                            onClick={() => {}}
                        >
                            <i className="fa fa-sign-out-alt"></i> &nbsp; Đăng Xuất
                        </a>
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
};
