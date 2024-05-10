"use client";

import { useRouter } from "next/navigation";
import { usePostStore } from "../../../../stores/postStore";
import PostEditor from "../../../../components/PostEditor";
import { useEffect } from "react";
import { useRole } from "@/context/RoleContext";
import { Post } from "@/types/Post";

const EditPostPage = ({ params }: { params: { id: string } }) => {
  const { posts, editPost } = usePostStore();
  const router = useRouter();
  const { role } = useRole();

  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    router.replace("/");
    return null;
  }

  useEffect(() => {
    if (role !== "author") {
      router.replace("/");
    }
  }, [role, router]);

  const handleSave = (updatedPost: Post) => {
    editPost(updatedPost);
    router.push("/");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <PostEditor initialPost={post} onSave={handleSave} />
    </div>
  );
};

export default EditPostPage;
