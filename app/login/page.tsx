import Link from "next/link";
import Navbar from "../components/othernav";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h1 className={styles.heading}>Login</h1>

          <label className={styles.label}>Enter your Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="you@example.com"
          />

          <label className={styles.label}>Enter your Password</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Your password"
          />

          <button className={styles.loginButton}>Login</button>

          <p className={styles.signupText}>
            Don't have an account? 
            <Link className={styles.signupLink} href="/signup"> Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
