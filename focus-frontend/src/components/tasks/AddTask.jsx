import { createTask } from "../../services/TaskService";
import { useState } from "react";

const AddTask = () => {

    const [showAddTaskMenu, setShowAddTaskMenu] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: ""
    });
    const [errors, setErrors] = useState({});

    function toggleAddTaskMenu() {
        setShowAddTaskMenu(!showAddTaskMenu);
        console.log(showAddTaskMenu)

        if (showAddTaskMenu) {
            setFormData({
                name: "",
                description: ""
            });
            setErrors({});
        }
    }

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Description is required";
        }

        return Object.keys(newErrors).length === 0;
    }

    const handleInputChange = (e) => {
        console.log(e);

        const {name, value} = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name] && value.trim()) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            createTask(formData).then((response) => {
                console.log("Task created: ", response.data);
                console.log("Form data: ", formData);
                setFormData({name: '', description: ''});
                setErrors({});
                setShowAddTaskMenu(false);

                onTaskAdded();
            }).catch(error => {
                console.log(error);
            });
        } else {
            setErrors(newErrors);
            return;
        }
    };

    return (
        <>
            <button className="mb-3 mt-2 w-35 h-12.5 bg-green-500 hover:bg-green-700 rounded-lg" onClick={toggleAddTaskMenu}>
                Add Task
            </button>
            {showAddTaskMenu && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-256">
                        <h2 className="text-2xl text-white mb-4">Add New Task</h2>
                        <form onSubmit={handleSubmit} >
                            <label htmlFor="name">Name:</label>
                            <input className="ml-1 border-blue-500 border-4 p-2" type="text" id="name" name="name" onChange={handleInputChange}></input>
                            <br></br>
                            <label htmlFor="description">Description:</label>
                            <input className="ml-1 mt-2 border-blue-500 border-4 p-2" type="text" id="description" name="description" onChange={handleInputChange}></input>
                        </form>
                        <div className="flex justify-center mt-4 space-x-4">
                            <button className="bg-green-500 hover:bg-green-700 p-3 rounded-lg" onClick={toggleAddTaskMenu}>Cancel</button>
                            <button className="bg-green-500 hover:bg-green-700 p-3 rounded-lg" onClick={handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </>
        
    )
}

export default AddTask;