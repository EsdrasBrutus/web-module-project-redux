import { TOGGLE_FAVORITE, ADD_FAVORITE,  DELETE_FAVORITE } from "../actions/favoriteActions";
const initialState = {
    favorites: [],
    display: true
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            return {
                ...state,
                display: !state.display
            };

        case ADD_FAVORITE:
            const newFavorite = {
                id: action.payload.id,
                title: action.payload.title
            }
            return {
                ...state,
                favorites:[...state.favorites, newFavorite]
            };
            
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload != item.id))
            };

        default:
            return state;
    }
}

export default reducer;