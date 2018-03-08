import React from 'react';
import Header from './Header'
import Footer from './Footer'

const BasicLayout = (props) => {
  return (
    <div className="App">
      <Header />
      {props.content}
      <Footer />
    </div>
  );
}

export default BasicLayout;