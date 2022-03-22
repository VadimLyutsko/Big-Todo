import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, ButtonGroup, IconButton, List} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string

    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    changeTaskTitle: (id: string, title: string, todolistId: string) => void
    changeTodolistTitle: (title: string, todolistId: string) => void
}

export function Todolist(props: PropsType) {

    const removeTodolist = () => props.removeTodolist(props.id);
    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
    const addTaskToTodolist = (newTitle: string) => props.addTask(newTitle, props.id);
    const changeTodolistTitle = (title: string) => props.changeTodolistTitle(title, props.id);

    return <div
        style={{
            display: "flax",
            textAlign: "center",
            width: "fit-content"
        }}>
        <h3>
            <EditableSpan title={props.title} changeTitle={changeTodolistTitle}/>
            <IconButton
                onClick={removeTodolist}
            >
                <RemoveCircleIcon/>
            </IconButton>


        </h3>
        <AddItemForm addItem={addTaskToTodolist}/>
        <List>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }
                    const changeTaskTitle = (title: string) => props.changeTaskTitle(t.id, title, props.id)
                    return (
                        <li key={t.id} className={t.isDone ? "is-done" : ""}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "1px solid darkgray"
                            }

                            }
                        >
                            <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                            <EditableSpan
                                title={t.title}
                                changeTitle={changeTaskTitle}/>
                            {/*<span>{t.title}</span>*/}
                            {/*<button onClick={onClickHandler}>x</button>*/}
                            <IconButton
                                onClick={onClickHandler}
                                color={"primary"}
                            >
                                <HighlightOffIcon
                                    fontSize={"inherit"}/>
                            </IconButton>
                        </li>)
                })
            }
        </List>

        <div style={{display: "flex", justifyContent: "space-between"}}>
            <Button
                size={"small"}
                variant={"contained"}
                color={props.filter === "all" ? "secondary" : "primary"}
                onClick={onAllClickHandler}>All
            </Button>
            <Button
                size={"small"}
                variant={"contained"}
                color={props.filter === "active" ? "secondary" : "primary"}
                onClick={onActiveClickHandler}>Active
            </Button>
            <Button
                size={"small"}
                variant={"contained"}
                color={props.filter === "completed" ? "secondary" : "primary"}
                onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
}


