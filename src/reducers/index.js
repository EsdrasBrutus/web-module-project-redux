import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer'

export const rootReducer = combineReducers({
    movieList: movieReducer,
    favoriteList: favoriteReducer
});

export default rootReducer;