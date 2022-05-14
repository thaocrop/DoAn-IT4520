import Autocomplete from "react-autocomplete";
import { memo } from "react";

import { MCInput } from "@components";
import Editor from "src/components/common/Editor";
import { IPostForm } from "@interfaces";
import { useFormik } from "formik";

interface Props {
    initialValues: IPostForm;
}

const PostFrom = (props: Props) => {
    const { initialValues } = props;

    const onSubmit = (values: IPostForm) => {
        console.log(values);
    };

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
    });

    return (
        <>
            <div className="mt-10 pt-10 border-t border-slate-200">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4 flex flex-col gap-4">
                        <div className="flex justify-between gap-6 flex-wrap lg:flex-nowrap">
                            <div className="w-full">
                                <MCInput
                                    title={"Tên bài viết"}
                                    value={values.title}
                                    name="title"
                                    onChange={handleChange}
                                    error={errors.title}
                                />
                            </div>
                            <div className="w-full">
                                <MCInput
                                    title={"Slug"}
                                    value={values.slug}
                                    name="slug"
                                    onChange={handleChange}
                                    error={errors.slug}
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
                                    value={values.short_description}
                                    name="short_description"
                                    onChange={handleChange}
                                    error={errors.short_description}
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
                                    src={values.image_url || "/img/noimage.jpeg"}
                                    className=" rounded-lg w-auto h-auto lg:max-h-64 object-cover  "
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
                            <Editor title={"Nội dung"} initialHTML={values.content} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 py-10 ">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12  ">
                        <div
                            onClick={() => handleSubmit()}
                            className="cursor-pointer h-12 text-white justify-center flex items-center font-bold rounded outline-none focus:outline-none bg-sky-500 active:bg-sky-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                        >
                            Tạo mới
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const MMPostForm = memo(PostFrom);
