import style from './Homepage.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {

    const navigate = useNavigate();

    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        setUser(localStorage.getItem("user"));
    }, []);

    const logout = async () => {
    await fetch("https://backend-production-d72d.up.railway.app/logout", {
        method: "POST",
        credentials: "include"
    });

    localStorage.removeItem("user");

    navigate("/kirjaudu", {
        state: { message: "Olet kirjautunut ulos" }
    });

};

    return (
    <>
        <header className={style.topbar}>
            <div className={style.brand}>LEMMIKKIPUOTI</div>
            <nav className={style.nav} aria-label="Päävalikko">
                <Link className={style.navLink} to="/">Etusivu</Link>
                <Link className={style.navLink} to="/meista">Meistä</Link>
                <Link className={style.navLink} to="/tuotteet">Tuotteet</Link>

                {user ? (
                    <button className={style.navButton} onClick={logout}>
                        Kirjaudu ulos
                    </button>
                ) : (
                    <Link className={style.navLink} to="/kirjaudu">
                        Kirjaudu sisään
                    </Link>
                )}
            </nav>
        </header>
    </>
    )
}