import AddTask from "./AddTask"
import ListTasks from "./ListTasks"

const Tasks = () => {

    return (
        <div class="flex-grow items-center text-center text-white dark:bg-gray-800">
            <span class="text-4xl">Tasks</span>
            <center>
                <ListTasks />
            </center>
            
            <AddTask />
        </div>
    )
}

export default Tasks