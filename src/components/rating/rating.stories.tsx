import type { Meta, StoryObj } from "@storybook/react";
import Rating from "./rating";
import { useState } from "react";

const meta: Meta<typeof Rating> = {
  title: "Rating",
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Module: Story = {
  render: ({ ...props }) => {
    return <Rating rating={4} {...props} />;
  },
};

export const Editable: Story = {
  render: ({ ...props }) => {
    const [rating, setRating] = useState<Number>(3);
    return (
      <Rating rating={rating} {...props} setRating={setRating} isEditable />
    );
  },
};

export const Error: Story = {
  render: ({ ...props }) => {
    const [rating, setRating] = useState<Number>(3);
    return (
      <Rating
        rating={0}
        {...props}
        error={{ message: "Field is requered", type: "", ref: null }}
        setRating={setRating}
      />
    );
  },
};
