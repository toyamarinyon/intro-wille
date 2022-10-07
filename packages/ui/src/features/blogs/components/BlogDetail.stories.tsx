import { Story } from "@ladle/react";
import { whyICreatedTheWille } from "../models/blogMock";
import { BlogDetail } from "./BlogDetail";

export const Default: Story = (): JSX.Element => (
  <BlogDetail blog={whyICreatedTheWille} />
);

export default {
  title: "features / blogs / components / BlogDetail",
};
