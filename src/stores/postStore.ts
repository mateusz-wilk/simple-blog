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
          tag: "Food",
        },
        {
          id: "2",
          title:
            "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC",
          content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
          tag: "Tech",
        },
        {
          id: "3",
          title: "1914 translation by H. Rackham",
          content:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
          tag: "Travel",
        },
        {
          id: "4",
          title: "Where does it come from?",
          content:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet, comes from a line in section 1.10.32.",
          tag: "Travel",
        },
        {
          id: "5",
          title: "Quisque suscipit risus ac dignissim efficitur",
          content:
            "Etiam in fringilla urna. Nullam pharetra sed erat ut pretium. Etiam sollicitudin dignissim odio, in elementum nibh convallis in. Donec vestibulum malesuada libero, ut interdum ante molestie ut. Integer vitae sapien ante. Nam eleifend venenatis eros sit amet ornare. Nunc eget venenatis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras lacus massa, bibendum a consectetur ac, malesuada at tortor. Morbi accumsan laoreet dui, in molestie turpis sodales ac. Sed aliquam magna non mauris pharetra, vel semper libero euismod. Pellentesque et ultrices erat, vitae sollicitudin lectus. In magna lacus, varius et scelerisque et, feugiat ut libero. Curabitur venenatis rhoncus condimentum. Sed iaculis malesuada faucibus.",
          tag: "Tech",
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
