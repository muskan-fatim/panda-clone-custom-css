import Image from "next/image";
import styles from "./main.module.css";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.textSection}>
          <h1 className={styles.heading}>
            It's the food and groceries you love, delivered
          </h1>

          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter your location"
              className={styles.inputField}
            />
            <button className={styles.findFoodButton}>Find food</button>
          </div>
        </div>

        <Image
          src="/panda-background.webp"
          alt="Panda background"
          height={600}
          width={2000}
          className={styles.image}
        />
      </div>
    </div>
  );
}
