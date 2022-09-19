import React, { useContext ,useEffect ,useState } from 'react'
import { useParams , useNavigate }  from 'react-router-dom'
import HeroContext from '../context/Hero/HeroContext';
import Text from '../components/Text';
import ProgressBar from '../components/ProgressBar';
import { nanoid } from 'nanoid';
import Spinner from '../components/Spinner';
import FormButton from '../components/Buttons/FormButton'
import {MdFavorite, MdIosShare, MdOutlineArrowBack} from 'react-icons/md'
import RedAlert  from '../components/RedAlert'
export const HeroPage = ( ) => {

    const { heroID } = useParams( );

    const { heroByID , getHeroByID } = useContext(HeroContext)
    
    const [copy , setCopy] = useState(false)
    const [liked, setLiked] = useState(false)

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
        {value: "weight", description: heroByID.heroW} ,
        {value: "height", description:heroByID.heroH}  ,
    ];

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    const handleClickCopy = async () => {
        await navigator.clipboard.writeText(window.location.href );
        setCopy(true);
    } 

    const handleClickLiked = () => {
        setLiked(true);
    }

    if (heroByID.length === 0) return <Spinner / >
https://i.snipboard.io/3COv5A.jpg
    return (
        <div className='h-screen relative overflow-scroll  animate__animated animate__zoomIn'>
        {copy ? ( <RedAlert text="The url was copied to clipboard  🚀" /> ) : (" ")  }
        {liked ? ( <RedAlert text="The super hero was added to favorites 🤍 " /> ) : (" ")  }
        <div className="bg-[image:url('https://i.snipboard.io/3COv5A.jpg')] h-3/4 w-full mb-20  mt-16 rounded-md opacity-60  absolute">  </div>
        <div className=" absolute h-3/4 mb-20 mt-16 w-full pt-8 px-4  rounded-md overflow-scroll items-center  lg:overflow-hidden bg-gray-200/90 shadow-2xl shadow-black  border-2 -border-spacing-2 border-black/80 " >
            <div className='grid  lg:grid-cols-3  xs:grid-cols-1 lg:justify-items-stretch justify-items-center m-8  ' >
                <div className='m-4'>

                    <img
                        src={heroByID.imgLg}
                        alt={heroByID.name}
                        className="object-cover bg-cover md:h-auto md:w-96  w-80  rounded-md shadow-2xl shadow-black mb-8 border-2 border-spacing-2 border-black/80 "
                    />
                </div>
                <div className='md:px-8  px-6 mt-12   '> 
                    <h3 className='text-2xl sm:text-5xl uppercase inline font-medium tracking-widest text-center antialiased mb-8'>{heroByID.name}</h3>
                {/* <Title text={heroByID.name} color="black"  /> */}
                    <Text text="publisher" span={heroByID.publisher} color="black"  />
                    <div className='pb-2'>
                        <Text text="stats" color="black"  />
                            {stats.map((item) => (
                                <ProgressBar
                                key={nanoid()} 
                                progress={item.progress}
                                label={item.label}
                                />
                                ))}
                    </div>
                

                </div>
                <div className='lg:pl-8  mt-2  lg:mt-12  ml-5 max-w-sm '>
                    {biography.map((item) => (
                        <Text
                            key={nanoid()} 
                            text={item.value}
                            span={item.description}
                            color="black"
                        />
                    ))}
                <div className=' my-8 '>
                    <FormButton 
                        text="Back " 
                        icon={<MdOutlineArrowBack 
                        className="inline ml-2  scale-110"/>} 
                        onClick={onNavigateBack}
                    />
                    <FormButton 
                        text="Share "  
                        icon={<MdIosShare 
                        className="inline ml-2  scale-110"/>}
                        onClick={handleClickCopy}
                    />
                    <FormButton 
                    icon={<MdFavorite 
                    className="inline scale-110"/>}
                    onClick={handleClickLiked}
                    />

                </div>
                </div>

            </div>
        </div>
        </div>
        )
        
}