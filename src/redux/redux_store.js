import { createStore, combineReducers } from "redux"
import content_reduce from "./content_reducer"
import users_reduce from "./users_reducer"

let redusers = combineReducers({
	content: content_reduce,
	users: users_reduce
})

let store = createStore(redusers)

export default store
