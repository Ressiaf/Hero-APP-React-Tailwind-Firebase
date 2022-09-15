import { useState } from "react";
import { Alert } from "@material-tailwind/react";

const RedAlert = ( { text } ) => {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert
                show={show}
                color="red" 
                className="my-2 justify-center flex animate__animated animate__fadeInUp bg-opacity-80"
                dismissible={{
                onClose: ( ) => setShow(false),
                }}
            >
                { text }
            </Alert>
        </>
    );
    }

export default RedAlert