import { useFormik } from "formik";
import { ChangeEventHandler, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import * as yup from "yup";

import { ILogin } from "@interfaces";
import { login, getUser } from "@redux";
import { MCInput } from "@components";

interface Props {}

const initialValues: ILogin = {
    user_name: "",
    password: "",
};

const validationSchema = yup.object({
    user_name: yup
        .string()
        .max(10, "Tên đăng nhập không vượt quá 10 ký tự")
        .required("Tên đăng nhập là bắt buộc"),
    password: yup
        .string()
        .min(6, "Tên đăng nhập phải dài hơn 6 ký tự")
        .max(32, "Tên đăng nhập không vượt quá 32 ký tự")
        .required("Mật khẩu là bắt buộc"),
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

    const { values, handleSubmit, handleChange, setFieldError, errors, setFieldValue } = useFormik({
        initialValues,
        onSubmit,
        validateOnChange: true,
        validationSchema,
    });
    const memoSubmit = useCallback(() => handleSubmit(), [handleSubmit]);

    const handleChangeUserName: ChangeEventHandler<HTMLInputElement> = useCallback(
        (event) => {
            const value = event.target.value;
            setFieldValue("user_name", value.replaceAll(" ", ""));
        },
        [setFieldValue]
    );
    return (
        <form>
            <div className="relative w-full mb-3">
                <MCInput
                    title={"Tên đăng nhập"}
                    value={values.user_name}
                    error={errors.user_name}
                    onChange={handleChangeUserName}
                    name="user_name"
                />
            </div>

            <div className="relative w-full mb-3">
                <MCInput
                    title={"Mật khẩu"}
                    value={values.password}
                    error={errors.password}
                    name="password"
                    input_type="password"
                    onChange={handleChange}
                />
            </div>

            <div className="text-center mt-6">
                <button
                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
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
