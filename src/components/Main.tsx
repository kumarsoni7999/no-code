import Content from "./Content"
import SideBar from "./Sidebar"
import '../assets/css/MainStyle.css'

const Main = () => {
    return(
        <div className="container">
            <SideBar />
            <Content />
        </div>
    )
}

export default Main