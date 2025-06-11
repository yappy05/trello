import React, {useState} from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import {useDispatch} from "react-redux";
import {removeTodoAction} from "../../../store/TodoReducer.jsx";
import axios from "axios";
import Modal from "./Modal.jsx";


const Todo = (props) => {

    const api = "http://localhost:8080/api/inbox/todo"
    const id = props.todo.id

    const dispatch = useDispatch()

    const removeTodo = async () => {
        dispatch(removeTodoAction(id))
        const {data} = await axios.delete(`${api}/delete/${id}`)
        console.log(data)
    }

    const [isModelOpen, setModelOpen] = useState(false)

    const toggleModelOpen = () => setModelOpen(!isModelOpen)

    return (
        <div className={'w-full'}>
            <div className={'w-full p-2 bg-green-200 rounded-sm relative'} draggable={"true"} onClick={toggleModelOpen}>
                {props.todo.title}
                <TiDeleteOutline className={'absolute top-1 right-1'} size={30} onClick={removeTodo}/>
            </div>
            {isModelOpen && <Modal todo={props.todo} onCloseModal={toggleModelOpen}/>}
        </div>

    );
};

export default Todo;
