import { PageLayout } from "./page";

export const Default = (): JSX.Element => <PageLayout>children</PageLayout>;
export const WithHeader = (): JSX.Element => (
  <PageLayout showHeader username="satoshi">
    children
  </PageLayout>
);

export default {
  title: "pages / Layout",
};
