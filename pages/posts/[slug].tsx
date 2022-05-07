const PostDetail = () => {
    return (
        <main className="profile-page">
            <section className="relative block h-500-px">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('/img/camnhi-221505061554-cau-kinh-bach-long-pre.jpeg')",
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-50 bg-black"
                    ></span>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
                            className="text-blueGray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="w-full lg:w-9/12 m-auto flex justify-between mt-24 px-4 flex-wrap">
                            <div className="relative  ">
                                <img
                                    alt="..."
                                    src="/img/camnhi-221505061554-cau-kinh-bach-long-pre.jpeg"
                                    className="lg:max-w-sm rounded-lg w-auto object-cover  "
                                />
                            </div>

                            <div className="text-left lg:w-full xl:w-2/4  ">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    Cầu kính Bạch Long Mộc Châu, cầu kính đi bộ dài nhất thế giới
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-calendar mr-2 text-lg text-blueGray-400"></i>{" "}
                                    05/05/2022
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-5">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                    Author
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 pt-10 border-t border-blueGray-200">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        Thêm tọa độ check in cho team thích những thử thách mạo
                                        hiểm, muốn chiêm ngưỡng trọn vẹn khung cảnh thiên nhiên hùng
                                        vĩ của núi rừng Tây Bắc khi du lịch Mộc Châu đó là Cầu kính
                                        Bạch Long – cầu kính đi bộ dài nhất thế giới ở Sơn La.
                                    </p>
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        Cây cầu kính Bạch Long được xây dựng tại Bản Lùn, xã Mường
                                        Sang, huyện Mộc Châu, tỉnh Sơn La, nằm trong quần thể phức
                                        hợp khu nghỉ dưỡng, vui chơi giải trí Mộc Châu Island. Đây
                                        là địa điểm du lịch mới ở Mộc Châu đang thu hút được sự quan
                                        tâm, chú ý của đông đảo du khách trong và ngoài nước.
                                    </p>
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        Cầu kính Bạch Long dài bao nhiêu? Vượt qua vị trí số 1 của
                                        cầu kính trong khu thắng cảnh Tam Hiệp Hoàng Xuyên Trung
                                        Quốc (dài 526m), cầu kính Bạch Long Mộc Châu ở Việt Nam đã
                                        trở thành cầu kính dài nhất thế giới và hiện đang hoàn tất
                                        các thủ tục công nhận Kỷ lục Guinness với tổng chiều dài
                                        632m.
                                    </p>

                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        Được biết, giá vé trải nghiệm cầu kính Bạch Long ngày thường
                                        từ thứ 2 – thứ 6 là 550.000đ/người lớn và 350.000đ/trẻ em
                                        (chiều cao 1-1.4m). Học sinh, sinh viên, người dân Sơn La và
                                        người có công là 400.000đ/người lớn và 250.000đ/trẻ em •
                                        Ngày cuối tuần (thứ 7, CN) và dịp lễ: 650.000đ/người lớn và
                                        450.000đ/trẻ em (chiều cao 1-1.4m) • Trẻ dưới 1m được miễn
                                        phí.
                                    </p>

                                    <p className=" text-lg leading-relaxed text-blueGray-700">
                                        Du lịch Mộc Châu ngoài khám phá, trải nghiệm đi cầu kính
                                        Bạch Long, ở khu du lịch Mộc Châu Island bạn còn có thể trải
                                        nghiệm các trò chơi mạo hiểm khác như nhảy Bungee, Zording,
                                        Zipline qua vực sâu, Xích đu vực sâu, khinh khí cầu… hay
                                        tham gia, thưởng thức các chương trình lễ hội như: Lễ hội
                                        khinh khí cầu, Lễ hội Hoa, Lễ hội trà Việt Nam...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 py-10 ">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 p-4 border-t border-blueGray-200">
                                    <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800 font-bold">
                                        Bình luận
                                    </h3>
                                    <div className="flex mb-3 pt-0 w-full justify-between gap-6">
                                        <div className=" w-3/4">
                                            <input
                                                type="text"
                                                placeholder="Nhập bình luận"
                                                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
                                            />
                                        </div>
                                        <div className="w-1/4 flex justify-end">
                                            <div className="get-started text-white justify-center w-3/4 flex items-center font-bold rounded outline-none focus:outline-none bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                                Bình luận
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className=" text-md leading-relaxed text-blueGray-700 font-bold">
                                            User name
                                        </p>
                                        <p className=" text-xs leading-relaxed text-blueGray-700">
                                            Thêm tọa độ check in cho team thích những thử thách mạo
                                            hiểm, muốn chiêm ngưỡng trọn vẹn khung cảnh thiên nhiên
                                            hùng vĩ của núi rừng Tây Bắc khi du lịch Mộc Châu đó là
                                            Cầu kính Bạch Long – cầu kính đi bộ dài nhất thế giới ở
                                            Sơn La.
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <p className=" text-md leading-relaxed text-blueGray-700 font-bold">
                                            User name
                                        </p>
                                        <p className=" text-xs leading-relaxed text-blueGray-700">
                                            Thêm tọa độ check in cho team thích những thử thách mạo
                                            hiểm, muốn chiêm ngưỡng trọn vẹn khung cảnh thiên nhiên
                                            hùng vĩ của núi rừng Tây Bắc khi du lịch Mộc Châu đó là
                                            Cầu kính Bạch Long – cầu kính đi bộ dài nhất thế giới ở
                                            Sơn La.
                                        </p>
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

export default PostDetail;
