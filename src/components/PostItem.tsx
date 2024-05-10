import { Post } from "@/types/Post";
import { ViewType } from "@/types/ViewType";
import Link from "next/link";

const PostItem = ({ post, viewType }: { post: Post; viewType: ViewType }) => (
  <Link href={`/posts/${post.id}`}>
    <div
      className={`bg-darkForeground p-5 rounded-lg shadow-sm text-darkText transition hover:bg-darkForeground/60 ${
        viewType === "grid" && "h-60"
      }`}
    >
      <h2
        className={`text-xl font-bold mb-3 ${
          viewType === "grid" && "truncate"
        }`}
      >
        {post.title}
      </h2>
      <p className={`line-clamp-3 ${viewType === "grid" && "line-clamp-6"}`}>
        {post.content}
      </p>
    </div>
  </Link>
);

export default PostItem;
