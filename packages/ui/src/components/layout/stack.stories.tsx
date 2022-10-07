import { Text } from "../elements";
import { VStack } from "./stack";

export const Default = (): JSX.Element => (
  <VStack>
    <Text>Hello</Text>
    <Text>Stack</Text>
  </VStack>
);


export const Spacing1 = (): JSX.Element => (
  <VStack space={1}>
    <Text>Hello</Text>
    <Text>Stack</Text>
  </VStack>
);

export default {
  title: "Layouts / Stack / Vertical",
};
