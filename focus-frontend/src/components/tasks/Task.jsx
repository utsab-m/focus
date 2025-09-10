import { useState } from "react";
import { updateTask } from "../../services/TaskService";

const Task = ({task}) => {

    const [completed, setCompleted] = useState(task.completed);

    function toggleTaskCompleted() {
        setCompleted(!task.completed);
        task.completed = completed;
        console.log(updateTask(task.id, task));
    }

    return (
        <div className="mt-1.5 mb-1.25 rounded-lg bg-blue-400 text-center flex items-center h-40 w-150">
            <div className="bg-black h-full w-1.5 hover:bg-white"></div>
            <button className={`rounded-[50%] ${completed ? "bg-green-700" : "bg-transparent hover:bg-green-700"}`} onClick={toggleTaskCompleted}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/640px-Eo_circle_green_checkmark.svg.png" width="50" height="50"></img>
            </button>
            <div className="flex flex-col">
                <span>{task.name}</span>
                <span>{task.description}</span>
            </div>
        </div>
    )
};

export default Task;