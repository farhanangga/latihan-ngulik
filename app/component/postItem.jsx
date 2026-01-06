import LikeButton from "LikeButton";

export default function PostItem({ post }) {
  return (
    <div className="p-4 rounded-lg border shadow-sm bg-white
                    transition duration-300 hover:scale-[1.01]">
      <h2 className="font-semibold text-lg">{post.title}</h2>

      <p className="text-gray-600 mt-1">{post.body}</p>

      <div className="mt-3">
        <LikeButton id={post.id} />
      </div>
    </div>
  );
}
