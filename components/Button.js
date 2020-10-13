import styles from './Button.module.scss'

const  Button =(props) =><button className={styles.wrapper} onClick={props.decrementCounter}>Decrement</button>

export default Button
