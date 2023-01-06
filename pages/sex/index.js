import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Home.module.css'

export default function Sex() {
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
            <h2 className={styles.holy}>But I say to you that everyone who looks at a woman with lustful intent has already committed adultery with her in his heart. -Matthew 5:28 ESV</h2>
        </>
    )
}