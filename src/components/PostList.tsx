"use client";

import { ViewType } from "@/types/ViewType";
import { usePostStore } from "../stores/postStore";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import { TagType } from "@/types/TagType.d ";
import { Badge } from "@radix-ui/themes";
import { Post } from "@/types/Post";

const PostList = () => {
  const { posts } = usePostStore();
  const [viewType, setViewType] = useState<ViewType>("list");
  const [selectedTags, setSelectedTags] = useState<TagType[]>([
    "Tech",
    "Travel",
    "Food",
  ]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const toggleTag = (tag: TagType) => {
    setSelectedTags((prevTags: TagType[]) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((prevTag) => prevTag !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  useEffect(() => {
    setFilteredPosts(posts.filter((post) => selectedTags.includes(post.tag)));
  }, [selectedTags]);

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
      <div className="flex flex-row justify-center items-center gap-4 mb-4">
        <h2 className="font-semibold">Filter:</h2>
        <div className="flex space-x-2">
          {["Tech", "Travel", "Food"].map((tag) => (
            <Badge
              key={tag}
              className="cursor-pointer"
              color={`${
                selectedTags.includes(tag as TagType) ? "crimson" : "gray"
              }`}
              variant={`${
                selectedTags.includes(tag as TagType) ? "solid" : "outline"
              }`}
              onClick={() => toggleTag(tag as TagType)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div
        className={
          viewType === "list" ? "flex flex-col gap-4" : "grid grid-cols-3 gap-4"
        }
      >
        {filteredPosts.map((post) => (
          <PostItem key={post.id} post={post} viewType={viewType} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
