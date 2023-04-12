import type { Meta, StoryObj } from "@storybook/react";
import Input from "./input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextField: Story = {
  args: {
    placeholder: 'Placeholder'
  },
};

export const TextFieldError: Story = {
  args: {
    placeholder: 'Placeholder',
    error: {message: 'Field is required'},
  },
};