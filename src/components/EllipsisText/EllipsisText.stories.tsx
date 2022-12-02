import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ColorSystem,
  FontSystem,
} from '../../styles/common'
import EllipsisText from './EllipsisText';

export default {
  title: 'EllipsisText',
  component: EllipsisText,
} as ComponentMeta<typeof EllipsisText>;

const Template = (args) => <div className="width50"><EllipsisText {...args} /></div>;

export const defaulEllipsisText = Template.bind({});
defaulEllipsisText.args = {
  children:'말 줄임처리 입니다. 말 줄임처리 입니다. 말 줄임처리 입니다.'
};

export const EllipsisTextFont = Template.bind({});
EllipsisTextFont.args = {
  font:FontSystem.body20Bold,
  color:ColorSystem.gray100,
  children:' 말 줄임처리 입니다. 말 줄임처리 입니다. 말 줄임처리 입니다.'
};

export const EllipsisTextFontBottom = Template.bind({});
EllipsisTextFontBottom.args = {
  font:FontSystem.body20Bold,
  color:ColorSystem.gray100,
  children:' 말 줄임처리 입니다. 말 줄임처리 입니다. 말 줄임처리 입니다.',
  isBottom: true
};
