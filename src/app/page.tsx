import Image from "next/image";
import styles from "./page.module.css";
import Artwork from "./artwork";

// Import Artwork Here
import Lights from "../artImages/lights.jpg";
import BadB from "../artImages/badbunny.jpg";
import Boy from "../artImages/boy.jpg";
import Kendall from"../artImages/kendall.png";
import Kuglen from"../artImages/kuglen.jpg";

import MyIcon from "./favicon.ico";

export default function Home() {
  return (

     <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Ally Santana
        </h1>

        <div className={styles.artgrid}>
          <Artwork 
            flamingo="Hello World"
            paragraph="some text" 
            artwork={BadB}
          />
          <Artwork 
            flamingo="Lights"
            paragraph="Description of Lights" 
            artwork={Lights}
          />
          {/* This is Artwork
          <>
            <h1>{props.flamingo}</h1>
            <p>{props.paragraph}</p>
            <img src={props.artworkImage} />
          </>
          Until here */}
          <Artwork 
            artwork={Boy}
            flamingo="Hello Mars"
            paragraph="some text"
          />
          <Artwork 
            artwork={Kendall}
            flamingo="Hello World" 
            paragraph="some text" 
          />

          <Artwork
            artwork={Kuglen}
            flamingo="Hello World" 
            paragraph="some text"
          />
        </div>

        <h2> 
        {/* <img src="" alt="icon image" /> */}
        <p> Ally's website is coming soon...</p>
        </h2>
      </div>
      <div className={styles.grid}>
      </div>
    </main>
  );
}



