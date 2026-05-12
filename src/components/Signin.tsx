import style from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Signin() {

    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message;

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("https://backend-production-d72d.up.railway.app/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        if (res.ok) {
            localStorage.setItem("user", form.email);
            navigate("/");
        } else {
            alert("Kirjautuminen epäonnistui. Yritä uudelleen.");
        }
    };

    return (
        <main className={style.page}>
            <h1>Kirjaudu sisään</h1>
            {message && (
                <p className={style.logoutMessage}>
                    {message}
                </p>
            )}
            <div>
                <form className={style.form} onSubmit={handleLogin}>
                    <input
                        name="email"
                        placeholder="Sähköposti"
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Salasana"
                        onChange={handleChange}
                    />
                    <button className={style.cta} type="submit">Kirjaudu sisään</button>
                </form>
                <p>Ei vielä tunnusta? <Link to="/rekisteroidy">Rekisteröidy tästä.</Link></p>
            </div>
        </main>
    )
}