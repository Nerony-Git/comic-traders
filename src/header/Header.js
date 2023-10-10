import { Link } from 'react-router-dom'

import logo from '../images/logo_2.png'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.container}>
            <img src={logo} alt='logo' />
            <div><Link to='/outpost'>Outpost</Link></div>
            <div><Link to='/checkout'>Checkout</Link></div>
        </div>
    )
}

export default Header
