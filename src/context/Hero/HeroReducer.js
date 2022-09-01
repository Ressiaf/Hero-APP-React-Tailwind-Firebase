export const HeroReducer = (state = {}, action) => {
 console.log("action:", action);
 console.log("state:",state);
    switch (action.type ) {
        case 'GET_BY_ID':
            return {
                ...state,
                heroByID: state.heroes.find(hero => hero.id === parseInt(action.payload))
            }
        case 'GET_HEROES':
            return {
                ...state,
                heroes: action.payload
            }
            case 'GET_BY_PUBLISHER':
                return {
                    ...state,
                    heroesByPublisher: state.heroes.filter(hero => hero.publisher === action.payload)
                }
        default:
            return state;
    }
}

