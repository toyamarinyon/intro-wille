import { Story } from "@ladle/react";
import { blogs } from "../models/blogMock";
import { BlogListPage } from "./BlogListPage";

export const Default: Story<{ onClickBlogLink: () => void }> = ({
  onClickBlogLink,
}): JSX.Element => (
  <BlogListPage
    blogs={blogs}
    blogLinkProps={{
      onClick: onClickBlogLink,
    }}
  />
);

Default.argTypes = {
  onClickBlogLink: {
    action: "clicked",
  },
};

export default {
  title: "features / blogs / pages / BlogListPage",
};
