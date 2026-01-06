import { Suspense } from "react";
import PostList from "components/PostList";

export default function Page() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">RSC Level 2</h1>

      <Suspense fallback={
        <p className="text-gray-500">Loading posts...</p>
      }>
        <PostList />
      </Suspense>
    </main>
  );
}
