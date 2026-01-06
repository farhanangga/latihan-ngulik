import PostItem from "PostItem";

export default async function PostList() {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "force-cache",     // disimpan di server
      next: { revalidate: 10 }  // refresh setiap 10 detik
    }
  );

  const posts = await res.json();

  // ambil 5 post pertama
  const shortList = posts.slice(0, 5);

  return (
    <div className="grid gap-4">
      {shortList.map(p => (
        <PostItem key={p.id} post={p} />
      ))}
    </div>
  );
}
