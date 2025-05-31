import React from "react";
import { UserCardProps } from "../models/user.interface";



const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export { UserCard };
