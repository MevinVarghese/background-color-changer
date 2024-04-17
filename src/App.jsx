// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <header className="App-header">
        <h1>Background Color Changer</h1>
        <div className="color-buttons">
          <button onClick={() => handleColorChange('#FFFFFF')}>White</button>
          <button onClick={() => handleColorChange('#FF0000')}>Red</button>
          <button onClick={() => handleColorChange('#00FF00')}>Green</button>
          <button onClick={() => handleColorChange('#0000FF')}>Blue</button>
        </div>
      </header>
    </div>
  );
}

export default App;
