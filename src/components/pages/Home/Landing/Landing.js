import styles from './Landing.module.css'
import { FaHandHoldingHeart } from "react-icons/fa";
//import img1 from '../../../../img/imgCarousel1.png'

function Landing() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1>"A união faz a força"</h1>
                <p><a href='#'>Entregar Esperança <FaHandHoldingHeart/></a></p>
            </div>
        </section>
    )
}

export default Landing