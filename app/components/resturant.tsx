import Image from "next/image";
import styles from "./resturant.module.css";

const restaurants = [
  { name: 'Pizza Hut', image: '/pizzahut.jpg', desc: 'Fast Pizza Delivery' },
  { name: 'McDonald\'s', image: '/mcdonalds.jpg', desc: 'Burgers, Fries & More' },
  { name: 'KFC', image: '/kfc.jpg', desc: 'Finger Lickin\' Good' },
  { name: 'Subway', image: '/subway.jpg', desc: 'Healthy Subs' },
];

export default function RestaurantGrid() {
  return (
    <section id="restaurants" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Available Top Restaurants</h2>
        <div className={styles.grid}>
          {restaurants.map((restaurant, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                width={400}
                height={300}
                className={styles.image}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{restaurant.name}</h3>
                <p className={styles.cardDesc}>{restaurant.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
