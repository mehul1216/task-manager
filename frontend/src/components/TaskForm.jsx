import { useEffect, useState } from "react";
import {
  createTask,
  updateTask
} from "../services/api";
function TaskForm({ onTaskCreated, editingTask, onTaskUpdated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

	useEffect(() => {
		if (editingTask) {
			setTitle(editingTask.title);
			setDescription(editingTask.description || "");
			setPriority(editingTask.priority);
		}
	}, [editingTask]);

  const handleSubmit = async (event) => {
		event.preventDefault();

		if (editingTask) {
			const data = await updateTask(
  editingTask.id,
  {
    title,
    description,
    priority
  }
);

			onTaskUpdated(data);
		} else {
			const data = await createTask({
				title,
				description,
				priority,
				status: "pending"
			});


			onTaskCreated(data);
		}
		setTitle("")
		setDescription("")
		setPriority("medium")
	};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter task title"
        />
      </div>

      <div>
        <label>Description</label>

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter task description"
        />
      </div>

      <div>
        <label>Priority</label>

        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

     <button type="submit">
			{editingTask ? "Update Task" : "Create Task"}
		</button>
    </form>
  );
}

export default TaskForm;