import { useState } from "react";
import { updateTask } from "../../services/TaskService";

const Task = ({task}) => {

    const [completed, setCompleted] = useState(task.completed);

    function toggleTaskCompleted() {
        setCompleted(!task.completed);
        updateTask(task.id, task);
    }

    return (
        <div class="mt-1.5 mb-1.25 rounded-lg bg-blue-400 text-center flex items-center h-40 w-150">
            <div class="bg-black h-full w-1.5 hover:bg-white"></div>
            <button class={`rounded-[50%] ${completed ? "bg-green-700" : "hover:bg-green-700"}`} onClick={toggleTaskCompleted}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/640px-Eo_circle_green_checkmark.svg.png" width="50" height="50"></img>
            </button>
            <div class="flex flex-col">
                <span>{task.name}</span>
                <span>{task.description}</span>
            </div>
        </div>
    )
};

export default Task;