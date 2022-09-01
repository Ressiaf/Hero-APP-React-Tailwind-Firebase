import LoadingButton from "./LoadingButton";

const FormButton = ({ text, type, color =  "red" , loading, onClick }) => {    
    if (loading) return <LoadingButton  />;

    const Buttonclass = `focus:outline-none text-white focus:ring-6 font-medium rounded text-sm px-5  text-center my-4 inline-flex items-center `;

    let Buttoncolor;
        if (color === "red") {
            Buttoncolor = "bg-red-600/80 text-white  px-12 hover:bg-red-600/90  py-2";
        }


    return (    
        <button
            onClick={ onClick }
            type={ type }
            className={ Buttonclass + Buttoncolor }
        >
            { text }
        </button>
    );
};

export default FormButton;
