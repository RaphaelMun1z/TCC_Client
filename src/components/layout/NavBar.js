import Container from './Container'
import { Link } from 'react-router-dom'
import { useState, useRef, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

// Styles & Image
import styles from './NavBar.module.css'
import logo from '../../img/logo.png'

// Icons
import { RxHamburgerMenu, RxGear } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";

// Components
import LogoutButton from '../LogoutButton/LogoutButton'

function NavBar() {
    const { auth, username } = useContext(AuthContext)

    // Navbar status
    const [navbar, setNavbar] = useState(false)

    const scrooledWindow = () => {
        if (window.scrollY > 0) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', scrooledWindow)

    // DropDown
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

    // Modal
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
                    <img src={logo} alt="Logo FindForMe" className={!isActive ? `${styles.active}` : `${styles.notactive}`} />
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
                                                {auth &&
                                                    <div className={styles.myAccountContainer}>
                                                        <div className={styles.myAccountImage}>
                                                            <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='Profile Image' title='Profile Image' />
                                                        </div>
                                                        <div className={styles.myAccountName}>
                                                            <h2>{username}</h2>
                                                        </div>
                                                    </div>
                                                }
                                            </li>
                                            {auth &&
                                                <>
                                                    <li className={styles.item}>
                                                        <Link to="/profile">Gerenciar perfil</Link>
                                                    </li>
                                                    <li className={`${styles.item} ${styles.item_donates} `}>
                                                        <Link to="/management">Minhas doações</Link>
                                                    </li>
                                                </>
                                            }
                                            {!auth &&
                                                <>
                                                    <li className={`${styles.item} ${styles.item_in} `}>
                                                        <Link to="/signin">Entrar</Link>
                                                    </li>
                                                    <li className={`${styles.item} ${styles.item_in} `}>
                                                        <Link to="/signup">Inscrever-se</Link>
                                                    </li>
                                                </>
                                            }
                                            <li className={`${styles.item} ${styles.item_exit}`}>
                                                {auth && <LogoutButton />}
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