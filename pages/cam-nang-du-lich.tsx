import Link from "next/link";
import { Pagination, PostItem } from "src/components";

const CamNangDuLich = () => {
    return (
        <main>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-50">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('/img/cam-nang-du-lich.jpeg')",
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-50 bg-black"
                    ></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    Cẩm nang du lịch
                                </h1>
                                <p className="mt-4 text-lg text-blueGray-200">
                                    Hãy ghi chú lại những điều sau vào cẩm nang du lịch của bạn, nó
                                    sẽ giúp cho bạn có được chuyến trải nghiệm thú vị mà không cần
                                    lo lắng điều gì
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap flex-col items-center gap-6">
                        <PostItem
                            title="10 địa điểm du lịch Singapore - Malaysia bạn không nên bỏ lỡ"
                            image="/img/camnhi-224706044743-tour-sing-malay.jpeg"
                            description="Với những tín đồ yêu thích sự xê dịch, Singapore, Malaysia chính
                            là vùng đất hứa đáng để đặt chân đến một lần. Sắp tới, nếu bạn
                            dự định làm một chuyến du lịch Singapore – Malaysia khoảng 5, 6
                            ngày thì nhất định phải check in cho bằng hết 10 địa điểm này
                            nha."
                            date="06/05/2022"
                            slug="10-singapore"
                        />
                        <PostItem
                            title="Trải nghiệm trực thăng cực chill ngắm Sài Gòn từ trên cao"
                            image="/img/camnhi-222225032246-pre-tour-truc-thang.jpeg"
                            description="Bạn đã từng trải nghiệm đi trực thăng ở Hạ Long, Vũng Tàu? Vậy
                            có bao giờ bạn ao ước Sài Gòn cũng có trải nghiệm này để được
                            ngắm Thành phố xinh đẹp và năng động – nơi mình đang sinh sống
                            từ trên cao chưa? Vậy 30/4 này hãy là một trong số những hành
                            khách đầu tiên trải nghiệm tour bay trực thăng lần đầu tiên xuất
                            hiện ở TPHCM, tham quan trên không các điểm đến nổi tiếng của
                            thành phố nhé."
                            date="05/05/2022"
                            slug="10-singapore"
                        />
                        <PostItem
                            title="Những món ngon phải thử 1 lần khi du lịch Hội An"
                            image="/img/camnhi-223325043343-mon-ngon-hoi-an.jpeg"
                            description="Hội An tuy bé, đi một buổi đã hết nhưng nếu muốn thưởng thức
                            trọn vẹn nền ẩm thực đặc sắc ở đây, bạn phải mất đến... mấy
                            ngày. Bởi thế, ngoài nét thâm trầm cố kính của phố cổ, trò chơi
                            dân gian thú vị, nhiều du khách du lịch Hội An còn có thú vui
                            trải nghiệm món ăn đường phố đặc sắc với hương vị không nơi nào
                            có được."
                            date="04/05/2022"
                            slug="hoi-an"
                        />
                        <PostItem
                            title="Cầu kính Bạch Long Mộc Châu, cầu kính đi bộ dài nhất thế giới"
                            image="/img/camnhi-221505061554-cau-kinh-bach-long-pre.jpeg"
                            description=" Thêm tọa độ check in cho team thích những thử thách mạo hiểm,
                            muốn chiêm ngưỡng trọn vẹn khung cảnh thiên nhiên hùng vĩ của
                            núi rừng Tây Bắc khi du lịch Mộc Châu đó là Cầu kính Bạch Long –
                            cầu kính đi bộ dài nhất thế giới ở Sơn La."
                            date=" 03/05/2022"
                            slug="10-singapore"
                        />
                        <PostItem
                            title="5 lý do du lịch mùa hè Nhật Bản thu hút du khách thập phương"
                            image="/img/camnhi-222506112527-du-lich-nhat-ban-mua-he.jpeg"
                            description="Nhật Bản được thế giới biết đến với những bộ kimono xinh đẹp,
                            duyên dáng hay cách cúi chào gập người và nền ẩm thực đầy phong
                            phú. Bên cạnh đó, phong cảnh cùng trải nghiệm du lịch hè tại nơi
                            đây cũng khiến các bạn mê mẩn không kém đâu nè."
                            date="02/05/2022"
                            slug="5-nhat-ban"
                        />
                        <Pagination />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CamNangDuLich;
