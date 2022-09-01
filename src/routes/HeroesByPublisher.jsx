import React , {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { HeroList } from '../components/Card/List/HeroList';
import { useCounter } from '../hooks/useCounter';
import Title from '../components/Title';
export const HeroesByPublisher = ( ) => {

  const { reset ,counter} = useCounter( )

  const {publisher} = useParams();

  useEffect( ( ) => {
    reset( )
  }, [ publisher ] )


  return (
    <>

    <div className='my-8'>
      <Title text={publisher} />
      <HeroList publisher={publisher} counter={counter} />
    </div>
    


  </>
  )
}