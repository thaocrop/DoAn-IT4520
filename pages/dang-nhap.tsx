import React from "react";
import Link from "next/link";

// layout for page

import { LayoutAuth } from "@layouts";
import { MLogin } from "@modules";

export default function Login() {
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6"></div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-slate-400 text-center mb-3 font-bold"></div>
                                <MLogin />
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <a className="text-slate-200 cursor-pointer">
                                    <Link href="/">
                                        <small>Quay Lại Trang Chủ</small>
                                    </Link>
                                </a>
                            </div>
                            <div className="w-1/2 text-right">
                                <a className="text-slate-200 cursor-pointer">
                                    <Link href="/dang-ky">
                                        <small>Tạo Tài Khoản Mới</small>
                                    </Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Login.layout = LayoutAuth;
