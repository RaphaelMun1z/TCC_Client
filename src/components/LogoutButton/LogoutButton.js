import styles from './LogoutButton.module.scss'
import { toast } from "react-toastify"
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../Contexts/AuthContext';

function LogoutButton() {
    const { setAuth, username, setUsername } = useContext(AuthContext)
    
    const navigate = useNavigate()
    const logout = () => {
        toast.success("Até mais " + username + "!");
        setUsername(null)
        setAuth(false)
        navigate("/signin")
    }

    return (
        <>
            <button className={styles.button} onClick={logout}>Sair</button>
        </>
    );
}

export default LogoutButton;
