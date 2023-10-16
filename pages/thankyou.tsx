import Image from 'next/image';
import img from '../public/logowhitesmall.png';
import styles from '../styles/thankYouPage.module.css'; 
import Link from 'next/link';


function ThankYouPage() {

  return (
    <div className={styles.parent}>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.thankyou}>Thank You For Signing Up</p>
        <p>You certify for 15% OFF Every Purchase! Please Check Your Email</p>
        <p><span className={styles.visit}>Details:</span>
        <Link className={styles.astrumlink} href={"https://astrumstellar/promotions.com"}>
         Astrumstellar/promotions.com </Link></p>
      </div>

        <Link className="text-center bg-lime-600 mt-1 mb-5 text-white px-7 py-1 text-sm rounded-[4px]" href={"/"}>
         Back To Home </Link>
      <div className={styles.imageContainer}>
        <Image
          priority
          src={img}
          layout="responsive" // Use responsive layout to adjust image size
          width={300}
          height={150}
          alt="Logo"
        />
      </div>

    </div>
    </div>
  );
}

export default ThankYouPage;
