import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { IconListPage } from './IconListPage';

export default {
  title: 'icon list',
  component: iconListPage,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <IconListPage {...args} />;

export const iconListPage = Template.bind({});


