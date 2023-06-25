import styles from './Header.module.css'

import todo from '../assets/logo.svg'


export function Header(){
    return(
        <header className={styles.header}>
            <img  src={todo} />
        </header>
    )
}