import Link from "next/link";
import Navbar from "../components/othernav";
import styles from "./Signup.module.css";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h1 className={styles.heading}>Sign Up</h1>

          <label className={styles.label}>Enter your Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Your Name"
          />

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

          <label className={styles.label}>Confirm your Password</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Confirm password"
          />

          <button className={styles.signupButton}>Sign Up</button>

          <p className={styles.loginText}>
            Already have an account? 
            <Link className={styles.loginLink} href="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
