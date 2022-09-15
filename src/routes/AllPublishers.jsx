import React, { useContext , useState } from 'react'
import Title from '../components/Title'
import HeroContext from '../context/Hero/HeroContext';
import { nanoid } from 'nanoid';
import { HeroList } from '../components/Card/List/HeroList';
import { useCounter } from '../hooks/useCounter';
import Text from '../components/Text';


const AllPublishers = () => {

    const { heroes , handleAllPublishers } = useContext(HeroContext)
    const { counter} = useCounter( )
    const [selectedPublisher, setSelectedPublisher] = useState("Deadpool");
    const capturePublisher = (e) => { 
        setSelectedPublisher(e.target.value)
    };

    
    return (
        <>
        <div className='h-auto min-h-screen '>
        <div className=' flex  justify-center items-center  w-full pt-8 px-12 rounded ' >
            <div className='my-8 flex flex-col items-center '>
                <Title text='all publishers' />
                <Text text="Select a publisher" />
                <select 
                    onChange={capturePublisher}
                    value={selectedPublisher}
                    className="mt-1 bg-gray-50/90 text-xl font-normal  border-gray-900/80 border-2 text-gray-900/80 focus:ring-gray-500 focus:border-gray-600 block w-full p-2.5 text-md rounded-md placeholder-gray-600 max-w-md"  
                >
                {
                    handleAllPublishers(heroes).map((item) => (
                        <option
                            key={nanoid()} 
                            value={item}
                            className="text-xl bg-gray-500 bg-opacity-30  rounded-md mt-4"
                        >
                            {item}
                        </option>
                ))}
                </select>
        </div>
    </div>
            <HeroList publisher={selectedPublisher} counter={counter} />  
            </div>
   </>
    )
}

export default AllPublishers