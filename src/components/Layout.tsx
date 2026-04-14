import style from './Layout.module.css'
import Navbar from './Navbar'
import type {ReactNode} from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                {children}
            </div>
        </>
    )
}