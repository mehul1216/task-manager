import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";

import TaskForm from "../components/TaskForm";
import { getTask } from "../services/api";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleTaskUpdated = () => {
    navigate(`/tasks/${id}`);
  };

  if (loading) {
    return <p>Loading task...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Edit Task</h1>

      <TaskForm
        editingTask={task}
        onTaskUpdated={handleTaskUpdated}
      />
    </div>
  );
}

export default EditTask;