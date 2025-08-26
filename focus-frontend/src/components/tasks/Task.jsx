import { useState } from "react";

const Task = ({task}) => {

    const [completed, useCompleted] = useState(task.completed);

    function toggleTaskCompleted() {
        // completed = !completed;
        // if (completed) {
            
        // }
        alert("Completed")
    }

    return (
        <div class="mt-1.5 mb-1.25 rounded-lg sm:flex sm:items-center sm:justify-between bg-blue-400 text-center justify-center flex h-15 w-150">
            <button class="rounded-[50%] hover:bg-green-700" onClick={toggleTaskCompleted}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/640px-Eo_circle_green_checkmark.svg.png" width="50" height="50"></img>
            </button>
            <span>{task.name}</span>
            
            <span>{task.description}</span>
        </div>
    )
};

export default Task;