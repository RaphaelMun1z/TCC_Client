import styles from './DonateCard.module.scss'
import { FaHeart } from 'react-icons/fa';

function DonateCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <img src="https://png.pngtree.com/element_origin_min_pic/16/07/30/09579bfc6e53ba5.jpg" alt="Example Image" />
            </div>
            <div className={styles.card_content}>
                <h2 className={styles.card_title}>Título do Local</h2>
                <p className={styles.card_address}>Endereço do Local</p>
                <p className={styles.card_preservation_level}>Nível de Preservação</p>
                <p className={styles.card_donor}>Doador</p>
                <button className={styles.card_button}>
                    Coletar<FaHeart />
                </button>
            </div>
        </div>
    )
}

export default DonateCard