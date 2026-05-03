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
                    <p className={style.heroEyebrow}>Jotain</p>
                    <h1 className={style.heroTitle}>TEKSTIÄ TÄHÄN</h1>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.copyBlock}>
                    <p>
                        Jollain serif fontilla vaikka tekstiä tähän esim. Lorem Ipsum ja niin edelleen.
                        <br />
                        Tässä vähän lisää tekstiä.
                    </p>

                    <p>En tiedä tuleeko paljon tällaista.</p>
                </div>

                <Link className={style.cta} to="/tuotteet">
                    VALIKOIMAAN
                </Link>
            </section>

            <footer className={style.footer}>
                <p>Tänne tulee esim joku footer</p>
                <p>(c) Lemmikkipuoti 2025</p>
            </footer>
        </main>
    )
}