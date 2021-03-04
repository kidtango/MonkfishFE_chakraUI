import { useColorMode, Switch, chakra } from '@chakra-ui/react';

const ThemeSwitch = chakra(Switch, {
  baseStyle: {
    '.chakra-switch__thumb': {
      position: 'relative',
      scale: '125%',
      boxShadow: 'dark-lg',
      bg: 'primary.700',
    },
    '.css-1scwv4s': {
      bg: 'primary.100',
    },
    '.css-1v07vn5': {
      bg: 'primary.200',
    },
  },
});

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <ThemeSwitch
      colorScheme='primary'
      isChecked={isDark}
      onChange={toggleColorMode}
      size='lg'
    />
  );
};
