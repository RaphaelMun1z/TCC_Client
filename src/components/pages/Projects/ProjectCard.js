import styles from './ProjectCard.module.css'

function ProjectCard(props) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={props.image} alt="Imagem" />
            </div>   
            <div className={styles.desc}>
                <h3>{props.section}</h3>
                <p>Uma breve descrição sobre esse projeto, esse é um texto exemplar para demonstrar uma descrição.</p>
                <a href="#"><p>Visitar</p></a>
            </div>
        </div>
    )
}

export default ProjectCard