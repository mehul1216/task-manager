import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function NewTask() {
  const navigate = useNavigate();

  const handleTaskCreated = () => {
    navigate("/tasks");
  };

  return (
    <div>
      <h1>Create New Task</h1>

      <TaskForm
        onTaskCreated={handleTaskCreated}
      />
    </div>
  );
}

export default NewTask;