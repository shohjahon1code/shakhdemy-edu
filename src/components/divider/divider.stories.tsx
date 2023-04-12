import type { Meta, StoryObj } from '@storybook/react';
import Divider from './divider';

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider> ;

export const Primary: Story = {
  args: {
    title: 'Divider'
  },
};