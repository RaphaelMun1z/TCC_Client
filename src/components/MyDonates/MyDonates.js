import DonateCard from '../pages/Donates/DonateCard'
import styles from './MyDonates.module.scss'

function MyDonates() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.secTitle}>
                    <h1>Doações</h1>
                    <p>
                        Aqui você encontra suas <b>Doações</b>.
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

export default MyDonates