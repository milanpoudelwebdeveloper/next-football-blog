import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 -</span>
          <span className={styles.category}> CULTURE</span>
        </div>
        <Link href="/post">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, dicta?
          </h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor
          commodi a inventore obcaecati temporibus odio eligendi tempore facere
          amet. commodi a inventore obcaecati temporibus odio
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
