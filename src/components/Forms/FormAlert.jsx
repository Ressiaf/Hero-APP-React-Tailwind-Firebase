const FormAlert = ({ error }) => {
    return (  
        <>
        {error && (
            <p className="mt-2 text-sm text-red-700  dark:text-red-500">
            <span className="font-medium">Oops! </span>
            {error.message}
            </p>
        )}
        </>
    )
};
export default FormAlert;