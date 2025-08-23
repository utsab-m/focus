import ErrorBoundary from "../error/ErrorBoundary";
import { createTask } from "../../services/TaskService";

function addTask() {

}

const AddTask = () => {
    return (
        <button class="mt-2 w-35 h-12.5 bg-green-500 hover:bg-green-700" onClick={addTask}>
            Add Task
        </button>
    )
}

export default AddTask;