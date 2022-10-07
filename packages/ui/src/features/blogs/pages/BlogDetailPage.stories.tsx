import { whyICreatedTheWille } from "../models/blogMock";
import { BlogDetailPage } from "./BlogDetailPage";

export const Default = (): JSX.Element => (
  <BlogDetailPage blog={whyICreatedTheWille} />
);

export default {
  title: "features / blogs / pages / BlogDetailPage",
};
