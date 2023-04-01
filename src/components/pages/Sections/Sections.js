import SectionCard from '../../pages/Sections/SectionCard'
import styles from './Sections.module.css'
import { FaBreadSlice } from 'react-icons/fa'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react';

import img1 from '../../../img/img1.jpg'
import img2 from '../../../img/img2.jpg'
import img3 from '../../../img/img3.jpg'
import img4 from '../../../img/img4.png'
import img5 from '../../../img/img5.jpg'

const images = [img1, img2, img3, img4, img5]

function Sections() {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div className={styles.container}>
            <section className={styles.containerSections}>
                <div className={styles.secTitle}>
                    <h1>Sessões</h1>
                    <p>
                        Aqui você encontra todas as sessões do mercado. Ao clicar em <b>Visitar</b> você será redirecionado as categorias da respectiva sessão.
                    </p>
                </div>
                <motion.div ref={carousel} className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
                    <motion.div className={styles.inner}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                    >
                        {images.map(image => (
                            <motion.div className={styles.item} key={image}>
                                <SectionCard icon={<FaBreadSlice />} section="Nome do Setor" image={image} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default Sections