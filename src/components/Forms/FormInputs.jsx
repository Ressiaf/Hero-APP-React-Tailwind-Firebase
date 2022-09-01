import { forwardRef } from "react";

const FormInput = forwardRef(
    ({ children, type, placeholder, onChange, onBlur, name, label, error }, ref) => {

        const errorClassLabel = error 
        ? "block mt-6 text-lg  text-red-700 " 
        : "block  mt-6 text-lg text-gray-50"
        
        const errorClassInput = error
        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-lg rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
        : "mt-2 bg-gray-50/90 border border-black text-gray-900 focus:ring-gray-500 focus:border-gray-600 block w-full p-2.5 text-md rounded-md placeholder-gray-600 "

        return (
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className= {errorClassLabel}
                >
                    {label}
                </label>

                <input 
                    className={errorClassInput}
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}

                />
                {children}
            </div>
        );
    }
);
export default FormInput;