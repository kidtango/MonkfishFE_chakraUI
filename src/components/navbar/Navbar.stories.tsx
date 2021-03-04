import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Navbar from './Navbar';

export default {
  title: 'Menus',
  component: Navbar,
} as Meta;

const Template: Story<any> = (args) => <Navbar {...args} />;

export const NavbarStory = Template.bind({});
NavbarStory.args = {};
