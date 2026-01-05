//GPT VERSION LEVEL 1
export default async function Page() {

    const posts = [
        { id: 1, title: "Belajar RSC Level 1"},
        { id: 2, title: "Memahami Server Rendering"},
    ];

    posts.push({ id: 3, title: "Next Level" });

    return (
        <main>
            <h1>React Server Component - Level 1 </h1>
            <p>Component ini berjalan di server</p>

            <ul>
                {posts.map(p =>(
                    <li key={p.id}>{p.title}</li>
                ) )}
            </ul>
        </main>
    );
}