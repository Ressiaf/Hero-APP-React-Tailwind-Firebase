import { useContext } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import {MdLogin , MdLogout} from "react-icons/md";
import {AiOutlineForm} from "react-icons/ai"


const Header = () => {
    const { user, singOutUser } = useContext(UserContext);
    const navegate = useNavigate();

    const handleLogout = async () => {
        try {
            await singOutUser();
            navegate("/login");
        } catch (error) {
            console.log(error.code);
        }
    };

    const Style = "text-gray-50 hover:text-white/75 font-sans  text-xl px-5 py-1 mt-2 text-center mr-0.5 mb-2"
    
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
                        user ? (<p className={Style + "mr-4 text-red-600 pointer-events-none  font-thin"}>{ user.email }</p>) : ( " " ) 
                    }
                    {user ? (
                        <>
                            <div className="flex items-center gap-2">
                                <button onClick={handleLogout} className={Style }>Logout
                                    <MdLogout className="inline ml-2 mb-1"/>
                                </button>
                            </div>
                        </>
                    ) : (
                        <>  
                            <NavLink to="/login" className={Style }>
                                <div className="flex items-center gap-2">
                                    <MdLogin className="inline ml-2  "/>
                                    <p>Login </p>
                                </div>
                            </NavLink>
                            <NavLink to="/register" className={Style }>
                                <div className="flex items-center gap-2">
                                    <AiOutlineForm className="inline ml-2  "/>
                                    <p>Register </p>
                                </div>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
