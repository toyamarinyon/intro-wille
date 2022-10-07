import { PageLayout } from "@components/layout";
import { ComponentProps } from "react";
import { BlogDetail } from "../components/BlogDetail";

export const BlogDetailPage = ({
  blog,
}: ComponentProps<typeof BlogDetail>): JSX.Element => {
  return (
    <PageLayout>
      <BlogDetail blog={blog} />
    </PageLayout>
  );
};
