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
            <h2>Tuotteen tiedot</h2>
            <p>Nimi: {product.name}</p>
            <p>Väri: {product.color}</p>
            <p>Koko: {product.size}</p>
            <p>Hinta: {product.price}</p>
            <p>Valmistaja: {product.manufacturer.name}</p>
            <h2>Varaajan tiedot</h2>
            <p>Sähköposti: {user}</p>
            <button className={style.cta}>Vahvista varaus</button>
        </main>
    )
}