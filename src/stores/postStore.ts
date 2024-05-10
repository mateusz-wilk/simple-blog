import { Post } from "@/types/Post";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
  editPost: (post: Post) => void;
}

export const usePostStore = create(
  persist<PostStore>(
    (set, get) => ({
      posts: [
        {
          id: "1",
          title: "The standard Lorem Ipsum passage, used since the 1500s",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          id: "2",
          title:
            "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC",
          content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        },
      ],
      addPost: (post: Post) => {
        set({ posts: [...get().posts, post] });
      },
      editPost: (updatedPost: Post) => {
        set({
          posts: get().posts.map((post) =>
            post.id === updatedPost.id ? updatedPost : post
          ),
        });
      },
    }),
    { name: "post-storage" }
  )
);
