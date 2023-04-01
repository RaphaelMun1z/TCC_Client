import styles from './Products.module.css'
import ProductCard from './ProductCard';

import api from '../../../api'

import { useEffect, useState, useRef } from 'react';

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
                    <h1>Produtos</h1>
                    <p>
                        Aqui você encontra os melhores produtos do mercado nacional. Ao clicar em <b>Comparar</b> você será redirecionado as comparações automáticas de qualidade da categoria do respectivo produto.
                    </p>
                </div>
                <div className={styles.containerProds}>
                    {
                        products.map((data) => (
                            <ProductCard title={data.title} price={data.price} description={data.description}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Products