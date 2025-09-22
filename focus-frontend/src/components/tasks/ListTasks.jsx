import { listTasks } from "../../services/TaskService";
import { useEffect, useState } from "react";
import { deleteTask } from "../../services/TaskService";
import AddTask from "./AddTask";
import Task from "./Task.jsx";

const ListTasks = () => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        getAllTasks();
    }, [])

    function getAllTasks() {
        listTasks().then((response) => {
            setTasks(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    function handleDeleteTask(taskId) {
        deleteTask(taskId).then(() => {
            getAllTasks();
        }).catch(error => {
            console.log(error);
        });
    }

    function handleAddTask() {
        getAllTasks();
    }

    return (
        <>
            <div id="tasksList">
                {tasks.map(task =>
                    <Task task={task} onDelete={handleDeleteTask} />
                )}
            </div>
            <AddTask onAdd={handleAddTask} />
        </>
        
    )
} 

export default ListTasks;