import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const history = useHistory();

  const handleItemClick = (_, { name }) => {
    setActiveItem(name);
    history.push(`/${name}`);
  };

  return (
    <Menu icon="labeled" fixed="left" vertical>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      >
        <Icon name="home" />
        Home
      </Menu.Item>

      <Menu.Item
        name="user"
        active={activeItem === 'user'}
        onClick={handleItemClick}
      >
        <Icon name="user" />
        My books
      </Menu.Item>

      <Menu.Item
        name="library"
        active={activeItem === 'library'}
        onClick={handleItemClick}
      >
        <Icon name="book" />
        Library
      </Menu.Item>
    </Menu>
  );
};
