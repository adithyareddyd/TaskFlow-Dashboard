import api from "./api";

// GET all tasks
export const getTasks = async () => {
  const res = await api.get("/api/tasks");
  return res.data;
};

// CREATE task
export const createTask = async (title) => {
  const res = await api.post("/api/tasks", { title });
  return res.data;
};

// UPDATE task
export const updateTask = async (id, completed) => {
  const res = await api.put(`/api/tasks/${id}`, { completed });
  return res.data;
};

// DELETE task
export const deleteTask = async (id) => {
  const res = await api.delete(`/api/tasks/${id}`);
  return res.data;
};
