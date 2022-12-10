import React, { useState } from 'react'

const TodoItem = (props) => {
    const todoItemDict = props.todoItemDict
    const switchItemCompletionStatus = props.switchItemCompletionStatus

    return (
        <li>
            {todoItemDict.completed ? <s>{todoItemDict.title}</s> : <div>{todoItemDict.title}</div>}
            
            <button onClick={() => switchItemCompletionStatus(todoItemDict)}>
                Complete/Uncomplete Item
            </button>
        </li>
    )
}

export default TodoItem