"use client";

type Props = {
  filter: string;
  setFilter: (value: string) => void;
};

export default function FilterTabs({ filter, setFilter }: Props) {
  const tabs = ["all", "completed", "pending"];

  return (
    <div className="flex gap-3 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            filter === tab
              ? "bg-blue-600 text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}
