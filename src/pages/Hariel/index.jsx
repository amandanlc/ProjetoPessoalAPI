import { useEffect, useState } from 'react'
import Container from '../../components/Container'
import Card from '../../components/Card/Card.jsx'
import styles from '../../pages/Músicas/Musica.module.css'

function Hariel() {

    const [ songs, setSongs ] = useState([])

    useEffect(() => {
        const buscarMusicas = async () => {
            const response = await fetch('./APIMusicas.json')
            const data = await response.json()
            setSongs(data)
        }
        buscarMusicas()
    }, [])

    return (
        <>        
        <Container>
            <h1 className={styles.h1}>MC HARIEL</h1>
        <section className={styles.musicas}>

            {
                songs.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            songs.filter(song => song.artista === "MC HARIEL").map((data) => (
                                <Card
                                    key={data.id}
                                    img={data.img}
                                    titulo={data.titulo}
                                    artista={data.artista}
                                    album={data.album}
                                    ano_lancamento={data.ano_lancamento}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p className={styles.load}>Carregando Músicas...</p>
                )
            }
        </section>        
        </Container>
        </>
    )
}

export default Hariel