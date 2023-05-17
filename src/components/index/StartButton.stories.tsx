import StartButton from './StartButton';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'index/StartButton',
  component: StartButton,
} as Meta;

const Template = () => <StartButton />;

export const Default = Template.bind({});