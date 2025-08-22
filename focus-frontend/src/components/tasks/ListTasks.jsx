import { listTasks } from "../../services/TaskService";
import { useEffect, useState } from "react";
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

    return (
        <div>
            {tasks.map(task =>
                <Task task={task} />
            )}
        </div>
    )
} 

export default ListTasks;