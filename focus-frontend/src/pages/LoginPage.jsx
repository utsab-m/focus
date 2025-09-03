import { useState } from "react"

const LoginPage = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    return (
        <div class="flex-col flex h-screen justify-items-center items-center overflow-hidden dark:bg-gray-900">
            <div class="text-white h-screen bg-dark-gray-900">
                <form>
                    <label for="username">Username: </label>
                    <input class="bg-white text-black" type="text" id="username" name="username" required></input><br></br>

                    <label for="password">Password: </label>
                    <input class="bg-white text-black" type="password" id="password" name="password" required></input>
                </form>
                
            </div>
        </div>
    )
}

export default LoginPage