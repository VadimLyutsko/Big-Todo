import React from 'react';
import AddTaskForm from "./AddTaskForm";
import {FilterValuesType} from "./App";

type TodoListHeaderPropsType = {
    title: string
    filter: FilterValuesType
    addTask: (title: string) => void
    removeTodoList:()=>void
}

const TodoListHeader = (props: TodoListHeaderPropsType) => {
    let text = "all"
    switch (props.filter) {
        case "active":
            text = "act"
            break
        case "completed":
            text = "comp"
            break
    }

    return (
        <>
            <h3>
                {props.title}
                <button onClick={props.removeTodoList}>X</button>
                <div className={"filter-header"}>{text}</div></h3>
            <AddTaskForm addTask={props.addTask}/>
        </>
    )
};

export default TodoListHeader;