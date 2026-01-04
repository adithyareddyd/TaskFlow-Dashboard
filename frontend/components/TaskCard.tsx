"use client";

import { Task } from "../types/task";

type Props = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskCard({ task, onToggle, onDelete }: Props) {
  return (
    <div
      className={`border rounded-xl p-5 shadow-sm space-y-3 ${
        task.completed ? "bg-gray-50" : "bg-white"
      }`}
    >
      {/* TOP ROW */}
      <div className="flex items-start gap-3">
        {/* CHECKBOX */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mt-1 h-5 w-5 accent-blue-600 cursor-pointer"
        />

        {/* TASK CONTENT */}
        <div className="flex-1">
          <p
            className={`text-lg font-semibold ${
              task.completed
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {task.title}
          </p>

          <div className="flex gap-3 text-sm mt-2">
            {/* PRIORITY */}
            <span
              className={`px-3 py-1 rounded-full font-medium ${
                task.priority === "High"
                  ? "bg-red-100 text-red-700"
                  : task.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {task.priority}
            </span>

            {/* DUE DATE */}
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              Due {task.dueDate}
            </span>

            {/* COMPLETED BADGE */}
            {task.completed && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Completed
              </span>
            )}
          </div>
        </div>
      </div>

      {/* DELETE */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-sm text-red-500 hover:text-red-700 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}
