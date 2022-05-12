import { useFormik } from "formik";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import * as yup from "yup";

import { ILogin } from "@interfaces";
import { login, getUser } from "@redux";

interface Props {}

const initialValues: ILogin = {
    user_name: "",
    password: "",
};

const validationSchema = yup.object({
    user_name: yup.string().required("Tên đăng nhập là bắt buộc"),
    password: yup.string().required("Mật khẩu là bắt buộc"),
});

const Login = (props: Props) => {
    const {} = props;

    const dispatch = useDispatch();

    const onSubmit = useCallback(
        async (values: ILogin) => {
            try {
                const res = await dispatch(login(values));
                //@ts-ignore
                unwrapResult(res);
                // dispatch(getUser());
            } catch (error: any) {
                const message = error.message || "Đã có lỗi xảy ra";
                setFieldError("user_name", message);
            }
        },
        [dispatch]
    );

    const { values, handleSubmit, handleChange, setFieldError, errors, touched } = useFormik({
        initialValues,
        onSubmit,
        validateOnChange: true,
        validationSchema,
    });
    const memoSubmit = useCallback(() => handleSubmit(), [handleSubmit]);

    return (
        <form>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    tên đăng nhập
                </label>
                <input
                    name="user_name"
                    value={values.user_name}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Tên Đăng Nhập"
                />
                {errors.user_name && (
                    <span className="text-red-500 text-xs">{errors.user_name}</span>
                )}
            </div>

            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Mật khẩu
                </label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Mật Khẩu"
                />

                {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
            </div>

            <div className="text-center mt-6">
                <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={memoSubmit}
                >
                    Đăng Nhập
                </button>
            </div>
        </form>
    );
};

export const MLogin = memo(Login);
