const Header = () => {
    return (
        <div className="flex flex-col  overflow-hidden dark:bg-gray-900">
            <header className="w-full text-center border-b border-grey p-4">
                <a href="/" className="inline text-3xl text-white">Focus</a>
                <div className="sm:flex sm:items-safe sm:justify-between text-amber-50">
                    <a href="/about">About</a>
                    <a href="/signup">Sign up</a>
                    <a href="/login">Log in</a>
                </div>
            </header>
        </div>
    )
}

export default Header