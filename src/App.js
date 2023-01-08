import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
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
import AboutPage from './pages/AboutPage';
import AppRouter from './components/appRouter';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const dispatch = useDispatch();
  const modalActive = useSelector(state => state.modal);
  const setModalActive = () => dispatch(setStateModal());

  const menuActive = useSelector(state => state.menu);
  const setMenuActive = () => dispatch(setStateMenu());

  return (
    <BrowserRouter>
      <ScrollToTop />
      {modalActive && <MyModal
          setVisible={setModalActive}
        >
          <AboutPage />
        </MyModal>
      }
      <HeaderBlock />
      {menuActive && <MyNavbar
        setVisible={setMenuActive}
        items={DataJSONMenu}
        subItems={DataJSONSubMenu}
      />
      }
      <ContentBlock>
        <AppRouter />
      </ContentBlock>
      <FooterBlock />
    </BrowserRouter>
  );
}

export default App;