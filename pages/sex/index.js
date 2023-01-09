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
            <br></br>
            <h2 className={styles.holy}>He answered, “Have you not read that he who created them from the beginning made them male and female, and said, ‘Therefore a man shall leave his father and his mother and hold fast to his wife, and the two shall become one flesh’? So they are no longer two but one flesh. What therefore God has joined together, let not man separate.” -Matthew 19:4-6 ESV</h2>
            <br></br>
            <h2 className={styles.holy}>Flee from sexual immorality. Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body. Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body. -1 Corinthians 6:18-20 ESV</h2>
        </>
    )
}