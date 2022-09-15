import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { Navigate, Outlet} from "react-router-dom" 
import NavBar from "../containers/NavBar";


const RequireAuthLayout = ( )   => {
  
  const {user} = useContext(UserContext);

  if (!user){
  return <Navigate to='/login' />
  }
  // https://i.snipboard.io/EpP7cl.jpg
  return (
    <>
    <div className="bg-[image:url('https://i.snipboard.io/EpP7cl.jpg')] bg-cover h-screen w-full overflow-scroll">
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