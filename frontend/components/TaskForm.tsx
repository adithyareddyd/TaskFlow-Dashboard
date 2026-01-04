"use client";

import { useState } from "react";

type Props = {
  onAddTask: (
    title: string,
    priority: "Low" | "Medium" | "High",
    dueDate: string
  ) => void;
};

export default function TaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] =
    useState<"Low" | "Medium" | "High">("Low");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !dueDate) return;
    onAddTask(title, priority, dueDate);
    setTitle("");
    setPriority("Low");
    setDueDate("");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border space-y-3">
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 
text-gray-800 placeholder-gray-400
focus:outline-none focus:ring-2 focus:ring-blue-500"

      />

      <div className="flex gap-3">
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "Low" | "Medium" | "High")
          }
          className="border border-gray-300 rounded-lg px-4 py-3 
bg-white text-gray-700 cursor-pointer"

        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 
text-gray-700 cursor-pointer"

        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg 
font-semibold hover:bg-blue-700 transition"

        >
          Add
        </button>
      </div>
    </div>
  );
}
