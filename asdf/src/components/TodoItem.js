import React, { useState } from 'react'

const TodoItem = (props) => {
    const todoItemDict = props.todoItemDict
    const switchItemCompletionStatus = props.switchItemCompletionStatus

    return (
        <li>
            {todoItemDict.completed ? <div><s>{todoItemDict.title}</s></div> : <div>{todoItemDict.title}</div>}
            
            <button onClick={() => switchItemCompletionStatus(todoItemDict)}>
                Complete/Uncomplete Item
            </button>
        </li>
    )
}

export default TodoItem