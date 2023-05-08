import styles from './Signup.module.scss'
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function Signup() {

    const [cookies] = useCookies(["jwt"]);
    const navigate = useNavigate();

    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        contact: "",
        confirmPassword: "",
        userType: 'citizen'
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUserTypeChange = (event) => {
        const { value } = event.target;
        setUser(prevState => ({
            ...prevState,
            userType: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!user.userType) {
            alert("Por favor, escolha se você é uma organização ou um cidadão.");
            return;
        }

        if (!user.firstName) {
            alert("Por favor, informe seu nome.");
            return;
        }

        if (!user.lastName && user.userType === 'citizen') {
            alert("Por favor, informe seu sobrenome.");
            return;
        }

        if (!user.email) {
            alert("Por favor, informe um e-mail.");
            return;
        }

        if (!user.contact) {
            alert("Por favor, informe um número para contato.");
            return;
        }

        if (!user.password) {
            alert("Por favor, informe uma senha.");
            return;
        }

        if (!user.confirmPassword) {
            alert("Por favor, confirme sua senha.");
            return;
        }

        if (user.password !== user.confirmPassword) {
            alert("As senhas não conferem!");
            return;
        }

        Axios.defaults.withCredentials = true;

        try {
            Axios.post("http://localhost:3001/register", {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                contact: user.contact,
                userType: user.userType,
            }).then((response) => {
                console.log(response);
                navigate("/management");
            });
        } catch (err) {
            console.log('Deu erro ao registrar: ' + err)
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.contentcontainer}>
                <div className={styles.titleContainer}>
                    <h1>Faça seu cadastro</h1>
                </div>
                <div className={styles.formcontainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.cadastroUserType}>
                            <label htmlFor="organization" className={styles.labelTypeAccount}>
                                <input type="radio" id="organization" name="userType" defaultValue="organization" checked={user.userType === "organization"} onChange={handleUserTypeChange} />
                                Organização
                            </label>
                            <label htmlFor="citizen" className={styles.labelTypeAccount}>
                                <input type="radio" id="citizen" name="userType" defaultValue="citizen" checked={user.userType === "citizen"} onChange={handleUserTypeChange} />
                                Cidadão
                            </label>
                        </div>
                        <div className="cadastro__form-group">
                            <label htmlFor="firstName">Nome:</label>
                            <input type="text" id="firstName" name="firstName" defaultValue={user.firstName} onChange={handleInputChange} />
                        </div>
                        {user.userType === "citizen" && (
                            <div className="cadastro__form-group">
                                <label htmlFor="lastName">Sobrenome:</label>
                                <input type="text" id="lastName" name="lastName" defaultValue={user.lastName} onChange={handleInputChange} />
                            </div>
                        )}
                        <div className="cadastro__form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" defaultValue={user.email} onChange={handleInputChange} />
                        </div>
                        <div className="cadastro__form-group">
                            <label htmlFor="contact">Celular:</label>
                            <input type="text" id="contact" name="contact" defaultValue={user.contact} onChange={handleInputChange} />
                        </div>
                        <div className="cadastro__form-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" name="password" defaultValue={user.password} onChange={handleInputChange} minLength="8" />
                        </div>
                        <div className="cadastro__form-group">
                            <label htmlFor="confirmPassword">Confirme a senha:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" defaultValue={user.confirmPassword} onChange={handleInputChange} minLength="8" />
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Signup