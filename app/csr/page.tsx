// app/csr/page.tsx — Client Component

"use client";

import { useEffect, useState } from "react";

export default function CsrPage() {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((r) => r.json())
      .then(setPost);
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h2>Halaman CSR (Client-Side Rendering)</h2>
      <p>Dirender di browser — data diambil setelah halaman tampil.</p>

      {!post ? <p>Loading...</p> : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </main>
  );
}
