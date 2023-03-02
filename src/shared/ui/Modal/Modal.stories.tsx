import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ut dolorum laboriosam placeat, labore dolorem explicabo, veritatis ipsa tempora corporis numquam? Ea modi natus sit fugit placeat distinctio voluptates dolorem?',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
};
