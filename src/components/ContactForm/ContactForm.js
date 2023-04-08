import styles from './ContactForm.module.scss'

function ContactForm() {
    return (
        <section className={styles.contact}>
            <h1 className={styles.contact__title}>Alguma dúvida?</h1>
            <form className={styles.contact__form}>
                <div className={styles.contact__formGroup}>
                    <label htmlFor="name" className={styles.contact__formLabel}>Qual o seu Nome:</label>
                    <input type="text" id="name" name="name" className={styles.contact__formInput} required />
                </div>
                <div className={styles.contact__formGroup}>
                    <label htmlFor="email" className={styles.contact__formLabel}>Qual o seu E-mail:</label>
                    <input type="email" id="email" name="email" className={styles.contact__formInput} required />
                </div>
                <div className={styles.contact__formGroup}>
                    <label htmlFor="message" className={styles.contact__formLabel}>Digite sua Dúvida:</label>
                    <textarea id="message" name="message" className={styles.contact__formTextarea} required></textarea>
                </div>
                <button type="submit" className={styles.contact__formButton}>Enviar</button>
            </form>
        </section>
    )
}

export default ContactForm



