import ActiveLink from "./ActiveLink"
import styles from '../styles/Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];


const Navbar = () => {
    return (
        <nav className={styles['link-contenedor']}>
            {
                menuItems.map(({ text, href }) => (
                    <ActiveLink key={href} href={href} text={text} />
                ))
            }
        </nav>
    )
}

export default Navbar