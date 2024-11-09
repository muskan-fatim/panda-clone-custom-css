'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./nav.module.css"
export default function Navbar() {
    const router = useRouter(); 
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarlogo}>
                    <Image className={styles.navbarlogoimage}src="/icon.PNG" alt="panda" height={25} width={30} />
                    <h1 className={styles.navbartitle}>foodpanda</h1>
                </div>
                <div className={styles.navbarbuttons}>
                    <button onClick={() => router.push("/login")} className={`${styles.navbarbutton } ${styles.loginbutton }`}>Login</button>
                    <button onClick={() => router.push("/signup")} className={`${styles.navbarbutton} ${ styles.signupbutton}`}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}
