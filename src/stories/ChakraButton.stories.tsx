import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '@chakra-ui/react';

interface ButtonProps {
  size: string | any;
  variant: string;
  colorScheme: string;
}

const ChakraButton: React.FC<ButtonProps> = ({ size, variant, colorScheme
}) => {
  return (
    <Button variant={variant} size={size} colorScheme={colorScheme}>Hello</Button>
  );
};

export default {
  title: 'Example/Button',
  component: ChakraButton,
} as Meta;

const Template: Story<any> = (args) => <ChakraButton {...args} />;

export const ButtonChakra = Template.bind({});
ButtonChakra.args = {
  size: 'md',
  variant: 'solid',
  colorScheme: 'primary'
};

264653