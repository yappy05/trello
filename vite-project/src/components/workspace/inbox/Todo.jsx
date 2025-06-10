import React from 'react';

const Todo = (props) => {
    return (
        <div className={'w-full p-2 bg-green-200 rounded-sm'}>
            {props.todo.title}
        </div>
    );
};

export default Todo;
