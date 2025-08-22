import ErrorBoundary from "../error/ErrorBoundary";
import { createTask } from "../../services/TaskService";

const AddTask = () => {
    return (
        <button onClick={createTask}>
            Add Task
        </button>
    )
}

export default AddTask;