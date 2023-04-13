import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./text-area";

const meta: Meta<typeof TextArea> = {
  title: "TextArea",
  component: TextArea,
  
};

export default meta;
type Story = StoryObj<typeof TextArea>;


export const TextAreComp:Story = {
  args:{
    placeholder:'Placeholder'
  }
}