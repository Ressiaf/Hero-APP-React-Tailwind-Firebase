import { Outlet } from "react-router-dom";

const FormLayout = ( ) => {
  return (
    <>
      <div className="bg-[image:url('https://raw.githubusercontent.com/Ressiaf/wiki-geeks/655ab32f34aa07bce8009762c30e1014d24e47d3/dist/assets/images/Venombackground.png')] bg-cover h-screen w-full   ">
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
