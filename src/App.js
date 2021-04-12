import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Client from './components/Client';
// import Contact from './components/Client';
// import Footer from './components/Footer';
import Logo from './components/Logo';

const GlobalStyle = createGlobalStyle`
  body {
    
  }
`;

// #3036CD
const App =() => {
  return(
    <>
      <GlobalStyle/>
      <Logo/>
      <Client/>
     {/*<Contact/>
      <Footer/> */}
    </>
  );
}

export default App;
