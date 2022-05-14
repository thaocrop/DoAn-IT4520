import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";

import { LayoutApp } from "@layouts";

import { NextPageWithLayout } from "./_app";
import Link from "next/link";

const Home: NextPageWithLayout = () => {
    return (
        <main>
            <Head>
                <title>My Travel</title>
                <meta name="description" content="by My Travel" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-emerald-700">
                                Giới thiệu chung
                            </h2>
                            <h1 className="font-semibold text-6xl text-teal-500">
                                Du lịch Việt Nam
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-slate-500">
                                Đất nước ta trải qua hàng nghìn năm dựng nước, giữ nước.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed text-slate-500">
                                Con người chân thành, mộc mạc chất phát. Những tháng ngày thống khổ
                                của cha ông đã viết lên những trang sử hào hùng. Vẻ đẹp từ tâm hồn,
                                từ con người ấy càng đẹp hơn khi chúng ta được tạo hóa ban tặng
                                thiên nhiên hùng vĩ, đường bờ biển chạy dài dọc theo hình chữ S của
                                tổ quốc. Còn điều gì tuyệt vời hơn khí có sông, có núi, có biển. Sự
                                hài hòa của thiên, nét đẹp hùng vĩ bao trùm lên những con người với
                                nét đẹp mộc mạc đậm chất Á Đông. Sẽ thật thiếu sót khi bạn không
                                dành cho cuộc đời những chuyến đi khám phá nét đẹp ấy của đất nước
                                tuyệt đẹp, của chính mình.
                            </p>
                            <div className="mt-12">
                                <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                    <Link href="/cam-nang-du-lich">Cẩm Nang Du Lịch</Link>
                                </a>
                                <a className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg">
                                    <Link href="/">Nơi bạn muốn đến</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
                    src="/img/gioithieu.JPG"
                    alt="..."
                />
            </section>
            <section className="mt-48 md:mt-40 pb-40 relative bg-slate-100">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-slate-100 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-400">
                                <img
                                    alt="..."
                                    src="/img/kinh-nghiem-a-z.jpeg"
                                    className="w-full align-middle rounded-t-lg"
                                />
                                <blockquote className="relative p-8 mb-4">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 w-full block h-95-px -top-94-px"
                                    >
                                        <polygon
                                            points="-30,95 583,95 583,65"
                                            className="text-emerald-400 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        KINH NGHIỆM DU LỊCH TỪ A-Z
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Vậy nên nếu bạn còn đang lăn tăn không biết đâu sẽ là điểm
                                        đến cho chuyến vi vu tiếp theo thì hãy bỏ túi bài review từ
                                        A-Z
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Du lịch Malaysia bạn không nên bỏ lỡ
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Với những tín đồ yêu thích sự xê dịch, Singapore,
                                                Malaysia chính là vùng đất hứa đáng để đặt chân đến
                                                một lần....
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Du lịch mùa hè Nhật Bản
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Nhật Bản được thế giới biết đến với những bộ kimono
                                                xinh đẹp, duyên dáng hay cách cúi chào gập người và
                                                nền ẩm thực đầy phong phú....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Cầu kính Bạch Long Mộc Châu
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Thêm tọa độ check in cho team thích những thử thách
                                                mạo hiểm, muốn chiêm ngưỡng trọn vẹn khung cảnh
                                                thiên nhiên hùng vĩ...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Du lịch Singapore 2022 siêu vui
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Bạn đã dự trù chi phí cho chuyến du lịch Singapore
                                                2022 tự túc của mình khoảng 20 triệu....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto overflow-hidden pb-20">
                    <div className="flex flex-wrap items-center pt-32">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-sky-400">
                                <img
                                    alt="..."
                                    src="/img/an-va-choi.jpeg"
                                    className="w-full align-middle rounded-t-lg "
                                />
                                <blockquote className="relative p-8 mb-4">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 w-full block h-95-px -top-94-px"
                                    >
                                        <polygon
                                            points="-30,95 583,95 583,65"
                                            className="text-sky-400 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">ĂN & CHƠI</h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Dành cả ngày chơi hết các trò chơi, ăn uống tại các nhà hàng
                                        có tiếng và tắm biển giữa đại dương là trải nghiệm cực thú
                                        vị.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Du lịch Malaysia bạn không nên bỏ lỡ
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Với những tín đồ yêu thích sự xê dịch, Singapore,
                                                Malaysia chính là vùng đất hứa đáng để đặt chân đến
                                                một lần....
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Du lịch mùa hè Nhật Bản
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Nhật Bản được thế giới biết đến với những bộ kimono
                                                xinh đẹp, duyên dáng hay cách cúi chào gập người và
                                                nền ẩm thực đầy phong phú....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Cầu kính Bạch Long Mộc Châu
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Thêm tọa độ check in cho team thích những thử thách
                                                mạo hiểm, muốn chiêm ngưỡng trọn vẹn khung cảnh
                                                thiên nhiên hùng vĩ...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Du lịch Singapore 2022 siêu vui
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Bạn đã dự trù chi phí cho chuyến du lịch Singapore
                                                2022 tự túc của mình khoảng 20 triệu....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center pt-32">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-400">
                                <img
                                    alt="..."
                                    src="/img/checkin-dep.jpeg"
                                    className="w-full align-middle rounded-t-lg"
                                />
                                <blockquote className="relative p-8 mb-4">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 w-full block h-95-px -top-94-px"
                                    >
                                        <polygon
                                            points="-30,95 583,95 583,65"
                                            className="text-red-400 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        ĐIỂM CHECK-IN SIÊU HOT
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Khám phá ngay để check in những địa điểm vui chơi, xả stress
                                        cực đẹp chanh xả :D
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Du lịch Malaysia bạn không nên bỏ lỡ
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Với những tín đồ yêu thích sự xê dịch, Singapore,
                                                Malaysia chính là vùng đất hứa đáng để đặt chân đến
                                                một lần....
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Du lịch mùa hè Nhật Bản
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Nhật Bản được thế giới biết đến với những bộ kimono
                                                xinh đẹp, duyên dáng hay cách cúi chào gập người và
                                                nền ẩm thực đầy phong phú....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Cầu kính Bạch Long Mộc Châu
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Thêm tọa độ check in cho team thích những thử thách
                                                mạo hiểm, muốn chiêm ngưỡng trọn vẹn khung cảnh
                                                thiên nhiên hùng vĩ...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Du lịch Singapore 2022 siêu vui
                                            </h6>
                                            <p className="mb-4 text-slate-500">
                                                Bạn đã dự trù chi phí cho chuyến du lịch Singapore
                                                2022 tự túc của mình khoảng 20 triệu....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
