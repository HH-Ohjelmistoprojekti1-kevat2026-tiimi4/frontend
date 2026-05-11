import { useEffect, useState } from "react";
import { type Manufacturer, type Product } from "../types/api.ts";
import style from "./ProductsPage.module.css";
import { Link } from 'react-router-dom'

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);

    const fetchProductsByManufacturer = (id: number) => {
        fetch(`https://backend-production-d72d.up.railway.app/api/products/manufacturer/${id}`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }

    const fetchAllProducts = () => {
        fetch("https://backend-production-d72d.up.railway.app/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    };

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

    useEffect(() => {
        fetch("https://backend-production-d72d.up.railway.app/api/manufacturers")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch manufacturers");
                return res.json();
            })
            .then((data) => {
                setManufacturers(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <main className={style.page}>
            <h1>Tuotteet</h1>

            <div className={style.buttonContainer}>
                <button className={style.cta} type="button" onClick={fetchAllProducts}>
                    Kaikki tuotteet
                </button>
                {manufacturers.map((manufacturer) => (
                    <button className={style.cta} type="button"
                        key={manufacturer.manufacturerId}
                        onClick={() => fetchProductsByManufacturer(manufacturer.manufacturerId)}>
                        {manufacturer.name}
                    </button>
                ))}
            </div>

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
                        <Link className={style.cta} to="/varaa">
                            Varaa
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}