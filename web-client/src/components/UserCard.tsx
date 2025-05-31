import React from "react";
import { UserCardProps } from "../models/user.interface";
import styles from "../styles/userCard.module.css";

const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  return (
    <div className={styles.userCard}>
      <h2 className={styles.userName}>{name}</h2>
      <p className={styles.userEmail}>{email}</p>
    </div>
  );
};

export { UserCard };
