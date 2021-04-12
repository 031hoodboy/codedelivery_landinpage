import React from 'react';
import Logo from './components/Logo';
import Client from './components/Client';
import PortfolioContent from './components/PortfolioContent';
// import Contact from './components/Client';
// import Footer from './components/Footer';


// #3036CD
const App =() => {
  return(
    <>
      <Logo/>
      <PortfolioContent/>
      <Client/>
     {/*<Contact/>
      <Footer/> */}
    </>
  );
}

export default App;
