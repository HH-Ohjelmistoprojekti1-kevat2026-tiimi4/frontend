import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './Homepage.module.css'

export default function Homepage() {
    const [dogImage, setDogImage] = useState<string>('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setDogImage(data.message))
    }, [])

    return (
        <main className={style.page}>

            <section className={style.heroFrame} aria-label="Etusivun esittely">
                <div className={style.heroImagePanel}>
                    <img
                        className={style.heroImage}
                        src={dogImage}
                        alt="Vaihtuva esimerkkikuva"
                    />
                </div>

                <div className={style.heroTextPanel}>
                    <p className={style.heroEyebrow}>Tervetuloa</p>
                    <h1 className={style.heroTitle}>LEMMIKKIPUOTIIN</h1>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.copyBlock}>
                    <p>
                        Lemmikkipuodista löydät tämän hetken cooleimmat koiranvaatteet, herkullisimmat koiranherkut ja kivoimmat koiranlelut!
                        <br />
                        Tervetuloa shoppailemaan!
                    </p>

                    <p>Hau hau!</p>
                </div>

                <Link className={style.cta} to="/tuotteet">
                    VALIKOIMAAN
                </Link>
            </section>

            <footer className={style.footer}>
                <p>(c) Lemmikkipuoti 2025</p>
            </footer>
        </main>
    )
}