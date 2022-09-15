import { useContext } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import {MdLogin , MdLogout} from "react-icons/md";
import {AiOutlineForm} from "react-icons/ai"
import FormButton from "../components/Buttons/FormButton";

const Header = () => {
    const { user, singOutUser } = useContext(UserContext);

    const navegate = useNavigate( );

    const handleLogout = async () => {
        try {
            await singOutUser();
            navegate("/login");
        } catch (error) {
            console.log(error.code);
        }
    };

    // STYLES
    const Style = ""
    
    return (
        <nav className="sticky top-0 z-40  bg-black border-b  px-2 sm:px-4 py-2.5 ">
            <div className="container flex flex-wrap justify-center sm:justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <h2 className="text-4xl tracking-widest text-center text-gray-50 font-thin  ">
                            wiki
                        <span className="text-red-600 ">
                            geeks
                        </span>
                    </h2>
                </Link>
                <div className="flex flex-col sm:flex-row  justify-center  md:order-2">
                    {
                        user ? (<p className=" font-sans text-xl px-5 py-1 mt-2 text-center  mr-4 mb-2 text-red-600 pointer-events-none font-thin">{ user.email }</p>) : ( " " ) 
                    }
                    {user ? (
                        <>
                            <div className="flex items-center gap-2">
                            <FormButton onClick={handleLogout} text="Logout" icon={<MdLogout className="inline ml-2  scale-110"/>}/>
                            </div>
                        </>
                    ) : (
                        <>  
                            <NavLink to="/login" className={Style }>
                                <FormButton text="Login" icon={<MdLogin className="inline ml-2  scale-110"/>}/>
                            </NavLink>
                            <NavLink to="/register" className={Style }>
                                <FormButton text="Register" icon={<AiOutlineForm className="inline ml-2  scale-110"/>}/>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
