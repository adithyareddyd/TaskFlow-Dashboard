"use client";

import { useEffect, useState } from "react";
import TaskForm from "../../components/TaskForm";
import TaskCard from "../../components/TaskCard";
import FilterTabs from "../../components/FilterTabs";
import TaskStats from "../../components/TaskStats";
import { Task } from "../../types/task";

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (
    title: string,
    priority: "Low" | "Medium" | "High",
    dueDate: string
  ) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      priority,
      dueDate,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-blue-600">

        <div className="max-w-4xl mx-auto px-6 py-4">
         <h1 className="text-2xl font-bold text-white">

            TaskFlow Dashboard
          </h1>
          <p className="text-sm text-blue-100">

            Manage your tasks efficiently
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto p-6 space-y-6">
        <TaskStats tasks={tasks} />

        <div className="bg-white p-4 rounded shadow">
          <TaskForm onAddTask={addTask} />
          <FilterTabs filter={filter} setFilter={setFilter} />

          {filteredTasks.length === 0 && (
            <p className="text-center text-gray-400 mt-4">
              No tasks found
            </p>
          )}

          <div className="mt-4">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
