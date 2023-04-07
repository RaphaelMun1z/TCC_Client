import styles from './HowItWorks.module.scss'

function HowItWorks() {
    return (
        <section className={styles.steps}>
            <h1 className={styles.steps__title}>Como funciona?</h1>
            <div className={styles.steps__item}>
                <div className={styles.steps__itemNumber}>1</div>
                <div className={styles.steps__itemTitle}>Passo 1</div>
                <div className={styles.steps__itemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut suscipit justo.</div>
            </div>
            <div className={styles.steps__item}>
                <div className={styles.steps__itemNumber}>2</div>
                <div className={styles.steps__itemTitle}>Passo 2</div>
                <div className={styles.steps__itemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut suscipit justo.</div>
            </div>
            <div className={styles.steps__item}>
                <div className={styles.steps__itemNumber}>3</div>
                <div className={styles.steps__itemTitle}>Passo 3</div>
                <div className={styles.steps__itemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut suscipit justo.</div>
            </div>
        </section>
    )
}

export default HowItWorks

