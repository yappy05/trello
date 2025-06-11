import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import {useDispatch} from "react-redux";
import {removeTodoAction} from "../../../store/TodoReducer.jsx";
import axios from "axios";


const Todo = (props) => {

    const api = "http://localhost:8080/api/inbox/todo"
    const id = props.todo.id

    const dispatch = useDispatch()

    const removeTodo = async () => {
        dispatch(removeTodoAction(id))
        const {data} = await axios.delete(`${api}/delete/${id}`)
        console.log(data)
    }

    return (
        <div className={'w-full p-2 bg-green-200 rounded-sm relative'} draggable={"true"}>
            {props.todo.title}
            <TiDeleteOutline className={'absolute top-1 right-1'} size={30} onClick={removeTodo}/>
        </div>
    );
};

export default Todo;
