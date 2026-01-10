import LikeButton from "./likeButton";

export default function PostItem({ post }) {
  return (

    // POSTINGAN
    <div className="w-full sm:w-100 border-none sm:border-2 border-gray-200 rounded-lg ">
        {/* HEAD */}
        <div className="border-t-2 sm:border-none p-2 flex gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-400">

            </div>
            <div className="my-auto">
                <h1 className="font-bold text-gray-800">{post.username}</h1>
            </div>
        </div>
        <div className="bg-gray-400 h-120 sm:h-100">
            
        </div>
        <div className="pt-1 px-1 ">
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
