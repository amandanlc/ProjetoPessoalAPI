import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>MÚSICAS</span>
            <nav>
                <Link to="/">Todos</Link>
                <Link to="/ph">MC PH</Link>
                <Link to="/ig">MC IG</Link>
                <Link to="/kevin">MC Kevin</Link>
                <Link to="/hariel">MC Hariel</Link>
                <Link to="/pedrinho">MC Pedrinho</Link>
                <Link to="/ryan">MC Ryan SP</Link>
            </nav>
        </header>
    )    
}

export default Header
