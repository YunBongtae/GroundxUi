import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DotText from './DotText';

export default {
  title: 'DotText',
  component: DotText,
} as ComponentMeta<typeof DotText>;

const Template = (args) => <DotText {...args} />;


export const DefaultList = Template.bind({});
DefaultList.args = {
  children:'DefaultList 내용 입니다.'
};

export const blueList = Template.bind({});
blueList.args = {
  type:'blue',
  children:'blueList 내용 입니다.'
  
};

export const redList = Template.bind({});
redList.args = {
  type:'red',
  children:'redList 내용 입니다.'
};


