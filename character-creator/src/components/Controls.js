import React from 'react';

function Controls({ hairStyle, setHairStyle, outfit, setOutfit, hairColor, setHairColor }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div>
        <label>Hair Style: </label>
        <select value={hairStyle} onChange={(e) => setHairStyle(e.target.value)}>
          <option value="hair1">Hair 1</option>
          <option value="hair2">Hair 2</option>
        </select>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Outfit: </label>
        <select value={outfit} onChange={(e) => setOutfit(e.target.value)}>
          <option value="outfit1">Outfit 1</option>
          <option value="outfit2">Outfit 2</option>
        </select>
      </div>

      {/* Optional: Hair color picker */}
      <div style={{ marginTop: '10px' }}>
        <label>Hair Color: </label>
        <input 
          type="color" 
          value={hairColor} 
          onChange={(e) => setHairColor(e.target.value)} 
          style={{ width: '50px', height: '30px', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default Controls;
