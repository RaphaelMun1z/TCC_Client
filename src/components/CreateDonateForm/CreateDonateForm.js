import styles from './CreateDonateForm.module.scss'

function CreateDonateForm() {
    return (
        <section className={styles.contact}>
            <h1 className={styles.contact__title}>Cadastre seu item para doação</h1>
            <form className={styles.contact__form}>
                <div className={styles.contact__formGroup}>
                    <label htmlFor="name" className={styles.contact__formLabel}>Qual é o nome do item?</label>
                    <input type="text" id="name" name="name" className={styles.contact__formInput} required />
                </div>
                <div className={styles.contact__formGroup}>
                    <label htmlFor="amount" className={styles.contact__formLabel}>Qual a quantidade?</label>
                    <input type="text" id="amount" name="amount" className={styles.contact__formInput} required />
                </div>
                <div className={styles.contact__formGroup}>
                    <label htmlFor="conserv" className={styles.contact__formLabel}>Qual o estado de conservação?</label>
                    <input type="text" id="conserv" name="conserv" className={styles.contact__formInput} required />
                </div>
                <div className={styles.contact__formGroup}>
                    <label htmlFor="message" className={styles.contact__formLabel}>Deixe alguma mensagem (opcional):</label>
                    <textarea id="message" name="message" className={styles.contact__formTextarea} required></textarea>
                </div>
                <button type="submit" className={styles.contact__formButton}>Salvar</button>
            </form>
        </section>
    )
}

export default CreateDonateForm



