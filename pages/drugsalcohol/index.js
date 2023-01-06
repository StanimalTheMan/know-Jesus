import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Home.module.css'

export default function drugsAlcohol() {
    return (
        <>
            <Link href="/">
                <Image
                    src="/cross.jpg"
                    alt="cross"
                    width={100}
                    height={100}
                    className={styles.navhome}
                ></Image>
            </Link>
            <h2 className={styles.holy}>Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour. -Peter 5:8 ESV</h2>
        </>
    )
}