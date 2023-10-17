import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from './logo.jpg'
import HeaderLink from 'Components/Headerlink'



function Header() {
    return(
        <header className={styles.header}>
           <Link to="./">
                <img src={logo} alt="logo inazuma"></img>
           </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./Ppersonagens">
                    Personagens
                </HeaderLink>
                <HeaderLink url="./Curiosidades">
                    Curiosidades
                </HeaderLink>
           </nav>
        </header>
    )
}
export default Header;