import DonateCard from '../pages/Donates/DonateCard'
import styles from './DonationsReceived.module.scss'

function DonationsReceived() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.secTitle}>
                    <h1>Doações recebidas</h1>
                    <p>
                        Aqui você encontra <b>Doações</b> que você recebeu.
                    </p>
                </div>
                <div className={styles.containerProds}>
                    <DonateCard />
                    <DonateCard />
                    <DonateCard />
                    <DonateCard />
                </div>
            </section>
        </>
    )
}

export default DonationsReceived