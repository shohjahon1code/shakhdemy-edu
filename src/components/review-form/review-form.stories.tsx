import type { ComponentStory, Meta, StoryObj } from "@storybook/react";
import ReviewForm from "./review-form";
import Success from "./success";
import Error from "./error";

const meta: Meta<typeof ReviewForm> = {
  title: "ReviewForm",
  component: ReviewForm,
};

export default meta;
type Story = StoryObj<typeof ReviewForm>;

export const Form: Story = {
  args: {
    productId: "00",
  },
};

const SuccessTemplate: ComponentStory<typeof Success> = (arg) => (
  <Success {...arg} />
);
const ErrorTemplate: ComponentStory<typeof Error> = (arg) => <Error {...arg} />;

export const SuccessMsg = SuccessTemplate.bind({});

export const ErrorMsg = ErrorTemplate.bind({});
