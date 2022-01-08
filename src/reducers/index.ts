import { combineReducers } from 'redux';
import geo from "./geo"
import searchHistory from './searchHistory';
export default combineReducers({
    geo:geo,
    searchHistory:searchHistory,
})