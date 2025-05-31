import React from "react";
import { UserCard } from "./UserCard";
import { UserListProps } from "../models/user.interface";
import styles from "../styles/userList.module.css";

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export { UserList };
