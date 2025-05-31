import { UserList } from "./components/UserList";
import { useFetchUsers } from "./hooks/useFetchUsers";
import styles from "./styles/app.module.css";

function App() {
  const users = useFetchUsers();

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Users</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
