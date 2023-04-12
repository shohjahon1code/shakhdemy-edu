import type {  Meta, StoryObj } from '@storybook/react';
import Card from './card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes:{
    color: {
      type: 'string',
      defaultValue: 'primary',
      options: ['primary', 'white'],
      control: {
        type: 'select'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: 'card',
    color: 'primary'
  },
};

export const White: Story = {
  args: {
    children: 'card',
    color: 'white'
  },
};