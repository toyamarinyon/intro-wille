import { ReactNode } from "react";
import { Text } from "@components/typography";
import { header, headerContent, layout, logoutLink } from "./page.css";

interface Props {
  showHeader?: boolean;
  children: ReactNode;
  username?: string;
}
export const PageLayout = ({
  children,
  showHeader = false,
  username,
}: Props): JSX.Element => {
  return (
    <>
      {showHeader && username != null && (
        <header className={header}>
          <section className={headerContent}>
            <Text>Hello, {username}</Text>
            <div>
              <a href="/logout" className={logoutLink}>Logout</a>
            </div>
          </section>
        </header>
      )}
      <div className={layout}>{children}</div>
    </>
  );
};
