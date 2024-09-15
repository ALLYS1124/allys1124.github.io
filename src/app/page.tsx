import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

     <main className={styles.main}>
      <div className={styles.description}>
        <h1>
        <p> Ally Santana</p>
        </h1>

        <h2> 
        <img src="./favicon.ico" alt="icon image" />
        <p> Ally's website is coming soon...</p>
        </h2>
      </div>
      <div className={styles.grid}>
      </div>
    </main>
  );
}



