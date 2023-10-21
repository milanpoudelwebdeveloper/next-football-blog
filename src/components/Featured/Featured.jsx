import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey Milan Poude here!</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="featured" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            incidunt commodi nam ipsam amet rerum molestiae sapiente quae fuga,
            a totam, delectus deleniti iusto quo quis officiis porro accusamus
            nostrum!
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
