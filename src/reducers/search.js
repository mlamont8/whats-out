// Search Terms

export default function searchTerm(state = '', action) {
    switch (action.type) {
        case 'SEARCH_TERM_ENTERED':
            return Object.assign({}, state, {
                searchTerm: action.term
            })
        default:
            return state;
    }
}