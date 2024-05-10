"use client";

import { useRouter } from "next/navigation";

import { useRole } from "@/context/RoleContext";
import PostList from "@/components/PostList";

function PostsPage() {
  const router = useRouter();
  const { role } = useRole();
  return (
    <div>
      <PostList />
      {role === "author" && (
        <button
          className="bg-darkForeground text-darkText px-4 py-2 rounded-lg font-bold mt-4 transition hover:bg-pink mt-8"
          onClick={() => router.push("/posts/new")}
        >
          Add New Post
        </button>
      )}
    </div>
  );
}

export default PostsPage;
