import React from 'react';
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const UserMenu = () => {
  return (
    <Menu>
      <MenuButton aria-label='Options'>
        <Avatar
          name='Scott Tang'
          src='https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avatar-2-story.jpg'
          size='md'
        />
      </MenuButton>
      <MenuList
        border={0}
        boxShadow='lg'
        bg='primary.500'
        transition='all 0.1s'
        padding={1}
      >
        <MenuItem
          _hover={{ bg: 'primary.100' }}
          _focus={{ bg: 'primary.100' }}
          borderRadius={4}
        >
          Hello
        </MenuItem>
        <MenuItem
          _hover={{ bg: 'primary.100' }}
          _focus={{ bg: 'primary.100' }}
          borderRadius={4}
        >
          Hello
        </MenuItem>
        <MenuItem
          _hover={{ bg: 'primary.100' }}
          _focus={{ bg: 'primary.100' }}
          borderRadius={4}
        >
          Hello
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
