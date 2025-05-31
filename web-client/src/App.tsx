import { UserList } from "./components/UserList";
import { useFetchUsers } from "./hooks/useFetchUsers";

function App() {
  const users = useFetchUsers();

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
