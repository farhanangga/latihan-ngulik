// app/page.tsx — Server Component (default)

import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Testing Rendering Method</h1>

      <p>Pilih halaman untuk diuji:</p>

      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <Link
          href="/rsc"
          style={{ padding: 10, border: "1px solid #999", borderRadius: 8 }}
        >
          🔵 Halaman RSC (Server Component)
        </Link>

        <Link
          href="/csr"
          style={{ padding: 10, border: "1px solid #999", borderRadius: 8 }}
        >
          🟠 Halaman CSR (Client Component)
        </Link>
      </div>
    </main>
  );
}
