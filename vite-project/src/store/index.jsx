import {combineReducers} from "redux";

import InboxTodoReducer from "./TodoReducer.jsx";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    inboxTodo: InboxTodoReducer
})

export const store = configureStore({
    reducer: rootReducer
})
