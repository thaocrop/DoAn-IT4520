import { MCInput } from "@components";
import Autocomplete from "react-autocomplete";
// import { Editor, EditorState } from "draft-js";
import { useRef, useState } from "react";

const PostDetail = () => {
    // const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    // const editor = useRef<Editor>(null);
    // const focusEditor = () => {
    //     if (editor.current) {
    //         editor.current.focus();
    //     }
    // };
    return (
        <main className="profile-page">
            <section className="relative block h-500-px">
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
                            className="text-slate-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-slate-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="w-full lg:w-9/12 m-auto flex justify-between mt-24 px-4 flex-wrap">
                            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                Tạo mới bài viết
                            </h3>
                        </div>
                        <div className="mt-10 pt-10 border-t border-slate-200">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col gap-4">
                                    <div className="flex justify-between gap-6 flex-wrap lg:flex-nowrap">
                                        <div className="w-full">
                                            <MCInput
                                                title={"Tên bài viết"}
                                                value={"values.password"}
                                                name="password"
                                                onChange={() => {}}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <MCInput
                                                title={"Slug"}
                                                value={"values.password"}
                                                name="password"
                                                onChange={() => {}}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-4 flex-wrap">
                                        <div className="w-full lg:w-7/12">
                                            <label
                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Địa điểm
                                            </label>
                                            <Autocomplete
                                                getItemValue={(item) => item.label}
                                                items={[
                                                    { label: "apple" },
                                                    { label: "banana" },
                                                    { label: "pear" },
                                                ]}
                                                wrapperStyle={{ width: "100%" }}
                                                renderItem={(item, isHighlighted) => {
                                                    return (
                                                        <div
                                                            style={{
                                                                background: isHighlighted
                                                                    ? "lightgray"
                                                                    : "white",
                                                            }}
                                                        >
                                                            {item.label}
                                                        </div>
                                                    );
                                                }}
                                                renderInput={(props) => (
                                                    <input
                                                        {...props}
                                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder=" Địa điểm"
                                                    />
                                                )}
                                                value=""
                                                onChange={(e) => console.log(e.target.value)}
                                                onSelect={(val) => console.log(val)}
                                            />
                                        </div>
                                        <div className="w-full ">
                                            <MCInput
                                                title={"Mô tả ngắn"}
                                                value={"values.password"}
                                                name="password"
                                                onChange={() => {}}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-y-4">
                                        <div className="w-full lg:w-2/4">
                                            <label
                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Ảnh
                                            </label>
                                            <label className="block">
                                                <span className="sr-only">Choose File</span>
                                                <input
                                                    type="file"
                                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                                />
                                            </label>
                                        </div>
                                        <div className="w-full lg:w-2/4">
                                            <img
                                                alt="..."
                                                src="/img/camnhi-221505061554-cau-kinh-bach-long-pre.jpeg"
                                                className="lg:max-w-sm rounded-lg w-auto object-cover  "
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            cursor: "text",
                                        }}
                                    >
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Nội dung
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 py-10 ">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12  ">
                                    <div className="get-started h-12 text-white justify-center flex items-center font-bold rounded outline-none focus:outline-none bg-sky-500 active:bg-sky-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                        Tạo mới
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
