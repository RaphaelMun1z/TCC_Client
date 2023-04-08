import styles from './ContentCards.module.scss'

function ContentCards() {
    return (
        <section className={styles.container}>
            <h1 className={styles.titleContainer}>Sobre Nós</h1>
            <div className={styles.containerCards}>
                
                <div className={styles.card_hover}>
                    <div className={styles.card_hover__content}>
                        <h3 className={styles.card_hover__title}>
                            Make your <span>choice</span> right now!
                        </h3>
                        <p className={styles.card_hover__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
                        <a href="#" className={styles.card_hover__link}>
                            <span>Learn How</span>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke_linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                    <div className={styles.card_hover__extra}>
                        <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
                    </div>
                    <img src="https://www.insper.edu.br/wp-content/uploads/2022/10/Identidade_Diversidade-2.png" alt="img" />
                </div>

                <div className={styles.card_hover}>
                    <div className={styles.card_hover__content}>
                        <h3 className={styles.card_hover__title}>
                            Make your <span>choice</span> right now!
                        </h3>
                        <p className={styles.card_hover__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
                        <a href="#" className={styles.card_hover__link}>
                            <span>Learn How</span>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke_linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                    <div className={styles.card_hover__extra}>
                        <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
                    </div>
                    <img src="https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2017/07/formacao_1600x1200-valor-da-solidariedade.jpg" alt="img" />
                </div>

                <div className={styles.card_hover}>
                    <div className={styles.card_hover__content}>
                        <h3 className={styles.card_hover__title}>
                            Make your <span>choice</span> right now!
                        </h3>
                        <p className={styles.card_hover__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
                        <a href="#" className={styles.card_hover__link}>
                            <span>Learn How</span>
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke_linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                    <div className={styles.card_hover__extra}>
                        <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
                    </div>
                    <img src="https://i0.wp.com/semeandoconhecimento.com.br/conteudo/uploads/2014/07/terra_unida.jpg?fit=800%2C600&ssl=1" alt="img" />
                </div>

            </div>
        </section>
    )
}

export default ContentCards