import Cards from "Components/Cards";
import Descricao from "Components/Descricao";
import videos from "json/db.json"
import styles from "./Inicio.module.css"

function Inicio() {
    
    return(
        <>
       <Descricao />
       <a href="https://www.youtube.com/@SuperOnzeOficialGalaxy/playlists">
       <section className={styles.container}>
                {videos.map((video) => {
                    return <Cards {...video} key={video.id} />
                })}
        </section>
        </a>
      
       </>
    )
}
export default Inicio;