import { listTasks } from "../../services/TaskService";
import { useEffect, useState } from "react";
import AddTask from "./AddTask";

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
            <div>
                {tasks.map(task =>
                    <div>
                        {task.id};
                    </div>
                )}
            </div>
            <div>
                <AddTask />
            </div>
        </div>
    )
} 

export default ListTasks;