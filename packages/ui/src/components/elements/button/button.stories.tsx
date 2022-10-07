import { Button } from "./button";
export const Default = (): JSX.Element => <Button>Hello</Button>;
export const FullWidth = (): JSX.Element => <Button fullWidth>Hello</Button>;
export const LinkStyle = (): JSX.Element => <div style={{backgroundColor: '#111'}}><Button style="link">Hello</Button></div>;

export default {
  title: "Components / Elements / Button",
};
