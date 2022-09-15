const Text = ({text , span , color = "white"}) => {

    let textColor;
        if (color === "white") {
            textColor = `text-white  font-normal `;
        }
        if (color === "black") {
            textColor = `text-gray-900/90 font-bold`;
        }

return  (
<h2 className={`tracking-widest text-lg uppercase font-normal antialiased my-3 ${textColor}`}>
        {text} : 
        <span className="text-red-600 ">
            {span} 
        </span>
    </h2>
    );
}

export default Text