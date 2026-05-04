import style from './Homepage.module.css'


export default function About() {
    return (
        <main>
            <section className={style.heroFrame} aria-label="Meistä sivu">
                <div className={style.heroImagePanel}>
                    <img
                        className={style.heroImage}
                        src="https://picsum.photos/900/700"
                        alt="Vaihtuva esimerkkikuva"
                    />
                </div>

                <div className={style.heroTextPanel}>
                    <h1 className={style.heroTitle}>Meistä..</h1>
                    <p className={style.heroEyebrow}>Omistaja...</p>
                    <p className={style.heroEyebrow}>Y-tunnus...</p>
                    <p className={style.heroEyebrow}>Perustettu...</p>
                </div>
            </section>

        </main>
    )
}