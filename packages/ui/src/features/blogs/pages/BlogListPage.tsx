import { LogoAndSymbol } from "@components/brand/Brand";
import { VStack, PageLayout } from "@components/layout";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { BlogListItem } from "../components/BlogListItem";
import { Blog } from "../models/blog";

interface Props {
  blogs: Blog[];
  blogLinkProps?: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
}

export const BlogListPage = ({ blogs, blogLinkProps }: Props): JSX.Element => {
  return (
    <PageLayout>
      <section>
        <LogoAndSymbol />
        <VStack space={4}>
          {blogs.map((blog) => (
            <BlogListItem blog={blog} linkProps={blogLinkProps} />
          ))}
        </VStack>
      </section>
    </PageLayout>
  );
};
