import {useEffect, useState} from "react";
import type {Product} from "../types/api.ts";
import style from "./ProductsPage.module.css";

export default function ProductsPage () {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://backend-production-d72d.up.railway.app/api/products")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch products");
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.error(err); //Tähän voisi heittää jonkin paremman visuaalisen errrorin tms
            });
    }, []);

    return (
        <main className={style.page}>
            <h1>Products</h1>

            <button className={style.cta} type="button">
                Nappi
            </button>

            <div className={style.grid}>
                {products.map((product) => (
                    <div key={product.id} className={style.card}>
                        <img
                            className={style.productImage}
                            src="https://picsum.photos/50/70"
                            alt="Vaihtuva esimerkkikuva"
                        />
                        <span className={style.type}>{product.type} - {product.manufacturer.name}</span>
                        <div className={style.row}>
                            <h3>{product.name}</h3>
                            <p className={style.price}>{product.price.toFixed(2)} €</p>
                        </div>
                        <p className={style.metaText}>{product.color}, {product.size}</p>
                        <button className={style.cta}>
                            Varaa
                        </button>
                    </div>
                ))}
            </div>
        </main>
    )
}