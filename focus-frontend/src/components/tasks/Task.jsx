import { useState } from "react";
import { updateTask } from "../../services/TaskService";

const Task = ({task}) => {

    const [completed, setCompleted] = useState(task.completed);

    function toggleTaskCompleted() {
        setCompleted(!completed);
        task.completed = completed;
        console.log(updateTask(task.id, task));
    }

    return (
        <div className="mt-2 mb-1.25 rounded-lg bg-blue-400 text-center flex items-center h-40 w-150">
            <div className="bg-black h-full w-1.5 hover:bg-white"></div>
            <button className={`rounded-[50%] ${completed ? "bg-green-700 hover:bg-transparent" : "bg-transparent hover:bg-green-700"} ml-8`} onClick={toggleTaskCompleted}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/640px-Eo_circle_green_checkmark.svg.png" width="50" height="50"></img>
            </button>
            <div className="flex flex-col text-black text-left ml-8 ">
                <span className="text-lg font-semibold ">{task.name}</span>
                <span className="text-sm">{task.description}</span>
            </div>
        </div>
    )
};

export default Task;