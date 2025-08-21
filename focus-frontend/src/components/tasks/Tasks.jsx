import ListTasks from "./ListTasks"

const Tasks = () => {

    return (
        <div class="flex-grow text-center text-white dark:bg-gray-800">
            <span class="text-4xl">Tasks</span>
            <ListTasks />
        </div>
    )
}

export default Tasks