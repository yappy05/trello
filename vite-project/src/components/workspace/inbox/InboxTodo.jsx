import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addAllTodosAction, addTodoAction} from "../../../store/TodoReducer.jsx";

import Todo from "./Todo.jsx";

const InboxTodo = () => {

    const [isActive, setActive] = useState(false)
    const [title, setTitle] = useState()

    const dispatch = useDispatch()
    const todos = useSelector(state => state.inboxTodo.todos)

    useEffect(() => {
        getAllTodos()
    }, []);


    const api = "http://localhost:8080/api/inbox/todo"

    const onToggleActive = () => setActive(!isActive)

    const getAllTodos = async () => {
        try {
            const {data} = await axios.get(`${api}`)
            dispatch(addAllTodosAction(data))
            console.log(data)
            return data
        }catch (e){
            console.log('error: ', e)
        }
    }

    const addInboxTodo = async() => {
        try{
            const todo = {title: title}
            const {data} = await axios.post(`${api}`,todo)
            dispatch(addTodoAction(data))
            setTitle('')
            console.log(data)
        }catch (e){
            console.log('error: ', e)
        }
    }

    return (
        <div className={'flex flex-col justify-center p-2'}>
            {isActive? (
                <div className={'flex flex-col w-full rounded-sm '}>
                    <div className={'flex w-full'}>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder={'Enter title'} className={'flex w-full bg-red-200 rounded-t-sm p-2'}/>
                    </div>
                    <div className={'flex justify-center items-center gap-10 w-full bg-green-100 rounded-b-sm p-1'}>
                        <div className={'flex justify-center items-center p-1 px-5 bg-cyan-200 cursor-pointer'} onClick={addInboxTodo}>
                            <span>Добавить</span>
                        </div>
                        <div className={'cursor-pointer'} onClick={onToggleActive}>
                            <span>Отменить</span>
                        </div>
                    </div>

                </div>
            ) : (

                <div className={'flex items-center justify-start w-full rounded-sm p-2 bg-red-300 cursor-pointer'} onClick={onToggleActive}>
                    <span className={''}>add todo</span>
                </div>
            )
            }
            <div className={'flex flex-col justify-center items-center gap-2 mt-2'}>
                {todos.map(todo => <Todo todo={todo}/>)}
            </div>
        </div>
    );
};

export default InboxTodo;
