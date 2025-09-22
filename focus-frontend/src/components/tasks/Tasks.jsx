import AddTask from "./AddTask"
import ListTasks from "./ListTasks"

const Tasks = () => {

    return (
        <div className="flex-grow h-screen items-center text-center text-white dark:bg-gray-800">
            <span className="text-4xl">Tasks</span>
            <center>
                <ListTasks />
            </center>
        </div>
    )
}

export default Tasks