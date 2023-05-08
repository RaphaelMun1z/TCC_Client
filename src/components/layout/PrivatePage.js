import styles from './PrivatePage.module.scss'
import img1 from '../../img/404.png'
import LogoutButton from "../LogoutButton/LogoutButton"

const PrivatePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ops! Página restrita.</h1>
            <img src={img1} alt="Página não encontrada" className={styles.image} />
            <p className={styles.message}>
                Você não tem acesso a esta página.
            </p>
            <LogoutButton />
        </div>
    );
};

export default PrivatePage;