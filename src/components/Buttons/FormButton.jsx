import LoadingButton from "./LoadingButton";

const FormButton = ({ text, type, color =  "red" , loading, onClick ,icon }) => {    
    if (loading) return <LoadingButton  />;

    const Buttonclass = " relative inline-flex group items-center justify-center px-6 py-1.5 mr-4 cursor-pointer text-white font-medium rounded text-sm text-center  inline-flex items-center ";

    let Buttoncolor;
        if (color === "red") {
            Buttoncolor = "bg-red-600/95 text-white hover:bg-red-600/90  overflow-hidden shadow-sm shadow-black/60 border border-spacing-2 border-black/80  ";
        }

    return (    
        <button
            onClick={ onClick }
            type={ type }
            className={ Buttonclass + Buttoncolor }
        >
            <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-white rounded-full group-hover:w-48 group-hover:h-48 opacity-10"></span>
                <span className="relative">
                    { text }
                    {icon}
                </span>
        </button>
    );
};

export default FormButton;

