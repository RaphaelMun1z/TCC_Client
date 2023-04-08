import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/logo.png'
import { useState, useRef } from 'react';
import { RxHamburgerMenu, RxGear } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";

function NavBar() {

    const [navbar, setNavbar] = useState(false)

    const scrooledWindow = () => {
        if (window.scrollY > 0) {
            setNavbar(true)
            console.log("Navbar: true")
        }
        else {
            setNavbar(false)
            console.log("Navbar: false")
        }
    }

    window.addEventListener('scroll', scrooledWindow)

    const [isActive, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!isActive)
    };

    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleDropdownOpen = () => {
        setIsOpen(true);
    };

    const handleDropdownClose = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 100);
    };

    const handleOptionClick = (value) => {
        console.log(`Selected option: ${value}`);
        setIsOpen(false);
    };

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        handleDropdownClose();
    }

    const [hidden, setHidden] = useState(false);

    const toggleHidden = () => {
        setHidden(!hidden);
    };

    return (
        <nav className={navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`}>
            <Container>
                <div className={styles.navMobile} onClick={handleToggle}>
                    {!isActive ? <RxHamburgerMenu /> : <MdClose />}
                </div>
                <div className={isActive ? `${styles.navBarControl} ${styles.active}` : `${styles.navBarControl}`}>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Início</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/donates">Doações</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/projects">Projetos</Link>
                        </li>
                        <li className={styles.list_buttonmenu}>
                            <div className="dropdown">
                                <button className={styles.dropdown_btn} onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}>Mais</button>
                                {isOpen && (
                                    <div className={styles.dropdown_menu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <div className={styles.dropdown_option} onClick={() => handleOptionClick('Option 1')}>
                                            <Link to="/majordonors">Principais Doadores</Link>
                                        </div>
                                        <div className={styles.dropdown_option} onClick={() => handleOptionClick('Option 2')}>
                                            <Link to="/majororgs">Principais Organizações</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="Logo FindForMe" className={!isActive ? `${styles.active}` : `${styles.notactive}` } />
                </Link>
                <div className={isActive ? `${styles.navBarControl} ${styles.active}` : `${styles.navBarControl}`}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/about">Sobre Nós</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/howitworks">Como funciona</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/contact">Contato</Link>
                        </li>
                        <li className={styles.list_buttoncart}>
                            {hidden ? (
                                <button className={styles.cart_button} onClick={toggleHidden}>
                                    <RxGear />
                                </button>
                            ) : (
                                <button className={styles.cart_button} onClick={toggleHidden}>
                                    <BsGearFill />
                                </button>
                            )}
                        </li>
                        <li>
                            {hidden ? (
                                <div className={styles.cart_dropdown}>
                                    <div className={styles.cart_items}>
                                        <div className={styles.cart_item}>
                                            <li className={styles.item}>
                                                <Link to="/management">Gerenciar perfil</Link>
                                            </li>
                                            <li className={`${styles.item} ${styles.item_donates} `}>
                                                <Link to="/management">Minhas doações</Link>
                                            </li>
                                            <li className={`${styles.item} ${styles.item_in} `}>
                                                <Link to="/management">Entrar</Link>
                                            </li>
                                            <li className={`${styles.item} ${styles.item_exit}`}>
                                                <Link to="/management">Sair</Link>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default NavBar