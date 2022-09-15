import { Progress } from "@material-tailwind/react";

const ProgressBar = ( {progress , label} ) => {

return (


    <div className="flex w-full flex-col gap-1 my-2  opacity-95">
            <label className="text-gray-900/90 font-bold tracking-widest text-lg uppercase">{label}</label>
            <Progress value={progress} color="red" variant="gradient" className="border border-spacing-2 border-black/80 " />
    </div>
    )
}

export default ProgressBar