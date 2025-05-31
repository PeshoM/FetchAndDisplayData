import { UserList } from "./components/UserList";
import { LoadingScreen } from "./components/LoadingScreen";
import { ErrorScreen } from "./components/ErrorScreen";
import { useFetchUsers } from "./hooks/useFetchUsers";
import styles from "./styles/app.module.css";

function App() {
  const { users, isLoading, error, refetch } = useFetchUsers();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error != null) {
    return <ErrorScreen message={error.message} onRetry={refetch} />;
  }

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.title}>Users</h1>
        <UserList users={users} />
      </div>
    </>
  );
}

export default App;
