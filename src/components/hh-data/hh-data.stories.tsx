import type { Meta, StoryObj } from "@storybook/react";
import HhData from "./hh-data";
import { HHData } from "../../interface/page.interface";

const meta: Meta<typeof HhData> = {
  title: "HhData",
  component: HhData,
  argTypes: {
    juniorSalary: {
      type: "number",
    },
    middleSalary: {
      type: "number",
    },
    seniorSalary: {
      type: "number",
    },
    count: {
      type: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HhData>;

export const HHDatas: Story = {
  render: ({ ...args }) => {
    const obj: HHData = {
      count: 1200,
      juniorSalary: 600,
      middleSalary: 1200,
      seniorSalary: 1800,
    };
    return (
      <HhData
        count={obj.count}
        juniorSalary={obj.juniorSalary}
        middleSalary={obj.middleSalary}
        seniorSalary={obj.seniorSalary}
      />
    );
  },
};
