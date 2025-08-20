const Header = () => {
    return (
        <div class="flex flex-col  overflow-hidden dark:bg-gray-800">
            <header class="w-full text-center border-b border-grey p-4">
                <div class="inline text-white">focus.</div>
                <div class="sm:flex sm:items-safe sm:justify-between">
                    <span>About</span>
                    <span>Sign up</span>
                    <span>Log in</span>
                </div>
            </header>
        </div>
    )
}

export default Header