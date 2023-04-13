import type { Meta, StoryObj } from "@storybook/react";
import Text from "./text";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  argTypes: {
    size: {
      type: "string",
      defaultValue: "m",
      options: ["m", "l", "s"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Large: Story = {
  args: {
    children: "Text",
    size: "l",
  },
};

export const Medium: Story = {
  args: {
    children: "Text",
    size: "m",
  },
};

export const Small: Story = {
  args: {
    children: "Text",
    size: "s",
  },
};
