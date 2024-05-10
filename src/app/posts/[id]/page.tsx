"use client";

import { useRole } from "@/context/RoleContext";
import { usePostStore } from "../../../stores/postStore";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";

const PostPage = ({ params }: { params: { id: string } }) => {
  const { posts } = usePostStore();
  const router = useRouter();
  const { role } = useRole();

  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4 text-darkText">
      <h1 className="text-2xl font-bold mb-4">Post Preview</h1>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
      <div className="flex flex-row gap-4 mt-6">
        <Link
          className="bg-darkForeground text-darkText px-4 py-2 rounded-lg font-bold transition hover:bg-pink w-40 text-center"
          href={"/"}
        >
          Go back
        </Link>
        {role === "author" && (
          <button
            type="button"
            className="bg-darkForeground text-darkText px-4 py-2 rounded-lg font-bold transition hover:bg-pink w-40"
            onClick={() => router.push(`/posts/edit/${post.id}`)}
          >
            Edit Post
          </button>
        )}
      </div>
    </div>
  );
};

export default PostPage;
