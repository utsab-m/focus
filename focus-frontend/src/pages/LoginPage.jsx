import { useState } from "react"

const LoginPage = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    function validUser(user) {
        for (i = 0; i < user.length; i++) {
            if (
                !((user.charCodeAt(i) >= 48 && user.charCodeAt(i) <= 57) ||
                (user.charCodeAt(i) >= 65 && user.charCodeAt(i) <= 90) ||
                (user.charCodeAt(i) >= 97 && user.charCodeAt(i) <= 122))
            ) return false;
        }

        return true;
    }

    function validateForm() {
        let valid = true;
        const errorCopy = {... errors};

        let user = username.trim();

        if (validUser(user)) {

        } else {
            valid = false;
        }

        let pass = password.trim();

        if (validPass(pass)) {

        } else {
            valid = false;
        }

        return valid;
    }

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