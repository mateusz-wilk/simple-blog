"use client";

import { ViewType } from "@/types/ViewType";
import { usePostStore } from "../stores/postStore";
import PostItem from "./PostItem";
import { useState } from "react";

const PostList = () => {
  const { posts } = usePostStore();
  const [viewType, setViewType] = useState<ViewType>("list");

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <button
          className="bg-darkForeground text-darkText px-4 py-2 rounded-lg font-bold transition hover:bg-pink"
          onClick={() => setViewType(viewType === "list" ? "grid" : "list")}
        >
          {viewType === "list" ? "Grid layout" : "List layout"}
        </button>
      </div>
      <div
        className={
          viewType === "list" ? "flex flex-col gap-4" : "grid grid-cols-3 gap-4"
        }
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} viewType={viewType} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
