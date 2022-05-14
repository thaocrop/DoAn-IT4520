import { ChangeEventHandler, memo } from "react";

interface Props {
    title?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    error?: string;
    name: string;
    input_type?: string;
}

const Input = (props: Props) => {
    const { value, onChange, error, title, name, input_type } = props;
    return (
        <>
            {title && (
                <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    {title}
                </label>
            )}
            <input
                name={name}
                value={value}
                onChange={onChange}
                type={input_type || "text"}
                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder={title}
            />
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </>
    );
};

export const MCInput = memo(Input);
