export type Task = {
  id: number;
  title: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High";
  dueDate: string; // YYYY-MM-DD
};
