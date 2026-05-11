import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Signup.module.css";

export default function Singup() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.firstName || !form.lastName || !form.email || !form.password) {
            alert("Täytä kaikki kentät ennen lähetystä");
            return;
        }
        
        try {
            const res = await fetch("https://backend-production-d72d.up.railway.app/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: form.email,
                    passwordHash: form.password,
                    firstName: form.firstName,
                    lastName: form.lastName
                })
            });

            if (!res.ok) {
                const err = await res.json();
                alert(err.message);
                return;
            }

            alert("Registration successful!");
            navigate("/kirjaudu");

        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    };

    return (
        <main className={style.page}>
            <h1>Rekisteröidy asiakkaaksi</h1>
            <p>Rekisteröitymällä asiakkaaksemme, voit varata tuotteita suoraan kotisivuiltamme.</p>
            <div>
                <form className={style.form} onSubmit={handleSubmit}>
                    <input name="firstName" placeholder="Etunimi" onChange={handleChange} />
                    <input name="lastName" placeholder="Sukunimi" onChange={handleChange} />
                    <input name="email" placeholder="Sähköposti" onChange={handleChange} />
                    <input name="password" placeholder="Salasana" type="password" onChange={handleChange} />
                    <button className={style.cta} type="submit">Rekisteröidy</button>
                </form>
            </div>
        </main>
    )
}