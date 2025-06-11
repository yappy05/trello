

const ADD_TODO = 'ADD_TODO'
const ADD_ALL_TODOS = 'ADD_ALL_TODOS'
const REMOVE_TODO = 'REMOVE_TODO'
const UPDATE_TODO = 'UPDATE_TODO'

const defaultState = {
    todos: [],
}

const todoReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case ADD_ALL_TODOS:
            return {...state,  todos: action.payload}
        case REMOVE_TODO:
            return {...state,  todos: state.todos.filter(todo => todo.id !== action.payload)}
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
                )
            };
        default:
            return state
    }
}

export const addTodoAction = (payload) => ({type: ADD_TODO, payload})
export const addAllTodosAction = (payload) => ({type: ADD_ALL_TODOS, payload})
export const removeTodoAction = (payload) => ({type: REMOVE_TODO, payload})
export const updateTodoAction = (payload) => ({type: UPDATE_TODO, payload})

export default todoReducer