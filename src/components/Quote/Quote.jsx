import React from "react";
import styles from "./Quote.module.css";

const Quote = ({ quotes, numb }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.quote}>&ldquo;{quotes[numb].quote}&bdquo;</p>
      <p className={styles.quote}>~{quotes[numb].author}</p>
    </div>
  );
};

export default Quote;
