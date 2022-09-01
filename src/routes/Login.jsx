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

const Login = () => {
    const { loginUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const navegate = useNavigate();
    const { required, patternEmail, minLength, validateTrim } = formValidate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        defaultValues: {
        email: "funcional.register@test.com",
        password: "123123",
        },
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

return (
    <>
        <RedAlert text='DEFAULT VALUES - email: funcional.register@test.com - password: "123123"' />

        <div className="p-6  mt-32  rounded-md z-20  bg-black bg-opacity-70 border-2 border-white/50">
            <p className="inline text-white text-4xl underline underline-offset-4 decoration-red-600 decoration-2"> Login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <div className="flex flex-col sm:flex-row justify-between items-center text-gray-50/80">
                    <FormButton
                        text="Login"
                        type="submit"
                        loading={loading}
                    />
                    <div>
                        <h6>Not a member? </h6>
                        <Link 
                            to={'/register'}
                            className="font-bold"
                        >
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
