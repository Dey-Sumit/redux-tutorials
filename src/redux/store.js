import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notes_reducer from './reducers/notes.reducer'


const middleware = [thunk]
// INIT method pass the initial state to the reducer and reducers returns this state 
const store = createStore(notes_reducer, composeWithDevTools(applyMiddleware(...middleware)))
export default store