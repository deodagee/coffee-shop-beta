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
    <header className="relative">
      
      
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
  <div className="mx-auto">
    <div className="relative shadow-xl sm:overflow-hidden">
      <div className="absolute inset-0">
        <Image
          priority
          fill
          className="h-full w-full object-cover"
          src={img}
          placeholder="blur"
          alt="Coffee grinder"
        />
        <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
      </div>
      
      <div className={styles.backdrop_blur}>

      <div className=" relative px-4 py-6 sm:px-6 sm:py-4 lg:py-32 lg:px-8">
      <div className="pb-[100px]">
        <Navbar></Navbar>
      </div>

        <div className={styles.firsttitle}>
        <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center md:text-[31] md:hover:text-[31] lg:text-[31] lg:hover:text-[31] text-[28px] hover:text-[28.2px] transition duration-500  font-bold uppercase tracking-wid">
        Welcome Home!
        </p>
        </div>
        <h1 className="mt-5 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
          <span className="block text-[22px] font-bold text-amber-500 hover:text-zinc-50 transition duration-500">Energy </span>
          <span className="block text-[25px] font-bold hover:text-zinc-50 text-lime-500 backdrop-contrast-1 transition pt-5 duration-500">Productivity</span>
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
          </div>
        </div>
    </header>
    </div>
  )
}

if (!session) {

  
    return ( 
      <div className={styles.whole}>
  <header className="relative">
      
      <div className={styles.topad}>
    <p className="text-neutral-600 m-1 flex w-screen justify-center font-sans font-bold xl:text-[15px] lg:text-[15px] md:text-[14px] sm:text-[10px] ">Login To Get Your Free Bonus Points</p>
  </div>

  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
  <div className="mx-auto">
    <div className="relative shadow-xl sm:overflow-hidden">
      <div className="absolute inset-0">
        <Image
          priority
          fill
          className="h-full w-full object-cover"
          src={img}
          placeholder="blur"
          alt="Coffee grinder"
        />
        <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
      </div>
      
      <div className={styles.backdrop_blur}>

      <div className=" relative px-4 py-6 sm:px-6 sm:py-4 lg:py-32 lg:px-8">
      <div className="pb-[100px]">
        <Navbar></Navbar>
      </div>

        <div className={styles.firsttitle}>
        <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center md:text-[31] md:hover:text-[31] lg:text-[31] lg:hover:text-[31] text-[28px] hover:text-[28.2px] transition duration-500  font-bold uppercase tracking-wid">
        GET YOUR BEANS ON, Please Log In!
        </p>
        </div>

        <h1 className="mt-5 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
          <span className="block text-[22px] font-bold text-amber-500 hover:text-zinc-50 transition duration-500">Energy </span>
          <span className="block text-[25px] font-bold hover:text-zinc-50 text-lime-500 backdrop-contrast-1 transition pt-5 duration-500">Productivity</span>
        </h1>

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
      </div>
    </div>
</header>
</div>
)
}
}

