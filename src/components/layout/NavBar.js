import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/logo.png'
import { useState, useRef } from 'react';
import { RxHamburgerMenu, RxGear } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { BsCart2, BsGearFill } from "react-icons/bs";

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

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Product 1",
            imageUrl: "https://via.placeholder.com/150",
            price: 10,
        },
        {
            id: 2,
            name: "Product 2",
            imageUrl: "https://via.placeholder.com/150",
            price: 20,
        },
        {
            id: 3,
            name: "Product 3",
            imageUrl: "https://via.placeholder.com/150",
            price: 30,
        },
    ]);

    const getTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price, 0);
    };

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
                <div className={isActive ? `${styles.containerSearchBar} ${styles.active}` : `${styles.containerSearchBar}`}>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Início</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/">Doadores</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/">Donatários</Link>
                        </li>
                        <li className={styles.list_buttonmenu}>
                            <div className="dropdown">
                                <button className={styles.dropdown_btn} onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}>Buscar</button>
                                {isOpen && (
                                    <div className={styles.dropdown_menu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <div className={styles.dropdown_option} onClick={() => handleOptionClick('Option 1')}>
                                            <Link to="/sections">Sessões</Link>
                                        </div>
                                        <div className={styles.dropdown_option} onClick={() => handleOptionClick('Option 2')}>
                                            <Link to="/category">Categorias</Link>
                                        </div>
                                        <div className={styles.dropdown_option} onClick={() => handleOptionClick('Option 3')}>
                                            <Link to="/products">Produtos</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to="/">
                    <img className={styles.navbarImage} src={logo} alt="Logo FindForMe" />
                </Link>
                <div className={isActive ? `${styles.containerSearchBar} ${styles.active}` : `${styles.containerSearchBar}`}>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/about">Sobre Nós</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/">Como funciona</Link>
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
                                                <Link to="/management">Gerenciar</Link>
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