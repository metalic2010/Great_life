import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStateModal } from './store/modalSlice';
import HeaderBlock from './components/headers/headers';
import FooterBlock from './components/footers/footers';
import ContentBlock from './components/contents/contents';
import MainPage from './pages/main';
import MyModal from './components/UI/Modal/MyModal';
import About from './pages/About';

function App() {
  const modalDispatch = useDispatch();
  const modalActive = useSelector(state => state.modal);
  const setModalActive = () => modalDispatch(setStateModal());
  
  return (
    <BrowserRouter>
      <MyModal
        visible={modalActive}
        setVisible={setModalActive}
      >
        <About />
      </MyModal>
      <HeaderBlock />
      <ContentBlock>
        <MainPage />
      </ContentBlock>
      <FooterBlock />
    </BrowserRouter>
  );
}

export default App;