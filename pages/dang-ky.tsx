import React from "react";
import Link from "next/link";

// layout for page

import { LayoutAuth } from "@layouts";

export default function Register() {
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6"></div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Tên Đăng Nhập
                                        </label>
                                        <input
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Tên Đăng Nhập"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Mật Khẩu
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Mật Khẩu"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Nhập Lại Mật Khẩu
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Nhập Lại Mật Khẩu"
                                        />
                                    </div>

                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                Tôi Đồng Ý Với Các {""}
                                                <a
                                                    href="#pablo"
                                                    className="text-lightBlue-500"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    Điều Khoản Và Chính Sách
                                                </a>{" "}
                                                Của My Travel
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Tạo Tài Khoản Mới
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <a className="text-blueGray-200 cursor-pointer">
                                    <Link href="/">
                                        <small>Quay Lại Trang Chủ</small>
                                    </Link>
                                </a>
                            </div>
                            <div className="w-1/2 text-right">
                                <a className="text-blueGray-200 cursor-pointer">
                                    <Link href="/dang-nhap">
                                        <small>Đã Có Tài Khoản</small>
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

Register.layout = LayoutAuth;
