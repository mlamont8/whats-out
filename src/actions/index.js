import fetchJsonp from 'fetch-jsonp';

// Fetching Front Page Data


export function frontFetchDataSuccess(items) {
    return {
        type: 'FRONT_FETCH_DATA_SUCCESS',
        url: items[4].backdrop_path
    };
}

export function frontHasErrored(bool) {
    return {
        type: 'FRONT_HAS_ERRORED',
        hasErrored: bool
    };
}

export function frontIsLoading(bool) {
    return {
        type: 'FRONT_IS_LOADING',
        isLoading: bool
    };
}

export function fetchFrontData() {
    return (dispatch) => {
        dispatch(frontIsLoading(true));
        fetchJsonp('https://api.themoviedb.org/3/movie/upcoming/?api_key=21b0daca9dad79653c91d176b7930bee')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(frontIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((json) =>
                dispatch(frontFetchDataSuccess(json.results)))
            .catch(() => dispatch(frontHasErrored(true)));

    }
}


// Fetching Search Term

export function searchTerm(term) {
    return {
        type: 'SEARCH_TERM_ENTERED',
        term
    }
}


export function exploreFetchSuccess(items) {
    return {
        type: 'EXPLORE_FETCH_SUCCESS',
        items
    };
}

export function exploreHasErrored(bool) {
    return {
        type: 'EXPLORE_HAS_ERRORED',
        hasErrored: bool
    };
}

export const exploreRequest = () => {
    return {
        type: 'EXPLORE_REQUEST',

    };
}

export function fetchExploreData(type, page) {
    console.log(type, page)
    return (dispatch) => {
        dispatch(exploreRequest());
        fetchJsonp(`https://api.themoviedb.org/3/${type}/popular?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=${page}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
                
            })
            .then((response) => response.json()

            )
            .then((json) =>
                dispatch(exploreFetchSuccess(json)))
            .catch(() => dispatch(exploreHasErrored(true)));

    }
}

export function browseType(type) {
    return (dispatch) => {
        dispatch(exploreRequest());
        fetchJsonp(`https://api.themoviedb.org/3/${type}/popular?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=1`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                console.log(response);
                return response;
            })
            .then((response) => response.json()

            )
            .then((json) =>
                dispatch(exploreFetchSuccess(json)))
            .catch(() => dispatch(exploreHasErrored(true)));

    }
}


