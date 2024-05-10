"use client";

import { useEffect } from "react";
import PostEditor from "../../../components/PostEditor";
import { usePostStore } from "../../../stores/postStore";
import { useRouter } from "next/navigation";
import { useRole } from "@/context/RoleContext";
import { Post } from "@/types/Post";

const NewPostPage = () => {
  const { addPost } = usePostStore();
  const router = useRouter();
  const { role } = useRole();

  useEffect(() => {
    if (role !== "author") {
      router.replace("/");
    }
  }, [role, router]);

  const handleSave = (post: Post) => {
    addPost(post);
    router.push("/");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Post</h1>
      <PostEditor onSave={handleSave} />
    </div>
  );
};

export default NewPostPage;
