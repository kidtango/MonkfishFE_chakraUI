import {
  IconButton,
  useColorModeValue,
  IconButtonProps,
} from '@chakra-ui/react';
import React from 'react';

const ModdedIconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  const svgColor = useColorModeValue('primary.300', 'primary.100');
  const buttonBg = useColorModeValue('primary.50', 'primary.700');
  const buttonBgHover = useColorModeValue('primary.100', 'primary.400');
  const svgColorHover = useColorModeValue('primary.500', 'primary.100');

  return (
    <IconButton
      {...props}
      isRound
      fontSize={25}
      icon={icon}
      bg={buttonBg}
      textColor={svgColor}
      _hover={{ bg: buttonBgHover, svg: { color: svgColorHover } }}
    />
  );
};

export default ModdedIconButton;
