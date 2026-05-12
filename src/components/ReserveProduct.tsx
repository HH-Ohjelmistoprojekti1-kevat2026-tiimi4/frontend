import style from "./Signup.module.css";
import { useLocation } from "react-router-dom";

export default function ReserveProduct() {

    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <p>Tuotetta ei löytynyt.</p>;
    }

    const user = localStorage.getItem("user");

    return (
        <main className={style.page}>
            <h1>Varaa tuote</h1>
            <div className={style.infoSection}>
                <h3>Tuotteen tiedot</h3>
                <div className={style.infoBox}>
                    <p>Nimi: {product.name}</p>
                    <p>Väri: {product.color}</p>
                    <p>Koko: {product.size}</p>
                    <p>Hinta: {product.price}</p>
                    <p>Valmistaja: {product.manufacturer.name}</p>
                </div>
            </div>
            <div className={style.infoSection}>
                <h3>Varaajan tiedot</h3>
                <div className={style.infoBox}>
                    <p>Sähköposti: {user}</p>
                </div>
            </div>
            <button className={style.cta}>Vahvista varaus</button>
        </main>
    )
}