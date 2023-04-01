import styles from './CreateSection.module.css'
import { Link } from "react-router-dom"

function CreateSection() {
    return (
        <section className={styles.container}>
            <div className={styles.secTitle}>
                <h1>Área de gerenciamento</h1>
                <p>
                    Aqui você você pode <b>controlar</b> o sistema.
                </p>
            </div>
            <div>
                <Link to="/newproduct">Cadastrar produto</Link>
            </div>
        </section>
    )
}

export default CreateSection