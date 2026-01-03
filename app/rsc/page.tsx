// app/rsc/page.tsx — React Server Component

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { revalidate: 10 }, // contoh ISR optional
  });

  return res.json();
}

export default async function RscPage() {
  const data = await getData();

  return (
    <main style={{ padding: 24 }}>
      <h2>Halaman RSC (Server Rendered)</h2>
      <p>Dirender di server — JavaScript dikirim lebih sedikit.</p>

      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </main>
  );
}
