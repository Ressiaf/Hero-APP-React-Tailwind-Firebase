import { Outlet } from "react-router-dom";
import Venombackground from "../../dist/assets/images/Venombackground"

const FormLayout = ( ) => {
  return (
    <>
      <div style={{backgroundImage: Venombackground }} className="bg-cover h-screen w-full" >
      <div className="bg-black/30 py-1 h h-screen">
        <div className="w-3/4  h-1/4 lg:w-1/3  mx-auto mt-0 flex flex-col items-stretch  font-thin ">
          <Outlet />
        </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
