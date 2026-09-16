import Link from "next/link";
import styles from "./index.module.css";

export default function Copy() {
    const contactEmail = process.env.CONTACT_EMAIL;

    return (
        <section id="copy" className={styles.copy}>
            <h2 className={styles.title}>Legacy Portraits</h2>
            <p className={styles.description}>Legacy Portraits creates beautiful, professionally crafted video tributes that celebrate a person’s life and preserve their story for generations to come. Whether honoring a beloved senior, commemorating a loved one who has passed, or capturing cherished memories before they’re gone, each tribute thoughtfully combines photographs, home videos, music, narration, and meaningful moments into a timeless keepsake that families can treasure and share for years to come.</p>
            {contactEmail ? (
                <Link href={`mailto:${contactEmail}`} className={styles.button}>
                    Contact Us for a FREE Quote
                </Link>
            ) : null}
        </section>
    )
}
