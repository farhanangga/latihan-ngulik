import LikeButton from "./likeButton";

export default function PostItem({ post }) {
  return (

    // POSTINGAN
    <div className="w-100 border-2 border-gray-200 rounded-lg">
        {/* HEAD */}
        <div className="p-2 flex gap-2">
            <div className="h-6 w-6 rounded-full bg-gray-400">

            </div>
            <div>
                <h1 className="font-bold text-gray-800">{post.username}</h1>
            </div>
        </div>
        <div className="bg-gray-400 w-full h-100">
            
        </div>
        <div className="p-1  h-9">
            <LikeButton id={post.id} />
        </div>
        <div className="w-full px-2 pb-2">
            <p className="text-gray-800 leading-relaxed">
                <span className="font-bold mr-1">
                {post.username}
                </span>
                {post.caption}
            </p>
        </div>
    </div>
  );
}
