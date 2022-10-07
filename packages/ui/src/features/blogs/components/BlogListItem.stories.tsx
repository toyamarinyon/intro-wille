import { Story } from "@ladle/react";
import { whyICreatedTheWille } from "../models/blogMock";
import { BlogListItem } from "./BlogListItem";

export const Default: Story<{ onClickLink: () => void }> = ({
  onClickLink,
}): JSX.Element => (
  <BlogListItem
    blog={whyICreatedTheWille}
    linkProps={{
      onClick: onClickLink,
    }}
  />
);

Default.argTypes = {
  onClickLink: {
    action: "clicked",
  },
};

export default {
  title: "features / blogs / components / BlogListItem",
};
