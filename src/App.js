import React, { useState } from 'react';
import HeaderBlock from './components/headers/headers';
import FooterBlock from './components/footers/footers';
import ContentBlock from './components/contents/contents';
import MainPage from './pages/main';
import MyModal from './components/UI/Modal/MyModal';
import About from './pages/About';

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
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
    </div>
  );
}

export default App;
