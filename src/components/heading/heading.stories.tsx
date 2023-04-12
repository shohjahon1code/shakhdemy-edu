import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./heading";

const meta: Meta<typeof Heading> = {
  title: "Heading",
  component: Heading,
  argTypes: {
    tag: {
      type: "string",
      options: ["h1", "h2", "h3", "h4"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    tag: "h1",
    children: "Heading",
  },
};

export const H2: Story = {
  args: {
    tag: "h2",
    children: "Heading",
  },
};

export const H3: Story = {
  args: {
    tag: "h3",
    children: "Heading",
  },
};

export const H4: Story = {
  args: {
    tag: "h4",
    children: "Heading",
  },
};
