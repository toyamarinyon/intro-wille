import { VStack } from "@components/layout";
import { Text } from "@components/typography";
import { ymd } from "@helpers/dateFormatter";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { Blog } from "../models/blog";
import { blogListItem, body, postedAt } from "./BlogListItem.css";

export interface Props {
  blog: Blog;
  linkProps?: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
}
export const BlogListItem = ({ blog, linkProps }: Props): JSX.Element => {
  return (
    <article className={blogListItem}>
      <VStack space={2}>
        <header>
          <h2>
            <a {...linkProps}>{blog.title}</a>
          </h2>
        </header>
        <Text className={postedAt}>{ymd(blog.postedAt)}</Text>
        <Text className={body}>{blog.body}</Text>
      </VStack>
    </article>
  );
};
