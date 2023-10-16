import Link from "next/link";
import styles from '../styles/footer.module.css';


export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <img  src="/logowhitesmall.png" alt="Logo" width={5} height={5} className={styles.footer_logo} /> {/* Replace "/logowhitesmall.png" with the correct path to your image */}
      <Link
      href={"https://astrumstellar.com"}>
        <span className={styles.name_credentials}>
      <p className={styles.designed_by}>Designed By</p>
      <p className={styles.name} >Deo Siniza</p>
      </span>
      </Link>
      <span className={styles.span_item}>|</span>
      <Link href="https://github.com/deodagee/coffee-shop-beta" className={styles.github_link}>
        Github Code
      </Link>
    </footer>
  );
}
