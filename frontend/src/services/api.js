const API_URL = `${import.meta.env.VITE_API_URL}/api/v1`;

export const getTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      task: task
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.join(", ") || "Failed to create task");
  }

  return data;
};

export const updateTask = async (id, task) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      task: task
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.join(", ") || "Failed to update task");
  }

  return data;
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
};

export const getTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch task");
  }

  return response.json();
};