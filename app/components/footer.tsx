import Image from "next/image";
import styles from "./footer.module.css"; // Import custom CSS file

export default function BusinessLunch() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.mainHeading}>You prepare the food, we handle the rest</h1>
        <div className={styles.relativeImage}>
          <Image
            src="/home-corporate-pk.webp"
            alt="Chef cooking"
            width={1500}
            height={600}
            className={styles.fullWidthImage}
          />
          <div className={styles.overlay}>
            <h2 className={styles.overlayHeading}>Food panda for bussiness</h2>
            <p className={styles.overlayDescription}>
            Order lunch or fuel for work-from-home, late nights in the office,
              corporate events, client meetings, and much more.
            </p>
          </div>
</div>
</div>
      <div className={styles.mainContent}>
        <h1 className={styles.mainHeading}>You prepare the food, we handle the rest</h1>
        <div className={styles.relativeImage}>
          <Image
            src="/chef.webp"
            alt="Chef cooking"
            width={1500}
            height={600}
            className={styles.fullWidthImage}
          />
          <div className={styles.overlay}>
            <h2 className={styles.overlayHeading}>List your restaurant or shop on foodpanda</h2>
            <p className={styles.overlayDescription}>
              Would you like millions of new customers to enjoy your amazing food and groceries? 
              So would we! Let’s start our partnership today!
            </p>
          </div>
        </div>
        <div>
              <h3>How can I get foodpanda delivery?</h3>
              <p>To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!</p>
            </div>

            <div>
              <h3>Which takeout restaurants open now near me?</h3>
              <p>You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.</p>
            </div>

            <div>
              <h3>Does foodpanda deliver 24 hours?</h3>
              <p>Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late-night delivery. Please check which places in Pakistan deliver to you within 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.</p>
            </div>

            <div>
              <h3>Can you pay cash for foodpanda?</h3>
              <p>Yes, you can pay cash on delivery for foodpanda in Pakistan.</p>
            </div>

            <div>
              <h3>How can I pay foodpanda online?</h3>
              <p>You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.</p>
            </div>

            <div>
              <h3>Can I order foodpanda for someone else?</h3>
              <p>Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.</p>
            </div>

            <div>
              <h3>How much does foodpanda charge for delivery?</h3>
              <p>Delivery fee charged by foodpanda in Pakistan depends on many operational factors, most of all - location and the restaurant you are ordering from. You can always check the delivery fee while forming your order. Besides, you can filter the restaurants by clicking on the "Free Delivery" icon at the top of your restaurant listing.</p>
            </div>

            <div>
              <h3>What restaurants let you order online?</h3>
              <p>There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example, KFC, McDonald's, Pizza Hut, OPTP, Hardee's, Domino's, Kababjees and many-many more! In order to check all the restaurants near you that deliver, just type in your address and discover all the available places.</p>
            </div>

            <div>
              <h3 >Does foodpanda have minimum order?</h3>
              <p>Yes, many restaurants have a minimum order. The minimum order value depends on the restaurant you order from and is indicated during your ordering process.</p>
            </div>

            <div>
              <h3>What is the difference between delivery and Pick-Up?</h3>
              <p>If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to your chosen delivery address. If you choose Pick-Up, you can takeaway your food directly from the restaurant for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only.</p>
            </div>
      </div>
    </div>
  );
}
