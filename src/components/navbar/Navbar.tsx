import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { HiChevronDoubleRight } from 'react-icons/hi';
import ModdedIconButton from '../iconButtons/ModdedIconButton';
import { HiOutlineBell, HiSearch } from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';
import { IconButtonProps } from '@chakra-ui/react';
import UserMenu from '../userMenu/UserMenu';
import { DarkModeSwitch } from '../DarkModeSwitch';

const Navbar = () => {
  const borderBottomColor = useColorModeValue('gray.300', 'gray.700');
  return (
    <Box
      as='header'
      borderBottom='2px'
      borderColor={borderBottomColor}
      borderBottomWidth={1}
      width='100%'
    >
      <Flex align='center' p={3}>
        <Flex>
          <Box mr={2}>
            <IconButton
              aria-label='open sidebar menu'
              icon={<HiChevronDoubleRight />}
              variant='link'
              fontSize='x-large'
              colorScheme='primary'
            />
          </Box>
          {/* <Box>SearchBar</Box> */}
        </Flex>
        <Spacer />
        <Flex align='center'>
          <Box mr={3} mt={1}>
            <DarkModeSwitch />
          </Box>
          <Box mr={2}>
            <ModdedIconButton
              aria-label='Notifications'
              icon={<HiOutlineBell />}
              size='lg'
            />
          </Box>
          <Box mr={2}>
            <ModdedIconButton
              aria-label='Notifications'
              icon={<AiOutlineSetting />}
              size='lg'
            />
          </Box>
          <Box>
            <UserMenu />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
