import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import styles from '../styles/Home.module.css'

export default function HomePage() {
    return (
        <MainLayout>
            <h1>Home Page</h1>
            <h1 className={styles.title}>
                Ir a <Link href="/about">About</Link>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.js</code>
            </p>
        </MainLayout>
    )
}
