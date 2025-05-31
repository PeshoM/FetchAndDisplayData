import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserCard: React.FC<User> = ({ name, email, phone }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export { UserCard };
export type { User };
