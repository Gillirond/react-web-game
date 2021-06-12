import {combineReducers} from "redux";

import questionsReducer from "./questions";


const rootReducer = combineReducers({
    questions: questionsReducer
})

export default rootReducer;