import React from "react";
import styles from "../styles/Navbar.module.css"
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"



function Navbar () {
    const { data: session } = useSession()



    if (!session) {
    return ( 

        <div>


            <ol className={styles.navbarparent}>
                <li className={styles.navbaritem}><Link href="/" className= "transition duration-500 relative text-zinc-50  hover:text-zinc-50 rounded hover:bg-[#ffffff56] pt-1 pb-1 pl-3 pr-3 lg:ml-20 lg:mr-20 " >Home</Link></li>
                <li className={styles.navbaritem}><Link href="/menu"className= "transition duration-500 relative text-zinc-50 hover:text-zinc-50 rounded hover:bg-[#ffffff56] pt-1 pb-1 pl-3 pr-3 lg:ml-20 lg:mr-20 " >Menu</Link></li>
                <li className={styles.navbaritem}><Link href="/takeout" className= "transition duration-500 relative text-zinc-50 hover:text-zinc-50 rounded hover:bg-[#ffffff56] pt-1 pb-1 pl-3 pr-3 lg:ml-20 lg:mr-20 " >Take Out</Link></li>
                <li className= "transition duration-500 relative text-zinc-50 hover:text-zinc-50 rounded hover:bg-[#ffffff56] pt-1 pb-1 pl-3 pr-3 lg:ml-20 lg:mr-20 ">
                <button className={styles.navbaritem}><Link href="/login"  >Login</Link></button></li>
            </ol>
        </div>

    );
}

if (session) {

    return ( 

        <div>

            <ol className={styles.navbarparent}>
                <li className={styles.navbaritem}><Link href="/" className= "transition duration-500 relative text-zinc-50  hover:text-zinc-50 rounded hover:bg-[#ffffff56] pt-1 pb-1 pl-3 pr-3 lg:ml-20 lg:mr-20 " >Home</Link></li>
                <li className={styles.navbaritem}><Link href="/menu"className= "transition duration-500 relative text-zinc-50 hover:text-zinc-50 rounded hover:bg-[#ffffff56] pt-1 pb-1 pl-3 pr-3 lg:ml-20 lg:mr-20 " >Menu</Link></li>
                <li className={styles.navbaritem}><Link href="/takeout" className= "transition duration-500 relative text-zinc-50 hover:text-zinc-50 rounded hover:bg-[#ffffff56] pt-1 pb-1 pl-3 pr-3 lg:ml-20 lg:mr-20 " >Take Out</Link></li>
                <li className= "transition duration-500 relative text-zinc-50 hover:text-zinc-50 rounded hover:bg-[#ffffff56] pt-1 pb-1 pl-3 pr-3 lg:ml-20 lg:mr-20 ">
                <button className={styles.navbaritem}><Link href="/" onClick={() => signOut()}>Logout</Link></button></li>
            </ol>
        </div>

    );

}
}
export default Navbar; 

