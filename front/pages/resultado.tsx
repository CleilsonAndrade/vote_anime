import Axios from "axios";
import { useEffect, useState } from "react";
import Template from "../components/templates";
import { Anime } from "../types/anime";
import styles from './../styles/Resultado.module.css';

type Vote = {
    id: number,
    animeID: number,
    email: string,
    anime: Anime
}

export default function Resultado() {

    const [votes, setVotes] = useState<Vote[]>([])
    const [rank, setRank] = useState<any[]>([])

    useEffect(() => {
        Axios.get('http://localhost:3001/vote')
            .then((response) => {
                setVotes(response.data)
            })

        Axios.get('http://localhost:3001/rank')
            .then((response) => {
                setRank(response.data)
            })
    }, [])

    return (
        <Template>
            <h1>Obrigado pelo seu voto!</h1>

            {/* <!-- ANIMES MAIS VOTADOS --> */}
            <h2>Animes mais votados</h2>
            <div id={styles.animes}>
                {/* <!-- ANIME 1 --> */}
                {
                    rank[0] &&
                    <div className={styles.anime}>
                        <img src={rank[0].url} />
                        <h1 className={styles.gold}>1º</h1>
                        <h2>{rank[0].titulo} ({rank[0].votos})</h2>
                    </div>
                }

                {/* <!-- ANIME 2 --> */}
                {
                    rank[1] &&
                    <div className={styles.anime}>
                        <img src={rank[1].url} />
                        <h1 className={styles.gold}>1º</h1>
                        <h2>{rank[1].titulo} ({rank[1].votos})</h2>
                    </div>
                }

                {/* <!-- ANIME 3 --> */}
                {
                    rank[2] &&
                    <div className={styles.anime}>
                        <img src={rank[2].url} />
                        <h1 className={styles.gold}>1º</h1>
                        <h2>{rank[2].titulo} ({rank[2].votos})</h2>
                    </div>
                }
            </div>

            {/* <!-- ULTIMOS VOTOS --> */}
            <h2>Últimos Votos</h2>
            <div id={styles.votos}>
                <ul>
                    {votes.map(vote => <li key={vote.id}>{vote.email} - {vote.anime.titulo}</li>)}
                </ul>
            </div>
        </Template>
    )
}