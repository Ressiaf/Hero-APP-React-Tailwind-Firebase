import React, { useContext ,useEffect  } from 'react'
import { useParams , useNavigate }  from 'react-router-dom'
import HeroContext from '../context/Hero/HeroContext';
import Title from '../components/Title';
import Text from '../components/Text';
import ProgressBar from '../components/ProgressBar';
import { nanoid } from 'nanoid';
import {IoArrowBack} from 'react-icons/io5'
import Spinner from '../components/Spinner';

export const HeroPage = ( ) => {

    const { heroID } = useParams( );
    const { heroByID , getHeroByID } = useContext(HeroContext)

    
    useEffect( ( ) => {
        getHeroByID(heroID)
    }, [ ] )
    console.log(heroByID);

    const stats = [
        {progress: heroByID.heroInt, label: `Intelligence : ${heroByID.heroInt}`} ,
        {progress: heroByID.heroSpd, label: `Speed : ${heroByID.heroSpd}`} ,
        {progress: heroByID.heroStr, label: `Strength : ${heroByID.heroStr}`} ,
        {progress: heroByID.heroPwr, label: `Power : ${heroByID.heroPwr}`} ,
        {progress:heroByID.heroDur, label: `Durability : ${heroByID.heroDur}`} ,
        {progress: heroByID.heroCom, label: `Combat : ${heroByID.heroCom}`} ,
    ];

    const biography = [
        {value:"name", description: heroByID.name} ,
        {value:"race", description: heroByID.race} ,
        {value:"gender", description: heroByID.gender} ,
        {value: "aliases", description: heroByID.aliases} ,
        {value: "born in", description: heroByID.birth} ,
        {value: "alignament", description: heroByID.alignament} ,
        {value: "works", description: heroByID.works} ,
    ];
    
    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    if (heroByID.length === 0) return < Spinner / >

    return (
        <div className='h-screen w-full pt-8 px-4 rounded overflow-scroll items-center  lg:overflow-hidden bg-black/40' >
        <button
            className=' md:static rounded-full p-1 border-2 border-white/80  mx-10 my-8 fixed -left-9 bg-black/60'
            onClick={onNavigateBack}
        >
            <IoArrowBack className='  text-white/80 text-4xl  hover:text-white' />
        </button>
            <Title text={heroByID.name} />

            <div className='grid  lg:grid-cols-3  xs:grid-cols-1 lg:justify-items-stretch justify-items-center m-8  ' >
                <div className='mt-8'>
                    <img
                        src={heroByID.imgLg}
                        alt={heroByID.name}
                        className="object-cover bg-cover md:h-auto md:w-96  w-80  rounded-md shadow-2xl shadow-black mb-8"
                    />
                </div>
                <div className='md:px-8  px-2 mt-12 '> 
                    <Text text="publisher" span={heroByID.publisher} />
                    <div className='pb-2'>
                        <Text text="stats" />
                            {stats.map((item) => (
                                <ProgressBar
                                    key={nanoid()} 
                                    progress={item.progress}
                                    label={item.label}
                                />
                            ))}
                    </div>
                    <Text text="weight" span={heroByID.heroW} />
                    <Text text="height" span={heroByID.heroH} />
                </div>
                <div className='lg:pl-8  mt-2  lg:mt-12  ml-5 max-w-sm '>
                    {biography.map((item) => (
                        <Text
                            key={nanoid()} 
                            text={item.value}
                            span={item.description}
                        />
                    ))}
                </div>

            </div>
        </div>

        )
        
}