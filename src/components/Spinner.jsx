import React from "react";

const Spinner = () => {
  return (
    <>
        <div class="flex justify-center items-center">
            <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-600/80"
            role="status"
            >
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </>
  );
};

export default Spinner;
