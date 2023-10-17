import styles from "./Cards.module.css";

function Cards({ id, titulo, capa}) {
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
        </div>
    )
}

export default Cards;