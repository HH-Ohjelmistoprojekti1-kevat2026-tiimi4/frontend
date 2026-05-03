import style from './Layout.module.css'
import Navbar from './Navbar'
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <Outlet />
            </div>
        </>
    )
}