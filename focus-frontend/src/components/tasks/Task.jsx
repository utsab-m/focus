const Task = ({task}) => {
    return (
        <div class="mt-1.5 mb-1.25 sm:flex sm:items-center sm:justify-between rounded bg-blue-400 text-center justify-center flex h-15 w-150">
            <button class="hover:bg-green-700">
                <img src="https://cdn-icons-png.flaticon.com/512/5974/5974759.png" width="50" height="50"></img>
            </button>
            <span>{task.name}</span>
            
            <span>{task.description}</span>
        </div>
    )
};

export default Task;