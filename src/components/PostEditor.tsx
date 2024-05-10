"use client";

import { useState } from "react";
import { usePostStore } from "../stores/postStore";
import Link from "next/link";
import { Post } from "@/types/Post";

const PostEditor = ({
  initialPost,
  onSave,
}: {
  initialPost?: Post;
  onSave: (post: Post) => void;
}) => {
  const [title, setTitle] = useState(initialPost?.title || "");
  const [content, setContent] = useState(initialPost?.content || "");

  const savePost = () => {
    onSave({ id: initialPost?.id || String(Date.now()), title, content });
  };

  return (
    <div className="flex flex-col gap-4 text-darkText">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border bg-darkForeground p-2 rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="border bg-darkForeground p-2 rounded"
        rows={20}
      />

      <div className="flex flex-row gap-4 mt-6">
        <Link
          className="bg-darkForeground text-darkText px-4 py-2 rounded-lg font-bold transition hover:bg-pink w-40 text-center"
          href={"/"}
        >
          Go back
        </Link>
        <button
          onClick={savePost}
          className="bg-darkForeground text-darkText px-4 py-2 rounded-lg font-bold transition hover:bg-pink w-40"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PostEditor;
