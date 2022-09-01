const Title = ({text , span}) => (
    <h2 className="text-2xl  sm:text-6xl uppercase tracking-widest text-center text-gray-50 font-light antialiased
    mb-8 underline underline-offset-8 decoration-red-600 decoration-4">
        {text} 
        <span className="text-red-600 ">
            {span}
        </span>
    </h2>
)

export default Title