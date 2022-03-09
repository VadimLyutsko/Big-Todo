import React from "react";
import TodoListHeader from "./TodoListHeader";
import TasksList from "./TasksList";
import ControlButtons from "./ControlButtons";
import AddTaskForm from "./AddTaskForm";
import { FilterValuesType } from "./App";

type TodoListPropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  filter: FilterValuesType;
  removeTask: (taskID: string, todoListID: string) => void;
  changeFilter: (filter: FilterValuesType, todoListID: string) => void;
  addTask: (title: string, todoListID: string) => void;
  changeTaskStatus: (
    taskID: string,
    isDone: boolean,
    todoListID: string,
  ) => void;
  removeTodoList: (todoListID: string) => void;
};

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

const TodoList = (props: TodoListPropsType) => {
  const addTask = (title: string) => props.addTask(title, props.id);
  const removeTask = (taskID: string) => props.removeTask(taskID, props.id);
  const changeFilter = (filter: FilterValuesType) =>
    props.changeFilter(filter, props.id);
  const changeTaskStatus = (taskID: string, isDone: boolean) =>
    props.changeTaskStatus(taskID, isDone, props.id);
  const removeTodoList = () => props.removeTodoList(props.id);

  return (
    <div>
      <TodoListHeader
        title={props.title}
        filter={props.filter}
        addTask={addTask}
        removeTodoList={removeTodoList}
      />
      <TasksList
        tasks={props.tasks}
        filter={props.filter}
        removeTask={removeTask}
        changeFilter={changeFilter}
        changeTaskStatus={changeTaskStatus}
      />
    </div>
  );
};

export default TodoList;
