import { useState, useEffect } from "react";
import { User } from "../models/user.interface";

const useFetchUsers = (setIsLoading: (isLoading: boolean) => void) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {

    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  return users;
};

export { useFetchUsers };
