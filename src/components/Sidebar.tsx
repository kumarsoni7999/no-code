import { useEffect, useState } from "react"
import { DATA_TYPES } from "../assets/Properties"
import '../assets/css/SideBarStyle.css'
import '../assets/css/Bootstrap.css'
import SideBarSkeleton from "../skeleton/SideBarSkeleton"

const BarItem = (props: any) => {

    const { item, active, setActive } = props

    const isActive = item?.id == active

    const changeActive = () => setActive(item?.id)

    return (
        <div className={`item ${isActive && 'active'}`} onClick={changeActive}>
            <h4 className={`m-1 p-2 ${!isActive && 'text-gray'}`}>{item?.name}</h4>
        </div>
    )
}

const SideBar = () => {
    const [active, setActive] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(false)
        }, 1500)
        return () => {
            clearTimeout(timeOut)
        }
    }, [])

    return (
        <div className="side-bar pt-1">
            {DATA_TYPES.length > 0 && DATA_TYPES.map((item: any) => (
                <>
                    {loading ? (
                        <SideBarSkeleton />
                    ) : (
                        <BarItem
                            item={item}
                            active={active}
                            setActive={setActive} />
                    )}
                </>
            ))}
        </div>
    )
}

export default SideBar