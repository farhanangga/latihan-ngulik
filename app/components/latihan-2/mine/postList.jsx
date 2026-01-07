import PostItem from "./postItem";

export default async function PostList() {

    const res = await fetch (
        "https://jsonplaceholder.typicode.com/Posts",
        {
            cache : "force-cache",
            next: {revalidate : 10}
        }
    );

    const posts = await res.json();

    const shortList = posts.slice(0, 5);

    const postingan = [
        {id:1 , username : "frhnangga_", caption : "hay my name is farhan"},
        {id:2 , username : "lauranadia_", caption : "this is my first post"},
        {id:3 , username : "tresna.sm", caption : "i love you guys"},
        {id:4 , username : "ketut.bali", caption : "Dont Play with me"},
        {id:5 , username : "sonkrasin", caption : "This Place is very beautifull"},
    ]

    return (
        <div className="grid gap-4">
            {postingan.map(p =>(
                <PostItem key={p.id} post={p}/>
            ))}
        </div>
    );
}