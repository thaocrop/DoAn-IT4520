import { memo, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { IndexDropdown } from "../Dropdown";
import { selectAuth } from "@redux";

const CHeader = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { auth } = useSelector(selectAuth);
    const { pathname } = useRouter();

    return (
        <>
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a
                                className="text-emerald-500 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                href="javascript:void(0)"
                            >
                                My Travel
                            </a>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="flex items-center">
                                <a
                                    className={`hover:text-emerald-600 ${
                                        pathname === "/" ? "text-emerald-500" : "text-slate-700"
                                    } px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
                                >
                                    <Link href="/">Trang chủ</Link>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className={`hover:text-emerald-600 ${
                                        pathname === "/cam-nang-du-lich"
                                            ? "text-emerald-500"
                                            : "text-slate-700"
                                    } px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
                                >
                                    <Link href="/cam-nang-du-lich">Cẩm nang du lịch</Link>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className={`hover:text-emerald-600 ${
                                        pathname === "/noi-ban-muon-den"
                                            ? "text-emerald-500"
                                            : "text-slate-700"
                                    } px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
                                >
                                    <Link href="/noi-ban-muon-den">Bạn muốn đến?</Link>
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {auth ? (
                                <li className="flex items-center">
                                    <IndexDropdown />
                                </li>
                            ) : (
                                <>
                                    <li className="flex items-center">
                                        <a className="hover:text-emerald-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                            <Link href="/dang-ky">Đăng Ký</Link>
                                        </a>
                                    </li>

                                    <li className="flex items-center">
                                        <button
                                            className="bg-slate-700 text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <a>
                                                <Link href="/dang-nhap">Đăng Nhập</Link>
                                            </a>
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export const Header = memo(CHeader);
