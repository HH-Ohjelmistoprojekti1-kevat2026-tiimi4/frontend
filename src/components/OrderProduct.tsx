import style from "./Signup.module.css";

export default function OrderProduct() {
    return (
        <main className={style.page}>
            <h1>Varaa tuote</h1>
            <p>* TUOTTEEN NIMI *</p>
            <div>
                <form className={style.form}>
                    <input placeholder="Etunimi" />
                    <input placeholder="Sukunimi" />
                    <input placeholder="Sähköposti" />
                </form>
                <button className={style.cta}>Varaa</button>
            </div>
        </main>
    )
}