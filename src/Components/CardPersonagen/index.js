import styles from "./CardPersonagen.module.css";
import iconeFavoritar from "./favoritar.png";


function CardPersonagen({ id, titulo, capa }) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
        </div>

    )
}

export default CardPersonagen;