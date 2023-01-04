import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStateModal } from './store/modalSlice';
import { setStateMenu } from './store/menuSlice';
import HeaderBlock from './components/headers/headers';
import FooterBlock from './components/footers/footers';
import ContentBlock from './components/contents/contents';
import MyModal from './components/UI/Modal/MyModal';
import MyNavbar from './components/UI/Navbar/Navbar';
import DataJSONMenu from './table/Menu.json';
import DataJSONSubMenu from './table/SubMenu.json';
import MainPage from './pages/main';
import UsefullArtificalPage from './pages/UsefullArtifical';
import SaladPage from './pages/CategoryMenu/Salad';
import SoupPage from './pages/CategoryMenu/Soup';
import VeganPage from './pages/CategoryMenu/Vegan';
import BakeryPage from './pages/CategoryMenu/Bakery';
import BeefPage from './pages/CategoryMenu/Beef';
import DessertsPage from './pages/CategoryMenu/Desserts';
import DrinkPage from './pages/CategoryMenu/Drink';
import FishPage from './pages/CategoryMenu/Fish';
import PicklesPage from './pages/CategoryMenu/Pickles';
import PorkPage from './pages/CategoryMenu/Pork';
import PoultryPage from './pages/CategoryMenu/Poultry';
import SnacksPage from './pages/CategoryMenu/Snacks';
import AboutPage from './pages/About';

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
        <AboutPage />
      </MyModal>
      <HeaderBlock />
      <MyNavbar
        visible={menuActive}
        setVisible={setMenuActive}
        items={DataJSONMenu}
        subItems={DataJSONSubMenu}
      />
      <ContentBlock>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/UsefullArtifical' element={<UsefullArtificalPage />} />
          <Route path='/Salad' element={<SaladPage />} />
          <Route path='/Soup' element={<SoupPage />} />
          <Route path='/Vegan' element={<VeganPage />} />
          <Route path='/Bakery' element={<BakeryPage />} />
          <Route path='/Beef' element={<BeefPage />} />
          <Route path='/Desserts' element={<DessertsPage />} />
          <Route path='/Drink' element={<DrinkPage />} />
          <Route path='/Fish' element={<FishPage />} />
          <Route path='/Pickles' element={<PicklesPage />} />
          <Route path='/Pork' element={<PorkPage />} />
          <Route path='/Poultry' element={<PoultryPage />} />
          <Route path='/Snacks' element={<SnacksPage />} />
          <Route path='/About' element={<AboutPage />} />
        </Routes>
      </ContentBlock>
      <FooterBlock />
    </BrowserRouter>
  );
}

export default App;