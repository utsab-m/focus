import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Tasks from "../components/tasks/Tasks"

const MainPage = () => {
    return (
        <div class="flex flex-col h-screen">
            <Header />
            <Tasks />
            <Footer />
        </div>
    )
}

export default MainPage