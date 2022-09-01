import { Progress } from "@material-tailwind/react";

const ProgressBar = ( {progress , label} ) => {

return (


    <div className="flex w-full flex-col gap-1 my-2  opacity-95">
            <label className="text-gray-50 font-normal  tracking-widest text-md uppercase">{label}</label>
            <Progress value={progress} color="red" variant="gradient" />
    </div>
    )
}

export default ProgressBar