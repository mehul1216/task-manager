import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to Task Manager</p>

      <Link to="/tasks">
        View Tasks
      </Link>

      <br />

      <Link to="/tasks/new">
        Create Task
      </Link>
    </div>
  );
}

export default Dashboard;