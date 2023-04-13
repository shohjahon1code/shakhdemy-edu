import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./tag";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
  argTypes: {
    color: {
      type: "string",
      description: "Button color Style",
      defaultValue: "primary",
      options: ["red", "green", "primary"],
      control: {
        type: "select",
      },
    },
    size: {
      type: "string",
      description: "Button Size",
      defaultValue: "primary",
      options: ["m", "l", "s"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Green: Story = {
  args: {
    children: "Text",
    size: "m",
    color: "green",
  },
};

export const Red: Story = {
  args: {
    children: "Text",
    color: "red",
    size: "m",
  },
};

export const Primary: Story = {
  args: {
    children: "Text",
    color: "primary",
    size: "m",
  },
};
