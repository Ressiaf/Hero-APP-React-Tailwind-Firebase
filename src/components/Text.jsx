const Text = ({text , span}) => (
    <h2 className="text-lg uppercase tracking-widest  text-gray-50 font-normal antialiased my-3 ">
        {text} : 
        <span className="text-red-600 ">
            {span} 
        </span>
    </h2>
)

export default Text