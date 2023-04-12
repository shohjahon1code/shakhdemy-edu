import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./icon-button";

const meta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
  argTypes: {
    icon: {
      type: "string",
      defaultValue: "close",
      options: ["menu", "close", "up"],
      control: {
        type: "radio",
      },
    },
    appearance: {
      type: 'string',
      defaultValue: 'primary',
      options: ['primary', 'white'],
      control: {
        type: 'select'
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const MenuIcon: Story = {
  args: {
    icon: "menu",
    appearance: "primary",
  },
};

export const CloseIcon: Story = {
  args: {
    icon: "close",
    appearance: "white",
  },
};

export const UpIcon: Story = {
  args: {
    icon: "up",
    appearance: "primary",
  },
};
