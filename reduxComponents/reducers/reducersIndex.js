import { combineReducers } from 'redux'
import { items, hasErrored, itemsIsLoading } from './reducersItems'

export default combineReducers ({
   items,
   hasErrored,
   itemsIsLoading
});