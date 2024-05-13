import { TagType } from "./TagType.d ";

export interface Post {
  id: string;
  title: string;
  content: string;
  tag: TagType;
}
