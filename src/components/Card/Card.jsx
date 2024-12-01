import styles from '../../components/Card/Card.module.css'

// eslint-disable-next-line react/prop-types
function Card({ img, titulo, artista, album, ano_lancamento}) {
    return (
        <section className={styles.card}>
                <img src={img} alt="" />
            <div>
                <h1 className={styles.titulo}>{titulo}</h1> 
                <p className={styles.s}>Artista: {artista}</p>
                <p className={styles.s}>Álbum: {album}</p>
                <p className={styles.s}>Ano: {ano_lancamento}</p>
            </div>

        </section>
    )
}

export default Card
