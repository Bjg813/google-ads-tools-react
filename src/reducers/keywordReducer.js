import C from '../actions/constants'

export const capitalizedKeyword = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_KEYWORD :
            return {
                id: action.id,
                keyword: action.keyword
            }
        default : 
            return state
    }
}   

export const capitalizedKeywords = (state = [], action) => {
    switch (action.type) {
        case C.ADD_KEYWORD :
            return [
                ...state,
                capitalizedKeyword({}, action)
            ]
        case C.REMOVE_KEYWORD : 
            return state.filter(
                c => c.id !== action.id
            )
        default : 
            return state
    }
}

export const sort = (state = 'SORTED_BY_KEYWORD', action) => {
    switch (action.type) {
        case C.SORT_KEYWORDS :
            return action.sortBy
        default :
            return state
    }
}