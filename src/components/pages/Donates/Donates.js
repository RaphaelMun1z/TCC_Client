import styles from './Donates.module.scss'
import DonateCard from './DonateCard';

import { useEffect, useState } from 'react';

function Products() {

    return (
        <>
            <section className={styles.container}>
                <div className={styles.secTitle}>
                    <h1>Doações</h1>
                    <p>
                        Aqui você encontra <b>Doações</b> disponíveis para coleta.
                    </p>
                </div>
                <div className={styles.containerProds}>
                    <DonateCard />
                    <DonateCard />
                    <DonateCard />
                    <DonateCard />
                    <DonateCard />
                    <DonateCard />
                    <DonateCard />
                    <DonateCard />
                </div>
            </section>
        </>
    )
}

export default Products