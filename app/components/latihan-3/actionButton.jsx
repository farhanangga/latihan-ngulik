"use client";
import { useState } from "react";

export default function ActionButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className={`px-4 py-2 rounded text-white transition
        ${active ? "bg-green-500" : "bg-gray-400"}
      `}
    >
      {active ? "Active" : "Activate"}
    </button>
  );
}
