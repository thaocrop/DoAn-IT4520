import { useFormik } from "formik";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import * as yup from "yup";

import { IRegister } from "@interfaces";
import { register } from "@redux";
import { MCInput } from "@components";

interface Props {}

const initialValues: IRegister = {
    user_name: "",
    password: "",
    confirm_password: "",
    term: false,
};

const validationSchema = yup.object({
    user_name: yup.string().required("Tên đăng nhập là bắt buộc"),
    password: yup.string().required("Mật khẩu là bắt buộc"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Mật khẩu nhập lại phải khớp")
        .required("Mật khẩu nhập lại là bắt buộc"),
    term: yup.boolean().oneOf([true], "Bạn phải tuân thủ các điều khoản Và chính sách của dịch vụ"),
});

const Register = (props: Props) => {
    const {} = props;

    const dispatch = useDispatch();

    const onSubmit = useCallback(
        async (values: IRegister) => {
            try {
                const res = await dispatch(register(values));
                //@ts-ignore
                unwrapResult(res);
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
        validateOnChange: false,
        validationSchema,
    });
    const memoSubmit = useCallback(() => handleSubmit(), [handleSubmit]);

    return (
        <form>
            <div className="relative w-full mb-3">
                <MCInput
                    title={"Tên đăng nhập"}
                    value={values.user_name}
                    name="user_name"
                    error={errors.user_name}
                    onChange={handleChange}
                />
            </div>

            <div className="relative w-full mb-3">
                <MCInput
                    title={"Mật Khẩu"}
                    value={values.password}
                    name="password"
                    input_type="password"
                    error={errors.password}
                    onChange={handleChange}
                />
            </div>

            <div className="relative w-full mb-3">
                <MCInput
                    title={"Nhập lại mật khẩu"}
                    value={values.confirm_password}
                    name="confirm_password"
                    input_type="password"
                    error={errors.confirm_password}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        id="customCheckLogin"
                        type="checkbox"
                        name="term"
                        onChange={handleChange}
                        className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-slate-600">
                        Tôi Đồng Ý{" "}
                        <a
                            href="javascript:void(0)"
                            className="text-sky-500"
                            onClick={(e) => e.preventDefault()}
                        >
                            Điều Khoản Và Chính Sách
                        </a>{" "}
                        Của My Travel
                    </span>
                </label>
                {errors.term && <p className="text-red-500 text-xs">{errors.term}</p>}
            </div>

            <div className="text-center mt-6">
                <button
                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={memoSubmit}
                >
                    Tạo Tài Khoản Mới
                </button>
            </div>
        </form>
    );
};

export const MRegister = memo(Register);
