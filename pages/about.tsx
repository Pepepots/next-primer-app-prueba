import Link from "next/link"
import MainLayout from "../components/layouts/MainLayout"
import styles from '../styles/Home.module.css'

const about = () => {
    return (
        <MainLayout>
            <h1>About Page</h1>
            <h1 className={styles.title}>
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.js</code>
            </p>
        </MainLayout>
    )
}

export default about