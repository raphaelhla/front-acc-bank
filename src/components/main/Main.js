import React, { useState } from 'react';
import Content from '../content/Content';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './Main.css';

function Main() {
  const [selectedOption, setSelectedOption] = useState('Agencia');

  return (
    <div className="main-container">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        <Content selectedOption={selectedOption} />
      </div>
    </div>
  );
}

export default Main;