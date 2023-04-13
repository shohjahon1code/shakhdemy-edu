import type { Meta, StoryObj } from "@storybook/react";
import Search from "./search";

const meta: Meta<typeof Search> = {
  title: "Search",
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Searchs: Story = {
  args: {},
};
