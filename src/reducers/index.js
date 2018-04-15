import { combineReducers } from "redux";
import front from "./front";
import searchTerm from "./search";
import exploreResults from "./exploreData";
import isLoading from "./isLoading";

const entApp = combineReducers({
  front,
  searchTerm,
  exploreResults,
  isLoading
});

export default entApp;
