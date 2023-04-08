import styles from './MajorOrgs.module.scss'
import { FaHome } from 'react-icons/fa';

function MajorOrgs() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.secTitle}>
                    <h1>Principais Organizações</h1>
                    <p>
                        Aqui você encontra as principais organizações.
                    </p>
                </div>
                <div className={styles.containerProds}>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da organização</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Visitar <FaHome /></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da organização</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Visitar <FaHome /></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da organização</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Visitar <FaHome /></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da organização</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Visitar <FaHome /></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da organização</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Visitar <FaHome /></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da organização</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Visitar <FaHome /></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da organização</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Visitar <FaHome /></button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>Nome da organização</h2>
                            <p className={styles.cardRegion}>Região</p>
                            <div className={styles.cardDonations}>
                                <p className={styles.cardDonationsNumber}>Número de Doações</p>
                            </div>
                            <button className={styles.cardButton}>Visitar <FaHome /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MajorOrgs