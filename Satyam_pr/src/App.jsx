import React, { useState } from "react";
import "./App.css";

const initialQuests = [
  { id: 1, text: "Talk to a new person today", xp: 20, done: false },
  { id: 2, text: "Learn one new fact", xp: 10, done: false },
  { id: 3, text: "Do a good deed", xp: 25, done: false },
];

export default function App() {
  const [quests, setQuests] = useState(initialQuests);
  const [xp, setXp] = useState(0);

  const completeQuest = (id, questXp) => {
    setQuests((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, done: true } : q
      )
    );
    setXp((prev) => prev + questXp);
  };

  const level = Math.floor(xp / 100) + 1;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Real Life Quest</h1>

      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <p className="text-lg">XP: {xp}</p>
        <p className="text-lg">Level: {level}</p>
      </div>

      <h2 className="text-xl font-semibold mb-3">Daily Quests</h2>

      <div className="grid gap-3">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{quest.text}</p>
              <p className="text-sm text-gray-500">+{quest.xp} XP</p>
            </div>

            {!quest.done ? (
              <button
                onClick={() => completeQuest(quest.id, quest.xp)}
                className="bg-green-500 text-white px-4 py-2 rounded-xl"
              >
                Complete
              </button>
            ) : (
              <span className="text-green-600 font-semibold">Done</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}