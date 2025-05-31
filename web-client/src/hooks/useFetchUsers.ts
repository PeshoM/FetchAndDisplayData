import { useState, useEffect } from "react";
import { User } from "../models/user.interface";

interface UseFetchUsersResult {
  users: User[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export const useFetchUsers = (): UseFetchUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Error loading users.");
      }

      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      console.error("Fetch error:", err); // Debug log
      setError(new Error("Error loading users."));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isLoading, error, refetch: fetchUsers };
};
