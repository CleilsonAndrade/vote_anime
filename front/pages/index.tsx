import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Template from "../components/templates";
import { Anime } from "../types/anime";
import styles from './../styles/Home.module.css';

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 3600
    }
}

export default function Home() {

    const router = useRouter();

    const [anime, setAnime] = useState<null | Anime>(null);
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");
    const [animes, setAnimes] = useState<Anime[]>([])

    useEffect(() => {
        Axios.get('http://localhost:3001/animes')
            .then((response) => {
                setAnimes(response.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }, [])

    const votar = () => {
        Axios.post('http://localhost:3001/vote', { email, animeID: anime?.id })
            .then((response) => {
                router.push('/resultado')
            })
            .catch((erro) => {
                setErro('Não foi possível registrar seu voto.')
            })
    }

    return (
        <Template>
            <h1>Bem vindo a votação de melhores animes de 2023</h1>
            <p>para votar apenas é preciso selecionar seu anime e informar seu email!</p>

            <div id={styles.animes}>

                {/* <!-- ANIME 1 --> */}
                {animes.map(anime => (
                    <div key={anime.id} className={styles.anime}>
                        <img src={anime.url} />
                        <h1>{anime.titulo}</h1>
                        <button onClick={() => setAnime(anime)}>Votar</button>
                    </div>
                ))}
            </div>

            {/* <!-- MODAL PARA CONFIRMAR VOTO --> */}
            {anime && <div id={styles.votar}>
                <div id={styles.voto_container}>
                    <h1>Você votou em: <br /><b>{anime.titulo}</b></h1>
                    <p>Informe o seu email para confirmar seu voto: </p>
                    <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                    {erro && <p id={styles.voto_erro}>{erro}</p>}
                    <div id={styles.voto_opc}>
                        <button id="btn_votar" onClick={votar}>Votar</button>
                        <button id="btn_cancelar" onClick={() => setAnime(null)}>Cancelar</button>
                    </div>
                </div>
            </div>}
        </Template>
    )
}
