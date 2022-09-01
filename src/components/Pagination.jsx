import React from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

export const Pagination = ({ increment, decrement, max, show, counter }) => {
    return (
        <>
            <div className="flex justify-center items-center mb-8">
                <div className="flex">
                    <button
                        onClick={() => decrement()}
                        className="bg-gray-200/90 rounded-md border  p-4 hover:bg-gray-50 overflow-hidden shadow-md shadow-black"
                    >
                        <GrLinkPrevious />
                    </button>
                </div>
                <h3 className=" flex bg-gray-200/90 p-3 px-4 text-2xl  rounded-md mx-4 font-normal shadow-md shadow-black">
                    <span className="mx-1">{counter} -</span>
                    <span className="mx-1">{max}</span>
                </h3>
                    {show === true ? (
                        <div className=" flex">
                            <button
                                className="bg-gray-200/90 rounded-md border  p-4 hover:bg-gray-50 overflow-hidden shadow-md shadow-black"
                                onClick={() => increment()}
                            >
                            <GrLinkNext />
                            </button>
                        </div>
                    ) : (
                    <></>
                    )}
            </div>
        </>
    );
};
