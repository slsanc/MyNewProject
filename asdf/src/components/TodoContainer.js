import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

const TodoContainer = (props) => {
    const [todos, setTodos] = useState([]);

    /**
     * Create a new Todo.
     * 
     * @param {string} title
     */
    const addTodoItem = (inputText) => {
        const newTodo = {title: inputText, completed: false, id: uuidv4()};
        setTodos([...todos, newTodo]);
    } 

    const switchItemCompletionStatus = (todoItemDict) => {
        console.log(todoItemDict);
        let updatedTodos = [];

        for ( var i = 0 ; i < todos.length ; i++ ) {
            let todo = todos[i];
            
            if (todo.id === todoItemDict.id) {
                todo.completed = !todo.completed;
            }

            updatedTodos.push(todo);
        }

        setTodos(updatedTodos);
    }

    /**
     * 
     * @returns 
     */
    const renderTodos = () => {
        let renderedTodos = []

        for (var i = 0 ; i < todos.length ; i++) {
            renderedTodos.push(
                <TodoItem todoItemDict={todos[i]} switchItemCompletionStatus={switchItemCompletionStatus}/>
            )
        }

        return (
            <ul>{renderedTodos}</ul>
        )
    }


    return (
        <div>
            <TodoForm addTodoItem={addTodoItem}/>
            {renderTodos()}
        </div>
    );
}

export default TodoContainer;