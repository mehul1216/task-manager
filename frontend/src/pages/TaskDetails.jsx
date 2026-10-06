import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTask } from "../services/api";

function TaskDetails() {
  const { id } = useParams();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getTask(id);

        setTask(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  if (loading) {
    return <p>Loading task...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>{task.title}</h1>

      <p>
        Description: {task.description}
      </p>

      <p>
        Status: {task.status}
      </p>

      <p>
        Priority: {task.priority}
      </p>

      <p>
        Due Date: {task.due_date}
      </p>

      <Link to="/tasks">
        Back to Tasks
      </Link>
    </div>
  );
}

export default TaskDetails;