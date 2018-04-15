import fetchJsonp from "fetch-jsonp";

export const frontFetchDataSuccess = items => ({
  type: "FRONT_FETCH_DATA_SUCCESS",
  url: items[4].backdrop_path
});

export const frontHasErrored = bool => ({
  type: "FRONT_HAS_ERRORED",
  hasErrored: bool
});

export const frontIsLoading = bool => ({
  type: "FRONT_IS_LOADING",
  isLoading: bool
});

export const fetchFrontData = () => dispatch => {
  dispatch(frontIsLoading(true));
  fetchJsonp(
    "https://api.themoviedb.org/3/movie/upcoming/?api_key=21b0daca9dad79653c91d176b7930bee"
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(frontIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(json => dispatch(frontFetchDataSuccess(json.results)))
    .catch(() => dispatch(frontHasErrored(true)));
};

export function searchTerm(term) {
  return {
    type: "SEARCH_TERM_ENTERED",
    term
  };
}

export function exploreFetchSuccess(items) {
  return {
    type: "EXPLORE_FETCH_SUCCESS",
    items
  };
}

export function exploreHasErrored(bool) {
  return {
    type: "EXPLORE_HAS_ERRORED",
    hasErrored: bool
  };
}

export const isLoading = bool => ({
  type: "IS_LOADING",
  isLoading: bool
});

export const browseSuccess = data => ({
  type: "BROWSE_SUCCESS",
  data
});

export const receiveBrowse = data => ({
  type: "RECIEVED_BROWSE_DATA",
  data
});

export const browseFetch = media => {
  fetchJsonp(
    `https://api.themoviedb.org/3/${media}/popular?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=1`
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      // dispatch(isLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(() => console.log("error"));
};
