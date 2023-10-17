import Image from 'next/image';
import styles from '../styles/takeout.module.css';
import Header from '../components/Header';
import { useSession } from 'next-auth/react';
import Link from 'next/link'; 

export default function TakeOut({ scrollHandler }) {
    const { data: session } = useSession();

    if (session) {
        (


            <div className={styles.whole}>
                <div className={styles.menu_wrapper}>

                    <Header scrollHandler={TakeOut}></Header>

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
                        <Link href={"/menu"}>

                            Shop Different Beans
                        </Link>

                    </button>
                    <button className={styles.badsessionbtn} type='submit'
                        onClick={scrollHandler}
                    >
                        <Link href={"/login"}>

                            Exclusive Members Area
                        </Link>

                    </button>
                </div>

            </div>
        )
    }

    if (!session) {


        return (
            <div className={styles.whole}>
                <div className={styles.menu_wrapper}>


                    <div >
                        <Header scrollHandler={TakeOut}></Header>
                    </div>

                    <span className={styles.buttons}>
                        <div>
                    <button className={styles.goodsessionbtn} type='submit'
                            onClick={scrollHandler}
                        >
                               Meals / Sandwiches
                        </button>
                        </div>
                        <div>
                        <button className={styles.goodsessionbtn} type='submit'
                            onClick={scrollHandler}
                        >
                                Baked Goods
                        </button>
                        </div>

                    </span>
                    <div className={styles.menu_pick_and_add}>Pick And Add To Cart</div>
                    <div className={styles.menu_items_wrapper}>
                        <ol className={styles.menu_items_list} >

                        <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image className={styles.item_product}alt='product_item'
                                
                                width={100}
                                height={100}
                                src={"/frap3.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap2.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap3.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap1.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap2.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap3.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap1.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap2.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap3.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap1.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap2.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap3.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap1.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap2.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap3.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap1.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>
                            <li className={styles.item_list_item}>
                                <Link href={"/product/item"}>
                                <Image alt='product_item'
                                className={styles.item_product}
                                width={100}
                                height={100}
                                src={"/frap2.png"}>
                                </Image>
                                <p>Product</p>
                                </Link>
                            </li>


                        </ol>
                    </div>
                </div>
                
            </div>

        )
    }
}

