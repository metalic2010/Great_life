import React from 'react';
import MenuBlock from './menuBlock';
import { handleClick } from '../../utils/handleClick';
import HeaderRightBlock from "./headerRightBlock";
import styled from 'styled-components'
import img from '../UI/Logo/Logo.svg';

const MyHeaders = styled.header`
  width: 100%;
  height: 88px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 5px rgba(151, 150, 150, 0.25);
  border-radius: 0px 0px 25px 25px;
  position: relative;
  z-index: 2;
`

const HeaderWorkBlockSite = styled.div`
  margin: 0 auto;
  height: 88px;
  width: 100vw;
  max-width: 1000px;
  display: flex;
  align-items: center;
`

const MyLogo = styled.div`
  box-sizing: border-box;
  width: 73px;
  height: 73px;
  background: url(${img});
  background-size: 73px 73px;
  background-repeat: no-repeat;
  border: 5px solid #FFFEFE;
  box-shadow: 5px 4px 4px 1px rgba(151, 150, 150, 0.25);
  border-radius: 100%;
  cursor: pointer;
  min-width: 73px;
`

const H1NameSite = styled.h1`
  min-width: 300px;
  padding: 0 10px;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 53px;
  display: flex;
  align-items: center;
`

function HeaderBlock({ setVisibleAbout }) {
  return (
    <MyHeaders>
      <HeaderWorkBlockSite>
        <MenuBlock />
        <MyLogo onClick={() => handleClick("/")}></MyLogo>
        <H1NameSite>Отличная жизнь</H1NameSite>
        <HeaderRightBlock />
      </HeaderWorkBlockSite>
    </MyHeaders>
  );
}

export default HeaderBlock;