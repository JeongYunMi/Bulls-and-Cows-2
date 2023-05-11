import React from 'react'
import { MenuBarWrap, IconsWrap, Linkbutton } from './MenuBar.style';
import Hamburger from '../assets/svg/Hamburger';

const MenuBar = () => {
  return (
    <MenuBarWrap>
      <IconsWrap><Hamburger/></IconsWrap>
      <IconsWrap>
        <Linkbutton href='/'>Game</Linkbutton>
      </IconsWrap>
      <IconsWrap>
        <Linkbutton href='/ranking'>Rank</Linkbutton>
      </IconsWrap>
    </MenuBarWrap>
  )
}

export default MenuBar;