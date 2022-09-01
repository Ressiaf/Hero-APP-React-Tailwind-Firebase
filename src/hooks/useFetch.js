import {  useState , useEffect } from 'react'
import fetchHeroes from '../data/fetchHeroes'

export const useFetch = () => {

    const [heroes, setHeroes] = useState([ ]);

    const getHeroes = async ( ) => {
        const res = await fetchHeroes();
        setHeroes(res);
    }

    useEffect( ( ) =>{
        getHeroes()
    },[ ])

    return heroes
}