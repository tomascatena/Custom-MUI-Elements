import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomSwitch from './StyledCustomSwitch';
import React from 'react';

export default {
  title: 'UI/CustomSwitch',
  component: CustomSwitch,
} as ComponentMeta<typeof CustomSwitch>;

const Template: ComponentStory<typeof CustomSwitch> = (args) => <CustomSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  darkThemeTrackBackgroundColor: '#8796A5',
  lightThemeTrackBackgroundColor: '#aab4be',
  darkThemeSwitchThumbColor: '#003892',
  lightThemeSwitchThumbColor: '#001e3c',
  textColor: '#fff',
};
