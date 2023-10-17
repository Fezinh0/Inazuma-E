import styles from "./Personagens.module.css";
import CardPersonagen from "Components/CardPersonagen";
import vvideos from "json/dbb.json"


function Personagens() {
    return(
    <>
    <section className={styles.container}>
            {vvideos.map((video) => {
                return <CardPersonagen {...video} key={video.id}/>
            })}
    </section>

    </>
    )
}

export default Personagens;