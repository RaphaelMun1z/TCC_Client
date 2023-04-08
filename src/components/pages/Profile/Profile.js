import styles from './Profile.module.scss'
import React, { useState } from 'react';

function Profile() {

    const [user, setUser] = useState({
        userType: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Verificar se o campo userType foi preenchido
        if (!user.firstname) {
            alert("Por favor, escolha se você é uma organização ou um cidadão.");
            return;
        }
        // Restante do código de validação e envio de formulário aqui
    };

    return (
        <section className={styles.container}>
            <div className={styles.contentcontainer}>
                <div className={styles.titleContainer}>
                    <h1>Edite seu perfil</h1>
                </div>
                <div className={styles.formcontainer}>
                    <form onSubmit={handleSubmit}>
                        <div className="cadastro__form-group">
                            <label htmlFor="firstName">Nome:</label>
                            <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleInputChange} required />
                        </div>
                        {user.userType === "citizen" && (
                            <div className="cadastro__form-group">
                                <label htmlFor="lastName">Sobrenome:</label>
                                <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={handleInputChange} required />
                            </div>
                        )}
                        <div className="cadastro__form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} required />
                        </div>
                        <div className="cadastro__form-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" name="password" value={user.password} onChange={handleInputChange} minLength="8" required />
                        </div>
                        <div className="cadastro__form-group">
                            <label htmlFor="confirmPassword">Confirme a senha:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={handleInputChange} minLength="8" required />
                        </div>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Profile