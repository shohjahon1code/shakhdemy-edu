import type { Meta, StoryObj } from "@storybook/react";
import Sort from "./sort";
import { SortEnum } from "./sort.props";

const meta: Meta<typeof Sort> = {
  title: "Sort",
  component: Sort,
};

export default meta;
type Story = StoryObj<typeof Sort>;

export const Sorts: Story = {
  args: {
    sort: SortEnum.Rating,
  },
};
