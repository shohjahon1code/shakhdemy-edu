import type { ComponentStory, Meta, StoryObj } from '@storybook/react';

import Button from './button';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    appearance: {
      type: 'string',
      description: 'Button color style',
      defaultValue: 'primary',
      options: ['primary', 'ghost', 'failure', 'success'],
      control: {
        type: 'select'
      }
    },
    size: {
      type: 'string',
      description: 'Button Size',
      defaultValue: 'm',
      options: ['m', 's', 'l'],
      control: {
        type: 'radio'
      }
    },
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'button',
    appearance: 'primary'
  },
};
export const Ghost: Story = {
  args: {
    children: 'button',
    appearance: 'ghost'
  },
};

export const Failure: Story = {
  args: {
    children: 'button',
    appearance: 'failure'
  },
};

export const Success: Story = {
  args: {
    children: 'button',
    appearance: 'success'
  },
};


export const Small: Story = {
  args: {
    children: 'button',
    appearance: 'primary',
    size: 's'
  },
};

export const Medium: Story = {
  args: {
    children: 'button',
    appearance: 'primary',
    size: 'm',

  },
};

export const Large: Story = {
  args: {
    children: 'button',
    appearance: 'primary',
    size: 'l'
  },
};

export const Arrow: ComponentStory<typeof Button> = ({ ...args }) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const toggleButton = () => setToggle(prev => !prev)
  return (
    <Button onClick={toggleButton} appearance='primary' arrow={toggle ? 'down' : 'right'} {...args}>Button</Button>
  )
}