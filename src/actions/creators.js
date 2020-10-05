import C from './constants'
import { v4 } from 'uuid'
import { compose } from 'redux'

export const removeKeyword = id => 
    ({
        type: C.REMOVE_KEYWORD,
        id
    })

export const addKeyword = keyword =>
    ({
        type: C.ADD_KEYWORD,
        id: v4(),
        keyword,
        timestamp: new Date().toString()
    })

export const sortKeywords = sortedBy =>
    (sortedBy === 'keyword') ?
    ({
        type: C.SORT_KEYWORDS,
        sortBy: 'SORTED_BY_KEYWORD'
    })  :
    ({
        type: C.SORT_KEYWORDS,
        sortBy: 'SORTED_BY_DATE'
    })

export const print = compose(
    list => console.log(list),
    titles => titles.join(', '),
    map => map(c=>c.title),
    keywords => keywords.map.bind(keywords),
    state => state.keywords
)