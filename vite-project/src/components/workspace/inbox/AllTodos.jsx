import React from 'react';
import Todo from "./Todo.jsx";

const AllTodos = () => {

    const todos = [{id: 1, title: 'todo1'},{id: 2, title: 'todo2'},{id: 3, title: 'todo3'}]

    return (
        <div className={'flex flex-col gap-2 p-2'}>
            {todos.map(todo => <Todo todo={todo}/>)}
        </div>
    );
};

export default AllTodos;
