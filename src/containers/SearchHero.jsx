import React, { useMemo, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import queryString from 'query-string';
import { HeroCard } from "../components/Card/List/HeroCard";
import HeroContext from "../context/Hero/HeroContext";
import Title from "../components/Title";
import FormInput from "../components/Forms/FormInputs";
import FormButton from "../components/Buttons/FormButton";



const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = 'batman' } = queryString.parse(location.search);

    const { handleName } = useContext(HeroContext)

    const hero = useMemo( () =>  handleName(q), [q])


    const { searchText, onInputChange } = useForm({ searchText: q })

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length<= 1) return;
        console.log(searchText)
        navigate(`?q=${searchText}`);
    }

    return (
        <>
        <div className=" my-12 h-screen overflow-auto">
            <Title text="search" />
            <div className="m-8">
                <form onSubmit={onSearchSubmit}>
                    <FormInput
                        type="text"
                        placeholder=" Example: Batman"
                        label="Search hero by name:" 
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={onInputChange}
                    />
                    <FormButton
                        text="I'm gonna get lucky"
                        type="submit"
                    />
                </form>
            </div>

            <div className="flex justify-center mt-4">
                { hero.length >= 1 && (
                        <h4 className="text-4xl uppercase tracking-widest text-center inline text-gray-50/90 font-normal antialiased mb-4 mt-2">
                            Results :
                        </h4>
                    )
                }
            </div>  
            {
                !hero.length && q !== '' && (
                <div className="flex  flex-col justify-center items-center">
                    <h4 className="text-4xl uppercase tracking-widest text-center inline text-gray-50/90 font-normal antialiased mb-4 mt-2">
                        Results :
                    </h4>
                    <h4 className="text-red-600 text-4xl font-normal ">
                        No hero with <b> { q } </b>
                    </h4>  
                </div>  
                )
            }
            <div  className='grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 md:justify-items-stretch justify-center ' >
                {
                    hero.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                    ))
                }
            </div>
        </div>
    </>
);
};

export default SearchPage