import Image from 'next/image';
import styles from '../styles/menu.module.css';
import Header from '../components/Header';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Menu() {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';

        return () => {
            document.body.style.overflowX = '';
        };
    }, []);
    const { data: session } = useSession();

    const [displayUI, setDisplayUI] = useState('coffee_menu_items_list');
    const [clickedButton, setClickedButton] = useState("coffee_menu_items_list");
    const showUI1 = () => {
        setDisplayUI('coffee_menu_items_list');
        setClickedButton('coffee_menu_items_list');
    };




    if (session) {

        return (

            <div className={styles.whole}>
                <div className={styles.menu_wrapper}>

                    <Header scrollHandler={undefined}></Header>

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

                    >
                        <Link href={"/menu"}>

                            Shop Different Drinks
                        </Link>

                    </button>
                    <button className={styles.badsessionbtn} type='submit'

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
                        <Header scrollHandler={undefined}></Header>
                    </div>

                    <span className={styles.buttons}>
                        <div>
                            <button className={`${styles.goodsessionbtn} ${clickedButton === 'coffee_menu_items_list' ? styles.clickedButton : ''}`} onClick={showUI1}
                            >
                                Coffee
                            </button>
                        </div>
                        <div>
                            <button className={styles.goodsessionbtn} type='submit'
                                onClick={showUI1}
                            >
                                Deserts
                            </button>
                        </div>
                        <div>
                            <button className={styles.goodsessionbtn} type='submit'
                                onClick={showUI1}
                            >
                                Appetizers
                            </button>
                        </div>

                    </span>
                    <div className={styles.menu_pick_and_add}>Pick And Add To Cart</div>
                    <div className={styles.menu_items_wrapper}>
                        <ol className={styles.coffee_menu_items_list} >

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

export default Menu;
