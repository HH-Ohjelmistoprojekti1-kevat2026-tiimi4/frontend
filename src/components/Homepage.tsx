import { Link } from 'react-router-dom'
import style from './Homepage.module.css'

export default function Homepage() {
    return (
        <main className={style.page}>

            <section className={style.heroFrame} aria-label="Etusivun esittely">
                <div className={style.heroImagePanel}>
                    <img
                        className={style.heroImage}
                        src="https://picsum.photos/900/700"
                        alt="Vaihtuva esimerkkikuva"
                    />
                </div>

                <div className={style.heroTextPanel}>
                    <p className={style.heroEyebrow}>Tervetuloa</p>
                    <h2 className={style.heroTitle}>LEMMIKKIPUOTIIN</h2>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.copyBlock}>
                    <p>
                        Lemmikkipuodista löydät tämän hetken trendikkäimmät koiranvaatteen, herkullisimmat koiranherkut ja hauskimmat koiranlelut!
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