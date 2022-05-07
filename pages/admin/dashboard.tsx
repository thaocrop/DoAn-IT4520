import React from "react";

import { LayoutAdmin } from "@layouts";
import { Pagination } from "@components";

export default function Dashboard() {
    return (
        <div className="mb-12">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex items-center flex-col ">
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
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Món ngon Hà Nội
                            </th>
                            <td className="px-6 py-4">Thánh ẩm thực</td>
                            <td className="px-6 py-4">05/05/2022 - 15:30</td>
                            <td className="px-6 py-4">Mới</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 mr-2 dark:text-blue-500 hover:underline"
                                >
                                    Chỉnh sửa
                                </a>
                                <a
                                    href="#"
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    Xoá
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Pagination />
            </div>
        </div>
    );
}

Dashboard.layout = LayoutAdmin;
