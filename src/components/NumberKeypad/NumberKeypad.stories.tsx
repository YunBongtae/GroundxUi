import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeypadType } from './numberKeypadInterface'

import {
  ColorSystem,
  FontSystem,
} from '../../styles/common'
import NumberKeypad from './NumberKeypad';

export default {
  title: 'normalNumberKeypad',
  component: NumberKeypad,
} as ComponentMeta<typeof NumberKeypad>;

const Template = (args) => <div className="width360"><NumberKeypad {...args} /></div>;

export const normalNumberKeypad = Template.bind({});
normalNumberKeypad.args = {
  buttonClick:(data)=>{return data},
  removeButtonClick:(data)=>{return data},
  type:KeypadType.NORMAL
};
export const otpNumberKeypad = Template.bind({});
otpNumberKeypad.args = {
  buttonClick:(data)=>{return data},
  removeButtonClick:(data)=>{return data},
  type:KeypadType.OTP
};


