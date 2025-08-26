const Header = () => {
    return (
        <div class="flex flex-col  overflow-hidden dark:bg-gray-900">
            <header class="w-full text-center border-b border-grey p-4">
                <div class="inline text-3xl text-white">Focus</div>
                <div class="sm:flex sm:items-safe sm:justify-between text-amber-50">
                    <a href="/about">About</a>
                    <a href="/signup">Sign up</a>
                    <a href="/login">Log in</a>
                </div>
            </header>
        </div>
    )
}

export default Header