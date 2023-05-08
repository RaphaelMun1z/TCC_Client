import styles from './Signin.module.scss'
import React, { useState, useContext } from 'react';
import { toast } from "react-toastify"
import { useNavigate, Navigate } from "react-router-dom";
import Axios from "axios"
import { AuthContext } from '../../../Contexts/AuthContext';

function Signin() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    Axios.defaults.withCredentials = true;

    const { setAuth, auth, setUsername } = useContext(AuthContext)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            Axios.post("http://localhost:3001/login", {
                email: user.email,
                password: user.password,
            }).then((response) => {
                if (response.data.message) {
                    toast.error("Email e/ou senha incorretos!");
                } else {
                    setAuth(true)
                    setUsername(response.data[0].firstname)
                    toast.success("Seja bem vindo(a) " + response.data[0].firstname + "!");
                    navigate("/management")
                }
            });
        } catch (error) {
            toast.warn('Ocorreu um erro ao logar!')
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.contentcontainer}>
                <div className={styles.titleContainer}>
                    <h1>Faça seu login</h1>
                </div>
                <div className={styles.formcontainer}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={user.email}
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