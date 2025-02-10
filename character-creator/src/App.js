import React, { useState } from 'react';
import Controls from './components/Controls';
import Avatar from './components/Avatar';
import './App.css';  // optional for styling

function App() {
  const [hairStyle, setHairStyle] = useState('hair1');
  const [outfit, setOutfit] = useState('outfit1');
  const [hairColor, setHairColor] = useState('#000000'); // default black

  return (
    <div style={{ padding: '20px' }}>
      <h1>Basic 2D Character Creator</h1>

      {/* Controls */}
      <Controls
        hairStyle={hairStyle}
        setHairStyle={setHairStyle}
        outfit={outfit}
        setOutfit={setOutfit}
        hairColor={hairColor}
        setHairColor={setHairColor}
      />

      {/* Avatar */}
      <Avatar hairStyle={hairStyle} outfit={outfit} hairColor={hairColor} />
    </div>
  );
}

export default App;
