import styles from "./Descricao.module.css";

function Descricao() {
    return(
        <>
       <div className={styles.container}>
        <p>
             Conhecido como Super Onze no Brasil, é uma série de anime e mangá baseado na serie de jogos de 
             mesmo nome da Level-5.
        </p>
        <p>
            Super Onze conta a história de Endou Mamoru, um goleiro muito talentoso, e neto de um dos maiores goleiros do Japão, que morreu antes de ele nascer. 
            Mamoru é fanático por futebol, e procura seguir passo seu avô falecido (seu avô foi o ex-treinador do Colégio Kaminari) onde ele joga atualmente.
        </p>
        </div>
        </>
    )
}

export default Descricao;