import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react';

import img1 from '../../../img/projetosocial.png'
import img2 from '../../../img/projetosocial.png'
import img3 from '../../../img/projetosocial.png'
import img4 from '../../../img/projetosocial.png'
import img5 from '../../../img/projetosocial.png'

const images = [img1, img2, img3, img4, img5]

function Projects() {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div className={styles.container}>
            <section className={styles.containerSections}>
                <div className={styles.secTitle}>
                    <h1>Projetos sociais</h1>
                    <p>
                        Aqui você encontra todas os projetos sociais em andamento. Ao clicar em <b>Visitar</b> você será redirecionado as necessidades de cada projeto.
                    </p>
                </div>
                <div className={styles.secTitle}>
                    <h1>São Paulo</h1>
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
                                <ProjectCard section="Nome do Projeto" image={image} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
                <div className={styles.secTitle}>
                    <h1>Rio de Janeiro</h1>
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
                                <ProjectCard section="Nome do Projeto" image={image} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default Projects