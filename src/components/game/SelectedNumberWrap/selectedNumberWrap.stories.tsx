import SelectedNumberWrap from "./selectedNumberWrap";
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof SelectedNumberWrap> = {
  title: 'game/SelectedNumberWrap',
  component: SelectedNumberWrap,
  tags: ['autodocs'],
  argTypes: {
    selectedNumber: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    deleteHandler: {
      control: {
        type: 'function',
      },
      defaultValue: ()=>{},
    },
    sendButtonHandler: {
      control: {
        type: 'function',
      },
      defaultValue: ()=>{},
    },
  },
  parameters: {
    componentSubtitle: '선택된 숫자 컴포넌트 문서입니다.'
  }
};

export default meta;

type Story = StoryObj<typeof SelectedNumberWrap>;

export const option1: Story = {
  args: {
    selectedNumber: '123',
    sendButtonHandler: ()=>{},
    deleteHandler: () => {}
  },
};