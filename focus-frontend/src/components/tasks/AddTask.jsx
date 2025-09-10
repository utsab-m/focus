import ErrorBoundary from "../error/ErrorBoundary";
import { createTask } from "../../services/TaskService";
import { useState } from "react";

var showAddTaskMenu = false;

function toggleAddTaskMenu() {
    showAddTaskMenu = !showAddTaskMenu;
    if (showAddTaskMenu) addTaskMenu();
    console.log(showAddTaskMenu)
}

function addTaskMenu() {
    return (
        <div className="bg-blue-400">
            Add Task
        </div>
    )
}

const AddTask = () => {

    

    return (
        <button className="mt-2 w-35 h-12.5 bg-green-500 hover:bg-green-700 rounded-lg" onClick={toggleAddTaskMenu}>
            Add Task
        </button>
    )
}

export default AddTask;