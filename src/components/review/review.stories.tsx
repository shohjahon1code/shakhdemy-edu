  import type { Meta, StoryObj } from "@storybook/react";
  import Review from "./review";

  const meta: Meta<typeof Review> = {
    title: "Review",
    component: Review,
  };

  export default meta;
  type Story = StoryObj<typeof Review>;

export const Model: Story = {
  render: ({ ...args }) => {
    const review = {
      _id: "625da7d8fa53c43fbx7e25e18",
      name: "Ibrohim",
      title: "It was really good skils",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa quae inventore vitae corrupti a cupiditate soluta illum incidunt eligendi!",
      rating: 5,
      productId: "602s37a279e11fc8bb43o6a63",
    };

    return <Review review={review} {...args} />;
  },
};
