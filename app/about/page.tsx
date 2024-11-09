'use client';
import Image from "next/image";
import Navbar from "../components/othernav";
import styles from "./about.module.css";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className={styles.aboutContainer}>
                <div className={styles.card}>
                    <h1 className={styles.heading}>About Us</h1>
                    <div className={`${styles.contentWrapper} lg:flex-row`}>
                        <div className={`${styles.imageContainer} lg:w-1/2`}>
                            <Image 
                                src="/team.jpg" 
                                alt="Team Image" 
                                width={500} 
                                height={500} 
                                className={styles.image}
                            />
                        </div>

                        {/* Text Section */}
                        <div className={`${styles.textSection} lg:w-1/2`}>
                            <p className={styles.paragraph}>
                                Welcome to <span className={styles.highlight}>foodpanda</span>, your go-to platform for online food delivery. 
                                Our mission is to bring the best food from your favorite restaurants directly to your doorstep, making dining easy and convenient.
                            </p>
                            <p className={styles.paragraph}>
                                Founded in 2012, we have grown to serve millions of customers across multiple countries, partnering with top restaurants 
                                and striving for excellence in every meal we deliver.
                            </p>
                            <p className={styles.paragraph}>
                                Our team is passionate about creating the best food delivery experience for you. We focus on fast service, quality food, and 
                                a seamless platform to ensure that every time you order with us, it’s a delightful experience.
                            </p>
                            <p className={styles.paragraph}>
                                Thank you for choosing <span className={styles.highlight}>foodpanda</span>! We look forward to serving you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
