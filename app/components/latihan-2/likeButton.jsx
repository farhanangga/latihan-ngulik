"use client";
import { useState } from "react";

export default function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-3 py-1 rounded transition
        ${liked ? "bg-green-500" : "bg-gray-400"}
      `}
    >
      {liked ? "Liked 👍" : "Like"}
    </button>
  );
}
