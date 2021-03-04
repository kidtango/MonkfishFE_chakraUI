import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import ModdedIconButton from './ModdedIconButton';
import { HiOutlineBell, HiSearch } from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';
import { IconButtonProps } from '@chakra-ui/react';

export default {
  title: 'IconButtons',
  component: ModdedIconButton,
} as Meta;

const Template: Story<IconButtonProps> = (args) => (
  <ModdedIconButton {...args} />
);

export const NotificationButton = Template.bind({});
NotificationButton.args = {
  icon: <HiOutlineBell />,
};

export const SearchButton = Template.bind({});
SearchButton.args = {
  icon: <HiSearch />,
};

export const SettingButton = Template.bind({});
SettingButton.args = {
  icon: <AiOutlineSetting />,
};
