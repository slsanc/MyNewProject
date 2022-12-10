import React, { useState } from 'react';

const TodoForm = (props) => {
    const [todoInput, setTodoInput] = useState({title:''})
    const addTodoItem = props.addTodoItem;

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoItem(e.target.elements.newTodoTitle.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="newTodoTitle" placeholder="Enter a to do item."/>
            <button type="submit">Add a Todo</button>
        </form>
    );
}

export default TodoForm;