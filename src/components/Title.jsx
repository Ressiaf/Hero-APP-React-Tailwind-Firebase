
const Title = ( { text , span , color="white", } ) => {

        
    let titleColor;
        if (color === "white") {
            titleColor = `text-white font-sm`;
        }
        if (color === "black") {
            titleColor = `text-gray-900/90 font-normal`;
        }



return(
    <h2 className={ `text-2xl sm:text-6xl uppercase tracking-widest text-center antialiased mb-8 underline underline-offset-8 decoration-red-600 decoration-4 ${titleColor}`  }>
        {text} 
        <span className="text-red-600 ">
            {span}
        </span>
    </h2>
    )
}

export default Title