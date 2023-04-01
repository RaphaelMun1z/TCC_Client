import styles from './ProductCard.module.css'
import { NumericFormat } from 'react-number-format';
//import img from '../../../img/tijolo.png'
// nodemon ./server.js localhost 3000 - Comando server

import { BsCart2 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

function ProductCard(props) {
    return (
        <div className={styles.productCard}>
            <div className={styles.image}>
                <img src='https://picsum.photos/500' alt='Image' />
            </div>
            <div className={styles.info}>
                <h2>{props.title.substring(0, 20)}</h2>
                <p className={styles.desc}>
                    {props.description}
                </p>
                <p className={styles.price}>
                    <span>R$</span>
                    <NumericFormat value={props.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true} />
                </p>
            </div>
            <div className={styles.assessment}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <div className={styles.addCart}>
                <button>
                    <p>ADD</p><BsCart2 />
                </button>
            </div>
        </div>
    )
}

export default ProductCard