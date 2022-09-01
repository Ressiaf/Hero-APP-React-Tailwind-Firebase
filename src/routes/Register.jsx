import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { errorsFirebase } from "../utils/errorsFirebase";
import { formValidate } from "../utils/formValidate";
import { Link } from "react-router-dom";
import FormAlert from "../components/Forms/FormAlert";
import FormInput from "../components/Forms/FormInputs";
import FormButton from "../components/Buttons/FormButton";

const Register = () => {
    const navegate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { registerUser } = useContext(UserContext);
    const { required, patternEmail, minLength, 
        validateTrim, validateEquals } = formValidate();

    const {
            register,
            handleSubmit,
            formState: { errors },
            getValues,
            setError,
        }  = useForm({
        // defaultValues: {
        //   email: "funcional.register@test.com",
        //   password: "123123",
        //   repassword: "123123",
        // },
        });

    const onSubmit = async ({ email, password }) => {
        try {
        setLoading(true);
        await registerUser(email, password);
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
        <div className="p-6  mt-32 h-screen rounded-md z-20  bg-black bg-opacity-70 border-2 border-white/50">
            <p className="text-white text-4xl underline underline-offset-4 decoration-red-600 decoration-2"> Register</p>
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

                <FormInput
                    type="password"
                    placeholder="Re-type password"
                    label="Repeat your password:"
                    error={errors.repassword}
                    {...register("repassword", {
                    validate: validateEquals(getValues("password")),
                    })}
                >
                    <FormAlert error={errors.repassword} />
                </FormInput>
                <div className="flex flex-col sm:flex-row justify-between items-center text-gray-50/80">
                    
                    <FormButton 
                        text="Register" 
                        type="submit" 
                        loading={loading} 
                    />
                    <div className="ml-4">
                        <h6>Already a member? </h6>
                        <Link 
                            to={'/login'}
                            className="font-bold"
                        >
                            Sign In
                        </Link>
                    </div>

                </div>
            </form>
        </div>
    </>
);
};

export default Register;
