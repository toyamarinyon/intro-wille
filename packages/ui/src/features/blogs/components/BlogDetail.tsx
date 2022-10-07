import { Blog } from "../models/blog";
import { Text } from "@components/typography";
import { body, postedAt, title } from "./BlogDetail.css";
import { VStack } from "@components/layout";
import { ymd } from "@helpers/dateFormatter";

export interface Props {
  blog: Blog;
}
export const BlogDetail = ({ blog }: Props): JSX.Element => {
  return (
    <article>
      <VStack space={2}>
        <h1 className={title}>{blog.title}</h1>
        <Text className={postedAt}>{ymd(blog.postedAt)}</Text>
        <Text className={body}>{blog.body}</Text>
      </VStack>
    </article>
  );
};
