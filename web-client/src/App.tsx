import { useState } from "react";
import { UserList } from "./components/UserList";
import { useFetchUsers } from "./hooks/useFetchUsers";
import styles from "./styles/app.module.css";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const users = useFetchUsers(setIsLoading);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className={styles.app}>
          <h1 className={styles.title}>Users</h1>
          <UserList users={users} />
        </div>
      )}
    </>
  );
}

export default App;
