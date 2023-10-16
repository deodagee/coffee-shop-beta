import Image from 'next/image';
import img from '../public/hero.jpg';
import styles from '../styles/Header.module.css';
import Navbar from './Navbar';
import { useSession } from 'next-auth/react';

export default function Header({ scrollHandler }) {
  const { data: session } = useSession();

  if (session) {

    return (

      <div className={styles.whole}>
        <div className={styles.header_wrapper}>

                    <Navbar></Navbar>

                  <div className={styles.firsttitle}>
                    <p className={styles.welcome}>
                      Welcome Home!
                    </p>
                  </div>
                  <h1 className="">
                    <span className="">Energy </span>
                    <span className="">Productivity</span>
                  </h1>

                  <button className={styles.badsessionbtn} type='submit'
                    onClick={scrollHandler}
                  >
                    Shop Different Beans
                  </button>
                  <button className={styles.badsessionbtn} type='submit'
                    onClick={scrollHandler}
                  >
                    Exclusive Members Area
                  </button>
                  </div>
      </div>
    )
  }

  if (!session) {


    return (
      <div className={styles.whole}>
        <div className={styles.header_wrapper}>


                    <div >
                      <Navbar></Navbar>
                    </div>
                    <div className={styles.topad}>
              <p className="">Login To Get Your Free Bonus Points</p>
            </div>


                    <div className={styles.titles_and_buttons}>
                      <p className={styles.header1}>
                        Get Your BEANS ON!
                      </p>

                      <h1 className="">
                        <span className={styles.energy}>Energy <span className={styles.and}>& </span> </span>
                        <span className={styles.productivity}>Productivity</span>
                      </h1>
                    </div>


                    <div className={styles.buttons}>
                      <button className={styles.goodsessionbtn} type='submit'
                        onClick={scrollHandler}
                      >
                        Shop Different Beans
                      </button>
                      <button className={styles.goodsessionbtn} type='submit'
                        onClick={scrollHandler}
                      >
                        Exclusive Members Area
                      </button>
                    </div>
      </div>
      </div>

    )
  }
}

