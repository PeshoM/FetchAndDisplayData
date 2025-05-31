import React from "react";
import { UserCard } from "./UserCard";
import { UserListProps } from "../models/user.interface";


const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export { UserList };
