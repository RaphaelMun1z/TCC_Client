import styles from './SectionCard.module.css'

function SectionCard(props) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={props.image} alt="Imagem" />
            </div>   
            <div className={styles.desc}>
                <h3>{props.section} {props.icon} </h3>
                <p>Uma breve descrição sobre esse setor, esse é um texto exemplar para demonstrar uma descrição.</p>
                <a href="#"><p>Visitar</p></a>
            </div>
        </div>
    )
}

export default SectionCard