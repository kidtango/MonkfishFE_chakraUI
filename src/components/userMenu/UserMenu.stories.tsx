import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import UserMenu from './UserMenu';

export default {
  title: 'Menus',
  component: UserMenu,
} as Meta;

const Template: Story<any> = (args) => <UserMenu {...args} />;

export const UserMenuStory = Template.bind({});
UserMenuStory.args = {};
