import React from "react";
import styles from "../styles/loadingScreen.module.css";

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.circle}></div>
    </div>
  );
};

export { LoadingScreen };
