import { toastContentWrapper, alert } from "./alert.css";
import { Text } from "@components/typography";

export const Alert = (): JSX.Element => (
  <div className={alert}>
    {/* <section className={toastContentWrapper}> */}
      <Text>hello</Text>
    {/* </section> */}
  </div>
);
