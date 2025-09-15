import { createTask } from "../../services/TaskService";
import { useState } from "react";

const AddTask = () => {

    const [showAddTaskMenu, setShowAddTaskMenu] = useState(false);
    const [completed, setCompleted] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    function toggleAddTaskMenu() {
        setShowAddTaskMenu(!showAddTaskMenu);
        console.log(showAddTaskMenu)
    }

    return (
        <>
            <button className="mb-3 mt-2 w-35 h-12.5 bg-green-500 hover:bg-green-700 rounded-lg" onClick={toggleAddTaskMenu}>
                Add Task
            </button>
            {showAddTaskMenu && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-256">
                        <h2 className="text-2xl text-white mb-4">Add New Task</h2>
                        <form>
                            <label for="name">Name:</label>
                            <input className="ml-1 border-blue-500 border-4 p-2" type="text" id="name" name="name"></input>
                        </form>
                        <div className="flex justify-center mt-4 space-x-4">
                            <button className="bg-green-500 p-3 rounded-lg">Cancel</button>
                            <button className="bg-green-500 p-3 rounded-lg">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </>
        
    )
}

export default AddTask;