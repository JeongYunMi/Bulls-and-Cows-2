import SelectedNumberWrap from "./selectedNumberWrap";
import { Story, Meta } from '@storybook/react';
import { SelectedNumberProps } from '../../../types/content';

export default {
  title: 'game/SelectedNumberWrap',
  component: SelectedNumberWrap,
} as Meta;

const Template: Story<SelectedNumberProps> = (args) => <SelectedNumberWrap {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedNumber: "123",
  deleteHandler: () => {},
  sendButtonHandler: () => {},
};