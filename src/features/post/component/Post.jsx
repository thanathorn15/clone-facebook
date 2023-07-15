import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function Post({post}) {
  return (
    <div className="bg-white rounded-lg border shadow px-4 py-3">
    <PostHeader post={post}/>
    <div className="mb-3"></div>
    <div className="flex flex-col gap-4">
      {post.message &&  <span>{post.message}</span>}
      {post.image &&(
        <div className="-mx-4">
        <img src={post.image} alt="" />
        </div>
        )}
    </div>
    <PostFooter post ={post}/>
    </div>
  )
}
