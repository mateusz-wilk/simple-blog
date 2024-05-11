"use client";

import { useState } from "react";
import { usePostStore } from "../stores/postStore";
import Link from "next/link";
import { Post } from "@/types/Post";
import * as Form from "@radix-ui/react-form";

const PostEditor = ({
  initialPost,
  onSave,
}: {
  initialPost?: Post;
  onSave: (post: Post) => void;
}) => {
  const [title, setTitle] = useState(initialPost?.title || "");
  const [content, setContent] = useState(initialPost?.content || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave({ id: initialPost?.id || String(Date.now()), title, content });
  };

  return (
    <Form.Root onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <Form.Field name="title" className="flex flex-col">
        <label className="text-xl font-bold mb-2">Title</label>
        <Form.Control asChild>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="bg-darkForeground p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </Form.Control>
        <div className="h-5 mt-2">
          <Form.Message
            className="FormMessage text-red-400"
            match="valueMissing"
          >
            Please enter a title
          </Form.Message>
        </div>
      </Form.Field>
      <Form.Field name="content" className="flex flex-col">
        <label className="text-xl font-bold mb-2">Content</label>
        <Form.Control asChild>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className=" bg-darkForeground p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            rows={20}
          />
        </Form.Control>
        <div className="h-5 mt-2">
          <Form.Message
            className="FormMessage text-red-400"
            match="valueMissing"
          >
            Please enter the content
          </Form.Message>
        </div>
      </Form.Field>
      <div className="flex gap-4 items-center">
        <Link
          className="bg-darkForeground text-darkText px-4 py-2 rounded-lg font-bold transition hover:bg-pink w-40 text-center"
          href={"/"}
        >
          Go back
        </Link>
        <Form.Submit asChild>
          <button className="bg-darkForeground text-darkText px-4 py-2 rounded-lg font-bold transition hover:bg-pink w-40 text-center">
            Save
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default PostEditor;
