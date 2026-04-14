import style from './Homepage.module.css'

export default function Homepage() {
    return (
        <>
            <div className={style.hero}>
                <img src="https://picsum.photos/600/400" alt="Placeholder" />
                <div className={style.heroHeader}>
                    <h1>Parhaat tuotteet</h1>
                    <h2 className={style.accent}>itseään kunnioittavalle koiralle</h2>
                </div>
            </div>
        </>
    )
}