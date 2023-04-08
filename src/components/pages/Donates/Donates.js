import styles from './Donates.module.scss'
import DonateCard from './DonateCard';

import api from '../../../api'

import { useEffect, useState } from 'react';

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('product').then(({ data }) => {
            setProducts(data)
        })
        console.log(products)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    {
                        products.map((data) => (
                            <DonateCard />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Products