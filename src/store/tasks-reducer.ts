import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {AddTodoListAT} from "./todolists-reducer";


type removeTasksActionType = {
    type: "REMOVE-TASK"
    taskID: string
    todolistID: string
}
type addTaskACActionType = {
    type: "ADD-TASK"
    title: string
    todolistID: string
}

type changeTaskStatusActionType = {
    type: "CHANGE_STATUS"
    taskID: string
    todolistID: string
    isDone: boolean
}

type changeTaskTitleActionType = {
    type: "CHANGE_TITLE"
    taskID: string
    newTitle: string
    todolistID: string
}


export type ActionType =
    removeTasksActionType
    | addTaskACActionType
    | changeTaskStatusActionType
    | changeTaskTitleActionType
    | AddTodoListAT;

export const tasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {

    switch (action.type) {
        case "REMOVE-TASK": {
            return {
                ...state,
                [action.todolistID]: state[action.todolistID]
                    .filter(task => task.id !== action.taskID)
            }
        }
        case "ADD-TASK":
            return {
                ...state,
                [action.todolistID]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistID]]
            }
        case "CHANGE_STATUS":
            return {
                ...state,
                [action.todolistID]: state[action.todolistID].map(task => task.id === action.taskID ? {
                    ...task,
                    isDone: action.isDone
                } : task)
            }
        case "CHANGE_TITLE":
            return {
                ...state,
                [action.todolistID]: state[action.todolistID].map(task => task.id === action.taskID ? {
                    ...task,
                    title: action.newTitle
                } : task)
            }
        case "ADD-TODOLIST":
            return {
                ...state,
                [action.todolistId]: []
    }
default:
    throw  new Error("Some error")
}
}

//ActionCreators:
export const removeTaskAC = (taskID: string, todolistID: string): removeTasksActionType => {
    return {type: "REMOVE-TASK", taskID, todolistID}
}

export const addTaskAC = (title: string, todolistID: string): addTaskACActionType => {
    return {type: "ADD-TASK", title, todolistID}
}

export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistID: string): changeTaskStatusActionType => {
    return {type: "CHANGE_STATUS", taskID, todolistID, isDone}
}

export const changeTaskTitleAC = (taskID: string, newTitle: string, todolistID: string): changeTaskTitleActionType => {
    return {type: "CHANGE_TITLE", taskID, newTitle, todolistID}
}
