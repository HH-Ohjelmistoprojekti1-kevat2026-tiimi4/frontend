import style from './Homepage.module.css'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <header className={style.topbar}>
                <div className={style.brand}>LEMMIKKIPUOTI</div>
                <nav className={style.nav} aria-label="Päävalikko">
                    <Link className={style.navLink} to="/">Etusivu</Link>
                    <Link className={style.navLink} to="/meista">Meistä</Link>
                    <Link className={style.navLink} to="/tuotteet">Tuotteet</Link>
                </nav>
            </header>
        </>
    )
}