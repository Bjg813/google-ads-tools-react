import { removeKeyword, addKeyword, sortKeywords, print } from './actions/creators'
import storeFactory from './store/index'

// we import the storeFactory to create a store
const store = storeFactory(true)

store.dispatch( addKeyword('testing1') )
store.dispatch( addKeyword('testing2') )
store.dispatch( addKeyword('testing3') )


// Then we subscribed a listener to store and we save the current state inside of localStorage to be shown when the page is loaded
// This way we will have persistent state data in the browser
store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})

console.log( store.getState().capitalizedKeywords.length )
console.log( store.getState().sort )

console.log( 'Length of capitalized keywords array before ADD_KEYWORD action',
            store.getState().capitalizedKeywords.length
            )
// Subscribe listener to the store
store.subscribe(() =>
    console.log('capitalizedKeywords count:', store.getState().capitalizedKeywords.length)
    )

// Store Dispatcher
store.dispatch({
    type: 'ADD_KEYWORD',
    id: '45678',
    keyword: 'test keyword',
    timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)'
})

store.disptach( removeKeyword('1234') )
store.dispatch( addKeyword('testing') )

console.log(
    'Length of colors array after ADD_COLOR',
    store.getState().capitalizedKeywords.length
)

store.dispatch( sortKeywords('title') )
store.dispatch( addKeyword('test keyword') )

print(store.getState())