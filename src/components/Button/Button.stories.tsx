import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ButtonSizesValueTypes,
  ButtonTypes,
  ButtonSizes,
} from '../../styles/common'
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonTypes.Primary,
  size:ButtonSizes.Medium,
  children:'Primary 버튼'
};

export const PrimaryGradient = Template.bind({});
PrimaryGradient.args = {
  buttonType: ButtonTypes.PrimaryGradient,
  size:ButtonSizes.Medium,
  children:'PrimaryGradient 버튼'
  
};

export const PrimaryLine = Template.bind({});
PrimaryLine.args = {
  buttonType: ButtonTypes.PrimaryLine,
  size:ButtonSizes.Medium,
  children:'PrimaryLine 버튼'
};

export const PrimaryLineRound = Template.bind({});
PrimaryLineRound.args = {
  buttonType: ButtonTypes.PrimaryLineRound,
  size:ButtonSizes.Medium,
  children:'PrimaryLineRound 버튼'
};
export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: ButtonTypes.Secondary,
  size:ButtonSizes.Small,
  children:'Secondary 버튼'
};

export const SecondaryLine = Template.bind({});
SecondaryLine.args = {
  buttonType: ButtonTypes.SecondaryLine,
  size:ButtonSizes.Small,
  children:'SecondaryLine 버튼'
};
export const SecondaryLineRound = Template.bind({});
SecondaryLineRound.args = {
  buttonType: ButtonTypes.SecondaryLineRound,
  size:ButtonSizes.Small,
  children:'SecondaryLineRound 버튼'
};

export const Kakao = Template.bind({});
Kakao.args = {
  buttonType: ButtonTypes.Kakao,
  size:ButtonSizes.Medium,
  children:'Kakao 버튼'
};
