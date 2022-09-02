import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { Navigate, Outlet} from "react-router-dom"
import NavBar from "../containers/NavBar";
import DCbackground from "../../dist/assets/images/DCbackground.png"

const RequireAuthLayout = () => {
  
  const {user} = useContext(UserContext);

  if (!user){
  return <Navigate to='/login' />
  }

  return (
    <>
    <div  style={{backgroundImage: img }} className="bg-cover h-screen w-full overflow-scroll">
      <NavBar />
      
      <div className="bg-black/40 py-1">
        <div className=" container mx-auto font-thin font-sans">
            <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
};

export default RequireAuthLayout;