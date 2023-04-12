import type {  Meta, StoryObj } from '@storybook/react';
import Advantages from './advantages';
import { AdvantageData } from '../../interface/page.interface';

const meta: Meta<typeof Advantages> = {
  title: 'Advantages',
  component: Advantages,
};

export default meta;
type Story = StoryObj<typeof Advantages>;

export const Advantage: Story = {
  render: ({ ...args }) => {
    const arr:AdvantageData[] = [
      {
        title: 'ReactJS class component',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
        id: '1',
      },
      {
        title: 'VueJS directive',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
        id: '2',
      },
      {
        title: 'NextJS Server Side Rendering',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
        id: '3',
      },
      {
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
        id: '4',
      },
    ]
    return (
      <Advantages advantages={arr} {...args} />
    );
  },
};