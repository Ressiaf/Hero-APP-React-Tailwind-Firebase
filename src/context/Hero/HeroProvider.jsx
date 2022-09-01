
import getHeroName from '../../utils/helpers/getHeroName'
import getPublishers from '../../utils/helpers/getPublishers'
import { useFetch} from '../../hooks/useFetch'
import { useReducer, useEffect } from 'react'
import {HeroReducer} from './HeroReducer'
import HeroContext from './HeroContext'

const initialState = {
heroes: [ ],
heroByID: [],
heroesByPublisher: [ ],
}

const HeroProvider = ({children}) => {

const heroes  = useFetch();


const [state, dispatch] = useReducer(HeroReducer, initialState);

useEffect( (  ) => {
    dispatch( { type: 'GET_HEROES', payload: heroes } )
}, [ heroes ] );

const getHeroesByPublisher = ( publisher ) => {
    dispatch({ type: 'GET_BY_PUBLISHER', payload:publisher })
};

const getHeroByID = ( id ) => {
    dispatch({ type: 'GET_BY_ID', payload: id })
};

const handleName = ( name ) => {
    return getHeroName(name, heroes)
}

const handleAllPublishers = () => {
    return getPublishers(heroes)
}
// console.log(getPublishers(heroes));

return (
    <HeroContext.Provider value={{
        heroByID: state.heroByID,
        heroes: state.heroes,
        heroesByPublisher: state.heroesByPublisher,
        getHeroByID,
        handleName,
        handleAllPublishers,
        getHeroesByPublisher,
    }}>
        {children}
    </HeroContext.Provider>
    )
}
export default HeroProvider