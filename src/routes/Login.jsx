import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { formValidate } from "../utils/formValidate";
import { useForm } from "react-hook-form";
import { errorsFirebase } from "../utils/errorsFirebase";
import { Link } from "react-router-dom";
import FormAlert from "../components/Forms/FormAlert";
import FormInput from "../components/Forms/FormInputs";
import FormButton from "../components/Buttons/FormButton";
import RedAlert from "../components/RedAlert";
import {FiLogIn } from "react-icons/fi"
import {FaGoogle } from "react-icons/fa"


const Login = ( ) => {
    const { loginUser, loginUserWhitGoogle } = useContext(UserContext);
    const { required, patternEmail, minLength, validateTrim } = formValidate();

    const [loadingPopUp, setLoadingPopUp] = useState(false);
    const [loading, setLoading] = useState(false);


    const navegate = useNavigate();


    const { 
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        // defaultValues: {
        // email: "funcional.register@test.com",
        // password: "123123",
        // },
    });

    const onSubmit = async ({ email, password }) => {
        try {
            setLoading(true);
            await loginUser(email, password);
            navegate("/");
        } catch (error) {
            const { code, message } = errorsFirebase(error);
            setError(code, { message });
        } finally {
            setLoading(false);
        }
    };

    const LoginWhitGoogle = async ({ googleProvider }) => {
        try {
            setLoadingPopUp(true);
            await loginUserWhitGoogle(googleProvider);
            navegate("/");
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingPopUp(false);
        }
    };

    return (
        <>
        <RedAlert text='DEFAULT VALUES - email: funcional.register@test.com - password: "123123"' />
        <div className="p-6  mt-32  rounded-md z-20  bg-black bg-opacity-70 border-2 border-white/50">
            <p className="inline text-white text-4xl "> Login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email input */}
                <FormInput
                    type="email"
                    placeholder="Email Address"
                    label="Enter a email:"
                    error={errors.email}
                    {...register("email", {
                    required,
                    pattern: patternEmail,
                    })}
                >
                    <FormAlert error={errors.email} />
                </FormInput>
                {/* Password input */}
                <FormInput
                    type="password"
                    placeholder="Password"
                    label="Enter a password:"
                    error={errors.password}
                    {...register("password", {
                    minLength,
                    validate: validateTrim,
                    })}
                >
                    <FormAlert error={errors.password} />
                </FormInput>
                <div className="flex flex-col sm:flex-row justify-between items-end text-gray-50/80 mt-6">
                    <div className="flex justify-center">
                    {/* Login button  */}
                    <FormButton 
                        text="Login" 
                        type="submit" 
                        loading={loading}
                        icon={<FiLogIn className="inline ml-2"/>}
                    />
                    {/* Login w google button  */}
                    <FormButton
                        text="Login whit Google"
                        type="button"
                        loading={loadingPopUp}
                        onClick={LoginWhitGoogle}
                        icon={<FaGoogle className="inline ml-2"/>}
                    />  
                    </div>
                    <div className="">
                        <h6>Not a member? </h6>
                        <Link to={"/register"} className="font-bold">
                            Sign up now
                        </Link>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
};

export default Login;
