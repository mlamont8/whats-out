import { combineReducers } from 'redux'
import front from './front'
import searchTerm from './search'
import exploreResults from './exploreData'

const entApp = combineReducers({



    front,
    searchTerm,
    exploreResults


})

export default entApp