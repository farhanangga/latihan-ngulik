import { Suspense } from "react";
import PostList from "../../../components/latihan-2/mine/postList";

export default function Page() {
    return (
        <main className="p-8 space-y-6">
            <h1 className="text-white text-xl">RSC level 2</h1>
            <Suspense fallback={
                <p className="text-Gray-500">Loading post....</p>
            }>
                <PostList/>
            </Suspense>
        </main>
    );
}