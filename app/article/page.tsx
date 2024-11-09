import Navbar from "../components/othernav";
import styles from "./article.module.css";

export default function Article() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.card}>
                <img 
                    src="/article1.jpg" 
                    alt="Foodpanda Logo" 
                    className={styles.image} 
                />
                
                <h1 className={styles.title}>What is Foodpanda?</h1>
                <p className={styles.paragraph}>
                    Foodpanda is a leading food ordering and delivery platform that connects users with local
                    restaurants, offering a seamless online food experience. The easy-to-use platform allows
                    customers to browse menus, place orders, and enjoy delicious meals delivered to their doorstep,
                    all at the best prices. Whether you’re craving a quick snack or a gourmet meal, Foodpanda makes it
                    easy to satisfy your appetite with just a few clicks.
                </p>
                
                <h2 className={styles.subtitle}>Foodpanda: A Timeline of Success</h2>
                <p className={styles.paragraph}>
                    Founded in 2012, Foodpanda has grown into a global food delivery marketplace,
                    operating in over 50 countries, including key regions like Bulgaria, the Asia Pacific,
                    and Romania. Headquartered in Berlin, Germany, and owned by Delivery Hero SE, Foodpanda has become a trusted name in food delivery services.
                    The platform partners with more than 115,000 restaurants across 246 cities and employs around 80,000 delivery riders to ensure prompt service.
                    In 2016, Delivery Hero acquired Foodpanda, and a year later, the platform underwent a rebranding, switching its color
                    scheme from orange to pink. Foodpanda has consistently evolved, offering discounts and unique offers to increase its customer base, completing millions of daily orders.
                </p>
                
                <h2 className={styles.sectionTitle}>Funding and Growth</h2>
                <p className={styles.paragraph}>
                    Foodpanda has raised a total of $318 million in venture capital funding,
                    with significant investments from Rocket Internet, AB Kinnevik, Phenomen Ventures,
                    and Goldman Sachs. These investments fueled the company’s rapid expansion,
                    making it a key player in the food delivery industry.
                </p>
                
                <h2 className={styles.sectionTitle}>How Does Foodpanda Work?</h2>
                <p className={styles.paragraph}>
                    Foodpanda operates through a simple and effective process:
                </p>
                <ul>
                    <li className={styles.listItem}>1. Customers browse nearby restaurants and place their orders online.</li>
                    <li className={styles.listItem}>2. Restaurants receive the order, prepare the food, and hand it to a delivery provider.</li>
                    <li className={styles.listItem}>3. The delivery provider ensures the meal reaches the customer’s doorstep.</li>
                    <li className={styles.listItem}>4. Customers pay and provide feedback based on their experience.</li>
                </ul>
                
                <h2 className={styles.sectionTitle}>Foodpanda Business Model</h2>
                <p className={styles.paragraph}>
                    Foodpanda’s business model revolves around connecting restaurants with 
                    customers who prefer to order online rather than dining out.
                    The company generates revenue through delivery fees, advertising, and various service charges, 
                    while minimizing operational costs by offering discounts for bulk purchases and maintaining an 
                    efficient delivery network.
                </p>
            </div>
        </div>
    );
}
