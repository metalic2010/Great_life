import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStateModal } from './store/modalSlice';
import { setStateMenu } from './store/menuSlice';
import HeaderBlock from './components/headers/headers';
import FooterBlock from './components/footers/footers';
import ContentBlock from './components/contents/contents';
import MainPage from './pages/main';
import MyModal from './components/UI/Modal/MyModal';
import About from './pages/About';
import MyNavbar from './components/UI/Navbar/Navbar';
import DataJSONMenu from './table/Menu.json';
import DataJSONSubMenu from './table/SubMenu.json';

function App() {
  const dispatch = useDispatch();
  const modalActive = useSelector(state => state.modal);
  const setModalActive = () => dispatch(setStateModal());
  
  const menuActive = useSelector(state => state.menu);
  const setMenuActive = () => dispatch(setStateMenu());

  return (
    <BrowserRouter>
      <MyModal
        visible={modalActive}
        setVisible={setModalActive}
      >
        <About />
      </MyModal>
      <HeaderBlock />
      <MyNavbar
        visible={menuActive}
        setVisible={setMenuActive}
        items={DataJSONMenu}
        subItems={DataJSONSubMenu}
      />
      <ContentBlock>
        <MainPage />
      </ContentBlock>
      <FooterBlock />
    </BrowserRouter>
  );
}

export default App;