import handleCart from './handleCart'
import user from './user'
import { combineReducers } from "redux";

const appReducer = combineReducers({
    handleCart,
    user
})

const rootReducers = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action)
}
export default rootReducers