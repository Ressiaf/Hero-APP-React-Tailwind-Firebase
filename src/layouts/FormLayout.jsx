import { Outlet } from "react-router-dom";

const FormLayout = ( ) => {
  return (
    <>
      <div className="bg-[image:url('https://i.snipboard.io/S1FiHq.jpg')] bg-cover h-screen w-full   ">
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
