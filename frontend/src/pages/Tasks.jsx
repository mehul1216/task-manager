import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import { getTasks } from "../services/api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getTasks();

        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Tasks</h1>

      <Link to="/tasks/new">
        Create New Task
      </Link>

      <hr />

     {tasks.map((task) => (
        <div key={task.id}>
            <TaskCard
            title={task.title}
            status={task.status}
            />

            <Link to={`/tasks/${task.id}`}>
            View Details
            </Link>

            {" | "}

            <Link to={`/tasks/${task.id}/edit`}>
            Edit
            </Link>

            <hr />
        </div>
        ))}
    </div>
  );
}

export default Tasks;