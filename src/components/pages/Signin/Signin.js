import styles from './Signin.module.scss'
import React, { useState } from 'react';
import { FaHandshake } from 'react-icons/fa';

function Signin() {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <section className={styles.container}>
            <div className={styles.contentcontainer}>
                <div className={styles.titleContainer}>
                    <h1>Faça seu login</h1>
                </div>
                <div className={styles.formcontainer}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Usuário</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={user.username}
                            onChange={handleChange}
                        />
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signin