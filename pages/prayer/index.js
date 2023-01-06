import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Home.module.css'

export default function Prayer() {
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
            <div className={styles.holy}>
                <h2>Pray then like this:</h2>
                <p>"Our Father in heaven,</p>
                <p>hallowed be your name.</p>
                <p>Your kingdom come,</p>
                <p>your will be done,</p>
                <p>  on earth as it is in heaven.</p>
                <p>Give us this day our daily bread,</p>
                <p>and forgive us our debts,</p>
                <p>  as we also have forgiven our</p>
                <p>    debtors.</p>
                <p>And lead us not into temptation,</p>
                <p>  but deliver us from evil. -Matthew 6:9-13 ESV</p>
            </div>
        </>
    )
}