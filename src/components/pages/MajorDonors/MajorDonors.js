import styles from './MajorDonors.module.scss'
import { FaHandshake } from 'react-icons/fa';

function MajorDonors() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.secTitle}>
                    <h1>Principais Doadores</h1>
                    <p>
                        Aqui você encontra as pessoas que mais realizam doações.
                    </p>
                </div>
                <div className={styles.containerProds}>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da pessoa</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Agradecer <FaHandshake/></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da pessoa</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Agradecer <FaHandshake/></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da pessoa</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Agradecer <FaHandshake/></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da pessoa</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Agradecer <FaHandshake/></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da pessoa</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Agradecer <FaHandshake/></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da pessoa</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Agradecer <FaHandshake/></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da pessoa</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Agradecer <FaHandshake/></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da pessoa</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Agradecer <FaHandshake/></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MajorDonors