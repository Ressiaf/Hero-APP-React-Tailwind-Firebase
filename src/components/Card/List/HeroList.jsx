
import  React, { useEffect, useState ,useContext  } from 'react'
import HeroContext from '../../../context/Hero/HeroContext'
import { useCounter } from '../../../hooks/useCounter'
import { Pagination } from '../../Pagination'
import { HeroCard } from './HeroCard'
import Spinner from '../../Spinner'

export const HeroList = ( { publisher  } ) => {

    const { heroesByPublisher, getHeroesByPublisher, } = useContext( HeroContext )
    const { counter, increment , decrement  } = useCounter( )
    const [show, setShow] = useState(true)
    const heroPerPage = 18
    const max = Math.round(heroesByPublisher.length / heroPerPage)

    useEffect( ( ) => {
        getHeroesByPublisher( publisher )
        if (counter === max ) {
            setShow(false)
        } else if (counter <= max) {
            setShow(true)
        }
        
    }, [  publisher ,counter ] )

    if (heroesByPublisher.length === 0) return <Spinner / >
    
    const heroesPagination =  heroesByPublisher.slice( (counter - 1) * heroPerPage , (counter - 1) * heroPerPage + heroPerPage )

    return (
        <>
            {  
                heroesByPublisher.length < heroPerPage ? (
                    <></>
                ):(
                    <Pagination
                        increment={increment} 
                        decrement={decrement} 
                        counter={counter}
                        show={show}
                        max={max}
                    />
                )
            }
            <div className='grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 md:justify-items-stretch justify-center ' >
                {
                    heroesPagination.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                    ))
                }
            </div>
            {  
                heroesByPublisher.length < heroPerPage ? (
                    <></>
                ):(
                    <Pagination
                        increment={increment} 
                        decrement={decrement} 
                        counter={counter}
                        show={show}
                        max={max}
                    />
                )
            }
        </>
    )
}










