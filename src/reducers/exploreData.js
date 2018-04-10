let initialState = {
    exploreResults: {},
    isLoading: false

}

export default function exploreData(state = initialState, action) {
    switch (action.type) {
        case 'EXPLORE_FETCH_SUCCESS':
            return Object.assign({}, state, {
                exploreResults: action.items,
                isLoading: false
            })
        case 'EXPLORE_REQUEST':
            return Object.assign({}, state, {
                isLoading: true
            })
        default:
            return state;
    }
}