import { HStack, VStack } from "@components/layout";
import { Text } from "@components/typography";
import { sprinkles } from "@styles/sprinkles.css";
import { logo, logoLayout, tagline } from "./Brand.css";
import { Logo } from "./logo";
import { Symbol } from "./symbol";

export const LogoAndSymbol = (): JSX.Element => (
  <section
    className={sprinkles({
      display: "flex",
      alignItems: "center",
      flexDirection: {
        mobile: "column-reverse",
        desktop: "row",
      },
      gap: {
        mobile: 5,
        desktop: 4,
      },
    })}
  >
    <div className={logoLayout}>
      <div className={logo}>
        <Logo />
      </div>

      <Text className={tagline}>
        Render React components on the edge and hydration on the browser.
      </Text>
    </div>
    <Symbol />
  </section>
);
