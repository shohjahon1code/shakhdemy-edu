import type { ComponentStory, Meta, StoryObj } from "@storybook/react";
import ScrollUp from "./scroll-up";
import Heading from "../heading/heading";

const meta: Meta<typeof ScrollUp> = {
  title: "ScrollUp",
  component: ScrollUp,
};

export default meta;
type Story = StoryObj<typeof ScrollUp>;

export const ScrollUps: ComponentStory<typeof ScrollUp> = () => {
  return (
    <div style={{height: '200vh'}}>
      <Heading tag="h1">Scrooll Down</Heading>
      <ScrollUp />
    </div>
  );
};
