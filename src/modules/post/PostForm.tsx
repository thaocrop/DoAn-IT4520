import Autocomplete from "react-autocomplete";
import { ChangeEvent, ChangeEventHandler, memo, useCallback, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import slugify from "react-slugify";
import Select, { SingleValue } from "react-select";
import { useSelector } from "react-redux";

import { MCInput } from "@components";
import Editor from "src/components/common/Editor";
import { IPostForm } from "@interfaces";
import { uploadApi } from "@api";
import { selectConfig } from "@redux";

interface Props {
    initialValues: IPostForm;
    formError?: string;
    onSubmit: (values: IPostForm) => void;
}
const validationSchema = yup.object({
    title: yup.string().max(50, "Tiêu đề không vượt quá 50 ký tự").required("Tiêu đề là bắt buộc"),
    slug: yup.string().max(50, "Slug không vượt quá 50 ký tự").required("Slug là bắt buộc"),
    location_id: yup.string().required("Địa điểm là bắt buộc"),
    address: yup
        .string()
        .max(150, "Địa chỉ cụ thể không vượt quá 150 ký tự")
        .required("Địa chỉ cụ thể là bắt buộc"),
    short_description: yup
        .string()
        .max(255, "Địa chỉ cụ thể không vượt quá 255 ký tự")
        .required("Mô tả ngắn là bắt buộc"),
    content: yup.string().required("Nội dung là bắt buộc"),
    image_url: yup.string().required("Ảnh là bắt buộc"),
});

const PostFrom = (props: Props) => {
    const { initialValues, formError, onSubmit } = props;
    const { locations } = useSelector(selectConfig);

    const formatLocation = locations.map((location) => {
        return {
            label: location.name,
            value: location._id,
        };
    });

    const { values, handleChange, handleSubmit, errors, setFieldValue, setFieldError } = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnChange: false,
        enableReinitialize: true,
    });

    const memoSubmit = useCallback(() => {
        handleSubmit();
    }, [handleSubmit]);

    const handleChangeImage: ChangeEventHandler<HTMLInputElement> = useCallback(
        async (e: any) => {
            const file = e.target.files[0];
            if (file) {
                const formData = new FormData();
                //@ts-ignore
                formData.append("file", file);
                try {
                    const res = await uploadApi.single(formData);
                    const image = res?.data?.path;
                    if (image) {
                        setFieldValue("image_url", image);
                    }
                } catch (err: any) {
                    e.target.value = null;
                    setFieldValue("image_url", "");
                    if (err.response) {
                        const mess = Array.isArray(err.response.data.errors)
                            ? err.response.data.errors[0]
                            : err.response.data.errors;
                        setFieldError("image_url", mess);
                    } else {
                        setFieldError("image_url", "Có lỗi xảy ra!");
                    }
                } finally {
                    // setIsLoading(false);
                }
            }
        },
        [setFieldValue, setFieldError]
    );

    const handleChangeContent = useCallback(
        (content: string) => {
            setFieldValue("content", content);
        },
        [setFieldValue]
    );

    const handleChangeTitle = useCallback(
        (event: ChangeEvent<any>) => {
            const value = event.target.value;
            setFieldValue("title", value);
            if (value) {
                setFieldValue("slug", slugify(value));
            } else {
                setFieldValue("slug", "");
            }
        },
        [setFieldValue]
    );

    const handleChangeSlug = useCallback(
        (event: ChangeEvent<any>) => {
            const value = event.target.value;
            if (value) {
                setFieldValue("slug", slugify(value));
            } else {
                setFieldValue("slug", "");
            }
        },
        [setFieldValue]
    );

    const handleChangeLocation = useCallback(
        (
            newValue: SingleValue<{
                label: string;
                value: string;
            }>
        ) => {
            setFieldValue("location_id", newValue?.value);
        },
        [setFieldValue]
    );

    return (
        <>
            <div className="mt-10 pt-10 border-t border-slate-200">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4 flex flex-col gap-4">
                        <div className="flex gap-6 flex-wrap lg:flex-nowrap">
                            <div className="w-full">
                                <MCInput
                                    title={"Tên bài viết"}
                                    value={values.title}
                                    name="title"
                                    onChange={handleChangeTitle}
                                    error={errors.title}
                                />
                            </div>
                            <div className="w-full">
                                <MCInput
                                    title={"Slug"}
                                    value={values.slug}
                                    name="slug"
                                    onChange={handleChangeSlug}
                                    error={errors.slug}
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 flex-wrap lg:flex-nowrap">
                            <div className="w-full ">
                                <label
                                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Địa điểm
                                </label>

                                <Select
                                    className="basic-single border-0  shadow"
                                    name="location_id"
                                    classNamePrefix={"py-0.5 border-0  border-white "}
                                    options={formatLocation}
                                    placeholder="Địa điểm"
                                    onChange={handleChangeLocation}
                                    value={formatLocation.find(
                                        (location) => location.value === values.location_id
                                    )}
                                />
                                {errors.location_id && (
                                    <span className="text-red-500 text-xs">
                                        {errors.location_id}
                                    </span>
                                )}
                            </div>
                            <div className="w-full ">
                                <MCInput
                                    title={"Địa chỉ cụ thể"}
                                    value={values.address}
                                    name="address"
                                    onChange={handleChange}
                                    error={errors.address}
                                />
                            </div>
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
                                        onChange={handleChangeImage}
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                    {errors.image_url && (
                                        <span className="text-red-500 text-xs">
                                            {errors.image_url}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="w-full lg:w-2/4">
                                <img
                                    alt="..."
                                    src={values.image_url || "/img/noimage.jpeg"}
                                    className=" rounded-lg w-auto h-auto  object-cover  "
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
                            {errors.content && (
                                <span className="text-red-500 text-xs">{errors.content}</span>
                            )}
                            <Editor
                                setEditorState={handleChangeContent}
                                title={"Nội dung"}
                                initialHTML={values.content}
                            />
                        </div>
                        {formError && (
                            <span className="text-red-500  font-bold mt-6">{formError}</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-10 py-10 ">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4 ">
                        <div
                            onClick={memoSubmit}
                            className="cursor-pointer h-12 text-white justify-center flex items-center font-bold rounded outline-none focus:outline-none bg-sky-500 active:bg-sky-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                        >
                            Nộp
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const MMPostForm = memo(PostFrom);
